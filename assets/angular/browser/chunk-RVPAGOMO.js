import{E as L,Ia as F,Ja as B,Na as W,P as o,Q as D,Qa as Y,Ra as X,Sa as J,Ta as K,U as C,V as U,W as d,Y as y,ba as l,ca as g,ea as j,fa as q,ga as k,ha as w,ia as p,n as R,r as N,s as z,sa as m,t as O,u as H,ua as c,va as b,w as $,wa as v,x as f,xa as G,y as x}from"./chunk-5EWIWO3F.js";function ee(n,i){if(n&1){let e=k();l(0,"a",12),w("keyup.enter",function(){f(e),p(3);let a=m(1);return x(a.previous())})("click",function(){f(e),p(3);let a=m(1);return x(a.previous())}),c(1),l(2,"span",13),c(3),g()()}if(n&2){let e=p(3);o(),v(" ",e.previousLabel," "),o(2),b(e.screenReaderPageLabel)}}function te(n,i){if(n&1&&(l(0,"span",14),c(1),l(2,"span",13),c(3),g()()),n&2){let e=p(3);o(),v(" ",e.previousLabel," "),o(2),b(e.screenReaderPageLabel)}}function ne(n,i){if(n&1&&(l(0,"li",9),C(1,ee,4,2,"a",10)(2,te,4,2,"span",11),g()),n&2){p(2);let e=m(1);y("disabled",e.isFirstPage()),o(),d("ngIf",1<e.getCurrent()),o(),d("ngIf",e.isFirstPage())}}function ie(n,i){if(n&1){let e=k();l(0,"a",12),w("keyup.enter",function(){f(e);let a=p().$implicit;p(2);let r=m(1);return x(r.setCurrent(a.value))})("click",function(){f(e);let a=p().$implicit;p(2);let r=m(1);return x(r.setCurrent(a.value))}),l(1,"span",13),c(2),g(),l(3,"span"),c(4),F(5,"number"),g()()}if(n&2){let e=p().$implicit,t=p(2);o(2),v("",t.screenReaderPageLabel," "),o(2),b(e.label==="..."?e.label:B(5,2,e.label,""))}}function ae(n,i){if(n&1&&(j(0),l(1,"span",16)(2,"span",13),c(3),g(),l(4,"span"),c(5),F(6,"number"),g()(),q()),n&2){let e=p().$implicit,t=p(2);o(3),v("",t.screenReaderCurrentLabel," "),o(2),b(e.label==="..."?e.label:B(6,2,e.label,""))}}function re(n,i){if(n&1&&(l(0,"li"),C(1,ie,6,5,"a",10)(2,ae,7,5,"ng-container",15),g()),n&2){let e=i.$implicit;p(2);let t=m(1);y("current",t.getCurrent()===e.value)("ellipsis",e.label==="..."),o(),d("ngIf",t.getCurrent()!==e.value),o(),d("ngIf",t.getCurrent()===e.value)}}function se(n,i){if(n&1){let e=k();l(0,"a",12),w("keyup.enter",function(){f(e),p(3);let a=m(1);return x(a.next())})("click",function(){f(e),p(3);let a=m(1);return x(a.next())}),c(1),l(2,"span",13),c(3),g()()}if(n&2){let e=p(3);o(),v(" ",e.nextLabel," "),o(2),b(e.screenReaderPageLabel)}}function oe(n,i){if(n&1&&(l(0,"span",14),c(1),l(2,"span",13),c(3),g()()),n&2){let e=p(3);o(),v(" ",e.nextLabel," "),o(2),b(e.screenReaderPageLabel)}}function le(n,i){if(n&1&&(l(0,"li",17),C(1,se,4,2,"a",10)(2,oe,4,2,"span",11),g()),n&2){p(2);let e=m(1);y("disabled",e.isLastPage()),o(),d("ngIf",!e.isLastPage()),o(),d("ngIf",e.isLastPage())}}function pe(n,i){if(n&1&&(l(0,"ul",4),C(1,ne,3,4,"li",5),l(2,"li",6),c(3),g(),C(4,re,3,6,"li",7)(5,le,3,4,"li",8),g()),n&2){let e=p(),t=m(1);y("responsive",e.responsive),o(),d("ngIf",e.directionLinks),o(2),G(" ",t.getCurrent()," / ",t.getLastPage()," "),o(),d("ngForOf",t.pages)("ngForTrackBy",e.trackByIndex),o(),d("ngIf",e.directionLinks)}}var S=class{constructor(){this.change=new L,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(i){return i.id==null&&(i.id=this.DEFAULT_ID),this.instances[i.id]?this.updateInstance(i):(this.instances[i.id]=i,!0)}updateInstance(i){let e=!1;for(let t in this.instances[i.id])i[t]!==this.instances[i.id][t]&&(this.instances[i.id][t]=i[t],e=!0);return e}getCurrentPage(i){return this.instances[i]?this.instances[i].currentPage:1}setCurrentPage(i,e){if(this.instances[i]){let t=this.instances[i],a=Math.ceil(t.totalItems/t.itemsPerPage);e<=a&&1<=e&&(this.instances[i].currentPage=e,this.change.emit(i))}}setTotalItems(i,e){this.instances[i]&&0<=e&&(this.instances[i].totalItems=e,this.change.emit(i))}setItemsPerPage(i,e){this.instances[i]&&(this.instances[i].itemsPerPage=e,this.change.emit(i))}getInstance(i=this.DEFAULT_ID){return this.instances[i]?this.clone(this.instances[i]):{}}clone(i){var e={};for(var t in i)i.hasOwnProperty(t)&&(e[t]=i[t]);return e}},ge=Number.MAX_SAFE_INTEGER,Le=(()=>{class n{constructor(e){this.service=e,this.state={}}transform(e,t){if(!(e instanceof Array)){let P=t.id||this.service.defaultId();return this.state[P]?this.state[P].slice:e}let a=t.totalItems&&t.totalItems!==e.length,r=this.createInstance(e,t),s=r.id,u,h,_=r.itemsPerPage,E=this.service.register(r);if(!a&&e instanceof Array){if(_=+_||ge,u=(r.currentPage-1)*_,h=u+_,this.stateIsIdentical(s,e,u,h))return this.state[s].slice;{let T=e.slice(u,h);return this.saveState(s,e,T,u,h),this.service.change.emit(s),T}}else return E&&this.service.change.emit(s),this.saveState(s,e,e,u,h),e}createInstance(e,t){return this.checkConfig(t),{id:t.id!=null?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}}checkConfig(e){let a=["itemsPerPage","currentPage"].filter(r=>!(r in e));if(0<a.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${a.join(", ")}`)}saveState(e,t,a,r,s){this.state[e]={collection:t,size:t.length,slice:a,start:r,end:s}}stateIsIdentical(e,t,a,r){let s=this.state[e];return!s||!(s.size===t.length&&s.start===a&&s.end===r)?!1:s.slice.every((h,_)=>h===t[a+_])}}return n.\u0275fac=function(e){return new(e||n)(D(S,16))},n.\u0275pipe=H({name:"paginate",type:n,pure:!1}),n})();var ce=(()=>{class n{constructor(e,t){this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new L,this.pageBoundsCorrection=new L,this.pages=[],this.changeSub=this.service.change.subscribe(a=>{this.id===a&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(e){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(e){this.pageChange.emit(e)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let e=this.service.getInstance(this.id),t=this.outOfBoundCorrection(e);t!==e.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(t),this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}outOfBoundCorrection(e){let t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage}createPageArray(e,t,a,r){r=+r;let s=[],u=Math.max(Math.ceil(a/t),1),h=Math.ceil(r/2),_=e<=h,E=u-h<e,P=!_&&!E,T=r<u,I=1;for(;I<=u&&I<=r;){let M,A=this.calculatePageNumber(I,e,r,u),Q=I===2&&(P||E),Z=I===r-1&&(P||_);T&&(Q||Z)?M="...":M=A,s.push({label:M,value:A}),I++}return s}calculatePageNumber(e,t,a,r){let s=Math.ceil(a/2);return e===a?r:e===1?e:a<r?r-s<t?r-a+e:s<t?t-s+e:e:e}}return n.\u0275fac=function(e){return new(e||n)(D(S),D(W))},n.\u0275dir=O({type:n,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[$]}),n})();function V(n){return!!n&&n!=="false"}var ye=(()=>{class n{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new L,this.pageBoundsCorrection=new L,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(e){this._directionLinks=V(e)}get autoHide(){return this._autoHide}set autoHide(e){this._autoHide=V(e)}get responsive(){return this._responsive}set responsive(e){this._responsive=V(e)}trackByIndex(e){return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=N({type:n,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(e,t){if(e&1){let a=k();l(0,"pagination-template",1,0),w("pageChange",function(s){return f(a),x(t.pageChange.emit(s))})("pageBoundsCorrection",function(s){return f(a),x(t.pageBoundsCorrection.emit(s))}),l(2,"nav",2),C(3,pe,6,8,"ul",3),g()()}if(e&2){let a=m(1);d("id",t.id)("maxSize",t.maxSize),o(2),U("aria-label",t.screenReaderPaginationLabel),o(),d("ngIf",!(t.autoHide&&a.pages.length<=1))}},dependencies:[ce,X,Y,J],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),n})(),ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=z({type:n}),n.\u0275inj=R({providers:[S],imports:[[K]]}),n})();export{Le as a,ye as b,ke as c};
