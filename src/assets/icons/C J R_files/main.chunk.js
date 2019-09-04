(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.menu_icon {\n  z-index: 100;\n  width: 12%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0.5% 1%;\n  opacity: 0.65;\n  transform: rotate(1deg);\n}\n.menu_icon:hover{\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n\n.sidebar {\n  width: 30%;\n  z-index: 100;\n  position: absolute;\n  top: 17rem;\n  left: 0;\n  animation-name: show-sidebar;\n  animation-duration: 1s;\n}\n\n.views {\n  width: 100%;\n  border: solid 1px green;\n  display: absolute;\n  animation-name: enlarge-views;\n  animation-duration: 1s;\n}\n\n.sidebar + .views {\n  margin: 0 5% 0 20%;\n  width: 80%;\n  animation-name: shrink-views;\n  animation-duration: 0.5s;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BackgroundMask.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BackgroundMask.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".background {\n  /* transition: ease-in-out 50ms; */\n  width: 100%;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));\n          mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/AboutBody.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/about/AboutBody.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".aboutBody-title {\n  text-align: left;\n  position: relative;\n  left: -4rem;\n}\n.aboutBody-title p {\n  font-family: Moon-Regular;\n  font-size: 4rem;\n  font-size: 4vw;\n  color: #fff;\n}\n.aboutBody-title p:nth-child(2) {\n  padding-left: 3rem;\n  padding-left: 3vw;\n}\n\n#aboutBody_span{\n  display: block;\n  font-size: 15vw;\n}\n\n.aboutBody-mainText {\n  margin-top: 5%;\n  line-height: 2rem;\n  text-align: left;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/LinkBar.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/about/LinkBar.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../assets/icons/Github.png */ "./src/assets/icons/Github.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../assets/icons/linkedin.png */ "./src/assets/icons/linkedin.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../assets/icons/instagram.png */ "./src/assets/icons/instagram.png"));

// Module
exports.push([module.i, ".linkbar-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.icon {\n  float: left;\n  text-align: center;\n  display: flex;\n  align-items: center\n}\n.icon:before {\n  content: '';\n  display: block;\n  width: 4em;\n  height: 4em;\n  float: left;\n  margin-right: 6px;\n  \n}\n.icon:first-child {\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n    \n}\n.icon:nth-child(2) {\n  background: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.icon:nth-child(3) {\n  background: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.icon:hover {\n  cursor: pointer;\n  animation: spin 1s ease normal;\n}\n@keyframes spin {0% {transform: rotate(0deg);} 100% {transform: rotate(-360deg);}}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/PictureFrame.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/about/PictureFrame.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pictureFrame {\n  box-shadow:  0 2px 6px black;\n  border-radius: 50%;\n  width: 25vw;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.portfolio-picture {\n  max-width: 100%;\n  height: auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/arrows/Arrows.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/arrows/Arrows.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 1vw;\n}\n.arrowSliding:hover {\n  cursor: pointer;\n}\n\n.arrow {\n  width: 2.0vw;\n  height: 2.0vw;\n  border: 0.9vw solid;  border-color: white transparent transparent #c5c5c5;\n  transform: rotate(-135deg);\n}\n\n\n.arrowSliding {\n  position: absolute; \n  animation: slide 4s linear infinite;\n}\n\n.delay1 { \n  animation-delay: 1s;\n}\n.delay2 { \n  animation-delay: 2s;\n}\n.delay3 { \n  animation-delay: 3s;\n}\n@keyframes slide {\n    0% { opacity:0; transform: translateY(-6vw); }\t\n   20% { opacity:1; transform: translateY(-1vw); }\t\n   80% { opacity:1; transform: translateY(1vw); }\t\n  100% { opacity:0; transform: translateY(6vw); }\t\n}\n\n.fadeOut {\n  animation: hideArrows 500ms linear forwards;\n  opacity: 0;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/button/button.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".redirect {\n  margin: 10%;\n  /* border-radius: 25%; */\n  padding: 5%;\n  color: #c5c5c5;\n  font-family: Moon-Light;\n  background: transparent;\n  font-size: 4rem;\n  font-size: 4vw;\n}\n\n.redirect:hover {\n  animation: viewResume 2s ease normal;\n}\n\n.button {\n  font-family: Moon-light;\n  transition: ease-out 1s;\n  background: white;\n  border-radius: 2vw;\n  box-shadow: 0px 10px 40px rgba(0,0,0,0.18);\n}\n.button:hover {\n  cursor: pointer;\n}\n\n.send {\n  animation: sendMessageButtonDefault 500ms;\n  background: #262C2C;\n  color: white;\n  font-size: 2vw;\n  letter-spacing: 0.5vw;\n  height: 8vh;\n}\n.send:hover {\n  transition: ease-in-out 500ms;\n  box-shadow: 0 12px 18px 0 black;\n  color: black;\n  background-color: #c5c5c5;\n  animation: sendMessageButtonEnlarge 2s linear forwards; \n}\n.send:active {\n  transition: ease-in 150ms;\n  outline: none;\n  box-shadow: none;\n  color: white;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card/Card.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/card/Card.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card-wrapper {\n  margin: 0 auto;\n}\n.card-wrapper h3 {\n  border-bottom: solid 2px white;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 2rem;\n  margin: 0 1vw 0 1vw;\n  padding-bottom: 1vw;\n}\n\n.row {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  max-width: 100%;\n  height: 100vh;\n  overflow: scroll;\n}\n\n.grid-item-wrapper {\n  box-sizing: initial;\n  margin: 1vw 1vw 0;\n  width: 100%;\n  overflow: hidden;\n  transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);\n  position: relative;\n  text-align: left;\n}\n\n.card {\n  flex-basis: 50%;\n  -ms-flex: auto;\n  box-sizing: border-box;\n  border-left: solid 1px white;\n  border-top: solid 1px white;\n  border-top-left-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n  padding: 2vw 3vw 0.5vw;\n  position: relative;\n  z-index: 0;\n}\n/* .card p:first-child{\n  font-size: 2rem;\n  font-size: 2vw;\n  margin: 0.5vw 0 1.25vw;\n} */\n.card p:nth-child(2) {\n  font-size: 1.25rem;\n  font-size: 1.25vw;\n  margin:0.5vw 0 1.25vw; \n}\n\n.card-footer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 1.25rem;\n}\n.footer-links {\n  display: flex;\n  flex-flow: row nowrap;\n  align-content: center;\n}\n.personalProjects {\n  display:grid;\n  grid-template-rows: 1fr 1fr;\n  position: relative;\n  z-index: 0;\n}\n.projectLinks {\n  display: flex;\n  flex-flow: column nowrap;\n  text-align: center;\n  margin: -1vw 1.75vw;\n}\n.linkLabel {\n  color: white;\n  margin-top: 0.5rem;\n}\n\n\n.footer-languages {\n  text-align: right;\n  position: relative;\n  z-index: 100;\n}\n\ni{\n  color: #c5c5c5;\n}\n\ni:hover{\n  cursor: pointer;\n  color: white;\n  transform: ease 3s;\n}\n\na {\n  font-size: 1.5vw;\n  animation: ungrow 1s;\n}\na:hover {\n  animation: grow 0.5s linear forwards;\n}\n@keyframes ungrow {\n  from {\n    font-size: 2vw;\n  }\n  to {\n    font-size: 1.5vw;\n  }\n}\n\n@keyframes grow {\n  from {\n    font-size: 1.5vw;\n  }\n  to {\n    font-size: 2vw;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-form/ContactForm.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/contact-form/ContactForm.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".contactForm-body {\n  animation: showForm 1s linear forwards;\n  margin-top: 2vw;\n  margin-bottom: 9vw;\n  padding: 1vw 0 3vw 0;\n  display: flex;\n  justify-content: center;\n}\n\n.contactForm {\n  background: #49494B;\n  box-shadow: 0px 10px 40px rgba(0,0,0,0.18);\n  border-radius: 1vw;\n  display: flex;\n  flex-flow: column nowrap;\n  margin-left: 2.25vw;\n  padding: 2vw;\n  text-align: justify;\n  flex-grow: 0.3;\n}\n\n.form-row {\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: column wrap;\n}\n.form-col {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n.form-col:first-child {\n  padding-right: 1vw;\n\n}\n.form-row:first-child{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.form-row label {\n  display: block;\n  margin-bottom: 1vw;\n}\n.form-row input[type='email'],\n.form-row input[type='text'] {\n  box-sizing: border-box;\n  background-color: #c5c5c5;\n  color: black;\n  border: none;\n  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  border-radius: 3vw;\n  width: 100%;\n  padding: 1vw;\n  outline: none;\n  margin-bottom: 1.5vw;\n  margin-right: 2vw;\n}\n.form-row textarea {\n  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  color: black;\n  border-radius: 1vw;\n  background-color: #c5c5c5;\n  min-height: 30vh;\n  padding: 1vw;\n  resize: none;\n  outline: none;\n  margin-bottom: 1.5vw;\n}\n\n.shieldsup {\n  opacity: 0;\n  position: absolute;\n  top:0;\n  left:0;\n  height:0;\n  width:0;\n  z-index: -1;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-greeting/ContactGreeting.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/contact-greeting/ContactGreeting.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.formIntro {\n  margin-bottom: 1.5vw;\n  background: #252423;\n  padding: 2vw;\n  opacity: 0.75;\n  border-radius: 1vw;\n}\n.introGroup {\n  background: #49494B;\n  box-shadow: 0px 2px 6px 0px hsla(0, 0%,0%, 0.2);\n  border-radius: 1vw;\n  padding: 1vw;\n  margin-bottom: 0.5vw;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/language-chart/LanguageChart.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/language-chart/LanguageChart.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".languageChart-wrapper h2 {\n font-family: Moon-Regular;\n font-size: 4.25vw;\n}\n\n#pieChart {\n  width: 40rem;\n  width: 40vw;\n}\n\n#pieChart:hover {\n  cursor: pointer;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/lanuage-icons/LanguageIcons.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/lanuage-icons/LanguageIcons.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, " .languageIconWrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  text-align: center;\n  height: 6vw;\n  padding-bottom: 5vw;\n}\n\n\n.languageIcon {\n  margin: 0.3rem 0.3rem;\n  width: 4rem;\n  width: 4vw;\n  animation: pulse 2s linear infinite;\n  position: relative;\n  z-index: 10;\n}\n.languageIcon:nth-child(1) {\n  animation-delay: 0s;\n}\n.languageIcon:nth-child(2) {\n  animation-delay: 0.35s;\n}\n.languageIcon:nth-child(3) {\n  animation-delay: 0.9s;\n}\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loading-bar/LoadingBar.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/loading-bar/LoadingBar.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loadingBars {\n  position: relative;\n  display: flex;\n}\n\n.loadingBars span {\n  height: 20rem;\n  height: 20vh;\n  width: 1.5rem;\n  width: 1.5vw;\n  margin: 0 20px;\n  background: transparent; \n  animation: animate 1.4s linear infinite;\n  border-radius: 42%;\n}\n\n.loadingBars span:first-child {\n    animation-delay: 0s;\n}\n.loadingBars span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loadingBars span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.loadingBars span:nth-child(4) {\n  animation-delay: 0.6s;\n}\n.loadingBars span:nth-child(5) {\n  animation-delay: 0.8s;\n}\n.loadingBars span:nth-child(6) {\n  animation-delay: 1s;\n}\n.loadingBars span:nth-child(7) {\n  animation-delay: 1.2s;\n}\n\n@keyframes animate {\n  0% {\n    box-shadow: 0 0 0 rgba(0,0,0,0.5);\n    opacity: 0;\n    transform: translateX(-50px) scale(1);\n  }\n  50% {\n    box-shadow: 0 20px 50px rgba(0,0,0,0.5);\n    opacity: 1;\n    transform: translateX(0px) scale(1.2);\n  }\n  100% {\n    box-shadow: 0 0 0 rgba(0,0,0,0.5);\n    opacity: 0;\n    transform: translateX(50px) scale(1);\n  }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page-header/PageHeader.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/page-header/PageHeader.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/filler.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/progress-bar/filler.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filler {\n  background: #fff;\n  height: 100%;\n  border-radius: inherit;\n  transition: width .2s ease-in; \n }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/progressBar.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/progress-bar/progressBar.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".progressBar {\n  position: relative;\n  height: 0.25rem;\n  border-radius: 50px;\n  left: 0.5rem;\n  margin-top: 1vw;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/repo-menu/RepoMenu.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/repo-menu/RepoMenu.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".repoMenu-wrapper {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  position: relative;\n\n}\n.repoMenu-wrapper h3 {\n  text-align: center;\n  margin: 0 1vw 0 1vw;\n  padding-bottom: 1vw;\n  border-bottom: solid 2px white;\n  border-bottom-right-radius: 1rem;\n  border-bottom-left-radius: 2rem;\n\n}\n\n\n.repoMenu {\n  height: 100vh;\n  overflow: scroll;\n}\n\n.repoMenu-item {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 1vw 1vw 1.5vw 2vw;\n  border-bottom: solid 1px #c5c5c5;\n  border-right: solid 1px #c5c5c5;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 3rem;\n  border-bottom-left-radius: 3rem;\n}\n.repoMenu-item p {\n  margin-bottom: 0.5rem;\n  margin-bottom: 0.5vw;\n}\n\n.item-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.item-header p:first-child {\n  font-size: 2rem;\n  font-size: 2vw;\n  color: white;\n}\n.item-header p:nth-child(2) {\n  text-align: right;\n  font-size: 1.75rem;\n  font-size: 1.75vw;\n  color: white;\n}\n.description {\n  margin-top: 1vw;\n}\n.repoText {\n  font-size: 1.25vw;\n}\n.item-footer {\n  margin: 1vw 0 1vw;\n  display: flex;\n  height: 7vw;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-content: center;\n}\n.item-footer p {\n  font-size: 1.25rem;\n  font-size: 1.25vw;\n}\n\n.github-btn {\n  height: fit-content;\n  background: transparent;\n  border-radius: 1.25vw;\n  padding: 0.5vw 1vw;\n  font-family: Moon-regular;\n  color: white;\n  font-size: 2vw;\n  margin-top: 3.25rem;\n  margin-top: 3.25vw;\n}\n.github-btn:hover {\n  cursor: pointer;\n  background: #c5c5c5;\n  color: #252423;\n  transition: ease-out 0.4s;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidebar/Sidebar.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/sidebar/Sidebar.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sidebar_nav {\n  position: fixed;\n  margin: 0 15%;\n  text-align: left;\n  margin: 0;\n  top: 40vh;\n  transform: translateY(-50%);\n}\n.mobileMenu {\n  display:none;\n}\n.active {\n  color: #fff;\n}\n.sidebarLink {\n  font-family: Moon-Light;\n  font-size: 3vw;\n  text-transform: uppercase;\n  line-height: 11vh;\n  color: #C5C5C5;\n  text-decoration: none;\n  animation-name: shrink;\n  animation-duration: 2s;\n}\n.sidebarLink:hover {\n  cursor: pointer;\n  color: #fff;\n  font-size: 3.5vw;\n  animation-name: enlarge;\n  animation-duration: 1s;\n  letter-spacing: 0.4vw;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/route-transitions.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/routes/route-transitions.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".route-container {\n  margin: 0 2rem 0 2rem;\n}\n\n.transition-group {\n  position: relative;\n}\n\n.route-section {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.fade-enter {\n  opacity: 0.0;\n}\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 900ms ease-in;\n}\n.fade-exit {\n  opacity: 1;\n}\n\n.fade-exit.fade-exit-active {\n  opacity: 0.0;\n  transition: opacity 900ms ease-in;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/animations.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/animations.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/images/pland.png */ "./src/assets/images/pland.png"));

// Module
exports.push([module.i, "/* COMPONENTS WITH ANIMATIONS IN THIS FILE\n   - App\n   - Sidebar\n   - About\n   - Button\n   - LanguageIcons\n   - Home\n*/\n\n/* ANIMATIONS ON THE APP COMPONENT */\n@keyframes show-sidebar {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes shrink-views {\n  from {\n    margin: 0;\n    width: 100%;\n  }\n  to {\n    margin: 0 5% 0 25%;\n    width: 75%;\n  }\n}\n@keyframes enlarge-views {\n  from {\n    margin: 0 5% 0 25%;\n    width: 75%;\n  }\n  to {\n    margin: 0;\n    width: 100%;\n  }\n}\n\n/* ANIMATIONS ON THE SIDEBAR COMPONENT */\n\n@keyframes enlarge {\n  from {\n    font-size: 3vw;\n    letter-spacing: 0;\n  }\n  to {\n    font-size: 3.5vw;\n    letter-spacing:0.4vw;\n    color: #fff;\n  }\n}\n@keyframes shrink {\n  from {\n    font-size:3.5vw;\n    letter-spacing: 0.4vw;\n  }\n  to {\n    font-size: 3vw;\n    letter-spacing: 0;\n  }\n}\n\n\n/* ANIMATIONS ON THE ABOUT PAGE */\n\n@keyframes showCity {\n  from {\n    \n  }\n  to {\n    -webkit-text-fill-color: transparent;\n    background: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: 90% 90%;\n    background-size: cover;\n    -webkit-background-clip: text;\n    background-clip: text;\n    \n  }\n}\n@keyframes hideCity {\n  from {\n    -webkit-text-fill-color: transparent;\n    background: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: 90% 90%;\n    background-size: cover;\n    -webkit-background-clip: text;\n    background-clip: text;\n  }\n  to {\n    \n  }\n}\n@keyframes trippyText { \n  0%{background-position:0% 50%}\n  50%{background-position:100% 50%}\n  100%{background-position:0% 50%}\n}\n/* BUTTON COMPONENT ANIMATION */\n\n@keyframes viewResume {\n  from {\n    border-bottom: solid 1px #fff;\n    background-color: transparent;\n  }\n  to {\n    border-bottom: 0;\n    background-color: #eeeeee;\n    opacity: 0.25\n  }\n  from {\n    border-right: solid 1px #fff;\n  }\n  to {\n    border-right: 0\n  }\n}\n\n@keyframes sendMessageButtonEnlarge {\n  from {\n    font-size: 2vw;\n    letter-spacing: 0.5vw;\n  }\n  to {\n    font-size: 2.5vw;\n    letter-spacing: 1vw;\n  }\n}\n\n@keyframes sendMessageButtonDefault {\n  from {\n    font-size: 2.5vw;\n    letter-spacing: 1vw;\n  }\n  to {\n    font-size: 2vw;\n    letter-spacing: 0.5vw;\n  }\n}\n\n\n/* LANGUAGEICON COMPONENT ANIMATIONS */\n\n@keyframes pulse {\n  0% {\n    width: 4vw;\n  }\n  50% {\n    width: 4.5vw;\n  }\n  100%{\n    width: 4vw;\n  }\n}\n\n/* ANIMATIONS ON THE CONTACT COMPONENT */\n\n@keyframes hideArrows {\n  0% {\n    opacity: 1;\n  }\n 100%  {\n    opacity: 0;\n  }\n}\n\n@keyframes showForm {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* HOME COMPONENT ANIMATIONS */\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 1px #c5c5c5, 0 0 2px #c5c5c5, 0 0 3px #fff, 0 0 3.5px #fff\n  }\n  to {\n    text-shadow: 0 0 3.5px #fff, 0 0 3px #ff4da6, 0 0 2px white, 0 0 1px white,\n  }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/fonts.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/fonts.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/fonts/Moon-Light.woff */ "./src/assets/fonts/Moon-Light.woff"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/fonts/Moon-Regular.woff */ "./src/assets/fonts/Moon-Regular.woff"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../assets/fonts/manrope-regular.woff */ "./src/assets/fonts/manrope-regular.woff"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../assets/fonts/eudora.woff */ "./src/assets/fonts/eudora.woff"));

// Module
exports.push([module.i, "@font-face {\n  font-family: \"Moon-Light\";\n  src: local(Moon-Light), url(" + ___CSS_LOADER_URL___0___ + ")format(\"woff\");\n}\n@font-face {\n  font-family:'Moon-Regular';\n  src: local(Regular), url(" + ___CSS_LOADER_URL___1___ + ")format(\"woff\");\n}\n@font-face {\n  font-family: 'Manrope';\n  src: local(Regular), url(" + ___CSS_LOADER_URL___2___ + ")format('woff');\n}\n@font-face {\n  font-family:'Eudora';\n  src: local(Regular), url(" + ___CSS_LOADER_URL___3___ + ")format('woff');\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/index.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nhtml {\n  background-color: #252423\n}\n* {\n  text-decoration: none;\n  \n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: Moon-Regular;\n  margin: 0;\n  color: #e6e6e6;\n  font-weight: normal;\n}\n\nh1 {\n  font-family: Eudora;\n  font-size: 14rem;\n  font-size: 14vw;\n  font-weight: 100;\n}\nh2 {\n  font-family: Eudora;\n  font-size: 9rem;\n  font-size: 9vw;\n  font-weight: 100;\n  letter-spacing: 1vw;\n}\nh3 {\n  font-size: 3rem;\n  font-size: 3vw;\n  letter-spacing: 0.75vw;\n}\nh4 {\n  font-size: 2.75vw;\n  font-size: 2.75vw;\n}\nh5 {\n  font-size: 2.25vw;\n  font-size: 2.25vw;\n}\nh6 {\n  font-size: 2rem;\n  font-size: 2vw;\n}\nul {\n  list-style: none;\n}\n\np, li, button, a, input, textarea, label {\n  margin: 0;\n  font-family: Manrope;\n  font-size: 1.5rem;\n  font-size: 1.5vw;\n  color: #c5c5c5;\n  text-decoration: none;\n}\n\nlabel, button {\n  font-family: Moon-Regular;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.25vw;\n}\n\na {\n  z-index: 100;\n  cursor: default;\n}\n\ninput, textarea {\n  background: transparent;\n  border: none;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/media-queries.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/media-queries.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media screen and (max-width: 320px) {\n  *::-webkit-scrollbar { \n    width: 0 !important\n  }\n  * {\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n  }\n  .mobileMenu {\n    display: block;\n    letter-spacing: 0.4vw;\n  }\n  .sidebarMenu {\n    padding-inline-start: 0 !important;\n  }\n  .sidebar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n  .sidebar + .views {\n    display: none;\n  }\n  .sidebar_nav {\n    text-align: center;\n    top: 30vh;\n  }\n  .sidebarLinkWrapper {\n    margin: 3vh 0 3vh;\n    padding: 2vh 3vw;\n    width: 40vw;\n    border: solid 1px white;\n  }\n  .sidebrLinkWrapper:hover {\n    background: white;\n    border: solid 1px black;\n    color: black;\n  }\n  .sidebarLink {\n    line-height: 2vh;\n  }  \n\n  .home-content {\n    margin-top: 0;\n  }\n\n  .about-header {\n    line-height: 4.5vh;\n  }\n  .about-body {\n    top: 3rem;\n    width: 100%;\n    margin: 0 1vw;\n  }\n\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/about/About.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/about/About.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../assets/images/pland.png */ "./src/assets/images/pland.png"));

// Module
exports.push([module.i, ".about-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n.aboutHeader h1{\n  font-size: 8vw;\n}\n.aboutBody-container {\n  margin: 20vw 0 4vw;\n  box-shadow: 0px 10px 40px #c5c5c5;\n  display: grid;\n  border-radius: 2vw;\n  justify-items: center;\n  text-align: center;\n  position: relative;\n}\n.bodyIntro {\n  display: grid;\n  grid-template-columns: 23vw 35vw 23vw;\n}\n.introWord {\n  margin-top: 10vw;\n}\n.introWord h3 {\n  font-size: 13vw;\n  font-family: Moon-light;\n}\n.introPicture {\n  color: white;\n  padding-bottom:1vw;\n  display: flex;\n  justify-content: center;\n}\n.picture-wrapper{\n  position: relative;\n  top: -11.5vw;\n  align-self: center;\n  z-index: 10;\n}\n.textAnimation {\n  border-bottom: solid 2px #c5c5c5;\n  text-align: center;\n  position: relative;\n  top: -1vw;\n}\n.textAnimation p {\n  font-size: 6vw;\n  color: white;\n  font-family: Moon-light;\n  letter-spacing: 1vw;\n  text-transform: uppercase;\n  \n}\n\n.bodyContent {\n  display: flex;\n  flex-flow: column nowrap;\n  align-content: stretch;\n}\n\n.bodyContentGreeting {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center\n}\n\n.portlandText {\n  line-height: 11.5vh;\n  letter-spacing: -10px;\n  animation: hideCity 2.2s ease 0s;\n  background-image: none;\n  text-align: center;\n}\n\n.portlandText:hover {\n  cursor: pointer;\n  -webkit-animation: showCity 2s ease 0s ; /* Safari 4+ */\n  -moz-aanimation: showCity 2s ease 0s ; /* Fx 5+ *//* Opera 12+ */\n  animation: showCity 2s ease 0s ;\n  animation-fill-mode: forwards;\n  -webkit-text-fill-color: transparent;\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n\n.body {\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 2vw;\n}\n\n.bodyActionItems {\n  justify-self: center;\n  align-self: flex-start;\n  background-color: #36312E;\n  height: 100%;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/contact/Contact.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/contact/Contact.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".contact-wrapper {\n\n}\n.arrowButton{\n  display: inline-block;\n  width: 20%;\n  border-radius: 50%;\n}\n.contact-title {\n margin-bottom: 5vw;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/error/Error404.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/error/Error404.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/home/Home.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/home/Home.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../assets/images/HomeBG.png */ "./src/assets/images/HomeBG.png"));

// Module
exports.push([module.i, ".home-view {\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  z-index: 0;\n}\n\n.home-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.home-container h1 {\n  animation: glow 800ms linear infinite alternate;\n}\n.trippyText {\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(270deg, #edc7ff, #d7c7ff, #ffc7ee, #fff1c7, #ffe3c7, #ffd6c7, #c7dcff, #c7fcff, #ffd6d9);\n  background-size: 400% 400%;\n  animation: trippyText 2s ease infinite;\n  -webkit-animation: trippyText 2s ease infinite;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.sidebar + .home-container {\n  margin-left: 25%;\n}\n\n\n.home-content {\n  margin-top: 5vw;  \n}\n\n.home-content h3 {\n  font-family: Eudora;\n  font-size: 7vw;\n}\n.home-content h4 {\n  font-family: Eudora;\n  font-size: 5vw;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/pdf-viewer/PDFViewer.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/pdf-viewer/PDFViewer.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pdfViewer-container {\n  height: 100vh;\n  \n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/projects/Projects.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/views/projects/Projects.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".project-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.project-header {\n  width: 90%;\n  margin:0 3rem 0 2rem;\n}\n.project-body {\n  display: flex;\n  flex-flow: row wrap;\n}\n.body-menu-panel {\n  display: flex;\n  position: relative;\n  z-index: 1;\n  flex-flow: row nowrap;\n  align-content: center;\n  justify-content: flex-start;\n}\n.body-project-panel {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 1.75vw;\n}\n\n.text-container {\n  text-align: left;\n  display:flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/menu.png */ "./src/assets/images/menu.png");
/* harmony import */ var _assets_images_menu_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_menu_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/images */ "./src/assets/images/images.js");
/* harmony import */ var _components_BackgroundMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BackgroundMask */ "./src/components/BackgroundMask.js");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/Sidebar */ "./src/components/sidebar/Sidebar.js");
/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/Routes */ "./src/routes/Routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/App.js";

 // STYLES



 // COMPONENTS


 // Routes


 // STATE



class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 0,
      sidebar_visible: false
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.handleChangeBackground = this.handleChangeBackground.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["getRepos"])());
  }

  handleViewSidebar() {
    this.setState(state => ({
      sidebar_visible: !state.sidebar_visible
    }));
  }

  handleChangeBackground(location) {
    console.log(location);

    switch (location) {
      case 'home':
        return this.setState({
          background: 0,
          sidebar_visible: false
        });

      case 'bio':
        return this.setState({
          background: 1,
          sidebar_visible: false
        });

      case 'projects':
        return this.setState({
          background: 2,
          sidebar_visible: false
        });

      case 'contact':
        return this.setState({
          background: 3,
          sidebar_visible: false
        });

      default:
        return this.setState({
          background: 3,
          sidebar_visible: false
        });
    }
  }

  render() {
    let showSidebar = null;
    this.state.sidebar_visible ? showSidebar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "sidebar",
      changeBackground: this.handleChangeBackground,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }) : showSidebar = null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_images_menu_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "menuButton",
      className: "menu_icon",
      id: "menuButton",
      onClick: this.handleViewSidebar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BackgroundMask__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imgIndex: this.state.background,
      imgSrc: _assets_images_images__WEBPACK_IMPORTED_MODULE_4__["images"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, showSidebar, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "views",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Make sure you check everything before deploying!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_Routes__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(App));

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepos", function() { return getRepos; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _services_api_GithubService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api/GithubService.js */ "./src/services/api/GithubService.js");


const action = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].action;
function getRepos() {
  return async function (dispatch) {
    try {
      const res = await _services_api_GithubService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getRepos();
      dispatch(receiveRepos(res));
      return res;
    } catch (err) {
      return err;
    }
  };
} // ACTION CREATOR

function receiveRepos(repositoryList) {
  // ACTION
  return {
    type: action.RECEIVE_REPOS,
    repoList: repositoryList
  };
}

/***/ }),

/***/ "./src/assets/fonts/Moon-Light.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/Moon-Light.woff ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Moon-Light.5c78c50e.woff";

/***/ }),

/***/ "./src/assets/fonts/Moon-Regular.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Moon-Regular.woff ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Moon-Regular.28304c1e.woff";

/***/ }),

