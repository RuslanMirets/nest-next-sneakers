import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Header: React.FC = () => {
  const isAuth = true;

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
            {isAuth ? (
              <>
                <li>
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
                <LoginOutlinedIcon />
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
