import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import { Container,Button,Input } from 'reactstrap';
import {BsPerson, BsSearch} from 'react-icons/bs'
import Header from '../Components/Header';
import CardCustom from '../Components/Card';


function Search({match}) {

  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState();
  const [cpfValidated,setCpfValidated] = useState(true);

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/usuarios').then(res=>{
      if(res.status===200){
        setUsers(res.data);
      }
    })
  },[users])


  const handleSearch=()=>{

      if(search!==null){
        Axios.get(`http://localhost:5000/api/usuarios/consulta/${search}`).then(res=>{
            if(res.status===200){
                setUsers(res.data)
            }
           
        })
      }
  }

  return (
    <>
    <Header/>
        <div className="box-search">
            <Input type="text" name="serach" className="input-search" placeholder="Buscar por nome" onChange={e=>{}} />
            <BsSearch size="1.5em" onClick={()=>handleSearch()}/>
         
        </div>
      <Container>
     
          {users.map(user=>{
              return(
                <div className="card-custom">
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
                    <div>
                    </div>
                    <Button className="btn-card">Detalhes</Button>
                    </div>
                </div>
              )
          })}
      </Container>
      </>
  );
}

export default Search;
