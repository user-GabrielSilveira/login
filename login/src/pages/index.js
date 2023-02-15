import Link from 'next/link'
import styles from '../../styles/Login.module.css'
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";


import LoginCard from "../../src/components/LoginCard/loginCard"
import Input from '../components/inputs/input'
import Button from '../components/Button/button'

const SignInPage = () => {
//   const [email, setEmail] = useState('');
  

//   const [password, setPassword] = useState('') ;

//   const [login, setLogin] = useState({
//     email: '',
//     password: ''
//   })
//  const hadleOnChangeLogin = (e, key) =>{
//   setLogin({...loginState, [key]: e.target.value})
//  }

  //   const router = useRouter();
   
  //  const emailInput = useRef(undefined);
  
  //  const passwordInput = useRef(undefined);
  
   const handleSubmit = async (e) => {
     e.preventDefault();
    console.log(e.target.email.value)
    //  const email = emailInput.current.value;
    
    //  const password = passwordInput.current.value;
    

    //  const response = await fetch("/session", {
    //    method: "POST",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify({ email, password })
    //  });
   
    //  if (response.ok) {
    //    return router.push("/allUsers");
    //  }
   };
   return (
    <div className={styles.background}>
        <LoginCard title='Entre em sua conta'>
            {/* <form onSubmit={handleSubmit} className={styles.form}>

                <Input type="email"  placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    
                <Input type="password"  placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button type="submit">Entrar</Button>
            </form> */}


            {/* <form className={styles.form} onSubmit={hadleOnChangeLogin}>
              <input 
                type="email" 
                placeholder="Digite seu email" 
                required
                value={email}
                onChange={}/>

              <input 
                type="password" 
                placeholder="Digite seu password" 
                required
                value={password}/>
            </form> */}

<form onSubmit={handleSubmit} >

<input type="text"  placeholder="Digite seu email" name="email" id="email"/>
    
<input type="text"  placeholder="Digite sua senha" name="password" id="password" />

<Button type="submit">Entrar</Button>
</form> 

        </LoginCard>
    </div>


);
  }
  export default SignInPage;

