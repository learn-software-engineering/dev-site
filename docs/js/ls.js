(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper3(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper2 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper2;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.15/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.15/dist/bigger-picture.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BiggerPicture = factory());
      })(exports, function() {
        function noop2() {
        }
        const identity = (x) => x;
        function assign(tar, src) {
          for (const k in src)
            tar[k] = src[k];
          return tar;
        }
        function run(fn) {
          return fn();
        }
        function run_all(fns) {
          fns.forEach(run);
        }
        function is_function(thing) {
          return typeof thing === "function";
        }
        function not_equal(a, b) {
          return a != a ? b == b : a !== b;
        }
        function is_empty(obj) {
          return Object.keys(obj).length === 0;
        }
        function subscribe(store, ...callbacks) {
          if (store == null) {
            return noop2;
          }
          const unsub = store.subscribe(...callbacks);
          return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
        }
        function component_subscribe(component, store, callback) {
          component.$$.on_destroy.push(subscribe(store, callback));
        }
        function action_destroyer(action_result) {
          return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
        }
        let now = () => globalThis.performance.now();
        let raf = (cb) => requestAnimationFrame(cb);
        const tasks = /* @__PURE__ */ new Set();
        function run_tasks(now2) {
          tasks.forEach((task) => {
            if (!task.c(now2)) {
              tasks.delete(task);
              task.f();
            }
          });
          if (tasks.size !== 0)
            raf(run_tasks);
        }
        function loop(callback) {
          let task;
          if (tasks.size === 0)
            raf(run_tasks);
          return {
            promise: new Promise((fulfill) => {
              tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
              tasks.delete(task);
            }
          };
        }
        function append(target, node) {
          target.appendChild(node);
        }
        function insert(target, node, anchor) {
          target.insertBefore(node, anchor || null);
        }
        function detach(node) {
          node.parentNode.removeChild(node);
        }
        function element(name) {
          return document.createElement(name);
        }
        function text(data) {
          return document.createTextNode(data);
        }
        function empty() {
          return text("");
        }
        function listen(node, event, handler, options) {
          node.addEventListener(event, handler, options);
          return () => node.removeEventListener(event, handler, options);
        }
        function attr(node, attribute, value) {
          if (value == null)
            node.removeAttribute(attribute);
          else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
        }
        function set_style(node, key, value, important) {
          if (value === null) {
            node.style.removeProperty(key);
          } else {
            node.style.setProperty(key, value);
          }
        }
        function toggle_class(element2, name, toggle) {
          element2.classList[toggle ? "add" : "remove"](name);
        }
        function custom_event(type, detail, bubbles = false) {
          const e = document.createEvent("CustomEvent");
          e.initCustomEvent(type, bubbles, false, detail);
          return e;
        }
        let stylesheet;
        let active = 0;
        let current_rules = {};
        function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
          const step = 16.666 / duration;
          let keyframes = "{\n";
          for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
          }
          const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
          const name = `_bp_${Math.round(Math.random() * 1e9)}_${uid}`;
          if (!current_rules[name]) {
            if (!stylesheet) {
              const style = element("style");
              document.head.appendChild(style);
              stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
          }
          const animation = node.style.animation || "";
          node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
          active += 1;
          return name;
        }
        function delete_rule(node, name) {
          node.style.animation = (node.style.animation || "").split(", ").filter(
            name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("_bp") === -1
            // remove all Svelte animations
          ).join(", ");
          if (name && !--active)
            clear_rules();
        }
        function clear_rules() {
          raf(() => {
            if (active)
              return;
            let i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            current_rules = {};
          });
        }
        let current_component;
        function set_current_component(component) {
          current_component = component;
        }
        const dirty_components = [];
        const binding_callbacks = [];
        const render_callbacks = [];
        const flush_callbacks = [];
        const resolved_promise = Promise.resolve();
        let update_scheduled = false;
        function schedule_update() {
          if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
          }
        }
        function add_render_callback(fn) {
          render_callbacks.push(fn);
        }
        const seen_callbacks = /* @__PURE__ */ new Set();
        let flushidx = 0;
        function flush() {
          const saved_component = current_component;
          do {
            while (flushidx < dirty_components.length) {
              const component = dirty_components[flushidx];
              flushidx++;
              set_current_component(component);
              update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
              binding_callbacks.pop()();
            for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
              }
            }
            render_callbacks.length = 0;
          } while (dirty_components.length);
          while (flush_callbacks.length) {
            flush_callbacks.pop()();
          }
          update_scheduled = false;
          seen_callbacks.clear();
          set_current_component(saved_component);
        }
        function update($$) {
          if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
          }
        }
        let promise;
        function wait() {
          if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
              promise = null;
            });
          }
          return promise;
        }
        function dispatch(node, direction, kind) {
          node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
        }
        const outroing = /* @__PURE__ */ new Set();
        let outros;
        function group_outros() {
          outros = {
            r: 0,
            c: [],
            p: outros
            // parent group
          };
        }
        function check_outros() {
          if (!outros.r) {
            run_all(outros.c);
          }
          outros = outros.p;
        }
        function transition_in(block, local) {
          if (block && block.i) {
            outroing.delete(block);
            block.i(local);
          }
        }
        function transition_out(block, local, detach2, callback) {
          if (block && block.o) {
            if (outroing.has(block))
              return;
            outroing.add(block);
            outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                if (detach2)
                  block.d(1);
                callback();
              }
            });
            block.o(local);
          }
        }
        const null_transition = { duration: 0 };
        function create_in_transition(node, fn, params) {
          let config = fn(node, params);
          let running = false;
          let animation_name;
          let task;
          let uid = 0;
          function cleanup() {
            if (animation_name)
              delete_rule(node, animation_name);
          }
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
              task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, "start"));
            task = loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(1, 0);
                  dispatch(node, true, "end");
                  cleanup();
                  return running = false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(t, 1 - t);
                }
              }
              return running;
            });
          }
          let started = false;
          return {
            start() {
              if (started)
                return;
              started = true;
              delete_rule(node);
              if (is_function(config)) {
                config = config();
                wait().then(go);
              } else {
                go();
              }
            },
            invalidate() {
              started = false;
            },
            end() {
              if (running) {
                cleanup();
                running = false;
              }
            }
          };
        }
        function create_out_transition(node, fn, params) {
          let config = fn(node, params);
          let running = true;
          let animation_name;
          const group = outros;
          group.r += 1;
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, "start"));
            loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(0, 1);
                  dispatch(node, false, "end");
                  if (!--group.r) {
                    run_all(group.c);
                  }
                  return false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(1 - t, t);
                }
              }
              return running;
            });
          }
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go();
            });
          } else {
            go();
          }
          return {
            end(reset) {
              if (reset && config.tick) {
                config.tick(1, 0);
              }
              if (running) {
                if (animation_name)
                  delete_rule(node, animation_name);
                running = false;
              }
            }
          };
        }
        function create_component(block) {
          block && block.c();
        }
        function mount_component(component, target, anchor, customElement) {
          const { fragment, on_mount, on_destroy, after_update } = component.$$;
          fragment && fragment.m(target, anchor);
          if (!customElement) {
            add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                on_destroy.push(...new_on_destroy);
              } else {
                run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
            });
          }
          after_update.forEach(add_render_callback);
        }
        function destroy_component(component, detaching) {
          const $$ = component.$$;
          if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
          }
        }
        function make_dirty(component, i) {
          if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
          }
          component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
        }
        function init(component, options, instance2, create_fragment2, not_equal2, props, append_styles, dirty = [-1]) {
          const parent_component = current_component;
          set_current_component(component);
          const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop2,
            not_equal: not_equal2,
            bound: {},
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: {},
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
          };
          append_styles && append_styles($$.root);
          let ready = false;
          $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
              if (!$$.skip_bound && $$.bound[i])
                $$.bound[i](value);
              if (ready)
                make_dirty(component, i);
            }
            return ret;
          }) : [];
          $$.update();
          ready = true;
          run_all($$.before_update);
          $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
          if (options.target) {
            {
              $$.fragment && $$.fragment.c();
            }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
          }
          set_current_component(parent_component);
        }
        class SvelteComponent {
          $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop2;
          }
          $on(type, callback) {
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                callbacks.splice(index, 1);
            };
          }
          $set($$props) {
            if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
            }
          }
        }
        function cubicOut(t) {
          const f = t - 1;
          return f * f * f + 1;
        }
        function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
          const style = getComputedStyle(node);
          const target_opacity = +style.opacity;
          const transform = style.transform === "none" ? "" : style.transform;
          const od = target_opacity * (1 - opacity);
          return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
          };
        }
        const subscriber_queue = [];
        function writable(value, start = noop2) {
          let stop;
          const subscribers = /* @__PURE__ */ new Set();
          function set(new_value) {
            if (not_equal(value, new_value)) {
              value = new_value;
              if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                  for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                  }
                  subscriber_queue.length = 0;
                }
              }
            }
          }
          function update2(fn) {
            set(fn(value));
          }
          function subscribe2(run2, invalidate = noop2) {
            const subscriber = [run2, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              stop = start(set) || noop2;
            }
            run2(value);
            return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                stop();
                stop = null;
              }
            };
          }
          return { set, update: update2, subscribe: subscribe2 };
        }
        function get_interpolator(a, b) {
          if (a === b || a !== a)
            return () => a;
          const type = typeof a;
          if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
              return get_interpolator(a[i], bi);
            });
            return (t) => arr.map((fn) => fn(t));
          }
          if (type === "number") {
            const delta = b - a;
            return (t) => a + t * delta;
          }
        }
        function tweened(value, defaults = {}) {
          const store = writable(value);
          let task;
          let target_value = value;
          function set(new_value, opts) {
            if (value == null) {
              store.set(value = new_value);
              return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              store.set(value = target_value);
              return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop((now2) => {
              if (now2 < start)
                return true;
              if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === "function")
                  duration = duration(value, new_value);
                started = true;
              }
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              const elapsed = now2 - start;
              if (elapsed > duration) {
                store.set(value = new_value);
                return false;
              }
              store.set(value = fn(easing(elapsed / duration)));
              return true;
            });
            return task.promise;
          }
          return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
          };
        }
        const closing = writable(0);
        const prefersReducedMotion = globalThis.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const defaultTweenOptions = (duration) => ({
          easing: cubicOut,
          duration: prefersReducedMotion ? 0 : duration
        });
        const getThumbBackground = (activeItem) => !activeItem.thumb || `url(${activeItem.thumb})`;
        function create_if_block_1$2(ctx) {
          let div;
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              div.innerHTML = `<span class="bp-bar"></span><span class="bp-o"></span>`;
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (!div_intro) {
                add_render_callback(() => {
                  div_intro = create_in_transition(div, fly, { duration: 480 });
                  div_intro.start();
                });
              }
            },
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block0_anchor;
          let if_block1_anchor;
          let if_block0 = !/*loaded*/
          ctx[1] && create_if_block_1$2(ctx);
          let if_block1 = (
            /*$closing*/
            ctx[2] && create_if_block$2(ctx)
          );
          return {
            c() {
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
            },
            m(target, anchor) {
              if (if_block0)
                if_block0.m(target, anchor);
              insert(target, if_block0_anchor, anchor);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1]) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty & /*loaded*/
                  2) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$2(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*$closing*/
                ctx2[2]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty & /*$closing*/
                  4) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
              }
            },
            i(local) {
              transition_in(if_block0);
              transition_in(if_block1);
            },
            o(local) {
              transition_out(if_block0);
            },
            d(detaching) {
              if (if_block0)
                if_block0.d(detaching);
              if (detaching)
                detach(if_block0_anchor);
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { activeItem } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("activeItem" in $$props2)
              $$invalidate(0, activeItem = $$props2.activeItem);
            if ("loaded" in $$props2)
              $$invalidate(1, loaded = $$props2.loaded);
          };
          return [activeItem, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { activeItem: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_srcset_value;
          let img_sizes_value;
          let img_alt_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "srcset", img_srcset_value = /*activeItem*/
              ctx[7].img);
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(img, "alt", img_alt_value = /*activeItem*/
              ctx[7].alt);
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = listen(
                  img,
                  "error",
                  /*error_handler*/
                  ctx[26]
                );
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (!current || dirty[0] & /*sizes*/
              2 && img_sizes_value !== (img_sizes_value = /*opts*/
              ctx2[8].sizes || `${/*sizes*/
              ctx2[1]}px`)) {
                attr(img, "sizes", img_sizes_value);
              }
            },
            i(local) {
              if (current)
                return;
              if (img_outro)
                img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(img);
              if (detaching && img_outro)
                img_outro.end();
              mounted = false;
              dispose();
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[7]
              ),
              loaded: (
                /*loaded*/
                ctx[2]
              )
            }
          });
          return {
            c() {
              create_component(loading.$$.fragment);
            },
            m(target, anchor) {
              mount_component(loading, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const loading_changes = {};
              if (dirty[0] & /*loaded*/
              4)
                loading_changes.loaded = /*loaded*/
                ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(loading, detaching);
            }
          };
        }
        function create_fragment$3(ctx) {
          let div1;
          let div0;
          let if_block0_anchor;
          let style_transform = `translate3d(${/*$imageDimensions*/
          ctx[0][0] / -2 + /*$zoomDragTranslate*/
          ctx[6][0]}px, ${/*$imageDimensions*/
          ctx[0][1] / -2 + /*$zoomDragTranslate*/
          ctx[6][1]}px, 0)`;
          let current;
          let mounted;
          let dispose;
          let if_block0 = (
            /*loaded*/
            ctx[2] && create_if_block_1$1(ctx)
          );
          let if_block1 = (
            /*showLoader*/
            ctx[3] && create_if_block$1(ctx)
          );
          return {
            c() {
              div1 = element("div");
              div0 = element("div");
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              attr(div0, "class", "bp-img");
              set_style(
                div0,
                "width",
                /*$imageDimensions*/
                ctx[0][0] + "px"
              );
              set_style(
                div0,
                "height",
                /*$imageDimensions*/
                ctx[0][1] + "px"
              );
              toggle_class(
                div0,
                "bp-drag",
                /*pointerDown*/
                ctx[4]
              );
              toggle_class(
                div0,
                "bp-canzoom",
                /*maxZoom*/
                ctx[11] > 1 && /*$imageDimensions*/
                ctx[0][0] < /*naturalWidth*/
                ctx[12]
              );
              set_style(div0, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[7]
              ));
              set_style(div0, "transform", style_transform);
              attr(div1, "class", "bp-img-wrap");
              toggle_class(
                div1,
                "bp-close",
                /*closingWhileZoomed*/
                ctx[5]
              );
            },
            m(target, anchor) {
              insert(target, div1, anchor);
              append(div1, div0);
              if (if_block0)
                if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1)
                if_block1.m(div0, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*onMount*/
                    ctx[20].call(null, div0)
                  ),
                  listen(
                    div1,
                    "wheel",
                    /*onWheel*/
                    ctx[15]
                  ),
                  listen(
                    div1,
                    "pointerdown",
                    /*onPointerDown*/
                    ctx[16]
                  ),
                  listen(
                    div1,
                    "pointermove",
                    /*onPointerMove*/
                    ctx[17]
                  ),
                  listen(
                    div1,
                    "pointerup",
                    /*onPointerUp*/
                    ctx[19]
                  ),
                  listen(
                    div1,
                    "pointercancel",
                    /*removeEventFromCache*/
                    ctx[18]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (
                /*loaded*/
                ctx2[2]
              ) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty[0] & /*loaded*/
                  4) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$1(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(div0, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*showLoader*/
                ctx2[3]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*showLoader*/
                  8) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$1(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(div0, null);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "width",
                  /*$imageDimensions*/
                  ctx2[0][0] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "height",
                  /*$imageDimensions*/
                  ctx2[0][1] + "px"
                );
              }
              if (dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
              6145) {
                toggle_class(
                  div0,
                  "bp-canzoom",
                  /*maxZoom*/
                  ctx2[11] > 1 && /*$imageDimensions*/
                  ctx2[0][0] < /*naturalWidth*/
                  ctx2[12]
                );
              }
              if (dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65 && style_transform !== (style_transform = `translate3d(${/*$imageDimensions*/
              ctx2[0][0] / -2 + /*$zoomDragTranslate*/
              ctx2[6][0]}px, ${/*$imageDimensions*/
              ctx2[0][1] / -2 + /*$zoomDragTranslate*/
              ctx2[6][1]}px, 0)`)) {
                set_style(div0, "transform", style_transform);
              }
              if (dirty[0] & /*closingWhileZoomed*/
              32) {
                toggle_class(
                  div1,
                  "bp-close",
                  /*closingWhileZoomed*/
                  ctx2[5]
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div1);
              if (if_block0)
                if_block0.d();
              if (if_block1)
                if_block1.d();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$3($$self, $$props, $$invalidate) {
          let $zoomed;
          let $zoomDragTranslate;
          let $closing;
          let $imageDimensions;
          component_subscribe($$self, closing, ($$value) => $$invalidate(25, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(24, $zoomed = value));
          let maxZoom = activeItem.maxZoom || opts.maxZoom || 10;
          let calculatedDimensions = props.calculateDimensions(activeItem);
          let sizes = calculatedDimensions[0];
          let loaded, showLoader;
          let pinchDetails;
          let bpImg;
          let prevDiff = 0;
          let pointerDown, hasDragged;
          let dragStartX, dragStartY;
          let dragStartTranslateX, dragStartTranslateY;
          let closingWhileZoomed;
          const naturalWidth = +activeItem.width;
          const dragPositions = [];
          const pointerCache = /* @__PURE__ */ new Map();
          const imageDimensions = tweened(calculatedDimensions, defaultTweenOptions(400));
          component_subscribe($$self, imageDimensions, (value) => $$invalidate(0, $imageDimensions = value));
          const zoomDragTranslate = tweened([0, 0], defaultTweenOptions(400));
          component_subscribe($$self, zoomDragTranslate, (value) => $$invalidate(6, $zoomDragTranslate = value));
          const boundTranslateValues = ([x, y], newDimensions = $imageDimensions) => {
            const maxTranslateX = (newDimensions[0] - container.w) / 2;
            const maxTranslateY = (newDimensions[1] - container.h) / 2;
            if (maxTranslateX < 0) {
              x = 0;
            } else if (x > maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? maxTranslateX + (x - maxTranslateX) / 10 : maxTranslateX;
                if (x > maxTranslateX + 20) {
                  $$invalidate(4, pointerDown = prev());
                }
              } else {
                x = maxTranslateX;
              }
            } else if (x < -maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? -maxTranslateX - (-maxTranslateX - x) / 10 : -maxTranslateX;
                if (x < -maxTranslateX - 20) {
                  $$invalidate(4, pointerDown = next());
                }
              } else {
                x = -maxTranslateX;
              }
            }
            if (maxTranslateY < 0) {
              y = 0;
            } else if (y > maxTranslateY) {
              y = maxTranslateY;
            } else if (y < -maxTranslateY) {
              y = -maxTranslateY;
            }
            return [x, y];
          };
          function changeZoom(amt = maxZoom, e) {
            if ($closing) {
              return;
            }
            const maxWidth = calculatedDimensions[0] * maxZoom;
            let newWidth = $imageDimensions[0] + $imageDimensions[0] * amt;
            let newHeight = $imageDimensions[1] + $imageDimensions[1] * amt;
            if (amt > 0) {
              if (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = calculatedDimensions[1] * maxZoom;
              }
              if (newWidth > naturalWidth) {
                newWidth = naturalWidth;
                newHeight = +activeItem.height;
              }
            } else if (newWidth < calculatedDimensions[0]) {
              imageDimensions.set(calculatedDimensions);
              return zoomDragTranslate.set([0, 0]);
            }
            let { x, y, width, height } = bpImg.getBoundingClientRect();
            const offsetX = e ? e.clientX - x - width / 2 : 0;
            const offsetY = e ? e.clientY - y - height / 2 : 0;
            x = -offsetX * (newWidth / width) + offsetX;
            y = -offsetY * (newHeight / height) + offsetY;
            const newDimensions = [newWidth, newHeight];
            imageDimensions.set(newDimensions).then(() => {
              $$invalidate(1, sizes = Math.round(Math.max(sizes, newWidth)));
            });
            zoomDragTranslate.set(boundTranslateValues([$zoomDragTranslate[0] + x, $zoomDragTranslate[1] + y], newDimensions));
          }
          Object.defineProperty(activeItem, "zoom", {
            configurable: true,
            get: () => $zoomed,
            set: (bool) => changeZoom(bool ? maxZoom : -maxZoom)
          });
          const onWheel = (e) => {
            if (opts.inline && !$zoomed) {
              return;
            }
            e.preventDefault();
            changeZoom(e.deltaY / -300, e);
          };
          const onPointerDown = (e) => {
            if (e.button !== 2) {
              e.preventDefault();
              $$invalidate(4, pointerDown = true);
              pointerCache.set(e.pointerId, e);
              dragStartX = e.clientX;
              dragStartY = e.clientY;
              dragStartTranslateX = $zoomDragTranslate[0];
              dragStartTranslateY = $zoomDragTranslate[1];
            }
          };
          const onPointerMove = (e) => {
            if (pointerCache.size > 1) {
              $$invalidate(4, pointerDown = false);
              return opts.noPinch?.(container.el) || handlePinch(e);
            }
            if (!pointerDown) {
              return;
            }
            let x = e.clientX;
            let y = e.clientY;
            hasDragged = dragPositions.push({ x, y }) > 2;
            x = x - dragStartX;
            y = y - dragStartY;
            if (!$zoomed) {
              if (y < -90) {
                $$invalidate(4, pointerDown = !opts.noClose && props.close());
              }
              if (Math.abs(y) < 30) {
                if (x > 40) {
                  $$invalidate(4, pointerDown = prev());
                }
                if (x < -40) {
                  $$invalidate(4, pointerDown = next());
                }
              }
            }
            if ($zoomed && hasDragged && !$closing) {
              zoomDragTranslate.set(boundTranslateValues([dragStartTranslateX + x, dragStartTranslateY + y]), { duration: 0 });
            }
          };
          const handlePinch = (e) => {
            const [p1, p2] = pointerCache.set(e.pointerId, e).values();
            const dx = p1.clientX - p2.clientX;
            const dy = p1.clientY - p2.clientY;
            const curDiff = Math.hypot(dx, dy);
            pinchDetails = pinchDetails || {
              clientX: (p1.clientX + p2.clientX) / 2,
              clientY: (p1.clientY + p2.clientY) / 2
            };
            changeZoom(((prevDiff || curDiff) - curDiff) / -35, pinchDetails);
            prevDiff = curDiff;
          };
          const removeEventFromCache = (e) => pointerCache.delete(e.pointerId);
          function onPointerUp(e) {
            removeEventFromCache(e);
            if (pinchDetails) {
              $$invalidate(4, pointerDown = prevDiff = 0);
              pinchDetails = pointerCache.size ? pinchDetails : null;
            }
            if (!pointerDown) {
              return;
            }
            $$invalidate(4, pointerDown = false);
            if (e.target === this && !opts.noClose) {
              return props.close();
            }
            if (hasDragged) {
              const [posOne, posTwo, posThree] = dragPositions.slice(-3);
              const xDiff = posTwo.x - posThree.x;
              const yDiff = posTwo.y - posThree.y;
              if (Math.hypot(xDiff, yDiff) > 5) {
                zoomDragTranslate.set(boundTranslateValues([
                  $zoomDragTranslate[0] - (posOne.x - posThree.x) * 5,
                  $zoomDragTranslate[1] - (posOne.y - posThree.y) * 5
                ]));
              }
            } else if (!opts.onImageClick?.(container.el, activeItem)) {
              changeZoom($zoomed ? -maxZoom : maxZoom, e);
            }
            hasDragged = false;
            dragPositions.length = 0;
          }
          const onMount = (node) => {
            bpImg = node;
            props.setResizeFunc(() => {
              $$invalidate(23, calculatedDimensions = props.calculateDimensions(activeItem));
              if (opts.inline || !smallScreen) {
                imageDimensions.set(calculatedDimensions);
                zoomDragTranslate.set([0, 0]);
              }
            });
            props.loadImage(activeItem).then(() => {
              $$invalidate(2, loaded = true);
              props.preloadNext();
            });
            setTimeout(
              () => {
                $$invalidate(3, showLoader = !loaded);
              },
              250
            );
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2)
              $$invalidate(22, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            8388609) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            58720256) {
              if ($closing && $zoomed && !opts.intro) {
                const closeTweenOpts = defaultTweenOptions(480);
                zoomDragTranslate.set([0, 0], closeTweenOpts);
                imageDimensions.set(calculatedDimensions, closeTweenOpts);
                $$invalidate(5, closingWhileZoomed = true);
              }
            }
          };
          return [
            $imageDimensions,
            sizes,
            loaded,
            showLoader,
            pointerDown,
            closingWhileZoomed,
            $zoomDragTranslate,
            activeItem,
            opts,
            zoomed,
            container,
            maxZoom,
            naturalWidth,
            imageDimensions,
            zoomDragTranslate,
            onWheel,
            onPointerDown,
            onPointerMove,
            removeEventFromCache,
            onPointerUp,
            onMount,
            props,
            smallScreen,
            calculatedDimensions,
            $zoomed,
            $closing,
            error_handler
          ];
        }
        class Image extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 21, smallScreen: 22 }, null, [-1, -1]);
          }
        }
        function create_fragment$2(ctx) {
          let div;
          let iframe;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              iframe = element("iframe");
              create_component(loading.$$.fragment);
              attr(iframe, "allow", "autoplay; fullscreen");
              attr(
                iframe,
                "title",
                /*activeItem*/
                ctx[2].title
              );
              attr(div, "class", "bp-if");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
            },
            m(target, anchor) {
              insert(target, div, anchor);
              append(div, iframe);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[3].call(null, iframe)
                  ),
                  listen(
                    iframe,
                    "load",
                    /*load_handler*/
                    ctx[5]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$2($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addSrc = (node) => node.src = activeItem.iframe;
          const load_handler = () => $$invalidate(0, loaded = true);
          return [loaded, dimensions, activeItem, addSrc, props, load_handler];
        }
        class Iframe extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, not_equal, { props: 4 });
          }
        }
        function create_fragment$1(ctx) {
          let div;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              create_component(loading.$$.fragment);
              attr(div, "class", "bp-vid");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[2]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = action_destroyer(
                  /*onMount*/
                  ctx[3].call(null, div)
                );
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              dispose();
            }
          };
        }
        function instance$1($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem, opts, container } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addAttributes = (node, obj) => {
            for (const key in obj) {
              attr(node, key, obj[key]);
            }
          };
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = element(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                }
                const el = element(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  listen(el, "error", (error) => opts.onError?.(container, activeItem, error));
                }
                append(mediaElement, el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            listen(mediaElement, "canplay", () => $$invalidate(0, loaded = true));
            append(node, mediaElement);
          };
          return [loaded, dimensions, activeItem, onMount, props];
        }
        class Video extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, not_equal, { props: 4 });
          }
        }
        function create_if_block(ctx) {
          let div2;
          let div0;
          let div0_outro;
          let previous_key = (
            /*activeItem*/
            ctx[6].i
          );
          let div1;
          let button;
          let div1_outro;
          let containerActions_action;
          let current;
          let mounted;
          let dispose;
          let key_block = create_key_block(ctx);
          let if_block = (
            /*items*/
            ctx[0].length > 1 && create_if_block_1(ctx)
          );
          return {
            c() {
              div2 = element("div");
              div0 = element("div");
              key_block.c();
              div1 = element("div");
              button = element("button");
              if (if_block)
                if_block.c();
              attr(button, "class", "bp-x");
              attr(button, "title", "Close");
              attr(button, "aria-label", "Close");
              attr(div1, "class", "bp-controls");
              attr(div2, "class", "bp-wrap");
              toggle_class(
                div2,
                "bp-zoomed",
                /*$zoomed*/
                ctx[10]
              );
              toggle_class(
                div2,
                "bp-inline",
                /*inline*/
                ctx[8]
              );
              toggle_class(
                div2,
                "bp-small",
                /*smallScreen*/
                ctx[7]
              );
              toggle_class(
                div2,
                "bp-noclose",
                /*opts*/
                ctx[5].noClose
              );
            },
            m(target, anchor) {
              insert(target, div2, anchor);
              append(div2, div0);
              key_block.m(div2, null);
              append(div2, div1);
              append(div1, button);
              if (if_block)
                if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(containerActions_action = /*containerActions*/
                  ctx[14].call(null, div2))
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && not_equal(previous_key, previous_key = /*activeItem*/
              ctx2[6].i)) {
                group_outros();
                transition_out(key_block, 1, 1, noop2);
                check_outros();
                key_block = create_key_block(ctx2);
                key_block.c();
                transition_in(key_block);
                key_block.m(div2, div1);
              } else {
                key_block.p(ctx2, dirty);
              }
              if (
                /*items*/
                ctx2[0].length > 1
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                } else {
                  if_block = create_if_block_1(ctx2);
                  if_block.c();
                  if_block.m(div1, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (dirty[0] & /*opts*/
              32) {
                toggle_class(
                  div2,
                  "bp-noclose",
                  /*opts*/
                  ctx2[5].noClose
                );
              }
            },
            i(local) {
              if (current)
                return;
              if (div0_outro)
                div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro)
                div1_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div0_outro = create_out_transition(div0, fly, { duration: 480 });
              }
              transition_out(key_block);
              if (local) {
                div1_outro = create_out_transition(div1, fly, {});
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div2);
              if (detaching && div0_outro)
                div0_outro.end();
              key_block.d(detaching);
              if (if_block)
                if_block.d();
              if (detaching && div1_outro)
                div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            (ctx[6].html ?? /*activeItem*/
            ctx[6].element.outerHTML) + ""
          );
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-html");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && raw_value !== (raw_value = /*activeItem*/
              (ctx2[6].html ?? /*activeItem*/
              ctx2[6].element.outerHTML) + ""))
                div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_if_block_5(ctx) {
          let iframe;
          let current;
          iframe = new Iframe({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(iframe.$$.fragment);
            },
            m(target, anchor) {
              mount_component(iframe, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(iframe.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(iframe.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(iframe, detaching);
            }
          };
        }
        function create_if_block_4(ctx) {
          let video;
          let current;
          video = new Video({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(video.$$.fragment);
            },
            m(target, anchor) {
              mount_component(video, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(video.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(video.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(video, detaching);
            }
          };
        }
        function create_if_block_3(ctx) {
          let imageitem;
          let current;
          imageitem = new Image({
            props: {
              props: (
                /*getChildProps*/
                ctx[13]()
              ),
              smallScreen: (
                /*smallScreen*/
                ctx[7]
              )
            }
          });
          return {
            c() {
              create_component(imageitem.$$.fragment);
            },
            m(target, anchor) {
              mount_component(imageitem, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const imageitem_changes = {};
              if (dirty[0] & /*smallScreen*/
              128)
                imageitem_changes.smallScreen = /*smallScreen*/
                ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(imageitem.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(imageitem.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(imageitem, detaching);
            }
          };
        }
        function create_if_block_2(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].caption + ""
          );
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-cap");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              current = true;
            },
            p(ctx2, dirty) {
              if ((!current || dirty[0] & /*activeItem*/
              64) && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].caption + ""))
                div.innerHTML = raw_value;
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_key_block(ctx) {
          let div;
          let current_block_type_index;
          let if_block0;
          let div_intro;
          let div_outro;
          let if_block1_anchor;
          let current;
          let mounted;
          let dispose;
          const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5, create_else_block];
          const if_blocks = [];
          function select_block_type(ctx2, dirty) {
            if (
              /*activeItem*/
              ctx2[6].img
            )
              return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            )
              return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            )
              return 2;
            return 3;
          }
          current_block_type_index = select_block_type(ctx);
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          let if_block1 = (
            /*activeItem*/
            ctx[6].caption && create_if_block_2(ctx)
          );
          return {
            c() {
              div = element("div");
              if_block0.c();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[20]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[21]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              let previous_block_index = current_block_type_index;
              current_block_type_index = select_block_type(ctx2);
              if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              } else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, () => {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block0.c();
                } else {
                  if_block0.p(ctx2, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div, null);
              }
              if (
                /*activeItem*/
                ctx2[6].caption
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*activeItem*/
                  64) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block_2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro)
                  div_outro.end(1);
                div_intro = create_in_transition(
                  div,
                  /*mediaTransition*/
                  ctx[12],
                  true
                );
                div_intro.start();
              });
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              if (div_intro)
                div_intro.invalidate();
              div_outro = create_out_transition(
                div,
                /*mediaTransition*/
                ctx[12],
                false
              );
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro)
                div_outro.end();
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block_1(ctx) {
          let div;
          let raw_value = `${/*position*/
          ctx[4] + 1} / ${/*items*/
          ctx[0].length}`;
          let button0;
          let button1;
          let mounted;
          let dispose;
          return {
            c() {
              div = element("div");
              button0 = element("button");
              button1 = element("button");
              attr(div, "class", "bp-count");
              attr(button0, "class", "bp-prev");
              attr(button0, "title", "Previous");
              attr(button0, "aria-label", "Previous");
              attr(button1, "class", "bp-next");
              attr(button1, "title", "Next");
              attr(button1, "aria-label", "Next");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              insert(target, button0, anchor);
              insert(target, button1, anchor);
              if (!mounted) {
                dispose = [
                  listen(
                    button0,
                    "click",
                    /*prev*/
                    ctx[2]
                  ),
                  listen(
                    button1,
                    "click",
                    /*next*/
                    ctx[3]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*position, items*/
              17 && raw_value !== (raw_value = `${/*position*/
              ctx2[4] + 1} / ${/*items*/
              ctx2[0].length}`))
                div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching)
                detach(button0);
              if (detaching)
                detach(button1);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_fragment(ctx) {
          let if_block_anchor;
          let current;
          let if_block = (
            /*items*/
            ctx[0] && create_if_block(ctx)
          );
          return {
            c() {
              if (if_block)
                if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block)
                if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (
                /*items*/
                ctx2[0]
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty[0] & /*items*/
                  1) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block)
                if_block.d(detaching);
              if (detaching)
                detach(if_block_anchor);
            }
          };
        }
        function instance($$self, $$props, $$invalidate) {
          let $zoomed;
          let { items = void 0 } = $$props;
          let { target = void 0 } = $$props;
          const html = document.documentElement;
          let position;
          let opts;
          let isOpen;
          let focusTrigger;
          let smallScreen;
          let inline;
          let movement;
          let clickedEl;
          let activeItem;
          const activeItemIsHtml = () => !activeItem.img && !activeItem.sources && !activeItem.iframe;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            const openItems = opts.items;
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(19, container.w = target.offsetWidth, container);
            $$invalidate(
              19,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            if (Array.isArray(openItems)) {
              $$invalidate(0, items = openItems.map((item, i) => {
                if (opts.el && opts.el === item.element) {
                  $$invalidate(4, position = i);
                }
                return { i, ...item };
              }));
            } else {
              $$invalidate(0, items = (openItems.length ? [...openItems] : [openItems]).map((element2, i) => {
                if (opts.el === element2) {
                  $$invalidate(4, position = i);
                }
                return { element: element2, i, ...element2.dataset };
              }));
            }
          };
          const close = () => {
            opts.onClose?.(container.el, activeItem);
            closing.set(true);
            $$invalidate(0, items = null);
            focusTrigger?.focus({ preventScroll: true });
          };
          const prev = () => setPosition(position - 1);
          const next = () => setPosition(position + 1);
          const setPosition = (index) => {
            movement = index - position;
            $$invalidate(4, position = getNextPosition(index));
          };
          const getNextPosition = (index) => (index + items.length) % items.length;
          const onKeydown = (e) => {
            const { key, shiftKey } = e;
            if (key === "Escape") {
              !opts.noClose && close();
            } else if (key === "ArrowRight") {
              next();
            } else if (key === "ArrowLeft") {
              prev();
            } else if (key === "Tab") {
              const { activeElement } = document;
              if (shiftKey || !activeElement.controls) {
                e.preventDefault();
                const { focusWrap = container.el } = opts;
                const tabbable = [...focusWrap.querySelectorAll("*")].filter((node) => node.tabIndex >= 0);
                let index = tabbable.indexOf(activeElement);
                index += tabbable.length + (shiftKey ? -1 : 1);
                tabbable[index % tabbable.length].focus();
              }
            }
          };
          const calculateDimensions = ({ width = 1920, height = 1080 }) => {
            const { scale = 0.99 } = opts;
            const ratio = Math.min(1, container.w / width * scale, container.h / height * scale);
            return [Math.round(width * ratio), Math.round(height * ratio)];
          };
          const preloadNext = () => {
            if (items) {
              const nextItem = items[getNextPosition(position + 1)];
              const prevItem = items[getNextPosition(position - 1)];
              !nextItem.preload && loadImage(nextItem);
              !prevItem.preload && loadImage(prevItem);
            }
          };
          const loadImage = (item) => {
            if (item.img) {
              const image = element("img");
              image.sizes = opts.sizes || `${calculateDimensions(item)[0]}px`;
              image.srcset = item.img;
              item.preload = true;
              return image.decode().catch((error) => {
              });
            }
          };
          const mediaTransition = (node, isEntering) => {
            if (!isOpen || !items) {
              $$invalidate(18, isOpen = isEntering);
              return opts.intro ? fly(node, { y: isEntering ? 10 : -10 }) : scaleIn(node);
            }
            return fly(node, {
              x: (movement > 0 ? 20 : -20) * (isEntering ? 1 : -1),
              duration: 250
            });
          };
          const scaleIn = (node) => {
            let dimensions;
            if (activeItemIsHtml()) {
              const bpItem = node.firstChild.firstChild;
              dimensions = [bpItem.clientWidth, bpItem.clientHeight];
            } else {
              dimensions = calculateDimensions(activeItem);
            }
            const rect = (activeItem.element || focusTrigger).getBoundingClientRect();
            const leftOffset = rect.left - (container.w - rect.width) / 2;
            const centerTop = rect.top - (container.h - rect.height) / 2;
            const scaleWidth = rect.width / dimensions[0];
            const scaleHeight = rect.height / dimensions[1];
            return {
              duration: 480,
              easing: cubicOut,
              css: (t, u) => {
                return `transform:translate3d(${leftOffset * u}px, ${centerTop * u}px, 0) scale3d(${scaleWidth + t * (1 - scaleWidth)}, ${scaleHeight + t * (1 - scaleHeight)}, 1)`;
              }
            };
          };
          const getChildProps = () => ({
            activeItem,
            calculateDimensions,
            loadImage,
            preloadNext,
            opts,
            prev,
            next,
            close,
            setResizeFunc,
            zoomed,
            container
          });
          const containerActions = (node) => {
            $$invalidate(19, container.el = node, container);
            let removeKeydownListener;
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              removeKeydownListener = listen(globalThis, "keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(19, container.w = entries[0].contentRect.width, container);
                $$invalidate(19, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                if (!activeItemIsHtml()) {
                  resizeFunc?.();
                }
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                removeKeydownListener?.();
                closing.set(false);
                html.classList.remove("bp-lock");
                opts.onClosed?.();
              }
            };
          };
          const pointerdown_handler = (e) => $$invalidate(9, clickedEl = e.target);
          const pointerup_handler = function(e) {
            if (e.button !== 2 && e.target === this && clickedEl === this) {
              !opts.noClose && close();
            }
          };
          $$self.$$set = ($$props2) => {
            if ("items" in $$props2)
              $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2)
              $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, isOpen, opts, container, activeItem*/
            786545) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                if (isOpen) {
                  opts.onUpdate?.(container.el, activeItem);
                }
              }
            }
          };
          return [
            items,
            close,
            prev,
            next,
            position,
            opts,
            activeItem,
            smallScreen,
            inline,
            clickedEl,
            $zoomed,
            zoomed,
            mediaTransition,
            getChildProps,
            containerActions,
            target,
            open,
            setPosition,
            isOpen,
            container,
            pointerdown_handler,
            pointerup_handler
          ];
        }
        class Bigger_picture extends SvelteComponent {
          constructor(options) {
            super();
            init(
              this,
              options,
              instance,
              create_fragment,
              not_equal,
              {
                items: 0,
                target: 15,
                open: 16,
                close: 1,
                prev: 2,
                next: 3,
                setPosition: 17
              },
              null,
              [-1, -1]
            );
          }
          get items() {
            return this.$$.ctx[0];
          }
          get target() {
            return this.$$.ctx[15];
          }
          get open() {
            return this.$$.ctx[16];
          }
          get close() {
            return this.$$.ctx[1];
          }
          get prev() {
            return this.$$.ctx[2];
          }
          get next() {
            return this.$$.ctx[3];
          }
          get setPosition() {
            return this.$$.ctx[17];
          }
        }
        function biggerPicture(options) {
          return new Bigger_picture({
            ...options,
            props: options
          });
        }
        return biggerPicture;
      });
    }
  });

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/index.js
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/base-component.js
  var VERSION = "5.3.3";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/collapse.js
  var NAME = "collapse";
  var DATA_KEY = "bs.collapse";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  var Default = {
    parent: null,
    toggle: true
  };
  var DefaultType = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/base@v0.4.3/assets/hb/modules/base/js/responsive-table.ts
  (() => {
    "use strict";
    document.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode?.replaceChild(wrapper, table);
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());
  var NAME2 = "dropdown";
  var DATA_KEY2 = "bs.dropdown";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var DATA_API_KEY2 = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE2 = `hide${EVENT_KEY2}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY2}`;
  var EVENT_SHOW2 = `show${EVENT_KEY2}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY2}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY2}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY2}${DATA_API_KEY2}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY2}${DATA_API_KEY2}`;
  var CLASS_NAME_SHOW2 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE2}.${CLASS_NAME_SHOW2}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default2 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType2 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW2);
      this._element.classList.add(CLASS_NAME_SHOW2);
      event_handler_default.trigger(this._element, EVENT_SHOWN2, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW2);
      this._element.classList.remove(CLASS_NAME_SHOW2);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN2, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME2.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW2);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE2) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE2)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE2)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE2, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE2, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/backdrop.js
  var NAME3 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW3 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME3}`;
  var Default3 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType3 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW3);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW3);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/focustrap.js
  var NAME4 = "focustrap";
  var DATA_KEY3 = "bs.focustrap";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY3}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY3}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default4 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType4 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY3);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY3);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/offcanvas.js
  var NAME5 = "offcanvas";
  var DATA_KEY4 = "bs.offcanvas";
  var EVENT_KEY4 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY4}${DATA_API_KEY3}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW4 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW3 = `show${EVENT_KEY4}`;
  var EVENT_SHOWN3 = `shown${EVENT_KEY4}`;
  var EVENT_HIDE3 = `hide${EVENT_KEY4}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY4}`;
  var EVENT_HIDDEN3 = `hidden${EVENT_KEY4}`;
  var EVENT_RESIZE = `resize${EVENT_KEY4}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY4}${DATA_API_KEY3}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY4}`;
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="offcanvas"]';
  var Default5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW3, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW4);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN3, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW4, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_TOGGLE3, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.14.1/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/swipe.js
  var NAME6 = "swipe";
  var EVENT_KEY5 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY5}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY5}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY5}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY5}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY5}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default6 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType6 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY5);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/carousel.js
  var NAME7 = "carousel";
  var DATA_KEY5 = "bs.carousel";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY6}`;
  var EVENT_SLID = `slid${EVENT_KEY6}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY6}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY6}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY6}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default7 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType7 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.4/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    css_bundle_name: () => css_bundle_name,
    debug: () => debug,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    full_width_types: () => full_width_types,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    scrollbar: () => scrollbar,
    search: () => search,
    styles: () => styles,
    terms: () => terms
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3, scale: 2 };
  var blog = { archives: { paginate: 30 }, full_width: false, giscus: { category: "General", category_id: "DIC_kwDOKQjuns4CZJYI", endpoint: "https://giscus.app/", input_position: "top", lazy_loading: true, mapping: "pathname", reactions: true, repo: "learn-software-engineering/website-comments", repo_id: "R_kgDOKQjung", strict_matching: true, theme: "preferred_color_scheme" }, home: { main_sections: ["blog", "software-engineering", "programming", "oop"], pinned_posts_position: "", recent_posts: 12 }, list_cols_lg: 3, list_cols_md: 2, paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_placeholder: "", related_posts: { number: 10 }, sidebar: { position: "start", posts: { featured_count: 5, fill: true, list_style: "slide", recent_count: 5, style: "pills" }, sticky: true, taxonomies: { count: true, limit: 10, separate: false, style: "underline" }, width: 0.35 }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "light";
  var css_bundle_name = "ls";
  var debug = false;
  var docs = { date_format: ":date_long", giscus: { category: "General", category_id: "DIC_kwDOKQjuns4CZJYI", endpoint: "https://giscus.app/", input_position: "top", lazy_loading: true, mapping: "pathname", reactions: true, repo: "learn-software-engineering/website-comments", repo_id: "R_kgDOKQjung", strict_matching: true, theme: "preferred_color_scheme" } };
  var featured_image = { size: "x640" };
  var footer = { powered_by: true, site_title: "Learn-Software.com", socials: { facebook: "https://www.facebook.com/learn.software.eng", github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", instagram: "https://www.instagram.com/learnsoftwareeng", linkedin: "https://linkedin.com/company/learn-software", patreon: "https://patreon.com/learnsoftwareeng", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" } };
  var full_width_types = { docs: { enable: true } };
  var header = { banner: { transparentize_navbar_bg: true }, breakpoint: "lg", full_width: true, socials: { facebook: "https://www.facebook.com/learn.software.eng", github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", instagram: "https://www.instagram.com/learnsoftwareeng", linkedin: "https://linkedin.com/company/learn-software", patreon: "https://patreon.com/learnsoftwareeng", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" }, sticky: true, theme_toggle: { style: "switch" } };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} }, symbol: "\xA7" };
  var js_bundle_name = "ls";
  var logo = "images/logo-square-2.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var search = { modal: true };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var terms = { paginate: 12 };
  var params_default = { back_to_top, bigger_picture, blog, breadcrumb, color, css_bundle_name, debug, docs, featured_image, footer, full_width_types, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, scrollbar, search, styles, terms };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.2.0/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = params_exports?.heading_sign?.symbol ?? "\xA7";
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.3.1/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    const scroll = (element, dir) => {
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = inner.scrollLeft + step;
      }
      inner.scroll({
        left,
        behavior: "smooth"
      });
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".slide-control-left").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "left");
        });
      });
      document.querySelectorAll(".slide-control-right").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "right");
        });
      });
      const els = document.querySelectorAll(".slide-inner");
      els.forEach((el) => {
        let startX = 0;
        el.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        }, { passive: true });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        }, { passive: true });
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tab.js
  var NAME8 = "tab";
  var DATA_KEY6 = "bs.tab";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY7}`;
  var EVENT_SHOW4 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY7}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY7}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY7}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE2 = "active";
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE2}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE2}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE2}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME8;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE4, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW4, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE2);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW5);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN4, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE2);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW5);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN4, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE2);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW5);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE2);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = params_exports?.progress_bar?.width ?? 20;
      this.interval = params_exports?.progress_bar?.interval ?? 50;
      const time = params_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    show() {
      this.ele.classList.remove("d-none");
      setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/scrollspy.js
  var NAME9 = "scrollspy";
  var DATA_KEY7 = "bs.scrollspy";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY8}`;
  var EVENT_CLICK = `click${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}${DATA_API_KEY5}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE3 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var Default8 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType8 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME9;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK);
      event_handler_default.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE3);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE2, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE3);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE3);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE3);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE3}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE3);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo:/__w/learn-software-engineering/learn-software-engineering/assets/mods/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/giscus@v0.1.1/assets/hb/modules/giscus/js/index.ts
  (() => {
    "use strict";
    const giscus = new js_default();
    const setTheme = (theme = "") => {
      if (theme === "") {
        const saved = localStorage.getItem("hb-theme");
        theme = !saved || saved === "auto" ? getPreferredTheme() : saved;
      }
      giscus.setTheme(theme);
    };
    const getPreferredTheme = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("giscus-load", () => {
        const frame = document.querySelector("iframe.giscus-frame.giscus-frame--loading");
        frame?.addEventListener("load", () => {
          setTheme();
        });
      });
      setTimeout(() => {
        setTheme();
      }, 2e3);
      document.addEventListener("hb:theme", (e) => {
        setTheme(e.detail.theme);
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.2.0/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
        this.updatePos();
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return params_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.10.1/assets/hb/modules/bigger-picture/js/panel.ts
  var Panel = class {
    constructor(bp, downloadIcon, shareIcon, rotateIcon, flipIcon, playIcon) {
      this.bp = bp;
      this.downloadIcon = downloadIcon;
      this.shareIcon = shareIcon;
      this.rotateIcon = rotateIcon;
      this.flipIcon = flipIcon;
      this.playIcon = playIcon;
    }
    init(container) {
      const p = document.createElement("div");
      p.classList.add("bp-panel", "d-flex", "position-absolute", "mx-auto", "start-0", "end-0", "text-center");
      p.appendChild(this.rotate(false));
      p.appendChild(this.rotate(true));
      p.appendChild(this.flip());
      p.appendChild(this.play());
      p.appendChild(this.download());
      p.appendChild(this.share());
      container.appendChild(p);
    }
    update(container, item) {
      const p = container.querySelector(".bp-panel");
      const d = p.querySelector(".bp-panel-download");
      d.href = item.img;
      d.download = item.alt;
    }
    imgWrap = () => {
      return document.querySelector(".bp-img-wrap");
    };
    rotate = (clockwise = false) => {
      const a = document.createElement("a");
      a.title = "Rotate";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-rotate", clockwise ? "bp-panel-rotate-clockwise" : "bp-panel-rotate-anticlockwise", "text-decoration-none", "p-2");
      a.innerHTML = this.rotateIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        let value = parseInt(wrap.getAttribute("data-rotate") ?? "0");
        value += clockwise ? 90 : -90;
        wrap.setAttribute("data-rotate", value.toString());
        this.transform(wrap);
      });
      return a;
    };
    flip = () => {
      const a = document.createElement("a");
      a.title = "Flip";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-flip", "text-decoration-none", "p-2");
      a.innerHTML = this.flipIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        if (wrap.hasAttribute("data-flip")) {
          wrap.removeAttribute("data-flip");
        } else {
          wrap.setAttribute("data-flip", "true");
        }
        this.transform(wrap);
      });
      return a;
    };
    transform = (wrap) => {
      const transform = [];
      const rotate = wrap.getAttribute("data-rotate");
      if (rotate) {
        transform.push(`rotate(${parseInt(rotate)}deg)`);
      }
      const flip = wrap.getAttribute("data-flip");
      if (flip) {
        transform.push("scaleX(-1)");
      }
      wrap.style.transform = transform.join(" ");
    };
    playJob = 0;
    playInterval = 1e3;
    play = () => {
      const a = document.createElement("a");
      a.title = "Play";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-play", "text-decoration-none", "p-2");
      a.innerHTML = this.playIcon;
      a.addEventListener("click", () => {
        if (this.playJob) {
          clearInterval(this.playJob);
          this.playJob = 0;
          a.classList.remove("active");
          return;
        }
        a.classList.add("active");
        this.playJob = setInterval(() => {
          this.bp.next();
        }, params_default.bigger_picture.play_interval ?? 5e3);
      });
      return a;
    };
    download = () => {
      const a = document.createElement("a");
      a.title = "Download";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-download", "text-decoration-none", "p-2");
      a.setAttribute("download", "");
      a.innerHTML = this.downloadIcon;
      return a;
    };
    twitterShareLink = () => {
      return `https://twitter.com/intent/tweet?url=${this.shareLink()}`;
    };
    facebookShareLink = () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`;
    };
    shareLink = () => {
      return encodeURIComponent(window.location.href);
    };
    share = () => {
      const el = document.createElement("div");
      el.classList.add("bp-panel-action", "dropdown-center", "bp-panel-share", "p-2");
      el.innerHTML = `<a class="text-white" href="#" role="button" title="Share" data-bs-toggle="dropdown" aria-expanded="false">${this.shareIcon}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" target="_blank" href="${this.twitterShareLink()}">Twitter</a></li>
            <li><a class="dropdown-item" target="_blank" href="${this.facebookShareLink()}">Facebook</a></li>
          </ul>`;
      return el;
    };
  };

  // <stdin>
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocketbi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z"/>
</svg>`);
    });
  })();
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-downloadbi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-sharebi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwisebi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flipbi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circlebi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`);
      const onOpen = (container) => {
        panel.init(container);
      };
      const onUpdate = (container, item) => {
        panel.update(container, item);
      };
      const show = (imgs, pos) => {
        bp.open({
          items: imgs,
          intro: "fadeup",
          position: pos,
          onOpen,
          onUpdate
        });
      };
      const scale = parseInt("2");
      const data = (img) => {
        const alt = img.getAttribute("alt");
        let caption = alt;
        const captionEle = img.parentNode.querySelector("figcaption");
        if (captionEle !== null) {
          caption = captionEle.innerText;
        }
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: scale * (img.getAttribute("data-height") ?? img.naturalHeight),
          width: scale * (img.getAttribute("data-width") ?? img.naturalWidth),
          alt: img.getAttribute("alt"),
          caption,
          thumb: img.src
        };
      };
      const images = document.querySelectorAll("img");
      for (const img of images) {
        if (img.closest("a")) {
          continue;
        }
        img.addEventListener("click", () => {
          const imgs = [];
          let pos = 0;
          const set = img.closest(".bigger-pictures");
          if (set) {
            const els = set.querySelectorAll("img");
            for (let i = 0; i < els.length; i++) {
              if (els[i] === img) {
                pos = i;
              }
              imgs.push(data(els[i]));
            }
          } else {
            imgs.push(data(img));
          }
          show(imgs, pos);
        });
      }
      const links = Array.from(document.querySelectorAll(".img-link"));
      for (const link of links) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          show([{
            img: link.getAttribute("href"),
            alt: link.innerText,
            caption: link.innerText
          }], 0);
        });
      }
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vZ29odWdvaW8vaHVnby1tb2QtanNsaWJzLWRpc3QvcG9wcGVyanMvdjJAdjIuMjExMDAuMjAwMDAvcGFja2FnZS9kaXN0L2Nqcy9wb3BwZXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGVucnlnZC9iaWdnZXItcGljdHVyZUB2MS4xLjE1L2Rpc3QvYmlnZ2VyLXBpY3R1cmUudW1kLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9kYXRhLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvaW5kZXguanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY29sbGFwc2UuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYXNlQHYwLjQuMy9hc3NldHMvaGIvbW9kdWxlcy9iYXNlL2pzL3Jlc3BvbnNpdmUtdGFibGUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZHJvcGRvd24uanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvb2ZmY2FudmFzLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svaGVhZGVyQHYwLjE0LjEvYXNzZXRzL2hiL21vZHVsZXMvaGVhZGVyL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc3dpcGUuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY2Fyb3VzZWwuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9jYXJvdXNlbEB2MC4yLjQvYXNzZXRzL2hiL21vZHVsZXMvY2Fyb3VzZWwvanMvaW5kZXgudHMiLCAibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9oZWFkaW5nLXNpZ25AdjAuMi4wL2Fzc2V0cy9oYi9tb2R1bGVzL2hlYWRpbmctc2lnbi9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL3NsaWRlQHYwLjMuMS9hc3NldHMvaGIvbW9kdWxlcy9zbGlkZS9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy90YWIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9wcm9ncmVzcy1iYXJAdjAuMS4wL2Fzc2V0cy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9wcm9ncmVzcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL3Byb2dyZXNzLWJhckB2MC4xLjAvYXNzZXRzL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3Njcm9sbHNweS5qcyIsICJucy1odWdvOi9fX3cvbGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmcvbGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmcvYXNzZXRzL21vZHMvZ2lzY3VzL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svZ2lzY3VzQHYwLjEuMS9hc3NldHMvaGIvbW9kdWxlcy9naXNjdXMvanMvaW5kZXgudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYWNrLXRvLXRvcEB2MC4yLjAvYXNzZXRzL2hiL21vZHVsZXMvYmFjay10by10b3AvanMvYnV0dG9uLnRzIiwgIjxzdGRpbj4iLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iaWdnZXItcGljdHVyZUB2MC4xMC4xL2Fzc2V0cy9oYi9tb2R1bGVzL2JpZ2dlci1waWN0dXJlL2pzL3BhbmVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBwb3BwZXJqcy9jb3JlIHYyLjExLjAgLSBNSVQgTGljZW5zZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaXNIVE1MRWxlbWVudChlbGVtZW50KSAmJiBpbmNsdWRlU2NhbGUpIHtcbiAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG9mZnNldFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDsgLy8gRG8gbm90IGF0dGVtcHQgdG8gZGl2aWRlIGJ5IDAsIG90aGVyd2lzZSB3ZSBnZXQgYEluZmluaXR5YCBhcyBzY2FsZVxuICAgIC8vIEZhbGxiYWNrIHRvIDEgaW4gY2FzZSBib3RoIHZhbHVlcyBhcmUgYDBgXG5cbiAgICBpZiAob2Zmc2V0V2lkdGggPiAwKSB7XG4gICAgICBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIG9mZnNldFdpZHRoIHx8IDE7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggLyBzY2FsZVgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAvIHNjYWxlWSxcbiAgICB0b3A6IHJlY3QudG9wIC8gc2NhbGVZLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0IC8gc2NhbGVYLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gLyBzY2FsZVksXG4gICAgbGVmdDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHg6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB5OiByZWN0LnRvcCAvIHNjYWxlWVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59XG5cbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5mdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufVxuXG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxudmFyIHRvcCA9ICd0b3AnO1xudmFyIGJvdHRvbSA9ICdib3R0b20nO1xudmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbnZhciBsZWZ0ID0gJ2xlZnQnO1xudmFyIGF1dG8gPSAnYXV0byc7XG52YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbnZhciBzdGFydCA9ICdzdGFydCc7XG52YXIgZW5kID0gJ2VuZCc7XG52YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG52YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xudmFyIHBvcHBlciA9ICdwb3BwZXInO1xudmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xudmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbnZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xudmFyIHJlYWQgPSAncmVhZCc7XG52YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbnZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xudmFyIG1haW4gPSAnbWFpbic7XG52YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxudmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbnZhciB3cml0ZSA9ICd3cml0ZSc7XG52YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbnZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn1cblxudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBbXS5jb25jYXQoT2JqZWN0LmtleXMobW9kaWZpZXIpLCBWQUxJRF9QUk9QRVJUSUVTKSAvLyBJRTExLWNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIGBuZXcgU2V0KGl0ZXJhYmxlKWBcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLmVmZmVjdCAhPSBudWxsICYmIHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5yZXF1aXJlcyAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59XG5cbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keScgJiYgKGNhbkVzY2FwZUNsaXBwaW5nID8gZ2V0Q29tcHV0ZWRTdHlsZShjbGlwcGluZ1BhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnIDogdHJ1ZSk7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn1cblxudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QkMihfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGV2ZW50TGlzdGVuZXJzID0ge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0JDIsXG4gIGRhdGE6IHt9XG59O1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59O1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07XG5cbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXBwbHlTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59O1xuXG5mdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIG9mZnNldCQxID0ge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59O1xuXG52YXIgaGFzaCQxID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgfSk7XG59XG5cbnZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIFx1MjAxMyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBmbGlwJDEgPSB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5cbmZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbn1cbmZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluJDEgPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59O1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFycm93JDEgPSB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGhpZGUkMSA9IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTtcblxudmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xudmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnMkMVxufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0cy5hcHBseVN0eWxlcyA9IGFwcGx5U3R5bGVzJDE7XG5leHBvcnRzLmFycm93ID0gYXJyb3ckMTtcbmV4cG9ydHMuY29tcHV0ZVN0eWxlcyA9IGNvbXB1dGVTdHlsZXMkMTtcbmV4cG9ydHMuY3JlYXRlUG9wcGVyID0gY3JlYXRlUG9wcGVyO1xuZXhwb3J0cy5jcmVhdGVQb3BwZXJMaXRlID0gY3JlYXRlUG9wcGVyJDE7XG5leHBvcnRzLmRlZmF1bHRNb2RpZmllcnMgPSBkZWZhdWx0TW9kaWZpZXJzO1xuZXhwb3J0cy5kZXRlY3RPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93O1xuZXhwb3J0cy5ldmVudExpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJzO1xuZXhwb3J0cy5mbGlwID0gZmxpcCQxO1xuZXhwb3J0cy5oaWRlID0gaGlkZSQxO1xuZXhwb3J0cy5vZmZzZXQgPSBvZmZzZXQkMTtcbmV4cG9ydHMucG9wcGVyR2VuZXJhdG9yID0gcG9wcGVyR2VuZXJhdG9yO1xuZXhwb3J0cy5wb3BwZXJPZmZzZXRzID0gcG9wcGVyT2Zmc2V0cyQxO1xuZXhwb3J0cy5wcmV2ZW50T3ZlcmZsb3cgPSBwcmV2ZW50T3ZlcmZsb3ckMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsICIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CaWdnZXJQaWN0dXJlID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHsgfVxuICAgIGNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuICAgIGZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgICAgIHJldHVybiB0YXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bihmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICAgICAgZm5zLmZvckVhY2gocnVuKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbiAgICB9XG4gICAgbGV0IG5vdyA9ICgpID0+IGdsb2JhbFRoaXMucGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgO1xuICAgIGxldCByYWYgPSBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDtcblxuICAgIGNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gICAgICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRleHQoJycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgbGV0IHN0eWxlc2hlZXQ7XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIC8vIGZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgLy8gICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICAvLyAgICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIC8vICAgICB3aGlsZSAoaS0tKVxuICAgIC8vICAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgLy8gICAgIHJldHVybiBoYXNoID4+PiAwO1xuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICAgICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGBfYnBfJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTkpfV8ke3VpZH1gO1xuICAgICAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICghc3R5bGVzaGVldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgICAgICBhY3RpdmUgKz0gMTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG4gICAgICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZVxuICAgICAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX2JwJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgIGlmIChuYW1lICYmICEtLWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBmdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbiAgICBjb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gICAgLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbiAgICAvLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4gICAgLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuICAgIC8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4gICAgLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbiAgICAvLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbiAgICAvLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuICAgIC8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4gICAgLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAgIC8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4gICAgLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbiAgICAvLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbiAgICAvLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuICAgIC8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4gICAgLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbiAgICAvLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuICAgIC8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4gICAgLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbiAgICBjb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgICAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBmdW5jdGlvbiB3YWl0KCkge1xuICAgICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG4gICAgbGV0IG91dHJvcztcbiAgICBmdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgICAgIG91dHJvcyA9IHtcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBjOiBbXSxcbiAgICAgICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgICAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRyb3MgPSBvdXRyb3MucDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbiAgICBmdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBsZXQgdWlkID0gMDtcbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgIGdyb3VwLnIgKz0gMTtcbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgICAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgICAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICAgICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICQkLmN0eCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgICAgICBib3VuZDoge30sXG4gICAgICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGNhbGxiYWNrczoge30sXG4gICAgICAgICAgICBkaXJ0eSxcbiAgICAgICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgICAgIH07XG4gICAgICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICAgICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICAgICAqL1xuICAgIGNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gICAgICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgICAgICByZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gICAgICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gICAgICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICAgICAgbGV0IHN0b3A7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXIgb2Ygc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0X2ludGVycG9sYXRvcihhLCBiKSB7XG4gICAgICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gYTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBhO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gYi5tYXAoKGJpLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldF9pbnRlcnBvbGF0b3IoYVtpXSwgYmkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhcnIubWFwKGZuID0+IGZuKHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhICsgdCAqIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiB0d2VlbmVkKHZhbHVlLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgbGV0IHRhcmdldF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzX3Rhc2sgPSB0YXNrO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGlkZW50aXR5LCBpbnRlcnBvbGF0ZSA9IGdldF9pbnRlcnBvbGF0b3IgfSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgb3B0cyk7XG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA8IHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBpbnRlcnBvbGF0ZSh2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24odmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBmbihlYXNpbmcoZWxhcHNlZCAvIGR1cmF0aW9uKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXQsXG4gICAgICAgICAgICB1cGRhdGU6IChmbiwgb3B0cykgPT4gc2V0KGZuKHRhcmdldF92YWx1ZSwgdmFsdWUpLCBvcHRzKSxcbiAgICAgICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIHRydWUgaWYgZ2FsbGVyeSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nICovXG4gICAgY29uc3QgY2xvc2luZyA9IHdyaXRhYmxlKDApO1xuXG4gICAgLyoqIHN0b3JlIGlmIHVzZXIgcHJlZmVycyByZWR1Y2VkIG1vdGlvbiAgKi9cbiAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IGdsb2JhbFRoaXMubWF0Y2hNZWRpYT8uKFxuICAgIFx0JyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJ1xuICAgICkubWF0Y2hlcztcblxuICAgIC8qKiBkZWZhdWx0IG9wdGlvbnMgZm9yIHR3ZWVucyAvIHRyYW5zaXRpb25zICovXG4gICAgY29uc3QgZGVmYXVsdFR3ZWVuT3B0aW9ucyA9IChkdXJhdGlvbikgPT4gKHtcbiAgICBcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRkdXJhdGlvbjogcHJlZmVyc1JlZHVjZWRNb3Rpb24gPyAwIDogZHVyYXRpb24sXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUaHVtYkJhY2tncm91bmQgPSAoYWN0aXZlSXRlbSkgPT5cbiAgICBcdCFhY3RpdmVJdGVtLnRodW1iIHx8IGB1cmwoJHthY3RpdmVJdGVtLnRodW1ifSlgO1xuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvbG9hZGluZy5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJicC1iYXJcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJicC1vXCI+PC9zcGFuPmA7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1sb2FkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qYWN0aXZlSXRlbSovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMTE6NTcpIHsjaWYgJGNsb3Npbmd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGRpdl9pbnRybztcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtbG9hZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmFjdGl2ZUl0ZW0qLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmICghZGl2X2ludHJvKSB7XG4gICAgXHRcdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvLnN0YXJ0KCk7XG4gICAgXHRcdFx0XHR9KTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDQoY3R4KSB7XG4gICAgXHRsZXQgaWZfYmxvY2swX2FuY2hvcjtcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9ICEvKmxvYWRlZCovIGN0eFsxXSAmJiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyokY2xvc2luZyovIGN0eFsyXSAmJiBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2swX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazBfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazFfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGlmICghLypsb2FkZWQqLyBjdHhbMV0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAyKSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLm0oaWZfYmxvY2swX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKiRjbG9zaW5nKi8gY3R4WzJdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eSAmIC8qJGNsb3NpbmcqLyA0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMS5kKDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQ0KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJGNsb3Npbmc7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMiwgJGNsb3NpbmcgPSAkJHZhbHVlKSk7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgbG9hZGVkIH0gPSAkJHByb3BzO1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0aWYgKCdhY3RpdmVJdGVtJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgYWN0aXZlSXRlbSA9ICQkcHJvcHMuYWN0aXZlSXRlbSk7XG4gICAgXHRcdGlmICgnbG9hZGVkJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgbG9hZGVkID0gJCRwcm9wcy5sb2FkZWQpO1xuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFthY3RpdmVJdGVtLCBsb2FkZWQsICRjbG9zaW5nXTtcbiAgICB9XG5cbiAgICBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ0LCBjcmVhdGVfZnJhZ21lbnQkNCwgbm90X2VxdWFsLCB7IGFjdGl2ZUl0ZW06IDAsIGxvYWRlZDogMSB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pbWFnZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCkge1xuICAgIFx0bGV0IGltZztcbiAgICBcdGxldCBpbWdfc3Jjc2V0X3ZhbHVlO1xuICAgIFx0bGV0IGltZ19zaXplc192YWx1ZTtcbiAgICBcdGxldCBpbWdfYWx0X3ZhbHVlO1xuICAgIFx0bGV0IGltZ19vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpbWcgPSBlbGVtZW50KFwiaW1nXCIpO1xuICAgIFx0XHRcdGF0dHIoaW1nLCBcInNyY3NldFwiLCBpbWdfc3Jjc2V0X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzddLmltZyk7XG4gICAgXHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKTtcbiAgICBcdFx0XHRhdHRyKGltZywgXCJhbHRcIiwgaW1nX2FsdF92YWx1ZSA9IC8qYWN0aXZlSXRlbSovIGN0eFs3XS5hbHQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaW1nLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gbGlzdGVuKGltZywgXCJlcnJvclwiLCAvKmVycm9yX2hhbmRsZXIqLyBjdHhbMjZdKTtcbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypzaXplcyovIDIgJiYgaW1nX3NpemVzX3ZhbHVlICE9PSAoaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKSkge1xuICAgIFx0XHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpbWdfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oaW1nLCBmbHksIHt9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGltZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0ZGlzcG9zZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzNzQ6MTApIHsjaWYgc2hvd0xvYWRlcn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMShjdHgpIHtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFs3XSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMl1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQobG9hZGluZy4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRjb25zdCBsb2FkaW5nX2NoYW5nZXMgPSB7fTtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmxvYWRlZCovIDQpIGxvYWRpbmdfY2hhbmdlcy5sb2FkZWQgPSAvKmxvYWRlZCovIGN0eFsyXTtcbiAgICBcdFx0XHRsb2FkaW5nLiRzZXQobG9hZGluZ19jaGFuZ2VzKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGxvYWRpbmcsIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDMoY3R4KSB7XG4gICAgXHRsZXQgZGl2MTtcbiAgICBcdGxldCBkaXYwO1xuICAgIFx0bGV0IGlmX2Jsb2NrMF9hbmNob3I7XG4gICAgXHRsZXQgc3R5bGVfdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVswXX1weCwgJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzFdfXB4LCAwKWA7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG4gICAgXHRsZXQgaWZfYmxvY2swID0gLypsb2FkZWQqLyBjdHhbMl0gJiYgY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICAgIFx0bGV0IGlmX2Jsb2NrMSA9IC8qc2hvd0xvYWRlciovIGN0eFszXSAmJiBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdjEgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdjAgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2swX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRhdHRyKGRpdjAsIFwiY2xhc3NcIiwgXCJicC1pbWdcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwid2lkdGhcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJoZWlnaHRcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1kcmFnXCIsIC8qcG9pbnRlckRvd24qLyBjdHhbNF0pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWNhbnpvb21cIiwgLyptYXhab29tKi8gY3R4WzExXSA+IDEgJiYgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIDwgLypuYXR1cmFsV2lkdGgqLyBjdHhbMTJdKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbN10pKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ0cmFuc2Zvcm1cIiwgc3R5bGVfdHJhbnNmb3JtKTtcbiAgICBcdFx0XHRhdHRyKGRpdjEsIFwiY2xhc3NcIiwgXCJicC1pbWctd3JhcFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MSwgXCJicC1jbG9zZVwiLCAvKmNsb3NpbmdXaGlsZVpvb21lZCovIGN0eFs1XSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYxLCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYxLCBkaXYwKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MCwgaWZfYmxvY2swX2FuY2hvcik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLypvbk1vdW50Ki8gY3R4WzIwXS5jYWxsKG51bGwsIGRpdjApKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwid2hlZWxcIiwgLypvbldoZWVsKi8gY3R4WzE1XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJkb3duXCIsIC8qb25Qb2ludGVyRG93biovIGN0eFsxNl0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVybW92ZVwiLCAvKm9uUG9pbnRlck1vdmUqLyBjdHhbMTddKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcnVwXCIsIC8qb25Qb2ludGVyVXAqLyBjdHhbMTldKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcmNhbmNlbFwiLCAvKnJlbW92ZUV2ZW50RnJvbUNhY2hlKi8gY3R4WzE4XSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKC8qbG9hZGVkKi8gY3R4WzJdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qbG9hZGVkKi8gNCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5tKGRpdjAsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qc2hvd0xvYWRlciovIGN0eFszXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnNob3dMb2FkZXIqLyA4KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwid2lkdGhcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMqLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJoZWlnaHRcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnBvaW50ZXJEb3duKi8gMTYpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWRyYWdcIiwgLypwb2ludGVyRG93biovIGN0eFs0XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyptYXhab29tLCAkaW1hZ2VEaW1lbnNpb25zLCBuYXR1cmFsV2lkdGgqLyA2MTQ1KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1jYW56b29tXCIsIC8qbWF4Wm9vbSovIGN0eFsxMV0gPiAxICYmIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSA8IC8qbmF0dXJhbFdpZHRoKi8gY3R4WzEyXSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zLCAkem9vbURyYWdUcmFuc2xhdGUqLyA2NSAmJiBzdHlsZV90cmFuc2Zvcm0gIT09IChzdHlsZV90cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzBdfXB4LCAkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMV19cHgsIDApYCkpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcInRyYW5zZm9ybVwiLCBzdHlsZV90cmFuc2Zvcm0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qY2xvc2luZ1doaWxlWm9vbWVkKi8gMzIpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYxLCBcImJwLWNsb3NlXCIsIC8qY2xvc2luZ1doaWxlWm9vbWVkKi8gY3R4WzVdKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYxKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZCgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMygkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0ICR6b29tZWQ7XG4gICAgXHRsZXQgJHpvb21EcmFnVHJhbnNsYXRlO1xuICAgIFx0bGV0ICRjbG9zaW5nO1xuICAgIFx0bGV0ICRpbWFnZURpbWVuc2lvbnM7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMjUsICRjbG9zaW5nID0gJCR2YWx1ZSkpO1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBzbWFsbFNjcmVlbiB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IGFjdGl2ZUl0ZW0sIG9wdHMsIHByZXYsIG5leHQsIHpvb21lZCwgY29udGFpbmVyIH0gPSBwcm9wcztcbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tZWQsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgyNCwgJHpvb21lZCA9IHZhbHVlKSk7XG4gICAgXHRsZXQgbWF4Wm9vbSA9IGFjdGl2ZUl0ZW0ubWF4Wm9vbSB8fCBvcHRzLm1heFpvb20gfHwgMTA7XG4gICAgXHRsZXQgY2FsY3VsYXRlZERpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pO1xuXG4gICAgXHQvKiogdmFsdWUgb2Ygc2l6ZXMgYXR0cmlidXRlICovXG4gICAgXHRsZXQgc2l6ZXMgPSBjYWxjdWxhdGVkRGltZW5zaW9uc1swXTtcblxuICAgIFx0LyoqIHRyYWNrcyBsb2FkIHN0YXRlIG9mIGltYWdlICovXG4gICAgXHRsZXQgbG9hZGVkLCBzaG93TG9hZGVyO1xuXG4gICAgXHQvKiogc3RvcmVzIHBpbmNoIGluZm8gaWYgbXVsdGlwbGUgdG91Y2ggZXZlbnRzIGFjdGl2ZSAqL1xuICAgIFx0bGV0IHBpbmNoRGV0YWlscztcblxuICAgIFx0LyoqIGltYWdlIGh0bWwgZWxlbWVudCAoLmJwLWltZykgKi9cbiAgICBcdGxldCBicEltZztcblxuICAgIFx0LyoqIHRyYWNrIGRpc3RhbmNlIGZvciBwaW5jaCBldmVudHMgKi9cbiAgICBcdGxldCBwcmV2RGlmZiA9IDA7XG5cbiAgICBcdGxldCBwb2ludGVyRG93biwgaGFzRHJhZ2dlZDtcbiAgICBcdGxldCBkcmFnU3RhcnRYLCBkcmFnU3RhcnRZO1xuXG4gICAgXHQvKiogem9vbURyYWdUcmFuc2xhdGUgdmFsdWVzIG9uIHN0YXJ0IG9mIGRyYWcgKi9cbiAgICBcdGxldCBkcmFnU3RhcnRUcmFuc2xhdGVYLCBkcmFnU3RhcnRUcmFuc2xhdGVZO1xuXG4gICAgXHQvKiogaWYgdHJ1ZSwgYWRkcyBjbGFzcyB0byAuYnAtd3JhcCB0byBhdm9pZCBpbWFnZSBjcm9wcGluZyAqL1xuICAgIFx0bGV0IGNsb3NpbmdXaGlsZVpvb21lZDtcblxuICAgIFx0Y29uc3QgbmF0dXJhbFdpZHRoID0gK2FjdGl2ZUl0ZW0ud2lkdGg7XG5cbiAgICBcdC8qKiBzdG9yZSBwb3NpdGlvbnMgZm9yIGRyYWcgaW5lcnRpYSAqL1xuICAgIFx0Y29uc3QgZHJhZ1Bvc2l0aW9ucyA9IFtdO1xuXG4gICAgXHQvKiogY2FjaGUgcG9pbnRlciBldmVudHMgdG8gaGFuZGxlIHBpbmNoICovXG4gICAgXHRjb25zdCBwb2ludGVyQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbiAgICBcdC8qKiB0d2VlbiB0byBjb250cm9sIGltYWdlIHNpemUgKi9cbiAgICBcdGNvbnN0IGltYWdlRGltZW5zaW9ucyA9IHR3ZWVuZWQoY2FsY3VsYXRlZERpbWVuc2lvbnMsIGRlZmF1bHRUd2Vlbk9wdGlvbnMoNDAwKSk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCBpbWFnZURpbWVuc2lvbnMsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgwLCAkaW1hZ2VEaW1lbnNpb25zID0gdmFsdWUpKTtcblxuICAgIFx0LyoqIHRyYW5zbGF0ZSB0cmFuc2Zvcm0gZm9yIHBvaW50ZXJEb3duICovXG4gICAgXHRjb25zdCB6b29tRHJhZ1RyYW5zbGF0ZSA9IHR3ZWVuZWQoWzAsIDBdLCBkZWZhdWx0VHdlZW5PcHRpb25zKDQwMCkpO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbURyYWdUcmFuc2xhdGUsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSg2LCAkem9vbURyYWdUcmFuc2xhdGUgPSB2YWx1ZSkpO1xuXG4gICAgXHQvKiogY2FsY3VsYXRlIHRyYW5zbGF0ZSBwb3NpdGlvbiB3aXRoIGJvdW5kcyAqL1xuICAgIFx0Y29uc3QgYm91bmRUcmFuc2xhdGVWYWx1ZXMgPSAoW3gsIHldLCBuZXdEaW1lbnNpb25zID0gJGltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgIFx0XHQvLyBpbWFnZSBkcmFnIHRyYW5zbGF0ZSBib3VuZHNcbiAgICBcdFx0Y29uc3QgbWF4VHJhbnNsYXRlWCA9IChuZXdEaW1lbnNpb25zWzBdIC0gY29udGFpbmVyLncpIC8gMjtcblxuICAgIFx0XHRjb25zdCBtYXhUcmFuc2xhdGVZID0gKG5ld0RpbWVuc2lvbnNbMV0gLSBjb250YWluZXIuaCkgLyAyO1xuXG4gICAgXHRcdC8vIHggbWF4IGRyYWdcbiAgICBcdFx0aWYgKG1heFRyYW5zbGF0ZVggPCAwKSB7XG4gICAgXHRcdFx0eCA9IDA7XG4gICAgXHRcdH0gZWxzZSBpZiAoeCA+IG1heFRyYW5zbGF0ZVgpIHtcbiAgICBcdFx0XHRpZiAoc21hbGxTY3JlZW4pIHtcbiAgICBcdFx0XHRcdC8vIGJvdW5kIHRvIGxlZnQgc2lkZSAoYWxsb3cgc2xpZ2h0IG92ZXIgZHJhZylcbiAgICBcdFx0XHRcdHggPSBwb2ludGVyRG93blxuICAgIFx0XHRcdFx0PyBtYXhUcmFuc2xhdGVYICsgKHggLSBtYXhUcmFuc2xhdGVYKSAvIDEwXG4gICAgXHRcdFx0XHQ6IG1heFRyYW5zbGF0ZVg7XG5cbiAgICBcdFx0XHRcdC8vIHByZXZpb3VzIGl0ZW0gaWYgZHJhZ2dlZCBwYXN0IHRocmVzaG9sZFxuICAgIFx0XHRcdFx0aWYgKHggPiBtYXhUcmFuc2xhdGVYICsgMjApIHtcbiAgICBcdFx0XHRcdFx0Ly8gcG9pbnRlcmRvd24gPSB1bmRlZmluZWQgdG8gc3RvcCBwb2ludGVybW92ZSBmcm9tIHJ1bm5pbmcgYWdhaW5cbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gcHJldigpKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0eCA9IG1heFRyYW5zbGF0ZVg7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9IGVsc2UgaWYgKHggPCAtbWF4VHJhbnNsYXRlWCkge1xuICAgIFx0XHRcdC8vIGJvdW5kIHRvIHJpZ2h0IHNpZGUgKGFsbG93IHNsaWdodCBvdmVyIGRyYWcpXG4gICAgXHRcdFx0aWYgKHNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHR4ID0gcG9pbnRlckRvd25cbiAgICBcdFx0XHRcdD8gLW1heFRyYW5zbGF0ZVggLSAoLW1heFRyYW5zbGF0ZVggLSB4KSAvIDEwXG4gICAgXHRcdFx0XHQ6IC1tYXhUcmFuc2xhdGVYO1xuXG4gICAgXHRcdFx0XHQvLyBuZXh0IGl0ZW0gaWYgZHJhZ2dlZCBwYXN0IHRocmVzaG9sZFxuICAgIFx0XHRcdFx0aWYgKHggPCAtbWF4VHJhbnNsYXRlWCAtIDIwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IG5leHQoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdHggPSAtbWF4VHJhbnNsYXRlWDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyB5IG1heCBkcmFnXG4gICAgXHRcdGlmIChtYXhUcmFuc2xhdGVZIDwgMCkge1xuICAgIFx0XHRcdHkgPSAwO1xuICAgIFx0XHR9IGVsc2UgaWYgKHkgPiBtYXhUcmFuc2xhdGVZKSB7XG4gICAgXHRcdFx0eSA9IG1heFRyYW5zbGF0ZVk7XG4gICAgXHRcdH0gZWxzZSBpZiAoeSA8IC1tYXhUcmFuc2xhdGVZKSB7XG4gICAgXHRcdFx0eSA9IC1tYXhUcmFuc2xhdGVZO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0cmV0dXJuIFt4LCB5XTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiB1cGRhdGVzIHpvb20gbGV2ZWwgaW4gb3Igb3V0IGJhc2VkIG9uIGFtdCB2YWx1ZSAqL1xuICAgIFx0ZnVuY3Rpb24gY2hhbmdlWm9vbShhbXQgPSBtYXhab29tLCBlKSB7XG4gICAgXHRcdGlmICgkY2xvc2luZykge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGNvbnN0IG1heFdpZHRoID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF0gKiBtYXhab29tO1xuICAgIFx0XHRsZXQgbmV3V2lkdGggPSAkaW1hZ2VEaW1lbnNpb25zWzBdICsgJGltYWdlRGltZW5zaW9uc1swXSAqIGFtdDtcbiAgICBcdFx0bGV0IG5ld0hlaWdodCA9ICRpbWFnZURpbWVuc2lvbnNbMV0gKyAkaW1hZ2VEaW1lbnNpb25zWzFdICogYW10O1xuXG4gICAgXHRcdGlmIChhbXQgPiAwKSB7XG4gICAgXHRcdFx0aWYgKG5ld1dpZHRoID4gbWF4V2lkdGgpIHtcbiAgICBcdFx0XHRcdC8vIHJlcXVlc3Rpbmcgc2l6ZSBsYXJnZSB0aGFuIG1heCB6b29tXG4gICAgXHRcdFx0XHRuZXdXaWR0aCA9IG1heFdpZHRoO1xuXG4gICAgXHRcdFx0XHRuZXdIZWlnaHQgPSBjYWxjdWxhdGVkRGltZW5zaW9uc1sxXSAqIG1heFpvb207XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKG5ld1dpZHRoID4gbmF0dXJhbFdpZHRoKSB7XG4gICAgXHRcdFx0XHQvLyBpZiByZXF1ZXN0aW5nIHpvb20gbGFyZ2VyIHRoYW4gbmF0dXJhbCBzaXplXG4gICAgXHRcdFx0XHRuZXdXaWR0aCA9IG5hdHVyYWxXaWR0aDtcblxuICAgIFx0XHRcdFx0bmV3SGVpZ2h0ID0gK2FjdGl2ZUl0ZW0uaGVpZ2h0O1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmIChuZXdXaWR0aCA8IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdKSB7XG4gICAgXHRcdFx0Ly8gaWYgcmVxdWVzdGluZyBpbWFnZSBzbWFsbGVyIHRoYW4gc3RhcnRpbmcgc2l6ZVxuICAgIFx0XHRcdGltYWdlRGltZW5zaW9ucy5zZXQoY2FsY3VsYXRlZERpbWVuc2lvbnMpO1xuXG4gICAgXHRcdFx0cmV0dXJuIHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0bGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gYnBJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBcdFx0Ly8gZGlzdGFuY2UgY2xpY2tlZCBmcm9tIGNlbnRlciBvZiBpbWFnZVxuICAgIFx0XHRjb25zdCBvZmZzZXRYID0gZSA/IGUuY2xpZW50WCAtIHggLSB3aWR0aCAvIDIgOiAwO1xuXG4gICAgXHRcdGNvbnN0IG9mZnNldFkgPSBlID8gZS5jbGllbnRZIC0geSAtIGhlaWdodCAvIDIgOiAwO1xuICAgIFx0XHR4ID0gLW9mZnNldFggKiAobmV3V2lkdGggLyB3aWR0aCkgKyBvZmZzZXRYO1xuICAgIFx0XHR5ID0gLW9mZnNldFkgKiAobmV3SGVpZ2h0IC8gaGVpZ2h0KSArIG9mZnNldFk7XG4gICAgXHRcdGNvbnN0IG5ld0RpbWVuc2lvbnMgPSBbbmV3V2lkdGgsIG5ld0hlaWdodF07XG5cbiAgICBcdFx0Ly8gc2V0IG5ldyBkaW1lbnNpb25zIGFuZCB1cGRhdGUgc2l6ZXMgcHJvcGVydHlcbiAgICBcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChuZXdEaW1lbnNpb25zKS50aGVuKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMSwgc2l6ZXMgPSBNYXRoLnJvdW5kKE1hdGgubWF4KHNpemVzLCBuZXdXaWR0aCkpKTtcbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gdXBkYXRlIHRyYW5zbGF0ZSB2YWx1ZVxuICAgIFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoWyR6b29tRHJhZ1RyYW5zbGF0ZVswXSArIHgsICR6b29tRHJhZ1RyYW5zbGF0ZVsxXSArIHldLCBuZXdEaW1lbnNpb25zKSk7XG4gICAgXHR9XG5cbiAgICBcdC8vIGFsbG93IHpvb20gdG8gYmUgcmVhZCAvIHNldCBleHRlcm5hbGx5XG4gICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aXZlSXRlbSwgJ3pvb20nLCB7XG4gICAgXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBcdFx0Z2V0OiAoKSA9PiAkem9vbWVkLFxuICAgIFx0XHRzZXQ6IGJvb2wgPT4gY2hhbmdlWm9vbShib29sID8gbWF4Wm9vbSA6IC1tYXhab29tKVxuICAgIFx0fSk7XG5cbiAgICBcdGNvbnN0IG9uV2hlZWwgPSBlID0+IHtcbiAgICBcdFx0Ly8gcmV0dXJuIGlmIHNjcm9sbGluZyBwYXN0IGlubGluZSBnYWxsZXJ5IHcvIHdoZWVsXG4gICAgXHRcdGlmIChvcHRzLmlubGluZSAmJiAhJHpvb21lZCkge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHByZXZlbnREZWZhdWx0IHRvIHN0b3Agc2Nyb2xsaW5nIG9uIHpvb21lZCBpbmxpbmUgaW1hZ2VcbiAgICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgXHRcdC8vIGNoYW5nZSB6b29tIG9uIHdoZWVsXG4gICAgXHRcdGNoYW5nZVpvb20oZS5kZWx0YVkgLyAtMzAwLCBlKTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBvbiBkcmFnIHN0YXJ0LCBzdG9yZSBpbml0aWFsIHBvc2l0aW9uIGFuZCBpbWFnZSB0cmFuc2xhdGUgdmFsdWVzICovXG4gICAgXHRjb25zdCBvblBvaW50ZXJEb3duID0gZSA9PiB7XG4gICAgXHRcdC8vIGRvbid0IHJ1biBpZiByaWdodCBjbGlja1xuICAgIFx0XHRpZiAoZS5idXR0b24gIT09IDIpIHtcbiAgICBcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gdHJ1ZSk7XG4gICAgXHRcdFx0cG9pbnRlckNhY2hlLnNldChlLnBvaW50ZXJJZCwgZSk7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0WCA9IGUuY2xpZW50WDtcbiAgICBcdFx0XHRkcmFnU3RhcnRZID0gZS5jbGllbnRZO1xuICAgIFx0XHRcdGRyYWdTdGFydFRyYW5zbGF0ZVggPSAkem9vbURyYWdUcmFuc2xhdGVbMF07XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0VHJhbnNsYXRlWSA9ICR6b29tRHJhZ1RyYW5zbGF0ZVsxXTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIG9uIGRyYWcsIHVwZGF0ZSBpbWFnZSB0cmFuc2xhdGUgdmFsICovXG4gICAgXHRjb25zdCBvblBvaW50ZXJNb3ZlID0gZSA9PiB7XG4gICAgXHRcdGlmIChwb2ludGVyQ2FjaGUuc2l6ZSA+IDEpIHtcbiAgICBcdFx0XHQvLyBpZiBtdWx0aXBsZSBwb2ludGVyIGV2ZW50cywgcGFzcyB0byBoYW5kbGVQaW5jaCBmdW5jdGlvblxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IGZhbHNlKTtcblxuICAgIFx0XHRcdHJldHVybiBvcHRzLm5vUGluY2g/Lihjb250YWluZXIuZWwpIHx8IGhhbmRsZVBpbmNoKGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0aWYgKCFwb2ludGVyRG93bikge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGxldCB4ID0gZS5jbGllbnRYO1xuICAgIFx0XHRsZXQgeSA9IGUuY2xpZW50WTtcblxuICAgIFx0XHQvLyBzdG9yZSBwb3NpdGlvbnMgaW4gZHJhZ1Bvc2l0aW9ucyBmb3IgaW5lcnRpYVxuICAgIFx0XHQvLyBzZXQgaGFzRHJhZ2dlZCBpZiA+IDIgcG9pbnRlciBtb3ZlIGV2ZW50c1xuICAgIFx0XHRoYXNEcmFnZ2VkID0gZHJhZ1Bvc2l0aW9ucy5wdXNoKHsgeCwgeSB9KSA+IDI7XG5cbiAgICBcdFx0Ly8gb3ZlcmFsbCBkcmFnIGRpZmYgZnJvbSBzdGFydCBsb2NhdGlvblxuICAgIFx0XHR4ID0geCAtIGRyYWdTdGFydFg7XG5cbiAgICBcdFx0eSA9IHkgLSBkcmFnU3RhcnRZO1xuXG4gICAgXHRcdC8vIGhhbmRsZSB1bnpvb21lZCBsZWZ0IC8gcmlnaHQgLyB1cCBzd2lwZXNcbiAgICBcdFx0aWYgKCEkem9vbWVkKSB7XG4gICAgXHRcdFx0Ly8gY2xvc2UgaWYgc3dpcGUgdXBcbiAgICBcdFx0XHRpZiAoeSA8IC05MCkge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gIW9wdHMubm9DbG9zZSAmJiBwcm9wcy5jbG9zZSgpKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHQvLyBvbmx5IGhhbmRsZSBsZWZ0IC8gcmlnaHQgaWYgbm90IHN3aXBpbmcgdmVydGljYWxseVxuICAgIFx0XHRcdGlmIChNYXRoLmFicyh5KSA8IDMwKSB7XG4gICAgXHRcdFx0XHQvLyBwcmV2aW91cyBpZiBzd2lwZSBsZWZ0XG4gICAgXHRcdFx0XHRpZiAoeCA+IDQwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXYoKSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdC8vIG5leHQgaWYgc3dpcGUgcmlnaHRcbiAgICBcdFx0XHRcdGlmICh4IDwgLTQwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IG5leHQoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gaW1hZ2UgZHJhZyB3aGVuIHpvb21lZFxuICAgIFx0XHRpZiAoJHpvb21lZCAmJiBoYXNEcmFnZ2VkICYmICEkY2xvc2luZykge1xuICAgIFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChib3VuZFRyYW5zbGF0ZVZhbHVlcyhbZHJhZ1N0YXJ0VHJhbnNsYXRlWCArIHgsIGRyYWdTdGFydFRyYW5zbGF0ZVkgKyB5XSksIHsgZHVyYXRpb246IDAgfSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGhhbmRsZVBpbmNoID0gZSA9PiB7XG4gICAgXHRcdC8vIHVwZGF0ZSBldmVudCBpbiBjYWNoZSBhbmQgZ2V0IHZhbHVlc1xuICAgIFx0XHRjb25zdCBbcDEsIHAyXSA9IHBvaW50ZXJDYWNoZS5zZXQoZS5wb2ludGVySWQsIGUpLnZhbHVlcygpO1xuXG4gICAgXHRcdC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50ZXJzXG4gICAgXHRcdGNvbnN0IGR4ID0gcDEuY2xpZW50WCAtIHAyLmNsaWVudFg7XG5cbiAgICBcdFx0Y29uc3QgZHkgPSBwMS5jbGllbnRZIC0gcDIuY2xpZW50WTtcbiAgICBcdFx0Y29uc3QgY3VyRGlmZiA9IE1hdGguaHlwb3QoZHgsIGR5KTtcblxuICAgIFx0XHQvLyBjYWNoZSB0aGUgb3JpZ2luYWwgcGluY2ggY2VudGVyXG4gICAgXHRcdHBpbmNoRGV0YWlscyA9IHBpbmNoRGV0YWlscyB8fCB7XG4gICAgXHRcdFx0Y2xpZW50WDogKHAxLmNsaWVudFggKyBwMi5jbGllbnRYKSAvIDIsXG4gICAgXHRcdFx0Y2xpZW50WTogKHAxLmNsaWVudFkgKyBwMi5jbGllbnRZKSAvIDJcbiAgICBcdFx0fTtcblxuICAgIFx0XHQvLyBzY2FsZSBpbWFnZVxuICAgIFx0XHRjaGFuZ2Vab29tKCgocHJldkRpZmYgfHwgY3VyRGlmZikgLSBjdXJEaWZmKSAvIC0zNSwgcGluY2hEZXRhaWxzKTtcblxuICAgIFx0XHQvLyBDYWNoZSB0aGUgZGlzdGFuY2UgZm9yIHRoZSBuZXh0IG1vdmUgZXZlbnRcbiAgICBcdFx0cHJldkRpZmYgPSBjdXJEaWZmO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHJlbW92ZSBldmVudCBmcm9tIHBvaW50ZXIgZXZlbnQgY2FjaGUgKi9cbiAgICBcdGNvbnN0IHJlbW92ZUV2ZW50RnJvbUNhY2hlID0gZSA9PiBwb2ludGVyQ2FjaGUuZGVsZXRlKGUucG9pbnRlcklkKTtcblxuICAgIFx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIFx0XHRyZW1vdmVFdmVudEZyb21DYWNoZShlKTtcblxuICAgIFx0XHRpZiAocGluY2hEZXRhaWxzKSB7XG4gICAgXHRcdFx0Ly8gcmVzZXQgcHJldkRpZmYgYW5kIGNsZWFyIHBvaW50ZXJEb3duIHRvIHRyaWdnZXIgcmV0dXJuIGJlbG93XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gcHJldkRpZmYgPSAwKTtcblxuICAgIFx0XHRcdC8vIHNldCBwaW5jaERldGFpbHMgdG8gbnVsbCBhZnRlciBsYXN0IGZpbmdlciBsaWZ0c1xuICAgIFx0XHRcdHBpbmNoRGV0YWlscyA9IHBvaW50ZXJDYWNoZS5zaXplID8gcGluY2hEZXRhaWxzIDogbnVsbDtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIG1ha2Ugc3VyZSBwb2ludGVyIGV2ZW50cyBkb24ndCBjYXJyeSBvdmVyIHRvIG5leHQgaW1hZ2VcbiAgICBcdFx0aWYgKCFwb2ludGVyRG93bikge1xuICAgIFx0XHRcdHJldHVybjtcbiAgICBcdFx0fVxuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IGZhbHNlKTtcblxuICAgIFx0XHQvLyBjbG9zZSBpZiBvdmVybGF5IGlzIGNsaWNrZWRcbiAgICBcdFx0aWYgKGUudGFyZ2V0ID09PSB0aGlzICYmICFvcHRzLm5vQ2xvc2UpIHtcbiAgICBcdFx0XHRyZXR1cm4gcHJvcHMuY2xvc2UoKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGFkZCBkcmFnIGluZXJ0aWEgLyBzbmFwIGJhY2sgdG8gYm91bmRzXG4gICAgXHRcdGlmIChoYXNEcmFnZ2VkKSB7XG4gICAgXHRcdFx0Y29uc3QgW3Bvc09uZSwgcG9zVHdvLCBwb3NUaHJlZV0gPSBkcmFnUG9zaXRpb25zLnNsaWNlKC0zKTtcbiAgICBcdFx0XHRjb25zdCB4RGlmZiA9IHBvc1R3by54IC0gcG9zVGhyZWUueDtcbiAgICBcdFx0XHRjb25zdCB5RGlmZiA9IHBvc1R3by55IC0gcG9zVGhyZWUueTtcblxuICAgIFx0XHRcdGlmIChNYXRoLmh5cG90KHhEaWZmLCB5RGlmZikgPiA1KSB7XG4gICAgXHRcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoW1xuICAgIFx0XHRcdFx0XHQkem9vbURyYWdUcmFuc2xhdGVbMF0gLSAocG9zT25lLnggLSBwb3NUaHJlZS54KSAqIDUsXG4gICAgXHRcdFx0XHRcdCR6b29tRHJhZ1RyYW5zbGF0ZVsxXSAtIChwb3NPbmUueSAtIHBvc1RocmVlLnkpICogNVxuICAgIFx0XHRcdFx0XSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmICghb3B0cy5vbkltYWdlQ2xpY2s/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pKSB7XG4gICAgXHRcdFx0Y2hhbmdlWm9vbSgkem9vbWVkID8gLW1heFpvb20gOiBtYXhab29tLCBlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHJlc2V0IHBvaW50ZXIgc3RhdGVzXG4gICAgXHRcdGhhc0RyYWdnZWQgPSBmYWxzZTtcblxuICAgIFx0XHQvLyByZXNldCBkcmFnUG9zaXRpb25zXG4gICAgXHRcdGRyYWdQb3NpdGlvbnMubGVuZ3RoID0gMDtcbiAgICBcdH1cblxuICAgIFx0Y29uc3Qgb25Nb3VudCA9IG5vZGUgPT4ge1xuICAgIFx0XHRicEltZyA9IG5vZGU7XG5cbiAgICBcdFx0Ly8gaGFuZGxlIGdsb2JhbFRoaXMgcmVzaXplXG4gICAgXHRcdHByb3BzLnNldFJlc2l6ZUZ1bmMoKCkgPT4ge1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgyMywgY2FsY3VsYXRlZERpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcblxuICAgIFx0XHRcdC8vIGFkanVzdCBpbWFnZSBzaXplIC8gem9vbSBvbiByZXNpemUsIGJ1dCBub3Qgb24gbW9iaWxlIGJlY2F1c2VcbiAgICBcdFx0XHQvLyBzb21lIGJyb3dzZXJzIChpb3Mgc2FmYXJpIDE1KSBjb25zdGFudGx5IHJlc2l6ZSBzY3JlZW4gb24gZHJhZ1xuICAgIFx0XHRcdGlmIChvcHRzLmlubGluZSB8fCAhc21hbGxTY3JlZW4pIHtcbiAgICBcdFx0XHRcdGltYWdlRGltZW5zaW9ucy5zZXQoY2FsY3VsYXRlZERpbWVuc2lvbnMpO1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0XHQvLyBkZWNvZGUgaW5pdGlhbCBpbWFnZSBiZWZvcmUgcmVuZGVyaW5nXG4gICAgXHRcdHByb3BzLmxvYWRJbWFnZShhY3RpdmVJdGVtKS50aGVuKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMiwgbG9hZGVkID0gdHJ1ZSk7XG4gICAgXHRcdFx0cHJvcHMucHJlbG9hZE5leHQoKTtcbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gc2hvdyBsb2FkaW5nIGluZGljYXRvciBpZiBuZWVkZWRcbiAgICBcdFx0c2V0VGltZW91dChcbiAgICBcdFx0XHQoKSA9PiB7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoMywgc2hvd0xvYWRlciA9ICFsb2FkZWQpO1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0MjUwXG4gICAgXHRcdCk7XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBlcnJvcl9oYW5kbGVyID0gZXJyb3IgPT4gb3B0cy5vbkVycm9yPy4oY29udGFpbmVyLCBhY3RpdmVJdGVtLCBlcnJvcik7XG5cbiAgICBcdCQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIFx0XHRcbiAgICBcdFx0aWYgKCdzbWFsbFNjcmVlbicgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIyLCBzbWFsbFNjcmVlbiA9ICQkcHJvcHMuc21hbGxTY3JlZW4pO1xuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucywgY2FsY3VsYXRlZERpbWVuc2lvbnMqLyA4Mzg4NjA5KSB7XG4gICAgXHRcdFx0em9vbWVkLnNldCgkaW1hZ2VEaW1lbnNpb25zWzBdIC0gMTAgPiBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyokY2xvc2luZywgJHpvb21lZCwgY2FsY3VsYXRlZERpbWVuc2lvbnMqLyA1ODcyMDI1Nikge1xuICAgIFx0XHRcdC8vIGlmIHpvb21lZCB3aGlsZSBjbG9zaW5nLCB6b29tIG91dCBpbWFnZSBhbmQgYWRkIGNsYXNzXG4gICAgXHRcdFx0Ly8gdG8gY2hhbmdlIGNvbnRhaW4gdmFsdWUgb24gLmJwLXdyYXAgdG8gYXZvaWQgY3JvcHBpbmdcbiAgICBcdFx0XHRpZiAoJGNsb3NpbmcgJiYgJHpvb21lZCAmJiAhb3B0cy5pbnRybykge1xuICAgIFx0XHRcdFx0Y29uc3QgY2xvc2VUd2Vlbk9wdHMgPSBkZWZhdWx0VHdlZW5PcHRpb25zKDQ4MCk7XG4gICAgXHRcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdLCBjbG9zZVR3ZWVuT3B0cyk7XG4gICAgXHRcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zLCBjbG9zZVR3ZWVuT3B0cyk7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNSwgY2xvc2luZ1doaWxlWm9vbWVkID0gdHJ1ZSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gW1xuICAgIFx0XHQkaW1hZ2VEaW1lbnNpb25zLFxuICAgIFx0XHRzaXplcyxcbiAgICBcdFx0bG9hZGVkLFxuICAgIFx0XHRzaG93TG9hZGVyLFxuICAgIFx0XHRwb2ludGVyRG93bixcbiAgICBcdFx0Y2xvc2luZ1doaWxlWm9vbWVkLFxuICAgIFx0XHQkem9vbURyYWdUcmFuc2xhdGUsXG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdHpvb21lZCxcbiAgICBcdFx0Y29udGFpbmVyLFxuICAgIFx0XHRtYXhab29tLFxuICAgIFx0XHRuYXR1cmFsV2lkdGgsXG4gICAgXHRcdGltYWdlRGltZW5zaW9ucyxcbiAgICBcdFx0em9vbURyYWdUcmFuc2xhdGUsXG4gICAgXHRcdG9uV2hlZWwsXG4gICAgXHRcdG9uUG9pbnRlckRvd24sXG4gICAgXHRcdG9uUG9pbnRlck1vdmUsXG4gICAgXHRcdHJlbW92ZUV2ZW50RnJvbUNhY2hlLFxuICAgIFx0XHRvblBvaW50ZXJVcCxcbiAgICBcdFx0b25Nb3VudCxcbiAgICBcdFx0cHJvcHMsXG4gICAgXHRcdHNtYWxsU2NyZWVuLFxuICAgIFx0XHRjYWxjdWxhdGVkRGltZW5zaW9ucyxcbiAgICBcdFx0JHpvb21lZCxcbiAgICBcdFx0JGNsb3NpbmcsXG4gICAgXHRcdGVycm9yX2hhbmRsZXJcbiAgICBcdF07XG4gICAgfVxuXG4gICAgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDMsIGNyZWF0ZV9mcmFnbWVudCQzLCBub3RfZXF1YWwsIHsgcHJvcHM6IDIxLCBzbWFsbFNjcmVlbjogMjIgfSwgbnVsbCwgWy0xLCAtMV0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2lmcmFtZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgaWZyYW1lO1xuICAgIFx0bGV0IGxvYWRpbmc7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFsyXSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMF1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWZyYW1lID0gZWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoaWZyYW1lLCBcImFsbG93XCIsIFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIik7XG4gICAgXHRcdFx0YXR0cihpZnJhbWUsIFwidGl0bGVcIiwgLyphY3RpdmVJdGVtKi8gY3R4WzJdLnRpdGxlKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlmXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYsIGlmcmFtZSk7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLyphZGRTcmMqLyBjdHhbM10uY2FsbChudWxsLCBpZnJhbWUpKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGlmcmFtZSwgXCJsb2FkXCIsIC8qbG9hZF9oYW5kbGVyKi8gY3R4WzVdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMigkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgbG9hZGVkLCBkaW1lbnNpb25zO1xuICAgIFx0Y29uc3QgeyBhY3RpdmVJdGVtIH0gPSBwcm9wcztcbiAgICBcdGNvbnN0IHNldERpbWVuc2lvbnMgPSAoKSA9PiAkJGludmFsaWRhdGUoMSwgZGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuICAgIFx0c2V0RGltZW5zaW9ucygpO1xuICAgIFx0cHJvcHMuc2V0UmVzaXplRnVuYyhzZXREaW1lbnNpb25zKTtcblxuICAgIFx0Ly8gYWRkIHNyYyBvdXJzZWx2ZXMgdG8gYXZvaWQgc3JjX3VybF9lcXVhbCBjYWxsIChzdmVsdGUgc3R1ZmYpXG4gICAgXHRjb25zdCBhZGRTcmMgPSBub2RlID0+IG5vZGUuc3JjID0gYWN0aXZlSXRlbS5pZnJhbWU7XG5cbiAgICBcdGNvbnN0IGxvYWRfaGFuZGxlciA9ICgpID0+ICQkaW52YWxpZGF0ZSgwLCBsb2FkZWQgPSB0cnVlKTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBhZGRTcmMsIHByb3BzLCBsb2FkX2hhbmRsZXJdO1xuICAgIH1cblxuICAgIGNsYXNzIElmcmFtZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMiwgY3JlYXRlX2ZyYWdtZW50JDIsIG5vdF9lcXVhbCwgeyBwcm9wczogNCB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy92aWRlby5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMShjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0bG9hZGluZyA9IG5ldyBMb2FkaW5nKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0YWN0aXZlSXRlbTogLyphY3RpdmVJdGVtKi8gY3R4WzJdLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtdmlkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzJdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFszXS5jYWxsKG51bGwsIGRpdikpO1xuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdGRpc3Bvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQxKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCBsb2FkZWQsIGRpbWVuc2lvbnM7XG4gICAgXHRjb25zdCB7IGFjdGl2ZUl0ZW0sIG9wdHMsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb25zdCBzZXREaW1lbnNpb25zID0gKCkgPT4gJCRpbnZhbGlkYXRlKDEsIGRpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcbiAgICBcdHNldERpbWVuc2lvbnMoKTtcbiAgICBcdHByb3BzLnNldFJlc2l6ZUZ1bmMoc2V0RGltZW5zaW9ucyk7XG5cbiAgICBcdC8qKiBhZGRzIGF0dHJpYnV0ZXMgdG8gYSBub2RlICovXG4gICAgXHRjb25zdCBhZGRBdHRyaWJ1dGVzID0gKG5vZGUsIG9iaikgPT4ge1xuICAgIFx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBcdFx0XHRhdHRyKG5vZGUsIGtleSwgb2JqW2tleV0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogY3JlYXRlIGF1ZG8gLyB2aWRlbyBlbGVtZW50ICovXG4gICAgXHRjb25zdCBvbk1vdW50ID0gbm9kZSA9PiB7XG4gICAgXHRcdGxldCBtZWRpYUVsZW1lbnQ7XG5cbiAgICBcdFx0LyoqIHRha2VzIHN1cHBsaWVkIG9iamVjdCBhbmQgY3JlYXRlcyBlbGVtZW50cyBpbiB2aWRlbyAqL1xuICAgIFx0XHRjb25zdCBhcHBlbmRUb1ZpZGVvID0gKHRhZywgYXJyKSA9PiB7XG4gICAgXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBcdFx0XHRcdGFyciA9IEpTT04ucGFyc2UoYXJyKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRmb3IgKGNvbnN0IG9iaiBvZiBhcnIpIHtcbiAgICBcdFx0XHRcdC8vIGNyZWF0ZSBtZWRpYSBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBcdFx0XHRcdGlmICghbWVkaWFFbGVtZW50KSB7XG4gICAgXHRcdFx0XHRcdG1lZGlhRWxlbWVudCA9IGVsZW1lbnQoKG9iai50eXBlPy5pbmNsdWRlcygnYXVkaW8nKSkgPyAnYXVkaW8nIDogJ3ZpZGVvJyk7XG5cbiAgICBcdFx0XHRcdFx0YWRkQXR0cmlidXRlcyhtZWRpYUVsZW1lbnQsIHtcbiAgICBcdFx0XHRcdFx0XHRjb250cm9sczogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHRhdXRvcGxheTogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHRwbGF5c2lubGluZTogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHR0YWJpbmRleDogJzAnXG4gICAgXHRcdFx0XHRcdH0pO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHQvLyBhZGQgc291cmNlcyAvIHRyYWNrcyB0byBtZWRpYSBlbGVtZW50XG4gICAgXHRcdFx0XHRjb25zdCBlbCA9IGVsZW1lbnQodGFnKTtcblxuICAgIFx0XHRcdFx0YWRkQXR0cmlidXRlcyhlbCwgb2JqKTtcblxuICAgIFx0XHRcdFx0aWYgKHRhZyA9PSAnc291cmNlJykge1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZWwsICdlcnJvcicsIGVycm9yID0+IG9wdHMub25FcnJvcj8uKGNvbnRhaW5lciwgYWN0aXZlSXRlbSwgZXJyb3IpKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0YXBwZW5kKG1lZGlhRWxlbWVudCwgZWwpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcblxuICAgIFx0XHRhcHBlbmRUb1ZpZGVvKCdzb3VyY2UnLCBhY3RpdmVJdGVtLnNvdXJjZXMpO1xuICAgIFx0XHRhcHBlbmRUb1ZpZGVvKCd0cmFjaycsIGFjdGl2ZUl0ZW0udHJhY2tzIHx8IFtdKTtcbiAgICBcdFx0bGlzdGVuKG1lZGlhRWxlbWVudCwgJ2NhbnBsYXknLCAoKSA9PiAkJGludmFsaWRhdGUoMCwgbG9hZGVkID0gdHJ1ZSkpO1xuICAgIFx0XHRhcHBlbmQobm9kZSwgbWVkaWFFbGVtZW50KTtcbiAgICBcdH07XG5cbiAgICBcdFxuXG4gICAgXHRyZXR1cm4gW2xvYWRlZCwgZGltZW5zaW9ucywgYWN0aXZlSXRlbSwgb25Nb3VudCwgcHJvcHNdO1xuICAgIH1cblxuICAgIGNsYXNzIFZpZGVvIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQxLCBjcmVhdGVfZnJhZ21lbnQkMSwgbm90X2VxdWFsLCB7IHByb3BzOiA0IH0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9iaWdnZXItcGljdHVyZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2MjtcbiAgICBcdGxldCBkaXYwO1xuICAgIFx0bGV0IGRpdjBfb3V0cm87XG4gICAgXHRsZXQgcHJldmlvdXNfa2V5ID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmk7XG4gICAgXHRsZXQgZGl2MTtcbiAgICBcdGxldCBidXR0b247XG4gICAgXHRsZXQgZGl2MV9vdXRybztcbiAgICBcdGxldCBjb250YWluZXJBY3Rpb25zX2FjdGlvbjtcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcbiAgICBcdGxldCBrZXlfYmxvY2sgPSBjcmVhdGVfa2V5X2Jsb2NrKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sgPSAvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aCA+IDEgJiYgY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYyID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYwID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRrZXlfYmxvY2suYygpO1xuICAgIFx0XHRcdGRpdjEgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwiY2xhc3NcIiwgXCJicC14XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uLCBcInRpdGxlXCIsIFwiQ2xvc2VcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2MSwgXCJjbGFzc1wiLCBcImJwLWNvbnRyb2xzXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2MiwgXCJjbGFzc1wiLCBcImJwLXdyYXBcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtem9vbWVkXCIsIC8qJHpvb21lZCovIGN0eFsxMF0pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLWlubGluZVwiLCAvKmlubGluZSovIGN0eFs4XSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtc21hbGxcIiwgLypzbWFsbFNjcmVlbiovIGN0eFs3XSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtbm9jbG9zZVwiLCAvKm9wdHMqLyBjdHhbNV0ubm9DbG9zZSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYyLCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYyLCBkaXYwKTtcbiAgICBcdFx0XHRrZXlfYmxvY2subShkaXYyLCBudWxsKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MiwgZGl2MSk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjEsIGJ1dHRvbik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKGRpdjEsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oYnV0dG9uLCBcImNsaWNrXCIsIC8qY2xvc2UqLyBjdHhbMV0pLFxuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKGNvbnRhaW5lckFjdGlvbnNfYWN0aW9uID0gLypjb250YWluZXJBY3Rpb25zKi8gY3R4WzE0XS5jYWxsKG51bGwsIGRpdjIpKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCAmJiBub3RfZXF1YWwocHJldmlvdXNfa2V5LCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaSkpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoa2V5X2Jsb2NrLCAxLCAxLCBub29wKTtcbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrID0gY3JlYXRlX2tleV9ibG9jayhjdHgpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oa2V5X2Jsb2NrKTtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIGRpdjEpO1xuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXS5sZW5ndGggPiAxKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGRpdjEsIG51bGwpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrLmQoMSk7XG4gICAgXHRcdFx0XHRpZl9ibG9jayA9IG51bGw7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyokem9vbWVkKi8gMTAyNCkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtem9vbWVkXCIsIC8qJHpvb21lZCovIGN0eFsxMF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qaW5saW5lKi8gMjU2KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1pbmxpbmVcIiwgLyppbmxpbmUqLyBjdHhbOF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXNtYWxsXCIsIC8qc21hbGxTY3JlZW4qLyBjdHhbN10pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qb3B0cyovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXYwX291dHJvKSBkaXYwX291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGtleV9ibG9jayk7XG4gICAgXHRcdFx0aWYgKGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXYwX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdjAsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGtleV9ibG9jayk7XG5cbiAgICBcdFx0XHRpZiAobG9jYWwpIHtcbiAgICBcdFx0XHRcdGRpdjFfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2MSwgZmx5LCB7fSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYyKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjBfb3V0cm8pIGRpdjBfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0a2V5X2Jsb2NrLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxOToxOTkpIHs6ZWxzZX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfZWxzZV9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5odG1sID8/IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5lbGVtZW50Lm91dGVySFRNTCkgKyBcIlwiO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1odG1sXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0ICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9ICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaHRtbCA/PyAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uZWxlbWVudC5vdXRlckhUTUwpICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGk6IG5vb3AsXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxOToxNjUpIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja181KGN0eCkge1xuICAgIFx0bGV0IGlmcmFtZTtcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRpZnJhbWUgPSBuZXcgSWZyYW1lKHtcbiAgICBcdFx0XHRwcm9wczogeyBwcm9wczogLypnZXRDaGlsZFByb3BzKi8gY3R4WzEzXSgpIH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpZnJhbWUuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGlmcmFtZSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmcmFtZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZyYW1lLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGlmcmFtZSwgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzE5OjEwNCkgXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzQoY3R4KSB7XG4gICAgXHRsZXQgdmlkZW87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0dmlkZW8gPSBuZXcgVmlkZW8oe1xuICAgIFx0XHRcdHByb3BzOiB7IHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCkgfVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KHZpZGVvLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudCh2aWRlbywgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKHZpZGVvLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dCh2aWRlby4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudCh2aWRlbywgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzE5OjQpIHsjaWYgYWN0aXZlSXRlbS5pbWd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzMoY3R4KSB7XG4gICAgXHRsZXQgaW1hZ2VpdGVtO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGltYWdlaXRlbSA9IG5ldyBJbWFnZSh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCksXG4gICAgXHRcdFx0XHRzbWFsbFNjcmVlbjogLypzbWFsbFNjcmVlbiovIGN0eFs3XVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGltYWdlaXRlbSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRjb25zdCBpbWFnZWl0ZW1fY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIGltYWdlaXRlbV9jaGFuZ2VzLnNtYWxsU2NyZWVuID0gLypzbWFsbFNjcmVlbiovIGN0eFs3XTtcbiAgICBcdFx0XHRpbWFnZWl0ZW0uJHNldChpbWFnZWl0ZW1fY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaW1hZ2VpdGVtLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQoaW1hZ2VpdGVtLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTk6Mjk5KSB7I2lmIGFjdGl2ZUl0ZW0uY2FwdGlvbn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gKyBcIlwiO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1jYXBcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgZmx5LCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMwODo0MykgeyNrZXkgYWN0aXZlSXRlbS5pfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9rZXlfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdGxldCBpZl9ibG9jazA7XG4gICAgXHRsZXQgZGl2X2ludHJvO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tfY3JlYXRvcnMgPSBbY3JlYXRlX2lmX2Jsb2NrXzMsIGNyZWF0ZV9pZl9ibG9ja180LCBjcmVhdGVfaWZfYmxvY2tfNSwgY3JlYXRlX2Vsc2VfYmxvY2tdO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tzID0gW107XG5cbiAgICBcdGZ1bmN0aW9uIHNlbGVjdF9ibG9ja190eXBlKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pbWcpIHJldHVybiAwO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLnNvdXJjZXMpIHJldHVybiAxO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmlmcmFtZSkgcmV0dXJuIDI7XG4gICAgXHRcdHJldHVybiAzO1xuICAgIFx0fVxuXG4gICAgXHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuICAgIFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0gPSBpZl9ibG9ja19jcmVhdG9yc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gJiYgY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlubmVyXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLm0oZGl2LCBudWxsKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2sxX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVyZG93blwiLCAvKnBvaW50ZXJkb3duX2hhbmRsZXIqLyBjdHhbMjBdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVydXBcIiwgLypwb2ludGVydXBfaGFuZGxlciovIGN0eFsyMV0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGxldCBwcmV2aW91c19ibG9ja19pbmRleCA9IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdFx0XHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuXG4gICAgXHRcdFx0aWYgKGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9PT0gcHJldmlvdXNfYmxvY2tfaW5kZXgpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9ja3NbcHJldmlvdXNfYmxvY2tfaW5kZXhdLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2Nrc1twcmV2aW91c19ibG9ja19pbmRleF0gPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF07XG5cbiAgICBcdFx0XHRcdGlmICghaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdID0gaWZfYmxvY2tfY3JlYXRvcnNbY3VycmVudF9ibG9ja190eXBlX2luZGV4XShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMC5tKGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcblxuICAgIFx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgIFx0XHRcdFx0aWYgKGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRybyA9IGNyZWF0ZV9pbl90cmFuc2l0aW9uKGRpdiwgLyptZWRpYVRyYW5zaXRpb24qLyBjdHhbMTJdLCB0cnVlKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRyby5zdGFydCgpO1xuICAgIFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHRpZiAoZGl2X2ludHJvKSBkaXZfaW50cm8uaW52YWxpZGF0ZSgpO1xuICAgIFx0XHRcdGRpdl9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYsIC8qbWVkaWFUcmFuc2l0aW9uKi8gY3R4WzEyXSwgZmFsc2UpO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTk6NTU0KSB7I2lmIGl0ZW1zLmxlbmd0aCA+IDF9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IHJhd192YWx1ZSA9IGAkey8qcG9zaXRpb24qLyBjdHhbNF0gKyAxfSAvICR7LyppdGVtcyovIGN0eFswXS5sZW5ndGh9YCArIFwiXCI7XG4gICAgXHRsZXQgYnV0dG9uMDtcbiAgICBcdGxldCBidXR0b24xO1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGJ1dHRvbjAgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGJ1dHRvbjEgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtY291bnRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24wLCBcImNsYXNzXCIsIFwiYnAtcHJldlwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwidGl0bGVcIiwgXCJQcmV2aW91c1wiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJjbGFzc1wiLCBcImJwLW5leHRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcInRpdGxlXCIsIFwiTmV4dFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwiYXJpYS1sYWJlbFwiLCBcIk5leHRcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBidXR0b24wLCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGJ1dHRvbjEsIGFuY2hvcik7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24wLCBcImNsaWNrXCIsIC8qcHJldiovIGN0eFsyXSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24xLCBcImNsaWNrXCIsIC8qbmV4dCovIGN0eFszXSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypwb3NpdGlvbiwgaXRlbXMqLyAxNyAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSBgJHsvKnBvc2l0aW9uKi8gY3R4WzRdICsgMX0gLyAkey8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RofWAgKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uMCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbjEpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudChjdHgpIHtcbiAgICBcdGxldCBpZl9ibG9ja19hbmNob3I7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0gJiYgY3JlYXRlX2lmX2Jsb2NrKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2tfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2tfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLyppdGVtcyovIDEpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2soY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2subShpZl9ibG9ja19hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2tfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9ja19hbmNob3IpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJHpvb21lZDtcbiAgICBcdGxldCB7IGl0ZW1zID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgdGFyZ2V0ID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIFx0LyoqIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIGl0ZW0gKi9cbiAgICBcdGxldCBwb3NpdGlvbjtcblxuICAgIFx0LyoqIG9wdGlvbnMgcGFzc2VkIHZpYSBvcGVuIG1ldGhvZCAqL1xuICAgIFx0bGV0IG9wdHM7XG5cbiAgICBcdC8qKiBib29sIHRyYWNrcyBvcGVuIHN0YXRlICovXG4gICAgXHRsZXQgaXNPcGVuO1xuXG4gICAgXHQvKiogZG9tIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1cyB0byBvbiBjbG9zZSAqL1xuICAgIFx0bGV0IGZvY3VzVHJpZ2dlcjtcblxuICAgIFx0LyoqIGJvb2wgdHJ1ZSBpZiBjb250YWluZXIgd2lkdGggPCA3NjkgKi9cbiAgICBcdGxldCBzbWFsbFNjcmVlbjtcblxuICAgIFx0LyoqIGJvb2wgdmFsdWUgb2YgaW5saW5lIG9wdGlvbiBwYXNzZWQgaW4gb3BlbiBtZXRob2QgKi9cbiAgICBcdGxldCBpbmxpbmU7XG5cbiAgICBcdC8qKiB3aGVuIHBvc2l0aW9uIGlzIHNldCAqL1xuICAgIFx0bGV0IG1vdmVtZW50O1xuXG4gICAgXHQvKiogc3RvcmVzIHRhcmdldCBvbiBwb2ludGVyZG93biAocmVmIGZvciBvdmVybGF5IGNsb3NlKSAqL1xuICAgIFx0bGV0IGNsaWNrZWRFbDtcblxuICAgIFx0LyoqIGFjdGl2ZSBpdGVtIG9iamVjdCAqL1xuICAgIFx0bGV0IGFjdGl2ZUl0ZW07XG5cbiAgICBcdC8qKiByZXR1cm5zIHRydWUgaWYgYGFjdGl2ZUl0ZW1gIGlzIGh0bWwgKi9cbiAgICBcdGNvbnN0IGFjdGl2ZUl0ZW1Jc0h0bWwgPSAoKSA9PiAhYWN0aXZlSXRlbS5pbWcgJiYgIWFjdGl2ZUl0ZW0uc291cmNlcyAmJiAhYWN0aXZlSXRlbS5pZnJhbWU7XG5cbiAgICBcdC8qKiBmdW5jdGlvbiBzZXQgYnkgY2hpbGQgY29tcG9uZW50IHRvIHJ1biB3aGVuIGNvbnRhaW5lciByZXNpemVkICovXG4gICAgXHRsZXQgcmVzaXplRnVuYztcblxuICAgIFx0LyoqIHVzZWQgYnkgY2hpbGQgY29tcG9uZW50cyB0byBzZXQgcmVzaXplIGZ1bmN0aW9uICovXG4gICAgXHRjb25zdCBzZXRSZXNpemVGdW5jID0gZm4gPT4gcmVzaXplRnVuYyA9IGZuO1xuXG4gICAgXHQvKiogY29udGFpbmVyIGVsZW1lbnQgKGVsKSAvIHdpZHRoICh3KSAvIGhlaWdodCAoaCkgKi9cbiAgICBcdGNvbnN0IGNvbnRhaW5lciA9IHt9O1xuXG4gICAgXHQvLyAvKiogdHJ1ZSBpZiBpbWFnZSBpcyBjdXJyZW50bHkgem9vbWVkIHBhc3Qgc3RhcnRpbmcgc2l6ZSAqL1xuICAgIFx0Y29uc3Qgem9vbWVkID0gd3JpdGFibGUoMCk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tZWQsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgxMCwgJHpvb21lZCA9IHZhbHVlKSk7XG5cbiAgICBcdGNvbnN0IG9wZW4gPSBvcHRpb25zID0+IHtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDUsIG9wdHMgPSBvcHRpb25zKTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDgsIGlubGluZSA9IG9wdHMuaW5saW5lKTtcbiAgICBcdFx0Y29uc3Qgb3Blbkl0ZW1zID0gb3B0cy5pdGVtcztcblxuICAgIFx0XHQvLyBhZGQgY2xhc3MgdG8gaGlkZSBzY3JvbGwgaWYgbm90IGlubGluZSBnYWxsZXJ5XG4gICAgXHRcdGlmICghaW5saW5lICYmIGh0bWwuc2Nyb2xsSGVpZ2h0ID4gaHRtbC5jbGllbnRIZWlnaHQpIHtcbiAgICBcdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ2JwLWxvY2snKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1c1xuICAgIFx0XHRmb2N1c1RyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLncgPSB0YXJnZXQub2Zmc2V0V2lkdGgsIGNvbnRhaW5lcik7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKFxuICAgIFx0XHRcdDE5LFxuICAgIFx0XHRcdGNvbnRhaW5lci5oID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5XG4gICAgXHRcdFx0PyBnbG9iYWxUaGlzLmlubmVySGVpZ2h0XG4gICAgXHRcdFx0OiB0YXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgIFx0XHRcdGNvbnRhaW5lclxuICAgIFx0XHQpO1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSg3LCBzbWFsbFNjcmVlbiA9IGNvbnRhaW5lci53IDwgNzY5KTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCAwKTtcblxuICAgIFx0XHQvLyBtYWtlIGFycmF5IHcvIGRhdGFzZXQgdG8gd29yayB3aXRoXG4gICAgXHRcdGlmIChBcnJheS5pc0FycmF5KG9wZW5JdGVtcykpIHtcbiAgICBcdFx0XHQvLyBhcnJheSB3YXMgcGFzc2VkXG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gb3Blbkl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgIFx0XHRcdFx0Ly8gb3ZlcnJpZGUgZ2FsbGVyeSBwb3NpdGlvbiBpZiBuZWVkZWRcbiAgICBcdFx0XHRcdGlmIChvcHRzLmVsICYmIG9wdHMuZWwgPT09IGl0ZW0uZWxlbWVudCkge1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBpKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0cmV0dXJuIHsgaSwgLi4uaXRlbSB9O1xuICAgIFx0XHRcdH0pKTtcbiAgICBcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHQvLyBub2RlbGlzdCAvIG5vZGUgd2FzIHBhc3NlZFxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9IChvcGVuSXRlbXMubGVuZ3RoID8gWy4uLm9wZW5JdGVtc10gOiBbb3Blbkl0ZW1zXSkubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgXHRcdFx0XHQvLyBvdmVycmlkZSBnYWxsZXJ5IHBvc2l0aW9uIGlmIG5lZWRlZFxuICAgIFx0XHRcdFx0aWYgKG9wdHMuZWwgPT09IGVsZW1lbnQpIHtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gaSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHJldHVybiB7IGVsZW1lbnQsIGksIC4uLmVsZW1lbnQuZGF0YXNldCB9O1xuICAgIFx0XHRcdH0pKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgXHRcdG9wdHMub25DbG9zZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdGNsb3Npbmcuc2V0KHRydWUpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoMCwgaXRlbXMgPSBudWxsKTtcblxuICAgIFx0XHQvLyByZXN0b3JlIGZvY3VzIHRvIHRyaWdnZXIgZWxlbWVudFxuICAgIFx0XHRmb2N1c1RyaWdnZXI/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IHByZXYgPSAoKSA9PiBzZXRQb3NpdGlvbihwb3NpdGlvbiAtIDEpO1xuICAgIFx0Y29uc3QgbmV4dCA9ICgpID0+IHNldFBvc2l0aW9uKHBvc2l0aW9uICsgMSk7XG5cbiAgICBcdGNvbnN0IHNldFBvc2l0aW9uID0gaW5kZXggPT4ge1xuICAgIFx0XHRtb3ZlbWVudCA9IGluZGV4IC0gcG9zaXRpb247XG4gICAgXHRcdCQkaW52YWxpZGF0ZSg0LCBwb3NpdGlvbiA9IGdldE5leHRQb3NpdGlvbihpbmRleCkpO1xuICAgIFx0fTtcblxuICAgIFx0LyoqXG4gICAgICogcmV0dXJucyBuZXh0IGdhbGxlcnkgcG9zaXRpb24gKGxvb3BlZCBpZiBuZWNjZXNzYXJ5KVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIFx0Y29uc3QgZ2V0TmV4dFBvc2l0aW9uID0gaW5kZXggPT4gKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcblxuICAgIFx0Y29uc3Qgb25LZXlkb3duID0gZSA9PiB7XG4gICAgXHRcdGNvbnN0IHsga2V5LCBzaGlmdEtleSB9ID0gZTtcblxuICAgIFx0XHRpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgIFx0XHRcdCFvcHRzLm5vQ2xvc2UgJiYgY2xvc2UoKTtcbiAgICBcdFx0fSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgIFx0XHRcdG5leHQoKTtcbiAgICBcdFx0fSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgXHRcdFx0cHJldigpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ1RhYicpIHtcbiAgICBcdFx0XHQvLyB0cmFwIGZvY3VzIG9uIHRhYiBwcmVzc1xuICAgIFx0XHRcdGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG5cbiAgICBcdFx0XHQvLyBhbGxvdyBicm93c2VyIHRvIGhhbmRsZSB0YWIgaW50byB2aWRlbyBjb250cm9scyBvbmx5XG4gICAgXHRcdFx0aWYgKHNoaWZ0S2V5IHx8ICFhY3RpdmVFbGVtZW50LmNvbnRyb2xzKSB7XG4gICAgXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHRcdFx0XHRjb25zdCB7IGZvY3VzV3JhcCA9IGNvbnRhaW5lci5lbCB9ID0gb3B0cztcbiAgICBcdFx0XHRcdGNvbnN0IHRhYmJhYmxlID0gWy4uLmZvY3VzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcqJyldLmZpbHRlcihub2RlID0+IG5vZGUudGFiSW5kZXggPj0gMCk7XG4gICAgXHRcdFx0XHRsZXQgaW5kZXggPSB0YWJiYWJsZS5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpO1xuICAgIFx0XHRcdFx0aW5kZXggKz0gdGFiYmFibGUubGVuZ3RoICsgKHNoaWZ0S2V5ID8gLTEgOiAxKTtcbiAgICBcdFx0XHRcdHRhYmJhYmxlW2luZGV4ICUgdGFiYmFibGUubGVuZ3RoXS5mb2N1cygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqXG4gICAgICogY2FsY3VsYXRlIGRpbWVuc2lvbnMgb2YgaGVpZ2h0IC8gd2lkdGggcmVzaXplZCB0byBmaXQgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIG9iamVjdCB3aXRoIGhlaWdodCAvIHdpZHRoIHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl1cbiAgICAgKi9cbiAgICBcdGNvbnN0IGNhbGN1bGF0ZURpbWVuc2lvbnMgPSAoeyB3aWR0aCA9IDE5MjAsIGhlaWdodCA9IDEwODAgfSkgPT4ge1xuICAgIFx0XHRjb25zdCB7IHNjYWxlID0gMC45OSB9ID0gb3B0cztcbiAgICBcdFx0Y29uc3QgcmF0aW8gPSBNYXRoLm1pbigxLCBjb250YWluZXIudyAvIHdpZHRoICogc2NhbGUsIGNvbnRhaW5lci5oIC8gaGVpZ2h0ICogc2NhbGUpO1xuXG4gICAgXHRcdC8vIHJvdW5kIG51bWJlciBzbyB3ZSBkb24ndCB1c2UgYSBmbG9hdCBhcyB0aGUgc2l6ZXMgYXR0cmlidXRlXG4gICAgXHRcdHJldHVybiBbTWF0aC5yb3VuZCh3aWR0aCAqIHJhdGlvKSwgTWF0aC5yb3VuZChoZWlnaHQgKiByYXRpbyldO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHByZWxvYWRzIGltYWdlcyBmb3IgcHJldmlvdXMgYW5kIG5leHQgaXRlbXMgaW4gZ2FsbGVyeSAqL1xuICAgIFx0Y29uc3QgcHJlbG9hZE5leHQgPSAoKSA9PiB7XG4gICAgXHRcdGlmIChpdGVtcykge1xuICAgIFx0XHRcdGNvbnN0IG5leHRJdGVtID0gaXRlbXNbZ2V0TmV4dFBvc2l0aW9uKHBvc2l0aW9uICsgMSldO1xuICAgIFx0XHRcdGNvbnN0IHByZXZJdGVtID0gaXRlbXNbZ2V0TmV4dFBvc2l0aW9uKHBvc2l0aW9uIC0gMSldO1xuICAgIFx0XHRcdCFuZXh0SXRlbS5wcmVsb2FkICYmIGxvYWRJbWFnZShuZXh0SXRlbSk7XG4gICAgXHRcdFx0IXByZXZJdGVtLnByZWxvYWQgJiYgbG9hZEltYWdlKHByZXZJdGVtKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIGxvYWRzIC8gZGVjb2RlcyBpbWFnZSBmb3IgaXRlbSAqL1xuICAgIFx0Y29uc3QgbG9hZEltYWdlID0gaXRlbSA9PiB7XG4gICAgXHRcdGlmIChpdGVtLmltZykge1xuICAgIFx0XHRcdGNvbnN0IGltYWdlID0gZWxlbWVudCgnaW1nJyk7XG4gICAgXHRcdFx0aW1hZ2Uuc2l6ZXMgPSBvcHRzLnNpemVzIHx8IGAke2NhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbSlbMF19cHhgO1xuICAgIFx0XHRcdGltYWdlLnNyY3NldCA9IGl0ZW0uaW1nO1xuICAgIFx0XHRcdGl0ZW0ucHJlbG9hZCA9IHRydWU7XG5cbiAgICBcdFx0XHRyZXR1cm4gaW1hZ2UuZGVjb2RlKCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgIFx0XHRcdFx0XG4gICAgXHRcdFx0fSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBzdmVsdGUgdHJhbnNpdGlvbiB0byBjb250cm9sIG9wZW5pbmcgLyBjaGFuZ2luZyAqL1xuICAgIFx0Y29uc3QgbWVkaWFUcmFuc2l0aW9uID0gKG5vZGUsIGlzRW50ZXJpbmcpID0+IHtcbiAgICBcdFx0aWYgKCFpc09wZW4gfHwgIWl0ZW1zKSB7XG4gICAgXHRcdFx0Ly8gZW50cmFuY2UgLyBleGl0IHRyYW5zaXRpb25cbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMTgsIGlzT3BlbiA9IGlzRW50ZXJpbmcpO1xuXG4gICAgXHRcdFx0cmV0dXJuIG9wdHMuaW50cm9cbiAgICBcdFx0XHQ/IGZseShub2RlLCB7IHk6IGlzRW50ZXJpbmcgPyAxMCA6IC0xMCB9KVxuICAgIFx0XHRcdDogc2NhbGVJbihub2RlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGZvcndhcmQgLyBiYWNrd2FyZCB0cmFuc2l0aW9uXG4gICAgXHRcdHJldHVybiBmbHkobm9kZSwge1xuICAgIFx0XHRcdHg6IChtb3ZlbWVudCA+IDAgPyAyMCA6IC0yMCkgKiAoaXNFbnRlcmluZyA/IDEgOiAtMSksXG4gICAgXHRcdFx0ZHVyYXRpb246IDI1MFxuICAgIFx0XHR9KTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBjdXN0b20gc3ZlbHRlIHRyYW5zaXRpb24gZm9yIGVudHJhbmNlIHpvb20gKi9cbiAgICBcdGNvbnN0IHNjYWxlSW4gPSBub2RlID0+IHtcbiAgICBcdFx0bGV0IGRpbWVuc2lvbnM7XG5cbiAgICBcdFx0aWYgKGFjdGl2ZUl0ZW1Jc0h0bWwoKSkge1xuICAgIFx0XHRcdGNvbnN0IGJwSXRlbSA9IG5vZGUuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xuICAgIFx0XHRcdGRpbWVuc2lvbnMgPSBbYnBJdGVtLmNsaWVudFdpZHRoLCBicEl0ZW0uY2xpZW50SGVpZ2h0XTtcbiAgICBcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRkaW1lbnNpb25zID0gY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHJlY3QgaXMgYm91bmRpbmcgcmVjdCBvZiB0cmlnZ2VyIGVsZW1lbnRcbiAgICBcdFx0Y29uc3QgcmVjdCA9IChhY3RpdmVJdGVtLmVsZW1lbnQgfHwgZm9jdXNUcmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIFx0XHRjb25zdCBsZWZ0T2Zmc2V0ID0gcmVjdC5sZWZ0IC0gKGNvbnRhaW5lci53IC0gcmVjdC53aWR0aCkgLyAyO1xuICAgIFx0XHRjb25zdCBjZW50ZXJUb3AgPSByZWN0LnRvcCAtIChjb250YWluZXIuaCAtIHJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgXHRcdGNvbnN0IHNjYWxlV2lkdGggPSByZWN0LndpZHRoIC8gZGltZW5zaW9uc1swXTtcbiAgICBcdFx0Y29uc3Qgc2NhbGVIZWlnaHQgPSByZWN0LmhlaWdodCAvIGRpbWVuc2lvbnNbMV07XG5cbiAgICBcdFx0cmV0dXJuIHtcbiAgICBcdFx0XHRkdXJhdGlvbjogNDgwLFxuICAgIFx0XHRcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRcdFx0Y3NzOiAodCwgdSkgPT4ge1xuICAgIFx0XHRcdFx0cmV0dXJuIGB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoJHtsZWZ0T2Zmc2V0ICogdX1weCwgJHtjZW50ZXJUb3AgKiB1fXB4LCAwKSBzY2FsZTNkKCR7c2NhbGVXaWR0aCArIHQgKiAoMSAtIHNjYWxlV2lkdGgpfSwgJHtzY2FsZUhlaWdodCArIHQgKiAoMSAtIHNjYWxlSGVpZ2h0KX0sIDEpYDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJvdmlkZXMgb2JqZWN0IHcvIG5lZWRlZCBmdW5jcyAvIGRhdGEgdG8gY2hpbGQgY29tcG9uZW50cyAgKi9cbiAgICBcdGNvbnN0IGdldENoaWxkUHJvcHMgPSAoKSA9PiAoe1xuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRjYWxjdWxhdGVEaW1lbnNpb25zLFxuICAgIFx0XHRsb2FkSW1hZ2UsXG4gICAgXHRcdHByZWxvYWROZXh0LFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHRwcmV2LFxuICAgIFx0XHRuZXh0LFxuICAgIFx0XHRjbG9zZSxcbiAgICBcdFx0c2V0UmVzaXplRnVuYyxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRjb250YWluZXJcbiAgICBcdH0pO1xuXG4gICAgXHQvKiogY29kZSB0byBydW4gb24gbW91bnQgLyBkZXN0cm95ICovXG4gICAgXHRjb25zdCBjb250YWluZXJBY3Rpb25zID0gbm9kZSA9PiB7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLmVsID0gbm9kZSwgY29udGFpbmVyKTtcbiAgICBcdFx0bGV0IHJlbW92ZUtleWRvd25MaXN0ZW5lcjtcbiAgICBcdFx0bGV0IHJvQWN0aXZlO1xuICAgIFx0XHRvcHRzLm9uT3Blbj8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG5cbiAgICBcdFx0Ly8gZG9uJ3QgdXNlIGtleWJvYXJkIGV2ZW50cyBmb3IgaW5saW5lIGdhbGxlcmllc1xuICAgIFx0XHRpZiAoIWlubGluZSkge1xuICAgIFx0XHRcdHJlbW92ZUtleWRvd25MaXN0ZW5lciA9IGxpc3RlbihnbG9iYWxUaGlzLCAna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBzZXQgdXAgcmVzaXplIG9ic2VydmVyXG4gICAgXHRcdGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIFx0XHRcdFx0Ly8gdXNlIHJvQWN0aXZlIHRvIGF2b2lkIHJ1bm5pbmcgb24gaW5pdGlhbCBvcGVuXG4gICAgXHRcdFx0XHRpZiAocm9BY3RpdmUpIHtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIudyA9IGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgsIGNvbnRhaW5lcik7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLmggPSBlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LmhlaWdodCwgY29udGFpbmVyKTtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDcsIHNtYWxsU2NyZWVuID0gY29udGFpbmVyLncgPCA3NjkpO1xuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biBjaGlsZCBjb21wb25lbnQgcmVzaXplIGZ1bmN0aW9uXG4gICAgXHRcdFx0XHRcdGlmICghYWN0aXZlSXRlbUlzSHRtbCgpKSB7XG4gICAgXHRcdFx0XHRcdFx0cmVzaXplRnVuYz8uKCk7XG4gICAgXHRcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0XHQvLyBydW4gdXNlciBkZWZpbmVkIG9uUmVzaXplIGZ1bmN0aW9uXG4gICAgXHRcdFx0XHRcdG9wdHMub25SZXNpemU/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRyb0FjdGl2ZSA9IHRydWU7XG4gICAgXHRcdFx0fSk7XG5cbiAgICBcdFx0cm8ub2JzZXJ2ZShub2RlKTtcblxuICAgIFx0XHRyZXR1cm4ge1xuICAgIFx0XHRcdGRlc3Ryb3koKSB7XG4gICAgXHRcdFx0XHRyby5kaXNjb25uZWN0KCk7XG4gICAgXHRcdFx0XHRyZW1vdmVLZXlkb3duTGlzdGVuZXI/LigpO1xuICAgIFx0XHRcdFx0Y2xvc2luZy5zZXQoZmFsc2UpO1xuXG4gICAgXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MgaGlkaW5nIHNjcm9sbFxuICAgIFx0XHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdicC1sb2NrJyk7XG5cbiAgICBcdFx0XHRcdG9wdHMub25DbG9zZWQ/LigpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IHBvaW50ZXJkb3duX2hhbmRsZXIgPSBlID0+ICQkaW52YWxpZGF0ZSg5LCBjbGlja2VkRWwgPSBlLnRhcmdldCk7XG5cbiAgICBcdGNvbnN0IHBvaW50ZXJ1cF9oYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBcdFx0Ly8gb25seSBjbG9zZSBpZiBsZWZ0IGNsaWNrIG9uIHNlbGYgYW5kIG5vdCBkcmFnZ2VkXG4gICAgXHRcdGlmIChlLmJ1dHRvbiAhPT0gMiAmJiBlLnRhcmdldCA9PT0gdGhpcyAmJiBjbGlja2VkRWwgPT09IHRoaXMpIHtcbiAgICBcdFx0XHQhb3B0cy5ub0Nsb3NlICYmIGNsb3NlKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdCQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIFx0XHRpZiAoJ2l0ZW1zJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgaXRlbXMgPSAkJHByb3BzLml0ZW1zKTtcbiAgICBcdFx0aWYgKCd0YXJnZXQnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxNSwgdGFyZ2V0ID0gJCRwcm9wcy50YXJnZXQpO1xuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qaXRlbXMsIHBvc2l0aW9uLCBpc09wZW4sIG9wdHMsIGNvbnRhaW5lciwgYWN0aXZlSXRlbSovIDc4NjU0NSkge1xuICAgIFx0XHRcdGlmIChpdGVtcykge1xuICAgIFx0XHRcdFx0Ly8gdXBkYXRlIGFjdGl2ZSBpdGVtIHdoZW4gcG9zaXRpb24gY2hhbmdlc1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDYsIGFjdGl2ZUl0ZW0gPSBpdGVtc1twb3NpdGlvbl0pO1xuXG4gICAgXHRcdFx0XHRpZiAoaXNPcGVuKSB7XG4gICAgXHRcdFx0XHRcdC8vIHJ1biBvblVwZGF0ZSB3aGVuIGl0ZW1zIHVwZGF0ZWRcbiAgICBcdFx0XHRcdFx0b3B0cy5vblVwZGF0ZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gW1xuICAgIFx0XHRpdGVtcyxcbiAgICBcdFx0Y2xvc2UsXG4gICAgXHRcdHByZXYsXG4gICAgXHRcdG5leHQsXG4gICAgXHRcdHBvc2l0aW9uLFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRzbWFsbFNjcmVlbixcbiAgICBcdFx0aW5saW5lLFxuICAgIFx0XHRjbGlja2VkRWwsXG4gICAgXHRcdCR6b29tZWQsXG4gICAgXHRcdHpvb21lZCxcbiAgICBcdFx0bWVkaWFUcmFuc2l0aW9uLFxuICAgIFx0XHRnZXRDaGlsZFByb3BzLFxuICAgIFx0XHRjb250YWluZXJBY3Rpb25zLFxuICAgIFx0XHR0YXJnZXQsXG4gICAgXHRcdG9wZW4sXG4gICAgXHRcdHNldFBvc2l0aW9uLFxuICAgIFx0XHRpc09wZW4sXG4gICAgXHRcdGNvbnRhaW5lcixcbiAgICBcdFx0cG9pbnRlcmRvd25faGFuZGxlcixcbiAgICBcdFx0cG9pbnRlcnVwX2hhbmRsZXJcbiAgICBcdF07XG4gICAgfVxuXG4gICAgY2xhc3MgQmlnZ2VyX3BpY3R1cmUgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuXG4gICAgXHRcdGluaXQoXG4gICAgXHRcdFx0dGhpcyxcbiAgICBcdFx0XHRvcHRpb25zLFxuICAgIFx0XHRcdGluc3RhbmNlLFxuICAgIFx0XHRcdGNyZWF0ZV9mcmFnbWVudCxcbiAgICBcdFx0XHRub3RfZXF1YWwsXG4gICAgXHRcdFx0e1xuICAgIFx0XHRcdFx0aXRlbXM6IDAsXG4gICAgXHRcdFx0XHR0YXJnZXQ6IDE1LFxuICAgIFx0XHRcdFx0b3BlbjogMTYsXG4gICAgXHRcdFx0XHRjbG9zZTogMSxcbiAgICBcdFx0XHRcdHByZXY6IDIsXG4gICAgXHRcdFx0XHRuZXh0OiAzLFxuICAgIFx0XHRcdFx0c2V0UG9zaXRpb246IDE3XG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHRudWxsLFxuICAgIFx0XHRcdFstMSwgLTFdXG4gICAgXHRcdCk7XG4gICAgXHR9XG5cbiAgICBcdGdldCBpdGVtcygpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzBdO1xuICAgIFx0fVxuXG5cblxuICAgIFx0Z2V0IHRhcmdldCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE1XTtcbiAgICBcdH1cblxuXG5cbiAgICBcdGdldCBvcGVuKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTZdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgY2xvc2UoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IHByZXYoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsyXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IG5leHQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFszXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IHNldFBvc2l0aW9uKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTddO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIEJpZ2dlclBpY3R1cmVcbiAgICAgKiBAcGFyYW0ge3t0YXJnZXQ6IEhUTUxFbGVtZW50fX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIEJpZ2dlclBpY3R1cmUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBiaWdnZXJQaWN0dXJlIChvcHRpb25zKSB7XG4gICAgXHRyZXR1cm4gbmV3IEJpZ2dlcl9waWN0dXJlKHtcbiAgICBcdFx0Li4ub3B0aW9ucyxcbiAgICBcdFx0cHJvcHM6IG9wdGlvbnMsXG4gICAgXHR9KVxuICAgIH1cblxuICAgIHJldHVybiBiaWdnZXJQaWN0dXJlO1xuXG59KSk7XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLyoqXG4gKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2soLi4uYXJncykgOiBkZWZhdWx0VmFsdWVcbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBwYXJzZVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQsIHRvVHlwZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbmZpZyB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fSAvLyB0cnkgdG8gcGFyc2VcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgIC4uLihpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgfVxuXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhLmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMy4zJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoc2VsID0+IHBhcnNlU2VsZWN0b3Ioc2VsKSkuam9pbignLCcpIDogbnVsbFxufVxuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcblxuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gW1xuICAgICAgJ2EnLFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2RldGFpbHMnLFxuICAgICAgJ1t0YWJpbmRleF0nLFxuICAgICAgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ1xuICAgIF0ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgOiBudWxsXG4gIH0sXG5cbiAgZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikgOiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlJykuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXJlc3BvbnNpdmUnXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFibGUuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgICB0YWJsZS5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQod3JhcHBlciwgdGFibGUpXG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gVE9ETzogdjYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKVxuXG4gICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgaWYgKFxuICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50IH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWVxuICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG5cbiAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID9cbiAgICAgIHRoaXMgOlxuICAgICAgKFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbilcblxuICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5zaG93KClcbiAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7IC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLmhpZGUoKVxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvd1xufSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXguanMnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsICJpbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL2Ryb3Bkb3duXCI7XG5pbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL29mZmNhbnZhc1wiO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXInKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBjb25zdCBuYXYgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhiLWhlYWRlci1uYXYnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVTaGFkb3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFkb3ctc20nKSAmJiBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LXNtJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMjA7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNTc2XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc2hvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgcmVtb3ZlU2hhZG93KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgc2hhZG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSgpICYmIE1hdGguYWJzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLSBoKSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBoID8gaGlkZSgpIDogc2hvdygpO1xuICAgICAgICAgICAgICAgIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsICJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcImpzL2Jvb3RzdHJhcC9zcmMvY2Fyb3VzZWxcIjtcblxuKCgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuY2Fyb3VzZWxcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBuZXcgQ2Fyb3VzZWwoZWwpXG4gIH0pXG59KSgpXG4iLCAie1wiYmFja190b190b3BcIjp7XCJhbmltYXRpb25cIjp0cnVlLFwiaWNvbl9oZWlnaHRcIjpcIjJlbVwiLFwiaWNvbl9uYW1lXCI6XCJyb2NrZXRcIixcImljb25fd2lkdGhcIjpcIjJlbVwiLFwicG9zaXRpb25fYm90dG9tXCI6XCIxcmVtXCIsXCJwb3NpdGlvbl9lbmRcIjpcIjFyZW1cIn0sXCJiaWdnZXJfcGljdHVyZVwiOntcInBsYXlfaW50ZXJ2YWxcIjo1MDAwLFwic2NhbGVcIjoyfSxcImJsb2dcIjp7XCJhcmNoaXZlc1wiOntcInBhZ2luYXRlXCI6MzB9LFwiZnVsbF93aWR0aFwiOmZhbHNlLFwiZ2lzY3VzXCI6e1wiY2F0ZWdvcnlcIjpcIkdlbmVyYWxcIixcImNhdGVnb3J5X2lkXCI6XCJESUNfa3dET0tRanVuczRDWkpZSVwiLFwiZW5kcG9pbnRcIjpcImh0dHBzOi8vZ2lzY3VzLmFwcC9cIixcImlucHV0X3Bvc2l0aW9uXCI6XCJ0b3BcIixcImxhenlfbG9hZGluZ1wiOnRydWUsXCJtYXBwaW5nXCI6XCJwYXRobmFtZVwiLFwicmVhY3Rpb25zXCI6dHJ1ZSxcInJlcG9cIjpcImxlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nL3dlYnNpdGUtY29tbWVudHNcIixcInJlcG9faWRcIjpcIlJfa2dET0tRanVuZ1wiLFwic3RyaWN0X21hdGNoaW5nXCI6dHJ1ZSxcInRoZW1lXCI6XCJwcmVmZXJyZWRfY29sb3Jfc2NoZW1lXCJ9LFwiaG9tZVwiOntcIm1haW5fc2VjdGlvbnNcIjpbXCJibG9nXCIsXCJzb2Z0d2FyZS1lbmdpbmVlcmluZ1wiLFwicHJvZ3JhbW1pbmdcIixcIm9vcFwiXSxcInBpbm5lZF9wb3N0c19wb3NpdGlvblwiOlwiXCIsXCJyZWNlbnRfcG9zdHNcIjoxMn0sXCJsaXN0X2NvbHNfbGdcIjozLFwibGlzdF9jb2xzX21kXCI6MixcInBhZ2luYXRlXCI6MTIsXCJwb3N0X2RhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCIsXCJwb3N0X3RodW1ibmFpbFwiOnRydWUsXCJwb3N0X3RodW1ibmFpbF9kZWZhdWx0XCI6XCJpbWFnZXMvdGh1bWJuYWlsLnBuZ1wiLFwicG9zdF90aHVtYm5haWxfcGxhY2Vob2xkZXJcIjpcIlwiLFwicmVsYXRlZF9wb3N0c1wiOntcIm51bWJlclwiOjEwfSxcInNpZGViYXJcIjp7XCJwb3NpdGlvblwiOlwic3RhcnRcIixcInBvc3RzXCI6e1wiZmVhdHVyZWRfY291bnRcIjo1LFwiZmlsbFwiOnRydWUsXCJsaXN0X3N0eWxlXCI6XCJzbGlkZVwiLFwicmVjZW50X2NvdW50XCI6NSxcInN0eWxlXCI6XCJwaWxsc1wifSxcInN0aWNreVwiOnRydWUsXCJ0YXhvbm9taWVzXCI6e1wiY291bnRcIjp0cnVlLFwibGltaXRcIjoxMCxcInNlcGFyYXRlXCI6ZmFsc2UsXCJzdHlsZVwiOlwidW5kZXJsaW5lXCJ9LFwid2lkdGhcIjowLjM1fSxcInRvY1wiOntcInBvc2l0aW9uXCI6XCJlbmRcIn19LFwiYnJlYWRjcnVtYlwiOntcImRpc2FibGVkXCI6ZmFsc2V9LFwiY29sb3JcIjpcImxpZ2h0XCIsXCJjc3NfYnVuZGxlX25hbWVcIjpcImxzXCIsXCJkZWJ1Z1wiOmZhbHNlLFwiZG9jc1wiOntcImRhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCIsXCJnaXNjdXNcIjp7XCJjYXRlZ29yeVwiOlwiR2VuZXJhbFwiLFwiY2F0ZWdvcnlfaWRcIjpcIkRJQ19rd0RPS1FqdW5zNENaSllJXCIsXCJlbmRwb2ludFwiOlwiaHR0cHM6Ly9naXNjdXMuYXBwL1wiLFwiaW5wdXRfcG9zaXRpb25cIjpcInRvcFwiLFwibGF6eV9sb2FkaW5nXCI6dHJ1ZSxcIm1hcHBpbmdcIjpcInBhdGhuYW1lXCIsXCJyZWFjdGlvbnNcIjp0cnVlLFwicmVwb1wiOlwibGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmcvd2Vic2l0ZS1jb21tZW50c1wiLFwicmVwb19pZFwiOlwiUl9rZ0RPS1FqdW5nXCIsXCJzdHJpY3RfbWF0Y2hpbmdcIjp0cnVlLFwidGhlbWVcIjpcInByZWZlcnJlZF9jb2xvcl9zY2hlbWVcIn19LFwiZmVhdHVyZWRfaW1hZ2VcIjp7XCJzaXplXCI6XCJ4NjQwXCJ9LFwiZm9vdGVyXCI6e1wicG93ZXJlZF9ieVwiOnRydWUsXCJzaXRlX3RpdGxlXCI6XCJMZWFybi1Tb2Z0d2FyZS5jb21cIixcInNvY2lhbHNcIjp7XCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlYXJuLnNvZnR3YXJlLmVuZ1wiLFwiZ2l0aHViXCI6XCJsZWFybi1zb2Z0d2FyZS1lbmdpbmVlcmluZ1wiLFwiZ21haWxcIjpcIm1haWx0bzovL2xlYXJuLnNvZnR3YXJlLmVuZ0BnbWFpbC5jb21cIixcImluc3RhZ3JhbVwiOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9sZWFybnNvZnR3YXJlZW5nXCIsXCJsaW5rZWRpblwiOlwiaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9sZWFybi1zb2Z0d2FyZVwiLFwicGF0cmVvblwiOlwiaHR0cHM6Ly9wYXRyZW9uLmNvbS9sZWFybnNvZnR3YXJlZW5nXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tL3NvZnR3YXJlNDU2ODdcIixcInlvdXR1YmVcIjpcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BsZWFybi1zb2Z0d2FyZVwifX0sXCJmdWxsX3dpZHRoX3R5cGVzXCI6e1wiZG9jc1wiOntcImVuYWJsZVwiOnRydWV9fSxcImhlYWRlclwiOntcImJhbm5lclwiOntcInRyYW5zcGFyZW50aXplX25hdmJhcl9iZ1wiOnRydWV9LFwiYnJlYWtwb2ludFwiOlwibGdcIixcImZ1bGxfd2lkdGhcIjp0cnVlLFwic29jaWFsc1wiOntcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVhcm4uc29mdHdhcmUuZW5nXCIsXCJnaXRodWJcIjpcImxlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nXCIsXCJnbWFpbFwiOlwibWFpbHRvOi8vbGVhcm4uc29mdHdhcmUuZW5nQGdtYWlsLmNvbVwiLFwiaW5zdGFncmFtXCI6XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2xlYXJuc29mdHdhcmVlbmdcIixcImxpbmtlZGluXCI6XCJodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2xlYXJuLXNvZnR3YXJlXCIsXCJwYXRyZW9uXCI6XCJodHRwczovL3BhdHJlb24uY29tL2xlYXJuc29mdHdhcmVlbmdcIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vc29mdHdhcmU0NTY4N1wiLFwieW91dHViZVwiOlwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGxlYXJuLXNvZnR3YXJlXCJ9LFwic3RpY2t5XCI6dHJ1ZSxcInRoZW1lX3RvZ2dsZVwiOntcInN0eWxlXCI6XCJzd2l0Y2hcIn19LFwiaGVhZGluZ19zaWduXCI6e1wiY29udGFpbmVyc1wiOntcIi5oYi1ibG9nLXBvc3QtY29udGVudFwiOnt9LFwiLmhiLWRvY3MtZG9jLWNvbnRlbnRcIjp7fX0sXCJzeW1ib2xcIjpcIlx1MDBBN1wifSxcImpzX2J1bmRsZV9uYW1lXCI6XCJsc1wiLFwibG9nb1wiOlwiaW1hZ2VzL2xvZ28tc3F1YXJlLTIucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjoyLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCIycHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzY3JvbGxiYXJcIjp7XCJjb3JuZXJfYmdcIjpcIiM5MDkyOTRcIixcImhlaWdodFwiOlwiMTJweFwiLFwidGh1bWJfYmdcIjpcIiM5MDkyOTRcIixcInRyYWNrX2JnXCI6XCIjZjhmOWZhXCIsXCJ3aWR0aFwiOlwiMTJweFwifSxcInNlYXJjaFwiOntcIm1vZGFsXCI6dHJ1ZX0sXCJzdHlsZXNcIjp7XCJoYl90b3Bfb2Zmc2V0XCI6XCIyNHB4XCIsXCJwcmVmaXhcIjpcImhiLVwifSxcInRlcm1zXCI6e1wicGFnaW5hdGVcIjoxMn19IiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tICdAcGFyYW1zJztcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJzID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LmNvbnRhaW5lcnNcbiAgICAgICAgaWYgKCFjb250YWluZXJzKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHBhcmFtcz8uaGVhZGluZ19zaWduPy5zeW1ib2wgPz8gJ1x1MDBBNydcblxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIGNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImgyLCBoMywgaDQsIGg1LCBoNlwiKS5mb3JFYWNoKChoZWFkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBoZWFkaW5nLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9ICdhbmNob3IgbXMtMSdcbiAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IGAjJHtpZH1gXG4gICAgICAgICAgICAgICAgYW5jaG9yLmlubmVyVGV4dCA9IHN5bWJvbFxuICAgICAgICAgICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYW5jaG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG4iLCAiKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgY29uc3Qgc2Nyb2xsID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkaXI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtaW5uZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHN0ZXAgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgbGVmdCA9IGlubmVyLnNjcm9sbExlZnQgLSBzdGVwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBpbm5lci5zY3JvbGxMZWZ0ICsgc3RlcFxuICAgIH1cbiAgICBpbm5lci5zY3JvbGwoe1xuICAgICAgbGVmdCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1sZWZ0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbChlbGVtZW50LCAnbGVmdCcpXG4gICAgICB9KVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5zbGlkZS1jb250cm9sLXJpZ2h0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbChlbGVtZW50LCAncmlnaHQnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5zbGlkZS1pbm5lcicpXG4gICAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IHN0YXJ0WCA9IDBcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIHNjcm9sbChlbCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYID4gc3RhcnRYID8gJ2xlZnQnIDogJ3JpZ2h0JylcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIH0pXG4gIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXROZXh0QWN0aXZlRWxlbWVudCwgaXNEaXNhYmxlZCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgSE9NRV9LRVkgPSAnSG9tZSdcbmNvbnN0IEVORF9LRVkgPSAnRW5kJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSBgOm5vdCgke1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0pYFxuXG5jb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nIC8vIFRPRE86IGNvdWxkIG9ubHkgYmUgYHRhYmAgaW4gdjZcbmNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTClcblxuICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICAgIC8vIFRPRE86IHNob3VsZCB0aHJvdyBleGNlcHRpb24gaW4gdjZcbiAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkgeyAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpXG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFLCB7IHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbSB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldDogYWN0aXZlIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pXG4gICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgZWxlbWVudC5ibHVyKClcblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4sIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW0gfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIShbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWSwgSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKS8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKVxuICAgIGxldCBuZXh0QWN0aXZlRWxlbWVudFxuXG4gICAgaWYgKFtIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBjaGlsZHJlbltldmVudC5rZXkgPT09IEhPTUVfS0VZID8gMCA6IGNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KGNoaWxkcmVuLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDaGlsZHJlbigpIHsgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudClcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbFxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZClcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpXG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpXG5cbiAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpXG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpXG5cbiAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApXG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSlcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVylcbiAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbilcbiAgfVxuXG4gIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpXG59KVxuXG4vKipcbiAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAqL1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudClcbiAgfVxufSlcbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gXCJAcGFyYW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIHtcbiAgICBwcml2YXRlIGVsZTogSFRNTEVsZW1lbnRcblxuICAgIHByaXZhdGUgYmFyOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXG5cbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgXG5cbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8ud2lkdGggPz8gMjBcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy5pbnRlcnZhbCA/PyA1MFxuICAgICAgICBjb25zdCB0aW1lID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LnRpbWUgPz8gMiBcbiAgICAgICAgdGhpcy5zdGVwID0gKDEwMCAtIHRoaXMud2lkdGgpIC8gdGltZSAvIDEwMDAgKiB0aGlzLmludGVydmFsXG4gICAgICAgIHRoaXMuaW5pdEJhcigpXG4gICAgICAgIHRoaXMuaW5pdFByb2dyZXNzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQcm9ncmVzcygpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9ncmVzcy5jbGFzc05hbWUgPSAnaGItcHJvZ3Jlc3MgcHJvZ3Jlc3MgcG9zaXRpb24tZml4ZWQgdG9wLTAgdy0xMDAgcm91bmRlZC0wIGQtbm9uZSdcbiAgICAgICAgcHJvZ3Jlc3Mucm9sZSA9ICdwcm9ncmVzc2JhcidcbiAgICAgICAgcHJvZ3Jlc3MuYXBwZW5kQ2hpbGQodGhpcy5iYXIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpXG4gICAgICAgIHRoaXMuZWxlID0gcHJvZ3Jlc3NcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXIoKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJhci5jbGFzc05hbWUgPSAncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCdcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICclJ1xuICAgICAgICB0aGlzLmJhciA9IGJhclxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gdGhpcy5zdGVwXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9IGAke3RoaXMud2lkdGh9JWBcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbClcbiAgICB9XG59XG4iLCAiaW1wb3J0IFByb2dyZXNzIGZyb20gXCIuL3Byb2dyZXNzXCI7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3MoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgICAgcHJvZ3Jlc3Muc2hvdygpXG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnQsIGlzRGlzYWJsZWQsIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWBcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IG51bGwsIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICB0YXJnZXQ6IG51bGwsXG4gIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgdGhyZXNob2xkOiAnYXJyYXknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGxcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCkgLy8gaW5pdGlhbGl6ZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKVxuICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKClcblxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keVxuXG4gICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaClcbiAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3dcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICByb290LnNjcm9sbFRvKHsgdG9wOiBoZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApXG4gICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcFxuICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3BcbiAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3BcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShhbmNob3IuaGFzaCksIGFuY2hvcilcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldClcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7IHJlbGF0ZWRUYXJnZXQ6IHRhcmdldCB9KVxuICB9XG5cbiAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRX1gLCBwYXJlbnQpXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSlcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsICJjbGFzcyBHaXNjdXMge1xuICBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJRnJhbWVFbGVtZW50PihcbiAgICAgICAgICAnaWZyYW1lLmdpc2N1cy1mcmFtZSdcbiAgICAgIClcblxuICAgICAgZnJhbWVzLmZvckVhY2goKGZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICghZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IChuZXcgVVJMKGZyYW1lLnNyYykpLm9yaWdpbjtcbiAgICAgICAgICBmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBnaXNjdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGAke2VuZHBvaW50fS90aGVtZXMvJHt0aGVtZX0uY3NzYCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZW5kcG9pbnRcbiAgICAgICAgICApO1xuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXNjdXM7XG4iLCAiaW1wb3J0IEdpc2N1cyBmcm9tICdtb2RzL2dpc2N1cy9qcydcbigoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICBjb25zdCBnaXNjdXMgPSBuZXcgR2lzY3VzKClcblxuICAgIGNvbnN0IHNldFRoZW1lID0gKHRoZW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKHRoZW1lID09PSAnJykge1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGItdGhlbWUnKVxuICAgICAgICAgICAgdGhlbWUgPSAoIXNhdmVkIHx8IHNhdmVkID09PSAnYXV0bycpID8gZ2V0UHJlZmVycmVkVGhlbWUoKSA6IHNhdmVkXG4gICAgICAgIH1cblxuICAgICAgICBnaXNjdXMuc2V0VGhlbWUodGhlbWUpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJlZmVycmVkVGhlbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdnaXNjdXMtbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGhlbWUgYWZ0ZXIgbG9hZGluZyB0aGUgZ2lzY3VzIGZyYW1lLlxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUuZ2lzY3VzLWZyYW1lLmdpc2N1cy1mcmFtZS0tbG9hZGluZycpXG4gICAgICAgICAgICBmcmFtZT8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaGVtZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBpZnJhbWUgdGhvc2UgbWlzc2VkIHRoZSBcImdpc2N1cy1sb2FkXCIgZXZlbnQgdG8gYmUgc2V0IGFzIHRoZSByaWdodCB0aGVtZS5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaGVtZSgpXG4gICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaGI6dGhlbWUnLCAoKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZXRUaGVtZShlLmRldGFpbC50aGVtZSlcbiAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcilcbiAgICB9KVxufSkoKVxuIiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tIFwiQHBhcmFtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xuICAgIHByaXZhdGUgYnRuOiBIVE1MQnV0dG9uRWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnaGItYmFjay10by10b3AnXG4gICAgICAgIGJ0bi5hcmlhTGFiZWwgPSAnQmFjayB0byB0b3AnXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSB0aGlzLnRyYW5zZm9ybUljb24oaWNvbilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIHRoaXMuYnRuID0gYnRuXG5cbiAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCB0b3AgPiAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbigpICYmIHRvcCA+IHkpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgPSB0b3BcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbigpICYmIGJ0bi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRyYW5zZm9ybUljb24oaWNvbikge1xuICAgICAgICByZXR1cm4gaWNvbi5yZXBsYWNlKC88c3ZnKC4qKT4oKC58XFxuKSopPFxcL3N2Zz4vLCBgPHN2ZyQxPlxuICA8ZGVmcz48Y2xpcFBhdGggaWQ9XCJpY29uXCI+JDI8L2NsaXBQYXRoPjwvZGVmcz5cbiAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG4gIDxyZWN0IHg9XCIwXCIgeT1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG48L3N2Zz5gKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9zSWNvbjogSFRNTEVsZW1lbnRcblxuICAgIHVwZGF0ZVBvcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc0ljb24pIHtcbiAgICAgICAgICAgIHRoaXMucG9zSWNvbiA9IHRoaXMuYnRuLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdyZWN0JylbMV1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC8gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICB0aGlzLnBvc0ljb24uc2V0QXR0cmlidXRlKCd5JywgKDEgLSBwb3MpICogMTAwICsgJyUnKVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIH1cblxuICAgIGFuaW1hdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcz8uYmFja190b190b3A/LmFuaW1hdGlvbiAhPT0gZmFsc2VcbiAgICB9XG59XG4iLCAiLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vanMvaW5kZXgudW1kLmpzXG5cbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9jdXN0b20vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2RvY3MvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jhc2UvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2hlYWRlci9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvY2Fyb3VzZWwvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2hlYWRpbmctc2lnbi9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvc2xpZGUvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy90b2Mtc2Nyb2xsc3B5L2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9naXNjdXMvanMvaW5kZXgudHMnO1xuXG4gIFxuICBcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdoYi9tb2R1bGVzL2JhY2stdG8tdG9wL2pzL2J1dHRvbic7XG5cbigoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3IEJ1dHRvbihgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLXJvY2tldGJpIGJpLXJvY2tldCBoaS1zdmctaW5saW5lIGhiLWJhY2stdG8tdG9wLWljb25cIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMmVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTTggOGMuODI4IDAgMS41LS44OTUgMS41LTJTOC44MjggNCA4IDRzLTEuNS44OTUtMS41IDJTNy4xNzIgOCA4IDhcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuOTUzIDguODFjLS4xOTUtMy4zODgtLjk2OC01LjUwNy0xLjc3Ny02LjgxOUM5LjcwNyAxLjIzMyA5LjIzLjc1MSA4Ljg1Ny40NTRhMy41IDMuNSAwIDAgMC0uNDYzLS4zMTVBMiAyIDAgMCAwIDguMjUuMDY0LjU1LjU1IDAgMCAwIDggMGEuNTUuNTUgMCAwIDAtLjI2Ni4wNzMgMiAyIDAgMCAwLS4xNDIuMDggNCA0IDAgMCAwLS40NTkuMzNjLS4zNy4zMDgtLjg0NC44MDMtMS4zMSAxLjU3LS44MDUgMS4zMjItMS41NzcgMy40MzMtMS43NzQgNi43NTZsLTEuNDk3IDEuODI2LS4wMDQuMDA1QTIuNSAyLjUgMCAwIDAgMiAxMi4yMDJWMTUuNWEuNS41IDAgMCAwIC45LjNsMS4xMjUtMS41Yy4xNjYtLjIyMi40Mi0uNC43NTItLjU3LjIxNC0uMTA4LjQxNC0uMTkyLjYyNS0uMjgxbC4xOTgtLjA4NGMuNy40MjggMS41NS42MzUgMi40LjYzNXMxLjctLjIwNyAyLjQtLjYzNXEuMS4wNDQuMTk2LjA4M2MuMjEzLjA5LjQxMy4xNzQuNjI3LjI4Mi4zMzIuMTcuNTg2LjM0OC43NTIuNTdsMS4xMjUgMS41YS41LjUgMCAwIDAgLjktLjN2LTMuMjk4YTIuNSAyLjUgMCAwIDAtLjU0OC0xLjU2MnpNMTIgMTAuNDQ1di4wNTVjMCAuODY2LS4yODQgMS41ODUtLjc1IDIuMTQuMTQ2LjA2NC4yOTIuMTMuNDI1LjE5OS4zOS4xOTcuOC40NiAxLjEuODZMMTMgMTR2LTEuNzk4YTEuNSAxLjUgMCAwIDAtLjMyNy0uOTM1ek00Ljc1IDEyLjY0QzQuMjg0IDEyLjA4NSA0IDExLjM2NiA0IDEwLjV2LS4wNTRsLS42NzMuODJhMS41IDEuNSAwIDAgMC0uMzI3LjkzNlYxNGwuMjI1LS4zYy4zLS40LjcxLS42NjQgMS4xLS44NjEuMTMzLS4wNjguMjc5LS4xMzUuNDI1LS4xOTlNOC4wMDkgMS4wNzNxLjA5Ni4wNi4yMjYuMTYzYy4yODQuMjI2LjY4My42MjEgMS4wOSAxLjI4QzEwLjEzNyAzLjgzNiAxMSA2LjIzNyAxMSAxMC41YzAgLjg1OC0uMzc0IDEuNDgtLjk0MyAxLjg5M0M5LjUxNyAxMi43ODYgOC43ODEgMTMgOCAxM3MtMS41MTctLjIxNC0yLjA1Ny0uNjA3QzUuMzczIDExLjk3OSA1IDExLjM1OCA1IDEwLjVjMC00LjE4Mi44Ni02LjU4NiAxLjY3Ny03LjkyOC40MDktLjY3LjgxLTEuMDgyIDEuMDk2LTEuMzJxLjEzNi0uMTEzLjIzNi0uMThaXCIvPlxuICA8cGF0aCBkPVwiTTkuNDc5IDE0LjM2MWMtLjQ4LjA5My0uOTguMTM5LTEuNDc5LjEzOXMtLjk5OS0uMDQ2LTEuNDc5LS4xMzlMNy42IDE1LjhhLjUuNSAwIDAgMCAuOCAwelwiLz5cbjwvc3ZnPmApXG4gICAgfSlcbn0pKCk7XG5cbiAgXG4gIFxuXG5pbXBvcnQgQmlnZ2VyUGljdHVyZSBmcm9tICdtb2RzL2JpZ2dlci1waWN0dXJlL2JpZ2dlci1waWN0dXJlLnVtZC5qcydcbmltcG9ydCBQYW5lbCBmcm9tICdoYi9tb2R1bGVzL2JpZ2dlci1waWN0dXJlL2pzL3BhbmVsJ1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJwID0gQmlnZ2VyUGljdHVyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcGFuZWwgPSBuZXcgUGFuZWwoYnAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktZG93bmxvYWRiaSBiaS1kb3dubG9hZCBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0uNSA5LjlhLjUuNSAwIDAgMSAuNS41djIuNWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTIuNWEuNS41IDAgMCAxIDEgMHYyLjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ2LTIuNWEuNS41IDAgMCAxIC41LS41XCIvPlxuICA8cGF0aCBkPVwiTTcuNjQ2IDExLjg1NGEuNS41IDAgMCAwIC43MDggMGwzLTNhLjUuNSAwIDAgMC0uNzA4LS43MDhMOC41IDEwLjI5M1YxLjVhLjUuNSAwIDAgMC0xIDB2OC43OTNMNS4zNTQgOC4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOHpcIi8+XG48L3N2Zz5gLCBgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLXNoYXJlYmkgYmktc2hhcmUgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTMuNSAxYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zTTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi41IDIuNSAwIDAgMSAwIDEuNTA0bDYuNzE4IDMuMTJhMi41IDIuNSAwIDEgMS0uNDg4Ljg3NmwtNi43MTgtMy4xMmEyLjUgMi41IDAgMSAxIDAtMy4yNTZsNi43MTgtMy4xMkEyLjUgMi41IDAgMCAxIDExIDIuNW0tOC41IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zXCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1jbG9ja3dpc2ViaSBiaS1hcnJvdy1jbG9ja3dpc2UgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggM2E1IDUgMCAxIDAgNC41NDYgMi45MTQuNS41IDAgMCAxIC45MDgtLjQxN0E2IDYgMCAxIDEgOCAyelwiLz5cbiAgPHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw4LjQxIDQuNjU4QS4yNS4yNSAwIDAgMSA4IDQuNDY2XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1waG9uZS1mbGlwYmkgYmktcGhvbmUtZmxpcCBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEgMUg1YTEgMSAwIDAgMC0xIDF2NmEuNS41IDAgMCAxLTEgMFYyYTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjZhLjUuNSAwIDAgMS0xIDBWMmExIDEgMCAwIDAtMS0xbTEgMTNhMSAxIDAgMCAxLTEgMUg1YTEgMSAwIDAgMS0xLTF2LTJhLjUuNSAwIDAgMC0xIDB2MmEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMnYtMmEuNS41IDAgMCAwLTEgMHpNMS43MTMgNy45NTRhLjUuNSAwIDEgMC0uNDE5LS45MDhjLS4zNDcuMTYtLjY1NC4zNDgtLjg4Mi41N0MuMTg0IDcuODQyIDAgOC4xMzkgMCA4LjVjMCAuNTQ2LjQwOC45NC44MjMgMS4yMDEuNDQuMjc4IDEuMDQzLjUxIDEuNzQ1LjY5NkMzLjk3OCAxMC43NzMgNS44OTggMTEgOCAxMXEuMTQ4IDAgLjI5NC0uMDAybC0xLjE0OCAxLjE0OGEuNS41IDAgMCAwIC43MDguNzA4bDItMmEuNS41IDAgMCAwIDAtLjcwOGwtMi0yYS41LjUgMCAxIDAtLjcwOC43MDhsMS4xNDUgMS4xNDRMOCAxMGMtMi4wNCAwLTMuODctLjIyMS01LjE3NC0uNTY5LS42NTYtLjE3NS0xLjE1MS0uMzc0LTEuNDctLjU3NUMxLjAxMiA4LjYzOSAxIDguNTA2IDEgOC41YzAtLjAwMyAwLS4wNTkuMTEyLS4xNy4xMTUtLjExMi4zMS0uMjQyLjYtLjM3NlptMTIuOTkzLS45MDhhLjUuNSAwIDAgMC0uNDE5LjkwOGMuMjkyLjEzNC40ODYuMjY0LjYuMzc3LjExMy4xMS4xMTMuMTY2LjExMy4xNjlzMCAuMDY1LS4xMy4xODdjLS4xMzIuMTIyLS4zNTIuMjYtLjY3Ny40LS42NDUuMjgtMS41OTYuNTIzLTIuNzYzLjY4N2EuNS41IDAgMCAwIC4xNC45OWMxLjIxMi0uMTcgMi4yNi0uNDMgMy4wMi0uNzU4LjM4LS4xNjQuNzEzLS4zNTcuOTYtLjU4Ny4yNDYtLjIyOS40NS0uNTM3LjQ1LS45MTkgMC0uMzYyLS4xODQtLjY2LS40MTItLjg4M3MtLjUzNS0uNDExLS44ODItLjU3MU03LjUgMmEuNS41IDAgMCAwIDAgMWgxYS41LjUgMCAwIDAgMC0xelwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcGxheS1jaXJjbGViaSBiaS1wbGF5LWNpcmNsZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTRtMCAxQTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZcIi8+XG4gIDxwYXRoIGQ9XCJNNi4yNzEgNS4wNTVhLjUuNSAwIDAgMSAuNTIuMDM4bDMuNSAyLjVhLjUuNSAwIDAgMSAwIC44MTRsLTMuNSAyLjVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDVcIi8+XG48L3N2Zz5gKVxuXG4gICAgICAgIGNvbnN0IG9uT3BlbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5pbml0KGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnVwZGF0ZShjb250YWluZXIsIGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKGltZ3MsIHBvcykgPT4ge1xuICAgICAgICAgICAgYnAub3Blbih7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgICAgICAgICAgaW50cm86ICdmYWRldXAnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gcGFyc2VJbnQoJzInKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgbGV0IGNhcHRpb24gPSBhbHRcbiAgICAgICAgICAgIGNvbnN0IGNhcHRpb25FbGUgPSBpbWcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdmaWdjYXB0aW9uJylcbiAgICAgICAgICAgIGlmIChjYXB0aW9uRWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbiA9IGNhcHRpb25FbGUuaW5uZXJUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltZzogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSA/PyBpbWcuc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2NhbGUgKiAoaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSA/PyBpbWcubmF0dXJhbEhlaWdodCksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNjYWxlICogKGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSA/PyBpbWcubmF0dXJhbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBhbHQ6IGltZy5nZXRBdHRyaWJ1dGUoJ2FsdCcpLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGNhcHRpb24sXG4gICAgICAgICAgICAgICAgdGh1bWI6IGltZy5zcmMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBsaW5rYWJsZSBpbWFnZXMuXG4gICAgICAgICAgICBpZiAoaW1nLmNsb3Nlc3QoJ2EnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdzOiBBcnJheTx1bmtub3duPiA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDBcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBpbWcuY2xvc2VzdCgnLmJpZ2dlci1waWN0dXJlcycpXG4gICAgICAgICAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGEgc2V0IG9mIGltYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxzID0gc2V0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4oJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldID09PSBpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzLnB1c2goZGF0YShlbHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1ncy5wdXNoKGRhdGEoaW1nKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaG93KGltZ3MsIHBvcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5pbWctbGluaycpKVxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHNob3coW3tcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IGxpbmsuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBsaW5rLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICB9XSwgMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuIiwgImltcG9ydCB7ZGVmYXVsdCBhcyBwYXJhbXN9IGZyb20gJ0BwYXJhbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicCxcbiAgICAgICAgcHJpdmF0ZSBkb3dubG9hZEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBzaGFyZUljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSByb3RhdGVJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgZmxpcEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBwbGF5SWNvbjogc3RyaW5nLFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsJywgJ2QtZmxleCcsICdwb3NpdGlvbi1hYnNvbHV0ZScsICdteC1hdXRvJywgJ3N0YXJ0LTAnLCAnZW5kLTAnLCAndGV4dC1jZW50ZXInKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucm90YXRlKGZhbHNlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZSh0cnVlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmZsaXAoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnBsYXkoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmRvd25sb2FkKCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5zaGFyZSgpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocClcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgaXRlbSkge1xuICAgICAgICBjb25zdCBwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbCcpIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gdXBkYXRlIGRvd25sb2FkIGxpbmsuXG4gICAgICAgIGNvbnN0IGQgPSBwLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbC1kb3dubG9hZCcpIGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgICAgIGQuaHJlZiA9IGl0ZW0uaW1nXG4gICAgICAgIGQuZG93bmxvYWQgPSBpdGVtLmFsdFxuICAgIH1cblxuICAgIGltZ1dyYXAgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJwLWltZy13cmFwJykgYXMgSFRNTEVsZW1lbnRcbiAgICB9XG5cbiAgICByb3RhdGUgPSAoY2xvY2t3aXNlID0gZmFsc2UpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdSb3RhdGUnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLXJvdGF0ZScsIGNsb2Nrd2lzZSA/ICdicC1wYW5lbC1yb3RhdGUtY2xvY2t3aXNlJyA6ICdicC1wYW5lbC1yb3RhdGUtYW50aWNsb2Nrd2lzZScsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMucm90YXRlSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCh3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKSA/PyAnMCcpXG4gICAgICAgICAgICB2YWx1ZSArPSBjbG9ja3dpc2UgPyA5MCA6IC05MFxuICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHdyYXApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgZmxpcCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdGbGlwJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1mbGlwJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5mbGlwSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBpZiAod3JhcC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpKSB7XG4gICAgICAgICAgICAgICAgd3JhcC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLWZsaXAnLCAndHJ1ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh3cmFwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtID0gKHdyYXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybTogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJylcbiAgICAgICAgaWYgKHJvdGF0ZSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goYHJvdGF0ZSgke3BhcnNlSW50KHJvdGF0ZSl9ZGVnKWApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbGlwID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgIGlmIChmbGlwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaCgnc2NhbGVYKC0xKScpXG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybS5qb2luKFwiIFwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUpvYiA9IDBcblxuICAgIHByaXZhdGUgcGxheUludGVydmFsID0gMTAwMFxuXG4gICAgcGxheSA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdQbGF5J1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1wbGF5JywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5wbGF5SWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheUpvYikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5Sm9iKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IDBcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJwLm5leHQoKVxuICAgICAgICAgICAgfSwgcGFyYW1zLmJpZ2dlcl9waWN0dXJlLnBsYXlfaW50ZXJ2YWwgPz8gNTAwMClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBkb3dubG9hZCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdEb3dubG9hZCdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtZG93bmxvYWQnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJycpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5kb3dubG9hZEljb25cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICB0d2l0dGVyU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke3RoaXMuc2hhcmVMaW5rKCl9YFxuICAgIH1cblxuICAgIGZhY2Vib29rU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dGhpcy5zaGFyZUxpbmsoKX1gXG4gICAgfVxuXG4gICAgc2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIH1cblxuICAgIHNoYXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdkcm9wZG93bi1jZW50ZXInLCAnYnAtcGFuZWwtc2hhcmUnLCAncC0yJylcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwidGV4dC13aGl0ZVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiU2hhcmVcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHt0aGlzLnNoYXJlSWNvbn08L2E+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMudHdpdHRlclNoYXJlTGluaygpfVwiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt0aGlzLmZhY2Vib29rU2hhcmVMaW5rKCl9XCI+RmFjZWJvb2s8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPmBcbiAgICAgICAgcmV0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LElBQUksaUJBQW1DLEtBQUs7QUFDeEQscUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDakMsa0JBQUksSUFBSSxDQUFDLE1BQU0sS0FBSztBQUNoQixzQkFBTTtBQUFBLGNBQ1Y7QUFDQSxtQkFBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQzFCO0FBQUEsVUFDSixPQUFPO0FBQ0gsaUJBQUssS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLFVBQ3ZCO0FBRUEsZUFBSyxNQUFNLEdBQUc7QUFBQSxRQUNsQixDQUFDO0FBQUEsTUFDTDtBQUVBLFlBQU0sUUFBUSxNQUFNLEtBQUssU0FBUyxpQkFBOEIsV0FBVyxDQUFDO0FBQzVFLGlCQUFXLFFBQVEsT0FBTztBQUN0QixhQUFLLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUNsQyxZQUFFLGVBQWU7QUFDakIsZUFBSyxDQUFDO0FBQUEsWUFDRixLQUFLLEtBQUssYUFBYSxNQUFNO0FBQUEsWUFDN0IsS0FBSyxLQUFLO0FBQUEsWUFDVixTQUFTLEtBQUs7QUFBQSxVQUNsQixDQUFDLEdBQUcsQ0FBQztBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMLEdBQUc7IiwKICAibmFtZXMiOiBbImlzRWxlbWVudCIsICJnZXRDb21wdXRlZFN0eWxlIiwgIndpbmRvdyIsICJzZWxmIiwgIm1lcmdlZCIsICJjbGlwcGluZ1BhcmVudHMiLCAicmVmZXJlbmNlIiwgInBvcHBlck9mZnNldHMiLCAib2Zmc2V0IiwgImRlZmF1bHRNb2RpZmllcnMiLCAiY3JlYXRlUG9wcGVyIiwgInBvcHBlciIsICJvcHRpb25zIiwgInN0YXRlIiwgImVmZmVjdCIsICJub29wRm4iLCAibmFtZSIsICJzdHlsZSIsICJwbGFjZW1lbnQiLCAicGxhY2VtZW50cyIsICJfbG9vcCIsICJfaSIsICJjaGVja3MiLCAibWluIiwgIm1heCIsICJ0b1BhZGRpbmdPYmplY3QiLCAibm9vcCIsICJub3ciLCAiZWxlbWVudCIsICJkZXRhY2giLCAiaW5zdGFuY2UiLCAiY3JlYXRlX2ZyYWdtZW50IiwgIm5vdF9lcXVhbCIsICJ1cGRhdGUiLCAic3Vic2NyaWJlIiwgInJ1biIsICJjdHgiLCAiJCRwcm9wcyIsICJjYWxsYmFjayIsICJmbiIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJDTEFTU19OQU1FX1NIT1ciLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkNMQVNTX05BTUVfU0hPVyIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIlRBQl9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVNDQVBFX0tFWSIsICJDTEFTU19OQU1FX1NIT1ciLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgImlzVmlzaWJsZSIsICJoZWFkZXIiLCAiTkFNRSIsICJFVkVOVF9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiRVZFTlRfS0VZRE9XTiIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkFSUk9XX0xFRlRfS0VZIiwgIkFSUk9XX1JJR0hUX0tFWSIsICJBUlJPV19VUF9LRVkiLCAiQVJST1dfRE9XTl9LRVkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJlbGVtZW50IiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIkJpZ2dlclBpY3R1cmUiXQp9Cg==

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "en", i18n: { en: { copied: { other: "Copied!" }, copy_failed: { other: "Copy failed!" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboardbi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expandbi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-olbi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrapbi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/snackbar@v0.1.2/assets/mods/snackbar/js/index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/i18n-js@v0.2.1/assets/mods/i18n/translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.5.0/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.5.0/assets/mods/code-block-panel/js/panel.ts
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    pre;
    wrapper;
    ele;
    init() {
      if (!params_default.line_nos) {
        this.code.classList.add("code-no-ln");
      }
      if (params_default.wrap) {
        this.code.classList.add("code-wrap");
      }
      this.pre = this.code.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.language();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      if (params_default.max_lines > 0 && lines.length > params_default.max_lines) {
        const offsetTop = lines[params_default.max_lines - 1].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Show the code language.
    language() {
      const lang = this.code.getAttribute("data-lang");
      if (!lang || lang === "fallback") {
        return;
      }
      const e = document.createElement("span");
      e.className = "code-block-lang";
      e.innerText = lang;
      this.pre.appendChild(e);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = params_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
