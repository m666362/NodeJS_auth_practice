// const { v4: uuidv4 } = require('uuid');
// let db = {};
// db['users'] = [{
//     id: uuidv4(),
//     name: "Md Jihan",
//     email: "mdrayhan9464@gmail.com",
//     password: "something",
//     status: "Admin"
// }];
// db['status'] = [];
// db['photos'] = [];

// const insertUser = (user)=>{
//     let dbUser = {
//         id: uuidv4(),
//         email: user.email,
//         password: user.password,
//         name: user.name,
//         status: user.status
//     }
//     db = {
//         ...db,
//         users: [
//             ...db.users, dbUser
//         ]
//     }
// }

// let db = {};
// db['users'] = [{
//     id: uuidv4(),
//     name: "Md Jihan",
//     email: "mdrayhan9464@gmail.com",
//     password: "something",
//     status: "Admin"
// }];
// db['status'] = [];
// db['photos'] = [];
// let user = {
//     id: uuidv4(),
//     name: "Md Rayhan",
//     email: "mdrayhan9464@gmail.com",
//     password: "something"
// }
// db = {
//     ...db,
//     users: [
//         ...db.users, user
//     ]
// }
// console.log({id: uuidv4(), db: JSON.stringify(db)});