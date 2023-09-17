import axios from "axios"
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import Components from "../../Components"
import { Link } from "react-router-dom"
const URL = "http://localhost:8080/financeiro"


export default function Home(props) {
       /*  
    const [data, setData] = useState([])
    useEffect(() => {
       axios.get(URL)
    .then((res) => {
      setData(res.data.data)
     })
    .catch((err) => { return console.log("Deu arro ao buscar as financias", err)})}, [])
        */ 
        
        
        const Model = styled.div`
        display: flex;
        flex-direction: row;
        
        height: 100%;
        width: 100%;

        .body{
            width: 85%;
            .head{
                width: 100%;
                margin-top: 10px;
                text-align: center;
                align-items: center;
                font-size: 18pt;
                display: flex;
                justify-content: center;
            }
            .row{
                width: 100%;
                height: 25vh;
                display: flex;
                background-color: pink;
                flex-direction: column;
                text-align: center;
                align-items: center;

                .title{
                    font-size: 14pt;
                    margin-left: 10px;
                }
                .cards{
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                    height: 50%;
                    width: 90%;
                    .card{
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        padding: 10px;
                    width: 15%;
                    height: 80%;
                    border: solid 1px #0000003b;
                    border-radius: 10px;
                    }
                }
            }
            .compromissos{
                margin-top: 15px;
                width: 100%;
                height: max-content;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;


                .title{
                }

                .cards{ 

                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    .card{
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        justify-content: space-evenly;
                        margin: 10px 0;
                        padding: 10px;
                        width: 250px;
                        height: 150px;
                        border: solid 1px #0000003b;
                        border-radius: 20px;
                        .title{
                            font-size:14pt;
                        }
                        .subTitle{
                            font-size:12pt;
                        }
                        .data{
                            font-size: 12pt;
                        }
                        .send{
                            background-color: green;
                        }
                        .delete{
                            background-color: red;
                        }
                        .buttons{
                            width: 80%;
                            display: flex;
                            justify-content: space-between;
                        }
                        .button{
                            border-radius: 10px;
                            color: white;
                            padding: 5px;
                            width: 30%;
                            font-size: 10pt;
                        }
                    }
                }
            }
        }
        `
    return<Model>
    
        
            <Components.Sidebar />
            <div className="body">
                <div className="head">
                    <nav>
                        <Link to={'/'}> Nova tarefa</Link>
                    </nav>
                </div>
                <div className="row">

                    <h3 className="title">
                        Resumo da semana
                    </h3>


                    <div className="cards">

                        <div className="card">
                            <div className="title">N° de vendas</div>
                            <div className="value">777</div>
                        </div>
                        <div className="card">
                            <div className="title">Despesas</div>
                            <div className="value">R$10.000,00</div>
                        </div>
                        <div className="card">
                            <div className="title">Receita</div>
                            <div className="value">R$10.000,00</div>
                        </div>
                        <div className="card">
                            <div className="title">Dias para a meta</div>
                            <div className="value">14</div>
                        </div>
                        <div className="card">
                            <div className="title">Compromissos</div>
                            <div className="value">14</div>
                        </div>
                    </div>
                </div>

                <div className="compromissos">
                    <h2 className="title">Proximos compromissos</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="title">Visita no Porto Seguro</div>
                            <div className="subTitle">cliente </div>
                            <div className="data">Segunda Feira - 01/01</div>
                            <div className="buttons">
                                <div className="button send">Concluir</div>
                                <div className="button delete">Excluir</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
       
      
    </Model>
}