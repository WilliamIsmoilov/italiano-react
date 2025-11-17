/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { serverApi } from "../libs/config";
import type { Member } from "../libs/types/member";
import type { Reservation, ReservationInquery } from "../libs/types/reservatio";


class ReservationService{
    private readonly path: string;

    constructor() {
        this.path = serverApi
    }



    public async getMyReservation(input: ReservationInquery): Promise<Reservation[]>{

        try {
            const url = `${this.path}/reservation/my`
            const result = await axios.get(url, {withCredentials: true})
       return result.data;
        } catch (err) {
            console.log('Error, getMyOrder', err);
            throw err;
        }
    

}
}

export default ReservationService
