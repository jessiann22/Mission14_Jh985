import data from '../MovieData.json';
import Layout from './Layout';

// function to show all the moooooovies
const mds = data.MovieDataList;

function MovieList() 
{
  return (
    <>
      <div>
        <Layout />
        <div>
          <h1 className="text-center">Joel's Movie Collection</h1>
          <br></br>
        </div>
        <div className="container text-center">
          <table className="table align-self-center table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {mds.map((m) => (
                <tr key={m.Title}>
                  <td style={{ backgroundColor: '#f0fff0' }}>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td style={{ backgroundColor: '#f0fff0' }}>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td style={{ backgroundColor: '#f0fff0' }}>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
