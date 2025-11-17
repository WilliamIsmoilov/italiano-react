import type { MemberStatus, MemberType } from "../enum/member.enum";


export interface Member{
    _id: string;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberEmail: string,
    memberReservation: string;
    memberLocation: string,
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    resetCode?: string,
    resetCodeExpire?: Date,
    createdAt: Date;
    updatedAt: Date;
}


export interface LoginInput{
    memberEmail: string;
    memberPassword: string;
}

export interface MemberInput{
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberReservation?: string,
    memberEmail: string;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress: string;
}



export interface User {
  id: string;
  email: string;
  password: string; 
}


export interface MemberUpdateInput{
    memberNick?: string;
    memberPhone?: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberEmail?:string;
}

export interface MemberForgotInput{
    memberEmail: string
}

export interface MemberVerifyInput{
    memberEmail?: string,
    resetCode?: string,
    resetCodeExpire?: string
}
