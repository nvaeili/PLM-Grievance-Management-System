import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect} from 'react'
import Historylist from './Historylist';


const Table = ({setSelectedLink, link}) => {

  useEffect(() => {
    setSelectedLink(link)
  }, []);
  
  return (
    <>
      <div classname="bgcolor">
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
      <Paper elevation = {3} sx={{p:3, gridColumn: '1/13'}}>
        <Historylist/>
      </Paper> 
      </Box>
      </div>
    </>
  )
}

export default Table;

