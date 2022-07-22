import './App.css';
import React from 'react';
//Componentes

import Main from './comp/main';
import About from './comp/about';
import Prot from './comp/prot';
import Cont from './comp/contact';

class App extends React.Component {
  constructor(){
    super();
    this.state = {cmp:<Main />}
  }

  changeDir(dir){
    switch(dir){
      case 0:
        this.setState({cmp:<Main className="container" />});
        break;
      case 1:
        this.setState({cmp:<About className="container" />});
        break;
      case 2:
        this.setState({cmp:<Prot className="container" />});
        break;
      default:
        this.setState({cmp:<Cont className="container" />});
        break;
    }
  }

  componentDidMount(){
    this.changeDir(0)
  }

  render() {
    return <main>
      <nav className='navbar'>
        <div>
          <button onClick={()=>this.changeDir(0)} className='btn-nav'>Inicio</button>
          <button onClick={()=>this.changeDir(1)} className='btn-nav'>Acerca de mi</button>
          <button onClick={()=>this.changeDir(2)} className='btn-nav'>Proyectos</button>
          <button onClick={()=>this.changeDir(3)} className='btn-nav'>Contacto</button>
        </div>
      </nav>
      {this.state.cmp}
    </main>
  }
}

export default App;
