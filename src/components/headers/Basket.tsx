import { Box, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function Basket(){
    return(
        <Box className = {'hover-line'}>
            <IconButton className="icon-button"
            style={{width:"45px", height:'45px'}}>
                <Badge>
                    <img src={'/icons/shopping.svg'} style={{width:"45px", height:'45px'}}/>
                </Badge>
            </IconButton>
            

            <Stack className="basket-frame">

            </Stack>
        </Box>
    )
}