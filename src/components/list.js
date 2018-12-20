import React, {Component} from 'react';
import dummyList from '../data/to_do_list';



class List extends Component{
    state = {
        list:[]
    }
    componentDidMount(){
        this.getListData(); 
    }
    getListData(){
        // Call server to get list data
        this.setState({
            list:dummyList
        });
    }
    render(){
        const listElements = this.state.list.map((item)=>{
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });
        return(
                <ul className='collection'>
                {listElements}
                </ul>
        )
    }
}

export default List;