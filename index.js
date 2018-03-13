
var katzDeli = [];


function currentLine(line) {
  if (line.length) {
    return "The line is currently empty.";
  }
   else {
    let newLine = ["The line is currently:"];
    for (var i = 0; i<line.length; i++) {
      newLine.shift(`${[i+1]}. ${line[i]}`);
    }
    return newLine
  }
}

var katzDeliLine = [];

function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}