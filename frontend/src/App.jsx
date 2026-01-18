import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Notes App</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
}

export default App;
