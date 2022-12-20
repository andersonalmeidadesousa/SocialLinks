import { useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'
import { Form } from 'react-router-dom'

import { auth } from '../../services/firebaseconnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { Input } from '../../components/Input'

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    
    if(email === '' || password === ''){
      alert("preencha todos os campos!")
      return;


    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success("Bem vindo de volta :)")
      navigate("/admin", { replace: true } )
     
    })
    .catch(() => {
      toast.error("Erro ao tentar fazer o login!")
      console.log("ERRO AO FAZER SEU LOGIN")
    })
  }

    return(
       <div className='login-container'>
         <Logo/>

         <form className='form' onSubmit={handleLogin} >
             <Input
              placeholder="Digite seu Email..."
              type="email"
              
               value={email}
               onChange={ (e) => setEmail(e.target.value) }
             />
             
             <Input
               type="password"
               placeholder='********'
               autoComplete='on'
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
              />
             <button type='submit'>Acessar</button>
         </form>
       </div>
   
    )
   
   }