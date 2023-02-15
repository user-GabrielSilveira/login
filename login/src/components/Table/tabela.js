import styles from './tabela.module.css'
import Input from '../inputs/input'
export default function Tabela(children ,...props ) {
    return (
      <div className={styles.background}>
         <div className={styles.table} >
         <p className={styles.title}>Lista de usuários cadastrados</p>
            <table>
                <tr>
                    <td>
                       nome: ''  {/* {handlerFromEdit.nome}' || {props.name} */}
                    </td>
                    <td>
                        email: ''
                    </td>
                    <td>
                        senha: ''
                    </td>
                    <td>
                        numero: ''
                    </td>
                </tr>
                <tr>
                    <td>
                        nome: ''
                    </td>
                    <td>
                        email: ''
                    </td>
                    <td>
                        senha: ''
                    </td>
                    <td>
                        numero: ''
                    </td>
                </tr>
                <tr>
                    <td>
                        nome: ''
                    </td>
                    <td>
                        email: ''
                    </td>
                    <td>
                        senha: ''
                    </td>
                    <td>
                        numero: ''
                    </td>
                </tr>
            </table>
        </div>
      </div>
    )
}