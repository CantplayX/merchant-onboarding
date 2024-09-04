import "./App.css";
import exportFromJSON from 'export-from-json'

function App() {
  const onExportLocal = () => {
    const data = [{
      Name: "Name",
      Age: "Age",
      City: "City",
    },
    {
      Name: "Name2",
      Age: "Age2",
      City: "City2",
      },
      {
        Name: "Name3",
        Age: "Age3",
        City: "City3",
      },
      {
        Name: "Name4",
        Age: "Age4",
        City: "City4",
      }

    ]
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={onExportLocal}>Export Local data</button>
    </div>
  );
}

export default App;
