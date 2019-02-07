var fn = () => 'response'

var a: boolean
var b: number
var c: string
var d: number[]

a = false
b = 100
c = "yoyo"
d = [123, 345, 567, 678]

console.log(a)
console.log(b)
console.log(c)
console.log(d)


function add(a : number, b : number) : number {
    return a + b
}

var functionTest = add(1, 2)
console.log(functionTest)

// Any type, 
var anyType : any
// var anyType // Can also just do this
anyType = 10
anyType = 'woot'
anyType = true


// Union type, it's saying this variable can be either type separated by pipes.  
var oneOfTwoTypes : number | boolean
oneOfTwoTypes = 10
oneOfTwoTypes = true


var addedNewFeature = 100