/***/ "./src/assets/fonts/eudora.woff":
/*!**************************************!*\
  !*** ./src/assets/fonts/eudora.woff ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/eudora.731d7735.woff";

/***/ }),

/***/ "./src/assets/fonts/manrope-regular.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/manrope-regular.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/manrope-regular.3cea6e29.woff";

/***/ }),

/***/ "./src/assets/icons/Github.png":
/*!*************************************!*\
  !*** ./src/assets/icons/Github.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABBNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDY8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6RTUxNzhBMkU5OUEwMTFFMjlBMTVCQzEwNDZBODkwNEQ8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6RTUxNzhBMkY5OUEwMTFFMjlBMTVCQzEwNDZBODkwNEQ8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVy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"

/***/ }),

/***/ "./src/assets/icons/angular.png":
/*!**************************************!*\
  !*** ./src/assets/icons/angular.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/csharp.png":
/*!*************************************!*\
  !*** ./src/assets/icons/csharp.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/csharp.e8460f0d.png";

/***/ }),

/***/ "./src/assets/icons/cypress.png":
/*!**************************************!*\
  !*** ./src/assets/icons/cypress.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cypress.43c76b91.png";

/***/ }),

/***/ "./src/assets/icons/firebase.png":
/*!***************************************!*\
  !*** ./src/assets/icons/firebase.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/firebase.bb5d30fe.png";

/***/ }),

