import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
    }}>
        <Link to={"/"}>
            <img 
              className="Image-Inverted" 
              src="/eye_chat_logo.png" 
              alt="eye_chat_logo" 
              width={"50px"} 
              height={"50px"} 
              />
        </Link> 
        <Typography sx={{
                  display : {lg: "block", md: "block", sm: "none", xs: "none"}, 
                  mr: "auto", 
                  fontWeight: "800", 
                  textShadow: "2px 2px 2px #000",
                  color: "white", // Add this line to set the text color
              }}>
                <span>Web</span>WhisperingChat
          </Typography>
    </div>
  )
}

export default Logo
