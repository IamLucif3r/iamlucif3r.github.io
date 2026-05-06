(function(){
  'use strict';
  var KEY='asy-theme';
  function getPref(){return localStorage.getItem(KEY)||'dark'}
  function set(t){document.documentElement.setAttribute('data-theme',t);localStorage.setItem(KEY,t)}
  set(getPref());

  document.addEventListener('DOMContentLoaded',function(){
    var btn=document.getElementById('theme-toggle');
    if(btn)btn.addEventListener('click',function(){set(getPref()==='dark'?'light':'dark')});

    // Slide-in observer
    var els=document.querySelectorAll('.si');
    if(els.length&&'IntersectionObserver'in window){
      var obs=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');obs.unobserve(e.target)}});
      },{threshold:0.06,rootMargin:'0px 0px -20px 0px'});
      els.forEach(function(el){obs.observe(el)});
    }else{els.forEach(function(el){el.classList.add('v')})}

    // Hero entrance
    var heroEls=document.querySelectorAll('.hero-si');
    setTimeout(function(){heroEls.forEach(function(el,i){setTimeout(function(){el.classList.add('v')},i*140)})},150);

    // --- Glitch Name Swap ---
    var wrap=document.querySelector('.hero__name-wrap');
    var nameEn=wrap?wrap.querySelector('.hero__name--en'):null;
    var nameHi=wrap?wrap.querySelector('.hero__name--hi'):null;
    var glitchR=wrap?wrap.querySelector('.glitch-layer-r'):null;
    var glitchB=wrap?wrap.querySelector('.glitch-layer-b'):null;
    var showingHi=false;

    function doGlitch(){
      if(!wrap)return;
      // Set glitch layer text to current visible name
      var currentText=showingHi?nameHi.textContent:nameEn.textContent;
      if(glitchR)glitchR.textContent=currentText;
      if(glitchB)glitchB.textContent=currentText;

      // Trigger glitch
      wrap.classList.add('glitching');

      // After glitch (180ms), swap names
      setTimeout(function(){
        showingHi=!showingHi;
        wrap.classList.toggle('show-hi',showingHi);
        wrap.classList.remove('glitching');
      },180);
    }

    if(wrap)setInterval(doGlitch,3500);

    // Mobile nav
    var mt=document.getElementById('mobile-nav-toggle'),mn=document.getElementById('mobile-nav'),mc=document.getElementById('mobile-nav-close');
    if(mt&&mn){
      mt.addEventListener('click',function(){mn.classList.add('is-open');document.body.style.overflow='hidden'});
      function close(){mn.classList.remove('is-open');document.body.style.overflow=''}
      if(mc)mc.addEventListener('click',close);
      mn.querySelectorAll('.mobile-nav__link').forEach(function(l){l.addEventListener('click',close)});
      document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mn.classList.contains('is-open'))close()});
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click',function(e){
        var h=this.getAttribute('href');if(h==='#')return;
        var t=document.querySelector(h);
        if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-70,behavior:'smooth'})}
      });
    });
  });
})();