function gameRoutes(app) {
    let correctAnswers = 0;
    isGameOver = false;

    let isHalfOnHalfUsed = false;
    let isCallToFriendUsed = false;
    let isAskTheCrowdUsed = false;

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

        isHalfOnHalfUsed = false;
        isCallToFriendUsed = false;
        isAskTheCrowdUsed = false;
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
        if (!isHalfOnHalfUsed) {
            const numbers = [0, 1, 2, 3];
            const correctNumber = questions[correctAnswers].correctAnswer;
            const filteredNumbers = numbers.filter(num =>  num !== correctNumber)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);

            res.json({
                answersToRemove: filteredNumbers,
            })
            isHalfOnHalfUsed = true;
        }
        }
        else if (req.params.type === 'friend') {
            if(!isCallToFriendUsed) {
            const showTrueAnswer = Math.random() < 0.7; //70% chance to answer
            let message;
            showTrueAnswer ? message=`Wydaje mi się, że poprawna odpowiedź to ${questions[correctAnswers].answers[questions[correctAnswers].correctAnswer]}` : message='Przepraszam. Nie wiem jak Ci pomóc...' ;
            
            res.json({
                alertText: message,
            })
            isCallToFriendUsed = true;
            }
        }

        else if (req.params.type === 'crowd') {
            if (!isAskTheCrowdUsed) {
            const chart = [10, 20, 30, 40];

            for (let i = chart.length - 1; i > 0; i--) {
                const change = Math.floor(Math.random() * 20 - 10);

                chart[i] += change;
                chart[i - 1] -= change;
            }

            const question = questions[correctAnswers];
            const {correctAnswer} = question;

            [chart[3], chart[correctAnswer]] = [chart[correctAnswer], chart[3]];
            res.json({
                chart,
                availableAnswers: questions[correctAnswers].answers,
            });
            isAskTheCrowdUsed = true;
            }
        }
})



}


module.exports = gameRoutes;