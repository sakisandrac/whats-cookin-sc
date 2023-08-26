/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentUser: () => (/* binding */ currentUser),
/* harmony export */   ingredientsData: () => (/* binding */ ingredientsData),
/* harmony export */   mainView: () => (/* binding */ mainView),
/* harmony export */   mainViewCardContainer: () => (/* binding */ mainViewCardContainer),
/* harmony export */   myRecipesView: () => (/* binding */ myRecipesView),
/* harmony export */   recipeData: () => (/* binding */ recipeData),
/* harmony export */   savedCardContainer: () => (/* binding */ savedCardContainer),
/* harmony export */   searchBar: () => (/* binding */ searchBar),
/* harmony export */   searchButton: () => (/* binding */ searchButton),
/* harmony export */   searchByToggle: () => (/* binding */ searchByToggle),
/* harmony export */   singleRecipeView: () => (/* binding */ singleRecipeView)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _images_bookmark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _images_bookmark_filled_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _images_sad_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _images_sad_filled_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _images_happy_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _images_happy_filled_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
// DOM UPDATES
















//GLOBAL VARIABLE
let currentUser;
let ingredientsData;
let userData;
let recipeData;

// QUERY SELECTORS
const mainContainer = document.querySelector('main');
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');
const mainViewCardContainer = document.querySelector('#mainViewCardContainer');
const singleRecipeView = document.querySelector('#singleRecipeView');
const searchBar = document.querySelector('#searchInput');
const searchByToggle = document.querySelector('#searchSelect');
const searchButton = document.querySelector('#searchIconBackground');
const savedCardContainer = document.querySelector('#savedCardContainer');

const start = () => {
  Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)('users'), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)('ingredients'), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_12__.fetchAPI)('recipes')]).then((data) => {
    userData = data[0];
    ingredientsData = data[1].ingredients;
    recipeData = data[2].recipes;
    currentUser = (0,_users__WEBPACK_IMPORTED_MODULE_11__.getRandomUser)(userData);
    currentUser.happyRecipeRatings = [];
    currentUser.sadRecipeRatings = [];
    currentUser.deletedRecipes = [];
    
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.renderRecipeCards)(mainViewCardContainer, recipeData, currentUser);
  });
};

