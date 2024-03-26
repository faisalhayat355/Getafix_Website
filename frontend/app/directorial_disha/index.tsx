"use client"
import { CheckBox } from '@mui/icons-material'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const DirectorialDisha = () => {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}} mt={2}>
            <img src="./images/Group-177380-e1705916608525-300x65.png" style={{height:'8vh',width:'35vh'}}/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} mt={3}>
            <Typography style={{fontSize:'1rem',background:'#1e2a5e',width:"40rem",textAlign:'center',height:'3rem',display:'flex',alignItems:'center',justifyContent:'space-around',color:'white'}}>‘An e-magazine With Governance Insights for tomorrow’s leaders’</Typography>
            </Grid>
        </Grid>

        <Grid container spacing={4} mt={2}>
            <Grid item xs={1.5}></Grid>
            <Grid item lg={4.7} xs={12}>
                <Paper style={{padding:'1rem',border:'1px solid #1e2a5e',borderRadius:'10px'}} variant="outlined">
                <Typography style={{fontSize:'2rem',fontWeight:'bold',color:'#1e2a5e'}}>Subscribe to Our Content</Typography>
                
                <Typography mt={4}>Email address *</Typography>
                <TextField fullWidth size='small'/>

                <Typography mt={1}>A link to set a new password will be sent to your email address.</Typography>
                <Typography mt={4}>Phone *</Typography>
                <TextField fullWidth size='small'/>
                <Typography mt={1} style={{fontSize:'0.85rem',textAlign:'justify'}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span style={{color:'blue'}}>privacy policy.</span></Typography>
                
                <Button variant='contained' size="large" style={{background:'#1e2a5e',color:'white',textTransform:'capitalize',marginTop:'2rem',fontWeight:'bold'}}>Register</Button>
                </Paper>
            </Grid>

            <Grid item lg={4.7} xs={12}>
                <Paper style={{padding:'1rem',border:'1px solid #1e2a5e',borderRadius:'10px'}} variant="outlined">
                <Typography style={{fontSize:'2rem',fontWeight:'bold',color:'#1e2a5e'}}>Already Subscribed?</Typography>
                
                <Typography mt={4}>Enter your registered phone No.</Typography>
                <TextField fullWidth size='small'/>
                <Grid style={{display:'flex',alignItems:'baseline'}}>
                    <input type='checkbox'/>
                    <Typography fontWeight={'bold'} color={"#1e2a5e"}>Remember me</Typography>
                    <Button variant='contained' size="large" style={{marginLeft:'1rem',background:'#1e2a5e',color:'white',textTransform:'capitalize',marginTop:'2rem',fontWeight:'bold'}}>Login with OTP</Button>
                </Grid>
                </Paper>
            </Grid>
        </Grid>


        <Grid container style={{background:'#1e2a5e',padding:'1rem',alignItems:'center'}} mt={2}>
            <Grid item lg={2.5}>
                <Typography color={"white"} style={{textAlign:'center',fontWeight:'bold'}}>Our Technology Partner:</Typography>
            </Grid>
            <Grid item lg={2.5} style={{textAlign:'center'}}>
            <img src="./images/getafix.png" style={{height:'5vh',width:'19vh'}}/>
            </Grid>
            <Grid item lg={5}>
            <Typography color={"white"} style={{textAlign:'center',fontWeight:'bold',fontSize:'1.7rem'}}>Directorial Advisors</Typography>
            </Grid>
            <Grid item lg={2} style={{display:'flex',alignItems:'center'}}>
            <Typography color={"white"} style={{textAlign:'center',fontWeight:'bold',marginRight:'1rem'}}>Visitors:</Typography>
            <img src="./images/footer/visitors/0.gif"/>
            <img src="./images/footer/visitors/0.gif"/>
            <img src="./images/footer/visitors/0.gif"/>
            <img src="./images/footer/visitors/7.gif"/>
            <img src="./images/footer/visitors/7.gif"/>
            <img src="./images/footer/visitors/7.gif"/>
            </Grid>
        </Grid>




        <Grid container>
            <Grid item xs={1.5}></Grid>
            <Grid item lg={4.5} xs={12}>
                <Grid container mt={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1.4rem"} fontWeight={"bold"} color={"#1e2a5e"}>Reach Us</Typography>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex',alignItems:'center'}} mt={2}>
                        <Grid container>
                        <Grid item xs={1}>
                        <CallOutlinedIcon style={{fontSize:'1.7rem',color:'#48527C'}}/>
                        </Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>+91 9066055044,</Typography>
                       </Grid>
                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>+91 9066055044,</Typography>
                       </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex',alignItems:'center'}} mt={2}>
                    <EmailOutlinedIcon style={{fontSize:'1.7rem',color:'#48527C'}}/>
                        <Typography  fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} marginLeft={"1rem"}>ceo@directorialadvisors.com</Typography>
                    </Grid>

                    <Grid item xs={12} style={{display:'flex',alignItems:'center'}} mt={2}>
                        <Grid container>
                        <Grid item xs={1}>
                        <LocationOnOutlinedIcon style={{fontSize:'1.7rem',color:'#48527C'}}/>
                        </Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>Corporate Identity Number :</Typography>
                       </Grid>
                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>U70200KA2023OPC180359</Typography>
                       </Grid>


                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>Address: OYO WORKSPACES INDIA PRIVATE</Typography>
                       </Grid>

                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>LIMITED Ranka Junction, AH45, Krishna Reddy</Typography>
                       </Grid>

                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>Industrial Estate, Dooravani Nagar, Bengaluru,</Typography>
                       </Grid>

                       <Grid item xs={1}></Grid>
                       <Grid item xs={11}>
                       <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"}>KA, 560016</Typography>
                       </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
            <Grid item lg={3} xs={12}>
            <Grid container mt={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1.4rem"} fontWeight={"bold"} color={"#1e2a5e"}>Quick Links</Typography>
                    </Grid>

                <Grid item xs={1}></Grid>
                    <Grid item lg={12} xs={11}>
                        <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} mt={2}>Home</Typography>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item lg={12} xs={11}>
                        <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} mt={2}>Contact Us</Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item lg={3} xs={12}>
            <Grid container mt={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1.4rem"} fontWeight={"bold"} color={"#1e2a5e"}>Quick Links</Typography>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={11} lg={12}>
                        <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} mt={2}>Privacy Policy</Typography>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item lg={12} xs={11}>
                        <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} mt={2}>Terms and Conditions</Typography>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={11} lg={12}>
                        <Typography fontSize={"1rem"} fontWeight={"bold"} color={"#1e2a5e"} mt={2}>Disclaimer</Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        
        <Grid container style={{background:'#1e2a5e',padding:'0.4rem',alignItems:'center'}} mt={2}>
            <Grid item lg={12}>
                <Typography color={"white"} style={{textAlign:'center',fontSize:'0.8rem'}}>Copyright © 2024 Directorial Advisors</Typography>
            </Grid>
        </Grid>
     
    </Box>

  )
}

export default DirectorialDisha
