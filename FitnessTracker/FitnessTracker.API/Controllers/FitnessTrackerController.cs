using AutoMapper;
using FitnessTracker.API.DTOs;
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
        private readonly IMapper _mapper;

        public FitnessTrackerController(FitnessTrackerContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpPost(Name = "AddExercise")]
        public async Task<IActionResult> AddExercise(CreateExerciseRequest request)
        {
            var newExercise = _mapper.Map<Exercise>(request);
            await _context.Exercises.AddAsync(newExercise);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet(Name = "GetExercises")]
        public async Task<IEnumerable<ExerciseResponse>> GetExercises()
        {
            return _mapper.Map<IEnumerable<ExerciseResponse>>(await _context.Exercises.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExercise([FromRoute]int id, UpdateExerciseRequest request)
        {
            var entitytoUpdate = await _context.Exercises.FindAsync(id);
            if (entitytoUpdate == null)
            {
                return NotFound();
            }

            entitytoUpdate.Name = request.Name;
            entitytoUpdate.Description = request.Description;
            _context.Entry(entitytoUpdate).State = EntityState.Modified;
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