// EVENT LISTENERS
window.addEventListener('load', start);
searchButton.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_13__.searchBarClicked);
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchButton.click();
  }
});
singleRecipeView.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toggleBookmark)(e, currentUser, recipeData);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toggleRating)(e, currentUser, recipeData);
});
mainContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-img') || e.target.classList.contains('recipe-name')) {
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toSingleRecipeView)(e, recipeData, ingredientsData);
  }
});
myRecipesBtn.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toMyRecipeView)(currentUser);
});
dashboardBtn.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toDashboardView)(currentUser);
});
mainViewCardContainer.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toggleBookmark)(e, currentUser, recipeData);
});
myRecipesView.addEventListener('click', (e) => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.toggleBookmark)(e, currentUser, recipeData);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_13__.removeRecipeCard)(e);
});




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f9f9f9;\n  margin: 0;\n  font-family: \"Sen\", sans-serif;\n}\n\n/* NAVIGATION BAR */\nnav {\n  background-color: white;\n  height: 60px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.nav-flexbox {\n  display: flex;\n  min-width: 100%;\n  justify-content: space-between;\n}\n\n#navColorBar {\n  background-color: #2a94e5;\n  height: 30px;\n}\n\n.icon {\n  height: 30px;\n  padding: 8px;\n}\n\n.icon:hover,\n.recipe-card:hover,\n.search-toggle {\n  cursor: pointer;\n}\n\n.icon-label {\n  margin: 0;\n}\n\n.search-flexbox {\n  display: flex;\n  min-width: 400px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#searchInput {\n  min-width: 300px;\n  height: 40px;\n  border: none;\n  text-align: left;\n  margin-left: 15px;\n}\n\n#searchInput:focus {\n  outline: none;\n}\n\n#searchSelect {\n  padding: 10px;\n  border-radius: 20px;\n}\n\n#searchIconBackground {\n  background-color: #ffe45e;\n  border-radius: 50%;\n  padding: 6px;\n}\n\n#searchIcon {\n  height: 20px;\n}\n\n.right-nav-flexbox,\n.icon-flexbox {\n  display: flex;\n  align-items: center;\n}\n\n.right-nav-flexbox {\n  justify-content: center;\n}\n\n.icon-flexbox {\n  flex-direction: column;\n  margin: 15px;\n}\n\n/* HEADER */\nheader {\n  margin: 15px 25px;\n  background-color: #2a94e5;\n  padding: 1px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n}\n\nh1 {\n  color: white;\n  font-size: 2.5rem;\n  margin: 0 0 0 20px;\n}\n\n#cookinText {\n  text-shadow: 1px 1px 2px grey, 0 0 0.05em white;\n  font-family: \"Leckerli One\", cursive;\n  font-size: 2.5rem;\n}\n\n/* MAIN VIEW */\n.discoverHeader {\n  background-color: #ffe45e;\n  color: black;\n  width: 250px;\n  font-size: 1.5rem;\n  padding: 9px;\n  margin-left: 50px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px;\n}\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  height: 300px;\n  width: 275px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n}\n\n.recipe-img {\n  width: 275px;\n  max-height: 310px;\n  object-fit: contain;\n}\n\n.recipe-title-flex {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 15px;\n}\n\n.recipe-name {\n  width: 80%;\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 10px;\n  margin-right: 0;\n}\n\n.recipe-tag {\n  background-color: #ffe45e;\n  width: 100px;\n  margin: 0;\n  padding-left: 10px;\n}\n\n.bookmark-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.bookmark-icon {\n  height: 25px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n/* RECIPE VIEW */\n#singleRecipeView,\n.recipe-header-flex {\n  display: flex;\n  justify-content: center;\n}\n\n.single-recipe-view-flex,\n.side-info-flex,\n.tags-text-flex,\n.recipe-instructions-flex {\n  display: flex;\n  flex-direction: column;\n}\n\n.single-recipe-view-flex {\n  align-items: center;\n  height: 500px;\n  width: 800px;\n  margin: 40px;\n}\n\n.recipe-content-flex {\n  display: flex;\n  justify-content: space-evenly;\n  width: 80vw;\n  border-top: dashed 5px pink;\n  padding-bottom: 20px;\n}\n\n.tags-text-flex {\n  font-size: 15px;\n  margin: 0;\n}\n\n.recipe-instructions-flex {\n  width: 40vw;\n}\n\n.vertical-divider {\n  border-left: dashed 5px pink;\n}\n\n.instruction-title {\n  text-align: center;\n}\n\n.single-recipe-img {\n  max-width: 500px;\n  height: 500px;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n.recipe-title {\n  font-family: \"Leckerli One\", cursive;\n  font-size: 2rem;\n  margin-right: 2rem;\n}\n\n.rating-icon {\n  width: 30px;\n  padding: 5px;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,SAAA;EACA,8BAAA;AACF;;AAEA,mBAAA;AACA;EACE,uBAAA;EACA,YAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,8BAAA;AACF;;AAEA;EACE,yBAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;AACF;;AAEA;;;EAGE,eAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,aAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,yBAAA;EACA,kBAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;;EAEE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,sBAAA;EACA,YAAA;AACF;;AAEA,WAAA;AACA;EACE,iBAAA;EACA,yBAAA;EACA,YAAA;EACA,2CAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,+CAAA;EACA,oCAAA;EACA,iBAAA;AACF;;AAEA,cAAA;AACA;EACE,yBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,2CAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,2CAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;AACF;;AAEA;EACE,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,yBAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,eAAA;AACF;;AAEA,gBAAA;AACA;;EAEE,aAAA;EACA,uBAAA;AACF;;AAEA;;;;EAIE,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,6BAAA;EACA,WAAA;EACA,2BAAA;EACA,oBAAA;AACF;;AAEA;EACE,eAAA;EACA,SAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,4BAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,oCAAA;EACA,eAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;AACF","sourcesContent":["body {\n  background-color: #f9f9f9;\n  margin: 0;\n  font-family: 'Sen', sans-serif;\n}\n\n/* NAVIGATION BAR */\nnav {\n  background-color: white;\n  height: 60px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.nav-flexbox {\n  display: flex;\n  min-width: 100%;\n  justify-content: space-between;\n}\n\n#navColorBar {\n  background-color: #2a94e5;\n  height: 30px;\n}\n\n.icon {\n  height: 30px;\n  padding: 8px;\n}\n\n.icon:hover,\n.recipe-card:hover,\n.search-toggle {\n  cursor: pointer;\n}\n\n.icon-label {\n  margin: 0;\n}\n\n.search-flexbox {\n  display: flex;\n  min-width: 400px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#searchInput {\n  min-width: 300px;\n  height: 40px;\n  border: none;\n  text-align: left;\n  margin-left: 15px;\n}\n\n#searchInput:focus {\n  outline: none;\n}\n\n#searchSelect {\n  padding: 10px;\n  border-radius: 20px;\n}\n\n#searchIconBackground {\n  background-color: #ffe45e;\n  border-radius: 50%;\n  padding: 6px;\n}\n\n#searchIcon {\n  height: 20px;\n}\n\n.right-nav-flexbox,\n.icon-flexbox {\n  display: flex;\n  align-items: center;\n}\n\n.right-nav-flexbox {\n  justify-content: center;\n}\n\n.icon-flexbox {\n  flex-direction: column;\n  margin: 15px;\n}\n\n/* HEADER */\nheader {\n  margin: 15px 25px;\n  background-color: #2a94e5;\n  padding: 1px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n}\n\nh1 {\n  color: white;\n  font-size: 2.5rem;\n  margin: 0 0 0 20px;\n}\n\n#cookinText {\n  text-shadow: 1px 1px 2px grey, 0 0 0.05em white;\n  font-family: 'Leckerli One', cursive;\n  font-size: 2.5rem;\n}\n\n/* MAIN VIEW */\n.discoverHeader {\n  background-color: #ffe45e;\n  color: black;\n  width: 250px;\n  font-size: 1.5rem;\n  padding: 9px;\n  margin-left: 50px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px;\n}\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  height: 300px;\n  width: 275px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n}\n\n.recipe-img {\n  width: 275px;\n  max-height: 310px;\n  object-fit: contain;\n}\n\n.recipe-title-flex {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 15px;\n}\n\n.recipe-name {\n  width: 80%;\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 10px;\n  margin-right: 0;\n}\n\n.recipe-tag {\n  background-color: #ffe45e;\n  width: 100px;\n  margin: 0;\n  padding-left: 10px;\n}\n\n.bookmark-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.bookmark-icon {\n  height: 25px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n/* RECIPE VIEW */\n#singleRecipeView,\n.recipe-header-flex {\n  display: flex;\n  justify-content: center;\n}\n\n.single-recipe-view-flex,\n.side-info-flex,\n.tags-text-flex,\n.recipe-instructions-flex {\n  display: flex;\n  flex-direction: column;\n}\n\n.single-recipe-view-flex {\n  align-items: center;\n  height: 500px;\n  width: 800px;\n  margin: 40px;\n}\n\n.recipe-content-flex {\n  display: flex;\n  justify-content: space-evenly;\n  width: 80vw;\n  border-top: dashed 5px pink;\n  padding-bottom: 20px;\n}\n\n.tags-text-flex {\n  font-size: 15px;\n  margin: 0;\n}\n\n.recipe-instructions-flex {\n  width: 40vw;\n}\n\n.vertical-divider {\n  border-left: dashed 5px pink;\n}\n\n.instruction-title {\n  text-align: center;\n}\n\n.single-recipe-img {\n  max-width: 500px;\n  height: 500px;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n.recipe-title {\n  font-family: 'Leckerli One', cursive;\n  font-size: 2rem;\n  margin-right: 2rem;\n}\n\n.rating-icon {\n  width: 30px;\n  padding: 5px;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/user.png");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/home.png");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/search.png");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/restaurant.png");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/bookmark.png");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/bookmark-filled.png");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/sad.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/sad-filled.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/happy.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/happy-filled.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkUserForRecipe: () => (/* binding */ checkUserForRecipe),
/* harmony export */   getRandomIndex: () => (/* binding */ getRandomIndex),
/* harmony export */   getRandomUser: () => (/* binding */ getRandomUser)
/* harmony export */ });
const getRandomIndex = (usersLength) => {
  return Math.floor(Math.random() * usersLength);
};
const getRandomUser = (userData) => {
  if (userData) {
    return userData.users[getRandomIndex(userData.users.length)];
  } else {
    return "user data not found";
  }
};

