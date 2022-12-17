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

export type Mutation = {
  __typename?: "Mutation"
  deleteManyParticipants?: Maybe<DeleteManyPayload>
  deleteManySubscriptions?: Maybe<DeleteManyPayload>
  deleteManyWeeks?: Maybe<DeleteManyPayload>
  deleteOneParticipant?: Maybe<Participant>
  deleteOneSubscription?: Maybe<Subscription>
  deleteOneWeek?: Maybe<Week>
  insertManyParticipants?: Maybe<InsertManyPayload>
  insertManySubscriptions?: Maybe<InsertManyPayload>
  insertManyWeeks?: Maybe<InsertManyPayload>
  insertOneParticipant?: Maybe<Participant>
  insertOneSubscription?: Maybe<Subscription>
  insertOneWeek?: Maybe<Week>
  replaceOneParticipant?: Maybe<Participant>
  replaceOneSubscription?: Maybe<Subscription>
  replaceOneWeek?: Maybe<Week>
  updateManyParticipants?: Maybe<UpdateManyPayload>
  updateManySubscriptions?: Maybe<UpdateManyPayload>
  updateManyWeeks?: Maybe<UpdateManyPayload>
  updateOneParticipant?: Maybe<Participant>
  updateOneSubscription?: Maybe<Subscription>
  updateOneWeek?: Maybe<Week>
  upsertOneParticipant?: Maybe<Participant>
  upsertOneSubscription?: Maybe<Subscription>
  upsertOneWeek?: Maybe<Week>
}

export type MutationDeleteManyParticipantsArgs = {
  query?: Maybe<ParticipantQueryInput>
}

export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationDeleteManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
}

export type MutationDeleteOneParticipantArgs = {
  query: ParticipantQueryInput
}

export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput
}

export type MutationDeleteOneWeekArgs = {
  query: WeekQueryInput
}

export type MutationInsertManyParticipantsArgs = {
  data: Array<ParticipantInsertInput>
}

export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>
}

export type MutationInsertManyWeeksArgs = {
  data: Array<WeekInsertInput>
}

export type MutationInsertOneParticipantArgs = {
  data: ParticipantInsertInput
}

export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput
}

export type MutationInsertOneWeekArgs = {
  data: WeekInsertInput
}

export type MutationReplaceOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  data: ParticipantInsertInput
}

export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationReplaceOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type MutationUpdateManyParticipantsArgs = {
  query?: Maybe<ParticipantQueryInput>
  set: ParticipantUpdateInput
}

export type MutationUpdateManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpdateOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  set: ParticipantUpdateInput
}

export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpsertOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  data: ParticipantInsertInput
}

