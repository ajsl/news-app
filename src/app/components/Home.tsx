import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
     <Fragment>
         <h1>Home page</h1>
         <Link to={"/articles"}>Click to go to the articles</Link>
         {/* <button as={Link} to="/articles">Click to go to the articles</button> */}
     </Fragment>
    )
}

export default Home;
