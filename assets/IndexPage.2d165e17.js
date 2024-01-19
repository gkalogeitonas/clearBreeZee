import{a as Fe,Q as pe}from"./QBtn.e1dff26c.js";import{Q as ve}from"./use-router-link.65f92b51.js";import{f as Ee,$ as De,w as N,o as me,d as se,g as te,r as z,a as b,a0 as Pe,a1 as qe,a2 as Oe,s as Ie,e as Y,q as $e,a3 as Te,i as Ne,h as M,P as X,T as ze,a4 as Le,m as Ue,Q as ye,_ as je,z as Ke,B as ee,C as Ze,D as de,J as O,E as oe,K as le,I as K,G as He,F as be,M as Qe}from"./index.fbfb3097.js";import{u as We,a as Ye}from"./use-dark.80cffb44.js";import{h as ae,c as Ge}from"./render.b5b5ef25.js";import{u as Je,a as Xe}from"./use-form.d9adde2f.js";import{Q as et}from"./QPage.04ad6ad0.js";import{W as tt}from"./weatherApi.4ac83253.js";function ot({validate:e,resetValidation:t,requiresQForm:i}){const u=Ee(De,!1);if(u!==!1){const{props:c,proxy:d}=te();Object.assign(d,{validate:e,resetValidation:t}),N(()=>c.disable,f=>{f===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),me(()=>{c.disable!==!0&&u.bindComponent(d)}),se(()=>{c.disable!==!0&&u.unbindComponent(d)})}else i===!0&&console.error("Parent QForm not found on useFormChild()!")}const we=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,re=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ce={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>we.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>re.test(e),rgbOrRgbaColor:e=>ne.test(e)||re.test(e),hexOrRgbColor:e=>we.test(e)||ne.test(e),hexaOrRgbaColor:e=>ke.test(e)||re.test(e),anyColor:e=>xe.test(e)||ne.test(e)||re.test(e)},lt=[!0,!1,"ondemand"],at={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>lt.includes(e)}};function nt(e,t){const{props:i,proxy:u}=te(),c=z(!1),d=z(null),f=z(null);ot({validate:I,resetValidation:B});let k=0,D;const _=b(()=>i.rules!==void 0&&i.rules!==null&&i.rules.length!==0),w=b(()=>i.disable!==!0&&_.value===!0&&t.value===!1),p=b(()=>i.error===!0||c.value===!0),W=b(()=>typeof i.errorMessage=="string"&&i.errorMessage.length!==0?i.errorMessage:d.value);N(()=>i.modelValue,()=>{f.value=!0,w.value===!0&&i.lazyRules===!1&&$()}),N(()=>i.reactiveRules,F=>{F===!0?D===void 0&&(D=N(()=>i.rules,()=>{w.value===!0&&f.value===!0&&i.lazyRules!=="ondemand"&&$()},{immediate:!0})):D!==void 0&&(D(),D=void 0)},{immediate:!0}),N(()=>i.lazyRules,F=>{F===!1&&w.value===!0&&f.value===!0&&$()}),N(e,F=>{F===!0?f.value===null&&(f.value=i.lazyRules===!0):w.value===!0&&(i.lazyRules===!1||i.lazyRules===!0&&f.value===!0)&&$()});function B(){k++,t.value=!1,f.value=null,c.value=!1,d.value=null,$.cancel()}function I(F=i.modelValue){if(i.disable===!0||_.value===!1)return!0;const H=++k,E=t.value!==!0?()=>{f.value=!0}:()=>{},L=(S,q)=>{S===!0&&E(),c.value=S,d.value=q||null,t.value=!1},Z=[];for(let S=0;S<i.rules.length;S++){const q=i.rules[S];let x;if(typeof q=="function"?x=q(F,ce):typeof q=="string"&&ce[q]!==void 0&&(x=ce[q](F)),x===!1||typeof x=="string")return L(!0,x),!1;x!==!0&&x!==void 0&&Z.push(x)}return Z.length===0?(L(!1),!0):(t.value=!0,Promise.all(Z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return H===k&&L(!1),!0;const q=S.find(x=>x===!1||typeof x=="string");return H===k&&L(q!==void 0,q),q===void 0},S=>(H===k&&(console.error(S),L(!0)),!1)))}const $=Pe(I,0);return se(()=>{D!==void 0&&D(),$.cancel()}),Object.assign(u,{resetValidation:B,validate:I}),qe(u,"hasError",()=>p.value),{isDirtyModel:f,hasRules:_,hasError:p,errorMessage:W,validate:I,resetValidation:B}}const Ce=/^on[A-Z]/;function rt(e,t){const i={listeners:z({}),attributes:z({})};function u(){const c={},d={};for(const f in e)f!=="class"&&f!=="style"&&Ce.test(f)===!1&&(c[f]=e[f]);for(const f in t.props)Ce.test(f)===!0&&(d[f]=t.props[f]);i.attributes.value=c,i.listeners.value=d}return Oe(u),u(),i}let fe,ie=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const it=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const i=new Uint8Array(t);return e.getRandomValues(i),i}}return t=>{const i=[];for(let u=t;u>0;u--)i.push(Math.floor(Math.random()*256));return i}})(),Me=4096;function Re(){(fe===void 0||ie+16>Me)&&(ie=0,fe=it(Me));const e=Array.prototype.slice.call(fe,ie,ie+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}let ge=[],ut=[];function Ae(e){ut.length===0?e():ge.push(e)}function st(e){ge=ge.filter(t=>t!==e)}function Ve(e,t){return e===void 0?t===!0?`f_${Re()}`:void 0:e}function he(e){return e!=null&&(""+e).length!==0}const dt={...We,...at,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ct=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ft({requiredForAttr:e=!0,tagProp:t}={}){const{props:i,attrs:u,proxy:c,vnode:d}=te(),f=Ye(i,c.$q);return{requiredForAttr:e,tag:t===!0?b(()=>i.tag):{value:"label"},isDark:f,editable:b(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:rt(u,d),targetUid:z(Ve(i.for,e)),rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function vt(e){const{props:t,emit:i,slots:u,attrs:c,proxy:d}=te(),{$q:f}=d;let k=null;e.hasValue===void 0&&(e.hasValue=b(()=>he(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{i("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:n,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:n,onControlFocusout:a,focus:x}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:D,hasRules:_,hasError:w,errorMessage:p,resetValidation:W}=nt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=b(()=>t.bottomSlots===!0||t.hint!==void 0||_.value===!0||t.counter===!0||t.error!==null),$=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=b(()=>`q-field row no-wrap items-start q-field--${$.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(E.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),H=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),E=b(()=>t.labelSlot===!0||t.label!==void 0),L=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),Z=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),S=b(()=>{const l={for:e.targetUid.value};return t.disable===!0&&(l["aria-disabled"]="true"),l});N(()=>t.for,l=>{e.targetUid.value=Ve(l,e.requiredForAttr)});function q(){const l=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(l===null||l.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==l&&m.focus({preventScroll:!0}))}function x(){Ae(q)}function G(){st(q);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function n(l){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,i("focus",l))}function a(l,m){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,i("blur",l)),m!==void 0&&m())})}function s(l){Ie(l),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),i("update:modelValue",null),i("clear",t.modelValue),Y(()=>{W(),f.platform.is.mobile!==!0&&(D.value=!1)})}function r(){const l=[];return u.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},u.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&l.push(C("error",[M(ve,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(C("inner-loading-append",u.loading!==void 0?u.loading():[M(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(C("inner-clearable-append",[M(ve,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),u.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},u.append())),e.getInnerAppend!==void 0&&l.push(C("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):u.rawControl!==void 0?l.push(u.rawControl()):u.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(Z.value))),E.value===!0&&l.push(M("div",{class:L.value},ae(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(ae(u.default))}function v(){let l,m;w.value===!0?p.value!==null?(l=[M("div",{role:"alert"},p.value)],m=`q--slot-error-${p.value}`):(l=ae(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],m=`q--slot-hint-${t.hint}`):(l=ae(u.hint),m="q--slot-hint"));const U=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&l===void 0)return;const y=M("div",{key:m,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?y:M(ze,{name:"q-transition--field-message"},()=>y),U===!0?M("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function C(l,m){return m===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let h=!1;return $e(()=>{h=!0}),Te(()=>{h===!0&&t.autofocus===!0&&d.focus()}),me(()=>{Ne.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${Re()}`),t.autofocus===!0&&d.focus()}),se(()=>{k!==null&&clearTimeout(k)}),Object.assign(d,{focus:x,blur:G}),function(){const m=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...S.value}:S.value;return M(e.tag.value,{ref:e.rootRef,class:[F.value,c.class],style:c.style,...m},[u.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},u.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:H.value,tabindex:-1,...e.controlEvents},r()),I.value===!0?v():null]),u.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},u.after()):null])}}const _e={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ue={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Be=Object.keys(ue);Be.forEach(e=>{ue[e].regex=new RegExp(ue[e].pattern)});const gt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Be.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),ht={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function mt(e,t,i,u){let c,d,f,k,D,_;const w=z(null),p=z(B());function W(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,$),N(()=>e.mask,n=>{if(n!==void 0)F(p.value,!0);else{const a=x(p.value);$(),e.modelValue!==a&&t("update:modelValue",a)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&F(p.value,!0)}),N(()=>e.unmaskedValue,()=>{w.value===!0&&F(p.value)});function B(){if($(),w.value===!0){const n=S(x(e.modelValue));return e.fillMask!==!1?G(n):n}return e.modelValue}function I(n){if(n<c.length)return c.slice(-n);let a="",s=c;const r=s.indexOf(A);if(r>-1){for(let g=n-s.length;g>0;g--)a+=A;s=s.slice(0,r)+a+s.slice(r)}return s}function $(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&W(),w.value===!1){k=void 0,c="",d="";return}const n=_e[e.mask]===void 0?e.mask:_e[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(Se,"\\$&"),r=[],g=[],v=[];let C=e.reverseFillMask===!0,h="",l="";n.replace(gt,(V,o,R,Q,j)=>{if(Q!==void 0){const T=ue[Q];v.push(T),l=T.negate,C===!0&&(g.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),C=!1),g.push("(?:"+l+"+)?("+T.pattern+")?")}else if(R!==void 0)h="\\"+(R==="\\"?"":R),v.push(R),r.push("([^"+h+"]+)?"+h+"?");else{const T=o!==void 0?o:j;h=T==="\\"?"\\\\\\\\":T.replace(Se,"\\\\$&"),v.push(T),r.push("([^"+h+"]+)?"+h+"?")}});const m=new RegExp("^"+r.join("")+"("+(h===""?".":"[^"+h+"]")+"+)?"+(h===""?"":"["+h+"]*")+"$"),U=g.length-1,y=g.map((V,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):o===U?new RegExp("^"+V+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));f=v,k=V=>{const o=m.exec(e.reverseFillMask===!0?V:V.slice(0,v.length+1));o!==null&&(V=o.slice(1).join(""));const R=[],Q=y.length;for(let j=0,T=V;j<Q;j++){const J=y[j].exec(T);if(J===null)break;T=T.slice(J.shift().length),R.push(...J)}return R.length!==0?R.join(""):V},c=v.map(V=>typeof V=="string"?V:A).join(""),d=c.split(A).join(a)}function F(n,a,s){const r=u.value,g=r.selectionEnd,v=r.value.length-g,C=x(n);a===!0&&$();const h=S(C),l=e.fillMask!==!1?G(h):h,m=p.value!==l;r.value!==l&&(r.value=l),m===!0&&(p.value=l),document.activeElement===r&&Y(()=>{if(l===d){const y=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=r.selectionEnd;let V=g-1;for(let o=D;o<=V&&o<y;o++)c[o]!==A&&V++;E.right(r,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const y=e.reverseFillMask===!0?g===0?l.length>h.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(h.length,v)+1))+1:g;r.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(m===!0){const y=Math.max(0,l.length-(l===d?0:Math.min(h.length,v+1)));y===1&&g===1?r.setSelectionRange(y,y,"forward"):E.rightReverse(r,y)}else{const y=l.length-v;r.setSelectionRange(y,y,"backward")}else if(m===!0){const y=Math.max(0,c.indexOf(A),Math.min(h.length,g)-1);E.right(r,y)}else{const y=g-1;E.right(r,y)}});const U=e.unmaskedValue===!0?x(l):l;String(e.modelValue)!==U&&(e.modelValue!==null||U!=="")&&i(U,!0)}function H(n,a,s){const r=S(x(n.value));a=Math.max(0,c.indexOf(A),Math.min(r.length,a)),D=a,n.setSelectionRange(a,s,"forward")}const E={left(n,a){const s=c.slice(a-1).indexOf(A)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(c[r]===A){a=r,s===!0&&a++;break}if(r<0&&c[a]!==void 0&&c[a]!==A)return E.right(n,0);a>=0&&n.setSelectionRange(a,a,"backward")},right(n,a){const s=n.value.length;let r=Math.min(s,a+1);for(;r<=s;r++)if(c[r]===A){a=r;break}else c[r-1]===A&&(a=r);if(r>s&&c[a-1]!==void 0&&c[a-1]!==A)return E.left(n,s);n.setSelectionRange(a,a,"forward")},leftReverse(n,a){const s=I(n.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(s[r-1]===A){a=r;break}else if(s[r]===A&&(a=r,r===0))break;if(r<0&&s[a]!==void 0&&s[a]!==A)return E.rightReverse(n,0);a>=0&&n.setSelectionRange(a,a,"backward")},rightReverse(n,a){const s=n.value.length,r=I(s),g=r.slice(0,a+1).indexOf(A)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(r[v-1]===A){a=v,a>0&&g===!0&&a--;break}if(v>s&&r[a-1]!==void 0&&r[a-1]!==A)return E.leftReverse(n,s);n.setSelectionRange(a,a,"forward")}};function L(n){t("click",n),_=void 0}function Z(n){if(t("keydown",n),Le(n)===!0||n.altKey===!0)return;const a=u.value,s=a.selectionStart,r=a.selectionEnd;if(n.shiftKey||(_=void 0),n.keyCode===37||n.keyCode===39){n.shiftKey&&_===void 0&&(_=a.selectionDirection==="forward"?s:r);const g=E[(n.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(n.preventDefault(),g(a,_===s?r:s),n.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(_,v),Math.max(_,v),"forward")}}else n.keyCode===8&&e.reverseFillMask!==!0&&s===r?(E.left(a,s),a.setSelectionRange(a.selectionStart,r,"backward")):n.keyCode===46&&e.reverseFillMask===!0&&s===r&&(E.rightReverse(a,r),a.setSelectionRange(s,a.selectionEnd,"forward"))}function S(n){if(n==null||n==="")return"";if(e.reverseFillMask===!0)return q(n);const a=f;let s=0,r="";for(let g=0;g<a.length;g++){const v=n[s],C=a[g];if(typeof C=="string")r+=C,v===C&&s++;else if(v!==void 0&&C.regex.test(v))r+=C.transform!==void 0?C.transform(v):v,s++;else return r}return r}function q(n){const a=f,s=c.indexOf(A);let r=n.length-1,g="";for(let v=a.length-1;v>=0&&r>-1;v--){const C=a[v];let h=n[r];if(typeof C=="string")g=C+g,h===C&&r--;else if(h!==void 0&&C.regex.test(h))do g=(C.transform!==void 0?C.transform(h):h)+g,r--,h=n[r];while(s===v&&h!==void 0&&C.regex.test(h));else return g}return g}function x(n){return typeof n!="string"||k===void 0?typeof n=="number"?k(""+n):n:k(n)}function G(n){return d.length-n.length<=0?n:e.reverseFillMask===!0&&n.length!==0?d.slice(0,-n.length)+n:n+d.slice(n.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:H,updateMaskValue:F,onMaskedKeydown:Z,onMaskedClick:L}}function pt(e,t){function i(){const u=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return i()}):b(i)}const yt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,bt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,wt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,kt=/[a-z0-9_ -]$/i;function xt(e){return function(i){if(i.type==="compositionend"||i.type==="change"){if(i.target.qComposing!==!0)return;i.target.qComposing=!1,e(i)}else i.type==="compositionupdate"&&i.target.qComposing!==!0&&typeof i.data=="string"&&(Ue.is.firefox===!0?kt.test(i.data)===!1:yt.test(i.data)===!0||bt.test(i.data)===!0||wt.test(i.data)===!0)===!0&&(i.target.qComposing=!0)}}var Ct=Ge({name:"QInput",inheritAttrs:!1,props:{...dt,...ht,...Je,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ct,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:i}){const{proxy:u}=te(),{$q:c}=u,d={};let f=NaN,k,D,_=null,w;const p=z(null),W=Xe(e),{innerValue:B,hasMask:I,moveCursorForPaste:$,updateMaskValue:F,onMaskedKeydown:H,onMaskedClick:E}=mt(e,t,h,p),L=pt(e,!0),Z=b(()=>he(B.value)),S=xt(v),q=ft(),x=b(()=>e.type==="textarea"||e.autogrow===!0),G=b(()=>x.value===!0||["text","search","url","tel","password"].includes(e.type)),n=b(()=>{const o={...q.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:m,onBlur:U,onFocus:ye};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=S,I.value===!0&&(o.onKeydown=H,o.onClick=E),e.autogrow===!0&&(o.onAnimationend=C),o}),a=b(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:W.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return x.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});N(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),N(()=>e.modelValue,o=>{if(I.value===!0){if(D===!0&&(D=!1,String(o)===f))return;F(o)}else B.value!==o&&(B.value=o,e.type==="number"&&d.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete d.value));e.autogrow===!0&&Y(l)}),N(()=>e.autogrow,o=>{o===!0?Y(l):p.value!==null&&i.rows>0&&(p.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){Ae(()=>{const o=document.activeElement;p.value!==null&&p.value!==o&&(o===null||o.id!==q.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function g(o){if(I.value===!0&&e.reverseFillMask!==!0){const R=o.target;$(R,R.selectionStart,R.selectionEnd)}t("paste",o)}function v(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const R=o.target.value;if(o.target.qComposing===!0){d.value=R;return}if(I.value===!0)F(R,!1,o.inputType);else if(h(R),G.value===!0&&o.target===document.activeElement){const{selectionStart:Q,selectionEnd:j}=o.target;Q!==void 0&&j!==void 0&&Y(()=>{o.target===document.activeElement&&R.indexOf(o.target.value)===0&&o.target.setSelectionRange(Q,j)})}e.autogrow===!0&&l()}function C(o){t("animationend",o),l()}function h(o,R){w=()=>{_=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==o&&f!==o&&(f=o,R===!0&&(D=!0),t("update:modelValue",o),Y(()=>{f===o&&(f=NaN)})),w=void 0},e.type==="number"&&(k=!0,d.value=o),e.debounce!==void 0?(_!==null&&clearTimeout(_),d.value=o,_=setTimeout(w,e.debounce)):w()}function l(){requestAnimationFrame(()=>{const o=p.value;if(o!==null){const R=o.parentNode.style,{scrollTop:Q}=o,{overflowY:j,maxHeight:T}=c.platform.is.firefox===!0?{}:window.getComputedStyle(o),J=j!==void 0&&j!=="scroll";J===!0&&(o.style.overflowY="hidden"),R.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",J===!0&&(o.style.overflowY=parseInt(T,10)<o.scrollHeight?"auto":"hidden"),R.marginBottom="",o.scrollTop=Q}})}function m(o){S(o),_!==null&&(clearTimeout(_),_=null),w!==void 0&&w(),t("change",o.target.value)}function U(o){o!==void 0&&ye(o),_!==null&&(clearTimeout(_),_=null),w!==void 0&&w(),k=!1,D=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=B.value!==void 0?B.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:B.value!==void 0?B.value:""}se(()=>{U()}),me(()=>{e.autogrow===!0&&l()}),Object.assign(q,{innerValue:B,fieldClass:b(()=>`q-${x.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:h,hasValue:Z,floatingLabel:b(()=>Z.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||he(e.displayValue)),getControl:()=>M(x.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...n.value,...e.type!=="file"?{value:y()}:L.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(x.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},y()),M("span",e.shadowText)])});const V=vt(q);return Object.assign(u,{focus:s,select:r,getNativeElement:()=>p.value}),qe(u,"nativeEl",()=>p.value),V}});const Mt=Ke({name:"IndexPage",data(){return{search:"",weatherData:null,pollutionData:null,position:null,apiKey:"5114231f956c863476e7ffdc500717e1",weatherApi:null}},created(){this.weatherApi=new tt(this.apiKey)},methods:{getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.showPosition(e),this.position=e,this.getWeatherByCoords(e.coords.latitude,e.coords.longitude),this.getPollutionByCoords(e.coords.latitude,e.coords.longitude)},e=>{switch(e.code){case e.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.");break}}):console.log("Geolocation is not supported by this browser.")},showPosition(e){console.log("Latitude: "+e.coords.latitude+"<br>Longitude: "+e.coords.longitude)},async getWeatherByCoords(e,t){this.weatherData=await this.weatherApi.getWeatherByCoords(e,t)},async getPollutionByCoords(e,t){this.pollutionData=await this.weatherApi.getPollutionByCoords(e,t)},async getWeatherByCityName(e){this.weatherData=await this.weatherApi.getWeatherByCityName(e),this.weatherData&&this.weatherData.coord&&(this.pollutionData=await this.weatherApi.getPollutionByCoords(this.weatherData.coord.lat,this.weatherData.coord.lon))}}}),_t={class:"col q-pt-lg q-px-md"},St={key:0,class:"col text-white text-center"},qt={class:"text-h4 text-weight-light"},Rt={class:"text-h6 text-weight-light"},At={class:"text-h2 text-weight-thin q-my-lg"},Vt=O("span",{class:"text-small"},"\xB0",-1),Bt={key:1,class:"col text-white text-center"},Ft={class:"aqi-circle"},Et={class:"text-h2"},Dt=O("div",{class:"text-caption"},"AQI",-1),Pt={class:"text-h6 text-weight-light"},Ot={class:"text-h6 text-weight-light"},It={class:"text-h6 text-weight-light"},$t={class:"text-h6 text-weight-light"},Tt={class:"text-h6 text-weight-light"},Nt={class:"text-h6 text-weight-light"},zt={class:"text-h6 text-weight-light"},Lt={key:1,class:"col text-h2 text-center text-white"};function Ut(e,t,i,u,c,d){return ee(),Ze(et,{class:"flex column"},{default:de(()=>[O("div",_t,[oe(Ct,{color:"white","text-color":"white","label-color":"white",outlined:"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=f=>e.search=f),placeholder:"Search"},{prepend:de(()=>[oe(pe,{size:"lg",color:"",name:"my_position",icon:"gps_fixed",onClick:e.getLocation},null,8,["onClick"])]),append:de(()=>[oe(ve,{name:"search",color:"white",onClick:t[0]||(t[0]=f=>e.getWeatherByCityName(e.search))})]),_:1},8,["modelValue"])]),e.weatherData||e.pollutionData?(ee(),le(Qe,{key:0},[e.weatherData?(ee(),le("div",St,[O("div",qt,K(e.weatherData.name),1),O("div",Rt,K(e.weatherData.weather[0].main),1),O("div",At,[O("span",null,K(Math.round(e.weatherData.main.temp,2)),1),Vt,He("C ")])])):be("",!0),e.pollutionData?(ee(),le("div",Bt,[O("div",Ft,[O("div",Et,K(e.pollutionData.main.aqi),1),Dt]),O("div",Pt," NO: "+K(e.pollutionData.components.no)+" \u03BCg/m3 ",1),O("div",Ot," NO2: "+K(e.pollutionData.components.no2)+" \u03BCg/m3 ",1),O("div",It," O3: "+K(e.pollutionData.components.o3)+" \u03BCg/m3 ",1),O("div",$t," SO2: "+K(e.pollutionData.components.so2)+" \u03BCg/m3 ",1),O("div",Tt," PM2.5: "+K(e.pollutionData.components.pm2_5)+" \u03BCg/m3 ",1),O("div",Nt," PM10: "+K(e.pollutionData.components.pm10)+" \u03BCg/m3 ",1),O("div",zt," NH3: "+K(e.pollutionData.components.nh3)+" \u03BCg/m3 ",1)])):be("",!0)],64)):(ee(),le("div",Lt,[oe(pe,{size:"",color:"primary",label:"Find my location",icon:"gps_fixed",onClick:e.getLocation},null,8,["onClick"])]))]),_:1})}var Jt=je(Mt,[["render",Ut]]);export{Jt as default};