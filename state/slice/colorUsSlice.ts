import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  color: "",
}

export const colorUsSlice = createSlice({
  name: "colorUs",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const { changeColor } = colorUsSlice.actions

export default colorUsSlice.reducer
