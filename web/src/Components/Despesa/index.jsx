import axios from "axios"
import { useState } from "react"


const URL = "http://localhost:8080/financeiro"

export default function Despesa(props) {
    const [desc, setDesc] = useState('')
    const [value, setValue] = useState('')
    const [status, setStatus] = useState(false)
    const data = {desc, value, status}
    async function enviarForm(){
        axios.post(URL, data).then((res) => console.log("cadastrado com sucesso")).catch((e) => console.log(e))
    }
    return(<>
        <div className="title">Adicionar nova despesa</div>

        <form onSubmit={enviarForm()}>
            <input type="text" placeholder="Insira aqui a descrição"name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="text" placeholder="Insira aqui o valor"name="value" value={value} onChange={(e) => setValue(e.target.value)}/>
            
            <label>Já foi pago? 
                <input type="checkbox" placeholder="Já foi pago?"name="status" value={value} onChange={(e) => setStatus(e.target.value)} />
            </label>

            <button type="submit">Enviar</button>
        </form>
    
    </>)
}