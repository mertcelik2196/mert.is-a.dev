import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://mert.is-a.dev" />
                <meta name="twitter:title" content="Mêrt" />
                <meta name="twitter:description" content="Hello, My Name Is Mert. I'm Full-Stack Developer" />
                <meta name="twitter:image" content="https://mert.is-a.dev/logo.gif" />
                <meta name="twitter:creator" content="@Mêrt" />
                <meta name="theme-color" content="#09C29E" />
                <meta name="robots" content="follow, index" />
                <meta name="author" content="Mêrt" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mêrt#2196" />
                <meta property="og:description" content="Hello, My Name Is Mert. I'm Full-Stack Developer" />
                <meta property="og:site_name" content="Mert Çelik" />
                <meta property="og:url" content="https://mert.is-a.dev" />
                <meta property="og:image" content="https://mert.is-a.dev/logo.gif" />

                <link rel="shortcut icon" href="https://mert.is-a.dev/logo.gif" />
                <title>Mert</title>

                {/* CSS */}
                <link rel="stylesheet" href="/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/stylesheet.css" />

                {/* JS */}
                <script src="/scripts/jquery.min.js"></script>
                <script src="/scripts/bootstrap.min.js"></script>
                <script src="https://kit.fontawesome.com/f1c8ddd589.js" crossorigin="anonymous"></script>
                {/* <script src="/scripts/script.js" defer></script> */}
            </Head>

            <Component {...pageProps} />
        </>
    )
}
