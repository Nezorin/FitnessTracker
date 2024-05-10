﻿// <auto-generated />
using FitnessTracker.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FitnessTracker.DAL.Migrations
{
    [DbContext(typeof(FitnessTrackerContext))]
    partial class FitnessTrackerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.4");

            modelBuilder.Entity("FitnessTracker.DAL.Models.Exercise", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Exercises");
                });

            modelBuilder.Entity("FitnessTracker.DAL.Models.ExerciseWorkoutTemplate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ExerciseId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("MaxReps")
                        .HasColumnType("INTEGER");

                    b.Property<int>("MinReps")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SetsNumber")
                        .HasColumnType("INTEGER");

                    b.Property<int>("WorkoutTemplateId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ExerciseId");

                    b.HasIndex("WorkoutTemplateId");

                    b.ToTable("ExerciseWorkoutTemplates");
                });

            modelBuilder.Entity("FitnessTracker.DAL.Models.WorkoutTemplate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("WorkoutTemplates");
                });

            modelBuilder.Entity("FitnessTracker.DAL.Models.ExerciseWorkoutTemplate", b =>
                {
                    b.HasOne("FitnessTracker.DAL.Models.Exercise", "Exercise")
                        .WithMany()
                        .HasForeignKey("ExerciseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FitnessTracker.DAL.Models.WorkoutTemplate", "WorkoutTemplate")
                        .WithMany()
                        .HasForeignKey("WorkoutTemplateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Exercise");

                    b.Navigation("WorkoutTemplate");
                });
#pragma warning restore 612, 618
        }
    }
}
