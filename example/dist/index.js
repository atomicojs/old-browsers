function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var HOOK_MOUNT = Symbol("mount");
var HOOK_MOUNTED = Symbol("mounted");
var HOOK_UPDATE = Symbol("update");
var HOOK_UPDATED = Symbol("updated");
var HOOK_UNMOUNT = Symbol("unmount");
var HOOK_CURRENT = {};
var ELEMENT_PROPS = Symbol("props");
var ELEMENT_IGNORE_ATTR = Symbol("ignore");
var ELEMENT_TRUE_VALUES = [true, 1, "", "1", "true"];
var NODE_TYPE = "localName";
var KEY = Symbol("key");
var META_STYLE_SHEET = Symbol("styleSheet");
var META_MAP_CHILDREN = Symbol("mapChildren");
var META_KEYES = Symbol("keyes");
var NODE_HOST = "host";
var IGNORE_CHILDREN = {
  innerHTML: 1,
  textContent: 1,
  contenteditable: 1
};
var HYDRATE_PROPS = {
  className: 1,
  id: 1,
  checked: 1,
  value: 1,
  selected: 1
};
var CACHE_STYLE_SHEET = {};
var SUPPORT_STYLE_SHEET = "adoptedStyleSheets" in document;
var STYLE_SHEET_KEY = Symbol();

/**
 * Return if value is array
 * @param {*}
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}
/**
 * compare 2 array
 * @param {array} before
 * @param {array} after
 * @example
 * isEqualArray([1,2,3,4],[1,2,3,4]) // true
 * isEqualArray([1,2,3,4],[1,2,3])   // false
 * isEqualArray([5,1,2,3],[1,2,3,5]) // false
 * isEqualArray([],[]) // true
 * @returns {boolean}
 */

function isEqualArray(before, after) {
  var length = before.length;
  if (length !== after.length) return false;

  for (var i = 0; i < length; i++) {
    if (before[i] !== after[i]) return false;
  }

  return true;
}
function isFunction(value) {
  return typeof value == "function";
} // export function fps(callback, count = 3) {
//     count-- ? requestAnimationFrame(() => fps(callback, count)) : callback();
// }

function promise(callback) {
  return new Promise(callback);
}

function update(hook, type) {
  hook[0] && (hook[1] = hook[0](hook[1], type));
}

function updateAll(hooks, type) {
  for (var i in hooks) {
    update(hooks[i], type);
  }
}

function useHook(reducer, initialState) {
  if (HOOK_CURRENT.ref.hook) {
    return HOOK_CURRENT.ref.hook.use(reducer, initialState)[1];
  }
}
function useRender() {
  return HOOK_CURRENT.ref.render;
}
function createHookCollection(render, host) {
  var hooks = {};
  var mounted;
  var hook = {
    use,
    load,
    updated,
    unmount
  };
  var ref = {
    hook,
    host,
    render
  };

  function load(callback, param) {
    HOOK_CURRENT.index = 0;
    HOOK_CURRENT.ref = ref;
    var resolve = callback(param);
    HOOK_CURRENT.ref = 0;
    return resolve;
  }

  function use(reducer, state) {
    var index = HOOK_CURRENT.index++;
    var mount; // record the hook and the initial state of this

    if (!hooks[index]) {
      hooks[index] = [null, state];
      mount = 1;
    } // The hook always receives the last reduce.


    hooks[index][0] = reducer;
    update(hooks[index], mount ? HOOK_MOUNT : HOOK_UPDATE);
    return hooks[index];
  }

  function updated() {
    var type = mounted ? HOOK_UPDATED : HOOK_MOUNTED;
    mounted = 1;
    updateAll(hooks, type);
  }

  function unmount() {
    updateAll(hooks, HOOK_UNMOUNT);
  }

  return hook;
}
function useState(initialState) {
  var render = useRender();
  return useHook(function (state, type) {
    if (HOOK_MOUNT == type) {
      state[0] = isFunction(initialState) ? initialState() : initialState;

      state[1] = function (nextState) {
        nextState = isFunction(nextState) ? nextState(state[0]) : nextState;

        if (nextState != state[0]) {
          state[0] = nextState;
          render();
        }
      };
    }

    return state;
  }, []);
}
function useEffect(callback, args) {
  // define whether the effect in the render cycle should be regenerated
  var executeEffect;
  useHook(function (state, type) {
    if (executeEffect == null) {
      executeEffect = args && state[0] ? !isEqualArray(args, state[0]) : true;
      state[0] = args;
    }

    switch (type) {
      case HOOK_UPDATE:
      case HOOK_UNMOUNT:
        // save the current args, for comparison
        if ((executeEffect || type == HOOK_UNMOUNT) && state[1]) {
          // compare the previous snapshot with the generated state
          state[1](); // clean the effect collector

          state[1] = 0;
        } // delete the previous argument for a hook
        // run if the hook is inserted in a new node
        // Why? ... to perform again dom operations associated with the parent


        if (type == HOOK_UNMOUNT) {
          state[0] = null;
        }

        break;

      case HOOK_MOUNTED:
      case HOOK_UPDATED:
        // save the current args, for comparison, repeats due to additional type HOOK_MOUNTED
        if (executeEffect || type == HOOK_MOUNTED) {
          // save the effect collector
          state[1] = callback();
        } // save the comparison argument


        break;
    }

    return state;
  }, []);
}