const checkUserForRecipe = (currentUser, recipe) => {
  if (currentUser.recipesToCook.length > 0) {
    return currentUser.recipesToCook
      .map((recipe) => {
        return recipe.id;
      })
      .some((id) => {
        return recipe.id === id;
      });
  }
};





/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAPI: () => (/* binding */ fetchAPI),
/* harmony export */   postAPI: () => (/* binding */ postAPI)
/* harmony export */ });
const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => errorHandling(err));
};

const errorHandling = (err) => {
  alert(`${err.name}: ${err.message}!\nWhat's Cookin failed to obtain data from the server.`);
};

const postAPI = (user) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    if(data.message.includes('already')) {
      throw new Error('Recipe already saved!');
    }
  })
  .catch((err) => alert(err))
}




/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeRecipeCard: () => (/* binding */ removeRecipeCard),
/* harmony export */   renderRecipeCards: () => (/* binding */ renderRecipeCards),
/* harmony export */   searchBarClicked: () => (/* binding */ searchBarClicked),
/* harmony export */   toDashboardView: () => (/* binding */ toDashboardView),
/* harmony export */   toMyRecipeView: () => (/* binding */ toMyRecipeView),
/* harmony export */   toSingleRecipeView: () => (/* binding */ toSingleRecipeView),
/* harmony export */   toggleBookmark: () => (/* binding */ toggleBookmark),
/* harmony export */   toggleRating: () => (/* binding */ toggleRating)
/* harmony export */ });
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _compile_ingredient_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _calculate_recipe_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _recipes_to_cook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);








