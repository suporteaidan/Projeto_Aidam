import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from '../../utils/enums/CategoriesEnums'

type FilterState = {
  term?: string
  value?: enums.MarketSector
}

const initialState: FilterState = {
  term:'',
}

const productSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.value = action.payload.value
      state.value = action.payload.value
    }
  }
})

export const {changeTerm, changeFilter} = productSlice.actions

export default productSlice.reducer
