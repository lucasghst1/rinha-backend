const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const port = 8080
app.use(express.json)

class Person {
  constructor(nome, idade) {
    this.id = uuidv4();
    this.nome = nome;
    this.idade = idade;
  }
}
const pessoas = [
  {id: 1, nome: 'lucas', idade: 24}
]
app.get('/pessoas', (req, res) => {
  res.json(pessoas)
})

let person = []

app.get('/person', (res) => {
  res.json(person)
})

app.get('/person/id', (req, res) => {
  const id = parseInt(req.params.id)
  const personId = person.find(p => p.id === id)
  if (!personId)
    return res.status(404).send(`${id}: nao existe`)
  res.json(personId)

})

app.post('/users', (req, res) => {
  const { id, nome, idade } = req.body
  const newPerson = new Person(id, nome, idade)
  newPerson.push(person)
  res.json(person)
})

app.listen(port, () => {
  console.log(`Socket ON!\nPort: ${port}`)
})



