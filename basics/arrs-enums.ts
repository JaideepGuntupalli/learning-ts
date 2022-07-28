// const person: {
//     name: string;
//     age: number;
// } = {

enum Role {
    ADMIN,
    READ_ONLY,
}

//Enum is a custom type

const person = {
    name: "Tony Stark",
    age: 30,
    hobbies: ["Genius", "Billionare", "Playboy", "Philantropist"],
    role: Role.ADMIN,
};

let favActivites: string[];

favActivites = ["Sports", "Superhero"];

if (person.role === Role.ADMIN) {
    console.log(person.name);
}
