import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}};function f(e){const d=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:l,seconds:u}}const n=e=>String(e).padStart(2,"0"),r=document.querySelector("#datetime-picker"),s=document.querySelectorAll(".field");let a;const o=document.querySelector("button");o.disabled=!0;const g=e=>{a=e[0],a<=i.defaultDate?(o.disabled=!0,h.show({message:"Please choose a date in the future",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(239, 64, 64, 1)",position:"topCenter",timeout:1500})):o.disabled=!1};o.addEventListener("click",()=>{let e=i.defaultDate;o.disabled=!0,r.disabled=!0,setInterval(()=>{e=new Date;const t=f(a-e);s[0].children[0].textContent=n(t.days),s[1].children[0].textContent=n(t.hours),s[2].children[0].textContent=n(t.minutes),s[3].children[0].textContent=n(t.seconds),t.days===0&&t.hours===0&&t.minutes===0&&t.seconds===0&&(r.disabled=!1)},1e3)});new m(r,{options:i,onClose:g});
//# sourceMappingURL=commonHelpers.js.map
