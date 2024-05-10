namespace FitnessTracker.DAL.Models
{
    public class ExerciseWorkoutTemplate
    {
        public int Id { get; set; }
        public int ExerciseId { get; set; }
        public int WorkoutTemplateId { get; set; }
        public Exercise Exercise { get; set; }
        public WorkoutTemplate WorkoutTemplate { get; set; }
        public int MinReps { get; set; }
        public int MaxReps { get; set; }
        public int SetsNumber { get; set; }
    }
}
