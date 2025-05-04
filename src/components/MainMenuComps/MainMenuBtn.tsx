import { Box, Button, ButtonProps, Typography } from '@mui/material'
import { FC } from 'react'

interface MainMenuBtnProps extends ButtonProps {
  icon: React.ReactNode,
  text: string,
  href: string,
}

const MainMenuBtn: FC<MainMenuBtnProps> = ({ icon, text, href, sx }) => {
  return (
    <Button href={href} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform : 'lowercase' , 
      gap: 1,
      width: "100%",
      marginY : '1rem' ,  
      padding : "1rem" , 
      backgroundColor: "var(--secondary-color)",
      color: "#ffff",
      "&:hover": {
        backgroundColor: "var(--primary-color)",
      }
    }} >
      {icon}
      <Typography>{text}</Typography>
    </Button>
  )
}

export default MainMenuBtn