// EVENT HANDLERS
const clearView = (views) => {
  views.forEach((view) => {
    view.innerHTML = '';
  });
};

const toMyRecipeView = (currentUser) => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView]);
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView], 'add');
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView], 'remove');
  _scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.placeholder = 'Search your bookmarked Recipes';
  renderSavedRecipes(_scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer, currentUser.recipesToCook, currentUser);
};

const toDashboardView = (currentUser) => {
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView], 'remove');
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView], 'add');
  renderRecipeCards(_scripts__WEBPACK_IMPORTED_MODULE_4__.mainViewCardContainer, _scripts__WEBPACK_IMPORTED_MODULE_4__.recipeData, currentUser);
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView]);
  _scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.placeholder = 'Search for new Recipes';
};

const toSingleRecipeView = (e, recipes, ingredients) => {
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView], 'add');
  toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView], 'remove');
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView, _scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer]);
  renderSingleRecipeView(e, recipes, ingredients);
};

const setView = () => {
  if (_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView.classList.contains('hidden')) {
    return _scripts__WEBPACK_IMPORTED_MODULE_4__.mainViewCardContainer;
  } else if (_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView.classList.contains('hidden')) {
    return _scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer;
  }
};

const searchResults = () => {
  if (_scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value.length === 0) {
    handleInvalidSearch(`You can't search for nothing!`);
    return _scripts__WEBPACK_IMPORTED_MODULE_4__.recipeData;
  } else if (_scripts__WEBPACK_IMPORTED_MODULE_4__.searchByToggle.value === 'tag') {
    return handleTagSearch();
  } else if (_scripts__WEBPACK_IMPORTED_MODULE_4__.searchByToggle.value === 'name') {
    return handleNameSearch();
  }
};

const searchBarClicked = () => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainViewCardContainer, _scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer, _scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView]);
  handleSearchResults(setView(), searchResults());
};

const handleInvalidSearch = (message) => {
  _scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value = '';
  _scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.placeholder = message;
};

const handleTagSearch = () => {
  if (_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView.classList.contains('hidden')) {
    return (0,_filters__WEBPACK_IMPORTED_MODULE_5__.filterByTag)(_scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value, _scripts__WEBPACK_IMPORTED_MODULE_4__.recipeData);
  } else if (_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView.classList.contains('hidden')) {
    return (0,_filters__WEBPACK_IMPORTED_MODULE_5__.filterByTag)(_scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook);
  }
};

const handleNameSearch = () => {
  if (_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView.classList.contains('hidden')) {
    return (0,_filters__WEBPACK_IMPORTED_MODULE_5__.filterByName)(_scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value, _scripts__WEBPACK_IMPORTED_MODULE_4__.recipeData);
  } else if (_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView.classList.contains('hidden')) {
    return (0,_filters__WEBPACK_IMPORTED_MODULE_5__.filterByName)(_scripts__WEBPACK_IMPORTED_MODULE_4__.searchBar.value, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook);
  }
};

