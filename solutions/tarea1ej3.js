var cont=0;
function revcar(cadena){
    let res='';
    while(cont<cadena.length){
      let c=cadena.charAt(cont);
      if(c=='('){
        cont++;
        res+=add(cadena);
      }else{
        res+=c;
      }
      cont++;
    }
    return res;
}
const add=(cadena)=>{
    //console.log("cadena recursiva "+cadena);
    let res='';
    while(con<cadena.length){
      let c=cadena.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else if(c==')'){
        res=voltear(res);
        return res;
      }else{
        res+=c;
      }
      con++;
    }
    return res;

}
function voltear(cadena){
  let sum='';
  for(let i=cadena.length-1;i>=0;i--){
    let c=cadena.charAt(i);
    sum+=c;
  }
  return sum;
  console.log("Revertir Cadena : "+tres("foo(bar(baz))blim"));
}