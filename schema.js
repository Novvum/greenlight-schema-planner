const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    family: Family!
    child(id: ID!): Child
  }

  scalar DateTime

  interface Node {
    id: ID!
  }

  interface Account {
    balance: Int!
  }

  type Family implements Node {
    id: ID!
    children: [Child!]!
    parents: [FamilyAdmin!]!
    fundingRules: [FundingRule!]!
    fundingAccount: FamilyFundingAccount!
  }

  """
  The bank account debit Greenlight used for transferring money to children.
  """
  type FundingSource implements Node & TransactionSource {
    id: ID!
    address: Address
    createdBy: FamilyAdmin
    transfers: [FundTransfer!]!
  }

  """
  The Family's wallet that holds a balance to be transferred to a sub-account.
  """
  union FamilyFundTransfer = FundTransfer | FundDistribution
  type FamilyFundingAccount implements Node & Account & TransactionSource & TransactionDestination {
    id: ID!
    balance: Int!
    transactions: [FamilyFundTransfer!]!
  }

  # Users
  """
  The User interface will be implemented by the various user types. i.e. Family, parents, and children
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
  type Parent implements Node & User & FamilyAdmin {
    id: ID!
    address: Address
    createdAt: DateTime!
    fundingSources: [FundingSource!]!
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
    fundingSources: [FundingSource!]!
  }

  """
  A Family FamilyAdmin can be either a Parent or a FinancialInstitution
  """
  interface FamilyAdmin {
    fundingSources: [FundingSource!]!
  }

  type Child implements Node & User {
    id: ID!
    fundingRules: [FundingRule!]!
    family: Family
    accounts: [GreenlightAccount!]!
    transactions: [Transaction]
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
  }

  # Greenlight
  """
  A GreenlightAccount is an entity that holds a balance of money for the Child. In this case, it could be a savings account, spending account, etc.
  """
  interface GreenlightAccount {
    id: ID!
    child: Child
    balance: Int!
    transactions: [Transaction]
  }

  type GreenlightSavingsAccount implements Node & Account & GreenlightAccount & TransactionSource & TransactionDestination {
    id: ID!
    child: Child
    balance: Int!
    transactions: [Transaction]
  }

  type GreenlightDonationAccount implements Node & Account & GreenlightAccount & TransactionSource & TransactionDestination {
    id: ID!
    charity: String!
    child: Child
    balance: Int!
    transactions: [Transaction]
  }
  type GreenlightSpendingAccount implements Node & Account & GreenlightAccount & TransactionSource & TransactionDestination {
    id: ID!
    nameOfStore: String!
    child: Child
    balance: Int!
    transactions: [Transaction!]!
    rule: SpendingRule!
  }
  type SpendingRule implements Node {
    id: ID!
  }
  """
  The location where a Greenlight can be used
  """
  type Store implements Node & TransactionDestination {
    id: ID!
    name: String!
  }

  enum TransferRecurrenceType {
    ONE_TIME
    WEEKLY
    MONTHLY
  }

  """
  A FundingRule is what determines how money goes from a FundingSource to a Child. i.e. allowances, chores, etc.
  """
  interface FundingRule {
    id: ID!
    child: Child
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  type Chore implements Node & FundingRule & TransactionSource {
    id: ID!
    child: Child
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  type Allowance implements Node & FundingRule & TransactionSource {
    id: ID!
    amount: Float!
    recurrence: TransferRecurrenceType!
    child: Child
    transfers: [FundDistribution!]!
    createdBy: FamilyAdmin!
  }

  """
  Any type that implements this interface indicates that it can be the source of a transaction.
  """
  interface TransactionSource {
    id: ID!
  }

  """
  Any type that implements this interface indicates that it can be the destination of a transaction.
  """
  interface TransactionDestination {
    id: ID!
  }
  union TransactionInitiator = FinancialInstitution | Parent | Child
  interface Transaction {
    id: ID!
    transactionDate: DateTime!
    source: TransactionSource!
    destination: TransactionDestination!
    description: String!
    amount: Int!
    initiatedBy: TransactionInitiator!
  }
  type ExternalTransaction implements Node & Transaction {
    id: ID!
    source: GreenlightSpendingAccount!
    destination: Store!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: Child!
  }
  """
  An InternalTransfer is a transfer of money from a one Account to another.
  """
  type InternalTransfer implements Node & Transaction {
    id: ID!
    source: TransactionSource!
    destination: TransactionDestination!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: TransactionInitiator!
  }
  """
  A FundTransfer is a transfer of money from a FundingSource to a FamilyFundingAccount.
  """
  type FundTransfer implements Node & Transaction {
    id: ID!
    source: FundingSource!
    destination: FamilyFundingAccount!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: Parent!
  }

  """
  A FundDistribution is a transfer of money from a FamilyFundingAccount to a GreenlightAccount.
  """
  type FundDistribution implements Node & Transaction {
    id: ID!
    source: FamilyFundingAccount!
    destination: TransactionDestination!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: Parent!
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
