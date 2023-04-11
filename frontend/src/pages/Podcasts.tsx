import React from 'react';
import Layout from './Layout';

function Bacon(props: any) {
  return (
    <>
      <div className="text-center">
        <Layout />
        <h1>Podcasts</h1>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <a
              href="https://baconsale.com"
              className="btn btn-outline-success btn-lg btn-block"
            >
              Visit The Bacon Sale Podcast Page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bacon;
