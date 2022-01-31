import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { DrawerCart } from '../Drawer';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [authDialogOpen, setAuthDialogOpen] = React.useState(false);
  const toggleAuthDialog = () => {
    setAuthDialogOpen(!authDialogOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link href="/">
            <a>
              <img src="/static/logo.svg" alt="Logo" />
            </a>
          </Link>
          <ul className={styles.actions}>
            {userData ? (
              <>
                <li onClick={toggleDrawer}>
                  <LocalMallOutlinedIcon />
                  1205 руб.
                </li>
                <li>
                  <Link href="/favorites">
                    <a>
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <a>
                      <AccountCircleOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  <LogoutOutlinedIcon />
                </li>
              </>
            ) : (
              <>
                <li onClick={toggleAuthDialog}>
                  <LoginOutlinedIcon />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <DrawerCart open={drawerOpen} onClose={toggleDrawer} />
      <AuthDialog open={authDialogOpen} onClose={toggleAuthDialog} />
    </header>
  );
};
