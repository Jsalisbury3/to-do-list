import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import {Route, Switch } from 'react-router-dom';
import ViewItem from './view_item';
import {BASE_URL, API_KEY} from '../config/api';
import NotFound from './404'

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
                <Switch>
                    <Route path="/add-item" render={(props)=>{ console.log("Props", props);
                        return  <AddItem {...props} add={this.addItem}/>
                    }}/>

                    <Route exact path="/" render={(props)=>{ 
                        return  <List {...props} delete={this.deleteItem} toDos={list} complete={this.toggleComplete}/>
                    }}/>

                    <Route path="/item/:item_id" component={ViewItem}/>
                    
                    <Route component={NotFound}/>
                </Switch>
               
            </div>
        );
    }
}

export default App;
