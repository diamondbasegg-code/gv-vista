"use strict";

const els=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>ob.observe(e))}else{els.forEach(e=>e.classList.add('show'))}
