const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    group: Group!
    cardHolder(id: ID!): CardHolder
  }

  scalar DateTime

  interface Node {
    id: ID!
  }

  interface Account {
    balance: Int!
  }

  type Group implements Node {
    id: ID!
    cardHolders: [CardHolder!]!
    admins: [GroupAdmin!]!
    fundingSources: [FundingSource!]!
    fundingRules: [FundingRule!]!
    fundingAccount: GroupFundingAccount!
  }

  """The bank account debit card used for transferring money to cardholders."""
  type FundingSource implements Node & TransactionSource {
    id: ID!
    address: Address
    createdBy: GroupAdmin
    transfers: [FundTransfer!]!
  }

  """The group's wallet that holds a balance to be transferred to a sub-account."""
  union GroupFundTransfer = FundTransfer | FundDistribution
  type GroupFundingAccount implements Node & Account & TransactionSource & TransactionDestination {
    id: ID!
    balance: Int!
    transactions: [GroupFundTransfer!]!
  }

  # Users
  """
  The User interface will be implemented by the various user types. i.e. group admins and cardholders
  """
  interface User {
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
    group: Group
  }
  
  enum GroupAdminUserRole {
    OWNER
    FUNDER
    APPROVER
  }
  type GroupAdminUser implements Node & User & GroupAdmin {
    id: ID!
    address: Address
    createdAt: DateTime!
    fundingSources: [FundingSource!]!
    devices: [Device!]!
    updatedAt: DateTime!
    group: Group
    userName: String!
    fundingRules: [FundingRule!]!
    roles: [GroupAdminUserRole]
  }

  type FinancialInstitution implements Node & GroupAdmin {
    id: ID!
    name: String!
    fundingSources: [FundingSource!]!
  }

  """A group admin can be either a GroupAdminUser or a FinancialInstitution"""
  interface GroupAdmin {
    fundingSources: [FundingSource!]!
  }

  type CardHolder implements Node & User {
    id: ID!
    fundingRules: [FundingRule!]!
    group: Group
    accounts: [CardAccount!]!
    transactions: [Transaction]
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
  }

  # Card
  """
  A CardAccount is an entity that holds a balance of money for the CardHolder. In this case, it could be a savings account, spending account, etc.
  """
  interface CardAccount {
    id: ID!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type CardSavingsAccount implements Node & Account & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type CardDonationAccount implements Node & Account & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    charity: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }
  type CardSpendingAccount implements Node & Account & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    nameOfStore: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction!]!
    rule: SpendingRule!
  }
  type SpendingRule implements Node {
    id: ID!
  }
  """The location where a card can be used"""
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
  A FundingRule is what determines how money goes from a FundingSource to a CardHolder. i.e. allowances, chores, etc.
  """
  interface FundingRule {
    id: ID!
    cardHolder: CardHolder
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: GroupAdmin!
  }
  
  type Chore implements Node & FundingRule & TransactionSource {
    id: ID!
    cardHolder: CardHolder
    recurrence: TransferRecurrenceType!
    transfers: [FundDistribution!]!
    createdBy: GroupAdmin!
  }

  type Allowance implements Node & FundingRule & TransactionSource {
    id: ID!
    amount: Float!
    recurrence: TransferRecurrenceType!
    cardHolder: CardHolder
    transfers: [FundDistribution!]!
    createdBy: GroupAdmin!
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
  union TransactionInitiator = FinancialInstitution | GroupAdminUser | CardHolder
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
    source: CardSpendingAccount!
    destination: Store!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: CardHolder!
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
  A FundTransfer is a transfer of money from a FundingSource to a GroupFundingAccount.
  """
  type FundTransfer implements Node & Transaction {
    id: ID!
    source: FundingSource!
    destination: GroupFundingAccount!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: GroupAdminUser!
  }

  """
  A FundDistribution is a transfer of money from a GroupFundingAccount to a CardAccount.
  """
  type FundDistribution implements Node & Transaction {
    id: ID!
    source: GroupFundingAccount!
    destination: TransactionDestination!
    transactionDate: DateTime!
    description: String!
    amount: Int!
    initiatedBy: GroupAdminUser!
    rule: FundingRule!
  }

  type Device implements Node {
    id: ID!
    user: User
  }
  type Address {
    city: String!
    fundingSource: FundingSource
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
