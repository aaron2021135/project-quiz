function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}
var myQuestions = [
      {
        question: "how old is yadi"
        answers: {
            a: '17'
            b: '29'
            c: '939393939399389'
          },
          correctAnswer: 'a'
          {
            question: "what is koles middle name"
           answers: {
             a: 'nathew'
             b: 'mathew'
             c: 'diehard'
           },
           correctAnswer: 'b'
