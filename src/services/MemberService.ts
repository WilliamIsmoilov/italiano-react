/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { serverApi } from "../libs/config";
import type { LoginInput, Member, MemberInput } from "../libs/types/member";

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = serverApi
    }

    public async getRestaurant(): Promise<Member> {
     try {
        const url = this.path + '/member/getRestaurant';
        const result = await axios.get(url);
        console.log('getRestaurtant:', result);
        return result.data;
     } catch (err) {
        console.log('Error getRestaurant', err)
        throw err
     }
    }

    public async logout(): Promise<void>{
        try {
            const url = this.path + '/member/logout';
            const result = await axios.post(url, {}, {withCredentials: true});
            console.log('logout:', result);
            localStorage.removeItem('memberData');
            return result.data.logout
        } catch (err) {
            console.log('error logout', err);
            throw err;
        }
    }

    public async signup(input: MemberInput): Promise<Member>{
        try {
            const url = this.path + '/member/signup';
            const result = await axios.post(url, input, {withCredentials: true})

            const member: Member = result.data.member;
            localStorage.setItem('memberData', JSON.stringify(member))
            return member
        } catch (err) {
            console.log('error signup', err )
            throw err
        }
    }

    public async login(input: LoginInput): Promise<Member>{
        try {
            const url = this.path + '/member/login'
            const result = await axios.post(url, input, {withCredentials: true})

            const member: Member = result.data.member;
            localStorage.setItem('memberData', JSON.stringify(member))
            return member
        } catch (err) {
            console.log('error login', err)
            throw err
        }
    }
}

export default MemberService;