import { useState } from "react";
import API from "../api";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    await API.post("/notes", { title, content });

    setTitle("");
    setContent("");
    window.location.reload(); // simple refresh; can improve later with state
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mb-8 transform transition hover:scale-105 hover:shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        📝 Add a New Note
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
