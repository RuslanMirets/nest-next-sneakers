import { NextPage } from 'next';
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';

const Favorites: NextPage = () => {
  return (
    <MainLayout title="Избранное">
      <div className="container">Favorites</div>
    </MainLayout>
  );
};

export default Favorites;
