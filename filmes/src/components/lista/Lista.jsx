import "./Lista.css"
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr/>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">
                            <th >Titulo</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   props.lista && props.lista.length > 0 ?(
                            props.lista.map((item) => (
                            <tr className="item_lista" Key={item.IdGenero}>
                            <td data-cell ="Nome">
                                {item.nome}
                            </td>
                            <td data-cell ="Editar" >
                                <button onClick={()=> {props.funEditar(item)}}>
                                    <img src={Editar} alt="Imagem de uma caneta" />
                                    </button>
                                </td>
                            <td data-cell ="Excluir"><img src={Excluir} alt="Lixeira" onClick={() => props.deletar(item.idGenero)}/></td>
                            </tr>    
                            ))
                            )
                            :(
                                <p>{props.listagemGenFil}</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Lista;