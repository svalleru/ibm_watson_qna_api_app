
var examples = [
  'What is HIV?',
  'What are the benefits of taking aspirin daily?',
  'What can I do to get more calcium?',
  'What is hepatitis C?',
  'How do I quit smoking?',
  'Who is at risk for diabetes?',
  'What should I expect before heart surgery?',
  'What is my recovery outlook after heart surgery?',
  'I am at risk for high blood pressure?'
];

function loadExample() {
  document.getElementById('questionText').value = examples[Math.floor(Math.random()*examples.length)];
}

//fill and submit the form with a random example
function showExample() {
  loadExample();
  document.getElementById('qaForm').submit();
}

document.onload=
  (document.getElementById('questionText').value == '')?
    loadExample() : '';