/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, Stack, Typography } from "@mui/material";
import { Message } from "../../libs/config";
import { useEffect, useState } from "react";
import { useGlobals } from "../../hooks/useGlobal";
import type { T } from "../../libs/types/common";
import type { ContactInput } from "../../libs/types/contact";
import ContactService from "../../services/ContactService";
import { sweetAcceptedProvider,  sweetErrorHandlings, sweetFailureProvider} from "../../libs/sweetAlert";

export default  function ContactPage(){

    const [memberNick, setMemberNick] = useState('')
    const [memberEmail, setMemberEmail] = useState('')
    const [memberLastName, setMemberLastName] = useState('')
    const [contactSubject, setContactSubject] = useState('')
    const [ contactMessage, setContactMessage] = useState('')
    const {authMember} = useGlobals();


    /////// handlers /////////

    const handleNick = (e: T) => {
        setMemberNick(e.target.value)
    }

    const handleLastName = (e: T) => {
        setMemberLastName(e.target.value)
    }

    const handleEmail = (e: T) => {
        setMemberEmail(e.target.value)
    }

    const handleSubject = (e: T) => {
        setContactSubject(e.target.value)
    }

    const handleMessage = (e: T) => {
        setContactMessage(e.target.value)
    }

    useEffect(() => {
        if(authMember){
          setMemberNick(authMember.memberNick || '');
          setMemberEmail(authMember.memberEmail || '')
        }
      }, [authMember])

      const clearText = () => {
        setContactMessage('');
        setContactSubject('');
        setMemberLastName('');
      }

    const handleContact = async () => {
        try {
            if(!authMember){
                sweetFailureProvider('You have to login first!')
                return
            }
            const isFullfill = 
            memberNick !== ''
            && memberLastName !== ''
            && memberEmail !== ''
            && contactSubject !== ''
            && contactMessage !== ''
            if(!isFullfill){
                sweetErrorHandlings(Message.error3)
            }
            if(!authMember){
                sweetFailureProvider('You have to login first!')
            }

            const contactInput: ContactInput  = {
                memberNick: memberNick,
                memberLastName: memberLastName,
                memberEmail: memberEmail,
                contactSubject: contactSubject,
                contactMessage: contactMessage
            }

            const contact = new ContactService()
            const result = await contact.createContact(contactInput)
            // sweetTopSuccessAlert('Thanks for your response!')
            clearText()
            sweetAcceptedProvider('Italiano Restaurant')
        } catch (err) {
            console.log(err)
            throw err
        }
    }
    return( <div className="contact-frame">
        <Container>
            <Stack className="contact-section">
                <Box className='contact-title'>Contact us</Box>
                <Typography className="contact-desc">
                    We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
                </Typography>
                <Stack className="contact-inputs">
                    <div className="form-row">
                    <input
                    className="contact-name"
                     type="text"
                    placeholder="First name"
                    value={memberNick}
                    onChange={handleNick}
                    name="name"
                    />

                    <input
                    className="contact-surname"
                    type="text"
                    value={memberLastName}
                    placeholder="Last name"
                    name="surname"
                    onChange={handleLastName}
                    />
                    </div>

                   <div className="form-row">
                    <input
                    className="contact-name"
                    type="text"
                    placeholder="Email address"
                    name="email"
                    value={memberEmail}
                    onChange={handleEmail}
                    />


                    <input
                    className="contact-surname"
                    type="text"
                    value={contactSubject}
                    placeholder="Subject"
                    name="subject"
                    onChange={handleSubject}
                    />
                 </div>


                <textarea
                placeholder="Message"
                value={contactMessage}
                className="contact-field"
                onChange={handleMessage}
                />                   

                </Stack>
                <button
                type="submit"
                className="btn-contact"
                onClick={handleContact}>
                    Submit
                </button>                
            </Stack>            
        </Container>

    </div>

    )
}