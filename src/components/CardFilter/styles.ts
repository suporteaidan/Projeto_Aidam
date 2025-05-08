import styled from "styled-components"
import variables from "../../styles/variables"

type Props = {
  active?: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? variables.SideBarColor2 : variables.SideBarborder1)};
  background-color: ${(props) => (props.active ? variables.SideBarBackground3 : variables.SideBarBackground1)};
  color: ${(props) => (props.active ? variables.SideBarColor2 : variables.SideBarColor1)};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`

export const Icon = styled.img`
  height: 24px;
  weight: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
