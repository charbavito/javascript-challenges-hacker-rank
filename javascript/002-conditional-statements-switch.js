const s = 'adfgt'
const firstLetter = s[0]

const A = ['a', 'e', 'i', 'o', 'u']
const B = ['b', 'c', 'd', 'f', 'g']
const C = ['h', 'j', 'k', 'l', 'm']
const D = ['n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

switch(true){
    case A.includes(firstLetter):
        console.log('A')
        break;
    case B.includes(firstLetter):
        console.log('B')
        break;
    case C.includes(firstLetter):
        console.log('C')
        break;
    case D.includes(firstLetter):
        console.log('D')
        break;
    default:
        console.log('num deu!')
}