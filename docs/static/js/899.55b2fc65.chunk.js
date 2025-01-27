(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[899],{899:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});n(43);var r=n(475),i=n(551),s=n(446),a=n.n(s),o=n(579);const u=t=>{let{data:e}=t;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/my-portfolio").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Credit Card Fraud Detection",subtitle:"Implemented five Machine Learning algorithms from scratch",image:"/images/projects/fraud_detection.jpg",date:"2023-04-12",desc:"Developed custom implementations of five machine learning algorithms for fraud detection and compared their performance with scikit-learn versions. Achieved improved accuracy in some cases by optimizing data sampling methods and fine-tuning hyperparameters, resulting in better fraud detection efficiency and insights."},{title:"Portfolio Management Using Recurrent Neural Networks (RNNs)",subtitle:"Applied LSTMs for time series forecasting and portfolio optimization",link:"https://github.com/your-github/portfolio-management",image:"/images/projects/portfolio_management.png",date:"2024-10-15",desc:"Utilized LSTMs to model stock price movements and analyzed the impact of recurrent connections and memory cells on prediction accuracy. Compared LSTM-based predictions with traditional multi-layer feedforward networks, optimizing portfolio strategies for risk and return trade-offs."},{title:"Gesture Recognition System for Human-Computer Interaction",subtitle:"Developed a gesture-driven interface using machine learning",link:"https://github.com/your-github/gesture-recognition",image:"/images/projects/gesture_recognition.png",date:"2019-02-10",desc:"Built a neural network-based system for hand gesture recognition, addressing challenges like dynamic backgrounds, lighting, and skin color detection. Created a custom dataset of 10 hand gestures and applied ADA BOOST and Naive Bayes for gesture classification, enabling intuitive device control."}],d=()=>(0,o.jsx)(i.A,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.N_,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((t=>(0,o.jsx)(u,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:h,h:a,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=p;var D="$isDayjsObject",S=function(t){return t instanceof k||!(!t||!t[D])},b=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},w=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},j=v;j.l=b,j.i=S,j.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function p(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return j},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return w(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<w(t)},$.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!j.u(e)||e,d=j.p(t),f=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case l:return r?f(1,0):f(31,11);case c:return r?f(1,p):f(0,p+1);case u:var y=this.$locale().weekStart||0,M=(g<y?g+7:g)-y;return f(r?$-M:$+(6-M),p);case o:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=j.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[a]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[j.p(t)]()},$.add=function(r,d){var h,f=this;r=Number(r);var m=j.p(d),g=function(t){var e=w(f);return j.w(e.date(e.date()+Math.round(t*r)),f)};if(m===c)return this.set(c,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===o)return g(1);if(m===u)return g(7);var p=(h={},h[s]=e,h[a]=n,h[i]=t,h)[m]||1,$=this.$d.getTime()+r*p;return j.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return j.s(s%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return o+1;case"MM":return j.s(o+1,2,"0");case"MMM":return l(n.monthsShort,o,c,3);case"MMMM":return l(c,o);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,u,2);case"ddd":return l(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return j.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,h,f){var m,g=this,p=j.p(h),$=w(r),v=($.utcOffset()-this.utcOffset())*e,y=this-$,M=function(){return j.m(g,$)};switch(p){case l:m=M()/12;break;case c:m=M();break;case d:m=M()/3;break;case u:m=(y-v)/6048e5;break;case o:m=(y-v)/864e5;break;case a:m=y/n;break;case s:m=y/e;break;case i:m=y/t;break;default:m=y}return f?m:j.a(m)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return j.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),x=k.prototype;return w.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,k,w),t.$i=!0),w},w.locale=b,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=M[y],w.Ls=M,w.p={},w}()}}]);
//# sourceMappingURL=899.55b2fc65.chunk.js.map