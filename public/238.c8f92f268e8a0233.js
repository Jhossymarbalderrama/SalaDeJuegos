"use strict";(self.webpackChunkSalaDeJuegos=self.webpackChunkSalaDeJuegos||[]).push([[238],{238:(H,p,n)=>{n.r(p),n.d(p,{JuegosModule:()=>R});var r=n(9808),u=n(2284),t=n(5e3),d=n(520);let c=(()=>{class e{constructor(a){this.httpclient=a}setURL(a){this.urlApi=a}callAPI(){return this.httpclient.get(this.urlApi)}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n(4738);function g(e,s){1&e&&t._UZ(0,"img",16)}function m(e,s){1&e&&t._UZ(0,"img",17)}function f(e,s){1&e&&t._UZ(0,"img",18)}function b(e,s){1&e&&t._UZ(0,"img",19)}function _(e,s){1&e&&t._UZ(0,"img",20)}function C(e,s){1&e&&t._UZ(0,"img",21)}function x(e,s){1&e&&t._UZ(0,"img",22)}function M(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){const F=t.CHM(a).$implicit;return t.oxw().clickTecla(F)}),t._uU(1),t.qZA()}if(2&e){const a=s.$implicit,i=t.oxw();t.Q6J("disabled",i.disabled),t.xp6(1),t.hij(" ",a," ")}}let v=(()=>{class e{constructor(a){this.ApiRestService=a,this.palabras=[],this.generandoPalabra="",this.teclado=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","\xd1","Z","X","C","V","B","N","M"],this.palabra="",this.disabled=!1,this.fallos=0,this.acertados=0,this.juegoActivo=!1,this.pListArrayPalabrasApi=[],this.fallos=0,this.acertados=0,this.espaciosPalabra(),setTimeout(()=>{this.palabraAzar()},2e3)}cargarArrayList(a){for(let i=0;i<a.length;i++){let o=a[i].Word.toUpperCase();this.pListArrayPalabrasApi.push(o)}}ngOnInit(){this.ApiRestService.setURL("https://palabras-aleatorias-public-api.herokuapp.com/palabras-aleatorias?Word=palabras"),this.ApiRestService.callAPI().subscribe(a=>{this.pListaPalabrasAPI=a,this.cargarArrayList(a.body[0].Related)})}palabraAzar(){let a=Math.floor(Math.random()*this.pListArrayPalabrasApi.length);this.palabra=this.pListArrayPalabrasApi[a],this.espaciosPalabra()}espaciosPalabra(){for(let a=0;a<this.palabra.length;a++)this.generandoPalabra+="_"}clickTecla(a){this.busqueda(a)?this.acertados===this.palabra.length&&(this.disabled=!0,console.log("Ganaste!!")):(this.fallos++,6==this.fallos&&(this.disabled=!0,console.log("Perdiste")))}busqueda(a){let i=!1;for(let o=0;o<this.palabra.length;o++)this.palabra[o]===a&&(i=!0,this.generandoPalabra=this.generandoPalabra.substring(0,o)+a+this.generandoPalabra.substring(o+1),this.acertados++);return i}reiniciar(){this.generandoPalabra="",this.fallos=0,this.acertados=0,this.palabraAzar(),this.disabled=!1}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ahorcado"]],decls:23,vars:10,consts:[[1,"container"],[1,"box"],["align","center",2,"font-weight","bold","color","black"],["id","ahorcado"],["src","../../../../assets/img/juegos/ahorcado/base.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/cabeza.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/cuerpo.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/brazo1.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/brazo2.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/pie1.png","height","450px",4,"ngIf"],["src","../../../../assets/img/juegos/ahorcado/pie2.png","height","450px",4,"ngIf"],["align","center",1,"teclado"],[1,"palabra",2,"margin-right","auto","margin-left","auto"],["class","btn btn-outline-dark m-1","style","margin-right: 10px;",3,"disabled","click",4,"ngFor","ngForOf"],["align","center",2,"margin-top","10px"],[1,"button",3,"click"],["src","../../../../assets/img/juegos/ahorcado/base.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/cabeza.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/cuerpo.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/brazo1.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/brazo2.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/pie1.png","height","450px"],["src","../../../../assets/img/juegos/ahorcado/pie2.png","height","450px"],[1,"btn","btn-outline-dark","m-1",2,"margin-right","10px",3,"disabled","click"]],template:function(a,i){1&a&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h2"),t._uU(5,"AHORCADO"),t.qZA(),t.TgZ(6,"h3"),t._uU(7),t.qZA()(),t.TgZ(8,"div",3),t.YNc(9,g,1,0,"img",4),t.YNc(10,m,1,0,"img",5),t.YNc(11,f,1,0,"img",6),t.YNc(12,b,1,0,"img",7),t.YNc(13,_,1,0,"img",8),t.YNc(14,C,1,0,"img",9),t.YNc(15,x,1,0,"img",10),t.qZA(),t.TgZ(16,"div",11)(17,"h3",12),t._uU(18),t.qZA(),t.YNc(19,M,2,2,"button",13),t.qZA(),t.TgZ(20,"div",14)(21,"button",15),t.NdJ("click",function(){return i.reiniciar()}),t._uU(22,"reiniciar juego"),t.qZA()()()()),2&a&&(t.xp6(7),t.hij('"La palabra tiene ',i.generandoPalabra.length,' Letras"'),t.xp6(2),t.Q6J("ngIf",0==i.fallos),t.xp6(1),t.Q6J("ngIf",1==i.fallos),t.xp6(1),t.Q6J("ngIf",2==i.fallos),t.xp6(1),t.Q6J("ngIf",3==i.fallos),t.xp6(1),t.Q6J("ngIf",4==i.fallos),t.xp6(1),t.Q6J("ngIf",5==i.fallos),t.xp6(1),t.Q6J("ngIf",6==i.fallos),t.xp6(3),t.hij(" ",i.generandoPalabra," "),t.xp6(1),t.Q6J("ngForOf",i.teclado))},directives:[l.M,r.O5,r.sg],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.box[_ngcontent-%COMP%]{height:auto;margin-top:6em;padding:5em;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;max-width:100%;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:#ffffff98;z-index:50}.box-reinicio[_ngcontent-%COMP%]{margin-top:6em;padding:2em;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;max-width:100%;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:#ffffff98;z-index:51}.teclado[_ngcontent-%COMP%]{padding:.5em;background-color:#0b3a879f;align-content:center;margin-left:auto;margin-right:auto;height:auto;width:580px;border-radius:5px}.palabra[_ngcontent-%COMP%]{letter-spacing:10px;text-transform:uppercase}.btn[_ngcontent-%COMP%]{background-color:#222;cursor:pointer;color:#fff;width:48px}.btn[_ngcontent-%COMP%]:hover{background-color:#07275c;cursor:pointer;color:#fff}.btn[_ngcontent-%COMP%]:active{background-color:#07275c;cursor:pointer;box-shadow:0 0 5px 2px #222;color:#fff;transform:scale(.85)}.btn[_ngcontent-%COMP%]:focus{outline:none}.button[_ngcontent-%COMP%]{border-radius:1em;border:1px solid #07275c;background-color:#07275c;color:#fff;font-size:18px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;font-size:16px;font-weight:700;padding:.5em 2em;cursor:pointer}.button[_ngcontent-%COMP%]:hover{background-color:#073277db;cursor:pointer;color:#fff}.button[_ngcontent-%COMP%]:active{transform:scale(.95)}.button[_ngcontent-%COMP%]:focus{outline:none}"]}),e})();var h=n(2290);function k(e,s){if(1&e&&t._UZ(0,"img",18),2&e){const a=t.oxw();t.Q6J("src",a.cartaSistema.img,t.LSH)}}function A(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",13),t._UZ(2,"img",18),t.qZA()()),2&e){const a=s.$implicit;t.xp6(2),t.s9C("src",a,t.LSH)}}function P(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",4),t.YNc(2,A,3,1,"div",19),t.qZA()()),2&e){const a=t.oxw();t.xp6(2),t.Q6J("ngForOf",a.imagenesCartasSistema)}}function T(e,s){if(1&e&&t._UZ(0,"img",18),2&e){const a=t.oxw();t.Q6J("src",a.cartaMia.img,t.LSH)}}function S(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",13),t._UZ(2,"img",18),t.qZA()()),2&e){const a=s.$implicit;t.xp6(2),t.s9C("src",a,t.LSH)}}function Z(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",4),t.YNc(2,S,3,1,"div",19),t.qZA()()),2&e){const a=t.oxw();t.xp6(2),t.Q6J("ngForOf",a.imagenesCartasMias)}}let w=(()=>{class e{constructor(a,i){this.ApiRestService=a,this.ToastrService=i,this.sumaCartasSistema=0,this.sumaCartasMias=0,this.imagenesCartasMias=[],this.imagenesCartasSistema=[],this.puntosSistema=0,this.puntosMios=0,this.sistemaSeQueda=!0,this.meQuedo=!0,this.inicioJuego=!1,this.reiniciar(),this.getMazoApi()}ngOnInit(){}getMazoApi(){this.ApiRestService.setURL("https://deckofcardsapi.com/api/deck/new/draw/?count=52"),this.ApiRestService.callAPI().subscribe(a=>{this.cartas=a.cards})}iniciarJuego(){this.inicioJuego=!0,this.meQuedo=!1,this.sacoMiCarta(this.cartas),this.sacoCartaQueSaque(this.cartaMia),this.sumaCartasMias+=this.cartaMia.valor,this.imagenesCartasMias.push(this.cartaMia.img),this.pidoCartaParaSistema(),this.pidoCarta(),this.pidoCartaParaSistema(),this.sumaCartasSistema>=21&&this.sistemaCartas()}pidoCartaParaSistema(){this.sacoSistemaCarta(this.cartasSinCartaSistema),this.sacoCartaQueSaque(this.cartaSistema),this.sumaCartasSistema+=this.cartaSistema.valor,this.imagenesCartasSistema.push(this.cartaSistema.img)}pidoCarta(){this.sacoMiCarta(this.cartasSinCartaSistema),this.sacoCartaQueSaque(this.cartaMia),this.sumaCartasMias+=this.cartaMia.valor,this.sumaCartasMias>21?(this.deshabilitoBotones(),this.perdisteToast()):21==this.sumaCartasMias&&(this.deshabilitoBotones(),this.blackJackToast(),this.sistemaCartas()),this.imagenesCartasMias.push(this.cartaMia.img)}deshabilitoBotones(){this.meQuedo=!0}quedarme(){this.deshabilitoBotones(),this.meQuedoToast(),setTimeout(()=>{this.sumaCartasSistema<21&&this.sumaCartasSistema<this.sumaCartasMias?this.sistemaCartas():this.sumaCartasSistema<21&&this.sumaCartasSistema>this.sumaCartasMias&&this.perdisteToast()},2e3)}sistemaCartas(){this.sumaCartasSistema<this.sumaCartasMias?(this.pidoCartaParaSistema(),this.sumaCartasSistema>this.sumaCartasMias&&this.sumaCartasSistema<=21?(this.sistemaSeQueda=!0,this.perdisteToast()):21==this.sumaCartasSistema&&21==this.sumaCartasMias?(this.sistemaSeQueda=!0,this.empateToast()):(this.pidoCartaParaSistema(),this.comparacionCartasSistema())):this.sumaCartasSistema==this.sumaCartasMias&&21==this.sumaCartasSistema?(this.sistemaSeQueda=!0,this.empateToast()):this.sumaCartasSistema>this.sumaCartasMias&&this.sumaCartasSistema>21&&(this.sistemaSeQueda=!0,this.perdisteToast())}comparacionCartasSistema(){this.sumaCartasSistema>this.sumaCartasMias||this.sumaCartasSistema<=21?(this.sistemaSeQueda=!0,this.perdisteToast()):21==this.sumaCartasSistema&&21==this.sumaCartasMias?(this.sistemaSeQueda=!0,this.empateToast()):(this.sistemaSeQueda=!0,this.ganasteToast())}sacoCartaQueSaque(a){this.cartasSinCartaSistema=this.cartas.filter(i=>i!=a)}sacoSistemaCarta(a){let i=Math.floor(Math.random()*a.length);this.establecerValores(a[i],this.cartaSistema)}sacoMiCarta(a){let i=Math.floor(Math.random()*a.length);this.establecerValores(a[i],this.cartaMia)}establecerValores(a,i){switch(i.img=a.image,a.value){case"ACE":i.valor=1;break;case"KING":i.valor=12;break;case"QUEEN":i.valor=11;break;case"JACK":i.valor=10;break;default:i.valor=parseInt(a.value)}}reiniciar(){this.reiniciarCartas(),this.puntosMios=0,this.puntosSistema=0,this.sumaCartasMias=0,this.sumaCartasSistema=0,this.imagenesCartasMias=[],this.imagenesCartasSistema=[],this.inicioJuego=!1}reiniciarCartas(){this.cartaSistema={img:"../../../../assets/img/juegos/mayor menor/cartaAzul.png",valor:0},this.cartaMia={img:"../../../../assets/img/juegos/mayor menor/cartaAzul.png",valor:0}}ganasteToast(){this.ToastrService.success("Felicidades.","Has Ganado!!!")}perdisteToast(){this.ToastrService.error("Sera la proxima.","Perdiste!!!")}blackJackToast(){this.ToastrService.warning("Llegaste a 21.","Black Jack!!!")}meQuedoToast(){this.ToastrService.warning("Llegaste a "+this.sumaCartasMias,"Espera al sistema...")}empateToast(){this.ToastrService.warning("Empate","Sera la Proxima!!")}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c),t.Y36(h._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-blackjack"]],decls:40,vars:11,consts:[[1,"container"],[1,"box"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-1"],["align","center",1,"col"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-2"],["align","start",1,"col"],[1,"sistemaCard"],["height","216px","width","140px",3,"src",4,"ngIf"],[4,"ngIf"],[1,"puntos"],["align","end",1,"col"],[1,"tuCard"],["align","center",1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","botones"],[1,"col"],[1,"button",3,"disabled","click"],[1,"button",2,"margin-top","20px",3,"click"],[1,"button",2,"background-color","green",3,"disabled","click"],[1,"button",2,"background-color","red",3,"disabled","click"],["height","216px","width","140px",3,"src"],[4,"ngFor","ngForOf"]],template:function(a,i){1&a&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),t._uU(6,"BLACK JACK"),t.qZA(),t.TgZ(7,"h2"),t._uU(8,"PUNTOS"),t.qZA(),t.TgZ(9,"h1"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",4)(12,"div",5)(13,"h4"),t._uU(14,"Sistema"),t.qZA(),t.TgZ(15,"div",6),t.YNc(16,k,1,1,"img",7),t.YNc(17,P,3,1,"div",8),t.qZA(),t.TgZ(18,"div",9),t._uU(19),t.qZA()(),t.TgZ(20,"div",10)(21,"h4"),t._uU(22,"T\xfa"),t.qZA(),t.TgZ(23,"div",11),t.YNc(24,T,1,1,"img",7),t.YNc(25,Z,3,1,"div",8),t.qZA(),t.TgZ(26,"div",9),t._uU(27),t.qZA()()(),t.TgZ(28,"div",12)(29,"div",13)(30,"button",14),t.NdJ("click",function(){return i.iniciarJuego()}),t._uU(31," Iniciar Juego "),t.qZA(),t.TgZ(32,"button",15),t.NdJ("click",function(){return i.reiniciar()}),t._uU(33,"Reiniciar"),t.qZA()(),t.TgZ(34,"div",13)(35,"button",16),t.NdJ("click",function(){return i.pidoCarta()}),t._uU(36," Pedir Otra "),t.qZA()(),t.TgZ(37,"div",13)(38,"button",17),t.NdJ("click",function(){return i.quedarme()}),t._uU(39," Quedarse "),t.qZA()()()()()),2&a&&(t.xp6(10),t.AsE("",i.puntosSistema," | ",i.puntosMios,""),t.xp6(6),t.Q6J("ngIf",0==i.imagenesCartasSistema.length),t.xp6(1),t.Q6J("ngIf",0!=i.imagenesCartasSistema.length),t.xp6(2),t.hij("Suma Cartas: ",i.sumaCartasSistema,""),t.xp6(5),t.Q6J("ngIf",0==i.imagenesCartasMias.length),t.xp6(1),t.Q6J("ngIf",0!=i.imagenesCartasMias.length),t.xp6(2),t.hij("Suma Cartas: ",i.sumaCartasMias,""),t.xp6(3),t.Q6J("disabled",i.inicioJuego),t.xp6(5),t.Q6J("disabled",i.meQuedo),t.xp6(3),t.Q6J("disabled",i.meQuedo))},directives:[l.M,r.O5,r.sg],styles:["h4[_ngcontent-%COMP%]{font-weight:700;color:#202326}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.box[_ngcontent-%COMP%]{height:auto;background:url(fondo-mesa-poker-color-verde.dfb926f9fbdb5134.jpg);background-size:cover;margin-top:6em;padding:5em;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;width:1300px;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:#ffffff98;z-index:50}.botones[_ngcontent-%COMP%]{padding-top:30px}.button[_ngcontent-%COMP%]{border-radius:1em;border:1px solid #07275c;background-color:#07275c;color:#fff;font-size:18px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;font-size:16px;font-weight:700;padding:.5em 2em;width:200px;cursor:pointer}.button[_ngcontent-%COMP%]:hover{background-color:#07275c;cursor:pointer;color:#fff}.button[_ngcontent-%COMP%]:enabled:active{background-color:#07275c;cursor:pointer;box-shadow:0 0 5px 2px #222;color:#fff;transform:scale(.85)}.button[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:disabled{opacity:50%}.puntos[_ngcontent-%COMP%]{font-weight:700;font-size:18px;margin-top:.5em}.cartasSistema[_ngcontent-%COMP%]{padding-right:30px}"]}),e})();function O(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1,"\xbfComo se llama este Personaje?"),t.qZA())}function J(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Buscando personaje..."),t.qZA())}function I(e,s){1&e&&(t.TgZ(0,"a"),t._uU(1," . . . "),t.qZA())}function y(e,s){if(1&e&&(t.TgZ(0,"a"),t._uU(1),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Oqu(a.listOpciones[0])}}function Q(e,s){1&e&&(t.TgZ(0,"a"),t._uU(1," . . . "),t.qZA())}function U(e,s){if(1&e&&(t.TgZ(0,"a"),t._uU(1),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Oqu(a.listOpciones[1])}}function q(e,s){1&e&&(t.TgZ(0,"a"),t._uU(1," . . . "),t.qZA())}function N(e,s){if(1&e&&(t.TgZ(0,"a"),t._uU(1),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Oqu(a.listOpciones[2])}}function L(e,s){1&e&&(t.TgZ(0,"a"),t._uU(1," . . . "),t.qZA())}function z(e,s){if(1&e&&(t.TgZ(0,"a"),t._uU(1),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Oqu(a.listOpciones[3])}}const Y=[{path:"",children:[{path:"ahorcado",component:v},{path:"mayor-menor",component:(()=>{class e{constructor(a){this.ApiRestService=a,this.sumaCartasSistema=0,this.sumaCartasMias=0,this.puntosSistema=0,this.puntosMios=0,this.disabledMayorMenor=!0,this.disabledIniciarJuego=!0,this.reiniciar(),this.getMazoApi()}ngOnInit(){}getMazoApi(){this.ApiRestService.setURL("https://deckofcardsapi.com/api/deck/new/draw/?count=52"),this.ApiRestService.callAPI().subscribe(a=>{this.cartas=a.cards})}iniciarJuego(){this.disabledIniciarJuego=!0,this.disabledMayorMenor=!1;let a=Math.floor(Math.random()*this.cartas.length);this.establecerValores(this.cartas[a],this.cartaSistema),this.cartasSinCartaSistema=this.cartas.filter(i=>i!=this.cartaSistema)}establecerValores(a,i){switch(i.img=a.image,a.value){case"ACE":i.valor=1;break;case"KING":i.valor=12;break;case"QUEEN":i.valor=11;break;case"JACK":i.valor=10;break;default:i.valor=parseInt(a.value)}}compracionMayorMenor(a){switch(this.disabledMayorMenor=!0,this.sacoMiCarta(),a){case"mayor":this.cartaMia.valor>this.cartaSistema.valor?this.puntosMios++:this.puntosSistema++;break;case"menor":this.cartaMia.valor<this.cartaSistema.valor?this.puntosMios++:this.puntosSistema++}setTimeout(()=>{this.reiniciarCartas()},2e3)}sacoMiCarta(){let a=Math.floor(Math.random()*this.cartasSinCartaSistema.length);this.establecerValores(this.cartas[a],this.cartaMia)}reiniciar(){this.reiniciarCartas(),this.puntosMios=0,this.puntosSistema=0}reiniciarCartas(){this.disabledMayorMenor=!0,this.disabledIniciarJuego=!1,this.cartaSistema={img:"../../../../assets/img/juegos/mayor menor/cartaAzul.png",valor:0},this.cartaMia={img:"../../../../assets/img/juegos/mayor menor/cartaAzul.png",valor:0}}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-mayor-menor"]],decls:30,vars:7,consts:[[1,"container"],[1,"box"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-1"],["align","center",1,"col"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-2"],["align","start",1,"col"],[1,"sistemaCard"],["height","216px","width","140px",3,"src"],["align","end",1,"col"],[1,"tuCard"],["align","center",1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","botones"],[1,"col"],[1,"button",3,"disabled","click"]],template:function(a,i){1&a&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),t._uU(6,"PUNTOS"),t.qZA(),t.TgZ(7,"h1"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",4)(10,"div",5)(11,"h4"),t._uU(12,"Sistema"),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"img",7),t.qZA()(),t.TgZ(15,"div",8)(16,"h4"),t._uU(17,"T\xfa"),t.qZA(),t.TgZ(18,"div",9),t._UZ(19,"img",7),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"button",12),t.NdJ("click",function(){return i.iniciarJuego()}),t._uU(23,"Iniciar Juego"),t.qZA()(),t.TgZ(24,"div",11)(25,"button",12),t.NdJ("click",function(){return i.compracionMayorMenor("mayor")}),t._uU(26,"Mayor"),t.qZA()(),t.TgZ(27,"div",11)(28,"button",12),t.NdJ("click",function(){return i.compracionMayorMenor("menor")}),t._uU(29,"Menor"),t.qZA()()()()()),2&a&&(t.xp6(8),t.AsE("",i.puntosSistema," | ",i.puntosMios,""),t.xp6(6),t.Q6J("src",i.cartaSistema.img,t.LSH),t.xp6(5),t.Q6J("src",i.cartaMia.img,t.LSH),t.xp6(3),t.Q6J("disabled",i.disabledIniciarJuego),t.xp6(3),t.Q6J("disabled",i.disabledMayorMenor),t.xp6(3),t.Q6J("disabled",i.disabledMayorMenor))},directives:[l.M],styles:["h4[_ngcontent-%COMP%]{font-weight:700;color:#202326}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.box[_ngcontent-%COMP%]{height:auto;background:url(fondo-mesa-poker-color-verde.dfb926f9fbdb5134.jpg);background-size:cover;margin-top:6em;padding:5em;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;max-width:100%;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:#ffffff98;z-index:50}.botones[_ngcontent-%COMP%]{padding-top:30px}.button[_ngcontent-%COMP%]{border-radius:1em;border:1px solid #07275c;background-color:#07275c;color:#fff;font-size:18px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;font-size:16px;font-weight:700;padding:.5em 2em;width:200px;cursor:pointer}.button[_ngcontent-%COMP%]:hover{background-color:#07275c;cursor:pointer;color:#fff}.button[_ngcontent-%COMP%]:enabled:active{background-color:#07275c;cursor:pointer;box-shadow:0 0 5px 2px #222;color:#fff;transform:scale(.85)}.button[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:disabled{opacity:50%}"]}),e})()},{path:"preguntados",component:(()=>{class e{constructor(a,i){this.ApiRestService=a,this.Toastr=i,this.pListaObjectPersonajesAPI=[],this.personajeIMG="../../../../assets/img/juegos/preguntados/technicalDificult3.gif",this.listOpciones=[],this.habilitado=!1,this.opcionCorrecta="",this.disabledIniciarJuego=!0,this.technicalValue=0,this.botonesHabilitados=!0}ngOnInit(){this.traerPersonajesAPI()}traerPersonajesAPI(){this.ApiRestService.setURL("https://thesimpsonsquoteapi.glitch.me/quotes?count=4"),this.ApiRestService.callAPI().subscribe(a=>{this.pListaPersonajesAPI=a,this.cargarArrayList(this.pListaPersonajesAPI)}),console.log(this.pListaObjectPersonajesAPI),setTimeout(()=>{this.seleccionarPersonaje(),this.cargoListaOpciones(),console.log(this.listOpciones)},2500)}cargarArrayList(a){for(let i=0;i<a.length;i++)this.pListaObjectPersonajesAPI.push(a[i])}compararOpcion(a){this.opcionCorrecta===a?this.esElPersonaje():this.noEsElPersonaje()}reinicioJuego(){this.botonesHabilitados=!1,this.pListaObjectPersonajesAPI=[],this.personajeSeleccionado=void 0,this.traerPersonajesAPI(),this.technicalDificult(),this.listOpciones=[],this.habilitado=!1,this.botonesHabilitados=!0}technicalDificult(){switch(2!=this.technicalValue?this.technicalValue++:this.technicalValue=0,this.technicalValue){case 0:this.personajeIMG="../../../../assets/img/juegos/preguntados/technicalDificult.webp";break;case 1:this.personajeIMG="../../../../assets/img/juegos/preguntados/technicalDificult2.gif";break;case 2:this.personajeIMG="../../../../assets/img/juegos/preguntados/technicalDificult3.gif"}}cargoListaOpciones(){for(let a=0;a<this.pListaObjectPersonajesAPI.length;a++)this.listOpciones.push(this.pListaObjectPersonajesAPI[a].character)}seleccionarPersonaje(){let a=Math.floor(Math.random()*this.pListaObjectPersonajesAPI.length);setTimeout(()=>{this.personajeSeleccionado=this.pListaObjectPersonajesAPI[a],this.habilitado=!0,this.personajeIMG=this.personajeSeleccionado.image,this.opcionCorrecta=this.personajeSeleccionado.character},500),setTimeout(()=>{this.botonesHabilitados=!1},500)}esElPersonaje(){this.Toastr.success("Bien el personaje es "+this.opcionCorrecta,"Has Ganado"),this.reinicioJuego()}noEsElPersonaje(){this.Toastr.error("Te equivocaste, el personaje era "+this.opcionCorrecta,"Hay tabla"),this.reinicioJuego()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c),t.Y36(h._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-preguntados"]],decls:28,vars:15,consts:[[1,"container"],[1,"box"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-1"],["align","center",1,"col"],[4,"ngIf"],[1,"preguntados"],["height","260px","width","auto",3,"src"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-4"],[1,"btn","btn-dark","btn-opciones",3,"disabled","click"]],template:function(a,i){1&a&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h2"),t._uU(6,"Preguntados - Los Simpsons"),t.qZA(),t.YNc(7,O,2,0,"h3",4),t.YNc(8,J,2,0,"h3",4),t.TgZ(9,"div",5),t._UZ(10,"img",6),t.qZA()()(),t.TgZ(11,"div",7)(12,"div",3)(13,"button",8),t.NdJ("click",function(){return i.compararOpcion(i.listOpciones[0])}),t.YNc(14,I,2,0,"a",4),t.YNc(15,y,2,1,"a",4),t.qZA()(),t.TgZ(16,"div",3)(17,"button",8),t.NdJ("click",function(){return i.compararOpcion(i.listOpciones[1])}),t.YNc(18,Q,2,0,"a",4),t.YNc(19,U,2,1,"a",4),t.qZA()(),t.TgZ(20,"div",3)(21,"button",8),t.NdJ("click",function(){return i.compararOpcion(i.listOpciones[2])}),t.YNc(22,q,2,0,"a",4),t.YNc(23,N,2,1,"a",4),t.qZA()(),t.TgZ(24,"div",3)(25,"button",8),t.NdJ("click",function(){return i.compararOpcion(i.listOpciones[3])}),t.YNc(26,L,2,0,"a",4),t.YNc(27,z,2,1,"a",4),t.qZA()()()()()),2&a&&(t.xp6(7),t.Q6J("ngIf",i.habilitado),t.xp6(1),t.Q6J("ngIf",!i.habilitado),t.xp6(2),t.Q6J("src",i.personajeIMG,t.LSH),t.xp6(3),t.Q6J("disabled",i.botonesHabilitados),t.xp6(1),t.Q6J("ngIf",!i.habilitado),t.xp6(1),t.Q6J("ngIf",i.habilitado),t.xp6(2),t.Q6J("disabled",i.botonesHabilitados),t.xp6(1),t.Q6J("ngIf",!i.habilitado),t.xp6(1),t.Q6J("ngIf",i.habilitado),t.xp6(2),t.Q6J("disabled",i.botonesHabilitados),t.xp6(1),t.Q6J("ngIf",!i.habilitado),t.xp6(1),t.Q6J("ngIf",i.habilitado),t.xp6(2),t.Q6J("disabled",i.botonesHabilitados),t.xp6(1),t.Q6J("ngIf",!i.habilitado),t.xp6(1),t.Q6J("ngIf",i.habilitado))},directives:[l.M,r.O5],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.box[_ngcontent-%COMP%]{margin-top:6em;padding:1em;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;max-width:100%;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:#fed51ec4;z-index:50}.botones[_ngcontent-%COMP%]{padding-top:30px}.button[_ngcontent-%COMP%]{margin-top:.5em;border-radius:1em;border:1px solid #07275c;background-color:#07275c;color:#fff;font-size:18px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;font-size:16px;font-weight:700;padding:.5em 2em;width:200px;cursor:pointer}.btn-opciones[_ngcontent-%COMP%]:hover{opacity:90%}.btn-opciones[_ngcontent-%COMP%]:enabled:active{box-shadow:0 0 5px 2px #222;transform:scale(.85)}.btn-opciones[_ngcontent-%COMP%]:focus{outline:none}.btn-opciones[_ngcontent-%COMP%]{margin-top:.5em;background-color:#07275c;color:#fff;font-size:14px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;font-weight:700;padding:.5em 2em;width:240px;height:60px;cursor:pointer}.btn-opciones[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}button[_ngcontent-%COMP%]:disabled{opacity:50%}"]}),e})()},{path:"black-jack",component:w}]}];let B=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(Y)],u.Bz]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,B]]}),e})()}}]);