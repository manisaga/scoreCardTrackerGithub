(this.webpackJsonpmygamepointsextension=this.webpackJsonpmygamepointsextension||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),l=(n(26),n(20)),i=n(11),o=n(6),b=(n(27),n(19)),j=n(38),d=n(39),u=n(1);var m=function(e){var t=0,n="",r=JSON.parse(window.localStorage.getItem("pastTime")),s=JSON.parse(window.localStorage.getItem("currentTimeUser"));null===r||void 0===r?r={}:n=null!==r[e.name]&&void 0!==r[e.name]?r[e.name]:"",null===s||void 0===s?s={}:t=null!==s[e.name]&&void 0!==s[e.name]?s[e.name]:0;var l=Object(a.useState)(!1),i=Object(o.a)(l,2),b=i[0],m=i[1],O=Object(a.useState)(!0),h=Object(o.a)(O,2),v=h[0],f=h[1],p=Object(a.useState)(t),x=Object(o.a)(p,2),g=x[0],S=x[1],y=Object(a.useState)(n),N=Object(o.a)(y,2),k=N[0],C=N[1];return c.a.useEffect((function(){var t=null;return b&&!1===v?t=setInterval((function(){S((function(e){return e+1e3})),s[e.name]=g+1e3,window.localStorage.setItem("currentTimeUser",JSON.stringify(s))}),1e3):clearInterval(t),function(){clearInterval(t)}}),[b,v,g,e.name,s]),Object(u.jsxs)(j.a,{show:e.onShow,onHide:e.onCallback,backdrop:"static",keyboard:!1,style:{opacity:1},animation:!1,children:[Object(u.jsx)(j.a.Header,{closeButton:!0}),Object(u.jsxs)(j.a.Body,{children:[Object(u.jsx)("div",{className:"timer",children:Object(u.jsx)("h1",{children:Object(u.jsxs)("strong",{children:[Object(u.jsxs)("span",{className:"digits",children:[("0"+Math.floor(g/6e4%60)).slice(-2),":"]}),Object(u.jsx)("span",{className:"digits",children:("0"+Math.floor(g/1e3%60)).slice(-2)})]})})}),b?Object(u.jsxs)("div",{className:"btn-grp",children:[Object(u.jsx)("div",{className:"btn btn-primary btn-one",onClick:function(){m(!1),S(0),s[e.name]=0,window.localStorage.setItem("currentTimeUser",JSON.stringify(s))},children:"Reset"}),Object(u.jsx)("div",{className:"btn btn-primary btn-two",onClick:function(){f(!v)},children:v?"Resume":"Pause"})]}):Object(u.jsx)("div",{className:"btn btn-primary btn-start",onClick:function(){m(!0),f(!1)},children:"Start"})]}),Object(u.jsx)(j.a.Footer,{children:Object(u.jsxs)("span",{children:[""!==k&&Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:k})}),Object(u.jsx)(d.a,{variant:"secondary",className:"btn-danger btn-time",onClick:function(){var t=("0"+Math.floor(g/6e4%60)).slice(-2)+":"+("0"+Math.floor(g/1e3%60)).slice(-2);C(t),r[e.name]=t,window.localStorage.setItem("pastTime",JSON.stringify(r))},children:"Save Time"}),Object(u.jsx)(d.a,{variant:"secondary",onClick:e.onCallback,className:"btn-danger",children:"Close"})]})})]})};var O=function(e){var t="https://picsum.photos/id/"+(200+e.index)+"/100",n=Object(a.useState)(e.score),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),j=i[0],d=i[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{id:"playerInfo",children:[Object(u.jsxs)("h2",{id:"playerName",children:[Object(u.jsx)("img",{src:t,alt:"random profile",className:"profileImg"})," ",e.name," ",Object(u.jsx)("div",{className:"iconClock",onClick:function(){d(!0)},children:Object(u.jsx)(b.a,{icon:["far","clock"],size:"lg"})})]}),Object(u.jsx)("h2",{id:"playerPoints",children:r}),Object(u.jsxs)("div",{className:"clickButtons",children:[Object(u.jsx)("button",{onClick:function(){var t=Number(prompt("Enter the value by which to increment?"));s(r+(t=0===t?1:t)),e.onCallback(e.name,r+t)},className:"btn btn-primary btn-points",children:"Increment"}),Object(u.jsx)("button",{onClick:function(){var t=Number(prompt("Enter the value by which to decrement?"));s(r-(t=0===t?1:t)),e.onCallback(e.name,r-t)},className:"btn btn-primary btn-points",children:"Decrement"}),Object(u.jsx)("button",{onClick:function(){s(0),e.onCallback(e.name,0)},className:"btn btn-primary btn-points",children:"Reset"}),Object(u.jsx)("div",{className:"iconTrash",onClick:function(){return e.onDelete(e.name)},children:Object(u.jsx)(b.a,{icon:["far","trash-alt"],size:"lg"})})]})]}),Object(u.jsx)(m,{onShow:j,onCallback:function(){d(!1)},name:e.name})]})};var h=function(e){return Object(u.jsx)(u.Fragment,{children:e.scoreBoard.map((function(e){return Object(u.jsxs)("div",{class:"scoreCard",children:[Object(u.jsx)("h2",{id:"playerName",children:e.name}),Object(u.jsx)("h2",{id:"playerPoints",children:e.score})]})}))})};var v=function(e){return Object(u.jsx)("div",{children:e.currentPlayerList.map((function(t,n){return void 0!==t&&Object(u.jsx)(O,{index:n,name:t.name,score:Number(t.score),onCallback:e.onSearchCallback,onDelete:e.onSearchDelete})}))})};var f=function(){var e=JSON.parse(window.localStorage.getItem("gameScores"));if(null===e)e=[];else{for(var t=[],n=0;n<e.length;n++)void 0!==e[n]&&null!==e[n]&&t.push(e[n]);e=t}var c=Object(a.useState)(""),r=Object(o.a)(c,2),s=r[0],b=r[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),m=d[0],f=d[1],p=Object(a.useState)(e),x=Object(o.a)(p,2),g=x[0],S=x[1],y=Object(a.useState)(!1),N=Object(o.a)(y,2),k=N[0],C=N[1],w=Object(a.useState)([]),I=Object(o.a)(w,2),J=I[0],P=I[1],B=Object(a.useState)([]),T=Object(o.a)(B,2),D=T[0],E=T[1],M=Object(a.useState)(!1),R=Object(o.a)(M,2),F=R[0],U=R[1];function z(e,t){for(var n=Object(i.a)(g),a=0;a<n.length;a++){var c;if((null===(c=n[a])||void 0===c?void 0:c.name)===e){n[a]=Object(l.a)(Object(l.a)({},n[a]),{},{score:t});break}}S(n),window.localStorage.setItem("gameScores",JSON.stringify(n))}function A(e){for(var t=Object(i.a)(g),n=Object(i.a)(D),a=0;a<n.length;a++){var c;if((null===(c=n[a])||void 0===c?void 0:c.name)===e){delete n[a];break}}for(var r=0;r<t.length;r++){var s;if((null===(s=t[r])||void 0===s?void 0:s.name)===e){delete t[r];break}}E(n),S(t),window.localStorage.setItem("gameScores",JSON.stringify(t))}function H(){for(var e=0,t=0;t<g.length;t++)void 0!==g[t]&&null!==g[t]||e++;return e===g.length}return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"addPlayer",children:[Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:Object(u.jsx)("h3",{children:"Player: "})})}),Object(u.jsx)("input",{type:"text",className:"player-name",name:"playerName",value:s,placeholder:"Player Name",onChange:function(e){b(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){var e=Object(i.a)(g);e.push({name:s,score:0}),S([].concat(Object(i.a)(g),[{name:s,score:0}])),window.localStorage.setItem("gameScores",JSON.stringify(e)),b("")},className:"btn btn-primary btn-add-player",children:"Add Player"})]}),!H()&&Object(u.jsxs)("div",{className:"addPlayer",children:[Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:Object(u.jsx)("h3",{children:"Search: "})})}),Object(u.jsx)("input",{type:"text",className:"player-name",value:m,name:"playerQueried",onChange:function(e){f(e.target.value)}}),Object(u.jsx)("button",{className:"btn btn-primary btn-search-player",onClick:function(){if(!1===F){for(var e=[],t=0;t<g.length;t++){var n;g[t]&&(null===(n=g[t])||void 0===n?void 0:n.name.substring(0,m.length))===m&&e.push(g[t])}E(e),U(!0)}else f(""),E([]),U(!1)},children:F?"Cancel Search":"Search Player"})]}),!k&&!F&&g.map((function(e,t){return void 0!==e&&null!==e&&Object(u.jsx)(O,{index:t,name:null===e||void 0===e?void 0:e.name,score:null===e||void 0===e?void 0:e.score,onCallback:z,onDelete:A})})),!k&&!F&&!H()&&Object(u.jsx)("button",{className:"btn btn-success createBoard",onClick:function(){C(!0);for(var e=[],t=0;t<g.length;t++)null!==g[t]&&void 0!==g[t]&&e.push(g[t]);e.sort((function(e,t){return(null===e||void 0===e?void 0:e.score)>(null===t||void 0===t?void 0:t.score)?1:-1})),e.reverse(),alert("Congratulations!! ".concat(e[0].name)),P(e)},children:"Create Score Sheet"}),k&&!F&&Object(u.jsx)(h,{scoreBoard:J}),k&&!F&&Object(u.jsx)("button",{class:"btn btn-info createBoard",onClick:function(){C(!1),S([]),window.localStorage.setItem("gameScores",JSON.stringify([])),U(!1)},children:"Reset Scoreboard"}),F&&Object(u.jsx)(v,{currentPlayerList:D,onSearchCallback:z,onSearchDelete:A})]})},p=n(10),x=n(16);p.b.add(x.c,x.a,x.b),s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2b6020a4.chunk.js.map