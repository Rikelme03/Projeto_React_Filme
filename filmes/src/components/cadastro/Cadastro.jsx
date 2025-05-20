import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
       <section className="section_cadastro">
        <form onSubmit={props.funcCadastro} action="" className="layout_grid form_cadastro">        
            <h1>{props.tituloPagina}</h1>
            <hr/>
            <div className="campos_cadastro">
                <div className="campo_cad_nome">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" placeholder={`Qual o nome do ${props.nomePlace}`}
                    value={props.ValorInput}
                    //ao mudar o input algo acontece com o onChange
                    //atualizar o estado do pai ao atualizar 
                    //target esta indo buscar o valor do "e" 
                    onChange={(e) => props.setValorInput(e.target.value)}
                    />
                </div>
                <div className="campo_cad_nome" style = {{display:props.visibilidade}}>
                    <label htmlFor="genero">Gênero</label>
                    <select name="genero" id="" 
                    value={props.ValorSelect} 
                    onChange={(e) => props.setValorSelect(e.target.value)}>
                            <option value="" disabled selected>Selecione</option>
                            {props.lista && props.lista.length > 0 && props.lista.map((itemGenero) =>
                                <option value={itemGenero.idGenero}>{itemGenero.nome}</option>
                            )}
                        </select>
                </div>
                <Botao nomeDoBotao = "Cadastrar"/>
            </div>
        </form>
       </section>
    )
}

export default Cadastro;