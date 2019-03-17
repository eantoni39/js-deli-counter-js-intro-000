var katzDeliLine = []

function takeANumber(line,name){
line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else { var mem = line[0]
    line.shift()
    return `Currently serving ${mem}.`
}

}

function currentLine (line) {
  if (line.length === 0) {
      return 'The line is currently empty'
    } else { for (var i=0;i<line.length;i++) {
      return `The line is currently: ${i+1}. ${line[i]}`
    }}
}
