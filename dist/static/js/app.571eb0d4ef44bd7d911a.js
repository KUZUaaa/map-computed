webpackJsonp([1],{FuK6:function(t,e){},Kk2W:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")({name:"App"},n,!1,function(t){i("Kk2W")},null,null).exports,r=i("/ocq"),s=i("Xxa5"),o=i.n(s),c=i("exGp"),p=i.n(c),u=i("Milw"),d=i.n(u),f={name:"map-view",data:function(){return{strData:"",allData:[],allDataStr:"",restData:[],pointsList:[{x:"116.3912757",y:"39.906217",v:""}],dialogVisible:!1,doingIndex:0,circleMarkers:[],circlePoints:"",x:116.433322,y:39.900255,r:5e4}},created:function(){},mounted:function(){this.initAMap(),this.handleFileChange()},unmounted:function(){this.map.destroy()},watch:{allData:{handler:function(t,e){this.pasterMap(),this.compare()},deep:!0},x:function(){this.drawCircle()},y:function(){this.drawCircle()},r:function(){this.drawCircle()}},methods:{initAMap:function(){var t=this;return p()(o.a.mark(function e(){var i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t,e.next=3,d.a.load({key:"7e1b85237d72d57b3ec1d649ffa3f648",version:"2.0",plugins:["AMap.Scale"]}).then(function(e){var a=new e.TileLayer.RoadNet,n=new e.TileLayer.Satellite;t.map=new e.Map("container",{viewMode:"3D",zoom:11,center:[116.397428,39.90923],layers:[n,a]});var l=new e.TileLayer.WMS({url:"https://ahocevar.com/geoserver/wms",blend:!1,tileSize:512,params:{LAYERS:"topp:states",VERSION:"1.3.0"}});t.map.add(l),t.map.on("click",function(t){i.x=t.lnglat.getLng(),i.y=t.lnglat.getLat(),i.drawCircle()})}).catch(function(t){console.log(t)});case 3:case"end":return e.stop()}},e,t)}))()},drawCircle:function(){this.map.remove(this.circlePoints);var t=new AMap.LngLat(this.x?this.x:116.397428,this.y?this.y:39.90923),e=this.r;this.circlePoints=new AMap.Circle({center:t,radius:e,borderWeight:0,strokeColor:"#FF33FF",strokeOpacity:1,strokeWeight:0,fillOpacity:.4,strokeStyle:"clip",strokeDasharray:[10,10],fillColor:"#1791fc",zIndex:50}),this.map.add(this.circlePoints),this.map.setFitView([this.circlePoints]),this.compare()},compare:function(){var t=this;this.restData=this.allData;var e=[this.x,this.y];this.pointsList.forEach(function(i){var a=[i.x,i.y];AMap.GeometryUtil.distance(e,a)<t.r&&(t.restData=t.restData.filter(function(t){return!i.v.split(",").some(function(e){return e==t})}),console.log(t.restData))})},changeAllDataStr:function(){this.allData=this.allDataStr.split(",").filter(function(t){return t})},handleFileChange:function(){var t=this;document.getElementById("file-input").addEventListener("change",function(){var e=new FileReader;e.onload=function(){t.strData=e.result.replaceAll("\r\n",""),t.strData=t.strData.replaceAll(" ","&"),console.log(t.strData);var i=t.strData.split("/");t.allData=i[1].split("&"),t.allData=t.allData.filter(function(t){return t}),t.allDataStr=t.allData.join(","),t.restData=t.allData,t.pointsList=i[0].split(",").map(function(t){var e=t.split(":"),i=e[0].split("&");return{x:i[0],y:i[1],v:e[1]}}),t.pointsList.forEach(function(t){t.v=t.v?t.v.replaceAll("&",","):"-"})},e.readAsText(this.files[0])})},handleAdd:function(){this.pointsList.push({x:"116.3912757",y:"39.906217",v:""}),console.log(this.pointsList),this.pasterMap(),this.drawCircle(),this.compare()},handleEdit:function(t,e){this.dialogVisible=!0,this.doingIndex=e,this.drawCircle(),this.compare()},handleDel:function(t,e){this.pointsList.splice(e,1),this.pasterMap(),this.drawCircle(),this.compare()},pasterMap:function(){var t=this;this.circleMarkers.forEach(function(e){t.map.remove(e)}),this.circleMarker=[];var e=this.pointsList.map(function(t){return new AMap.LngLat(t.x,t.y)});this.circleMarkers=[],e.forEach(function(e){t.circleMarkers.push(new AMap.CircleMarker({center:e,radius:5,strokeColor:"white",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5,zIndex:10,cursor:"pointer"}))}),this.circleMarkers.forEach(function(e){t.map.add(e)}),this.compare()},exportData:function(){var t=this;console.log(this.pointsList);var e="";this.pointsList.forEach(function(i,a){a+1<t.pointsList.length?e+=i.x+" "+i.y+":"+i.v.replaceAll(","," ")+",\n":e+=i.x+" "+i.y+":"+i.v.replaceAll(","," ")+"\n"}),e+="/\n",e+=this.allData.join(" "),e+="\n/剩余频率\n",e+=this.restData.join(" ");var i=new Blob([e],{type:"text/plain;charset=utf-8"});saveAs(i,"点位统计.txt")}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"left"},[i("div",{attrs:{id:"container"}}),t._v(" "),i("div",[i("el-form",{attrs:{inline:""}},[i("el-form-item",{attrs:{label:"当前定位经度"}},[i("el-input",{model:{value:t.x,callback:function(e){t.x=e},expression:"x"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"当前定位纬度"}},[i("el-input",{model:{value:t.y,callback:function(e){t.y=e},expression:"y"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"当前定位半径"}},[i("el-input",{model:{value:t.r,callback:function(e){t.r=e},expression:"r"}})],1)],1),t._v(" "),i("span",[t._v("剩余可用频率：")]),t._v(" "),i("span",[t._v(t._s(t.restData.length?t.restData.join(","):"-"))])],1)]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"topBtn"},[i("input",{staticStyle:{display:"block","margin-bottom":"10px"},attrs:{id:"file-input",type:"file"}}),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加点位")]),t._v(" "),i("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini"},on:{click:function(e){return t.exportData()}}},[t._v("导出")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"60px"},attrs:{data:t.pointsList}},[i("el-table-column",{attrs:{type:"index"}}),t._v(" "),i("el-table-column",{attrs:{prop:"x",label:"经度",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"y",label:"维度",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"v",label:"频率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.v?e.row.v:"-")+"\n        ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.row,e.$index)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleDel(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-form",[i("el-form-item",{attrs:{label:"全部频率"}},[i("el-input",{attrs:{type:"textarea",rows:4},on:{change:t.changeAllDataStr},model:{value:t.allDataStr,callback:function(e){t.allDataStr=e},expression:"allDataStr"}})],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改点位",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.pasterMap}},[i("el-form",[i("el-form-item",{attrs:{label:"经度"}},[i("el-input",{model:{value:t.pointsList[t.doingIndex].x,callback:function(e){t.$set(t.pointsList[t.doingIndex],"x",e)},expression:"pointsList[doingIndex].x"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"纬度"}},[i("el-input",{model:{value:t.pointsList[t.doingIndex].y,callback:function(e){t.$set(t.pointsList[t.doingIndex],"y",e)},expression:"pointsList[doingIndex].y"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"频率"}},[i("el-input",{model:{value:t.pointsList[t.doingIndex].v,callback:function(e){t.$set(t.pointsList[t.doingIndex],"v",e)},expression:"pointsList[doingIndex].v"}})],1)],1)],1)],1)},staticRenderFns:[]};var v=i("VU/8")(f,h,!1,function(t){i("FuK6")},"data-v-3fb6daa4",null).exports;a.default.use(r.a);var m=new r.a({routes:[{path:"/",name:"main",component:v}]}),x=i("zL8q"),g=i.n(x);i("tvR6"),i("t4zo");a.default.use(g.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:m,components:{App:l},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.571eb0d4ef44bd7d911a.js.map