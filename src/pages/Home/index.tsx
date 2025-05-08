import {
  AuthLink,
  Button,
  Buttons,
  Container,
  Description,
  Footer,
  Header,
  Main
} from './styles'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Header>
        <AuthLink href="#">Login</AuthLink>
        <AuthLink href="#">Cadastro</AuthLink>
      </Header>

      <Main>
        <Buttons>
          <Link to="/Search">
            <Button>Conferir Preços</Button>
          </Link>
          <Link to="/escanear">
            <Button>Escanear Cupom</Button>
          </Link>
        </Buttons>

        <Description>
          Nosso objetivo é ajudar você a economizar! Escaneie seus cupons
          fiscais e alimente nosso banco de dados colaborativo com os preços
          dos produtos do mercado. Com isso, todos podem encontrar as melhores
          ofertas da região.
        </Description>
      </Main>

      <Footer>
        Contato: contato@meuprojeto.com | Instagram: @meuprojeto | © 2025
      </Footer>
    </Container>
  )
}

export default Home
