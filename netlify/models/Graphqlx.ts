export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  ObjectId: any
  DateTime: any
}

export enum SubscriptionSortByInput {
  Street1Desc = "STREET1_DESC",
  WeekDesc = "WEEK_DESC",
  ZipAsc = "ZIP_ASC",
  IdAsc = "_ID_ASC",
  CityAsc = "CITY_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  LastnameDesc = "LASTNAME_DESC",
  StateAsc = "STATE_ASC",
  DeadlineAsc = "DEADLINE_ASC",
  FirstnameAsc = "FIRSTNAME_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  LastnameAsc = "LASTNAME_ASC",
  IdDesc = "_ID_DESC",
  StateDesc = "STATE_DESC",
  Street1Asc = "STREET1_ASC",
  ZipDesc = "ZIP_DESC",
  YearDesc = "YEAR_DESC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  SalutationAsc = "SALUTATION_ASC",
  Street2Desc = "STREET2_DESC",
  YearAsc = "YEAR_ASC",
  WeekAsc = "WEEK_ASC",
  EmailAsc = "EMAIL_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  SalutationDesc = "SALUTATION_DESC",
  Street2Asc = "STREET2_ASC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  PhoneAsc = "PHONE_ASC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  CityDesc = "CITY_DESC",
  EmailDesc = "EMAIL_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  PhoneDesc = "PHONE_DESC"
}

export type SumPerWeekAndYear_IdUpdateInput = {
  year_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type SumPerWeekAndYearQueryInput = {
  year_gt?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  sumPerStateAndWeek_gt?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  week_gte?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_lte?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_lt?: Maybe<Scalars["Int"]>
  state_gt?: Maybe<Scalars["String"]>
  sumPerStateAndWeek_exists?: Maybe<Scalars["Boolean"]>
  year_ne?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_lt?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek_gte?: Maybe<Scalars["Int"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_gte?: Maybe<Scalars["String"]>
  state_lte?: Maybe<Scalars["String"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sumPerStateAndWeek_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<SumPerWeekAndYear_IdQueryInput>
  week_gt?: Maybe<Scalars["Int"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<SumPerWeekAndYearQueryInput>>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_ne?: Maybe<Scalars["Int"]>
  state_lt?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  year_lt?: Maybe<Scalars["Int"]>
  week_lte?: Maybe<Scalars["Int"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  OR?: Maybe<Array<SumPerWeekAndYearQueryInput>>
}

export type SumPerWeekAndYear_IdInsertInput = {
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
}

export type Mutation = {
  __typename?: "Mutation"
  deleteManySubscriptions?: Maybe<DeleteManyPayload>
  deleteManySumPerWeekAndYears?: Maybe<DeleteManyPayload>
  deleteManyWeeks?: Maybe<DeleteManyPayload>
  deleteOneSubscription?: Maybe<Subscription>
  deleteOneSumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  deleteOneWeek?: Maybe<Week>
  insertManySubscriptions?: Maybe<InsertManyPayload>
  insertManySumPerWeekAndYears?: Maybe<InsertManyPayload>
  insertManyWeeks?: Maybe<InsertManyPayload>
  insertOneSubscription?: Maybe<Subscription>
  insertOneSumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  insertOneWeek?: Maybe<Week>
  replaceOneSubscription?: Maybe<Subscription>
  replaceOneSumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  replaceOneWeek?: Maybe<Week>
  updateManySubscriptions?: Maybe<UpdateManyPayload>
  updateManySumPerWeekAndYears?: Maybe<UpdateManyPayload>
  updateManyWeeks?: Maybe<UpdateManyPayload>
  updateOneSubscription?: Maybe<Subscription>
  updateOneSumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  updateOneWeek?: Maybe<Week>
  upsertOneSubscription?: Maybe<Subscription>
  upsertOneSumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  upsertOneWeek?: Maybe<Week>
}

export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationDeleteManySumPerWeekAndYearsArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
}

export type MutationDeleteManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
}

export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput
}

export type MutationDeleteOneSumPerWeekAndYearArgs = {
  query: SumPerWeekAndYearQueryInput
}

export type MutationDeleteOneWeekArgs = {
  query: WeekQueryInput
}

export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>
}

export type MutationInsertManySumPerWeekAndYearsArgs = {
  data: Array<SumPerWeekAndYearInsertInput>
}

export type MutationInsertManyWeeksArgs = {
  data: Array<WeekInsertInput>
}

export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput
}

