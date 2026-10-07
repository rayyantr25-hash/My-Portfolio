var BASE=8000,PAGE=3000;
var ITEMS=[
["Custom animations","GSAP and scroll effects",8000],
["Contact form with email","Enquiries land in your inbox",2000],
["Blog or CMS","Edit content yourself",15000],
["Online store","Products and cart",40000],
["User login and accounts","Sign up and sign in",15000],
["Admin dashboard","Manage menu, orders and content",20000],
["Database and custom API","Custom backend logic",20000],
["Payment gateway","Cards and local payments",10000],
["SEO and analytics","Search setup and tracking",6000],
["Logo and brand basics","Logo, colors, fonts",5000],
["30 days support","Fixes and small changes",4000]];
var pages=3,box=document.getElementById("opts");
ITEMS.forEach(function(it,i){var l=document.createElement("label");l.className="opt";l.innerHTML='<input type="checkbox" data-i="'+i+'"><i></i><span>'+it[0]+'<small>'+it[1]+'</small></span>';box.appendChild(l)});
function money(n){return "PKR "+(Math.round(n/500)*500).toLocaleString("en-US")}
function calc(){
var ours=BASE+pages*PAGE,names=[pages+(pages>1?" pages":" page")];
box.querySelectorAll("input:checked").forEach(function(c){var it=ITEMS[c.dataset.i];ours+=it[2];names.push(it[0])});
document.getElementById("pg").textContent=pages;
document.getElementById("ours").textContent=money(ours);
document.getElementById("list").textContent="Includes design, mobile-friendly build and deployment, plus: "+names.join(", ")+".";
document.getElementById("send").href="https://wa.me/923468122672?text="+encodeURIComponent("Hi Rayyan, I built a custom package: "+names.join(", ")+". Estimated price: "+money(ours)+". Can we discuss?");
}
document.getElementById("plus").onclick=function(){if(pages<20){pages++;calc()}};
document.getElementById("minus").onclick=function(){if(pages>1){pages--;calc()}};
box.addEventListener("change",calc);
calc();

(function(){var rm=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".case,.plan,.stats div").forEach(function(el){
el.addEventListener("pointermove",function(e){if(e.pointerType!=="mouse")return;var r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;el.style.setProperty("--mx",x+"px");el.style.setProperty("--my",y+"px");
if(!rm&&!el.classList.contains("stat")){el.style.transform="perspective(900px) rotateX("+((.5-y/r.height)*6)+"deg) rotateY("+((x/r.width-.5)*6)+"deg) translateY(-4px)"}});
el.addEventListener("pointerleave",function(){el.style.transform=""})})})();
