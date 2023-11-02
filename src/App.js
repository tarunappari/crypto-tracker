import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import { useEffect } from "react";
import CoinPage from "./Pages/CoinPage";
import CoinComparePage from "./Pages/ComparePage";


function App() {

  let cursor;
  let cursorPointer;

  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "2rem"),
        (cursorPointer.style.width = "2rem")
      );
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LandingPage /> } />
            <Route path="/dashboard" element={ <DashboardPage /> } />
            <Route path="/compare"  element={ <CoinComparePage /> } />
            <Route path="/coin/:id" element={ <CoinPage />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
