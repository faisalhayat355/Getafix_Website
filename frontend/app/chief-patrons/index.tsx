"use client"
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import JusticePKrishnaBhat from './modal/justice_p_krishna_bhat';
import ArunBalakrishnan from './modal/arun_balakrishnan';
import SRaghunath from './modal/s_raghunath';
import KalpanaGopalan from './modal/kalpana_gopalan';
import Prassanna from './modal/prassanna';
import TVMohan from './modal/TV_Mohan';



const ChiefPatrons = () => {
  return (
    <Box mt={2}>
    <Grid container>
      <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
          <img src="./images/Group-1.png" alt="LoginImage" style={{ height: "9vh" }}/>
      </Grid>

      <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
          <Typography style={{fontSize:'2.2rem',fontWeight:'bold',color:'#2a3b6f'}}>
          Chief Patrons
          </Typography>
      </Grid>
  </Grid>


  <Box style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'94vh'}}>
    <Grid container>
        <Grid item xs={2}></Grid>

        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={4}>
                <img src="./images/chief_patrons/Group-151.png" alt="LoginImage" style={{ height: "22vh",marginTop:'2rem' }}/>
                </Grid>

                <Grid item xs={7} mt={4}>
                    <Typography style={{fontSize:'1.2rem',marginLeft:'1.8rem',fontWeight:'600'}}>Justice P Krishna Bhat</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Former Judge, High Court of Karnataka,</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'3.5rem'}}>Former Registrar General,</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2rem'}}>High Court of Karnataka & Director,</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'3.2rem'}}>Karnataka Judicial Academy, </Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'5.5rem'}}>Now, Arbitrator.</Typography>
                    <JusticePKrishnaBhat/>
                    {/* <Button style={{textTransform:'capitalize',marginLeft:'6.6rem',color:'#8bb451'}}> <u>View Profile</u></Button> */}

                </Grid>
            </Grid>
        </Grid>


        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={3.5}>
                <img src="./images/chief_patrons/Group-153.png" alt="LoginImage" style={{ height: "22vh",marginTop:'2rem' }}/>
                </Grid>

                <Grid item xs={7} mt={4}>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'4rem'}}>Mr. Arun Balakrishnan</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Founder Chairman & Independent Director. HPCL-</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'7rem'}}>Mittal Energy Ltd.</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'1.3rem'}}> Former CMD, Hindustan Petroleum Corporation </Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'8.5rem'}}>Ltd. HPCL</Typography>
                    <ArunBalakrishnan/>
                </Grid>
            </Grid>
        </Grid>


        <Grid item xs={2}></Grid>

        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={4}>
                <img src="./images/chief_patrons/Mask-group-10.png" alt="LoginImage" style={{ height: "22vh",marginTop:'4rem' }}/>
                </Grid>

                <Grid item xs={7} mt={8}>
                    <Typography style={{fontSize:'1.2rem',marginLeft:'5rem',fontWeight:'600'}}>Prof. S Raghunath</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Strategic Alliance & Strategic Leadership at IIM- B</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'3.5rem'}}>India Chapter Chairperson –</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2rem'}}>Academy of International Business (AIB)</Typography>
                    <SRaghunath/>
                    {/* <Button style={{textTransform:'capitalize',marginLeft:'7.3rem',color:'#8bb451'}}> <u>View Profile</u></Button> */}

                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={5}>
            <Grid container>
                <Grid item xs={3.5}>
                    <img src="./images/chief_patrons/Mask-group-11.png" alt="LoginImage" style={{ height: "22vh",marginTop:'4rem' }}/>
                </Grid>
                <Grid item xs={7} mt={8}>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'2rem'}}>Dr. Kalpana Gopalan IAS, PGPPM-</Typography>
                    <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'7rem'}}>IIMB, Ph.D.- IIMB</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2rem'}}>Former Additional Chief Secretary Government of</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'9.5rem'}}>Karnataka.</Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'6rem'}}> Chairperson & Dean (Academic) </Typography>
                    <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'5rem'}}>Padmavathy Centre for Public Policy</Typography>
                    <KalpanaGopalan/>
                    {/* <Button style={{textTransform:'capitalize',marginLeft:'7.8rem',color:'#8bb451'}}> <u>View Profile</u></Button> */}
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={2}></Grid>

<Grid item xs={5}>
    <Grid container>
        <Grid item xs={4}>
        <img src="./images/chief_patrons/A9ji5qtc_9t2ab5_k30-1.png" alt="LoginImage" style={{ height: "22vh",marginTop:'4rem',borderRadius:'17px' }}/>
        </Grid>

        <Grid item xs={7} mt={8}>
            <Typography style={{fontSize:'1.2rem',marginLeft:'7rem',fontWeight:'600'}}>Mr. Prasanna</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Consultant, Arbitrator, Mediator  - The Chambers</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'0.9rem'}}>Former Group General Counsel of the Aditya Birla</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'9rem'}}>Group</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'1.7rem'}}>Former Chief Legal Officer of Larsen & Toubro</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'9rem'}}>Limited.</Typography>
            <Prassanna/>
            {/* <Button style={{textTransform:'capitalize',marginLeft:'7.3rem',color:'#8bb451'}}> <u>View Profile</u></Button> */}

        </Grid>
    </Grid>
</Grid>

<Grid item xs={5}>
    <Grid container>
        <Grid item xs={3.5}>
            <img src="./images/chief_patrons/Mask-group-12.png" alt="LoginImage" style={{ height: "22vh",marginTop:'4rem' }}/>
        </Grid>
        <Grid item xs={7} mt={8}>
            <Typography style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'6rem'}}>Mr. T.V. Mohan</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'2rem'}}>Country Head & MD at Andreas Maier Gmbh –</Typography>
            <Typography style={{fontSize:'0.8rem',fontWeight:'bold',marginLeft:'9.5rem'}}>India</Typography>
            <TVMohan/>
            {/* <Button style={{textTransform:'capitalize',marginLeft:'7.8rem',color:'#8bb451'}}> <u>View Profile</u></Button> */}
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
