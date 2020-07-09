(this.webpackJsonppfv=this.webpackJsonppfv||[]).push([[0],[,,,,,,,,function(e,t){function a(e,t,a){return!(e<0||e>=a.length||t<0||t>=a[0].length)&&!a[e][t].isVisited}e.exports={bfs:function(e,t,n){var i=[0,-1,0,1],s=[1,0,-1,0],o=[],r=[];for(r.push(t);r.length>0;){var l=r.shift();if("end"===l.type)return o;if("wall"!==e[l.row][l.col].type){o.push(l);for(var c=0;c<4;c++)if(a(l.row+i[c],l.col+s[c],e)){var u=e[l.row+i[c]][l.col+s[c]];u.previousNode=l,u.isVisited=!0,r.push(u)}}}return o}}},function(e,t){function a(e,t,a){return!(e<0||e>=a.length||t<0||t>=a[0].length)&&(!a[e][t].isVisited&&"wall"!==a[e][t].type)}e.exports={dfs:function(e,t,n){var i=[-1,0,1,0],s=[0,1,0,-1],o=[],r=null,l=[];for(l.push(t);l.length>0;){var c=l.pop();if(c.previousNode=r,c.isVisited=!0,r=c,o.push(r),"end"===r.type)return o;for(var u=0;u<4;u++)if(a(r.row+s[u],r.col+i[u],e)){var h=e[r.row+s[u]][r.col+i[u]];l.push(h)}}return o}}},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),o=a.n(s),r=(a(15),a(16),a(1)),l=a(2),c=a(3),u=a(5),h=a(4),d=(a(17),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.type,n=e.onMouseDown,s=e.onMouseEnter,o=e.onMouseUp,r=e.row,l="";return"end"===a?l="node-finish":"start"===a?l="node-start":"empty"===a?l="node-empty":"wall"===a?l="node-wall":"visited"===a?l="node-visited":"shortest"===a&&(l="node-shortest"),i.a.createElement("div",{id:"node-".concat(r,"-").concat(t),className:"node ".concat(l),onMouseDown:function(){return n(r,t)},onMouseEnter:function(){return s(r,t)},onMouseUp:function(){return o()}}," ")}}]),a}(i.a.Component)),v=(a(18),a(8)),f=a(9),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={grid:[],mouseIsPressed:!1,algorithm:"",visualizeButton:"Visualize",visualizing:!1,speed:5,boardClear:!0},n.myRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=function(){for(var e=[],t=0;t<15;t++){for(var a=[],n=0;n<45;n++)a.push(m(t,n));e.push(a)}return e}();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){if(!this.state.visualizing){var a=g(this.state.grid,e,t);this.setState({grid:a,mouseIsPressed:!0})}}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed&&!this.state.visualizing){var a=g(this.state.grid,e,t);this.setState({grid:a})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"visualizeBFS",value:function(){var e=this.state.grid,t=e[7][10],a=e[7][35],n=Object(v.bfs)(e,t,a),i=this.shortestPath(t,a);this.animateVisitedPath(n,i)}},{key:"visualizeDFS",value:function(){var e=this.state.grid,t=e[7][10],a=e[7][35],n=Object(f.dfs)(e,t,a),i=this.shortestPath(t,a);this.animateVisitedPath(n,i)}},{key:"visualizeShortestPath",value:function(e){var t=this;0===e.length&&(this.updateState(),this.setState(this.setState({visualizing:!1})));for(var a=function(a){setTimeout((function(){var n=e[a];t.checkStartEnd(n.row,n.col)&&(document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest")}),t.state.speed*a),a===e.length-1&&(t.updateState(),t.setState(t.setState({visualizing:!1})))},n=0;n<e.length;n++)a(n)}},{key:"animateVisitedPath",value:function(e,t){for(var a=this,n=function(n){if(setTimeout((function(){var t=e[n];a.checkStartEnd(t.row,t.col)&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),a.state.speed*n),n===e.length-1)return setTimeout((function(){a.visualizeShortestPath(t)}),a.state.speed*n),{v:void 0}},i=0;i<e.length;i++){var s=n(i);if("object"===typeof s)return s.v}}},{key:"clearBoard",value:function(e){this.state.visualizing||(this.clearObject(e,"wall"),this.clearObject(e,"visited"),this.clearObject(e,"shortest"))}},{key:"clearObject",value:function(e,t){for(var a=e.slice(),n=0;n<this.state.grid.length;n++)for(var i=0;i<this.state.grid[0].length;i++){var s=a[n][i],o=void 0;o="start"===s.type?"start":"end"===s.type?"end":s.type===t?"empty":s.type;var l=Object(r.a)(Object(r.a)({},s),{},{type:o,isVisited:!1,previousNode:null});a[n][i]=l}this.setState({grid:a})}},{key:"shortestPath",value:function(e,t){var a=[],n=t;if(null===t.previousNode)return a;for(;e.row!==n.row||e.col!==n.col;)a.push(n),n=n.previousNode;return a.push(e),a}},{key:"checkStartEnd",value:function(e,t){return(7!==e||10!==t)&&(7!==e||35!==t)}},{key:"updateState",value:function(){for(var e=this.state.grid,t=0;t<this.state.grid.length;t++)for(var a=0;a<this.state.grid[0].length;a++){var n=e[t][a];if("node node-visited"===document.getElementById("node-".concat(n.row,"-").concat(n.col)).className){var i=Object(r.a)(Object(r.a)({},n),{},{type:"visited"});e[t][a]=i}else if("node node-shortest"===document.getElementById("node-".concat(n.row,"-").concat(n.col)).className){var s=Object(r.a)(Object(r.a)({},n),{},{type:"shortest"});e[t][a]=s}}e[7][10].type="start",e[7][35].type="end",this.setState({grid:e})}},{key:"onChangeAlgorithm",value:function(e){this.setState({algorithm:e.target.value}),this.setState({visualizeButton:"Visualize "+e.target.value})}},{key:"onChangeSpeed",value:function(e){this.setState({speed:parseInt(e.target.value)})}},{key:"visualize",value:function(){if(!this.state.visualizing){var e=this.state.algorithm;"BFS"===e?(this.setState({visualizing:!0}),this.checkBlocks(),this.setState({boardClear:!1}),this.visualizeBFS()):"DFS"===e?(this.checkBlocks(),this.setState({visualizing:!0}),this.visualizeDFS()):this.setState({visualizeButton:"Pick an algorithm"})}}},{key:"checkBlocks",value:function(){this.state.boardClear||(this.clearObject(this.state.grid,"shortest"),this.clearObject(this.state.grid,"visited"),this.setState({boardClear:!0})),this.setState({boardClear:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("p",null,"PATHFINDING VISUALIZER"),i.a.createElement("select",{className:"algorithm",onChange:this.onChangeAlgorithm.bind(this),defaultValue:""},i.a.createElement("option",{value:"",disabled:!0,style:{display:"none"}},"Algorithm"),i.a.createElement("option",{value:"BFS"},"Breadth First Search"),i.a.createElement("option",{value:"DFS"},"Depth First Search")),i.a.createElement("button",{onClick:function(){return e.clearBoard(a)}},"Clear Board"),i.a.createElement("button",{onClick:function(){return e.clearObject(a,"wall")}},"Clear Walls"),i.a.createElement("button",{onClick:function(){e.clearObject(a,"visited"),e.clearObject(a,"shortest")}},"Clear Path"),i.a.createElement("button",{className:"Visualize",onClick:function(){return e.visualize()}},this.state.visualizeButton),i.a.createElement("select",{id:"speed",onChange:this.onChangeSpeed.bind(this),defaultValue:"5"},i.a.createElement("option",{value:"2"},"Speed: Really Fast"),i.a.createElement("option",{value:"5"},"Speed: Fast"),i.a.createElement("option",{value:"10"},"Speed: Medium"),i.a.createElement("option",{value:"20"},"Speed: Slow")))),i.a.createElement("div",{className:"grid",ref:this.myRef},a.map((function(t,a){return i.a.createElement("div",{key:a},t.map((function(t,a){var s=t.row,o=t.col,r=t.type;return i.a.createElement(d,{key:a,col:o,type:r,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp()},row:s}," ")})))}))))}}]),a}(n.Component);function m(e,t){return{col:t,row:e,type:7===e&&10===t?"start":7===e&&35===t?"end":"empty",distance:1/0,isVisited:!1,isWall:!1,previousNode:null}}var g=function(e,t,a){var n,i=e.slice(),s=i[t][a];n="start"===s.type?"start":"end"===s.type?"end":"wall"===s.type?"empty":"wall";var o=Object(r.a)(Object(r.a)({},s),{},{type:n});return i[t][a]=o,i};var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a67d5771.chunk.js.map