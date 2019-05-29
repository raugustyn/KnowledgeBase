console.indentLevel = 0
console.savedLog = console.log

console.log = function(message, ...optionalParams) {
    var indentStr = ''
    for (var i=1; i<console.indentLevel; i++) {
        indentStr += "    "
    }
    console.savedLog(indentStr, message, ...optionalParams)
}

console.openSection = function (message, ...optionalParams) {
    console.log(message, ...optionalParams)
    console.indentLevel += 1
}

console.closeSection = function (message, ...optionalParams) {
    if (! message) {
        message = "Done."
    }
    console.indentLevel -= 1
    console.log(message, ...optionalParams)
}
