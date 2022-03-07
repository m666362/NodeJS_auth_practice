const data = require("../data");
module.exports.canViewProject = (user, project) => {
    return (user.role == data.data.ROLE.ADMIN || user.id==project.userId)
};

module.exports.scopedProject = (user, projects)=>{
    if (user.role == data.data.ROLE.ADMIN) return projects;
    return projects.filter(project=> project.userId==user.id)
}

module.exports.canDeleteProject = (user, project) => {
    return (user.role == data.data.ROLE.ADMIN || user.id==project.userId)
};