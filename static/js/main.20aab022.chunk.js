(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(2),r=t.n(l),i=(t(14),t(15),t(16),t(3)),o=t(4),m=t(5),c=t(7),d=t(6),h=t(8),u=function(e){var a=e.data;return s.a.createElement("div",{style:e.style},s.a.createElement("label",{className:"styleLabel",htmlFor:e.text},e.text),s.a.createElement("input",{className:"textboxStyle",type:e.type,onChange:e.handleChange,name:e.text}),s.a.createElement("span",{className:"error"},a))},g=(t(17),RegExp(/^[A-Za-z]+$/)),p=RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),f=RegExp(/^[0-9a-zA-Z]+$/),E=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,s=a.value,l=t.state.errors,r=l.firstName,o=l.lastName,m=l.email,c=l.password;if(s.length>0)switch(n){case"First Name":r=g.test(s),l.firstName=r?"":"Name is not valid!";break;case"Last Name":o=g.test(s),l.lastName=o?"":"Name is not valid!";break;case"Email address":m=p.test(s),l.email=m?"":"Email is not valid!";break;case"Password":s.length>8?(c=f.test(s),l.password=c?"":"Password is not valid!"):l.password="Password must be 8 characters long!"}else l.firstName="",l.lastName="",l.email="",l.password="";t.setState(Object(i.a)({errors:l},n,s))},t.state={firstName:null,lastName:null,email:null,password:null,errors:{firstName:"",lastName:"",email:"",password:""}},t.validName=RegExp(),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.errors;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"center"},s.a.createElement("h3",{className:"header"},"Get started today!"),s.a.createElement("form",{style:{padding:"10px"},onSubmit:this.handleSubmit},s.a.createElement("div",{style:{padding:"10px"}},s.a.createElement(u,{text:"First Name",type:"text",style:{float:"left",marginRight:"20px",width:"45%"},handleChange:this.handleChange,data:e.firstName}),s.a.createElement(u,{text:"Last Name",type:"text",style:{float:"left"},handleChange:this.handleChange,data:e.lastName}),s.a.createElement("br",{style:{clear:"both"}})),s.a.createElement("div",{style:{padding:"10px"}},s.a.createElement(u,{text:"Email address",type:"email",style:{float:"left",marginRight:"20px",width:"45%"},handleChange:this.handleChange,data:e.email}),s.a.createElement(u,{text:"Password",type:"password",style:{float:"left"},handleChange:this.handleChange,data:e.password}),s.a.createElement("br",{style:{clear:"both"}})),s.a.createElement("div",{className:"divStyle"},s.a.createElement("button",{className:"button",type:"submit",value:""},"Claim Your Free Trial",s.a.createElement("div",{className:"triangle-right"}))),s.a.createElement("p",{className:"terms"},"You are agreeing to our ",s.a.createElement("a",{className:"anchorTag",href:"https://sivagoutham.github.io/react-login/"},"Terms and Services")))))}}]),a}(n.Component);var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.20aab022.chunk.js.map