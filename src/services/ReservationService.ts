/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { serverApi } from "../libs/config";
import type { Reservation, ReservationInput, ReservationInquery } from "../libs/types/reservatio";


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


public async cancelReservation(reservationId: string):Promise<void>{
    try {
        const url = `${this.path}/reservation/delete/${reservationId}`
        const result = await axios.delete(url, {withCredentials: true})
        return result.data
    }catch(err){
            console.log(err)
            throw err
        }
}


public async createReservation(input: ReservationInput): Promise<Reservation>{
    try {
        const url = `${this.path}/reservation/create`;
        const result = await axios.post(url, input, {withCredentials: true});
        return result.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

}


export default ReservationService
