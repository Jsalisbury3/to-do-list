import React from 'react';


export default (props) =>{

    const{completeStatus} = props;
    const styleObj = (completeStatus === true) ? {textDecoration: 'line-through'} : {}

    
    return(
        <li className="collection-item row">
            <div className="col s10" style={styleObj}>
                {props.title}
            </div>
            <div>
                <button onClick={props.delete} className="btn red waves-effect waves-light btn-floating pull right"> 
                    <i className="material-icons">delete_forever</i>
                </button>
                <button className="btn green waves-effect waves-light" onClick={props.toggle}>
                   Complete
                </button>
            </div>
        </li>
    )
}