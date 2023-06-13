const users = [
    {id: 1, name: 'Jakub'},
    {id: 2, name: 'Marzena'},
    {id: 3, name: 'Zbigniew'}
]

module.exports = {
    showAllUsers() {
        const usersNames = users.map(user => user.name);
        console.log('\nNasi użytkownicy to:');
        usersNames.forEach(name => console.log(name))
    },

    showUserObj(id) {
        const result = users.filter(user => user.id === id);
        console.log(`\nUżytkownik o id${id} to:`);
        console.log(result);
    },
    usersLength: users.length
}