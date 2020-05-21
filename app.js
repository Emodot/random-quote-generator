function quoteGenerator(){
	fetch("https://type.fit/api/quotes")
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(data) {
	   //	console.log(data);

	    let randomNumber = Math.floor(Math.random()*1643);

	    document.getElementById("quote").innerHTML = data[randomNumber].text;
	    document.getElementById("author").innerHTML = data[randomNumber].author;
	  });
}

quoteGenerator();

function doFunction(){
	quoteGenerator();
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("quote");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}