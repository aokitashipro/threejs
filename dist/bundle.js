!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);new THREE.ShaderMaterial({vertexShader:'module.exports = "varying vec2 vUv;\\n\\nvoid main() {\\n  vUv = uv;\\n  gl_Position = vec4( position, 1.0 );\\n}"',fragmentShader:'module.exports = "#pragma glslify: test = require(\\"test.glsl\\")\\n"'});window.addEventListener("DOMContentLoaded",function(){var e=window.innerWidth,n=window.innerHeight,t=new THREE.WebGLRenderer;t.setSize(e,n),t.setPixelRatio(window.devicePixelRatio),document.body.appendChild(t.domElement);var r=new THREE.Scene,o=new THREE.PerspectiveCamera(45,e/n,1,1e3),i=new THREE.BoxGeometry(1,1,1),a=new THREE.MeshPhongMaterial({color:4372681}),u=new THREE.Mesh(i,a);u.position.z=-5,r.add(u);var d=new THREE.DirectionalLight(16777215);d.position.set(1,1,1),r.add(d);!function e(){requestAnimationFrame(e),u.rotation.x+=.05,u.rotation.y+=.05,t.render(r,o)}()})}]);