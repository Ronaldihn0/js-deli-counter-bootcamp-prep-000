


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let newLine = ["The line is currently:"];
    for (var i = 0; i<line.length; i++) {
      newLine.shift(`${[i+1]}. ${line[i]}`);
    }
    return newLine
  }
}
