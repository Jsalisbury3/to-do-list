import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import {Route} from 'react-router-dom';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=flamestatus'; 

class App extends Component{
    state = {
        list:[],
        toggle: false
    }
    componentDidMount(){
        this.getListData(); 
    }
    addItem= async (item)=>{
        await axios.post(BASE_URL + API_KEY, item);
        await this.getListData();
    }
    async getListData(){
        try{
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            })
        }catch(error){
            console.log('something went wrong', error.message)
        }

    }
    deleteItem = async (id)=>{
        const resp = await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }

    toggleComplete = async (id) => {
        const resp = await axios.put(`${BASE_URL}/${id + API_KEY}`);
        console.log(resp)
        this.getListData();
    }
    render(){
        const{list}=this.state;
        return(
            <div className = "container">
                {/* <h1 className="center">The to do list</h1> */}
                <Route path="/add-item" render={(props)=>{ console.log("Props", props);
                    return  <AddItem {...props} add={this.addItem}/>
                }}/>

                <Route exact path="/" render={(props)=>{ 
                    return  <List {...props} delete={this.deleteItem} toDos={list} complete={this.toggleComplete}/>
                }}/>
            </div>
        );
    }
}

export default App;
