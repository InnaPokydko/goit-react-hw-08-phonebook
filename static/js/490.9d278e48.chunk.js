"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{1490:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,o,a,i,s,c,d,l,u,p,x,f,m=t(9434),h=t(2791),b=t(6286),g=t(184),v=function(n){var e=n.loading;return(0,g.jsx)("div",{className:"loader",children:(0,g.jsx)(b.fe,{color:"#3f51b5",size:50,loading:e})})},j=t(2561),Z=t(168),y=t(5706),w=y.Z.li(r||(r=(0,Z.Z)(["\ndisplay: flex;\njustify-content: space-between;\ngap: 5px;\npadding: 5px;"]))),k=y.Z.button(o||(o=(0,Z.Z)(["\nheight: 20px;\nwidth: 60px;\nalign-self: flex-end;\ncolor: #000;\ntext-transform: capitalize;\nborder: none;\nborder-radius: 14px;\nbackground-color: #DD2476;\nfont-size: 10px;\ncursor: pointer;\nbox-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);\n\n&:hover {\n  background-image: linear-gradient(to right, #FF512F 0%, #DD2476 51%, #FF512F 100%);\n}\n}"]))),z=t(7425),C=function(n){var e=n.contact,t=n.onDelete,r=e.id,o=e.name,a=e.number;return(0,g.jsxs)(w,{children:[o,": ",a,(0,g.jsx)(k,{type:"button",onClick:function(){return t(r)},children:(0,g.jsx)(z.GnT,{style:{width:"16px",height:"16px",fill:"white"}})})]})},F=function(n){return n.contacts.contactsArr},A=function(n){return n.contacts.isLoading},D=function(n){return n.contacts.error},L=function(n){return n.filter.status},N=y.Z.ul(a||(a=(0,Z.Z)(["\ndisplay: flex;\n  justify-content: space-evenly;\n width: 500px;\n  height: auto;\n  border-radius: 10px;\n  flex-direction: column;\n  gap: 5px;\n  padding: 15px;\n  font-size: 16px;\n  background: #cfd9df;\n  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);"]))),_=function(){var n=(0,m.v9)(F),e=(0,m.v9)(L),t=(0,m.I0)();var r=function(n){return t((0,j.GK)(n))};return(0,g.jsx)(N,{children:function(){var t=(null===e||void 0===e?void 0:e.toLowerCase())||"";return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}().map((function(n){return(0,g.jsx)(C,{contact:n,onDelete:r},n.id)}))})},I=t(9439),q=t(1620),E=y.Z.input(i||(i=(0,Z.Z)(["\n  width: 250px;\n  height: 30px;\n  color: #000;\n  background: #cfd9df;\n border-color: #C9CCD3;\n font-size: 18px;\n  border-radius: 5px;\n"]))),J=function(){var n,e=(0,m.I0)(),t=(null===(n=(0,m.v9)(L))||void 0===n?void 0:n.value)||"",r=(0,h.useState)(t||""),o=(0,I.Z)(r,2),a=o[0],i=o[1];return(0,g.jsx)("label",{children:(0,g.jsx)(E,{type:"text",placeholder:"Please enter name",value:a,onChange:function(n){var t=n.target.value.toLowerCase();i(t),e((0,q.bI)(t))}})})},S=t(5705),B=t(6727),G=(0,y.Z)(S.l0)(s||(s=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-around;\n  width: 350px;\n  margin: 20px;\n  padding: 40px;\n  border-radius: 10px;\n  flex-direction: column;\n  gap: 15px;\n  padding: 15px;\n  font-size: 20px;\n  background: #cfd9df;\n  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);\n"]))),K=(0,y.Z)(S.gN)(c||(c=(0,Z.Z)(["\n  width: 250px;\n  height: 30px;\n  color: #000;\n  background: #cfd9df;\n  border-color: #c9ccd3;\n  font-size: 16px;\n  border-radius: 5px;\n"]))),O=y.Z.label(d||(d=(0,Z.Z)(["\n  display: flex;\n\n  justify-content: space-between;\n  margin-bottom: 15px;\n"]))),P=(0,y.Z)(S.Bc)(l||(l=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  color: red;\n  font-size: 12px;\n  margin-bottom: 5px;\n"]))),M=y.Z.button(u||(u=(0,Z.Z)(["\n// height: 50px;\nwidth: 150px;\nalign-self: center;\ncolor: #fff;\ntext-transform: capitalize;\nborder: none;\nborder-radius: 10px;\nbackground-color: #0072ff;\nfont-size: 16px;\ncursor: pointer;\nbox-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);\n\n&:hover {\n  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);\n}\n"]))),R=B.Ry().shape({name:B.Z_().min(3).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Enter valid name").required(),number:B.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Enter valid  number").required()}),T={name:"",number:""},V=function(){var n=(0,m.I0)(),e=(0,m.v9)(F);return(0,g.jsx)(S.J9,{initialValues:T,validationSchema:R,onSubmit:function(t,r){var o=r.resetForm,a=t.name,i=t.number;if(e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts")),void o();n((0,j.uK)({name:a,number:i})),o()},children:(0,g.jsxs)(G,{autoComplete:"off",children:[(0,g.jsxs)(O,{htmlFor:"name",children:["Name",(0,g.jsx)(K,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,g.jsx)(P,{name:"name",component:P})]}),(0,g.jsxs)(O,{htmlFor:"number",children:["Number",(0,g.jsx)(K,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,g.jsx)(P,{name:"number",component:"div"}),(0,g.jsx)(M,{type:"submit",children:"Add contact"})]})})},Y=y.Z.div(p||(p=(0,Z.Z)(["\n  width: 800px;\n  display: flex;\n  margin: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 35px;\n  padding: 50px;\n  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);\n"]))),$=y.Z.h1(x||(x=(0,Z.Z)(["\n  font-family: 'Oxygen', sans-serif;\n  color: #f5f5f5;\n  font-size: 30px;\n  text-transform: uppercase;\n"]))),H=y.Z.h2(f||(f=(0,Z.Z)(["\n  font-family: 'Oxygen', sans-serif;\n  color: #f5f5f5;\n  font-size: 24px;\n"]))),Q=function(){var n=(0,m.I0)(),e=(0,m.v9)(A),t=(0,m.v9)(D);return(0,h.useEffect)((function(){n((0,j.NJ)())}),[n]),(0,g.jsxs)(Y,{children:[(0,g.jsx)($,{children:"Your phonebook"}),(0,g.jsx)(V,{}),(0,g.jsx)(H,{children:"Contacts"}),(0,g.jsx)(J,{}),e&&!t&&(0,g.jsx)(v,{}),(0,g.jsx)(_,{})]})}}}]);
//# sourceMappingURL=490.9d278e48.chunk.js.map