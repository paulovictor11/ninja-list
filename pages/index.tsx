import type { NextPage } from 'next'

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={ styles.title }>Home Page</h1>
                
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus cumque, id fugiat dolores deserunt exercitationem alias enim ratione, eos quae veniam natus voluptate aliquam, omnis cum nesciunt nulla ab?</p>
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus cumque, id fugiat dolores deserunt exercitationem alias enim ratione, eos quae veniam natus voluptate aliquam, omnis cum nesciunt nulla ab?</p>

                <Link href="/ninjas">
                    <a className={ styles.btn }>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}

export default Home;
