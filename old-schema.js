const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = gql`
type Query{
	Partner(id:ID) : Partner
}

input AddressFilter{
	AND : [AddressFilter!]
	OR : [AddressFilter!]
	city : String
	city_not : String
	city_in : [String!]
	city_not_in : [String!]
	city_lt : String
	city_lte : String
	city_gt : String
	city_gte : String
	city_contains : String
	city_not_contains : String
	city_starts_with : String
	city_not_starts_with : String
	city_ends_with : String
	city_not_ends_with : String
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	fundingAccount : FundingAccountFilter
	user : UserFilter
}

input FundingAccountFilter{
	AND : [FundingAccountFilter!]
	OR : [FundingAccountFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	address : AddressFilter
	funder : FunderFilter
}

input FunderFilter{
	AND : [FunderFilter!]
	OR : [FunderFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	fundingAccounts_every : FundingAccountFilter
	fundingAccounts_some : FundingAccountFilter
	fundingAccounts_none : FundingAccountFilter
	user : UserFilter
}

input UserFilter{
	AND : [UserFilter!]
	OR : [UserFilter!]
	createdAt : DateTime
	createdAt_not : DateTime
	createdAt_in : [DateTime!]
	createdAt_not_in : [DateTime!]
	createdAt_lt : DateTime
	createdAt_lte : DateTime
	createdAt_gt : DateTime
	createdAt_gte : DateTime
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	updatedAt : DateTime
	updatedAt_not : DateTime
	updatedAt_in : [DateTime!]
	updatedAt_not_in : [DateTime!]
	updatedAt_lt : DateTime
	updatedAt_lte : DateTime
	updatedAt_gt : DateTime
	updatedAt_gte : DateTime
	userName : String
	userName_not : String
	userName_in : [String!]
	userName_not_in : [String!]
	userName_lt : String
	userName_lte : String
	userName_gt : String
	userName_gte : String
	userName_contains : String
	userName_not_contains : String
	userName_starts_with : String
	userName_not_starts_with : String
	userName_ends_with : String
	userName_not_ends_with : String
	address : AddressFilter
	approver : ApproverFilter
	card : CardFilter
	devices_every : DeviceFilter
	devices_some : DeviceFilter
	devices_none : DeviceFilter
	funder : FunderFilter
	owner : OwnerFilter
	preferences : PreferencesFilter
}

scalar DateTime

input ApproverFilter{
	AND : [ApproverFilter!]
	OR : [ApproverFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

input CardFilter{
	AND : [CardFilter!]
	OR : [CardFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	allowance : AllowanceFilter
	chores_every : ChoreFilter
	chores_some : ChoreFilter
	chores_none : ChoreFilter
	group : GroupFilter
	spendingRules_every : SpendingRuleFilter
	spendingRules_some : SpendingRuleFilter
	spendingRules_none : SpendingRuleFilter
	transactions_every : TransactionFilter
	transactions_some : TransactionFilter
	transactions_none : TransactionFilter
	user : UserFilter
}

input AllowanceFilter{
	AND : [AllowanceFilter!]
	OR : [AllowanceFilter!]
	allowanceAmount : Float
	allowanceAmount_not : Float
	allowanceAmount_in : [Float!]
	allowanceAmount_not_in : [Float!]
	allowanceAmount_lt : Float
	allowanceAmount_lte : Float
	allowanceAmount_gt : Float
	allowanceAmount_gte : Float
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	card : CardFilter
	spendingRules_every : SpendingRuleFilter
	spendingRules_some : SpendingRuleFilter
	spendingRules_none : SpendingRuleFilter
}

input SpendingRuleFilter{
	AND : [SpendingRuleFilter!]
	OR : [SpendingRuleFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	allowance : AllowanceFilter
	card : CardFilter
}

input ChoreFilter{
	AND : [ChoreFilter!]
	OR : [ChoreFilter!]
	choreDescription : String
	choreDescription_not : String
	choreDescription_in : [String!]
	choreDescription_not_in : [String!]
	choreDescription_lt : String
	choreDescription_lte : String
	choreDescription_gt : String
	choreDescription_gte : String
	choreDescription_contains : String
	choreDescription_not_contains : String
	choreDescription_starts_with : String
	choreDescription_not_starts_with : String
	choreDescription_ends_with : String
	choreDescription_not_ends_with : String
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	card : CardFilter
}

input GroupFilter{
	AND : [GroupFilter!]
	OR : [GroupFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	cards_every : CardFilter
	cards_some : CardFilter
	cards_none : CardFilter
	owner : OwnerFilter
	partner : PartnerFilter
}

input OwnerFilter{
	AND : [OwnerFilter!]
	OR : [OwnerFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	group : GroupFilter
	user : UserFilter
}

input PartnerFilter{
	AND : [PartnerFilter!]
	OR : [PartnerFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	groups_every : GroupFilter
	groups_some : GroupFilter
	groups_none : GroupFilter
}

input TransactionFilter{
	AND : [TransactionFilter!]
	OR : [TransactionFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	transactionDescription : String
	transactionDescription_not : String
	transactionDescription_in : [String!]
	transactionDescription_not_in : [String!]
	transactionDescription_lt : String
	transactionDescription_lte : String
	transactionDescription_gt : String
	transactionDescription_gte : String
	transactionDescription_contains : String
	transactionDescription_not_contains : String
	transactionDescription_starts_with : String
	transactionDescription_not_starts_with : String
	transactionDescription_ends_with : String
	transactionDescription_not_ends_with : String
	card : CardFilter
}

input DeviceFilter{
	AND : [DeviceFilter!]
	OR : [DeviceFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

input PreferencesFilter{
	AND : [PreferencesFilter!]
	OR : [PreferencesFilter!]
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

enum AddressOrderBy {
	city_ASC,
	city_DESC,
	id_ASC,
	id_DESC
}

type Address implements Node{
	city : String!
	fundingAccount(filter:FundingAccountFilter) : FundingAccount
	id : ID!
	user(filter:UserFilter) : User
}

interface Node{
	id : ID!
}

type FundingAccount implements Node{
	address(filter:AddressFilter) : Address
	funder(filter:FunderFilter) : Funder
	id : ID!
}

type Funder implements Node{
	fundingAccounts(filter:FundingAccountFilter, orderBy:FundingAccountOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [FundingAccount!]
	id : ID!
	user(filter:UserFilter) : User
	_fundingAccountsMeta(filter:FundingAccountFilter, orderBy:FundingAccountOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

enum FundingAccountOrderBy {
	id_ASC,
	id_DESC
}

type User implements Node{
	address(filter:AddressFilter) : Address
	approver(filter:ApproverFilter) : Approver
	card(filter:CardFilter) : Card
	createdAt : DateTime!
	devices(filter:DeviceFilter, orderBy:DeviceOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [Device!]
	funder(filter:FunderFilter) : Funder
	id : ID!
	owner(filter:OwnerFilter) : Owner
	preferences(filter:PreferencesFilter) : Preferences
	updatedAt : DateTime!
	userName : String!
	_devicesMeta(filter:DeviceFilter, orderBy:DeviceOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

type Approver implements Node{
	id : ID!
	user(filter:UserFilter) : User
}

type Card implements Node{
	allowance(filter:AllowanceFilter) : Allowance
	chores(filter:ChoreFilter, orderBy:ChoreOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [Chore!]
	group(filter:GroupFilter) : Group
	id : ID!
	spendingRules(filter:SpendingRuleFilter, orderBy:SpendingRuleOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [SpendingRule!]
	transactions(filter:TransactionFilter, orderBy:TransactionOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [Transaction!]
	user(filter:UserFilter) : User
	_choresMeta(filter:ChoreFilter, orderBy:ChoreOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
	_spendingRulesMeta(filter:SpendingRuleFilter, orderBy:SpendingRuleOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
	_transactionsMeta(filter:TransactionFilter, orderBy:TransactionOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

type Allowance implements Node{
	allowanceAmount : Float!
	card(filter:CardFilter) : Card
	id : ID!
	spendingRules(filter:SpendingRuleFilter, orderBy:SpendingRuleOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [SpendingRule!]
	_spendingRulesMeta(filter:SpendingRuleFilter, orderBy:SpendingRuleOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

enum SpendingRuleOrderBy {
	id_ASC,
	id_DESC
}

type SpendingRule implements Node{
	allowance(filter:AllowanceFilter) : Allowance
	card(filter:CardFilter) : Card
	id : ID!
}

type _QueryMeta{
	count : Int!
}

enum ChoreOrderBy {
	choreDescription_ASC,
	choreDescription_DESC,
	id_ASC,
	id_DESC
}

type Chore implements Node{
	card(filter:CardFilter) : Card
	choreDescription : String!
	id : ID!
}

type Group implements Node{
	cards(filter:CardFilter, orderBy:CardOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [Card!]
	id : ID!
	owners(filter:OwnerFilter) : [Owner!]!
	partner(filter:PartnerFilter) : Partner
	_cardsMeta(filter:CardFilter, orderBy:CardOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

enum CardOrderBy {
	id_ASC,
	id_DESC
}

type Owner implements Node{
	group(filter:GroupFilter) : Group
	id : ID!
	user(filter:UserFilter) : User
}

type Partner implements Node{
	groups(filter:GroupFilter, orderBy:GroupOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : [Group!]
	id : ID!
	_groupsMeta(filter:GroupFilter, orderBy:GroupOrderBy, skip:Int, after:String, before:String, first:Int, last:Int) : _QueryMeta!
}

enum GroupOrderBy {
	id_ASC,
	id_DESC
}

enum TransactionOrderBy {
	id_ASC,
	id_DESC,
	transactionDescription_ASC,
	transactionDescription_DESC
}

type Transaction implements Node{
	card(filter:CardFilter) : Card
	id : ID!
	transactionDescription : String!
}

enum DeviceOrderBy {
	id_ASC,
	id_DESC
}

type Device implements Node{
	id : ID!
	user(filter:UserFilter) : User
}

type Preferences implements Node{
	id : ID!
	user(filter:UserFilter) : User
}

enum AllowanceOrderBy {
	allowanceAmount_ASC,
	allowanceAmount_DESC,
	id_ASC,
	id_DESC
}

enum ApproverOrderBy {
	id_ASC,
	id_DESC
}

input FileFilter{
	AND : [FileFilter!]
	OR : [FileFilter!]
	contentType : String
	contentType_not : String
	contentType_in : [String!]
	contentType_not_in : [String!]
	contentType_lt : String
	contentType_lte : String
	contentType_gt : String
	contentType_gte : String
	contentType_contains : String
	contentType_not_contains : String
	contentType_starts_with : String
	contentType_not_starts_with : String
	contentType_ends_with : String
	contentType_not_ends_with : String
	createdAt : DateTime
	createdAt_not : DateTime
	createdAt_in : [DateTime!]
	createdAt_not_in : [DateTime!]
	createdAt_lt : DateTime
	createdAt_lte : DateTime
	createdAt_gt : DateTime
	createdAt_gte : DateTime
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	name : String
	name_not : String
	name_in : [String!]
	name_not_in : [String!]
	name_lt : String
	name_lte : String
	name_gt : String
	name_gte : String
	name_contains : String
	name_not_contains : String
	name_starts_with : String
	name_not_starts_with : String
	name_ends_with : String
	name_not_ends_with : String
	secret : String
	secret_not : String
	secret_in : [String!]
	secret_not_in : [String!]
	secret_lt : String
	secret_lte : String
	secret_gt : String
	secret_gte : String
	secret_contains : String
	secret_not_contains : String
	secret_starts_with : String
	secret_not_starts_with : String
	secret_ends_with : String
	secret_not_ends_with : String
	size : Int
	size_not : Int
	size_in : [Int!]
	size_not_in : [Int!]
	size_lt : Int
	size_lte : Int
	size_gt : Int
	size_gte : Int
	updatedAt : DateTime
	updatedAt_not : DateTime
	updatedAt_in : [DateTime!]
	updatedAt_not_in : [DateTime!]
	updatedAt_lt : DateTime
	updatedAt_lte : DateTime
	updatedAt_gt : DateTime
	updatedAt_gte : DateTime
	url : String
	url_not : String
	url_in : [String!]
	url_not_in : [String!]
	url_lt : String
	url_lte : String
	url_gt : String
	url_gte : String
	url_contains : String
	url_not_contains : String
	url_starts_with : String
	url_not_starts_with : String
	url_ends_with : String
	url_not_ends_with : String
}

enum FileOrderBy {
	contentType_ASC,
	contentType_DESC,
	createdAt_ASC,
	createdAt_DESC,
	id_ASC,
	id_DESC,
	name_ASC,
	name_DESC,
	secret_ASC,
	secret_DESC,
	size_ASC,
	size_DESC,
	updatedAt_ASC,
	updatedAt_DESC,
	url_ASC,
	url_DESC
}

type File implements Node{
	contentType : String!
	createdAt : DateTime!
	id : ID!
	name : String!
	secret : String!
	size : Int!
	updatedAt : DateTime!
	url : String!
}

enum FunderOrderBy {
	id_ASC,
	id_DESC
}

enum OwnerOrderBy {
	id_ASC,
	id_DESC
}

enum PartnerOrderBy {
	id_ASC,
	id_DESC
}

enum PreferencesOrderBy {
	id_ASC,
	id_DESC
}

enum UserOrderBy {
	createdAt_ASC,
	createdAt_DESC,
	id_ASC,
	id_DESC,
	updatedAt_ASC,
	updatedAt_DESC,
	userName_ASC,
	userName_DESC
}

type Mutation{
	createAddress(city:String!, fundingAccountId:ID, fundingAccount:AddressfundingAccountFundingAccount, userId:ID, user:AddressuserUser) : Address
	createAllowance(allowanceAmount:Float!, cardId:ID, card:AllowancecardCard, spendingRulesIds:[ID!], spendingRules:[AllowancespendingRulesSpendingRule!]) : Allowance
	createApprover(userId:ID, user:ApproveruserUser) : Approver
	createCard(allowanceId:ID, allowance:CardallowanceAllowance, groupId:ID, group:CardgroupGroup, userId:ID, user:CarduserUser, choresIds:[ID!], chores:[CardchoresChore!], spendingRulesIds:[ID!], spendingRules:[CardspendingRulesSpendingRule!], transactionsIds:[ID!], transactions:[CardtransactionsTransaction!]) : Card
	createChore(choreDescription:String!, cardId:ID, card:ChorecardCard) : Chore
	createDevice(userId:ID, user:DeviceuserUser) : Device
	createFile(name:String!) : File
	createFunder(userId:ID, user:FunderuserUser, fundingAccountsIds:[ID!], fundingAccounts:[FunderfundingAccountsFundingAccount!]) : Funder
	createFundingAccount(addressId:ID, address:FundingAccountaddressAddress, funderId:ID, funder:FundingAccountfunderFunder) : FundingAccount
	createGroup(ownerId:ID, owner:GroupownerOwner, partnerId:ID, partner:GrouppartnerPartner, cardsIds:[ID!], cards:[GroupcardsCard!]) : Group
	createOwner(groupId:ID, group:OwnergroupGroup, userId:ID, user:OwneruserUser) : Owner
	createPartner(groupsIds:[ID!], groups:[PartnergroupsGroup!]) : Partner
	createPreferences(userId:ID, user:PreferencesuserUser) : Preferences
	createSpendingRule(allowanceId:ID, allowance:SpendingRuleallowanceAllowance, cardId:ID, card:SpendingRulecardCard) : SpendingRule
	createTransaction(transactionDescription:String!, cardId:ID, card:TransactioncardCard) : Transaction
	updateAddress(city:String, id:ID!, fundingAccountId:ID, fundingAccount:AddressfundingAccountFundingAccount, userId:ID, user:AddressuserUser) : Address
	updateAllowance(allowanceAmount:Float, id:ID!, cardId:ID, card:AllowancecardCard, spendingRulesIds:[ID!], spendingRules:[AllowancespendingRulesSpendingRule!]) : Allowance
	updateApprover(id:ID!, userId:ID, user:ApproveruserUser) : Approver
	updateCard(id:ID!, allowanceId:ID, allowance:CardallowanceAllowance, groupId:ID, group:CardgroupGroup, userId:ID, user:CarduserUser, choresIds:[ID!], chores:[CardchoresChore!], spendingRulesIds:[ID!], spendingRules:[CardspendingRulesSpendingRule!], transactionsIds:[ID!], transactions:[CardtransactionsTransaction!]) : Card
	updateChore(choreDescription:String, id:ID!, cardId:ID, card:ChorecardCard) : Chore
	updateDevice(id:ID!, userId:ID, user:DeviceuserUser) : Device
	updateFile(id:ID!, name:String) : File
	updateFunder(id:ID!, userId:ID, user:FunderuserUser, fundingAccountsIds:[ID!], fundingAccounts:[FunderfundingAccountsFundingAccount!]) : Funder
	updateFundingAccount(id:ID!, addressId:ID, address:FundingAccountaddressAddress, funderId:ID, funder:FundingAccountfunderFunder) : FundingAccount
	updateGroup(id:ID!, ownerId:ID, owner:GroupownerOwner, partnerId:ID, partner:GrouppartnerPartner, cardsIds:[ID!], cards:[GroupcardsCard!]) : Group
	updateOwner(id:ID!, groupId:ID, group:OwnergroupGroup, userId:ID, user:OwneruserUser) : Owner
	updatePartner(id:ID!, groupsIds:[ID!], groups:[PartnergroupsGroup!]) : Partner
	updatePreferences(id:ID!, userId:ID, user:PreferencesuserUser) : Preferences
	updateSpendingRule(id:ID!, allowanceId:ID, allowance:SpendingRuleallowanceAllowance, cardId:ID, card:SpendingRulecardCard) : SpendingRule
	updateTransaction(id:ID!, transactionDescription:String, cardId:ID, card:TransactioncardCard) : Transaction
	updateUser(id:ID!, userName:String, addressId:ID, address:UseraddressAddress, approverId:ID, cardId:ID, card:UsercardCard, funderId:ID, funder:UserfunderFunder, ownerId:ID, owner:UserownerOwner, preferencesId:ID, devicesIds:[ID!]) : User
	updateOrCreateAddress(update:UpdateAddress!, create:CreateAddress!) : Address
	updateOrCreateAllowance(update:UpdateAllowance!, create:CreateAllowance!) : Allowance
	updateOrCreateApprover(update:UpdateApprover!, create:CreateApprover!) : Approver
	updateOrCreateCard(update:UpdateCard!, create:CreateCard!) : Card
	updateOrCreateChore(update:UpdateChore!, create:CreateChore!) : Chore
	updateOrCreateDevice(update:UpdateDevice!, create:CreateDevice!) : Device
	updateOrCreateFile(update:UpdateFile!, create:CreateFile!) : File
	updateOrCreateFunder(update:UpdateFunder!, create:CreateFunder!) : Funder
	updateOrCreateFundingAccount(update:UpdateFundingAccount!, create:CreateFundingAccount!) : FundingAccount
	updateOrCreateGroup(update:UpdateGroup!, create:CreateGroup!) : Group
	updateOrCreateOwner(update:UpdateOwner!, create:CreateOwner!) : Owner
	updateOrCreatePartner(update:UpdatePartner!, create:CreatePartner!) : Partner
	updateOrCreatePreferences(update:UpdatePreferences!, create:CreatePreferences!) : Preferences
	updateOrCreateSpendingRule(update:UpdateSpendingRule!, create:CreateSpendingRule!) : SpendingRule
	updateOrCreateTransaction(update:UpdateTransaction!, create:CreateTransaction!) : Transaction
	updateOrCreateUser(update:UpdateUser!, create:CreateUser!) : User
	deleteAddress(id:ID!) : Address
	deleteAllowance(id:ID!) : Allowance
	deleteApprover(id:ID!) : Approver
	deleteCard(id:ID!) : Card
	deleteChore(id:ID!) : Chore
	deleteDevice(id:ID!) : Device
	deleteFile(id:ID!) : File
	deleteFunder(id:ID!) : Funder
	deleteFundingAccount(id:ID!) : FundingAccount
	deleteGroup(id:ID!) : Group
	deleteOwner(id:ID!) : Owner
	deletePartner(id:ID!) : Partner
	deletePreferences(id:ID!) : Preferences
	deleteSpendingRule(id:ID!) : SpendingRule
	deleteTransaction(id:ID!) : Transaction
	deleteUser(id:ID!) : User
	setAddressOnFundingAccount(fundingAccountFundingAccountId:ID!, addressAddressId:ID!) : SetAddressOnFundingAccountPayload
	setCardOnAllowance(allowanceAllowanceId:ID!, cardCardId:ID!) : SetCardOnAllowancePayload
	setCardOnUser(userUserId:ID!, cardCardId:ID!) : SetCardOnUserPayload
	setGroupOnOwner(ownerOwnerId:ID!, groupGroupId:ID!) : SetGroupOnOwnerPayload
	setUserOnAddress(addressAddressId:ID!, userUserId:ID!) : SetUserOnAddressPayload
	setUserOnApprover(approverApproverId:ID!, userUserId:ID!) : SetUserOnApproverPayload
	setUserOnFunder(funderFunderId:ID!, userUserId:ID!) : SetUserOnFunderPayload
	setUserOnOwner(ownerOwnerId:ID!, userUserId:ID!) : SetUserOnOwnerPayload
	setUserOnPreferences(preferencesPreferencesId:ID!, userUserId:ID!) : SetUserOnPreferencesPayload
	unsetAddressOnFundingAccount(fundingAccountFundingAccountId:ID!, addressAddressId:ID!) : UnsetAddressOnFundingAccountPayload
	unsetCardOnAllowance(allowanceAllowanceId:ID!, cardCardId:ID!) : UnsetCardOnAllowancePayload
	unsetCardOnUser(userUserId:ID!, cardCardId:ID!) : UnsetCardOnUserPayload
	unsetGroupOnOwner(ownerOwnerId:ID!, groupGroupId:ID!) : UnsetGroupOnOwnerPayload
	unsetUserOnAddress(addressAddressId:ID!, userUserId:ID!) : UnsetUserOnAddressPayload
	unsetUserOnApprover(approverApproverId:ID!, userUserId:ID!) : UnsetUserOnApproverPayload
	unsetUserOnFunder(funderFunderId:ID!, userUserId:ID!) : UnsetUserOnFunderPayload
	unsetUserOnOwner(ownerOwnerId:ID!, userUserId:ID!) : UnsetUserOnOwnerPayload
	unsetUserOnPreferences(preferencesPreferencesId:ID!, userUserId:ID!) : UnsetUserOnPreferencesPayload
	addToCardOnChores(choresChoreId:ID!, cardCardId:ID!) : AddToCardOnChoresPayload
	addToCardOnSpendingRule(spendingRulesSpendingRuleId:ID!, cardCardId:ID!) : AddToCardOnSpendingRulePayload
	addToCardOnTransaction(transactionsTransactionId:ID!, cardCardId:ID!) : AddToCardOnTransactionPayload
	addToFundingAccountOnFunder(funderFunderId:ID!, fundingAccountsFundingAccountId:ID!) : AddToFundingAccountOnFunderPayload
	addToGroupOnCard(cardsCardId:ID!, groupGroupId:ID!) : AddToGroupOnCardPayload
	addToGroupOnPartner(partnerPartnerId:ID!, groupsGroupId:ID!) : AddToGroupOnPartnerPayload
	addToSpendingRuleOnAllowance(allowanceAllowanceId:ID!, spendingRulesSpendingRuleId:ID!) : AddToSpendingRuleOnAllowancePayload
	addToUserOnDevice(devicesDeviceId:ID!, userUserId:ID!) : AddToUserOnDevicePayload
	removeFromCardOnChores(choresChoreId:ID!, cardCardId:ID!) : RemoveFromCardOnChoresPayload
	removeFromCardOnSpendingRule(spendingRulesSpendingRuleId:ID!, cardCardId:ID!) : RemoveFromCardOnSpendingRulePayload
	removeFromCardOnTransaction(transactionsTransactionId:ID!, cardCardId:ID!) : RemoveFromCardOnTransactionPayload
	removeFromFundingAccountOnFunder(funderFunderId:ID!, fundingAccountsFundingAccountId:ID!) : RemoveFromFundingAccountOnFunderPayload
	removeFromGroupOnCard(cardsCardId:ID!, groupGroupId:ID!) : RemoveFromGroupOnCardPayload
	removeFromGroupOnPartner(partnerPartnerId:ID!, groupsGroupId:ID!) : RemoveFromGroupOnPartnerPayload
	removeFromSpendingRuleOnAllowance(allowanceAllowanceId:ID!, spendingRulesSpendingRuleId:ID!) : RemoveFromSpendingRuleOnAllowancePayload
	removeFromUserOnDevice(devicesDeviceId:ID!, userUserId:ID!) : RemoveFromUserOnDevicePayload
	createUser(userName:String!, addressId:ID, address:UseraddressAddress, approverId:ID, cardId:ID, card:UsercardCard, funderId:ID, funder:UserfunderFunder, ownerId:ID, owner:UserownerOwner, preferencesId:ID, devicesIds:[ID!]) : User
	invokeFunction(input:InvokeFunctionInput!) : InvokeFunctionPayload
}

input AddressfundingAccountFundingAccount{
	funderId : ID
	funder : FundingAccountfunderFunder
}

input FundingAccountfunderFunder{
	userId : ID
	user : FunderuserUser
	fundingAccountsIds : [ID!]
	fundingAccounts : [FunderfundingAccountsFundingAccount!]
}

input FunderuserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input UseraddressAddress{
	city : String!
	fundingAccountId : ID
	fundingAccount : AddressfundingAccountFundingAccount
}

input UsercardCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input CardallowanceAllowance{
	allowanceAmount : Float!
	spendingRulesIds : [ID!]
	spendingRules : [AllowancespendingRulesSpendingRule!]
}

input AllowancespendingRulesSpendingRule{
	cardId : ID
	card : SpendingRulecardCard
}

input SpendingRulecardCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input CardgroupGroup{
	ownerId : ID
	owner : GroupownerOwner
	partnerId : ID
	partner : GrouppartnerPartner
	cardsIds : [ID!]
	cards : [GroupcardsCard!]
}

input GroupownerOwner{
	userId : ID
	user : OwneruserUser
}

input OwneruserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	preferencesId : ID
	devicesIds : [ID!]
}

input UserfunderFunder{
	fundingAccountsIds : [ID!]
	fundingAccounts : [FunderfundingAccountsFundingAccount!]
}

input FunderfundingAccountsFundingAccount{
	addressId : ID
	address : FundingAccountaddressAddress
}

input FundingAccountaddressAddress{
	city : String!
	userId : ID
	user : AddressuserUser
}

input AddressuserUser{
	userName : String!
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input UserownerOwner{
	groupId : ID
	group : OwnergroupGroup
}

input OwnergroupGroup{
	partnerId : ID
	partner : GrouppartnerPartner
	cardsIds : [ID!]
	cards : [GroupcardsCard!]
}

input GrouppartnerPartner{
	groupsIds : [ID!]
	groups : [PartnergroupsGroup!]
}

input PartnergroupsGroup{
	ownerId : ID
	owner : GroupownerOwner
	cardsIds : [ID!]
	cards : [GroupcardsCard!]
}

input GroupcardsCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input CarduserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input CardchoresChore{
	choreDescription : String!
}

input CardspendingRulesSpendingRule{
	allowanceId : ID
	allowance : SpendingRuleallowanceAllowance
}

input SpendingRuleallowanceAllowance{
	allowanceAmount : Float!
	cardId : ID
	card : AllowancecardCard
	spendingRulesIds : [ID!]
	spendingRules : [AllowancespendingRulesSpendingRule!]
}

input AllowancecardCard{
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input CardtransactionsTransaction{
	transactionDescription : String!
}

input ApproveruserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input ChorecardCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input DeviceuserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input PreferencesuserUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	devicesIds : [ID!]
}

input TransactioncardCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input UpdateAddress{
	city : String
	id : ID!
	fundingAccountId : ID
	fundingAccount : AddressfundingAccountFundingAccount
	userId : ID
	user : AddressuserUser
}

input CreateAddress{
	city : String!
	fundingAccountId : ID
	fundingAccount : AddressfundingAccountFundingAccount
	userId : ID
	user : AddressuserUser
}

input UpdateAllowance{
	allowanceAmount : Float
	id : ID!
	cardId : ID
	card : AllowancecardCard
	spendingRulesIds : [ID!]
	spendingRules : [AllowancespendingRulesSpendingRule!]
}

input CreateAllowance{
	allowanceAmount : Float!
	cardId : ID
	card : AllowancecardCard
	spendingRulesIds : [ID!]
	spendingRules : [AllowancespendingRulesSpendingRule!]
}

input UpdateApprover{
	id : ID!
	userId : ID
	user : ApproveruserUser
}

input CreateApprover{
	userId : ID
	user : ApproveruserUser
}

input UpdateCard{
	id : ID!
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input CreateCard{
	allowanceId : ID
	allowance : CardallowanceAllowance
	groupId : ID
	group : CardgroupGroup
	userId : ID
	user : CarduserUser
	choresIds : [ID!]
	chores : [CardchoresChore!]
	spendingRulesIds : [ID!]
	spendingRules : [CardspendingRulesSpendingRule!]
	transactionsIds : [ID!]
	transactions : [CardtransactionsTransaction!]
}

input UpdateChore{
	choreDescription : String
	id : ID!
	cardId : ID
	card : ChorecardCard
}

input CreateChore{
	choreDescription : String!
	cardId : ID
	card : ChorecardCard
}

input UpdateDevice{
	id : ID!
	userId : ID
	user : DeviceuserUser
}

input CreateDevice{
	userId : ID
	user : DeviceuserUser
}

input UpdateFile{
	id : ID!
	name : String
}

input CreateFile{
	name : String!
}

input UpdateFunder{
	id : ID!
	userId : ID
	user : FunderuserUser
	fundingAccountsIds : [ID!]
	fundingAccounts : [FunderfundingAccountsFundingAccount!]
}

input CreateFunder{
	userId : ID
	user : FunderuserUser
	fundingAccountsIds : [ID!]
	fundingAccounts : [FunderfundingAccountsFundingAccount!]
}

input UpdateFundingAccount{
	id : ID!
	addressId : ID
	address : FundingAccountaddressAddress
	funderId : ID
	funder : FundingAccountfunderFunder
}

input CreateFundingAccount{
	addressId : ID
	address : FundingAccountaddressAddress
	funderId : ID
	funder : FundingAccountfunderFunder
}

input UpdateGroup{
	id : ID!
	ownerId : ID
	owner : GroupownerOwner
	partnerId : ID
	partner : GrouppartnerPartner
	cardsIds : [ID!]
	cards : [GroupcardsCard!]
}

input CreateGroup{
	ownerId : ID
	owner : GroupownerOwner
	partnerId : ID
	partner : GrouppartnerPartner
	cardsIds : [ID!]
	cards : [GroupcardsCard!]
}

input UpdateOwner{
	id : ID!
	groupId : ID
	group : OwnergroupGroup
	userId : ID
	user : OwneruserUser
}

input CreateOwner{
	groupId : ID
	group : OwnergroupGroup
	userId : ID
	user : OwneruserUser
}

input UpdatePartner{
	id : ID!
	groupsIds : [ID!]
	groups : [PartnergroupsGroup!]
}

input CreatePartner{
	groupsIds : [ID!]
	groups : [PartnergroupsGroup!]
}

input UpdatePreferences{
	id : ID!
	userId : ID
	user : PreferencesuserUser
}

input CreatePreferences{
	userId : ID
	user : PreferencesuserUser
}

input UpdateSpendingRule{
	id : ID!
	allowanceId : ID
	allowance : SpendingRuleallowanceAllowance
	cardId : ID
	card : SpendingRulecardCard
}

input CreateSpendingRule{
	allowanceId : ID
	allowance : SpendingRuleallowanceAllowance
	cardId : ID
	card : SpendingRulecardCard
}

input UpdateTransaction{
	id : ID!
	transactionDescription : String
	cardId : ID
	card : TransactioncardCard
}

input CreateTransaction{
	transactionDescription : String!
	cardId : ID
	card : TransactioncardCard
}

input UpdateUser{
	id : ID!
	userName : String
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

input CreateUser{
	userName : String!
	addressId : ID
	address : UseraddressAddress
	approverId : ID
	cardId : ID
	card : UsercardCard
	funderId : ID
	funder : UserfunderFunder
	ownerId : ID
	owner : UserownerOwner
	preferencesId : ID
	devicesIds : [ID!]
}

type SetAddressOnFundingAccountPayload{
	addressAddress : Address
	fundingAccountFundingAccount : FundingAccount
}

type SetCardOnAllowancePayload{
	cardCard : Card
	allowanceAllowance : Allowance
}

type SetCardOnUserPayload{
	cardCard : Card
	userUser : User
}

type SetGroupOnOwnerPayload{
	groupGroup : Group
	ownerOwner : Owner
}

type SetUserOnAddressPayload{
	userUser : User
	addressAddress : Address
}

type SetUserOnApproverPayload{
	userUser : User
	approverApprover : Approver
}

type SetUserOnFunderPayload{
	userUser : User
	funderFunder : Funder
}

type SetUserOnOwnerPayload{
	userUser : User
	ownerOwner : Owner
}

type SetUserOnPreferencesPayload{
	userUser : User
	preferencesPreferences : Preferences
}

type UnsetAddressOnFundingAccountPayload{
	addressAddress : Address
	fundingAccountFundingAccount : FundingAccount
}

type UnsetCardOnAllowancePayload{
	cardCard : Card
	allowanceAllowance : Allowance
}

type UnsetCardOnUserPayload{
	cardCard : Card
	userUser : User
}

type UnsetGroupOnOwnerPayload{
	groupGroup : Group
	ownerOwner : Owner
}

type UnsetUserOnAddressPayload{
	userUser : User
	addressAddress : Address
}

type UnsetUserOnApproverPayload{
	userUser : User
	approverApprover : Approver
}

type UnsetUserOnFunderPayload{
	userUser : User
	funderFunder : Funder
}

type UnsetUserOnOwnerPayload{
	userUser : User
	ownerOwner : Owner
}

type UnsetUserOnPreferencesPayload{
	userUser : User
	preferencesPreferences : Preferences
}

type AddToCardOnChoresPayload{
	cardCard : Card
	choresChore : Chore
}

type AddToCardOnSpendingRulePayload{
	cardCard : Card
	spendingRulesSpendingRule : SpendingRule
}

type AddToCardOnTransactionPayload{
	cardCard : Card
	transactionsTransaction : Transaction
}

type AddToFundingAccountOnFunderPayload{
	fundingAccountsFundingAccount : FundingAccount
	funderFunder : Funder
}

type AddToGroupOnCardPayload{
	groupGroup : Group
	cardsCard : Card
}

type AddToGroupOnPartnerPayload{
	groupsGroup : Group
	partnerPartner : Partner
}

type AddToSpendingRuleOnAllowancePayload{
	spendingRulesSpendingRule : SpendingRule
	allowanceAllowance : Allowance
}

type AddToUserOnDevicePayload{
	userUser : User
	devicesDevice : Device
}

type RemoveFromCardOnChoresPayload{
	cardCard : Card
	choresChore : Chore
}

type RemoveFromCardOnSpendingRulePayload{
	cardCard : Card
	spendingRulesSpendingRule : SpendingRule
}

type RemoveFromCardOnTransactionPayload{
	cardCard : Card
	transactionsTransaction : Transaction
}

type RemoveFromFundingAccountOnFunderPayload{
	fundingAccountsFundingAccount : FundingAccount
	funderFunder : Funder
}

type RemoveFromGroupOnCardPayload{
	groupGroup : Group
	cardsCard : Card
}

type RemoveFromGroupOnPartnerPayload{
	groupsGroup : Group
	partnerPartner : Partner
}

type RemoveFromSpendingRuleOnAllowancePayload{
	spendingRulesSpendingRule : SpendingRule
	allowanceAllowance : Allowance
}

type RemoveFromUserOnDevicePayload{
	userUser : User
	devicesDevice : Device
}

input InvokeFunctionInput{
	name : String!
	input : String!
	clientMutationId : String
}

type InvokeFunctionPayload{
	result : String!
	clientMutationId : String
}

type Subscription{
	Address(filter:AddressSubscriptionFilter) : AddressSubscriptionPayload
	Allowance(filter:AllowanceSubscriptionFilter) : AllowanceSubscriptionPayload
	Approver(filter:ApproverSubscriptionFilter) : ApproverSubscriptionPayload
	Card(filter:CardSubscriptionFilter) : CardSubscriptionPayload
	Chore(filter:ChoreSubscriptionFilter) : ChoreSubscriptionPayload
	Device(filter:DeviceSubscriptionFilter) : DeviceSubscriptionPayload
	File(filter:FileSubscriptionFilter) : FileSubscriptionPayload
	Funder(filter:FunderSubscriptionFilter) : FunderSubscriptionPayload
	FundingAccount(filter:FundingAccountSubscriptionFilter) : FundingAccountSubscriptionPayload
	Group(filter:GroupSubscriptionFilter) : GroupSubscriptionPayload
	Owner(filter:OwnerSubscriptionFilter) : OwnerSubscriptionPayload
	Partner(filter:PartnerSubscriptionFilter) : PartnerSubscriptionPayload
	Preferences(filter:PreferencesSubscriptionFilter) : PreferencesSubscriptionPayload
	SpendingRule(filter:SpendingRuleSubscriptionFilter) : SpendingRuleSubscriptionPayload
	Transaction(filter:TransactionSubscriptionFilter) : TransactionSubscriptionPayload
	User(filter:UserSubscriptionFilter) : UserSubscriptionPayload
}

input AddressSubscriptionFilter{
	AND : [AddressSubscriptionFilter!]
	OR : [AddressSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : AddressSubscriptionFilterNode
}

enum _ModelMutationType {
	CREATED,
	UPDATED,
	DELETED
}

input AddressSubscriptionFilterNode{
	city : String
	city_not : String
	city_in : [String!]
	city_not_in : [String!]
	city_lt : String
	city_lte : String
	city_gt : String
	city_gte : String
	city_contains : String
	city_not_contains : String
	city_starts_with : String
	city_not_starts_with : String
	city_ends_with : String
	city_not_ends_with : String
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	fundingAccount : FundingAccountFilter
	user : UserFilter
}

type AddressSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Address
	updatedFields : [String!]
	previousValues : AddressPreviousValues
}

type AddressPreviousValues{
	city : String!
	id : ID!
}

input AllowanceSubscriptionFilter{
	AND : [AllowanceSubscriptionFilter!]
	OR : [AllowanceSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : AllowanceSubscriptionFilterNode
}

input AllowanceSubscriptionFilterNode{
	allowanceAmount : Float
	allowanceAmount_not : Float
	allowanceAmount_in : [Float!]
	allowanceAmount_not_in : [Float!]
	allowanceAmount_lt : Float
	allowanceAmount_lte : Float
	allowanceAmount_gt : Float
	allowanceAmount_gte : Float
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	card : CardFilter
	spendingRules_every : SpendingRuleFilter
	spendingRules_some : SpendingRuleFilter
	spendingRules_none : SpendingRuleFilter
}

type AllowanceSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Allowance
	updatedFields : [String!]
	previousValues : AllowancePreviousValues
}

type AllowancePreviousValues{
	allowanceAmount : Float!
	id : ID!
}

input ApproverSubscriptionFilter{
	AND : [ApproverSubscriptionFilter!]
	OR : [ApproverSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : ApproverSubscriptionFilterNode
}

input ApproverSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

type ApproverSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Approver
	updatedFields : [String!]
	previousValues : ApproverPreviousValues
}

type ApproverPreviousValues{
	id : ID!
}

input CardSubscriptionFilter{
	AND : [CardSubscriptionFilter!]
	OR : [CardSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : CardSubscriptionFilterNode
}

input CardSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	allowance : AllowanceFilter
	chores_every : ChoreFilter
	chores_some : ChoreFilter
	chores_none : ChoreFilter
	group : GroupFilter
	spendingRules_every : SpendingRuleFilter
	spendingRules_some : SpendingRuleFilter
	spendingRules_none : SpendingRuleFilter
	transactions_every : TransactionFilter
	transactions_some : TransactionFilter
	transactions_none : TransactionFilter
	user : UserFilter
}

type CardSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Card
	updatedFields : [String!]
	previousValues : CardPreviousValues
}

type CardPreviousValues{
	id : ID!
}

input ChoreSubscriptionFilter{
	AND : [ChoreSubscriptionFilter!]
	OR : [ChoreSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : ChoreSubscriptionFilterNode
}

input ChoreSubscriptionFilterNode{
	choreDescription : String
	choreDescription_not : String
	choreDescription_in : [String!]
	choreDescription_not_in : [String!]
	choreDescription_lt : String
	choreDescription_lte : String
	choreDescription_gt : String
	choreDescription_gte : String
	choreDescription_contains : String
	choreDescription_not_contains : String
	choreDescription_starts_with : String
	choreDescription_not_starts_with : String
	choreDescription_ends_with : String
	choreDescription_not_ends_with : String
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	card : CardFilter
}

type ChoreSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Chore
	updatedFields : [String!]
	previousValues : ChorePreviousValues
}

type ChorePreviousValues{
	choreDescription : String!
	id : ID!
}

input DeviceSubscriptionFilter{
	AND : [DeviceSubscriptionFilter!]
	OR : [DeviceSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : DeviceSubscriptionFilterNode
}

input DeviceSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

type DeviceSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Device
	updatedFields : [String!]
	previousValues : DevicePreviousValues
}

type DevicePreviousValues{
	id : ID!
}

input FileSubscriptionFilter{
	AND : [FileSubscriptionFilter!]
	OR : [FileSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : FileSubscriptionFilterNode
}

input FileSubscriptionFilterNode{
	contentType : String
	contentType_not : String
	contentType_in : [String!]
	contentType_not_in : [String!]
	contentType_lt : String
	contentType_lte : String
	contentType_gt : String
	contentType_gte : String
	contentType_contains : String
	contentType_not_contains : String
	contentType_starts_with : String
	contentType_not_starts_with : String
	contentType_ends_with : String
	contentType_not_ends_with : String
	createdAt : DateTime
	createdAt_not : DateTime
	createdAt_in : [DateTime!]
	createdAt_not_in : [DateTime!]
	createdAt_lt : DateTime
	createdAt_lte : DateTime
	createdAt_gt : DateTime
	createdAt_gte : DateTime
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	name : String
	name_not : String
	name_in : [String!]
	name_not_in : [String!]
	name_lt : String
	name_lte : String
	name_gt : String
	name_gte : String
	name_contains : String
	name_not_contains : String
	name_starts_with : String
	name_not_starts_with : String
	name_ends_with : String
	name_not_ends_with : String
	secret : String
	secret_not : String
	secret_in : [String!]
	secret_not_in : [String!]
	secret_lt : String
	secret_lte : String
	secret_gt : String
	secret_gte : String
	secret_contains : String
	secret_not_contains : String
	secret_starts_with : String
	secret_not_starts_with : String
	secret_ends_with : String
	secret_not_ends_with : String
	size : Int
	size_not : Int
	size_in : [Int!]
	size_not_in : [Int!]
	size_lt : Int
	size_lte : Int
	size_gt : Int
	size_gte : Int
	updatedAt : DateTime
	updatedAt_not : DateTime
	updatedAt_in : [DateTime!]
	updatedAt_not_in : [DateTime!]
	updatedAt_lt : DateTime
	updatedAt_lte : DateTime
	updatedAt_gt : DateTime
	updatedAt_gte : DateTime
	url : String
	url_not : String
	url_in : [String!]
	url_not_in : [String!]
	url_lt : String
	url_lte : String
	url_gt : String
	url_gte : String
	url_contains : String
	url_not_contains : String
	url_starts_with : String
	url_not_starts_with : String
	url_ends_with : String
	url_not_ends_with : String
}

type FileSubscriptionPayload{
	mutation : _ModelMutationType!
	node : File
	updatedFields : [String!]
	previousValues : FilePreviousValues
}

type FilePreviousValues{
	contentType : String!
	createdAt : DateTime!
	id : ID!
	name : String!
	secret : String!
	size : Int!
	updatedAt : DateTime!
	url : String!
}

input FunderSubscriptionFilter{
	AND : [FunderSubscriptionFilter!]
	OR : [FunderSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : FunderSubscriptionFilterNode
}

input FunderSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	fundingAccounts_every : FundingAccountFilter
	fundingAccounts_some : FundingAccountFilter
	fundingAccounts_none : FundingAccountFilter
	user : UserFilter
}

type FunderSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Funder
	updatedFields : [String!]
	previousValues : FunderPreviousValues
}

type FunderPreviousValues{
	id : ID!
}

input FundingAccountSubscriptionFilter{
	AND : [FundingAccountSubscriptionFilter!]
	OR : [FundingAccountSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : FundingAccountSubscriptionFilterNode
}

input FundingAccountSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	address : AddressFilter
	funder : FunderFilter
}

type FundingAccountSubscriptionPayload{
	mutation : _ModelMutationType!
	node : FundingAccount
	updatedFields : [String!]
	previousValues : FundingAccountPreviousValues
}

type FundingAccountPreviousValues{
	id : ID!
}

input GroupSubscriptionFilter{
	AND : [GroupSubscriptionFilter!]
	OR : [GroupSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : GroupSubscriptionFilterNode
}

input GroupSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	cards_every : CardFilter
	cards_some : CardFilter
	cards_none : CardFilter
	owner : OwnerFilter
	partner : PartnerFilter
}

type GroupSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Group
	updatedFields : [String!]
	previousValues : GroupPreviousValues
}

type GroupPreviousValues{
	id : ID!
}

input OwnerSubscriptionFilter{
	AND : [OwnerSubscriptionFilter!]
	OR : [OwnerSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : OwnerSubscriptionFilterNode
}

input OwnerSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	group : GroupFilter
	user : UserFilter
}

type OwnerSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Owner
	updatedFields : [String!]
	previousValues : OwnerPreviousValues
}

type OwnerPreviousValues{
	id : ID!
}

input PartnerSubscriptionFilter{
	AND : [PartnerSubscriptionFilter!]
	OR : [PartnerSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : PartnerSubscriptionFilterNode
}

input PartnerSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	groups_every : GroupFilter
	groups_some : GroupFilter
	groups_none : GroupFilter
}

type PartnerSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Partner
	updatedFields : [String!]
	previousValues : PartnerPreviousValues
}

type PartnerPreviousValues{
	id : ID!
}

input PreferencesSubscriptionFilter{
	AND : [PreferencesSubscriptionFilter!]
	OR : [PreferencesSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : PreferencesSubscriptionFilterNode
}

input PreferencesSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	user : UserFilter
}

type PreferencesSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Preferences
	updatedFields : [String!]
	previousValues : PreferencesPreviousValues
}

type PreferencesPreviousValues{
	id : ID!
}

input SpendingRuleSubscriptionFilter{
	AND : [SpendingRuleSubscriptionFilter!]
	OR : [SpendingRuleSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : SpendingRuleSubscriptionFilterNode
}

input SpendingRuleSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	allowance : AllowanceFilter
	card : CardFilter
}

type SpendingRuleSubscriptionPayload{
	mutation : _ModelMutationType!
	node : SpendingRule
	updatedFields : [String!]
	previousValues : SpendingRulePreviousValues
}

type SpendingRulePreviousValues{
	id : ID!
}

input TransactionSubscriptionFilter{
	AND : [TransactionSubscriptionFilter!]
	OR : [TransactionSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : TransactionSubscriptionFilterNode
}

input TransactionSubscriptionFilterNode{
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	transactionDescription : String
	transactionDescription_not : String
	transactionDescription_in : [String!]
	transactionDescription_not_in : [String!]
	transactionDescription_lt : String
	transactionDescription_lte : String
	transactionDescription_gt : String
	transactionDescription_gte : String
	transactionDescription_contains : String
	transactionDescription_not_contains : String
	transactionDescription_starts_with : String
	transactionDescription_not_starts_with : String
	transactionDescription_ends_with : String
	transactionDescription_not_ends_with : String
	card : CardFilter
}

type TransactionSubscriptionPayload{
	mutation : _ModelMutationType!
	node : Transaction
	updatedFields : [String!]
	previousValues : TransactionPreviousValues
}

type TransactionPreviousValues{
	id : ID!
	transactionDescription : String!
}

input UserSubscriptionFilter{
	AND : [UserSubscriptionFilter!]
	OR : [UserSubscriptionFilter!]
	mutation_in : [_ModelMutationType!]
	updatedFields_contains : String
	updatedFields_contains_every : [String!]
	updatedFields_contains_some : [String!]
	node : UserSubscriptionFilterNode
}

input UserSubscriptionFilterNode{
	createdAt : DateTime
	createdAt_not : DateTime
	createdAt_in : [DateTime!]
	createdAt_not_in : [DateTime!]
	createdAt_lt : DateTime
	createdAt_lte : DateTime
	createdAt_gt : DateTime
	createdAt_gte : DateTime
	id : ID
	id_not : ID
	id_in : [ID!]
	id_not_in : [ID!]
	id_lt : ID
	id_lte : ID
	id_gt : ID
	id_gte : ID
	id_contains : ID
	id_not_contains : ID
	id_starts_with : ID
	id_not_starts_with : ID
	id_ends_with : ID
	id_not_ends_with : ID
	updatedAt : DateTime
	updatedAt_not : DateTime
	updatedAt_in : [DateTime!]
	updatedAt_not_in : [DateTime!]
	updatedAt_lt : DateTime
	updatedAt_lte : DateTime
	updatedAt_gt : DateTime
	updatedAt_gte : DateTime
	userName : String
	userName_not : String
	userName_in : [String!]
	userName_not_in : [String!]
	userName_lt : String
	userName_lte : String
	userName_gt : String
	userName_gte : String
	userName_contains : String
	userName_not_contains : String
	userName_starts_with : String
	userName_not_starts_with : String
	userName_ends_with : String
	userName_not_ends_with : String
	address : AddressFilter
	approver : ApproverFilter
	card : CardFilter
	devices_every : DeviceFilter
	devices_some : DeviceFilter
	devices_none : DeviceFilter
	funder : FunderFilter
	owner : OwnerFilter
	preferences : PreferencesFilter
}

type UserSubscriptionPayload{
	mutation : _ModelMutationType!
	node : User
	updatedFields : [String!]
	previousValues : UserPreviousValues
}

type UserPreviousValues{
	createdAt : DateTime!
	id : ID!
	updatedAt : DateTime!
	userName : String!
}
schema{
	query: Query,
	mutation: Mutation,
	subscription: Subscription
}
`;

const resolvers = {};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
