import styled from "styled-components";
import Captions from "../../components/Captions";
import Seat from "../../components/Seat";

export default function SeatsPage() {
  const seats = [
    {
      id: 10001,
      name: "1",
      isAvailable: false,
    },
    {
      id: 10002,
      name: "2",
      isAvailable: true,
    },
    {
      id: 10003,
      name: "3",
      isAvailable: true,
    },
    {
      id: 10004,
      name: "4",
      isAvailable: true,
    },
    {
      id: 10005,
      name: "5",
      isAvailable: true,
    },
    {
      id: 10006,
      name: "6",
      isAvailable: true,
    },
    {
      id: 10007,
      name: "7",
      isAvailable: true,
    },
    {
      id: 10008,
      name: "8",
      isAvailable: true,
    },
  ];
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.map((seat) => (
          <Seat name={seat.name} isAvailable={seat.isAvailable} />
        ))}
      </SeatsContainer>
      <Captions />
      <FormContainer>
        Nome do Comprador:
        <input placeholder="Digite seu nome..." />
        CPF do Comprador:
        <input placeholder="Digite seu CPF..." />
        <button>Reservar Assento(s)</button>
      </FormContainer>
      <FooterContainer>
        <div>
          <img
            src={
              "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"
            }
            alt="poster"
          />
        </div>
        <div>
          <p>Tudo em todo lugar ao mesmo tempo</p>
          <p>Sexta - 14h00</p>
        </div>
      </FooterContainer>
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
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
    cursor: pointer;
  }
  input {
    width: calc(100vw - 60px);
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
      padding: 8px;
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
