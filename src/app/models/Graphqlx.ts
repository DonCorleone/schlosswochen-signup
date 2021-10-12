

export interface blablu{
  id:string
}

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
  deleteManyEventDetails?: Maybe<DeleteManyPayload>
  deleteManyFromBoms?: Maybe<DeleteManyPayload>
  deleteManyLocations?: Maybe<DeleteManyPayload>
  deleteManyParticipants?: Maybe<DeleteManyPayload>
  deleteManyPresses?: Maybe<DeleteManyPayload>
  deleteManySponsors?: Maybe<DeleteManyPayload>
  deleteManyStaffs?: Maybe<DeleteManyPayload>
  deleteManySubscriptions?: Maybe<DeleteManyPayload>
  deleteOneEventDetail?: Maybe<EventDetail>
  deleteOneFromBom?: Maybe<FromBom>
  deleteOneLocation?: Maybe<Location>
  deleteOneParticipant?: Maybe<Participant>
  deleteOnePress?: Maybe<Press>
  deleteOneSponsor?: Maybe<Sponsor>
  deleteOneStaff?: Maybe<Staff>
  deleteOneSubscription?: Maybe<Subscription>
  insertManyEventDetails?: Maybe<InsertManyPayload>
  insertManyFromBoms?: Maybe<InsertManyPayload>
  insertManyLocations?: Maybe<InsertManyPayload>
  insertManyParticipants?: Maybe<InsertManyPayload>
  insertManyPresses?: Maybe<InsertManyPayload>
  insertManySponsors?: Maybe<InsertManyPayload>
  insertManyStaffs?: Maybe<InsertManyPayload>
  insertManySubscriptions?: Maybe<InsertManyPayload>
  insertOneEventDetail?: Maybe<EventDetail>
  insertOneFromBom?: Maybe<FromBom>
  insertOneLocation?: Maybe<Location>
  insertOneParticipant?: Maybe<Participant>
  insertOnePress?: Maybe<Press>
  insertOneSponsor?: Maybe<Sponsor>
  insertOneStaff?: Maybe<Staff>
  insertOneSubscription?: Maybe<Subscription>
  replaceOneEventDetail?: Maybe<EventDetail>
  replaceOneFromBom?: Maybe<FromBom>
  replaceOneLocation?: Maybe<Location>
  replaceOneParticipant?: Maybe<Participant>
  replaceOnePress?: Maybe<Press>
  replaceOneSponsor?: Maybe<Sponsor>
  replaceOneStaff?: Maybe<Staff>
  replaceOneSubscription?: Maybe<Subscription>
  updateManyEventDetails?: Maybe<UpdateManyPayload>
  updateManyFromBoms?: Maybe<UpdateManyPayload>
  updateManyLocations?: Maybe<UpdateManyPayload>
  updateManyParticipants?: Maybe<UpdateManyPayload>
  updateManyPresses?: Maybe<UpdateManyPayload>
  updateManySponsors?: Maybe<UpdateManyPayload>
  updateManyStaffs?: Maybe<UpdateManyPayload>
  updateManySubscriptions?: Maybe<UpdateManyPayload>
  updateOneEventDetail?: Maybe<EventDetail>
  updateOneFromBom?: Maybe<FromBom>
  updateOneLocation?: Maybe<Location>
  updateOneParticipant?: Maybe<Participant>
  updateOnePress?: Maybe<Press>
  updateOneSponsor?: Maybe<Sponsor>
  updateOneStaff?: Maybe<Staff>
  updateOneSubscription?: Maybe<Subscription>
  upsertOneEventDetail?: Maybe<EventDetail>
  upsertOneFromBom?: Maybe<FromBom>
  upsertOneLocation?: Maybe<Location>
  upsertOneParticipant?: Maybe<Participant>
  upsertOnePress?: Maybe<Press>
  upsertOneSponsor?: Maybe<Sponsor>
  upsertOneStaff?: Maybe<Staff>
  upsertOneSubscription?: Maybe<Subscription>
}

export type MutationDeleteManyEventDetailsArgs = {
  query?: Maybe<EventDetailQueryInput>
}

export type MutationDeleteManyFromBomsArgs = {
  query?: Maybe<FromBomQueryInput>
}

export type MutationDeleteManyLocationsArgs = {
  query?: Maybe<LocationQueryInput>
}

export type MutationDeleteManyParticipantsArgs = {
  query?: Maybe<ParticipantQueryInput>
}

export type MutationDeleteManyPressesArgs = {
  query?: Maybe<PressQueryInput>
}

export type MutationDeleteManySponsorsArgs = {
  query?: Maybe<SponsorQueryInput>
}

export type MutationDeleteManyStaffsArgs = {
  query?: Maybe<StaffQueryInput>
}

export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
}

export type MutationDeleteOneEventDetailArgs = {
  query: EventDetailQueryInput
}

export type MutationDeleteOneFromBomArgs = {
  query: FromBomQueryInput
}

export type MutationDeleteOneLocationArgs = {
  query: LocationQueryInput
}

export type MutationDeleteOneParticipantArgs = {
  query: ParticipantQueryInput
}

export type MutationDeleteOnePressArgs = {
  query: PressQueryInput
}

export type MutationDeleteOneSponsorArgs = {
  query: SponsorQueryInput
}

export type MutationDeleteOneStaffArgs = {
  query: StaffQueryInput
}

export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput
}

export type MutationInsertManyEventDetailsArgs = {
  data: Array<EventDetailInsertInput>
}

export type MutationInsertManyFromBomsArgs = {
  data: Array<FromBomInsertInput>
}

export type MutationInsertManyLocationsArgs = {
  data: Array<LocationInsertInput>
}

export type MutationInsertManyParticipantsArgs = {
  data: Array<ParticipantInsertInput>
}

export type MutationInsertManyPressesArgs = {
  data: Array<PressInsertInput>
}

export type MutationInsertManySponsorsArgs = {
  data: Array<SponsorInsertInput>
}

export type MutationInsertManyStaffsArgs = {
  data: Array<StaffInsertInput>
}

export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>
}

export type MutationInsertOneEventDetailArgs = {
  data: EventDetailInsertInput
}

export type MutationInsertOneFromBomArgs = {
  data: FromBomInsertInput
}

export type MutationInsertOneLocationArgs = {
  data: LocationInsertInput
}

export type MutationInsertOneParticipantArgs = {
  data: ParticipantInsertInput
}

export type MutationInsertOnePressArgs = {
  data: PressInsertInput
}

export type MutationInsertOneSponsorArgs = {
  data: SponsorInsertInput
}

export type MutationInsertOneStaffArgs = {
  data: StaffInsertInput
}

export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput
}

export type MutationReplaceOneEventDetailArgs = {
  query?: Maybe<EventDetailQueryInput>
  data: EventDetailInsertInput
}

export type MutationReplaceOneFromBomArgs = {
  data: FromBomInsertInput
  query?: Maybe<FromBomQueryInput>
}

export type MutationReplaceOneLocationArgs = {
  query?: Maybe<LocationQueryInput>
  data: LocationInsertInput
}

export type MutationReplaceOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  data: ParticipantInsertInput
}

export type MutationReplaceOnePressArgs = {
  query?: Maybe<PressQueryInput>
  data: PressInsertInput
}

export type MutationReplaceOneSponsorArgs = {
  query?: Maybe<SponsorQueryInput>
  data: SponsorInsertInput
}

export type MutationReplaceOneStaffArgs = {
  query?: Maybe<StaffQueryInput>
  data: StaffInsertInput
}

export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type MutationUpdateManyEventDetailsArgs = {
  query?: Maybe<EventDetailQueryInput>
  set: EventDetailUpdateInput
}

export type MutationUpdateManyFromBomsArgs = {
  query?: Maybe<FromBomQueryInput>
  set: FromBomUpdateInput
}

export type MutationUpdateManyLocationsArgs = {
  query?: Maybe<LocationQueryInput>
  set: LocationUpdateInput
}

export type MutationUpdateManyParticipantsArgs = {
  set: ParticipantUpdateInput
  query?: Maybe<ParticipantQueryInput>
}

export type MutationUpdateManyPressesArgs = {
  set: PressUpdateInput
  query?: Maybe<PressQueryInput>
}

export type MutationUpdateManySponsorsArgs = {
  query?: Maybe<SponsorQueryInput>
  set: SponsorUpdateInput
}

export type MutationUpdateManyStaffsArgs = {
  query?: Maybe<StaffQueryInput>
  set: StaffUpdateInput
}

export type MutationUpdateManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpdateOneEventDetailArgs = {
  query?: Maybe<EventDetailQueryInput>
  set: EventDetailUpdateInput
}

export type MutationUpdateOneFromBomArgs = {
  query?: Maybe<FromBomQueryInput>
  set: FromBomUpdateInput
}

export type MutationUpdateOneLocationArgs = {
  query?: Maybe<LocationQueryInput>
  set: LocationUpdateInput
}

export type MutationUpdateOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  set: ParticipantUpdateInput
}

export type MutationUpdateOnePressArgs = {
  set: PressUpdateInput
  query?: Maybe<PressQueryInput>
}

export type MutationUpdateOneSponsorArgs = {
  query?: Maybe<SponsorQueryInput>
  set: SponsorUpdateInput
}

export type MutationUpdateOneStaffArgs = {
  query?: Maybe<StaffQueryInput>
  set: StaffUpdateInput
}

export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  set: SubscriptionUpdateInput
}

export type MutationUpsertOneEventDetailArgs = {
  query?: Maybe<EventDetailQueryInput>
  data: EventDetailInsertInput
}

export type MutationUpsertOneFromBomArgs = {
  query?: Maybe<FromBomQueryInput>
  data: FromBomInsertInput
}

export type MutationUpsertOneLocationArgs = {
  query?: Maybe<LocationQueryInput>
  data: LocationInsertInput
}

export type MutationUpsertOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  data: ParticipantInsertInput
}

export type MutationUpsertOnePressArgs = {
  data: PressInsertInput
  query?: Maybe<PressQueryInput>
}

export type MutationUpsertOneSponsorArgs = {
  query?: Maybe<SponsorQueryInput>
  data: SponsorInsertInput
}

export type MutationUpsertOneStaffArgs = {
  query?: Maybe<StaffQueryInput>
  data: StaffInsertInput
}

export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>
  data: SubscriptionInsertInput
}

export type LocationInsertInput = {
  name?: Maybe<Scalars["String"]>
  postalCode?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  directions?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
}

