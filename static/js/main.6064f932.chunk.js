(this["webpackJsonpfundacoes-proj-2"]=this["webpackJsonpfundacoes-proj-2"]||[]).push([[0],{210:function(a,e,t){a.exports=t(399)},215:function(a,e,t){},399:function(a,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),c=t(18),o=t.n(c),l=(t(215),t(22)),i=t(108),m=t(4),s=t(176),u=t(434),d=t(63),p=t(435),f=t(439),E=t(440),g=t(438),h=t(448),b=t(449),v=t(442),k=t(441),y=t(443),j=t(445),x=t(444),O=t(447),A=t(446),N=t(436),C=t(437),D=t(26),M=t.n(D),w=t(450),I=t(33),P=[{nome:"Fuste quadrada",quadrada:!0,f1:1.75,f2:3.5,variacoes:[{secao:.15,carga:150,d:.6,a:.3,comprimento:[3,8]},{secao:.2,carga:200,d:.6,a:.3,comprimento:[3,12]},{secao:.25,carga:300,d:.65,a:.35,comprimento:[3,12]},{secao:.3,carga:400,d:.75,a:.4,comprimento:[3,12]},{secao:.35,carga:500,d:.9,a:.4,comprimento:[3,12]},{secao:.4,carga:700,d:1,a:.5,comprimento:[3,12]}]},{nome:"Fuste circular",f1:1.75,f2:3.5,variacoes:[{secao:.2,carga:200,d:.6,a:.3,comprimento:[4,10]},{secao:.25,carga:300,d:.65,a:.3,comprimento:[4,14]},{secao:.3,carga:400,d:.75,a:.35,comprimento:[4,16]},{secao:.35,carga:550,d:.9,a:.4,comprimento:[4,16]},{secao:.4,carga:700,d:1,a:.5,comprimento:[4,16]},{secao:.5,carga:1e3,d:1.3,a:.5,comprimento:[4,16]},{secao:.6,carga:1500,d:1.5,a:.5,comprimento:[4,16]}]},{nome:"Strauss",f1:4.2,f2:3.8,variacoes:[{secao:.25,carga:200,d:.75,a:.2,comprimento:[3,12]},{secao:.32,carga:300,d:1,a:.2,comprimento:[3,15]},{secao:.38,carga:450,d:1.2,a:.25,comprimento:[3,20]},{secao:.45,carga:600,d:1.35,a:.3,comprimento:[3,20]},{secao:.55,carga:800,d:1.65,a:.35,comprimento:[3,20]}]}],S=[{nome:"Areia",k:[10,6],alpha:[1.4,1.4]},{nome:"Areia siltosa",k:[8,5.3],alpha:[2,1.9]},{nome:"Areia silto argilosa",k:[7,5.3],alpha:[2.4,2.4]},{nome:"Areia argilosa",k:[6,5.3],alpha:[3,3]},{nome:"Areias argilo-siltosa",k:[5,5.3],alpha:[2.8]},{nome:"Argila",k:[2,2.5],alpha:[6,6]},{nome:"Argila arenosa",k:[3.5,4.8],alpha:[2.4,4]},{nome:"Argila areno-siltosa",k:[3,3],alpha:[2.8,4.5]},{nome:"Argila siltosa",k:[2.2,2.5],alpha:[4,5.5]},{nome:"Argila silto-arenosa",k:[3.3,3],alpha:[3,5]}];function F(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function q(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?F(t,!0).forEach((function(e){Object(i.a)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}var L=Object(s.a)((function(a){return{root:{margin:a.spacing(4,0,4,0),display:"flex",flexDirection:"column"},title:{marginBottom:a.spacing(5)},margin:{margin:a.spacing(1)},formControl:{width:200},geometrico:{flexDirection:"column"},comparativo:{height:400,width:"100%","& $div.recharts-responsive-container":{marginLeft:-25}},arranjo:{margin:a.spacing(2,0,0,0),display:"flex",flexDirection:"column",justifyContent:"center"},subArranjo:{position:"relative",height:100,width:"100%"},select:{display:"flex"},etapa:{margin:a.spacing(6,0,1,0)},listaEstacas:{width:"100%",maxWidth:360,backgroundColor:a.palette.background.default},falha:{backgroundColor:"#ed4b82"},nested:{paddingLeft:a.spacing(6),flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},soloParams:{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},profundidade:{flexDirection:"column"},slider:{maxWidth:240,margin:a.spacing(4,0,4,0)},max:{margin:a.spacing(0,0,4,0)}}})),B=[{nome:"Dupla de hexagonal",felds:.5832,m:4,n:2,coords:[[1.5,1],[3.5,1],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[4,3],[1.5,4],[3.5,4]]},{nome:"Dupla de seis",m:3,n:4,coords:[[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[4,3]]},{nome:"Duplo de quatro",m:2,n:4,coords:[[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2]]},{nome:"Dupla de cinco",felds:.6625,m:2,n:5,coords:[[1,1],[2,1],[3,1],[4,1],[1.5,2],[3.5,2],[1,3],[2,3],[3,3],[4,3]]}],R=Object(s.a)((function(a){return{secao:{position:"absolute",left:function(e){return a.spacing(e.lateral)},right:function(e){return a.spacing(e.lateral)},top:function(e){return a.spacing(e.top-1)},width:a.spacing(1),height:a.spacing(1),borderRadius:100,backgroundColor:"black"}}})),W=function(a){var e=R(a);return r.a.createElement("div",{className:e.secao})},G=function(a){a.hex;var e=a.arranjo,t=L();return r.a.createElement("div",{className:t.subArranjo},e.map((function(a,e){return r.a.createElement(W,{key:e,top:3*a[1],lateral:3*a[0]})})))},J=function(a,e,t,n){return 1-180*Math.atan(a/e)/Math.PI*((n-1)*t+(t-1)*n)/(90*t*n)},K=[{nome:"Argila siltosa",nspt:3,h:3,inicio:0,profundidade:3,k:.25,alpha:5.5},{nome:"Argila arenosa",nspt:9,h:3,inicio:3,profundidade:6,k:.48,alpha:4},{nome:"Areia argilosa",nspt:14,h:4,inicio:6,profundidade:10,k:.53,alpha:3},{nome:"Areia siltosa",nspt:24,h:5,inicio:10,profundidade:15,k:.53,alpha:1.9},{nome:"Areia siltosa",nspt:33,h:5,inicio:15,profundidade:20.05,k:.8,alpha:2}],V=function(a,e,t,n){return a*e*n/t},T=function(a,e,t,n,r){return a.map((function(a){return q({},a,{u:r?4*e.secao:Math.PI*e.secao,l:a.profundidade>t?t-a.inicio:a.h})})).filter((function(a){return a.inicio<=t})).reduce((function(a,e,t){return("number"===typeof a?a:0)+e.u*e.l*e.k*e.nspt*e.alpha/(100*n)}),0)},$=function(a,e){return e.filter((function(e){return e.inicio<=a&&e.profundidade>a}))},z=function(a){var e=[];return B.map((function(t){var n=t.m*t.n,r=1.1*a/n;P.filter((function(a){return a.variacoes.some((function(a){return a.carga>=r}))})).map((function(a){return q({},a,{variacoes:a.variacoes.filter((function(a){return a.carga>=r})).map((function(a){return q({},a,{},t.felds?{eficiencia:t.felds,metodoEfeitoGrupo:"felds"}:{eficiencia:J(a.secao,a.d,t.m,t.n),metodoEfeitoGrupo:"labarre"})}))})})).map((function(a){a.variacoes.map((function(n){for(var c,o="Franki"===a.nome?.38:a.quadrada?Math.pow(n.secao/2,2):3.14592654*Math.pow(n.secao/2,2),l=24,i=[4,20],m={};l>.05;){c=(i[0]+i[1])/2;var s=$(c,K)[0],u=V(o,s.k,a.f1,s.nspt),d=T(K,n,c,a.f2,a.quadrada),p=u+d,f=p/2*1e3;(m={cp:1e3*u,cl:1e3*d,pr:1e3*p,pAdm:f,pAdmCorrigida:f*n.eficiencia}).pAdmCorrigida>=r?i[1]=c:i[0]=c,l=i[1]-i[0]}e.push(q({id:"".concat(t.nome," - ").concat(a.nome," - ").concat(n.secao),profundidade:c,nome:a.nome,secao:n.secao,arranjo:t.nome},m))}))}))})),e};var H=function(){var a=L(),e=r.a.useState(5310),t=Object(l.a)(e,2),n=t[0],c=t[1],o=r.a.useState(0),s=Object(l.a)(o,2),D=s[0],F=s[1],R=r.a.useState(null),W=Object(l.a)(R,2),H=W[0],Q=W[1],U=r.a.useState(null),X=Object(l.a)(U,2),Y=X[0],Z=X[1],_=r.a.useState(null),aa=Object(l.a)(_,2),ea=aa[0],ta=aa[1],na=r.a.useState(K),ra=Object(l.a)(na,2),ca=ra[0],oa=(ra[1],r.a.useState(10)),la=Object(l.a)(oa,2),ia=la[0],ma=la[1],sa=r.a.useState(null),ua=Object(l.a)(sa,2),da=ua[0],pa=ua[1],fa=r.a.useState(null),Ea=Object(l.a)(fa,2),ga=Ea[0],ha=Ea[1];return r.a.useEffect((function(){var a=B[D].m*B[D].n;Q(1.1*n/a),ta(null)}),[n,D]),r.a.useEffect((function(){var a=z(n);ha(a.sort((function(a,e){return a.profundidade>e.profundidade?1:a.profundidade<e.profundidade?-1:0})))}),[n]),r.a.useEffect((function(){var a=P.filter((function(a){return a.variacoes.some((function(a){return a.carga>=H}))})).map((function(a){return q({},a,{variacoes:a.variacoes.filter((function(a){return a.carga>=H})).map((function(a){return q({},a,{},B[D].felds?{}:{eficiencia:J(a.secao,a.d,B[D].m,B[D].n)})}))})}));Z(a),ta(null)}),[H,D]),r.a.useEffect((function(){if(ea){var a="Franki"===Y[ea[0]].nome?.38:Y[ea[0]].quadrada?Math.pow(Y[ea[0]].variacoes[ea[1]].secao/2,2):3.14592654*Math.pow(Y[ea[0]].variacoes[ea[1]].secao/2,2),e=$(ia,ca)[0],t=V(a,e.k,Y[ea[0]].f1,e.nspt),n=T(ca,Y[ea[0]].variacoes[ea[1]],ia,Y[ea[0]].f2,Y[ea[0]].quadrada),r=t+n,c=r/2*1e3,o=B[D].felds?c*B[D].felds:Y[ea[0]].variacoes[ea[1]].eficiencia*c;pa({cp:1e3*t,cl:1e3*n,pr:1e3*r,pAdm:c,pAdmCorrigida:o})}}),[ea,ca,ia]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{variant:"h4",gutterBottom:!0,className:a.title},"Projeto 2 de funda\xe7\xf5es"),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"1: Definir a carga.")),r.a.createElement(C.a,null,r.a.createElement(g.a,{className:Object(m.a)(a.margin,a.formControl)},r.a.createElement(h.a,{value:n,onChange:function(a){var e=Number(a.target.value);e>=0?c(e):alert("Apenas numero!")},endAdornment:r.a.createElement(f.a,{position:"end"},"kN")}),r.a.createElement(E.a,null,"Carga total")))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"2: Definir o arranjo geom\xe9trico.")),r.a.createElement(C.a,{className:a.geometrico},r.a.createElement(g.a,{className:Object(m.a)(a.margin,a.formControl)},r.a.createElement(b.a,{value:D,onChange:function(a){return F(Number(a.target.value))}},B.map((function(a,e){return r.a.createElement("option",{value:e,key:a.nome},a.nome)}))),r.a.createElement(E.a,null,"Arranjo geometrico")),r.a.createElement("div",{className:a.arranjo},r.a.createElement(G,{arranjo:B[D].coords})))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"3: Calcular a carga aplicada em cada estaca.")),r.a.createElement(C.a,null,r.a.createElement(d.a,{variant:"body1"},"Carga aplicada em cada estaca:",H?" ".concat(H.toFixed(2)," kN"):" loading..."))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"4: Filtrar entre os tipos de estacas, as que suportam a carga aplicada em cada pilar e selecionar a desejada.")),r.a.createElement(C.a,null,r.a.createElement("div",null),Y&&r.a.createElement(k.a,{className:a.listaEstacas,subheader:r.a.createElement(v.a,null,"Estacas aceitaveis",B[D].felds?" - Efici\xeancia (Felds) ".concat(Math.round(1e4*B[D].felds)/100," %"):"")},Y.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e.nome},r.a.createElement(y.a,{button:!0,key:e.nome},r.a.createElement(x.a,{primary:e.nome})),e.variacoes.map((function(e,n){return r.a.createElement(y.a,{button:!0,key:e.secao,className:a.nested,onClick:function(){ta([t,n])}},r.a.createElement(j.a,null,r.a.createElement(O.a,{edge:"start",checked:!!ea&&(t===ea[0]&&n===ea[1]),tabIndex:-1,disableRipple:!0})),r.a.createElement(x.a,{primary:"Secao ".concat(e.secao," m")}),r.a.createElement(x.a,{secondary:"Carga maxima ".concat(e.carga," kN")}),r.a.createElement(x.a,{secondary:"Dist\xe2ncia m\xednima ".concat(e.d," m")}),e.eficiencia?r.a.createElement(x.a,{secondary:"Efici\xeancia (Labarre) ".concat(Math.round(1e4*e.eficiencia)/100," %")}):null)})))}))))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"5: Definir os parametros K e alpha.")),r.a.createElement(C.a,null,r.a.createElement(k.a,{className:a.listaEstacas,subheader:r.a.createElement(v.a,null,"Parametros do solo")},ca.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(y.a,{button:!0,key:t},r.a.createElement(x.a,{primary:"Camada ".concat(t+1)})),r.a.createElement(y.a,{className:a.nested},r.a.createElement(b.a,{value:e.nome},S.map((function(a,e){return r.a.createElement("option",{disabled:!0,value:a.nome,key:e},a.nome)}))),r.a.createElement(x.a,{secondary:"nspt = ".concat(e.nspt)}),r.a.createElement(x.a,{secondary:"h = ".concat(e.h," m")}),r.a.createElement(x.a,{secondary:"k = ".concat(e.k," MPa")}),r.a.createElement(x.a,{secondary:"alpha = ".concat(e.alpha," %")})))}))))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"6: Definir a \xe1rea da ponta")),r.a.createElement(C.a,null,r.a.createElement(d.a,{variant:"body1"},ea?"Franki"===Y[ea[0]].nome?r.a.createElement("span",null,"0.38 m\xb2 (bulbo de 180 l)"):Y[ea[0]].quadrada?"".concat(Math.round(1e4*Math.pow(Y[ea[0]].variacoes[ea[1]].secao,2))/1e4," m\xb2"):"".concat(Math.round(3.14592654*Math.pow(Y[ea[0]].variacoes[ea[1]].secao/2,2)*1e4)/1e4," m\xb2"):r.a.createElement("span",null,"Escolha uma estaca na estapa 4")))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"7: Definir a profundidade")),r.a.createElement(C.a,{className:a.profundidade},r.a.createElement(w.a,{valueLabelDisplay:"on",getAriaValueText:function(a){return"".concat(a," m")},className:a.slider,defaultValue:ia,step:.05,min:4,max:20,onChangeCommitted:function(a,e){ma(e)}}),da&&r.a.createElement(d.a,{variant:"body1",className:a.max},"Carga m\xe1xima suportada por cada estaca: ",Math.round(H,2)," kN"),da?r.a.createElement(k.a,{className:Object(m.a)(a.listaEstacas,Object(i.a)({},a.falha,H>da.pAdmCorrigida)),subheader:r.a.createElement(v.a,null,"Resultados")},r.a.createElement(y.a,{button:!0},r.a.createElement(x.a,{primary:"carga na ponta ".concat(Math.round(da.cp,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(x.a,{primary:"carga lateral ".concat(Math.round(da.cl,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(x.a,{primary:"capacidade de carga ".concat(Math.round(da.pr,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(x.a,{primary:"carga admissivel ".concat(Math.round(da.pAdm,2)," kN")})),r.a.createElement(y.a,{button:!0},r.a.createElement(x.a,{primary:"carga admissivel corrigida ".concat(Math.round(da.pAdmCorrigida,2)," kN")}))):r.a.createElement(d.a,{variant:"body1"},"Escolha uma estaca na etapa 4"))),r.a.createElement(A.a,null,r.a.createElement(N.a,{expandIcon:r.a.createElement(M.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{variant:"subtitle1"},"8: Comparativo")),r.a.createElement(C.a,null,r.a.createElement("div",{className:a.comparativo},ga&&ga.length>0?r.a.createElement(I.d,{width:"99%",height:"90%"},r.a.createElement(I.b,{data:ga},r.a.createElement(I.f,null),r.a.createElement(I.g,null),r.a.createElement(I.e,{formatter:function(a,e,t){return"".concat(Math.round(100*a)/100," m")},labelFormatter:function(a){return ga?ga[a].id:a}}),r.a.createElement(I.c,null),r.a.createElement(I.a,{dataKey:"profundidade",fill:"#8884d8"}))):r.a.createElement(d.a,{variant:"body1"},"Nenhum dado disponivel")))))))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.6064f932.chunk.js.map