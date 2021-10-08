import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Homepage from './component/Homepage';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Albumpage from './component/Albumpage';



function App() {
  return (
    <div className="App">
     
      <Router>
      
        
        
        <Route path="/" exact component={Homepage} />
         <Route path="/album/:albumId" exact component={Albumpage} /> 
        
      
      </Router>
    </div>
  );
}

export default App;
