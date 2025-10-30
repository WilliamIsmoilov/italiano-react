import { Box, Container, Stack, Typography } from "@mui/material";

export default  function ContactPage(){
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
                    name="name"
                    />

                    <input
                    className="contact-surname"
                    type="text"
                    placeholder="Last name"
                    name="surname"
                    />
                    </div>

                   <div className="form-row">
                    <input
                    className="contact-name"
                    type="text"
                    placeholder="Email address"
                    name="email"
                    />

                    <select
                    className="contact-surname"
                    name="subject"
                    >
                        <option value="RECOMMENDATION" >Recommendation</option>
                        <option value="COMPLAINT">Complaint</option>
                        <option value="ACKNOWLEDGEMENT">Acknowledgement</option>
                        <option value="REQUEST">Request</option>
                        </select>
                 </div>


                <textarea
                placeholder="Message"
                className="contact-field"
                />                   

                </Stack>
                <button
                type="submit"
                className="btn-contact">
                    Submit
                </button>                
            </Stack>            
        </Container>

    </div>

    )
}