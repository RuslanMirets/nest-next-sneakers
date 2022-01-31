import { Drawer } from '@mui/material';
import React from 'react';
import { ButtonClose } from '../buttons/ButtonClose/ButtonClose';
import { Button } from '../buttons/ButtonGreenArrowRight';
import { ButtonRemove } from '../buttons/ButtonRemove/ButtonRemove';
import styles from './Drawer.module.scss';

interface DrawerCartProps {
  open: boolean;
  onClose: () => void;
}

export const DrawerCart: React.FC<DrawerCartProps> = ({ open, onClose }) => {
  return (
    <Drawer classes={{ paper: styles.paper }} anchor="right" open={open} onClose={onClose}>
      <div className={styles.body}>
        <div className={styles.head}>
          <h2>Корзина</h2>
          <div className={styles.closeBtn} onClick={onClose}>
            <ButtonClose></ButtonClose>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src="/static/01.jpg" alt="Sneakers" />
            <div className={styles.info}>
              <div className={styles.name}>Мужские Кроссовки Nike Air Max 270</div>
              <div className={styles.price}>12 999 руб.</div>
            </div>
            <ButtonRemove />
          </div>
          <div className={styles.item}>
            <img src="/static/02.jpg" alt="Sneakers" />
            <div className={styles.info}>
              <div className={styles.name}>Мужские Кроссовки Nike Air Max 270</div>
              <div className={styles.price}>12 999 руб.</div>
            </div>
            <ButtonRemove />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.total}>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </div>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </Drawer>
  );
};
