import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { useParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Filme from '../../components/Filme/Filme';
import Head from '../../components/Head';

function App() {
  const { genero } = useParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    function getApi() {
      api
        .get(`/${genero}`)
        .then((response) => {
          const data = response.data;
          setLoad(false);
          setItem(data);
        })
        .catch((error) => {
          console.log(`Sua requisição falhou! ${error}`);
        });
    }
    getApi();
  }, [genero]);

  if (load) {
    return (
      <div className="container">
        <h1>Carregando items...</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <Head title="Filmes"/>
      <h1>Filmes:</h1>
      <div className="box-cards">
        {item.length === 0 ? (
          <div>
            <h2>
              Esta categoria não possiu nenhum filme no momento, clique{' '}
              <Link to={`/adiciona`}>Aqui</Link> para adicionar um novo filme!
            </h2>
          </div>
        ) : (
          item.map((item) => (
            <Filme
              id={item.id}
              poster={item.poster}
              nome={item.nome}
              descricao={item.descricao}
              key={item.id}
              genero={genero}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
