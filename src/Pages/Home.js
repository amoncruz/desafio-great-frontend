import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import { Container,Button,Input } from 'reactstrap';
import {BsPerson, BsSearch} from 'react-icons/bs'
import Header from '../Components/Header';
import CardCustom from '../Components/Card';

function Home({history}) {

  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState();
  const [searchChanged,setSearchChanged] = useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/usuarios').then(res=>{
      if(res.status===200){
        setUsers(res.data);
      }
    })
  },[searchChanged])

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
    <Header setSearchChanged={setSearchChanged} searchChanged={searchChanged}/>
        <div className="box-search">
            <Input type="text" name="serach" className="input-search" placeholder="Buscar por nome" onChange={e=>setSearch(e.target.value)} />
            <BsSearch size="1.5em" onClick={()=>handleSearch()}/>
        </div>
      <Container>
     
          {users.map(user=>{
              return(
                <div className="card-custom">
                    <div className="icon-circle-initialpage">
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
                    <Button className="btn-card" onClick={()=>history.push(`/details/${user.cpf}`)}>Detalhes</Button>
                    </div>
                </div>
              )
          })}
      </Container>
      </>
  );
}

export default Home;
