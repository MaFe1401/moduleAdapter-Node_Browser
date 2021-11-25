var myRsa=function(n){"use strict";function t(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),t<=0n)throw new RangeError("n must be > 0");const e=n%t;return e<0n?e+t:e}function e(n,e){const r=function(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),n<=0n||t<=0n)throw new RangeError("a and b MUST be > 0");let e=0n,r=1n,o=1n,i=0n;for(;0n!==n;){const u=t/n,f=t%n,s=e-o*u,c=r-i*u;t=n,n=f,e=o,r=i,o=s,i=c}return{g:t,x:e,y:r}}(t(n,e),e);if(1n!==r.g)throw new RangeError(`${n.toString()} does not have inverse modulo ${e.toString()}`);return t(r.x,e)}function r(n,o,i){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof o&&(o=BigInt(o)),"number"==typeof i&&(i=BigInt(i)),i<=0n)throw new RangeError("n must be > 0");if(1n===i)return 0n;if(n=t(n,i),o<0n)return e(r(n,(u=o)>=0?u:-u,i),i);var u;let f=1n;for(;o>0;)o%2n===1n&&(f=f*n%i),o/=2n,n=n**2n%i;return f}function o(n){let t=0n;for(const e of n.values()){t=(t<<8n)+BigInt(e)}return t}function i(n,t=!1){if(n<1)throw new RangeError("bitLength MUST be > 0");const e=function(n,t=!1){if(n<1)throw new RangeError("byteLength MUST be > 0");{const e=new Uint8Array(n);return self.crypto.getRandomValues(e),t&&(e[0]=128|e[0]),e}}(Math.ceil(n/8),!1),r=n%8;if(0!==r&&(e[0]=e[0]&2**r-1),t){const n=0!==r?2**(r-1):128;e[0]=e[0]|n}return e}function u(n,t=1n){if(n<=0n||t<0n||n<=t)throw new RangeError("Arguments MUST be: max > 0 && min >=0 && max > min");const e=n-t,r=function(n){if("number"==typeof n&&(n=BigInt(n)),1n===n)return 1;let t=1;do{t++}while((n>>=1n)>1n);return t}(e);let u;do{u=o(i(r))}while(u>e);return u+t}function f(n,t){if(2n===n)return!0;if(0n===(1n&n)||1n===n)return!1;const e=[3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n,41n,43n,47n,53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n,503n,509n,521n,523n,541n,547n,557n,563n,569n,571n,577n,587n,593n,599n,601n,607n,613n,617n,619n,631n,641n,643n,647n,653n,659n,661n,673n,677n,683n,691n,701n,709n,719n,727n,733n,739n,743n,751n,757n,761n,769n,773n,787n,797n,809n,811n,821n,823n,827n,829n,839n,853n,857n,859n,863n,877n,881n,883n,887n,907n,911n,919n,929n,937n,941n,947n,953n,967n,971n,977n,983n,991n,997n,1009n,1013n,1019n,1021n,1031n,1033n,1039n,1049n,1051n,1061n,1063n,1069n,1087n,1091n,1093n,1097n,1103n,1109n,1117n,1123n,1129n,1151n,1153n,1163n,1171n,1181n,1187n,1193n,1201n,1213n,1217n,1223n,1229n,1231n,1237n,1249n,1259n,1277n,1279n,1283n,1289n,1291n,1297n,1301n,1303n,1307n,1319n,1321n,1327n,1361n,1367n,1373n,1381n,1399n,1409n,1423n,1427n,1429n,1433n,1439n,1447n,1451n,1453n,1459n,1471n,1481n,1483n,1487n,1489n,1493n,1499n,1511n,1523n,1531n,1543n,1549n,1553n,1559n,1567n,1571n,1579n,1583n,1597n];for(let t=0;t<e.length&&e[t]<=n;t++){const r=e[t];if(n===r)return!0;if(n%r===0n)return!1}let o=0n;const i=n-1n;let f=i;for(;f%2n===0n;)f/=2n,++o;const s=i/2n**o;do{let t=r(u(i,2n),s,n);if(1n===t||t===i)continue;let e=1;for(;e<o&&(t=r(t,2n,n),t!==i);){if(1n===t)return!1;e++}if(t!==i)return!1}while(0!=--t);return!0}function s(n,t=16){if(n<1)throw new RangeError("bitLength MUST be > 0");let e=0n;do{e=o(i(n,!0))}while(!f(e,t));return e}class c{constructor(n,t){this.e=n,this.n=t}encrypt(n){return r(n,this.e,this.n)}verify(n){return r(n,this.e,this.n)}}class h{constructor(n,t){this.d=n,this.pubKey=t}decrypt(n){return r(n,this.d,this.pubKey.n)}verify(n){return r(n,this.d,this.pubKey.n)}}return n.PrivateKey=h,n.PublicKey=c,n.generateKeys=function(n=2048){var t=s(Math.round(n/2)+1),r=s(Math.round(n/2)),o=t*r,i=(t-BigInt(1))*(r-BigInt(1)),u=BigInt(65537),f=e(u,i),l=new c(u,o);return{pubKey:l,privKey:new h(f,l)}},n.helloWorld=function(n){const t=`Hello ${n}!`;return console.log(`Browser says "${t}"`),t},Object.defineProperty(n,"__esModule",{value:!0}),n}({});
