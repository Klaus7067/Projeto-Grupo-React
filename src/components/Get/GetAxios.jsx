import axios from "axios";
import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
function GetAxios() {
  const [tarefas, setTarefas] = useState([])
  const [ref,setRef]=useState(0)
  useEffect(() => {
    axios
      .get('https://servidordenotas-5hrw.onrender.com/notas')
      .then((response) => {
        console.log(response.data[0].titulo)
        setTarefas(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [ref])
  return (
    <div>
      <button onClick={()=>setRef(ref+1)}>Atualizar</button>
      {tarefas.map((element) => (
        <>
        <Tarefa idTarefa={element.id} tituloTarefa={element.titulo} key={element.id} />
      </>
      ))}
    </div>
  )
}
export default GetAxios