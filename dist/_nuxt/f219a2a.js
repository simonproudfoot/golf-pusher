(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(t,n,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("20a1124a",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";e(293)},299:function(t,n,e){var o=e(39),r=e(72),l=e(73),f=e(74),d=e(75),h=e(76),c=e(77),m=e(78),y=o((function(i){return i[1]})),w=r(l),v=r(f),x=r(d),k=r(h),$=r(c),_=r(m);y.push([t.i,'#app{\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  text-align:center;\n  font-family:"Radikal";\n  font-weight:400;\n  width:1080px;\n  height:5760px;\n  margin:auto;\n  position:relative;\n  background-color:#191e42;\n  overflow:hidden;\n  font-size:25px\n}\n.fade-out-enter-active,.fade-out-leave-active{\n  transition:all 1s ease\n}\n.fade-out-enter,.fade-out-leave-to{\n  opacity:0\n}\n.fadeY-enter-active{\n  transition:all 1s ease\n}\n.fadeY-leave-active{\n  transition:all .3s ease\n}\n.fadeY-enter,.fadeY-leave-to{\n  opacity:0;\n  transform:translateY(50px)\n}\n.year{\n  font-size:4.5rem!important\n}\n.gradientOverlay{\n  background:#191e42;\n  background:linear-gradient(180deg,rgba(25,30,66,0),#191e42);\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  z-index:9\n}\n.jump{\n  position:fixed;\n  bottom:0;\n  right:0;\n  height:40px;\n  width:100px;\n  z-index:9999;\n  background:#191e42;\n  font-size:10px;\n  color:#fff\n}\n.videoMode{\n  position:relative;\n  height:5760px;\n  width:1080px;\n  display:block\n}\n.videoMode .video{\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  margin:auto;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  height:5760px;\n  width:1080px\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+w+') format("woff2"),url('+v+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+x+') format("woff2"),url('+k+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+$+') format("woff2"),url('+_+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n#pat{\n  margin-top:800px\n}\n.eyeofthestorm .year{\n  color:#eb6742\n}\n.iwasthere .year,.makinghistory .year{\n  color:#77cae7\n}\n.againstallodds .year,.followtheonegreen .year{\n  color:#6dd6c4\n}\n.followtheoneyellow .year{\n  color:#ebe64f\n}\n.duels .year{\n  color:#8282c9\n}\nheader{\n  height:1920px!important;\n  max-height:1920px!important;\n  position:relative;\n  z-index:1;\n  background-size:contain;\n  background-repeat:no-repeat\n}\n.intro{\n  -webkit-clip-path:polygon(0 0,100% 0,100% 68%,0 100%);\n          clip-path:polygon(0 0,100% 0,100% 68%,0 100%);\n  padding:10rem 0 18rem;\n  color:#191e42;\n  top:0\n}\n.intro,.sectionTitle{\n  height:auto;\n  width:100%;\n  position:absolute\n}\n.sectionTitle{\n  text-align:left;\n  color:#fff;\n  bottom:70px;\n  padding:0 100px\n}',""]),t.exports=y},306:function(t,n,e){"use strict";e.r(n);e(35);var o={name:"heading",props:["titleA","titleB","primaryColour"],data:function(){return{tKey:0}},methods:{headerLines:function(t){var n=document.querySelector("#headPath"),e=n.getTotalLength();"reverse"===t?(this.$gsap.to(n,{strokeDashoffset:e,duration:1}),this.$gsap.to(n,{strokeDashoffset:e,autoAlpha:0,duration:.5,delay:.8})):(this.$gsap.fromTo(n,{strokeDashoffset:e},{strokeDashoffset:0,duration:7,ease:"power2.inOut"}),this.$gsap.fromTo(n,{autoAlpha:0},{autoAlpha:1,duration:1,delay:.7,ease:"power2.inOut"}))}},mounted:function(){var t=document.querySelector("#headPath"),n=t.getTotalLength();this.$gsap.set(t,{strokeDasharray:n}),this.$gsap.from("header",{autoAlpha:0,y:-100,duration:.2}),this.$gsap.from("header h1",{autoAlpha:0,y:-100,stagger:.2,delay:.2})},computed:{story:function(){return this.$store.getters[this.$nuxt.$route.name][this.$store.state.story]},routeName:function(){return this.$nuxt.$route.name}},watch:{"$store.state.resetKey":function(){this.headerLines("reverse")},"$store.state.view":function(t){"main"!==t&&this.headerLines()},"$store.state.story":function(){this.tKey++}}},r=(e(298),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("svg",{directives:[{name:"show",rawName:"v-show",value:"main"!==t.$store.state.view,expression:"$store.state.view !== 'main'"}],staticStyle:{width:"1287px",opacity:"0.1"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1280.11 1859.72"}},[e("path",{staticClass:"st0",attrs:{id:"headPath","stroke-linecap":"butt",fill:"none","stroke-linejoin":"miter",stroke:t.primaryColour,"stroke-width":"50","stroke-miterlimit":"10",d:"M792,1056.8l-228.9,351.46L.54,1127.75,112,212.12,595.53,631.84m-339,623.57L950,718.93M715.84,542.46l564,413.41m-215.73,246.8L812.56,1486m-168.9-201.36,387.39,473.86,47.12-562.67L330.53,830.43m655-486.83L473.94.89,437.87,495M8.29,1064.12,1196.6,188"}})]),t._v(" "),e("div",{staticClass:"intro",style:"backgroundColor:"+t.primaryColour},[t.titleA?e("h1",{staticClass:"text-9xl"},[t._v(t._s(t.titleA))]):t._e(),t._v(" "),e("h1",{staticClass:"text-9xl font-bold"},[t._v(t._s(t.titleB))])]),t._v(" "),e("div",{staticClass:"sectionTitle"},[e("transition",{attrs:{name:"fadeY",mode:"out-in"}},[null==t.$store.state.story&&"storySelect"==t.$store.state.view?e("h1",{staticClass:"text-9xl font-light animateTitle"},[t._v("Select a story to explore...")]):t._e(),t._v(" "),null!==t.$store.state.story?e("div",{key:t.tKey,staticClass:"font-normal animateTitle",class:t.routeName,domProps:{innerHTML:t._s(t.story.heading)}}):t._e()])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);