import { Routes, Route } from 'react-router-dom';
import { ProtectedPage } from './components/ProtectedPage';
import CatalogPage from './views/CatalogPage';
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import ProfilePage from './views/ProfilePage';

import './layout.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/*' element={<MainPage />} />
        <Route path = '/login' element={<LoginPage />} />
        <Route path = '/catalog' element={<CatalogPage />} />
        <Route path = '/profile' element = {
          <ProtectedPage>
              <ProfilePage />
          </ProtectedPage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
