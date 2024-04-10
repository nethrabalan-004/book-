var a1=document.getElementById("p1");
var a2=document.getElementById("p2");
var a3=document.getElementById("p3");
var a4=document.getElementById("p4");
var a5=document.getElementById("p5");
var a6=document.getElementById("p6");
var a7=document.getElementById("p7");
var a8=document.getElementById("p8");
var a9=document.getElementById("p9");
var a10=document.getElementById("p10");
var a11=document.getElementById("p11");
var a12=document.getElementById("p12");
var a13=document.getElementById("p13");
var c=document.getElementById("cov");
var f=document.getElementById("full");
var t=document.getElementById("t");
var c1=document.getElementById("cov1");
x=1;
function mo()
{
    if(x%2!=0)
    {
        t.style.opacity="0%";
        f.style.left="45%";
        c.style.opacity="0%";
        c1.style.opacity="100%";
        c.style.transitionDelay="0s"
        t.style.transitionDelay="0s"
        c1.style.transform="rotateY(180deg)";
        c.style.transform="rotateY(177deg)";
        a1.style.transform="rotateY(174deg)";
        a2.style.transform="rotateY(171deg)";
        a3.style.transform="rotateY(168deg)";
        a4.style.transform="rotateY(165deg)";
        a5.style.transform="rotateY(162deg)";
        a6.style.transform="rotateY(159deg)";
        a7.style.transform="rotateY(156deg)";
        a8.style.transform="rotateY(153deg)";
        a9.style.transform="rotateY(150deg)";
        a10.style.transform="rotateY(147deg)";
        a11.style.transform="rotateY(144deg)";
        a12.style.transform="rotateY(141deg)";
        a13.style.transform="rotateY(138deg)";
        c1.style.transitionDelay="0.5s"
        x++;
    }
    else
    {
       
        
        c.style.transform="rotateY(0deg)";
        a1.style.transform="rotateY(0deg)";
        a2.style.transform="rotateY(0deg)";
        a3.style.transform="rotateY(0deg)";
        a4.style.transform="rotateY(0deg)";
        a5.style.transform="rotateY(0deg)";
        a6.style.transform="rotateY(0deg)";
        a7.style.transform="rotateY(0deg)";
        a8.style.transform="rotateY(0deg)";
        a9.style.transform="rotateY(0deg)";
        a10.style.transform="rotateY(0deg)";
        a11.style.transform="rotateY(0deg)";
        a12.style.transform="rotateY(0deg)";
        a13.style.transform="rotateY(0deg)";
        c.style.transitionDelay="3s"
        t.style.opacity="100%";
        t.style.transitionDelay="3.5s"
        f.style.left="36%";
        c.style.opacity="100%";
        c1.style.opacity="0%";
        c1.style.transitionDelay="2.8s"
        x++;
    }
}
