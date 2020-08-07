const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+=-{}|[]'

let slider = document.getElementById('slider')
let textField = document.getElementById('textfield')
let lengthLabel = document.getElementById('lengthlabel')

function generatePassword(){
    let characterAmount = slider.value
    let passwordBox = ""

    for(let i = 0; i <= characterAmount; i++){
        passwordBox = passwordBox + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)))
    }

    textField.value = passwordBox
}

slider.oninput = function(){
    if(slider.value > 0){
        lengthLabel.innerHTML = `Length: ${slider.value}`
    }
}

function copyPassword(){
    textField.select()
    document.execCommand('Copy')
    alert('Generated password successfully copied to clipboard!')
}

