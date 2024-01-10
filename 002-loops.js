const s = 'javascriptloops' // default input to challenge

function vowelsAndConsonants(s) {
    let vowelsOnText = []
    let consOnText = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
        vowelsOnText.push(s[i])
    } else {
        consOnText.push(s[i])
        }
    }
    let text = vowelsOnText.concat(consOnText)
    for(let i = 0; i < text.length; i++){
    console.log(text[i])
    }
}
vowelsAndConsonants(s)