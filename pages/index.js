import Head from "next/head";
import Image from "next/image";

import Login from "../components/Login";

export default function Home() {
    return (
        <div>
            <Head>
                <title>HULU</title>
                <meta name='description' content='Hulu ' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Login />
        </div>
    );
}
