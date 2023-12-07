import Head from "next/head";
import React from "react";

const Seo = ({ title }: { title: string; description?: string }) => {
    return (
        <Head>
            <title>{title} | 3YStudio</title>
        </Head>
    );
};

export default Seo;
