import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Ken from './ken'



export default function Home() {



  const data = ""


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="col-lg-4">test1</div>
      <div className="col-lg-4">test2</div>
      <div className="col-lg-4">test3</div>
      <div className="col-lg-4">test4</div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 22222222<a href="https://nextjs.org">jungle!</a>
        </h1>


      <Ken text="Hello" testset="123123"></Ken>









      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
