"use client"
import { CheckBox } from '@mui/icons-material'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';


const CorporateLeaders = () => {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}} mt={2}>
            <img src="./images/Group-1.png" style={{height:'8.5vh',width:'10vh'}}/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}} mt={2}>
            <img src="./images/Picture1111.png" style={{height:'22.5vh',width:'60vh'}}/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} mt={3}>
            <Typography style={{fontSize:'1rem',background:'#1e2a5e',width:"40rem",textAlign:'center',height:'3rem',display:'flex',alignItems:'center',justifyContent:'space-around',color:'white'}}>Networking Forum for Business Alliance</Typography>
            </Grid>

           <Grid container style={{display:'flex',alignItems:'flex-end'}} spacing={13}>
           <Grid item xs={6} style={{display:'flex',justifyContent:'flex-end'}} mt={3}>
           <Link href="/corporate-leaders/membership" style={{ textDecoration: "none" }}>
            <Button variant='contained' style={{width:'35vh',height:'7vh',fontSize:'1.4rem',textTransform:'capitalize',fontWeight:'bold',background:'#1e2a5e',borderRadius:'10px'}}>Membership</Button>
            </Link>
            </Grid>
            
            <Grid item xs={4}>
            <Button variant='contained' style={{width:'35vh',height:'7vh',fontSize:'1.4rem',textTransform:'capitalize',fontWeight:'bold',background:'#1e2a5e',borderRadius:'10px'}}>Events</Button>
            </Grid>
           </Grid>
        </Grid>



        <Box mt={4}>
        <Grid container style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'55vh'}}>
        <Grid item xs={2}></Grid>

        <Grid item xs={9} style={{marginTop:'1rem'}} >
            <Typography style={{textAlign:'center',background:'#1e2a5e',color:'white',fontSize:'1.2rem',marginTop:'1rem',padding:'0.6rem'}}>Roundtable is a unique opportunity to network with your peers and is specifically created with you in mind!</Typography>   
        </Grid>
          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           About Us:
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           The Director’s Roundtable (DRT) is a distinguished group benefiting the broad community and members.
           </Typography>
           </Grid>
           
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           The DRT organizes corporate governance symposiumsfor directors and their advisors& members. We create programs for corporate directors to discuss their issues and concerns with other business leaders and distinguished experts.
           </Typography>
           </Grid>
           
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           It has created as the leading forum for Directors to discuss their concerns with peers and distinguished experts. The challenging topics focus on key developments, regulations, and pragmatic solutions directly impacting their company and their roles.
           </Typography>
           </Grid>
           
          </Grid>

        </Grid>
        </Box>


        <Box mt={4}>
        <Grid container style={{background: "white",height:'65vh'}}>
        <Grid item xs={2}></Grid>

        <Grid item xs={9} style={{marginTop:'1rem'}} >
            <Typography style={{textAlign:'center',background:'#1e2a5e',color:'white',fontSize:'1.2rem',marginTop:'1rem',padding:'0.6rem'}}>Focus</Typography>   
        </Grid>
          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           A Trusted Source for Leadership Resources
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           As a result of our commitment to holding spaces for research and dialogue, we are able to serve as a principle source for leadership related resources —programs, content and service. Through our global, regional, and topical conferences, books, webinars, and emerging digital offerings, we generate and disseminate new research, knowledge, and practices that address issues of interest to our members and the corporate & legal community at large.
           </Typography>
           </Grid>
           
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           Cultivating a Thriving Global Leadership Community
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           The principal means by which our mission is achieved is through a thriving comprehensive leadership network of individuals currently working in every sector, discipline, and profession across the globe with a deep commitment to the exercise of leadership that will shape a better future for all.
           </Typography>
           </Grid>
           
          </Grid>



        </Grid>
        </Box>



        <Box mt={4}>
        <Grid container style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'70vh'}}>
        <Grid item xs={2}></Grid>

        <Grid item xs={9} style={{marginTop:'1rem'}} >
            <Typography style={{textAlign:'center',background:'#1e2a5e',color:'white',fontSize:'1.2rem',marginTop:'1rem',padding:'0.6rem'}}>Our Values</Typography>   
        </Grid>
          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           Inclusion
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           We foster and promote diversity, equity, and leadership.
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           Integrity
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           We advance the field of leadership with meticulous and evidence-based research and practices.
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           Impact
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           We focus on leadership impact for the greater good and for a better world.
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#1e2a5e'}}>
           Innovation
           </Typography>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           We amplify new ideas and models of leadership for individuals, organizations, and communities to flourish globally.
           </Typography>
           </Grid>
          </Grid>

        </Grid>
        </Box>

        <Box mt={4}>
        <Grid container style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'70vh'}}>
        <Grid item xs={2}></Grid>

        <Grid item xs={9} style={{marginTop:'1rem'}} >
            <Typography style={{textAlign:'center',background:'#1e2a5e',color:'white',fontSize:'1.2rem',marginTop:'1rem',padding:'0.6rem'}}>Our Objectives Include</Typography>   
        </Grid>
          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#1e2a5e'}}>
           <li>DRT Collaboration among membership to strengthen and pave out way to accomplish our mission through the synergy that occurs by bringing together our members and partners; collectively having a multiplier impact on leadership and change. Our members and partners are at the forefront, inspiring new thinking and shaping the greater good of individuals and communities.</li>
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#1e2a5e'}}>
           <li>DRT is a Corporate Platform to build up professional strength by sharing best practices and experiences among our peers. In the spirit of offering continuing professional development opportunities for our members,</li>
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#1e2a5e'}}>
           <li>DRT will provide a venue to share the successes and challenges, experiences, ideas, and common practices.</li>
           </Typography>
           </Grid>
          </Grid>

          <Grid container mt={4}>
          <Grid item xs={2}></Grid>
           <Grid item xs={9}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#1e2a5e'}}>
           <li>The DRT is conceived as a place “where participants come to talk with each other about the ethical situations they confront at work, how they think them through, and how to balance conscience, law, corporate culture, and the bottom line.”</li>
           </Typography>
           </Grid>
          </Grid>

        </Grid>
        </Box>


            <Grid container mt={5}>
                <Grid item xs={12}>
                    <Typography style={{color:'#1e2a5e',textAlign:'center',fontSize:'2.2rem',fontWeight:'bold'}}>For Queries and Subscription</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{color:'#1e2a5e',textAlign:'center',fontSize:'2.2rem',fontWeight:'bold'}}>Write to us</Typography>
                </Grid>
            </Grid>


            <Grid container mt={5} spacing={4}>
                <Grid item xs={1.5}></Grid>
               <Grid item xs={3}>
               <TextField id="standard-basic" label="First Name" variant="standard" fullWidth size='small' />
               </Grid>
               <Grid item xs={3}>
               <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth size='small' />
               </Grid>
               <Grid item xs={3}>
               <TextField id="standard-basic" label="Contact no." variant="standard" fullWidth size='small' />
               </Grid>
               
            </Grid>

            <Grid container>
                <Grid item xs={1.5}></Grid>
               <Grid item xs={9}>
               <TextField id="standard-basic" label="Email" variant="standard" fullWidth size='small' />
               </Grid>
            </Grid>

            <Grid container mt={2}>
               <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
              <Button variant='contained' style={{background:'#87b14b',textTransform:'capitalize',width:'14%',fontSize:'1.1rem',fontWeight:'bold'}}>Submit</Button>
               </Grid>
            </Grid>

            
            <Grid container mt={5}>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={9}>
                    <Typography style={{color:'#1e2a5e',textAlign:'center',fontSize:'1.4rem',fontWeight:'bold'}}>Become part of the network of purposeful leaders transforming lives and helping our planet and communities thrive</Typography>
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

export default CorporateLeaders
