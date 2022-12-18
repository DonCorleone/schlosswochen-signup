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
  DateTime: any
  ObjectId: any
}

export enum SubscriptionSortByInput {
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  StateDesc = "STATE_DESC",
  Street1Asc = "STREET1_ASC",
  LastnameAsc = "LASTNAME_ASC",
  LastnameDesc = "LASTNAME_DESC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  PhoneAsc = "PHONE_ASC",
  StateAsc = "STATE_ASC",
  Street2Asc = "STREET2_ASC",
  WeekDesc = "WEEK_DESC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  EmailAsc = "EMAIL_ASC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  PhoneDesc = "PHONE_DESC",
  SalutationAsc = "SALUTATION_ASC",
  Street2Desc = "STREET2_DESC",
  ZipAsc = "ZIP_ASC",
  IdAsc = "_ID_ASC",
  CountryDesc = "COUNTRY_DESC",
  WeekAsc = "WEEK_ASC",
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  SalutationDesc = "SALUTATION_DESC",
  Street1Desc = "STREET1_DESC",
  FirstnameAsc = "FIRSTNAME_ASC",
  EmailDesc = "EMAIL_DESC",
  YearAsc = "YEAR_ASC",
  CityAsc = "CITY_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  FirstnameDesc = "FIRSTNAME_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  ZipDesc = "ZIP_DESC",
  CityDesc = "CITY_DESC",
  DeadlineAsc = "DEADLINE_ASC",
  CountryAsc = "COUNTRY_ASC"
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
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

export enum WeekSortByInput {
  WeekDesc = "WEEK_DESC",
  YearAsc = "YEAR_ASC",
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC",
  WeekAsc = "WEEK_ASC",
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  IdAsc = "_ID_ASC",
  DateFromAsc = "DATE_FROM_ASC",
  DateFromDesc = "DATE_FROM_DESC"
}

export type SubscriptionChildUpdateInput = {
  comment?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
}

export type WeekUpdateInput = {
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  published_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants_inc?: Maybe<Scalars["Int"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
}

export type WeekQueryInput = {
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  published_ne?: Maybe<Scalars["Boolean"]>
  week_gt?: Maybe<Scalars["Int"]>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  week?: Maybe<Scalars["Int"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  week_lte?: Maybe<Scalars["Int"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  OR?: Maybe<Array<WeekQueryInput>>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  year_lt?: Maybe<Scalars["Int"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  week_ne?: Maybe<Scalars["Int"]>
  year_ne?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  year_gte?: Maybe<Scalars["Int"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  AND?: Maybe<Array<WeekQueryInput>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
}

export type SubscriptionQueryInput = {
  year_ne?: Maybe<Scalars["Int"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  street2_gte?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  street2_lt?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_lte?: Maybe<Scalars["String"]>
  lastName_ne?: Maybe<Scalars["String"]>
  lastName_gte?: Maybe<Scalars["String"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_gt?: Maybe<Scalars["String"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  zip_gt?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state?: Maybe<Scalars["String"]>
  email_lte?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  email_lt?: Maybe<Scalars["String"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  phone_gte?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  year_lt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_gt?: Maybe<Scalars["String"]>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  state_lte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  state_lt?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_gte?: Maybe<Scalars["String"]>
  street1_gt?: Maybe<Scalars["String"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gte?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_ne?: Maybe<Scalars["String"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  zip_lt?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_ne?: Maybe<Scalars["String"]>
  salutation_lte?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  children_nin?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  deadline?: Maybe<Scalars["DateTime"]>
  street2_ne?: Maybe<Scalars["String"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  salutation_gte?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_gte?: Maybe<Scalars["String"]>
  children_in?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  street2?: Maybe<Scalars["String"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_lte?: Maybe<Scalars["String"]>
  street2_gt?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  lastName_lte?: Maybe<Scalars["String"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  street1_lt?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  street1_gte?: Maybe<Scalars["String"]>
  year_gt?: Maybe<Scalars["Int"]>
  firstName_lt?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_gt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_ne?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  phone_gt?: Maybe<Scalars["String"]>
  street1_ne?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  zip_lte?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_gte?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  country_gte?: Maybe<Scalars["String"]>
  firstName_gte?: Maybe<Scalars["String"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  street1_lte?: Maybe<Scalars["String"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  country_lt?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  phone_lt?: Maybe<Scalars["String"]>
  phone_lte?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  salutation?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  state_gt?: Maybe<Scalars["String"]>
  country_ne?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstName_lte?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  children_exists?: Maybe<Scalars["Boolean"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_lt?: Maybe<Scalars["Int"]>
  email_ne?: Maybe<Scalars["String"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gt?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  lastName_lt?: Maybe<Scalars["String"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  phone_ne?: Maybe<Scalars["String"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  country_lte?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  lastName_gt?: Maybe<Scalars["String"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  week_gt?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type SubscriptionChildQueryInput = {
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["DateTime"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  comment_gt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionChildQueryInput>>
  comment_ne?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  participant_id_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gte?: Maybe<Scalars["String"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  salutation_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  salutation_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionChildQueryInput>>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  comment_gte?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
}

export type SubscriptionInsertInput = {
  lastName?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  country?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  children?: Maybe<Array<Maybe<SubscriptionChildInsertInput>>>
  _id?: Maybe<Scalars["ObjectId"]>
  phone?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
}

export type SubscriptionChildInsertInput = {
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  comment?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
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

export type QueryWeekArgs = {
  query?: Maybe<WeekQueryInput>
}

export type QueryWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<WeekSortByInput>
}

export type Mutation = {
  __typename?: "Mutation"
  deleteManySubscriptions?: Maybe<DeleteManyPayload>
  deleteManyWeeks?: Maybe<DeleteManyPayload>
  deleteOneSubscription?: Maybe<Subscription>
  deleteOneWeek?: Maybe<Week>
  insertManySubscriptions?: Maybe<InsertManyPayload>
  insertManyWeeks?: Maybe<InsertManyPayload>
  insertOneSubscription?: Maybe<Subscription>
  insertOneWeek?: Maybe<Week>
  replaceOneSubscription?: Maybe<Subscription>
  replaceOneWeek?: Maybe<Week>
  updateManySubscriptions?: Maybe<UpdateManyPayload>
  updateManyWeeks?: Maybe<UpdateManyPayload>
  updateOneSubscription?: Maybe<Subscription>
  updateOneWeek?: Maybe<Week>
  upsertOneSubscription?: Maybe<Subscription>
  upsertOneWeek?: Maybe<Week>
}

export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationDeleteManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
}

export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput
}

export type MutationDeleteOneWeekArgs = {
  query: WeekQueryInput
}

export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>
}

export type MutationInsertManyWeeksArgs = {
  data: Array<WeekInsertInput>
}

export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput
}

export type MutationInsertOneWeekArgs = {
  data: WeekInsertInput
}

export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationReplaceOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type MutationUpdateManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationUpsertOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type WeekInsertInput = {
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
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

export type SubscriptionUpdateInput = {
  week?: Maybe<Scalars["Int"]>
  externalUserId?: Maybe<Scalars["String"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  week_inc?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  year_inc?: Maybe<Scalars["Int"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  children?: Maybe<Array<Maybe<SubscriptionChildUpdateInput>>>
  phone?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  country?: Maybe<Scalars["String"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  children_unset?: Maybe<Scalars["Boolean"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
