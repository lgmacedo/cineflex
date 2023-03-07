import styled from "styled-components";

export default function Captions() {
  return (
    <CaptionContainer>
      <CaptionItem>
        <CaptionCircle status="selecionado"/>
        Selecionado
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle status="disponivel"/>
        Disponível
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle status="indisponivel"/>
        Indisponível
      </CaptionItem>
    </CaptionContainer>
  );
}

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: ${({status})=>status === "selecionado" ? "1px solid #0E7D71" : status==="disponivel" ? "1px solid #7B8B99" : "1px solid #F7C52B"};
  background-color: ${({status})=>status === "selecionado" ? "#1AAE9E" : status==="disponivel" ? "#C3CFD9" : "#FBE192"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
