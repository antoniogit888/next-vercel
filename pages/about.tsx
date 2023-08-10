import { Inter } from 'next/font/google'
import Link from 'next/link'

import { MainLayout } from "../components/layouts/MainLayout"
import { DarkLayout } from '../components/layouts/DarkLayout'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className='title'>
          {/*Ir a <a href="/">Home</a>*/}
          Ir a <Link href="/">Home</Link>
        </h1>


        <p className={'description'}>
          Get started by editing&nbsp;
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page : ReactElement){
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}