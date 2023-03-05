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

export type SubscriptionQueryInput = {
  _id_exists?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_lt?: Maybe<Scalars["String"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  email_gte?: Maybe<Scalars["String"]>
  children_exists?: Maybe<Scalars["Boolean"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_gte?: Maybe<Scalars["String"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  street2_gt?: Maybe<Scalars["String"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  lastName_gt?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  phone_gt?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  city_lt?: Maybe<Scalars["String"]>
  zip_gte?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  lastName_ne?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  salutation_gt?: Maybe<Scalars["String"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  email_ne?: Maybe<Scalars["String"]>
  lastName_lt?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  street1_gte?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  zip_gt?: Maybe<Scalars["String"]>
  year_ne?: Maybe<Scalars["Int"]>
  firstName_lte?: Maybe<Scalars["String"]>
  state_lte?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  phone_ne?: Maybe<Scalars["String"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  street1?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  street2_gte?: Maybe<Scalars["String"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  children?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  phone_gte?: Maybe<Scalars["String"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  salutation_gte?: Maybe<Scalars["String"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  children_in?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  street1_ne?: Maybe<Scalars["String"]>
  street1_lt?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
  country_gt?: Maybe<Scalars["String"]>
  email_lt?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  city_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lt?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  firstName_gte?: Maybe<Scalars["String"]>
  country_lte?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  zip_ne?: Maybe<Scalars["String"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_gte?: Maybe<Scalars["Int"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline?: Maybe<Scalars["DateTime"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_exists?: Maybe<Scalars["Boolean"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  street2_ne?: Maybe<Scalars["String"]>
  street1_gt?: Maybe<Scalars["String"]>
  email_gt?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  lastName?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  children_nin?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  week_lt?: Maybe<Scalars["Int"]>
  firstName_ne?: Maybe<Scalars["String"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  phone_lte?: Maybe<Scalars["String"]>
  lastName_gte?: Maybe<Scalars["String"]>
  state_gte?: Maybe<Scalars["String"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_lte?: Maybe<Scalars["String"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gte?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  email_lte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  state?: Maybe<Scalars["String"]>
  firstName_lt?: Maybe<Scalars["String"]>
  zip_lt?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  phone?: Maybe<Scalars["String"]>
  phone_lt?: Maybe<Scalars["String"]>
  week_gt?: Maybe<Scalars["Int"]>
  year_gt?: Maybe<Scalars["Int"]>
  year_gte?: Maybe<Scalars["Int"]>
  salutation_ne?: Maybe<Scalars["String"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_lt?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_ne?: Maybe<Scalars["Int"]>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName?: Maybe<Scalars["String"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  country?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  country_ne?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastName_lte?: Maybe<Scalars["String"]>
}

export type MainInsertInput = {
  lastNameParticipant?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
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

export type Week_Capacity = {
  __typename?: "Week_capacity"
  _id?: Maybe<Scalars["ObjectId"]>
  capacity?: Maybe<Array<Maybe<Week_CapacityCapacity>>>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type Week_CapacityInsertInput = {
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  capacity?: Maybe<Array<Maybe<Week_CapacityCapacityInsertInput>>>
}

export type Query = {
  __typename?: "Query"
  detail?: Maybe<Detail>
  details: Array<Maybe<Detail>>
  main?: Maybe<Main>
  mains: Array<Maybe<Main>>
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
  sumChildsPerState?: Maybe<Array<Maybe<ChildrenPerStateItem>>>
  week?: Maybe<Week>
  week_capacities: Array<Maybe<Week_Capacity>>
  week_capacity?: Maybe<Week_Capacity>
  weeks: Array<Maybe<Week>>
}

export type QueryDetailArgs = {
  query?: Maybe<DetailQueryInput>
}

export type QueryDetailsArgs = {
  query?: Maybe<DetailQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<DetailSortByInput>
}

export type QueryMainArgs = {
  query?: Maybe<MainQueryInput>
}

export type QueryMainsArgs = {
  query?: Maybe<MainQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<MainSortByInput>
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

export type QueryWeek_CapacitiesArgs = {
  query?: Maybe<Week_CapacityQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<Week_CapacitySortByInput>
}

export type QueryWeek_CapacityArgs = {
  query?: Maybe<Week_CapacityQueryInput>
}

export type QueryWeeksArgs = {
  sortBy?: Maybe<WeekSortByInput>
  query?: Maybe<WeekQueryInput>
  limit?: Maybe<Scalars["Int"]>
}

export type Week_CapacityCapacity_IdInsertInput = {
  year?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
}

export type SubscriptionUpdateInput = {
  phone?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  year?: Maybe<Scalars["Int"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  zip?: Maybe<Scalars["String"]>
  week_inc?: Maybe<Scalars["Int"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  children?: Maybe<Array<Maybe<SubscriptionChildUpdateInput>>>
  city_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  country?: Maybe<Scalars["String"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  city?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  street1?: Maybe<Scalars["String"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  children_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
}

export type WeekUpdateInput = {
  maxParticipants_inc?: Maybe<Scalars["Int"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  published?: Maybe<Scalars["Boolean"]>
}

export type Week_CapacityCapacityQueryInput = {
  week_exists?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  _id?: Maybe<Week_CapacityCapacity_IdQueryInput>
  week?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_lte?: Maybe<Scalars["Int"]>
  year_gte?: Maybe<Scalars["Int"]>
  state_lte?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<Week_CapacityCapacityQueryInput>>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  week_gt?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sumPerStateAndWeek_gte?: Maybe<Scalars["Int"]>
  state_gte?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sumPerStateAndWeek_gt?: Maybe<Scalars["Int"]>
  year_ne?: Maybe<Scalars["Int"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_gte?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gt?: Maybe<Scalars["String"]>
  year_lt?: Maybe<Scalars["Int"]>
  state_lt?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  sumPerStateAndWeek_lt?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  sumPerStateAndWeek_exists?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<Week_CapacityCapacityQueryInput>>
  sumPerStateAndWeek_ne?: Maybe<Scalars["Int"]>
}

export type Week_CapacityCapacity_IdQueryInput = {
  year_exists?: Maybe<Scalars["Boolean"]>
  week_ne?: Maybe<Scalars["Int"]>
  year_lt?: Maybe<Scalars["Int"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_gt?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  year_gt?: Maybe<Scalars["Int"]>
  year_gte?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lte?: Maybe<Scalars["String"]>
  year_lte?: Maybe<Scalars["Int"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<Week_CapacityCapacity_IdQueryInput>>
  week_gt?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<Week_CapacityCapacity_IdQueryInput>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_lt?: Maybe<Scalars["String"]>
  week_lt?: Maybe<Scalars["Int"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  week_lte?: Maybe<Scalars["Int"]>
  year_ne?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year?: Maybe<Scalars["Int"]>
  state_gte?: Maybe<Scalars["String"]>
  state_ne?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
}

export enum DetailSortByInput {
  CityDesc = "CITY_DESC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  YearAsc = "YEAR_ASC",
  LastnameAsc = "LASTNAME_ASC",
  CityAsc = "CITY_ASC",
  DeadlineAsc = "DEADLINE_ASC",
  PhoneAsc = "PHONE_ASC",
  YearDesc = "YEAR_DESC",
  ZipDesc = "ZIP_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  EmailAsc = "EMAIL_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  WeekAsc = "WEEK_ASC",
  Street2Asc = "STREET2_ASC",
  Street2Desc = "STREET2_DESC",
  CountryDesc = "COUNTRY_DESC",
  DeadlineDesc = "DEADLINE_DESC",
  EmailDesc = "EMAIL_DESC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  PhoneDesc = "PHONE_DESC",
  Street1Asc = "STREET1_ASC",
  ZipAsc = "ZIP_ASC",
  FirstnameAsc = "FIRSTNAME_ASC",
  SalutationDesc = "SALUTATION_DESC",
  StateAsc = "STATE_ASC",
  StateDesc = "STATE_DESC",
  CountryAsc = "COUNTRY_ASC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  LastnameDesc = "LASTNAME_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  SalutationAsc = "SALUTATION_ASC",
  Street1Desc = "STREET1_DESC",
  WeekDesc = "WEEK_DESC"
}

export type SubscriptionInsertInput = {
  deadline?: Maybe<Scalars["DateTime"]>
  state?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  children?: Maybe<Array<Maybe<SubscriptionChildInsertInput>>>
  reservationDate?: Maybe<Scalars["DateTime"]>
  zip?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  street1?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
}

export type Week_CapacityCapacityUpdateInput = {
  sumPerStateAndWeek_inc?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_inc?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  _id?: Maybe<Week_CapacityCapacity_IdUpdateInput>
  state?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek_unset?: Maybe<Scalars["Boolean"]>
}

export type Detail = {
  __typename?: "Detail"
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  email?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  participants?: Maybe<Array<Maybe<Scalars["String"]>>>
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

export type Main = {
  __typename?: "Main"
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

export type Week_CapacityUpdateInput = {
  year_inc?: Maybe<Scalars["Int"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  published_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  week_inc?: Maybe<Scalars["Int"]>
  maxParticipants_inc?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  capacity?: Maybe<Array<Maybe<Week_CapacityCapacityUpdateInput>>>
  capacity_unset?: Maybe<Scalars["Boolean"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  week?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
}

export type Week_CapacityCapacity_IdUpdateInput = {
  state_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
}

export type SubscriptionChild = {
  __typename?: "SubscriptionChild"
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
}

export type Week_CapacityQueryInput = {
  published_ne?: Maybe<Scalars["Boolean"]>
  week_ne?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  year_gte?: Maybe<Scalars["Int"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  year_ne?: Maybe<Scalars["Int"]>
  year_lt?: Maybe<Scalars["Int"]>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<Week_CapacityQueryInput>>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  year?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  published?: Maybe<Scalars["Boolean"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  capacity_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  capacity_in?: Maybe<Array<Maybe<Week_CapacityCapacityQueryInput>>>
  OR?: Maybe<Array<Week_CapacityQueryInput>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  week_lt?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  week_gt?: Maybe<Scalars["Int"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  capacity?: Maybe<Array<Maybe<Week_CapacityCapacityQueryInput>>>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  week_gte?: Maybe<Scalars["Int"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  capacity_nin?: Maybe<Array<Maybe<Week_CapacityCapacityQueryInput>>>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  week?: Maybe<Scalars["Int"]>
  year_gt?: Maybe<Scalars["Int"]>
}

export type WeekInsertInput = {
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
}

export enum MainSortByInput {
  IdDesc = "_ID_DESC",
  BirthdayAsc = "BIRTHDAY_ASC",
  FirstnameparticipantDesc = "FIRSTNAMEPARTICIPANT_DESC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  FirstnameparticipantAsc = "FIRSTNAMEPARTICIPANT_ASC",
  LastnameparticipantAsc = "LASTNAMEPARTICIPANT_ASC",
  ParticipantIdAsc = "PARTICIPANT_ID_ASC",
  SalutationDesc = "SALUTATION_DESC",
  BirthdayDesc = "BIRTHDAY_DESC",
  CommentDesc = "COMMENT_DESC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  ParticipantIdDesc = "PARTICIPANT_ID_DESC",
  SalutationAsc = "SALUTATION_ASC",
  IdAsc = "_ID_ASC",
  CommentAsc = "COMMENT_ASC",
  LastnameparticipantDesc = "LASTNAMEPARTICIPANT_DESC"
}

export type Mutation = {
  __typename?: "Mutation"
  deleteManyDetails?: Maybe<DeleteManyPayload>
  deleteManyMains?: Maybe<DeleteManyPayload>
  deleteManySubscriptions?: Maybe<DeleteManyPayload>
  deleteManyWeek_capacities?: Maybe<DeleteManyPayload>
  deleteManyWeeks?: Maybe<DeleteManyPayload>
  deleteOneDetail?: Maybe<Detail>
  deleteOneMain?: Maybe<Main>
  deleteOneSubscription?: Maybe<Subscription>
  deleteOneWeek?: Maybe<Week>
  deleteOneWeek_capacity?: Maybe<Week_Capacity>
  insertManyDetails?: Maybe<InsertManyPayload>
  insertManyMains?: Maybe<InsertManyPayload>
  insertManySubscriptions?: Maybe<InsertManyPayload>
  insertManyWeek_capacities?: Maybe<InsertManyPayload>
  insertManyWeeks?: Maybe<InsertManyPayload>
  insertOneDetail?: Maybe<Detail>
  insertOneMain?: Maybe<Main>
  insertOneSubscription?: Maybe<Subscription>
  insertOneWeek?: Maybe<Week>
  insertOneWeek_capacity?: Maybe<Week_Capacity>
  replaceOneDetail?: Maybe<Detail>
  replaceOneMain?: Maybe<Main>
  replaceOneSubscription?: Maybe<Subscription>
  replaceOneWeek?: Maybe<Week>
  replaceOneWeek_capacity?: Maybe<Week_Capacity>
  updateManyDetails?: Maybe<UpdateManyPayload>
  updateManyMains?: Maybe<UpdateManyPayload>
  updateManySubscriptions?: Maybe<UpdateManyPayload>
  updateManyWeek_capacities?: Maybe<UpdateManyPayload>
  updateManyWeeks?: Maybe<UpdateManyPayload>
  updateOneDetail?: Maybe<Detail>
  updateOneMain?: Maybe<Main>
  updateOneSubscription?: Maybe<Subscription>
  updateOneWeek?: Maybe<Week>
  updateOneWeek_capacity?: Maybe<Week_Capacity>
  upsertOneDetail?: Maybe<Detail>
  upsertOneMain?: Maybe<Main>
  upsertOneSubscription?: Maybe<Subscription>
  upsertOneWeek?: Maybe<Week>
  upsertOneWeek_capacity?: Maybe<Week_Capacity>
}

export type MutationDeleteManyDetailsArgs = {
  query?: Maybe<DetailQueryInput>
}

export type MutationDeleteManyMainsArgs = {
  query?: Maybe<MainQueryInput>
}

export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationDeleteManyWeek_CapacitiesArgs = {
  query?: Maybe<Week_CapacityQueryInput>
}

export type MutationDeleteManyWeeksArgs = {
  query?: Maybe<WeekQueryInput>
}

export type MutationDeleteOneDetailArgs = {
  query: DetailQueryInput
}

export type MutationDeleteOneMainArgs = {
  query: MainQueryInput
}

export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput
}

export type MutationDeleteOneWeekArgs = {
  query: WeekQueryInput
}

export type MutationDeleteOneWeek_CapacityArgs = {
  query: Week_CapacityQueryInput
}

export type MutationInsertManyDetailsArgs = {
  data: Array<DetailInsertInput>
}

export type MutationInsertManyMainsArgs = {
  data: Array<MainInsertInput>
}

export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>
}

export type MutationInsertManyWeek_CapacitiesArgs = {
  data: Array<Week_CapacityInsertInput>
}

export type MutationInsertManyWeeksArgs = {
  data: Array<WeekInsertInput>
}

export type MutationInsertOneDetailArgs = {
  data: DetailInsertInput
}

export type MutationInsertOneMainArgs = {
  data: MainInsertInput
}

export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput
}

export type MutationInsertOneWeekArgs = {
  data: WeekInsertInput
}

export type MutationInsertOneWeek_CapacityArgs = {
  data: Week_CapacityInsertInput
}

export type MutationReplaceOneDetailArgs = {
  query?: Maybe<DetailQueryInput>
  data: DetailInsertInput
}

export type MutationReplaceOneMainArgs = {
  query?: Maybe<MainQueryInput>
  data: MainInsertInput
}

export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationReplaceOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type MutationReplaceOneWeek_CapacityArgs = {
  query?: Maybe<Week_CapacityQueryInput>
  data: Week_CapacityInsertInput
}

export type MutationUpdateManyDetailsArgs = {
  query?: Maybe<DetailQueryInput>
  set: DetailUpdateInput
}

export type MutationUpdateManyMainsArgs = {
  query?: Maybe<MainQueryInput>
  set: MainUpdateInput
}

export type MutationUpdateManySubscriptionsArgs = {
  set: SubscriptionUpdateInput
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationUpdateManyWeek_CapacitiesArgs = {
  query?: Maybe<Week_CapacityQueryInput>
  set: Week_CapacityUpdateInput
}

export type MutationUpdateManyWeeksArgs = {
  set: WeekUpdateInput
  query?: Maybe<WeekQueryInput>
}

export type MutationUpdateOneDetailArgs = {
  query?: Maybe<DetailQueryInput>
  set: DetailUpdateInput
}

export type MutationUpdateOneMainArgs = {
  query?: Maybe<MainQueryInput>
  set: MainUpdateInput
}

export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  set: WeekUpdateInput
}

export type MutationUpdateOneWeek_CapacityArgs = {
  query?: Maybe<Week_CapacityQueryInput>
  set: Week_CapacityUpdateInput
}

export type MutationUpsertOneDetailArgs = {
  query?: Maybe<DetailQueryInput>
  data: DetailInsertInput
}

export type MutationUpsertOneMainArgs = {
  query?: Maybe<MainQueryInput>
  data: MainInsertInput
}

export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationUpsertOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type MutationUpsertOneWeek_CapacityArgs = {
  query?: Maybe<Week_CapacityQueryInput>
  data: Week_CapacityInsertInput
}

export type Subscription = {
  __typename?: "Subscription"
  _id?: Maybe<Scalars["ObjectId"]>
  children?: Maybe<Array<Maybe<SubscriptionChild>>>
  city?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  email?: Maybe<Scalars["String"]>
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

export type Week_CapacityCapacity_Id = {
  __typename?: "Week_capacityCapacity_id"
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type MainQueryInput = {
  OR?: Maybe<Array<MainQueryInput>>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gt?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  comment_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  comment_gte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  comment_lt?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  salutation_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gte?: Maybe<Scalars["String"]>
  salutation_lte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  participant_id?: Maybe<Scalars["String"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_exists?: Maybe<Scalars["Boolean"]>
  salutation_gt?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  AND?: Maybe<Array<MainQueryInput>>
  participant_id_ne?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  externalUserId_lt?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_ne?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  comment_gt?: Maybe<Scalars["String"]>
}

export type DetailUpdateInput = {
  zip?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  lastName?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  participants?: Maybe<Array<Maybe<Scalars["String"]>>>
  country?: Maybe<Scalars["String"]>
  participants_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  year_inc?: Maybe<Scalars["Int"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
}

export enum WeekSortByInput {
  WeekAsc = "WEEK_ASC",
  YearAsc = "YEAR_ASC",
  YearDesc = "YEAR_DESC",
  IdDesc = "_ID_DESC",
  DateFromAsc = "DATE_FROM_ASC",
  DateFromDesc = "DATE_FROM_DESC",
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  WeekDesc = "WEEK_DESC",
  IdAsc = "_ID_ASC",
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC"
}

export type DetailInsertInput = {
  _id?: Maybe<Scalars["ObjectId"]>
  phone?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  salutation?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  participants?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
}

export enum Week_CapacitySortByInput {
  DateFromAsc = "DATE_FROM_ASC",
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  WeekDesc = "WEEK_DESC",
  YearDesc = "YEAR_DESC",
  YearAsc = "YEAR_ASC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  DateFromDesc = "DATE_FROM_DESC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC",
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  WeekAsc = "WEEK_ASC"
}

export type WeekQueryInput = {
  published_exists?: Maybe<Scalars["Boolean"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  maxParticipants?: Maybe<Scalars["Int"]>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  week_ne?: Maybe<Scalars["Int"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  year_lte?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week?: Maybe<Scalars["Int"]>
  year_ne?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  published_ne?: Maybe<Scalars["Boolean"]>
  year_gt?: Maybe<Scalars["Int"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  AND?: Maybe<Array<WeekQueryInput>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  week_exists?: Maybe<Scalars["Boolean"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  week_gte?: Maybe<Scalars["Int"]>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  published?: Maybe<Scalars["Boolean"]>
  week_gt?: Maybe<Scalars["Int"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  OR?: Maybe<Array<WeekQueryInput>>
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
}

export type DetailQueryInput = {
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  zip_lt?: Maybe<Scalars["String"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstName_lte?: Maybe<Scalars["String"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  email?: Maybe<Scalars["String"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  zip?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_lte?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  zip_gte?: Maybe<Scalars["String"]>
  phone_ne?: Maybe<Scalars["String"]>
  phone_lte?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  email_lt?: Maybe<Scalars["String"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  lastName_gte?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  OR?: Maybe<Array<DetailQueryInput>>
  salutation_lte?: Maybe<Scalars["String"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  country_ne?: Maybe<Scalars["String"]>
  lastName_ne?: Maybe<Scalars["String"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  salutation_ne?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salutation_gt?: Maybe<Scalars["String"]>
  participants_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_exists?: Maybe<Scalars["Boolean"]>
  country_lt?: Maybe<Scalars["String"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  lastName_lte?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  week_lt?: Maybe<Scalars["Int"]>
  phone_gte?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  deadline?: Maybe<Scalars["DateTime"]>
  email_gte?: Maybe<Scalars["String"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_gt?: Maybe<Scalars["String"]>
  zip_gt?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participants?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_ne?: Maybe<Scalars["String"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  street1_gte?: Maybe<Scalars["String"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  street2_lte?: Maybe<Scalars["String"]>
  lastName_gt?: Maybe<Scalars["String"]>
  firstName_lt?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  state_gt?: Maybe<Scalars["String"]>
  state_lt?: Maybe<Scalars["String"]>
  city_gte?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lte?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  salutation?: Maybe<Scalars["String"]>
  participants_exists?: Maybe<Scalars["Boolean"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  firstName_gte?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  year_ne?: Maybe<Scalars["Int"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  street2_ne?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  phone_gt?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  city_lte?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  AND?: Maybe<Array<DetailQueryInput>>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  city?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  salutation_lt?: Maybe<Scalars["String"]>
  street1_lt?: Maybe<Scalars["String"]>
  street2_gt?: Maybe<Scalars["String"]>
  email_lte?: Maybe<Scalars["String"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  street2_gte?: Maybe<Scalars["String"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  country_lte?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  firstName?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  email_gt?: Maybe<Scalars["String"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_gt?: Maybe<Scalars["String"]>
  country_gte?: Maybe<Scalars["String"]>
  phone_lt?: Maybe<Scalars["String"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  street1_ne?: Maybe<Scalars["String"]>
  lastName_lt?: Maybe<Scalars["String"]>
  street1_gt?: Maybe<Scalars["String"]>
  participants_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  zip_ne?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  week_gt?: Maybe<Scalars["Int"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_gte?: Maybe<Scalars["String"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gt?: Maybe<Scalars["String"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year?: Maybe<Scalars["Int"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  email_ne?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type MainUpdateInput = {
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type Week_CapacityCapacityInsertInput = {
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Week_CapacityCapacity_IdInsertInput>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildUpdateInput = {
  salutation?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
}

export type SubscriptionChildQueryInput = {
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  externalUserId_ne?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  salutation_gte?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  salutation_lt?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<SubscriptionChildQueryInput>>
  comment_gt?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id?: Maybe<Scalars["String"]>
  participant_id_ne?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  comment_gte?: Maybe<Scalars["String"]>
  comment_ne?: Maybe<Scalars["String"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  participant_id_gt?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<SubscriptionChildQueryInput>>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  salutation_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
}

export type Week_CapacityCapacity = {
  __typename?: "Week_capacityCapacity"
  _id?: Maybe<Week_CapacityCapacity_Id>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildInsertInput = {
  salutation?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
}

export enum SubscriptionSortByInput {
  PhoneAsc = "PHONE_ASC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  DeadlineAsc = "DEADLINE_ASC",
  Street1Asc = "STREET1_ASC",
  ZipAsc = "ZIP_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  LastnameDesc = "LASTNAME_DESC",
  PhoneDesc = "PHONE_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  SalutationDesc = "SALUTATION_DESC",
  YearAsc = "YEAR_ASC",
  IdAsc = "_ID_ASC",
  CountryDesc = "COUNTRY_DESC",
  EmailAsc = "EMAIL_ASC",
  ZipDesc = "ZIP_DESC",
  CityAsc = "CITY_ASC",
  FirstnameAsc = "FIRSTNAME_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  LastnameAsc = "LASTNAME_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  StateAsc = "STATE_ASC",
  StateDesc = "STATE_DESC",
  Street1Desc = "STREET1_DESC",
  EmailDesc = "EMAIL_DESC",
  YearDesc = "YEAR_DESC",
  SalutationAsc = "SALUTATION_ASC",
  IdDesc = "_ID_DESC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC",
  Street2Desc = "STREET2_DESC",
  CountryAsc = "COUNTRY_ASC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  Street2Asc = "STREET2_ASC",
  CityDesc = "CITY_DESC"
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
