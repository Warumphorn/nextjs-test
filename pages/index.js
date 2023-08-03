import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Ken1 from './ken/index'
import navbar1 from './ken/navbar'





/*import navbar from './component/navbar'
/*import footer from '../component/footer'* <ken text="Hello" testset="123123"> ssssssss </ken>*/




export default function Home() {

  return (
    
  
    <Ken1/>
   
    
    
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
