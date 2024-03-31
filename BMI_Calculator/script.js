const weight = document.querySelector('.weight');

const height = document.querySelector('.height');

function calculate(){
    let weightinKgs = weight.value;
    let heightinMtrs = height.value;

    let bmi = weightinKgs / (heightinMtrs * heightinMtrs);

    let BMIHTML = `<p>Your Body Mass Index is ${bmi}kg/m2.`


}