import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

const home = ({ results }) => {
    return (
        <div>
            <Head>
                <title>HULU</title>
                <meta name='description' content='Hulu' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {/* Header */}
            <Header />
            {/* Navbar */}
            <Navbar />
            {/* Results */}
            <Results results={results} />
        </div>
    );
};

export default home;

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    try {
        const request = await fetch(
            `https://api.themoviedb.org/3${
                requests[genre]?.url || requests.fetchTreanding?.url
            }`,
        ).then((res) => res.json());

        return {
            props: {
                results: request,
            },
        };
    } catch (err) {
        console.error(err);
    }
    return {
        props: {
            results: [],
        },
    };
}
