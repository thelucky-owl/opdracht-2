const featureExtractor = ml5.featureExtractor('MobileNet', {numLabels:3},modelLoaded);
const classifier = featureExtractor.classification();
// const imageClassifier = ml5.imageClassifier('MobileNet', modelLoaded);
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
  // imageClassifier.classify(document.getElementById('image'), (err, result2) => {
  //   console.log(result2); // Should output 'dog'
  // });;

  // if(result[0].confidence < 0.6){
  // }else{

  // }
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