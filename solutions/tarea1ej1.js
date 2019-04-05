<!DOCTYPE html>
<html>
<head>
<tittle>Programa que acepte un # de 2 digitos y determine la suma de estos</tittle></head>
<script>
    function ejemplo1()
    {
        A=0;
		B=0;
		C=0;
		D=0;
		
		A= promt('Digite el numero');
		
		B=A.charAt(A.length-1);
		
		C=A.charAt(A.length-2);
		
		D= parseInt(B)+parseInt(C);
		alert(D)	
    }
</script>
</head>
<body>
<button onclick='ejemplo1()'>Digite la cifra</button>
</body>
</html>