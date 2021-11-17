import React from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom'
import Route from 'react-router-dom/Route'

const home = ()=>{
    return(
        <div>
            <h1>Bu home page</h1>
        </div>
    )
}
const user = ({match})=>{
    return(
        <div>
            <h1>Hello {match.params.ism}</h1>
        </div>
    )
}

class NewRouter extends React.Component{
    state = {
        isFalse: false,
    }
    render(){
        return(
            <Router>
                
                <h1>Hello Router</h1>
                <ul>
                    <Link to='/home'>Home</Link><br/>
                    <Link to='/about'>about</Link><br/>
                    <NavLink to='/contact' activeStyle={{color: "red"}}>contact</NavLink><br/>
                    <NavLink to='/chat' activeStyle={{color: "red"}}>contact</NavLink><br/>
                </ul>
                <hr />
                <Route path='/' strict exact render={
                    ()=>{
                        return(
                            <h1>Salom</h1>
                            

                        )
                    }
                } />

                <Route path='/home'  component={home} exact strict />

                <Route path='/user/:ism' exact strict  render= {
                    (match)=>{
                        this.state.isFalse ? <this.user /> : <Redirect to='/'/>
                    }
                } />

                
            </Router>
        )
    }
}

export default NewRouter;