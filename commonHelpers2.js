import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),e=document.querySelector('input[name="delay"]'),r=document.querySelector('input[name="state"][value="fulfilled"]'),a=document.querySelector('input[name="state"][value="rejected"]');s.addEventListener("submit",t=>{t.preventDefault(),setTimeout(()=>{r.checked?Promise.resolve().then(()=>{o.show({message:`Fulfilled promise in ${e.value}ms`,position:"topCenter",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",backgroundColor:"rgba(89, 161, 13, 1)",close:!1,timeout:1500})}):a.checked&&Promise.reject().catch(()=>o.show({message:`Rejected promise in ${e.value}ms`,position:"topCenter",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",backgroundColor:"rgba(181, 27, 27, 1)",close:!1,timeout:1500}))},e.value)});
//# sourceMappingURL=commonHelpers2.js.map
