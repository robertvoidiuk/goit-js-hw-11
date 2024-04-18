import{S as p,i as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(r){const s="https://pixabay.com/",i="api/",o=new URLSearchParams({key:"42820907-70ae148b9f4c1259f26bcae54",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function w(r){const s=b(r);u.innerHTML=s,L.refresh()}function b(r){return r.map($).join("")}function $(r){const{webformatURL:s,largeImageURL:i,previewWidth:o,previewHeight:e,views:t,likes:l,comments:f,downloads:g,tags:h}=r;return`<li class="gallery-list">
          <a class="link-gallery" href="${i}">
            <img
            class="gallery-img"
            src="${s}"
            alt="${h}"
            width="${o}"
            height="${e}" />
          </a>
          <ul class="list">
            <li class="gallery-li">
              <h3 class="gallery-item">Likes</h3>
              <p>${l}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Views</h3>
              <p>${t}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Comments</h3>
              <p>${f}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Downloads</h3>
              <p>${g}</p>
            </li>
          </ul>
        </li>`}function n(){u.innerHTML=""}const m=document.querySelector(".loader");function S(r){m.classList.remove("is-hide")}function a(r){m.classList.add("is-hide")}function c(r){const s={message:r,progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040"};d.show(s)}const v=document.querySelector(".search-form");v.addEventListener("submit",E);function E(r){r.preventDefault(),S(),n();const i=r.target.elements.input.value.trim().split(" ").filter(o=>o).join("+");if(!i){n(),c("Error, empty field"),a();return}y(i).then(o=>{o.hits.length===0?(a(),c("Sorry, there are no images matching your search query. Please try again!")):w(o.hits)}).catch(console.log).finally(()=>{a()}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
