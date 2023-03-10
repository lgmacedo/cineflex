import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

import { IoArrowBack } from "react-icons/io5";

export default function App() {
  const [reservation, setReservation] = useState({});

  const [goBack, setGoBack] = useState(false);
  const navigate = useNavigate();

  function setSuccessPage(movie, tickets, client) {
    setReservation({ movie, tickets, client });
  }

  function resetSuccessPage() {
    setReservation({});
  }

  return (
    <>
      <NavContainer goBack={goBack}>
        <IoArrowBack
          data-test="go-home-header-btn"
          onClick={() => navigate(-1)}
        />
        <Link to="/">CINEFLEX</Link>
      </NavContainer>
      <Routes>
        <Route path="/" element={<HomePage setGoBack={setGoBack} />} />
        <Route
          path="/sessoes/:idFilme"
          element={<SessionsPage setGoBack={setGoBack} />}
        />
        <Route
          path="/assentos/:idSessao"
          element={
            <SeatsPage setSuccessPage={setSuccessPage} setGoBack={setGoBack} />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SuccessPage
              reservation={reservation}
              resetSuccessPage={resetSuccessPage}
              setGoBack={setGoBack}
            />
          }
        />
      </Routes>
    </>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #002966;
  font-family: "Tilt Warp", cursive;
  font-size: 50px;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 4px 2px #0000001a;
  a {
    text-decoration: none;
    color: #e8833a;
    cursor: pointer;
  }
  svg {
    display: ${({ goBack }) => (goBack ? "" : "none")};
    position: absolute;
    left: 20px;
    cursor: pointer;
    background: none;
    font-size: 30px;
    color: #e8833a;
  }
`;

/*   ponto de parada  */
