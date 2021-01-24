console.log("hello extensions");
function tag(){
var paragraph =document.getElementsByTagName('p');
for(elt of paragraph)
{
    elt.style['background-color']='pink';
}
}