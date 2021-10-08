import { v4 as uuidv4 } from 'uuid';
let users = []

export const createUser = (req,res) =>{
    const user = req.body; 
    users.push({ ...user, id: uuidv4()});
   res.send(`user with the name ${user.firstName} added to the database`);
}
export const getUser = (req, res) =>{
    const {id}  = req.params;
    const foundUser =  users.find((user) => user.id ===id)
     res.send(foundUser);
 }
 export const getUsers = (req,res) =>{
    console.log(users);
    res.send(users);
}
export const deleteUser = (req, res) =>{
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from database.`)
}
export const updateUser = (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    console.log(user);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;

    res.send(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
}