/**
 *
 * @param {import("./render").HTMLNode} node
 * @param {Object} props
 * @param {Object} nextProps
 * @param {boolean} isSvg
 * @param {Object} handlers
 **/

function diffProps(node, props, nextProps, isSvg, handlers) {
  props = props || {};

  for (var key in props) {
    if (!(key in nextProps)) {
      setProperty(node, key, props[key], null, isSvg, handlers);
    }
  }

  var ignoreChildren;

  for (var _key in nextProps) {
    setProperty(node, _key, props[_key], nextProps[_key], isSvg, handlers);
    ignoreChildren = ignoreChildren || IGNORE_CHILDREN[_key];
  }

  return ignoreChildren;
}

function setProperty(node, key, prevValue, nextValue, isSvg, handlers) {
  key = key == "class" && !isSvg ? "className" : key; // define empty value

  prevValue = prevValue == null ? null : prevValue;
  nextValue = nextValue == null ? null : nextValue;

  if (key in node && HYDRATE_PROPS[key]) {
    prevValue = node[key];
  }

  if (nextValue === prevValue) return;

  if (key[0] == "o" && key[1] == "n" && (isFunction(nextValue) || isFunction(prevValue))) {
    setEvent(node, key, nextValue, handlers);
    return;
  }

  switch (key) {
    /**
     * add support {@link https://developer.mozilla.org/es/docs/Web/API/CSSStyleSheet}
     */
    case "styleSheet":
      if (SUPPORT_STYLE_SHEET) node.shadowRoot.adoptedStyleSheets = [].concat(nextValue).map(function (cssText) {
        if (cssText instanceof CSSStyleSheet) {
          return cssText;
        }

        if (!CACHE_STYLE_SHEET[cssText]) {
          CACHE_STYLE_SHEET[cssText] = new CSSStyleSheet();
          CACHE_STYLE_SHEET[cssText].replace(cssText);
        }

        return CACHE_STYLE_SHEET[cssText];
      });
      break;

    case "ref":
      if (nextValue) nextValue.current = node;
      break;

    case "style":
      setStyle(node, prevValue || "", nextValue || "");
      break;

    case "key":
      node[KEY] = nextValue;
      break;

    default:
      if (!isSvg && key != "list" && key in node) {
        node[key] = nextValue == null ? "" : nextValue;
      } else if (nextValue == null) {
        node.removeAttribute(key);
      } else {
        node.setAttribute(key, typeof nextValue == "object" ? JSON.stringify(nextValue) : nextValue);
      }

  }
}
/**
 *
 * @param {import("./render").HTMLNode} node
 * @param {string} type
 * @param {function} [nextHandler]
 * @param {object} handlers
 */


function setEvent(node, type, nextHandler, handlers) {
  // get the name of the event to use
  type = type.slice(type[2] == "-" ? 3 : 2); // add handleEvent to handlers

  if (!handlers.handleEvent) {
    /**
     * {@link https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener#The_value_of_this_within_the_handler}
     **/
    handlers.handleEvent = function (event) {
      return handlers[event.type].call(node, event);
    };
  }

  if (nextHandler) {
    // create the subscriber if it does not exist
    if (!handlers[type]) {
      node.addEventListener(type, handlers);
    } // update the associated event


    handlers[type] = nextHandler;
  } else {
    // 	delete the associated event
    if (handlers[type]) {
      node.removeEventListener(type, handlers);
      delete handlers[type];
    }
  }
}
/**
 * define style as string inline,this generates less mutation
 * to the sun and cleans the previously defined properties.
 * @param {import("./render").HTMLNode} node
 * @param {(string|object)} prevValue
 * @param {(string|object)} nextValue
 */

