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

const SRaghunath = () => {
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
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Prof. S Raghunath</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem' }}>
            Specializes in Strategic Alliances and Strategic Leadership. Raghunath is the India Chapter Chair of the Academy of International Business and is on the Board of Directors of National Venture Capital Fund, Cloud Computing and Innovation Council of India,Spire Technologies, K Two Technologies, KIOCL and MECL. He was Dean overseeing administration at IIMB between 2011 and 2014, Chairperson, International Students Exchange Programme 2003-2006, Chairperson, NSRCEL 2000-2003, Strategy Area Chair, 1997-2000, and PGP Committee Member, 2003-2006. He teaches post- graduate and doctoral courses in Alliance Management, Strategic Networks, Corporate Strategy, E-Business Strategies and Models and Strategic Management in the Media and Entertainment Industry, leads IIMB executive programmes on Senior Leadership Coaching, Strategic Issues in Alliances, Outsourcing, Negotiations, Strategic Leadership of IT Companies and General Management Programme for Media and Entertainment Industry. He was also a Visiting Professor at INSEAD, France; HEC Paris; EUROMED, Marseilles; University of Buckingham, UK; RMIT School of Business; Melbourne, Australia.
         </Typography>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default SRaghunath;
