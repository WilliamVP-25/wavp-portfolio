import React, {Fragment} from 'react';
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
    return (
        <Fragment>
            <Head>
                <title>Portafolio William Viteri</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="William Viteri Pinchao - Personal Portfolio Website"/>
                <meta name="keywords"
                      content="portfolio, cv, personal, development, full stack, developer, react, js"/>
                <meta name="author" content="William Viteri"/>

                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

                <link rel="stylesheet" href="/css/index.css"/>
            </Head>
            <div id="all">
                <main style={{width: '100%'}}>
                    <Header/>
                    {props.children}
                </main>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Layout;