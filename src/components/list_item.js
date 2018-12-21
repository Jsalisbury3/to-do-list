import React from 'react';

export default (props) =>{
    return(
        <li className="collection-item row">
            <div className="col s10">
                {props.title}
            </div>
            <div>
                <button className="btn red waves-effect waves-light floating pull right"> Delete </button>
            </div>
        </li>
    )
}