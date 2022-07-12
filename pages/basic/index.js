import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css'

const Basic = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Basic</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                Teste
            </main>

        </div>
    );
}

export default Basic;
