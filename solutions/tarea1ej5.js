function numcomp(p,n){
    n+=1;
    var suma=p;
    while(n--!=0){
      suma*=10;
    }
    suma+=p;
    suma=Math.pow(suma,2);
    p=0;
    while(sum>0){
      p+=sum%10;
      suma=parseInt(sum/=10);
    }
    return p;
	console.log("El Numero Compuesto es : "+numcomp(5,3));
}