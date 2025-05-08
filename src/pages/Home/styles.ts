import styled from 'styled-components'
import colors from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Header = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.HeaderBackground};
  gap: 1rem;
`

export const AuthLink = styled.a`
  text-decoration: none;
  color: ${colors.LinkColor};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  background-color: ${colors.LinkColor};
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${colors.LinkHover};
  }
`

export const Description = styled.p`
  max-width: 600px;
  text-align: center;
  color: ${colors.TextColor};
  font-size: 1rem;
`

export const Footer = styled.footer`
  background-color: ${colors.HeaderBackground};
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: ${colors.FooterColor};
`
