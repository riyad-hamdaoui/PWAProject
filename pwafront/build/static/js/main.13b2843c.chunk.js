(window["webpackJsonpfront-end-react"]=window["webpackJsonpfront-end-react"]||[]).push([[0],{17:function(e,t,n){},35:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(32),c=n.n(o),i=(n(40),n(41),n(6)),l=n(9),s=n(48),u=n(4);n(17);var m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),d=m[0],p=m[1],E=Object(u.m)();return r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box-signin"},r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),s.a.post("https://backpwa.onrender.com/connexion",{email:d,password:n},{header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8;application/json"}}).then((function(t){e.preventDefault(),localStorage.setItem("token",t.data.token),localStorage.setItem("email",d),E("/Connecte")})).catch((function(e){alert("error")}))}},r.a.createElement("h3",null,"CONNEXION"),r.a.createElement("div",{className:"form-sign"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"Email"},"Email"),r.a.createElement("input",{type:"email",name:"Email",id:"Email",placeholder:"Email",value:d,onChange:function(e){return p(e.target.value)},required:!0})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"userPassword"},"Mot de passe"),r.a.createElement("input",{type:"password",name:"userPassword",id:"userPassword",value:n,onChange:function(e){return o(e.target.value)},placeholder:"Password",required:!0})),r.a.createElement("div",{className:"box-b"},r.a.createElement("button",{type:"submit"},"Se connecter"),r.a.createElement(l.b,{className:"button",to:"/Inscrire"},"S'inscrire ?"),r.a.createElement("div",{id:"signUpDiv"}))))))};var d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),d=m[0],p=m[1],E=Object(u.m)();return r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box-signin"},r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),s.a.post("https://backpwa.onrender.com/creation",{email:d,password:n},{header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8;application/json"}}).then((function(t){e.preventDefault(),localStorage.setItem("token",t.data.token),localStorage.setItem("email",d),alert("vous etes connectes"),E("/Connecte")})).catch((function(e){alert("error")}))}},r.a.createElement("h3",null,"Inscription"),r.a.createElement("div",{className:"form-sign"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"Email"},"Email"),r.a.createElement("input",{type:"email",name:"Email",id:"Email",placeholder:"Email",value:d,onChange:function(e){return p(e.target.value)},required:!0})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"userPassword"},"Mot de passe"),r.a.createElement("input",{type:"password",name:"userPassword",id:"userPassword",value:n,onChange:function(e){return o(e.target.value)},placeholder:"Password",required:!0})),r.a.createElement("div",{className:"box-b"},r.a.createElement("button",{type:"submit"},"S'inscrire"),r.a.createElement(l.b,{className:"button",to:"/Connexion"},"Se connecter ?"),r.a.createElement("div",{id:"signUpDiv"}))))))};var p=function(){var e=Object(u.m)();return localStorage.getItem("token")?r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box-signin"},r.a.createElement("form",{className:"container"},r.a.createElement("h3",null,"HOME"),r.a.createElement("div",{className:"form-sign"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("button",{onClick:function(){return e("/AddBonPlan")}},"Ajouter un bon plan")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("button",{onClick:function(){return e("/MesBonPlan")}},"Mes bon plan")),r.a.createElement("h3",null,"Les Bons Plans"))))):r.a.createElement("div",null,"NON Connect\xe9")};var E=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),s=l[0],m=l[1],d=Object(a.useState)(""),p=Object(i.a)(d,2),E=p[0],f=p[1],b=Object(a.useState)(""),v=Object(i.a)(b,2),h=v[0],g=v[1];return Object(u.m)(),localStorage.getItem("token")?r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box-signin"},r.a.createElement("form",{className:"container",onSubmit:function(e){}},r.a.createElement("h3",null,"Ajouter un Bon Plan"),r.a.createElement("div",{className:"form-sign"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"Name"},"Name"),r.a.createElement("input",{type:"Name",name:"Name",id:"Name",placeholder:"Name",value:n,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"userdescription"},"Description"),r.a.createElement("input",{type:"description",name:"userdescription",id:"userdescription",value:s,onChange:function(e){return m(e.target.value)},placeholder:"Description",required:!0})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"Prix"},"Prix"),r.a.createElement("input",{type:"Prix",name:"Prix",id:"Prix",placeholder:"Prix",value:E,onChange:function(e){return f(e.target.value)},required:!0})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("label",{htmlFor:"userPromotion"},"Promotion"),r.a.createElement("input",{type:"Promotion",name:"userPromotion",id:"userPromotion",value:h,onChange:function(e){return g(e.target.value)},placeholder:"Promotion",required:!0})),r.a.createElement("div",{className:"box-b"},r.a.createElement("button",{type:"submit"},"Ajouter un Bon Plan")))))):r.a.createElement("div",null,"NON Connect\xe9")},f=n(33),b=n(34);var v=function(){Object(u.m)();var e=Object(a.useState)([{image:"https://media.conforama.fr/m/export/Medias/700000/60000/6000/300/60/D_766364_A.jpg",id:"",name:"Bon Plan",prix:"120\u20ac",promotion:"-10%"},{image:"https://media.conforama.fr/m/export/Medias/700000/60000/6000/300/60/D_766364_A.jpg",id:"",name:"Bon Plan",prix:"120\u20ac",promotion:"-10%"}]),t=Object(i.a)(e,2),n=t[0];return t[1],localStorage.getItem("token")?r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"box-signin"},r.a.createElement("form",{className:"container",onSubmit:function(e){}},r.a.createElement("h3",null,"Mes Bon Plan"),n.length>0?n.map((function(e){return r.a.createElement("div",{className:"container-tb",key:e.id,style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat"}},r.a.createElement(f.a,null),r.a.createElement(b.a,null),r.a.createElement("div",{className:"ff"},r.a.createElement("div",{className:"box-separ"},r.a.createElement("h3",null,e.name)),r.a.createElement("span",null,e.prix)),r.a.createElement("div",null,r.a.createElement("span",null,e.promotion)))})):r.a.createElement("p",null,"Aucuns bons plans trouv\xe9e")))):r.a.createElement("div",null,"NON Connect\xe9")},h=n(5),g=n.n(h),N=n(8),S="https://backpwa.onrender.com";var x={post:function(e,t){return console.log(t),fetch("".concat(S).concat(e),{credentials:"omit",headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},body:JSON.stringify(t),method:"POST",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e}))},get:function(e){return fetch("".concat(S).concat(e),{credentials:"omit",headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e}))}},j="BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";function O(){return(O=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return t=e.sent,e.next=5,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:j});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w="serviceWorker"in navigator&&"PushManager"in window;function y(){var e=Object(a.useState)(Notification.permission),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(a.useState)(),m=Object(i.a)(u,2),d=m[0],p=m[1],E=Object(a.useState)(null),f=Object(i.a)(E,2),b=f[0],v=f[1],h=Object(a.useState)(!0),S=Object(i.a)(h,2),j=S[0],y=S[1];Object(a.useEffect)((function(){w&&(y(!0),v(!1),navigator.serviceWorker.register("/sw.js").then((function(){y(!1)})))}),[]),Object(a.useEffect)((function(){y(!0),v(!1),function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription()})).then((function(e){return e}));case 2:t=e.sent,s(t),y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);return{onClickAskUserPermission:function(){y(!0),v(!1),function(){return O.apply(this,arguments)}().then((function(e){r(e),"granted"!==e&&v({name:"Consent denied",message:"You denied the consent to receive notifications",code:0}),y(!1)}))},onClickSusbribeToPushNotification:function(){y(!0),v(!1),function(){return k.apply(this,arguments)}().then((function(e){s(e),y(!1)})).catch((function(e){console.error("Couldn't create the notification subscription",e,"name:",e.name,"message:",e.message,"code:",e.code),v(e),y(!1)}))},onClickSendSubscriptionToPushServer:function(){y(!0),v(!1),x.post("/subscription",l).then((function(e){p(e.id),y(!1)})).catch((function(e){y(!1),v(e)}))},pushServerSubscriptionId:d,onClickSendNotification:function(){var e=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),v(!1),e.next=4,x.post("/subscription/".concat(d),{title:"jihad"}).catch((function(e){y(!1),v(e)}));case 4:y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),userConsent:n,pushNotificationSupported:w,userSubscription:l,error:b,loading:j}}var C=function(e){return e.loading?r.a.createElement("div",{className:"app-loader"},"Please wait, we are loading something..."):null},P=function(e){var t=e.error;return t?r.a.createElement("section",{className:"app-error"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Error message : ",t.message),r.a.createElement("p",null,"Error code : ",t.code)):null};function B(){var e=y(),t=e.userConsent,n=e.pushNotificationSupported,a=e.userSubscription,o=e.onClickAskUserPermission,c=e.onClickSusbribeToPushNotification,i=e.onClickSendSubscriptionToPushServer,l=e.pushServerSubscriptionId,s=e.onClickSendNotification,u=e.error,m=e.loading,d="granted"===t;return r.a.createElement("main",null,r.a.createElement(C,{loading:m}),r.a.createElement("p",null,"Push notification are ",!n&&"NOT"," supported by your device."),r.a.createElement("p",null,"User consent to recevie push notificaitons is ",r.a.createElement("strong",null,t),"."),r.a.createElement(P,{error:u}),r.a.createElement("button",{disabled:!n||d,onClick:o},d?"Consent granted":" Ask user permission"),r.a.createElement("button",{disabled:!n||!d||a,onClick:c},a?"Push subscription created":"Create Notification subscription"),r.a.createElement("button",{disabled:!a||l,onClick:i},l?"Subscrption sent to the server":"Send subscription to push server"),l&&r.a.createElement("div",null,r.a.createElement("p",null,"The server accepted the push subscrption!"),r.a.createElement("button",{onClick:s},"Send a notification")),r.a.createElement("section",null,r.a.createElement("h4",null,"Your notification subscription details"),r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(a,null," ")))))}function I(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React Web Push notification demo"),r.a.createElement(B,null))}function D(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"}},r.a.createElement(l.b,{to:"/Inscrire",style:{border:"solid",borderRadius:"10px",textDecoration:"none",color:"grey",padding:"1rem"}},"Inscription"),r.a.createElement(l.b,{to:"/Connexion",style:{border:"solid",borderRadius:"10px",color:"grey",textDecoration:"none",padding:"1rem"}},"Connexion"),r.a.createElement(l.b,{to:"/Notification",style:{border:"solid",borderRadius:"10px",color:"grey",textDecoration:"none",padding:"1rem"}},"Notification"))}var A=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(D,null)}),r.a.createElement(u.a,{path:"Connexion",element:r.a.createElement(m,null)}),r.a.createElement(u.a,{path:"Inscrire",element:r.a.createElement(d,null)}),r.a.createElement(u.a,{path:"Connecte",element:r.a.createElement(p,null)}),r.a.createElement(u.a,{path:"AddBonPlan",element:r.a.createElement(E,null)}),r.a.createElement(u.a,{path:"MesBonPlan",element:r.a.createElement(v,null)}),r.a.createElement(u.a,{path:"Notification",element:r.a.createElement(I,null)}))};"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("Service Worker registered!")})).catch((function(e){console.error("Service Worker registration failed:",e)}))})),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(A,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.13b2843c.chunk.js.map