import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../src/pages/Home'));
const LandingPage = lazy(() => import('../src/pages/LandingPage/LandingPage'));
const BuyTicketsPage = lazy(() => import('../src/pages/BuyTicketsPage/BuyTicketsPage'));
const WinningNumbers = lazy(() => import('../src/pages/WinningNumbers/WinningNumbers'));
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../src/pages/RegisterPage/RegisterPage'));
const ForgotPassword = lazy(() => import('../src/pages/ForgotPassword/ForgotPassword'));
const PaymentPage = lazy(() => import(`../src/pages/PaymentPage/PaymentPage`));

const App = () => (
  <>
  <BrowserRouter>
  
    <Suspense fallback={ <h1>Loading...</h1> }>
      <Switch>
        <Route path={ `${ process.env.PUBLIC_URL }/` } component={ HomePage } exact/>
        <Route path={ `${ process.env.PUBLIC_URL }/landing-page` } component={ LandingPage }/>
        <Route path={ `${ process.env.PUBLIC_URL }/buy-tickets` } component={ BuyTicketsPage }/>
        <Route path={ `${ process.env.PUBLIC_URL }/winning-numbers` } component={ WinningNumbers }/>
        <Route path={ `${ process.env.PUBLIC_URL }/login` } component={LoginPage} />
        <Route path={ `${ process.env.PUBLIC_URL }/register` } component={RegisterPage} />
        <Route path={ `/login` } component={LoginPage} />
        <Route path={ `/register` } component={RegisterPage} />
        <Route path={ `/forgot-password` } component={ForgotPassword} />
        <Route path={ `/payment-page` } component={PaymentPage} />
        <Redirect to={ `${ process.env.PUBLIC_URL }/` } component={ HomePage }/>
      </Switch>
    </Suspense>
    </BrowserRouter>
  </>
);

export default App;
