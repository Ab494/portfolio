exports.id=940,exports.ids=[940],exports.modules={5545:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3724,23)),Promise.resolve().then(r.t.bind(r,5365,23)),Promise.resolve().then(r.t.bind(r,4900,23)),Promise.resolve().then(r.t.bind(r,4714,23)),Promise.resolve().then(r.t.bind(r,5392,23)),Promise.resolve().then(r.t.bind(r,8898,23))},1673:(e,t,r)=>{Promise.resolve().then(r.bind(r,5768))},5768:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ServiceWorkerRegistration:()=>ServiceWorkerRegistration});var o=r(9885);function ServiceWorkerRegistration(){(0,o.useEffect)(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registered: ",e),e.addEventListener("updatefound",()=>{let t=e.installing;t&&t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&showUpdatePrompt()})})}).catch(e=>{console.log("SW registration failed: ",e)})}),"Notification"in window&&"serviceWorker"in navigator&&Notification.requestPermission().then(e=>{"granted"===e&&console.log("Notification permission granted")})},[]);let showUpdatePrompt=()=>{let e=document.createElement("div");e.innerHTML=`
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3B82F6;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: system-ui, sans-serif;
        max-width: 300px;
      ">
        <p style="margin: 0 0 0.5rem 0; font-weight: 600;">Update Available!</p>
        <p style="margin: 0 0 1rem 0; font-size: 0.9rem;">New version of the portfolio is ready.</p>
        <div style="display: flex; gap: 0.5rem;">
          <button onclick="window.location.reload()" style="
            background: white;
            color: #3B82F6;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
          ">Update Now</button>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: transparent;
            color: white;
            border: 1px solid white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          ">Later</button>
        </div>
      </div>
    `,document.body.appendChild(e)};return null}},1937:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>RootLayout,metadata:()=>p,viewport:()=>m});var o=r(4656),i=r(177),n=r.n(i);r(5023);var s=r(5153);let a=(0,s.createProxy)(String.raw`/home/vanso/Documents/projects/portfolio/src/components/service-worker-registration.tsx`),{__esModule:l,$$typeof:d}=a;a.default;let c=(0,s.createProxy)(String.raw`/home/vanso/Documents/projects/portfolio/src/components/service-worker-registration.tsx#ServiceWorkerRegistration`),p={title:"Evans Kipngeno Cheruiyot - Full-Stack Developer",description:"Full-Stack Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Python backend development (Django, DRF, Flask).",manifest:"/manifest.json",openGraph:{type:"website",siteName:"Evans Kipngeno Cheruiyot",title:"Evans Kipngeno Cheruiyot - Full-Stack Developer",description:"Full-Stack Developer specializing in MERN Stack and Python backend development"},twitter:{card:"summary_large_image",title:"Evans Kipngeno Cheruiyot - Full-Stack Developer",description:"Full-Stack Developer specializing in MERN Stack and Python backend development"}},m={width:"device-width",initialScale:1,maximumScale:5,themeColor:"#3B82F6"};function RootLayout({children:e}){return o.jsx("html",{lang:"en",children:(0,o.jsxs)("body",{className:n().className,children:[e,o.jsx(c,{})]})})}},5023:()=>{}};