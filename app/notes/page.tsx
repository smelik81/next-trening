import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/library/api";

export default async function Notes() {
  const data = await getNotes();
  console.log(data);

  //return response;
  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={data.notes} />
    </div>
  );
}
