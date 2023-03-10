import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import Captions from "../../components/Captions";
import Seat from "../../components/Seat";

export default function SeatsPage({ setSuccessPage }) {
  const navigate = useNavigate();

  const { idSessao } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [seats, setSeats] = useState([]);

  const [ids, setIds] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const [assentos, setAssentos] = useState([]);

  function arrayAssentos(op, id, assento) {
    if (op === 1) {
      setIds([...ids, id]);
      setAssentos([...assentos, assento]);
    } else {
      const index = ids.indexOf(id);
      const newIds = ids.slice(0, index).concat(ids.slice(index + 1));
      setIds([...newIds]);

      const index2 = assentos.indexOf(assento);
      const newAssentos = assentos
        .slice(0, index2)
        .concat(assentos.slice(index2 + 1));
      setAssentos([...newAssentos]);
    }
  }

  function fazReserva(e) {
    e.preventDefault();
    if (ids.length === 0) {
      alert("Escolha pelo menos um assento");
      return;
    }
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      { ids: ids, name: name, cpf: cpf }
    );
    promise.then(() => finalizaReserva());
    promise.catch((err) => alert(err.response.data));
  }

  function finalizaReserva() {
    setSuccessPage(
      {
        title: movieInfo.movie.title,
        date: movieInfo.day.date,
        time: movieInfo.name,
      },
      assentos,
      { name: name, cpf: cpf }
    );
    navigate("/sucesso");
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      setMovieInfo(response.data);
      setSeats(response.data.seats);
    });
  }, []);

  if (seats.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            name={seat.name}
            isAvailable={seat.isAvailable}
            arrayAssentos={arrayAssentos}
          />
        ))}
      </SeatsContainer>
      <Captions />
      <FormContainer>
        <form onSubmit={fazReserva}>
          <label for="nomeCliente">Nome do comprador:</label>
          <input
            required
            data-test="client-name"
            id="nomeCliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome..."
          />
          <label for="cpfCliente">CPF do comprador:</label>
          <input
            required
            data-test="client-cpf"
            id="cpfCliente"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF..."
          />
          <button type="submit" data-test="book-seat-btn">
            Reservar assento(s)
          </button>
        </form>
      </FormContainer>
      <FooterContainer data-test="footer">
        <div>
          <img src={movieInfo.movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{movieInfo.movie.title}</p>
          <p>
            {movieInfo.day.weekday} - {movieInfo.name}
          </p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Tilt Warp", cursive;
  font-size: 20px;
  text-align: center;
  color: #002966;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainer = styled.div`
  form {
    width: calc(100vw - 40px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
      align-self: center;
      cursor: pointer;
      background-color: #002966;
      font-family: "Tilt Warp", cursive;
      color: #e8833a;
    }
    input {
      width: calc(100vw - 60px);
      font-family: "Tilt Warp", cursive;
    }
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
