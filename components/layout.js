import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next Fauna GraphQL CRUD</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </>
);

export default Layout;
