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
        [HttpPost(Name = "AddExercise")]
        public async Task<IActionResult> AddExercise([FromBody]string name)
        {
            Exercise exercise = new()
            {
                Name = name,
            };
            await _context.Exercises.AddAsync(exercise);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet(Name = "GetExercises")]
        public async Task<IEnumerable<Exercise>> GetExercises()
        {
            return await _context.Exercises.ToListAsync();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateExerciseName(int id, string newName)
        {
            if (string.IsNullOrEmpty(newName))
            {
                return BadRequest("New name cannot be null or empty");
            }

            var exercise = await _context.Exercises.FindAsync(id);
            if (exercise == null)
            {
                return NotFound();
            }

            exercise.Name = newName;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercise(int id)
        {
            var exercise = await _context.Exercises.FindAsync(id);
            if (exercise == null)
            {
                return NotFound();
            }

            _context.Exercises.Remove(exercise);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
