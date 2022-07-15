import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/header/header"
import BlockImg from "../components/BlockImg/BlockImg"
import BlockPresentation from "../components/blockPresentation/blockPresentation"

export default function Home() {
  return (
    <>
     <Head>
        <title>Estudio Valiente</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <BlockImg />
    <BlockPresentation />
    </>
  )
}
