import { Container, Stack } from "@mui/material";

export default function Map() {
    return ( <div className="address">
        <Container>
            <Stack className="address-area">
                <iframe 
                style={{marginTop: '60px', marginBottom:'50px'}}          
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5624418259834!2d-72.9223434846039!3d41.31632477927125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b2b4c7edc5%3A0xe0dfd07e36a1d9bb!2sYale%20University!5e0!3m2!1sen!2sus!4v1633647827185!5m2!1sen!2sus" 
                width= '100%'
                height='500'
                referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </Stack>
            
        </Container>

    </div> )
} 