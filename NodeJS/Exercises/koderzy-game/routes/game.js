function gameRoutes(app) {
    let correctAnswers = 0;
    isGameOver = false;

    const questions = [
        {
            question: 'W którym roku wybuchła II wojna światowa?',
            answers: ['1914', '1939', '1945', '1918'],
            correctAnswer: 1
        },
        {
            question: 'Jak ma na imię mój pies?',
            answers: ['Nero', 'Pimpek', 'Fafik', 'Minion'],
            correctAnswer: 3
        },
        {
            question: 'Jak nazywa się mój kot?',
            answers: ['Tuńczyk', 'Lola', 'Śnieżynka', 'Flex'],
            correctAnswer: 0
        },
    ]

    app.get('/question', (req, res) => {
        if (correctAnswers === questions.length) {
            res.json({winner: true})
        }
        else if (isGameOver) {
            res.json({winner: false})
        }
        else {
            const nextQuestion = questions[correctAnswers];
            const {question, answers} = nextQuestion;
            res.json({
                question, answers
            });
        }
    });

    app.get('/restart', (req,res) => {
        correctAnswers = 0;
        isGameOver = false;
        res.end();
    })


    app.post('/answer/:index', (req,res) => {
        let {index} = req.params;
        index = Number(index);

        if (questions[correctAnswers].correctAnswer === index) {
            correctAnswers++;
        }
        else {
            isGameOver = true;
        }

        res.end();
    })


    app.get('/help/:type', (req,res) => {
        if (req.params.type === 'half') {

        }
        else if (req.params.type === 'friend') {
            const showTrueAnswer = Math.random() < 0.7; //70% chance to answer
            let message;
            showTrueAnswer ? message=`Wydaje mi się, że poprawna odpowiedź to ${questions[correctAnswers].answers[questions[correctAnswers].correctAnswer]}`
        }
        else if (req.params.type === 'crowd') {
        }
})



}


module.exports = gameRoutes;