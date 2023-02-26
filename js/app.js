const featureExtractor = ml5.featureExtractor('MobileNet', {numLabels:3},modelLoaded);
const classifier = featureExtractor.classification();
let synth = window.speechSynthesis


const fileCheckButton = document.querySelector("#file-check")
const textOutput = document.querySelector("#textOutput")
const upload = document.querySelector('#image')
const resultDiv = document.getElementById('result')
const checkBtn = document.querySelector("#check");
featureExtractor.load(filesOrPath = "https://thelucky-owl.github.io/opdracht-2/model/ml5 model.json");
checkBtn.addEventListener("click", () => classifyImage());

fileCheckButton.addEventListener("change", (event) =>addImage(event));

speak("hello, can you show me a picture of a pigeon?")
function addImage(event){
  upload.src = URL.createObjectURL(event.target.files[0])
}

function classifyImage(event){
  
    classifier.classify(document.getElementById('image'), (err, result) => showResult(result));
}
function showResult(result){
  if(result[0].label == "pigeon"){
    speak("hey you found a "+result[0].label)
  }else{
    speak(" actually that's a "+result[0].label)
  }

  resultDiv.innerText = result[0].label
}
function modelLoaded() {
    console.log('Model Loaded!');
  }
  function speak(text) {
    if (synth.speaking) {
        console.log('still speaking...')
        return
    }
    if (text !== '') {
        let utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
    }
}