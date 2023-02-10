export default function initQuestions() {
  const questionsList = document.querySelectorAll('dl dt');

  if (questionsList.length) {
    questionsList[0].classList.add('active');
    questionsList[0].nextElementSibling.classList.add('active');

    function activeQuestion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    questionsList.forEach((item) => {
      item.addEventListener('click', activeQuestion);
    })
  }
}