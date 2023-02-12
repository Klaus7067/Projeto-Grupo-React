import { useState } from "react"
import axios from "axios"
function PutAxios() {
    const [tituloPut, setTituloPut] = useState("Nenhum Titulo Digitado")
    const [idPut, setIdPut] = useState(0)
    const dado = {
        titulo: tituloPut,
        status: true,
      }
    function AlterarNota() {
        axios
          .put(`https://servidordenotas-5hrw.onrender.com/notas/${idPut}`, dado)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <h3>Alterar Tarefa</h3>
            <label>id: </label>
            <input type="number" id="idPut" onChange={()=>(
                setIdPut(document.getElementById('idPut').value)
    )}/>
            <label>Titulo: </label>
            <input type="text" id="tituloPut" onChange={()=>(
                setTituloPut(document.getElementById('tituloPut').value)
    )}/>
            <button onClick={()=>AlterarNota()}>Alterar</button>
        </div>
    )
}
export default PutAxios