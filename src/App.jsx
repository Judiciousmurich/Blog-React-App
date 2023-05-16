import './App.css';
import Blog from './blog';
import Hightlights from './sidebar';

function App() {
  return (
     <div className="app-container">
      <div className="header">
        <h1>Header text</h1>
      </div>
      <div className="flex-container">
        <Blog />
        <Hightlights />
      </div>
     </div>
  );
}


export default App