/***/ "./src/assets/icons/html.png":
/*!***********************************!*\
  !*** ./src/assets/icons/html.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/icons.js":
/*!***********************************!*\
  !*** ./src/assets/icons/icons.js ***!
  \***********************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony import */ var _angular_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular.png */ "./src/assets/icons/angular.png");
/* harmony import */ var _angular_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _csharp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csharp.png */ "./src/assets/icons/csharp.png");
/* harmony import */ var _csharp_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_csharp_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cypress_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cypress.png */ "./src/assets/icons/cypress.png");
/* harmony import */ var _cypress_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cypress_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.png */ "./src/assets/icons/firebase.png");
/* harmony import */ var _firebase_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html.png */ "./src/assets/icons/html.png");
/* harmony import */ var _html_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_html_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _javascript_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript.png */ "./src/assets/icons/javascript.png");
/* harmony import */ var _javascript_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_javascript_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mysql_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mysql.png */ "./src/assets/icons/mysql.png");
/* harmony import */ var _mysql_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mysql_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react.png */ "./src/assets/icons/react.png");
/* harmony import */ var _react_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typescript.png */ "./src/assets/icons/typescript.png");
/* harmony import */ var _typescript_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_typescript_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vue_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vue.png */ "./src/assets/icons/vue.png");
/* harmony import */ var _vue_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vue_png__WEBPACK_IMPORTED_MODULE_9__);










