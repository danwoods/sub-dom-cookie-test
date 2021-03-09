import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

function getCookieValue(name) {
  const nameString = name + '='

  const value = document.cookie.split(';').filter((item) => {
    return item.includes(nameString)
  })

  if (value.length) {
    return value[0].substring(nameString.length, value[0].length)
  } else {
    return ''
  }
}

export default function Home() {
  if (typeof window !== 'undefined') {
    console.log('HOST: ', window.location.host)
  }
  const [val, setVal] = useState('')

  const saveToCookie = () => {
    console.log('SAVING TO COOKIE: ', window.location.host, val)
    document.cookie = `${window.location.host}=${val}; domain=danwoodson.com`
  }
  const getFromCookie = () => {
    const from =
      window.location.host === 'cookie-test-a.danwoodson.com'
        ? 'cookie-test-b.danwoodson.com'
        : 'cookie-test-a.danwoodson.com'
    console.log(`Getting cookie value from: ${from}`)
    console.log(`Cookies: ${document.cookie}`)
    return getCookieValue(from)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={saveToCookie}>{'Save to cookie'}</button>
        {typeof window !== 'undefined' ? (
          <div>{`Current value of other: ${getFromCookie()}`}</div>
        ) : null}

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
