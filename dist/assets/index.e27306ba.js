import{r as S,o as n,c as y,a as i,b as s,d as h,e as w,n as I,f as x,F as p,t as g,g as b,h as F,i as $,w as v,j as L,k as P,l as D,m as V,p as M,q as H,s as E}from"./vendor.4da056cc.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=l(a);fetch(a.href,t)}};N();var _=(e,r)=>{const l=e.__vccOpts||e;for(const[c,a]of r)l[c]=a;return l};const B={};function T(e,r){const l=S("router-view");return n(),y(l)}var U=_(B,[["render",T]]);const R={props:["clusterArray","currentClusterIndex"],emits:["previousCluster","nextCluster"],data(){return{}},computed:{existsPreviousCluster(){return this.clusterArray[this.currentClusterIndex-1]!==void 0},existsNextCluster(){return this.clusterArray[this.currentClusterIndex+1]!==void 0}}},W={class:"flex flex-col items-center justify-center"},z=["src"],K={class:"flex flex-col w-5/6 h-full overflow-hidden justify-center items-center"},G=["src"],Z=["src"];function q(e,r,l,c,a,t){return n(),i("div",W,[t.existsPreviousCluster?(n(),i("div",{key:0,class:"flex flex-col w-4/6 h-full overflow-hidden justify-center items-center",onClick:r[0]||(r[0]=d=>e.$emit("previousCluster"))},[s("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:l.clusterArray[l.currentClusterIndex-1][0].blob,alt:"",srcset:""},null,8,z)])):h("",!0),s("div",K,[s("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:l.clusterArray[l.currentClusterIndex][0].blob,alt:"",srcset:""},null,8,G)]),t.existsNextCluster?(n(),i("div",{key:1,class:"flex flex-col w-4/6 h-full overflow-hidden justify-center items-center",onClick:r[1]||(r[1]=d=>e.$emit("nextCluster"))},[s("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:l.clusterArray[l.currentClusterIndex+1][0].blob,alt:"",srcset:""},null,8,Z)])):h("",!0)])}var J=_(R,[["render",q]]);const Q={props:["isAccepted"]},X={key:0,id:"Component_3_9",class:"cursor-pointer hover:opacity-90","data-name":"Component 3 \u2013 9",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17"},Y=s("g",{id:"Rectangle_95","data-name":"Rectangle 95",fill:"#fe8029",stroke:"#fe8029",strokeWidth:"1"},[s("rect",{width:"19",height:"17",stroke:"none"}),s("rect",{x:"0.5",y:"0.5",width:"18",height:"16",fill:"none"})],-1),ee=s("path",{id:"Path_30","data-name":"Path 30",d:"M105.618,1053.058l4.275,4.1,7.391-9.832",transform:"translate(-101.724 -1044.227)",fill:"none",stroke:"#181818",strokeLinejoin:"round",strokeWidth:"2"},null,-1),te=[Y,ee],se={key:1,id:"Component_4_33",class:"cursor-pointer hover:opacity-90","data-name":"Component 4 \u2013 33",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17"},re=s("rect",{id:"Rectangle_97","data-name":"Rectangle 97",width:"19",height:"17",fill:"#be171c"},null,-1),ae=s("g",{id:"Group_20","data-name":"Group 20",transform:"translate(3.915 2.959)"},[s("path",{id:"Path_36","data-name":"Path 36",d:"M-5800.456,4404.347l-11.182,11.01",transform:"translate(5811.638 -4404.347)",fill:"none",stroke:"#181818",strokeWidth:"2"}),s("path",{id:"Path_37","data-name":"Path 37",d:"M-5811.638,4404.347l10.93,11.083",transform:"translate(5811.638 -4404.347)",fill:"none",stroke:"#181818",strokeWidth:"2"})],-1),le=[re,ae];function ne(e,r,l,c,a,t){return n(),i("div",null,[l.isAccepted?(n(),i("svg",X,te)):h("",!0),l.isAccepted?h("",!0):(n(),i("svg",se,le))])}var ie=_(Q,[["render",ne]]);const ce=["src"],oe=w({props:{image:null,index:null,isImageSelected:{type:Boolean},isImageAccepted:{type:Boolean}},emits:["selectImage","handleAcceptedImageArrayChange"],setup(e,{emit:r}){return(l,c)=>{const a=ie;return n(),i(p,null,[s("img",{class:I([[e.isImageSelected?"border-light-800 border":"border border-dark-500"],"object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer transition-all duration-200"]),src:e.image,alt:"",srcset:"",onClick:c[0]||(c[0]=t=>l.$emit("selectImage")),onDblclick:c[1]||(c[1]=t=>l.$emit("handleAcceptedImageArrayChange"))},null,42,ce),x(a,{"is-accepted":e.isImageAccepted,onClick:c[2]||(c[2]=t=>l.$emit("handleAcceptedImageArrayChange"))},null,8,["is-accepted"])],64)}}}),de={emits:["expandedClusterChange"],data(){return{isExpanded:!1}},methods:{expandCluster(){this.isExpanded=!this.isExpanded,this.$emit("expandedClusterChange",this.isExpanded)}}},ue={key:0,class:"my-auto cursor-pointer hover:opacity-70",xmlns:"http://www.w3.org/2000/svg",width:"13.443",height:"22.644",viewBox:"0 0 13.443 22.644"},he=s("path",{id:"Path_49","data-name":"Path 49",d:"M-4098,3547.375l10.261,10.261,10.261-10.261",transform:"translate(-3546.315 -4076.417) rotate(-90)",fill:"none",stroke:"#fe8029",strokeWidth:"3"},null,-1),me=[he],ge={key:1,class:"my-auto cursor-pointer hover:opacity-70",xmlns:"http://www.w3.org/2000/svg",width:"22.644",height:"13.443",viewBox:"0 0 22.644 13.443"},pe=s("path",{id:"Path_45","data-name":"Path 45",d:"M-4098,3547.375l10.261,10.261,10.261-10.261",transform:"translate(4099.061 -3546.315)",fill:"none",stroke:"#fe8029",strokeWidth:"3"},null,-1),fe=[pe];function _e(e,r,l,c,a,t){return n(),i("div",{onClick:r[0]||(r[0]=(...d)=>t.expandCluster&&t.expandCluster(...d))},[a.isExpanded?(n(),i("svg",ue,me)):h("",!0),a.isExpanded?h("",!0):(n(),i("svg",ge,fe))])}var A=_(de,[["render",_e]]);const xe={components:{ExpandClusterBtn:A},props:{clusterArray:{type:Array,required:!0}},data(){return{totalNumSelectedImages:this.clusterArray.reduce((e,r)=>e+r.length,0),expandedClusters:[],acceptedImages:[],selectedImage:this.clusterArray[0][0].blob,selectedClusterIndex:0,isFullscreen:!1}},computed:{isClusterExpanded(){return e=>this.expandedClusters.includes(e)},isImageAccepted(){return e=>this.acceptedImages.includes(e)},isImageSelected(){return e=>this.selectedImage===e},selectedImageClusterIndex(){return this.clusterArray[this.selectedClusterIndex].indexOf(this.clusterArray[this.selectedClusterIndex].find(e=>e.blob===this.selectedImage))},selectedClustersRejectedImages(){return this.clusterArray[this.selectedClusterIndex].filter(e=>!this.acceptedImages.includes(e.blob))},selectedClustersAcceptedImages(){return this.clusterArray[this.selectedClusterIndex].filter(e=>this.acceptedImages.includes(e.blob))},clustersAcceptedImages(){return e=>this.clusterArray[e].filter(r=>this.acceptedImages.includes(r.blob)).length}},mounted(){this.clusterArray.forEach(e=>{this.acceptedImages.push(e[0].blob)}),window.addEventListener("keydown",this.handleKeypress)},unmounted(){window.removeEventListener("keydown",this.handleKeypress)},methods:{handleKeypress(e){switch(e.code){case"KeyF":this.isFullscreen=!this.isFullscreen;break}},handleExpandCluster(e){this.isClusterExpanded(e)?this.expandedClusters.splice(this.expandedClusters.indexOf(e),1):this.expandedClusters.push(e)},handleAcceptedImageArrayChange(e){if(this.acceptedImages.includes(e)){this.acceptedImages.splice(this.acceptedImages.indexOf(e),1);return}this.acceptedImages.push(e)},selectImage(e,r){this.selectedImage=e,this.selectedClusterIndex=r},changeSelectedClusterIndex(e){this.selectedClusterIndex+=e,this.selectedImage=this.clusterArray[this.selectedClusterIndex][0].blob}}},ve={key:0,id:"NetflixView"},be={class:"flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800"},ye={class:"flex flex-col p-3 pr-6 items-center w-max w-auto whitespace-nowrap"},Ie={class:"mb-10 w-full"},Ce={key:1,class:"fullscreen bg-dark-800 w-screen h-screen overflow-hidden"},we={class:"flex h-8/12"},Ae={class:"flex flex-col w-2/12"},ke=s("div",{className:"flex flex-row items-center p-3 items-start justify-start bg-dark-300"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#b9b9b9"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})]),s("h1",null," Clusters ")],-1),je={class:"VerticalClusters h-3/4 bg-dark-300 mb-1 flex flex-col items-center justify-center"},Oe={class:"MLInfo flex flex-col p-2 h-1/4 bg-dark-300 mb-1"},Se=F('<h1 class="flex mb-4"><svg class="icon mr-2" xmlns="http://www.w3.org/2000/svg" width="26.858" height="26.858" viewBox="0 0 26.858 26.858"><g id="Group_21" data-name="Group 21" transform="translate(-74.801 -74.811)"><path id="Path_38" data-name="Path 38" d="M168.271,155.12H156.923a1.8,1.8,0,0,0-1.8,1.8v11.349a1.8,1.8,0,0,0,1.8,1.8h11.349a1.8,1.8,0,0,0,1.8-1.8V156.922A1.8,1.8,0,0,0,168.271,155.12Zm.811,13.151a.815.815,0,0,1-.811.811H156.923a.815.815,0,0,1-.811-.811V156.922a.815.815,0,0,1,.811-.811h11.349a.815.815,0,0,1,.811.811Z" transform="translate(-74.366 -74.357)" fill="#b9b9b9"></path><path id="Path_41" data-name="Path 41" d="M101.146,86.615a.5.5,0,1,0,0-.992H98.168V82.375h2.977a.5.5,0,1,0,0-.992H98.127a3.472,3.472,0,0,0-3.039-3.039V75.326a.5.5,0,0,0-.992,0V78.3h-3.25V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H86.606V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H82.366V75.326a.5.5,0,0,0-.992,0v3.017a3.472,3.472,0,0,0-3.039,3.039h-3.02a.5.5,0,1,0,0,.992h2.977v3.25H75.316a.5.5,0,1,0,0,.992h2.977v3.249H75.316a.5.5,0,1,0,0,.992h2.977V94.1H75.316a.5.5,0,1,0-.038.991h3.057a3.471,3.471,0,0,0,3.039,3.039v3.018a.5.5,0,0,0,.992,0V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,0,0,.992,0V98.136A3.471,3.471,0,0,0,98.125,95.1h3.019a.5.5,0,1,0,.038-.991H98.168V90.856h2.977a.5.5,0,1,0,0-.992H98.168V86.615Zm-3.968,8.073a2.5,2.5,0,0,1-2.5,2.5h-12.9a2.5,2.5,0,0,1-2.5-2.5v-12.9a2.5,2.5,0,0,1,2.5-2.5h12.9a2.5,2.5,0,0,1,2.5,2.5Z" transform="translate(0 0)" fill="#b9b9b9"></path><text id="AI" transform="translate(88.281 90.811)" fill="#b9b9b9" font-size="9" font-family="Helvetica" letter-spacing="-0.02em"><tspan x="-4.162" y="0"> AI </tspan></text></g></svg> Auto Culling </h1>',1),Fe={class:"grid grid-rows-2 grid-cols-2 gap-2"},$e=s("p",{class:"text-left"}," Confidence ",-1),Le={class:"text-right"},Pe=s("p",{class:"text-left"}," Images accepted ",-1),De={class:"text-right"},Ve={class:"MainImage flex flex-col h-full w-10/12 items-center justify-center"},Me=["src"],He={class:"flex h-1/12 w-2/3 justify-center"},Ee={class:"w-full"},Ne={class:"w-full"},Be={class:"w-full"},Te={class:"w-full"},Ue={class:"flex w-screen h-4/12"},Re={class:"AcceptedPanel flex flex-col bg-dark-300 w-1/3 items-start justify-start mr-1"},We=s("h1",{class:"p-2"}," Accepted ",-1),ze={class:"flex w-full h-full overflow-x-auto snap snap-mandatory snap-x"},Ke={class:"RejectedPanel flex flex-col bg-dark-300 w-screen items-start justify-start"},Ge=s("h1",{class:"p-2"}," Rejected ",-1),Ze={class:"flex w-full h-full overflow-x-auto snap snap-mandatory snap-x"};function qe(e,r,l,c,a,t){const d=A,u=oe,j=J;return n(),i(p,null,[a.isFullscreen?h("",!0):(n(),i("div",ve,[s("nav",be," Accepted pictures: "+g(a.acceptedImages.length)+" of "+g(a.totalNumSelectedImages),1),s("section",null,[(n(!0),i(p,null,b(l.clusterArray,(o,f)=>(n(),i("div",{key:o[0].blob,class:"flex flex-row w-full h-full mb-1 bg-dark-500"},[s("div",ye,[s("h1",Ie,g(`${t.clustersAcceptedImages(f)} out of ${o.length}`),1),x(d,{onExpandedClusterChange:m=>t.handleExpandCluster(o[0].blob)},null,8,["onExpandedClusterChange"])]),s("div",{class:I([[t.isClusterExpanded(o[0].blob)?"columns-sm w-full":"grid grid-rows-1 auto-cols-auto grid-flow-col overflow-auto snap snap-mandatory snap-x"],"h-full items-center"])},[(n(!0),i(p,null,b(o,m=>(n(),i("div",{key:m.blob,class:"flex flex-col w-96 max-h-3/5 p-2 justify-center items-center snap-start"},[x(u,{image:m.blob,index:f,"is-image-selected":t.isImageSelected(m.blob),"is-image-accepted":t.isImageAccepted(m.blob),onSelectImage:O=>t.selectImage(m.blob,f),onHandleAcceptedImageArrayChange:O=>t.handleAcceptedImageArrayChange(m.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))],2)]))),128))])])),a.isFullscreen?(n(),i("section",Ce,[s("div",we,[s("div",Ae,[ke,s("div",je,[x(j,{"cluster-array":l.clusterArray,"current-cluster-index":a.selectedClusterIndex,onPreviousCluster:r[0]||(r[0]=o=>t.changeSelectedClusterIndex(-1)),onNextCluster:r[1]||(r[1]=o=>t.changeSelectedClusterIndex(1))},null,8,["cluster-array","current-cluster-index"])]),s("div",Oe,[Se,s("div",Fe,[$e,s("p",Le,g(Math.round(Math.random(0,1)*100))+"% ",1),Pe,s("p",De,g(`${t.selectedClustersAcceptedImages.length} out of ${l.clusterArray[a.selectedClusterIndex].length}`),1)])])]),s("div",Ve,[s("img",{class:"w-full h-11/12 object-contain p-2",src:l.clusterArray[a.selectedClusterIndex][t.selectedImageClusterIndex].blob,alt:""},null,8,Me),s("div",He,[s("p",Ee," ISO "+g(l.clusterArray[a.selectedClusterIndex][t.selectedImageClusterIndex].ISO),1),s("p",Ne," f/"+g(l.clusterArray[a.selectedClusterIndex][t.selectedImageClusterIndex].FNumber),1),s("p",Be,g(l.clusterArray[a.selectedClusterIndex][t.selectedImageClusterIndex].FocalLength)+"mm ",1),s("p",Te,g(l.clusterArray[a.selectedClusterIndex][t.selectedImageClusterIndex].name),1)])])]),s("div",Ue,[s("div",Re,[We,s("div",ze,[(n(!0),i(p,null,b(t.selectedClustersAcceptedImages,(o,f)=>(n(),i("div",{key:o,class:"flex flex-col w-80 h-full p-2 overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start"},[x(u,{image:o.blob,index:f,"is-image-selected":t.isImageSelected(o.blob),"is-image-accepted":t.isImageAccepted(o.blob),onSelectImage:m=>t.selectImage(o.blob,a.selectedClusterIndex),onHandleAcceptedImageArrayChange:m=>t.handleAcceptedImageArrayChange(o.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))])]),s("div",Ke,[Ge,s("div",Ze,[(n(!0),i(p,null,b(t.selectedClustersRejectedImages,(o,f)=>(n(),i("div",{key:o,class:"flex flex-col w-80 h-full p-2 overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start"},[x(u,{image:o.blob,index:f,"is-image-selected":t.isImageSelected(o.blob),"is-image-accepted":t.isImageAccepted(o.blob),onSelectImage:m=>t.selectImage(o.blob,a.selectedClusterIndex),onHandleAcceptedImageArrayChange:m=>t.handleAcceptedImageArrayChange(o.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))])])])])):h("",!0)],64)}var Je=_(xe,[["render",qe]]);const Qe=["onDragenter","onDragleave","onDrop"],Xe=s("span",null,"Drag and Drop File",-1),Ye=s("span",null,"OR",-1),et=L(" Upload Images "),k=w({emits:["loadImages"],setup(e,{emit:r}){const l=$(!1),c=()=>{l.value=!l.value};return(a,t)=>(n(),i("div",{class:I(["dropzone w-96 h-52 flex flex-col items-center justify-evenly border-2 border-red-700 border-dashed transition-all duration-300",{"bg-red-800 ":l.value}]),onDragenter:v(c,["prevent"]),onDragleave:v(c,["prevent"]),onDrop:v(c,["prevent"]),onDragover:t[1]||(t[1]=v(()=>{},["prevent"]))},[Xe,Ye,s("label",{class:I([[l.value?" bg-slate-900 text-red-700":"bg-red-700"],"rounded-lg p-3 cursor-pointer w-auto"])},[et,s("input",{id:"inputFile",class:"hidden",type:"file",accept:"image/*",multiple:"",autoFocus:"",onChange:t[0]||(t[0]=d=>r("loadImages",d))},null,32)],2)],42,Qe))}});const tt={components:{ImageUploadArea:k},emits:["loaded"],data(){return{imageFileArr:[],imageObjectArray:[],clusterArray:[],unusableImages:[],imageUploadStage:"uploadArea",prevClusterIndex:0,interval:2800,prevDateTimeOriginal:null}},methods:{compareSecondColumn(e,r){return e.time===r.time?0:e.time<r.time?-1:1},sortByDateTimeOriginal(e){e.sort(this.compareSecondColumn)},async getMetaData(e){const r=await P.parse(e),{DateTimeOriginal:l,FNumber:c,ISO:a,FocalLength:t,LensModel:d}=r;return{DateTimeOriginal:l,FNumber:c,ISO:a,FocalLength:t,LensModel:d}},async loadImages(e){this.imageUploadStage="processing",e.type==="drop"?this.imageFileArr.push(e.dataTransfer.files):this.imageFileArr.push(e.target.files);for(let r=0;r<this.imageFileArr[0].length;r++)try{const{DateTimeOriginal:l,FNumber:c,ISO:a,FocalLength:t,LensModel:d}=await this.getMetaData(this.imageFileArr[0][r]),u=l.valueOf();u===void 0?this.imageFileArr[0].splice(r,1):this.imageObjectArray.push({blob:URL.createObjectURL(this.imageFileArr[0][r]),time:u,name:this.imageFileArr[0][r].name,FNumber:c,ISO:a,FocalLength:t,LensModel:d})}catch(l){this.unusableImages.push({name:this.imageFileArr[0][r].name,blob:URL.createObjectURL(this.imageFileArr[0][r])}),console.warn(l)}this.sortByDateTimeOriginal(this.imageObjectArray),this.imageObjectArray.forEach((r,l)=>{this.prevDateTimeOriginal===null&&(this.prevDateTimeOriginal=r.time),Math.abs(r.time-this.prevDateTimeOriginal)>this.interval?(this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,l)),this.prevClusterIndex=l,this.prevDateTimeOriginal=r.time):this.prevDateTimeOriginal=r.time,Math.abs(r.time-this.prevDateTimeOriginal)>this.interval&&l===this.imageObjectArray.length-1&&(this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,l)),this.clusterArray.push(this.imageObjectArray.slice(l))),l===this.imageObjectArray.length-1&&this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,l+1))}),this.unusableImages.length?this.imageUploadStage="waitingForAccept":this.$emit("loaded",{array:this.clusterArray})}}},st={class:"w-screen h-screen flex my-auto mx-auto justify-center items-center overflow-hidden"},rt={key:1,class:"container flex flex-col justify-center items-center"},at=s("div",{class:"loader"},null,-1),lt=s("h3",{class:"block"},"Please wait, the robot is thinking \u{1F916}",-1),nt=[at,lt],it={key:2,class:"flex flex-col items-center justify-center w-screen h-screen overflow-y-auto overflow-x-hidden"},ct=s("h1",{class:"text-5xl mb-4"},"Some Images Couldn't Load!",-1),ot=s("h3",{class:"mb-10"}," (This is likely due to missing metadata. Make sure your photos contain the DateTimeOriginal tag) ",-1),dt={class:"h-auto w-max grid grid-cols-2 items-end justify-start"},ut=["src"],ht={class:"w-xs truncate"};function mt(e,r,l,c,a,t){const d=k;return n(),i("div",st,[a.imageUploadStage==="uploadArea"?(n(),y(d,{key:0,onDrop:v(t.loadImages,["prevent"]),onLoadImages:t.loadImages},null,8,["onDrop","onLoadImages"])):h("",!0),a.imageUploadStage==="processing"?(n(),i("div",rt,nt)):h("",!0),a.imageUploadStage==="waitingForAccept"?(n(),i("div",it,[ct,ot,s("button",{class:"w-auto h-auto bg-red-700 p-3 mb-20 rounded-lg",onClick:r[0]||(r[0]=v(u=>e.$emit("loaded",{array:a.clusterArray}),["prevent"]))}," Continue Anyways "),s("div",dt,[(n(!0),i(p,null,b(a.unusableImages,u=>(n(),i("div",{key:u.blob,class:"flex flex-col items-center mb-6"},[s("img",{class:"h-36 ascpect-ratio opacity-50",src:u.blob,alt:""},null,8,ut),s("p",ht,g(u.name),1)]))),128))])])):h("",!0)])}var gt=_(tt,[["render",mt]]);const pt={data(){return{pageShown:"uploadImages",loadedClusterArray:[[]]}},methods:{imagesLoaded(e){this.pageShown="cullingPage",this.loadedClusterArray=e.array}}};function ft(e,r,l,c,a,t){const d=gt,u=Je;return n(),i(p,null,[a.pageShown==="uploadImages"?(n(),y(d,{key:0,onLoaded:t.imagesLoaded},null,8,["onLoaded"])):h("",!0),a.pageShown==="cullingPage"?(n(),y(u,{key:1,"cluster-array":a.loadedClusterArray},null,8,["cluster-array"])):h("",!0)],64)}var _t=_(pt,[["render",ft]]);const xt=[{path:"/",name:"Home",component:_t,meta:{title:"Photo Culling Online | Home"}}],vt=D({history:V(),routes:xt});const bt=M(),C=H(U);C.use(E());C.use(vt);C.use(bt);C.mount("#app");
