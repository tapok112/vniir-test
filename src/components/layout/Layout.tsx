import { LayoutProps } from "../../types/types";

import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { signOut } from "../../redux/rootReducer";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";

const Layout: React.FC<LayoutProps> = ({children, loading, error}) => {
  const nav = [
    {
      path: '/catalog',
      text: 'Каталог',
    },
    {
      path: '/profile',
      text: 'Профиль',
    }
  ]

  const isAuth = useAppSelector(state => state.isAuth);
  const dispatch = useAppDispatch();

  const page = useLocation();

  const handleChangeIsAuth = () => {
    dispatch(signOut());
  }

  return (
    <div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <Navbar className="mb-3" bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to={'/'}>
            <img src="/images/logo.png"
                 alt="Logo"
                 width="30"
                 height="24"
                 className="d-inline-block align-text-top mx-2" />
            Белка 35
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {nav.map(item => (
                <Nav.Link href={item.path}>{item.text}</Nav.Link>
              ))}

              {(page.pathname !== '/login') && (
                <form className="container-fluid justify-content-end">
                  {isAuth ? (
                    <Button className="float-end"
                            variant="outline-danger"
                            onClick={() => handleChangeIsAuth()}
                            type="button">
                              Выход
                    </Button>
                  ) : (
                    <Link className="float-end btn btn-outline-success me-2"
                          to='/login'>
                            Вход
                    </Link>
                  )}
                </form>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {loading ? (
        <div className="spinner-border text-light mx-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container">
          {children}
        </div>
      )}
    </div>
  )
};
export default Layout;