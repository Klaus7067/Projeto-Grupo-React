import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../service/api';

import 'react-toastify/dist/ReactToastify.css';
import './adiciona.css';
import Head from '../../components/Head';

const Adiciona = () => {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [ano, setAno] = useState();
  const [poster, setPoster] = useState();
  const [duracao, setDuracao] = useState();
  const [genero, setGenero] = useState('');
  const [erro, setErro] = useState(null);

  function validate() {
    if (!nome || !descricao || !ano || !poster || !duracao || !genero) {
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
        duracao,
        ano,
        categoria_id: 1,
        userId: 1,
      };
      await api
        .post(`/${genero}`, item)
        .then(({ status }) => {
          if (status === 201) {
            setNome('');
            setDescricao('');
            setAno('');
            setPoster('');
            setDuracao('');
            setGenero('');
            toast.success('Filme cadastrado com sucesso!');
          }
        })
        .catch((error) => console.log(error));
    } else {
      setErro('Preencha todos os campos do formulário!');
    }
    // console.log("Upload Imagem")
    // console.log(imagem)
    // navigate("/terror", {replace: true})
  };

  return (
    <div className="new-post">
      <Head title="Cadastrar novo filme"/>
      <form className="form-content" onSubmit={(e) => addItem(e)}>
        {erro && <p className="erro">{erro}</p>}
        <h2>Inserir novo Filme</h2>
        <div className="input-box">
          <label className="title-label">Escolha o genero do filme</label>
          <select className='select-form'
            name="genero"
            onChange={(e) => setGenero(e.target.value)}
            required
            value={genero}
          >
            <option className='select-option' value="">Selecione</option>
            <option value="terror">Terror</option>
            <option value="comedia">Comedia</option>
            <option value="acao">Ação</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="input-box">
          <label className="title-label">Nome</label>
          <input
            type="text"
            className="input-text"
            placeholder="Digite o nome do filme"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Ano de Lançamento</label>
          <input
            type="date"
            className="input-text"
            placeholder="Digite o ano de lançamento"
            value={ano}
            onChange={(e) => {setAno(e.target.value)}}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Duração</label>
          <input
            type="text"
            className="input-text"
            placeholder="Digite a duracao do filme em minutos"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Poster</label>
          <input
            type="text"
            className="input-text"
            placeholder="Digite a url do poster"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label className="title-label">Sinopse</label>
          <textarea
            className="input-text comment"
            placeholder="Digite a descrição do filme..."
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
