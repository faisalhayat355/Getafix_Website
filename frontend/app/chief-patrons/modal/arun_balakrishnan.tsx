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

const ArunBalakrishnan = () => {
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
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Mr. Arun Balakrishnan</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem' }}>
            Was the Chairman & Managing Director of Hindustan Petroleum Corporation Ltd (HPCL) from 2007 to 2010 and amongst other key positions held, was the Director Planning – Oil Coordination Committee, Ministry of Petroleum & Natural Gas, Founder Chairman of HPCL-Mittal Energy Ltd. (HMEL) and Former Chairman, Scientific Advisory Committee, Ministry of Petroleum & Natural Gas, Govt. of India, etc. Mr. Balakrishnan holds a Bachelor’s Degree in Chemical Engineering and Post Graduate Diploma in Management (Indian Institute of Management, Bangalore). Mr. Balakrishnan has expertise in the fields of Project Planning & Implementation, Finance, Human Resources, Science & Technology, Corporate Governance etc. and was awarded “The Distinguished Alumnus Award 2008” from the Indian Institute of Management, Bangalore and “Personal Excellence Award 2009” for Excellence in Leadership, Emotional Intelligence Institute, Texas A&M University, Kingsville, USA, amongst many other accolades and awards.
            </Typography>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default ArunBalakrishnan;
