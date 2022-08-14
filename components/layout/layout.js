import { Fragment } from 'react';
import Head from 'next/head'
import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events about everything"
        />
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
