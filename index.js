import{a as q,i as m,S as I}from"./assets/vendor-Cev8G-yF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const $="47339247-cdcac9f8981a2af5215025f92",A="https://pixabay.com/api/";async function _(e=1,t){const{data:s}=await q(A,{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});return s}function C(e){return e.map(({webformatURL:t,largeImageURL:s,tags:c,likes:o,views:r,comments:i,downloads:P})=>`
  <div class="photo__card">
    <a class="gallery__link" 
    href="${s}"
  >
  <img
    src="${t}"
    alt="${c}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${l("Likes",o)}
          ${l("Views",r)}
          ${l("Comments",i)}
          ${l("Downloads",P)}
        </ul>
</div> 
`).join("")}function l(e,t){return`
    <li class="list__info">
      <h3>${e}</h3>
      <p>${t}</p>
    </li>
  `}m.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});function O(){m.show({message:"Please enter a value.",backgroundColor:"#f2ff00",messageColor:"#2e2f42"})}function y(e){m.show({message:e,messageColor:"#FFF",backgroundColor:"#EF4040",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24"})}const w=document.querySelector("#loader"),L=document.querySelector("#loaderShow");function x(){w.classList.remove("hidden__css")}function F(){w.classList.add("hidden__css")}function k(){L.classList.remove("hidden__css")}function B(){L.classList.add("hidden__css")}const H=document.querySelector("#myForm"),h=document.querySelector("#gallery"),a=document.querySelector("#buttonLoadMore"),b=document.querySelector(".show__the__end");let z=new I(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});H.addEventListener("submit",R);a.addEventListener("click",T);let n=0,D=150,g=0,u,d="",S;async function R(e){if(e.preventDefault(),h.innerHTML="",n=1,d=e.target.elements.data_input.value.trim(),d.length===0){p(),O(),f();return}try{x();const t=await _(n,d);W(t,t.hits);const s=t.hits;v(s),g=t.totalHits,u=Math.ceil(g/D),n++,E(s),S=h.firstElementChild.getBoundingClientRect().height,n<=u&&M()}catch(t){y(t.message),p()}finally{e.target.reset(),F()}}async function T(){if(console.log("totalPages",u-n),u<=n){f(),N();return}f(),a.disabled=!0;try{k();const e=await _(n,d);v(e.hits),B(),E(e.hits),window.scrollBy({top:S*2,behavior:"smooth"}),M(),n++}catch(e){y(e.message)}finally{a.disabled=!1}}function v(e){if(e.length===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!")}function E(e){const t=C(e);h.insertAdjacentHTML("beforeend",t),z.refresh()}function W(e,t){if(!e||!Array.isArray(t))throw new Error("Invalid data structure from API")}function M(){a.classList.remove("button__none")}function f(){a.classList.add("button__none")}function N(){b.classList.remove("show__the__end__none")}function p(){b.classList.add("show__the__end__none")}
//# sourceMappingURL=index.js.map
