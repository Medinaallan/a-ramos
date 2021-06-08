//para enviar el formulario a whatsapp//
const evento = document.getElementById('submit')
const enviarFormulario =() => {
    //nombre//
        let InputName = document.getElementById('InputName').value;
    //asunto//
        let InputSubject = document.getElementById('InputSubject').value;
    //mensaje//
        let InputMessage = document.getElementById('InputMessage').value;
    //numero destinatario//
        let cellphone = 50498024751;

//mensaje whatsapp//
var win= window.open(`https://wa.me/${cellphone}?text=Hola%20mi%20nombre%20es${InputName}%20El%20motivo%20de%20este%20mensaje%20es%20${InputSubject}%20-${InputMessage}`,'_blank');
}
//enviar//
evento.addEventListener('click', enviarFormulario)