(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,n,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("20a1124a",content,!0,{sourceMap:!1})},296:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMiIGhlaWdodD0iOTAuMzA1IiB2aWV3Qm94PSIwIDAgMTAzIDkwLjMwNSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzVlYzRlMTt9LmJ7ZmlsbDojMTkxZTQyO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTS0xODA2LjgsMTg2My4zMjZsMTAzLTkwLjN2OTAuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MDYuNzk3IC0xNzczLjAyMSkiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTMyLjg4NywyNy41MTQsMjQuNiwzNS44MzJhMS4zMjksMS4zMjksMCwwLDEtMS44NjMtMS45bDYuMDIyLTYuMDIySDkuMzMxYTEuMzMxLDEuMzMxLDAsMSwxLDAtMi42NjJIMjguNzYxTDIyLjcwNiwxOS4yYTEuMzQxLDEuMzQxLDAsMCwxLDEuOS0xLjlsOC4yODUsOC4zMThBMS4zMjYsMS4zMjYsMCwwLDEsMzIuODg3LDI3LjUxNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjc5NyAzNy4wNzkpIi8+PC9zdmc+"},298:function(t,n,e){var map={"./Component 10 – 1.svg":311,"./Path 44.svg":312,"./Path 50.svg":313,"./arrow.svg":314,"./home.svg":315,"./next.svg":296,"./nextBlue.svg":316,"./pattern-Bottom-aqua.svg":317,"./pattern-Bottom-blue.svg":318,"./pattern-Bottom-purple.svg":319,"./pattern-Bottom-red.svg":320,"./pattern-Bottom-yellow.svg":321,"./pattern-Top-aqua.svg":322,"./pattern-Top-blue.svg":323,"./pattern-Top-purple.svg":324,"./pattern-Top-red.svg":325,"./pattern-Top-yellow.svg":326,"./prevBlue.svg":327};function o(t){var n=M(t);return e(n)}function M(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=M,t.exports=o,o.id=298},299:function(t,n,e){"use strict";e(292)},300:function(t,n,e){var o=e(39),M=e(72),l=e(73),r=e(74),w=e(75),L=e(76),c=e(77),I=e(78),x=o((function(i){return i[1]})),d=M(l),m=M(r),y=M(w),j=M(L),D=M(c),N=M(I);x.push([t.i,'#app{\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  text-align:center;\n  font-family:"Radikal";\n  font-weight:400;\n  width:1080px;\n  height:5760px;\n  margin:auto;\n  position:relative;\n  background-color:#191e42;\n  overflow:hidden;\n  font-size:25px\n}\n.fade-out-enter-active,.fade-out-leave-active{\n  transition:all 1s ease\n}\n.fade-out-enter,.fade-out-leave-to{\n  opacity:0\n}\n.fadeY-enter-active{\n  transition:all 1s ease\n}\n.fadeY-leave-active{\n  transition:all .3s ease\n}\n.fadeY-enter,.fadeY-leave-to{\n  opacity:0;\n  transform:translateY(50px)\n}\n.interactive{\n  display:block;\n  height:1920px;\n  position:relative;\n  z-index:1\n}\n.interactive__inner{\n  height:100%;\n  padding:50px;\n  overflow-y:auto\n}\n.gradientOverlay{\n  background:#191e42;\n  background:linear-gradient(180deg,rgba(25,30,66,0),#191e42);\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  z-index:9\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+d+') format("woff2"),url('+m+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+y+') format("woff2"),url('+j+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+D+') format("woff2"),url('+N+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n.eyeofthestorm .year{\n  color:#eb6742\n}\n.iwasthere .year,.makinghistory .year{\n  color:#77cae7\n}\n.againstallodds .year,.followtheonegreen .year{\n  color:#6dd6c4\n}\n.followtheoneyellow .year{\n  color:#ebe64f\n}\n.duels .year{\n  color:#8282c9\n}\nheader{\n  height:1920px!important;\n  max-height:1920px!important;\n  position:relative;\n  z-index:1;\n  background-size:contain;\n  background-repeat:no-repeat\n}\n.intro{\n  -webkit-clip-path:polygon(0 0,100% 0,100% 68%,0 100%);\n          clip-path:polygon(0 0,100% 0,100% 68%,0 100%);\n  padding:10rem 0 18rem;\n  color:#191e42;\n  top:0\n}\n.intro,.sectionTitle{\n  height:auto;\n  width:100%;\n  position:absolute\n}\n.sectionTitle{\n  text-align:left;\n  color:#fff;\n  bottom:0;\n  padding:0 100px\n}',""]),t.exports=x},307:function(t,n,e){"use strict";e.r(n);e(35);var o={name:"heading",props:["titleA","titleB"],data:function(){return{tKey:0}},computed:{story:function(){return this.$store.getters[this.$nuxt.$route.name][this.$store.state.story]},headPattern:function(){return"main"!==this.$store.state.view?"iwasthere"===this.$nuxt.$route.name||"makinghistory"===this.$nuxt.$route.name?"pattern-Top-blue":"followtheonegreen"===this.$nuxt.$route.name||"againstallodds"===this.$nuxt.$route.name?"pattern-Top-aqua":"eyeofthestorm"===this.$nuxt.$route.name?"pattern-Top-red":"followtheoneyellow"===this.$nuxt.$route.name?"pattern-Top-yellow":"duels"===this.$nuxt.$route.name?"pattern-Top-purple":null:null},routeName:function(){return this.$nuxt.$route.name},featureColor:function(){return"iwasthere"===this.$nuxt.$route.name||"makinghistory"===this.$nuxt.$route.name?"#77cae7":"followtheonegreen"===this.$nuxt.$route.name||"againstallodds"===this.$nuxt.$route.name?"#6dd6c4":"eyeofthestorm"===this.$nuxt.$route.name?"#eb6742":"followtheoneyellow"===this.$nuxt.$route.name?"#ebe64f":"duels"===this.$nuxt.$route.name?"#8282c9":""}},watch:{"$store.state.story":function(){this.tKey++}}},M=(e(299),e(44)),component=Object(M.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("header",{class:"main"!==t.$store.state.view?"patternTop":null,style:"main"!==t.$store.state.view?{backgroundImage:"url("+e(298)("./"+t.headPattern+".svg")+")"}:null},[o("div",{staticClass:"intro",style:"backgroundColor:"+t.featureColor},[t.titleA?o("h1",{staticClass:"text-9xl"},[t._v(t._s(t.titleA))]):t._e(),t._v(" "),o("h1",{staticClass:"text-9xl font-bold"},[t._v(t._s(t.titleB))])]),t._v(" "),o("div",{staticClass:"sectionTitle"},[o("transition",{attrs:{name:"fadeY"}},[o("h1",{directives:[{name:"show",rawName:"v-show",value:null==t.$store.state.story&&"storySelect"==t.$store.state.view,expression:"$store.state.story == null && $store.state.view == 'storySelect'"}],staticClass:"text-9xl font-normal animateTitle"},[t._v("Select a story to explore")])]),t._v(" "),o("transition",{attrs:{name:"fadeY",mode:"out-in"}},[null!==t.$store.state.story?o("div",{key:t.tKey,staticClass:"font-normal animateTitle",class:t.routeName,domProps:{innerHTML:t._s(t.story.heading)}}):t._e()])],1)])}),[],!1,null,null,null);n.default=component.exports},311:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjcwMy41OTQiIHZpZXdCb3g9IjAgMCAxMDgwIDcwMy41OTQiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiM1ZWM0ZTE7fS5iLC5je2ZpbGw6IzE5MWU0Mjt9LmJ7Zm9udC1zaXplOjE1MXB4O2ZvbnQtZmFtaWx5OlJhZGlrYWwtQm9sZCwgUmFkaWthbDtmb250LXdlaWdodDo3MDA7fS5je2ZvbnQtc2l6ZToxMzJweDtmb250LWZhbWlseTpSYWRpa2FsLVJlZ3VsYXIsIFJhZGlrYWw7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0yMzEuNDUzSDEwODBWMjc2LjNMMCw0NzIuMTQxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMzEuNDUzKSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzIgLTczLjY1KSI+PHRleHQgY2xhc3M9ImIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMSA0NzIuNjUxKSI+PHRzcGFuIHg9IjAiIHk9IjAiPlRIRVJFPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5MyAzMjkuNjUxKSI+PHRzcGFuIHg9IjAiIHk9IjAiPkkgV0FTPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="},312:function(t,n){t.exports="data:image/svg+xml;base64,"},313:function(t,n){t.exports="data:image/svg+xml;base64,"},314:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS45MDMiIGhlaWdodD0iMzAuNTA1IiB2aWV3Qm94PSIwIDAgMzkuOTAzIDMwLjUwNSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ViZTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik00Ny4yNzMsMzMuNjQ5LDM0LjIsNDYuNzc1YTIuMSwyLjEsMCwwLDEtMi45NC0yLjk5M2w5LjUtOS41SDEwLjFhMi4xLDIuMSwwLDAsMSwwLTQuMkg0MC43NjNsLTkuNTU2LTkuNTU2QTIuMTE2LDIuMTE2LDAsMSwxLDM0LjIsMTcuNTNMNDcuMjczLDMwLjY1NkEyLjA5MiwyLjA5MiwwLDAsMSw0Ny4yNzMsMzMuNjQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTggLTE2LjkpIi8+PC9zdmc+"},315:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MS42MjUiIGhlaWdodD0iNDEuNjI1IiB2aWV3Qm94PSIwIDAgNDEuNjI1IDQxLjYyNSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzVlYzRlMTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zOS44LDIyLjE1YTEuOTQ0LDEuOTQ0LDAsMCwxLTEuMjY2LS41TDIwLjgsNC4zMjksMy4wNjksMjEuNjUyYTEuODQ0LDEuODQ0LDAsMCwxLTIuNTc4LS4wNDUsMS44NDQsMS44NDQsMCwwLDEsLjA0NS0yLjU3OGwxOS0xOC41NDVhMS44MzEsMS44MzEsMCwwLDEsMi41MzMsMGwxOSwxOC41NDVhMS44NDMsMS44NDMsMCwwLDEsLjA0NSwyLjU3OEExLjg4OCwxLjg4OCwwLDAsMSwzOS44LDIyLjE1Wm0tMy45OCwxNy42NDFWMjIuMWExLjgwOSwxLjgwOSwwLDEsMC0zLjYxOSwwVjM3Ljk4MUgyNi41NDRWMjguM2EyLjQxMywyLjQxMywwLDAsMC0yLjQtMi40SDE3LjQ1M2EyLjQxMywyLjQxMywwLDAsMC0yLjQsMi40djkuNjhIOS40VjIyLjFhMS44MDksMS44MDksMCwxLDAtMy42MTksMFYzOS43OTFBMS44MTUsMS44MTUsMCwwLDAsNy41OTIsNDEuNmg5LjI3M2ExLjgxNSwxLjgxNSwwLDAsMCwxLjgwOS0xLjgwOVYyOS41MjNoNC4zVjM5Ljc5MUExLjgxNSwxLjgxNSwwLDAsMCwyNC43OCw0MS42aDkuMjczQTEuNzc2LDEuNzc2LDAsMCwwLDM1LjgxNywzOS43OTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxMyAwLjAyNSkiLz48L3N2Zz4="},316:function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS44IDM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS44IDM1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzVFQzRFMTt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NSwxOS4yTDMwLDM0LjNjLTAuOSwwLjktMi41LDAuOS0zLjQsMGMtMC45LTAuOS0wLjktMi41LDAtMy40bDAsMEwzNy42LDIwSDIuNEMxLjEsMjAsMCwxOC45LDAsMTcuNQoJYzAtMS4zLDEuMS0yLjQsMi40LTIuNGgzNS4ybC0xMS0xMWMtMC45LTAuOS0xLTIuNCwwLTMuNGMwLDAsMCwwLDAsMGMwLjktMC45LDIuNC0xLDMuNCwwYzAsMCwwLDAsMCwwbDE1LDE1LjEKCUM0NiwxNi43LDQ2LDE4LjMsNDUsMTkuMkM0NS4xLDE5LjIsNDUsMTkuMiw0NSwxOS4yeiIvPgo8L3N2Zz4K"},317:function(t,n,e){t.exports=e.p+"img/pattern-Bottom-aqua.5f45a5a.svg"},318:function(t,n,e){t.exports=e.p+"img/pattern-Bottom-blue.c8a506f.svg"},319:function(t,n,e){t.exports=e.p+"img/pattern-Bottom-purple.3a396a5.svg"},320:function(t,n,e){t.exports=e.p+"img/pattern-Bottom-red.e0b0e1c.svg"},321:function(t,n,e){t.exports=e.p+"img/pattern-Bottom-yellow.a87657c.svg"},322:function(t,n,e){t.exports=e.p+"img/pattern-Top-aqua.7ea1dc9.svg"},323:function(t,n,e){t.exports=e.p+"img/pattern-Top-blue.94069d3.svg"},324:function(t,n,e){t.exports=e.p+"img/pattern-Top-purple.5fdb240.svg"},325:function(t,n,e){t.exports=e.p+"img/pattern-Top-red.08dcbec.svg"},326:function(t,n,e){t.exports=e.p+"img/pattern-Top-yellow.229d3c5.svg"},327:function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS44IDM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS44IDM1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzVFQzRFMTt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLjgsMTUuOGwxNS0xNS4xYzAuOS0wLjksMi41LTAuOSwzLjQsMHMwLjksMi41LDAsMy40bDAsMEw4LjIsMTVoMzUuMmMxLjMsMCwyLjQsMS4xLDIuNCwyLjUKCWMwLDEuMy0xLjEsMi40LTIuNCwyLjRIOC4xbDExLDExYzAuOSwwLjksMSwyLjQsMCwzLjRsMCwwYy0wLjksMC45LTIuNCwxLTMuNCwwbDAsMGwtMTUtMTUuMUMtMC4yLDE4LjMtMC4yLDE2LjcsMC44LDE1LjgKCUMwLjcsMTUuOCwwLjgsMTUuOCwwLjgsMTUuOHoiLz4KPC9zdmc+Cg=="}}]);