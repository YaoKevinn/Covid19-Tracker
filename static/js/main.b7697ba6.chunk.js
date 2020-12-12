(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},203:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),s=n.n(a),r=n(7),o=n.n(r),i=(n(98),n(23)),l=n.n(i),u=n(38),d=n(11),j=n(241),f=n(242),h=n(243),b=n(233),v=n(237),p=n(13),O=(n(100),n(238));var x=function(e){var t=e.title,n=e.cases,a=e.isRed,s=e.active,r=e.total,o=Object(p.a)(e,["title","cases","isRed","active","total"]);return Object(c.jsx)("div",{className:"infoBox",children:Object(c.jsx)(b.a,{onClick:function(){o.onClick(),o.mapReRender()},className:s?a?"infoBox infoBox--red":"infoBox infoBox--green":"infoBox",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(O.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(c.jsx)("h2",{className:a?"infoBox__cases":"infoBox__recovered",children:n}),Object(c.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})})},m=(n(105),n(240)),g=n(245),y=n(86),C=n(14),N=n.n(C),_=n(244),w=n(239),R={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",multiplier:500},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",multiplier:2e3}},k=function(e){return Object(y.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},S=function(e){return e?"+".concat(N()(e).format("0,0")):"+0"},B=function(e,t){return e.map((function(e,n){return Object(c.jsx)(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:R[t].hex,fillColor:R[t].hex,radius:Math.sqrt(e[t])*R[t].multiplier,children:Object(c.jsx)(w.a,{children:Object(c.jsxs)("div",{className:"info-container",children:[Object(c.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(c.jsx)("div",{className:"info-name",children:e.country}),Object(c.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(c.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(c.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})},n)}))};var I=function(e){var t=e.countries,n=e.casesType,a=e.center,s=e.zoom;return Object(c.jsxs)("div",{className:"map",children:[console.log(a),console.log(s),Object(c.jsxs)(m.a,{center:a,zoom:s,children:[Object(c.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),B(t,n)]})]})};n(106);var T=function(e){var t=e.countries;return Object(c.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,n=e.cases,a=e.index;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:N()(n).format("0,0")})})]},a)}))})},D=n(85),F={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return N()(e).format("0a")}}}]}},L=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[];for(var a in e[n]){if(t){var s={x:a,y:e[n][a]-t};c.push(s)}t=e[n][a]}return c};var z=function(e){var t=e.casesType,n=void 0===t?"cases":t,s=Object(p.a)(e,["casesType"]),r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],j=o[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=L(e,n);j(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.jsx)("div",{className:s.className,children:(null===i||void 0===i?void 0:i.length)>0&&Object(c.jsx)(D.Line,{options:F,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]}})})};n(203),n(204);var E=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],p=o[1],O=Object(a.useState)({}),m=Object(d.a)(O,2),g=m[0],y=m[1],C=Object(a.useState)([]),N=Object(d.a)(C,2),_=N[0],w=N[1],R=Object(a.useState)({lat:34.80746,lng:-40.4796}),B=Object(d.a)(R,2),D=B[0],F=B[1],L=Object(a.useState)(2),E=Object(d.a)(L,2),M=E[0],A=E[1],W=Object(a.useState)([]),J=Object(d.a)(W,2),P=J[0],Y=J[1],q=Object(a.useState)("cases"),K=Object(d.a)(q,2),V=K[0],G=K[1],H=Object(a.useState)("false"),Q=Object(d.a)(H,2),U=Q[0],X=Q[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=k(e);w(n),Y(e),s(t),console.log("Fetch Countries data Success!!")})).catch((function(e){return console.log("Fetch Countries data failed: ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Z=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,p(n),c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n,"?yesterday=true&strict=true"),e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){p(n),y(e),F([e.countryInfo.lat,e.countryInfo.long]),A(4),$();var t=e.updated,c=new Date(t);console.log(e),console.log(c.toLocaleDateString())})).catch((function(e){return console.log("Fetch Country Code Failed...",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){X(!U)};return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"app__left",children:[Object(c.jsxs)("div",{className:"app__header",children:[Object(c.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(c.jsx)(j.a,{className:"app__dropdown",children:Object(c.jsxs)(f.a,{variant:"outlined",value:i,onChange:function(e){return Z(e)},children:[Object(c.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),n.map((function(e,t){return Object(c.jsx)(h.a,{value:e.value,children:e.name},t)}))]})})]}),Object(c.jsxs)("div",{className:"app__stats",children:[Object(c.jsx)(x,{isRed:!0,active:"cases"===V,onClick:function(e){return G("cases")},mapReRender:$,title:"Coronavirus Cases",cases:S(g.todayCases),total:S(g.cases)}),Object(c.jsx)(x,{active:"recovered"===V,onClick:function(e){return G("recovered")},mapReRender:$,title:"Recovered",cases:S(g.todayRecovered),total:S(g.recovered)}),Object(c.jsx)(x,{isRed:!0,active:"deaths"===V,onClick:function(e){return G("deaths")},mapReRender:$,title:"Deaths",cases:S(g.todayDeaths),total:S(g.deaths)})]}),U?Object(c.jsx)(I,{countries:P,center:D,zoom:M,casesType:V},1):Object(c.jsx)(I,{countries:P,center:D,zoom:M,casesType:V},2)]}),Object(c.jsx)(b.a,{className:"app__right",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)("h3",{children:"Live Cases by Country"}),Object(c.jsx)(T,{countries:_}),Object(c.jsxs)("h3",{style:{padding:"20px 0"},children:["WorldWide New ",V]}),Object(c.jsx)(z,{className:"app__graph",casesType:V})]})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),M()},98:function(e,t,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.b7697ba6.chunk.js.map