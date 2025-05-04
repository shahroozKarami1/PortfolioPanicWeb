import { Box, Button, styled } from "@mui/material";
import MainMenuBack from "/MainPage/MainBack.jpg"
export const MainMenuWrapper = styled(Box)({
    backgroundImage: `url(${MainMenuBack})`,
    backgroundPosition: "center",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    "&::after": {
        content: `""`,
        zIndex: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
        // background: "#208C8C"  
        background: "linear-gradient(92deg,rgba(32, 140, 140, 0.89) 0%, rgba(29, 29, 29, 0.75) 65%)",
        position: "absolute",
    }
})

export const MainMenuCardWrapper = styled(Box)({
    display: 'flex',
    zIndex: 1,
    gap: 5,
    padding: "2rem",
    flexDirection: 'column',
    width: "600px",
    boxShadow: " 0px 1px 15px 1px var(--white-color)",
    backgroundColor: "var(--dark-color)",

})
export const CustomButtonPlay = styled(Button)({
    padding: "0.5rem",
    borderRadius: "10px",
    color: "var(--dark-color)",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textTransform: "capitalize",
    background: "linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)"

})
export const FooterMainMenu = styled(Box)({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    boxShadow: " 0  0  0  2px  var(--secondary-color)",

})
