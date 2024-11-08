import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ConstructorPage, Feed } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader } from '@components';
// Ипортирую библиотеку для роутинга
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  // Создаю состояние для отслеживания авторизации пользователя (по умолчанию - не авторизован)
  const [isAuth, setIsAuth] = useState(false);

  // Получаю текущую локацию с помощью useLocation для реализации модальных окон в маршрутах, чтобы корректно отображать их поверх основной страницы.
  const location = useLocation();

  // Достаю из локации информацию о предыдущей странице (если она есть)
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <div className={styles.app}>
      {/* Включаю компонент AppHeader (шапка) для отображения на всех страницах */}
      <AppHeader />
      {/* Основной блок маршрутов */}
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
