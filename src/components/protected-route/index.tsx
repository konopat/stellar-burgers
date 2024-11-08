import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useSelector } from 'src/services/store';
import {
  isAuthCheckedSelector,
  userDataSelector
} from '../../services/selectors';
import { Preloader } from '../ui/preloader';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
};

export const ProtectedRoute = ({ onlyUnAuth }: ProtectedRouteProps) => {
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(userDataSelector);
  const location = useLocation();

  // Показываю прелоадер, пока идет проверка статуса авторизации
  if (!isAuthChecked) {
    return <Preloader />;
  }

  // Если маршрут защищенный (onlyUnAuth отсутствует или false) и пользователь не авторизован
  if (!onlyUnAuth && !user) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  }

  // Если маршрут доступен только для неавторизованных (onlyUnAuth=true) и пользователь уже авторизован
  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  // Рендерю <Outlet /> для отображения вложенных маршрутов
  return <Outlet />;
};
