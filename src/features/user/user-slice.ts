import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

export interface UserState {
  isInit: boolean;
  isLoading: boolean;
  isAuthChecked: boolean; // добавляю свойство для отслеживания статуса авторизации
  user: TUser | null;
  error: string | null;
}

const initialState: UserState = {
  isInit: false,
  isLoading: false,
  isAuthChecked: false, // добавляю начальное значение false, пока проверка не завершена
  user: null,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init: (state) => {
      state.isInit = true;
    }
  },
  extraReducers: (builder) => {}
});

export const { init } = userSlice.actions;

export default userSlice.reducer;
