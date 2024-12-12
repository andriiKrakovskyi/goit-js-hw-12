import{a as $,i as _,S as x}from"./assets/vendor-Cev8G-yF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const A="47339247-cdcac9f8981a2af5215025f92",O="https://pixabay.com/api/";async function L(t=1,e){const{data:s}=await $(O,{params:{key:A,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return console.log(s),s}function F(t){return t.map(({webformatURL:e,largeImageURL:s,tags:l,likes:o,views:r,comments:a,downloads:P})=>`
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
          ${d("Comments",a)}
          ${d("Downloads",P)}
        </ul>
</div> 
`).join("")}function d(t,e){return`
    <li class="list__info">
      <h3>${t}</h3>
      <p>${e}</p>
    </li>
  `}_.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});function H(){_.show({message:"Please enter a value.",backgroundColor:"#f2ff00",messageColor:"#2e2f42"})}function b(t){_.show({message:t,messageColor:"#FFF",backgroundColor:"#EF4040",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24"})}const S=document.querySelector("#loader"),v=document.querySelector("#loaderShow");function k(){S.classList.remove("hidden__css")}function B(){S.classList.add("hidden__css")}function z(){v.classList.remove("hidden__css")}function y(){v.classList.add("hidden__css")}const D=document.querySelector("#myForm"),u=document.querySelector("#gallery"),c=document.querySelector("#buttonLoadMore"),E=document.querySelector(".show__the__end"),g=document.querySelector(".button__search");let N=new x(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});D.addEventListener("submit",R);c.addEventListener("click",T);let n=0,w=15,p=0,f=0,h="",M;async function R(t){if(t.preventDefault(),u.innerHTML="",h=t.target.elements.data_input.value.trim(),n=1,f=0,m(),h.length===0){m(),H(),i();return}try{g.disabled=!0,k();const e=await L(n,h);W(e,e.hits);const s=e.hits;q(e),p=e.totalHits,f=Math.ceil(p/w),n++,C(s),g.disabled=!1,u.firstElementChild&&(M=u.firstElementChild.getBoundingClientRect().height),p<w&&i(),f>1&&I()}catch(e){b(e.message),m(),i(),g.disabled=!1}finally{t.target.reset(),B()}}async function T(){i(),c.disabled=!0;try{z();const t=await L(n,h);if(q(t),y(),C(t.hits),window.scrollBy({top:M*2,behavior:"smooth"}),I(),n++,n>f){i(),U();return}}catch(t){b(t.message),m(),i(),y()}finally{c.disabled=!1}}function q(t){const{hits:e,totalHits:s}=t;if(s===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");if(!e||e.length===0)throw new Error("Unexpected error: No results found in the current page of data!")}function C(t){const e=F(t);u.insertAdjacentHTML("beforeend",e),N.refresh()}function W(t,e){if(!t||!Array.isArray(e))throw new Error("Invalid data structure from API")}function I(){c.classList.remove("button__none")}function i(){c.classList.add("button__none")}function U(){E.classList.remove("show__the__end__none")}function m(){E.classList.add("show__the__end__none")}
//# sourceMappingURL=index.js.map
