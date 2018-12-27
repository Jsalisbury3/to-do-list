import React from 'react';
import ListItem from './list_item';
import NavButton from './nav_button';

const List=(props)=>{
    const listElements = props.toDos.map((item)=>{
        return (<ListItem
        itemId={item._id} 
        delete={()=> props.delete(item._id)}
        key={item._id} title={item.title} 
        toggle={()=>props.complete(item._id)}
        completeStatus = {item.complete}
          />)
    });
    return(
        <div>
            <h1 className="center">To Do List</h1>
            <NavButton to="/add-item" text="Add Item" className="material-icons arrow_back"/>
            <ul className='collection'>
            {listElements}
            </ul>
        </div>
    )
}

export default List;