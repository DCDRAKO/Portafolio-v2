var heightCanvas = screen.height;
var widthCanvas=screen.width;


canvas.height = heightCanvas;
canvas.width = (widthCanvas*3) ;

var columns = []
for (i = 0; i < 830; columns[i++] = 1);

function step() {
    canvas.getContext('2d').fillStyle = 'rgba(1, 3, 38,0.25)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    
    //Color de las letras
    canvas.getContext('2d').fillStyle = '#F22E76';
    //control de las columnas, linea 16 elije que tipo de caracter se dibuja
    columns.map(function (value, index) {
        var character = String.fromCharCode(5e4 +
                                            Math.random() * 33);
        //dibujar el figura
        canvas.getContext('2d').fillText(character, //texto
                                         index * 7, //x
                                         value //y
                                        );
        
        //desplaza hacia abajo el carácter
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}
setInterval(step, 33) //Metodo que repite una funcion cada cierto tiempo de manera reiterada hasta que se elimine el intervalo 

