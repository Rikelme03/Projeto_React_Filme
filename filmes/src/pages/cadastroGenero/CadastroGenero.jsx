import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
//Importando o sweetalert2 para deixar mensagem bonita
import Swal from 'sweetalert2'

const CadastroGenero = () => {

    const [genero, setGenero] = useState("");

    function alerta(icone, mensagem){

        const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
    });
    Toast.fire({
    icon: icone,
    title: mensagem
    });

    }


    async function cadastrarGenero(e){
        e.preventDefault();
        //Verificar se o input esta sendo cadastrado vazio
        if (genero.trim() != "") {
           
            //try => tentar 
        //catch => lanca a excesao
        try{
            await api.post("genero", {nome: genero});
            alert("success", "Cadastro realizado com sucesso!");
            
        }catch(error){
            alert("error", "Infelismente nao conseguimos cadastrar o genero !");
        }

        }else{
            
        }

    }

    
    //Teste:Validar a mudanca do genero
    // useEffect(() => {
    //     console.log(genero)
    // },[genero])
    //fim do teste


    return (
        <>
            <Header />
            <main>
                <Cadastro tituloPagina="Cadastrar Gênero "
                    visibilidade="none"
                    nomePlace="Gênero"
                    //atribuindo a funcao
                    funcCadastro= {cadastrarGenero}
                    //atribuindo valor ao input
                    ValorInput = {genero}
                    //atribuindo a funcao que utiliza o genero
                    setValorInput={setGenero}
                />
                <Lista
                    tituloLista="Lista de Gênero"
                    visibilidadeGenero="none"
                 />
            </main>
            <Footer />
        </>
    )
}
export default CadastroGenero;

