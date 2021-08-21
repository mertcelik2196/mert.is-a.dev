import Head from "next/head";


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://mert.vercel.app/" />
                <meta name="twitter:title" content="Mêrt" />
                <meta name="twitter:description" content="Hello, My Name Is Mert. I'm Full-Stack Developer" />
                <meta name="twitter:image" content="https://mert.vercel.app/logo.gif" />
                <meta name="twitter:creator" content="@Mêrt" />
                <meta name="theme-color" content="#09C29E" />
                <meta name="robots" content="follow, index" />
                <meta name="author" content="Mêrt" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mêrt" />
                <meta property="og:description" content="Hello, My Name Is Mert. I'm Full-Stack Developer" />
                <meta property="og:site_name" content="Mert Çelik" />
                <meta property="og:url" content="https://mert.vercel.app/" />
                <meta property="og:image" content="https://mert.vercel.app/logo.gif" />

                <link rel="shortcut icon" href="https://mert.vercel.app/logo.gif" />
                <title>
                    Mert
                </title>

                {/* CSS */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
                <link rel="stylesheet" href="/css/index.css" />

                {/* JS */}
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
            </Head>

            <Component {...pageProps} />
        </>
    )
}
