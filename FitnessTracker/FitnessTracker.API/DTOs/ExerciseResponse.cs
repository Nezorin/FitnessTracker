namespace FitnessTracker.API.DTOs
{
    public record ExerciseResponse
    (
        int Id,
        string Name,
        string? Description
    );

}
