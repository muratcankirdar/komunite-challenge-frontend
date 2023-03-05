// Next
import Head from 'next/head'

// Components
import HomeTemplate from "@/components/templates/home"

// Types
import type { NextPage } from 'next'

type Props = {}

const Home: NextPage = ({}:Props) => {
  return (
    <>
      <Head>
        <title>Komünite Challange Front-End</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home