import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect, useRef } from "react";
import {
  createExercise,
  deleteExercise,
  getExercises,
  updateExercise,
} from "../api/FetchService";
import { Exercise } from "../types/interfaces";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import "../styles/ExercisesPage.css";

export default function ExercisesPage() {
  let emptyExercise: Exercise = {
    id: 0,
    name: "",
    description: undefined,
  };

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState<Exercise>(emptyExercise);
  const [exerciseDialog, setExerciseDialog] = useState(false);
  const [globalFilter, setGlobalFilter] = useState<string>();
  const [isEditMode, setIsEditMode] = useState<boolean>();
  const toast = useRef<Toast>(null);

  const fetchExercises = async () => {
    const fetchedExercises = await getExercises();
    setExercises(fetchedExercises);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const addExercise = () => {
    setIsEditMode(false);
    setExerciseDialog(true);
  };

  const hideDialog = () => {
    setNewExercise(emptyExercise);
    setExerciseDialog(false);
  };

  const handleDeleteClick = async (id: number) => {
    const result = await deleteExercise(id);
    if (result) {
      setExercises(exercises.filter((exercise) => exercise.id !== id));
    } else {
      toast.current!.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to delete exercise",
      });
    }
  };

  const handleEditClick = async (exercise: Exercise) => {
    setIsEditMode(true);
    setNewExercise(exercise);
    setExerciseDialog(true);
  };

  //TODO add generic parameter for exercise property
  const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = (e.target && e.target.value) || "";
    let _temp = { ...newExercise };
    _temp.name = val;

    setNewExercise(_temp);
  };
  const onDescriptionInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = (e.target && e.target.value) || "";
    let _temp = { ...newExercise };
    _temp.description = val;

    setNewExercise(_temp);
  };

  const saveExercise = () => {
    setExerciseDialog(false);
    if (isEditMode) {
      updateExistingExercise();
    } else {
      createNewExercise();
    }
    setNewExercise(emptyExercise);
  };

  const createNewExercise = async () => {
    const result = await createExercise(newExercise!);
    if (result) {
      fetchExercises();
    } else {
      toast.current!.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to add exercise",
      });
    }
  };

  const updateExistingExercise = async () => {
    const result = await updateExercise(newExercise!);
    if (result) {
      fetchExercises();
    } else {
      toast.current!.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to add exercise",
      });
    }
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Manage Exercises</h5>
      <span className="p-input-icon-left">
        {/* <i className="pi pi-search" /> */}
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const exerciseDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveExercise}
      />
    </React.Fragment>
  );

  const actionBodyTemplate = (rowData: Exercise) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => handleEditClick(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => handleDeleteClick(rowData.id)}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="datatable-exercises">
      <Toast ref={toast} />
      <Button
        label="New"
        icon="pi pi-plus"
        className="p-button-success mr-2"
        onClick={addExercise}
      />
      <DataTable
        value={exercises}
        tableStyle={{ minWidth: "50rem" }}
        resizableColumns
        columnResizeMode="fit"
        showGridlines
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        globalFilter={globalFilter}
        header={header}
      >
        <Column field="id" sortable header="Id"></Column>
        <Column field="name" sortable header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column
          header="Actions"
          body={actionBodyTemplate}
          style={{ minWidth: "8rem" }}
        ></Column>
      </DataTable>

      <Dialog
        visible={exerciseDialog}
        style={{ width: "450px" }}
        header="Exercise Details"
        modal
        className="p-fluid"
        footer={exerciseDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <InputText
            id="name"
            value={newExercise.name}
            onChange={(e) => onNameInputChange(e)}
            required
            autoFocus
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <InputTextarea
            id="description"
            value={newExercise.description}
            onChange={(e) => onDescriptionInputChange(e)}
            rows={3}
            cols={20}
          />
        </div>
      </Dialog>
    </div>
  );
}
