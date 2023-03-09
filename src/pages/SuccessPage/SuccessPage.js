import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage({ reservation, resetSuccessPage }) {
  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{reservation.movie.title}</p>
        <p>
          {reservation.movie.date} {reservation.movie.time}
        </p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {reservation.tickets.map((seat) => (
          <p key={seat}>Assento {seat}</p>
        ))}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {reservation.client.name}</p>
        <p>CPF: {reservation.client.cpf}</p>
      </TextContainer>

      <button data-test="go-home-btn" onClick={resetSuccessPage}>
        <Link to="/">Voltar para Home</Link>
      </button>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Tilt Warp', cursive;
  font-size: 20px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
    color: #E8833A;
  }
  button {
    margin-top: 50px;
    font-family: 'Tilt Warp', cursive;
    background-color: #002966;;
  }
  h1 {
    font-family: 'Tilt Warp', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #008000;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
    color: #002966;
  }
`;
