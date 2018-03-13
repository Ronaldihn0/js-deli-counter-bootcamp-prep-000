
var katzDeli = [];


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

function currentLine(katzDeliLine) {
  var x;

  if (katzDeliLine.length == 0 || katzDeliLine == null) {
    return("The line is currently empty.");
  }
  else {
    var text = ["The line is currently:"];

      for (x = 0; x < katzDeliLine.length; x++) {
            text.push(` ${katzDeliLine.indexOf() + 1}.`);
            text.push(` ${katzDeliLine[x]}`);
          }
        }
  text.join("");
  return text;
}