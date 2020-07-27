import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { validate } from 'gerador-validador-cpf'
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
import Header from './Header';

const Register = (props) => {

    const[validatedCpf,setValidatedCpf] = useState(true);

    const handleCPF = (cpf) => {

        formik.setValues({...formik.values,cpf:cpf});

        if(!validate(cpf)){
            setValidatedCpf(false);
        }else{
            if(validate(cpf)=== true && validatedCpf===false){
                setValidatedCpf(true);
            }
        }
    }

    const formik = useFormik({

        initialValues: {
   
          nome: '',
   
          dataDeNascimento: '',
   
          rg: '',

          cpf: '',

          nomeDoPai: '',

          nomeDaMae: '',
   
        },
   
        validationSchema: Yup.object({
   
            nome: Yup.string()
   
            .min(3, 'Nome precisa ter pelo menos 3 caracters')
   
            .required('Campo Obrigatório'),
   
            dataDeNascimento: Yup.string()
   
            .required('Campo Obrigatório'),
   
            cpf: Yup.string()
      
            .required('Campo Obrigatório'),

            rg: Yup.string()
   
            .required('Campo Obrigatório'),

            nomeDoPai: Yup.string()
   
            .required('Campo Obrigatório'),

            nomeDaMae: Yup.string()
   
            .required('Campo Obrigatório'),

        }),
   
        onSubmit: values => {
   
          SignUp(values);
   
        },
   
      });


      const SignUp=(values)=>{
            Axios.post("http://localhost:5000/api/usuarios",{...values,dataDeCadastro: new Date().toString()}).then(res=>{
                if(res.status===201){
                    props.history.push('/');
                }
            })
      }

  return (
    <>
    <Header/>
    <Container>
        <Form className="container-form" onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for="Nome">Nome</Label>
                    <Input type="text" name="Nome" placeholder="Nome" {...formik.getFieldProps('nome')}/>
                    {formik.touched.nome && formik.errors.nome ? (
                    <div>{formik.errors.nome}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <Label for="dataDeNascimento">Data de Nascimento</Label>
                    <Input type="date" name="dataDeNascimento" {...formik.getFieldProps('dataDeNascimento')}/>
                    {formik.touched.dataDeNascimento && formik.errors.dataDeNascimento ? (
                    <div>{formik.errors.dataDeNascimento}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <Label for="rg">RG</Label>
                    <Input type="text" name="rg"  placeholder="RG" maxLength="9" {...formik.getFieldProps('rg')}/>
                    {formik.touched.rg && formik.errors.rg ? (
                    <div>{formik.errors.rg}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input type="text" name="cpf" placeholder="CPF" maxLength="11" onChange={(e)=>handleCPF(e.target.value)} value={formik.values.email}/>
                    {formik.touched.cpf && formik.errors.cpf ? (
                    <div>{formik.errors.cpf}</div>
                    ) : null}

                    {!validatedCpf && (
                    <div>CPF Inválido</div>
                    ) }
                </FormGroup>
                <FormGroup>
                    <Label for="nomeDoPai">Nome do Pai</Label>
                    <Input type="text" name="nomeDoPai" placeholder="Nome do Pai" {...formik.getFieldProps('nomeDoPai')} />
                    {formik.touched.nomeDoPai && formik.errors.nomeDoPai ? (
                    <div>{formik.errors.nomeDoPai}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <Label for="nomeDaMae">Nome da Mãe</Label>
                    <Input type="text" name="nomeDaMae" placeholder="Nome da Mãe" {...formik.getFieldProps('nomeDaMae')} />
                    {formik.touched.nomeDaMae && formik.errors.nomeDaMae ? (
                    <div>{formik.errors.nomeDaMae}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <Button className="signup-btn" type="submit">Cadastrar</Button>
                </FormGroup>
        </Form>
    </Container>
    </>
  );
}

export default Register;