const icons = [_angular_png__WEBPACK_IMPORTED_MODULE_0___default.a, _csharp_png__WEBPACK_IMPORTED_MODULE_1___default.a, _cypress_png__WEBPACK_IMPORTED_MODULE_2___default.a, _firebase_png__WEBPACK_IMPORTED_MODULE_3___default.a, _html_png__WEBPACK_IMPORTED_MODULE_4___default.a, _javascript_png__WEBPACK_IMPORTED_MODULE_5___default.a, _mysql_png__WEBPACK_IMPORTED_MODULE_6___default.a, _react_png__WEBPACK_IMPORTED_MODULE_7___default.a, _typescript_png__WEBPACK_IMPORTED_MODULE_8___default.a, _vue_png__WEBPACK_IMPORTED_MODULE_9___default.a];

/***/ }),

/***/ "./src/assets/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/instagram.ac32c122.png";

/***/ }),

/***/ "./src/assets/icons/javascript.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/javascript.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/javascript.476a39f7.png";

/***/ }),

/***/ "./src/assets/icons/linkedin.png":
/*!***************************************!*\
  !*** ./src/assets/icons/linkedin.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/mysql.png":
/*!************************************!*\
  !*** ./src/assets/icons/mysql.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/icons/react.png":
/*!************************************!*\
  !*** ./src/assets/icons/react.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.322093fd.png";

/***/ }),

/***/ "./src/assets/icons/typescript.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/typescript.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typescript.26cc95f2.png";

/***/ }),

/***/ "./src/assets/icons/vue.png":
/*!**********************************!*\
  !*** ./src/assets/icons/vue.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vue.ce375fcb.png";

/***/ }),

/***/ "./src/assets/images/HomeBG.png":
/*!**************************************!*\
  !*** ./src/assets/images/HomeBG.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HomeBG.c6485401.png";

/***/ }),

/***/ "./src/assets/images/JPEG/AboutBG.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/JPEG/AboutBG.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AboutBG.1ac134ce.jpg";

/***/ }),

/***/ "./src/assets/images/JPEG/HomeBG.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/JPEG/HomeBG.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HomeBG.8a1e9d69.jpg";

/***/ }),

/***/ "./src/assets/images/JPEG/ProjectBG.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/JPEG/ProjectBG.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ProjectBG.b1155f28.jpg";

/***/ }),

/***/ "./src/assets/images/headshot.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/headshot.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/headshot.c5291946.jpg";

/***/ }),

/***/ "./src/assets/images/images.js":
/*!*************************************!*\
  !*** ./src/assets/images/images.js ***!
  \*************************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony import */ var _JPEG_AboutBG_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JPEG/AboutBG.jpg */ "./src/assets/images/JPEG/AboutBG.jpg");
/* harmony import */ var _JPEG_AboutBG_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JPEG_AboutBG_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JPEG_HomeBG_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JPEG/HomeBG.jpg */ "./src/assets/images/JPEG/HomeBG.jpg");
/* harmony import */ var _JPEG_HomeBG_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_JPEG_HomeBG_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JPEG_ProjectBG_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JPEG/ProjectBG.jpg */ "./src/assets/images/JPEG/ProjectBG.jpg");
/* harmony import */ var _JPEG_ProjectBG_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_JPEG_ProjectBG_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notfound_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound.png */ "./src/assets/images/notfound.png");
/* harmony import */ var _notfound_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notfound_png__WEBPACK_IMPORTED_MODULE_3__);




const images = [_JPEG_HomeBG_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _JPEG_AboutBG_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _JPEG_ProjectBG_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _notfound_png__WEBPACK_IMPORTED_MODULE_3___default.a];

/***/ }),

/***/ "./src/assets/images/menu.png":
/*!************************************!*\
  !*** ./src/assets/images/menu.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/menu.e03b41f9.png";

/***/ }),

/***/ "./src/assets/images/notfound.png":
/*!****************************************!*\
  !*** ./src/assets/images/notfound.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/notfound.7fc0e1aa.png";

/***/ }),

