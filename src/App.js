import React from "react"
import './App.css';
import NewRouter from "./components/router/NewRouter";
import Chats  from "./components/Chats";


class App extends React.Component{
  state = {
    avto: [
      {name: 'Malibu2', year: 2018, narx:'33000$', isFalse:false,},
      {name: 'Captiva', year: 2016, narx:'28000$', isFalse:false,},
      {name: 'Cobalt', year: 2012, narx:'12000$', isFalse:false,},
      {name: 'Matiz', year: 2008, narx:'6000$', isFalse:false,},
    ]
  }
  Delete = (index)=>{
    let a = this.state.avto;
    delete a[index];
    this.setState({
      avto: a,
    })
  }
  Qoshish = ()=>{
    let newAvto = this.state.avto;
    let newCar = {
      name: document.querySelector('#nom').value,
      year: document.querySelector('#yil').value,
      narx: document.querySelector('#narx').value,
    }
    newAvto.push(newCar);
    this.setState({
      avto: newAvto
    })
  }
  taxrirlash = (index, event)=>{
    let newAvtoFalse = this.state.avto;

    newAvtoFalse.map((item,i) => {
      if(i != index){
        item.isFalse = false;
      }
    });
    
    newAvtoFalse[index].isFalse = !this.state.avto[index].isFalse;

    // let indexT = index ;

    this.setState({
      avto: newAvtoFalse,
    })
    
  }
  ComponentReturn = (props)=> {
    return(
      <div>
        <input type='text' id='nomT'/><input type='text'id='yilT'/><input type='text' id='narxT'/>
        <button onClick={this.QoshishTaxrirlash.bind(this, props.indexT)}>Qoshish</button>
      </div>
    )
  }
  QoshishTaxrirlash = (indexT)=>{
    let NewValue = this.state.avto;
    let name = document.querySelector('#nomT').value;
    let year = document.querySelector('#yilT').value;
    let narx = document.querySelector('#narxT').value;
    NewValue[indexT].name = name;
    NewValue[indexT].year = year;
    NewValue[indexT].narx = narx;

    NewValue[indexT].isFalse = false;

    this.setState({
      avto: NewValue,
    })
  } 
  render(){
    return(
      <div className='App'>
        <Chats/>
        <NewRouter />
        <h1>Hello React</h1>
        <h2>Avtomabil Qoshish</h2>
        <input type='text' id='nom'/>
        <input type='text'id='yil'/>
        <input type='text' id='narx'/>
        <button onClick={this.Qoshish}>Qoshish</button>
        <h2>Mavjud Avtomabillar</h2>
        {this.state.avto.map((e, index) =>{
          return(
            <ul type="none">
              <li>Avtomobil nomi: {e.name}</li>
              <li>Avtomobil yili: {e.year}</li>
              <li>Avtomobil narxi: {e.narx}</li>
              {e.isFalse ? <this.ComponentReturn  indexT = {index} /> : ''}
              <button onClick={this.Delete.bind(this, index)}>Delete</button>
              <button onClick={this.taxrirlash.bind(e, index)}>{e.isFalse ? "Yopish" : 'Yangilash'}</button>
            </ul>
          )
        } )}
      </div>
    )
  }
}

export default App;
