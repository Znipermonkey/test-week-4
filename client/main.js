const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const peopleContainer = document.querySelector('#people-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/people`

const peopleCallback = ({ data: people }) => peopleCallback(people)
const errCallback = err => console.log(err)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getAllPeople = () => axios.get(baseURL).then(peopleCallback).catch(errCallback)
const createPerson = body => axios.post(baseURL, body).then(peopleCallback).catch(errCallback)
const deletePerson = id => axios.delete(`${baseURL}/${id}`).then(peopleCallback).catch(errCallback)
const updatePerson = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(peopleCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let power = document.querySelector('#power')

    let bodyObj = {
        name: name.value,
        power: power.value, 

    }

    createPerson(bodyObj)

    name.value = ''
    power.value = ''
}

function createPersonCard(person) {
    const personCard = document.createElement('div')
    personCard.classList.add('person-card')

    houseCard.innerHTML = `
    <p class="name">${person.name}</p>
    <div class="btns-container">
        <button onclick="updatePerson(${person.id}, 'minus')">-</button>
        <p class="house-price">$${person.price}</p>
        <button onclick="updatePerson(${person.id}, 'plus')">+</button>
    </div>
    <button onclick="deletePerson(${person.id})">delete</button>
    `


    peopleContainer.appendChild(personCard)
}

function displayPeople(arr) {
    peopleContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPersonCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPeople()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)