/***/ "./src/assets/images/pland.png":
/*!*************************************!*\
  !*** ./src/assets/images/pland.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pland.b211b4e8.png";

/***/ }),

/***/ "./src/components/BackgroundMask.css":
/*!*******************************************!*\
  !*** ./src/components/BackgroundMask.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./BackgroundMask.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BackgroundMask.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./BackgroundMask.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BackgroundMask.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./BackgroundMask.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BackgroundMask.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BackgroundMask.js":
/*!******************************************!*\
  !*** ./src/components/BackgroundMask.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackgroundMask_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundMask.css */ "./src/components/BackgroundMask.css");
/* harmony import */ var _BackgroundMask_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BackgroundMask_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/BackgroundMask.js";




class BackgroundMask extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.imgSrc.forEach(src => {
      const image = document.createElement('img');
      image.src = src; //Assign an image src attribute requests the image
    });
  }

  render() {
    const activeImage = this.props.imgSrc[this.props.imgIndex];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "background",
      src: activeImage,
      alt: "background mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

}

BackgroundMask.propTypes = {
  imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  imgIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundMask);

/***/ }),

/***/ "./src/components/about/AboutBody.css":
/*!********************************************!*\
  !*** ./src/components/about/AboutBody.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./AboutBody.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/AboutBody.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./AboutBody.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/AboutBody.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./AboutBody.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/AboutBody.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/about/AboutBody.js":
/*!*******************************************!*\
  !*** ./src/components/about/AboutBody.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutBody_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutBody.css */ "./src/components/about/AboutBody.css");
/* harmony import */ var _AboutBody_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AboutBody_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/about/AboutBody.js";



function AboutBody() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-cy": "aboutBody-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutBody-mainText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "I am passionate about creating meangingful experiences for others. I've worn a lot of shoes in my life and incorporate these experiences into development to form a multi-disciplinary approach to my work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "I have a passion for continued education and am currently focusing on an ASP.NET + JavaScript stack. I like to document my progress in blog posts, so be sure to check them out. When I'm not coding I generally spend time going out with my partner, hking with friends, relaxing with my cat Oliver, cooking, exercising, or reading. We are more than our jobs and I belive in pursuing what makes you feel good. I'm lucky to have found a passion in coding as it speaks to my logical and creative sides."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Interested in learnig more? Check out the links below to view my social media accounts, or view my contact page to get in touch. I'd love to talk with you about how I might be able to turn an idea into life with you.")));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutBody);

/***/ }),

/***/ "./src/components/about/LinkBar.css":
/*!******************************************!*\
  !*** ./src/components/about/LinkBar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LinkBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/LinkBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LinkBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/LinkBar.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LinkBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/LinkBar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/about/LinkBar.js":
/*!*****************************************!*\
  !*** ./src/components/about/LinkBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBar.css */ "./src/components/about/LinkBar.css");
/* harmony import */ var _LinkBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LinkBar_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/about/LinkBar.js";



function Linkbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "linkbar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon",
    alt: "link to github",
    href: "https://www.github.com/68thandMaine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon",
    alt: "follow me on linkedin",
    href: "https://www.linkedin.com/in/crudnicky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon",
    alt: "follow me on instagram",
    href: "https://www.instagram.com/virginiathekid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " ")));
}

/* harmony default export */ __webpack_exports__["default"] = (Linkbar);

/***/ }),

/***/ "./src/components/about/PictureFrame.css":
/*!***********************************************!*\
  !*** ./src/components/about/PictureFrame.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureFrame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/PictureFrame.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureFrame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/PictureFrame.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureFrame.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/about/PictureFrame.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/about/PictureFrame.js":
/*!**********************************************!*\
  !*** ./src/components/about/PictureFrame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PictureFrame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PictureFrame.css */ "./src/components/about/PictureFrame.css");
/* harmony import */ var _PictureFrame_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PictureFrame_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_headshot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/headshot.jpg */ "./src/assets/images/headshot.jpg");
/* harmony import */ var _assets_images_headshot_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_headshot_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/about/PictureFrame.js";




function PictureFrame() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pictureFrame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_headshot_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "headshot of developer",
    className: "portfolio-picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PictureFrame);

/***/ }),

/***/ "./src/components/about/TextAnimation.js":
/*!***********************************************!*\
  !*** ./src/components/about/TextAnimation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/about/TextAnimation.js";



function TextAnimation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_text_loop__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [" musician ", " scientist ", " photographer ", " builder ", " explorer ", " developer ", " human"],
    springConfig: {
      stiffness: 150,
      damping: 8
    },
    interval: 1500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TextAnimation);

/***/ }),

/***/ "./src/components/arrows/Arrows.css":
/*!******************************************!*\
  !*** ./src/components/arrows/Arrows.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Arrows.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/arrows/Arrows.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Arrows.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/arrows/Arrows.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Arrows.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/arrows/Arrows.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/arrows/Arrows.js":
/*!*****************************************!*\
  !*** ./src/components/arrows/Arrows.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Arrows_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arrows.css */ "./src/components/arrows/Arrows.css");
/* harmony import */ var _Arrows_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Arrows_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/arrows/Arrows.js";




function Arrows(props) {
  function closeArrows() {
    let arrow = document.querySelector('#arrowAnim');
    arrow.classList.add('fadeOut');
    setTimeout(() => {
      props.showForm();
    }, 600);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "arrowAnim",
    onClick: e => closeArrows(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrowSliding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrowSliding delay1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrowSliding delay2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
}

Arrows.propTypes = {
  showForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Arrows);

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/button/button.js";





const Button = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button + ".concat(props.purpose),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.text);
};

Button.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  purpose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/card/Card.css":
/*!**************************************!*\
  !*** ./src/components/card/Card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card/Card.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card/Card.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card/Card.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/card/Card.js":
/*!*************************************!*\
  !*** ./src/components/card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lanuage_icons_LanguageIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lanuage-icons/LanguageIcons.js */ "./src/components/lanuage-icons/LanguageIcons.js");
/* harmony import */ var _progress_bar_progressBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-bar/progressBar.js */ "./src/components/progress-bar/progressBar.js");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card.css */ "./src/components/card/Card.css");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/card/Card.js";






class Card extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "IN DEVELOPMENT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, Object.keys(this.props.repositoryList.personalProjects).map(repo => {
      let project = this.props.repositoryList.personalProjects[repo];
      let technologies = project.languages;
      console.table('technologies', technologies, 'repo', repo);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grid-item-wrapper",
        key: repo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, project.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_progress_bar_progressBar_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        percentage: project.percentComplete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "personalProjects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "CHECK THE CODE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "projectLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: project.readMeURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-readme fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "linkLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Readme")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "projectLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: project.githubURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-github fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "linkLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Github")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-languages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lanuage_icons_LanguageIcons_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentProject: project.name,
        languages: technologies,
        purpose: "Environment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))));
    })));
  }

}

Card.propTypes = {
  repositoryList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/contact-form/ContactForm.css":
/*!*****************************************************!*\
  !*** ./src/components/contact-form/ContactForm.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-form/ContactForm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-form/ContactForm.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-form/ContactForm.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/contact-form/ContactForm.js":
/*!****************************************************!*\
  !*** ./src/components/contact-form/ContactForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.js */ "./src/components/button/button.js");
/* harmony import */ var _ContactForm_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactForm.css */ "./src/components/contact-form/ContactForm.css");
/* harmony import */ var _ContactForm_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/contact-form/ContactForm.js";





const ContactForm = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formInputs = _useState2[0],
        setInputs = _useState2[1];

  const handleSubmit = event => {
    event.preventDefault();
    props.sendMessage(formInputs);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(formInputs => Object(_Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formInputs, {
      [event.target.name]: event.target.value
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "contactForm-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "contactForm",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "fnme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "First Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "fnme",
    name: "fnme",
    onChange: handleInputChange,
    value: formInputs.firstName,
    "data-cy": "firstname",
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "lnme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "lnme",
    name: "lnme",
    onChange: handleInputChange,
    value: formInputs.lastName,
    "data-cy": "lastname",
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "eml",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "eml",
    name: "eml",
    onChange: handleInputChange,
    value: formInputs.email,
    "data-cy": "email",
    type: "email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Message"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
    id: "msg",
    name: "msg",
    onChange: handleInputChange,
    value: formInputs.message,
    "data-cy": "message",
    type: "text",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Send",
    purpose: "send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })));
};

ContactForm.propTypes = {
  sendMessage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./src/components/contact-greeting/ContactGreeting.css":
/*!*************************************************************!*\
  !*** ./src/components/contact-greeting/ContactGreeting.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactGreeting.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-greeting/ContactGreeting.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactGreeting.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-greeting/ContactGreeting.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ContactGreeting.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact-greeting/ContactGreeting.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/contact-greeting/ContactGreeting.js":
/*!************************************************************!*\
  !*** ./src/components/contact-greeting/ContactGreeting.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactGreeting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactGreeting.css */ "./src/components/contact-greeting/ContactGreeting.css");
/* harmony import */ var _ContactGreeting_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContactGreeting_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/contact-greeting/ContactGreeting.js";



const FormGreeting = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formIntro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "HAVE COMMENTS ABOUT MY SITE?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "WANT TO COLLABORATE?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "I'd love to hear from you about your experience visiting my website or if you want to work together."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Can't wait to hear from you.")));
};

/* harmony default export */ __webpack_exports__["default"] = (FormGreeting);

/***/ }),

