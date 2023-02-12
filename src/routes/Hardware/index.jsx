import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../service/api';

import './produto.css';
import Head from '../../components/Head';

Modal.setAppElement('#root');
function Produto() {
  const navigate = useNavigate();
  const { genero, id } = useParams();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({});
  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const [poster, setPoster] = useState();
  const [descricao, setDescricao] = useState();

  useEffect(() => {
    async function getApi() {
      await api
        .get(`/${genero}/${id}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigate('/', { replace: true });
          return;
        });
    }

    getApi();
  }, [id]);

  const editElement = async (id) => {
    await api
      .patch(`/${genero}/${id}`, {
        nome: nome,
        poster: poster,
        preco: preco,
        descricao: descricao,
      })
      .then((sucesso) => console.log(sucesso));
    window.location.reload();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container-produto">
      <Head title={item.nome}/>
      <div className="box-content">
        <div className="box-info">
          <div className="box-title">
            <p>{item.nome}</p>
            <svg
              onClick={openModal}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
          <div className="box-description">
            <p>{item.descricao}</p>
            <div>
              <p>Preço: {item.preco}</p>
            </div>
          </div>
        </div>
        <div>
          <img className="img-poster" src={item.poster} alt={item.nome}/>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form>
          <div className="input-box">
            <h2>Editar produto</h2>
            <label className="title-label">Nome</label>
            <input
              type="text"
              className="input-text"
              placeholder="Digite o nome do produto"
              required
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label className="title-label">Preço</label>
            <input
              type="date"
              className="input-text"
              placeholder="Digite o preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label className="title-label">Poster</label>
            <input
              type="text"
              className="input-text"
              placeholder="Digite a url do poster"
              onChange={(e) => setPoster(e.target.value)}
            />
          </div>

          <div className="input-box">
          <label className="title-label">Descrição</label>
            <textarea
              className="input-text comment"
              placeholder="Digite a descrição do produto..."
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="box-btn">
          <button className="btn-modal" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn-modal" onClick={() => editElement(item.id)}>
            Salvar alterações
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Produto;
