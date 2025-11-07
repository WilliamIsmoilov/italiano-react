/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { serverApi } from "../libs/config";
import type { Member } from "../libs/types/member";

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
}

export default MemberService;