function setStyle(node, prevValue, nextValue) {
  var style = node.style,
      prevIsObject;

  if (typeof prevValue == "object") {
    prevIsObject = true;

    for (var key in prevValue) {
      if (!(key in nextValue)) setPropertyStyle(style, key, null);
    }
  }

  if (typeof nextValue == "object") {
    for (var _key2 in nextValue) {
      var value = nextValue[_key2];
      if (prevIsObject && prevValue[_key2] === value) continue;
      setPropertyStyle(style, _key2, value);
    }
  } else {
    style.cssText = nextValue;
  }
}

function setPropertyStyle(style, key, value) {
  var method = "setProperty";

  if (value == null) {
    method = "removeProperty";
    value = null;
  }

  if (~key.indexOf("-")) {
    style[method](key, value);
  } else {
    style[key] = value;
  }
}

var vNodeEmpty = createElement(null, {
  children: ""
});
/**
 * @param {VnodeType} nodeType
 * @param {VnodeProps} [props]
 * @param {Vnode|Vnode[]} [children]
 * @returns {Vnode}
 **/

function createElement(nodeType, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var vnode = _objectSpread2({
    children
  }, props, {
    nodeType: nodeType || null
  });

  return vnode;
}
/**
 * toVnode, processes the object for correct use within the diff process.
 **/

function toVnode(value) {
  if (isVnodeValue(value)) {
    return value;
  } else {
    if (!value[META_MAP_CHILDREN]) {
      var scan = mapChildren(value.children);
      value.children = scan.children;

      if (scan.keyes) {
        value[META_KEYES] = scan.keyes;
      }

      value[META_MAP_CHILDREN] = true;
    }

    if (value.styleSheet && !SUPPORT_STYLE_SHEET) {
      if (!value[META_STYLE_SHEET]) {
        value.children.unshift(toVnode(createElement("style", value[META_KEYES] ? {
          key: STYLE_SHEET_KEY
        } : {}, value.styleSheet)));

        if (value[META_KEYES]) {
          value[META_KEYES].unshift(STYLE_SHEET_KEY);
        }
      }

      value[META_STYLE_SHEET] = true;
    }
  }

  return value;
}

function mapChildren(children) {
  var scan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    children: []
  };
  var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isArray(children)) {
    var length = children.length;

    for (var i = 0; i < length; i++) {
      mapChildren(children[i], scan, deep + 1);
    }
  } else {
    if (children == null && !deep) return scan;
    var vnode = toVnode(children);

    if (vnode != null && typeof vnode == "object") {
      if (isFunction(vnode.nodeType)) {
        var nodeType = vnode.nodeType,
            props = _objectWithoutProperties(vnode, ["nodeType"]);

        return mapChildren(nodeType(props), scan, deep + 1);
      }

      if ("key" in vnode) {
        scan.keyes = scan.keyes || [];

        if (!~scan.keyes.indexOf(vnode.key)) {
          scan.keyes.push(vnode.key);
        }
      }
    }

    scan.children.push(vnode);
  }

  return scan;
}

function isVnodeEmpty(value) {
  var type = typeof value;
  return value == null || type == "boolean" || type == "function";
}
function fillVnodeValue(value) {
  return isVnodeEmpty(value) ? vNodeEmpty : createElement(null, {
    children: "" + value
  });
}
function isVnodeValue(value) {
  var type = typeof value;
  return value == null || type == "string" || type == "number" || type == "function" || type == "boolean";
}
/**
 * @typedef {(Object<string,any>)} VnodeProps;
 *
 * @typedef {(Function|string)} VnodeType;
 *
 * @typedef {{type:VnodeType,props:VnodeProps}} Vnode
 **/

/**
 *
 * @param {import("./render").ConfigRender} config
 * @param {import("./render").HTMLNode} node
 * @param {import("./vnode").Vnode} nextVnode
 * @param {boolean} isSvg
 * @param {Function} currentUpdateComponent
 * @return {import("./render").HTMLNode}
 **/

