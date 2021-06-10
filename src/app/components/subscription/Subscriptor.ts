export interface InsertOneParticipant {
    _id: string;
    reservationDate: Date;
}

export interface Data {
    insertOneParticipant: InsertOneParticipant;
}

export interface Subscriptor {
    data: Data;
}

export interface Participant {
    numOfChildren: number;
    reservationDate: Date;
    status: string;
}


