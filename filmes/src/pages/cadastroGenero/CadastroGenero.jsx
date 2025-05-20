import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
//Importando o sweetalert2 para deixar mensagem bonita
import Swal from 'sweetalert2'

const CadastroGenero = () => {

    //So usamos useState quando precisamos guarda uma informacao 
    // que muda e que o React precisa acompanhar

    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);

     function alertar(icone, mensagem) {
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


    // useEffect(() => {
    //         alertar("success", "Lista Atualidaza :)")
    //     },[]);


    //Funcao Cadastrar genero
    async function cadastrarGenero(e){
        e.preventDefault();
        //Verificar se o input esta sendo cadastrado vazio
        if (genero.trim() !== "") {
           alertar("Seu campo esta vazio")
            //try => tentar 
            //catch => lanca a excesao
        try{
            await api.post("genero", {nome: genero});


            //============ alertar =======================
            let timerInterval;
                Swal.fire({
                title: "Cadastrando Genero !",
                html: "Demora apenas... <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
                });
            //============ alertar =======================

            setGenero("");
            listarGenero();
            
        }catch(error){
            alertar("error", "Entre em contato com o suporte :(")
        }

        }else{
            alertar("error", "O campo esta vazio :(")
        }

    }

    //Funcao listar genero
    async function listarGenero(){

            try{
               const resposta = await api.get("genero");
                // console.log(resposta.data[2].idgenero);
                // console.log(resposta.data[3].nome);
                // console.log(resposta.data);
                setListaGenero(resposta.data);

            }catch(error){
                console.log(error);
                
            }
        }
    

    //Funcao excluir genero
    
        async function deletaGenero(idGenero) {
        
        try {
        //Interpolacao E DIFERENTE de Concatensao
        //Concatensao: "Var1"+"Var2"
        //Interpolacao: (`genero/${idGenero}`)
        await api.delete(`genero/${idGenero}`);

        
        //==========alertar==============
        Swal.fire({
        title: "Quer mesmo apagar?",
        text: "Este genero sera deletado!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim quero Deletar!"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Deletando!",
            text: "Esse genero sera deletado.",
            icon: "Deletado com sucesso !"
            });
        }
        });
            //==========alertar==============


        } catch (error) {
        alertar("error", "Entre em contato com o suporte :(")
        console.log(error);
        }
    }

    async function editarGenero(genero){

        const { value: novoGenero } = await Swal.fire({
        title: "Edite seu genero",
        input: "text",
        inputLabel: "Novo Genero",
        inputValue:  genero.nome,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                
            return "O campo nao pode estar vazio";
            }
        }
        });
        if (novoGenero) {
                try {
                    // console.log(genero.nome);
                    // console.log(novoGenero);
                    await api.put(`genero/${genero.idGenero}`,{nome: novoGenero});
                    Swal.fire(`O genero foi modificado para ${novoGenero}`);
                } catch (error) {
                    console.log(error);     
                }
        }
    };

    //Criando a paginacao

    //Teste:Validar a mudanca do genero
    // useEffect(() => {
    //     console.log(genero)
    // },[genero])
    //fim do teste

    //Teste:Validar oque esta sendo passado no get

    useEffect(() => {
        listarGenero();
        
    }, [listaGenero]);

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
                    lista={listaGenero}
                    deletar={deletaGenero}
                    funEditar={editarGenero}
                    listagemGenFil="Nao a nenhum genero cadastrado :("
                 />
            </main>
            <Footer />
        </>
    )
}
export default CadastroGenero;

