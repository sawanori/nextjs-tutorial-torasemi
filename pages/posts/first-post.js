import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
const FirstPost = () => {
  return (
    <>
    <Layout>
    <Head>
      <title>のんたんファースト</title>
    </Head>
    <h1>
      FirstPost
    </h1>
    <h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </h2>
    </Layout>
    </>
  )
}

export default FirstPost