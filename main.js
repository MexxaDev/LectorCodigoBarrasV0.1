/*Productos*/
var PureDeTomates = {
    Nombre: "Pure de tomates",
    TipoProducto: '20',
    PLU: '00054',
    Precio: "$1969"
};
var MapleDeHuevos = {
    Nombre: "Maple de huevos",
    TipoProducto: '20',
    PLU: '00025',
    Precio: "$1269"
};
var MilanesaDePollo = {
    Nombre: "Milanesa De Pollo",
    TipoProducto: '20',
    PLU: '00012',
    Precio: "$1969"
};
/*------------- */
var CodigoBarras = prompt("Leea un articulo" + " ");
var CantidadArt = prompt("Ingrese la cantidad a llevar");


//Separo el codigo de barra en los diferentes caracteres.
var GuardaCodigoBarras = CodigoBarras.split('');
//Guardar las primeras 2 cifras
var Primeras2Cifras = GuardaCodigoBarras.slice(0,2);
//Guardar las primeras 5 cifras
var C5Cifras = GuardaCodigoBarras.slice(2,7);
//Guardar las ultimas 5 cifras
var DC5Cifras = GuardaCodigoBarras.slice(8,13);



// Convierto a string y le saco las ","
Primeras2Cifras = Primeras2Cifras.toString();
Primeras2Cifras = Primeras2Cifras.replaceAll(",", "");
// Convierto a string y le saco las ","
C5Cifras = C5Cifras.toString();
C5Cifras = C5Cifras.replaceAll(",", "");
// Convierto a string y le saco las ","
DC5Cifras = DC5Cifras.toString();
DC5Cifras = DC5Cifras.replaceAll(",", "");



if(C5Cifras == PureDeTomates.PLU){
    alert(CantidadArt + " " + PureDeTomates.Nombre + " "+ PureDeTomates.Precio);
}
if(C5Cifras == MapleDeHuevos.PLU){
    alert(CantidadArt + " " + MapleDeHuevos.Nombre + " "+ MapleDeHuevos.Precio);
}
if(C5Cifras == MilanesaDePollo.PLU){
    alert(CantidadArt + " " + MilanesaDePollo.Nombre + " "+ MilanesaDePollo.Precio);
}