var url = "https://opentdb.com/api.php?amount=1"

var button = document.querySelector("#btn");

var question = document.querySelector("#question");

button.addEventListener("click", function() {
    axios.get(url)
        .then(function(data) {
            console.log(data.data.results[0]);
            question.innerText = data.data.results[0].question;
        })
        .catch(function(err) {
            console.log("Error");
        })
});