const toggleSearchView = (view) => {
  if (view === _scripts__WEBPACK_IMPORTED_MODULE_4__.mainViewCardContainer) {
    toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainView], 'remove');
  } else {
    toggleHidden([_scripts__WEBPACK_IMPORTED_MODULE_4__.myRecipesView], 'remove');
  }
};

const setResults = (view, results) => {
  if (typeof results === 'string') {
    view.innerHTML = `<p>${results}</p>`;
  } else {
    renderRecipeCards(view, results, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser);
  }
};

const handleSearchResults = (view, results) => {
  toggleSearchView(view);
  setResults(view, results);
};

// DOM FUNCTIONS
const renderBookmarks = (currentUser, recipe) => {
  if ((0,_users__WEBPACK_IMPORTED_MODULE_0__.checkUserForRecipe)(currentUser, recipe)) {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked hidden" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked" alt="bookmark icon filled in">`;
  } else {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">`;
  }
};

const renderRating = (currentUser, recipe, level) => {
  if (currentUser[`${level}RecipeRatings`].includes(recipe)) {
    return `<img class="rating-icon unchecked ${level} hidden" alt="rating-icons" id="${recipe.id}" src="./images/${level}.png">
    <img class="rating-icon checked ${level}" alt="rating-icons" id="${recipe.id}" src="./images/${level}-filled.png">`;
  } else {
    return `<img class="rating-icon unchecked ${level}" alt="rating-icons"  id="${recipe.id}" src="./images/${level}.png">
    <img class="rating-icon checked hidden ${level}" alt="rating-icons" id="${recipe.id}" src="./images/${level}-filled.png">`;
  }
};

const renderRecipeCardTag = (recipe) => {
  if (recipe.tags.length > 0) {
    return `<p class="recipe-tag">${recipe.tags[0]}</p>`;
  } else {
    return `<p class="recipe-tag">(no tags)</p>`;
  }
};

const renderRecipeCards = (view, recipes, currentUser) => {
  clearView([_scripts__WEBPACK_IMPORTED_MODULE_4__.mainViewCardContainer, _scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer]);
  recipes.forEach((recipe) => {
    view.innerHTML += `
    <article class="recipe-card" id="${recipe.id}">
      <img class="recipe-img" src="${recipe.image}" id="${recipe.id}" alt="${recipe.name}">
      ${renderRecipeCardTag(recipe)}
      <div class="recipe-title-flex">
        <h2 class="recipe-name">${recipe.name}</h2>
        <div class="bookmark-flex">
        ${renderBookmarks(currentUser, recipe)}
        </div>
      </div>
    </article>`;
  });
};

const renderSavedRecipes = (view, recipes, currentUser) => {
  if (!currentUser.recipesToCook.length) {
    view.innerHTML = '<p>You have no saved recipe!</p>';
  } else {
    renderRecipeCards(view, recipes, currentUser);
  }
};

const isUnchecked = (e) => {
  if (e.target.classList.contains('unchecked')) {
    return true;
  }
};

const toggleHidden = (elements, type) => {
  elements.forEach((element) => {
    element.classList[type]('hidden');
  });
};

const toggleBookmark = (e, currentUser, recipeData) => {
  if (e.target.classList[0] === 'bookmark-icon') {
    let check = currentUser.deletedRecipes.some((recipe)=>{
      return recipe[0].id === parseInt(e.target.id)
    })
    
    if (isUnchecked(e) && !check) {
      (0,_apiCalls__WEBPACK_IMPORTED_MODULE_6__.postAPI)({userID: currentUser.id, recipeID: e.target.id})
      ;(0,_recipes_to_cook__WEBPACK_IMPORTED_MODULE_3__.recipesToCook)(e.target.id, currentUser, recipeData);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.nextElementSibling], 'remove');
    } else if(isUnchecked(e)){
      (0,_recipes_to_cook__WEBPACK_IMPORTED_MODULE_3__.recipesToCook)(e.target.id, currentUser, recipeData);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.nextElementSibling], 'remove');
    } else {
      (0,_recipes_to_cook__WEBPACK_IMPORTED_MODULE_3__.removeRecipes)(e.target.id, currentUser);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.previousElementSibling], 'remove');
      renderSavedRecipes(_scripts__WEBPACK_IMPORTED_MODULE_4__.savedCardContainer, currentUser.recipesToCook, currentUser);
    }
  }
};

