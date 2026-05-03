function t(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new o(r,t,i)},a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",y=g.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},x=(t,e)=>!l(t,e),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);s?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(r)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(e,r.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const o=s.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(void 0!==t){const o=this.constructor;if(!1===i&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??x)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,y?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,w=t=>t,C=A.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+S,T=`<${k}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),W=new WeakMap,Y=U.createTreeWalker(U,129);function F(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,i=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<r;e++){const r=t[e];let a,l,d=-1,c=0;for(;c<r.length&&(n.lastIndex=c,l=n.exec(r),null!==l);)c=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=j:void 0!==l[2]?(I.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=L):void 0!==l[3]&&(n=L):n===L?">"===l[0]?(n=s??H,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?L:'"'===l[3]?D:B):n===D||n===B?n=L:n===N||n===j?n=H:(n=L,s=void 0);const p=n===L&&t[e+1].startsWith("/>")?" ":"";o+=n===H?r+T:d>=0?(i.push(a),r.slice(0,d)+P+r.slice(d)+S+p):r+S+(-2===d?e:p)}return[F(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[l,d]=J(t,e);if(this.el=K.createElement(l,r),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Y.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(P)){const e=d[o++],r=i.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:r,ctor:"."===n[1]?et:"?"===n[1]?rt:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],O()),Y.nextNode(),a.push({type:2,index:++s});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const r=U.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,i){if(e===q)return e;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const o=M(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);Y.currentNode=i;let s=Y.nextNode(),o=0,n=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=r[++n]}o!==a?.index&&(s=Y.nextNode(),o++)}return Y.currentNode=U,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(F(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new X(this.O(O()),this.O(O()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=G}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(void 0===s)t=Z(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Z(this,i[r+n],e,n),a===q&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class it extends tt{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??G)===q)return;const r=this._$AH,i=t===G&&r!==G||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==G&&(r===G||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(K,X),(A.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=r?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(O(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},pt=(t=ct,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,s,t,!0,r)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=r;return function(r){const s=this[i];e.call(this,r),this.requestUpdate(i,s,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,r)=>"object"==typeof r?pt(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function ut(t){return ht({...t,state:!0,attribute:!1})}const gt=[{id:"colors",label:"Colors",icon:"🎨",properties:[{id:"background-color",label:"Background",cssProperty:"background-color",type:"color",default:"#ffffff"},{id:"color",label:"Text color",cssProperty:"color",type:"color",default:"#212121"},{id:"border-color",label:"Border color",cssProperty:"border-color",type:"color",default:"#e0e0e0"}]},{id:"typography",label:"Typography",icon:"🔤",properties:[{id:"font-size",label:"Font size",cssProperty:"font-size",type:"range",default:"14",min:8,max:36,step:1,unit:"px"},{id:"font-weight",label:"Font weight",cssProperty:"font-weight",type:"select",default:"400",options:["100","200","300","400","500","600","700","800","900"]},{id:"letter-spacing",label:"Letter spacing",cssProperty:"letter-spacing",type:"range",default:"0",min:-2,max:10,step:.5,unit:"px"},{id:"line-height",label:"Line height",cssProperty:"line-height",type:"range",default:"1.5",min:.8,max:3,step:.1,unit:""}]},{id:"spacing",label:"Spacing",icon:"📐",properties:[{id:"padding",label:"Padding",cssProperty:"padding",type:"range",default:"16",min:0,max:64,step:1,unit:"px"},{id:"padding-top",label:"Padding top",cssProperty:"padding-top",type:"range",default:"16",min:0,max:64,step:1,unit:"px"},{id:"padding-right",label:"Padding right",cssProperty:"padding-right",type:"range",default:"16",min:0,max:64,step:1,unit:"px"},{id:"padding-bottom",label:"Padding bottom",cssProperty:"padding-bottom",type:"range",default:"16",min:0,max:64,step:1,unit:"px"},{id:"padding-left",label:"Padding left",cssProperty:"padding-left",type:"range",default:"16",min:0,max:64,step:1,unit:"px"}]},{id:"borders",label:"Borders",icon:"🔲",properties:[{id:"border-radius",label:"Border radius",cssProperty:"border-radius",type:"range",default:"12",min:0,max:50,step:1,unit:"px"},{id:"border-width",label:"Border width",cssProperty:"border-width",type:"range",default:"0",min:0,max:10,step:1,unit:"px"},{id:"border-style",label:"Border style",cssProperty:"border-style",type:"select",default:"none",options:["none","solid","dashed","dotted","double","groove","ridge"]}]},{id:"effects",label:"Effects",icon:"✨",properties:[{id:"opacity",label:"Opacity",cssProperty:"opacity",type:"range",default:"1",min:0,max:1,step:.05,unit:""},{id:"box-shadow",label:"Box shadow",cssProperty:"box-shadow",type:"select",default:"none",options:["none","0 1px 3px rgba(0,0,0,0.12)","0 2px 6px rgba(0,0,0,0.15)","0 4px 12px rgba(0,0,0,0.15)","0 8px 24px rgba(0,0,0,0.15)","0 16px 40px rgba(0,0,0,0.2)","inset 0 1px 3px rgba(0,0,0,0.12)"]},{id:"transition",label:"Transition",cssProperty:"transition",type:"select",default:"none",options:["none","all 0.2s ease","all 0.3s ease","all 0.5s ease","background-color 0.3s ease","box-shadow 0.3s ease"]},{id:"filter",label:"Filter",cssProperty:"filter",type:"select",default:"none",options:["none","brightness(0.9)","brightness(1.1)","contrast(1.1)","saturate(1.2)","grayscale(0.5)","grayscale(1)","sepia(0.3)"]}]}];function ft(t,e){const r=e[t.id];if(void 0!==r&&""!==r)return"range"===t.type&&t.unit?`${r}${t.unit}`:r}function mt(t,e){const r=function(t,e){const r=[];for(const e of gt)for(const i of e.properties){const e=ft(i,t);void 0!==e&&e!==i.default&&r.push(`  ${i.cssProperty}: ${e};`)}return 0===r.length?"":`${e} {\n${r.join("\n")}\n}`}(t,e);return r?`card_mod:\n  style: |\n${r.split("\n").map(t=>`    ${t}`).join("\n")}`:"# No custom styles applied yet."}let yt=class extends at{constructor(){super(...arguments),this._activeGroup="colors",this._copied=!1,this._styles={},this._targetElement="ha-card"}setConfig(t){var e,r;this._config=t,this._styles={...null!==(e=t.styles)&&void 0!==e?e:{}},this._targetElement=null!==(r=t.target_element)&&void 0!==r?r:"ha-card"}static getConfigElement(){return document.createElement("card-mod-ui-editor")}static getStubConfig(){return{type:"custom:card-mod-ui",styles:{}}}getCardSize(){return 13}_handleGroupClick(t){this._activeGroup=t}_handlePropertyChange(t,e){this._styles={...this._styles,[t]:e},this._fireConfigChanged()}_resetProperty(t){const e={...this._styles};delete e[t],this._styles=e,this._fireConfigChanged()}_resetAll(){this._styles={},this._fireConfigChanged()}_handleTargetChange(t){const e=t.target.value.trim();this._targetElement=e||"ha-card",this._fireConfigChanged()}_fireConfigChanged(){var t;if(!this._config)return;const e=this._config,r=new CustomEvent("config-changed",{detail:{config:{...e,type:null!==(t=e.type)&&void 0!==t?t:"custom:card-mod-ui",styles:this._styles,target_element:this._targetElement}},bubbles:!0,composed:!0});this.dispatchEvent(r)}async _copyYAML(){const t=mt(this._styles,this._targetElement);try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}_renderColorControl(t){var e;const r=null!==(e=this._styles[t.id])&&void 0!==e?e:t.default;return V`
      <div class="property-control">
        <input
          type="color"
          .value=${r}
          @input=${e=>this._handlePropertyChange(t.id,e.target.value)}
        />
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${()=>this._resetProperty(t.id)}
        >↺</button>
      </div>
    `}_renderRangeControl(t){var e,r,i,s,o;const n=null!==(e=this._styles[t.id])&&void 0!==e?e:t.default,a=`${n}${null!==(r=t.unit)&&void 0!==r?r:""}`;return V`
      <div class="property-control">
        <input
          type="range"
          min=${null!==(i=t.min)&&void 0!==i?i:0}
          max=${null!==(s=t.max)&&void 0!==s?s:100}
          step=${null!==(o=t.step)&&void 0!==o?o:1}
          .value=${String(n)}
          @input=${e=>this._handlePropertyChange(t.id,e.target.value)}
        />
        <span class="range-value">${a}</span>
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${()=>this._resetProperty(t.id)}
        >↺</button>
      </div>
    `}_renderSelectControl(t){var e,r;const i=null!==(e=this._styles[t.id])&&void 0!==e?e:t.default;return V`
      <div class="property-control">
        <select
          .value=${i}
          @change=${e=>this._handlePropertyChange(t.id,e.target.value)}
        >
          ${(null!==(r=t.options)&&void 0!==r?r:[]).map(t=>V`<option value=${t} ?selected=${t===i}>${t}</option>`)}
        </select>
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${()=>this._resetProperty(t.id)}
        >↺</button>
      </div>
    `}_renderTextControl(t){var e;const r=null!==(e=this._styles[t.id])&&void 0!==e?e:t.default;return V`
      <div class="property-control">
        <input
          type="text"
          .value=${r}
          placeholder=${t.default}
          @change=${e=>this._handlePropertyChange(t.id,e.target.value)}
        />
        <button
          class="reset-btn"
          title="Reset to default"
          @click=${()=>this._resetProperty(t.id)}
        >↺</button>
      </div>
    `}_renderPropertyControl(t){switch(t.type){case"color":return this._renderColorControl(t);case"range":return this._renderRangeControl(t);case"select":return this._renderSelectControl(t);case"text":return this._renderTextControl(t);default:return G}}render(){var t;if(!this._config)return G;const e=gt.find(t=>t.id===this._activeGroup),r=function(t){const e=[];for(const r of gt)for(const i of r.properties){const r=ft(i,t);void 0!==r&&e.push(`${i.cssProperty}: ${r}`)}return e.join("; ")}(this._styles),i=mt(this._styles,this._targetElement),s=null!==(t=this._config.title)&&void 0!==t?t:"Card Mod UI";return V`
      <div class="card-wrapper">
        <!-- Header -->
        <div class="header">
          <span class="header-icon">🎨</span>
          <div>
            <h1>${s}</h1>
            <p>Visual CSS editor for lovelace-card-mod</p>
          </div>
        </div>

        <!-- Target element selector -->
        <div class="target-row">
          <label>Target element:</label>
          <input
            type="text"
            .value=${this._targetElement}
            placeholder="ha-card"
            @change=${this._handleTargetChange}
          />
        </div>

        <!-- Main editor layout -->
        <div class="editor-layout">
          <!-- Sidebar: group tabs -->
          <nav class="sidebar">
            <div class="sidebar-label">Properties</div>
            ${gt.map(t=>V`
                <button
                  class="group-btn ${this._activeGroup===t.id?"active":""}"
                  @click=${()=>this._handleGroupClick(t.id)}
                >
                  <span class="group-icon">${t.icon}</span>
                  ${t.label}
                </button>
              `)}
          </nav>

          <!-- Properties panel -->
          <div class="properties-panel">
            <div class="panel-title">
              ${null==e?void 0:e.icon} ${null==e?void 0:e.label}
            </div>
            ${null==e?void 0:e.properties.map(t=>V`
                <div class="property-row">
                  <span class="property-label">${t.label}</span>
                  ${this._renderPropertyControl(t)}
                </div>
              `)}
          </div>

          <!-- Preview -->
          <div class="preview-section">
            <div class="preview-title">Live Preview</div>
            <div class="preview-card" style=${r||""}>
              <div class="preview-card-title">Example Card</div>
              <div class="preview-card-content">
                This preview shows how your card will look with the applied
                styles. Adjust the properties on the right to see changes in
                real time.
              </div>
            </div>
          </div>
        </div>

        <!-- YAML Output -->
        <div class="output-section">
          <div class="output-header">
            <span class="output-title">Generated card_mod YAML</span>
            <div style="display:flex;align-items:center">
              <button class="reset-all-btn" @click=${this._resetAll}>
                ↺ Reset all
              </button>
              <button
                class="copy-btn ${this._copied?"copied":""}"
                @click=${this._copyYAML}
              >
                ${this._copied?"✓ Copied!":"📋 Copy YAML"}
              </button>
            </div>
          </div>
          <pre class="yaml-output">${i}</pre>
        </div>
      </div>
    `}};yt.styles=n`
    :host {
      --cmu-bg: #f5f5f5;
      --cmu-surface: #ffffff;
      --cmu-border: #e0e0e0;
      --cmu-primary: #03a9f4;
      --cmu-primary-dark: #0288d1;
      --cmu-text: #212121;
      --cmu-text-secondary: #757575;
      --cmu-radius: 12px;
      --cmu-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      display: block;
      font-family: var(--primary-font-family, "Roboto", sans-serif);
    }

    .card-wrapper {
      background: var(--cmu-surface);
      border-radius: var(--cmu-radius);
      box-shadow: var(--cmu-shadow);
      overflow: hidden;
    }

    /* ── Header ──────────────────────────────────────────────── */
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 20px;
      background: linear-gradient(135deg, var(--cmu-primary) 0%, var(--cmu-primary-dark) 100%);
      color: #fff;
    }

    .header-icon {
      font-size: 22px;
      line-height: 1;
    }

    .header h1 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }

    .header p {
      margin: 2px 0 0;
      font-size: 12px;
      opacity: 0.85;
    }

    /* ── Layout ─────────────────────────────────────────────── */
    .editor-layout {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 1fr auto;
      min-height: 420px;
    }

    /* ── Sidebar ─────────────────────────────────────────────── */
    .sidebar {
      grid-row: 1 / 3;
      border-right: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
      padding: 12px 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sidebar-label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--cmu-text-secondary);
      padding: 4px 8px 8px;
    }

    .group-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: none;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      font-size: 13px;
      color: var(--cmu-text);
      text-align: left;
      transition: background 0.15s, color 0.15s;
    }

    .group-btn:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    .group-btn.active {
      background: var(--cmu-primary);
      color: #fff;
      font-weight: 500;
    }

    .group-icon {
      font-size: 16px;
      line-height: 1;
      flex-shrink: 0;
    }

    /* ── Properties Panel ────────────────────────────────────── */
    .properties-panel {
      padding: 20px 24px;
      overflow-y: auto;
      max-height: 400px;
    }

    .panel-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--cmu-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 16px;
    }

    .property-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }

    .property-label {
      font-size: 13px;
      color: var(--cmu-text);
    }

    .property-control {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    input[type="color"] {
      width: 40px;
      height: 32px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      padding: 2px;
      cursor: pointer;
      background: none;
    }

    input[type="range"] {
      flex: 1;
      accent-color: var(--cmu-primary);
      cursor: pointer;
    }

    .range-value {
      min-width: 38px;
      text-align: right;
      font-size: 12px;
      color: var(--cmu-text-secondary);
      font-variant-numeric: tabular-nums;
    }

    select {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: var(--cmu-surface);
      font-size: 13px;
      cursor: pointer;
      color: var(--cmu-text);
    }

    input[type="text"] {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: var(--cmu-surface);
      font-size: 13px;
      color: var(--cmu-text);
    }

    .reset-btn {
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      color: var(--cmu-text-secondary);
      font-size: 14px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s;
    }

    .reset-btn:hover {
      background: rgba(0, 0, 0, 0.08);
    }

    /* ── Preview ─────────────────────────────────────────────── */
    .preview-section {
      padding: 20px 24px;
      border-top: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
    }

    .preview-title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--cmu-text-secondary);
      margin-bottom: 12px;
    }

    .preview-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 320px;
      transition: all 0.2s ease;
    }

    .preview-card-title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .preview-card-content {
      font-size: 12px;
      color: var(--cmu-text-secondary);
      line-height: 1.5;
    }

    /* ── Output ──────────────────────────────────────────────── */
    .output-section {
      padding: 16px 24px;
      border-top: 1px solid var(--cmu-border);
    }

    .output-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .output-title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--cmu-text-secondary);
    }

    .copy-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      background: var(--cmu-primary);
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
    }

    .copy-btn:hover {
      background: var(--cmu-primary-dark);
    }

    .copy-btn:active {
      transform: scale(0.97);
    }

    .copy-btn.copied {
      background: #4caf50;
    }

    .reset-all-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      background: transparent;
      color: var(--cmu-text-secondary);
      font-size: 12px;
      cursor: pointer;
      transition: background 0.15s;
      margin-right: 8px;
    }

    .reset-all-btn:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    pre.yaml-output {
      margin: 0;
      padding: 12px 14px;
      background: #1e1e2e;
      color: #cdd6f4;
      border-radius: 8px;
      font-size: 12px;
      font-family: "Fira Code", "Cascadia Code", "Consolas", monospace;
      line-height: 1.6;
      overflow-x: auto;
      white-space: pre;
      max-height: 180px;
      overflow-y: auto;
    }

    /* ── Target selector ─────────────────────────────────────── */
    .target-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      border-bottom: 1px solid var(--cmu-border);
      background: var(--cmu-bg);
      font-size: 13px;
    }

    .target-row label {
      color: var(--cmu-text-secondary);
      flex-shrink: 0;
    }

    .target-row input {
      flex: 1;
      max-width: 200px;
      padding: 5px 8px;
      border: 1px solid var(--cmu-border);
      border-radius: 6px;
      font-size: 13px;
      font-family: monospace;
      background: var(--cmu-surface);
      color: var(--cmu-text);
    }

    /* ── Responsive ──────────────────────────────────────────── */
    @media (max-width: 500px) {
      .editor-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        grid-row: auto;
        border-right: none;
        border-bottom: 1px solid var(--cmu-border);
        flex-direction: row;
        flex-wrap: wrap;
        padding: 8px;
      }

      .sidebar-label {
        display: none;
      }

      .group-btn {
        padding: 7px 10px;
        font-size: 12px;
      }
    }
  `,t([ht({attribute:!1})],yt.prototype,"hass",void 0),t([ut()],yt.prototype,"_config",void 0),t([ut()],yt.prototype,"_activeGroup",void 0),t([ut()],yt.prototype,"_copied",void 0),t([ut()],yt.prototype,"_styles",void 0),t([ut()],yt.prototype,"_targetElement",void 0),yt=t([dt("card-mod-ui")],yt);let vt=class extends at{setConfig(t){this._config=t}_valueChanged(t,e){if(!this._config)return;const r={...this._config,[t]:e};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}render(){var t,e;return this._config?V`
      <div class="row">
        <label>Card title</label>
        <input
          type="text"
          .value=${null!==(t=this._config.title)&&void 0!==t?t:""}
          placeholder="Card Mod UI"
          @change=${t=>this._valueChanged("title",t.target.value)}
        />
      </div>

      <div class="row">
        <label>Target CSS element</label>
        <input
          type="text"
          .value=${null!==(e=this._config.target_element)&&void 0!==e?e:"ha-card"}
          placeholder="ha-card"
          @change=${t=>this._valueChanged("target_element",t.target.value)}
        />
        <span class="hint">
          The CSS selector to target in the generated card_mod stylesheet.
          Typical values: <code>ha-card</code>, <code>.card-content</code>
        </span>
      </div>
    `:G}};var bt,xt;vt.styles=n`
    :host {
      display: block;
      padding: 16px;
      font-family: var(--primary-font-family, "Roboto", sans-serif);
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 16px;
    }

    label {
      font-size: 12px;
      color: var(--secondary-text-color, #757575);
      font-weight: 500;
    }

    input[type="text"] {
      padding: 8px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      font-size: 14px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
    }

    input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    .hint {
      font-size: 11px;
      color: var(--secondary-text-color, #9e9e9e);
      margin-top: 2px;
    }
  `,t([ht({attribute:!1})],vt.prototype,"hass",void 0),t([ut()],vt.prototype,"_config",void 0),vt=t([dt("card-mod-ui-editor")],vt),null!==(bt=(xt=window).customCards)&&void 0!==bt||(xt.customCards=[]),window.customCards.push({type:"custom:card-mod-ui",name:"Card Mod UI",description:"Visual CSS configuration editor for lovelace-card-mod. Adjust colors, typography, spacing, borders and effects via sliders, color pickers and dropdowns – then copy the generated card_mod YAML.",preview:!0,documentationURL:"https://github.com/daniel-SCAU/Card-mod-ui"});
