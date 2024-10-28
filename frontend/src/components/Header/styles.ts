import styled from "styled-components";

export const HeaderDiv = styled.div `
    width: 100%;
    background-color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.div`
  display: flex;
  padding: 32px 160px 32px 160px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  margin-left: 120px;
  width: 85px;
  height: 40px;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a``;
