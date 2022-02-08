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

export type WeekQueryInput = {
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  week_gt?: Maybe<Scalars["Int"]>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  year_gte?: Maybe<Scalars["Int"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<WeekQueryInput>>
  week_gte?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<WeekQueryInput>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  week_lt?: Maybe<Scalars["Int"]>
  week_ne?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_ne?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  year_gt?: Maybe<Scalars["Int"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  week_lte?: Maybe<Scalars["Int"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  published_ne?: Maybe<Scalars["Boolean"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  published?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
}

export enum WeekSortByInput {
  IdAsc = "_ID_ASC",
  DateFromDesc = "DATE_FROM_DESC",
  DateToDesc = "DATE_TO_DESC",
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  DateFromAsc = "DATE_FROM_ASC",
  DateToAsc = "DATE_TO_ASC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC",
  YearAsc = "YEAR_ASC"
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

export type ParticipantUpdateInput = {
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
}

export type SubscriptionUpdateInput = {
  zip?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  participants_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  year?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  year_inc?: Maybe<Scalars["Int"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  country?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  salutation?: Maybe<Scalars["String"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  week?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
}

export type WeekUpdateInput = {
  _id_unset?: Maybe<Scalars["Boolean"]>
  published?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  week_inc?: Maybe<Scalars["Int"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  published_unset?: Maybe<Scalars["Boolean"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
}

export type WeekInsertInput = {
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type SubscriptionInsertInput = {
  year?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  salutation?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  week?: Maybe<Scalars["Int"]>
  lastName?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  email?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  zip?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
}

export enum SubscriptionSortByInput {
  EmailDesc = "EMAIL_DESC",
  LastnameAsc = "LASTNAME_ASC",
  SalutationAsc = "SALUTATION_ASC",
  DeadlineAsc = "DEADLINE_ASC",
  LastnameDesc = "LASTNAME_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  WeekDesc = "WEEK_DESC",
  IdDesc = "_ID_DESC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  IdAsc = "_ID_ASC",
  CityAsc = "CITY_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  StateAsc = "STATE_ASC",
  StateDesc = "STATE_DESC",
  Street2Asc = "STREET2_ASC",
  ZipDesc = "ZIP_DESC",
  CityDesc = "CITY_DESC",
  DeadlineDesc = "DEADLINE_DESC",
  SalutationDesc = "SALUTATION_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  WeekAsc = "WEEK_ASC",
  ZipAsc = "ZIP_ASC",
  EmailAsc = "EMAIL_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  PhoneDesc = "PHONE_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  PhoneAsc = "PHONE_ASC",
  Street2Desc = "STREET2_DESC",
  Street1Desc = "STREET1_DESC",
  YearDesc = "YEAR_DESC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  FirstnameAsc = "FIRSTNAME_ASC",
  Street1Asc = "STREET1_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  YearAsc = "YEAR_ASC"
}

export type Week = {
  __typename?: "Week"
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
}

export type Query = {
  __typename?: "Query"
  participant?: Maybe<Participant>
  participants: Array<Maybe<Participant>>
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
  sumChildsPerState?: Maybe<Array<Maybe<ChildrenPerStateItem>>>
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

export type QuerySumChildsPerStateArgs = {
  input?: Maybe<Scalars["Int"]>
}

export type QueryWeekArgs = {
  query?: Maybe<WeekQueryInput>
}

export type QueryWeeksArgs = {
  query?: Maybe<WeekQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<WeekSortByInput>
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

export enum ParticipantSortByInput {
  CommentAsc = "COMMENT_ASC",
  CommentDesc = "COMMENT_DESC",
  LastnameparticipantDesc = "LASTNAMEPARTICIPANT_DESC",
  SalutationAsc = "SALUTATION_ASC",
  BirthdayAsc = "BIRTHDAY_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  FirstnameparticipantAsc = "FIRSTNAMEPARTICIPANT_ASC",
  LastnameparticipantAsc = "LASTNAMEPARTICIPANT_ASC",
  ParticipantIdAsc = "PARTICIPANT_ID_ASC",
  ParticipantIdDesc = "PARTICIPANT_ID_DESC",
  SalutationDesc = "SALUTATION_DESC",
  IdAsc = "_ID_ASC",
  BirthdayDesc = "BIRTHDAY_DESC",
  FirstnameparticipantDesc = "FIRSTNAMEPARTICIPANT_DESC",
  IdDesc = "_ID_DESC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC"
}

export type Subscription = {
  __typename?: "Subscription"
  _id?: Maybe<Scalars["ObjectId"]>
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

export type SubscriptionParticipantsRelationInput = {
  create?: Maybe<Array<Maybe<ParticipantInsertInput>>>
  link?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type ParticipantInsertInput = {
  birthday?: Maybe<Scalars["DateTime"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
}

export type SubscriptionQueryInput = {
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_gte?: Maybe<Scalars["String"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  country_gte?: Maybe<Scalars["String"]>
  participants_in?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  street2_gte?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  zip_lt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  street1_ne?: Maybe<Scalars["String"]>
  year_ne?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  week_gte?: Maybe<Scalars["Int"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  country_lte?: Maybe<Scalars["String"]>
  country_ne?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_ne?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_lt?: Maybe<Scalars["String"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_lt?: Maybe<Scalars["String"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  lastName?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  country_lt?: Maybe<Scalars["String"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  city_ne?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_lt?: Maybe<Scalars["String"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  firstName_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  street1_gte?: Maybe<Scalars["String"]>
  street1_lt?: Maybe<Scalars["String"]>
  state_lt?: Maybe<Scalars["String"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_gte?: Maybe<Scalars["String"]>
  lastName_gt?: Maybe<Scalars["String"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  email_ne?: Maybe<Scalars["String"]>
  salutation_lte?: Maybe<Scalars["String"]>
  zip_gte?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  year_gt?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  externalUserId?: Maybe<Scalars["String"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  state_gt?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  firstName_gt?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_gt?: Maybe<Scalars["String"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  zip_ne?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  state_lte?: Maybe<Scalars["String"]>
  phone_ne?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  country?: Maybe<Scalars["String"]>
  email_gte?: Maybe<Scalars["String"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  deadline?: Maybe<Scalars["DateTime"]>
  phone_gte?: Maybe<Scalars["String"]>
  week_gt?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastName_lt?: Maybe<Scalars["String"]>
  email_lte?: Maybe<Scalars["String"]>
  year_lt?: Maybe<Scalars["Int"]>
  phone_lte?: Maybe<Scalars["String"]>
  participants_nin?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  zip?: Maybe<Scalars["String"]>
  phone_gt?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  city_gte?: Maybe<Scalars["String"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  phone?: Maybe<Scalars["String"]>
  year_lte?: Maybe<Scalars["Int"]>
  lastName_lte?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  salutation_lt?: Maybe<Scalars["String"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_lt?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  externalUserId_lte?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  salutation_gt?: Maybe<Scalars["String"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  country_gt?: Maybe<Scalars["String"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_gte?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  participants?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_ne?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_gt?: Maybe<Scalars["String"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation?: Maybe<Scalars["String"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  year?: Maybe<Scalars["Int"]>
  zip_gt?: Maybe<Scalars["String"]>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  state_gte?: Maybe<Scalars["String"]>
  state_ne?: Maybe<Scalars["String"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1_gt?: Maybe<Scalars["String"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  participants_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_exists?: Maybe<Scalars["Boolean"]>
  year_gte?: Maybe<Scalars["Int"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type ParticipantQueryInput = {
  comment_ne?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<ParticipantQueryInput>>
  participant_id_ne?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<ParticipantQueryInput>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_ne?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  salutation_gte?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  participant_id_gte?: Maybe<Scalars["String"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_ne?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  salutation_lte?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  comment_gt?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_lte?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  comment_gte?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
