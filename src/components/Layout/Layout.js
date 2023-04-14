import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav } from './Layout.Styled';

const setActive = ({ isActive }) =>
  isActive ? { color: 'blue' } : { color: 'black' };

export const Layout = () => {
  return (
    <>
      <Header>
        <div>
          <Nav>
            <NavLink to="/" style={setActive}>
              Home
            </NavLink>
            <NavLink to="movies" style={setActive}>
              Movies
            </NavLink>
          </Nav>
        </div>
      </Header>
      <main>
        <div>
          <Suspense fallback={<span>Loading</span>}>
            {/* Сюди будуть рендеритись всі вкладені в Layout компонени, див App */}
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
