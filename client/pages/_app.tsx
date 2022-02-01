import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api/user';
import { setUserData } from '../redux/slices/user';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { authToken } = parseCookies(ctx);
    const userData = await UserApi.getProfile(authToken);
    store.dispatch(setUserData(userData));
  } catch (error) {
    console.log(error);
  }
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
    },
  };
});

export default wrapper.withRedux(App);
