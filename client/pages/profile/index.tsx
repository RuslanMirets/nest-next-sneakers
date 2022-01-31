import { NextPage } from 'next';
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';

const Profile: NextPage = () => {
  return (
    <MainLayout title="Профиль">
      <div className="container">Profile</div>
    </MainLayout>
  );
};

export default Profile;