const findRecipe = (e, recipes) => {
  return recipes.find((recipe) => {
    if (e.target.classList.contains('recipe-name')) {
      return recipe.id === parseInt(e.target.parentElement.parentElement.id);
    }
    return recipe.id === parseInt(e.target.id);
  });
};

const addToRatings = (eventId, currentUser, recipeData, level) => {
  currentUser[`${level}RecipeRatings`].push((0,_recipes_to_cook__WEBPACK_IMPORTED_MODULE_3__.matchRecipe)(eventId, recipeData));
};

const removeRatings = (eventId, currentUser, level) => {
  const recipes = currentUser[`${level}RecipeRatings`]
    .map((recipe) => {
      return recipe.id;
    })
    .map(String);

  const index = recipes.indexOf(`${eventId}`);
  currentUser[`${level}RecipeRatings`].splice(index, 1);
};

const toggleRating = (e, currentUser, recipeData) => {
  if (e.target.classList[0] === 'rating-icon') {
    if (isUnchecked(e)) {
      addToRatings(e.target.id, currentUser, recipeData, e.target.classList[2]);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.nextElementSibling], 'remove');
      const inverse = e.target.classList[2] === 'happy' ? 'sad' : 'happy';
      const deselect = document.querySelector(`.${inverse}.checked`);
      removeRatings(e.target.id, currentUser, inverse);
      toggleHidden([deselect], 'add');
      toggleHidden([deselect.previousElementSibling], 'remove');
    } else {
      removeRatings(e.target.id, currentUser, e.target.classList[2]);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.previousElementSibling], 'remove');
    }
  }
};

const renderSingleRecipeView = (e, recipes, ingredients) => {
  let recipe = findRecipe(e, recipes);
  _scripts__WEBPACK_IMPORTED_MODULE_4__.singleRecipeView.innerHTML += `
    <div class="single-recipe-view-flex">
      <img class="single-recipe-img" src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-header-flex">
        <h2 class="recipe-title">${recipe.name}</h2>
        <div class="bookmark-flex">
          ${renderBookmarks(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser, recipe)}
        </div>
        <div class="bookmark-flex">
        ${renderRating(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser, recipe, 'sad')}
      </div>
      <div class="bookmark-flex">
        ${renderRating(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser, recipe, 'happy')}
      </div>
      </div>
      <div class="recipe-content-flex">
        <div class="side-info-flex">
          <h2>Ingredients</h2>
          ${renderIngredients(recipe, ingredients)}
          <h2>Total Cost</h2>
          <span>${(0,_calculate_recipe_price__WEBPACK_IMPORTED_MODULE_2__.calculateRecipePrice)(recipe, ingredients)}</span>
          <h2>Tags</h2>
          <span class="recipe-tag-flex">
            ${renderTags(recipe)}
          </span>
        </div>
        <div class="vertical-divider"></div>
        <div class="recipe-instructions-flex">
          ${renderInstructions(recipe)}
        </div>
      </div>
    </div>`;
};

const renderInstructions = (recipe) => {
  let instructions = recipe.instructions;
  let output = '<h2 class="instruction-title">Instruction</h2>';
  instructions.forEach((ele) => {
    output += `<p>${ele.number}. ${ele.instruction}</p>`;
  });
  return output;
};

const renderIngredients = (recipe, ingredients) => {
  let ingredientItems = (0,_compile_ingredient_items__WEBPACK_IMPORTED_MODULE_1__.compileIngredientItems)(recipe, ingredients);
  let output = '';
  ingredientItems.forEach((ele) => {
    output += `<span>- ${ele}</span>`;
  });
  return output;
};

const renderTags = (recipe) => {
  let output = ``;
  recipe.tags.forEach((ele) => {
    output += `<span class="tags-text-flex">${ele}</span>`;
  });
  return output;
};

const removeRecipeCard = (e) => {
  if (e.target.classList.contains('bookmark-icon')) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
};




/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileIngredientItems: () => (/* binding */ compileIngredientItems)
/* harmony export */ });
/* harmony import */ var _get_ingredient_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


