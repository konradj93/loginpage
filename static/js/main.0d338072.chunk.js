(this.webpackJsonploginpage=this.webpackJsonploginpage||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},65:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),i=a(5),c=a(10),l=a(17),m=a(41),u=a(7),d=Object(u.a)(),p=a(38),h=a(39),f=a.n(h),g=function(e){return f()({method:"POST",url:"https://run.mocky.io/v3/1f6e033b-72ea-48e8-ad93-be5d356f7e44",data:Object(p.a)({},e)})},b=r.a.createContext({isAuth:!1,setAuth:function(e){}}),E=b.Provider,w=b,v=(a(65),a(66),function(e){var t=e.message,a=e.testid;return r.a.createElement("div",{className:"invalid-feedback","data-testid":a},t)}),N=l.a().shape({email:l.b().email().required(),password:l.b().min(8,"Your password should be a minimum of 8 characters").matches(/(?:[0-9]+.*[A-Z]+)|(?:[A-Z]+.*[0-9]+)/,"Your password should contain  at least 1 number and one upper letter")}),j=function(e){var t=Object(n.useContext)(w).setAuth,a=Object(n.useState)(null),o=Object(i.a)(a,2),s=o[0],c=o[1],l=Object(m.a)({validationSchema:N}),u=l.register,p=l.handleSubmit,h=l.errors,f=p((function(e){var a=e.email,n=e.password;g({email:a,password:n}).then((function(e){202===e.status?t(!0):c("Something went wrong please try again"),d.push("/dashboard")})).catch((function(e){c("Something went wrong please try again")}))}));return r.a.createElement("div",{className:"loginPage"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"loginFormWrapper"},r.a.createElement("form",{onSubmit:f},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{form:"emailLogin"},"Login"),r.a.createElement("input",{name:"email",type:"email",ref:u,id:"emailLogin",className:"form-control","data-testid":"email"}),h.email&&r.a.createElement(v,{testid:"emailError",message:String(h.email.message)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{form:"loginPassword"},"Password"),r.a.createElement("input",{name:"password",type:"password",ref:u,id:"loginPassword",className:"form-control","data-testid":"password"}),h.password&&r.a.createElement(v,{testid:"passwordError",message:String(h.password.message)})),r.a.createElement("button",{type:"submit","data-testid":"submit",className:"btn btn-primary"},"Log In")),s&&r.a.createElement(v,{testid:"submitIssue",message:s}))))))},y=function(e){return r.a.createElement("h3",null,"Not Found")},O=function(e){var t=Object(n.useContext)(w).isAuth;return Object(n.useEffect)((function(){t||d.push("/")}),[t]),n.createElement(c.b,e)},S=function(e){return r.a.createElement("h1",null,"Welcome in private Path")},A=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],s=a[1];return r.a.createElement(E,{value:{isAuth:o,setAuth:function(e){s(e)}}},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",component:j}),r.a.createElement(O,{path:"/dashboard",component:S}),r.a.createElement(c.b,{component:y})),";")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.c,{history:d},r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0d338072.chunk.js.map