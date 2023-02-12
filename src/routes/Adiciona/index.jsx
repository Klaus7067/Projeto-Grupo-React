import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../service/api';

import 'react-toastify/dist/ReactToastify.css';
import './adiciona.css';
import Head from '../../components/Head';

const Adiciona = () => {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [poster, setPoster] = useState();
  const [categoria, setCategoria] = useState('');
  const [erro, setErro] = useState(null);

  function validate() {
    if (!nome || !descricao || !preco || !poster || !categoria) {
      return false;
    } else return true;
  }

  const addItem = async (e) => {
    e.preventDefault();

    if (validate()) {
      setErro(null);
      const item = {
        nome,
        descricao,
        poster,
        preco,
        categoria_id: 1,
        userId: 1,
      };
      await api
        .post(`/${categoria}`, item)
        .then(({ status }) => {
          if (status === 201) {
            setNome('');
            setDescricao('');
            setPreco('');
            setPoster('');
            setCategoria('');
            toast.success('Produto cadastrado com sucesso!');
          }
        })
        .catch((error) => console.log(error));
    } else {
      setErro('Preencha todos os campos do formulário!');
    }

  };

  return (
    <div className="new-post">
      <Head title="Cadastrar novo produto"/>
      <form className="form-content" onSubmit={(e) => addItem(e)}>
        {erro && <p className="erro">{erro}</p>}
        <h2>Inserir novo produto</h2>
        <div className="input-box">
          <label className="title-label">Escolha o categoria do produto</label>
          <select className='select-form'
            name="categoria"
            onChange={(e) => setCategoria(e.target.value)}
            required
            value={categoria}
          >
            <option className='select-option' value="">Selecione</option>
            <option value="hardware">Hardware</option>
            <option value="perifericos">Perifericos</option>
            <option value="smartphones">Smartphones</option>
          </select>
        </div>
        <div className="input-box">
          <label className="title-label">Nome</label>
          <input
            type="text"
            className="input-text"
            placeholder="Digite o nome do produto"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Preco</label>
          <input
            type="date"
            className="input-text"
            placeholder="Digite o preco"
            value={preco}
            onChange={(e) => {setPreco(e.target.value)}}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Imagem</label>
          <input
            type="text"
            className="input-text"
            placeholder="Digite a url da imagem"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Descrição</label>
          <textarea
            className="input-text comment"
            placeholder="Digite a descrição do produto..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" className="submit-button" value="Adicionar" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Adiciona;