function diff(id, node, nextVnode, isSvg) {
  var _ref = node && node[id] || {},
      vnode = _ref.vnode,
      _ref$handlers = _ref.handlers,
      handlers = _ref$handlers === void 0 ? {} : _ref$handlers;

  if (vnode == nextVnode && vnode != null) return node;
  nextVnode = isVnodeValue(nextVnode) ? fillVnodeValue(nextVnode) : nextVnode;

  var _ref2 = vnode || {},
      nodeType = _ref2.nodeType,
      shadowDom = _ref2.shadowDom,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["nodeType", "shadowDom", "children"]);

  var _nextVnode = nextVnode,
      nextNodeType = _nextVnode.nodeType,
      nextShadowDom = _nextVnode.shadowDom,
      nextChildren = _nextVnode.children,
      nextProps = _objectWithoutProperties(_nextVnode, ["nodeType", "shadowDom", "children"]);

  isSvg = isSvg || nextNodeType == "svg";

  if (nextNodeType != NODE_HOST && getNodeName(node) !== nextNodeType) {
    var nextNode = createNode(nextNodeType, isSvg);
    var parent = node && node.parentNode;

    if (parent) {
      parent.replaceChild(nextNode, node);
    }

    node = nextNode;
    handlers = {};
  }

  if (nextNodeType == "style") {
    nextNodeType = null;
    nextChildren = nextChildren.join("");
  }

  if (nextNodeType == null) {
    if (node.textContent != nextChildren) {
      node.textContent = nextChildren;
    }
  } else {
    if (shadowDom != nextShadowDom) {
      var _node = node,
          shadowRoot = _node.shadowRoot;
      var mode = nextShadowDom && !shadowRoot ? "open" : !nextShadowDom && shadowRoot ? "closed" : 0;
      if (mode) node.attachShadow({
        mode
      });
    }

    var ignoreChildren = diffProps(node, props, nextProps, isSvg, handlers);

    if (!ignoreChildren && children != nextChildren) {
      diffChildren(id, nextShadowDom ? node.shadowRoot : node, nextChildren, nextProps[META_KEYES], isSvg);
    }
  }

  node[id] = {
    vnode: nextVnode,
    handlers
  };
  return node;
}
/**
 *
 * @param {import("./render").ConfigRender} config
 * @param {import("./render").HTMLNode} parent
 * @param {import("./vnode").Vnode[]} [nextChildren]
 * @param {boolean} isSvg
 */

function diffChildren(id, parent, children, keyes, isSvg) {
  var childrenLenght = children.length;
  var childNodes = parent.childNodes;
  var childNodesKeyes = {};
  var childNodesLength = childNodes.length;
  var index = keyes ? 0 : childNodesLength > childrenLenght ? childrenLenght : childNodesLength;

  for (; index < childNodesLength; index++) {
    var childNode = childNodes[index];
    var key = index;

    if (keyes) {
      key = childNode[KEY];

      if (keyes.indexOf(key) > -1) {
        childNodesKeyes[key] = childNode;
        continue;
      }
    }

    index--;
    childNodesLength--;
    parent.removeChild(childNode);
  }

  for (var i = 0; i < childrenLenght; i++) {
    var child = children[i];
    var indexChildNode = childNodes[i];

    var _key = keyes ? child.key : i;

    var _childNode = keyes ? childNodesKeyes[_key] : indexChildNode;

    if (keyes && _childNode) {
      if (_childNode != indexChildNode) {
        parent.insertBefore(_childNode, indexChildNode);
      }
    }

    var nextChildNode = diff(id, _childNode, child, isSvg);

    if (!_childNode) {
      if (childNodes[i]) {
        parent.insertBefore(nextChildNode, childNodes[i]);
      } else {
        parent.appendChild(nextChildNode);
      }
    }
  }
}
/**
 *
 * @param {string} type
 * @param {boolean} isSvg
 * @returns {import("./render").HTMLNode}
 */

function createNode(type, isSvg) {
  var doc = document;
  var nextNode;

  if (type != null) {
    nextNode = isSvg ? doc.createElementNS("http://www.w3.org/2000/svg", type) : doc.createElement(type);
  } else {
    nextNode = doc.createTextNode("");
  }

  return nextNode;
}
/**
 * returns the localName of the node
 * @param {import("./render").HTMLNode} node
 */

