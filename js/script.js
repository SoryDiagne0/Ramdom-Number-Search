const number = Math.floor(Math.random() * 11);

const getNumber = () => {
    const user_input = document.getElementById("number").value;
    console.log(number);

    if((user_input == "") || (isNaN(user_input))) {
        console.log(user_input);
        document.getElementById("output").innerHTML = `Sorry but "${user_input}" is not a valid number.`;
        document.getElementById("output").hidden = false;
    } else {
        if(user_input > number) {
            console.log(user_input);
            document.getElementById("output").innerHTML = `The number sought is less than ${user_input}.`;
            document.getElementById("output").hidden = false;
            document.getElementById("number").value = "";
        } else if(user_input < number) {
            console.log(user_input);
            document.getElementById("output").innerHTML = `The number sought is greater than ${user_input}.`;
            document.getElementById("output").hidden = false;
            document.getElementById("number").value = "";
        } else {
            console.log(user_input);
            document.getElementById("output").innerHTML = `Congratulations, ${number} was indeed the number you are looking for.`;
            document.getElementById("output").hidden = false;
            document.getElementById("number").value = "";
        }
    }
}