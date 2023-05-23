let screen=document.getElementById("screen")
console.log(screen)

let screenValue = ''

let buttons = document.querySelectorAll("button")
console.log(buttons)


for(item of buttons)
{
    console.log(item.innerText)
    console.log(item)
    //let buttonText=item.innerText
    item.addEventListener("click", (e) => {
        //console.log(e.target)
        //console.log(item)
        console.log(e.target)
        console.log(e)
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText)
        
        if (buttonText == 'X') {
            buttonText = '*'
        }
        
        if (buttonText == 'C') {
            screenValue = ""
            screen.value = screenValue
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue)
            screenValue=screen.value
        }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}