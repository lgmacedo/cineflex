import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import Session from "../../components/Session";

export default function SessionsPage({setGoBack}) {
  setGoBack(true);

  const { idFilme } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setMovieInfo(response.data);
      setSessions(response.data.days);
    });
  }, []);

  if (sessions.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <PageContainer>
      Selecione o horário
      <div>
        {sessions.map((session) => (
          <Session
            key={session.id}
            weekday={session.weekday}
            date={session.date}
            showtimes={session.showtimes}
          />
        ))}
      </div>
      <FooterContainer data-test="footer">
        <div>
          <img src={movieInfo.posterURL} alt="poster" />
        </div>
        <div>
          <p>{movieInfo.title}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Tilt Warp', cursive;
  font-size: 20px;
  text-align: center;
  color: #002966;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      border-radius: 3px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
