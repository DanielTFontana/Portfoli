//É o arquivo que irá carregar po padrão para todas as páginas
// por isso passamos o css e o layout
import React from "react";
import "../styles/globals.css"
import Layout from "./components/layout";

const myApp = ({Component, pageProps}) => {
    return (
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default myApp