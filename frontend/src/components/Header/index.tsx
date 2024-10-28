import { HeaderContainer, HeaderDiv, HeaderLogo, NavMenu } from "./styles";
import Logo from "../../assets/Logo.png";
import { ButtonContainer } from "../Button/Button";
export function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <HeaderLogo src={Logo} />
        <NavMenu>
          <ButtonContainer label = 'Lajeado,RS' />
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}
