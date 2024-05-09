import { API_BASE_URL } from "../../config";
import { Exercise } from "../types/interfaces";

export async function getExercises(): Promise<Exercise[]> {
  const response = await fetch(`${API_BASE_URL}/GetExercises`);
  const data = (await response.json()) as Exercise[];
  console.log(data);
  return data;
}

export async function deleteExercise(id: number): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/DeleteExercise/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export async function createExercise(exercise: Exercise): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/AddExercise`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exercise),
  });
  return response.ok;
}

export async function updateExercise(exercise: Exercise): Promise<boolean> {
  const response = await fetch(
    `${API_BASE_URL}/UpdateExercise/${exercise.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    }
  );
  return response.ok;
}
