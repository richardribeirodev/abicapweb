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

const IpontoRecarga = document.querySelector("#pontoRecarga");
const IdataReserva = document.querySelector("#dataReserva");
const IhorarioInicio = document.querySelector("#horarioInicio");
const IhorarioFim = document.querySelector("#horarioFim");

if (IdataReserva) {

    const hoje = new Date();

    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);

    const hojeFormatado = hoje.toISOString().split("T")[0];
    const amanhaFormatado = amanha.toISOString().split("T")[0];

    IdataReserva.min = hojeFormatado;
    IdataReserva.max = amanhaFormatado;
}

function cadastrar() {

    fetch("/echo/json/", // ENDPOINT DA API
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: "POST",

            body: JSON.stringify({
                usuario: Iusuario?.value,
                senha: Isenha?.value,
                email: Iemail?.value,
                modeloCarro: ImodeloCarro?.value,
                placaCarro: IplacaCarro?.value,
                capacidadeBateria: IcapacidadeBateria?.value,
                marcaCarro: ImarcaCarro?.value,
                conectorBateria: IconectorBateria?.value,
                cargaBateria: IcargaBateria?.value
            })
        })

        .then(function (res) {
            console.log(res);
        })

        .catch(function (res) {
            console.log(res);
        });
}

function reservar() {

    const dataHoraInicio =
        `${IdataReserva.value}T${IhorarioInicio.value}`;

    const dataHoraFim =
        `${IdataReserva.value}T${IhorarioFim.value}`;

    fetch("/echo/json/", // ENDPOINT DA API
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: "POST",

            body: JSON.stringify({
                pontoRecarga: IpontoRecarga.value,

                horarioInicio: dataHoraInicio,
                horarioFim: dataHoraFim
            })
        })

        .then(function (res) {

            console.log(res);

            alert("Reserva realizada com sucesso!");
        })

        .catch(function (res) {

            console.log(res);

            alert("Erro ao realizar reserva!");
        });
}

function limparCadastro() {

    if (Iusuario) Iusuario.value = "";
    if (Isenha) Isenha.value = "";
    if (Iemail) Iemail.value = "";
    if (ImodeloCarro) ImodeloCarro.value = "";
    if (IplacaCarro) IplacaCarro.value = "";
    if (IcapacidadeBateria) IcapacidadeBateria.value = "";
    if (ImarcaCarro) ImarcaCarro.value = "";
    if (IconectorBateria) IconectorBateria.value = "";
    if (IcargaBateria) IcargaBateria.value = "";
}

function limparReserva() {

    if (IpontoRecarga) IpontoRecarga.value = "";
    if (IdataReserva) IdataReserva.value = "";
    if (IhorarioInicio) IhorarioInicio.value = "";
    if (IhorarioFim) IhorarioFim.value = "";
}

formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    if (IpontoRecarga) {

        if (IhorarioFim.value <= IhorarioInicio.value) {

            alert("O horário final deve ser maior que o horário inicial.");
            return;
        }

        reservar();
        limparReserva();
    }

    else {

        cadastrar();
        limparCadastro();
    }
});