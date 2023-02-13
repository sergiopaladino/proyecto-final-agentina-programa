function mueveSDO(event)
{
    var d = document.getElementById("SDO")
    var x=event.clientX;
    var y=event.clientY;
    d.style.top = y + "px";
    d.style.left = x + "px";
}
function showSDO(show)
{
   var d = document.getElementById("SDO");
   d.style.visibility=show ? "visible" : "hidden";
}
function mueveARSAAD(event)
{
    var d = document.getElementById("ARSAAD")
    var x=event.clientX;
    var y=event.clientY;
    d.style.top = y + "px";
    d.style.left = x + "px";
}
function showARSAAD(show)
{
   var d = document.getElementById("ARSAAD");
   d.style.visibility=show ? "visible" : "hidden";
}
function mueveMCA(event)
{
    var d = document.getElementById("MCA")
    var x=event.clientX;
    var y=event.clientY;
    d.style.top = y + "px";
    d.style.left = x + "px";
}
function showMCA(show)
{
   var d = document.getElementById("MCA");
   d.style.visibility=show ? "visible" : "hidden";
}