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
                        <tr className="item_lista">
                            <td data-cell ="Nome">Velozes e Furiosos</td>
                            <td data-cell ="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                            <td data-cell ="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Lista;