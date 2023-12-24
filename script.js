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
var originalText = "# **¿Mejorará Argentina con Javier Milei?**\n"+


"Desde 1875 hasta la creación del *Banco Central de la República de Argentina* en 1935, **Argentina se posicionaba entre las naciones más prósperas del mundo**, exhibiendo un PIB per cápita **comparable** al de países como los **Estados Unidos** [^1]. No obstante, la realidad actual es notablemente dispar.\n"+


"## Introducción\n"+


"La situación heredada a Milei es sumamente compleja. Por eso, cabe una pregunta clave, ***¿podrá Milei revertir la situación en Argentina?***. Para abordar esto, debemos comprender los **problemas económicos actuales** que aquejan al país.\n"+


"### 1. Desafíos principales:\n"+


"- Una **inflación** del **161%** [^2].\n"+


"- Una **deuda** pública que alcanza el **85%** [^3].\n"+


"- **Baja confianza en Argentina**: Desde la década de 1970, el crecimiento económico de Argentina ha sido extremadamente volátil, alternando entre períodos de crecimiento sólido y **crisis**. Esta inestabilidad es el resultado de la **dinámica inflacionaria** y el **impago 9 veces de créditos del FMI** [^4] [^5] [^6].\n"+


"- **Proteccionismo y bajo volumen de comercio**: Argentina ha mantenido una política comercial relativamente cerrada debido a políticas proteccionistas de presidentes anteriores, las cuales **Milei intenta revertir** [^7].\n"+


"- **Fiscalidad elevada y confusa**: Según el *Instituto Argentino de Análisis Fiscal*, en Argentina **existen 165** tributos, ubicándose entre los más altos de América Latina. **Solo 12** de ellos **generan el 91% de la recaudación** total. Este panorama de complejidad y confusión **obstaculiza el florecimiento económico** de Argentina [^8].\n"+


"- **Bajo nivel de libertad económica**: Argentina se sitúa en el puesto 144 en el *índice de libertad económica*, incluso por **debajo de países como Chad, Uganda y Uzbekistán** [^9].\n"+


"### 2. Propuestas de Milei:\n"+


"Milei sugiere las siguientes soluciones:\n"+

"- **Reducción de las trabas burocráticas y** los **impuestos** innecesarios.\n"+

"- **Dolarización** de la economía.\n"+

"- **Reducción del gasto** al **5%** del PIB.\n"+

"- **Liberalización** de Argentina.\n"+

"- **Privatización** de empresas públicas.\n"+


"Estas medidas buscan lograr tres objetivos: poner fin a la inflación, reducir la deuda y liberalizar la economía argentina para fomentar la creación de negocios y la prosperidad económica del país.\n"+


"## Resultados y Perspectivas\n"+


"Ahora bien, ***¿qué podemos esperar de estas medidas?*** Para concluirlo, observemos la reacción de la bolsa y los mercados tras la llegada de Milei.\n"+


"```> El índice Merval experimentó un **aumento de más del 20%** en la **Bolsa de Buenos Aires** [^10].```\n"+


"```> El gobierno de **Milei devalúa** la moneda argentina en **más del 50%**, llegando a **800 pesos por dólar** [^11].```\n"+


"Como se puede apreciar, existen **noticias** tanto **positivas** como **negativas**. Sin embargo, esto revela un dato crucial: **el mercado confía en Javier Milei**, y eso es lo más significativo. \n"+


"```> Guillermo Moreno, ex secretario peronista de Comercio, expresó: 'En la hiperinflación de Alfonsín, la gente comía; lo de **Milei es algo nuevo: no se va a poder comer**' [^12].```\n"+


"Esto se debe a que, al recortar Milei las subvenciones, no se podrá asistir a las familias. No obstante, como hemos demostrado, Milei está atrayendo inversiones y generando confianza en el mercado, elementos esenciales para mitigar la inminente caída económica**. **Milei ha advertido que la economía argentina empeorará en los próximos 2 años**, pero este es un **precio a pagar para solucionar un mal mayor, el colapso completo de la economía de Argentina**.\n"+


"Sin embargo, una duda común es: ***¿Por qué no tomamos medidas de manera más lenta y menos brusca? ¿No sería eso mejor para evitar la pobreza que está por venir?*** Pues **lo cierto es que no**, según **un estudio** las **medidas drásticas aseguran mayor probabilidad el éxito**, por lo cual las medidas de Milei tendrán mayor probabilidad de éxito si se toman de manera inmediata en vez de lenta y controlada [^13].\n"+


"Por último, sobre las medidas como la ***Banca Simons*** y la **dolarización**, que son bastante **controversial**, comparto la idea de que aunque puedan **parar la inflación**, y los riesgos bancarios, suponen una perdida del control del estado sobre la moneda y **Argentina no tiene actualmente suficientes dólares** para hacer tal decisión por lo cual no la veo una medida factible para llevar acabo a corto plazo.\n"+


"## Conclusión\n"+


"***¿Cuál es la conclusión?*** En **mi opinión** y con los datos en la mano, **Argentina sí mejorará con Javier Milei, pero los 2 primeros años serán muy duros** para el bienestar de los argentinos que **únicamente si Milei logra mantenerse en el poder**, podemos confiar en que Argentina y los argentinos prosperarán. Sin embargo, **lo difícil es que Milei se mantenga en el poder** porque **no hay soluciones fáciles** para Argentina sino reformas duras que pueden traer en el corto plazo mucho dolor y en el largo mucho bienestar. \n"+


"[^1]: https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2018?lang=en\n"+

"[^2]: https://www.indec.gob.ar/uploads/informesdeprensa/ipc_12_23EA48BE000C.pdf\n"+

"[^3]: https://www.argentina.gob.ar/economia/finanzas/graficos-deuda/evolucion-de-la-deuda-bruta\n"+

"[^4]: https://www.perfil.com/noticias/economia/la-economia-de-argentina-medio-siglo-entre-tormentas-fluctuaciones-y-crisis.phtml\n"+

"[^5]: https://www.bloomberg.com/news/photo-essays/2019-09-11/one-country-eight-defaults-the-argentine-debacles\n"+

"[^6]: https://www.eleconomista.com.mx/economia/Argentina-inflacion-descontrolada-e-incertidumbre-economica-20230304-0019.html\n"+

"[^7]: https://santandertrade.com/es/portal/analizar-mercados/argentina/cifras-comercio-exterior\n"+

"[^8]: https://www.oecd.org/tax/tax-policy/estadisticas-tributarias-america-latina-caribe-argentina.pdf\n"+

"[^9]: https://www.heritage.org/index/ranking\n"+

"[^10]: https://www.dw.com/es/argentina-los-mercados-reaccionan-a-la-victoria-de-milei/a-67524609\n"+

"[^11]: https://www.abc.es/internacional/gobierno-milei-devalua-moneda-argentina-800-pesos-20231212235810-nt.html\n"+

"[^12]: https://www.agenciapacourondo.com.ar/economia/en-la-hiperinflacion-de-alfonsin-la-gente-comia-lo-de-milei-es-algo-nuevo-no-se-va-poder\n"+

"[^13]: https://deliverypdf.ssrn.com/delivery.php?ID=222100088117000125077013103024097099028056019049035053126024085101126083102126001067102059037001108061038110082001115026001091006000058075009001122124001107077070046039004095012118096103123092090084001125072010010030023076084004121094125067120127073&EXT=pdf&INDEX=TRUE\n";
var formattedText = formatText(originalText, 100);

// Colocar el texto formateado en md-block
document.getElementById('myMdBlock').innerHTML = formattedText;