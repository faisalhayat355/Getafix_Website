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
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:'12px',
  p: 4,

};

const KalpanaGopalan = () => {
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
                <Typography style={{color:'#1e2a5e',fontSize:'1.7rem',fontWeight:'bold'}}>Dr. Kalpana Gopalan IAS, PGPPM-IIMB, Ph.D.- IIMB</Typography>
            </Grid>
            <Grid item xs={0.5}>
                <IconButton onClick={handleClose}>
                <CloseIcon/>
                </IconButton>
            </Grid>
           </Grid>
            <div style={{height:'60vh',overflowY:"scroll"}}>
            <Typography id="transition-modal-description" sx={{ mt: 2,textAlign:'justify',fontSize:'1.1rem',padding:'1rem' }}>
                Dr. Kalpana Gopalan IAS is a composite public policy professional. Practitioner, policy- maker, scholar, author, volunteer and mother, she wears many hats. She secured the 20 th rank in the All India Combined Civil Service Examination, 1987. Her 31-year work experience in the Indian Administrative Service spans land administration, urban management, public distribution system, rural development, training and education. She was former Additional Chief Secretary, Youth Empowerment & Sports. Dr.Kalpana is recipient of the Mother Theresa Women Empowerment Award 2019 for “outstanding contribution to excellence in leadership”. She was felicitated and awarded citations by the Rajiv Gandhi University of Health Sciences (2019), WeLEED-Empowering Women’s Growth (2019), Ramaiah Institute of Technology (2019), Honorary Consul, Republic of Maldives (2015) and Institution of Engineers of India (2013) for her “outstanding service to society”, “excellence in leadership” “outstanding contribution to women’s education and empowerment” “outstanding leadership and contribution to youth empowerment and education” and “contribution to society”. She stewarded the NLM-UNESCO 2000 award for Karnataka with her work in literacy and the Karnataka Ratna award 2013 for Cauvery Handicrafts. She is Advisor to the Bangalore City Corporation and consultant to the Administrative Training Institute, Mysore.
                Kalpana combines a unique mix of academic and practical experience. She honed her research skills with a Doctorate and Masters in public policy from IIM Bangalore. She was rated among the "top two percent of doctoral candidates in the past decade” for her research on infrastructure public private partnerships. A gold medallist and university topper in her undergraduate and master’s, she was Visiting Fellow at McGill and Concordia Universities in Canada; EU fellow in the University of Salerno in Italy; Chevening scholar, Institute of Development Studies, UK; and Maxwell Public Policy scholar in Syracuse University, USA. She trained in Evidence for Policy Design in the Centre for International Development, Harvard University, USA and in E-Governance strategy in the London School of Economics, UK. She was twice selected as a SA-YSSP scholar by the University of the Free State, Bloemfontein, South Africa and the International Institute for Applied Systems Analysis. She presents papers in national and international fora and has published three books and many journal articles. She is a sought after speaker and has delivered over 200 talks on different aspects of public policy to national and global audiences.
                Kalpana pursues her academic interests as Senior Research Fellow in the National Institute of Urban Affairs, New Delhi; Visiting Faculty/Fellow in the Institute of Social & Economic Change, Bangalore; Indian Institute of Science, Bangalore; Indian Institute of Management, Bangalore; Acharya Bangalore B-School; and Kuvempu Rural University, Shimoga. She is Member, Advisory Committee, Public Sector Advisory, Grant Thornton LLP; Member, Advisory Board, AIMS School of Business, Bangalore; Member, Academic Council, Mahatma Gandhi Kashi Vidyapith , Varanasi,; and Member, MDP Advisory Committee, Presidency University, Bangalore, India.
            </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
        </div>
  )
};

export default KalpanaGopalan;
