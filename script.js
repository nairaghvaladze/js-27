document.body.style.textAlign="center";
document.body.style.background="Lightpink";
document.body.style.fontWeight="bold";
document.body.style.marginTop="30px";


var masivi=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("text").innerHTML="მოცემულ მასივიში: " + masivi + " pop-ფუნქციის გამოყენების მაგალითი! "
for(i=masivi.length; i>0; i--)

{document.write(masivi);
    masivi.pop();
document.write("<br>");


}