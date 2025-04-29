import "./Lista.css"
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = () => {
    return(
        <section className="layout_grid listagem">
            <h1>Lista dos Filmes</h1>
            <hr/>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="item_lista">
                            <td>Velozes e Furiosos</td>
                            <td>Ação</td>
                            <td><img src={Editar} alt="Imagem de uma caneta" /></td>
                            <td><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Lista;