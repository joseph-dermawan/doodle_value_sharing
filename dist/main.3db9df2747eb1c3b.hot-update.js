(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main.3db9df2747eb1c3b.hot-update.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;

// This needs to be wrapped in an IIFE because it needs to be isolated against Lynx injected variables.
(() => {
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
exports.ids = ["main"];
exports.modules = {
"(react:background)/./src/components/EngagementBar.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/types.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");



const __snapshot_7ef50_f97d2_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetInlineStyles(el, "color:#fff;font-size:16px");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateRawText(" \u{1FA99}");
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "display:flex;flex-direction:row;flex-wrap:wrap;gap:8px");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);display:flex;align-items:center;justify-content:center;z-index:1000");
    const el1 = __CreateView(pageId);
    __SetInlineStyles(el1, "background-color:#1a1a1a;border-radius:15px;padding:24px;width:90%;max-width:400px;border:1px solid #333");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetInlineStyles(el2, "display:flex;justify-content:space-between;align-items:center;margin-bottom:20px");
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __SetInlineStyles(el3, "color:#fff;font-size:20px;font-weight:bold");
    __AppendElement(el2, el3);
    const el4 = __CreateRawText("\u{1F680} Boost This Video");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetInlineStyles(el5, "color:#fff;font-size:24px;cursor:pointer");
    __AppendElement(el2, el5);
    const el6 = __CreateRawText("\xd7");
    __AppendElement(el5, el6);
    const el7 = __CreateView(pageId);
    __SetInlineStyles(el7, "margin-bottom:20px");
    __AppendElement(el1, el7);
    const el8 = __CreateText(pageId);
    __SetInlineStyles(el8, "color:#888;font-size:16px;margin-bottom:8px");
    __AppendElement(el7, el8);
    const el9 = __CreateRawText("Your Coins: ");
    __AppendElement(el8, el9);
    const el10 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el10);
    const el11 = __CreateRawText(" \u{1FA99}");
    __AppendElement(el8, el11);
    const el12 = __CreateText(pageId);
    __SetInlineStyles(el12, "color:#888;font-size:14px");
    __AppendElement(el7, el12);
    const el13 = __CreateRawText("Invest coins in content you believe will perform well. Higher engagement = higher rewards!");
    __AppendElement(el12, el13);
    const el14 = __CreateView(pageId);
    __SetInlineStyles(el14, "margin-bottom:20px");
    __AppendElement(el1, el14);
    const el15 = __CreateText(pageId);
    __SetInlineStyles(el15, "color:#fff;font-size:16px;margin-bottom:12px");
    __AppendElement(el14, el15);
    const el16 = __CreateRawText("Select Amount:");
    __AppendElement(el15, el16);
    const el17 = __CreateWrapperElement(pageId);
    __AppendElement(el14, el17);
    const el18 = __CreateView(pageId);
    __SetInlineStyles(el18, "display:flex;flex-direction:row;gap:12px;margin-top:20px");
    __AppendElement(el1, el18);
    const el19 = __CreateView(pageId);
    __SetInlineStyles(el19, "flex:0.8;background-color:#333;padding:10px 8px;border-radius:8px;cursor:pointer;min-width:80px;max-width:100px");
    __AppendElement(el18, el19);
    const el20 = __CreateText(pageId);
    __SetInlineStyles(el20, "color:#fff;text-align:center;font-size:15px;padding-top:4px");
    __AppendElement(el19, el20);
    const el21 = __CreateRawText("Cancel");
    __AppendElement(el20, el21);
    const el22 = __CreateView(pageId);
    __AppendElement(el18, el22);
    const el23 = __CreateText(pageId);
    __SetInlineStyles(el23, "color:#fff;text-align:center;font-size:17px;font-weight:bold;white-space:nowrap");
    __AppendElement(el22, el23);
    const el24 = __CreateRawText("\u{1F680} Boost ");
    __AppendElement(el23, el24);
    const el25 = __CreateWrapperElement(pageId);
    __AppendElement(el23, el25);
    const el26 = __CreateRawText(" \u{1FA99}");
    __AppendElement(el23, el26);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 5, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 19, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[22], ctx.__values[2]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 22, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        10
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        17
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        25
    ]
], undefined, globDynamicComponentEntry, null);
const BoostModal = ({ isOpen, onClose, onBoost, userCoins })=>{
    const [boostAmount, setBoostAmount] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const [selectedAmount, setSelectedAmount] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const presetAmounts = [
        10,
        25,
        50,
        100,
        250
    ];
    const handleBoost = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (boostAmount <= userCoins && boostAmount > 0) {
            onBoost(boostAmount); // 🔑 when this fires → EngagementBar.triggerBoost runs
            onClose();
        }
    }, [
        boostAmount,
        userCoins,
        onBoost,
        onClose
    ]);
    const handlePresetSelect = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((amount)=>{
        if (amount <= userCoins) {
            setBoostAmount(amount);
            setSelectedAmount(amount);
        }
    }, [
        userCoins
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_1, {
        values: [
            onClose,
            onClose,
            {
                flex: 1.5,
                backgroundColor: boostAmount > 0 && boostAmount <= userCoins ? '#ff0050' : '#666',
                padding: '14px 12px',
                borderRadius: '8px',
                cursor: boostAmount > 0 && boostAmount <= userCoins ? 'pointer' : 'not-allowed',
                opacity: boostAmount > 0 && boostAmount <= userCoins ? 1 : 0.5,
                minWidth: '120px'
            },
            handleBoost
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(userCoins)
            }, void 0, false, void 0, undefined),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_2, {
                children: presetAmounts.map((amount)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_3, {
                        values: [
                            {
                                backgroundColor: selectedAmount === amount ? '#ff0050' : '#333',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                opacity: amount > userCoins ? 0.5 : 1
                            },
                            ()=>handlePresetSelect(amount)
                        ],
                        children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_4, {
                            children: amount
                        }, void 0, false, {
                            fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                            lineNumber: 122,
                            columnNumber: 17
                        }, undefined)
                    }, amount, false, {
                        fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                        lineNumber: 111,
                        columnNumber: 15
                    }, undefined))
            }, void 0, false, {
                fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                lineNumber: 102,
                columnNumber: 11
            }, undefined),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: boostAmount
            }, void 0, false, void 0, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, undefined);
};
const __snapshot_7ef50_f97d2_6 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_6", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "display:flex;flex-direction:column;align-items:center;height:100%");
    const el1 = __CreateText(pageId);
    __SetInlineStyles(el1, "font-size:20px;margin-bottom:6px");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("\u{1F680}");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetInlineStyles(el3, "width:6px;height:45px;background-color:#333;border-radius:3px;overflow:hidden;display:flex;align-items:flex-end");
    __AppendElement(el, el3);
    const el4 = __CreateView(pageId);
    __AppendElement(el3, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[4], ctx.__values[1]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_8 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_8", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetInlineStyles(el, "color:#fff;font-size:20px;font-weight:bold;text-align:center");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_9 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_9", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
    }
], (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_10 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_10", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetInlineStyles(el, "color:#888;font-size:9px;text-align:center");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_11 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_11", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "background-color:#ff0050;padding:8px 12px;border-radius:20px;cursor:pointer;margin-top:auto");
    const el1 = __CreateText(pageId);
    __SetInlineStyles(el1, "color:#fff;font-size:12px;font-weight:bold;text-align:center");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("\u{1F680} Boost");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_12 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_12", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "background-color:#666;padding:8px;border-radius:20px;opacity:0.6");
    const el1 = __CreateText(pageId);
    __SetInlineStyles(el1, "color:#fff;font-size:12px;text-align:center");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_7 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_7", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "display:flex;flex-direction:column;height:100%");
    const el1 = __CreateView(pageId);
    __SetInlineStyles(el1, "display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:12px");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetInlineStyles(el2, "color:#fff;font-size:14px;font-weight:bold");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Engagement");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetInlineStyles(el4, "color:#fff;font-size:16px;cursor:pointer");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("\xd7");
    __AppendElement(el4, el5);
    const el6 = __CreateView(pageId);
    __SetInlineStyles(el6, "margin-bottom:12px");
    __AppendElement(el, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el7);
    const el8 = __CreateView(pageId);
    __SetInlineStyles(el8, "width:100%;height:8px;background-color:#333;border-radius:4px;overflow:hidden;margin-top:4px");
    __AppendElement(el6, el8);
    const el9 = __CreateView(pageId);
    __AppendElement(el8, el9);
    const el10 = __CreateView(pageId);
    __SetInlineStyles(el10, "margin-bottom:12px");
    __AppendElement(el, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el12);
    const el13 = __CreateView(pageId);
    __SetInlineStyles(el13, "margin-bottom:12px");
    __AppendElement(el, el13);
    const el14 = __CreateText(pageId);
    __SetInlineStyles(el14, "color:#888;font-size:11px;text-align:center");
    __AppendElement(el13, el14);
    const el15 = __CreateRawText("Pool: ");
    __AppendElement(el14, el15);
    const el16 = __CreateWrapperElement(pageId);
    __AppendElement(el14, el16);
    const el17 = __CreateRawText(" \u{1FA99}");
    __AppendElement(el14, el17);
    const el18 = __CreateText(pageId);
    __SetInlineStyles(el18, "color:#888;font-size:11px;text-align:center");
    __AppendElement(el13, el18);
    const el19 = __CreateRawText("Boosts: ");
    __AppendElement(el18, el19);
    const el20 = __CreateWrapperElement(pageId);
    __AppendElement(el18, el20);
    const el21 = __CreateWrapperElement(pageId);
    __AppendElement(el, el21);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 4, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[9], ctx.__values[1]);
    }
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        16
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        20
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        21
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_7ef50_f97d2_5 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_7ef50_f97d2_5", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[0], ctx.__values[0]);
    }
], (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const EngagementBar = ({ video, user, onBoost })=>{
    const [isBoostModalOpen, setIsBoostModalOpen] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isExpanded, setIsExpanded] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [fluctuationOffset, setFluctuationOffset] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const baseEngagementScore = (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.calculateEngagementScore)(video);
    const engagementScore = Math.max(0, Math.min(100, baseEngagementScore + fluctuationOffset));
    const scorePercentage = engagementScore;
    // ---- BOOST EFFECT STATE ----
    const [boostStrength, setBoostStrength] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // 🔑 Trigger boost effect (called inside onBoost handler)
    const triggerBoost = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((amount)=>{
        const boostEffect = Math.log(amount + 1) * 2; // diminishing returns
        setBoostStrength((prev)=>prev + boostEffect);
    }, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 🔧 PARAMETERS YOU CAN MODULATE:
        const deviation = 4; // ← baseline fluctuation size (higher = more wiggle)
        const stepScale = 4; // ← multiplier on random fluctuation step
        const smoothing = 0; // ← how smooth/laggy transitions feel (0=snappy, 1=super smooth)
        const tickInterval = 1500; // ← how often the bar updates in ms
        let prevEngagement = (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.calculateEngagementScore)(video);
        let boostStrength = 0; // current boost effect strength
        const interval = setInterval(()=>{
            // Random Gaussian noise generator
            const randStdNormal = ()=>{
                let u = 0, v = 0;
                while(u === 0)u = Math.random();
                while(v === 0)v = Math.random();
                return Math.sqrt(-2 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
            };
            // baseline fluctuation (natural breathing)
            const step = randStdNormal() * deviation * stepScale;
            // apply decaying boost
            if (boostStrength > 0) {
                const decayRate = 0.85; // 🔧 boost decay speed (lower = faster fade)
                boostStrength *= decayRate;
            }
            // target engagement = previous + noise + boost
            let targetEngagement = prevEngagement + step + boostStrength;
            // smooth transition to target
            let newEngagement = prevEngagement * (1 - smoothing) + targetEngagement * smoothing;
            // clamp to [0,100]
            newEngagement = Math.max(0, Math.min(100, newEngagement));
            prevEngagement = newEngagement;
            setFluctuationOffset(newEngagement - baseEngagementScore);
        }, tickInterval);
        return ()=>clearInterval(interval);
    }, [
        video,
        baseEngagementScore
    ]);
    // ---- Phase / UI helpers ----
    const currentPhase = (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.getVideoPhase)(video);
    const canBoost = currentPhase === 'boosting';
    const getPhaseTimeRemaining = ()=>{
        switch(currentPhase){
            case 'boosting':
                return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.getTimeRemaining)(video.boostWindowEnd);
            case 'locked':
                return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.getTimeRemaining)(video.lockPeriodEnd);
            case 'claiming':
                return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.getTimeRemaining)(video.claimPeriodEnd);
            default:
                return 'Closed';
        }
    };
    const getPhaseLabel = ()=>{
        switch(currentPhase){
            case 'boosting':
                return "\u{1F680} Boost Window";
            case 'locked':
                return "\u{1F512} Lock Period";
            case 'claiming':
                return "\u{1F4B0} Claim Period";
            default:
                return "\u23F0 Closed";
        }
    };
    const getPhaseColor = ()=>{
        switch(currentPhase){
            case 'boosting':
                return '#00ff88';
            case 'locked':
                return '#ffaa00';
            case 'claiming':
                return '#4dabf7';
            default:
                return '#666';
        }
    };
    // Expand / collapse
    const handleExpand = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setIsExpanded(true), []);
    const handleCollapse = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setIsExpanded(false), []);
    const handleOpenBoost = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setIsBoostModalOpen(true), []);
    const handleCloseBoost = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setIsBoostModalOpen(false), []);
    // Wrap onBoost so we also trigger visual effect
    const handleBoost = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((amount)=>{
        onBoost(amount);
        triggerBoost(amount);
    }, [
        onBoost,
        triggerBoost
    ]);
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_5, {
                values: [
                    {
                        position: 'absolute',
                        left: '12px',
                        bottom: '120px',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '25px',
                        padding: isExpanded ? '16px' : '8px',
                        minHeight: isExpanded ? '200px' : '60px',
                        width: isExpanded ? '160px' : '48px'
                    }
                ],
                children: !isExpanded ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_6, {
                    values: [
                        handleExpand,
                        {
                            width: '100%',
                            height: `${scorePercentage}%`,
                            backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                            borderRadius: '2px'
                        }
                    ]
                }, void 0, false, {
                    fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, undefined) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_7, {
                    values: [
                        handleCollapse,
                        {
                            width: `${scorePercentage}%`,
                            height: '100%',
                            backgroundColor: scorePercentage > 70 ? '#00ff88' : scorePercentage > 40 ? '#ffaa00' : '#ff4444',
                            borderRadius: '4px'
                        }
                    ],
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_8, {
                            children: scorePercentage.toFixed(1)
                        }, void 0, false, {
                            fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                            lineNumber: 383,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_9, {
                            values: [
                                {
                                    color: getPhaseColor(),
                                    fontSize: '10px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: '2px'
                                }
                            ],
                            children: getPhaseLabel()
                        }, void 0, false, {
                            fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                            lineNumber: 421,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_10, {
                            children: getPhaseTimeRemaining()
                        }, void 0, false, {
                            fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                            lineNumber: 432,
                            columnNumber: 15
                        }, undefined),
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(video.boostPool)
                        }, void 0, false, void 0, undefined),
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: video.totalBoosts
                        }, void 0, false, void 0, undefined),
                        /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: canBoost ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_11, {
                                values: [
                                    handleOpenBoost
                                ]
                            }, void 0, false, {
                                fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                                lineNumber: 453,
                                columnNumber: 15
                            }, undefined) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_7ef50_f97d2_12, {
                                children: currentPhase === 'locked' ? "\u{1F512} Locked" : "\u23F0 Closed"
                            }, void 0, false, {
                                fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, void 0, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                    lineNumber: 361,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoostModal, {
                isOpen: isBoostModalOpen,
                onClose: handleCloseBoost,
                onBoost: handleBoost,
                userCoins: user.coins,
                videoId: video.id
            }, void 0, false, {
                fileName: "/Users/worldofmadness/Documents/VS Code/TIKTOK/doodle_value_sharing/doodle_v1/src/components/EngagementBar.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EngagementBar);


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("482af58030a664a7")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.3db9df2747eb1c3b.css.hot-update.json"]];

})();

}
;
;

})();
    });
    return tt.require("main.3db9df2747eb1c3b.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://10.249.12.228:3000/main.3db9df2747eb1c3b.hot-update.js.map