import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: "absolute" as "absolute",
  top: "44%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:'12px',
  p: 4,

};

const TVMohan = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{textTransform:'capitalize',marginLeft:'6.6rem',color:'#8bb451'}} onClick={handleOpen}><u>View Profile</u></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <Grid container style={{display:'flex',alignItems:'center'}}>
            <Grid item xs={11.4}>
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Mr. T.V. Mohan</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem' }}>
          
            Presently Country Head & MD of ANDREAS MAIER in INDIA – a German MNC in work holding , clamping and shop floor machine automation, based in Bangalore. Earlier positions include being the Country Head & MD of Colfax in India – a US MNC as well as being the President of TVS Srichakra, India’s largest 2-wheel tyre manufacturer. Has worked in the Gulf and in India in a career spanning over 50 years , set up green field ventures and established successful operations and collaborations with global giants as Grundfoss pumps, Wendt abrasives, Allweiler pumps, Bertelsmann group, Houttin positive screws, Thames Water, Miele etc Has delivered over 100 productivity presentations and seminars across India and the middle east and has been an active member in many trade, business and social organisations as CII, Rotary etc... Received the President’s award for Energy conservation for large industries from Hon. Pratibha Patil in 2007. A mechanical engineer from the University College of Engineering, Bangalore (UVCE) with management development training in General Motors, Scotland, has also done courses in IIT & Guindy Engineering college in Chennai. Played cricket for the school & college, now plays golf on the weekends and is fond of reading, music and movies.
          
          </Typography>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default TVMohan;
