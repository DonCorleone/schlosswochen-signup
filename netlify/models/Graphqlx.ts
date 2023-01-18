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

export type SumPerWeekAndYear_Id = {
  __typename?: "SumPerWeekAndYear_id"
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type SumPerWeekAndYear_IdUpdateInput = {
  state_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
}

export type SumPerWeekAndYear_IdQueryInput = {
  state_lt?: Maybe<Scalars["String"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  week_ne?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SumPerWeekAndYear_IdQueryInput>>
  state_gte?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year_ne?: Maybe<Scalars["Int"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_lt?: Maybe<Scalars["Int"]>
  year_gte?: Maybe<Scalars["Int"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_gt?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gt?: Maybe<Scalars["String"]>
  year_lt?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<SumPerWeekAndYear_IdQueryInput>>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  week_gt?: Maybe<Scalars["Int"]>
  state_lte?: Maybe<Scalars["String"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_exists?: Maybe<Scalars["Boolean"]>
  week_lte?: Maybe<Scalars["Int"]>
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
}

export type SubscriptionQueryInput = {
  deadline_lte?: Maybe<Scalars["DateTime"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email?: Maybe<Scalars["String"]>
  phone_ne?: Maybe<Scalars["String"]>
  year_gt?: Maybe<Scalars["Int"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gte?: Maybe<Scalars["String"]>
  lastName_lte?: Maybe<Scalars["String"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  zip_gt?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  year_gte?: Maybe<Scalars["Int"]>
  lastName?: Maybe<Scalars["String"]>
  state_lt?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  week_ne?: Maybe<Scalars["Int"]>
  state_gt?: Maybe<Scalars["String"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  year_ne?: Maybe<Scalars["Int"]>
  zip_ne?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_exists?: Maybe<Scalars["Boolean"]>
  country_ne?: Maybe<Scalars["String"]>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  week_lte?: Maybe<Scalars["Int"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  street2_lte?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  children_nin?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lte?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  zip_lt?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  street1_lt?: Maybe<Scalars["String"]>
  email_ne?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  lastName_ne?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  children_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1_lte?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  children?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  city?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_lt?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  salutation_lte?: Maybe<Scalars["String"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  email_lt?: Maybe<Scalars["String"]>
  lastName_gt?: Maybe<Scalars["String"]>
  email_gt?: Maybe<Scalars["String"]>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  city_ne?: Maybe<Scalars["String"]>
  street2_gte?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_lte?: Maybe<Scalars["String"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  country_gte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstName_gte?: Maybe<Scalars["String"]>
  email_lte?: Maybe<Scalars["String"]>
  street2_ne?: Maybe<Scalars["String"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  salutation_gte?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  year?: Maybe<Scalars["Int"]>
  street1_gte?: Maybe<Scalars["String"]>
  country_gt?: Maybe<Scalars["String"]>
  state_ne?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  year_lt?: Maybe<Scalars["Int"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  children_in?: Maybe<Array<Maybe<SubscriptionChildQueryInput>>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  city_gte?: Maybe<Scalars["String"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  street1_gt?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_gt?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_lt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  lastName_gte?: Maybe<Scalars["String"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  country_lte?: Maybe<Scalars["String"]>
  email_gte?: Maybe<Scalars["String"]>
  phone_lt?: Maybe<Scalars["String"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  firstName_lt?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  externalUserId?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  street1_ne?: Maybe<Scalars["String"]>
  year_lte?: Maybe<Scalars["Int"]>
  week_gt?: Maybe<Scalars["Int"]>
  phone_gte?: Maybe<Scalars["String"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  phone_gt?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  deadline?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["ObjectId"]>
  country_lt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  salutation_ne?: Maybe<Scalars["String"]>
  street2_gt?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  zip_gte?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
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

export type WeekInsertInput = {
  dateTo?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
}

export type SumPerWeekAndYearUpdateInput = {
  sumPerStateAndWeek_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  week_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek_inc?: Maybe<Scalars["Int"]>
  year_inc?: Maybe<Scalars["Int"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  year?: Maybe<Scalars["Int"]>
  _id?: Maybe<SumPerWeekAndYear_IdUpdateInput>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
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
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
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
  query?: Maybe<SumPerWeekAndYearQueryInput>
  data: SumPerWeekAndYearInsertInput
}

export type MutationUpsertOneWeekArgs = {
  query?: Maybe<WeekQueryInput>
  data: WeekInsertInput
}

export type SumPerWeekAndYearInsertInput = {
  _id?: Maybe<SumPerWeekAndYear_IdInsertInput>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildQueryInput = {
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  salutation_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  comment_lte?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  salutation_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  salutation_lte?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionChildQueryInput>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant?: Maybe<Scalars["String"]>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  comment_gt?: Maybe<Scalars["String"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_ne?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_gte?: Maybe<Scalars["String"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id?: Maybe<Scalars["ObjectId"]>
  OR?: Maybe<Array<SubscriptionChildQueryInput>>
  participant_id?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  participant_id_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_gt?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_gte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
}

export type SumPerWeekAndYear_IdInsertInput = {
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type SumPerWeekAndYear = {
  __typename?: "SumPerWeekAndYear"
  _id?: Maybe<SumPerWeekAndYear_Id>
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type SubscriptionChildInsertInput = {
  lastNameParticipant?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
}

export type SubscriptionUpdateInput = {
  salutation?: Maybe<Scalars["String"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  phone?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  week_inc?: Maybe<Scalars["Int"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  country?: Maybe<Scalars["String"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  deadline?: Maybe<Scalars["DateTime"]>
  lastName?: Maybe<Scalars["String"]>
  children_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  children?: Maybe<Array<Maybe<SubscriptionChildUpdateInput>>>
  _id?: Maybe<Scalars["ObjectId"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  street1?: Maybe<Scalars["String"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
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

export type SumChildPerStateInput = {
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export enum WeekSortByInput {
  MaxparticipantsDesc = "MAXPARTICIPANTS_DESC",
  YearDesc = "YEAR_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  DateFromAsc = "DATE_FROM_ASC",
  DateFromDesc = "DATE_FROM_DESC",
  MaxparticipantsAsc = "MAXPARTICIPANTS_ASC",
  DateToAsc = "DATE_TO_ASC",
  DateToDesc = "DATE_TO_DESC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC",
  YearAsc = "YEAR_ASC"
}

export type WeekUpdateInput = {
  _id_unset?: Maybe<Scalars["Boolean"]>
  year_inc?: Maybe<Scalars["Int"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  year_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  dateTo_unset?: Maybe<Scalars["Boolean"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  year?: Maybe<Scalars["Int"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  maxParticipants_inc?: Maybe<Scalars["Int"]>
  maxParticipants_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  published_unset?: Maybe<Scalars["Boolean"]>
}

export type SubscriptionChildUpdateInput = {
  comment?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["DateTime"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
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
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<SubscriptionSortByInput>
  query?: Maybe<SubscriptionQueryInput>
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

export type WeekQueryInput = {
  maxParticipants_gte?: Maybe<Scalars["Int"]>
  dateFrom_ne?: Maybe<Scalars["DateTime"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  dateTo_lte?: Maybe<Scalars["DateTime"]>
  dateFrom_lt?: Maybe<Scalars["DateTime"]>
  week_gte?: Maybe<Scalars["Int"]>
  dateFrom_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateFrom_lte?: Maybe<Scalars["DateTime"]>
  week_lt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  year_gte?: Maybe<Scalars["Int"]>
  maxParticipants_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxParticipants_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  AND?: Maybe<Array<WeekQueryInput>>
  year_gt?: Maybe<Scalars["Int"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  maxParticipants_lte?: Maybe<Scalars["Int"]>
  published_ne?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  published?: Maybe<Scalars["Boolean"]>
  year_exists?: Maybe<Scalars["Boolean"]>
  dateFrom_gt?: Maybe<Scalars["DateTime"]>
  dateTo_gt?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  week?: Maybe<Scalars["Int"]>
  OR?: Maybe<Array<WeekQueryInput>>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  dateTo_exists?: Maybe<Scalars["Boolean"]>
  week_lte?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  maxParticipants_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_lt?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  maxParticipants_gt?: Maybe<Scalars["Int"]>
  published_exists?: Maybe<Scalars["Boolean"]>
  maxParticipants_ne?: Maybe<Scalars["Int"]>
  dateTo_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateTo_gte?: Maybe<Scalars["DateTime"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  dateFrom_gte?: Maybe<Scalars["DateTime"]>
  week_ne?: Maybe<Scalars["Int"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  dateTo_ne?: Maybe<Scalars["DateTime"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateTo_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  year_lte?: Maybe<Scalars["Int"]>
  week_gt?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  dateTo_lt?: Maybe<Scalars["DateTime"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  dateFrom_exists?: Maybe<Scalars["Boolean"]>
  year_ne?: Maybe<Scalars["Int"]>
}

export type Week = {
  __typename?: "Week"
  _id?: Maybe<Scalars["ObjectId"]>
  dateFrom?: Maybe<Scalars["DateTime"]>
  dateTo?: Maybe<Scalars["DateTime"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  maxParticipants?: Maybe<Scalars["Int"]>
  published?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type SumPerWeekAndYearQueryInput = {
  sumPerStateAndWeek_exists?: Maybe<Scalars["Boolean"]>
  sumPerStateAndWeek_lte?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_lt?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  year_lte?: Maybe<Scalars["Int"]>
  year_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gte?: Maybe<Scalars["String"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_ne?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_gt?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  OR?: Maybe<Array<SumPerWeekAndYearQueryInput>>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  sumPerStateAndWeek_ne?: Maybe<Scalars["Int"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sumPerStateAndWeek_gte?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_exists?: Maybe<Scalars["Boolean"]>
  state_lte?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_lt?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<SumPerWeekAndYearQueryInput>>
  week_gt?: Maybe<Scalars["Int"]>
  state_lt?: Maybe<Scalars["String"]>
  year_gt?: Maybe<Scalars["Int"]>
  week_ne?: Maybe<Scalars["Int"]>
  sumPerStateAndWeek_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  year_gte?: Maybe<Scalars["Int"]>
  state_gt?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Int"]>
  _id?: Maybe<SumPerWeekAndYear_IdQueryInput>
  year_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  year_exists?: Maybe<Scalars["Boolean"]>
  state_ne?: Maybe<Scalars["String"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
}

export enum SubscriptionSortByInput {
  DeadlineAsc = "DEADLINE_ASC",
  EmailAsc = "EMAIL_ASC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  WeekDesc = "WEEK_DESC",
  ZipAsc = "ZIP_ASC",
  ZipDesc = "ZIP_DESC",
  CityAsc = "CITY_ASC",
  CityDesc = "CITY_DESC",
  CountryDesc = "COUNTRY_DESC",
  DeadlineDesc = "DEADLINE_DESC",
  LastnameAsc = "LASTNAME_ASC",
  YearDesc = "YEAR_DESC",
  Street2Asc = "STREET2_ASC",
  IdAsc = "_ID_ASC",
  CountryAsc = "COUNTRY_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  FirstnameAsc = "FIRSTNAME_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  Street1Asc = "STREET1_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  LastnameDesc = "LASTNAME_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  SalutationDesc = "SALUTATION_DESC",
  EmailDesc = "EMAIL_DESC",
  StateAsc = "STATE_ASC",
  IdDesc = "_ID_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  SalutationAsc = "SALUTATION_ASC",
  WeekAsc = "WEEK_ASC",
  YearAsc = "YEAR_ASC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  PhoneAsc = "PHONE_ASC",
  PhoneDesc = "PHONE_DESC",
  StateDesc = "STATE_DESC",
  Street1Desc = "STREET1_DESC",
  Street2Desc = "STREET2_DESC"
}

export type SubscriptionInsertInput = {
  city?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  firstName?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  year?: Maybe<Scalars["Int"]>
  children?: Maybe<Array<Maybe<SubscriptionChildInsertInput>>>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}
