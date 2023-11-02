import NorthRoundedIcon from "@mui/icons-material/NorthRounded";



const BackToTop = () =>{

    let mybutton = document.getElementById("myBtn");

    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
  
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  
    return (
      <div className="top-btn" id="myBtn" onClick={() => topFunction()} style={{
        border:'0.25rem solid var(--blue)',
        borderRadius:'50%',
        padding:'0.3rem',
        color:'var(--bue)',
        zIndex:'100',
        position:'fixed',
        bottom:'3rem',
        right:'3rem'
      }}>
        <NorthRoundedIcon className="top-icon" sx={{ width:'2rem' ,height:'2rem',fontSize: "1.5rem",color:'var(--blue)',fontWeight:'900' }} />
      </div>
    );
  
}

export default BackToTop;