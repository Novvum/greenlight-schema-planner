const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    Partner: Partner
  }

  scalar DateTime

  type Address {
    city: String!
    fundingAccount: FundingAccount
    id: ID!
    user: User
  }

  type Payout implements Transaction {
    id: ID!
    storeDestination: String!
    cardHolder: CardHolder
    transactionDescription: String!
    amount: Int!
    ruleDestination: Rule!
  }

  type Allowance {
    allowanceAmount: Float!
    cardHolder: User
    id: ID!
    payouts: [Payout!]!
    owner: Owner!
  }

  type Approver {
    id: ID!
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
    group: Group
  }

  type CardHolder implements User {
    allowance: Allowance
    chores: [Chore]
    group: Group
    id: ID!
    rules: [Rule!]!
    transactions: [Transaction]
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
  }

  enum ChoreRecurrenceType {
    ONE_TIME
    WEEKLY
  }

  type Chore {
    cardHolder: CardHolder
    recurrence: ChoreRecurrenceType
    payouts: [Payout]
    id: ID!
    owner: Owner!
  }

  type Device {
    id: ID!
    user: User
  }

  type Funder implements User {
    fundingAccounts: [FundingAccount!]!
    id: ID!
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    userName: String!
    group: Group
  }

  type FundingAccount {
    address: Address
    funder: Funder
    id: ID!
  }

  type Group {
    cards: [CardHolder!]!
    id: ID!
    owners: [Owner!]!
    partner: Partner
  }

  type Owner implements User {
    id: ID!
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    updatedAt: DateTime!
    group: Group
    userName: String!
    chores: [Chore]
    allowances: [Allowance]
  }

  type Partner {
    groups: [Group!]!
    id: ID!
  }

  interface Rule {
    cardHolder: CardHolder
    balance: Int!
    id: ID!
    transactions: [Transaction]
  }

  type SaveRule implements Rule {
    id: ID!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type GiveRule implements Rule {
    id: ID!
    charity: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type SpendRule implements Rule {
    id: ID!
    nameOfStore: String!
    cardHolder: CardHolder
    balance: Int!
    transactions: [Transaction]
  }

  type ExternalTransaction implements Transaction {
    id: ID!
    storeDestination: String!
    cardHolder: CardHolder
    transactionDescription: String!
    amount: Int!
  }

  type InternalTransaction implements Transaction {
    id: ID!
    ruleDestination: Rule!
    cardHolder: CardHolder
    transactionDescription: String!
    amount: Int!
  }

  interface Transaction {
    id: ID!
    cardHolder: CardHolder
    transactionDescription: String!
    amount: Int!
  }

  interface User {
    address: Address
    createdAt: DateTime!
    devices: [Device!]!
    id: ID!
    updatedAt: DateTime!
    userName: String!
    group: Group
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
