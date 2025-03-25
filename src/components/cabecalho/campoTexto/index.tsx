import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CampoTextoEstilizado = styled.input`
  height: 5vh;
  border-radius: 10px;
  border: 2px solid #c084fc;
  background-color: transparent;
  width: 25vw;
  padding: 0 40px 0 10px; /* Adiciona espaço à direita para o ícone */
  color: white;
  font-family: "Gand-regular", sans-serif;

`;

const IconePesquisa = styled.img`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default function CampoTexto() {
  return (
    <Container>
      <CampoTextoEstilizado placeholder="O que você procura ?" name="busca" type="text" />
      <IconePesquisa src="/imagens/search.png" alt="Buscar" />
    </Container>
  );
}
