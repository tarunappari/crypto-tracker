import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DrawerComponent = () =>{

    let [open,setOpen] = useState()

    let navigate = useNavigate()

    return(
        <DrawerContainer>
        <div onClick={()=> setOpen(true)}>
            <MenuRoundedIcon style={{color:'var(--grey)'}}/>
        </div>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
            <div className="mobile-links" style={{
                color:'var(--grey)',
                width:'30vw',
                height:'100vh',
                padding:'1rem',
                backgroundColor:'var(--black)',
                display:'flex',
                flexDirection:'column',
                gap:'1rem',
                fontWeight:'600',
                alignItems:'flex-start'
            }}>
                <div onClick={()=>navigate('/')}>Home</div>
                <div onClick={()=>navigate('/compare')}>Compare</div>
                <div onClick={()=>navigate('/dashboard')}>Dashboard</div>
            </div>
        </Drawer>
        </DrawerContainer>
    )
}

export default DrawerComponent;

let DrawerContainer = styled.div`

`