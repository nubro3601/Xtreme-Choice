var P=[["Pulse ANC Headphones","Audio",349],["Orbit Smartwatch","Wearables",299],["Vertex 27” 4K Monitor","Displays",599],["Arc Wireless Speaker","Audio",179],["Nova Earbuds","Audio",129],["Flux Fitness Band","Wearables",89],["Core GaN Charger","Accessories",59],["Lumen Studio Display","Displays",899]];
var cart=[];
function icon(i){var s=["<circle cx='50' cy='50' r='30'/>","<rect x='28' y='28' width='44' height='44' rx='12'/>","<rect x='12' y='24' width='76' height='46' rx='4'/>","<rect x='30' y='20' width='40' height='60' rx='14'/>"];
return "<svg viewBox='0 0 100 100' fill='#0F172A' stroke='#2563EB' stroke-width='3'>"+s[i%4]+"<circle cx='50' cy='50' r='6' fill='#60A5FA' stroke='none'/></svg>";}
function render(){document.getElementById("products").innerHTML=P.map(function(p,i){return "<article class='card'><div class='img'>"+icon(i)+"</div><div class='body'><h3>"+p[0]+"</h3><small>"+p[1]+"</small><div class='price'>$"+p[2]+"</div><button class='btn' data-i='"+i+"'>Add to cart</button></div></article>";}).join("");}
function upd(){var t=0;document.getElementById("count").textContent=cart.length;
document.getElementById("cartItems").innerHTML=cart.length?cart.map(function(i){t+=P[i][2];return "<div class='row'><span>"+P[i][0]+"</span><b>$"+P[i][2]+"</b></div>";}).join(""):"<p>Your cart is empty. Add a product to start.</p>";
document.getElementById("total").textContent="$"+t;}
function route(){document.body.classList.toggle("is-admin",location.hash==="#admin");window.scrollTo(0,0);}
render();upd();route();
addEventListener("hashchange",route);
document.getElementById("products").addEventListener("click",function(e){var b=e.target.closest("button");if(b){cart.push(+b.dataset.i);upd();}});
document.getElementById("cartBtn").onclick=function(){document.getElementById("modal").classList.add("open");};
document.getElementById("close").onclick=function(){document.getElementById("modal").classList.remove("open");};
document.getElementById("checkout").onclick=function(){if(cart.length){cart=[];upd();document.getElementById("cartItems").innerHTML="<p>Order placed. Thank you.</p>";}};
document.getElementById("burger").onclick=function(){document.getElementById("nav").classList.toggle("open");};
document.getElementById("nav").addEventListener("click",function(){this.classList.remove("open");});
