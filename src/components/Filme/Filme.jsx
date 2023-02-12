import React from 'react'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import api from '../../service/api'
import 'react-toastify/dist/ReactToastify.css';
import './Filme.css'

const Filme = ({id, poster, nome, descricao, genero}) => {
    const [modalOpen, setModalOpen] = React.useState(false);

    
    const deleteElement = async (id) => {
        await api.delete(`/${genero}/${id}`)
        .then((sucesso) => {
          if (sucesso.status === 200) window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
      }

  return (
    <div key={id} className='property-card'>
                <img src={poster} alt={nome} />
                <div className='property-description'>
                  <h5>{nome}</h5>
                  <div className='description'>{descricao}</div>
                  <div className='box-config'>
                    <Link className='btn-link' to={`/${genero}/${id}`}>
                      Acessar
                    </Link>
                    
                    <button 
                    className='btn-delete' 
                    onClick={() => setModalOpen(true)}
                    >
                      Excluir
                    </button>
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} id={id} nome={nome} deleteFunc={() => deleteElement(id)} />
                  </div>
                </div>

              </div>
  )
}

export default Filme