import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../rest/api";

type ResponseToken = {
  Token: string
}

interface UserPayload {
  username: string,
  password: string
}

interface StateData {
  Token: string,
  isAuth: boolean,
  error: string | null,
}

export const auth = createAsyncThunk<ResponseToken, UserPayload, { rejectValue: string }>(
  'user/auth',
  async ({ username, password }, { rejectWithValue }) => {
    const response = await api.auth(username, password);
    if(response.ok) {
      return response.data as ResponseToken
    } return rejectWithValue("Имя пользователя или пароль введены не верно")
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    Token: '',
    isAuth: false,
    error: null,
  } as StateData,
  reducers: {
    signOut(state) {
      state.Token = '';
      state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.error = null;
        state.isAuth = true;
        state.Token = action.payload.Token;
      })
      .addCase(auth.rejected, (state, action) => {
        if(action.payload) {
          state.error = action.payload;
        }
      });
  },
})

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
