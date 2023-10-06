const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createPerson, deletePerson, updatePower, getPeople} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/people", getPeople)
app.post("/api/people", createPerson)
app.delete('/api/people/:id', deletePerson)
app.put('/api/people/:id', updatePower)
app.listen(4000, () => console.log("Server running on 4000"));
