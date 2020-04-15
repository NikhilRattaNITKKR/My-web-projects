let arr1=[];
let arr2=[];
let a=document.getElementById('input');
function getValue(key)
{
  let b=document.getElementById(key);
  a.value+=b.innerHTML;
  arr1.push(a.value);
};
function operate(key){
  let c=document.getElementById(key);
  let d=arr1.length-1;
  arr2.push(arr1[d]);
  arr2.push(c.innerHTML);
  a.value="";

}
function calculate(){
  let d=arr1.length-1;
  arr2.push(arr1[d]);
  for(var j=0;j<arr2.length;j+=2)
  arr2[j]=parseInt(arr2[j]);
  for (var i = 1; i < arr2.length; i+=2) {
    switch (arr2[i]) {
      case "+":arr2[i+1]=arr2[i-1]+arr2[i+1];

              break;
        case "-":arr2[i+1]=arr2[i-1]-arr2[i+1];
          break;
          case "*":arr2[i+1]=arr2[i-1]*arr2[i+1];
            break;
            case "%":arr2[i+1]=arr2[i-1]/arr2[i+1];
              break;
      default:

    }

  }
  let e=arr2.length-1;
  a.value=arr2[e];
  arr1.length=0;
  arr1.push(arr2[e]);
  arr2.length=0;
}
