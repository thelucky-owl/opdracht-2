const featureExtractor = ml5.featureExtractor('MobileNet', {numLabels:3},modelLoaded);
const classifier = featureExtractor.classification();
let synth = window.speechSynthesis


const fileCheckButton = document.querySelector("#file-check")
const textOutput = document.querySelector("#textOutput")
const upload = document.querySelector('#image')
const resultDiv = document.getElementById('result')
featureExtractor.load(filesOrPath = "../model/ml5 model.json");

fileCheckButton.addEventListener("change", (event) =>classifyImage(event));
speak("hello")
function classifyImage(event){
    upload.src = URL.createObjectURL(event.target.files[0])
    classifier.classify(document.getElementById('image'), (err, result) => showResult(result));
}
function showResult(result){

  console.log(result)
  speak(result[0].label)
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