/***/ "./src/components/language-chart/LanguageChart.css":
/*!*********************************************************!*\
  !*** ./src/components/language-chart/LanguageChart.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageChart.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/language-chart/LanguageChart.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageChart.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/language-chart/LanguageChart.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageChart.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/language-chart/LanguageChart.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/language-chart/LanguageChart.js":
/*!********************************************************!*\
  !*** ./src/components/language-chart/LanguageChart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LanguageChart_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LanguageChart.css */ "./src/components/language-chart/LanguageChart.css");
/* harmony import */ var _LanguageChart_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LanguageChart_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/language-chart/LanguageChart.js";





class LanguageChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.chartRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // Creates direct access to the DOM node chart.js will use

    this.buildChart = this.buildChart.bind(this);
    this.countRepoLanguage = this.countRepoLanguage.bind(this);
    this.filterLanguages = this.filterLanguages.bind(this);
    this.createColors = this.createColors.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.buildChart();
    }, 1500);
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');
    let languages = this.filterLanguages(this.props.repositoryList);
    let data = Object.values(languages);
    let tableLabels = Object.keys(languages);
    let colors = this.createColors(data);
    this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(myChartRef, {
      type: 'doughnut',
      data: {
        labels: tableLabels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          hoverBorderWidth: 5,
          hoverBackgroundColor: 'transparent',
          label: ''
        }]
      },
      options: {
        animation: {
          animationEasing: 'easeInOutQuart',
          duration: 3000,
          circumference: 15 * Math.PI,
          animateRotate: true,
          animateScale: true
        },
        responsive: true,
        rotation: 90
      }
    });
  }

  filterLanguages(repoList) {
    return repoList.reduce(this.countRepoLanguage, {});
  }

  countRepoLanguage(counter, repository) {
    counter[repository.language] = (counter[repository.language] || 0) + 1;
    return counter;
  }

  createColors(array) {
    let colors = [];

    for (let i = 0; i < array.length; i++) {
      const hue = Math.floor(Math.random() * 10);
      const number1 = Math.floor(Math.random() * 23);
      const number2 = Math.floor(Math.random() * 255 + 1);
      const number3 = Math.floor(Math.random() * 255 + 1);
      const color = "rgba(".concat(number2, ", ").concat(number1, ", ").concat(number3, ", 0.").concat(hue);
      colors.push(color);
    }

    return colors;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "languageChart-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "PROJECT LANGUAGES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      id: "pieChart",
      ref: this.chartRef,
      width: "403",
      height: "302",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }));
  }

}

LanguageChart.spropTypes = {
  repositoryList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (LanguageChart);

/***/ }),

/***/ "./src/components/lanuage-icons/LanguageIcons.css":
/*!********************************************************!*\
  !*** ./src/components/lanuage-icons/LanguageIcons.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageIcons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/lanuage-icons/LanguageIcons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageIcons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/lanuage-icons/LanguageIcons.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LanguageIcons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/lanuage-icons/LanguageIcons.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/lanuage-icons/LanguageIcons.js":
/*!*******************************************************!*\
  !*** ./src/components/lanuage-icons/LanguageIcons.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LanguageIcons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageIcons.css */ "./src/components/lanuage-icons/LanguageIcons.css");
/* harmony import */ var _LanguageIcons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LanguageIcons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/icons.js */ "./src/assets/icons/icons.js");
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/lanuage-icons/LanguageIcons.js";





class LanguageIcons extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let languages = this.props.languages;

    for (let i = 0; i < languages.length; i++) {
      if (languages[i] === "Angular") {
        let angularIcon = document.createElement("IMG");
        angularIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][0];
        angularIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(angularIcon);
      } else if (languages[i] === "C#") {
        let csharpIcon = document.createElement("IMG");
        csharpIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][1];
        csharpIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(csharpIcon);
      } else if (languages[i] === "Cypress") {
        let cypressIcon = document.createElement("IMG");
        cypressIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][2];
        cypressIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(cypressIcon);
      } else if (languages[i] === "Firebase") {
        let firebaseIcon = document.createElement("IMG");
        firebaseIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][3];
        firebaseIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(firebaseIcon);
      } else if (languages[i] === "HTML") {
        let htmlIcon = document.createElement("IMG");
        htmlIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][4];
        htmlIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(htmlIcon);
      } else if (languages[i] === "JavaScript") {
        let javaScriptIcon = document.createElement("IMG");
        javaScriptIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][5];
        javaScriptIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(javaScriptIcon);
      } else if (languages[i] === "SQL") {
        let mySQLIcon = document.createElement("IMG");
        mySQLIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][6];
        mySQLIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(mySQLIcon);
      } else if (languages[i] === "React") {
        let reactIcon = document.createElement("IMG");
        reactIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][7];
        reactIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(reactIcon);
      } else if (languages[i] === "TypeScript") {
        let typeScriptIcon = document.createElement("IMG");
        typeScriptIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][8];
        typeScriptIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(typeScriptIcon);
      } else if (languages[i] === "Vue") {
        let vueIcon = document.createElement("IMG");
        vueIcon.src = _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["icons"][9];
        vueIcon.className = 'languageIcon';
        document.getElementById(this.props.currentProject).append(vueIcon);
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "languageIconWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, this.props.purpose), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "languageIcons",
      id: this.props.currentProject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }));
  }

}

LanguageIcons.propTypes = {
  languages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  currentProject: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  purpose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LanguageIcons);

/***/ }),

/***/ "./src/components/loading-bar/LoadingBar.css":
/*!***************************************************!*\
  !*** ./src/components/loading-bar/LoadingBar.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoadingBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loading-bar/LoadingBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoadingBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loading-bar/LoadingBar.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoadingBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loading-bar/LoadingBar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/loading-bar/LoadingBar.js":
/*!**************************************************!*\
  !*** ./src/components/loading-bar/LoadingBar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingBar.css */ "./src/components/loading-bar/LoadingBar.css");
/* harmony import */ var _LoadingBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingBar_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/loading-bar/LoadingBar.js";



const LoadingBar = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loadingBars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingBar);

/***/ }),

/***/ "./src/components/page-header/PageHeader.css":
/*!***************************************************!*\
  !*** ./src/components/page-header/PageHeader.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page-header/PageHeader.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page-header/PageHeader.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page-header/PageHeader.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/page-header/PageHeader.js":
/*!**************************************************!*\
  !*** ./src/components/page-header/PageHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader.css */ "./src/components/page-header/PageHeader.css");
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/page-header/PageHeader.js";




const PageHeader = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.title);
};

PageHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./src/components/progress-bar/filler.css":
/*!************************************************!*\
  !*** ./src/components/progress-bar/filler.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./filler.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/filler.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./filler.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/filler.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./filler.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/filler.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/progress-bar/filler.js":
/*!***********************************************!*\
  !*** ./src/components/progress-bar/filler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filler_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filler.css */ "./src/components/progress-bar/filler.css");
/* harmony import */ var _filler_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filler_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/progress-bar/filler.js";




const Filler = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filler",
    style: {
      width: "".concat(props.percent, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

Filler.propTypes = {
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filler);

/***/ }),

/***/ "./src/components/progress-bar/progressBar.css":
/*!*****************************************************!*\
  !*** ./src/components/progress-bar/progressBar.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./progressBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/progressBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./progressBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/progressBar.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./progressBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/progress-bar/progressBar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/progress-bar/progressBar.js":
/*!****************************************************!*\
  !*** ./src/components/progress-bar/progressBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progressBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressBar.css */ "./src/components/progress-bar/progressBar.css");
/* harmony import */ var _progressBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progressBar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filler.js */ "./src/components/progress-bar/filler.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/progress-bar/progressBar.js";





const ProgressBar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "PERCENT COMPLETE: ", props.percentage, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progressBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filler_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percent: props.percentage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })));
};

ProgressBar.propTypes = {
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/components/repo-menu/RepoMenu.css":
/*!***********************************************!*\
  !*** ./src/components/repo-menu/RepoMenu.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RepoMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/repo-menu/RepoMenu.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RepoMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/repo-menu/RepoMenu.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./RepoMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/repo-menu/RepoMenu.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/repo-menu/RepoMenu.js":
/*!**********************************************!*\
  !*** ./src/components/repo-menu/RepoMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lanuage_icons_LanguageIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lanuage-icons/LanguageIcons.js */ "./src/components/lanuage-icons/LanguageIcons.js");
/* harmony import */ var _RepoMenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RepoMenu.css */ "./src/components/repo-menu/RepoMenu.css");
/* harmony import */ var _RepoMenu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RepoMenu_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/repo-menu/RepoMenu.js";





