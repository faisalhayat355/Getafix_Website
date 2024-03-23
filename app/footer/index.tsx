import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
  return (
    <>
    <Box style={{background:'#1e2a5e',height:'5.5rem',display:'flex'}}>
      <Grid container >
        <Grid item xs={2}>
          <Typography style={{color:"white",fontWeight:'bold',marginTop:'1.8rem'}}> Our Technology Partner:</Typography>
        </Grid>
        <Grid item xs={3}>
        <img src="./images/footer/Main-Logo-Color-Cropped-Transparent-1-1024x333.png" alt="values" style={{ height: "7vh",marginLeft:'0.3rem',marginTop:'0.8rem'}}/>
        </Grid>
        <Grid item xs={4}>
        <Typography style={{color:"white",fontSize:'1.5rem',fontWeight:'bold',marginTop:'1.8rem'}}> Directorial Advisors</Typography>
        </Grid>
        <Grid item xs={3} style={{display:'flex',alignItems:'center',marginTop:'0.7rem'}}>
        <Typography style={{color:"white",fontWeight:'bold'}}> Visitors:</Typography>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh',marginLeft:'1rem'}}/>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/7.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/4.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/6.png' style={{height:'3vh'}}/>
        </Grid>
      </Grid>
    </Box>
    <Grid container mt={2}>
      <Grid item xs={1}></Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}> Reach Us</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}>Quick Links</Typography>
    </Grid>
    <Grid item xs={3}>
    <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}>Quick Links</Typography>
    </Grid>
  </Grid>

  <Grid container mt={3}>
      <Grid item xs={1}></Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex'}}> 
      <CallOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>+91 9066055044 <br></br>
      +91 6363470948</span>
      </Typography>

      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex',marginTop:'1rem'}}> 
      <EmailOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>ceo@directorialadvisors.com</span></Typography>

      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex',marginTop:'1rem'}}> 
      <LocationOnOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>Corporate Identity Number : <br></br>U70200KA2023OPC180359<br></br>
Address: OYO WORKSPACES INDIA PRIVATE <br></br> LIMITED Ranka Junction, AH45, Krishna Reddy <br></br>Industrial Estate, Dooravani Nagar, Bengaluru, <br></br> KA, 560016</span>
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e'}}>Home
      </Typography>
      <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Contact Us
      </Typography>
    </Grid>
    <Grid item xs={3}>
    
    <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e'}}>Privacy Policy</Typography>
      <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Terms and Conditions</Typography>
      <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Disclaimer</Typography>
    </Grid>
  </Grid>

  <Grid item xs={12} style={{background:'#1e2a5e',padding:'10px'}} mt={2}>
    <Typography style={{textAlign:'center',color:'white',fontSize:'0.75rem'}}>Copyright © 2024 Directorial Advisors</Typography>
  </Grid>
  </>
  )
}

export default Footer
