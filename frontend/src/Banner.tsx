import React from 'react';

// banner function shows the pic of Joel and the nav bar

function Banner(props: any) 
{
  return (
    <>
      <div className="text-center">
        {' '}
        <h1>{props.saying}</h1>
        <br></br>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-3">
            <div className="border border-primary p-3">
              <img
                src="./Joel.jpg"
                alt="Joel"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;