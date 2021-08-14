var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// Minion translator API
var serverURL = "https://api.funtranslations.com/translate/huttese.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    outputDiv.innerText = "something wrong with server! try again after some time";
    outputDiv.style.color = "Red";
}

function clickHandler(){
    var inputText = txtInput.value; 
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText  = json.contents.translated;
            outputDiv.innerText = translatedText;
            
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)