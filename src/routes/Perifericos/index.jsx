import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { useParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Produto from '../../components/Produto/Produto';
import Head from '../../components/Head';

function App() {
  const { categoria } = useParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    function getApi() {
      api
        .get(`/${categoria}`)
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
  }, [categoria]);

  if (load) {
    return (
      <div className="container">
        <h1>Carregando items...</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <Head title="Produtos"/>
      <h1>Produtos:</h1>
      <div className="box-cards">
        {item.length === 0 ? (
          <div>
            <h2>
              Esta categoria não possiu nenhum produto no momento, clique{' '}
              <Link to={`/adiciona`}>Aqui</Link> para adicionar um novo produto!
            </h2>
          </div>
        ) : (
          item.map((item) => (
            <Produto
              id={item.id}
              poster={item.poster}
              nome={item.nome}
              descricao={item.descricao}
              key={item.id}
              categoria={categoria}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
