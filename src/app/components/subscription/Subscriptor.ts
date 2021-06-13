export interface InsertOneParticipant {
    _id: string;
    deadline: Date;
    numOfChildren: number;
}

export interface InsertOneParticipantData {
    insertOneParticipant: InsertOneParticipant;
}

export interface Subscriptor {
    data: InsertOneParticipantData;
}

export interface Participant {
    numOfChildren: number;
    reservationDate: Date;
    status: string;
}


