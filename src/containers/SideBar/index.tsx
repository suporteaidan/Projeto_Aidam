import { useDispatch, useSelector } from "react-redux"
import CardFilter from "../../components/CardFilter"
import { categories } from "../../components/Categories"
import { Drawer, Field, Filters, Hamburger, StyledLink, } from "./styles"
import { RootReducer } from "../../store"
import { changeFilter, changeTerm } from "../../store/reducers/CardFilter"
import back from "../../assets/icons/icons8-esquerda-50.png"
import { useState } from "react"



const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const {term} = useSelector((state: RootReducer) => state.filter)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTerm(event.target.value))
    dispatch(changeFilter({ value: undefined }))
  }

  return (
    <>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
      <Drawer isOpen={isOpen}>
        <StyledLink to="/">
          <img src={back} alt="seta de voltar" />
        </StyledLink>
        <Field
          type="text"
          placeholder="Buscar produto"
          value={term}
          onChange={handleInputChange}
        />
        <Filters>
          {categories.map((item, index) => (
            <CardFilter
              key={index}
              icon={item.icon}
              subtitles={item.subtitles}
              value={item.value}
            />
          ))}
        </Filters>
      </Drawer>
    </>
  )
}

export default SideBar
