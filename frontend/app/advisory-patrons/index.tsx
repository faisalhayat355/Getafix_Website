"use client"
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ChiefPatrons = () => {
  return (
    <Box mt={2}>
    <Grid container>
      <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
          <img src="./images/Group-1.png" alt="LoginImage" style={{ height: "9vh" }}/>
      </Grid>

      <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
          <Typography style={{fontSize:'2.2rem',fontWeight:'bold',color:'#2a3b6f'}}>
          Advisory Patrons
          </Typography>
      </Grid>
  </Grid>

  <Box style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(87, 53%, 83%, 1) 0%, hsla(87, 47%, 78%, 1) 0%, hsla(0, 0%, 100%, 1) 45%, hsla(0, 0%, 100%, 1) 100%)",height:'84vh',marginTop:'0.5rem'}}>
    <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={4}>
                <img src="./images/advisory-patrons/Ma.png" alt="LoginImage" style={{ height: "22vh",marginTop:'2rem' }}/>
                </Grid>
                <Grid item xs={7} mt={9}>
                    <Typography style={{fontSize:'1.2rem',marginLeft:'4rem',fontWeight:'600'}}>Mr. Paneesh Rao</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Chief Sustainability Officer, LTI Mindtree</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={3.5}>
                <img src="./images/advisory-patrons/Mask-gro.png" alt="LoginImage" style={{ height: "22vh",marginTop:'2rem' }}/>
                </Grid>
                <Grid item xs={7} mt={9}>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'4rem'}}>Brigadier Rajeev Kapoor</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'7rem'}}>Indian Army Veteran</Typography>

                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={4}>
                <img src="./images/advisory-patrons/Mask.png" alt="LoginImage" style={{ height: "22vh",marginTop:'1rem' }}/>
                </Grid>
                <Grid item xs={7} mt={9}>
                    <Typography style={{fontSize:'1.2rem',marginLeft:'5rem',fontWeight:'600'}}>Mr. D V Sastry</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Managing Director K2K Fintech Solutions Pvt Ltd</Typography>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={3.5}>
                    <img src="./images/advisory-patrons/Mask-group-14.png" alt="LoginImage" style={{ height: "22vh",marginTop:'1rem' }}/>
                </Grid>
                <Grid item xs={8} mt={9}>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'6.5rem'}}>Mr. Yadavalli Srinivas</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2rem'}}>CTO & Co-Founder Oxy Loans SRS Fintech Labs  Director</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2.3rem'}}>K2K Fintech Solutions Pvt. Ltd.  Member of Microsoft for</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'8.5rem'}}>Startups Founders Hub</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={4}>
                <img src="./images/advisory-patrons/Mask-group-13.png" alt="LoginImage" style={{ height: "22vh",marginTop:'1rem',borderRadius:'17px' }}/>
                </Grid>
                <Grid item xs={8} mt={9}>
                    <Typography style={{fontSize:'1.2rem',marginLeft:'4rem',fontWeight:'600'}}>Mr. Sundharesan Jayamoorthi</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>ECG Specialist, Founder and Chief Advisor, J. Sundaresan</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'9.5rem'}}>and Associates </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={3.5}>
                    <img src="./images/advisory-patrons/Mask-group-15.png" alt="LoginImage" style={{ height: "22vh",marginTop:'1rem' }}/>
                </Grid>
                <Grid item xs={7} mt={9}>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'6rem'}}>Dr. SK Murthy</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'3rem'}}>Patent Counsel of Intel India Pvt. Limited.</Typography> 
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  </Box>

  <Box style={{background:'#1e2a5e',height:'5.5rem',display:'flex'}}>
    <Grid container >
      <Grid item xs={2}>
        <Typography style={{color:"white",fontWeight:'bold',marginTop:'1.8rem',marginLeft:'2rem'}}> Our Technology Partner:</Typography>
      </Grid>
      <Grid item xs={3}>
      <img src="./images/footer/Main-Logo-Color-Cropped-Transparent-1-1024x333.png" alt="values" style={{ height: "7vh",marginLeft:'2rem',marginTop:'0.8rem'}}/>
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
      <img src='./images/footer/visitors/5.gif' style={{height:'3vh'}}/>
      <img src='./images/footer/visitors/8.png' style={{height:'3vh'}}/>
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
  

    </Box>
  )
}

export default ChiefPatrons
