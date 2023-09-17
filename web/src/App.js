import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from "styled-components"

const URL = "http://localhost:8080/financeiro"

/* async function financeiro(){
   await axios.get(URL)
  .then((res) => {
    console.log(res.data)
    return res.data})
  .catch((err) => { return console.log("Deu arro ao buscar as financias", err)})
   
} */

function status(props){

    if(props.status === true){
      axios.put(`${URL}/${props._id}`,
      {status: false} )
      return console.log("editado com sucesso")
    }else{
      axios.put(`${URL}/${props._id}`,
      {status: true} )
      return console.log("editado com sucesso")
    }
  
}

export default function App(props) {
  const [data, setData] = useState([])
    useEffect(() => {
       axios.get(URL)
    .then((res) => {
      setData(res.data.data)
     })
    .catch((err) => { return console.log("Deu arro ao buscar as financias", err)})}, [])

    const Model = styled.div`
    *{
      list-style: none;
      margin: 0;
      padding: 0;
    }
    width: 80vw;
    height: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;

    .list{
      li{
        width: 300px;
        height: 70px;
        margin: 5px;
        background-color: #ebebeb;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-evenly;

        p{
          width: 100%;
          height: 100%;
        }
        :hover{
          background-color: blue;
        }
      }
    }
`
  return <Model>
    <h1 className='title'> Lista de gastos do mes </h1>
   {console.log(data)}
    {data.map((i) =>(
    
    
   <ul className='list'>

        <li key={i.date}>
          <p>Descrição: {i.desc}</p>  
          <p>Valor: {`R$${i.value},00`}</p>
          <input type='checkbox' checked={i.status} onChange={status(i)} ></input>
        </li>
   </ul>
    
    
    ) )}
  </Model>
}


/* 
Date(date).toString()

*/