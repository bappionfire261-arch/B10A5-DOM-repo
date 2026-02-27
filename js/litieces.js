
function getInputFaielValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFaieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

function showSectionById (id){
    // hide all the section
     document.getElementById('section-container').classList.add ('hidden');
     document.getElementById('transection-history').classList.add ('hidden');
   

    //  show the sectio with the provide id ad parameter
    document.getElementById(id).classList.remove ('hidden');
}