const compileIngredientItems = (recipe, ingredientsData) => {
  if (typeof recipe !== 'object' || Array.isArray(recipe)|| (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const ingredientItems = recipe.ingredients.map(ele => {
    return `${(0,_get_ingredient_name__WEBPACK_IMPORTED_MODULE_0__.getIngredientName)(ele.id, ingredientsData)} × ${ele.quantity.amount} ${ele.quantity.unit}`;
  });
  return ingredientItems;
};



/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIngredientName: () => (/* binding */ getIngredientName),
/* harmony export */   matchIngredient: () => (/* binding */ matchIngredient)
/* harmony export */ });
const matchIngredient = (id, ingredientsData) => {
  if (typeof id !== 'number' || (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const ingredient = ingredientsData.find(ingredient => { 
    return ingredient.id === id;
  });

  if (!ingredient) {
    return 'Error: no matching ingredient';
  }

  return ingredient;
};

const getIngredientName = (id, ingredientsData) => {
  const matchingResult = matchIngredient(id, ingredientsData);
  if (typeof matchingResult !== 'object') {
    return matchingResult;
  }
  return matchingResult.name;
};



/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRecipePrice: () => (/* binding */ calculateRecipePrice),
/* harmony export */   getIngredientCost: () => (/* binding */ getIngredientCost)
/* harmony export */ });
/* harmony import */ var _get_ingredient_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


const getIngredientCost = (id, ingredientsData) => {
  const matchingResult = (0,_get_ingredient_name__WEBPACK_IMPORTED_MODULE_0__.matchIngredient)(id, ingredientsData);
  if (typeof matchingResult !== 'object') {
    return matchingResult;
  }
  return matchingResult.estimatedCostInCents;
};

const calculateRecipePrice = (recipe, ingredientsData) => {
  if (typeof recipe !== 'object' || Array.isArray(recipe)|| (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const costInCents = recipe.ingredients.reduce((acc, curr) => {
    const cost = getIngredientCost(curr.id, ingredientsData);
    const amount = curr.quantity.amount;
    acc += cost * amount;
    return acc;
  }, 0);
  const costInDollar = costInCents / 100;
  return `$${costInDollar.toFixed(2)}`;
};




/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchRecipe: () => (/* binding */ matchRecipe),
/* harmony export */   recipesToCook: () => (/* binding */ recipesToCook),
/* harmony export */   removeRecipes: () => (/* binding */ removeRecipes)
/* harmony export */ });
const matchRecipe = (id, recipeData) => {
  if (!id) {
    return "No recipe matches that ID";
  } else {
    return recipeData.find((recipe) => {
      return recipe.id === parseInt(id);
    });
  };
};

const recipesToCook = (eventId, currentUser, recipeData) => {
  if (!eventId) {
    return "The recipe could not be found";
  } else {
    currentUser.recipesToCook.push(matchRecipe(eventId, recipeData));
  };
};

const removeRecipes = (eventId, currentUser) => {
  if (!eventId || currentUser.recipesToCook.length === 0) {
    return "Cannot delete recipe";
  } else {
    const recipes = currentUser.recipesToCook
      .map((recipe) => {
        return recipe.id;
      })
      .map(String);

    const index = recipes.indexOf(`${eventId}`);

    const deleted = currentUser.recipesToCook.splice(index, 1);
    currentUser.deletedRecipes.push(deleted)
  };
};




/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByName: () => (/* binding */ filterByName),
/* harmony export */   filterByTag: () => (/* binding */ filterByTag)
/* harmony export */ });
const filterByTag = (tag, recipes) => {
  const searchedTags = tag.toLowerCase().split(' ');
  const searchedRecipes = recipes.filter((recipe) => {
    return searchedTags.every((searchedTag) => {
      return splitTags(recipe.tags).includes(searchedTag);
    });
  });
  if (!searchedRecipes.length) {
    return 'Sorry, no recipes were found in your search!';
  }
  return searchedRecipes;
};

const filterByName = (name, recipes) => {
  const searchedName = name.toLowerCase();
  const searchedRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchedName);
  });
  if (!searchedRecipes.length) {
    return 'Sorry, no recipes were found in your search!';
  }
  return searchedRecipes;
};

const splitTags = (tags) => {
  return tags.flatMap((tag) => {
    return tag.split(' ');
  });
};




/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map