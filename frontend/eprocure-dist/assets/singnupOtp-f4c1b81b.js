import{ak as d,r as u,aO as g,aC as y,j as e,aS as x,ap as j,aT as v,bf as w,aH as b,aq as o}from"./index-058e87a5.js";const C=()=>{const r=d(t=>t.auth.signupdata),n=d(t=>t.site.data),[l,f]=u.useState(["","","",""]),i=u.useRef([]),m=(t,a)=>{const s=[...l];s[t]=a.target.value,f(s),a.target.value.length===1&&t<l.length-1&&i.current[t+1].focus()},h=g(),c=y(),p=async t=>{t.preventDefault();const a=l.join("");c(x(!0));try{const s=await j.post(`${v}otp/verify`,{email:r.email,otp:a});s.data.sucess?c(w(r)).then(b).then(()=>{o.success("You registerd Sucessfully, Login To Continue"),h("/login")}):o.error(s.data)}catch(s){o.error(s.message)}c(x(!1))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"relative flex  flex-col overflow-hidden bg-gray-50 py-5",children:e.jsx("div",{className:"relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl",children:e.jsxs("div",{className:"mx-auto flex w-full max-w-md flex-col space-y-16",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center text-center space-y-2",children:[e.jsx("div",{className:"font-semibold text-3xl",children:e.jsx("p",{children:"Email Verification"})}),e.jsx("div",{className:"flex flex-row text-sm font-medium text-gray-400",children:e.jsxs("p",{children:["We have sent a code to your email ",r.email]})})]}),e.jsx("div",{children:e.jsx("form",{onSubmit:p,children:e.jsxs("div",{className:"flex flex-col space-y-16",children:[e.jsx("div",{className:"flex flex-row items-center justify-between mx-auto w-full max-w-xs",children:l.map((t,a)=>e.jsx("div",{className:"w-16 h-16",children:e.jsx("input",{ref:s=>i.current[a]=s,className:"w-full h-full flex items-center justify-center text-center px-4 outline-none rounded-md border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",type:"text",maxLength:1,value:t,onChange:s=>m(a,s),onKeyUp:s=>{s.keyCode===8&&a>0&&i.current[a-1].focus()}})},a))}),e.jsx("div",{className:"flex flex-col space-y-5",children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{type:"submit",style:{background:n==null?void 0:n.primarybg},className:"flex flex-row items-center justify-center text-center w-[50%] border rounded-xl outline-none py-3 border-none text-white text-sm shadow-sm",children:"Verify OTP"})})})]})})})]})})})})};export{C as default};
