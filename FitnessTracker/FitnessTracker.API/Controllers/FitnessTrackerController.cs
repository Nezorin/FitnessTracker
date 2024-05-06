using FitnessTracker.DAL;
using FitnessTracker.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FitnessTracker.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class FitnessTrackerController : ControllerBase
    {
        private readonly FitnessTrackerContext _context;

        public FitnessTrackerController(FitnessTrackerContext context)
        {
            _context = context;
        }
        [HttpGet(Name = "GetExercises")]
        public async Task<IEnumerable<Exercise>> GetExercises()
        {
            return await _context.Exercises.ToListAsync();
        }

        [HttpPost(Name = "AddExercise")]
        public async Task<IActionResult> AddExercise(string name)
        {
            Exercise exercise = new()
            {
                Name = name,
            };
            await _context.Exercises.AddAsync(exercise);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
