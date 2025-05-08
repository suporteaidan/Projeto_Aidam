import carne from '../../assets/icons/icons8-carne-48.png'
import hortifruti from '../../assets/icons/icons8-fruits-and-vegetables-64.png'
import laticínios from '../../assets/icons/icons8-leite-32.png'
import pao from '../../assets/icons/icons8-pão-96.png'
import suco from '../../assets/icons/icons8-suco-64.png'
import basicos from '../../assets/icons/icons8-ingredientes-100.png'
import congelados from '../../assets/icons/icons8-inverno-48.png'
import doces from '../../assets/icons/icons8-brigadeiro-48.png'
import limpeza from '../../assets/icons/icons8-serviço-de-limpeza-94.png'
import higiene from '../../assets/icons/icons8-banho-64.png'
import bebe from '../../assets/icons/icons8-carrinho-de-bebê-80.png'
import petShop from '../../assets/icons/icons8-animais-de-estimação-50.png'
import mercearia from '../../assets/icons/icons8-canned-food-64.png'
import cerveja from '../../assets/icons/icons8-cerveja-50.png'
import naturais from '../../assets/icons/icons8-broto-80.png'
import outros from '../../assets/icons/icons8-loja-94.png'
import { MarketSector } from '../../utils/enums/CategoriesEnums'

export const categories = [
  { icon: hortifruti, subtitles: 'Hortifruti', value: MarketSector.Hortifruti },
  { icon: carne, subtitles: 'Carnes', value: MarketSector.Carnes },
  { icon: laticínios, subtitles: 'Frios e Laticínios', value: MarketSector.FriosELaticinios },
  { icon: pao, subtitles: 'Padaria e Confeitaria', value: MarketSector.PadariaEConfeitaria },
  { icon: suco, subtitles: 'Bebidas não Alcóolicas', value: MarketSector.BebidasNaoAlcoolicas },
  { icon: basicos, subtitles: 'Alimentos Básicos', value: MarketSector.AlimentosBasicos },
  { icon: congelados, subtitles: 'Congelados', value: MarketSector.Congelados },
  { icon: doces, subtitles: 'Doces e Snacks', value: MarketSector.DocesESnacks },
  { icon: limpeza, subtitles: 'Produtos de Limpeza', value: MarketSector.ProdutosDeLimpeza },
  { icon: higiene, subtitles: 'Higiene e Beleza', value: MarketSector.HigieneEBeleza },
  { icon: bebe, subtitles: 'Bebê e Infantil', value: MarketSector.BebeEInfantil },
  { icon: petShop, subtitles: 'Pet Shop', value: MarketSector.PetShop },
  { icon: mercearia, subtitles: 'Mercearia', value: MarketSector.Mercearia },
  { icon: cerveja, subtitles: 'Bebidas Alcóolicas', value: MarketSector.BebidasAlcoolicas },
  { icon: naturais, subtitles: 'Saudáveis e Naturais', value: MarketSector.SaudaveisENaturais },
  { icon: outros, subtitles: 'Outros', value: MarketSector.Outros }
]
