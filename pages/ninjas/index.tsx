import { NextPage } from "next";

import Link from 'next/link';

import styles from '../../styles/Ninjas.module.scss';

type Ninja = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

type NinjaProps = {
    ninjas: Ninja[]
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas: NextPage<NinjaProps> = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {
                ninjas.map((ninja: Ninja) => (
                    <Link href={ `/ninjas/${ ninja.id }` } key={ ninja.id }>
                        <a className={ styles.single }>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}

export default Ninjas;