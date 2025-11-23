import axios from "axios";
import { serverApi } from "../libs/config";
import type { Contact, ContactInput } from "../libs/types/contact";

class ContactService{
    private readonly path: string;

    constructor(){
        this.path = serverApi
    }

    public async createContact(input: ContactInput): Promise<Contact>{
        try {
            const url = `${this.path}/contact/create`;
            const result = await axios.post(url, input, {withCredentials: true})
            return result.data
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default ContactService