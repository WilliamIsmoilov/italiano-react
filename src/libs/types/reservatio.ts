

export interface Reservation{
    data: Reservation;
    _id: string;
    memberId: string;
    reservationDate: string;
    reservationTime: string;
    reservationSize: number;
    memberNick: string;
    memberLastName: string;
    memberPhone: string;
    memberEmail: string;
    reservationRequest?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ReservationInput{
    reservationDate: string;
    reservationTime: string;
    reservationSize: string;
    memberNick: string;
    memberLastName: string;
    memberPhone: string;
    memberEmail: string;
    reservationRequest?: string; 
}

export interface ReservationInquery{
    memberNick: string;
    memberLastName: string;
    memberEmail: string;
    memberPhone: string;
    reservationDate: string;
    reservationTime: string;
}