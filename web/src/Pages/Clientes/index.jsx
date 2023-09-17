import styled from "styled-components";
import Components from "../../Components";
import { Link } from "react-router-dom";


export default function Clientes(props) {
    
    const Model = styled.div`
    display:flex;
    
    `


    return(
        <Model>
            <Components.Sidebar />
            <div className="body">
            <div className="head">
                <div className="title">
                    <h2>Clientes</h2>
                    <p>Lista de clientes na base</p>
                </div>
                <div className="add">
                    <Link to={'/addCliente'}>
                        Adicionar cliente
                    </Link>
                </div>
            </div>
            <div className="list">
                <h2>Recentemente adicionados</h2>
                <div className="column">
                    <div className="row">
                        img
                        name
                        id
                        renda
                        dataCadastro
                        Status
                    </div>
                </div>
            </div>
            </div>
        </Model>
    )
}