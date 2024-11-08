import { RootState } from './store';

// Проверяет, завершена ли проверка авторизации пользователя.
export const isAuthCheckedSelector = (state: RootState) =>
  state.user.isAuthChecked;

// Возвращает данные о пользователе
export const userDataSelector = (state: RootState) => state.user.user;
