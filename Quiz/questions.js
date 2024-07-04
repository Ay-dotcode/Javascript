const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Wordsworth", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What is the primary ingredient in sushi?",
        answers: [
            { text: "Rice", correct: true },
            { text: "Bread", correct: false },
            { text: "Potato", correct: false },
            { text: "Pasta", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Venice", correct: false },
            { text: "Rome", correct: true },
            { text: "Milan", correct: false },
            { text: "Florence", correct: false }
        ]
    },
    {
        question: "Which planet is known for its rings?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Saturn", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the largest mammal on land?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: true },
            { text: "Hippopotamus", correct: false },
            { text: "Rhinoceros", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Iron", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Lungs", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Who is known as the father of computers?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "What is the most widely spoken language in the world?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "What is the smallest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Southern Ocean", correct: false }
        ]
    },
    {
        question: "Which city is known as the Big Apple?",
        answers: [
            { text: "Los Angeles", correct: false },
            { text: "Chicago", correct: false },
            { text: "Miami", correct: false },
            { text: "New York City", correct: true }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Tomato", correct: false },
            { text: "Onion", correct: false },
            { text: "Avocado", correct: true },
            { text: "Pepper", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false }
        ]
    },
    {
        question: "What is the largest island in the world?",
        answers: [
            { text: "Borneo", correct: false },
            { text: "Greenland", correct: true },
            { text: "New Guinea", correct: false },
            { text: "Madagascar", correct: false }
        ]
    },
    {
        question: "Which is the hottest planet in our solar system?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
];

export default questions;