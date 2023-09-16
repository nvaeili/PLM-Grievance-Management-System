import React, {useEffect } from 'react'
import {
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import GrievanceChart from './GrievanceChart';
import GrievanceChart2 from './GrievanceChart2';
import GrievanceChart3 from './GrievanceChart3';
import Historylist from '../table/Historylist';



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

    <Paper elevation={3} sx={{p:3, gridColumn:'1/5', gridRow: '1'}}>
      <GrievanceChart/>
    </Paper>

    <Paper elevation={3} sx={{p:3, gridColumn:'5/9', gridRow: '1'}}>
      <GrievanceChart2/>
    </Paper> 

    <Paper elevation={3} sx={{p:3, gridColumn:'9/13', gridRow: '1'}}>
      <GrievanceChart3/>
    </Paper> 

    {/* TABLE */}
    <Paper elevation = {3} sx={{p:3, gridColumn: '1/13', gridRow: '2/ span 3'}}>
      <Historylist/>
    </Paper> 
  </Box> 

  </>


  )
}

export default Main;