import { Box, Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'
import GamesIcon from '@mui/icons-material/Games';
interface HowToWinTextProps extends TypographyProps {
  text: string
}

const HowToWinText: FC<HowToWinTextProps> = ({ text }) => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}>
      <GamesIcon sx={{
        fontSize: "1.2rem",
        color: "var(--white-color)",
      }} />
      <Typography sx={{
        fontSize : '0.90rem'   , 
        color: "var(--white-color)",
      }}>
        {text}
      </Typography>
    </Box>
  )
}

export default HowToWinText