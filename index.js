import{a as P,i as g,S as $}from"./assets/vendor-Cev8G-yF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const x="47339247-cdcac9f8981a2af5215025f92",A="https://pixabay.com/api/";async function w(t=1,e){const{data:s}=await P(A,{params:{key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return s}function O(t){return t.map(({webformatURL:e,largeImageURL:s,tags:l,likes:o,views:r,comments:i,downloads:I})=>`
  <div class="photo__card">
    <a class="gallery__link" 
    href="${s}"
  >
  <img
    src="${e}"
    alt="${l}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${d("Likes",o)}
          ${d("Views",r)}
          ${d("Comments",i)}
          ${d("Downloads",I)}
        </ul>
</div> 
`).join("")}function d(t,e){return`
    <li class="list__info">
      <h3>${t}</h3>
      <p>${e}</p>
    </li>
  `}g.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});function F(){g.show({message:"Please enter a value.",backgroundColor:"#f2ff00",messageColor:"#2e2f42"})}function L(t){g.show({message:t,messageColor:"#FFF",backgroundColor:"#EF4040",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24"})}const b=document.querySelector("#loader"),S=document.querySelector("#loaderShow");function H(){b.classList.remove("hidden__css")}function k(){b.classList.add("hidden__css")}function B(){S.classList.remove("hidden__css")}function p(){S.classList.add("hidden__css")}const z=document.querySelector("#myForm"),u=document.querySelector("#gallery"),c=document.querySelector("#buttonLoadMore"),v=document.querySelector(".show__the__end"),_=document.querySelector(".button__search");let D=new $(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});z.addEventListener("submit",R);c.addEventListener("click",T);let n=0,N=15,y=0,f=0,h="",E;async function R(t){if(t.preventDefault(),u.innerHTML="",h=t.target.elements.data_input.value.trim(),n=1,f=0,m(),h.length===0){m(),F(),a();return}try{_.disabled=!0,H();const e=await w(n,h);W(e,e.hits);const s=e.hits;M(e),y=e.totalHits,f=Math.ceil(y/N),n++,q(s),_.disabled=!1,u.firstElementChild&&(E=u.firstElementChild.getBoundingClientRect().height),f>1&&C()}catch(e){L(e.message),m(),a()}finally{t.target.reset(),k()}}async function T(){a(),c.disabled=!0;try{B();const t=await w(n,h);if(M(t),p(),q(t.hits),window.scrollBy({top:E*2,behavior:"smooth"}),C(),n++,n>f){a(),U();return}}catch(t){L(t.message),m(),a(),p()}finally{c.disabled=!1}}function M(t){const{hits:e,totalHits:s}=t;if(s===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");if(!e||e.length===0)throw new Error("Unexpected error: No results found in the current page of data!")}function q(t){const e=O(t);u.insertAdjacentHTML("beforeend",e),D.refresh()}function W(t,e){if(!t||!Array.isArray(e))throw new Error("Invalid data structure from API")}function C(){c.classList.remove("button__none")}function a(){c.classList.add("button__none")}function U(){v.classList.remove("show__the__end__none")}function m(){v.classList.add("show__the__end__none")}
//# sourceMappingURL=index.js.map
