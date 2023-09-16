import React, {useEffect } from 'react'
import {
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import GrievanceChart from '../main/GrievanceChart';
import GrievanceChart2 from '../main/GrievanceChart2';
import GrievanceChart3 from '../main/GrievanceChart3';

const Main = ({setSelectedLink, link}) => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)")

  useEffect(() => {
    setSelectedLink(link)
  }, []);
  
  return (
    <>
   <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      gridTemplateColumns: 'repeat(12,1fr)',
      gridAutoRows: 'minmax(50px, auto)',
      gap: 3,
      textAlign: 'center',
      flexDirection: 'column',
    }}
  > 
     {/*PIE GRAPHS*/}

    <Paper elevation={3} sx={{p:3, gridColumn:'1/13', gridRow: '1'}}>
      <GrievanceChart/>
    </Paper>

    <Paper elevation={3} sx={{p:3, gridColumn:'1/13', gridRow: '2'}}>
      <GrievanceChart2/>
    </Paper> 

    <Paper elevation={3} sx={{p:3, gridColumn:'1/13', gridRow: '3'}}>
      <GrievanceChart3/>
    </Paper> 

  </Box> 

  </>


  )
}

export default Main;