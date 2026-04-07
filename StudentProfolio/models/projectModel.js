let projects = [];

module.exports = {
    getProjects: () => projects,

    addProject: (project) => {
        projects.push(project);
    },

    deleteProject: (index) => {
        projects.splice(index, 1);
    },

    updateProject: (index, project) => {
        projects[index] = project;
    }
};