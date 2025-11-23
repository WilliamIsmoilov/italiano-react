

export interface Contact{
    _id: string;
    memberId: string,
    memberNick: string,
    memberLastName: string,
    memberEmail: string,
    contactSubject: string,
    contactMessage: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface ContactInput{
    memberNick: string,
    memberLastName: string,
    memberEmail: string,
    contactSubject: string,
    contactMessage: string,
}