import './App.css';
import Blog from './blog';
import Hightlights from './sidebar';



function App() {
   const date = new Date();
  const day = date.getDay()
  const year = date.getFullYear()
  const month = date.getMonth()
  const myDate = `${year} / ${month} / ${day}`;
  return (
     <div className="app-container">
      <div className="header">
        <h1>BLOG MEDIUM</h1>
      </div>
      <div className="flex-container">
        <Blog />
        <Hightlights />
      </div>
     <footer>
          <span className="myname">JudithMuthui@theJitu</span>
          <span className="myname">
            {myDate}
          </span>
        </footer>
     </div>
    
  );
}


export default App
