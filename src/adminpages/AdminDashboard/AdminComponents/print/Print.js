import React, {useEffect} from 'react'

const Print = ({setSelectedLink, link}) => {
  useEffect(() => {
    setSelectedLink(link)
  }, []);
  
  return (
    <div>Print</div>
  )
}

export default Print;