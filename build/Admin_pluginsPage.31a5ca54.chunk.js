"use strict";(self.webpackChunkfull_strapi=self.webpackChunkfull_strapi||[]).push([[3677],{14928:(I,m,e)=>{e.r(m),e.d(m,{default:()=>F});var t=e(67294),o=e(68547),v=e(15482),g=e(97132),h=e(87751),p=e(14087),u=e(17034),r=e(67838),y=e(49066),C=e(185),E=e(72735),N=e(38939),A=e(8060),L=e(79031),f=e(37909),D=e(15234),x=e(23724),B=e(23998),O=(n,a,l)=>new Promise((M,c)=>{var T=s=>{try{i(l.next(s))}catch(d){c(d)}},P=s=>{try{i(l.throw(s))}catch(d){c(d)}},i=s=>s.done?M(s.value):Promise.resolve(s.value).then(T,P);i((l=l.apply(n,a)).next())});const W=()=>O(void 0,null,function*(){const{data:n}=yield B.be.get("/admin/plugins");return n}),R=n=>{const a=(0,o.useNotification)();return(0,x.useQuery)("list-enabled-plugins",()=>W(),{onSuccess(){n&&n()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{var n,a;const{formatMessage:l}=(0,g.useIntl)(),{notifyStatus:M}=(0,p.G)();(0,o.useFocusWhenNavigate)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),T=()=>{M(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:P,data:i}=R(T);return P!=="success"&&P!=="error"?t.createElement(u.A,null,t.createElement(C.o,{"aria-busy":!0},t.createElement(o.LoadingIndicatorPage,null))):t.createElement(u.A,null,t.createElement(C.o,null,t.createElement(r.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(y.D,null,t.createElement(N.i,{colCount:2,rowCount:(a=(n=i==null?void 0:i.plugins)==null?void 0:n.length)!=null?a:0+1},t.createElement(A.h,null,t.createElement(L.Tr,null,t.createElement(f.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(f.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(D.p,null,i.plugins.map(({name:d,displayName:K,description:S})=>t.createElement(L.Tr,{key:d},t.createElement(f.Td,null,t.createElement(E.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${d}`,defaultMessage:K}))),t.createElement(f.Td,null,t.createElement(E.Z,{textColor:"neutral800"},l({id:`global.plugins.${d}.description`,defaultMessage:S}))))))))))},F=()=>{const{formatMessage:n}=(0,g.useIntl)(),a=n({id:"global.plugins",defaultMessage:"Plugins"});return t.createElement(o.CheckPagePermissions,{permissions:h.Z.marketplace.main},t.createElement(v.Helmet,{title:a}),t.createElement(Z,null))}},17034:(I,m,e)=>{e.d(m,{A:()=>u});var t=e(67294),o=e(45697),v=e(71893),g=e(35961);const h=(0,v.default)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:r})=>r?"auto 1fr":"1fr"};
`,p=(0,v.default)(g.x)`
  overflow-x: hidden;
`,u=({sideNav:r,children:y})=>t.createElement(h,{hasSideNav:Boolean(r)},r,t.createElement(p,{paddingBottom:10},y));u.defaultProps={sideNav:void 0},u.propTypes={children:o.node.isRequired,sideNav:o.node}}}]);