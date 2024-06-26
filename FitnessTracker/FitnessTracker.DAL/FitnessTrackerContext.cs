﻿using FitnessTracker.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace FitnessTracker.DAL
{
    public class FitnessTrackerContext : DbContext
    {
        public FitnessTrackerContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<WorkoutTemplate> WorkoutTemplates { get; set; }
        public DbSet<ExerciseWorkoutTemplate> ExerciseWorkoutTemplates { get; set; }

    }
}
