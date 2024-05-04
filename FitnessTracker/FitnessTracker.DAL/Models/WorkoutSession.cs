namespace FitnessTracker.DAL.Models
{
    public class WorkoutSession
    {
        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public ICollection<ExerciseSet> Sets { get; set; } = new List<ExerciseSet>();
    }
}
