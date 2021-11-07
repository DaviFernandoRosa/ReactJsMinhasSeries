import React, {useState} from  'react';
import { Redirect } from 'react-router';
import axios from 'axios';



const NovaSerie = () => {
     const [name, setName] = useState('')
     const [success, setSuccess] = useState(false);


     const save = () => {
         axios.post('/api/series',{
             name
         })
         .then(res => {
            setSuccess(true)
         })
     }

     if(success ){
        return  <Redirect to='/series' />
     }

    return(
        <div className='container'>
               <h1>Nova Série</h1> 

          <form>

              <div className='form-group'>
                  <label htmlfor='name'>Nome</label>
                  <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' id='name' placeholder='Nome do Genêro' />
              </div>
              <button tupe='button' onClick={save} class='btn btn-primary' >Salvar</button>
              
            
          </form>
        </div>

       
    )
}

export default NovaSerie;