function getNodeName(node) {
  if (!node) return;

  if (!node[NODE_TYPE]) {
    node[NODE_TYPE] = node.nodeName.toLowerCase();
  }

  var localName = node[NODE_TYPE];
  return localName == "#text" ? null : localName;
}

function render(vnode, node) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "vnode";

  if (vnode != null && typeof vnode == "object" && vnode.nodeType != NODE_HOST) {
    vnode = createElement(NODE_HOST, {
      children: vnode
    });
  }

  vnode = toVnode(vnode);
  diff(id, node, vnode);
  return node;
}

function setAttr(node, attr, value) {
  if (value == null) {
    node.removeAttribute(attr);
  } else {
    node.setAttribute(attr, typeof value == "object" ? JSON.stringify(value) : value);
  }
}
function formatType(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;

  try {
    if (type == Boolean) {
      value = ELEMENT_TRUE_VALUES.indexOf(value) > -1;
    } else if (typeof value == "string") {
      value = type == Number ? Number(value) : type == Object || type == Array ? JSON.parse(value) : type == Date ? new Date(value) : value;
    }

    if ({}.toString.call(value) == "[object ".concat(type.name, "]")) {
      return {
        value,
        error: type == Number && Number.isNaN(value)
      };
    }
  } catch (e) {}

  return {
    value,
    error: true
  };
}
function propToAttr(prop) {
  return prop.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function attrToProp(attr) {
  return attr.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
function dispatchEvent(node, type, customEventInit) {
  node.dispatchEvent(new CustomEvent(type, typeof customEventInit == "object" ? customEventInit : null));
}

var defer = Promise.resolve();
var queue = [];
var running;
var maxFps = 1000 / 60;
var IMPORTANT = Symbol("important");
function clearQueue() {
  var time = performance.now();
  var length = queue.length;
  var current = queue;
  queue = [];

  while (length--) {
    var callback = current[length];

    if (callback[IMPORTANT] || performance.now() - time < maxFps) {
      callback();
    } else {
      queue = queue.concat(current.slice(0, length + 1));
      break;
    }
  }

  if (queue.length) {
    requestAnimationFrame(clearQueue);
    return;
  }

  running = false;
}
/**
 * add a task to the queue
 * @param {Function} callback
 * @returns {Promise} Generate a promise that show  if the queue is complete
 */

function addQueue(callback) {
  if (!running) {
    running = true;
    defer.then(clearQueue);
  }

  if (!queue.includes(callback)) queue.push(callback);
}

function load(self) {
  if (self.mount) return;
  var id = Symbol("vnode");
  var isPrevent;
  var isUnmount;
  self[ELEMENT_PROPS] = {};
  var isMounted;
  var resolveUpdate;

  var rerender = function rerender() {
    // disables blocking, allowing the cycle to be regenerate
    isPrevent = false; // After the first render it disables the important condition

    if (rerender[IMPORTANT]) rerender[IMPORTANT] = false;

    try {
      render(hooks.load(self.render, _objectSpread2({}, self[ELEMENT_PROPS])), self, id);
      resolveUpdate();
    } catch (e) {
      self.error(e);
    }
  }; // mark the first render as important, self speeds up the rendering


  rerender[IMPORTANT] = true;

  self.update = function () {
    if (isUnmount) return;
    var rendered = self.rendered;

    if (!isPrevent) {
      isPrevent = true; // create a promise to observe the status of the update

      rendered = promise(function (resolve) {
        return resolveUpdate = resolve;
      }).then( // the UPDATED state is only propagated through
      // the resolution of the promise
      // Why? ... to improve communication between web-component parent and children
      hooks.updated); // if the component is already mounted, avoid using self.mounted,
      // to speed up the microtask

      isMounted ? addQueue(rerender) : self.mounted.then(function () {
        isMounted = true;
        addQueue(rerender);
      });
    }

    return self.rendered = rendered;
  }; // any update from hook is added to a separate queue


  var hooks = createHookCollection(function () {
    return addQueue(self.update);
  }, self); // creates a collection of microtask
  // associated with the mounted of the component

  self.mounted = promise(function (resolve) {
    return self.mount = function () {
      isMounted = false; // allows the reuse of the component when it is isUnmounted and mounted

      if (isUnmount == true) {
        isUnmount = false;
        self.mounted = self.update();
      }

      resolve();
    };
  });
  /**
   * creates a collection of microtask
   * associated with the unmounted of the component
   */

  self.unmounted = promise(function (resolve) {
    return self.unmount = function () {
      isUnmount = true;
      hooks.unmount();
      resolve();
    };
  });
  self.initialize();
  self.update();
}

var AtomicoElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(AtomicoElement, _HTMLElement);

  function AtomicoElement() {
    var _this;

    _classCallCheck(this, AtomicoElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AtomicoElement).call(this));
    /**
     * identifier to store the virtual-dom state,
     * this is unique between instances of the
     * component to securely consider the host status
     */

    load(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AtomicoElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      load(this);
      this.mount();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.unmount();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldValue, value) {
      if (attr === this[ELEMENT_IGNORE_ATTR] || oldValue === value) return;
      this[attrToProp(attr)] = value;
    }
  }]);

  return AtomicoElement;
}(_wrapNativeSuper(HTMLElement));
/**
 * register the component, be it a class or function
 * @param {string} nodeType
 * @param {Function} component
 * @return {Function} returns a jsx component
 */


