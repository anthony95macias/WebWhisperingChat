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
              src="eye_chat_logo.png" 
              alt="eye_chat_logo" 
              width={"30px"} 
              height={"30px"} 
              />
              <Typography sx={{
                  display : {md: "block", sm: "none", xs: "none"}, 
                  mr: "auto", 
                  fontWeight: "800", 
                  textShadow: "2px 2px 2px #000",
              }}>
                <span style={{fontSize: "20px"}}>Web</span>WhisperingChat
              </Typography>
        </Link> 
    </div>
  )
}

export default Logo
