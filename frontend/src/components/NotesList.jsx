import { useEffect, useState } from "react";
import API from "../api";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get("/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">No notes yet</p>
      )}

      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white p-5 rounded-2xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl relative"
        >
          <h3 className="text-xl font-bold mb-2 text-purple-600">{note.title}</h3>
          <p className="text-gray-700 mb-4">{note.content}</p>

          <div className="absolute top-4 right-4 flex space-x-2">
            {/* Delete Button */}
            <button
              onClick={() => deleteNote(note._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
