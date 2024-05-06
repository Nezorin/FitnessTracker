import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect } from "react";

import { getExercises } from "./FetchService";
import { Exercise } from "./types/interfaces";

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      //add try catch maybe
      const fetchedExercises = await getExercises();
      setExercises(fetchedExercises);
    };
    fetchExercises();
  }, []);

  return (
    <DataTable value={exercises} tableStyle={{ minWidth: "50rem" }}>
      <Column selectionMode="multiple"></Column>
      <Column field="id" sortable header="Id"></Column>
      <Column field="name" sortable header="Name"></Column>
      <Column field="description" header="Description"></Column>
    </DataTable>
  );
}
