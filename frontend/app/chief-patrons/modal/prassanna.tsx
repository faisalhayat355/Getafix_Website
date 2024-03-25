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

const Prassanna = () => {
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
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Mr. Prasanna</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem' }}>
            M.R. Prasanna (Pras), a native of Mysore, holds a Master’s Degree in Law from the University of Mysore and is a Gold Medalist. After being an independent Counsel for about 7 years he worked as Head of the Legal function for over 28 years with different organizations like Alfa Laval, Brooke Bond India Limited (now part of Hindustan Unilever). He was the Chief Legal Officer of Larsen & Toubro Limited, Mumbai for seven years. For about 12 years, Pras was the General Counsel of the Aditya Birla Group, spearheading mergers and acquisitions. Since May 2010, Prasanna has relocated to Bangalore as an Independent Consultant primarily for corporates, advising them on a variety of corporate transactions, mergers and acquisitions. He is also a member of the Karnataka Bar Association and appears in court primarily in diverse corporate matters. He is associated with Aarna Law as a Senior Advisor to that firm. Pras has been and continues to be a Director on the Boards of many of the Aditya Birla Group Companies both in India and abroad. He also serves as a Director on the Boards of Indian Companies.
          </Typography>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default Prassanna;
