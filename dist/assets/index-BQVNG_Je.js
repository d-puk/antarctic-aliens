var U=Object.defineProperty;var V=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>V(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function i(){}function R(t){return t()}function z(){return Object.create(null)}function N(t){t.forEach(R)}function J(t){return typeof t=="function"}function w(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function k(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function O(){return G(" ")}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Q(t){return Array.from(t.childNodes)}let j;function I(t){j=t}const S=[],W=[];let E=[];const D=[];function P(t){E.push(t)}const H=new Set;let A=0;function X(){if(A!==0)return;const t=j;do{try{for(;A<S.length;){const e=S[A];A++,I(e),Y(e.$$)}}catch(e){throw S.length=0,A=0,e}for(I(null),S.length=0,A=0;W.length;)W.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];H.has(n)||(H.add(n),n())}E.length=0}while(S.length);for(;D.length;)D.pop()();H.clear(),I(t)}function Y(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function ee(t){const e=[],n=[];E.forEach(a=>t.indexOf(a)===-1?e.push(a):n.push(a)),n.forEach(a=>a()),E=e}const B=new Set;let te;function p(t,e){t&&t.i&&(B.delete(t),t.i(e))}function T(t,e,n,a){if(t&&t.o){if(B.has(t))return;B.add(t),te.c.push(()=>{B.delete(t)}),t.o(e)}}function q(t){t&&t.c()}function g(t,e,n){const{fragment:a,after_update:s}=t.$$;a&&a.m(e,n),P(()=>{const r=t.$$.on_mount.map(R).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),s.forEach(P)}function v(t,e){const n=t.$$;n.fragment!==null&&(ee(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function y(t,e,n,a,s,r,l=null,d=[-1]){const m=j;I(t);const o=t.$$={fragment:null,ctx:[],props:r,update:i,not_equal:s,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:z(),dirty:d,skip_bound:!1,root:e.target||m.$$.root};if(l&&l(o.root),o.ctx=[],o.update(),N(o.before_update),o.fragment=a?a(o.ctx):!1,e.target){if(e.hydrate){const M=Q(e.target);o.fragment&&o.fragment.l(M),M.forEach(f)}else o.fragment&&o.fragment.c();e.intro&&p(t.$$.fragment),g(t,e.target,e.anchor),X()}I(m)}class ${constructor(){C(this,"$$");C(this,"$$set")}$destroy(){v(this,1),this.$destroy=i}$on(e,n){if(!J(n))return i;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);function se(t){let e;return{c(){e=h("section"),e.innerHTML='<img src="src/assets/cover.png" alt="Antarctic hills with some grass between rocks" class="svelte-152z2eq"/> <div class="title svelte-152z2eq"><h1>Antarctic aliens</h1> <h3>By Deepak Ramarao</h3></div>',u(e,"class","cover svelte-152z2eq")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class ae extends ${constructor(e){super(),y(this,e,null,se,w,{})}}function re(t){let e;return{c(){e=h("section"),e.innerHTML='<hr class="svelte-18v3x3x"/> <div class="text-column"><p>So far, there haven’t been many successful colonisations by the aliens on the mainland. That’s largely due to the severity of the cold. But foreign species will always be dangerous in this part of the world, and especially so.</p> <p>Species in the Antarctic ecosystem evolved to keep up with the extreme climate. Competition or defence were not the first biological priorities in the evolutionary timeline. Whatever life exists, does so on the sub-Antarctic islands or on the ice-free fringes of the main continent.</p> <p>As the climate warms and human presence increases, it’s been getting easier for plants, animals and insects to get to Antarctica, and establish a presence. This could alter the delicate ecosystem forever, sterilising the last known wilderness on the planet.</p></div>',u(e,"class","end svelte-18v3x3x")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class ie extends ${constructor(e){super(),y(this,e,null,re,w,{})}}function oe(t){let e;return{c(){e=h("section"),e.innerHTML='<div class="text-column"><p>On the icy hills and coasts of the Antarctic peninsula, you will find all three of the continent’s flowering plants. <i>Deschampsia antarctica</i>, or the Antarctic hair grass, grows in small tufts, as the name suggests. <i>Colobanthus quitensis</i>, or the Antarctic pearlwort, could easily be mistaken for moss. <i>Poa annua</i>, or annual meadow grass, grows silver-pink flowers.</p></div> <img src="src/assets/case-study-1.png" alt="A food web of plants in Antarctica, superimposed against a map of the Antarctic peninsula" class="svelte-1nbpp2q"/> <div class="text-column"><p>That last one, is the same kind of grass that are used on golf courses.</p> <p>It’s what scientists would call an <span class="key svelte-1nbpp2q">◇ invasive</span> species, ‘aliens’ who are not originally from the <span class="key svelte-1nbpp2q">○ native</span> ecosystem. It now makes up for a third of Antarctica’s grasses, and is set to outperform the other two.</p> <p>Invasives have always posed a <span class="dashed svelte-1nbpp2q">threat</span> to natives for a number of reasons. They can compete for resources and wipe out native flora and fauna. They could carry pathogens that natives have not built defences for. More directly, they could be predators who have come upon easy prey.</p> <p>For the Antarctic natives, this is danger is heavily underlined. But before we understand why, we might ask how they get there in the first place.</p></div>',u(e,"class","intro svelte-1nbpp2q")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class ce extends ${constructor(e){super(),y(this,e,null,oe,w,{})}}function le(t){let e;return{c(){e=h("section"),e.innerHTML='<div class="text-column"><h2>Almost all invasive species are hitchhikers</h2> <p>There is no denying that human exploration has, intentionally or unintentionally, brought more aliens to the South. Take a look at this chart to see how species were introduced to the region.</p></div> <iframe width="100%" height="1080" frameborder="0" src="https://observablehq.com/embed/@dpuk/antarctic-aliens@1302?cells=timeline" title="Timeline chart"></iframe> <div class="text-column"><p>While species have been known to wander across lands and seas naturally, the rate at which they do this is much slower.</p></div> <iframe width="100%" height="342" frameborder="0" src="https://observablehq.com/embed/@dpuk/antarctic-aliens@1312?cells=establishment" title="Establishment chart"></iframe> <div class="text-column"><p>As explorers ventured further south, they took passengers of all kinds with them. Mice, rats, cats, ponies and wolves were some of the many aliens that made an appearance in the region. And some of these stayed to wreak all sorts of havoc on the local ecologies.</p> <p>From a first glance at this chart, it might be hard to understand why aliens would pose a problem if only a few are finally classified as invasive.</p> <p>But, as we’ve seen across the world, and on many of these islands..</p></div>',u(e,"class","section-1 svelte-17msydo")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class de extends ${constructor(e){super(),y(this,e,null,le,w,{})}}function he(t){let e;return{c(){e=h("section"),e.innerHTML='<div class="text-column"><h2>It only takes a few</h2> <p>Somewhere between the coasts of New Zealand and Antarctica, lies a small island named Macquarie. This was one of the sites of a sealing and whaling trade, where hunters stopped to gather their bounty. They brought rats, cats and rabbits with them, much to the demise of the native birds and vegetation.</p> <p>The cats preyed on mice, rats, rabbits and the seabirds, many of whom were used to breeding on land without any true predators to guard against. The rabbits fed on the tussock grass and mega-herbs, which caused wide scale erosion. This meant the breeding birds lost more of their habitat, becoming easier prey for the cats.</p></div> <img src="src/assets/case-study-2.png" alt="A food web of animals on Macquarie Islands, superimposed against a map of the island" class="svelte-qnm84p"/> <div class="text-column"><p>Two bird species were driven to <span class="key svelte-qnm84p">⍉ extinction</span> and many more were endangered. As scientists began to conserve the island and end the seal trade, a rabbit eradication program, started in the 1960s, was somewhat successful. As rabbit numbers dwindled because of an introduced virus, the cats turned once more to the birds. Then the cats were hunted, starting in the 1980s. This brought the return of the rabbits, which meant more leaf cover lost.</p> <p>The island was finally declared pest free in 2014, two centuries and more than $24m dollars later.</p> <p>These are lessons on how the most subtle interventions could have the most drastic and unseen outcomes. But that might not be immediately apparent if we look at where most of these introductions happen.</p></div> <iframe width="100%" height="944" frameborder="0" src="https://observablehq.com/embed/@dpuk/antarctic-aliens@1314?cells=viewof+rotate%2CbubbleMap" title="Bubble map"></iframe> <div class="text-column"><p>While cats and other animals cannot cope with polar extremities, the warming climate means that smaller marine animals, plants and microbes can start to find a home on the continent. If we can learn anything from invasion cases around the world (and from the planet’s history), it’s that given the right conditions, life can take root anywhere.</p></div>',u(e,"class","section-2 svelte-qnm84p")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class ue extends ${constructor(e){super(),y(this,e,null,he,w,{})}}function fe(t){let e;return{c(){e=h("section"),e.innerHTML='<div class="text-column"><h2>Antarctica has been getting milder</h2> <p>There’s not a lot more that can be done to prevent invasions, other than being more careful.</p> <p>Just in the last two decades, there have been alarming findings from the polar region.</p></div> <img src="src/assets/findings.png" alt="Findings from Antarctica" class="svelte-4cfa9s"/> <div class="text-column"><p>All scientists on the continent understand the value of protecting the ecosystem they’re studying. Once an invasive species is detected, they take stringent lockdown and control measures to eradicate them. But control and eradication could also take a lot of effort, time and money.</p> <p>Take a look at when the invasive species were eradicated after their date of observation.</p></div> <iframe width="100%" height="401" frameborder="0" src="https://observablehq.com/embed/@dpuk/antarctic-aliens@1347?cells=eradicationTimeline" title="Eradication timeline"></iframe> <div class="text-column"><p>Even after sustained efforts, there is no guarantee that eradication is definite. It takes careful monitoring and control to make sure they don’t make a reappearance.</p></div>',u(e,"class","section-3 svelte-4cfa9s")},m(n,a){b(n,e,a)},p:i,i,o:i,d(n){n&&f(e)}}}class me extends ${constructor(e){super(),y(this,e,null,fe,w,{})}}function pe(t){let e,n,a,s,r,l,d,m,o,M,_,F,x,L;return n=new ae({}),r=new ce({}),d=new de({}),o=new ue({}),_=new me({}),x=new ie({}),{c(){e=h("main"),q(n.$$.fragment),a=O(),s=h("article"),q(r.$$.fragment),l=O(),q(d.$$.fragment),m=O(),q(o.$$.fragment),M=O(),q(_.$$.fragment),F=O(),q(x.$$.fragment),u(s,"class","svelte-1vx3hmf"),u(e,"class","svelte-1vx3hmf")},m(c,K){b(c,e,K),g(n,e,null),k(e,a),k(e,s),g(r,s,null),k(s,l),g(d,s,null),k(s,m),g(o,s,null),k(s,M),g(_,s,null),k(s,F),g(x,s,null),L=!0},p:i,i(c){L||(p(n.$$.fragment,c),p(r.$$.fragment,c),p(d.$$.fragment,c),p(o.$$.fragment,c),p(_.$$.fragment,c),p(x.$$.fragment,c),L=!0)},o(c){T(n.$$.fragment,c),T(r.$$.fragment,c),T(d.$$.fragment,c),T(o.$$.fragment,c),T(_.$$.fragment,c),T(x.$$.fragment,c),L=!1},d(c){c&&f(e),v(n),v(r),v(d),v(o),v(_),v(x)}}}class ge extends ${constructor(e){super(),y(this,e,null,pe,w,{})}}new ge({target:document.getElementById("app")});
