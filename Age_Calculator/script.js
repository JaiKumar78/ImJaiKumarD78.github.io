function calculate() {
    setInterval(() => {
        let birthDate = new Date(document.querySelector("#birthdate").value);

        let currentDate = new Date();
        let ageInMs = currentDate.getTime() - birthDate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMns = ageInDays / 30.4375;
        let ageInYears = ageInMns / 12;

        document.querySelector(".years").innerHTML = Math.floor(ageInYears);
        document.querySelector(".months").innerHTML = Math.floor(ageInMns % 12);
        document.querySelector(".days").innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector(".hours").innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector(".minutes").innerHTML = Math.floor(ageInMins % 60);
        document.querySelector(".seconds").innerHTML = Math.floor(ageInS % 60);
        document.querySelector(".seconds").style.boorderBottom = "1px solid grey";
    }, 1000);
}

function reset() {
    window.location.reload();
}