import { useState } from "react"
import axios from "axios"
function DeleteAxios() {
    const [idDelete, setIdDelete] = useState(0)
    function DeletarNota() {
        axios
          .delete(`https://servidordenotas-5hrw.onrender.com/notas/${idDelete}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <h3>Deletar Tarefa</h3>
            <label>id: </label>
            <input type="number" id="idDelete" onChange={()=>(
                setIdDelete(document.getElementById('idDelete').value)
    )}/>
            <button onClick={()=>DeletarNota()}>Deletar</button>
        </div>
    )
}
export default DeleteAxios