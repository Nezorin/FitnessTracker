using FitnessTracker.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace FitnessTracker.DAL
{
    public class FitnessTrackerContext : DbContext
    {
        public FitnessTrackerContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<ExerciseSet> ExerciseSets { get; set; }
        public DbSet<WorkoutSession> WorkoutSessions { get; set; }

    }
}
