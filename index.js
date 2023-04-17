const changeText = () => {
    let inputText = document.getElementById("input").value;
    document.getElementById("text").innerHTML = inputText;
}
const updateText = (inputText) => {
    document.getElementById("text").innerHTML = inputText;
}
