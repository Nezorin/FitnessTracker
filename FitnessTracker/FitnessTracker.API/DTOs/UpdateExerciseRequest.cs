namespace FitnessTracker.API.DTOs
{
    public record UpdateExerciseRequest
    (
        string Name,
        string? Description
    );
}
