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

const JusticePKrishnaBhat = () => {
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
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Hon'ble Mr. Justice P Krishna Bhat</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem' }}>
            Born on 08.08.1960 in Vittal Padnur Village of Bantwal Taluk, Dakshina Kannada District, in an agrarian family. After finishing his primary education in the village and high school education in Vittal, he studied PUC in Sri.Bhuvanendra College at Karkala. He did his B.Sc. from St.Aloysius College, Mangalore. He did his law course from the Law school, Banaras Hindu University, Varanasi. He initially joined the bar at District Courts in Mangalore and in July 1989, he commenced his practice at the High Court of Karnataka, Bangalore. In 1998 he was directly recruited as a District and Sessions Judge and he served in the capacity of Principal District and Sessions Judge at Bidar, Tumkur, Raichur, Belgaum and Bangalore Rural districts. He was also the Registrar General of High Court of Karnataka and Director of Karnataka Judicial Academy, Bangalore. He was appointed as Additional Judge of the High Court of Karnataka and taken oath on 21.05.2020 and Permanent Judge on 25.09.2021. Retired on 05.08.2022.
            </Typography>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default JusticePKrishnaBhat;
