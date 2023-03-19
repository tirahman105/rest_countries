console.log('connected');

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


// Normal system of getting data from country 
/* const getCountryHTML = country => {
    return `
        <div class= "country">
            <h2> ${country.name.common}</h2>
            <img src="${country.flags.png}" >
            <h3> Capital : ${country.capital} <h3>
        </div>
    `
} */


// destructuring  Option 2 
/* const getCountryHTML = country => {

    const {name, flags, capital} = country
    return `
        <div class= "country">
            <h2> ${name.common}</h2>
            <img src="${flags.png}" >
            <h3> Capital : ${capital} <h3>
        </div>
    `
} */


//destructuring option 3 
const getCountryHTML = ({name, flags, capital}) => {

    return `
        <div class= "country">
            <h2> ${name.common}</h2>
            <img src="${flags.png}" >
            <h3> Capital : ${capital} <h3>
        </div>
    `
}

loadCountries();