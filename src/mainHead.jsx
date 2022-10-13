import {Helmet} from "react-helmet";

const MainHeadApp  = () => {
    return (
        <Helmet>
              <meta charSet="utf-8" />
                <title>Recipe App</title>
                {/* <link rel="icon" type="image/svg+xml" href="./images/favicon.svg" />
                <link rel="icon" type="image/png" href="./images/favicon.png" /> */}
                <link rel="shortcut icon" href="../public/favicon.png" /> 
                <link rel="icon" type="image/svg+xml" href="../public/favicon.svg" />
        </Helmet>
    )
}

export default MainHeadApp