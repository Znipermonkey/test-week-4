let globalID = 3
const people = require("./db.json")

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A fresh start will put you on your way.','A friend is a present you give yourself.','A lifetime friend shall soon be made.','Adventure can be real happiness.','All will go well with your new project.' ];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    deletePerson: (req, res) => {
        let index = people.findIndex(person => person.id === +req.params.id)
        people.splice(index, 1)
        res.status(200).send(people)
    },
    createPerson: (req, res) => {
        const {name, power} = req.body
        let newPerson = {
            id: globalID,
            name,
            power: +power
        }
        people.push(newPerson)
        globalID++
        res.status(200).send(people)
    },
    updatePower: (req, res) => {
        const{type} = req.body 
        let index = people.findIndex(person => person.id === +req.params.id)
        if(type === 'minus'){
            people[index].power -= 1
            res.status(200).send(people)
        }else if (type === 'plus'){
            people[index].power += 1
            res.status(200).send(people)
        }else{
            res.status(400).send('failed')
        }
        
    },
    getPeople: (req, res) => {
        res.status(200).send(people)
    },
    

}