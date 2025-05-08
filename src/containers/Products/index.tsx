import produtos from '../../mocks/produtos'
import Product from '../../components/Product/index'
import { ContainerCard } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'


const Products = () => {
  const {term,value} = useSelector((state: RootReducer) => state.filter)

  const productFilter = () => {
    return produtos.filter((item) => {
      const matchesTerm = term
        ? item.nome.toLowerCase().includes(term.toLowerCase())
        : true

      const matchesCategory = value
        ? item.categoria === value
        : true

      return matchesTerm && matchesCategory
    })
  }

  return (
    <ContainerCard>
      {productFilter().map((produto) => (
        <Product key={produto.id} produto={produto} />
      ))}
    </ContainerCard>
  )
}

export default Products

