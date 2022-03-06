const ROLE = {
    ADMIN: "admin",
    BASIC: "basic"
}

module.exports.data = {
    ROLE,
    users: [
        {id: 1, name: "Rayhan", role: ROLE.ADMIN},
        {id: 1, name: "Jihan", role: ROLE.BASIC},
        {id: 1, name: "Marjana", role: ROLE.BASIC},
    ],
    projects: [
        {id: 1, name: "Rayhan's project", userId: 1},
        {id: 1, name: "Jihan's project", userId: 2},
        {id: 1, name: "Marjana's project", userId: 3},
    ]
}
