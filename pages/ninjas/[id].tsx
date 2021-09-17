import { NextPage } from "next";

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
    };
}

type NinjaProps = {
    ninja: Ninja
}

export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    const paths = data.map((ninja: Ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps =  async (context: any) => {
    const id = context.params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return {
        props: { ninja: data }
    };
}

const Details: NextPage<NinjaProps> = ({ ninja }) => {
    return (
        <div>
            <h1>{ ninja.name }</h1>
            
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
    );
}

export default Details;