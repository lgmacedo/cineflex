import styled from "styled-components";
import Movie from "../../components/Movie";

export default function HomePage() {
  const movies = [
    {
      src: "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      src: "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg",
    },
    {
      src: "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg",
    },
  ];
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((filme) => (
          <Movie imagemPoster={filme.src} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
