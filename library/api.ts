import axios from "axios";

import type { Note } from "@/types/note";

const API = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
});

export const getNotes = async () => {
  const { data } = await API.get<{ notes: Note[]; total: number }>("/notes");
  return data;
};
