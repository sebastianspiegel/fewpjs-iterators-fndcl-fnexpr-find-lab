const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let win = array.find( i => i.result === "W" )
  return win ? win.year : undefined
}