export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationUpsertOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type ParticipantInsertInput = {
  lastNameParticipant?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
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

export type SubscriptionParticipantsRelationInput = {
  link?: Maybe<Array<Maybe<Scalars["String"]>>>
  create?: Maybe<Array<Maybe<ParticipantInsertInput>>>
}

export type SubscriptionChildInsertInput = {
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
}

export type SubscriptionChildQueryInput = {
  _id?: Maybe<Scalars["ObjectId"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  salutation_lt?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_exists?: Maybe<Scalars["Boolean"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  comment_lte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  participant_id_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionChildQueryInput>>
  externalUserId?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionChildQueryInput>>
  participant_id_lt?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_ne?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_ne?: Maybe<Scalars["String"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  comment_gte?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gte?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_lte?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  comment_gt?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
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

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type ParticipantUpdateInput = {
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  salutation?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
}

export type WeekUpdateInput = {
  dateFrom?: Maybe<Scalars["DateTime"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  published_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  published?: Maybe<Scalars["Boolean"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants_inc?: Maybe<Scalars["Int"]>
}

export type Query = {
  __typename?: "Query"
  participant?: Maybe<Participant>
  participants: Array<Maybe<Participant>>
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
  week?: Maybe<Week>
  weeks: Array<Maybe<Week>>
}

export type QueryParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
}

export type QueryParticipantsArgs = {
  query?: Maybe<ParticipantQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<ParticipantSortByInput>
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
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<WeekSortByInput>
  query?: Maybe<WeekQueryInput>
}

export type SubscriptionQueryInput = {
  email_gt?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gt?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participants_in?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  phone?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  street1_ne?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  lastName_lte?: Maybe<Scalars["String"]>
  zip_ne?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  state_gte?: Maybe<Scalars["String"]>
  firstName_gte?: Maybe<Scalars["String"]>
  email_gte?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  street1_gte?: Maybe<Scalars["String"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  state_ne?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  salutation_lte?: Maybe<Scalars["String"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  children_nin?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  street2_gt?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  city_lte?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  week_ne?: Maybe<Scalars["Int"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  street2_gte?: Maybe<Scalars["String"]>
  country_ne?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  salutation_lt?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  year_gt?: Maybe<Scalars["Int"]>
  firstName?: Maybe<Scalars["String"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_lte?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  zip_gte?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  phone_gt?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  lastName_gt?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  week_gt?: Maybe<Scalars["Int"]>
  lastName_lt?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_lt?: Maybe<Scalars["String"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  children?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  phone_lt?: Maybe<Scalars["String"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_exists?: Maybe<Scalars["Boolean"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  country?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  week?: Maybe<Scalars["Int"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_lte?: Maybe<Scalars["String"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren?: Maybe<Scalars["Int"]>
  zip_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  phone_exists?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  salutation?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  children_in?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  email?: Maybe<Scalars["String"]>
  year_gte?: Maybe<Scalars["Int"]>
  street1_lt?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  country_gt?: Maybe<Scalars["String"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  reservationDate?: Maybe<Scalars["DateTime"]>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  street2_ne?: Maybe<Scalars["String"]>
  participants?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  _id?: Maybe<Scalars["ObjectId"]>
  state_lt?: Maybe<Scalars["String"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  country_lte?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  country_lt?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_ne?: Maybe<Scalars["Int"]>
  street2?: Maybe<Scalars["String"]>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  zip_lte?: Maybe<Scalars["String"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  participants_exists?: Maybe<Scalars["Boolean"]>
  email_ne?: Maybe<Scalars["String"]>
  street1_gt?: Maybe<Scalars["String"]>
  email_lt?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lte?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  children_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  city_gte?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  phone_lte?: Maybe<Scalars["String"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_gt?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  zip_lt?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  phone_ne?: Maybe<Scalars["String"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  phone_gte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  year_lte?: Maybe<Scalars["Int"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  lastName_ne?: Maybe<Scalars["String"]>
  participants_nin?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  city_ne?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  country_gte?: Maybe<Scalars["String"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  lastName_gte?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
}

export enum SubscriptionSortByInput {
  Street1Desc = "STREET1_DESC",
  IdAsc = "_ID_ASC",
  CountryAsc = "COUNTRY_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  SalutationAsc = "SALUTATION_ASC",
  IdDesc = "_ID_DESC",
  StateAsc = "STATE_ASC",
  Street1Asc = "STREET1_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  Street2Desc = "STREET2_DESC",
  ZipAsc = "ZIP_ASC",
  StateDesc = "STATE_DESC",
  YearDesc = "YEAR_DESC",
  DeadlineDesc = "DEADLINE_DESC",
  FirstnameAsc = "FIRSTNAME_ASC",
  PhoneAsc = "PHONE_ASC",
  WeekAsc = "WEEK_ASC",
  ZipDesc = "ZIP_DESC",
  SalutationDesc = "SALUTATION_DESC",
  CityDesc = "CITY_DESC",
  EmailAsc = "EMAIL_ASC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  LastnameDesc = "LASTNAME_DESC",
  Street2Asc = "STREET2_ASC",
  WeekDesc = "WEEK_DESC",
  CityAsc = "CITY_ASC",
  DeadlineAsc = "DEADLINE_ASC",
  EmailDesc = "EMAIL_DESC",
  PhoneDesc = "PHONE_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  CountryDesc = "COUNTRY_DESC",
  LastnameAsc = "LASTNAME_ASC",
  YearAsc = "YEAR_ASC"
}

export type SubscriptionChildUpdateInput = {
  _id_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  comment?: Maybe<Scalars["String"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
}

export type WeekQueryInput = {
  published_ne?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  week?: Maybe<Scalars["Int"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_exists?: Maybe<Scalars["Boolean"]>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  _id?: Maybe<Scalars["ObjectId"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  year_lt?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  week_gte?: Maybe<Scalars["Int"]>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  week_gt?: Maybe<Scalars["Int"]>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  published?: Maybe<Scalars["Boolean"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  AND?: Maybe<Array<WeekQueryInput>>
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  OR?: Maybe<Array<WeekQueryInput>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_ne?: Maybe<Scalars["Int"]>
  week_lte?: Maybe<Scalars["Int"]>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  week_ne?: Maybe<Scalars["Int"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
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

export enum WeekSortByInput {
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  DateFromAsc = "DATE_FROM_ASC",
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  WeekAsc = "WEEK_ASC",
  YearAsc = "YEAR_ASC",
  IdAsc = "_ID_ASC",
  DateFromDesc = "DATE_FROM_DESC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC",
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  WeekDesc = "WEEK_DESC"
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
  participants?: Maybe<Array<Maybe<Participant>>>
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

export enum ParticipantSortByInput {
  BirthdayDesc = "BIRTHDAY_DESC",
  CommentAsc = "COMMENT_ASC",
  FirstnameparticipantDesc = "FIRSTNAMEPARTICIPANT_DESC",
  SalutationAsc = "SALUTATION_ASC",
  IdDesc = "_ID_DESC",
  ParticipantIdAsc = "PARTICIPANT_ID_ASC",
  ParticipantIdDesc = "PARTICIPANT_ID_DESC",
  SalutationDesc = "SALUTATION_DESC",
  IdAsc = "_ID_ASC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  LastnameparticipantAsc = "LASTNAMEPARTICIPANT_ASC",
  LastnameparticipantDesc = "LASTNAMEPARTICIPANT_DESC",
  BirthdayAsc = "BIRTHDAY_ASC",
  CommentDesc = "COMMENT_DESC",
  FirstnameparticipantAsc = "FIRSTNAMEPARTICIPANT_ASC"
}

export type SubscriptionUpdateInput = {
  zip_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  lastName?: Maybe<Scalars["String"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  participants_unset?: Maybe<Scalars["Boolean"]>
  deadline?: Maybe<Scalars["DateTime"]>
  phone?: Maybe<Scalars["String"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  country?: Maybe<Scalars["String"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  zip?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildUpdateInput>>>
  children_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  street2_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type Participant = {
  __typename?: "Participant"
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

export type SubscriptionInsertInput = {
  street1?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  salutation?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["ObjectId"]>
  phone?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildInsertInput>>>
  deadline?: Maybe<Scalars["DateTime"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  week?: Maybe<Scalars["Int"]>
  lastName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
}

export type ParticipantQueryInput = {
  participant_id_ne?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  comment_ne?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  salutation_gt?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_lte?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<ParticipantQueryInput>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<ParticipantQueryInput>>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_lte?: Maybe<Scalars["String"]>
  salutation_lt?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  comment_exists?: Maybe<Scalars["Boolean"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  comment_gte?: Maybe<Scalars["String"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  comment_gt?: Maybe<Scalars["String"]>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
