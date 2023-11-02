import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

:root {
  --white: #fff;
  --black: #111;
  --blue: #3a80e9;
  --grey: #888;
  --darkgrey: #1b1b1b;
  --green: #61c96f;
  --red: #f94141;
}


html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
  overflow-x: hidden;
}

::selection {
  background-color: var(--blue);
  color: var(--white);
}

::-webkit-scrollbar {
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: 10px;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

a {
  text-decoration: none;
  color: var(--white) !important;
}


//Grid Component styles
         .coin-img{
            width: 2.8rem;
            height: 2.8rem;
        }

//list-components styles
.list-coins{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}           


//cursor

.cursor {
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  background-color: var(--blue);
  z-index: 10000;
  border: 2px solid var(--blue);
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  transition: all 200ms ease-out;
}

.cursor-pointer {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  background-color: transparent;
  z-index: 10000;
  border: 2px solid var(--blue);
  height: 2rem;
  width: 2rem;
  transition: all 400ms ease-out;
}

@media only screen and (max-width: 600px) {
  .cursor-pointer,
  .cursor {
    display: none;
  }
}

//wrapper
.grey-wrapper,.grey-wrapper-list{
  background-color: var(--darkgrey);
  padding:0.7rem 1rem;
  border-radius: 1rem;

}
.grey-wrapper-list{
  padding: 0.5rem;
}
`