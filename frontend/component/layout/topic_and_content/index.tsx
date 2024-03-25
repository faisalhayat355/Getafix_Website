import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from 'react-material-ui-carousel';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const TopicContent = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <>
    <Box>
      <Grid container >
      <Grid item xs={6} style={{marginLeft:'25rem',marginTop:'1rem'}} >
                <Typography style={{background:'#1e2a5e',textAlign:'center',color:'white',fontSize:'1.5rem',borderRadius:'8px',marginTop:'1rem',padding:'0.6rem',fontWeight:'bold'}}>Topics and Content - Directorial Disha e-magazine</Typography>   
        </Grid>
      </Grid>
    </Box>
    <Box mt={1.1}>
        <Grid container style={{height:'80vh'}}>
            <div style={{width:'100%',marginTop:'0.1rem'}}>
                <Carousel>
                    <img src="./images/carousel/5.png" alt="image error" style={{ height: "79.7vh",width:'200vh' }}/>
                    <img src="./images/carousel/6.png" alt="image error" style={{ height: "79.7vh",width:'200vh' }}/>
                    <img src="./images/carousel/7.png" alt="image error" style={{ height: "79.7vh",width:'200vh' }}/>
                    <img src="./images/carousel/8.png" alt="image error" style={{ height: "79.7vh",width:'200vh' }}/>
                </Carousel>
            </div>
        </Grid>
      </Box>




   
    </>
  );
};

export default TopicContent;
