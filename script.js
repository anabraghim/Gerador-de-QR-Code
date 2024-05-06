let button = document.querySelector('.container .box-Texts .form .generatorButton');
let imgQrCode = document.querySelector('.container .boxQrCode img.qrCode-icon');
let input = document.querySelector('.container .box-Texts .form .urlInsertion');

button.addEventListener('click', ()=>{
    let valueInput = input.value; 
    if(!valueInput){ 
        return alert("Adicione um texto ou URL para o QR Code ser gerado");
    }
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${valueInput}`;
    
});