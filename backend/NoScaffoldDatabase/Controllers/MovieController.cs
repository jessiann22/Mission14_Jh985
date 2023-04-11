using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoScaffoldDatabase.Data;



namespace Mission14_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        public MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var movies = context.Movies
            .Where(m => m.Edited == "Yes") 
            .OrderBy(m => m.Title); 

            return movies;
        }

    }
}
