const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    family: Family!
    child(id: ID!): ChildUser
  }

  scalar DateTime

  interface Node {
    id: ID!
  }

  type Family implements Node {
    id: ID!
    children: [ChildUser!]!
    admins: [FamilyAdmin!]!
    fundingRules: [FundingRule!]!
  }

  """
  The bank account debit Greenlight used for transferring money to children.
  """
  type ExternalFundingAccount implements Node & FundingAccount {
    id: ID!
    address: Address
    createdBy: FamilyAdmin
    transfers: [ExternalFundingAccountTransfer!]!
  }

  """
  The Family's wallet that holds a balance to be transferred to a sub-account.
  """
  union ParentFundTransfer = ExternalFundingAccountTransfer | FundDistribution
  type ParentWallet implements Node & FundingAccount {
    id: ID!
    balance: Int!
    transactions: [ParentFundTransfer!]!
  }

  # Users
  """
  The User interface will be implemented by the various user types. i.e. Family, admins, and children
  """
  interface User {
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
    family: Family
  }

  enum ParentRole {
    OWNER
    FUNDER
    APPROVER
  }
  type ParentUser implements Node & User & FamilyAdmin {
    id: ID!
    address: Address
    createdAt: DateTime!
    externalFundingAccounts: [ExternalFundingAccount!]!
    wallet: ParentWallet
    devices: [Device!]!
    updatedAt: DateTime!
    family: Family
    userName: String!
    fundingRules: [FundingRule!]!
    roles: [ParentRole]
  }

  type FinancialInstitution implements Node & FamilyAdmin {
    id: ID!
    name: String!
    externalFundingAccounts: [ExternalFundingAccount!]!
  }

  """
  A Family FamilyAdmin can be either a ParentUser or a FinancialInstitution
  """
  interface FamilyAdmin {
    externalFundingAccounts: [ExternalFundingAccount!]!
  }

  type ChildUser implements Node & User {
    id: ID!
    fundingRules: [FundingRule!]!
    family: Family
    account: GreenlightAccount!
    transactions: [Transaction]
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
  }

  # Greenlight
  """
  A GreenlightAccount is an entity that holds a balance of money for the ChildUser. In this case, it could be a savings account, spending account, etc.
  """
  type GreenlightAccount implements Node {
    id: ID!
    child: ChildUser
    spend: SpendSubAccount
    save: SaveSubAccount
    give: GiveSubAccount
    earn: EarnSubAccount
    invest: InvestSubAccount
  }

  interface SubAccount {
    greenlightAccount: GreenlightAccount!
    balance: Int!
    transactions: [Transaction]
  }

  type SaveSubAccount implements Node & SubAccount & FundingAccount {
    id: ID!
    child: ChildUser
    balance: Int!
    transactions: [Transaction]
    greenlightAccount: GreenlightAccount!
    goals: [SavingsGoal]
    interestRate: Float!
  }

  type GiveSubAccount implements Node & SubAccount & FundingAccount {
    id: ID!
    child: ChildUser
    balance: Int!
    transactions: [Transaction]
    rules: [GreenlightRule!]!
    greenlightAccount: GreenlightAccount!
  }
  type SpendSubAccount implements Node & SubAccount & FundingAccount {
    id: ID!
    child: ChildUser
    balance: Int!
    transactions: [Transaction!]!
    rules: [SpendGreenlightRule!]!
    greenlightAccount: GreenlightAccount!
  }
  type EarnSubAccount implements Node & SubAccount & FundingAccount {
    id: ID!
    child: ChildUser
    balance: Int!
    transactions: [Transaction]
    greenlightAccount: GreenlightAccount!
  }
  type InvestSubAccount implements Node & SubAccount & FundingAccount {
    id: ID!
    child: ChildUser
    balance: Int!
    transactions: [Transaction]
    greenlightAccount: GreenlightAccount!
  }

  enum GreenlightRuleName {
    ANYWHERE
    GAS
    ATM
    RESTAURANT
    CUSTOM
    GIVE
  }

  enum ChangeOption {
    STAY
    SAVINGS
    RETURN
  }

  interface GreenlightRule {
    id: ID!
    name: [GreenlightRuleName!]!
    balance: Int!
  }

  interface Attribute {
    name: String
  }

  type StringAttribute implements Attribute {
    name: String
    value: String
  }

  type IntAttribute implements Attribute {
    name: String
    value: Int
  }

  type BooleanAttribute implements Attribute {
    name: String
    value: Boolean
  }

  type SpendGreenlightRule implements Node & GreenlightRule {
    id: ID!
    sub_account: SpendSubAccount!
    name: [GreenlightRuleName!]!
    balance: Int!
    overages: Boolean
    changeOptions: [ChangeOption]
    options: [Attribute]
  }

  type SavingsGoal implements Node {
    id: ID!
    name: String!
    balance: Int!
    goalAmount: Int!
  }

  # type GiveGreenlightRule implements Node & GreenlightRule {
  #   id: ID!
  #   charity: String!
  #   balance: Int!
  # }

  type FundingRequest implements Node & Transaction {
    id: ID!
    transactionDate: DateTime!
    source: FundingAccount!
    destination: FundingAccount!
    description: String!
    amount: Int!
    initiatedBy: ChildUser!
  }
  """
  The location where a Greenlight can be used
  """
  type PaymentRecipient implements Node & FundingAccount {
    id: ID!
    name: String!
  }

  enum TransferRecurrenceType {
    ONE_TIME
    WEEKLY
    MONTHLY
  }

  """
  A FundingRule is what determines how money goes from a ExternalFundingAccount to a ChildUser. i.e. allowances, chores, etc.
  """
  interface FundingRule {
    id: ID!
    child: ChildUser
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  type Chore implements Node & FundingRule & FundingAccount {
    id: ID!
    child: ChildUser
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  type Allowance implements Node & FundingRule & FundingAccount {
    id: ID!
    amount: Float!
    recurrence: TransferRecurrenceType!
    child: ChildUser
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  """
  Any type that implements this interface indicates that it can be either the source or destination of a transaction.
  """
  interface FundingAccount {
    id: ID!
  }

  union TransactionInitiator = FinancialInstitution | ParentUser | ChildUser
  interface Transaction {
    id: ID!
    transactionDate: DateTime!
    source: FundingAccount!
    destination: FundingAccount!
    description: String!
    amount: Int!
    initiatedBy: TransactionInitiator!
  }
  type ExternalPayment implements Node & Transaction {
    id: ID!
    source: SpendSubAccount!
    destination: PaymentRecipient!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: ChildUser!
  }
  """
  An SubAccountTransfer is a transfer of money from a o to another.
  """
  type SubAccountTransfer implements Node & Transaction {
    id: ID!
    source: FundingAccount!
    destination: FundingAccount!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: TransactionInitiator!
  }
  """
  A ExternalFundingAccountTransfer is a transfer of money between a ExternalFundingAccount and a ParentWallet.
  """
  type ExternalFundingAccountTransfer implements Node & Transaction {
    id: ID!
    source: FundingAccount!
    destination: FundingAccount!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: ParentUser!
  }

  """
  A FundDistribution is a transfer of money from a ParentWallet to a SubAccount.
  """
  type FundDistribution implements Node & Transaction {
    id: ID!
    source: FundingAccount!
    destination: FundingAccount!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: ParentUser!
    rule: FundingRule!
  }

  type Device implements Node {
    id: ID!
    user: User
  }
  type Address {
    city: String!
    user: User
  }
  schema {
    query: Query
  }
`;

const resolvers = {};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
