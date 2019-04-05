<!DOCTYPE html>
<html>
<head>
<script>
    function sumar(valor)
    {
        var suma=0;
        for(var i=0;i<valor.length;i++)
        {
            suma+=parseInt(valor[i]);
        }
        document.getElementById("resultadoSuma").innerHTML="La Suma de los valores de "+valor+" es: "+suma;
    }
</script>
</head>
 
<body>
 
<input name="numeros" type="text" id="text" onkeyup="sumar(this.value);">
<div id="resultadoSuma"></div>
 
</body>
</html>