import styled from "styled-components"
import variables from "../../styles/variables"
import { Link } from "react-router-dom"

export const Hamburger = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  background-color: ${variables.SideBarBackground3};
  border: none;
  padding: 8px;
  font-size: 24px;
  color: ${variables.SideBarColor3};
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 730px) {
    display: none;
  }
`

export const Drawer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  padding: 16px;
  background-color: ${variables.SideBarBackground2};
  transition: left 0.3s ease;
  z-index: 9;
  overflow-y: auto;

  -webkit-overflow-scrolling: touch;

  @media (min-width: 730px) {
    left: 0;
    position: static;
    width: auto;
    height: auto;
  }
`

export const StyledLink = styled(Link)`
  img {
    padding-bottom: 12px;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  }

  @media (max-width: 730px) {
    display: flex;
    justify-content: flex-end;
    }
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`

export const Field = styled.input`
  padding: 8px;
  background-color: ${variables.SideBarBackground3};
  border-radius: 8px;
  font-weight: bold;
  color: ${variables.SideBarColor3};
  border: 1px solid ${variables.SideBarColor3};
  width: 100%;
`
