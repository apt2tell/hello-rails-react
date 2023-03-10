import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// Define the async thunk
export const getMessages = createAsyncThunk('messages/getMessages', async () => {
  let data;
  const response = await fetch('http://127.0.0.1:3000/api/random')
  .then((resp) => resp.json()).then((response) => {
    data = response
  })
  .catch(error => error)
  return data;
});



// Define the slice
const messagesSlice = createSlice({
  name: 'messages',
  initialState: {text: null},
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMessages.fulfilled, (state, action) => {
      state.text = action.payload.message;
    } )
  }
})

export default messagesSlice.reducer;