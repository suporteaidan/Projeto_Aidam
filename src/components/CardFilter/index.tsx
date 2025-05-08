import { useDispatch, useSelector } from "react-redux"
import { MarketSector } from "../../utils/enums/CategoriesEnums"
import { Card, Icon, Label } from "./styles"
import { RootReducer } from "../../store"
import { changeFilter } from "../../store/reducers/CardFilter"


export type Props = {
  subtitles: string
  icon: string
  value?: MarketSector
}

const CardFilter = ({subtitles,icon, value}: Props) => {
  const dispatch = useDispatch()
  const {filter} = useSelector((state: RootReducer) => state)

  const checkButton = () => {
    return filter.value === value
  }

  const filterDispatch = () => {
    dispatch(changeFilter({
      value
    }))
  }

  const active = checkButton()

  return (
    <Card active={active} onClick={filterDispatch}>
      <Icon src={icon} alt={icon} />
      <Label>{subtitles}</Label>
    </Card>
  )
}

export default CardFilter
