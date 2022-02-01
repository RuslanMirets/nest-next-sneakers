import type { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import { MainLayout } from '../layouts/MainLayout';
import { setUserData } from '../redux/slices/user';
import { wrapper } from '../redux/store';
import { UserApi } from '../utils/api';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">Home</div>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { authToken } = parseCookies(ctx);
      const userData = await UserApi.getProfile(authToken);

      store.dispatch(setUserData(userData));

      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  },
);
