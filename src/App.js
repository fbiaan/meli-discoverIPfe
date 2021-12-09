
import './App.css';
import Form from "./Form"
import { BrowserRouter, Routes, Route, Switch, Redirect } from "react-router-dom";
import FormResultado from "./FormResultado"

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/resultado" element={<FormResultado />}/> 
        </Routes>
        <Form />
      </BrowserRouter>
    
     
  );
}

export default App;
