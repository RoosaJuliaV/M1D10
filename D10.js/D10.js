JS EXERCISES

const person = {
  firstName: "Roosa",
  lastName: "Vuotso",
  email: "roosavuotso@hotmail.com"
}
delete person.email
console.log(person)

const colours = ["yellow", "green", "blue", "red", "white", "purple", "orange", "pink", "black", "grey"]
console.log(colours)

let randomNumber = Array.from({length: 100}, () => Math.floor(Math.random() * 200))
console.log(randomNumber)

Math.min(...randomNumbers)
console.log(Math.min(...randomNumbers))

Math.max(...randomNumbers)
console.log(Math.max(...randomNumbers))

        /* 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values */