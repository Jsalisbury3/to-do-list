import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list'
import {randomString} from '../helpers'

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=flamestatus'; 

class App extends Component{
    state = {
        list:[]
    }
    componentDidMount(){
        this.getListData(); 
    }
    addItem= async (item)=>{
        await axios.post(BASE_URL + API_KEY, item);
        this.getListData();
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
    render(){
        const{list}=this.state;
        return(
            <div className = "container">
                <h1 className="center">The to do list</h1>
                <AddItem add={this.addItem}/>
                <List toDos={list}/>
            </div>
        );
    }
}

export default App;