function RepoMenu(props) {
  function visitURL(url) {
    window.location.href = url;
  }

  function formatLanguages(language) {
    return [language];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "repoMenu-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "ON GITHUB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "repoMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object.keys(props.repositoryList).map(repo => {
    let repository = props.repositoryList[repo];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "repoMenu-item",
      key: repo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Repository:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " ", repository.name, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Created:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "repoText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, " ", repository.createdAt))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "repoText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, repository.description, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "github-btn",
      onClick: e => visitURL(repository.githubURL, e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Click to visit the source code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lanuage_icons_LanguageIcons_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      languages: formatLanguages(repository.language),
      currentProject: repository.name,
      purpose: "Language: ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  })));
}

RepoMenu.propTypes = {
  repositoryList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (RepoMenu);

/***/ }),

/***/ "./src/components/sidebar/Sidebar.css":
/*!********************************************!*\
  !*** ./src/components/sidebar/Sidebar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidebar/Sidebar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidebar/Sidebar.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidebar/Sidebar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.css */ "./src/components/sidebar/Sidebar.css");
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/components/sidebar/Sidebar.js";




function sidebar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "sidebar_nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mobileMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "MENU"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebarMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sidebarLinkWrapper",
    onClick: e => props.changeBackground('home', e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sidebarLink",
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sidebarLinkWrapper",
    onClick: e => props.changeBackground('bio', e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sidebarLink",
    to: "/bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "About Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sidebarLinkWrapper",
    onClick: e => props.changeBackground('projects', e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sidebarLink",
    to: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sidebarLinkWrapper",
    onClick: e => props.changeBackground('contact', e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sidebarLink",
    to: "./contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Contact")))));
}

/* harmony default export */ __webpack_exports__["default"] = (sidebar);

/***/ }),

/***/ "./src/constants/ActionTypes.js":
/*!**************************************!*\
  !*** ./src/constants/ActionTypes.js ***!
  \**************************************/
/*! exports provided: RECEIVE_REPOS, COUNT_LANGUAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_REPOS", function() { return RECEIVE_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_LANGUAGES", function() { return COUNT_LANGUAGES; });
// PROJECT ACTION TYPES
const RECEIVE_REPOS = 'RECEIVE_REPOS';
const COUNT_LANGUAGES = 'COUNT_LANGUAGES';

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes */ "./src/constants/ActionTypes.js");
/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState.js */ "./src/constants/initialState.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  action: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__,
  initialState: _initialState_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/constants/initialState.js":
/*!***************************************!*\
  !*** ./src/constants/initialState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  personalProjects: {
    1: {
      name: "Elenor",
      description: "This is the portfolio for the talanted artist Shaina Morales. The goal was to have a very minimal site so that the content was the main focus. Navigation is controlled by a fixed menu bar, and a user can intuitively browse through a collection of Shaina's work. Code and Applicatoin Design by myself. Art Direction by Shaina Morales.",
      image: null,
      languages: ["React", "JavaScript", "Firebase"],
      percentComplete: 75,
      githubURL: "https://github.com/68thandMaine/Eleno-r",
      readMeURL: "https://github.com/68thandMaine/Eleno-r/blob/master/ReadMe.md"
    },
    2: {
      name: "Elenor Server",
      description: "The Elenor Sever project is a C# web api that uses the ORM Entity Framework Core to communicate with a SQL database. Elenor Server contains all the classes necessary for the Eleno-r application and the Mission Control application to function. Currently, Elenor Server follows a repository design pattern which is total overkill and will be refactored. For more on this see my blog post! It's a deep dive into using Entity Framework with a Repository Design pattern. I explore if this is necessary, and what the benefits are. TL / DR: Don't blindly follow tutorials.",
      image: null,
      languages: ["C#"],
      percentComplete: 25,
      githubURL: "https://github.com/68thandMaine/ElenorServer/tree/master/ElenorServer",
      readMeURL: "https://github.com/68thandMaine/ElenorServer/blob/master/ElenorServer/ReadMe.md"
    },
    3: {
      name: "Mission-Control",
      description: "I am building Mission Control for the artist Shaina Morales. This project is a web app that controls content on her portfolio. It also is a tool that she can use to source content for her collage work.",
      image: null,
      percentComplete: 25,
      languages: ["Vue", "JavaScript"],
      githubURL: "https://github.com/68thandMaine/MissionControl",
      readMeURL: "https://github.com/68thandMaine/MissionControl/blob/master/README.md"
    },
    4: {
      name: "Hypetown",
      description: "Have you ever heard a band that you wanted to see live? I'm sure you'd be hard pressed to say no. Hypetown is your friend in the entertainment age. Simply put in your location and find new music playing near you.",
      image: null,
      percentComplete: 85,
      languages: ["Angular", "TypeScript"],
      githubURL: "https://github.com/68thandMaine/HypeTown",
      readMeURL: "https://github.com/68thandMaine/HypeTown/blob/master/README.md"
    },
    5: {
      name: "Tumbleweed Bakehouse",
      description: "This app was built to help a bread maker with her business",
      image: null,
      percentComplete: 90,
      languages: ["C#", "SQL"],
      githubURL: "https://github.com/68thandMaine/tumbleweedbakehouse",
      readMeURL: "https://github.com/68thandMaine/tumbleweedbakehouse/blob/master/README.md"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (initialState);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/animations.css */ "./src/styles/animations.css");
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_animations_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/fonts.css */ "./src/styles/fonts.css");
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_media_queries_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/media-queries.css */ "./src/styles/media-queries.css");
/* harmony import */ var _styles_media_queries_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_media_queries_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/index.js";








 // Global Styles





const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_7__["unregister"]();

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _projects_gitHubRepositoryReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/gitHubRepositoryReducer.js */ "./src/reducers/projects/gitHubRepositoryReducer.js");
/* harmony import */ var _projects_projectsReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projectsReducer.js */ "./src/reducers/projects/projectsReducer.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  gitHubRepositories: _projects_gitHubRepositoryReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  personalProjects: _projects_projectsReducer_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/projects/gitHubRepositoryReducer.js":
/*!**********************************************************!*\
  !*** ./src/reducers/projects/gitHubRepositoryReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/constants/ActionTypes.js");


const gitHubRepositoryReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_REPOS"]:
      {
        newState = Object.assign({}, state);
        newState = action.repoList;
        return newState;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (gitHubRepositoryReducer);

/***/ }),

/***/ "./src/reducers/projects/projectsReducer.js":
/*!**************************************************!*\
  !*** ./src/reducers/projects/projectsReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/constants/ActionTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");



const projectsReducer = (state = _constants__WEBPACK_IMPORTED_MODULE_1__["default"], action) => {
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (projectsReducer);

/***/ }),

/***/ "./src/routes/Routes.js":
/*!******************************!*\
  !*** ./src/routes/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_about_About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/about/About.js */ "./src/views/about/About.js");
/* harmony import */ var _views_contact_Contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/contact/Contact.js */ "./src/views/contact/Contact.js");
/* harmony import */ var _views_error_Error404_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/error/Error404.js */ "./src/views/error/Error404.js");
/* harmony import */ var _views_home_Home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/home/Home.js */ "./src/views/home/Home.js");
/* harmony import */ var _views_pdf_viewer_PDFViewer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/pdf-viewer/PDFViewer.js */ "./src/views/pdf-viewer/PDFViewer.js");
/* harmony import */ var _views_projects_Projects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/projects/Projects.js */ "./src/views/projects/Projects.js");
/* harmony import */ var _services_Pdf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/Pdf.js */ "./src/services/Pdf.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _route_transitions_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-transitions.css */ "./src/routes/route-transitions.css");
/* harmony import */ var _route_transitions_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_route_transitions_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/routes/Routes.js";

 // COMPONENTS







 // ROUTING TRANSITION




function Routes({
  location
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "route-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["TransitionGroup"], {
    className: "transition-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["CSSTransition"], {
    key: location.key,
    timeout: {
      enter: 900,
      exit: 300
    },
    classNames: 'fade',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "route-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _views_home_Home_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/bio",
    component: _views_about_About_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/resume",
    render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_pdf_viewer_PDFViewer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      backend: _services_Pdf_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      src: "/DevRes.pdf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/projects",
    component: _views_projects_Projects_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/contact",
    component: _views_contact_Contact_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _views_error_Error404_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Routes));

/***/ }),

/***/ "./src/routes/route-transitions.css":
/*!******************************************!*\
  !*** ./src/routes/route-transitions.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./route-transitions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/route-transitions.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./route-transitions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/route-transitions.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./route-transitions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/route-transitions.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/Pdf.js":
/*!*****************************!*\
  !*** ./src/services/Pdf.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDFJs; });
class PDFJs {
  constructor() {
    this.init = (source, element) => {
      const iframe = document.createElement('iframe');
      iframe.src = "/pdfjs-2.1.266-dist/web/viewer.html?file=".concat(source);
      iframe.width = '100%';
      iframe.height = '100%';
      element.appendChild(iframe);
    };
  }

}

/***/ }),

/***/ "./src/services/api/EmailService.js":
/*!******************************************!*\
  !*** ./src/services/api/EmailService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EmailService = {
  sendEmail: async email => {
    console.log(email);
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: "user_pUftPGojxhnWyxBQ1qhLK",
        service_id: "gmail",
        template_id: "template_rZUsPXOt",
        template_params: email
      })
    });
    return response.statusText;
  },
  filterSpam: message => {
    const messageFields = Object.keys(message);

    for (let i = 0; i < messageFields.length; i++) {
      if (messageFields[i] === 'hpFirstname' || messageFields[i] === 'hpLastName' || messageFields[i] === 'hpEmail' || messageFields[i] === 'hpMessage') {
        return true;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EmailService);

/***/ }),

