document.addEventListener('DOMContentLoaded', () => {
    //color changing variables 
    const style1 = document.getElementById('style1');
    const style2 = document.getElementById('style2');
    const OGstyle = document.getElementById('originalStyle');
    const header = document.getElementById('HR');

    //Form variables
    const form = document.getElementById('userInput');
    const humanRadio = document.getElementById('human');
    const humanCheck = document.getElementById('robot');
    const pet = document.getElementById('pet');
    const advice = document.getElementById('advice');
    const suggestions = document.getElementById('suggestions')
    const humanRadioError = document.getElementById('humanError');
    const humanCheckError = document.getElementById('robotError');
    const petError = document.getElementById('petError');
    const adviceError = document.getElementById('adviceError');
    const suggestionsError = document.getElementById('suggestionsError')
    const Submitted = document.getElementById('valid');

    //color changing function buttons 
    style1.addEventListener('click', function() {
        header.style.color = 'white';
        header.style.backgroundColor = 'blue';
    })
    style2.addEventListener('click', function() {
        header.style.color = 'blue';
        header.style.backgroundColor = 'orange';
    })
    OGstyle.addEventListener('click', function() {
        header.style.color = 'white';
        header.style.backgroundColor = 'red';
    })

    //form validation
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        humanRadioError.textContent = "";
        humanCheckError.textContent = "";
        petError.textContent = "";
        adviceError.textContent = "";
        suggestionsError.textContent = "";
        Submitted.textContent = 'Not Submitted'
        Submitted.style.backgroundColor = 'white';
        Submitted.style.color = 'black';
        let valid = true;
        console.log('entry')
        if (pet.value.trim() === ""){
            petError.innerHTML = "This cannot be left blank";
            petError.style.backgroundColor = 'red';
            petError.style.color = 'white';
            console.log('pet')
            valid = false;
        }
        if (advice.value.trim() === ""){
            adviceError.innerHTML= "This cannot be left blank";
            adviceError.style.backgroundColor = 'red';
            adviceError.style.color = 'white';
            console.log('advice')
            valid = false
        }
        if (suggestions.value.trim() === ""){
            suggestionsError.innerHTML= "This cannot be left blank";
            suggestionsError.style.backgroundColor = 'red';
            suggestionsError.style.color = 'white';
            console.log('suggestions')
            valid = false;
        }
        if (!humanRadio.checked){
            humanRadioError.innerHTML= "This must be checked";
            humanRadioError.style.backgroundColor = 'red';
            humanRadioError.style.color = 'white';
            console.log('radio')
            valid = false;
        }
        if (!humanCheck.checked){
            humanCheckError.innerHTML= "This must be checked";
            humanCheckError.style.backgroundColor = 'red';
            humanCheckError.style.color = 'white';
            console.log('check')
            valid = false;
        }
        if (!valid){
            return;
        }
        Submitted.textContent = 'Form Submitted'
        Submitted.style.backgroundColor = 'green';
        Submitted.style.color = 'white';

    })
})
