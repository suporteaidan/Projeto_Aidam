import { Produto } from '../../types/Produtos'
import { Card, Image, Info, Title, Price, Market, UpdateInfo } from './styles'

type Props = {
  produto: Produto
}

const ProductCard = ({ produto }: Props) => {
  return (
    <Card>
      <Image src={produto.imagem} />
      <Info>
        <Title>{produto.nome}</Title>
        <Price>R$ {produto.preco.toFixed(2)}</Price>
        <Market>
          {produto.mercado} • {produto.cidade}, {produto.estado}
        </Market>
        <UpdateInfo>Última atualização: {produto.data}</UpdateInfo>
      </Info>
    </Card>
  )
}

export default ProductCard

