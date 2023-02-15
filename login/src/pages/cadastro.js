import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from '../../styles/Login.module.css';
import LoginCard from "../components/LoginCard/loginCard";

import Input from '../components/inputs/input'
import Button from '../components/Button/button'

export default function CadastroPage() {
    const SignInPage = () => {
        const router = useRouter();
        const emailInput = useRef();
        const passwordInput = useRef();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const email = emailInput.current.value;
          const password = passwordInput.current.value;
          const name = nameInput.current.value;
          const number = numberInput.current.value;

      
          const response = await fetch("/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name, number })
          });
          if (response.ok) {
            return router.push("/allUsers");
          }
        };
      
    }
    return (
        <div className={styles.background}>
            <LoginCard title='Crie sua conta'>
            <form onSubmit={handleSubmit} className={styles.form}>

                <Input type="email"  placeholder="Digite seu email" ref={emailInput}/>

                <Input type="password"  placeholder="Digite sua senha" ref={passwordInput}/>

                <Input type="name"  placeholder="Digite seu nome" ref={nameInput} />

                <Input type="number" placeholder="Digite seu número" ref={numberInput}/>
                <Button>Cadastrar</Button>
                <Link href="/login">Já possui conta?</Link>
            </form>
            </LoginCard>
        </div>
    )
}