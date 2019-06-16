const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    group: Group!
  }

  scalar DateTime

  interface Node {
    id: ID!
  }

  enum TransferRecurrenceType {
    ONE_TIME
    WEEKLY
    MONTHLY
  }
  """
  A FundingRule is what determines how money goes from a GroupAdmin to a CardHolder. i.e. allowances, chores, etc.
  """
  interface FundingRule {
    id: ID!
    cardHolder: CardHolder
    recurrence: TransferRecurrenceType!
    transfers: [FundTransfer!]!
    createdBy: GroupAdmin!
  }
  type Chore implements Node & FundingRule & TransactionSource {
    id: ID!
    cardHolder: CardHolder
    recurrence: TransferRecurrenceType!
    transfers: [FundTransfer!]!
    createdBy: GroupAdmin!
  }

  type Allowance implements Node & FundingRule & TransactionSource {
    id: ID!
    amount: Float!
    recurrence: TransferRecurrenceType!
    cardHolder: CardHolder
    transfers: [FundTransfer!]!
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
  interface Transaction {
    id: ID!
    transactionDate: DateTime!
    source: TransactionSource!
    destination: TransactionDestination!
    cardHolder: CardHolder
    description: String!
    amount: Int!
  }
  type ExternalTransaction implements Node & Transaction {
    id: ID!
    source: TransactionSource!
    destination: Store!
    transactionDate: DateTime!
    cardHolder: CardHolder
    description: String!
    amount: Int!
  }
  """
  A FundTransfer is a transaction among CardAccounts and TransferRules
  """
  type FundTransfer implements Node & Transaction {
    id: ID!
    source: FundingAccount!
    destination: TransactionDestination!
    transactionDate: DateTime!
    cardHolder: CardHolder
    description: String!
    amount: Int!
    rule: FundingRule!
  }

  type FundingAccount implements Node & TransactionSource {
    id: ID!
    address: Address
    createdBy: GroupAdmin
    transfers: [FundTransfer!]!
  }

  type Group implements Node {
    id: ID!
    cardHolders: [CardHolder!]!
    admins: [GroupAdmin!]!
    partner: Partner
    fundingAccounts: [FundingAccount!]!
    fundingRules: [FundingRule!]!
  }

  enum GroupAdminRole {
    OWNER
    FUNDER
    APPROVER
  }
  
  type GroupAdmin implements Node & User {
    id: ID!
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    group: Group
    userName: String!
    fundingRules: [FundingRule!]!
    roles: [GroupAdminRole]
  }


  type Partner implements Node {
    id: ID!
    groups: [Group!]!
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

  interface CardAccount {
    id: ID!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type CardSavingsAccount implements Node & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type CardDonationAccount implements Node & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    charity: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type CardSpendingAccount implements Node & CardAccount & TransactionSource & TransactionDestination {
    id: ID!
    nameOfStore: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction!]!
  }
  type Store implements Node & TransactionDestination {
    id: ID!
    name: String!
  }

  interface User {
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
    group: Group
  }
  type Device implements Node {
    id: ID!
    user: User
  }
  type Address {
    city: String!
    fundingAccount: FundingAccount
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
