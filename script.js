var c = 0;
function agregar(){
    alert("hola");
    c++;
 var t, m, n, dni, plato, precio, cantidad, t1,t2;   
 t = document.getElementById("ticket").value;
 m = document.getElementById("mesa").value;
 n = document.getElementById("nombre").value;
 dni = document.getElementById("dni").value;
 plato = document.getElementById("plato").value;
 precio = document.getElementById("precio").value;
 cantidad = document.getElementById("cantidad").value;

t1 = document.getElementById("tablita1");
t2 = document.getElementById("tablita2");
var row = t1.rows.length;
alert(row);
if(row==1){
t1.insertRow(-1).innerHTML= "<td>"+c+"</td><td>"+t+"</td><td>"+m+"</td><td>"+n+"</td><td>"+dni+"</td>";
}
t2.insertRow(-1).innerHTML= "<td>"+c+"</td><td>"+plato+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+(precio*cantidad)+"</td><td>X</td>";
}