(this["webpackJsonpfundacoes-proj-2"]=this["webpackJsonpfundacoes-proj-2"]||[]).push([[0],{212:function(a,e,t){a.exports=t(401)},217:function(a,e,t){},401:function(a,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),c=t(18),o=t.n(c),l=(t(217),t(22)),i=t(110),m=t(4),s=t(178),u=t(441),d=t(64),p=t(442),f=t(446),E=t(447),g=t(445),h=t(460),b=t(461),v=t(449),k=t(448),y=t(450),j=t(452),N=t(451),A=t(459),x=t(458),O=t(443),C=t(444),M=t(26),w=t.n(M),D=t(462),P=t(453),F=t(457),I=t(456),S=t(454),q=t(455),R=t(34),L=[{nome:"Fuste quadrada",quadrada:!0,f1:1.75,f2:3.5,variacoes:[{secao:.15,carga:150,d:.6,a:.3,comprimento:[3,8]},{secao:.2,carga:200,d:.6,a:.3,comprimento:[3,12]},{secao:.25,carga:300,d:.65,a:.35,comprimento:[3,12]},{secao:.3,carga:400,d:.75,a:.4,comprimento:[3,12]},{secao:.35,carga:500,d:.9,a:.4,comprimento:[3,12]},{secao:.4,carga:700,d:1,a:.5,comprimento:[3,12]}]},{nome:"Fuste circular",f1:1.75,f2:3.5,variacoes:[{secao:.2,carga:200,d:.6,a:.3,comprimento:[4,10]},{secao:.25,carga:300,d:.65,a:.3,comprimento:[4,14]},{secao:.3,carga:400,d:.75,a:.35,comprimento:[4,16]},{secao:.35,carga:550,d:.9,a:.4,comprimento:[4,16]},{secao:.4,carga:700,d:1,a:.5,comprimento:[4,16]},{secao:.5,carga:1e3,d:1.3,a:.5,comprimento:[4,16]},{secao:.6,carga:1500,d:1.5,a:.5,comprimento:[4,16]}]},{nome:"Strauss",f1:4.2,f2:3.8,variacoes:[{secao:.25,carga:200,d:.75,a:.2,comprimento:[3,12]},{secao:.32,carga:300,d:1,a:.2,comprimento:[3,15]},{secao:.38,carga:450,d:1.2,a:.25,comprimento:[3,20]},{secao:.45,carga:600,d:1.35,a:.3,comprimento:[3,20]},{secao:.55,carga:800,d:1.65,a:.35,comprimento:[3,20]}]}],W=[{nome:"Areia",k:[10,6],alpha:[1.4,1.4]},{nome:"Areia siltosa",k:[8,5.3],alpha:[2,1.9]},{nome:"Areia silto argilosa",k:[7,5.3],alpha:[2.4,2.4]},{nome:"Areia argilosa",k:[6,5.3],alpha:[3,3]},{nome:"Areias argilo-siltosa",k:[5,5.3],alpha:[2.8]},{nome:"Argila",k:[2,2.5],alpha:[6,6]},{nome:"Argila arenosa",k:[3.5,4.8],alpha:[2.4,4]},{nome:"Argila areno-siltosa",k:[3,3],alpha:[2.8,4.5]},{nome:"Argila siltosa",k:[2.2,2.5],alpha:[4,5.5]},{nome:"Argila silto-arenosa",k:[3.3,3],alpha:[3,5]}];function B(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function G(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(t,!0).forEach((function(e){Object(i.a)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}var J=Object(s.a)((function(a){return{root:{margin:a.spacing(4,0,4,0),display:"flex",flexDirection:"column"},title:{marginBottom:a.spacing(5)},margin:{margin:a.spacing(1)},formControl:{width:200},geometrico:{flexDirection:"column"},comparativo:{height:400,width:"100%","& $div.recharts-responsive-container":{marginLeft:-25}},tableRoot:{width:"100%",overflowX:"auto"},table:{minWidth:550},arranjo:{margin:a.spacing(2,0,0,0),display:"flex",flexDirection:"column",justifyContent:"center"},subArranjo:{position:"relative",height:100,width:"100%"},select:{display:"flex"},etapa:{margin:a.spacing(6,0,1,0)},listaEstacas:{width:"100%",maxWidth:360,backgroundColor:a.palette.background.default},falha:{backgroundColor:"#ed4b82"},nested:{paddingLeft:a.spacing(6),flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},soloParams:{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},profundidade:{flexDirection:"column"},slider:{maxWidth:240,margin:a.spacing(4,0,4,0)},max:{margin:a.spacing(0,0,4,0)},last:{flexDirection:"column"}}})),K=[{nome:"Dupla de hexagonal",felds:.5832,m:6,n:2,coords:[[1.5,1],[3.5,1],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[4,3],[1.5,4],[3.5,4]]},{nome:"Dupla de seis",m:3,n:4,coords:[[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[4,3]]},{nome:"Duplo de quatro",m:2,n:4,coords:[[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2]]},{nome:"Dupla de cinco",felds:.6625,m:2,n:5,coords:[[1,1],[2,1],[3,1],[4,1],[1.5,2],[3.5,2],[1,3],[2,3],[3,3],[4,3]]}],V=Object(s.a)((function(a){return{secao:{position:"absolute",left:function(e){return a.spacing(e.lateral)},right:function(e){return a.spacing(e.lateral)},top:function(e){return a.spacing(e.top-1)},width:a.spacing(1),height:a.spacing(1),borderRadius:100,backgroundColor:"black"}}})),z=function(a){var e=V(a);return r.a.createElement("div",{className:e.secao})},T=function(a){a.hex;var e=a.arranjo,t=J();return r.a.createElement("div",{className:t.subArranjo},e.map((function(a,e){return r.a.createElement(z,{key:e,top:3*a[1],lateral:3*a[0]})})))},X=function(a,e,t,n){return 1-180*Math.atan(a/e)/Math.PI*((n-1)*t+(t-1)*n)/(90*t*n)},$=[{nome:"Argila siltosa",nspt:3,h:4,inicio:0,profundidade:4,k:.25,alpha:5.5},{nome:"Argila arenosa",nspt:8,h:3,inicio:4,profundidade:7,k:.48,alpha:4},{nome:"Areia argilosa",nspt:14,h:4,inicio:7,profundidade:11,k:.53,alpha:3},{nome:"Areia siltosa",nspt:24,h:5,inicio:11,profundidade:16,k:.53,alpha:1.9},{nome:"Areia siltosa",nspt:33,h:5,inicio:16,profundidade:20.05,k:.8,alpha:2}],H=function(a,e,t,n){return a*e*n/t},Q=function(a,e,t,n,r){return a.map((function(a){return G({},a,{u:r?4*e.secao:Math.PI*e.secao,l:a.profundidade>t?t-a.inicio:a.h})})).filter((function(a){return a.inicio<=t})).reduce((function(a,e,t){return("number"===typeof a?a:0)+e.u*e.l*e.k*e.nspt*e.alpha/(100*n)}),0)},U=function(a,e){return e.filter((function(e){return e.inicio<=a&&e.profundidade>a}))},Y=function(a){var e=[];return K.map((function(t){var n=t.m*t.n,r=1.1*a/n;L.filter((function(a){return a.variacoes.some((function(a){return a.carga>=r}))})).map((function(a){return G({},a,{variacoes:a.variacoes.filter((function(a){return a.carga>=r})).map((function(a){return G({},a,{},t.felds?{eficiencia:t.felds,metodoEfeitoGrupo:"felds"}:{eficiencia:X(a.secao,a.d,t.m,t.n),metodoEfeitoGrupo:"labarre"})}))})})).map((function(a){a.variacoes.map((function(n){for(var c,o="Franki"===a.nome?.38:a.quadrada?Math.pow(n.secao/2,2):3.14592654*Math.pow(n.secao/2,2),l=24,i=[4,20],m={pAdmCorrigida:0};l>.01;){c=(i[0]+i[1])/2;var s=U(c,$)[0],u=H(o,s.k,a.f1,s.nspt),d=Q($,n,c,a.f2,a.quadrada),p=u+d,f=p/2*1e3;(m={cp:1e3*u,cl:1e3*d,pr:1e3*p,pAdm:f,pAdmCorrigida:f*n.eficiencia}).pAdmCorrigida>=r?i[1]=c:i[0]=c,l=i[1]-i[0]}c=Math.round(10*c)/10;var E=U(c,$)[0],g=H(o,E.k,a.f1,E.nspt),h=Q($,n,c,a.f2,a.quadrada),b=g+h,v=b/2*1e3;m={cp:1e3*g,cl:1e3*h,pr:1e3*b,pAdm:v,pAdmCorrigida:v*n.eficiencia},e.push(G({id:"".concat(t.nome," - ").concat(a.nome," - ").concat(n.secao),profundidade:c,nome:a.nome,secao:n.secao,arranjo:t.nome,pAp:r},m))}))}))})),e};var Z=function(){var a=J(),e=r.a.useState(5310),t=Object(l.a)(e,2),n=t[0],c=t[1],o=r.a.useState(0),s=Object(l.a)(o,2),M=s[0],B=s[1],V=r.a.useState(null),z=Object(l.a)(V,2),Z=z[0],_=z[1],aa=r.a.useState(null),ea=Object(l.a)(aa,2),ta=ea[0],na=ea[1],ra=r.a.useState(null),ca=Object(l.a)(ra,2),oa=ca[0],la=ca[1],ia=r.a.useState($),ma=Object(l.a)(ia,2),sa=ma[0],ua=(ma[1],r.a.useState(10)),da=Object(l.a)(ua,2),pa=da[0],fa=da[1],Ea=r.a.useState(null),ga=Object(l.a)(Ea,2),ha=ga[0],ba=ga[1],va=r.a.useState(null),ka=Object(l.a)(va,2),ya=ka[0],ja=ka[1];return r.a.useEffect((function(){var a=K[M].m*K[M].n;_(1.1*n/a),la(null)}),[n,M]),r.a.useEffect((function(){var a=Y(n);ja(a.sort((function(a,e){return a.profundidade>e.profundidade?1:a.profundidade<e.profundidade?-1:0})))}),[n]),r.a.useEffect((function(){var a=L.filter((function(a){return a.variacoes.some((function(a){return a.carga>=Z}))})).map((function(a){return G({},a,{variacoes:a.variacoes.filter((function(a){return a.carga>=Z})).map((function(a){return G({},a,{},K[M].felds?{}:{eficiencia:X(a.secao,a.d,K[M].m,K[M].n)})}))})}));na(a),la(null)}),[Z,M]),r.a.useEffect((function(){if(oa){var a="Franki"===ta[oa[0]].nome?.38:ta[oa[0]].quadrada?Math.pow(ta[oa[0]].variacoes[oa[1]].secao/2,2):3.14592654*Math.pow(ta[oa[0]].variacoes[oa[1]].secao/2,2),e=U(pa,sa)[0],t=H(a,e.k,ta[oa[0]].f1,e.nspt),n=Q(sa,ta[oa[0]].variacoes[oa[1]],pa,ta[oa[0]].f2,ta[oa[0]].quadrada),r=t+n,c=r/2*1e3,o=K[M].felds?c*K[M].felds:ta[oa[0]].variacoes[oa[1]].eficiencia*c;ba({cp:1e3*t,cl:1e3*n,pr:1e3*r,pAdm:c,pAdmCorrigida:o})}}),[oa,sa,pa]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(p.a,{maxWidth:"lg"},r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{variant:"h4",gutterBottom:!0,className:a.title},"Projeto 2 de funda\xe7\xf5es"),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"1: Definir a carga.")),r.a.createElement(C.a,null,r.a.createElement(g.a,{className:Object(m.a)(a.margin,a.formControl)},r.a.createElement(h.a,{value:n,onChange:function(a){var e=Number(a.target.value);e>=0?c(e):alert("Apenas numero!")},endAdornment:r.a.createElement(f.a,{position:"end"},"kN")}),r.a.createElement(E.a,null,"Carga total")))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"2: Definir o arranjo geom\xe9trico.")),r.a.createElement(C.a,{className:a.geometrico},r.a.createElement(g.a,{className:Object(m.a)(a.margin,a.formControl)},r.a.createElement(b.a,{value:M,onChange:function(a){return B(Number(a.target.value))}},K.map((function(a,e){return r.a.createElement("option",{value:e,key:a.nome},a.nome)}))),r.a.createElement(E.a,null,"Arranjo geometrico")),r.a.createElement("div",{className:a.arranjo},r.a.createElement(T,{arranjo:K[M].coords})))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"3: Calcular a carga aplicada em cada estaca.")),r.a.createElement(C.a,null,r.a.createElement(d.a,{variant:"body1"},"Carga aplicada em cada estaca:",Z?" ".concat(Z.toFixed(2)," kN"):" loading..."))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"4: Filtrar entre os tipos de estacas, as que suportam a carga aplicada em cada pilar e selecionar a desejada.")),r.a.createElement(C.a,null,r.a.createElement("div",null),ta&&r.a.createElement(k.a,{className:a.listaEstacas,subheader:r.a.createElement(v.a,null,"Estacas aceitaveis",K[M].felds?" - Efici\xeancia (Felds) ".concat(Math.round(1e4*K[M].felds)/100," %"):"")},ta.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e.nome},r.a.createElement(y.a,{button:!0,key:e.nome},r.a.createElement(N.a,{primary:e.nome}),r.a.createElement(N.a,{secondary:"F1: ".concat(e.f1)}),r.a.createElement(N.a,{secondary:"F2: ".concat(e.f2)})),e.variacoes.map((function(e,n){return r.a.createElement(y.a,{button:!0,key:e.secao,className:a.nested,onClick:function(){la([t,n])}},r.a.createElement(j.a,null,r.a.createElement(A.a,{edge:"start",checked:!!oa&&(t===oa[0]&&n===oa[1]),tabIndex:-1,disableRipple:!0})),r.a.createElement(N.a,{primary:"Secao ".concat(e.secao," m")}),r.a.createElement(N.a,{secondary:"Carga maxima ".concat(e.carga," kN")}),r.a.createElement(N.a,{secondary:"Dist\xe2ncia m\xednima ".concat(e.d," m")}),e.eficiencia?r.a.createElement(N.a,{secondary:"Efici\xeancia (Labarre) ".concat(Math.round(1e4*e.eficiencia)/100," %")}):null)})))}))))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"5: Definir os parametros K e alpha.")),r.a.createElement(C.a,null,r.a.createElement(k.a,{className:a.listaEstacas,subheader:r.a.createElement(v.a,null,"Parametros do solo")},sa.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(y.a,{button:!0,key:t},r.a.createElement(N.a,{primary:"Camada ".concat(t+1)})),r.a.createElement(y.a,{className:a.nested},r.a.createElement(b.a,{value:e.nome},W.map((function(a,e){return r.a.createElement("option",{disabled:!0,value:a.nome,key:e},a.nome)}))),r.a.createElement(N.a,{secondary:"nspt = ".concat(e.nspt)}),r.a.createElement(N.a,{secondary:"h = ".concat(e.h," m")}),r.a.createElement(N.a,{secondary:"k = ".concat(e.k," MPa")}),r.a.createElement(N.a,{secondary:"alpha = ".concat(e.alpha," %")})))}))))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"6: Definir a \xe1rea da ponta")),r.a.createElement(C.a,null,r.a.createElement(d.a,{variant:"body1"},oa?"Franki"===ta[oa[0]].nome?r.a.createElement("span",null,"0.38 m\xb2 (bulbo de 180 l)"):ta[oa[0]].quadrada?"".concat(Math.round(1e4*Math.pow(ta[oa[0]].variacoes[oa[1]].secao,2))/1e4," m\xb2"):"".concat(Math.round(3.14592654*Math.pow(ta[oa[0]].variacoes[oa[1]].secao/2,2)*1e4)/1e4," m\xb2"):r.a.createElement("span",null,"Escolha uma estaca na estapa 4")))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"7: Definir a profundidade")),r.a.createElement(C.a,{className:a.profundidade},r.a.createElement(D.a,{valueLabelDisplay:"on",getAriaValueText:function(a){return"".concat(a," m")},className:a.slider,defaultValue:pa,step:.1,min:4,max:20,onChangeCommitted:function(a,e){fa(e)}}),ha&&r.a.createElement(d.a,{variant:"body1",className:a.max},"Carga m\xe1xima suportada por cada estaca: ",Math.round(Z,2)," kN"),ha?r.a.createElement(k.a,{className:Object(m.a)(a.listaEstacas,Object(i.a)({},a.falha,Z>ha.pAdmCorrigida)),subheader:r.a.createElement(v.a,null,"Resultados")},r.a.createElement(y.a,{button:!0},r.a.createElement(N.a,{primary:"carga na ponta ".concat(Math.round(ha.cp,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(N.a,{primary:"carga lateral ".concat(Math.round(ha.cl,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(N.a,{primary:"capacidade de carga ".concat(Math.round(ha.pr,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(N.a,{primary:"carga admissivel ".concat(Math.round(ha.pAdm,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(N.a,{primary:"carga admissivel corrigida ".concat(Math.round(ha.pAdmCorrigida,2)," kN")}))):r.a.createElement(d.a,{variant:"body1"},"Escolha uma estaca na etapa 4"))),r.a.createElement(x.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(w.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"8: Comparativo")),r.a.createElement(C.a,{className:a.last},r.a.createElement("div",{className:a.comparativo},ya&&ya.length>0?r.a.createElement(R.d,{width:"99%",height:"90%"},r.a.createElement(R.b,{data:ya},r.a.createElement(R.f,null),r.a.createElement(R.g,null),r.a.createElement(R.e,{formatter:function(a,e,t){return"".concat(Math.round(100*a)/100," m")},labelFormatter:function(a){return ya?ya[a].id:a}}),r.a.createElement(R.c,null),r.a.createElement(R.a,{dataKey:"profundidade",fill:"#8884d8"}))):r.a.createElement(d.a,{variant:"body1"},"Nenhum dado disponivel")),ya&&ya.length>0&&r.a.createElement("div",{className:a.tableRoot},r.a.createElement(P.a,{className:a.table,size:"small"},r.a.createElement(S.a,null,r.a.createElement(q.a,null,r.a.createElement(I.a,null,"Estaca"),r.a.createElement(I.a,{align:"right"},"Secao (m)"),r.a.createElement(I.a,{align:"right"},"Arranjo"),r.a.createElement(I.a,{align:"right"},"h (m)"),r.a.createElement(I.a,{align:"right"},"Papl (kN)"),r.a.createElement(I.a,{align:"right"},"Ponta (kN)"),r.a.createElement(I.a,{align:"right"},"Lateral (kN)"),r.a.createElement(I.a,{align:"right"},"PR (kN)"),r.a.createElement(I.a,{align:"right"},"Padm (kN)"),r.a.createElement(I.a,{align:"right"},"Padmc (kN)"))),r.a.createElement(F.a,null,ya.map((function(a){return r.a.createElement(q.a,{key:a.id},r.a.createElement(I.a,{component:"th",scope:"row"},a.nome),r.a.createElement(I.a,{align:"right"},a.secao),r.a.createElement(I.a,{align:"right"},a.arranjo),r.a.createElement(I.a,{align:"right"},Math.round(100*a.profundidade)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.pAp)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.cp)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.cl)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.pr)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.pAdm)/100),r.a.createElement(I.a,{align:"right"},Math.round(100*a.pAdmCorrigida)/100))}))))))))))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.838e284f.chunk.js.map