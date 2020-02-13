import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../layouts/layout';
import Button from '../components/btn'

const Home = () => {
  return (
    <Layout>
      <p>Portfolio 2019 !</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
        <Button color=""/>
    </Layout>

  );
};

export default Home;