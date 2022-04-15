// Write your code here
const yourName = 'Cesar'

main.remove();

const newHeader = document.createElement("h1");

document.body.append(newHeader);

newHeader.id = "victory"

newHeader.innerHTML = `${yourName} is the champion`

console.log(newHeader);
