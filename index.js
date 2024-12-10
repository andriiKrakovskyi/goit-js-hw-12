import{a as q,i as g,S as I}from"./assets/vendor-Cev8G-yF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const $="47339247-cdcac9f8981a2af5215025f92",A="https://pixabay.com/api/";async function _(e=1,t){const{data:s}=await q(A,{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});return console.log(s),s}function C(e){return e.map(({webformatURL:t,largeImageURL:s,tags:l,likes:o,views:r,comments:i,downloads:P})=>`
  <div class="photo__card">
    <a class="gallery__link" 
    href="${s}"
  >
  <img
    src="${t}"
    alt="${l}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${d("Likes",o)}
          ${d("Views",r)}
          ${d("Comments",i)}
          ${d("Downloads",P)}
        </ul>
</div> 
`).join("")}function d(e,t){return`
    <li class="list__info">
      <h3>${e}</h3>
      <p>${t}</p>
    </li>
  `}g.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});function O(){g.show({message:"Please enter a value.",backgroundColor:"#f2ff00",messageColor:"#2e2f42"})}function y(e){g.show({message:e,messageColor:"#FFF",backgroundColor:"#EF4040",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24"})}const w=document.querySelector("#loader"),L=document.querySelector("#loaderShow");function x(){w.classList.remove("hidden__css")}function F(){w.classList.add("hidden__css")}function k(){L.classList.remove("hidden__css")}function B(){L.classList.add("hidden__css")}const H=document.querySelector("#myForm"),f=document.querySelector("#gallery"),c=document.querySelector("#buttonLoadMore"),b=document.querySelector(".show__the__end");let z=new I(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});H.addEventListener("submit",R);c.addEventListener("click",T);let n=0,D=15,p=0,h,u="",S;async function R(e){if(e.preventDefault(),f.innerHTML="",n=1,u=e.target.elements.data_input.value.trim(),u.length===0){m(),O(),a();return}try{x();const t=await _(n,u);W(t,t.hits);const s=t.hits;v(s),p=t.totalHits,h=Math.ceil(p/D),n++,E(s),S=f.firstElementChild.getBoundingClientRect().height,n<=h&&M()}catch(t){y(t.message),m(),a()}finally{e.target.reset(),F()}}async function T(){if(console.log("totalPages",h-n),h<=n){a(),N();return}a(),c.disabled=!0;try{k();const e=await _(n,u);v(e.hits),B(),E(e.hits),window.scrollBy({top:S*2,behavior:"smooth"}),M(),n++}catch(e){y(e.message),m(),a()}finally{c.disabled=!1}}function v(e){if(e.length===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!")}function E(e){const t=C(e);f.insertAdjacentHTML("beforeend",t),z.refresh()}function W(e,t){if(!e||!Array.isArray(t))throw new Error("Invalid data structure from API")}function M(){c.classList.remove("button__none")}function a(){c.classList.add("button__none")}function N(){b.classList.remove("show__the__end__none")}function m(){b.classList.add("show__the__end__none")}
//# sourceMappingURL=index.js.map
