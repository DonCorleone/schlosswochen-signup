export interface Participant {
  id: number;
  _id: string | null;
  birthday: Date;
  fotoAllowed: boolean;
  salutation: string;
  comment: string;
  participant_id: string;
  externalUserId: string;
  firstNameParticipant: string;
  lastNameParticipant: string;
}
