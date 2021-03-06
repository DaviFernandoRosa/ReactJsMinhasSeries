import React, { useState, useEffect } from  'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Generos = () =>{

  const [data, setData] = useState([])

  useEffect(() => {
        axios.get('/api/genres')
        .then(res => {
            setData(res.data.data)
        })
       
  }, [])

const deleteGenero = id => {
      axios.delete('/api/genres' + id)
      .then(res => {
          const filtrado = data.filter(item => item.id !== id)
          setData(filtrado)
      })
}

const renderizaLinha = itens => {
    return (
        <tr key={itens.id}>
            <th scope='row'>{itens.id}</th>
            <td>{itens.name}</td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteGenero(itens.id)}> excluir </button>
                <Link to={'/generos' + itens.id} className='btn btn-warning'>Editar</Link>
            </td>
        </tr>
    )
}

  if (data.length === 0){
      return (
          <div className='container'>
              <h1>Genêros</h1>
              <div><Link to='/generos/novo' className='btn btn-primary'>Novo Genêro</Link></div>  
              <div className="alert alert-warning" role="alert">
               Não tem nehum genêro cadastrado!
              </div>
          </div>
      )
  }
    
    return (
        <div className='container'>
              <h1> Genêros</h1>
                 <table class="table table-dark">
                     <thead>
                         <tr>
                           <th scope="col">ID</th>
                           <th scope="col">Nome</th>
                           <th scope="col">Ações</th>
                                                                    
                        </tr>
                    </thead>
                     <tbody>
                         {data.map(renderizaLinha)}                                   
                    </tbody>
                 </table>
                                                      
          </div>
                                     
           ) 
       
}

export default Generos;