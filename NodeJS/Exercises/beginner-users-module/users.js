const users = [
    {id: 1, name: 'Jakub'},
    {id: 2, name: 'Marzena'},
    {id: 3, name: 'Zbigniew'}
]

module.exports = {
    showName(id) {
        const result = users.map(user => user.id === id);
        console.log(result);
    },
    showID(name) {
        
    },
    //length of users
}