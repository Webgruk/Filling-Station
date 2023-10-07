import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
}

const appSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export default appSlice.reducer

export const { setMode } = appSlice.actions
