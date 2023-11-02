import styled from "styled-components";
import DrawerComponent from "./Drawer"
import Button from "../Button";
import { useNavigate } from "react-router-dom";



const Header = () =>{

    let navigate = useNavigate();

    return(
        <HeaderContainer>
            <div>
                <h2>CryptoTracker<span style={{color:'var(--blue)'}}>.</span></h2>
            </div>
            <div className="links">
                <div onClick={()=> navigate('/')}>Home</div>
                <div onClick={()=> navigate('/compare')}>Compare</div>
                <Button  text={'Dashboard'} onClickFunc={()=> navigate('/dashboard')} outlined={false}/>
            </div>
            <div className="drawer">
                <DrawerComponent />
            </div>
        </HeaderContainer>

    )
}

export default Header;

let HeaderContainer = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: var(--black);
    box-shadow: 5px 5px 10px rgba(3, 18, 41, 0.5);
    .drawer{
        display: none;
    }
    .links{
        display: flex;
        gap: 1rem;
        align-items: center;
        color: var(--grey);
        font-weight: 600;
        font-size: 0.8rem;
        div:hover{
            color: var(--white);
            transition: all 0.3s;
            cursor: pointer;
        }
    }
    @media only screen and (max-width:800px){
        .links{
            display: none;
        }
        .drawer{
            display: block;
        }
        padding: 1rem 1.4rem;
        h2{
            font-size: 1.3rem;
        }
    }
`