export type EventDetailEventInfoQueryInput = {
  _id?: Maybe<Scalars["Int"]>
  city_lt?: Maybe<Scalars["String"]>
  googleMapLink_gte?: Maybe<Scalars["String"]>
  artists_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImagePath_exists?: Maybe<Scalars["Boolean"]>
  flyerImage_lte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["Int"]>
  location_lt?: Maybe<Scalars["String"]>
  address_lt?: Maybe<Scalars["String"]>
  posRemark_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImagePath_exists?: Maybe<Scalars["Boolean"]>
  googleMapLink_lte?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  longDescription_gt?: Maybe<Scalars["String"]>
  posRemark_gt?: Maybe<Scalars["String"]>
  url_exists?: Maybe<Scalars["Boolean"]>
  city_ne?: Maybe<Scalars["String"]>
  bannerImage_lte?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  longDescription_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId_lte?: Maybe<Scalars["Int"]>
  artists_gte?: Maybe<Scalars["String"]>
  address_exists?: Maybe<Scalars["Boolean"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  longDescription_gte?: Maybe<Scalars["String"]>
  googleMapLink_ne?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  url_lte?: Maybe<Scalars["String"]>
  address_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<EventDetailEventInfoQueryInput>>
  bannerImagePath_gt?: Maybe<Scalars["String"]>
  location_exists?: Maybe<Scalars["Boolean"]>
  googleMapLink_gt?: Maybe<Scalars["String"]>
  address_lte?: Maybe<Scalars["String"]>
  bannerImagePath_ne?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  url_gt?: Maybe<Scalars["String"]>
  flyerImage_gt?: Maybe<Scalars["String"]>
  flyerImagePath_lte?: Maybe<Scalars["String"]>
  googleMapLink_exists?: Maybe<Scalars["Boolean"]>
  flyerImage_lt?: Maybe<Scalars["String"]>
  longDescription_lte?: Maybe<Scalars["String"]>
  importantNotes_gt?: Maybe<Scalars["String"]>
  name_ne?: Maybe<Scalars["String"]>
  importantNotes_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_lt?: Maybe<Scalars["String"]>
  address?: Maybe<Scalars["String"]>
  organizerRemark_lte?: Maybe<Scalars["String"]>
  bannerImage_lt?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  flyerImagePath_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImage_gte?: Maybe<Scalars["String"]>
  location_gte?: Maybe<Scalars["String"]>
  url_lt?: Maybe<Scalars["String"]>
  shortDescription_lte?: Maybe<Scalars["String"]>
  name_lt?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<EventDetailEventInfoQueryInput>>
  url_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  googleMapLink?: Maybe<Scalars["String"]>
  languageId_exists?: Maybe<Scalars["Boolean"]>
  url_ne?: Maybe<Scalars["String"]>
  organizerRemark_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleMapLink_lt?: Maybe<Scalars["String"]>
  location_lte?: Maybe<Scalars["String"]>
  url_gte?: Maybe<Scalars["String"]>
  shortDescription_lt?: Maybe<Scalars["String"]>
  location_gt?: Maybe<Scalars["String"]>
  organizerRemark_gt?: Maybe<Scalars["String"]>
  bannerImage_exists?: Maybe<Scalars["Boolean"]>
  posRemark_ne?: Maybe<Scalars["String"]>
  importantNotes_ne?: Maybe<Scalars["String"]>
  bannerImage_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImagePath_lt?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  flyerImagePath_gt?: Maybe<Scalars["String"]>
  googleMapLink_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_gt?: Maybe<Scalars["String"]>
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gte?: Maybe<Scalars["Int"]>
  flyerImage_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_exists?: Maybe<Scalars["Boolean"]>
  address_gte?: Maybe<Scalars["String"]>
  bannerImage_gt?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["Int"]>
  flyerImage?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  organizerRemark_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_exists?: Maybe<Scalars["Boolean"]>
  importantNotes?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  organizerRemark_ne?: Maybe<Scalars["String"]>
  bannerImagePath_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  importantNotes_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId?: Maybe<Scalars["Int"]>
  shortDescription_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImagePath_lt?: Maybe<Scalars["String"]>
  organizerRemark_lt?: Maybe<Scalars["String"]>
  bannerImagePath_gte?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  longDescription_ne?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  longDescription_exists?: Maybe<Scalars["Boolean"]>
  city_gte?: Maybe<Scalars["String"]>
  bannerImage_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  shortDescription_gt?: Maybe<Scalars["String"]>
  bannerImagePath_lte?: Maybe<Scalars["String"]>
  artists_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  posRemark_gte?: Maybe<Scalars["String"]>
  posRemark_lt?: Maybe<Scalars["String"]>
  importantNotes_exists?: Maybe<Scalars["Boolean"]>
  shortDescription_ne?: Maybe<Scalars["String"]>
  location_ne?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["Int"]>
  importantNotes_lte?: Maybe<Scalars["String"]>
  posRemark_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImagePath_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImage_ne?: Maybe<Scalars["String"]>
  artists_ne?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  shortDescription_gte?: Maybe<Scalars["String"]>
  flyerImagePath_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  address_ne?: Maybe<Scalars["String"]>
  artists_lte?: Maybe<Scalars["String"]>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  location_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  shortDescription_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId_gt?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["Int"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  posRemark_exists?: Maybe<Scalars["Boolean"]>
  flyerImagePath_ne?: Maybe<Scalars["String"]>
  flyerImage_gte?: Maybe<Scalars["String"]>
  flyerImage_exists?: Maybe<Scalars["Boolean"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  longDescription_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  importantNotes_lt?: Maybe<Scalars["String"]>
  googleMapLink_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  organizerRemark_exists?: Maybe<Scalars["Boolean"]>
  languageId_gte?: Maybe<Scalars["Int"]>
  location_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  address_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImage_ne?: Maybe<Scalars["String"]>
  flyerImage_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  posRemark_lte?: Maybe<Scalars["String"]>
  shortDescription_exists?: Maybe<Scalars["Boolean"]>
  name_gte?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  longDescription_lt?: Maybe<Scalars["String"]>
  languageId_ne?: Maybe<Scalars["Int"]>
  organizerRemark_gte?: Maybe<Scalars["String"]>
  flyerImagePath_gte?: Maybe<Scalars["String"]>
  languageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  address_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  languageId_lt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  importantNotes_gte?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
}

export enum StaffSortByInput {
  TopicAsc = "TOPIC_ASC",
  TopicDesc = "TOPIC_DESC",
  IdAsc = "_ID_ASC",
  NameAsc = "NAME_ASC",
  SortorderAsc = "SORTORDER_ASC",
  SortorderDesc = "SORTORDER_DESC",
  IdDesc = "_ID_DESC",
  BioAsc = "BIO_ASC",
  BioDesc = "BIO_DESC",
  NameDesc = "NAME_DESC"
}

export type EventDetailTicketTypeTicketTypeInfo = {
  __typename?: "EventDetailTicketTypeTicketTypeInfo"
  _id?: Maybe<Scalars["Int"]>
  additionalFile?: Maybe<Scalars["String"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  croppedImageData?: Maybe<Scalars["String"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  emailSubject?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  presentation?: Maybe<Scalars["String"]>
  senderName?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
}

export enum EventDetailSortByInput {
  NotificationemailDesc = "NOTIFICATIONEMAIL_DESC",
  EndDesc = "END_DESC",
  MaxticketsproorderAsc = "MAXTICKETSPROORDER_ASC",
  OpendoorDesc = "OPENDOOR_DESC",
  ZonemapidDesc = "ZONEMAPID_DESC",
  DatemodifiedDesc = "DATEMODIFIED_DESC",
  LocationidDesc = "LOCATIONID_DESC",
  PostsaleclosestatusAsc = "POSTSALECLOSESTATUS_ASC",
  TenantidAsc = "TENANTID_ASC",
  WarningsenddateAsc = "WARNINGSENDDATE_ASC",
  OrganizergoogleanalyticsdomainAsc = "ORGANIZERGOOGLEANALYTICSDOMAIN_ASC",
  TenantidDesc = "TENANTID_DESC",
  CountryidDesc = "COUNTRYID_DESC",
  DatecreatedAsc = "DATECREATED_ASC",
  GoogleanalyticstrackerAsc = "GOOGLEANALYTICSTRACKER_ASC",
  LatitudeAsc = "LATITUDE_ASC",
  MaxticketsAsc = "MAXTICKETS_ASC",
  SaleswarninglevelAsc = "SALESWARNINGLEVEL_ASC",
  EmailtemplateAsc = "EMAILTEMPLATE_ASC",
  ExternaleventcodeDesc = "EXTERNALEVENTCODE_DESC",
  LatitudeDesc = "LATITUDE_DESC",
  OpendoorAsc = "OPENDOOR_ASC",
  DatemodifiedAsc = "DATEMODIFIED_ASC",
  DefaultlanguageidDesc = "DEFAULTLANGUAGEID_DESC",
  LocationidAsc = "LOCATIONID_ASC",
  MastereventidDesc = "MASTEREVENTID_DESC",
  StartDesc = "START_DESC",
  OrganizergoogleanalyticsdomainDesc = "ORGANIZERGOOGLEANALYTICSDOMAIN_DESC",
  ShippingfeeAsc = "SHIPPINGFEE_ASC",
  StartAsc = "START_ASC",
  DatecreatedDesc = "DATECREATED_DESC",
  EventgenrevalueDesc = "EVENTGENREVALUE_DESC",
  FacebookpixelidAsc = "FACEBOOKPIXELID_ASC",
  GoogleanalyticstrackerDesc = "GOOGLEANALYTICSTRACKER_DESC",
  GooglecoordinatesDesc = "GOOGLECOORDINATES_DESC",
  WarningsenddateDesc = "WARNINGSENDDATE_DESC",
  GooglecoordinatesAsc = "GOOGLECOORDINATES_ASC",
  MaxticketsDesc = "MAXTICKETS_DESC",
  MaxticketsproorderDesc = "MAXTICKETSPROORDER_DESC",
  SalesregionidDesc = "SALESREGIONID_DESC",
  MastereventidAsc = "MASTEREVENTID_ASC",
  NotificationemailAsc = "NOTIFICATIONEMAIL_ASC",
  SalesregionidAsc = "SALESREGIONID_ASC",
  StatusAsc = "STATUS_ASC",
  DefaultlanguageidAsc = "DEFAULTLANGUAGEID_ASC",
  EventgenrevalueAsc = "EVENTGENREVALUE_ASC",
  FacebookpixelidDesc = "FACEBOOKPIXELID_DESC",
  OrganizeridDesc = "ORGANIZERID_DESC",
  IdDesc = "_ID_DESC",
  CountryidAsc = "COUNTRYID_ASC",
  PostsaleclosestatusDesc = "POSTSALECLOSESTATUS_DESC",
  EndAsc = "END_ASC",
  ExternaleventcodeAsc = "EXTERNALEVENTCODE_ASC",
  ForceemptyseatsAsc = "FORCEEMPTYSEATS_ASC",
  LongitudeDesc = "LONGITUDE_DESC",
  StatusDesc = "STATUS_DESC",
  OrganizeridAsc = "ORGANIZERID_ASC",
  SaleswarninglevelDesc = "SALESWARNINGLEVEL_DESC",
  VatnumberDesc = "VATNUMBER_DESC",
  ShippingfeeDesc = "SHIPPINGFEE_DESC",
  VatnumberAsc = "VATNUMBER_ASC",
  ZonemapidAsc = "ZONEMAPID_ASC",
  IdAsc = "_ID_ASC",
  EmailtemplateDesc = "EMAILTEMPLATE_DESC",
  ForceemptyseatsDesc = "FORCEEMPTYSEATS_DESC",
  LongitudeAsc = "LONGITUDE_ASC"
}

export type Staff = {
  __typename?: "Staff"
  _id?: Maybe<Scalars["ObjectId"]>
  active?: Maybe<Scalars["Boolean"]>
  bio?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
}

export type SubscriptionParticipantsRelationInput = {
  create?: Maybe<Array<Maybe<ParticipantInsertInput>>>
  link?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type EventDetailTicketTypeTicketTypeInfoInsertInput = {
  name?: Maybe<Scalars["String"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  presentation?: Maybe<Scalars["String"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  additionalFile?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  croppedImageData?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  senderName?: Maybe<Scalars["String"]>
  deleted?: Maybe<Scalars["Boolean"]>
  emailSubject?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
}

export type FromBomChildInsertInput = {
  Geburtstag?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Anrede?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
}

export type EventDetailQueryInput = {
  openDoor_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  organizerId_gt?: Maybe<Scalars["Int"]>
  shippingFee_lte?: Maybe<Scalars["Float"]>
  eventGenreValue_gt?: Maybe<Scalars["Int"]>
  eventInfos_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["Int"]>
  isPhoneMandatory_ne?: Maybe<Scalars["Boolean"]>
  warningSendDate_ne?: Maybe<Scalars["String"]>
  shippingFee_lt?: Maybe<Scalars["Float"]>
  countryId_lt?: Maybe<Scalars["Int"]>
  emailTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleAnalyticsTracker_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  openDoor_exists?: Maybe<Scalars["Boolean"]>
  externalEventCode_lt?: Maybe<Scalars["String"]>
  sendNotificationByEmail_ne?: Maybe<Scalars["Boolean"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  eventGenreValue_lte?: Maybe<Scalars["Int"]>
  latitude_lte?: Maybe<Scalars["Float"]>
  emailTemplate_ne?: Maybe<Scalars["String"]>
  maxTickets_gte?: Maybe<Scalars["Int"]>
  latitude_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  maxTickets_exists?: Maybe<Scalars["Boolean"]>
  dateModified_lt?: Maybe<Scalars["DateTime"]>
  defaultLanguageId_lt?: Maybe<Scalars["Int"]>
  masterEventId_ne?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_gt?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_gte?: Maybe<Scalars["String"]>
  organizerGoogleAnalyticsDomain_exists?: Maybe<Scalars["Boolean"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  status_exists?: Maybe<Scalars["Boolean"]>
  countryId?: Maybe<Scalars["Int"]>
  emailTemplate_exists?: Maybe<Scalars["Boolean"]>
  end_lt?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  latitude_exists?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_lt?: Maybe<Scalars["Int"]>
  vatNumber_lt?: Maybe<Scalars["String"]>
  tenantId_gt?: Maybe<Scalars["Int"]>
  masterEventId_lt?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_gt?: Maybe<Scalars["String"]>
  status_ne?: Maybe<Scalars["Int"]>
  facebookPixelId_lte?: Maybe<Scalars["String"]>
  vatNumber_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  stay22Active_ne?: Maybe<Scalars["Boolean"]>
  locationId_exists?: Maybe<Scalars["Boolean"]>
  showLinkToGoogleMap_ne?: Maybe<Scalars["Boolean"]>
  vatNumber?: Maybe<Scalars["String"]>
  salesWarningLevel_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  externalEventCode_gt?: Maybe<Scalars["String"]>
  longitude_lt?: Maybe<Scalars["Float"]>
  shippingFee_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  dateModified_exists?: Maybe<Scalars["Boolean"]>
  ticketTypes_in?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  warningSendDate_gt?: Maybe<Scalars["String"]>
  dateCreated_gt?: Maybe<Scalars["DateTime"]>
  postSaleCloseStatus_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  emailTemplate_gte?: Maybe<Scalars["String"]>
  locationId_lt?: Maybe<Scalars["Int"]>
  shippingFee_exists?: Maybe<Scalars["Boolean"]>
  openDoor_lte?: Maybe<Scalars["DateTime"]>
  warningSendDate?: Maybe<Scalars["String"]>
  maxTickets?: Maybe<Scalars["Int"]>
  tenantId_ne?: Maybe<Scalars["Int"]>
  end_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  zoneMapId_lt?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_gt?: Maybe<Scalars["String"]>
  emailTemplate_lt?: Maybe<Scalars["String"]>
  salesRegionId_gte?: Maybe<Scalars["Int"]>
  noVatOnCommission_ne?: Maybe<Scalars["Boolean"]>
  forceEmptySeats_lt?: Maybe<Scalars["Int"]>
  dateModified_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  notificationEmail_ne?: Maybe<Scalars["String"]>
  googleCoordinates_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_gte?: Maybe<Scalars["Int"]>
  googleCoordinates_lt?: Maybe<Scalars["String"]>
  sendWarning_ne?: Maybe<Scalars["Boolean"]>
  googleCoordinates_ne?: Maybe<Scalars["String"]>
  tenantId_lt?: Maybe<Scalars["Int"]>
  longitude_lte?: Maybe<Scalars["Float"]>
  googleCoordinates_gt?: Maybe<Scalars["String"]>
  emailTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalEventCode_gte?: Maybe<Scalars["String"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  notificationEmail_lte?: Maybe<Scalars["String"]>
  status_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salesRegionId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  latitude_gte?: Maybe<Scalars["Float"]>
  latitude?: Maybe<Scalars["Float"]>
  ticketTypes_exists?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  zoneMapId_lte?: Maybe<Scalars["Int"]>
  end_ne?: Maybe<Scalars["DateTime"]>
  eventGenreValue_ne?: Maybe<Scalars["Int"]>
  dateModified_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  sendNotificationByEmail_exists?: Maybe<Scalars["Boolean"]>
  masterEventId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salesRegionId_gt?: Maybe<Scalars["Int"]>
  zoneMapId_gt?: Maybe<Scalars["Int"]>
  googleCoordinates_gte?: Maybe<Scalars["String"]>
  warningSendDate_lte?: Maybe<Scalars["String"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  organizerId_gte?: Maybe<Scalars["Int"]>
  masterEventId_exists?: Maybe<Scalars["Boolean"]>
  latitude_ne?: Maybe<Scalars["Float"]>
  forceEmptySeats_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  locationId_lte?: Maybe<Scalars["Int"]>
  dateModified_gt?: Maybe<Scalars["DateTime"]>
  showLinkToGoogleMap_exists?: Maybe<Scalars["Boolean"]>
  locationId_ne?: Maybe<Scalars["Int"]>
  start_gte?: Maybe<Scalars["DateTime"]>
  notificationEmail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleCoordinates_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  status_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  status_lte?: Maybe<Scalars["Int"]>
  start_ne?: Maybe<Scalars["DateTime"]>
  forceEmptySeats_exists?: Maybe<Scalars["Boolean"]>
  locationId_gt?: Maybe<Scalars["Int"]>
  salesWarningLevel_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_lte?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_ne?: Maybe<Scalars["String"]>
  vatNumber_gt?: Maybe<Scalars["String"]>
  defaultLanguageId_exists?: Maybe<Scalars["Boolean"]>
  _id_lt?: Maybe<Scalars["Int"]>
  latitude_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  notificationEmail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  defaultLanguageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateCreated?: Maybe<Scalars["DateTime"]>
  forceEmptySeats_lte?: Maybe<Scalars["Int"]>
  noVatOnCommission_exists?: Maybe<Scalars["Boolean"]>
  locationId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  countryId_gte?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  zoneMapId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salesWarningLevel_gt?: Maybe<Scalars["Int"]>
  organizerId_ne?: Maybe<Scalars["Int"]>
  masterEventId_gte?: Maybe<Scalars["Int"]>
  locationId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  emailTemplate_gt?: Maybe<Scalars["String"]>
  notificationEmail_exists?: Maybe<Scalars["Boolean"]>
  facebookPixelId_ne?: Maybe<Scalars["String"]>
  start_gt?: Maybe<Scalars["DateTime"]>
  externalEventCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  end_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  defaultLanguageId_gt?: Maybe<Scalars["Int"]>
  start_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  maxTicketsProOrder_gte?: Maybe<Scalars["Int"]>
  salesWarningLevel_lte?: Maybe<Scalars["Int"]>
  locationId_gte?: Maybe<Scalars["Int"]>
  dateModified_lte?: Maybe<Scalars["DateTime"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  dateCreated_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  longitude_gte?: Maybe<Scalars["Float"]>
  masterEventId?: Maybe<Scalars["Int"]>
  end_gt?: Maybe<Scalars["DateTime"]>
  organizerId_lt?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  maxTickets_ne?: Maybe<Scalars["Int"]>
  zoneMapId_ne?: Maybe<Scalars["Int"]>
  zoneMapId_exists?: Maybe<Scalars["Boolean"]>
  notificationEmail_lt?: Maybe<Scalars["String"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  maxTickets_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  masterEventId_lte?: Maybe<Scalars["Int"]>
  facebookPixelId_gt?: Maybe<Scalars["String"]>
  postSaleCloseStatus_exists?: Maybe<Scalars["Boolean"]>
  externalEventCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  latitude_lt?: Maybe<Scalars["Float"]>
  maxTicketsProOrder_lt?: Maybe<Scalars["Int"]>
  countryId_exists?: Maybe<Scalars["Boolean"]>
  tenantId_gte?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  status_gt?: Maybe<Scalars["Int"]>
  eventGenreValue_exists?: Maybe<Scalars["Boolean"]>
  warningSendDate_exists?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_ne?: Maybe<Scalars["Int"]>
  AND?: Maybe<Array<EventDetailQueryInput>>
  isActiveForSale_ne?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_lte?: Maybe<Scalars["Int"]>
  dateCreated_lt?: Maybe<Scalars["DateTime"]>
  organizerId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isCompanyNameMandatory_ne?: Maybe<Scalars["Boolean"]>
  maxTickets_lt?: Maybe<Scalars["Int"]>
  facebookPixelId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  facebookPixelId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  salesRegionId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  externalEventCode_exists?: Maybe<Scalars["Boolean"]>
  countryId_lte?: Maybe<Scalars["Int"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  openDoor_gt?: Maybe<Scalars["DateTime"]>
  tenantId_lte?: Maybe<Scalars["Int"]>
  organizerId_lte?: Maybe<Scalars["Int"]>
  maxTickets_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salesRegionId_exists?: Maybe<Scalars["Boolean"]>
  status_lt?: Maybe<Scalars["Int"]>
  openDoor_ne?: Maybe<Scalars["DateTime"]>
  salesWarningLevel_lt?: Maybe<Scalars["Int"]>
  eventGenreValue_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  externalEventCode?: Maybe<Scalars["String"]>
  externalEventCode_lte?: Maybe<Scalars["String"]>
  emailTemplate_lte?: Maybe<Scalars["String"]>
  maxTicketsProOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isBankInternalEvent_ne?: Maybe<Scalars["Boolean"]>
  organizerId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isCompanyNameMandatory_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  maxTickets_lte?: Maybe<Scalars["Int"]>
  OR?: Maybe<Array<EventDetailQueryInput>>
  hideEventInfoOnSoldOut_exists?: Maybe<Scalars["Boolean"]>
  countryId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  facebookPixelId_gte?: Maybe<Scalars["String"]>
  organizerId?: Maybe<Scalars["Int"]>
  longitude_exists?: Maybe<Scalars["Boolean"]>
  longitude_ne?: Maybe<Scalars["Float"]>
  dateCreated_gte?: Maybe<Scalars["DateTime"]>
  countryId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  hideEventInfoOnSoldOut_ne?: Maybe<Scalars["Boolean"]>
  dateCreated_lte?: Maybe<Scalars["DateTime"]>
  maxTicketsProOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  start_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  postSaleCloseStatus_ne?: Maybe<Scalars["Int"]>
  tenantId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  facebookPixelId_exists?: Maybe<Scalars["Boolean"]>
  openDoor_gte?: Maybe<Scalars["DateTime"]>
  forceEmptySeats_gte?: Maybe<Scalars["Int"]>
  vatNumber_lte?: Maybe<Scalars["String"]>
  shippingFee_ne?: Maybe<Scalars["Float"]>
  start_lte?: Maybe<Scalars["DateTime"]>
  masterEventId_gt?: Maybe<Scalars["Int"]>
  forceEmptySeats_gt?: Maybe<Scalars["Int"]>
  warningSendDate_gte?: Maybe<Scalars["String"]>
  countryId_gt?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_lt?: Maybe<Scalars["String"]>
  googleCoordinates_exists?: Maybe<Scalars["Boolean"]>
  stay22Active_exists?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  postSaleCloseStatus_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  salesRegionId_lte?: Maybe<Scalars["Int"]>
  notificationEmail_gt?: Maybe<Scalars["String"]>
  countryId_ne?: Maybe<Scalars["Int"]>
  end_exists?: Maybe<Scalars["Boolean"]>
  _id_gt?: Maybe<Scalars["Int"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  end_lte?: Maybe<Scalars["DateTime"]>
  organizerId_exists?: Maybe<Scalars["Boolean"]>
  end_gte?: Maybe<Scalars["DateTime"]>
  locationId?: Maybe<Scalars["Int"]>
  latitude_gt?: Maybe<Scalars["Float"]>
  vatNumber_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sendWarning?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["Int"]>
  salesWarningLevel_exists?: Maybe<Scalars["Boolean"]>
  notificationEmail_gte?: Maybe<Scalars["String"]>
  forceEmptySeats_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  tenantId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  organizerGoogleAnalyticsDomain_lte?: Maybe<Scalars["String"]>
  eventGenreValue_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  eventInfos_in?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  salesRegionId_lt?: Maybe<Scalars["Int"]>
  salesWarningLevel_gte?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  longitude_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  status_gte?: Maybe<Scalars["Int"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_exists?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  vatNumber_exists?: Maybe<Scalars["Boolean"]>
  eventGenreValue_gte?: Maybe<Scalars["Int"]>
  postSaleCloseStatus_gt?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_lt?: Maybe<Scalars["String"]>
  defaultLanguageId_lte?: Maybe<Scalars["Int"]>
  longitude_gt?: Maybe<Scalars["Float"]>
  forceEmptySeats_ne?: Maybe<Scalars["Int"]>
  salesRegionId_ne?: Maybe<Scalars["Int"]>
  isBankInternalEvent_exists?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder_lte?: Maybe<Scalars["Int"]>
  eventGenreValue_lt?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  warningSendDate_lt?: Maybe<Scalars["String"]>
  start_lt?: Maybe<Scalars["DateTime"]>
  longitude?: Maybe<Scalars["Float"]>
  dateCreated_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  googleAnalyticsTracker_gte?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  isPhoneMandatory_exists?: Maybe<Scalars["Boolean"]>
  hideOnEventList_ne?: Maybe<Scalars["Boolean"]>
  facebookPixelId_lt?: Maybe<Scalars["String"]>
  notificationEmail?: Maybe<Scalars["String"]>
  shippingFee_gt?: Maybe<Scalars["Float"]>
  zoneMapId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketTypes_nin?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  externalEventCode_ne?: Maybe<Scalars["String"]>
  warningSendDate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  defaultLanguageId_gte?: Maybe<Scalars["Int"]>
  openDoor_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  openDoor_lt?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain_ne?: Maybe<Scalars["String"]>
  maxTickets_gt?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isActiveForSale_exists?: Maybe<Scalars["Boolean"]>
  googleCoordinates_lte?: Maybe<Scalars["String"]>
  zoneMapId_gte?: Maybe<Scalars["Int"]>
  dateModified_gte?: Maybe<Scalars["DateTime"]>
  longitude_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  vatNumber_ne?: Maybe<Scalars["String"]>
  shippingFee?: Maybe<Scalars["Float"]>
  defaultLanguageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  shippingFee_gte?: Maybe<Scalars["Float"]>
  sendWarning_exists?: Maybe<Scalars["Boolean"]>
  dateModified_ne?: Maybe<Scalars["DateTime"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  tenantId_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_ne?: Maybe<Scalars["DateTime"]>
  start_exists?: Maybe<Scalars["Boolean"]>
  warningSendDate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  masterEventId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxTicketsProOrder_ne?: Maybe<Scalars["Int"]>
  end?: Maybe<Scalars["DateTime"]>
  eventInfos_nin?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  shippingFee_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  googleAnalyticsTracker_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  hideOnEventList_exists?: Maybe<Scalars["Boolean"]>
  vatNumber_gte?: Maybe<Scalars["String"]>
  salesWarningLevel_ne?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_lte?: Maybe<Scalars["String"]>
}

export type EventDetailTicketType = {
  __typename?: "EventDetailTicketType"
  _id?: Maybe<Scalars["Int"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  colorCode?: Maybe<Scalars["String"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  currency?: Maybe<Scalars["String"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventId?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  isActive?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  price?: Maybe<Scalars["Float"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  replyTo?: Maybe<Scalars["String"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  sortOrder?: Maybe<Scalars["Int"]>
  start?: Maybe<Scalars["DateTime"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  ticketTypeInfos?: Maybe<Array<Maybe<EventDetailTicketTypeTicketTypeInfo>>>
  ticketsTotal?: Maybe<Scalars["Int"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  vatTypeId?: Maybe<Scalars["Int"]>
}

export type Press = {
  __typename?: "Press"
  _id?: Maybe<Scalars["ObjectId"]>
  author?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["DateTime"]>
  desc?: Maybe<Scalars["String"]>
  fileExtension?: Maybe<Scalars["String"]>
  link?: Maybe<Scalars["String"]>
  nr?: Maybe<Scalars["String"]>
  quote?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
}

export enum PressSortByInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  AuthorAsc = "AUTHOR_ASC",
  DateAsc = "DATE_ASC",
  SourceDesc = "SOURCE_DESC",
  FileextensionAsc = "FILEEXTENSION_ASC",
  FileextensionDesc = "FILEEXTENSION_DESC",
  LinkAsc = "LINK_ASC",
  NrAsc = "NR_ASC",
  AuthorDesc = "AUTHOR_DESC",
  DescDesc = "DESC_DESC",
  NrDesc = "NR_DESC",
  QuoteDesc = "QUOTE_DESC",
  DateDesc = "DATE_DESC",
  DescAsc = "DESC_ASC",
  LinkDesc = "LINK_DESC",
  QuoteAsc = "QUOTE_ASC",
  SourceAsc = "SOURCE_ASC"
}

export type ParticipantInsertInput = {
  birthday?: Maybe<Scalars["DateTime"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  externalUserId?: Maybe<Scalars["String"]>
}

export type PressUpdateInput = {
  desc?: Maybe<Scalars["String"]>
  link?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  date?: Maybe<Scalars["DateTime"]>
  link_unset?: Maybe<Scalars["Boolean"]>
  desc_unset?: Maybe<Scalars["Boolean"]>
  quote?: Maybe<Scalars["String"]>
  nr_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  author?: Maybe<Scalars["String"]>
  fileExtension_unset?: Maybe<Scalars["Boolean"]>
  author_unset?: Maybe<Scalars["Boolean"]>
  date_unset?: Maybe<Scalars["Boolean"]>
  fileExtension?: Maybe<Scalars["String"]>
  nr?: Maybe<Scalars["String"]>
  quote_unset?: Maybe<Scalars["Boolean"]>
  source_unset?: Maybe<Scalars["Boolean"]>
}

export type SponsorQueryInput = {
  _id_ne?: Maybe<Scalars["ObjectId"]>
  image_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_gte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  image?: Maybe<Scalars["String"]>
  image_lt?: Maybe<Scalars["String"]>
  image_ne?: Maybe<Scalars["String"]>
  image_gt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  name_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SponsorQueryInput>>
  name_lte?: Maybe<Scalars["String"]>
  url_lt?: Maybe<Scalars["String"]>
  name_lt?: Maybe<Scalars["String"]>
  url_ne?: Maybe<Scalars["String"]>
  url_gt?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  image_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_lte?: Maybe<Scalars["String"]>
  image_lte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  name_ne?: Maybe<Scalars["String"]>
  events_nin?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  image_gte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  events?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  AND?: Maybe<Array<SponsorQueryInput>>
  url_exists?: Maybe<Scalars["Boolean"]>
  url_gte?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name?: Maybe<Scalars["String"]>
  events_in?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  image_exists?: Maybe<Scalars["Boolean"]>
  events_exists?: Maybe<Scalars["Boolean"]>
}

export type PressQueryInput = {
  nr_exists?: Maybe<Scalars["Boolean"]>
  author_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  desc_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  date?: Maybe<Scalars["DateTime"]>
  link_lt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  date_lte?: Maybe<Scalars["DateTime"]>
  nr_gte?: Maybe<Scalars["String"]>
  link_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  desc_gte?: Maybe<Scalars["String"]>
  date_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  nr?: Maybe<Scalars["String"]>
  date_exists?: Maybe<Scalars["Boolean"]>
  link_exists?: Maybe<Scalars["Boolean"]>
  link_gte?: Maybe<Scalars["String"]>
  quote_ne?: Maybe<Scalars["String"]>
  fileExtension_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  author_ne?: Maybe<Scalars["String"]>
  link?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<PressQueryInput>>
  author_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  source_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id?: Maybe<Scalars["ObjectId"]>
  fileExtension?: Maybe<Scalars["String"]>
  author_gte?: Maybe<Scalars["String"]>
  quote_exists?: Maybe<Scalars["Boolean"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  nr_ne?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  desc_lte?: Maybe<Scalars["String"]>
  desc?: Maybe<Scalars["String"]>
  fileExtension_ne?: Maybe<Scalars["String"]>
  quote_lte?: Maybe<Scalars["String"]>
  source_lte?: Maybe<Scalars["String"]>
  desc_lt?: Maybe<Scalars["String"]>
  author_lte?: Maybe<Scalars["String"]>
  quote_lt?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  nr_lt?: Maybe<Scalars["String"]>
  quote_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  link_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  nr_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  link_lte?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  author_lt?: Maybe<Scalars["String"]>
  source_lt?: Maybe<Scalars["String"]>
  source_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  nr_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  date_gt?: Maybe<Scalars["DateTime"]>
  quote?: Maybe<Scalars["String"]>
  fileExtension_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  fileExtension_gt?: Maybe<Scalars["String"]>
  source_gte?: Maybe<Scalars["String"]>
  date_ne?: Maybe<Scalars["DateTime"]>
  link_gt?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  source_ne?: Maybe<Scalars["String"]>
  desc_exists?: Maybe<Scalars["Boolean"]>
  nr_gt?: Maybe<Scalars["String"]>
  nr_lte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  date_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  fileExtension_lte?: Maybe<Scalars["String"]>
  desc_gt?: Maybe<Scalars["String"]>
  author_gt?: Maybe<Scalars["String"]>
  fileExtension_gte?: Maybe<Scalars["String"]>
  quote_gte?: Maybe<Scalars["String"]>
  quote_gt?: Maybe<Scalars["String"]>
  source_exists?: Maybe<Scalars["Boolean"]>
  fileExtension_lt?: Maybe<Scalars["String"]>
  quote_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  fileExtension_exists?: Maybe<Scalars["Boolean"]>
  link_ne?: Maybe<Scalars["String"]>
  source_gt?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  desc_ne?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  desc_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  date_gte?: Maybe<Scalars["DateTime"]>
  date_lt?: Maybe<Scalars["DateTime"]>
  author_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<PressQueryInput>>
}

export enum SubscriptionSortByInput {
  IdAsc = "_ID_ASC",
  PhoneAsc = "PHONE_ASC",
  StateDesc = "STATE_DESC",
  CityDesc = "CITY_DESC",
  PhoneDesc = "PHONE_DESC",
  StateAsc = "STATE_ASC",
  ZipAsc = "ZIP_ASC",
  Street1Asc = "STREET1_ASC",
  WeekDesc = "WEEK_DESC",
  DeadlineAsc = "DEADLINE_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  EmailDesc = "EMAIL_DESC",
  LastnameAsc = "LASTNAME_ASC",
  LastnameDesc = "LASTNAME_DESC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  ZipDesc = "ZIP_DESC",
  IdDesc = "_ID_DESC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  Street2Desc = "STREET2_DESC",
  CityAsc = "CITY_ASC",
  EmailAsc = "EMAIL_ASC",
  Street2Asc = "STREET2_ASC",
  Street1Desc = "STREET1_DESC",
  WeekAsc = "WEEK_ASC",
  FirstnameAsc = "FIRSTNAME_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC"
}

export enum SponsorSortByInput {
  ImageDesc = "IMAGE_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  UrlAsc = "URL_ASC",
  UrlDesc = "URL_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  ImageAsc = "IMAGE_ASC"
}

export type FromBomQueryInput = {
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_lt?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  deadline?: Maybe<Scalars["DateTime"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  week_ne?: Maybe<Scalars["Int"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  state_gt?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["ObjectId"]>
  state_gte?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<FromBomQueryInput>>
  state?: Maybe<Scalars["String"]>
  Address_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  Childs_exists?: Maybe<Scalars["Boolean"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate?: Maybe<Scalars["DateTime"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_ne?: Maybe<Scalars["String"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  Childs_nin?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  Childs?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  Address?: Maybe<FromBomAddressQueryInput>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  state_lte?: Maybe<Scalars["String"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<FromBomQueryInput>>
  week_exists?: Maybe<Scalars["Boolean"]>
  week_lte?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  week_gte?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  week_gt?: Maybe<Scalars["Int"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  Childs_in?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
}

export type EventDetailEventInfoUpdateInput = {
  city_unset?: Maybe<Scalars["Boolean"]>
  posRemark?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
  posRemark_unset?: Maybe<Scalars["Boolean"]>
  address_unset?: Maybe<Scalars["Boolean"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  address?: Maybe<Scalars["String"]>
  _id_inc?: Maybe<Scalars["Int"]>
  shortDescription?: Maybe<Scalars["String"]>
  url_unset?: Maybe<Scalars["Boolean"]>
  flyerImage_unset?: Maybe<Scalars["Boolean"]>
  longDescription?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  organizerRemark_unset?: Maybe<Scalars["Boolean"]>
  city?: Maybe<Scalars["String"]>
  languageId_inc?: Maybe<Scalars["Int"]>
  languageId_unset?: Maybe<Scalars["Boolean"]>
  bannerImage_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  artists?: Maybe<Scalars["String"]>
  location_unset?: Maybe<Scalars["Boolean"]>
  flyerImagePath_unset?: Maybe<Scalars["Boolean"]>
  googleMapLink_unset?: Maybe<Scalars["Boolean"]>
  organizerRemark?: Maybe<Scalars["String"]>
  importantNotes_unset?: Maybe<Scalars["Boolean"]>
  bannerImagePath_unset?: Maybe<Scalars["Boolean"]>
  flyerImage?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  artists_unset?: Maybe<Scalars["Boolean"]>
  shortDescription_unset?: Maybe<Scalars["Boolean"]>
  longDescription_unset?: Maybe<Scalars["Boolean"]>
  location?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  eventDetail?: Maybe<EventDetail>
  eventDetails: Array<Maybe<EventDetail>>
  fromBom?: Maybe<FromBom>
  fromBoms: Array<Maybe<FromBom>>
  location?: Maybe<Location>
  locations: Array<Maybe<Location>>
  nextGigPerUpcomingEvent?: Maybe<Array<Maybe<EventDetailItem>>>
  participant?: Maybe<Participant>
  participants: Array<Maybe<Participant>>
  pastEvents?: Maybe<Array<Maybe<PastEventDetailItem>>>
  press?: Maybe<Press>
  presses: Array<Maybe<Press>>
  sponsor?: Maybe<Sponsor>
  sponsors: Array<Maybe<Sponsor>>
  staff?: Maybe<Staff>
  staffs: Array<Maybe<Staff>>
  subscription?: Maybe<Subscription>
  subscriptions: Array<Maybe<Subscription>>
  sumChildsPerState?: Maybe<Array<Maybe<ChildrenPerStateItem>>>
}

export type QueryEventDetailArgs = {
  query?: Maybe<EventDetailQueryInput>
}

export type QueryEventDetailsArgs = {
  query?: Maybe<EventDetailQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<EventDetailSortByInput>
}

export type QueryFromBomArgs = {
  query?: Maybe<FromBomQueryInput>
}

export type QueryFromBomsArgs = {
  sortBy?: Maybe<FromBomSortByInput>
  query?: Maybe<FromBomQueryInput>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryLocationArgs = {
  query?: Maybe<LocationQueryInput>
}

export type QueryLocationsArgs = {
  query?: Maybe<LocationQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<LocationSortByInput>
}

export type QueryParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
}

export type QueryParticipantsArgs = {
  sortBy?: Maybe<ParticipantSortByInput>
  query?: Maybe<ParticipantQueryInput>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryPressArgs = {
  query?: Maybe<PressQueryInput>
}

export type QueryPressesArgs = {
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<PressSortByInput>
  query?: Maybe<PressQueryInput>
}

export type QuerySponsorArgs = {
  query?: Maybe<SponsorQueryInput>
}

export type QuerySponsorsArgs = {
  query?: Maybe<SponsorQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<SponsorSortByInput>
}

export type QueryStaffArgs = {
  query?: Maybe<StaffQueryInput>
}

export type QueryStaffsArgs = {
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<StaffSortByInput>
  query?: Maybe<StaffQueryInput>
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

export type FromBomAddressInsertInput = {
  Vorname?: Maybe<Scalars["String"]>
  Adresse?: Maybe<Scalars["String"]>
  Anrede?: Maybe<Scalars["String"]>
  EMail?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Ort?: Maybe<Scalars["String"]>
  PLZ?: Maybe<Scalars["Int"]>
  TelefonM?: Maybe<Scalars["String"]>
}

export type PressInsertInput = {
  fileExtension?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  author?: Maybe<Scalars["String"]>
  nr?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["DateTime"]>
  link?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  quote?: Maybe<Scalars["String"]>
  desc?: Maybe<Scalars["String"]>
}

export type SponsorEventQueryInput = {
  share_ne?: Maybe<Scalars["Float"]>
  share?: Maybe<Scalars["Float"]>
  share_gt?: Maybe<Scalars["Float"]>
  event_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<SponsorEventQueryInput>>
  share_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  event_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  event_exists?: Maybe<Scalars["Boolean"]>
  share_lte?: Maybe<Scalars["Float"]>
  share_exists?: Maybe<Scalars["Boolean"]>
  share_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  event?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SponsorEventQueryInput>>
  share_lt?: Maybe<Scalars["Float"]>
  event_ne?: Maybe<Scalars["String"]>
  event_lte?: Maybe<Scalars["String"]>
  event_gte?: Maybe<Scalars["String"]>
  event_lt?: Maybe<Scalars["String"]>
  share_gte?: Maybe<Scalars["Float"]>
  event_gt?: Maybe<Scalars["String"]>
}

export type Sponsor = {
  __typename?: "Sponsor"
  _id?: Maybe<Scalars["ObjectId"]>
  events?: Maybe<Array<Maybe<SponsorEvent>>>
  image?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type FromBomChildQueryInput = {
  Bemerkung_ne?: Maybe<Scalars["String"]>
  Geburtstag_exists?: Maybe<Scalars["Boolean"]>
  Bemerkung_gte?: Maybe<Scalars["String"]>
  Geburtstag_ne?: Maybe<Scalars["String"]>
  Vorname_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_gte?: Maybe<Scalars["String"]>
  Geburtstag_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<FromBomChildQueryInput>>
  Geburtstag_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Bemerkung?: Maybe<Scalars["String"]>
  Anrede_ne?: Maybe<Scalars["String"]>
  Bemerkung_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Bemerkung_lte?: Maybe<Scalars["String"]>
  Name_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<FromBomChildQueryInput>>
  Anrede?: Maybe<Scalars["String"]>
  Anrede_lte?: Maybe<Scalars["String"]>
  Geburtstag_lt?: Maybe<Scalars["String"]>
  Name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name_gt?: Maybe<Scalars["String"]>
  Anrede_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_exists?: Maybe<Scalars["Boolean"]>
  Geburtstag_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_gt?: Maybe<Scalars["String"]>
  Anrede_exists?: Maybe<Scalars["Boolean"]>
  Name?: Maybe<Scalars["String"]>
  Anrede_lt?: Maybe<Scalars["String"]>
  Bemerkung_exists?: Maybe<Scalars["Boolean"]>
  Vorname_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_gte?: Maybe<Scalars["String"]>
  Vorname_lte?: Maybe<Scalars["String"]>
  Name_ne?: Maybe<Scalars["String"]>
  Anrede_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_gt?: Maybe<Scalars["String"]>
  Geburtstag?: Maybe<Scalars["String"]>
  Name_lte?: Maybe<Scalars["String"]>
  Name_gte?: Maybe<Scalars["String"]>
  Bemerkung_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_lte?: Maybe<Scalars["String"]>
  Bemerkung_gt?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Vorname_ne?: Maybe<Scalars["String"]>
  Geburtstag_gte?: Maybe<Scalars["String"]>
  Vorname_lt?: Maybe<Scalars["String"]>
  Bemerkung_lt?: Maybe<Scalars["String"]>
  Name_lt?: Maybe<Scalars["String"]>
}

export type FromBom = {
  __typename?: "FromBom"
  Address?: Maybe<FromBomAddress>
  Childs?: Maybe<Array<Maybe<FromBomChild>>>
  _id?: Maybe<Scalars["ObjectId"]>
  deadline?: Maybe<Scalars["DateTime"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
}

export type PastEventDetailEventDetailTicketType = {
  __typename?: "PastEventDetailEventDetailTicketType"
  _id?: Maybe<Scalars["Int"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  colorCode?: Maybe<Scalars["String"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  currency?: Maybe<Scalars["String"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventId?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  isActive?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  price?: Maybe<Scalars["Float"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  replyTo?: Maybe<Scalars["String"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  sortOrder?: Maybe<Scalars["Int"]>
  start?: Maybe<Scalars["DateTime"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<PastEventDetailEventDetailTicketTypeTicketTypeInfo>>
  >
  ticketsTotal?: Maybe<Scalars["Int"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  vatTypeId?: Maybe<Scalars["Int"]>
}

export type SubscriptionInsertInput = {
  city?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  reservationDate?: Maybe<Scalars["DateTime"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  state?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  deadline?: Maybe<Scalars["DateTime"]>
  phone?: Maybe<Scalars["String"]>
}

export type SponsorEventUpdateInput = {
  share_unset?: Maybe<Scalars["Boolean"]>
  event?: Maybe<Scalars["String"]>
  event_unset?: Maybe<Scalars["Boolean"]>
  share?: Maybe<Scalars["Float"]>
  share_inc?: Maybe<Scalars["Float"]>
}

export type FromBomUpdateInput = {
  week_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  Address_unset?: Maybe<Scalars["Boolean"]>
  Childs?: Maybe<Array<Maybe<FromBomChildUpdateInput>>>
  _id?: Maybe<Scalars["ObjectId"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  deadline?: Maybe<Scalars["DateTime"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  Address?: Maybe<FromBomAddressUpdateInput>
  Childs_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
}

export type Location = {
  __typename?: "Location"
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  directions?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  postalCode?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
}

export type EventDetailEventDetailTicketTypeTicketTypeInfo = {
  __typename?: "EventDetailEventDetailTicketTypeTicketTypeInfo"
  _id?: Maybe<Scalars["Int"]>
  additionalFile?: Maybe<Scalars["String"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  croppedImageData?: Maybe<Scalars["String"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  emailSubject?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  presentation?: Maybe<Scalars["String"]>
  senderName?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
}

export type FromBomAddressUpdateInput = {
  PLZ?: Maybe<Scalars["Int"]>
  EMail_unset?: Maybe<Scalars["Boolean"]>
  Anrede_unset?: Maybe<Scalars["Boolean"]>
  Adresse?: Maybe<Scalars["String"]>
  PLZ_inc?: Maybe<Scalars["Int"]>
  PLZ_unset?: Maybe<Scalars["Boolean"]>
  TelefonM_unset?: Maybe<Scalars["Boolean"]>
  Anrede?: Maybe<Scalars["String"]>
  EMail?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Name_unset?: Maybe<Scalars["Boolean"]>
  Ort_unset?: Maybe<Scalars["Boolean"]>
  Adresse_unset?: Maybe<Scalars["Boolean"]>
  Vorname?: Maybe<Scalars["String"]>
  Ort?: Maybe<Scalars["String"]>
  TelefonM?: Maybe<Scalars["String"]>
  Vorname_unset?: Maybe<Scalars["Boolean"]>
}

export enum ParticipantSortByInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  BirthdayDesc = "BIRTHDAY_DESC",
  ParticipantIdDesc = "PARTICIPANT_ID_DESC",
  CommentAsc = "COMMENT_ASC",
  FotoallowedAsc = "FOTOALLOWED_ASC",
  LastnameparticipantDesc = "LASTNAMEPARTICIPANT_DESC",
  BirthdayAsc = "BIRTHDAY_ASC",
  ParticipantIdAsc = "PARTICIPANT_ID_ASC",
  SalutationDesc = "SALUTATION_DESC",
  CommentDesc = "COMMENT_DESC",
  FirstnameparticipantAsc = "FIRSTNAMEPARTICIPANT_ASC",
  FirstnameparticipantDesc = "FIRSTNAMEPARTICIPANT_DESC",
  FotoallowedDesc = "FOTOALLOWED_DESC",
  LastnameparticipantAsc = "LASTNAMEPARTICIPANT_ASC",
  SalutationAsc = "SALUTATION_ASC"
}

export type SponsorUpdateInput = {
  name?: Maybe<Scalars["String"]>
  url_unset?: Maybe<Scalars["Boolean"]>
  events?: Maybe<Array<Maybe<SponsorEventUpdateInput>>>
  events_unset?: Maybe<Scalars["Boolean"]>
  image?: Maybe<Scalars["String"]>
  image_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  url?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type Subscription = {
  __typename?: "Subscription"
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  email?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  participants?: Maybe<Array<Maybe<Participant>>>
  phone?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  state?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  zip?: Maybe<Scalars["String"]>
}

export type FromBomAddressQueryInput = {
  TelefonM_gt?: Maybe<Scalars["String"]>
  Anrede_ne?: Maybe<Scalars["String"]>
  Ort_lte?: Maybe<Scalars["String"]>
  Anrede_gt?: Maybe<Scalars["String"]>
  Ort_gte?: Maybe<Scalars["String"]>
  Anrede_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  EMail_ne?: Maybe<Scalars["String"]>
  Ort_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  PLZ_exists?: Maybe<Scalars["Boolean"]>
  Adresse_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_gte?: Maybe<Scalars["String"]>
  Ort_lt?: Maybe<Scalars["String"]>
  Vorname_ne?: Maybe<Scalars["String"]>
  Adresse_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  EMail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Adresse_lt?: Maybe<Scalars["String"]>
  TelefonM_lte?: Maybe<Scalars["String"]>
  Vorname_lt?: Maybe<Scalars["String"]>
  Anrede_lt?: Maybe<Scalars["String"]>
  Vorname_gt?: Maybe<Scalars["String"]>
  TelefonM_exists?: Maybe<Scalars["Boolean"]>
  PLZ_lte?: Maybe<Scalars["Int"]>
  Ort_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name_exists?: Maybe<Scalars["Boolean"]>
  Name_lte?: Maybe<Scalars["String"]>
  PLZ_gt?: Maybe<Scalars["Int"]>
  TelefonM_gte?: Maybe<Scalars["String"]>
  Adresse_exists?: Maybe<Scalars["Boolean"]>
  Ort_exists?: Maybe<Scalars["Boolean"]>
  Name_gt?: Maybe<Scalars["String"]>
  Vorname_lte?: Maybe<Scalars["String"]>
  EMail_gt?: Maybe<Scalars["String"]>
  TelefonM?: Maybe<Scalars["String"]>
  Name_ne?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<FromBomAddressQueryInput>>
  Vorname_gte?: Maybe<Scalars["String"]>
  EMail_lte?: Maybe<Scalars["String"]>
  EMail_gte?: Maybe<Scalars["String"]>
  Adresse_lte?: Maybe<Scalars["String"]>
  Anrede_exists?: Maybe<Scalars["Boolean"]>
  Vorname_exists?: Maybe<Scalars["Boolean"]>
  PLZ_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  Name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  TelefonM_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  EMail_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<FromBomAddressQueryInput>>
  Anrede?: Maybe<Scalars["String"]>
  Adresse?: Maybe<Scalars["String"]>
  Ort?: Maybe<Scalars["String"]>
  Ort_ne?: Maybe<Scalars["String"]>
  TelefonM_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  PLZ_ne?: Maybe<Scalars["Int"]>
  Adresse_gt?: Maybe<Scalars["String"]>
  EMail_lt?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  EMail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  PLZ_gte?: Maybe<Scalars["Int"]>
  Name?: Maybe<Scalars["String"]>
  TelefonM_lt?: Maybe<Scalars["String"]>
  PLZ_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  Name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Ort_gt?: Maybe<Scalars["String"]>
  EMail?: Maybe<Scalars["String"]>
  PLZ?: Maybe<Scalars["Int"]>
  Adresse_gte?: Maybe<Scalars["String"]>
  Name_gte?: Maybe<Scalars["String"]>
  Name_lt?: Maybe<Scalars["String"]>
  TelefonM_ne?: Maybe<Scalars["String"]>
  Adresse_ne?: Maybe<Scalars["String"]>
  PLZ_lt?: Maybe<Scalars["Int"]>
  Anrede_lte?: Maybe<Scalars["String"]>
}

export type ParticipantQueryInput = {
  birthday?: Maybe<Scalars["String"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  fotoAllowed_lt?: Maybe<Scalars["String"]>
  fotoAllowed_gt?: Maybe<Scalars["String"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  fotoAllowed_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  OR?: Maybe<Array<ParticipantQueryInput>>
  participant_id_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id?: Maybe<Scalars["String"]>
  participant_id_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  salutation_ne?: Maybe<Scalars["String"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  comment_lte?: Maybe<Scalars["String"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_lt?: Maybe<Scalars["String"]>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["String"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  comment_gte?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  birthday_gte?: Maybe<Scalars["String"]>
  comment_gt?: Maybe<Scalars["String"]>
  birthday_lt?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  fotoAllowed_gte?: Maybe<Scalars["String"]>
  birthday_lte?: Maybe<Scalars["String"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<ParticipantQueryInput>>
  birthday_ne?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  salutation_gte?: Maybe<Scalars["String"]>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  fotoAllowed_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant?: Maybe<Scalars["String"]>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation?: Maybe<Scalars["String"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  fotoAllowed?: Maybe<Scalars["String"]>
  salutation_lt?: Maybe<Scalars["String"]>
  comment_ne?: Maybe<Scalars["String"]>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id?: Maybe<Scalars["ObjectId"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday_gt?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  fotoAllowed_lte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  salutation_lte?: Maybe<Scalars["String"]>
  participant_id_gt?: Maybe<Scalars["String"]>
}

export type EventDetailEventDetailTicketType = {
  __typename?: "EventDetailEventDetailTicketType"
  _id?: Maybe<Scalars["Int"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  colorCode?: Maybe<Scalars["String"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  currency?: Maybe<Scalars["String"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventId?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  isActive?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  price?: Maybe<Scalars["Float"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  replyTo?: Maybe<Scalars["String"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  sortOrder?: Maybe<Scalars["Int"]>
  start?: Maybe<Scalars["DateTime"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailEventDetailTicketTypeTicketTypeInfo>>
  >
  ticketsTotal?: Maybe<Scalars["Int"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  vatTypeId?: Maybe<Scalars["Int"]>
}

export type FromBomChild = {
  __typename?: "FromBomChild"
  Anrede?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
  Geburtstag?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
}

export type PastEventDetailEventDetail = {
  __typename?: "PastEventDetailEventDetail"
  _id?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<PastEventDetailEventDetailEventInfo>>>
  externalEventCode?: Maybe<Scalars["String"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  locationId?: Maybe<Scalars["Int"]>
  longitude?: Maybe<Scalars["Float"]>
  masterEventId?: Maybe<Scalars["Int"]>
  maxTickets?: Maybe<Scalars["Int"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  organizerId?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  shippingFee?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  status?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  tenantId?: Maybe<Scalars["Int"]>
  ticketTypes?: Maybe<Array<Maybe<PastEventDetailEventDetailTicketType>>>
  vatNumber?: Maybe<Scalars["String"]>
  warningSendDate?: Maybe<Scalars["String"]>
  zoneMapId?: Maybe<Scalars["Int"]>
}

export type PastEventDetailEventDetailEventInfo = {
  __typename?: "PastEventDetailEventDetailEventInfo"
  _id?: Maybe<Scalars["Int"]>
  address?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  flyerImage?: Maybe<Scalars["String"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  location?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type EventDetailUpdateInput = {
  vatNumber_unset?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain_unset?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  masterEventId_inc?: Maybe<Scalars["Int"]>
  organizerId?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  salesWarningLevel_inc?: Maybe<Scalars["Int"]>
  sendWarning_unset?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  status_inc?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  shippingFee?: Maybe<Scalars["Float"]>
  hideOnEventList_unset?: Maybe<Scalars["Boolean"]>
  dateModified_unset?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_inc?: Maybe<Scalars["Int"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  locationId_inc?: Maybe<Scalars["Int"]>
  warningSendDate?: Maybe<Scalars["String"]>
  maxTickets_unset?: Maybe<Scalars["Boolean"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  forceEmptySeats_inc?: Maybe<Scalars["Int"]>
  longitude_inc?: Maybe<Scalars["Float"]>
  eventInfos_unset?: Maybe<Scalars["Boolean"]>
  salesRegionId_inc?: Maybe<Scalars["Int"]>
  longitude?: Maybe<Scalars["Float"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  googleCoordinates_unset?: Maybe<Scalars["Boolean"]>
  stay22Active_unset?: Maybe<Scalars["Boolean"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_inc?: Maybe<Scalars["Int"]>
  masterEventId_unset?: Maybe<Scalars["Boolean"]>
  status?: Maybe<Scalars["Int"]>
  tenantId_unset?: Maybe<Scalars["Boolean"]>
  shippingFee_inc?: Maybe<Scalars["Float"]>
  _id_inc?: Maybe<Scalars["Int"]>
  maxTickets?: Maybe<Scalars["Int"]>
  externalEventCode_unset?: Maybe<Scalars["Boolean"]>
  showLinkToGoogleMap_unset?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  openDoor_unset?: Maybe<Scalars["Boolean"]>
  isActiveForSale_unset?: Maybe<Scalars["Boolean"]>
  sendNotificationByEmail_unset?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_unset?: Maybe<Scalars["Boolean"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  organizerId_unset?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  dateCreated_unset?: Maybe<Scalars["Boolean"]>
  zoneMapId_unset?: Maybe<Scalars["Boolean"]>
  end?: Maybe<Scalars["DateTime"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  salesRegionId_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeUpdateInput>>>
  isBankInternalEvent_unset?: Maybe<Scalars["Boolean"]>
  countryId_unset?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_unset?: Maybe<Scalars["Boolean"]>
  ticketTypes_unset?: Maybe<Scalars["Boolean"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  latitude_unset?: Maybe<Scalars["Boolean"]>
  organizerId_inc?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  zoneMapId_inc?: Maybe<Scalars["Int"]>
  masterEventId?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  countryId_inc?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  isCompanyNameMandatory_unset?: Maybe<Scalars["Boolean"]>
  vatNumber?: Maybe<Scalars["String"]>
  forceEmptySeats_unset?: Maybe<Scalars["Boolean"]>
  emailTemplate_unset?: Maybe<Scalars["Boolean"]>
  warningSendDate_unset?: Maybe<Scalars["Boolean"]>
  facebookPixelId_unset?: Maybe<Scalars["Boolean"]>
  eventGenreValue_inc?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  start_unset?: Maybe<Scalars["Boolean"]>
  tenantId_inc?: Maybe<Scalars["Int"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  noVatOnCommission_unset?: Maybe<Scalars["Boolean"]>
  hideEventInfoOnSoldOut_unset?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoUpdateInput>>>
  isPhoneMandatory_unset?: Maybe<Scalars["Boolean"]>
  longitude_unset?: Maybe<Scalars["Boolean"]>
  latitude_inc?: Maybe<Scalars["Float"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  salesWarningLevel_unset?: Maybe<Scalars["Boolean"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  notificationEmail_unset?: Maybe<Scalars["Boolean"]>
  locationId?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_unset?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_inc?: Maybe<Scalars["Int"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  locationId_unset?: Maybe<Scalars["Boolean"]>
  maxTickets_inc?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_unset?: Maybe<Scalars["Boolean"]>
  shippingFee_unset?: Maybe<Scalars["Boolean"]>
  eventGenreValue_unset?: Maybe<Scalars["Boolean"]>
  status_unset?: Maybe<Scalars["Boolean"]>
  externalEventCode?: Maybe<Scalars["String"]>
  end_unset?: Maybe<Scalars["Boolean"]>
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
}

export type EventDetailTicketTypeTicketTypeInfoQueryInput = {
  alternateImageUrl_lt?: Maybe<Scalars["String"]>
  additionalFileUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  modifiedDate_exists?: Maybe<Scalars["Boolean"]>
  senderName?: Maybe<Scalars["String"]>
  croppedImageData_ne?: Maybe<Scalars["String"]>
  senderName_lte?: Maybe<Scalars["String"]>
  languageId_lt?: Maybe<Scalars["Int"]>
  image_exists?: Maybe<Scalars["Boolean"]>
  imageUrl_ne?: Maybe<Scalars["String"]>
  modifiedDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  senderName_exists?: Maybe<Scalars["Boolean"]>
  senderName_ne?: Maybe<Scalars["String"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  originalFileData_gte?: Maybe<Scalars["String"]>
  presentation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gt?: Maybe<Scalars["Int"]>
  description_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl_gt?: Maybe<Scalars["String"]>
  emailSubject_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lt?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  ticketTypeId_gte?: Maybe<Scalars["Int"]>
  originalImageData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deleted_exists?: Maybe<Scalars["Boolean"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  alternateImageUrl_gt?: Maybe<Scalars["String"]>
  additionalFileUrl_lt?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  croppedImageData?: Maybe<Scalars["String"]>
  modifiedDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  languageId_lte?: Maybe<Scalars["Int"]>
  additionalFile_gt?: Maybe<Scalars["String"]>
  additionalFileUrl_ne?: Maybe<Scalars["String"]>
  ticketTypeId_ne?: Maybe<Scalars["Int"]>
  originalFileData_ne?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  description?: Maybe<Scalars["String"]>
  alternateImageUrl_ne?: Maybe<Scalars["String"]>
  originalFileData_exists?: Maybe<Scalars["Boolean"]>
  originalImageData_exists?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  imageUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lte?: Maybe<Scalars["String"]>
  name_gte?: Maybe<Scalars["String"]>
  additionalFile_ne?: Maybe<Scalars["String"]>
  originalFileData_lte?: Maybe<Scalars["String"]>
  presentation_ne?: Maybe<Scalars["String"]>
  croppedImageData_gt?: Maybe<Scalars["String"]>
  croppedImageData_lt?: Maybe<Scalars["String"]>
  additionalFile_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_ne?: Maybe<Scalars["String"]>
  imageUrl_gt?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  originalImageData_gt?: Maybe<Scalars["String"]>
  imageUrl_lt?: Maybe<Scalars["String"]>
  additionalFileUrl_lte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["Int"]>
  additionalFile_gte?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["Int"]>
  senderName_gte?: Maybe<Scalars["String"]>
  image_gte?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["Int"]>
  presentation?: Maybe<Scalars["String"]>
  additionalFile_exists?: Maybe<Scalars["Boolean"]>
  image_gt?: Maybe<Scalars["String"]>
  originalFileData_gt?: Maybe<Scalars["String"]>
  description_ne?: Maybe<Scalars["String"]>
  deleted_ne?: Maybe<Scalars["Boolean"]>
  presentation_lte?: Maybe<Scalars["String"]>
  customtext1Mandatory_exists?: Maybe<Scalars["Boolean"]>
  image_lt?: Maybe<Scalars["String"]>
  presentation_gte?: Maybe<Scalars["String"]>
  ticketTypeId_lt?: Maybe<Scalars["Int"]>
  alternateImageUrl_exists?: Maybe<Scalars["Boolean"]>
  alternateImageUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  additionalFile_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  croppedImageData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_lte?: Maybe<Scalars["String"]>
  description_gt?: Maybe<Scalars["String"]>
  languageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  customtext2Mandatory_ne?: Maybe<Scalars["Boolean"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  additionalFile_lt?: Maybe<Scalars["String"]>
  imageUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_lte?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  alternateImageUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  emailSubject?: Maybe<Scalars["String"]>
  emailSubject_exists?: Maybe<Scalars["Boolean"]>
  emailSubject_lte?: Maybe<Scalars["String"]>
  alternateImageUrl_gte?: Maybe<Scalars["String"]>
  senderName_lt?: Maybe<Scalars["String"]>
  languageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  emailSubject_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl?: Maybe<Scalars["String"]>
  presentation_gt?: Maybe<Scalars["String"]>
  originalImageData_gte?: Maybe<Scalars["String"]>
  additionalFileUrl_gte?: Maybe<Scalars["String"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl_exists?: Maybe<Scalars["Boolean"]>
  presentation_exists?: Maybe<Scalars["Boolean"]>
  languageId_exists?: Maybe<Scalars["Boolean"]>
  description_lte?: Maybe<Scalars["String"]>
  croppedImageData_exists?: Maybe<Scalars["Boolean"]>
  description_exists?: Maybe<Scalars["Boolean"]>
  presentation_lt?: Maybe<Scalars["String"]>
  languageId_gte?: Maybe<Scalars["Int"]>
  modifiedDate_gte?: Maybe<Scalars["DateTime"]>
  description_gte?: Maybe<Scalars["String"]>
  imageUrl_exists?: Maybe<Scalars["Boolean"]>
  modifiedDate_ne?: Maybe<Scalars["DateTime"]>
  modifiedDate_lt?: Maybe<Scalars["DateTime"]>
  additionalFile?: Maybe<Scalars["String"]>
  originalFileData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  ticketTypeId_exists?: Maybe<Scalars["Boolean"]>
  alternateImageUrl_lte?: Maybe<Scalars["String"]>
  emailSubject_ne?: Maybe<Scalars["String"]>
  emailSubject_gt?: Maybe<Scalars["String"]>
  originalFileData_lt?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  modifiedDate_lte?: Maybe<Scalars["DateTime"]>
  languageId_gt?: Maybe<Scalars["Int"]>
  modifiedDate_gt?: Maybe<Scalars["DateTime"]>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id?: Maybe<Scalars["Int"]>
  description_lt?: Maybe<Scalars["String"]>
  ticketTypeId_lte?: Maybe<Scalars["Int"]>
  originalImageData_lt?: Maybe<Scalars["String"]>
  languageId_ne?: Maybe<Scalars["Int"]>
  ticketTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  originalFileData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  imageUrl_lte?: Maybe<Scalars["String"]>
  customtext2Mandatory_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["Int"]>
  OR?: Maybe<Array<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  croppedImageData_lte?: Maybe<Scalars["String"]>
  ticketTypeId_gt?: Maybe<Scalars["Int"]>
  croppedImageData_gte?: Maybe<Scalars["String"]>
  senderName_gt?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  ticketTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  presentation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_ne?: Maybe<Scalars["String"]>
  imageUrl_gte?: Maybe<Scalars["String"]>
  senderName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_ne?: Maybe<Scalars["String"]>
  emailSubject_lt?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  croppedImageData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  customtext1Mandatory_ne?: Maybe<Scalars["Boolean"]>
  emailSubject_gte?: Maybe<Scalars["String"]>
  additionalFileUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFile_lte?: Maybe<Scalars["String"]>
}

export type StaffInsertInput = {
  bio?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  active?: Maybe<Scalars["Boolean"]>
}

export type PastEventDetailItem = {
  __typename?: "PastEventDetailItem"
  eventDetail?: Maybe<PastEventDetailEventDetail>
}

export type PastEventDetailEventDetailTicketTypeTicketTypeInfo = {
  __typename?: "PastEventDetailEventDetailTicketTypeTicketTypeInfo"
  _id?: Maybe<Scalars["Int"]>
  additionalFile?: Maybe<Scalars["String"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  croppedImageData?: Maybe<Scalars["String"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  emailSubject?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  imageUrl?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  name?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  presentation?: Maybe<Scalars["String"]>
  senderName?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
}

export type ParticipantUpdateInput = {
  fotoAllowed?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  birthday?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
}

export type SubscriptionUpdateInput = {
  lastName_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  zip?: Maybe<Scalars["String"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  participants_unset?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  deadline?: Maybe<Scalars["DateTime"]>
  street2?: Maybe<Scalars["String"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  _id?: Maybe<Scalars["ObjectId"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
}

export type EventDetailTicketTypeTicketTypeInfoUpdateInput = {
  imageUrl?: Maybe<Scalars["String"]>
  ticketTypeId_unset?: Maybe<Scalars["Boolean"]>
  languageId?: Maybe<Scalars["Int"]>
  alternateImageUrl_unset?: Maybe<Scalars["Boolean"]>
  presentation_unset?: Maybe<Scalars["Boolean"]>
  senderName_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["Int"]>
  image?: Maybe<Scalars["String"]>
  additionalFile?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  deleted_unset?: Maybe<Scalars["Boolean"]>
  originalImageData?: Maybe<Scalars["String"]>
  customtext2Mandatory_unset?: Maybe<Scalars["Boolean"]>
  additionalFile_unset?: Maybe<Scalars["Boolean"]>
  emailSubject_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  croppedImageData_unset?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  additionalFileUrl_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeId_inc?: Maybe<Scalars["Int"]>
  image_unset?: Maybe<Scalars["Boolean"]>
  languageId_unset?: Maybe<Scalars["Boolean"]>
  originalFileData?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  modifiedDate_unset?: Maybe<Scalars["Boolean"]>
  customtext1Mandatory_unset?: Maybe<Scalars["Boolean"]>
  croppedImageData?: Maybe<Scalars["String"]>
  imageUrl_unset?: Maybe<Scalars["Boolean"]>
  description_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  originalImageData_unset?: Maybe<Scalars["Boolean"]>
  _id_inc?: Maybe<Scalars["Int"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  emailSubject?: Maybe<Scalars["String"]>
  senderName?: Maybe<Scalars["String"]>
  originalFileData_unset?: Maybe<Scalars["Boolean"]>
  presentation?: Maybe<Scalars["String"]>
  languageId_inc?: Maybe<Scalars["Int"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
}

export type LocationQueryInput = {
  city_lte?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  city_gt?: Maybe<Scalars["String"]>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCode_ne?: Maybe<Scalars["String"]>
  postalCode?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  postalCode_gte?: Maybe<Scalars["String"]>
  directions_lte?: Maybe<Scalars["String"]>
  directions_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  directions_ne?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  street_exists?: Maybe<Scalars["Boolean"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  street_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  info_lte?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  info_exists?: Maybe<Scalars["Boolean"]>
  postalCode_gt?: Maybe<Scalars["String"]>
  info_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_gt?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  directions_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_lt?: Maybe<Scalars["String"]>
  directions?: Maybe<Scalars["String"]>
  directions_gt?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  street_lte?: Maybe<Scalars["String"]>
  postalCode_lte?: Maybe<Scalars["String"]>
  street_lt?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  OR?: Maybe<Array<LocationQueryInput>>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  street_ne?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  name_ne?: Maybe<Scalars["String"]>
  info_gte?: Maybe<Scalars["String"]>
  name_gte?: Maybe<Scalars["String"]>
  info_ne?: Maybe<Scalars["String"]>
  directions_gte?: Maybe<Scalars["String"]>
  info_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCode_lt?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  city_gte?: Maybe<Scalars["String"]>
  street_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  street_gt?: Maybe<Scalars["String"]>
  street_gte?: Maybe<Scalars["String"]>
  name_lt?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<LocationQueryInput>>
  street?: Maybe<Scalars["String"]>
  postalCode_exists?: Maybe<Scalars["Boolean"]>
  city?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  directions_exists?: Maybe<Scalars["Boolean"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  directions_lt?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  postalCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type EventDetailTicketTypeInsertInput = {
  companyMandatory?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  price?: Maybe<Scalars["Float"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  isActive?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  replyTo?: Maybe<Scalars["String"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  colorCode?: Maybe<Scalars["String"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["Int"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoInsertInput>>
  >
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  eventId?: Maybe<Scalars["Int"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  currency?: Maybe<Scalars["String"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  end?: Maybe<Scalars["DateTime"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
}

export type SponsorInsertInput = {
  events?: Maybe<Array<Maybe<SponsorEventInsertInput>>>
  image?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type EventDetailEventInfo = {
  __typename?: "EventDetailEventInfo"
  _id?: Maybe<Scalars["Int"]>
  address?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  flyerImage?: Maybe<Scalars["String"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  location?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export enum LocationSortByInput {
  DirectionsAsc = "DIRECTIONS_ASC",
  PostalcodeDesc = "POSTALCODE_DESC",
  InfoDesc = "INFO_DESC",
  StreetDesc = "STREET_DESC",
  CityAsc = "CITY_ASC",
  DirectionsDesc = "DIRECTIONS_DESC",
  NameAsc = "NAME_ASC",
  StreetAsc = "STREET_ASC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameDesc = "NAME_DESC",
  PostalcodeAsc = "POSTALCODE_ASC",
  CityDesc = "CITY_DESC",
  InfoAsc = "INFO_ASC"
}

export type EventDetailEventDetailEventInfo = {
  __typename?: "EventDetailEventDetailEventInfo"
  _id?: Maybe<Scalars["Int"]>
  address?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  flyerImage?: Maybe<Scalars["String"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  location?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type SponsorEvent = {
  __typename?: "SponsorEvent"
  event?: Maybe<Scalars["String"]>
  share?: Maybe<Scalars["Float"]>
}

export type SponsorEventInsertInput = {
  event?: Maybe<Scalars["String"]>
  share?: Maybe<Scalars["Float"]>
}

export type SubscriptionQueryInput = {
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_lte?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  lastName_gt?: Maybe<Scalars["String"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  email_lt?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  zip_lte?: Maybe<Scalars["String"]>
  phone_lte?: Maybe<Scalars["String"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_gt?: Maybe<Scalars["String"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  street1_lt?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  email_gt?: Maybe<Scalars["String"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  city_lt?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_lt?: Maybe<Scalars["String"]>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  lastName_gte?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participants_in?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  phone_ne?: Maybe<Scalars["String"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  email_ne?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  street2_ne?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  zip_ne?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  city_gte?: Maybe<Scalars["String"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  state_gte?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  street2_lt?: Maybe<Scalars["String"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_ne?: Maybe<Scalars["String"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["String"]>
  phone_gte?: Maybe<Scalars["String"]>
  street2?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  state_exists?: Maybe<Scalars["Boolean"]>
  participants_nin?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  phone_lt?: Maybe<Scalars["String"]>
  participants_exists?: Maybe<Scalars["Boolean"]>
  state_lt?: Maybe<Scalars["String"]>
  phone_gt?: Maybe<Scalars["String"]>
  street1_gt?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  street1_gte?: Maybe<Scalars["String"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_lt?: Maybe<Scalars["String"]>
  participants?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  firstName?: Maybe<Scalars["String"]>
  state_gt?: Maybe<Scalars["String"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  firstName_ne?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  zip_gte?: Maybe<Scalars["String"]>
  street1_ne?: Maybe<Scalars["String"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  state_ne?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  deadline?: Maybe<Scalars["DateTime"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_exists?: Maybe<Scalars["Boolean"]>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  firstName_gte?: Maybe<Scalars["String"]>
  email_gte?: Maybe<Scalars["String"]>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  city_lte?: Maybe<Scalars["String"]>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_exists?: Maybe<Scalars["Boolean"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street2_gte?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  lastName?: Maybe<Scalars["String"]>
  week_gt?: Maybe<Scalars["Int"]>
  street2_gt?: Maybe<Scalars["String"]>
  email_lte?: Maybe<Scalars["String"]>
  zip_lt?: Maybe<Scalars["String"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  city_ne?: Maybe<Scalars["String"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_ne?: Maybe<Scalars["Int"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  week_lt?: Maybe<Scalars["Int"]>
  lastName_lte?: Maybe<Scalars["String"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
}

export type EventDetailItem = {
  __typename?: "EventDetailItem"
  eventDetail?: Maybe<EventDetailEventDetail>
}

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type StaffUpdateInput = {
  bio?: Maybe<Scalars["String"]>
  bio_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  sortOrder_inc?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  sortOrder_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  active?: Maybe<Scalars["Boolean"]>
  topic_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  active_unset?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
}

export type FromBomChildUpdateInput = {
  Vorname?: Maybe<Scalars["String"]>
  Vorname_unset?: Maybe<Scalars["Boolean"]>
  Anrede?: Maybe<Scalars["String"]>
  Geburtstag?: Maybe<Scalars["String"]>
  Anrede_unset?: Maybe<Scalars["Boolean"]>
  Bemerkung_unset?: Maybe<Scalars["Boolean"]>
  Geburtstag_unset?: Maybe<Scalars["Boolean"]>
  Name_unset?: Maybe<Scalars["Boolean"]>
  Name?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
}

export enum FromBomSortByInput {
  IdAsc = "_ID_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  StateAsc = "STATE_ASC",
  StateDesc = "STATE_DESC",
  IdDesc = "_ID_DESC",
  DeadlineAsc = "DEADLINE_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC"
}

export type EventDetailTicketTypeUpdateInput = {
  hideDateTime?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket_unset?: Maybe<Scalars["Boolean"]>
  price_inc?: Maybe<Scalars["Float"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  emailRequired_unset?: Maybe<Scalars["Boolean"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  showImageOnTop_unset?: Maybe<Scalars["Boolean"]>
  isActive_unset?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId_inc?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  generateNoTicket_unset?: Maybe<Scalars["Boolean"]>
  replyTo?: Maybe<Scalars["String"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  ticketsTotal_inc?: Maybe<Scalars["Int"]>
  colorCode?: Maybe<Scalars["String"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  hideDateTime_unset?: Maybe<Scalars["Boolean"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  eventId_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  dateCreated_unset?: Maybe<Scalars["Boolean"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  end_unset?: Maybe<Scalars["Boolean"]>
  companyMandatory_unset?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  useWorkflow_unset?: Maybe<Scalars["Boolean"]>
  phoneRequired_unset?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory_unset?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_unset?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  ticketsTotal_unset?: Maybe<Scalars["Boolean"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  vatTypeId_unset?: Maybe<Scalars["Boolean"]>
  _id_inc?: Maybe<Scalars["Int"]>
  eventId?: Maybe<Scalars["Int"]>
  nameRequired_unset?: Maybe<Scalars["Boolean"]>
  invoiceEnd_unset?: Maybe<Scalars["Boolean"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  colorCode_unset?: Maybe<Scalars["Boolean"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  addressRequired_unset?: Maybe<Scalars["Boolean"]>
  start_unset?: Maybe<Scalars["Boolean"]>
  currency_unset?: Maybe<Scalars["Boolean"]>
  firstNameMandatory_unset?: Maybe<Scalars["Boolean"]>
  blockAutoMailer_unset?: Maybe<Scalars["Boolean"]>
  openDoor_unset?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  preSaleEnd_unset?: Maybe<Scalars["Boolean"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  ticketTemplate_unset?: Maybe<Scalars["Boolean"]>
  birthDateMandatory_unset?: Maybe<Scalars["Boolean"]>
  dontShowInsurance_unset?: Maybe<Scalars["Boolean"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  hidePassbook_unset?: Maybe<Scalars["Boolean"]>
  modifiedDate_unset?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  numberOfTicketsSold_unset?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_unset?: Maybe<Scalars["Boolean"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  birthDateRequired_unset?: Maybe<Scalars["Boolean"]>
  senderEmail_unset?: Maybe<Scalars["Boolean"]>
  sofortEnd_unset?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  emailTemplate_unset?: Maybe<Scalars["Boolean"]>
  price_unset?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_inc?: Maybe<Scalars["Int"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  addressMandatory_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["Int"]>
  vatTypeId_inc?: Maybe<Scalars["Int"]>
  numberOfTicketsSold_inc?: Maybe<Scalars["Int"]>
  externalTicketCode_unset?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount_unset?: Maybe<Scalars["Boolean"]>
  vatPercentage_unset?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail_unset?: Maybe<Scalars["Boolean"]>
  emailMandatory_unset?: Maybe<Scalars["Boolean"]>
  currency?: Maybe<Scalars["String"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  isSoldOut_unset?: Maybe<Scalars["Boolean"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder_unset?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_inc?: Maybe<Scalars["Int"]>
  sortOrder_inc?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  replyTo_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoUpdateInput>>
  >
  isSoldOut?: Maybe<Scalars["Boolean"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos_unset?: Maybe<Scalars["Boolean"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  phoneMandatory_unset?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId_unset?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive_unset?: Maybe<Scalars["Boolean"]>
  vatPercentage_inc?: Maybe<Scalars["Float"]>
  sortOrder?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_unset?: Maybe<Scalars["Boolean"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  ticketByEmail_unset?: Maybe<Scalars["Boolean"]>
  price?: Maybe<Scalars["Float"]>
  hideReceipt_unset?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_inc?: Maybe<Scalars["Int"]>
  maxMemberTickets_unset?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  eventId_inc?: Maybe<Scalars["Int"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  firstNameRequired_unset?: Maybe<Scalars["Boolean"]>
  nameMandatory_unset?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_inc?: Maybe<Scalars["Int"]>
  preSaleStart_unset?: Maybe<Scalars["Boolean"]>
  sendSMSOrder_unset?: Maybe<Scalars["Boolean"]>
  companyRequired_unset?: Maybe<Scalars["Boolean"]>
  callcenterEnd_unset?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  festivalEventIds_unset?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  end?: Maybe<Scalars["DateTime"]>
  postalCodeAndCityRequired_unset?: Maybe<Scalars["Boolean"]>
  hideOnPcClient_unset?: Maybe<Scalars["Boolean"]>
}

export type Participant = {
  __typename?: "Participant"
  _id?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  fotoAllowed?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
}

export type StaffQueryInput = {
  bio_gte?: Maybe<Scalars["String"]>
  topic_lt?: Maybe<Scalars["String"]>
  topic_gte?: Maybe<Scalars["String"]>
  name_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  sortOrder_lte?: Maybe<Scalars["Int"]>
  topic_exists?: Maybe<Scalars["Boolean"]>
  topic_lte?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  name_gte?: Maybe<Scalars["String"]>
  sortOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  active_exists?: Maybe<Scalars["Boolean"]>
  bio_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  topic_ne?: Maybe<Scalars["String"]>
  active?: Maybe<Scalars["Boolean"]>
  sortOrder_gt?: Maybe<Scalars["Int"]>
  active_ne?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  sortOrder_lt?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  topic_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  name_lt?: Maybe<Scalars["String"]>
  sortOrder_gte?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  AND?: Maybe<Array<StaffQueryInput>>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  bio_exists?: Maybe<Scalars["Boolean"]>
  bio_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_ne?: Maybe<Scalars["Int"]>
  topic_gt?: Maybe<Scalars["String"]>
  bio_lte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  bio?: Maybe<Scalars["String"]>
  sortOrder_exists?: Maybe<Scalars["Boolean"]>
  name_gt?: Maybe<Scalars["String"]>
  bio_ne?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<StaffQueryInput>>
  name_exists?: Maybe<Scalars["Boolean"]>
  bio_gt?: Maybe<Scalars["String"]>
  topic_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  bio_lt?: Maybe<Scalars["String"]>
}

export type EventDetail = {
  __typename?: "EventDetail"
  _id?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfo>>>
  externalEventCode?: Maybe<Scalars["String"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  locationId?: Maybe<Scalars["Int"]>
  longitude?: Maybe<Scalars["Float"]>
  masterEventId?: Maybe<Scalars["Int"]>
  maxTickets?: Maybe<Scalars["Int"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  organizerId?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  shippingFee?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  status?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  tenantId?: Maybe<Scalars["Int"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketType>>>
  vatNumber?: Maybe<Scalars["String"]>
  warningSendDate?: Maybe<Scalars["String"]>
  zoneMapId?: Maybe<Scalars["Int"]>
}

export type EventDetailEventDetail = {
  __typename?: "EventDetailEventDetail"
  _id?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  end?: Maybe<Scalars["DateTime"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventDetailEventInfo>>>
  externalEventCode?: Maybe<Scalars["String"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  locationId?: Maybe<Scalars["Int"]>
  longitude?: Maybe<Scalars["Float"]>
  masterEventId?: Maybe<Scalars["Int"]>
  maxTickets?: Maybe<Scalars["Int"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  organizerId?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  shippingFee?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  status?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  tenantId?: Maybe<Scalars["Int"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailEventDetailTicketType>>>
  vatNumber?: Maybe<Scalars["String"]>
  warningSendDate?: Maybe<Scalars["String"]>
  zoneMapId?: Maybe<Scalars["Int"]>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type EventDetailTicketTypeQueryInput = {
  vatInGivenAmount_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  festivalEventIds_ne?: Maybe<Scalars["String"]>
  externalTicketCode_gt?: Maybe<Scalars["String"]>
  sofortEnd_exists?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  modifiedDate_lt?: Maybe<Scalars["DateTime"]>
  openDoor_lte?: Maybe<Scalars["DateTime"]>
  openDoor_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  replyTo_gt?: Maybe<Scalars["String"]>
  colorCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCodeAndCityRequired_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["Int"]>
  start?: Maybe<Scalars["DateTime"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  colorCode?: Maybe<Scalars["String"]>
  colorCode_ne?: Maybe<Scalars["String"]>
  currency?: Maybe<Scalars["String"]>
  currency_gt?: Maybe<Scalars["String"]>
  externalTicketCode_ne?: Maybe<Scalars["String"]>
  sortOrder_exists?: Maybe<Scalars["Boolean"]>
  addressMandatory_ne?: Maybe<Scalars["Boolean"]>
  sortOrder_lt?: Maybe<Scalars["Int"]>
  vatPercentage_ne?: Maybe<Scalars["Float"]>
  invoiceEnd_exists?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  festivalEventIds_gt?: Maybe<Scalars["String"]>
  externalTicketCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  hideReceipt_exists?: Maybe<Scalars["Boolean"]>
  senderEmail_gt?: Maybe<Scalars["String"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  vatTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxMemberTickets_lte?: Maybe<Scalars["Int"]>
  numberOfTicketsToBasket_gte?: Maybe<Scalars["Int"]>
  emailTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  eventId_lt?: Maybe<Scalars["Int"]>
  phoneMandatory_ne?: Maybe<Scalars["Boolean"]>
  externalTicketCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  eventId_lte?: Maybe<Scalars["Int"]>
  emailTemplate_ne?: Maybe<Scalars["String"]>
  sendSMSOrder_exists?: Maybe<Scalars["Boolean"]>
  modifiedDate_exists?: Maybe<Scalars["Boolean"]>
  dontShowInsurance_exists?: Maybe<Scalars["Boolean"]>
  phoneRequired_exists?: Maybe<Scalars["Boolean"]>
  emailRequired_exists?: Maybe<Scalars["Boolean"]>
  vatPercentage_gt?: Maybe<Scalars["Float"]>
  firstNameMandatory_ne?: Maybe<Scalars["Boolean"]>
  addressRequired_exists?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  price_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  dateCreated_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  end?: Maybe<Scalars["DateTime"]>
  bookWithTicketTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  hidePassbook_ne?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos_nin?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  senderEmail_lt?: Maybe<Scalars["String"]>
  vatInGivenAmount_gte?: Maybe<Scalars["String"]>
  vatPercentage_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  OR?: Maybe<Array<EventDetailTicketTypeQueryInput>>
  openDoor_lt?: Maybe<Scalars["DateTime"]>
  isActive_exists?: Maybe<Scalars["Boolean"]>
  sortOrder_gte?: Maybe<Scalars["Int"]>
  externalTicketCode_exists?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount_ne?: Maybe<Scalars["String"]>
  numberOfTicketsSold_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  hidePriceOnTicket_ne?: Maybe<Scalars["Boolean"]>
  dateCreated_lt?: Maybe<Scalars["DateTime"]>
  emailTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_lte?: Maybe<Scalars["Int"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  sendSMSOrder_ne?: Maybe<Scalars["Boolean"]>
  eventId_gte?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint_lt?: Maybe<Scalars["Int"]>
  dateCreated_exists?: Maybe<Scalars["Boolean"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  birthDateRequired_exists?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  preSaleStart_exists?: Maybe<Scalars["Boolean"]>
  callcenterEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  bookWithTicketTypeId_lte?: Maybe<Scalars["Int"]>
  invoiceEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  vatTypeId_exists?: Maybe<Scalars["Boolean"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  emailTemplate?: Maybe<Scalars["String"]>
  ticketsTotal_gt?: Maybe<Scalars["Int"]>
  preSaleEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  promoCodeIdToPrint_gt?: Maybe<Scalars["Int"]>
  openDoor_gte?: Maybe<Scalars["DateTime"]>
  invoiceEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  modifiedDate_ne?: Maybe<Scalars["DateTime"]>
  hidePriceOnTicket_exists?: Maybe<Scalars["Boolean"]>
  openDoor_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  currency_exists?: Maybe<Scalars["Boolean"]>
  ticketsTotal_gte?: Maybe<Scalars["Int"]>
  price_lt?: Maybe<Scalars["Float"]>
  vatPercentage_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  invoiceEnd_gt?: Maybe<Scalars["DateTime"]>
  modifiedDate_gte?: Maybe<Scalars["DateTime"]>
  addressMandatory_exists?: Maybe<Scalars["Boolean"]>
  firstNameRequired_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_lte?: Maybe<Scalars["DateTime"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketsTotal_exists?: Maybe<Scalars["Boolean"]>
  showImageOnTop_ne?: Maybe<Scalars["Boolean"]>
  hideOnPcClient_exists?: Maybe<Scalars["Boolean"]>
  showImageOnTop_exists?: Maybe<Scalars["Boolean"]>
  currency_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  preSaleStart_lt?: Maybe<Scalars["DateTime"]>
  colorCode_lt?: Maybe<Scalars["String"]>
  dateCreated_gte?: Maybe<Scalars["DateTime"]>
  senderEmail?: Maybe<Scalars["String"]>
  vatInGivenAmount_lt?: Maybe<Scalars["String"]>
  start_lte?: Maybe<Scalars["DateTime"]>
  openDoor_ne?: Maybe<Scalars["DateTime"]>
  currency_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  isActive_ne?: Maybe<Scalars["Boolean"]>
  _id_lt?: Maybe<Scalars["Int"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  ticketTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  price_gte?: Maybe<Scalars["Float"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<EventDetailTicketTypeQueryInput>>
  callcenterEnd_lte?: Maybe<Scalars["DateTime"]>
  colorCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  preSaleStart_ne?: Maybe<Scalars["DateTime"]>
  maxNumberOfTicketsPerOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_lt?: Maybe<Scalars["Int"]>
  vatTypeId_lt?: Maybe<Scalars["Int"]>
  vatPercentage_lte?: Maybe<Scalars["Float"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  senderEmail_lte?: Maybe<Scalars["String"]>
  dontShowInsurance_ne?: Maybe<Scalars["Boolean"]>
  eventId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  end_lte?: Maybe<Scalars["DateTime"]>
  callcenterEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  senderEmail_exists?: Maybe<Scalars["Boolean"]>
  sofortEnd_ne?: Maybe<Scalars["DateTime"]>
  maxNumberOfTicketsPerOrder_gte?: Maybe<Scalars["Int"]>
  ticketTemplate_gt?: Maybe<Scalars["String"]>
  callcenterEnd_gte?: Maybe<Scalars["DateTime"]>
  sofortEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  colorCode_gte?: Maybe<Scalars["String"]>
  numberOfTicketsToBasket_gt?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nameMandatory_exists?: Maybe<Scalars["Boolean"]>
  hideDateTime_ne?: Maybe<Scalars["Boolean"]>
  colorCode_lte?: Maybe<Scalars["String"]>
  addressRequired_ne?: Maybe<Scalars["Boolean"]>
  emailTemplate_lte?: Maybe<Scalars["String"]>
  eventId_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_gt?: Maybe<Scalars["DateTime"]>
  noConfirmationEmail_exists?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  maxNumberOfTicketsPerOrder_ne?: Maybe<Scalars["Int"]>
  currency_gte?: Maybe<Scalars["String"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  vatTypeId_lte?: Maybe<Scalars["Int"]>
  invoiceEnd_lt?: Maybe<Scalars["DateTime"]>
  sofortEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  end_lt?: Maybe<Scalars["DateTime"]>
  sortOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  currency_ne?: Maybe<Scalars["String"]>
  start_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  vatInGivenAmount_lte?: Maybe<Scalars["String"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  callcenterEnd_gt?: Maybe<Scalars["DateTime"]>
  emailTemplate_gte?: Maybe<Scalars["String"]>
  ticketByEmail_exists?: Maybe<Scalars["Boolean"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  numberOfTicketsSold_lte?: Maybe<Scalars["Int"]>
  currency_lte?: Maybe<Scalars["String"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  price_exists?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_gt?: Maybe<Scalars["Int"]>
  phoneRequired_ne?: Maybe<Scalars["Boolean"]>
  preSaleStart_gte?: Maybe<Scalars["DateTime"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  hideOnPcClient_ne?: Maybe<Scalars["Boolean"]>
  start_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  replyTo?: Maybe<Scalars["String"]>
  end_gte?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["Int"]>
  sofortEnd_lte?: Maybe<Scalars["DateTime"]>
  emailTemplate_lt?: Maybe<Scalars["String"]>
  externalTicketCode_lte?: Maybe<Scalars["String"]>
  festivalEventIds_lt?: Maybe<Scalars["String"]>
  generateNoTicket_exists?: Maybe<Scalars["Boolean"]>
  birthDateRequired_ne?: Maybe<Scalars["Boolean"]>
  companyRequired_ne?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount_gt?: Maybe<Scalars["String"]>
  bookWithTicketTypeId_lt?: Maybe<Scalars["Int"]>
  ticketsTotal_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numberOfTicketsToBasket_lte?: Maybe<Scalars["Int"]>
  ticketTemplate_lte?: Maybe<Scalars["String"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder_gt?: Maybe<Scalars["Int"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderEmail_ne?: Maybe<Scalars["String"]>
  sofortEnd_lt?: Maybe<Scalars["DateTime"]>
  senderEmail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  hideReceipt_ne?: Maybe<Scalars["Boolean"]>
  replyTo_lt?: Maybe<Scalars["String"]>
  festivalEventIds_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  vatPercentage_lt?: Maybe<Scalars["Float"]>
  dateCreated_ne?: Maybe<Scalars["DateTime"]>
  ticketByEmail_ne?: Maybe<Scalars["Boolean"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  end_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  end_exists?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive_ne?: Maybe<Scalars["Boolean"]>
  nameRequired_ne?: Maybe<Scalars["Boolean"]>
  _id_gt?: Maybe<Scalars["Int"]>
  callcenterEnd_exists?: Maybe<Scalars["Boolean"]>
  senderEmail_gte?: Maybe<Scalars["String"]>
  preSaleEnd_ne?: Maybe<Scalars["DateTime"]>
  birthDateMandatory_exists?: Maybe<Scalars["Boolean"]>
  end_ne?: Maybe<Scalars["DateTime"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  emailTemplate_exists?: Maybe<Scalars["Boolean"]>
  preSaleStart_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  start_lt?: Maybe<Scalars["DateTime"]>
  replyTo_lte?: Maybe<Scalars["String"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  ticketTemplate_gte?: Maybe<Scalars["String"]>
  end_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  colorCode_exists?: Maybe<Scalars["Boolean"]>
  blockAutoMailer_ne?: Maybe<Scalars["Boolean"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_exists?: Maybe<Scalars["Boolean"]>
  useWorkflow_ne?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail_ne?: Maybe<Scalars["Boolean"]>
  price_ne?: Maybe<Scalars["Float"]>
  replyTo_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  invoiceEnd_gte?: Maybe<Scalars["DateTime"]>
  numberOfTicketsToBasket_exists?: Maybe<Scalars["Boolean"]>
  ticketTemplate_ne?: Maybe<Scalars["String"]>
  festivalEventIds_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  price_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  replyTo_exists?: Maybe<Scalars["Boolean"]>
  birthDateMandatory_ne?: Maybe<Scalars["Boolean"]>
  ticketTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  emailMandatory_exists?: Maybe<Scalars["Boolean"]>
  sortOrder_ne?: Maybe<Scalars["Int"]>
  firstNameRequired_ne?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_lt?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint_exists?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  preSaleStart_gt?: Maybe<Scalars["DateTime"]>
  generateNoTicket_ne?: Maybe<Scalars["Boolean"]>
  emailMandatory_ne?: Maybe<Scalars["Boolean"]>
  vatTypeId_gt?: Maybe<Scalars["Int"]>
  openDoor_gt?: Maybe<Scalars["DateTime"]>
  price_gt?: Maybe<Scalars["Float"]>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  festivalEventIds_exists?: Maybe<Scalars["Boolean"]>
  end_gt?: Maybe<Scalars["DateTime"]>
  _id_gte?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_gt?: Maybe<Scalars["Int"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  eventId?: Maybe<Scalars["Int"]>
  eventId_gt?: Maybe<Scalars["Int"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["Int"]>
  modifiedDate_lte?: Maybe<Scalars["DateTime"]>
  currency_lt?: Maybe<Scalars["String"]>
  senderEmail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  bookWithTicketTypeId_gt?: Maybe<Scalars["Int"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_ne?: Maybe<Scalars["Int"]>
  numberOfTicketsToBasket_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  festivalEventIds_gte?: Maybe<Scalars["String"]>
  maxMemberTickets_gte?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_exists?: Maybe<Scalars["Boolean"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  hidePassbook_exists?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory_ne?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  vatTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  eventId_ne?: Maybe<Scalars["Int"]>
  modifiedDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  companyMandatory_ne?: Maybe<Scalars["Boolean"]>
  price_lte?: Maybe<Scalars["Float"]>
  ticketTypeInfos_in?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  hideDateTime?: Maybe<Scalars["Boolean"]>
  ticketsTotal_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nameRequired_exists?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId_ne?: Maybe<Scalars["Int"]>
  preSaleEnd_gte?: Maybe<Scalars["DateTime"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  emailTemplate_gt?: Maybe<Scalars["String"]>
  modifiedDate_gt?: Maybe<Scalars["DateTime"]>
  numberOfTicketsSold_gte?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_gte?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  ticketTemplate_lt?: Maybe<Scalars["String"]>
  useWorkflow_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isSoldOut_exists?: Maybe<Scalars["Boolean"]>
  preSaleStart_lte?: Maybe<Scalars["DateTime"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  ticketTypeInfos_exists?: Maybe<Scalars["Boolean"]>
  isSoldOut_ne?: Maybe<Scalars["Boolean"]>
  preSaleEnd_gt?: Maybe<Scalars["DateTime"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  vatPercentage_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  replyTo_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  addressRequired?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_lte?: Maybe<Scalars["Int"]>
  colorCode_gt?: Maybe<Scalars["String"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  externalTicketCode_lt?: Maybe<Scalars["String"]>
  modifiedDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  maxMemberTickets_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  preSaleStart_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  vatInGivenAmount_exists?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_ne?: Maybe<Scalars["Int"]>
  sofortEnd_gt?: Maybe<Scalars["DateTime"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_ne?: Maybe<Scalars["Int"]>
  nameMandatory_ne?: Maybe<Scalars["Boolean"]>
  invoiceEnd_ne?: Maybe<Scalars["DateTime"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  vatTypeId_ne?: Maybe<Scalars["Int"]>
  blockAutoMailer_exists?: Maybe<Scalars["Boolean"]>
  hideDateTime_exists?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  start_exists?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_lt?: Maybe<Scalars["Int"]>
  postalCodeAndCityMandatory_exists?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive_exists?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired_ne?: Maybe<Scalars["Boolean"]>
  price?: Maybe<Scalars["Float"]>
  promoCodeIdToPrint_lte?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_exists?: Maybe<Scalars["Boolean"]>
  ticketsTotal_lt?: Maybe<Scalars["Int"]>
  maxMemberTickets_exists?: Maybe<Scalars["Boolean"]>
  companyRequired_exists?: Maybe<Scalars["Boolean"]>
  start_gt?: Maybe<Scalars["DateTime"]>
  callcenterEnd_ne?: Maybe<Scalars["DateTime"]>
  maxMemberTickets_ne?: Maybe<Scalars["Int"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  externalTicketCode_gte?: Maybe<Scalars["String"]>
  phoneMandatory_exists?: Maybe<Scalars["Boolean"]>
  eventId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  replyTo_gte?: Maybe<Scalars["String"]>
  promoCodeIdToPrint_gte?: Maybe<Scalars["Int"]>
  numberOfTicketsSold_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  preSaleEnd_exists?: Maybe<Scalars["Boolean"]>
  vatTypeId_gte?: Maybe<Scalars["Int"]>
  ticketsTotal_ne?: Maybe<Scalars["Int"]>
  preSaleEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  openDoor_exists?: Maybe<Scalars["Boolean"]>
  ticketTemplate_exists?: Maybe<Scalars["Boolean"]>
  vatPercentage_gte?: Maybe<Scalars["Float"]>
  maxMemberTickets_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  ticketsTotal_lte?: Maybe<Scalars["Int"]>
  preSaleEnd_lte?: Maybe<Scalars["DateTime"]>
  companyMandatory_exists?: Maybe<Scalars["Boolean"]>
  firstNameMandatory_exists?: Maybe<Scalars["Boolean"]>
  sofortEnd_gte?: Maybe<Scalars["DateTime"]>
  invoiceEnd_lte?: Maybe<Scalars["DateTime"]>
  sortOrder?: Maybe<Scalars["Int"]>
  replyTo_ne?: Maybe<Scalars["String"]>
  start_gte?: Maybe<Scalars["DateTime"]>
  emailRequired_ne?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_gt?: Maybe<Scalars["Int"]>
  start_ne?: Maybe<Scalars["DateTime"]>
  festivalEventIds_lte?: Maybe<Scalars["String"]>
  callcenterEnd_lt?: Maybe<Scalars["DateTime"]>
  numberOfTicketsSold_lt?: Maybe<Scalars["Int"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  preSaleEnd_lt?: Maybe<Scalars["DateTime"]>
}

export type EventDetailEventInfoInsertInput = {
  address?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  flyerImage?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
}

export type FromBomInsertInput = {
  reservationDate?: Maybe<Scalars["DateTime"]>
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  Address?: Maybe<FromBomAddressInsertInput>
  Childs?: Maybe<Array<Maybe<FromBomChildInsertInput>>>
  _id?: Maybe<Scalars["ObjectId"]>
  deadline?: Maybe<Scalars["DateTime"]>
  numOfChildren?: Maybe<Scalars["Int"]>
}

export type LocationUpdateInput = {
  postalCode?: Maybe<Scalars["String"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  directions?: Maybe<Scalars["String"]>
  directions_unset?: Maybe<Scalars["Boolean"]>
  info_unset?: Maybe<Scalars["Boolean"]>
  postalCode_unset?: Maybe<Scalars["Boolean"]>
  city?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  street_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
}

export type FromBomAddress = {
  __typename?: "FromBomAddress"
  Adresse?: Maybe<Scalars["String"]>
  Anrede?: Maybe<Scalars["String"]>
  EMail?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Ort?: Maybe<Scalars["String"]>
  PLZ?: Maybe<Scalars["Int"]>
  TelefonM?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
}

export type EventDetailInsertInput = {
  externalEventCode?: Maybe<Scalars["String"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  status?: Maybe<Scalars["Int"]>
  end?: Maybe<Scalars["DateTime"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  masterEventId?: Maybe<Scalars["Int"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeInsertInput>>>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  warningSendDate?: Maybe<Scalars["String"]>
  locationId?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  emailTemplate?: Maybe<Scalars["String"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  vatNumber?: Maybe<Scalars["String"]>
  longitude?: Maybe<Scalars["Float"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  start?: Maybe<Scalars["DateTime"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  organizerId?: Maybe<Scalars["Int"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  shippingFee?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoInsertInput>>>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  maxTickets?: Maybe<Scalars["Int"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
}
