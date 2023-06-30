module.exports = {
    keySession: ['myKEY'],
    maxAgeSession: 60*10*1000, //10minutes

    loginData: {
        correctLogin: 'admin',
        correctPassword: '123',
    },

    database: {
        uri: 'mongodb+srv://admin:test_password@cluster0.bqorlqk.mongodb.net/?retryWrites=true&w=majority',
    },
}
