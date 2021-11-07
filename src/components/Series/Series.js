import React, { useState, useEffect } from  'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Series = () =>{

  const [data, setData] = useState([])

  useEffect(() => {
        axios.get('/api/series')
        .then(res => {
            setData(res.data.data)
        })
       
  }, [])

const deleteSerie = id =>{
      axios.delete('/api/series' + id)
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
                <button className='btn btn-danger' onClick={() => deleteSerie(itens.id)}> excluir </button>
                <Link to={'/series' + itens.id} className='btn btn-warning'>Editar</Link>
            </td>
        </tr>
    )
}

  if (data.length === 0){
      return (
          <div className='container'>
              <h1>Séries</h1>
              <div><Link to='/NovaSerie' className='btn btn-primary'>Nova Série</Link></div>  
              <div className="alert alert-warning" role="alert">
               Não tem nehuma série cadastrada!
              </div>
          </div>
      )
  }
    
    return (
        <div className='container'>
              <h1>Séries</h1>
                <div><Link to='/NovaSerie' className='btn btn-primary'>Nova Série</Link></div>   
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

export default Series;