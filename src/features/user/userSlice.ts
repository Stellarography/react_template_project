import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  interests: string;
}

const initialState: UserState = {
  interests: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInterests: (state, action: PayloadAction<string>) => {
      state.interests = action.payload;
    },
  },
});

export const { setInterests } = userSlice.actions;

export default userSlice.reducer;