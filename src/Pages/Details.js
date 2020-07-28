import React, { useEffect, useState } from 'react';
import { Container, Input } from 'reactstrap';
import Header from '../Components/Header';
import Axios from 'axios';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { validate } from 'gerador-validador-cpf'

const Details = ({match}) =>{

    let { cpf } = match.params;
    const[user,setUser] = useState({});
    const[search,setSearch] = useState();

    const handleSearch=()=>{
        if(search!==undefined && search!==""){
            Axios.get(`http://localhost:5000/api/usuarios/${search}`).then(res=>{
                setUser(res.data);
            })
        }      
    }

    useEffect(()=>{
        if(cpf!==undefined && parseInt(cpf)!==0){
            Axios.get(`http://localhost:5000/api/usuarios/${cpf}`).then(res=>{
                console.log(res.data);
                setUser(res.data);
            })
        }

    },[cpf])

    return(
        <>
            <Header/>
   {/*         <div>
                <Button className="back-btn">Voltar</Button>
   </div>*/}
            <div className="box-search">
                <Input type="text" name="serach" className="input-search" placeholder="Consultar por CPF" onChange={(e)=>{setSearch(e.target.value)}} />
                <BsSearch size="1.5em" onClick={()=>{handleSearch()}}/>
            </div>
            <Container>
                {((cpf!==undefined && parseInt(cpf)!==0) || Object.keys(user).length>0) &&(
                         <div className="card-custom-details">
                         <div className="inline-box">
                         <div className="icon-circle">
                             <BsPerson color="#667eea" size="2.5em" />
                         </div>
                         <div className="box-right">
                             <div className="card-title-custom">
                             {user.nome}
                             </div>
                             <div className="card-details">
                             {new Date(user.dataDeNascimento).toLocaleDateString()}
                             </div>
     
                         </div>
                         </div>
                         <div className="information">
                             <div className="inline-box">
                                 <span className="card-info">Nome Do Pai :</span><p>{user.nomeDoPai}</p>
                             </div>
                             <div className="inline-box">
                                 <span className="card-info">Nome Da Mãe :</span><p>{user.nomeDaMae}</p>
                             </div>
                             <div className="inline-box">
                                 <span className="card-info">CPF :</span><p>{user.cpf}</p>
                             </div>
                             <div className="inline-box">
                                 <span className="card-info">RG :</span><p>{user.rg}</p>
                             </div>
                             <div className="inline-box">
                                 <span className="card-info">Data de Cadastro :</span><p>{new Date(user.dataDeCadastro).toLocaleDateString()} {new Date(user.dataDeCadastro).toLocaleTimeString()}</p>
                             
                             </div>
     
                       
                         </div>
                         
                             
                 </div>

                )}
       
            </Container>
        </>
    );
}

export default Details;