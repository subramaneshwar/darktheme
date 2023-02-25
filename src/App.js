import { useState } from 'react';
import './App.css';
import Comp from './Comp';
import Header from './Header';

function App() {
  const [dark,setDark] = useState({backgroundColor:"white",color:"black",flag:true})
  return (
    <div className="App">
      <Header dark={dark} setDark={setDark}/>
      <Comp dark={dark}/>
    </div>
  );
}

export default App;
