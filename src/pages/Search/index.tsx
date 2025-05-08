import Products from "../../containers/Products"
import SideBar from "../../containers/SideBar"
import GlobalStyle, { Container } from "../../styles/styles"

const Search = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Products />
      </Container>
    </>
  )
}

export default Search
