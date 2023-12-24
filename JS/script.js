// Función para dividir una cadena de texto en líneas y agregar <br> según un número máximo de caracteres
function formatText(inputText, maxChars) {
    var lines = [];
    var currentLine = "";

    for (var i = 0; i < inputText.length; i++) {
        currentLine += inputText[i];

        // Si alcanza el número máximo de caracteres y el siguiente caracter no es un espacio, agregar <br> y reiniciar la línea
        if (currentLine.length >= maxChars) {
            if (inputText[i + 1] !== ' ') {
                // Buscar el último espacio en la línea para no cortar palabras
                var lastSpaceIndex = currentLine.lastIndexOf(' ');

                // Si hay un espacio, agregar <br> después del último espacio
                if (lastSpaceIndex !== -1) {
                    lines.push(currentLine.substring(0, lastSpaceIndex + 1) + "<br>");
                    currentLine = currentLine.substring(lastSpaceIndex + 1);
                } else {
                    // Si no hay espacio, agregar <br> y reiniciar la línea
                    lines.push(currentLine + "<br>");
                    currentLine = "";
                }
            } else {
                // Si el siguiente caracter es un espacio, agregar <br> y reiniciar la línea
                lines.push(currentLine + "<br>");
                currentLine = "";
            }
        }
    }

    // Agregar la última línea si es necesario
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines.join("");
}

// Ejemplo de uso
var originalText = "";
var formattedText = formatText(originalText, 100);

// Colocar el texto formateado en md-block
document.getElementById('myMdBlock').innerHTML = formattedText;
