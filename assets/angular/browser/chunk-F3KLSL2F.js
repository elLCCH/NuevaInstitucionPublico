import{a as d}from"./chunk-N6H3ZBOR.js";import{B as oe,C as z,Cb as B,D as S,Db as U,E as m,Ea as he,F as L,Fa as me,G as a,H as D,I as ae,J as le,Na as fe,Nb as $,Oa as H,P as de,R,S as N,T as ue,Ta as G,U as V,Ua as pe,Wa as ge,a as K,aa as P,b as C,d as W,da as A,e as Z,eb as y,f as X,fb as ve,g as Y,h as q,i as I,ib as be,j as _,ja as ce,k as ee,ka as M,l as F,m as g,n as w,o as te,p as k,q as c,r as ie,s as O,t as se,v as re,w as ne}from"./chunk-YGQKKRMP.js";import{h as E}from"./chunk-O7S4L63H.js";var x={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],["table"]]},J=new te("config",{providedIn:"root",factory:()=>({modules:x})});function Q(r){r||(re(Q),r=c(S));let n=new C(o=>r.onDestroy(o.next.bind(o)));return o=>o.pipe(ee(n))}var Ce=[[["","above-quill-editor-toolbar",""]],[["","quill-editor-toolbar",""]],[["","below-quill-editor-toolbar",""]]],qe=["[above-quill-editor-toolbar]","[quill-editor-toolbar]","[below-quill-editor-toolbar]"];function we(r,n){r&1&&A(0,"div",0)}function Oe(r,n){r&1&&A(0,"div",0)}var j=(r,n)=>r||n||"html",Se=()=>new C(r=>{let n=requestAnimationFrame(()=>{r.next(),r.complete()});return()=>cancelAnimationFrame(n)}),Me=(()=>{let n=class n{constructor(e,i){this.config=i,this.quill$=Y(()=>E(this,null,function*(){if(!this.Quill){let t=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;let s=yield import("./chunk-D4JJD6Y7.js");this.document.addEventListener=t,this.Quill=s.default?.default??s.default??s}return this.config.customOptions?.forEach(t=>{let s=this.Quill.import(t.import);s.whitelist=t.whitelist,this.Quill.register(s,!0,this.config.suppressGlobalRegisterWarning)}),yield this.registerCustomModules(this.Quill,this.config.customModules,this.config.suppressGlobalRegisterWarning)})).pipe(_({bufferSize:1,refCount:!0})),this.document=e.get(H),this.config||(this.config={modules:x})}getQuill(){return this.quill$}registerCustomModules(e,i,t){return E(this,null,function*(){if(Array.isArray(i))for(let{implementation:s,path:l}of i)W(s)&&(s=yield Z(s)),e.register(l,s,t);return e})}};n.\u0275fac=function(i){return new(i||n)(k(z),k(J,8))},n.\u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})(),xe=(()=>{let n=class n{constructor(){this.format=a(void 0),this.theme=a(void 0),this.modules=a(void 0),this.debug=a(!1),this.readOnly=a(!1),this.placeholder=a(void 0),this.maxLength=a(void 0),this.minLength=a(void 0),this.required=a(!1),this.formats=a(void 0),this.customToolbarPosition=a("top"),this.sanitize=a(void 0),this.beforeRender=a(void 0),this.styles=a(null),this.registry=a(void 0),this.bounds=a(void 0),this.customOptions=a([]),this.customModules=a([]),this.trackChanges=a(void 0),this.classes=a(void 0),this.trimOnValidation=a(!1),this.linkPlaceholder=a(void 0),this.compareValues=a(!1),this.filterNull=a(!1),this.debounceTime=a(void 0),this.defaultEmptyValue=a(null),this.onEditorCreated=new m,this.onEditorChanged=new m,this.onContentChanged=new m,this.onSelectionChanged=new m,this.onFocus=new m,this.onBlur=new m,this.onNativeFocus=new m,this.onNativeBlur=new m,this.disabled=!1,this.toolbarPosition=N("top"),this.subscription=null,this.quillSubscription=null,this.elementRef=c(D),this.document=c(H),this.cd=c(fe),this.domSanitizer=c(ge),this.platformId=c(ae),this.renderer=c(R),this.zone=c(L),this.service=c(Me),this.destroyRef=c(S),this.valueGetter=a(e=>{let i=e.getSemanticHTML();this.isEmptyValue(i)&&(i=this.defaultEmptyValue());let t=i,s=j(this.format(),this.service.config.format);if(s==="text")t=e.getText();else if(s==="object")t=e.getContents();else if(s==="json")try{t=JSON.stringify(e.getContents())}catch{t=e.getText()}return t}),this.valueSetter=a((e,i)=>{let t=j(this.format(),this.service.config.format);if(t==="html")return([!0,!1].includes(this.sanitize())?this.sanitize():this.service.config.sanitize||!1)&&(i=this.domSanitizer.sanitize(le.HTML,i)),e.clipboard.convert({html:i});if(t==="json")try{return JSON.parse(i)}catch{return[{insert:i}]}return i}),this.selectionChangeHandler=(e,i,t)=>{let s=this.trackChanges()||this.service.config.trackChanges,l=!e&&!!this.onModelTouched&&(t==="user"||s&&s==="all");!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!l||this.zone.run(()=>{e===null?this.onBlur.emit({editor:this.quillEditor,source:t}):i===null&&this.onFocus.emit({editor:this.quillEditor,source:t}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:i,range:e,source:t}),l&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(e,i,t)=>{let s=this.quillEditor.getText(),l=this.quillEditor.getContents(),u=this.quillEditor.getSemanticHTML();this.isEmptyValue(u)&&(u=this.defaultEmptyValue());let h=this.trackChanges()||this.service.config.trackChanges,v=(t==="user"||h&&h==="all")&&!!this.onModelChange;!this.onContentChanged.observed&&!v||this.zone.run(()=>{if(v){let b=this.valueGetter();this.onModelChange(b(this.quillEditor))}this.onContentChanged.emit({content:l,delta:e,editor:this.quillEditor,html:u,oldDelta:i,source:t,text:s}),this.cd.markForCheck()})},this.editorChangeHandler=(e,i,t,s)=>{if(this.onEditorChanged.observed)if(e==="text-change"){let l=this.quillEditor.getText(),u=this.quillEditor.getContents(),h=this.quillEditor.getSemanticHTML();this.isEmptyValue(h)&&(h=this.defaultEmptyValue()),this.zone.run(()=>{this.onEditorChanged.emit({content:u,delta:i,editor:this.quillEditor,event:e,html:h,oldDelta:t,source:s,text:l}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:e,oldRange:t,range:i,source:s}),this.cd.markForCheck()})}}static normalizeClassNames(e){return e.trim().split(" ").reduce((t,s)=>{let l=s.trim();return l&&t.push(l),t},[])}ngOnInit(){this.toolbarPosition.set(this.customToolbarPosition())}ngAfterViewInit(){pe(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe(X(e=>{let i=[this.service.registerCustomModules(e,this.customModules())],t=this.beforeRender()??this.service.config.beforeRender;return t&&i.push(t()),Promise.all(i).then(()=>e)})).subscribe(e=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");let i=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),t=Object.assign({},this.modules()||this.service.config.modules);i?t.toolbar=i:t.toolbar===void 0&&(t.toolbar=x.toolbar);let s=this.placeholder()!==void 0?this.placeholder():this.service.config.placeholder;s===void 0&&(s="Insert text here ...");let l=this.styles();l&&Object.keys(l).forEach(f=>{this.renderer.setStyle(this.editorElem,f,l[f])}),this.classes()&&this.addClasses(this.classes()),this.customOptions().forEach(f=>{let p=e.import(f.import);p.whitelist=f.whitelist,e.register(p,!0)});let u=this.bounds()&&this.bounds()==="self"?this.editorElem:this.bounds();u||(u=this.service.config.bounds?this.service.config.bounds:this.document.body);let h=this.debug();!h&&h!==!1&&this.service.config.debug&&(h=this.service.config.debug);let v=this.readOnly();!v&&this.readOnly()!==!1&&(v=this.service.config.readOnly!==void 0?this.service.config.readOnly:!1);let b=this.formats();if(!b&&b===void 0&&(b=this.service.config.formats?[...this.service.config.formats]:this.service.config.formats===null?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new e(this.editorElem,{bounds:u,debug:h,formats:b,modules:t,placeholder:s,readOnly:v,registry:this.registry(),theme:this.theme()||(this.service.config.theme?this.service.config.theme:"snow")}),this.onNativeBlur.observed&&(this.quillEditor.scroll.domNode.addEventListener("blur",()=>this.onNativeBlur.next({editor:this.quillEditor,source:"dom"})),this.quillEditor.getModule("toolbar").container?.addEventListener("mousedown",p=>p.preventDefault())),this.onNativeFocus.observed&&this.quillEditor.scroll.domNode.addEventListener("focus",()=>this.onNativeFocus.next({editor:this.quillEditor,source:"dom"})),this.linkPlaceholder()){let p=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");p?.dataset&&(p.dataset.link=this.linkPlaceholder())}}),this.content){if(j(this.format(),this.service.config.format)==="text")this.quillEditor.setText(this.content,"silent");else{let Ee=this.valueSetter()(this.quillEditor,this.content);this.quillEditor.setContents(Ee,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),!(!this.onEditorCreated.observed&&!this.onValidatorChanged)&&Se().pipe(Q(this.destroyRef)).subscribe(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.styles){let i=e.styles.currentValue,t=e.styles.previousValue;t&&Object.keys(t).forEach(s=>{this.renderer.removeStyle(this.editorElem,s)}),i&&Object.keys(i).forEach(s=>{this.renderer.setStyle(this.editorElem,s,this.styles()[s])})}if(e.classes){let i=e.classes.currentValue,t=e.classes.previousValue;t&&this.removeClasses(t),i&&this.addClasses(i)}e.debounceTime&&this.addQuillEventListeners()}}addClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.addClass(this.editorElem,i)})}removeClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.removeClass(this.editorElem,i)})}writeValue(e){if(this.filterNull()&&e===null||(this.content=e,!this.quillEditor))return;let i=j(this.format(),this.service.config.format),s=this.valueSetter()(this.quillEditor,e);if(this.compareValues()){let l=this.quillEditor.getContents();if(JSON.stringify(l)===JSON.stringify(s))return}if(e){i==="text"?this.quillEditor.setText(e):this.quillEditor.setContents(s);return}this.quillEditor.setText("")}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly()||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;let e={},i=!0,t=this.quillEditor.getText(),s=this.trimOnValidation()?t.trim().length:t.length===1&&t.trim().length===0?0:t.length-1,l=this.quillEditor.getContents().ops,u=!!l&&l.length===1&&[`
`,""].includes(l[0].insert?.toString());return this.minLength()&&s&&s<this.minLength()&&(e.minLengthError={given:s,minLength:this.minLength()},i=!1),this.maxLength()&&s>this.maxLength()&&(e.maxLengthError={given:s,maxLength:this.maxLength()},i=!1),this.required()&&!s&&u&&(e.requiredError={empty:!0},i=!1),i?null:e}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new K,this.subscription.add(q(this.quillEditor,"selection-change").subscribe(([t,s,l])=>{this.selectionChangeHandler(t,s,l)}));let e=q(this.quillEditor,"text-change"),i=q(this.quillEditor,"editor-change");typeof this.debounceTime()=="number"&&(e=e.pipe(I(this.debounceTime())),i=i.pipe(I(this.debounceTime()))),this.subscription.add(e.subscribe(([t,s,l])=>{this.textChangeHandler(t,s,l)})),this.subscription.add(i.subscribe(([t,s,l,u])=>{this.editorChangeHandler(t,s,l,u)}))})}dispose(){this.subscription!==null&&(this.subscription.unsubscribe(),this.subscription=null)}isEmptyValue(e){return e==="<p></p>"||e==="<div></div>"||e==="<p><br></p>"||e==="<div><br></div>"}};n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=se({type:n,inputs:{format:[1,"format"],theme:[1,"theme"],modules:[1,"modules"],debug:[1,"debug"],readOnly:[1,"readOnly"],placeholder:[1,"placeholder"],maxLength:[1,"maxLength"],minLength:[1,"minLength"],required:[1,"required"],formats:[1,"formats"],customToolbarPosition:[1,"customToolbarPosition"],sanitize:[1,"sanitize"],beforeRender:[1,"beforeRender"],styles:[1,"styles"],registry:[1,"registry"],bounds:[1,"bounds"],customOptions:[1,"customOptions"],customModules:[1,"customModules"],trackChanges:[1,"trackChanges"],classes:[1,"classes"],trimOnValidation:[1,"trimOnValidation"],linkPlaceholder:[1,"linkPlaceholder"],compareValues:[1,"compareValues"],filterNull:[1,"filterNull"],debounceTime:[1,"debounceTime"],defaultEmptyValue:[1,"defaultEmptyValue"],valueGetter:[1,"valueGetter"],valueSetter:[1,"valueSetter"]},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur",onNativeFocus:"onNativeFocus",onNativeBlur:"onNativeBlur"},features:[ne]});let r=n;return r})(),ht=(()=>{let n=class n extends xe{};n.\u0275fac=(()=>{let e;return function(t){return(e||(e=oe(n)))(t||n)}})(),n.\u0275cmp=ie({type:n,selectors:[["quill-editor"]],standalone:!0,features:[he([{multi:!0,provide:ve,useExisting:F(()=>n)},{multi:!0,provide:be,useExisting:F(()=>n)}]),ue,me],ngContentSelectors:qe,decls:5,vars:2,consts:[["quill-editor-element",""]],template:function(i,t){i&1&&(ce(Ce),V(0,we,1,0,"div",0),M(1),M(2,1),M(3,2),V(4,Oe,1,0,"div",0)),i&2&&(P(t.toolbarPosition()!=="top"?0:-1),de(4),P(t.toolbarPosition()==="top"?4:-1))},styles:["[_nghost-%COMP%]{display:inline-block}"]});let r=n;return r})();var ye=(()=>{let n=class n{static forRoot(e){return{ngModule:n,providers:[{provide:J,useValue:e}]}}};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=O({type:n}),n.\u0275inj=w({});let r=n;return r})();var Et=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=O({type:r});static \u0275inj=w({imports:[G,B,U,$,G,B,U,$,ye]})}return r})();var Ot=(()=>{class r{ruta=y.service;constructor(){}Obtenermateriales(){return d.get(this.ruta+"api/materiales/")}ObtenermaterialesCurso(o){return d.get(this.ruta+"api/CargarMaterialesCurso/"+o)}Agregarmateriales(o){return d.post(this.ruta+"api/materiales/",o)}Modificarmateriales(o,e){return d.post(this.ruta+"api/updatemateriales/"+e,o)}Seleccionarmateriales(o){return d.get(this.ruta+"api/materiales/"+o)}Eliminarmateriales(o){return d.delete(this.ruta+"api/materiales/"+o)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=(()=>{class r{ruta=y.service;constructor(){}Obtenerarchivos(){return d.get(this.ruta+"api/archivos/")}agregarArchivos(o,e){return E(this,null,function*(){let i=new FormData;o.forEach(t=>{i.append("archivos[]",t,t.name)}),i.append("idMaterial",e.toString());try{let t=yield d.post(this.ruta+"api/archivos/",i);return console.log("Archivos subidos correctamente",t.data),t}catch(t){throw console.error("Error al subir archivos",t),t}})}Modificararchivos(o,e){return d.post(this.ruta+"api/updatearchivos/"+e,o)}Seleccionararchivos(o){return d.get(this.ruta+"api/archivos/"+o)}Eliminararchivos(o){return d.delete(this.ruta+"api/archivos/"+o)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var zt=(()=>{class r{ruta=y.service;constructor(){}Obtenermaterias_materiales(){return d.get(this.ruta+"api/materias_materiales/")}Agregarmaterias_materiales(o){return d.post(this.ruta+"api/materias_materiales/",o)}Modificarmaterias_materiales(o,e){return d.post(this.ruta+"api/updatematerias_materiales/"+e,o)}Seleccionarmaterias_materiales(o){return d.get(this.ruta+"api/materias_materiales/"+o)}Eliminarmaterias_materiales(o){return d.delete(this.ruta+"api/materias_materiales/"+o)}ListaAgrupacionForVisibility(o,e){return d.post(this.ruta+"api/ListaAgrupacionForVisibility/"+e,o)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{ht as a,Et as b,Ot as c,jt as d,zt as e};