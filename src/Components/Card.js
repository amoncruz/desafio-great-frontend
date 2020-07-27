import React,{useState} from 'react';
import {BsPlus} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const CardCustom=(props)=>{


    return(
        <Link to="cadastro">
            <div className="card-custom-add">
                <BsPlus size="3em" />
            </div>
        </Link>
    );
}

export default CardCustom;