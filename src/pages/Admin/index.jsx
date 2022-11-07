import {useState, useEffect} from 'react';
import{addDoc, collection} from 'firebase/firestore';
import './admin.css';
function Admin() {
    const[user, setUser] = useState({})
    const [tarefaInput, setTatefaInput] = useState('');
    async function handleRegister(e) {
        e.preventDefault();//para não atualizar a página

        useEffect(()=>{
            async function loadTarefas(){
            const userDetail = localStorage.getItem("@detailUser")
            setUser(JSON.parse(userDetail))
            }
            loadTarefas();
            },[])
    }
    return (
        <div className="admin-container">
            <h1>Minhas Tarefas</h1>
            <form className='form' onSubmit={handleRegister}>
                <textarea
                    placeholder="Digite sua tarefa"
                    value={tarefaInput}
                    onChange={(e) => setTatefaInput(e.target.value)}
                />
                <button type="submit">Registrar tarefa</button>
            </form>
            <article className=
                'list'>
                <p>Estudar JavaScript com React</p>
                <div>
                    <button>Editar</button>
                    <button className=
                        'btn-delete'>Concluir</button>
                </div>
            </article>
            <button className=
                'btn-logout'>Sair</button>
        </div>
    )
}
export default Admin;