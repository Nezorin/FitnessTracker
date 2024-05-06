using AutoMapper;
using FitnessTracker.API.DTOs;
using FitnessTracker.DAL.Models;

namespace FitnessTracker.API.MapperProfiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Exercise, ExerciseResponse>();
        }
    }
}
