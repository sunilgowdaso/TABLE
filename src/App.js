import './App.css';
import Table from './components/Table'; // Import the MedicineTable component

function App() {
  return (
    <div className="App">
      <h1>Medicine Inventory Table</h1>
      <Table /> {/* Render the MedicineTable component here */}
    </div>
  );
}

export default App;
