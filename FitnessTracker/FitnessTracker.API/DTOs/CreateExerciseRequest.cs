namespace FitnessTracker.API.DTOs
{
    public record CreateExerciseRequest
    (
        string Name,
        string? Description
    );
}
