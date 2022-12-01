"use strict";(self.webpackChunkfull_strapi=self.webpackChunkfull_strapi||[]).push([[7375],{67375:(gn,we,l)=>{l.d(we,{Z:()=>sn});var a=l(67294),P=l(97132),g=l(68547),ne=l(185),De=l(80831),b=l(96486),ae=l(49656),se=l(23724),Be=l(8610),j=l(23998),re=l(47292),je=l(73825);const Ve=(e,t,n="en")=>{if(t&&typeof t=="number"){const r=t/24/60/60/1e3;return(0,re.format)((0,re.addDays)(new Date(e),r),"PPP",{locale:je[n]})}return"Unlimited"};var w=l(53209);const Ze=w.Ry().shape({name:w.Z_(g.translatedErrors.string).required(g.translatedErrors.required),type:w.Z_(g.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(g.translatedErrors.required),description:w.Z_().nullable(),lifespan:w.Rx().integer().min(0).nullable().defined(g.translatedErrors.required)}),oe=e=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.keys(e).map(n=>({apiId:n,label:n.split("::")[1],controllers:(0,b.flatten)(Object.keys(e[n].controllers).map(r=>({controller:r,actions:(0,b.flatten)(e[n].controllers[r].map(o=>{const c=`${n}.${r}.${o}`;return n.includes("api::")&&t.allActionsIds.push(c),{action:o,actionId:c}}))})))})),t};var ie=l(67838),le=l(49066),$=l(29728),ce=l(85018),Ue=l(45697),s=l.n(Ue);const F=({apiTokenName:e})=>{const{formatMessage:t}=(0,P.useIntl)();return(0,g.useFocusWhenNavigate)(),a.createElement(ne.o,{"aria-busy":"true"},a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(ie.T,{primaryAction:a.createElement($.z,{disabled:!0,startIcon:a.createElement(ce.Z,null),type:"button",size:"L"},t({id:"global.save",defaultMessage:"Save"})),title:e||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),a.createElement(le.D,null,a.createElement(g.LoadingIndicatorPage,null)))};F.defaultProps={apiTokenName:null},F.propTypes={apiTokenName:s().string};const Ke=F;var We=l(67109),O=l(7681),de=l(30815),$e=l(78143),Fe=(e,t,n)=>new Promise((r,o)=>{var c=m=>{try{u(n.next(m))}catch(y){o(y)}},i=m=>{try{u(n.throw(m))}catch(y){o(y)}},u=m=>m.done?r(m.value):Promise.resolve(m.value).then(c,i);u((n=n.apply(e,t)).next())});const H=({onRegenerate:e,idToRegenerate:t})=>{const{formatMessage:n}=(0,P.useIntl)(),[r,o]=(0,a.useState)(!1),{regenerateData:c,isLoadingConfirmation:i}=(0,$e.rW)(t,e),u=()=>Fe(void 0,null,function*(){c(),o(!1)});return a.createElement(a.Fragment,null,a.createElement($.z,{startIcon:a.createElement(de.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>o(!0),name:"regenerate"},n({id:"Settings.apiTokens.regenerate",defaultMessage:"Regenerate"})),a.createElement(g.ConfirmDialog,{bodyText:{id:"Settings.apiTokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:a.createElement(de.Z,null),isConfirmButtonLoading:i,isOpen:r,onToggleDialog:()=>o(!1),onConfirm:u,leftButtonText:{id:"Settings.apiTokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.apiTokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.apiTokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};H.defaultProps={onRegenerate(){}},H.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired};const pe=H;var He=Object.defineProperty,Ge=Object.defineProperties,ze=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,me=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xe=(e,t)=>{for(var n in t||(t={}))Ye.call(t,n)&&me(e,n,t[n]);if(ue)for(var n of ue(t))Qe.call(t,n)&&me(e,n,t[n]);return e},Je=(e,t)=>Ge(e,ze(t));const G=({apiToken:e,setApiToken:t,canEditInputs:n,canRegenerate:r,isSubmitting:o})=>{const{formatMessage:c}=(0,P.useIntl)(),i=u=>{t(Je(Xe({},e),{accessKey:u}))};return a.createElement(ie.T,{title:(e==null?void 0:e.name)||c({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:n?a.createElement(O.K,{horizontal:!0,spacing:2},r&&(e==null?void 0:e.id)&&a.createElement(pe,{onRegenerate:i,idToRegenerate:e==null?void 0:e.id}),a.createElement($.z,{disabled:o,loading:o,startIcon:a.createElement(ce.Z,null),type:"submit",size:"S"},c({id:"global.save",defaultMessage:"Save"}))):r&&(e==null?void 0:e.id)&&a.createElement(pe,{onRegenerate:i,idToRegenerate:e==null?void 0:e.id}),navigationAction:a.createElement(g.Link,{startIcon:a.createElement(We.Z,null),to:"/settings/api-tokens"},c({id:"global.back",defaultMessage:"Back"}))})};G.propTypes={apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setApiToken:s().func.isRequired,isSubmitting:s().bool.isRequired},G.defaultProps={apiToken:void 0};const qe=G;var _e=l(12028),et=l(65186),tt=l(74855),nt=l(69427);const z=({apiToken:e})=>{const{formatMessage:t}=(0,P.useIntl)(),n=(0,g.useNotification)(),{trackUsage:r}=(0,g.useTracking)(),o=(0,a.useRef)(r);return a.createElement(g.ContentBox,{endAction:e&&a.createElement("span",{style:{alignSelf:"start"}},a.createElement(tt.CopyToClipboard,{onCopy:()=>{o.current("didCopyTokenKey"),n({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:e},a.createElement(_e.h,{label:t({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:a.createElement(et.Z,null),style:{padding:0,height:"1rem"}}))),title:e||t({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:t(e?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:a.createElement(nt.Z,null),iconBackground:"neutral100"})};z.defaultProps={apiToken:null},z.propTypes={apiToken:s().string};const at=z;var C=l(35961),Y=l(11276),R=l(74571),ge=l(91216),I=l(82562),st=l(64256),rt=l(16364),h=l(72735);const Q=({errors:e,onChange:t,canEditInputs:n,isCreating:r,values:o,apiToken:c,onDispatch:i,setHasChangedPermissions:u})=>{var m,y,N,S;const{formatMessage:f}=(0,P.useIntl)(),[B]=(0,g.usePersistentState)("strapi-admin-language","en"),k=({target:{value:d}})=>{u(!1),d==="full-access"&&i({type:"SELECT_ALL_ACTIONS"}),d==="read-only"&&i({type:"ON_CHANGE_READ_ONLY"})};return a.createElement(C.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(O.K,{spacing:4},a.createElement(h.Z,{variant:"delta",as:"h2"},f({id:"global.details",defaultMessage:"Details"})),a.createElement(Y.r,{gap:5},a.createElement(R.P,{key:"name",col:6,xs:12},a.createElement(rt.o,{name:"name",error:e.name?f((m=e.name)!=null&&m.id?e.name:{id:e.name,defaultMessage:e.name}):null,label:f({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:t,value:o.name,disabled:!n,required:!0})),a.createElement(R.P,{key:"description",col:6,xs:12},a.createElement(st.g,{label:f({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:e.description?f((y=e.description)!=null&&y.id?e.description:{id:e.description,defaultMessage:e.description}):null,onChange:t,disabled:!n},o.description)),a.createElement(R.P,{key:"lifespan",col:6,xs:12},a.createElement(ge.P,{name:"lifespan",label:f({id:"Settings.apiTokens.form.duration",defaultMessage:"Token duration"}),value:o.lifespan!==null?o.lifespan:"0",error:e.lifespan?f((N=e.lifespan)!=null&&N.id?e.lifespan:{id:e.lifespan,defaultMessage:e.lifespan}):null,onChange:d=>{t({target:{name:"lifespan",value:d}})},required:!0,disabled:!r,placeholder:"Select"},a.createElement(I.W,{value:"604800000"},f({id:"Settings.apiTokens.duration.7-days",defaultMessage:"7 days"})),a.createElement(I.W,{value:"2592000000"},f({id:"Settings.apiTokens.duration.30-days",defaultMessage:"30 days"})),a.createElement(I.W,{value:"7776000000"},f({id:"Settings.apiTokens.duration.90-days",defaultMessage:"90 days"})),a.createElement(I.W,{value:"0"},f({id:"Settings.apiTokens.duration.unlimited",defaultMessage:"Unlimited"}))),a.createElement(h.Z,{variant:"pi",textColor:"neutral600"},!r&&`${f({id:"Settings.apiTokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${Ve(c==null?void 0:c.createdAt,parseInt(o.lifespan,10),B)}`)),a.createElement(R.P,{key:"type",col:6,xs:12},a.createElement(ge.P,{name:"type",label:f({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:o==null?void 0:o.type,error:e.type?f((S=e.type)!=null&&S.id?e.type:{id:e.type,defaultMessage:e.type}):null,onChange:d=>{k({target:{value:d}}),t({target:{name:"type",value:d}})},placeholder:"Select",required:!0,disabled:!n},a.createElement(I.W,{value:"read-only"},f({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),a.createElement(I.W,{value:"full-access"},f({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"})),a.createElement(I.W,{value:"custom"},f({id:"Settings.apiTokens.types.custom",defaultMessage:"Custom"})))))))};Q.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},Q.defaultProps={errors:{},apiToken:{}};const ot=Q;var it=l(48734),lt=l(74756),ct=l(63081),fe=l(36213),dt=l(46273),pt=l(78114),V=l(71893),ye=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,gt=(e,t)=>{var n={};for(var r in e)ut.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ye)for(var r of ye(e))t.indexOf(r)<0&&mt.call(e,r)&&(n[r]=e[r]);return n};const ve=(0,a.createContext)({}),Ee=e=>{var t=e,{children:n}=t,r=gt(t,["children"]);return a.createElement(ve.Provider,{value:r},n)},X=()=>(0,a.useContext)(ve);Ee.propTypes={children:s().node.isRequired};const he=V.css`
  background: ${e=>e.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,ft=(0,V.default)(C.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${e=>e.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${e=>e.isActive&&he}
  &:hover {
    ${he}
  }
`,yt=V.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,J=({controllers:e,label:t,orderNumber:n,disabled:r,onExpanded:o,indexExpandendCollapsedContent:c})=>{const{value:{onChangeSelectAll:i,onChange:u,selectedActions:m,setSelectedAction:y,selectedAction:N}}=X(),[S,f]=(0,a.useState)(!1),B=()=>{f(d=>!d),o(n)};(0,a.useEffect)(()=>{c!==null&&c!==n&&S&&f(!1)},[c,n,S]);const k=d=>d===N;return a.createElement(it.U,{expanded:S,onToggle:B,variant:n%2?"primary":"secondary"},a.createElement(lt.B,{title:(0,b.capitalize)(t)}),a.createElement(ct.v,null,e==null?void 0:e.map(d=>{const x=d.actions.every(E=>m.includes(E.actionId)),v=d.actions.some(E=>m.includes(E.actionId));return a.createElement(C.x,{key:`${t}.${d==null?void 0:d.controller}`},a.createElement(dt.k,{justifyContent:"space-between",alignItems:"center",padding:4},a.createElement(C.x,{paddingRight:4},a.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},d==null?void 0:d.controller)),a.createElement(yt,null),a.createElement(C.x,{paddingLeft:4},a.createElement(fe.X,{value:x,indeterminate:!x&&v,onValueChange:()=>{i({target:{value:[...d.actions]}})},disabled:r},"Select all"))),a.createElement(Y.r,{gap:4,padding:4},(d==null?void 0:d.actions)&&(d==null?void 0:d.actions.map(E=>a.createElement(R.P,{col:6,key:E.actionId},a.createElement(ft,{isActive:k(E.actionId),padding:2,hasRadius:!0},a.createElement(fe.X,{value:m.includes(E.actionId),name:E.actionId,onValueChange:()=>{u({target:{value:E.actionId}})},disabled:r},E.action),a.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>y({target:{value:E.actionId}}),style:{display:"inline-flex",alignItems:"center"}},a.createElement(pt.Z,null))))))))})))};J.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},J.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const vt=J;var Et=Object.defineProperty,Z=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ht=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Oe(e,n,t[n]);if(Z)for(var n of Z(t))Te.call(t,n)&&Oe(e,n,t[n]);return e},Pt=(e,t)=>{var n={};for(var r in e)Pe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))t.indexOf(r)<0&&Te.call(e,r)&&(n[r]=e[r]);return n};const q=e=>{var t=e,{section:n}=t,r=Pt(t,["section"]);const[o,c]=(0,a.useState)(null),i=u=>c(u);return a.createElement(C.x,{padding:4,background:"neutral0"},n&&n.map((u,m)=>a.createElement(vt,ht({key:u.apiId,label:u.label,controllers:u.controllers,orderNumber:m,indexExpandendCollapsedContent:o,onExpanded:i,name:u.apiId},r))))};q.defaultProps={section:null},q.propTypes={section:s().arrayOf(s().object)};const Tt=q;var Ot=l(35161),Ct=l.n(Ot),St=l(13217),At=l.n(St);const bt=e=>{switch(e){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Rt=(0,V.default)(C.x)`
  margin: -1px;
  border-radius: ${({theme:e})=>e.spaces[1]} 0 0 ${({theme:e})=>e.spaces[1]};
`;function _({route:e}){const{formatMessage:t}=(0,P.useIntl)(),{method:n,handler:r,path:o}=e,c=o?At()(o.split("/")):[],[i="",u=""]=r?r.split("."):[],m=bt(e.method);return a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h3"},t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",a.createElement("span",null,i),a.createElement(h.Z,{variant:"delta",textColor:"primary600"},".",u)),a.createElement(O.K,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},a.createElement(Rt,{background:m.background,borderColor:m.border,padding:2},a.createElement(h.Z,{fontWeight:"bold",textColor:m.text},n)),a.createElement(C.x,{paddingLeft:2,paddingRight:2},Ct()(c,y=>a.createElement(h.Z,{key:y,textColor:y.includes(":")?"neutral600":"neutral900"},"/",y)))))}_.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},_.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const It=_,kt=()=>{var e;const{value:{selectedAction:t,routes:n}}=X(),{formatMessage:r}=(0,P.useIntl)(),o=t==null?void 0:t.split(".")[0];return a.createElement(R.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},t?a.createElement(O.K,{spacing:2},(e=n[o])==null?void 0:e.map(c=>{var i,u;return((u=(i=c.config.auth)==null?void 0:i.scope)==null?void 0:u.includes(t))||c.handler===t?a.createElement(It,{key:c.handler,route:c}):null})):a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h3"},r({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),a.createElement(h.Z,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var xt=Object.defineProperty,U=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mt=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&Ae(e,n,t[n]);if(U)for(var n of U(t))Se.call(t,n)&&Ae(e,n,t[n]);return e},Nt=(e,t)=>{var n={};for(var r in e)Ce.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&U)for(var r of U(e))t.indexOf(r)<0&&Se.call(e,r)&&(n[r]=e[r]);return n};const Lt=e=>{var t=Nt(e,[]);const{value:{data:n}}=X(),{formatMessage:r}=(0,P.useIntl)();return a.createElement(Y.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},a.createElement(R.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h2"},r({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),a.createElement(h.Z,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),(n==null?void 0:n.permissions)&&a.createElement(Tt,Mt({section:n==null?void 0:n.permissions},t))),a.createElement(kt,null))},wt=(0,a.memo)(Lt),ee=({apiToken:e,errors:t,onChange:n,canEditInputs:r,isCreating:o,values:c,onDispatch:i,setHasChangedPermissions:u})=>a.createElement(le.D,null,a.createElement(O.K,{spacing:6},Boolean(e==null?void 0:e.name)&&a.createElement(at,{apiToken:e==null?void 0:e.accessKey}),a.createElement(ot,{errors:t,onChange:n,canEditInputs:r,isCreating:o,values:c,apiToken:e,onDispatch:i,setHasChangedPermissions:u}),a.createElement(wt,{disabled:!r||(c==null?void 0:c.type)==="read-only"||(c==null?void 0:c.type)==="full-access"})));ee.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,isCreating:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}).isRequired,onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},ee.defaultProps={errors:{},apiToken:{}};const Dt=ee;var Bt=l(87751),jt=Object.defineProperty,Vt=Object.defineProperties,Zt=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Re=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wt=(e,t)=>{for(var n in t||(t={}))Ut.call(t,n)&&Re(e,n,t[n]);if(be)for(var n of be(t))Kt.call(t,n)&&Re(e,n,t[n]);return e},$t=(e,t)=>Vt(e,Zt(t));const Ft=(e,t=[])=>$t(Wt({},e),{selectedAction:null,routes:[],selectedActions:[],data:oe(t)});var Ht=l(60612),Gt=Object.defineProperty,Ie=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,ke=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t)=>{for(var n in t||(t={}))zt.call(t,n)&&ke(e,n,t[n]);if(Ie)for(var n of Ie(t))Yt.call(t,n)&&ke(e,n,t[n]);return e};const Xt={data:{},selectedActions:[]},Jt=(e,t)=>(0,Ht.default)(e,n=>{switch(t.type){case"ON_CHANGE":{n.selectedActions.includes(t.value)?(0,b.pull)(n.selectedActions,t.value):n.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>n.selectedActions.includes(o.actionId))?t.value.forEach(o=>{(0,b.pull)(n.selectedActions,o.actionId)}):t.value.forEach(o=>{n.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const r=n.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));n.selectedActions=[...r];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=oe(t.value);break}case"UPDATE_ROUTES":{n.routes=Qt({},t.value);break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=t.value;break}default:return n}});var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))tn.call(t,n)&&Me(e,n,t[n]);if(xe)for(var n of xe(t))nn.call(t,n)&&Me(e,n,t[n]);return e},Ne=(e,t)=>_t(e,en(t)),K=(e,t,n)=>new Promise((r,o)=>{var c=m=>{try{u(n.next(m))}catch(y){o(y)}},i=m=>{try{u(n.throw(m))}catch(y){o(y)}},u=m=>m.done?r(m.value):Promise.resolve(m.value).then(c,i);u((n=n.apply(e,t)).next())});const an="Name already taken",sn=()=>{var e;(0,g.useFocusWhenNavigate)();const{formatMessage:t}=(0,P.useIntl)(),{lockApp:n,unlockApp:r}=(0,g.useOverlayBlocker)(),o=(0,g.useNotification)(),c=(0,ae.useHistory)(),[i,u]=(0,a.useState)((e=c.location.state)!=null&&e.apiToken.accessKey?D({},c.location.state.apiToken):null),{trackUsage:m}=(0,g.useTracking)(),y=(0,a.useRef)(m),{setCurrentStep:N}=(0,g.useGuidedTour)(),{allowedActions:{canCreate:S,canUpdate:f,canRegenerate:B}}=(0,g.useRBAC)(Bt.Z.settings["api-tokens"]),[k,d]=(0,a.useReducer)(Jt,Xt,p=>Ft(p,{})),{params:{id:x}}=(0,ae.useRouteMatch)("/settings/api-tokens/:id"),v=x==="create";(0,se.useQuery)("content-api-permissions",()=>K(void 0,null,function*(){const[p,M]=yield Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(L=>K(void 0,null,function*(){const{data:A}=yield j.be.get(L);return A.data})));d({type:"UPDATE_PERMISSIONS_LAYOUT",value:p}),d({type:"UPDATE_ROUTES",value:M}),i&&((i==null?void 0:i.type)==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"}),(i==null?void 0:i.type)==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),(i==null?void 0:i.type)==="custom"&&d({type:"UPDATE_PERMISSIONS",value:i==null?void 0:i.permissions}))}),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,a.useEffect)(()=>{y.current(v?"didAddTokenFromList":"didEditTokenFromList")},[v]);const{status:E}=(0,se.useQuery)(["api-token",x],()=>K(void 0,null,function*(){const{data:{data:p}}=yield j.be.get(`/admin/api-tokens/${x}`);return u(D({},p)),(p==null?void 0:p.type)==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"}),(p==null?void 0:p.type)==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),(p==null?void 0:p.type)==="custom"&&d({type:"UPDATE_PERMISSIONS",value:p==null?void 0:p.permissions}),p}),{enabled:!v&&!i,onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),rn=(p,M)=>K(void 0,null,function*(){var L,A,W;y.current(v?"willCreateToken":"willEditToken"),n();const un=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null;try{const{data:{data:T}}=v?yield j.be.post("/admin/api-tokens",Ne(D({},p),{lifespan:un,permissions:p.type==="custom"?k.selectedActions:null})):yield j.be.put(`/admin/api-tokens/${x}`,{name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?k.selectedActions:null});v&&(c.replace(`/settings/api-tokens/${T.id}`,{apiToken:T}),N("apiTokens.success")),r(),u(D({},T)),o({type:"success",message:t(v?{id:"notification.success.tokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.tokenedited",defaultMessage:"API Token successfully edited"})}),y.current(v?"didCreateToken":"didEditToken",{type:i.type})}catch(T){const mn=(0,Be.Iz)(T.response.data);M.setErrors(mn),((W=(A=(L=T==null?void 0:T.response)==null?void 0:L.data)==null?void 0:A.error)==null?void 0:W.message)===an?o({type:"warning",message:(0,b.get)(T,"response.data.message","notification.error.tokennamenotunique")}):o({type:"warning",message:(0,b.get)(T,"response.data.message","notification.error")}),r()}}),[on,te]=(0,a.useState)(!1),ln=({target:{value:p}})=>{te(!0),d({type:"ON_CHANGE",value:p})},cn=({target:{value:p}})=>{te(!0),d({type:"SELECT_ALL_IN_PERMISSION",value:p})},dn=({target:{value:p}})=>{d({type:"SET_SELECTED_ACTION",value:p})},pn=Ne(D({},k),{onChange:ln,onChangeSelectAll:cn,setSelectedAction:dn}),Le=f&&!v||S&&v;return!v&&!i&&E!=="success"?a.createElement(Ke,{apiTokenName:i==null?void 0:i.name}):a.createElement(Ee,{value:pn},a.createElement(ne.o,null,a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(De.Formik,{validationSchema:Ze,validateOnChange:!1,initialValues:{name:(i==null?void 0:i.name)||"",description:(i==null?void 0:i.description)||"",type:i==null?void 0:i.type,lifespan:i!=null&&i.lifespan?i.lifespan.toString():i==null?void 0:i.lifespan},enableReinitialize:!0,onSubmit:(p,M)=>rn(p,M)},({errors:p,handleChange:M,isSubmitting:L,values:A,setFieldValue:W})=>(on&&(A==null?void 0:A.type)!=="custom"&&W("type","custom"),a.createElement(g.Form,null,a.createElement(qe,{apiToken:i,setApiToken:u,canEditInputs:Le,canRegenerate:B,isSubmitting:L}),a.createElement(Dt,{apiToken:i,errors:p,onChange:M,canEditInputs:Le,isCreating:v,values:A,onDispatch:d,setHasChangedPermissions:te}))))))}}}]);
