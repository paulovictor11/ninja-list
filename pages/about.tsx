import { NextPage } from "next";

import Head from 'next/head';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae fugit ad id laudantium, dolorem perferendis quaerat voluptates aut cupiditate in quod ipsam magnam sequi nisi alias praesentium harum ducimus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae fugit ad id laudantium, dolorem perferendis quaerat voluptates aut cupiditate in quod ipsam magnam sequi nisi alias praesentium harum ducimus!</p>
            </div>
        </>
    );
}

export default About;