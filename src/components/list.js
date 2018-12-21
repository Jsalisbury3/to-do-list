import React, {Component} from 'react';

const List=(props)=>{
    const listElements = props.toDos.map((item)=>{
        return <li className="collection-item" key={item._id}>{item.title}</li>
    });
    return(
            <ul className='collection'>
            {listElements}
            </ul>
    )
}

export default List;