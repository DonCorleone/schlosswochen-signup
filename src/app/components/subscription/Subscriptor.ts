export interface InsertOneParticipant {
    _id: string;
    deadline: Date;
    numOfChildren: number;
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


