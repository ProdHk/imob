    import styled from "styled-components";
    import Components from "../../Components";
    import { useState } from "react";
    import axios from "axios";

    const URL = "http://localhost:8080/financeiro"

    const data = await axios.get(URL).then((res) => res.data.data).catch((err) => console.log(err))
    export default  function Tarefas(props) {
            const Model = styled.div`
                width: 100%;
                display: flex;

                .body{
                    width: 85%;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    h2, .title{
                        font-size: 22pt;
                        margin: 0;
                        padding: 10px 0;
                        font-weight: 400;
                    }
                    .form{
                        padding: 10px;
                        width: 90%;
                        background-color: #949494;
                        border-radius: 10px ;
                        height: 50px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        text-align: center;
                        align-items: center;
                        justify-content: space-between;
                        input{
                            text-align: center;
                            width: 20%;
                            height: 50%;
                            border-radius: 10px;
                            border: solid 1px #0000000e
                        }
                        button{
                            background-color: green;
                            border: none;
                            padding: 10px;
                            border-radius: 10px;
                            color: white;
                            :hover{
                                cursor: pointer;
                            }
                        }
                    }

                    .list{
                        margin-top: 25px;
                        width: 90%;
                        padding: 10px;
                        
                        .row{
                            .item{
                                display: flex;
                                text-align: center;
                                align-items: center;
                                justify-content: space-evenly;
                                margin-top: 10px;
                                padding: 10px;
                                background-color: #0000003e;
                                border-radius: 10px;
                                button{
                                    width: 15%;
                                    height: 50px;
                                    background-color: green;
                                    border: none;
                                    border-radius: 10px;
                                    color: white;
                                    :hover{
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                    }
                }
            `
            const [formData, setFormData] = useState({
                name: '',
                date: '',
                client: '',
                product: ''
            })
            const handleChange= (e) => {
                const {name, value} = e.target
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
            const handleSubmit = async (e) => {
                try {
                    await axios.post(URL, formData);
                    console.log('Dados enviados com sucesso! ')
                    setFormData({
                        name: '',
                        date: '',
                        client: '',
                        product: ''
                    })
                } catch (error) {
                        console.log(error)
                }   
            }

        return<Model>
            <Components.Sidebar />
            <div className="body">
                <h2 className="title">Tarefas</h2>
                
                
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            on
            required
          />
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="client">Cliente</label>
          <input
            type="text"
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="product">Produto</label>
          <input
            type="number"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
    </form>


    {/* 
        LIST > ROW > ITEM < NOME
    */}
            <div className="list">
                <div className="row">
                    {
                    data.map((i) => (<div className="item" key={i._id}>
                        {console.log(i)}
                        <p className="nome">{i.desc}</p>
                        <p className="nome">{Date.UTC(4,1,2,2,2,0 )}</p>

                        </div>) )
                }

                    
                </div>
         
            </div>
                <div className="list">
                    <h2 className="title">
                    Tarefas cadastradas
                    </h2>
                    <div className="row">

                        
                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                        <div className="item">
                        <p className="nome">
                            Visita ao vale das acacias
                        </p> 
                        <p className="nome">
                            23/04/23
                        </p> 
                        <p className="nome">
                            Cliente Augusto
                        </p> 
                        <p className="nome">
                            Produto 501
                        </p> 
                        <button>Concluir</button>
                        </div>


                    </div>
                </div>
            </div>

        </Model>
    }
    /* 
    name: String,
    date: Date,
    client: String,
    product: Number,
    state: Boolean */