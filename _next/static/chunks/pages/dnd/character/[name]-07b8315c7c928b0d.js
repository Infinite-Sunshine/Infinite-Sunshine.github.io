(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{1440:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dnd/character/[name]",function(){return i(5833)}])},5833:function(e,n,i){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.r(n),i.d(n,{__N_SSG:function(){return M},default:function(){return H}});var l=i(5893),t=i(7294),c=i(8641);function d(e){var n=(e-10)/2;return n>0?Math.ceil(n):Math.floor(n)}function x(e){var n=e.character;return(0,l.jsxs)(c.Kq,{spacing:0,children:[(0,l.jsx)(c.X6,{as:"h1",size:"xl",children:n.name}),(0,l.jsxs)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:[n.race&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Race:"})," ",n.race]}),n.gender&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Gender:"})," ",n.gender]}),n.height&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Height:"})," ",n.height]}),n.weight&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Weight:"})," ",n.weight]}),n.size&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Size:"})," ",n.size]}),n.age&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Age:"})," ",n.age]}),n.class&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Class:"})," ",n.class]}),n.alignment&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Alignment:"})," ",n.alignment]}),n.deity&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Deity:"})," ",n.deity]}),n.level&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Level:"})," ",n.level]}),n.affiliations&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Affiliations:"})," ",n.affiliations]})]})]})}function o(e){var n=e.abilities,i=Object.entries(n);return(0,l.jsx)(l.Fragment,{children:i.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Ability Scores"}),(0,l.jsxs)(c.MI,{columns:4,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",p:1,children:"Ability"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Score"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Mod"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Mod + 1/2 LVL"}),i.map((function(e,n){var i=s(e,2),r=i[0],d=i[1],x=d.value,o=d.mod,h=d.modPlusHalf,a=(o>0?"+":"")+o,u=(h>0?"+":"")+h;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:r}),(0,l.jsx)(c.xu,{p:1,children:x}),(0,l.jsx)(c.xu,{p:1,children:a}),(0,l.jsx)(c.xu,{p:1,children:u})]},n)}))]})]})})}function h(e){var n=e.character,i=n.armor,r=void 0===i?{bonus:0,light:!0}:i,s=n.level,t=n.shield,d=void 0===t?{bonus:0}:t,x=n.defenseSpecialMods,o=void 0===x?{ac:[],fort:[],ref:[],will:[]}:x,h=o.ac,a=o.fort,u=o.ref,j=o.will,g=e.abilities,f=g.DEX,m=(void 0===f?{mod:0}:f).mod,p=g.INT,b=(void 0===p?{mod:0}:p).mod,v=g.STR,y=(void 0===v?{mod:0}:v).mod,W=g.CON,P=(void 0===W?{mod:0}:W).mod,w=g.WIS,A=(void 0===w?{mod:0}:w).mod,S=g.CHA,M=(void 0===S?{mod:0}:S).mod,H=10+Math.floor(s/2),I=r.bonus,F=void 0===I?0:I,k=r.light,X=void 0===k||k,z=d.bonus,N=void 0===z?0:z,T=X?b>m?b:m:0,C=y>P?y:P,_=b>m?b:m,D=A>M?A:M,E=h.length?h.reduce((function(e,n){var i=n.bonus;return"number"===typeof i?i+e:e}),0):0,O=a.length?a.reduce((function(e,n){var i=n.bonus;return"number"===typeof i?i+e:e}),0):0,R=u.length?u.reduce((function(e,n){var i=n.bonus;return"number"===typeof i?i+e:e}),0):0,B=j.length?j.reduce((function(e,n){var i=n.bonus;return"number"===typeof i?i+e:e}),0):0,q=H+F+N+T+E,K=H+C+O,L=H+N+_+R,G=H+D+B;return(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Defenses"}),(0,l.jsxs)(c.MI,{columns:2,spacing:0,children:[(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Armor Class (AC)"}),(0,l.jsx)(c.xu,{children:q}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Fortitude"}),(0,l.jsx)(c.xu,{children:K}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Reflex"}),(0,l.jsx)(c.xu,{children:L}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Will"}),(0,l.jsx)(c.xu,{children:G})]})]})}function a(e){var n=e.abilities,i=n.DEX,r=(void 0===i?{modPlusHalf:0}:i).modPlusHalf,s=n.INT,t=(void 0===s?{modPlusHalf:0}:s).modPlusHalf,d=n.STR,x=(void 0===d?{modPlusHalf:0}:d).modPlusHalf,o=n.CON,h=(void 0===o?{modPlusHalf:0}:o).modPlusHalf,a=n.WIS,u=(void 0===a?{modPlusHalf:0}:a).modPlusHalf,j=n.CHA,g=(void 0===j?{modPlusHalf:0}:j).modPlusHalf,f=e.armorPenalty,m=e.skillMods,p=function(e){var n;return(null===m||void 0===m||null===(n=m[e])||void 0===n?void 0:n.length)?m[e].reduce((function(e,n){var i=n.bonus;return"number"===typeof i?i+e:e}),0):0};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Skills"}),(0,l.jsxs)(c.MI,{columns:2,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Bonus"}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Acrobatics"}),(0,l.jsx)(c.xu,{children:r+f+p("Acrobatics")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Arcana"}),(0,l.jsx)(c.xu,{children:t+p("Arcana")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Athletics"}),(0,l.jsx)(c.xu,{children:x+f+p("Athletics")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Bluff"}),(0,l.jsx)(c.xu,{children:g+p("Bluff")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Diplomacy"}),(0,l.jsx)(c.xu,{children:g+p("Diplomacy")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Dungeoneering"}),(0,l.jsx)(c.xu,{children:u+p("Dungeoneering")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Endurance"}),(0,l.jsx)(c.xu,{children:h+f+p("Endurance")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Heal"}),(0,l.jsx)(c.xu,{children:u+p("Heal")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"History"}),(0,l.jsx)(c.xu,{children:t+p("History")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Insight"}),(0,l.jsx)(c.xu,{children:u+p("Insight")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Intimidate"}),(0,l.jsx)(c.xu,{children:g+p("Intimidate")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Nature"}),(0,l.jsx)(c.xu,{children:u+p("Nature")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Perception"}),(0,l.jsx)(c.xu,{children:u+p("Perception")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Religion"}),(0,l.jsx)(c.xu,{children:t+p("Religion")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Stealth"}),(0,l.jsx)(c.xu,{children:r+f+p("Stealth")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Streetwise"}),(0,l.jsx)(c.xu,{children:g+p("Streetwise")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Thievery"}),(0,l.jsx)(c.xu,{children:r+f+p("Thievery")})]})]}),(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Senses"}),(0,l.jsxs)(c.MI,{columns:2,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Bonus"}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Passive Insight"}),(0,l.jsx)(c.xu,{children:10+u+p("Insight")}),(0,l.jsx)(c.xu,{fontWeight:"bold",children:"Passive Perception"}),(0,l.jsx)(c.xu,{children:10+u+p("Perception")})]})]})]})}function u(e){var n=e.power,i=e.type,r="linear-gradient(90deg, rgba(255,235,195,1) 0%, rgba(255,255,255,1) 100%)",s="At Will"===i?"#5a8e61":"Daily"===i?"#3f4241":"#7f1c31";return(0,l.jsxs)(c.xu,{children:[(n.name||n.powerType)&&(0,l.jsxs)(c.kC,{color:"white",bg:s,justifyContent:"space-between",children:[n.name&&(0,l.jsx)(c.xv,{p:1,children:(0,l.jsx)("b",{children:n.name})}),n.classification&&(0,l.jsx)(c.xv,{p:1,children:n.classification})]}),n.flavorText&&(0,l.jsx)(c.xv,{p:1,bg:r,children:(0,l.jsx)("i",{children:n.flavorText})}),(0,l.jsxs)(c.kC,{fontWeight:"bold",children:[(0,l.jsx)(c.xv,{p:1,children:i}),n.keywords&&(0,l.jsx)(c.xv,{p:1,children:n.keywords})]}),(0,l.jsxs)(c.kC,{children:[n.action&&(0,l.jsx)(c.xv,{p:1,children:(0,l.jsx)("b",{children:n.action})}),n.attackType&&(0,l.jsx)(c.xv,{p:1,children:(0,l.jsx)("b",{children:n.attackType})}),n.range&&(0,l.jsx)(c.xv,{p:1,children:n.range})]}),n.trigger&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Trigger:"})," ",n.trigger]}),n.target&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Target:"})," ",n.target]}),n.attack&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Attack:"})," ",n.attack]}),n.hit&&(0,l.jsxs)(c.xv,{p:1,bg:r,children:[(0,l.jsx)("b",{children:"Hit:"})," ",n.hit]}),n.wildMagic&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Wild Magic:"})," ",n.wildMagic]}),n.secondaryTarget&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Secondary Target:"})," ",n.secondaryTarget]}),n.secondaryAttack&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Secondary Attack:"})," ",n.secondaryAttack]}),n.secondaryHit&&(0,l.jsxs)(c.xv,{p:1,bg:r,children:[(0,l.jsx)("b",{children:"Secondary Hit:"})," ",n.secondaryHit]}),n.miss&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Miss:"})," ",n.miss]}),n.effect&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Effect:"})," ",n.effect]}),n.special&&(0,l.jsxs)(c.xv,{p:1,bg:r,children:[(0,l.jsx)("b",{children:"Special:"})," ",n.special]})]})}function j(e){var n=e.powers;return(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Powers"}),(0,l.jsxs)(c.Kq,{mb:4,children:[(0,l.jsx)(c.X6,{as:"h3",size:"md",children:"At-Will"}),(0,l.jsx)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:n.atWill.map((function(e,n){return(0,l.jsx)(u,{power:e,type:"At Will"},n)}))}),(0,l.jsx)(c.X6,{as:"h3",size:"md",children:"Daily"}),(0,l.jsx)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:n.daily.map((function(e,n){return(0,l.jsx)(u,{power:e,type:"Daily"},n)}))}),(0,l.jsx)(c.X6,{as:"h3",size:"md",children:"Encounter"}),(0,l.jsx)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:n.encounter.map((function(e,n){return(0,l.jsx)(u,{power:e,type:"Encounter"},n)}))})]})]})}function g(e){var n=e.feat;return(0,l.jsxs)(c.Kq,{spacing:0,children:[n.name&&(0,l.jsx)(c.xv,{p:1,children:(0,l.jsx)("b",{children:n.name})}),n.benefit&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Benefit:"})," ",n.benefit]})]})}function f(e){var n=e.feats;return(0,l.jsxs)(c.xu,{children:[(0,l.jsx)(c.X6,{as:"h3",size:"md",children:"Feats"}),(0,l.jsx)(c.Kq,{children:(0,l.jsx)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:n.map((function(e,n){return(0,l.jsx)(g,{feat:e},n)}))})})]})}function m(e){var n=e.armorPenalty,i=e.speed,r=(void 0===i?{base:void 0}:i).base,s=n?r+n:r;return(0,l.jsx)(l.Fragment,{children:s&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Speed:"})," ",s]})})}function p(e){var n=e.hitPoints;return(0,l.jsxs)(l.Fragment,{children:[(null===n||void 0===n?void 0:n.current)&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"HP:"})," ",n.current]}),(null===n||void 0===n?void 0:n.max)&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Max HP:"})," ",n.max]})]})}function b(e){var n=e.healingSurges,i=e.hitPoints;return(0,l.jsxs)(l.Fragment,{children:[(null===i||void 0===i?void 0:i.max)&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Healing surge value:"})," ",Math.floor(i.max/4)]}),(null===n||void 0===n?void 0:n.perDay)&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Healing surges per day:"})," ",n.perDay]})]})}function v(e){var n=e.actionPoints;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(c.xv,{p:1,children:[(0,l.jsx)("b",{children:"Action Points:"})," ",n]})})}function y(e){var n=e.languages;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Languages"}),n.map((function(e,n){return(0,l.jsx)(c.xv,{p:1,children:e},n)}))]})})}function W(e){var n=e.items;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Items"}),n.map((function(e,n){return(0,l.jsx)(c.xv,{p:1,children:e},n)}))]})})}function P(e){var n=e.weapons;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Weapons"}),(0,l.jsxs)(c.MI,{columns:3,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",p:1,children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Range"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Damage"}),n.map((function(e,n){var i=e.name,r=e.range,s=e.damage;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:i}),(0,l.jsx)(c.xu,{p:1,children:r}),(0,l.jsx)(c.xu,{p:1,children:s})]},n)}))]})]})})}function w(e){var n=e.armor;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Armor"}),(0,l.jsxs)(c.MI,{columns:4,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",p:1,children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"AC"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Speed Penalty"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Light Armor?"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:n.name}),(0,l.jsx)(c.xu,{p:1,children:n.bonus}),(0,l.jsx)(c.xu,{p:1,children:n.speedPenalty}),(0,l.jsx)(c.xu,{p:1,children:n.light?"Yes":"No"})]})]})})}function A(e){var n=e.shield;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Shield"}),(0,l.jsxs)(c.MI,{columns:2,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",p:1,children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Bonus"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:n.name}),(0,l.jsx)(c.xu,{p:1,children:n.bonus})]})]})})}function S(e){var n=e.currency;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.X6,{as:"h2",size:"lg",children:"Currency"}),(0,l.jsxs)(c.MI,{columns:2,spacing:0,children:[(0,l.jsx)(c.xu,{color:"white",p:1,children:"Name"}),(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:"Amount"}),n.map((function(e,n){var i=e.name,r=e.amount;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(c.xu,{fontWeight:"bold",p:1,children:i}),(0,l.jsx)(c.xu,{p:1,children:r})]},n)}))]})]})})}var M=!0;function H(e){var n,i,r=e.character,t={};(null===r||void 0===r?void 0:r.abilityScores)&&Object.entries(r.abilityScores).forEach((function(e,n){var i,l,c=s(e,2),x=c[0],o=c[1];return t[x]={value:o,mod:d(o),modPlusHalf:(i=o,l=r.level,d(i)+Math.floor(l/2))}}));var u=null!==(i=null===(n=r.armor)||void 0===n?void 0:n.speedPenalty)&&void 0!==i?i:0;return(0,l.jsxs)(c.Kq,{spacing:4,mx:"auto",my:"2rem",maxW:{xl:"80%"},children:[(0,l.jsx)(x,{character:r}),(0,l.jsxs)(c.MI,{columns:{base:1,md:2,xl:4},spacing:2,children:[(0,l.jsx)(p,{hitPoints:r.hitPoints}),(0,l.jsx)(b,{healingSurges:r.healingSurges,hitPoints:r.hitPoints}),(0,l.jsx)(v,{actionPoints:r.actionPoints}),(0,l.jsx)(m,{armorPenalty:u,speed:r.speed})]}),(0,l.jsx)(o,{abilities:t}),(0,l.jsx)(h,{character:r,abilities:t}),(0,l.jsx)(a,{abilities:t,armorPenalty:u,skillMods:r.skillMods}),(0,l.jsx)(j,{powers:r.powers}),(0,l.jsx)(f,{feats:r.feats}),(0,l.jsx)(y,{languages:r.languages}),(0,l.jsx)(P,{weapons:r.weapons}),(0,l.jsx)(w,{armor:r.armor}),(0,l.jsx)(A,{shield:r.shield}),(0,l.jsx)(W,{items:r.items}),(0,l.jsx)(S,{currency:r.currency})]})}}},function(e){e.O(0,[641,774,888,179],(function(){return n=1440,e(e.s=n);var n}));var n=e.O();_N_E=n}]);