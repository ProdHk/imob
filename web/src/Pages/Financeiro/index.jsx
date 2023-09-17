import { styled } from "styled-components"
import Components from "../../Components"
import { Component, useEffect, useState } from "react"
import axios from "axios"
const URL = "http://localhost:8080/financeiro"

export default function FinanceiroPage(props) {


    const [data, setData] = useState([])
    useEffect(() => {
       axios.get(URL)
    .then((res) => {
      setData(res.data.data)
     })
    .catch((err) => { return console.log("Deu arro ao buscar as financias", err)})}, [])





    const Model = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
        display: flex;
        flex-direction: row;
        width: 100%;
        
            .body{
                width: 85%;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: start;
                .head{
                    text-align: center;
                    align-items: center;
                    justify-content: space-evenly;
                    display: flex;
                    width: 100%;
                    height: 8vh;
                    font-size: 22pt;
                    font-weight: 600;
                    color: black;
                }
                .row{
                    width: 90%;
                    height: 20vh;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    .card{
                        margin: 10px;
                        width: 30%;
                        height: 80%;
                        background-color: white;
                        border-radius: 20px;
                        border: solid 1px #cacaca;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        .title{
                            font-size: 14pt;
                        }
                        .number{
                            flex-direction: 10pt    ;
                        }
                    }
                }
                .ultimasVendas{
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    text-align: start;
                    align-items: start;
                    width: 90%;
                    height: 45vh;
                    background-color: #dddbdb;
                    border-radius: 10px;
                    .title{
                        font-size: 16pt;
                        margin: 10px;
                    }
                    .column{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: start;
                        text-align: center;
                        align-items: center;
                        
                        .row{
                            width: 95%;
                            height: 30px;
                            margin: 5px 0;
                            background-color: #fff;
                            border-radius: 10px;
                        }
                    }
                }
            }
    `    
    return <Model>
                <Components.Sidebar />
                <div className="body">
                    <div className="head">
                        <div className="title">Financeiro</div>
                        <div className="add">addNew</div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <p className="title">Numero de vendas</p>
                            <p className="number">888</p>
                        </div>
                        <div className="card">
                            <p className="title">Valor vendido</p>
                            <p className="number">R$888,00</p>
                        </div>
                        <div className="card">
                            <p className="title">Despesas</p>
                            <p className="number">R$888,00</p>
                        </div>
                    </div>
                    <div className="ultimasVendas">
                        <p className="title">Ultimas Vendas</p>
                        <div className="column">
                            <div className="row">
                                Nome, produto, bairro e valor
                            </div>
                            <div className="row">
                                Nome, produto, bairro e valor
                            </div>
                            <div className="row">
                                Nome, produto, bairro e valor
                            </div>
                        </div>
                    </div>
                </div>
            </Model>
        
    
}





/* 
{data.map((item) => (
                    <div className="row" key={item._id}>
                        <div className="title">{item.desc}</div>
                        <div className="value title">R${item.value}</div>

                    </div>
                ))}
 */