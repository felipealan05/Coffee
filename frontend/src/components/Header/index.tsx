import { HeaderContainer, HeaderDiv, HeaderLogo, NavMenu } from "./styles";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <HeaderLogo src={Logo} />
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/entrega">Entrega</Link>
          <Link to="/trade">Trade</Link>
          <Link to="#">Settings</Link>
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}
