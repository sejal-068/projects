let users = [];

module.exports = {
    addUser: (user) => users.push(user),

    findUser: (email, password) => {
        return users.find(u => u.email === email && u.password === password);
    }
};