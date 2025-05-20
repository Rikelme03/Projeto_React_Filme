import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
//Importando o sweetalert2 para deixar mensagem bonita
import Swal from 'sweetalert2'


const CadastroFilme = () => {

    const [ listaGenero, setListaGenero] = useState([])
    const [ genero, setGenero] = useState("")
    const [ filme, setFilme] = useState("")

        async function listarGenero(){
            try {
                
                const resposta = await api.get("genero");
                setListaGenero(resposta.data);
                
            } catch (error) {
                console.log(error);
                
            }
        }

        useEffect(()=>{
            listarGenero();
        }, [])

        async function cadastrarFilme(e) {
            e.preventDefault();
            // console.log(filme);
            // console.log(genero);
            
            if (filme.trim() != "") {
                try {
                    await api.post("filme", {titulo: filme, idGenero: genero});
                    alert("success", "Filme cadastrado com sucesso!")
                    setFilme("");
                    setGenero("");
                } catch (error) {
                    alert("error", "Erro! Entre em contato com o suporte!")
                    console.log(error);
                }
            } else {
                alert("error", "Erro! Preencha o campo")
            }
        }

    

    return (
        <>
            <Header />
            <main>
                <Cadastro tituloPagina="Cadastrar Filme"
                    nomePlace="Filme"
                    lista = {listaGenero}
                    funcCadastro = {cadastrarFilme}
                    valorInput ={filme}
                    setValorInput={setFilme}
                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista listaCadastro="Lista de filmes"
                listagemGenFil="Nao a nenhum filme cadastrado :("
                tituloLista="Lista de Filmes"
                
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;