/***/ "./src/services/api/GithubService.js":
/*!*******************************************!*\
  !*** ./src/services/api/GithubService.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const GithubService = {
  getRepos: async () => {
    const response = await fetch('https://api.github.com/users/68thandMaine/repos?per_page=100');
    const repoArray = await response.json();
    const repositoryArray = [];
    repoArray.forEach(repo => {
      let dateCreated = new Date(repo.created_at);
      let reformattedRepo = {
        name: repo.name.replace(/-/, ' '),
        githubURL: repo.html_url,
        createdAt: dateCreated.toUTCString().split(' ', 4).join(' '),
        description: repo.description === null ? "There is no provided description for this project." : repo.description,
        language: repo.language
      };

      if (reformattedRepo.language !== null) {
        repositoryArray.push(reformattedRepo);
      }
    });
    return repositoryArray;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GithubService);

/***/ }),

/***/ "./src/styles/animations.css":
/*!***********************************!*\
  !*** ./src/styles/animations.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./animations.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/animations.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./animations.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/animations.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./animations.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/animations.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/fonts.css":
/*!******************************!*\
  !*** ./src/styles/fonts.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/fonts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/fonts.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/fonts.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/media-queries.css":
/*!**************************************!*\
  !*** ./src/styles/media-queries.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./media-queries.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/media-queries.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./media-queries.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/media-queries.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./media-queries.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/media-queries.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/about/About.css":
/*!***********************************!*\
  !*** ./src/views/about/About.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/about/About.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/about/About.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/about/About.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/about/About.js":
/*!**********************************!*\
  !*** ./src/views/about/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/views/about/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_about_AboutBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/about/AboutBody.js */ "./src/components/about/AboutBody.js");
/* harmony import */ var _components_about_LinkBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/about/LinkBar.js */ "./src/components/about/LinkBar.js");
/* harmony import */ var _components_about_TextAnimation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/about/TextAnimation.js */ "./src/components/about/TextAnimation.js");
/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/button/button.js */ "./src/components/button/button.js");
/* harmony import */ var _components_about_PictureFrame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/about/PictureFrame.js */ "./src/components/about/PictureFrame.js");
/* harmony import */ var _components_page_header_PageHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/page-header/PageHeader.js */ "./src/components/page-header/PageHeader.js");
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/about/About.js";









function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-wrapper",
    "data-cy": "about-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_page_header_PageHeader_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "WELCOME TO MY LITTLE CORNER OF THE INTERNET",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutBody-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bodyIntro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introWord",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "I'M")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introPicture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_PictureFrame_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introWord",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textAnimation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_TextAnimation_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bodyContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bodyContentGreeting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "living in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "portlandText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "portland ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "aboutBody_span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "oregon"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bodyLinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_LinkBar_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bodyText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_AboutBody_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/views/contact/Contact.css":
/*!***************************************!*\
  !*** ./src/views/contact/Contact.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/contact/Contact.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/contact/Contact.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/contact/Contact.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/contact/Contact.js":
/*!**************************************!*\
  !*** ./src/views/contact/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_EmailService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/EmailService */ "./src/services/api/EmailService.js");
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.css */ "./src/views/contact/Contact.css");
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Contact_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_page_header_PageHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/page-header/PageHeader.js */ "./src/components/page-header/PageHeader.js");
/* harmony import */ var _components_contact_greeting_ContactGreeting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/contact-greeting/ContactGreeting.js */ "./src/components/contact-greeting/ContactGreeting.js");
/* harmony import */ var _components_contact_form_ContactForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/contact-form/ContactForm.js */ "./src/components/contact-form/ContactForm.js");
/* harmony import */ var _components_arrows_Arrows_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/arrows/Arrows.js */ "./src/components/arrows/Arrows.js");

var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/contact/Contact.js";








function Contact() {
  // Declare state values for displaying the form or not
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_playourheartout_Documents_Projects_Personal_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        displayForm = _useState2[0],
        set_displayForm = _useState2[1]; //useState() takes the intitial state of displayForm


  function handleToggleForm() {
    let toggleForm = !displayForm;
    set_displayForm(toggleForm);

    if (document.querySelector('.contactForm-body')) {
      return null;
    } else setTimeout(() => {
      document.querySelector('.contactForm-body').scrollIntoView();
    }, 300);
  }

  function handleSendMessage(message) {
    _services_api_EmailService__WEBPACK_IMPORTED_MODULE_2__["default"].filterSpam(message) ? console.log('spam caught') : _services_api_EmailService__WEBPACK_IMPORTED_MODULE_2__["default"].sendEmail(message); // handleToggleForm();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "contact-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page_header_PageHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "LETS TALK",
    className: "contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_contact_greeting_ContactGreeting_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), displayForm === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "arrowButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_arrows_Arrows_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showForm: handleToggleForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_contact_form_ContactForm_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sendMessage: handleSendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/views/error/Error404.css":
/*!**************************************!*\
  !*** ./src/views/error/Error404.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Error404.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/error/Error404.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Error404.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/error/Error404.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Error404.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/error/Error404.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/error/Error404.js":
/*!*************************************!*\
  !*** ./src/views/error/Error404.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error404_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error404.css */ "./src/views/error/Error404.css");
/* harmony import */ var _Error404_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Error404_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/error/Error404.js";



function Error404() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Sorry but that page doesnt exist."));
}

/* harmony default export */ __webpack_exports__["default"] = (Error404);

/***/ }),

/***/ "./src/views/home/Home.css":
/*!*********************************!*\
  !*** ./src/views/home/Home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/home/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/home/Home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/home/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/home/Home.js":
/*!********************************!*\
  !*** ./src/views/home/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ "./src/views/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/home/Home.js";



function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "HELLO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "My name is Chris"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "And I'm a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "trippyText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "developer"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/views/pdf-viewer/PDFViewer.css":
/*!********************************************!*\
  !*** ./src/views/pdf-viewer/PDFViewer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PDFViewer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/pdf-viewer/PDFViewer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PDFViewer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/pdf-viewer/PDFViewer.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PDFViewer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/pdf-viewer/PDFViewer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/pdf-viewer/PDFViewer.js":
/*!*******************************************!*\
  !*** ./src/views/pdf-viewer/PDFViewer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PDFViewer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFViewer.css */ "./src/views/pdf-viewer/PDFViewer.css");
/* harmony import */ var _PDFViewer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PDFViewer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/pdf-viewer/PDFViewer.js";

 // import {Resume} from '../../assets/resume/resume.pdf';

class PDFViewer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.viewerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
    const src = this.props.src;
    const element = this.viewerRef.current;
    this.backend.init(src, element);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: this.viewerRef,
      className: "pdfViewer-container",
      "data-cy": "pdfViewer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PDFViewer);

/***/ }),

/***/ "./src/views/projects/Projects.css":
/*!*****************************************!*\
  !*** ./src/views/projects/Projects.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/projects/Projects.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/projects/Projects.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/views/projects/Projects.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/views/projects/Projects.js":
/*!****************************************!*\
  !*** ./src/views/projects/Projects.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.css */ "./src/views/projects/Projects.css");
/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Projects_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card/Card.js */ "./src/components/card/Card.js");
/* harmony import */ var _components_language_chart_LanguageChart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/language-chart/LanguageChart.js */ "./src/components/language-chart/LanguageChart.js");
/* harmony import */ var _components_loading_bar_LoadingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading-bar/LoadingBar */ "./src/components/loading-bar/LoadingBar.js");
/* harmony import */ var _components_repo_menu_RepoMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/repo-menu/RepoMenu.js */ "./src/components/repo-menu/RepoMenu.js");
var _jsxFileName = "/Users/playourheartout/Documents/Projects/Personal/portfolio/src/views/projects/Projects.js";









class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {// projectToView: null,
    };
    this.viewToShow = this.viewToShow.bind(this);
  }

  componentWillUpdate() {
    this.viewToShow();
  }

  componentDidMount() {
    this.viewToShow();
  }

  viewToShow() {
    let repositories = Object.entries(this.props.repositories);

    if (repositories.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_bar_LoadingBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_language_chart_LanguageChart_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      repositoryList: this.props.repositories,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Always Building")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body-menu-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "I love to code. There's just something about the logical creativity needed to create web applications that excites me."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Here you can find the body of my work from 2018 to present."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "I primarily write in C# or JavaScript, but I have experience working with some PHP as well."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "My projects are tailored to the specific needs of each client, and I enjoy the collaborative effort that brings code to life."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Essentially I design, build, and maintain meaningful web applications that are easy to use.")), this.viewToShow()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body-project-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      repositoryList: this.props.personalProjects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_repo_menu_RepoMenu_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      repositoryList: this.props.repositories,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }))));
  }

}

Projects.propTypes = {
  repositories: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array // countedLanguages: PropTypes.object

};

const mapStateToProps = state => {
  return {
    repositories: state.gitHubRepositories,
    personalProjects: state.personalProjects.initialState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Projects));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/playourheartout/Documents/Projects/Personal/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/playourheartout/Documents/Projects/Personal/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map