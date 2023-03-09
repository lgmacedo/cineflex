import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekday, date, showtimes }) {
  return (
    <SessionContainer data-test="movie-day">
      {weekday} - {date}
      <ButtonsContainer>
        {showtimes.map((time) => (
          <button data-test="showtime">
            <Link key={time.id} to={`/assentos/${time.id}`}>
              {time.name}
            </Link>
          </button>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Tilt Warp", cursive;
  font-size: 18px;
  color: #002966;
  padding: 0 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    background-color: #002966;
    margin-right: 20px;
    cursor: pointer;
  }
  a {
    font-family: "Tilt Warp", cursive;
    font-size: 18px;
    text-decoration: none;
    color: #E8833A;
  }
`;
