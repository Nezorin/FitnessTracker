import { API_BASE_URL } from "../../config";
import { Exercise } from "../types/interfaces";

export async function getExercises(): Promise<Exercise[]> {
  const response = await fetch(`${API_BASE_URL}/GetExercises`);
  const data = await response.json() as Exercise[];
  return data;
}

export async function deleteExercise(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/DeleteExercise/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error('Failed to delete exercise');
  }
}

export async function createExercise(exercise: Exercise): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/AddExercise`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exercise),
  });
  if (!response.ok) {
    throw new Error('Failed to create exercise');
  }
}

export async function updateExercise(exercise: Exercise): Promise<void> {
  const response = await fetch(
    `${API_BASE_URL}/UpdateExercise/${exercise.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to update exercise');
  }
}
