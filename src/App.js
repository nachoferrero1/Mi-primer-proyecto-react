import './App.css';
import Testimonio from "./componentes/Testimonio.jsx"

function App() {
  return (
    
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Frases de personas reconocidas en el desarrollo de software</h1>
        <Testimonio 
        nombre='Bill Gates'
        pais='Usa'
        imagen='bill'
        cargo='Ingeniero de Software'
        empresa='Microsoft'
        testimonio='Mi ambición ha sido siempre hacer realizables los sueños”
        Los sueños, los deseos, son una fuente importante de motivación. Sin ellos, la voluntad puede quedar un poco ciega, desnortada, sin un camino claro hacia donde ir.
        Para no dejarse arrastrar por la rutina diaria, conviene de vez en cuando plantearse objetivos. Y que éstos sean factibles, no demasiado elevados. Ir poco a poco hasta su consecución'
        />
        <Testimonio 
        nombre='Mark Zuckerberg'
        pais='Estados Unidos'
        imagen='mark'
        cargo='CEO'
        empresa='Facebook'
        testimonio='No tomamos una visión lo suficientemente amplia de nuestra responsabilidad, y eso fue un gran error", dirá Zuckerberg. "Fue un error mío, y lo siento. Comencé Facebook, lo administro y soy responsable de lo que sucede aquí'
        />
        <Testimonio 
        nombre='Steve Jobs'
        pais='USA'
        imagen='steve'
        cargo='CEO'
        empresa='Apple'
        testimonio='Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que creas que es un gran trabajo y la única manera de hacerlo es amar lo que haces. '
        />
      </div>
    </div>
  );
}

export default App;
