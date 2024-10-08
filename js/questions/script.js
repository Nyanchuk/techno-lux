const questions = [
    {
        text: "Как происходит оплата?",
        answer: "Оплата, как правило, происходит поэтапно и согласно фактически выполненным объемам работ."
    },
    {
        text: "Сколько длиться ремонт?",
        answer: "Сроки зависят от объема и сложности работ, а также от поставок материала."
    },
    {
        text: "Кто занимается закупкой материала?",
        answer: "Закупку, доставку и прием материалов по договоренности."
    },
    {
        text: "Вырастет ли стоимость?",
        answer: "Стоимость работ НЕ может измениться без согласования с заказчиком. В таких случаях составляется дополнительное соглашение к договору с новым объемом работ."
    },
    {
        text: "Есть ли реальная гарантия?",
        answer: "Гарантия прописывается в договоре и зависит от вида выполняемых работ."
    },
];

const questionsContainer = document.getElementById('questionsContainer');

function toggleQuestion(index) {
    const answerElement = questionsContainer.querySelectorAll('.answer')[index];
    const imgButton = questionsContainer.querySelectorAll('.questions__contain_img')[index];
    answerElement.classList.toggle('show');
    imgButton.classList.toggle('questions__contain_img_active');
}

questions.forEach((question, index) => {
    const questionBlock = document.createElement('div');

    questionBlock.innerHTML = `
        <div class="questions__contain_block" onclick="toggleQuestion(${index})">
            <span>${question.text}</span>
            <button type="button" class="questions__contain_img"></button>
        </div>
        <div class="answer">${question.answer}</div>
    `;

    questionsContainer.appendChild(questionBlock);
});