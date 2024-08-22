
import './App.css';
import Navbar from './pages/navbar';
import Sidebar from './pages/sidebar';
import Homepage from './pages/homepage';


function App() {
  return (
    <div>
      <div className='profile'>
        
           <Sidebar/>

           <div Style="width:75%">
            <Navbar/>
            <Homepage/> 
            </div>


            </div>
            

    </div>
  );
}

export default App;
