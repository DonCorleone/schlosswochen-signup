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

export type EventDetailEventInfoInsertInput = {
  bannerImagePath?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
  artists?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  flyerImage?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  address?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
}

export type SubscriptionUpdateInput = {
  salutation_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  lastName?: Maybe<Scalars["String"]>
  street2_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  street1_unset?: Maybe<Scalars["Boolean"]>
  street2?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  city?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  phone_unset?: Maybe<Scalars["Boolean"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  phone?: Maybe<Scalars["String"]>
  zip_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  externalUserId?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  country_unset?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  street1?: Maybe<Scalars["String"]>
  email_unset?: Maybe<Scalars["Boolean"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  lastName_unset?: Maybe<Scalars["Boolean"]>
  country?: Maybe<Scalars["String"]>
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  deadline?: Maybe<Scalars["DateTime"]>
  firstName_unset?: Maybe<Scalars["Boolean"]>
  firstName?: Maybe<Scalars["String"]>
  week_inc?: Maybe<Scalars["Int"]>
  participants_unset?: Maybe<Scalars["Boolean"]>
}

export type SubscriptionParticipantsRelationInput = {
  link?: Maybe<Array<Maybe<Scalars["String"]>>>
  create?: Maybe<Array<Maybe<ParticipantInsertInput>>>
}

export type EventDetailUpdateInput = {
  eventGenreValue_unset?: Maybe<Scalars["Boolean"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  countryId?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_inc?: Maybe<Scalars["Int"]>
  locationId_unset?: Maybe<Scalars["Boolean"]>
  status_unset?: Maybe<Scalars["Boolean"]>
  masterEventId_inc?: Maybe<Scalars["Int"]>
  masterEventId?: Maybe<Scalars["Int"]>
  maxTickets?: Maybe<Scalars["Int"]>
  salesWarningLevel_inc?: Maybe<Scalars["Int"]>
  noVatOnCommission_unset?: Maybe<Scalars["Boolean"]>
  latitude?: Maybe<Scalars["Float"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  countryId_unset?: Maybe<Scalars["Boolean"]>
  longitude_inc?: Maybe<Scalars["Float"]>
  latitude_unset?: Maybe<Scalars["Boolean"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  forceEmptySeats_inc?: Maybe<Scalars["Int"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  maxTickets_inc?: Maybe<Scalars["Int"]>
  postSaleCloseStatus_inc?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_unset?: Maybe<Scalars["Boolean"]>
  notificationEmail?: Maybe<Scalars["String"]>
  sendWarning_unset?: Maybe<Scalars["Boolean"]>
  maxTickets_unset?: Maybe<Scalars["Boolean"]>
  start_unset?: Maybe<Scalars["Boolean"]>
  zoneMapId_inc?: Maybe<Scalars["Int"]>
  latitude_inc?: Maybe<Scalars["Float"]>
  organizerId_inc?: Maybe<Scalars["Int"]>
  end_unset?: Maybe<Scalars["Boolean"]>
  dateCreated_unset?: Maybe<Scalars["Boolean"]>
  vatNumber_unset?: Maybe<Scalars["Boolean"]>
  externalEventCode_unset?: Maybe<Scalars["Boolean"]>
  status?: Maybe<Scalars["Int"]>
  facebookPixelId_unset?: Maybe<Scalars["Boolean"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_unset?: Maybe<Scalars["Boolean"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  ticketTypes_unset?: Maybe<Scalars["Boolean"]>
  forceEmptySeats_unset?: Maybe<Scalars["Boolean"]>
  locationId_inc?: Maybe<Scalars["Int"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeUpdateInput>>>
  googleCoordinates?: Maybe<Scalars["String"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  openDoor_unset?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_unset?: Maybe<Scalars["Boolean"]>
  eventInfos_unset?: Maybe<Scalars["Boolean"]>
  emailTemplate_unset?: Maybe<Scalars["Boolean"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  start?: Maybe<Scalars["DateTime"]>
  organizerId?: Maybe<Scalars["Int"]>
  isPhoneMandatory_unset?: Maybe<Scalars["Boolean"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  eventGenreValue_inc?: Maybe<Scalars["Int"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  vatNumber?: Maybe<Scalars["String"]>
  isBankInternalEvent_unset?: Maybe<Scalars["Boolean"]>
  dateModified_unset?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  shippingFee_inc?: Maybe<Scalars["Float"]>
  _id_inc?: Maybe<Scalars["Int"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  externalEventCode?: Maybe<Scalars["String"]>
  hideEventInfoOnSoldOut_unset?: Maybe<Scalars["Boolean"]>
  shippingFee?: Maybe<Scalars["Float"]>
  isCompanyNameMandatory_unset?: Maybe<Scalars["Boolean"]>
  isActiveForSale_unset?: Maybe<Scalars["Boolean"]>
  masterEventId_unset?: Maybe<Scalars["Boolean"]>
  zoneMapId_unset?: Maybe<Scalars["Boolean"]>
  notificationEmail_unset?: Maybe<Scalars["Boolean"]>
  hideOnEventList_unset?: Maybe<Scalars["Boolean"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  defaultLanguageId_unset?: Maybe<Scalars["Boolean"]>
  status_inc?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  emailTemplate?: Maybe<Scalars["String"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain_unset?: Maybe<Scalars["Boolean"]>
  tenantId_inc?: Maybe<Scalars["Int"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  longitude?: Maybe<Scalars["Float"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  salesRegionId_inc?: Maybe<Scalars["Int"]>
  tenantId?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoUpdateInput>>>
  end?: Maybe<Scalars["DateTime"]>
  shippingFee_unset?: Maybe<Scalars["Boolean"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  tenantId_unset?: Maybe<Scalars["Boolean"]>
  showLinkToGoogleMap_unset?: Maybe<Scalars["Boolean"]>
  organizerId_unset?: Maybe<Scalars["Boolean"]>
  stay22Active_unset?: Maybe<Scalars["Boolean"]>
  longitude_unset?: Maybe<Scalars["Boolean"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  countryId_inc?: Maybe<Scalars["Int"]>
  googleCoordinates_unset?: Maybe<Scalars["Boolean"]>
  sendNotificationByEmail_unset?: Maybe<Scalars["Boolean"]>
  salesRegionId_unset?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_inc?: Maybe<Scalars["Int"]>
  salesWarningLevel_unset?: Maybe<Scalars["Boolean"]>
  locationId?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  warningSendDate?: Maybe<Scalars["String"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  warningSendDate_unset?: Maybe<Scalars["Boolean"]>
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

export type EventDetailEventInfoQueryInput = {
  shortDescription_gte?: Maybe<Scalars["String"]>
  bannerImagePath_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  longDescription_ne?: Maybe<Scalars["String"]>
  address_ne?: Maybe<Scalars["String"]>
  bannerImage_gt?: Maybe<Scalars["String"]>
  address_exists?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["Int"]>
  city_lt?: Maybe<Scalars["String"]>
  longDescription_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  importantNotes_exists?: Maybe<Scalars["Boolean"]>
  url_gte?: Maybe<Scalars["String"]>
  longDescription_lt?: Maybe<Scalars["String"]>
  location_lt?: Maybe<Scalars["String"]>
  location_lte?: Maybe<Scalars["String"]>
  shortDescription_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  location_gte?: Maybe<Scalars["String"]>
  longDescription_lte?: Maybe<Scalars["String"]>
  posRemark_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lte?: Maybe<Scalars["String"]>
  languageId_gt?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  location_exists?: Maybe<Scalars["Boolean"]>
  _id_gt?: Maybe<Scalars["Int"]>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImage_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  name_ne?: Maybe<Scalars["String"]>
  importantNotes_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImage_gte?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  flyerImage_gt?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  bannerImagePath_lt?: Maybe<Scalars["String"]>
  location_gt?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  artists_lte?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  name_gte?: Maybe<Scalars["String"]>
  languageId_gte?: Maybe<Scalars["Int"]>
  bannerImage_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_ne?: Maybe<Scalars["String"]>
  organizerRemark_gt?: Maybe<Scalars["String"]>
  address_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImage_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  flyerImage?: Maybe<Scalars["String"]>
  address_lt?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  flyerImagePath_ne?: Maybe<Scalars["String"]>
  shortDescription_lte?: Maybe<Scalars["String"]>
  importantNotes_gte?: Maybe<Scalars["String"]>
  city_ne?: Maybe<Scalars["String"]>
  longDescription_gt?: Maybe<Scalars["String"]>
  organizerRemark_gte?: Maybe<Scalars["String"]>
  googleMapLink_lt?: Maybe<Scalars["String"]>
  bannerImagePath_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_lt?: Maybe<Scalars["String"]>
  shortDescription?: Maybe<Scalars["String"]>
  shortDescription_ne?: Maybe<Scalars["String"]>
  shortDescription_lt?: Maybe<Scalars["String"]>
  longDescription_exists?: Maybe<Scalars["Boolean"]>
  url_gt?: Maybe<Scalars["String"]>
  importantNotes?: Maybe<Scalars["String"]>
  flyerImage_ne?: Maybe<Scalars["String"]>
  bannerImagePath_ne?: Maybe<Scalars["String"]>
  shortDescription_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  bannerImagePath_gt?: Maybe<Scalars["String"]>
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  importantNotes_ne?: Maybe<Scalars["String"]>
  languageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  address_gt?: Maybe<Scalars["String"]>
  location_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleMapLink_lte?: Maybe<Scalars["String"]>
  url_exists?: Maybe<Scalars["Boolean"]>
  posRemark_gt?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  location_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  longDescription_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["Int"]>
  flyerImage_exists?: Maybe<Scalars["Boolean"]>
  organizerRemark_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_gt?: Maybe<Scalars["String"]>
  languageId_lte?: Maybe<Scalars["Int"]>
  longDescription_gte?: Maybe<Scalars["String"]>
  flyerImagePath_lte?: Maybe<Scalars["String"]>
  posRemark_lte?: Maybe<Scalars["String"]>
  importantNotes_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_gt?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<EventDetailEventInfoQueryInput>>
  longDescription?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<EventDetailEventInfoQueryInput>>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleMapLink_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  artists_gte?: Maybe<Scalars["String"]>
  googleMapLink_ne?: Maybe<Scalars["String"]>
  shortDescription_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  posRemark_lt?: Maybe<Scalars["String"]>
  shortDescription_gt?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  posRemark_exists?: Maybe<Scalars["Boolean"]>
  flyerImage_lte?: Maybe<Scalars["String"]>
  googleMapLink_gt?: Maybe<Scalars["String"]>
  languageId_exists?: Maybe<Scalars["Boolean"]>
  posRemark_ne?: Maybe<Scalars["String"]>
  flyerImagePath_exists?: Maybe<Scalars["Boolean"]>
  bannerImage_gte?: Maybe<Scalars["String"]>
  googleMapLink_exists?: Maybe<Scalars["Boolean"]>
  _id_lt?: Maybe<Scalars["Int"]>
  flyerImage_lt?: Maybe<Scalars["String"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  flyerImagePath_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  address_gte?: Maybe<Scalars["String"]>
  bannerImage_lt?: Maybe<Scalars["String"]>
  bannerImage_lte?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_lt?: Maybe<Scalars["String"]>
  importantNotes_lte?: Maybe<Scalars["String"]>
  bannerImagePath_exists?: Maybe<Scalars["Boolean"]>
  url_lte?: Maybe<Scalars["String"]>
  bannerImagePath_lte?: Maybe<Scalars["String"]>
  googleMapLink?: Maybe<Scalars["String"]>
  flyerImagePath_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  location_ne?: Maybe<Scalars["String"]>
  importantNotes_lt?: Maybe<Scalars["String"]>
  languageId_ne?: Maybe<Scalars["Int"]>
  artists?: Maybe<Scalars["String"]>
  bannerImagePath_gte?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  languageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  bannerImage?: Maybe<Scalars["String"]>
  address_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["Int"]>
  flyerImage_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gte?: Maybe<Scalars["String"]>
  bannerImage_exists?: Maybe<Scalars["Boolean"]>
  flyerImagePath_gt?: Maybe<Scalars["String"]>
  organizerRemark_ne?: Maybe<Scalars["String"]>
  flyerImagePath_gte?: Maybe<Scalars["String"]>
  organizerRemark_exists?: Maybe<Scalars["Boolean"]>
  posRemark_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lt?: Maybe<Scalars["String"]>
  googleMapLink_gte?: Maybe<Scalars["String"]>
  organizerRemark_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  address_lte?: Maybe<Scalars["String"]>
  googleMapLink_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  posRemark_gte?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  organizerRemark_lte?: Maybe<Scalars["String"]>
  url_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  address?: Maybe<Scalars["String"]>
  artists_ne?: Maybe<Scalars["String"]>
  importantNotes_gt?: Maybe<Scalars["String"]>
  organizerRemark_lt?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  flyerImagePath_lt?: Maybe<Scalars["String"]>
  artists_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId_lt?: Maybe<Scalars["Int"]>
  artists_exists?: Maybe<Scalars["Boolean"]>
  bannerImage_ne?: Maybe<Scalars["String"]>
}

export type StaffQueryInput = {
  name_ne?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["ObjectId"]>
  sortOrder_exists?: Maybe<Scalars["Boolean"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  bio_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  bio_gte?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<StaffQueryInput>>
  bio_lte?: Maybe<Scalars["String"]>
  topic_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  topic_ne?: Maybe<Scalars["String"]>
  bio_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_gt?: Maybe<Scalars["String"]>
  sortOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  name?: Maybe<Scalars["String"]>
  topic_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sortOrder_gt?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  name_exists?: Maybe<Scalars["Boolean"]>
  topic_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<StaffQueryInput>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  topic_lte?: Maybe<Scalars["String"]>
  topic_gt?: Maybe<Scalars["String"]>
  active_ne?: Maybe<Scalars["Boolean"]>
  bio_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  bio?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  sortOrder_gte?: Maybe<Scalars["Int"]>
  topic_gte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  topic?: Maybe<Scalars["String"]>
  bio_ne?: Maybe<Scalars["String"]>
  active_exists?: Maybe<Scalars["Boolean"]>
  bio_gt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  sortOrder_lt?: Maybe<Scalars["Int"]>
  sortOrder_ne?: Maybe<Scalars["Int"]>
  active?: Maybe<Scalars["Boolean"]>
  bio_lt?: Maybe<Scalars["String"]>
  name_gte?: Maybe<Scalars["String"]>
  topic_lt?: Maybe<Scalars["String"]>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lt?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_lte?: Maybe<Scalars["Int"]>
}

export enum EventDetailSortByInput {
  MastereventidDesc = "MASTEREVENTID_DESC",
  StartAsc = "START_ASC",
  ForceemptyseatsDesc = "FORCEEMPTYSEATS_DESC",
  GooglecoordinatesDesc = "GOOGLECOORDINATES_DESC",
  MaxticketsDesc = "MAXTICKETS_DESC",
  GoogleanalyticstrackerAsc = "GOOGLEANALYTICSTRACKER_ASC",
  GoogleanalyticstrackerDesc = "GOOGLEANALYTICSTRACKER_DESC",
  MastereventidAsc = "MASTEREVENTID_ASC",
  MaxticketsAsc = "MAXTICKETS_ASC",
  EmailtemplateDesc = "EMAILTEMPLATE_DESC",
  PostsaleclosestatusDesc = "POSTSALECLOSESTATUS_DESC",
  EndAsc = "END_ASC",
  LocationidAsc = "LOCATIONID_ASC",
  NotificationemailAsc = "NOTIFICATIONEMAIL_ASC",
  OrganizeridDesc = "ORGANIZERID_DESC",
  SalesregionidAsc = "SALESREGIONID_ASC",
  StatusAsc = "STATUS_ASC",
  WarningsenddateDesc = "WARNINGSENDDATE_DESC",
  IdAsc = "_ID_ASC",
  DatemodifiedDesc = "DATEMODIFIED_DESC",
  DefaultlanguageidDesc = "DEFAULTLANGUAGEID_DESC",
  LatitudeDesc = "LATITUDE_DESC",
  EventgenrevalueDesc = "EVENTGENREVALUE_DESC",
  LongitudeAsc = "LONGITUDE_ASC",
  VatnumberAsc = "VATNUMBER_ASC",
  SalesregionidDesc = "SALESREGIONID_DESC",
  EmailtemplateAsc = "EMAILTEMPLATE_ASC",
  ExternaleventcodeDesc = "EXTERNALEVENTCODE_DESC",
  ForceemptyseatsAsc = "FORCEEMPTYSEATS_ASC",
  OrganizeridAsc = "ORGANIZERID_ASC",
  ExternaleventcodeAsc = "EXTERNALEVENTCODE_ASC",
  FacebookpixelidAsc = "FACEBOOKPIXELID_ASC",
  PostsaleclosestatusAsc = "POSTSALECLOSESTATUS_ASC",
  ZonemapidAsc = "ZONEMAPID_ASC",
  CountryidDesc = "COUNTRYID_DESC",
  EventgenrevalueAsc = "EVENTGENREVALUE_ASC",
  LongitudeDesc = "LONGITUDE_DESC",
  WarningsenddateAsc = "WARNINGSENDDATE_ASC",
  StartDesc = "START_DESC",
  VatnumberDesc = "VATNUMBER_DESC",
  EndDesc = "END_DESC",
  LatitudeAsc = "LATITUDE_ASC",
  MaxticketsproorderDesc = "MAXTICKETSPROORDER_DESC",
  SaleswarninglevelAsc = "SALESWARNINGLEVEL_ASC",
  TenantidDesc = "TENANTID_DESC",
  ZonemapidDesc = "ZONEMAPID_DESC",
  DefaultlanguageidAsc = "DEFAULTLANGUAGEID_ASC",
  NotificationemailDesc = "NOTIFICATIONEMAIL_DESC",
  OrganizergoogleanalyticsdomainAsc = "ORGANIZERGOOGLEANALYTICSDOMAIN_ASC",
  TenantidAsc = "TENANTID_ASC",
  GooglecoordinatesAsc = "GOOGLECOORDINATES_ASC",
  OpendoorAsc = "OPENDOOR_ASC",
  OrganizergoogleanalyticsdomainDesc = "ORGANIZERGOOGLEANALYTICSDOMAIN_DESC",
  IdDesc = "_ID_DESC",
  CountryidAsc = "COUNTRYID_ASC",
  DatecreatedDesc = "DATECREATED_DESC",
  MaxticketsproorderAsc = "MAXTICKETSPROORDER_ASC",
  ShippingfeeAsc = "SHIPPINGFEE_ASC",
  ShippingfeeDesc = "SHIPPINGFEE_DESC",
  DatecreatedAsc = "DATECREATED_ASC",
  LocationidDesc = "LOCATIONID_DESC",
  OpendoorDesc = "OPENDOOR_DESC",
  SaleswarninglevelDesc = "SALESWARNINGLEVEL_DESC",
  DatemodifiedAsc = "DATEMODIFIED_ASC",
  FacebookpixelidDesc = "FACEBOOKPIXELID_DESC",
  StatusDesc = "STATUS_DESC"
}

export type StaffInsertInput = {
  bio?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  sortOrder?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  active?: Maybe<Scalars["Boolean"]>
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

export type ParticipantQueryInput = {
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_gte?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  participant_id_gt?: Maybe<Scalars["String"]>
  birthday_ne?: Maybe<Scalars["DateTime"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  firstNameParticipant_lte?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<ParticipantQueryInput>>
  participant_id_ne?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  externalUserId?: Maybe<Scalars["String"]>
  participant_id_lt?: Maybe<Scalars["String"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  comment_gte?: Maybe<Scalars["String"]>
  firstNameParticipant_gte?: Maybe<Scalars["String"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_ne?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  birthday_lt?: Maybe<Scalars["DateTime"]>
  participant_id_gte?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  birthday_gte?: Maybe<Scalars["DateTime"]>
  comment_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_lt?: Maybe<Scalars["String"]>
  participant_id_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_gt?: Maybe<Scalars["String"]>
  fotoAllowed_ne?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  birthday_lte?: Maybe<Scalars["DateTime"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  fotoAllowed_exists?: Maybe<Scalars["Boolean"]>
  comment_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_ne?: Maybe<Scalars["String"]>
  birthday_exists?: Maybe<Scalars["Boolean"]>
  comment_exists?: Maybe<Scalars["Boolean"]>
  participant_id_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participant_id_exists?: Maybe<Scalars["Boolean"]>
  birthday_gt?: Maybe<Scalars["DateTime"]>
  firstNameParticipant_gt?: Maybe<Scalars["String"]>
  externalUserId_gt?: Maybe<Scalars["String"]>
  lastNameParticipant_lte?: Maybe<Scalars["String"]>
  comment_lte?: Maybe<Scalars["String"]>
  comment_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_ne?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_gt?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  firstNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastNameParticipant_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<ParticipantQueryInput>>
  salutation_gte?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  comment_ne?: Maybe<Scalars["String"]>
  firstNameParticipant_lt?: Maybe<Scalars["String"]>
  salutation_ne?: Maybe<Scalars["String"]>
  lastNameParticipant_exists?: Maybe<Scalars["Boolean"]>
  salutation_lte?: Maybe<Scalars["String"]>
  participant_id_lte?: Maybe<Scalars["String"]>
  comment_lt?: Maybe<Scalars["String"]>
  firstNameParticipant_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  birthday_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  lastNameParticipant_lt?: Maybe<Scalars["String"]>
  birthday?: Maybe<Scalars["DateTime"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  birthday_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
}

export enum FromBomSortByInput {
  DeadlineAsc = "DEADLINE_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  StateAsc = "STATE_ASC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  DeadlineDesc = "DEADLINE_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  StateDesc = "STATE_DESC",
  WeekAsc = "WEEK_ASC",
  WeekDesc = "WEEK_DESC"
}

export type SponsorEvent = {
  __typename?: "SponsorEvent"
  event?: Maybe<Scalars["String"]>
  share?: Maybe<Scalars["Float"]>
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

export type LocationQueryInput = {
  postalCode_gt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_exists?: Maybe<Scalars["Boolean"]>
  city_gte?: Maybe<Scalars["String"]>
  postalCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_lte?: Maybe<Scalars["String"]>
  street_exists?: Maybe<Scalars["Boolean"]>
  name_lte?: Maybe<Scalars["String"]>
  name_ne?: Maybe<Scalars["String"]>
  name_gte?: Maybe<Scalars["String"]>
  street_gt?: Maybe<Scalars["String"]>
  street_ne?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<LocationQueryInput>>
  info_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_lt?: Maybe<Scalars["String"]>
  postalCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_lte?: Maybe<Scalars["String"]>
  info_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_gte?: Maybe<Scalars["String"]>
  postalCode_ne?: Maybe<Scalars["String"]>
  directions_ne?: Maybe<Scalars["String"]>
  street_gte?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  directions_lte?: Maybe<Scalars["String"]>
  postalCode_gte?: Maybe<Scalars["String"]>
  street_lte?: Maybe<Scalars["String"]>
  directions_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  directions_gte?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  postalCode_lt?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  directions_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_exists?: Maybe<Scalars["Boolean"]>
  info_ne?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCode_lte?: Maybe<Scalars["String"]>
  street_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  postalCode?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  city_lt?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  directions_gt?: Maybe<Scalars["String"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  info_lt?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  directions?: Maybe<Scalars["String"]>
  street_lt?: Maybe<Scalars["String"]>
  directions_lt?: Maybe<Scalars["String"]>
  info_gt?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id?: Maybe<Scalars["ObjectId"]>
  street_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  postalCode_exists?: Maybe<Scalars["Boolean"]>
  directions_exists?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  AND?: Maybe<Array<LocationQueryInput>>
  city_ne?: Maybe<Scalars["String"]>
}

export type FromBomQueryInput = {
  _id_ne?: Maybe<Scalars["ObjectId"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  Address_exists?: Maybe<Scalars["Boolean"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  OR?: Maybe<Array<FromBomQueryInput>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  week_lte?: Maybe<Scalars["Int"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id?: Maybe<Scalars["ObjectId"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  AND?: Maybe<Array<FromBomQueryInput>>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  state?: Maybe<Scalars["String"]>
  Childs_in?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  state_gte?: Maybe<Scalars["String"]>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  Childs_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  week_gte?: Maybe<Scalars["Int"]>
  Address?: Maybe<FromBomAddressQueryInput>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  week_gt?: Maybe<Scalars["Int"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  state_gt?: Maybe<Scalars["String"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  deadline?: Maybe<Scalars["DateTime"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  week_lt?: Maybe<Scalars["Int"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  state_lte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  state_ne?: Maybe<Scalars["String"]>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  Childs?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
  week_ne?: Maybe<Scalars["Int"]>
  Childs_nin?: Maybe<Array<Maybe<FromBomChildQueryInput>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  state_lt?: Maybe<Scalars["String"]>
}

export type SponsorEventInsertInput = {
  event?: Maybe<Scalars["String"]>
  share?: Maybe<Scalars["Float"]>
}

export type EventDetailTicketTypeTicketTypeInfoQueryInput = {
  ticketTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  senderName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  presentation?: Maybe<Scalars["String"]>
  croppedImageData_gt?: Maybe<Scalars["String"]>
  languageId_ne?: Maybe<Scalars["Int"]>
  presentation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  modifiedDate_lt?: Maybe<Scalars["DateTime"]>
  imageUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  imageUrl_ne?: Maybe<Scalars["String"]>
  emailSubject_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_lt?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  croppedImageData_exists?: Maybe<Scalars["Boolean"]>
  description_ne?: Maybe<Scalars["String"]>
  originalFileData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFile_lt?: Maybe<Scalars["String"]>
  deleted?: Maybe<Scalars["Boolean"]>
  modifiedDate_exists?: Maybe<Scalars["Boolean"]>
  description_gt?: Maybe<Scalars["String"]>
  languageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  imageUrl_gt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  image_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id?: Maybe<Scalars["Int"]>
  customtext2Mandatory_ne?: Maybe<Scalars["Boolean"]>
  alternateImageUrl_exists?: Maybe<Scalars["Boolean"]>
  senderName_gt?: Maybe<Scalars["String"]>
  image_lte?: Maybe<Scalars["String"]>
  languageId_gte?: Maybe<Scalars["Int"]>
  emailSubject_gte?: Maybe<Scalars["String"]>
  additionalFile_ne?: Maybe<Scalars["String"]>
  emailSubject_lt?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["Int"]>
  modifiedDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  imageUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalFileData_lt?: Maybe<Scalars["String"]>
  modifiedDate_ne?: Maybe<Scalars["DateTime"]>
  croppedImageData_ne?: Maybe<Scalars["String"]>
  senderName_exists?: Maybe<Scalars["Boolean"]>
  deleted_ne?: Maybe<Scalars["Boolean"]>
  additionalFile_gt?: Maybe<Scalars["String"]>
  imageUrl_exists?: Maybe<Scalars["Boolean"]>
  presentation_exists?: Maybe<Scalars["Boolean"]>
  alternateImageUrl_gte?: Maybe<Scalars["String"]>
  alternateImageUrl_gt?: Maybe<Scalars["String"]>
  presentation_lte?: Maybe<Scalars["String"]>
  senderName_gte?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  image_gt?: Maybe<Scalars["String"]>
  senderName_lte?: Maybe<Scalars["String"]>
  alternateImageUrl_lt?: Maybe<Scalars["String"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  senderName_lt?: Maybe<Scalars["String"]>
  emailSubject_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  imageUrl?: Maybe<Scalars["String"]>
  description_lt?: Maybe<Scalars["String"]>
  originalImageData_gte?: Maybe<Scalars["String"]>
  originalFileData_ne?: Maybe<Scalars["String"]>
  originalFileData_exists?: Maybe<Scalars["Boolean"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketTypeId_ne?: Maybe<Scalars["Int"]>
  presentation_ne?: Maybe<Scalars["String"]>
  additionalFile_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  originalFileData_gt?: Maybe<Scalars["String"]>
  description_lte?: Maybe<Scalars["String"]>
  emailSubject_lte?: Maybe<Scalars["String"]>
  presentation_gte?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  _id_lte?: Maybe<Scalars["Int"]>
  modifiedDate_gte?: Maybe<Scalars["DateTime"]>
  ticketTypeId_gte?: Maybe<Scalars["Int"]>
  ticketTypeId_lte?: Maybe<Scalars["Int"]>
  imageUrl_gte?: Maybe<Scalars["String"]>
  languageId_lt?: Maybe<Scalars["Int"]>
  presentation_lt?: Maybe<Scalars["String"]>
  originalImageData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_ne?: Maybe<Scalars["String"]>
  originalImageData_gt?: Maybe<Scalars["String"]>
  croppedImageData?: Maybe<Scalars["String"]>
  image_lt?: Maybe<Scalars["String"]>
  croppedImageData_gte?: Maybe<Scalars["String"]>
  originalFileData_lte?: Maybe<Scalars["String"]>
  emailSubject_ne?: Maybe<Scalars["String"]>
  croppedImageData_lte?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  additionalFileUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  description_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderName?: Maybe<Scalars["String"]>
  emailSubject_exists?: Maybe<Scalars["Boolean"]>
  ticketTypeId_exists?: Maybe<Scalars["Boolean"]>
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  emailSubject_gt?: Maybe<Scalars["String"]>
  image_ne?: Maybe<Scalars["String"]>
  croppedImageData_lt?: Maybe<Scalars["String"]>
  additionalFileUrl_exists?: Maybe<Scalars["Boolean"]>
  image_exists?: Maybe<Scalars["Boolean"]>
  additionalFile_lte?: Maybe<Scalars["String"]>
  additionalFile_gte?: Maybe<Scalars["String"]>
  modifiedDate_lte?: Maybe<Scalars["DateTime"]>
  customtext1Mandatory_exists?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  additionalFileUrl_ne?: Maybe<Scalars["String"]>
  imageUrl_lte?: Maybe<Scalars["String"]>
  originalFileData_gte?: Maybe<Scalars["String"]>
  alternateImageUrl_lte?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
  croppedImageData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  deleted_exists?: Maybe<Scalars["Boolean"]>
  modifiedDate_gt?: Maybe<Scalars["DateTime"]>
  name_gte?: Maybe<Scalars["String"]>
  customtext2Mandatory_exists?: Maybe<Scalars["Boolean"]>
  alternateImageUrl_ne?: Maybe<Scalars["String"]>
  languageId_gt?: Maybe<Scalars["Int"]>
  description_exists?: Maybe<Scalars["Boolean"]>
  _id_gt?: Maybe<Scalars["Int"]>
  presentation_gt?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  additionalFileUrl_gt?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  additionalFile_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  additionalFileUrl_lt?: Maybe<Scalars["String"]>
  emailSubject?: Maybe<Scalars["String"]>
  originalFileData_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  languageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  name_lt?: Maybe<Scalars["String"]>
  originalImageData_ne?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  alternateImageUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderName_ne?: Maybe<Scalars["String"]>
  senderName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  imageUrl_lt?: Maybe<Scalars["String"]>
  image_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  ticketTypeId_gt?: Maybe<Scalars["Int"]>
  languageId_lte?: Maybe<Scalars["Int"]>
  originalImageData_lte?: Maybe<Scalars["String"]>
  modifiedDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  ticketTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  customtext1Mandatory_ne?: Maybe<Scalars["Boolean"]>
  presentation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl_lte?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["Int"]>
  description_gte?: Maybe<Scalars["String"]>
  alternateImageUrl_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalImageData_exists?: Maybe<Scalars["Boolean"]>
  additionalFile_exists?: Maybe<Scalars["Boolean"]>
  image_gte?: Maybe<Scalars["String"]>
  languageId_exists?: Maybe<Scalars["Boolean"]>
  croppedImageData_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFileUrl_gte?: Maybe<Scalars["String"]>
  additionalFileUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  originalFileData?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  originalImageData?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  additionalFile?: Maybe<Scalars["String"]>
  ticketTypeId_lt?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["Int"]>
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

export type EventDetailTicketTypeUpdateInput = {
  externalTicketCode?: Maybe<Scalars["String"]>
  firstNameRequired_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoUpdateInput>>
  >
  vatPercentage_inc?: Maybe<Scalars["Float"]>
  isActive_unset?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired_unset?: Maybe<Scalars["Boolean"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  isOverheadCalculateActive_unset?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket_unset?: Maybe<Scalars["Boolean"]>
  hideOnPcClient_unset?: Maybe<Scalars["Boolean"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  phoneRequired_unset?: Maybe<Scalars["Boolean"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  blockAutoMailer_unset?: Maybe<Scalars["Boolean"]>
  vatTypeId_inc?: Maybe<Scalars["Int"]>
  eventId_unset?: Maybe<Scalars["Boolean"]>
  birthDateMandatory_unset?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  nameMandatory_unset?: Maybe<Scalars["Boolean"]>
  emailMandatory_unset?: Maybe<Scalars["Boolean"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  eventId?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_unset?: Maybe<Scalars["Boolean"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder_inc?: Maybe<Scalars["Int"]>
  price?: Maybe<Scalars["Float"]>
  maxMemberTickets_inc?: Maybe<Scalars["Int"]>
  emailRequired_unset?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  sendSMSOrder_unset?: Maybe<Scalars["Boolean"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  price_inc?: Maybe<Scalars["Float"]>
  promoCodeIdToPrint_inc?: Maybe<Scalars["Int"]>
  sortOrder_unset?: Maybe<Scalars["Boolean"]>
  price_unset?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  numberOfTicketsSold_unset?: Maybe<Scalars["Boolean"]>
  addressMandatory_unset?: Maybe<Scalars["Boolean"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_unset?: Maybe<Scalars["Boolean"]>
  colorCode?: Maybe<Scalars["String"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  invoiceEnd_unset?: Maybe<Scalars["Boolean"]>
  sofortEnd_unset?: Maybe<Scalars["Boolean"]>
  end_unset?: Maybe<Scalars["Boolean"]>
  replyTo?: Maybe<Scalars["String"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId_inc?: Maybe<Scalars["Int"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  generateNoTicket_unset?: Maybe<Scalars["Boolean"]>
  preSaleEnd_unset?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  end?: Maybe<Scalars["DateTime"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  externalTicketCode_unset?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
  currency?: Maybe<Scalars["String"]>
  dateCreated_unset?: Maybe<Scalars["Boolean"]>
  festivalEventIds_unset?: Maybe<Scalars["Boolean"]>
  _id_inc?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_inc?: Maybe<Scalars["Int"]>
  addressRequired_unset?: Maybe<Scalars["Boolean"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  isSoldOut_unset?: Maybe<Scalars["Boolean"]>
  ticketTemplate_unset?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_inc?: Maybe<Scalars["Int"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  hidePassbook_unset?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_unset?: Maybe<Scalars["Boolean"]>
  senderEmail_unset?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  vatPercentage_unset?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount_unset?: Maybe<Scalars["Boolean"]>
  hideReceipt_unset?: Maybe<Scalars["Boolean"]>
  replyTo_unset?: Maybe<Scalars["Boolean"]>
  dontShowInsurance_unset?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  vatTypeId_unset?: Maybe<Scalars["Boolean"]>
  birthDateRequired_unset?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  preSaleStart_unset?: Maybe<Scalars["Boolean"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  firstNameMandatory_unset?: Maybe<Scalars["Boolean"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  currency_unset?: Maybe<Scalars["Boolean"]>
  nameRequired_unset?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_inc?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_unset?: Maybe<Scalars["Boolean"]>
  companyRequired_unset?: Maybe<Scalars["Boolean"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  callcenterEnd_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos_unset?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail_unset?: Maybe<Scalars["Boolean"]>
  ticketsTotal_unset?: Maybe<Scalars["Boolean"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  start_unset?: Maybe<Scalars["Boolean"]>
  showImageOnTop_unset?: Maybe<Scalars["Boolean"]>
  eventId_inc?: Maybe<Scalars["Int"]>
  phoneMandatory_unset?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  postalCodeAndCityMandatory_unset?: Maybe<Scalars["Boolean"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  companyMandatory_unset?: Maybe<Scalars["Boolean"]>
  ticketByEmail_unset?: Maybe<Scalars["Boolean"]>
  ticketsTotal_inc?: Maybe<Scalars["Int"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  openDoor_unset?: Maybe<Scalars["Boolean"]>
  modifiedDate_unset?: Maybe<Scalars["Boolean"]>
  colorCode_unset?: Maybe<Scalars["Boolean"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  hideDateTime_unset?: Maybe<Scalars["Boolean"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  useWorkflow_unset?: Maybe<Scalars["Boolean"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  maxMemberTickets_unset?: Maybe<Scalars["Boolean"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  emailTemplate_unset?: Maybe<Scalars["Boolean"]>
}

export type PressUpdateInput = {
  fileExtension_unset?: Maybe<Scalars["Boolean"]>
  desc_unset?: Maybe<Scalars["Boolean"]>
  fileExtension?: Maybe<Scalars["String"]>
  link_unset?: Maybe<Scalars["Boolean"]>
  nr?: Maybe<Scalars["String"]>
  nr_unset?: Maybe<Scalars["Boolean"]>
  link?: Maybe<Scalars["String"]>
  quote?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  quote_unset?: Maybe<Scalars["Boolean"]>
  author_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  desc?: Maybe<Scalars["String"]>
  source_unset?: Maybe<Scalars["Boolean"]>
  date?: Maybe<Scalars["DateTime"]>
  date_unset?: Maybe<Scalars["Boolean"]>
  source?: Maybe<Scalars["String"]>
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

export type FromBomChildQueryInput = {
  Vorname_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_exists?: Maybe<Scalars["Boolean"]>
  Geburtstag_gt?: Maybe<Scalars["String"]>
  Name_gt?: Maybe<Scalars["String"]>
  Anrede_lte?: Maybe<Scalars["String"]>
  Name_gte?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
  Vorname_gt?: Maybe<Scalars["String"]>
  Anrede_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_lte?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<FromBomChildQueryInput>>
  Geburtstag?: Maybe<Scalars["String"]>
  Name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_ne?: Maybe<Scalars["String"]>
  Geburtstag_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_exists?: Maybe<Scalars["Boolean"]>
  Name_lte?: Maybe<Scalars["String"]>
  Bemerkung_gte?: Maybe<Scalars["String"]>
  Anrede_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_lt?: Maybe<Scalars["String"]>
  Bemerkung_ne?: Maybe<Scalars["String"]>
  Name_ne?: Maybe<Scalars["String"]>
  Vorname_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Geburtstag_lt?: Maybe<Scalars["String"]>
  Bemerkung_exists?: Maybe<Scalars["Boolean"]>
  Anrede?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Geburtstag_gte?: Maybe<Scalars["String"]>
  Vorname_gte?: Maybe<Scalars["String"]>
  Anrede_gt?: Maybe<Scalars["String"]>
  Bemerkung_lt?: Maybe<Scalars["String"]>
  Bemerkung_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_ne?: Maybe<Scalars["String"]>
  Bemerkung_lte?: Maybe<Scalars["String"]>
  Bemerkung_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_lt?: Maybe<Scalars["String"]>
  Vorname_exists?: Maybe<Scalars["Boolean"]>
  Vorname_lte?: Maybe<Scalars["String"]>
  Name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name_exists?: Maybe<Scalars["Boolean"]>
  Anrede_ne?: Maybe<Scalars["String"]>
  Anrede_gte?: Maybe<Scalars["String"]>
  Bemerkung_gt?: Maybe<Scalars["String"]>
  Name_lt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<FromBomChildQueryInput>>
}

export type EventDetailQueryInput = {
  openDoor_ne?: Maybe<Scalars["DateTime"]>
  masterEventId_lt?: Maybe<Scalars["Int"]>
  vatNumber_ne?: Maybe<Scalars["String"]>
  masterEventId_gte?: Maybe<Scalars["Int"]>
  eventInfos_exists?: Maybe<Scalars["Boolean"]>
  longitude_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  facebookPixelId_ne?: Maybe<Scalars["String"]>
  openDoor_gt?: Maybe<Scalars["DateTime"]>
  masterEventId?: Maybe<Scalars["Int"]>
  dateCreated_exists?: Maybe<Scalars["Boolean"]>
  isActiveForSale_exists?: Maybe<Scalars["Boolean"]>
  masterEventId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxTickets_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  vatNumber_gte?: Maybe<Scalars["String"]>
  longitude_ne?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  start_exists?: Maybe<Scalars["Boolean"]>
  end_lte?: Maybe<Scalars["DateTime"]>
  organizerId_lte?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_lte?: Maybe<Scalars["Int"]>
  defaultLanguageId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  locationId_lt?: Maybe<Scalars["Int"]>
  googleCoordinates_ne?: Maybe<Scalars["String"]>
  status_gte?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salesRegionId?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_ne?: Maybe<Scalars["String"]>
  externalEventCode_lt?: Maybe<Scalars["String"]>
  masterEventId_ne?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  vatNumber?: Maybe<Scalars["String"]>
  start?: Maybe<Scalars["DateTime"]>
  salesRegionId_gte?: Maybe<Scalars["Int"]>
  longitude?: Maybe<Scalars["Float"]>
  tenantId_ne?: Maybe<Scalars["Int"]>
  latitude_lt?: Maybe<Scalars["Float"]>
  vatNumber_gt?: Maybe<Scalars["String"]>
  vatNumber_lte?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<EventDetailQueryInput>>
  postSaleCloseStatus_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  notificationEmail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleCoordinates_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  locationId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateCreated_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  eventGenreValue_lte?: Maybe<Scalars["Int"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  countryId_gt?: Maybe<Scalars["Int"]>
  shippingFee_ne?: Maybe<Scalars["Float"]>
  zoneMapId_gte?: Maybe<Scalars["Int"]>
  zoneMapId_exists?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain_gte?: Maybe<Scalars["String"]>
  dateModified_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  notificationEmail_gte?: Maybe<Scalars["String"]>
  externalEventCode_gt?: Maybe<Scalars["String"]>
  locationId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  longitude_lt?: Maybe<Scalars["Float"]>
  maxTickets_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  vatNumber_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  googleCoordinates_exists?: Maybe<Scalars["Boolean"]>
  sendNotificationByEmail_ne?: Maybe<Scalars["Boolean"]>
  openDoor_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  facebookPixelId_lt?: Maybe<Scalars["String"]>
  eventInfos_nin?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  stay22Active_exists?: Maybe<Scalars["Boolean"]>
  maxTickets?: Maybe<Scalars["Int"]>
  ticketTypes_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate_gte?: Maybe<Scalars["String"]>
  warningSendDate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  organizerId_exists?: Maybe<Scalars["Boolean"]>
  masterEventId_exists?: Maybe<Scalars["Boolean"]>
  masterEventId_lte?: Maybe<Scalars["Int"]>
  defaultLanguageId_exists?: Maybe<Scalars["Boolean"]>
  maxTickets_lte?: Maybe<Scalars["Int"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  tenantId_lt?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  salesRegionId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  latitude?: Maybe<Scalars["Float"]>
  zoneMapId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_lt?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  locationId?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_exists?: Maybe<Scalars["Boolean"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  zoneMapId_lte?: Maybe<Scalars["Int"]>
  openDoor_lte?: Maybe<Scalars["DateTime"]>
  openDoor_lt?: Maybe<Scalars["DateTime"]>
  vatNumber_lt?: Maybe<Scalars["String"]>
  end_lt?: Maybe<Scalars["DateTime"]>
  notificationEmail_lte?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  shippingFee_exists?: Maybe<Scalars["Boolean"]>
  hideOnEventList_exists?: Maybe<Scalars["Boolean"]>
  sendNotificationByEmail_exists?: Maybe<Scalars["Boolean"]>
  isBankInternalEvent_exists?: Maybe<Scalars["Boolean"]>
  hideOnEventList_ne?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_lte?: Maybe<Scalars["Int"]>
  notificationEmail_gt?: Maybe<Scalars["String"]>
  postSaleCloseStatus_ne?: Maybe<Scalars["Int"]>
  googleCoordinates_gt?: Maybe<Scalars["String"]>
  warningSendDate_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate_exists?: Maybe<Scalars["Boolean"]>
  start_gt?: Maybe<Scalars["DateTime"]>
  notificationEmail_exists?: Maybe<Scalars["Boolean"]>
  status_lte?: Maybe<Scalars["Int"]>
  locationId_lte?: Maybe<Scalars["Int"]>
  facebookPixelId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  isActiveForSale_ne?: Maybe<Scalars["Boolean"]>
  googleAnalyticsTracker_lte?: Maybe<Scalars["String"]>
  masterEventId_gt?: Maybe<Scalars["Int"]>
  forceEmptySeats_gte?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  externalEventCode_ne?: Maybe<Scalars["String"]>
  tenantId_gte?: Maybe<Scalars["Int"]>
  status_lt?: Maybe<Scalars["Int"]>
  vatNumber_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salesRegionId_gt?: Maybe<Scalars["Int"]>
  organizerId_gt?: Maybe<Scalars["Int"]>
  externalEventCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  forceEmptySeats_exists?: Maybe<Scalars["Boolean"]>
  forceEmptySeats_lte?: Maybe<Scalars["Int"]>
  salesRegionId_lte?: Maybe<Scalars["Int"]>
  start_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  postSaleCloseStatus_gte?: Maybe<Scalars["Int"]>
  end_gt?: Maybe<Scalars["DateTime"]>
  isBankInternalEvent_ne?: Maybe<Scalars["Boolean"]>
  dateCreated_gte?: Maybe<Scalars["DateTime"]>
  eventGenreValue_ne?: Maybe<Scalars["Int"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  openDoor_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  shippingFee_gt?: Maybe<Scalars["Float"]>
  ticketTypes_nin?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  defaultLanguageId_ne?: Maybe<Scalars["Int"]>
  showLinkToGoogleMap_ne?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  locationId_ne?: Maybe<Scalars["Int"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  shippingFee_lte?: Maybe<Scalars["Float"]>
  hideEventInfoOnSoldOut_exists?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["Int"]>
  forceEmptySeats_ne?: Maybe<Scalars["Int"]>
  countryId_gte?: Maybe<Scalars["Int"]>
  end?: Maybe<Scalars["DateTime"]>
  zoneMapId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateCreated_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  latitude_gt?: Maybe<Scalars["Float"]>
  longitude_gt?: Maybe<Scalars["Float"]>
  end_exists?: Maybe<Scalars["Boolean"]>
  latitude_ne?: Maybe<Scalars["Float"]>
  end_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  OR?: Maybe<Array<EventDetailQueryInput>>
  eventGenreValue_lt?: Maybe<Scalars["Int"]>
  maxTickets_ne?: Maybe<Scalars["Int"]>
  eventGenreValue_exists?: Maybe<Scalars["Boolean"]>
  dateModified_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  openDoor?: Maybe<Scalars["DateTime"]>
  longitude_gte?: Maybe<Scalars["Float"]>
  end_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  emailTemplate_lt?: Maybe<Scalars["String"]>
  longitude_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  eventGenreValue?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_gte?: Maybe<Scalars["String"]>
  countryId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  googleAnalyticsTracker_lt?: Maybe<Scalars["String"]>
  defaultLanguageId_gte?: Maybe<Scalars["Int"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  forceEmptySeats_gt?: Maybe<Scalars["Int"]>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  emailTemplate_lte?: Maybe<Scalars["String"]>
  salesWarningLevel_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  organizerId_gte?: Maybe<Scalars["Int"]>
  openDoor_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  salesRegionId_lt?: Maybe<Scalars["Int"]>
  warningSendDate_gte?: Maybe<Scalars["String"]>
  countryId_ne?: Maybe<Scalars["Int"]>
  dateModified_gte?: Maybe<Scalars["DateTime"]>
  openDoor_gte?: Maybe<Scalars["DateTime"]>
  organizerId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  postSaleCloseStatus_lte?: Maybe<Scalars["Int"]>
  externalEventCode_lte?: Maybe<Scalars["String"]>
  organizerId?: Maybe<Scalars["Int"]>
  warningSendDate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  eventGenreValue_gte?: Maybe<Scalars["Int"]>
  externalEventCode?: Maybe<Scalars["String"]>
  googleCoordinates_lte?: Maybe<Scalars["String"]>
  shippingFee_lt?: Maybe<Scalars["Float"]>
  organizerGoogleAnalyticsDomain_lt?: Maybe<Scalars["String"]>
  forceEmptySeats_lt?: Maybe<Scalars["Int"]>
  _id_lt?: Maybe<Scalars["Int"]>
  status_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  start_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  notificationEmail_lt?: Maybe<Scalars["String"]>
  facebookPixelId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  eventGenreValue_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_exists?: Maybe<Scalars["Boolean"]>
  status_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  end_ne?: Maybe<Scalars["DateTime"]>
  organizerGoogleAnalyticsDomain_lte?: Maybe<Scalars["String"]>
  googleCoordinates_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  dateCreated?: Maybe<Scalars["DateTime"]>
  salesWarningLevel_gte?: Maybe<Scalars["Int"]>
  googleCoordinates_gte?: Maybe<Scalars["String"]>
  eventInfos_in?: Maybe<Array<Maybe<EventDetailEventInfoQueryInput>>>
  externalEventCode_gte?: Maybe<Scalars["String"]>
  isCompanyNameMandatory_ne?: Maybe<Scalars["Boolean"]>
  postSaleCloseStatus_lt?: Maybe<Scalars["Int"]>
  salesRegionId_ne?: Maybe<Scalars["Int"]>
  sendWarning_ne?: Maybe<Scalars["Boolean"]>
  defaultLanguageId_gt?: Maybe<Scalars["Int"]>
  warningSendDate_gt?: Maybe<Scalars["String"]>
  maxTickets_lt?: Maybe<Scalars["Int"]>
  salesWarningLevel_lte?: Maybe<Scalars["Int"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  emailTemplate_ne?: Maybe<Scalars["String"]>
  latitude_exists?: Maybe<Scalars["Boolean"]>
  notificationEmail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["Int"]>
  countryId_lte?: Maybe<Scalars["Int"]>
  locationId_exists?: Maybe<Scalars["Boolean"]>
  dateModified_lt?: Maybe<Scalars["DateTime"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  salesRegionId_exists?: Maybe<Scalars["Boolean"]>
  zoneMapId_gt?: Maybe<Scalars["Int"]>
  googleAnalyticsTracker_gt?: Maybe<Scalars["String"]>
  dateModified_exists?: Maybe<Scalars["Boolean"]>
  locationId_gte?: Maybe<Scalars["Int"]>
  dateModified_ne?: Maybe<Scalars["DateTime"]>
  sendWarning_exists?: Maybe<Scalars["Boolean"]>
  salesWarningLevel_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  salesWarningLevel_gt?: Maybe<Scalars["Int"]>
  facebookPixelId_gt?: Maybe<Scalars["String"]>
  salesWarningLevel_ne?: Maybe<Scalars["Int"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  dateCreated_gt?: Maybe<Scalars["DateTime"]>
  tenantId_lte?: Maybe<Scalars["Int"]>
  organizerGoogleAnalyticsDomain_gt?: Maybe<Scalars["String"]>
  status_ne?: Maybe<Scalars["Int"]>
  dateCreated_lte?: Maybe<Scalars["DateTime"]>
  forceEmptySeats_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxTickets_gte?: Maybe<Scalars["Int"]>
  countryId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxTicketsProOrder_exists?: Maybe<Scalars["Boolean"]>
  maxTickets_exists?: Maybe<Scalars["Boolean"]>
  start_gte?: Maybe<Scalars["DateTime"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  latitude_lte?: Maybe<Scalars["Float"]>
  googleAnalyticsTracker_exists?: Maybe<Scalars["Boolean"]>
  longitude_lte?: Maybe<Scalars["Float"]>
  dateModified_gt?: Maybe<Scalars["DateTime"]>
  locationId_gt?: Maybe<Scalars["Int"]>
  countryId?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_gt?: Maybe<Scalars["Int"]>
  ticketTypes_in?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  maxTicketsProOrder_lt?: Maybe<Scalars["Int"]>
  zoneMapId_lt?: Maybe<Scalars["Int"]>
  _id_gte?: Maybe<Scalars["Int"]>
  start_ne?: Maybe<Scalars["DateTime"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  shippingFee_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  countryId_lt?: Maybe<Scalars["Int"]>
  postSaleCloseStatus_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  longitude_exists?: Maybe<Scalars["Boolean"]>
  organizerId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  eventGenreValue_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dateModified_lte?: Maybe<Scalars["DateTime"]>
  externalEventCode_exists?: Maybe<Scalars["Boolean"]>
  shippingFee?: Maybe<Scalars["Float"]>
  status_exists?: Maybe<Scalars["Boolean"]>
  start_lt?: Maybe<Scalars["DateTime"]>
  notificationEmail_ne?: Maybe<Scalars["String"]>
  stay22Active_ne?: Maybe<Scalars["Boolean"]>
  vatNumber_exists?: Maybe<Scalars["Boolean"]>
  maxTickets_gt?: Maybe<Scalars["Int"]>
  salesWarningLevel_lt?: Maybe<Scalars["Int"]>
  isCompanyNameMandatory_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_lt?: Maybe<Scalars["DateTime"]>
  isPhoneMandatory_ne?: Maybe<Scalars["Boolean"]>
  tenantId_gt?: Maybe<Scalars["Int"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  end_gte?: Maybe<Scalars["DateTime"]>
  salesRegionId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  facebookPixelId_gte?: Maybe<Scalars["String"]>
  facebookPixelId_lte?: Maybe<Scalars["String"]>
  tenantId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeQueryInput>>>
  warningSendDate_lt?: Maybe<Scalars["String"]>
  organizerGoogleAnalyticsDomain_ne?: Maybe<Scalars["String"]>
  postSaleCloseStatus_gt?: Maybe<Scalars["Int"]>
  emailTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  countryId_exists?: Maybe<Scalars["Boolean"]>
  status?: Maybe<Scalars["Int"]>
  forceEmptySeats_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  googleCoordinates_lt?: Maybe<Scalars["String"]>
  salesWarningLevel_exists?: Maybe<Scalars["Boolean"]>
  maxTicketsProOrder_ne?: Maybe<Scalars["Int"]>
  dateCreated_ne?: Maybe<Scalars["DateTime"]>
  masterEventId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  googleAnalyticsTracker_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  zoneMapId_ne?: Maybe<Scalars["Int"]>
  notificationEmail?: Maybe<Scalars["String"]>
  googleAnalyticsTracker_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  noVatOnCommission_exists?: Maybe<Scalars["Boolean"]>
  externalEventCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  tenantId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  postSaleCloseStatus_exists?: Maybe<Scalars["Boolean"]>
  warningSendDate?: Maybe<Scalars["String"]>
  maxTicketsProOrder_gte?: Maybe<Scalars["Int"]>
  organizerId_ne?: Maybe<Scalars["Int"]>
  start_lte?: Maybe<Scalars["DateTime"]>
  emailTemplate_gt?: Maybe<Scalars["String"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  latitude_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  eventGenreValue_gt?: Maybe<Scalars["Int"]>
  latitude_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  warningSendDate_ne?: Maybe<Scalars["String"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  maxTicketsProOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  shippingFee_gte?: Maybe<Scalars["Float"]>
  tenantId_exists?: Maybe<Scalars["Boolean"]>
  status_gt?: Maybe<Scalars["Int"]>
  noVatOnCommission_ne?: Maybe<Scalars["Boolean"]>
  isPhoneMandatory_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  dateModified?: Maybe<Scalars["DateTime"]>
  facebookPixelId_exists?: Maybe<Scalars["Boolean"]>
  organizerId_lt?: Maybe<Scalars["Int"]>
  warningSendDate_lte?: Maybe<Scalars["String"]>
  hideEventInfoOnSoldOut_ne?: Maybe<Scalars["Boolean"]>
  tenantId?: Maybe<Scalars["Int"]>
  defaultLanguageId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  shippingFee_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  latitude_gte?: Maybe<Scalars["Float"]>
  showLinkToGoogleMap_exists?: Maybe<Scalars["Boolean"]>
}

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload"
  deletedCount: Scalars["Int"]
}

export type FromBomAddressUpdateInput = {
  EMail?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Adresse_unset?: Maybe<Scalars["Boolean"]>
  Ort_unset?: Maybe<Scalars["Boolean"]>
  Adresse?: Maybe<Scalars["String"]>
  TelefonM?: Maybe<Scalars["String"]>
  PLZ_unset?: Maybe<Scalars["Boolean"]>
  TelefonM_unset?: Maybe<Scalars["Boolean"]>
  PLZ?: Maybe<Scalars["Int"]>
  EMail_unset?: Maybe<Scalars["Boolean"]>
  Anrede?: Maybe<Scalars["String"]>
  Anrede_unset?: Maybe<Scalars["Boolean"]>
  PLZ_inc?: Maybe<Scalars["Int"]>
  Vorname_unset?: Maybe<Scalars["Boolean"]>
  Ort?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Name_unset?: Maybe<Scalars["Boolean"]>
}

export type FromBomAddressQueryInput = {
  Adresse?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  PLZ_exists?: Maybe<Scalars["Boolean"]>
  Name_gt?: Maybe<Scalars["String"]>
  TelefonM_gt?: Maybe<Scalars["String"]>
  Ort_ne?: Maybe<Scalars["String"]>
  Adresse_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  PLZ_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  TelefonM_exists?: Maybe<Scalars["Boolean"]>
  Vorname_exists?: Maybe<Scalars["Boolean"]>
  TelefonM_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  TelefonM_gte?: Maybe<Scalars["String"]>
  Ort_lt?: Maybe<Scalars["String"]>
  Anrede_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  EMail?: Maybe<Scalars["String"]>
  Ort_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name_ne?: Maybe<Scalars["String"]>
  Adresse_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Adresse_gte?: Maybe<Scalars["String"]>
  PLZ_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  PLZ_gt?: Maybe<Scalars["Int"]>
  TelefonM_ne?: Maybe<Scalars["String"]>
  Anrede_gte?: Maybe<Scalars["String"]>
  EMail_lte?: Maybe<Scalars["String"]>
  Name_lt?: Maybe<Scalars["String"]>
  PLZ_ne?: Maybe<Scalars["Int"]>
  Anrede_gt?: Maybe<Scalars["String"]>
  EMail_ne?: Maybe<Scalars["String"]>
  TelefonM_lt?: Maybe<Scalars["String"]>
  Vorname_lte?: Maybe<Scalars["String"]>
  TelefonM?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<FromBomAddressQueryInput>>
  Anrede?: Maybe<Scalars["String"]>
  Name_gte?: Maybe<Scalars["String"]>
  Vorname_gt?: Maybe<Scalars["String"]>
  Adresse_lte?: Maybe<Scalars["String"]>
  Adresse_exists?: Maybe<Scalars["Boolean"]>
  Ort_gt?: Maybe<Scalars["String"]>
  PLZ_gte?: Maybe<Scalars["Int"]>
  Name_exists?: Maybe<Scalars["Boolean"]>
  EMail_lt?: Maybe<Scalars["String"]>
  EMail_exists?: Maybe<Scalars["Boolean"]>
  Name_lte?: Maybe<Scalars["String"]>
  PLZ?: Maybe<Scalars["Int"]>
  Name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Anrede_lt?: Maybe<Scalars["String"]>
  Adresse_lt?: Maybe<Scalars["String"]>
  Name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Ort_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  TelefonM_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Ort?: Maybe<Scalars["String"]>
  Adresse_gt?: Maybe<Scalars["String"]>
  EMail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Vorname_gte?: Maybe<Scalars["String"]>
  Vorname_lt?: Maybe<Scalars["String"]>
  Ort_gte?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<FromBomAddressQueryInput>>
  Anrede_exists?: Maybe<Scalars["Boolean"]>
  EMail_gt?: Maybe<Scalars["String"]>
  Vorname_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  Ort_exists?: Maybe<Scalars["Boolean"]>
  Ort_lte?: Maybe<Scalars["String"]>
  PLZ_lte?: Maybe<Scalars["Int"]>
  PLZ_lt?: Maybe<Scalars["Int"]>
  Adresse_ne?: Maybe<Scalars["String"]>
  Anrede_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  Name?: Maybe<Scalars["String"]>
  Anrede_ne?: Maybe<Scalars["String"]>
  Anrede_lte?: Maybe<Scalars["String"]>
  EMail_gte?: Maybe<Scalars["String"]>
  Vorname_ne?: Maybe<Scalars["String"]>
  EMail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  TelefonM_lte?: Maybe<Scalars["String"]>
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
  query?: Maybe<FromBomQueryInput>
  data: FromBomInsertInput
}

export type MutationReplaceOneLocationArgs = {
  query?: Maybe<LocationQueryInput>
  data: LocationInsertInput
}

export type MutationReplaceOneParticipantArgs = {
  data: ParticipantInsertInput
  query?: Maybe<ParticipantQueryInput>
}

export type MutationReplaceOnePressArgs = {
  query?: Maybe<PressQueryInput>
  data: PressInsertInput
}

export type MutationReplaceOneSponsorArgs = {
  data: SponsorInsertInput
  query?: Maybe<SponsorQueryInput>
}

export type MutationReplaceOneStaffArgs = {
  data: StaffInsertInput
  query?: Maybe<StaffQueryInput>
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
  set: LocationUpdateInput
  query?: Maybe<LocationQueryInput>
}

export type MutationUpdateManyParticipantsArgs = {
  query?: Maybe<ParticipantQueryInput>
  set: ParticipantUpdateInput
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
  set: LocationUpdateInput
  query?: Maybe<LocationQueryInput>
}

export type MutationUpdateOneParticipantArgs = {
  query?: Maybe<ParticipantQueryInput>
  set: ParticipantUpdateInput
}

export type MutationUpdateOnePressArgs = {
  query?: Maybe<PressQueryInput>
  set: PressUpdateInput
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
  data: EventDetailInsertInput
  query?: Maybe<EventDetailQueryInput>
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
  query?: Maybe<PressQueryInput>
  data: PressInsertInput
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
  data: SubscriptionInsertInput
  query?: Maybe<SubscriptionQueryInput>
}

export type EventDetailTicketTypeTicketTypeInfoUpdateInput = {
  alternateImageUrl_unset?: Maybe<Scalars["Boolean"]>
  originalFileData?: Maybe<Scalars["String"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  description_unset?: Maybe<Scalars["Boolean"]>
  modifiedDate_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeId_inc?: Maybe<Scalars["Int"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  croppedImageData_unset?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  deleted_unset?: Maybe<Scalars["Boolean"]>
  presentation?: Maybe<Scalars["String"]>
  additionalFile?: Maybe<Scalars["String"]>
  originalFileData_unset?: Maybe<Scalars["Boolean"]>
  emailSubject?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  image_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  image?: Maybe<Scalars["String"]>
  languageId_inc?: Maybe<Scalars["Int"]>
  emailSubject_unset?: Maybe<Scalars["Boolean"]>
  languageId?: Maybe<Scalars["Int"]>
  _id_inc?: Maybe<Scalars["Int"]>
  croppedImageData?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  originalImageData_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
  customtext1Mandatory_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  ticketTypeId_unset?: Maybe<Scalars["Boolean"]>
  imageUrl?: Maybe<Scalars["String"]>
  additionalFileUrl_unset?: Maybe<Scalars["Boolean"]>
  additionalFile_unset?: Maybe<Scalars["Boolean"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  imageUrl_unset?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  languageId_unset?: Maybe<Scalars["Boolean"]>
  senderName?: Maybe<Scalars["String"]>
  senderName_unset?: Maybe<Scalars["Boolean"]>
  presentation_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  customtext2Mandatory_unset?: Maybe<Scalars["Boolean"]>
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
  zip?: Maybe<Scalars["String"]>
}

export type ParticipantInsertInput = {
  fotoAllowed?: Maybe<Scalars["Boolean"]>
  salutation?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  participant_id?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
}

export type LocationUpdateInput = {
  _id?: Maybe<Scalars["ObjectId"]>
  directions?: Maybe<Scalars["String"]>
  directions_unset?: Maybe<Scalars["Boolean"]>
  postalCode_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  street?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  info_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  city?: Maybe<Scalars["String"]>
  street_unset?: Maybe<Scalars["Boolean"]>
  postalCode?: Maybe<Scalars["String"]>
}

export type Sponsor = {
  __typename?: "Sponsor"
  _id?: Maybe<Scalars["ObjectId"]>
  events?: Maybe<Array<Maybe<SponsorEvent>>>
  image?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
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

export enum LocationSortByInput {
  StreetAsc = "STREET_ASC",
  InfoAsc = "INFO_ASC",
  NameDesc = "NAME_DESC",
  PostalcodeAsc = "POSTALCODE_ASC",
  DirectionsDesc = "DIRECTIONS_DESC",
  PostalcodeDesc = "POSTALCODE_DESC",
  StreetDesc = "STREET_DESC",
  IdDesc = "_ID_DESC",
  CityDesc = "CITY_DESC",
  DirectionsAsc = "DIRECTIONS_ASC",
  NameAsc = "NAME_ASC",
  IdAsc = "_ID_ASC",
  CityAsc = "CITY_ASC",
  InfoDesc = "INFO_DESC"
}

export type ParticipantUpdateInput = {
  salutation?: Maybe<Scalars["String"]>
  salutation_unset?: Maybe<Scalars["Boolean"]>
  comment?: Maybe<Scalars["String"]>
  comment_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed_unset?: Maybe<Scalars["Boolean"]>
  birthday_unset?: Maybe<Scalars["Boolean"]>
  participant_id?: Maybe<Scalars["String"]>
  participant_id_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  birthday?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  lastNameParticipant?: Maybe<Scalars["String"]>
  firstNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  externalUserId_unset?: Maybe<Scalars["Boolean"]>
  firstNameParticipant?: Maybe<Scalars["String"]>
  lastNameParticipant_unset?: Maybe<Scalars["Boolean"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  fotoAllowed?: Maybe<Scalars["Boolean"]>
}

export type StaffUpdateInput = {
  active?: Maybe<Scalars["Boolean"]>
  active_unset?: Maybe<Scalars["Boolean"]>
  bio_unset?: Maybe<Scalars["Boolean"]>
  sortOrder_inc?: Maybe<Scalars["Int"]>
  topic?: Maybe<Scalars["String"]>
  bio?: Maybe<Scalars["String"]>
  topic_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
  sortOrder_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
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
  query?: Maybe<ParticipantQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<ParticipantSortByInput>
}

export type QueryPressArgs = {
  query?: Maybe<PressQueryInput>
}

export type QueryPressesArgs = {
  query?: Maybe<PressQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<PressSortByInput>
}

export type QuerySponsorArgs = {
  query?: Maybe<SponsorQueryInput>
}

export type QuerySponsorsArgs = {
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<SponsorSortByInput>
  query?: Maybe<SponsorQueryInput>
}

export type QueryStaffArgs = {
  query?: Maybe<StaffQueryInput>
}

export type QueryStaffsArgs = {
  query?: Maybe<StaffQueryInput>
  limit?: Maybe<Scalars["Int"]>
  sortBy?: Maybe<StaffSortByInput>
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

export type PressQueryInput = {
  source_exists?: Maybe<Scalars["Boolean"]>
  quote_ne?: Maybe<Scalars["String"]>
  desc_gte?: Maybe<Scalars["String"]>
  fileExtension_lt?: Maybe<Scalars["String"]>
  desc_gt?: Maybe<Scalars["String"]>
  nr_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  link_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  source?: Maybe<Scalars["String"]>
  nr_lte?: Maybe<Scalars["String"]>
  nr_gte?: Maybe<Scalars["String"]>
  nr_exists?: Maybe<Scalars["Boolean"]>
  date_gt?: Maybe<Scalars["DateTime"]>
  date_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  link_exists?: Maybe<Scalars["Boolean"]>
  quote_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  fileExtension_exists?: Maybe<Scalars["Boolean"]>
  nr?: Maybe<Scalars["String"]>
  author_exists?: Maybe<Scalars["Boolean"]>
  quote_lt?: Maybe<Scalars["String"]>
  nr_gt?: Maybe<Scalars["String"]>
  desc_ne?: Maybe<Scalars["String"]>
  quote_exists?: Maybe<Scalars["Boolean"]>
  author_lte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  link_lte?: Maybe<Scalars["String"]>
  fileExtension?: Maybe<Scalars["String"]>
  author_gt?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["DateTime"]>
  date_gte?: Maybe<Scalars["DateTime"]>
  author_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  author?: Maybe<Scalars["String"]>
  date_exists?: Maybe<Scalars["Boolean"]>
  source_lte?: Maybe<Scalars["String"]>
  source_gt?: Maybe<Scalars["String"]>
  source_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  author_lt?: Maybe<Scalars["String"]>
  link?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  fileExtension_ne?: Maybe<Scalars["String"]>
  date_lt?: Maybe<Scalars["DateTime"]>
  nr_lt?: Maybe<Scalars["String"]>
  fileExtension_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  author_ne?: Maybe<Scalars["String"]>
  source_lt?: Maybe<Scalars["String"]>
  desc_lte?: Maybe<Scalars["String"]>
  desc_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  desc_lt?: Maybe<Scalars["String"]>
  fileExtension_gt?: Maybe<Scalars["String"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  AND?: Maybe<Array<PressQueryInput>>
  nr_ne?: Maybe<Scalars["String"]>
  source_gte?: Maybe<Scalars["String"]>
  quote_gt?: Maybe<Scalars["String"]>
  quote?: Maybe<Scalars["String"]>
  fileExtension_lte?: Maybe<Scalars["String"]>
  quote_lte?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<PressQueryInput>>
  desc?: Maybe<Scalars["String"]>
  desc_exists?: Maybe<Scalars["Boolean"]>
  fileExtension_gte?: Maybe<Scalars["String"]>
  nr_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  date_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  quote_gte?: Maybe<Scalars["String"]>
  link_ne?: Maybe<Scalars["String"]>
  fileExtension_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  author_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  source_ne?: Maybe<Scalars["String"]>
  source_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  link_gte?: Maybe<Scalars["String"]>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  link_gt?: Maybe<Scalars["String"]>
  link_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  link_lt?: Maybe<Scalars["String"]>
  author_gte?: Maybe<Scalars["String"]>
  date_ne?: Maybe<Scalars["DateTime"]>
  quote_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  desc_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  date_lte?: Maybe<Scalars["DateTime"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
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

export type InsertManyPayload = {
  __typename?: "InsertManyPayload"
  insertedIds: Array<Maybe<Scalars["ObjectId"]>>
}

export type SponsorUpdateInput = {
  url?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  events_unset?: Maybe<Scalars["Boolean"]>
  events?: Maybe<Array<Maybe<SponsorEventUpdateInput>>>
  _id_unset?: Maybe<Scalars["Boolean"]>
  image_unset?: Maybe<Scalars["Boolean"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  image?: Maybe<Scalars["String"]>
  url_unset?: Maybe<Scalars["Boolean"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type EventDetailEventInfoUpdateInput = {
  longDescription_unset?: Maybe<Scalars["Boolean"]>
  posRemark_unset?: Maybe<Scalars["Boolean"]>
  city_unset?: Maybe<Scalars["Boolean"]>
  shortDescription?: Maybe<Scalars["String"]>
  posRemark?: Maybe<Scalars["String"]>
  languageId_inc?: Maybe<Scalars["Int"]>
  flyerImagePath?: Maybe<Scalars["String"]>
  artists_unset?: Maybe<Scalars["Boolean"]>
  importantNotes?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  longDescription?: Maybe<Scalars["String"]>
  bannerImage?: Maybe<Scalars["String"]>
  bannerImagePath?: Maybe<Scalars["String"]>
  organizerRemark?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  organizerRemark_unset?: Maybe<Scalars["Boolean"]>
  googleMapLink_unset?: Maybe<Scalars["Boolean"]>
  location_unset?: Maybe<Scalars["Boolean"]>
  _id_inc?: Maybe<Scalars["Int"]>
  languageId?: Maybe<Scalars["Int"]>
  url_unset?: Maybe<Scalars["Boolean"]>
  flyerImage?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
  googleMapLink?: Maybe<Scalars["String"]>
  name_unset?: Maybe<Scalars["Boolean"]>
  shortDescription_unset?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  flyerImage_unset?: Maybe<Scalars["Boolean"]>
  address?: Maybe<Scalars["String"]>
  bannerImagePath_unset?: Maybe<Scalars["Boolean"]>
  importantNotes_unset?: Maybe<Scalars["Boolean"]>
  flyerImagePath_unset?: Maybe<Scalars["Boolean"]>
  languageId_unset?: Maybe<Scalars["Boolean"]>
  url?: Maybe<Scalars["String"]>
  artists?: Maybe<Scalars["String"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  bannerImage_unset?: Maybe<Scalars["Boolean"]>
  address_unset?: Maybe<Scalars["Boolean"]>
}

export enum PressSortByInput {
  IdDesc = "_ID_DESC",
  AuthorAsc = "AUTHOR_ASC",
  DateDesc = "DATE_DESC",
  DescAsc = "DESC_ASC",
  LinkAsc = "LINK_ASC",
  QuoteDesc = "QUOTE_DESC",
  NrDesc = "NR_DESC",
  SourceDesc = "SOURCE_DESC",
  FileextensionAsc = "FILEEXTENSION_ASC",
  LinkDesc = "LINK_DESC",
  NrAsc = "NR_ASC",
  IdAsc = "_ID_ASC",
  AuthorDesc = "AUTHOR_DESC",
  DateAsc = "DATE_ASC",
  DescDesc = "DESC_DESC",
  FileextensionDesc = "FILEEXTENSION_DESC",
  QuoteAsc = "QUOTE_ASC",
  SourceAsc = "SOURCE_ASC"
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

export type FromBomAddressInsertInput = {
  Name?: Maybe<Scalars["String"]>
  Ort?: Maybe<Scalars["String"]>
  PLZ?: Maybe<Scalars["Int"]>
  TelefonM?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Adresse?: Maybe<Scalars["String"]>
  Anrede?: Maybe<Scalars["String"]>
  EMail?: Maybe<Scalars["String"]>
}

export type FromBomChild = {
  __typename?: "FromBomChild"
  Anrede?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
  Geburtstag?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
}

export enum SubscriptionSortByInput {
  StateAsc = "STATE_ASC",
  WeekAsc = "WEEK_ASC",
  FirstnameDesc = "FIRSTNAME_DESC",
  ReservationdateAsc = "RESERVATIONDATE_ASC",
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  ReservationdateDesc = "RESERVATIONDATE_DESC",
  Street2Desc = "STREET2_DESC",
  IdDesc = "_ID_DESC",
  DeadlineAsc = "DEADLINE_ASC",
  Street1Asc = "STREET1_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  LastnameDesc = "LASTNAME_DESC",
  NumofchildrenDesc = "NUMOFCHILDREN_DESC",
  StateDesc = "STATE_DESC",
  Street2Asc = "STREET2_ASC",
  CountryAsc = "COUNTRY_ASC",
  DeadlineDesc = "DEADLINE_DESC",
  LastnameAsc = "LASTNAME_ASC",
  SalutationAsc = "SALUTATION_ASC",
  Street1Desc = "STREET1_DESC",
  FirstnameAsc = "FIRSTNAME_ASC",
  NumofchildrenAsc = "NUMOFCHILDREN_ASC",
  EmailAsc = "EMAIL_ASC",
  PhoneDesc = "PHONE_DESC",
  WeekDesc = "WEEK_DESC",
  ZipAsc = "ZIP_ASC",
  IdAsc = "_ID_ASC",
  CityDesc = "CITY_DESC",
  CountryDesc = "COUNTRY_DESC",
  CityAsc = "CITY_ASC",
  ZipDesc = "ZIP_DESC",
  SalutationDesc = "SALUTATION_DESC",
  EmailDesc = "EMAIL_DESC",
  PhoneAsc = "PHONE_ASC"
}

export type SponsorEventUpdateInput = {
  event_unset?: Maybe<Scalars["Boolean"]>
  share?: Maybe<Scalars["Float"]>
  share_inc?: Maybe<Scalars["Float"]>
  share_unset?: Maybe<Scalars["Boolean"]>
  event?: Maybe<Scalars["String"]>
}

export type PressInsertInput = {
  date?: Maybe<Scalars["DateTime"]>
  link?: Maybe<Scalars["String"]>
  nr?: Maybe<Scalars["String"]>
  quote?: Maybe<Scalars["String"]>
  desc?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  fileExtension?: Maybe<Scalars["String"]>
  source?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
}

export type SponsorInsertInput = {
  url?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  events?: Maybe<Array<Maybe<SponsorEventInsertInput>>>
  image?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type FromBomChildInsertInput = {
  Geburtstag?: Maybe<Scalars["String"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Anrede?: Maybe<Scalars["String"]>
  Bemerkung?: Maybe<Scalars["String"]>
}

export type SponsorEventQueryInput = {
  event_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  share_lt?: Maybe<Scalars["Float"]>
  share_gt?: Maybe<Scalars["Float"]>
  event_lte?: Maybe<Scalars["String"]>
  event_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  event_gte?: Maybe<Scalars["String"]>
  event?: Maybe<Scalars["String"]>
  event_lt?: Maybe<Scalars["String"]>
  event_exists?: Maybe<Scalars["Boolean"]>
  share_ne?: Maybe<Scalars["Float"]>
  share_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  event_ne?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SponsorEventQueryInput>>
  share_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  share_gte?: Maybe<Scalars["Float"]>
  share?: Maybe<Scalars["Float"]>
  share_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<SponsorEventQueryInput>>
  share_lte?: Maybe<Scalars["Float"]>
  event_gt?: Maybe<Scalars["String"]>
}

export type PastEventDetailItem = {
  __typename?: "PastEventDetailItem"
  eventDetail?: Maybe<PastEventDetailEventDetail>
}

export type EventDetailTicketTypeInsertInput = {
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  replyTo?: Maybe<Scalars["String"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  price?: Maybe<Scalars["Float"]>
  emailTemplate?: Maybe<Scalars["String"]>
  isActive?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  end?: Maybe<Scalars["DateTime"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  senderEmail?: Maybe<Scalars["String"]>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoInsertInput>>
  >
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  eventId?: Maybe<Scalars["Int"]>
  colorCode?: Maybe<Scalars["String"]>
  currency?: Maybe<Scalars["String"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["Int"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  ticketTemplate?: Maybe<Scalars["String"]>
}

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload"
  matchedCount: Scalars["Int"]
  modifiedCount: Scalars["Int"]
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

export type EventDetailTicketTypeTicketTypeInfoInsertInput = {
  customtext1Mandatory?: Maybe<Scalars["Boolean"]>
  deleted?: Maybe<Scalars["Boolean"]>
  imageUrl?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["Int"]>
  additionalFile?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  alternateImageUrl?: Maybe<Scalars["String"]>
  ticketTypeId?: Maybe<Scalars["Int"]>
  image?: Maybe<Scalars["String"]>
  customtext2Mandatory?: Maybe<Scalars["Boolean"]>
  emailSubject?: Maybe<Scalars["String"]>
  originalFileData?: Maybe<Scalars["String"]>
  additionalFileUrl?: Maybe<Scalars["String"]>
  croppedImageData?: Maybe<Scalars["String"]>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  senderName?: Maybe<Scalars["String"]>
  languageId?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
  originalImageData?: Maybe<Scalars["String"]>
  presentation?: Maybe<Scalars["String"]>
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
  ExternaluseridAsc = "EXTERNALUSERID_ASC",
  LastnameparticipantAsc = "LASTNAMEPARTICIPANT_ASC",
  SalutationDesc = "SALUTATION_DESC",
  IdAsc = "_ID_ASC",
  BirthdayAsc = "BIRTHDAY_ASC",
  ExternaluseridDesc = "EXTERNALUSERID_DESC",
  FirstnameparticipantAsc = "FIRSTNAMEPARTICIPANT_ASC",
  LastnameparticipantDesc = "LASTNAMEPARTICIPANT_DESC",
  ParticipantIdDesc = "PARTICIPANT_ID_DESC",
  ParticipantIdAsc = "PARTICIPANT_ID_ASC",
  SalutationAsc = "SALUTATION_ASC",
  IdDesc = "_ID_DESC",
  BirthdayDesc = "BIRTHDAY_DESC",
  CommentAsc = "COMMENT_ASC",
  CommentDesc = "COMMENT_DESC",
  FirstnameparticipantDesc = "FIRSTNAMEPARTICIPANT_DESC"
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

export type FromBomChildUpdateInput = {
  Geburtstag?: Maybe<Scalars["String"]>
  Geburtstag_unset?: Maybe<Scalars["Boolean"]>
  Vorname_unset?: Maybe<Scalars["Boolean"]>
  Name?: Maybe<Scalars["String"]>
  Vorname?: Maybe<Scalars["String"]>
  Name_unset?: Maybe<Scalars["Boolean"]>
  Anrede?: Maybe<Scalars["String"]>
  Anrede_unset?: Maybe<Scalars["Boolean"]>
  Bemerkung?: Maybe<Scalars["String"]>
  Bemerkung_unset?: Maybe<Scalars["Boolean"]>
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

export type EventDetailItem = {
  __typename?: "EventDetailItem"
  eventDetail?: Maybe<EventDetailEventDetail>
}

export type FromBomUpdateInput = {
  reservationDate?: Maybe<Scalars["DateTime"]>
  state?: Maybe<Scalars["String"]>
  week_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  reservationDate_unset?: Maybe<Scalars["Boolean"]>
  Address_unset?: Maybe<Scalars["Boolean"]>
  deadline_unset?: Maybe<Scalars["Boolean"]>
  state_unset?: Maybe<Scalars["Boolean"]>
  week_inc?: Maybe<Scalars["Int"]>
  numOfChildren_inc?: Maybe<Scalars["Int"]>
  Childs?: Maybe<Array<Maybe<FromBomChildUpdateInput>>>
  deadline?: Maybe<Scalars["DateTime"]>
  _id_unset?: Maybe<Scalars["Boolean"]>
  week?: Maybe<Scalars["Int"]>
  Address?: Maybe<FromBomAddressUpdateInput>
  _id?: Maybe<Scalars["ObjectId"]>
  Childs_unset?: Maybe<Scalars["Boolean"]>
  numOfChildren_unset?: Maybe<Scalars["Boolean"]>
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

export type EventDetailTicketTypeQueryInput = {
  end_exists?: Maybe<Scalars["Boolean"]>
  start_gte?: Maybe<Scalars["DateTime"]>
  preSaleEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  numberOfTicketsToBasket_gt?: Maybe<Scalars["Int"]>
  preSaleEnd_lt?: Maybe<Scalars["DateTime"]>
  promoCodeIdToPrint_gte?: Maybe<Scalars["Int"]>
  externalTicketCode?: Maybe<Scalars["String"]>
  promoCodeIdToPrint_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sortOrder_exists?: Maybe<Scalars["Boolean"]>
  vatPercentage_exists?: Maybe<Scalars["Boolean"]>
  externalTicketCode_lt?: Maybe<Scalars["String"]>
  companyRequired_exists?: Maybe<Scalars["Boolean"]>
  eventId_lt?: Maybe<Scalars["Int"]>
  ticketTemplate_lt?: Maybe<Scalars["String"]>
  currency_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderEmail_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_lte?: Maybe<Scalars["DateTime"]>
  blockAutoMailer?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  sortOrder_lt?: Maybe<Scalars["Int"]>
  phoneRequired_exists?: Maybe<Scalars["Boolean"]>
  start_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  hideDateTime_exists?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket?: Maybe<Scalars["Int"]>
  invoiceEnd_lt?: Maybe<Scalars["DateTime"]>
  vatInGivenAmount_gt?: Maybe<Scalars["String"]>
  vatPercentage_lt?: Maybe<Scalars["Float"]>
  festivalEventIds_lt?: Maybe<Scalars["String"]>
  currency_ne?: Maybe<Scalars["String"]>
  invoiceEnd_gte?: Maybe<Scalars["DateTime"]>
  vatInGivenAmount_gte?: Maybe<Scalars["String"]>
  ticketTypeInfos_nin?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  colorCode_ne?: Maybe<Scalars["String"]>
  callcenterEnd_gt?: Maybe<Scalars["DateTime"]>
  maxMemberTickets_exists?: Maybe<Scalars["Boolean"]>
  ticketsTotal_gt?: Maybe<Scalars["Int"]>
  sofortEnd_ne?: Maybe<Scalars["DateTime"]>
  price_ne?: Maybe<Scalars["Float"]>
  sendSMSOrder_exists?: Maybe<Scalars["Boolean"]>
  hidePassbook_exists?: Maybe<Scalars["Boolean"]>
  hidePassbook?: Maybe<Scalars["Boolean"]>
  eventId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  festivalEventIds_ne?: Maybe<Scalars["String"]>
  vatTypeId_lte?: Maybe<Scalars["Int"]>
  hideReceipt?: Maybe<Scalars["Boolean"]>
  eventId_lte?: Maybe<Scalars["Int"]>
  dontShowInsurance_exists?: Maybe<Scalars["Boolean"]>
  externalTicketCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  vatTypeId_gt?: Maybe<Scalars["Int"]>
  end_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  phoneMandatory_ne?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dontShowInsurance?: Maybe<Scalars["Boolean"]>
  eventId_ne?: Maybe<Scalars["Int"]>
  maxMemberTickets_gte?: Maybe<Scalars["Int"]>
  maxNumberOfTicketsPerOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  blockAutoMailer_exists?: Maybe<Scalars["Boolean"]>
  festivalEventIds_exists?: Maybe<Scalars["Boolean"]>
  maxMemberTickets?: Maybe<Scalars["Int"]>
  isSoldOut_exists?: Maybe<Scalars["Boolean"]>
  openDoor_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  nameMandatory_exists?: Maybe<Scalars["Boolean"]>
  phoneMandatory_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_exists?: Maybe<Scalars["Boolean"]>
  callcenterEnd_lt?: Maybe<Scalars["DateTime"]>
  preSaleEnd_lte?: Maybe<Scalars["DateTime"]>
  isSoldOut?: Maybe<Scalars["Boolean"]>
  preSaleEnd_ne?: Maybe<Scalars["DateTime"]>
  postalCodeAndCityMandatory_exists?: Maybe<Scalars["Boolean"]>
  externalTicketCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  eventId_exists?: Maybe<Scalars["Boolean"]>
  sendSMSOrder?: Maybe<Scalars["Boolean"]>
  dateCreated_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  vatInGivenAmount_ne?: Maybe<Scalars["String"]>
  sortOrder_lte?: Maybe<Scalars["Int"]>
  companyMandatory_exists?: Maybe<Scalars["Boolean"]>
  nameMandatory?: Maybe<Scalars["Boolean"]>
  price_exists?: Maybe<Scalars["Boolean"]>
  end_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  invoiceEnd?: Maybe<Scalars["DateTime"]>
  vatPercentage_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  hidePriceOnTicket?: Maybe<Scalars["Boolean"]>
  replyTo_exists?: Maybe<Scalars["Boolean"]>
  firstNameMandatory_ne?: Maybe<Scalars["Boolean"]>
  invoiceEnd_ne?: Maybe<Scalars["DateTime"]>
  emailTemplate_lt?: Maybe<Scalars["String"]>
  bookWithTicketTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  end?: Maybe<Scalars["DateTime"]>
  useWorkflow_exists?: Maybe<Scalars["Boolean"]>
  emailMandatory_ne?: Maybe<Scalars["Boolean"]>
  replyTo_lte?: Maybe<Scalars["String"]>
  preSaleStart_exists?: Maybe<Scalars["Boolean"]>
  ticketsTotal_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  openDoor_lt?: Maybe<Scalars["DateTime"]>
  callcenterEnd_lte?: Maybe<Scalars["DateTime"]>
  sofortEnd_gt?: Maybe<Scalars["DateTime"]>
  price_lte?: Maybe<Scalars["Float"]>
  colorCode_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  emailTemplate_gte?: Maybe<Scalars["String"]>
  ticketsTotal_exists?: Maybe<Scalars["Boolean"]>
  promoCodeIdToPrint_gt?: Maybe<Scalars["Int"]>
  vatInGivenAmount_lte?: Maybe<Scalars["String"]>
  showImageOnTop?: Maybe<Scalars["Boolean"]>
  _id_ne?: Maybe<Scalars["Int"]>
  firstNameRequired_ne?: Maybe<Scalars["Boolean"]>
  emailTemplate_ne?: Maybe<Scalars["String"]>
  colorCode_lte?: Maybe<Scalars["String"]>
  start?: Maybe<Scalars["DateTime"]>
  openDoor_ne?: Maybe<Scalars["DateTime"]>
  hidePriceOnTicket_exists?: Maybe<Scalars["Boolean"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  start_lte?: Maybe<Scalars["DateTime"]>
  useWorkflow_ne?: Maybe<Scalars["Boolean"]>
  isActive_exists?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired_ne?: Maybe<Scalars["Boolean"]>
  price_gte?: Maybe<Scalars["Float"]>
  modifiedDate_exists?: Maybe<Scalars["Boolean"]>
  emailMandatory?: Maybe<Scalars["Boolean"]>
  emailTemplate_exists?: Maybe<Scalars["Boolean"]>
  preSaleStart_gt?: Maybe<Scalars["DateTime"]>
  end_gte?: Maybe<Scalars["DateTime"]>
  colorCode_gt?: Maybe<Scalars["String"]>
  preSaleEnd_gte?: Maybe<Scalars["DateTime"]>
  currency?: Maybe<Scalars["String"]>
  promoCodeIdToPrint_lt?: Maybe<Scalars["Int"]>
  start_ne?: Maybe<Scalars["DateTime"]>
  promoCodeIdToPrint?: Maybe<Scalars["Int"]>
  price_nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
  start_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  ticketTemplate_exists?: Maybe<Scalars["Boolean"]>
  currency_gte?: Maybe<Scalars["String"]>
  ticketTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  sortOrder_gt?: Maybe<Scalars["Int"]>
  ticketTemplate_gte?: Maybe<Scalars["String"]>
  ticketTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  openDoor?: Maybe<Scalars["DateTime"]>
  end_gt?: Maybe<Scalars["DateTime"]>
  companyMandatory?: Maybe<Scalars["Boolean"]>
  replyTo_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthDateRequired?: Maybe<Scalars["Boolean"]>
  preSaleEnd_exists?: Maybe<Scalars["Boolean"]>
  festivalEventIds_gt?: Maybe<Scalars["String"]>
  numberOfTicketsSold_exists?: Maybe<Scalars["Boolean"]>
  eventId_gt?: Maybe<Scalars["Int"]>
  vatInGivenAmount_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  modifiedDate?: Maybe<Scalars["DateTime"]>
  externalTicketCode_ne?: Maybe<Scalars["String"]>
  currency_exists?: Maybe<Scalars["Boolean"]>
  price_lt?: Maybe<Scalars["Float"]>
  ticketTypeInfos_in?: Maybe<
    Array<Maybe<EventDetailTicketTypeTicketTypeInfoQueryInput>>
  >
  callcenterEnd_ne?: Maybe<Scalars["DateTime"]>
  colorCode_gte?: Maybe<Scalars["String"]>
  isOverheadCalculateActive?: Maybe<Scalars["Boolean"]>
  invoiceEnd_lte?: Maybe<Scalars["DateTime"]>
  bookWithTicketTypeId_lt?: Maybe<Scalars["Int"]>
  replyTo_gt?: Maybe<Scalars["String"]>
  senderEmail_lte?: Maybe<Scalars["String"]>
  maxMemberTickets_ne?: Maybe<Scalars["Int"]>
  isOverheadCalculateActive_exists?: Maybe<Scalars["Boolean"]>
  invoiceEnd_gt?: Maybe<Scalars["DateTime"]>
  festivalEventIds_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  currency_gt?: Maybe<Scalars["String"]>
  addressMandatory_ne?: Maybe<Scalars["Boolean"]>
  bookWithTicketTypeId_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate_gt?: Maybe<Scalars["String"]>
  eventId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  senderEmail_gt?: Maybe<Scalars["String"]>
  callcenterEnd_exists?: Maybe<Scalars["Boolean"]>
  callcenterEnd?: Maybe<Scalars["DateTime"]>
  addressMandatory?: Maybe<Scalars["Boolean"]>
  invoiceEnd_exists?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dontShowInsurance_ne?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_gt?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint_ne?: Maybe<Scalars["Int"]>
  colorCode_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  numberOfTicketsToBasket_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isActive_ne?: Maybe<Scalars["Boolean"]>
  price_gt?: Maybe<Scalars["Float"]>
  hideOnPcClient?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_gte?: Maybe<Scalars["Int"]>
  sortOrder_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  end_lt?: Maybe<Scalars["DateTime"]>
  numberOfTicketsSold_ne?: Maybe<Scalars["Int"]>
  birthDateRequired_exists?: Maybe<Scalars["Boolean"]>
  ticketTemplate_gt?: Maybe<Scalars["String"]>
  addressRequired_exists?: Maybe<Scalars["Boolean"]>
  externalTicketCode_lte?: Maybe<Scalars["String"]>
  replyTo?: Maybe<Scalars["String"]>
  sofortEnd_lte?: Maybe<Scalars["DateTime"]>
  openDoor_gte?: Maybe<Scalars["DateTime"]>
  vatTypeId?: Maybe<Scalars["Int"]>
  vatInGivenAmount_exists?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_gt?: Maybe<Scalars["Int"]>
  modifiedDate_lt?: Maybe<Scalars["DateTime"]>
  numberOfTicketsToBasket_gte?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_gte?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint_exists?: Maybe<Scalars["Boolean"]>
  companyRequired?: Maybe<Scalars["Boolean"]>
  ticketsTotal?: Maybe<Scalars["Int"]>
  externalTicketCode_gt?: Maybe<Scalars["String"]>
  vatTypeId_exists?: Maybe<Scalars["Boolean"]>
  vatPercentage?: Maybe<Scalars["Float"]>
  nameMandatory_ne?: Maybe<Scalars["Boolean"]>
  sortOrder_ne?: Maybe<Scalars["Int"]>
  _id_gt?: Maybe<Scalars["Int"]>
  showImageOnTop_exists?: Maybe<Scalars["Boolean"]>
  end_lte?: Maybe<Scalars["DateTime"]>
  hideDateTime?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityRequired?: Maybe<Scalars["Boolean"]>
  emailTemplate_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  openDoor_lte?: Maybe<Scalars["DateTime"]>
  _id_lt?: Maybe<Scalars["Int"]>
  generateNoTicket?: Maybe<Scalars["Boolean"]>
  sofortEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  numberOfTicketsToBasket_exists?: Maybe<Scalars["Boolean"]>
  hideDateTime_ne?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_gt?: Maybe<Scalars["Int"]>
  companyRequired_ne?: Maybe<Scalars["Boolean"]>
  colorCode_lt?: Maybe<Scalars["String"]>
  vatTypeId_ne?: Maybe<Scalars["Int"]>
  senderEmail_ne?: Maybe<Scalars["String"]>
  festivalEventIds?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  vatPercentage_ne?: Maybe<Scalars["Float"]>
  modifiedDate_ne?: Maybe<Scalars["DateTime"]>
  hideOnPcClient_ne?: Maybe<Scalars["Boolean"]>
  ticketTypeInfos_exists?: Maybe<Scalars["Boolean"]>
  vatPercentage_gte?: Maybe<Scalars["Float"]>
  vatPercentage_lte?: Maybe<Scalars["Float"]>
  birthDateMandatory_ne?: Maybe<Scalars["Boolean"]>
  emailRequired_ne?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_exists?: Maybe<Scalars["Boolean"]>
  ticketTemplate?: Maybe<Scalars["String"]>
  isSoldOut_ne?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_lt?: Maybe<Scalars["Int"]>
  vatTypeId_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  vatTypeId_lt?: Maybe<Scalars["Int"]>
  preSaleStart_gte?: Maybe<Scalars["DateTime"]>
  senderEmail_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  promoCodeIdToPrint_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  generateNoTicket_exists?: Maybe<Scalars["Boolean"]>
  sortOrder_gte?: Maybe<Scalars["Int"]>
  vatTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  preSaleStart_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  senderEmail_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  ticketsTotal_lte?: Maybe<Scalars["Int"]>
  showImageOnTop_ne?: Maybe<Scalars["Boolean"]>
  callcenterEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  phoneMandatory?: Maybe<Scalars["Boolean"]>
  firstNameRequired_exists?: Maybe<Scalars["Boolean"]>
  addressRequired_ne?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold_lte?: Maybe<Scalars["Int"]>
  externalTicketCode_gte?: Maybe<Scalars["String"]>
  bookWithTicketTypeId?: Maybe<Scalars["Int"]>
  vatPercentage_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  maxMemberTickets_lte?: Maybe<Scalars["Int"]>
  maxMemberTickets_lt?: Maybe<Scalars["Int"]>
  emailRequired?: Maybe<Scalars["Boolean"]>
  modifiedDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateCreated_gte?: Maybe<Scalars["DateTime"]>
  phoneRequired?: Maybe<Scalars["Boolean"]>
  blockAutoMailer_ne?: Maybe<Scalars["Boolean"]>
  modifiedDate_gte?: Maybe<Scalars["DateTime"]>
  hideReceipt_ne?: Maybe<Scalars["Boolean"]>
  preSaleStart_lt?: Maybe<Scalars["DateTime"]>
  callcenterEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  preSaleStart_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  firstNameMandatory?: Maybe<Scalars["Boolean"]>
  sofortEnd_gte?: Maybe<Scalars["DateTime"]>
  end_ne?: Maybe<Scalars["DateTime"]>
  isActive?: Maybe<Scalars["Boolean"]>
  preSaleEnd_gt?: Maybe<Scalars["DateTime"]>
  hidePriceOnTicket_ne?: Maybe<Scalars["Boolean"]>
  ticketByEmail_ne?: Maybe<Scalars["Boolean"]>
  companyMandatory_ne?: Maybe<Scalars["Boolean"]>
  firstNameMandatory_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  AND?: Maybe<Array<EventDetailTicketTypeQueryInput>>
  birthDateMandatory_exists?: Maybe<Scalars["Boolean"]>
  vatInGivenAmount?: Maybe<Scalars["String"]>
  maxNumberOfTicketsPerOrder?: Maybe<Scalars["Int"]>
  numberOfTicketsSold_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  isOverheadCalculateActive_ne?: Maybe<Scalars["Boolean"]>
  maxMemberTickets_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sofortEnd?: Maybe<Scalars["DateTime"]>
  vatInGivenAmount_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  replyTo_lt?: Maybe<Scalars["String"]>
  colorCode?: Maybe<Scalars["String"]>
  vatInGivenAmount_lt?: Maybe<Scalars["String"]>
  modifiedDate_gt?: Maybe<Scalars["DateTime"]>
  modifiedDate_lte?: Maybe<Scalars["DateTime"]>
  _id?: Maybe<Scalars["Int"]>
  nameRequired_ne?: Maybe<Scalars["Boolean"]>
  eventId_gte?: Maybe<Scalars["Int"]>
  birthDateRequired_ne?: Maybe<Scalars["Boolean"]>
  nameRequired?: Maybe<Scalars["Boolean"]>
  _id_gte?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_lte?: Maybe<Scalars["Int"]>
  hideReceipt_exists?: Maybe<Scalars["Boolean"]>
  openDoor_exists?: Maybe<Scalars["Boolean"]>
  festivalEventIds_gte?: Maybe<Scalars["String"]>
  noConfirmationEmail_ne?: Maybe<Scalars["Boolean"]>
  start_gt?: Maybe<Scalars["DateTime"]>
  postalCodeAndCityMandatory_ne?: Maybe<Scalars["Boolean"]>
  emailTemplate_lte?: Maybe<Scalars["String"]>
  noConfirmationEmail_exists?: Maybe<Scalars["Boolean"]>
  modifiedDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  preSaleStart?: Maybe<Scalars["DateTime"]>
  addressRequired?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numberOfTicketsSold_gte?: Maybe<Scalars["Int"]>
  emailTemplate_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  ticketsTotal_lt?: Maybe<Scalars["Int"]>
  postalCodeAndCityRequired_exists?: Maybe<Scalars["Boolean"]>
  sofortEnd_exists?: Maybe<Scalars["Boolean"]>
  postalCodeAndCityMandatory?: Maybe<Scalars["Boolean"]>
  price_in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  senderEmail_lt?: Maybe<Scalars["String"]>
  numberOfTicketsToBasket_ne?: Maybe<Scalars["Int"]>
  ticketsTotal_gte?: Maybe<Scalars["Int"]>
  price?: Maybe<Scalars["Float"]>
  festivalEventIds_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  senderEmail_gte?: Maybe<Scalars["String"]>
  emailRequired_exists?: Maybe<Scalars["Boolean"]>
  dateCreated_gt?: Maybe<Scalars["DateTime"]>
  vatTypeId_gte?: Maybe<Scalars["Int"]>
  openDoor_gt?: Maybe<Scalars["DateTime"]>
  phoneRequired_ne?: Maybe<Scalars["Boolean"]>
  preSaleStart_lte?: Maybe<Scalars["DateTime"]>
  currency_lte?: Maybe<Scalars["String"]>
  numberOfTicketsSold_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  replyTo_ne?: Maybe<Scalars["String"]>
  senderEmail?: Maybe<Scalars["String"]>
  ticketTemplate_ne?: Maybe<Scalars["String"]>
  replyTo_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstNameRequired?: Maybe<Scalars["Boolean"]>
  numberOfTicketsSold?: Maybe<Scalars["Int"]>
  bookWithTicketTypeId_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  ticketByEmail_exists?: Maybe<Scalars["Boolean"]>
  ticketsTotal_ne?: Maybe<Scalars["Int"]>
  dateCreated_lt?: Maybe<Scalars["DateTime"]>
  currency_lt?: Maybe<Scalars["String"]>
  sendSMSOrder_ne?: Maybe<Scalars["Boolean"]>
  currency_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  noConfirmationEmail?: Maybe<Scalars["Boolean"]>
  addressMandatory_exists?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_ne?: Maybe<Scalars["Int"]>
  promoCodeIdToPrint_lte?: Maybe<Scalars["Int"]>
  hideOnPcClient_exists?: Maybe<Scalars["Boolean"]>
  numberOfTicketsToBasket_lt?: Maybe<Scalars["Int"]>
  hidePassbook_ne?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["Int"]>
  ticketTemplate_lte?: Maybe<Scalars["String"]>
  start_exists?: Maybe<Scalars["Boolean"]>
  preSaleStart_ne?: Maybe<Scalars["DateTime"]>
  callcenterEnd_gte?: Maybe<Scalars["DateTime"]>
  ticketByEmail?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<EventDetailTicketTypeQueryInput>>
  dateCreated_ne?: Maybe<Scalars["DateTime"]>
  generateNoTicket_ne?: Maybe<Scalars["Boolean"]>
  maxNumberOfTicketsPerOrder_lte?: Maybe<Scalars["Int"]>
  openDoor_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  nameRequired_exists?: Maybe<Scalars["Boolean"]>
  sofortEnd_lt?: Maybe<Scalars["DateTime"]>
  sortOrder_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numberOfTicketsToBasket_lte?: Maybe<Scalars["Int"]>
  sofortEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  dateCreated?: Maybe<Scalars["DateTime"]>
  replyTo_gte?: Maybe<Scalars["String"]>
  colorCode_exists?: Maybe<Scalars["Boolean"]>
  invoiceEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  bookWithTicketTypeId_gt?: Maybe<Scalars["Int"]>
  start_lt?: Maybe<Scalars["DateTime"]>
  emailMandatory_exists?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  eventId?: Maybe<Scalars["Int"]>
  useWorkflow?: Maybe<Scalars["Boolean"]>
  preSaleEnd_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  festivalEventIds_lte?: Maybe<Scalars["String"]>
  bookWithTicketTypeId_ne?: Maybe<Scalars["Int"]>
  ticketsTotal_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  preSaleEnd?: Maybe<Scalars["DateTime"]>
  maxNumberOfTicketsPerOrder_lt?: Maybe<Scalars["Int"]>
  birthDateMandatory?: Maybe<Scalars["Boolean"]>
  invoiceEnd_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  externalTicketCode_exists?: Maybe<Scalars["Boolean"]>
  sortOrder?: Maybe<Scalars["Int"]>
  vatPercentage_gt?: Maybe<Scalars["Float"]>
}

export type SponsorQueryInput = {
  url?: Maybe<Scalars["String"]>
  url_gte?: Maybe<Scalars["String"]>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  name?: Maybe<Scalars["String"]>
  url_gt?: Maybe<Scalars["String"]>
  name_exists?: Maybe<Scalars["Boolean"]>
  name_lt?: Maybe<Scalars["String"]>
  image_exists?: Maybe<Scalars["Boolean"]>
  image_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  image?: Maybe<Scalars["String"]>
  name_gt?: Maybe<Scalars["String"]>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  events_in?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_ne?: Maybe<Scalars["String"]>
  url_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_ne?: Maybe<Scalars["String"]>
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  events_nin?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  url_lte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  OR?: Maybe<Array<SponsorQueryInput>>
  url_lt?: Maybe<Scalars["String"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  AND?: Maybe<Array<SponsorQueryInput>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  image_lte?: Maybe<Scalars["String"]>
  name_lte?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  name_gte?: Maybe<Scalars["String"]>
  image_gt?: Maybe<Scalars["String"]>
  events?: Maybe<Array<Maybe<SponsorEventQueryInput>>>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  name_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  image_gte?: Maybe<Scalars["String"]>
  image_lt?: Maybe<Scalars["String"]>
  name_ne?: Maybe<Scalars["String"]>
  image_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  url_exists?: Maybe<Scalars["Boolean"]>
  events_exists?: Maybe<Scalars["Boolean"]>
}

export enum StaffSortByInput {
  NameDesc = "NAME_DESC",
  BioDesc = "BIO_DESC",
  NameAsc = "NAME_ASC",
  BioAsc = "BIO_ASC",
  SortorderAsc = "SORTORDER_ASC",
  SortorderDesc = "SORTORDER_DESC",
  TopicAsc = "TOPIC_ASC",
  TopicDesc = "TOPIC_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC"
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

export type EventDetailInsertInput = {
  shippingFee?: Maybe<Scalars["Float"]>
  end?: Maybe<Scalars["DateTime"]>
  googleAnalyticsTracker?: Maybe<Scalars["String"]>
  salesRegionId?: Maybe<Scalars["Int"]>
  showLinkToGoogleMap?: Maybe<Scalars["Boolean"]>
  isActiveForSale?: Maybe<Scalars["Boolean"]>
  longitude?: Maybe<Scalars["Float"]>
  maxTicketsProOrder?: Maybe<Scalars["Int"]>
  defaultLanguageId?: Maybe<Scalars["Int"]>
  postSaleCloseStatus?: Maybe<Scalars["Int"]>
  eventGenreValue?: Maybe<Scalars["Int"]>
  latitude?: Maybe<Scalars["Float"]>
  maxTickets?: Maybe<Scalars["Int"]>
  _id?: Maybe<Scalars["Int"]>
  dateModified?: Maybe<Scalars["DateTime"]>
  warningSendDate?: Maybe<Scalars["String"]>
  facebookPixelId?: Maybe<Scalars["String"]>
  organizerGoogleAnalyticsDomain?: Maybe<Scalars["String"]>
  isCompanyNameMandatory?: Maybe<Scalars["Boolean"]>
  countryId?: Maybe<Scalars["Int"]>
  locationId?: Maybe<Scalars["Int"]>
  noVatOnCommission?: Maybe<Scalars["Boolean"]>
  openDoor?: Maybe<Scalars["DateTime"]>
  forceEmptySeats?: Maybe<Scalars["Int"]>
  sendWarning?: Maybe<Scalars["Boolean"]>
  externalEventCode?: Maybe<Scalars["String"]>
  tenantId?: Maybe<Scalars["Int"]>
  zoneMapId?: Maybe<Scalars["Int"]>
  organizerId?: Maybe<Scalars["Int"]>
  sendNotificationByEmail?: Maybe<Scalars["Boolean"]>
  start?: Maybe<Scalars["DateTime"]>
  isBankInternalEvent?: Maybe<Scalars["Boolean"]>
  hideEventInfoOnSoldOut?: Maybe<Scalars["Boolean"]>
  masterEventId?: Maybe<Scalars["Int"]>
  notificationEmail?: Maybe<Scalars["String"]>
  googleCoordinates?: Maybe<Scalars["String"]>
  eventInfos?: Maybe<Array<Maybe<EventDetailEventInfoInsertInput>>>
  salesWarningLevel?: Maybe<Scalars["Int"]>
  stay22Active?: Maybe<Scalars["Boolean"]>
  emailTemplate?: Maybe<Scalars["String"]>
  isPhoneMandatory?: Maybe<Scalars["Boolean"]>
  ticketTypes?: Maybe<Array<Maybe<EventDetailTicketTypeInsertInput>>>
  status?: Maybe<Scalars["Int"]>
  vatNumber?: Maybe<Scalars["String"]>
  hideOnEventList?: Maybe<Scalars["Boolean"]>
  dateCreated?: Maybe<Scalars["DateTime"]>
}

export type LocationInsertInput = {
  info?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  postalCode?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  city?: Maybe<Scalars["String"]>
  directions?: Maybe<Scalars["String"]>
}

export type SubscriptionInsertInput = {
  participants?: Maybe<SubscriptionParticipantsRelationInput>
  street2?: Maybe<Scalars["String"]>
  _id?: Maybe<Scalars["ObjectId"]>
  zip?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  week?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  street1?: Maybe<Scalars["String"]>
  deadline?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
}

export type SubscriptionQueryInput = {
  phone_lt?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
  OR?: Maybe<Array<SubscriptionQueryInput>>
  salutation_ne?: Maybe<Scalars["String"]>
  zip_gt?: Maybe<Scalars["String"]>
  state_lte?: Maybe<Scalars["String"]>
  reservationDate_gt?: Maybe<Scalars["DateTime"]>
  externalUserId?: Maybe<Scalars["String"]>
  externalUserId_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city?: Maybe<Scalars["String"]>
  salutation_gte?: Maybe<Scalars["String"]>
  week_lte?: Maybe<Scalars["Int"]>
  street2_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone?: Maybe<Scalars["String"]>
  state_gte?: Maybe<Scalars["String"]>
  salutation_gt?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  email_exists?: Maybe<Scalars["Boolean"]>
  numOfChildren_ne?: Maybe<Scalars["Int"]>
  deadline_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  salutation_lte?: Maybe<Scalars["String"]>
  deadline_lt?: Maybe<Scalars["DateTime"]>
  reservationDate_nin?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  street1_lt?: Maybe<Scalars["String"]>
  numOfChildren_gt?: Maybe<Scalars["Int"]>
  salutation_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_gt?: Maybe<Scalars["Int"]>
  deadline_gt?: Maybe<Scalars["DateTime"]>
  country_ne?: Maybe<Scalars["String"]>
  participants?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  lastName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  participants_nin?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  street2_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_lt?: Maybe<Scalars["String"]>
  city_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  numOfChildren_lte?: Maybe<Scalars["Int"]>
  country_exists?: Maybe<Scalars["Boolean"]>
  externalUserId_gte?: Maybe<Scalars["String"]>
  salutation?: Maybe<Scalars["String"]>
  numOfChildren_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  numOfChildren_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  zip_gte?: Maybe<Scalars["String"]>
  _id_gte?: Maybe<Scalars["ObjectId"]>
  firstName_exists?: Maybe<Scalars["Boolean"]>
  firstName_lt?: Maybe<Scalars["String"]>
  street2_gt?: Maybe<Scalars["String"]>
  city_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  zip_lte?: Maybe<Scalars["String"]>
  email_gte?: Maybe<Scalars["String"]>
  firstName_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  phone_gte?: Maybe<Scalars["String"]>
  state?: Maybe<Scalars["String"]>
  city_lt?: Maybe<Scalars["String"]>
  firstName_lte?: Maybe<Scalars["String"]>
  state_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_gte?: Maybe<Scalars["DateTime"]>
  week_lt?: Maybe<Scalars["Int"]>
  numOfChildren?: Maybe<Scalars["Int"]>
  country_lte?: Maybe<Scalars["String"]>
  street1?: Maybe<Scalars["String"]>
  _id_exists?: Maybe<Scalars["Boolean"]>
  city_exists?: Maybe<Scalars["Boolean"]>
  zip_exists?: Maybe<Scalars["Boolean"]>
  salutation_lt?: Maybe<Scalars["String"]>
  zip_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  firstName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_gte?: Maybe<Scalars["String"]>
  firstName_gt?: Maybe<Scalars["String"]>
  week_gte?: Maybe<Scalars["Int"]>
  email_gt?: Maybe<Scalars["String"]>
  externalUserId_exists?: Maybe<Scalars["Boolean"]>
  zip_ne?: Maybe<Scalars["String"]>
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_exists?: Maybe<Scalars["Boolean"]>
  phone_lte?: Maybe<Scalars["String"]>
  street1_lte?: Maybe<Scalars["String"]>
  country_gte?: Maybe<Scalars["String"]>
  country_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  city_ne?: Maybe<Scalars["String"]>
  _id_nin?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  _id_ne?: Maybe<Scalars["ObjectId"]>
  deadline_exists?: Maybe<Scalars["Boolean"]>
  street2_gte?: Maybe<Scalars["String"]>
  reservationDate_lte?: Maybe<Scalars["DateTime"]>
  externalUserId_lte?: Maybe<Scalars["String"]>
  lastName_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  salutation_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastName_lt?: Maybe<Scalars["String"]>
  phone_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_lt?: Maybe<Scalars["String"]>
  lastName_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_exists?: Maybe<Scalars["Boolean"]>
  week_exists?: Maybe<Scalars["Boolean"]>
  lastName_gt?: Maybe<Scalars["String"]>
  deadline_lte?: Maybe<Scalars["DateTime"]>
  email_lte?: Maybe<Scalars["String"]>
  street2_lte?: Maybe<Scalars["String"]>
  externalUserId_ne?: Maybe<Scalars["String"]>
  participants_exists?: Maybe<Scalars["Boolean"]>
  lastName_lte?: Maybe<Scalars["String"]>
  lastName_gte?: Maybe<Scalars["String"]>
  reservationDate?: Maybe<Scalars["DateTime"]>
  country_gt?: Maybe<Scalars["String"]>
  city_gt?: Maybe<Scalars["String"]>
  AND?: Maybe<Array<SubscriptionQueryInput>>
  street2_ne?: Maybe<Scalars["String"]>
  week_ne?: Maybe<Scalars["Int"]>
  numOfChildren_exists?: Maybe<Scalars["Boolean"]>
  _id_lte?: Maybe<Scalars["ObjectId"]>
  deadline_ne?: Maybe<Scalars["DateTime"]>
  externalUserId_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  street1_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  reservationDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  email?: Maybe<Scalars["String"]>
  phone_gt?: Maybe<Scalars["String"]>
  state_ne?: Maybe<Scalars["String"]>
  phone_ne?: Maybe<Scalars["String"]>
  state_lt?: Maybe<Scalars["String"]>
  email_ne?: Maybe<Scalars["String"]>
  country_lt?: Maybe<Scalars["String"]>
  firstName_ne?: Maybe<Scalars["String"]>
  zip?: Maybe<Scalars["String"]>
  street1_gte?: Maybe<Scalars["String"]>
  street1_exists?: Maybe<Scalars["Boolean"]>
  phone_exists?: Maybe<Scalars["Boolean"]>
  reservationDate_ne?: Maybe<Scalars["DateTime"]>
  numOfChildren_gte?: Maybe<Scalars["Int"]>
  participants_in?: Maybe<Array<Maybe<ParticipantQueryInput>>>
  externalUserId_gt?: Maybe<Scalars["String"]>
  street2_exists?: Maybe<Scalars["Boolean"]>
  country?: Maybe<Scalars["String"]>
  numOfChildren_lt?: Maybe<Scalars["Int"]>
  _id_in?: Maybe<Array<Maybe<Scalars["ObjectId"]>>>
  week_in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  _id_gt?: Maybe<Scalars["ObjectId"]>
  street2?: Maybe<Scalars["String"]>
  externalUserId_lt?: Maybe<Scalars["String"]>
  deadline_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>
  deadline_gte?: Maybe<Scalars["DateTime"]>
  street1_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  email_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  state_exists?: Maybe<Scalars["Boolean"]>
  firstName_gte?: Maybe<Scalars["String"]>
  lastName_ne?: Maybe<Scalars["String"]>
  phone_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  _id_lt?: Maybe<Scalars["ObjectId"]>
  _id?: Maybe<Scalars["ObjectId"]>
  state_nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  deadline?: Maybe<Scalars["DateTime"]>
  week?: Maybe<Scalars["Int"]>
  street1_gt?: Maybe<Scalars["String"]>
  city_lte?: Maybe<Scalars["String"]>
  street2_lt?: Maybe<Scalars["String"]>
  country_in?: Maybe<Array<Maybe<Scalars["String"]>>>
  week_nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reservationDate_lt?: Maybe<Scalars["DateTime"]>
  state_gt?: Maybe<Scalars["String"]>
  street1_ne?: Maybe<Scalars["String"]>
}

export type ChildrenPerStateItem = {
  __typename?: "ChildrenPerStateItem"
  state?: Maybe<Scalars["String"]>
  sumPerStateAndWeek?: Maybe<Scalars["Float"]>
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

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}


