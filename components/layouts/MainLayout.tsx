import Head from "next/head";
import { Navbar } from "../Navbar";

import styles from "./MainLayout.module.css";
import { FC } from "react";
import React, { PropsWithChildren } from 'react';

type Props = {};

export const MainLayout:FC<PropsWithChildren<Props>> = ({children}) => {
    return (
        <div>
          <Head>
            <title>Home - Antonio</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
    
              { children }
            
          </main>
        </div>
      )
}
