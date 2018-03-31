import Home from '../containers/Home';
import Chain from '../containers/Chain';
import Transaction from '../containers/Transaction';
import Block from '../containers/Block';
import Notfound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/chain/:chain',
    name: 'chain',
    exact: true,
    component: Chain,
  },
  {
    path: '/chain/:chain/transaction/:hash',
    name: 'transaction',
    exact: true,
    component: Transaction,
  },
  {
    path: '/chain/:chain/block/:hash',
    name: 'transaction',
    exact: true,
    component: Block,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