function customElement(nodeType, component) {
  if (isFunction(nodeType)) {
    component = nodeType;

    var CustomElement =
    /*#__PURE__*/
    function (_AtomicoElement) {
      _inherits(CustomElement, _AtomicoElement);

      function CustomElement() {
        _classCallCheck(this, CustomElement);

        return _possibleConstructorReturn(this, _getPrototypeOf(CustomElement).apply(this, arguments));
      }

      return CustomElement;
    }(AtomicoElement);

    var prototype = CustomElement.prototype;
    var props = component.props;
    prototype.error = component.error || console.error;
    prototype.render = component;

    prototype.initialize = function () {
      var length = initialize.length;

      while (length--) {
        initialize[length](this);
      }
    };

    var initialize = [];
    var attrs = [];

    for (var prop in props) {
      setProperty$1(prototype, initialize, attrs, prop, props[prop]);
    }

    CustomElement.observedAttributes = attrs;
    return CustomElement;
  } else {
    customElements.define(nodeType, component instanceof Element ? component : customElement(component));
    return function (props) {
      return createElement(nodeType, props);
    };
  }
}

function setProperty$1(prototype, initialize, attrs, prop, schema) {
  var attr = propToAttr(prop);
  schema = schema.name ? {
    type: schema
  } : schema;
  if (prop in prototype) return;

  function set(nextValue) {
    var _this2 = this;

    var prevValue = this[ELEMENT_PROPS][prop];

    if (isFunction(nextValue)) {
      nextValue = nextValue(prevValue);
    }

    var _formatType = formatType(nextValue, schema.type),
        value = _formatType.value,
        error = _formatType.error;

    if (error && value != null) {
      throw "the observable [".concat(prop, "] must be of the type [").concat(schema.type.name, "]");
    }

    if (prevValue == value) return;
    this[ELEMENT_PROPS][prop] = value;
    var rendered = this.update();

    if (schema.event) {
      rendered.then(function () {
        return dispatchEvent(_this2, schema.event.type || prop, schema.event);
      });
    }

    if (schema.reflect) {
      // the default properties are only reflected once the web-component is mounted
      this.mounted.then(function () {
        _this2[ELEMENT_IGNORE_ATTR] = attr; //update is prevented

        setAttr(_this2, attr, schema.type == Boolean && !value ? null : value //
        );
        _this2[ELEMENT_IGNORE_ATTR] = false; // an upcoming update is allowed
      });
    }
  }

  function get() {
    return this[ELEMENT_PROPS][prop];
  }

  Object.defineProperty(prototype, prop, {
    set,
    get
  });

  if ("value" in schema) {
    initialize.push(function (self) {
      return self[prop] = schema.value;
    });
  }

  attrs.push(attr);
}

var CustomElement = function CustomElement() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    var interval = setInterval(function () {
      return setState(function (state) {
        return state + 1;
      });
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return createElement("host", {
    shadowDom: true
  }, createElement("style", null, "\n        :host{\n          display: block;\n          color: black;\n          color: white;\n          font-size:".concat(Math.floor(Math.random() * 100) + 10, "px;\n          background: rgba(0,0,0,").concat(Math.random() + 0.25, ");\n        }\n      ")), "inside web-component ", state + "");
};

customElement("custom-element", CustomElement);
//# sourceMappingURL=index.js.map
