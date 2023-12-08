import styled from "styled-components";
import Menu from "./Menu";
function Cabecalho() {
  return (
    <header>
      <h1>Olá React!😆</h1>
      <hr />
      <StyledCabecalho>
        <Menu />
      </StyledCabecalho>
    </header>
  );
}

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

export default Cabecalho;
