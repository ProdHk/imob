import { Link } from "react-router-dom"
import { styled } from "styled-components"
import Logo from '../../Images/logo-white.png'


export default function Sidebar(props) {
    const Model = styled.div`
    *{
        text-decoration: none;
        color: inherit;
    }
        width: 15%;
        height: 100vh;
        background-color: #1f1f1f;

        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .title{
            width: 80%;
            height: 20%;
            img{
                width: 100%;
            }
        }
        nav{
            margin-top: 80px;
            width: 80%;
            height: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: space-between;
           
            .item{
                width: 100%;
                height: 40px;
                margin: 1px;
                background-color: #f0f0f0;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                justify-content: center;
                
            }
        }
    `
    

    return(<Model>
            <div className="title"><img src={Logo} /></div>
        <nav>
            <Link to={"/Tarefas"} className="item">Tarefas</Link>
            <Link to={"/Clientes"} className="item">Clientes</Link>
            <Link to={"/Parceiros"} className="item">Parceiros</Link>
            <Link to={"/Parceiros"} className="item">Compromissos</Link>
            <Link to={"/produtos"} className="item">Produtos</Link>
            <Link to={"/financeiro"} className="item">Financeiro</Link>
            <Link to={"/Parceiros"} className="item">Configurações</Link>
        </nav>
        
    </Model>)
}