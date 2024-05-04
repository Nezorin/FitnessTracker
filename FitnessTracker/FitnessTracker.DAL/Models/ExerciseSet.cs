namespace FitnessTracker.DAL.Models
{
    public class ExerciseSet
    {
        public int Id { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
        public Exercise Exercise { get; set; }
        public int ExerciseId { get; set; }
        public WorkoutSession WorkoutSession { get; set; }
        public int WorkoutSessionId { get; set; }
    }
}
