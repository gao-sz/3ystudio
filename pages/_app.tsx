import AOS from "aos";
import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { FirstLoadAnimation } from "../components";

import type { AppProps } from "next/app";
import Link from "next/link";

function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }));

    React.useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Head>
                <title>3YStudio软件服务</title>

                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="title" content="3YStudio软件技术，快速实验室设备专业软件开发。" />
                <meta name="description" content="3YStudio软件技术，快速实验室设备专业软件开发" />

                <link rel="icon" href="https://assets.genztechies.com/icon-coloured.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://genztechies.com/" />
                <meta property="og:title" content="3YStudio软件技术，快速实验室设备专业软件开发。" />
                <meta property="og:description" content="3YStudio软件技术，快速实验室设备专业软件开发。" />
                <meta property="og:image" content="https://genztechies.com/assets/site-metaimage.png" />

            </Head>

            <ToastContainer newestOnTop={true} pauseOnHover={false} autoClose={3000} />

            {/* <FirstLoadAnimation timeout={4000} /> */}

            {/* <QueryClientProvider client={queryClient}> */}

            <div className="flex items-center justify-center px-5 py-2 bg-gradient-to-l from-secondary via-primary to-tertiary">
                <Link href={"#"} target="_blank" className="font-semibold text-center text-white">
                    View 2023 Official News {">>"}
                </Link>
            </div>

            <Component {...pageProps} />

            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            {/* </QueryClientProvider> */}
        </>
    );
}

export default App;
