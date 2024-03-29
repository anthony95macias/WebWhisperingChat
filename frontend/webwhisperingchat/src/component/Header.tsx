import { AppBar, Toolbar } from '@mui/material'
import Logo from "../component/shared/Logo"

const Header = () => {
  return (
    <AppBar sx ={{
        bgcolor: "transparent",
        position: "static",
        boxShadow: "none",
        
    }}>
        <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Logo />
        </Toolbar>
    </AppBar>
  )
}

export default Header
