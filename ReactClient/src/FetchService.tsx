import { API_BASE_URL } from "../config";
import { Exercise } from "./types/interfaces";

export async function getExercises(): Promise<Exercise[]> {
  const response = await fetch(`${API_BASE_URL}/GetExercises`);
  const data = (await response.json()) as Exercise[];
  console.log(data);
  return data;
}
