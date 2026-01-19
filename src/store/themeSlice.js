import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state){
        let current = state.mode == 'light' ? 'dark' : 'light'
        state.mode = current
        localStorage.theme = current
    },
    initTheme(state){
      let value = localStorage.theme
      if(value) {
        state.mode = value
      }
    }
  },
})

export const { toggleTheme, initTheme } = themeSlice.actions

export default themeSlice.reducer