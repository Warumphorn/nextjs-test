import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BtnSave from '../์component/button.js'
/*import navbar from "./ken/navbar"*/


import Navbar from '../component/navbar.js'
import Footer from '../component/footer.js'




/*import footer from '../component/footer'* <ken text="Hello" testset="123123"> ssssssss </ken>*/


export default function Home() {

  const data = ""

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to hello <a href="https://nextjs.org">Link Test</a>
        </h1>
      </main>
      <BtnSave btn="save"></BtnSave>
      <BtnSave btn="Edit"/>
      <Footer></Footer>
    </div>
  )



  /* const data = ""


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to hello<a href="https://nextjs.org">jungle!</a>
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
  */
}
