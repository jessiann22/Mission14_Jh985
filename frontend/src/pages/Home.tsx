import React from 'react';
import Banner from '../Banner';
import Layout from './Layout';

// function creates the home page

function Home(props: any) 
{
  return (
    <>
      <div>
        <Layout />
        <Banner saying="Joel's Favorite Movies Coming Right Up......!" />
      </div>
    </>
  );
}

export default Home;