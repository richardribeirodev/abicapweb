const formulario = document.querySelector("form")

const Iusuario = document.querySelector("#usuario");
const Isenha = document.querySelector("#senha");
const Iemail = document.querySelector("#email");
const ImodeloCarro = document.querySelector("#modeloCarro");
const IplacaCarro = document.querySelector("#placaCarro");
const IcapacidadeBateria = document.querySelector("#capacidadeBateria");
const ImarcaCarro = document.querySelector("#marcaCarro");
const IconectorBateria = document.querySelector("#conectorBateria");
const IcargaBateria = document.querySelector("#cargaBateria");

function cadastrar() {
    fetch("/echo/json/", //ENDPOINT DA API 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                usuario: Iusuario.value,
                senha: Isenha.value,
                email: Iemail.value,
                modeloCarro: ImodeloCarro.value,
                placaCarro: IplacaCarro.value,
                capacidadeBateria: IcapacidadeBateria.value,
                marcaCarro: ImarcaCarro.value,
                conectorBateria: IconectorBateria.value,
                cargaBateria: IcargaBateria.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function limpar(){
    Iusuario.value = "";
    Isenha.value = "";
    Iemail.value = "";
    ImodeloCarro.value = "";
    IplacaCarro.value = "";
    IcapacidadeBateria.value = "";
    ImarcaCarro.value = "";
    IconectorBateria.value = "";
    IcargaBateria.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});