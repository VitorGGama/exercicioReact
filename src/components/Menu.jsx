/* Menu.jsx*/
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/samba">Samba</NavLink>
      <NavLink to="/rock">Rock</NavLink>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .active {
    background-color: white;
    color: black;
  }

  a {
    color: #020202;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
    /*& -> referencia ao seletor pai */
    &:hover {
      background-color: pink;
      color: black;
    }
  }
`;
export default Menu;
