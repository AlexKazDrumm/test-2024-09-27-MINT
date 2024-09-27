import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              marginRight: '1rem',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : '',
            })}
          >
            <Button color="inherit">Главная</Button>
          </NavLink>
          <NavLink
            to="/orgs"
            style={({ isActive }) => ({
              marginRight: '1rem',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : '',
            })}
          >
            <Button color="inherit">Организации</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;