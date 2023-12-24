import{Q as he,l as $e,h as ne,c as Ve,k as be}from"./QBtn.40cda172.js";import{d as ve,w as L,o as ye,a as de,Y as De,g as ee,r as N,c as b,Z as Oe,$ as Fe,a0 as Ie,s as Te,b as G,m as Ne,a1 as Le,i as Ue,h as w,u as te,X as je,a2 as Ke,j as ze,v as ke,e as X,f as Ze,B as He,_ as Qe,F as We,G as oe,I as Ye,J as ce,Q as $,K as le,R as ae,N as H,M as Ge,L as we,T as Je}from"./index.fb7f2c04.js";import{u as Xe,a as et}from"./use-dark.a1978877.js";function tt({validate:e,resetValidation:t,requiresQForm:l}){const r=ve(De,!1);if(r!==!1){const{props:c,proxy:d}=ee();Object.assign(d,{validate:e,resetValidation:t}),L(()=>c.disable,f=>{f===!0?(typeof t=="function"&&t(),r.unbindComponent(d)):r.bindComponent(d)}),ye(()=>{c.disable!==!0&&r.bindComponent(d)}),de(()=>{c.disable!==!0&&r.unbindComponent(d)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const xe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,_e=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,re=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ie=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,fe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>xe.test(e),hexaColor:e=>Ce.test(e),hexOrHexaColor:e=>_e.test(e),rgbColor:e=>re.test(e),rgbaColor:e=>ie.test(e),rgbOrRgbaColor:e=>re.test(e)||ie.test(e),hexOrRgbColor:e=>xe.test(e)||re.test(e),hexaOrRgbaColor:e=>Ce.test(e)||ie.test(e),anyColor:e=>_e.test(e)||re.test(e)||ie.test(e)},ot=[!0,!1,"ondemand"],nt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ot.includes(e)}};function lt(e,t){const{props:l,proxy:r}=ee(),c=N(!1),d=N(null),f=N(null);tt({validate:D,resetValidation:B});let p=0,F;const S=b(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),x=b(()=>l.disable!==!0&&S.value===!0),y=b(()=>l.error===!0||c.value===!0),W=b(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:d.value);L(()=>l.modelValue,()=>{K()}),L(()=>l.reactiveRules,T=>{T===!0?F===void 0&&(F=L(()=>l.rules,()=>{K(!0)})):F!==void 0&&(F(),F=void 0)},{immediate:!0}),L(e,T=>{T===!0?f.value===null&&(f.value=!1):f.value===!1&&(f.value=!0,x.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&I())});function B(){p++,t.value=!1,f.value=null,c.value=!1,d.value=null,I.cancel()}function D(T=l.modelValue){if(x.value!==!0)return!0;const R=++p,Y=t.value!==!0?()=>{f.value=!0}:()=>{},j=(M,C)=>{M===!0&&Y(),c.value=M,d.value=C||null,t.value=!1},U=[];for(let M=0;M<l.rules.length;M++){const C=l.rules[M];let E;if(typeof C=="function"?E=C(T,fe):typeof C=="string"&&fe[C]!==void 0&&(E=fe[C](T)),E===!1||typeof E=="string")return j(!0,E),!1;E!==!0&&E!==void 0&&U.push(E)}return U.length===0?(j(!1),!0):(t.value=!0,Promise.all(U).then(M=>{if(M===void 0||Array.isArray(M)===!1||M.length===0)return R===p&&j(!1),!0;const C=M.find(E=>E===!1||typeof E=="string");return R===p&&j(C!==void 0,C),C===void 0},M=>(R===p&&(console.error(M),j(!0)),!1)))}function K(T){x.value===!0&&l.lazyRules!=="ondemand"&&(f.value===!0||l.lazyRules!==!0&&T!==!0)&&I()}const I=Oe(D,0);return de(()=>{F!==void 0&&F(),I.cancel()}),Object.assign(r,{resetValidation:B,validate:D}),Fe(r,"hasError",()=>y.value),{isDirtyModel:f,hasRules:S,hasError:y,errorMessage:W,validate:D,resetValidation:B}}const Me=/^on[A-Z]/;function at(e,t){const l={listeners:N({}),attributes:N({})};function r(){const c={},d={};for(const f in e)f!=="class"&&f!=="style"&&Me.test(f)===!1&&(c[f]=e[f]);for(const f in t.props)Me.test(f)===!0&&(d[f]=t.props[f]);l.attributes.value=c,l.listeners.value=d}return Ie(r),r(),l}let ge,ue=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const rt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let r=t;r>0;r--)l.push(Math.floor(Math.random()*256));return l}})(),Se=4096;function Ae(){(ge===void 0||ue+16>Se)&&(ue=0,ge=rt(Se));const e=Array.prototype.slice.call(ge,ue,ue+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}let me=[],it=[];function Be(e){it.length===0?e():me.push(e)}function ut(e){me=me.filter(t=>t!==e)}function Ee(e,t){return e===void 0?t===!0?`f_${Ae()}`:void 0:e}function pe(e){return e!=null&&(""+e).length!==0}const st={...Xe,...nt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},dt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ct({requiredForAttr:e=!0,tagProp:t}={}){const{props:l,attrs:r,proxy:c,vnode:d}=ee(),f=et(l,c.$q);return{requiredForAttr:e,tag:t===!0?b(()=>l.tag):{value:"label"},isDark:f,editable:b(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:at(r,d),targetUid:N(Ee(l.for,e)),rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function ft(e){const{props:t,emit:l,slots:r,attrs:c,proxy:d}=ee(),{$q:f}=d;let p=null;e.hasValue===void 0&&(e.hasValue=b(()=>pe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{l("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:i,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:i,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:F,hasRules:S,hasError:x,errorMessage:y,resetValidation:W}=lt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=b(()=>t.bottomSlots===!0||t.hint!==void 0||S.value===!0||t.counter===!0||t.error!==null),K=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=b(()=>`q-field row no-wrap items-start q-field--${K.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),T=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),R=b(()=>t.labelSlot===!0||t.label!==void 0),Y=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),j=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),U=b(()=>{const o={for:e.targetUid.value};return t.disable===!0?o["aria-disabled"]="true":t.readonly===!0&&(o["aria-readonly"]="true"),o});L(()=>t.for,o=>{e.targetUid.value=Ee(o,e.requiredForAttr)});function M(){const o=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(o===null||o.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==o&&m.focus({preventScroll:!0}))}function C(){Be(M)}function E(){ut(M);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function i(o){p!==null&&(clearTimeout(p),p=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",o))}function a(o,m){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",o)),m!==void 0&&m())})}function s(o){Te(o),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),G(()=>{W(),f.platform.is.mobile!==!0&&(F.value=!1)})}function u(){const o=[];return r.prepend!==void 0&&o.push(w("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:te},r.prepend())),o.push(w("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),x.value===!0&&t.noErrorIcon===!1&&o.push(_("error",[w(he,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(_("inner-loading-append",r.loading!==void 0?r.loading():[w($e,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(_("inner-clearable-append",[w(he,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),r.append!==void 0&&o.push(w("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:te},r.append())),e.getInnerAppend!==void 0&&o.push(_("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function h(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(w("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):r.rawControl!==void 0?o.push(r.rawControl()):r.control!==void 0&&o.push(w("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},r.control(j.value))),R.value===!0&&o.push(w("div",{class:Y.value},ne(r.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(w("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(ne(r.default))}function g(){let o,m;x.value===!0?y.value!==null?(o=[w("div",{role:"alert"},y.value)],m=`q--slot-error-${y.value}`):(o=ne(r.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[w("div",t.hint)],m=`q--slot-hint-${t.hint}`):(o=ne(r.hint),m="q--slot-hint"));const z=t.counter===!0||r.counter!==void 0;if(t.hideBottomSpace===!0&&z===!1&&o===void 0)return;const k=w("div",{key:m,class:"q-field__messages col"},o);return w("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:te},[t.hideBottomSpace===!0?k:w(je,{name:"q-transition--field-message"},()=>k),z===!0?w("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function _(o,m){return m===null?null:w("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let v=!1;return Ne(()=>{v=!0}),Le(()=>{v===!0&&t.autofocus===!0&&d.focus()}),ye(()=>{Ue.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${Ae()}`),t.autofocus===!0&&d.focus()}),de(()=>{p!==null&&clearTimeout(p)}),Object.assign(d,{focus:C,blur:E}),function(){const m=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...U.value}:U.value;return w(e.tag.value,{ref:e.rootRef,class:[I.value,c.class],style:c.style,...m},[r.before!==void 0?w("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:te},r.before()):null,w("div",{class:"q-field__inner relative-position col self-stretch"},[w("div",{ref:e.controlRef,class:T.value,tabindex:-1,...e.controlEvents},u()),D.value===!0?g():null]),r.after!==void 0?w("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:te},r.after()):null])}}const qe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},se={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Pe=Object.keys(se);Pe.forEach(e=>{se[e].regex=new RegExp(se[e].pattern)});const gt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Pe.join("")+"])|(.)","g"),Re=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),ht={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function vt(e,t,l,r){let c,d,f,p,F,S;const x=N(null),y=N(B());function W(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,K),L(()=>e.mask,i=>{if(i!==void 0)I(y.value,!0);else{const a=C(y.value);K(),e.modelValue!==a&&t("update:modelValue",a)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&I(y.value,!0)}),L(()=>e.unmaskedValue,()=>{x.value===!0&&I(y.value)});function B(){if(K(),x.value===!0){const i=U(C(e.modelValue));return e.fillMask!==!1?E(i):i}return e.modelValue}function D(i){if(i<c.length)return c.slice(-i);let a="",s=c;const u=s.indexOf(V);if(u>-1){for(let h=i-s.length;h>0;h--)a+=V;s=s.slice(0,u)+a+s.slice(u)}return s}function K(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&W(),x.value===!1){p=void 0,c="",d="";return}const i=qe[e.mask]===void 0?e.mask:qe[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(Re,"\\$&"),u=[],h=[],g=[];let _=e.reverseFillMask===!0,v="",o="";i.replace(gt,(A,n,q,Q,Z)=>{if(Q!==void 0){const O=se[Q];g.push(O),o=O.negate,_===!0&&(h.push("(?:"+o+"+)?("+O.pattern+"+)?(?:"+o+"+)?("+O.pattern+"+)?"),_=!1),h.push("(?:"+o+"+)?("+O.pattern+")?")}else if(q!==void 0)v="\\"+(q==="\\"?"":q),g.push(q),u.push("([^"+v+"]+)?"+v+"?");else{const O=n!==void 0?n:Z;v=O==="\\"?"\\\\\\\\":O.replace(Re,"\\\\$&"),g.push(O),u.push("([^"+v+"]+)?"+v+"?")}});const m=new RegExp("^"+u.join("")+"("+(v===""?".":"[^"+v+"]")+"+)?"+(v===""?"":"["+v+"]*")+"$"),z=h.length-1,k=h.map((A,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+A):n===z?new RegExp("^"+A+"("+(o===""?".":o)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+A));f=g,p=A=>{const n=m.exec(e.reverseFillMask===!0?A:A.slice(0,g.length+1));n!==null&&(A=n.slice(1).join(""));const q=[],Q=k.length;for(let Z=0,O=A;Z<Q;Z++){const J=k[Z].exec(O);if(J===null)break;O=O.slice(J.shift().length),q.push(...J)}return q.length!==0?q.join(""):A},c=g.map(A=>typeof A=="string"?A:V).join(""),d=c.split(V).join(a)}function I(i,a,s){const u=r.value,h=u.selectionEnd,g=u.value.length-h,_=C(i);a===!0&&K();const v=U(_),o=e.fillMask!==!1?E(v):v,m=y.value!==o;u.value!==o&&(u.value=o),m===!0&&(y.value=o),document.activeElement===u&&G(()=>{if(o===d){const k=e.reverseFillMask===!0?d.length:0;u.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=u.selectionEnd;let A=h-1;for(let n=F;n<=A&&n<k;n++)c[n]!==V&&A++;R.right(u,A);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const k=e.reverseFillMask===!0?h===0?o.length>v.length?1:0:Math.max(0,o.length-(o===d?0:Math.min(v.length,g)+1))+1:h;u.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(m===!0){const k=Math.max(0,o.length-(o===d?0:Math.min(v.length,g+1)));k===1&&h===1?u.setSelectionRange(k,k,"forward"):R.rightReverse(u,k)}else{const k=o.length-g;u.setSelectionRange(k,k,"backward")}else if(m===!0){const k=Math.max(0,c.indexOf(V),Math.min(v.length,h)-1);R.right(u,k)}else{const k=h-1;R.right(u,k)}});const z=e.unmaskedValue===!0?C(o):o;String(e.modelValue)!==z&&(e.modelValue!==null||z!=="")&&l(z,!0)}function T(i,a,s){const u=U(C(i.value));a=Math.max(0,c.indexOf(V),Math.min(u.length,a)),F=a,i.setSelectionRange(a,s,"forward")}const R={left(i,a){const s=c.slice(a-1).indexOf(V)===-1;let u=Math.max(0,a-1);for(;u>=0;u--)if(c[u]===V){a=u,s===!0&&a++;break}if(u<0&&c[a]!==void 0&&c[a]!==V)return R.right(i,0);a>=0&&i.setSelectionRange(a,a,"backward")},right(i,a){const s=i.value.length;let u=Math.min(s,a+1);for(;u<=s;u++)if(c[u]===V){a=u;break}else c[u-1]===V&&(a=u);if(u>s&&c[a-1]!==void 0&&c[a-1]!==V)return R.left(i,s);i.setSelectionRange(a,a,"forward")},leftReverse(i,a){const s=D(i.value.length);let u=Math.max(0,a-1);for(;u>=0;u--)if(s[u-1]===V){a=u;break}else if(s[u]===V&&(a=u,u===0))break;if(u<0&&s[a]!==void 0&&s[a]!==V)return R.rightReverse(i,0);a>=0&&i.setSelectionRange(a,a,"backward")},rightReverse(i,a){const s=i.value.length,u=D(s),h=u.slice(0,a+1).indexOf(V)===-1;let g=Math.min(s,a+1);for(;g<=s;g++)if(u[g-1]===V){a=g,a>0&&h===!0&&a--;break}if(g>s&&u[a-1]!==void 0&&u[a-1]!==V)return R.leftReverse(i,s);i.setSelectionRange(a,a,"forward")}};function Y(i){t("click",i),S=void 0}function j(i){if(t("keydown",i),Ke(i)===!0||i.altKey===!0)return;const a=r.value,s=a.selectionStart,u=a.selectionEnd;if(i.shiftKey||(S=void 0),i.keyCode===37||i.keyCode===39){i.shiftKey&&S===void 0&&(S=a.selectionDirection==="forward"?s:u);const h=R[(i.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(i.preventDefault(),h(a,S===s?u:s),i.shiftKey){const g=a.selectionStart;a.setSelectionRange(Math.min(S,g),Math.max(S,g),"forward")}}else i.keyCode===8&&e.reverseFillMask!==!0&&s===u?(R.left(a,s),a.setSelectionRange(a.selectionStart,u,"backward")):i.keyCode===46&&e.reverseFillMask===!0&&s===u&&(R.rightReverse(a,u),a.setSelectionRange(s,a.selectionEnd,"forward"))}function U(i){if(i==null||i==="")return"";if(e.reverseFillMask===!0)return M(i);const a=f;let s=0,u="";for(let h=0;h<a.length;h++){const g=i[s],_=a[h];if(typeof _=="string")u+=_,g===_&&s++;else if(g!==void 0&&_.regex.test(g))u+=_.transform!==void 0?_.transform(g):g,s++;else return u}return u}function M(i){const a=f,s=c.indexOf(V);let u=i.length-1,h="";for(let g=a.length-1;g>=0&&u>-1;g--){const _=a[g];let v=i[u];if(typeof _=="string")h=_+h,v===_&&u--;else if(v!==void 0&&_.regex.test(v))do h=(_.transform!==void 0?_.transform(v):v)+h,u--,v=i[u];while(s===g&&v!==void 0&&_.regex.test(v));else return h}return h}function C(i){return typeof i!="string"||p===void 0?typeof i=="number"?p(""+i):i:p(i)}function E(i){return d.length-i.length<=0?i:e.reverseFillMask===!0&&i.length!==0?d.slice(0,-i.length)+i:i+d.slice(i.length)}return{innerValue:y,hasMask:x,moveCursorForPaste:T,updateMaskValue:I,onMaskedKeydown:j,onMaskedClick:Y}}const mt={name:String};function pt(e){return b(()=>e.name||e.for)}function yt(e,t){function l(){const r=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return l()}):b(l)}const bt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,wt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,xt=/[a-z0-9_ -]$/i;function Ct(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(ze.is.firefox===!0?xt.test(l.data)===!1:bt.test(l.data)===!0||kt.test(l.data)===!0||wt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var _t=Ve({name:"QInput",inheritAttrs:!1,props:{...st,...ht,...mt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...dt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:l}){const{proxy:r}=ee(),{$q:c}=r,d={};let f=NaN,p,F,S=null,x;const y=N(null),W=pt(e),{innerValue:B,hasMask:D,moveCursorForPaste:K,updateMaskValue:I,onMaskedKeydown:T,onMaskedClick:R}=vt(e,t,v,y),Y=yt(e,!0),j=b(()=>pe(B.value)),U=Ct(g),M=ct(),C=b(()=>e.type==="textarea"||e.autogrow===!0),E=b(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),i=b(()=>{const n={...M.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:m,onBlur:z,onFocus:ke};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=U,D.value===!0&&(n.onKeydown=T,n.onClick=R),e.autogrow===!0&&(n.onAnimationend=_),n}),a=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:W.value,...M.splitAttrs.attributes.value,id:M.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});L(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),L(()=>e.modelValue,n=>{if(D.value===!0){if(F===!0&&(F=!1,String(n)===f))return;I(n)}else B.value!==n&&(B.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete d.value));e.autogrow===!0&&G(o)}),L(()=>e.autogrow,n=>{n===!0?G(o):y.value!==null&&l.rows>0&&(y.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&G(o)});function s(){Be(()=>{const n=document.activeElement;y.value!==null&&y.value!==n&&(n===null||n.id!==M.targetUid.value)&&y.value.focus({preventScroll:!0})})}function u(){y.value!==null&&y.value.select()}function h(n){if(D.value===!0&&e.reverseFillMask!==!0){const q=n.target;K(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if(D.value===!0)I(q,!1,n.inputType);else if(v(q),E.value===!0&&n.target===document.activeElement){const{selectionStart:Q,selectionEnd:Z}=n.target;Q!==void 0&&Z!==void 0&&G(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(Q,Z)})}e.autogrow===!0&&o()}function _(n){t("animationend",n),o()}function v(n,q){x=()=>{S=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&f!==n&&(f=n,q===!0&&(F=!0),t("update:modelValue",n),G(()=>{f===n&&(f=NaN)})),x=void 0},e.type==="number"&&(p=!0,d.value=n),e.debounce!==void 0?(S!==null&&clearTimeout(S),d.value=n,S=setTimeout(x,e.debounce)):x()}function o(){requestAnimationFrame(()=>{const n=y.value;if(n!==null){const q=n.parentNode.style,{scrollTop:Q}=n,{overflowY:Z,maxHeight:O}=c.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=Z!==void 0&&Z!=="scroll";J===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(O,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=Q}})}function m(n){U(n),S!==null&&(clearTimeout(S),S=null),x!==void 0&&x(),t("change",n.target.value)}function z(n){n!==void 0&&ke(n),S!==null&&(clearTimeout(S),S=null),x!==void 0&&x(),p=!1,F=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=B.value!==void 0?B.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:B.value!==void 0?B.value:""}de(()=>{z()}),ye(()=>{e.autogrow===!0&&o()}),Object.assign(M,{innerValue:B,fieldClass:b(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:y,emitValue:v,hasValue:j,floatingLabel:b(()=>j.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||pe(e.displayValue)),getControl:()=>w(C.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...i.value,...e.type!=="file"?{value:k()}:Y.value}),getShadowControl:()=>w("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[w("span",{class:"invisible"},k()),w("span",e.shadowText)])});const A=ft(M);return Object.assign(r,{focus:s,select:u,getNativeElement:()=>y.value}),Fe(r,"nativeEl",()=>y.value),A}}),Mt=Ve({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:l}}=ee(),r=ve(Ze,X);if(r===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(ve(He,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const d=b(()=>{const p=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const F=r.isContainer.value===!0?r.containerHeight.value:l.screen.height;return e.styleFn(p,F)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-p+"px":l.screen.height===0?p!==0?`calc(100vh - ${p}px)`:"100vh":l.screen.height-p+"px"}}),f=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:f.value,style:d.value},ne(t.default))}});const St=We({name:"IndexPage",data(){return{search:"",weatherData:null,pollutionData:null,position:null,apiUrlWeather:"https://api.openweathermap.org/data/2.5/weather",apiUrlPollution:"https://api.openweathermap.org/data/2.5/air_pollution",apiKey:"5114231f956c863476e7ffdc500717e1"}},methods:{getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.showPosition(e),this.position=e,this.getWeatherByCoords(e.coords.latitude,e.coords.longitude),this.getPollutionByCoords(e.coords.latitude,e.coords.longitude)},e=>{switch(e.code){case e.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.");break}}):console.log("Geolocation is not supported by this browser.")},showPosition(e){console.log("Latitude: "+e.coords.latitude+"<br>Longitude: "+e.coords.longitude)},getWeatherByCoords(e,t){const l=this.apiUrlWeather+"?lat="+e+"&lon="+t+"&appid="+this.apiKey+"&units=metric";fetch(l).then(r=>r.json()).then(r=>{console.log(r),this.weatherData=r})},getPollutionByCoords(e,t){const l=this.apiUrlPollution+"?lat="+e+"&lon="+t+"&appid="+this.apiKey;fetch(l).then(r=>r.json()).then(r=>{console.log(r),this.pollutionData=r.list[0]})},getWeatherByCityName(e){const t=this.apiUrlWeather+"?q="+e+"&appid="+this.apiKey+"&units=metric";fetch(t).then(l=>l.json()).then(l=>{console.log(l),this.weatherData=l,this.pollutionData=null,this.getPollutionByCoords(l.coord.lon,l.coord.lat)})}}}),qt={class:"col q-pt-lg q-px-md"},Rt={key:0,class:"col text-white text-center"},Vt={class:"text-h4 text-weight-light"},Ft={class:"text-h6 text-weight-light"},At={class:"text-h2 text-weight-thin q-my-lg"},Bt=$("span",{class:"text-small"},"\xB0",-1),Et={key:1,class:"col text-white text-center"},Pt={class:"aqi-circle"},$t={class:"text-h2"},Dt=$("div",{class:"text-caption"},"AQI",-1),Ot={class:"text-h6 text-weight-light"},It={class:"text-h6 text-weight-light"},Tt={class:"text-h6 text-weight-light"},Nt={class:"text-h6 text-weight-light"},Lt={class:"text-h6 text-weight-light"},Ut={class:"text-h6 text-weight-light"},jt={class:"text-h6 text-weight-light"},Kt={key:1,class:"col text-h2 text-center text-white"};function zt(e,t,l,r,c,d){return oe(),Ye(Mt,{class:"flex column"},{default:ce(()=>[$("div",qt,[le(_t,{color:"white","text-color":"white","label-color":"white",outlined:"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=f=>e.search=f),placeholder:"Search"},{prepend:ce(()=>[le(be,{size:"lg",color:"",name:"my_position",icon:"gps_fixed",onClick:e.getLocation},null,8,["onClick"])]),append:ce(()=>[le(he,{name:"search",color:"white",onClick:t[0]||(t[0]=f=>e.getWeatherByCityName(e.search))})]),_:1},8,["modelValue"])]),e.weatherData||e.pollutionData?(oe(),ae(Je,{key:0},[e.weatherData?(oe(),ae("div",Rt,[$("div",Vt,H(e.weatherData.name),1),$("div",Ft,H(e.weatherData.weather[0].main),1),$("div",At,[$("span",null,H(Math.round(e.weatherData.main.temp,2)),1),Bt,Ge("C ")])])):we("",!0),e.pollutionData?(oe(),ae("div",Et,[$("div",Pt,[$("div",$t,H(e.pollutionData.main.aqi),1),Dt]),$("div",Ot," NO: "+H(e.pollutionData.components.no)+" \u03BCg/m3 ",1),$("div",It," NO2: "+H(e.pollutionData.components.no2)+" \u03BCg/m3 ",1),$("div",Tt," O3: "+H(e.pollutionData.components.o3)+" \u03BCg/m3 ",1),$("div",Nt," SO2: "+H(e.pollutionData.components.so2)+" \u03BCg/m3 ",1),$("div",Lt," PM2.5: "+H(e.pollutionData.components.pm2_5)+" \u03BCg/m3 ",1),$("div",Ut," PM10: "+H(e.pollutionData.components.pm10)+" \u03BCg/m3 ",1),$("div",jt," NH3: "+H(e.pollutionData.components.nh3)+" \u03BCg/m3 ",1)])):we("",!0)],64)):(oe(),ae("div",Kt,[le(be,{size:"",color:"primary",label:"Find my location",icon:"gps_fixed",onClick:e.getLocation},null,8,["onClick"])]))]),_:1})}var Wt=Qe(St,[["render",zt]]);export{Wt as default};
