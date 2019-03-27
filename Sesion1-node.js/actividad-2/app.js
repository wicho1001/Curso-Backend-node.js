const loopLimit = 1000000000

let holaMundo = () => {
  console.log('Hola Mundo')
}

let Suma = (a, b) => {
  return console.log(a + b)
}

async function asyncFunction () {
  console.log('se inicia loop desde asyncFunction')
  let Aw = await (() => {
    for (let i = 0; i <= loopLimit; i++) {
      if (i === loopLimit) {
        console.log('ya termine de contar desde asyncFunction')
      }
    }
  })
  console.log('se finalizo el loop de asyncFunction')
  return Aw()
}
  
holaMundo()
Suma(23, 3)
asyncFunction()
Suma(28, 8)