export type MutationInsertOneSumPerWeekAndYearArgs = {
  data: SumPerWeekAndYearInsertInput
}

export type MutationInsertOneWeekArgs = {
  data: WeekInsertInput
}

export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationReplaceOneSumPerWeekAndYearArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
  data: SumPerWeekAndYearInsertInput
}

export type MutationReplaceOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type MutationUpdateManySubscriptionsArgs = {
  set: SubscriptionUpdateInput
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationUpdateManySumPerWeekAndYearsArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
  set: SumPerWeekAndYearUpdateInput
}

export type MutationUpdateManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateOneSumPerWeekAndYearArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
  set: SumPerWeekAndYearUpdateInput
}

export type MutationUpdateOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationUpsertOneSumPerWeekAndYearArgs = {
  data: SumPerWeekAndYearInsertInput
  query?: Maybe<SumPerWeekAndYearQueryInput>
}

export type MutationUpsertOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type SubscriptionUpdateInput = {
  city_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  country?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  children_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  deadline?: Maybe<Scalars["DateTime"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  salutation?: Maybe<Scalars["String"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildUpdateInput>>>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  zip?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  firstName?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  externalUserId?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
}

export type WeekUpdateInput = {
  published_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants_inc?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  week_inc?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
}

export type SumChildPerStateInput = {
  year?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
}

export type Subscription = {
  __typename?: "Subscription"
  _id?: Maybe<Scalars["ObjectId"]>
  children?: Maybe<Array<Maybe<SubscriptionChild>>>
  city?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  email?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  salutation?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  zip?: Maybe<Scalars["String"]>
}

export type WeekQueryInput = {
  _id_gte?: Maybe<Scalars["ObjectId"]>
  week_ne?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  week?: Maybe<Scalars["Int"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  year_ne?: Maybe<Scalars["Int"]>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  year_lte?: Maybe<Scalars["Int"]>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateFrom?: Maybe<Scalars["DateTime"]>
  published?: Maybe<Scalars["Boolean"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  week_lt?: Maybe<Scalars["Int"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  year_gte?: Maybe<Scalars["Int"]>
  year_lt?: Maybe<Scalars["Int"]>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  published_ne?: Maybe<Scalars["Boolean"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  OR?: Maybe<Array<WeekQueryInput>>
  week_gt?: Maybe<Scalars["Int"]>
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<WeekQueryInput>>
}

export enum WeekSortByInput {
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  WeekDesc = "WEEK_DESC",
  YearAsc = "YEAR_ASC",
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  DateFromAsc = "DATE_FROM_ASC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC",
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  WeekAsc = "WEEK_ASC",
  IdAsc = "_ID_ASC",
  DateFromDesc = "DATE_FROM_DESC"
}

export type SumPerWeekAndYear_IdQueryInput = {
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_gt?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_exists?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  week_lte?: Maybe<Scalars["Int"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_ne?: Maybe<Scalars["Int"]>
  week_ne?: Maybe<Scalars["Int"]>
  year_lt?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SumPerWeekAndYear_IdQueryInput>>
  state_lte?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  state_lt?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  state_gte?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SumPerWeekAndYear_IdQueryInput>>
  year_gt?: Maybe<Scalars["Int"]>
  year_gte?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  state_gt?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SumPerWeekAndYear = {
  __typename?: "SumPerWeekAndYear"
  _id?: Maybe<SumPerWeekAndYear_Id>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type Week = {
  __typename?: "Week"
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
}

export type SubscriptionInsertInput = {
  state?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  lastName?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  country?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildInsertInput>>>
  salutation?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
}

export enum SumPerWeekAndYearSortByInput {
  SumperstateandweekAsc = "SUMPERSTATEANDWEEK_ASC",
  SumperstateandweekDesc = "SUMPERSTATEANDWEEK_DESC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC",
  YearAsc = "YEAR_ASC",
  YearDesc = "YEAR_DESC",
  StateAsc = "STATE_ASC",
  StateDesc = "STATE_DESC"
}

export type WeekInsertInput = {
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type Query = {
  __typename?: "Query"
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
  sumChildsPerState?: Maybe<Array<Maybe<ChildrenPerStateItem>>>
  sumPerWeekAndYear?: Maybe<SumPerWeekAndYear>
  sumPerWeekAndYears: Array<Maybe<SumPerWeekAndYear>>
  week?: Maybe<Week>
  weeks: Array<Maybe<Week>>
}

export type QuerySubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type QuerySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<SubscriptionSortByInput>
}

export type QuerySumChildsPerStateArgs = {
  input?: Maybe<SumChildPerStateInput>
}

export type QuerySumPerWeekAndYearArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
}

export type QuerySumPerWeekAndYearsArgs = {
  query?: Maybe<SumPerWeekAndYearQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<SumPerWeekAndYearSortByInput>
}

export type QueryWeekArgs = {
  query?: Maybe<WeekQueryInput>
}

export type QueryWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<WeekSortByInput>
}

export type SubscriptionQueryInput = {
  salutation_lte?: Maybe<Scalars["String"]>
  zip_gt?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salutation_gte?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  state_gte?: Maybe<Scalars["String"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  street1?: Maybe<Scalars["String"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  state_ne?: Maybe<Scalars["String"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  country_gt?: Maybe<Scalars["String"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  state_lt?: Maybe<Scalars["String"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  salutation_ne?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  street1_gte?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  city_lte?: Maybe<Scalars["String"]>
  lastName_gt?: Maybe<Scalars["String"]>
  children_in?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  street2_ne?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  state_lte?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  street2_lte?: Maybe<Scalars["String"]>
  country_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  year_ne?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  firstName_gte?: Maybe<Scalars["String"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  street1_lt?: Maybe<Scalars["String"]>
  city_gte?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  children?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  zip_lt?: Maybe<Scalars["String"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  email?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  week_gt?: Maybe<Scalars["Int"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  city_exists?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_gt?: Maybe<Scalars["String"]>
  zip_gte?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_lte?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_lt?: Maybe<Scalars["String"]>
  year_lte?: Maybe<Scalars["Int"]>
  email_lt?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  firstName_gt?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  salutation_lt?: Maybe<Scalars["String"]>
  lastName_gte?: Maybe<Scalars["String"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  phone_ne?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  year?: Maybe<Scalars["Int"]>
  city_lt?: Maybe<Scalars["String"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  week_gte?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  street1_ne?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  street1_gt?: Maybe<Scalars["String"]>
  country_gte?: Maybe<Scalars["String"]>
  email_ne?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_ne?: Maybe<Scalars["String"]>
  year_lt?: Maybe<Scalars["Int"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  email_exists?: Maybe<Scalars["Boolean"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_gte?: Maybe<Scalars["String"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  state_gt?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_gt?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  children_nin?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  zip_ne?: Maybe<Scalars["String"]>
  lastName_lte?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_lt?: Maybe<Scalars["String"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  zip_exists?: Maybe<Scalars["Boolean"]>
  email_lte?: Maybe<Scalars["String"]>
  street2_gte?: Maybe<Scalars["String"]>
  phone_gte?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  year_gte?: Maybe<Scalars["Int"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_lt?: Maybe<Scalars["String"]>
  country_lt?: Maybe<Scalars["String"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName?: Maybe<Scalars["String"]>
  country_lte?: Maybe<Scalars["String"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  email_gt?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  children_exists?: Maybe<Scalars["Boolean"]>
  phone_lte?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildQueryInput = {
  birthday?: Maybe<Scalars["DateTime"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  comment_gte?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  comment_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  comment_gt?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  participant_id_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  salutation_ne?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_gte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<SubscriptionChildQueryInput>>
  comment_ne?: Maybe<Scalars["String"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  salutation_lte?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  participant_id_gt?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id?: Maybe<Scalars["String"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  OR?: Maybe<Array<SubscriptionChildQueryInput>>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
}

export type SubscriptionChildUpdateInput = {
  _id?: Maybe<Scalars["ObjectId"]>
  participant_id?: Maybe<Scalars["String"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
}

export type SumPerWeekAndYearInsertInput = {
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<SumPerWeekAndYear_IdInsertInput>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildInsertInput = {
  _id?: Maybe<Scalars["ObjectId"]>
  externalUserId?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
}

export type SubscriptionChild = {
  __typename?: "SubscriptionChild"
  _id?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
}

export type SumPerWeekAndYearUpdateInput = {
  sumPerStateAndWeek_inc?: Maybe<Scalars["Int"]>
  _id?: Maybe<SumPerWeekAndYear_IdUpdateInput>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
}

export type SumPerWeekAndYear_Id = {
  __typename?: "SumPerWeekAndYear_id"
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
