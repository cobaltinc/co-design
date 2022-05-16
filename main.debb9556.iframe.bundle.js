(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(he,p,e){"use strict";e.r(p);var x={};e.r(x),e.d(x,"parameters",function(){return g}),e.d(x,"decorators",function(){return v});var w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.filter.js"),Y=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),te=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),oe=e("./node_modules/core-js/modules/es.object.define-properties.js"),G=e("./node_modules/core-js/modules/es.object.define-property.js"),K=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),W=e("./node_modules/@storybook/client-logger/dist/esm/index.js"),N=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-dark-mode/dist/index.js"),L=e("./node_modules/core-js/modules/es.array.is-array.js"),k=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.object.to-string.js"),o=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/core-js/modules/es.array.iterator.js"),O=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/core-js/modules/es.array.from.js"),d=e("./node_modules/react/jsx-runtime.js");function m(l,h){return _(l)||D(l,h)||f(l,h)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(l,h){if(!!l){if(typeof l=="string")return j(l,h);var E=Object.prototype.toString.call(l).slice(8,-1);if(E==="Object"&&l.constructor&&(E=l.constructor.name),E==="Map"||E==="Set")return Array.from(l);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return j(l,h)}}function j(l,h){(h==null||h>l.length)&&(h=l.length);for(var E=0,S=new Array(h);E<h;E++)S[E]=l[E];return S}function D(l,h){var E=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(E!=null){var S=[],C=!0,R=!1,A,$;try{for(E=E.call(l);!(C=(A=E.next()).done)&&(S.push(A.value),!(h&&S.length===h));C=!0);}catch(me){R=!0,$=me}finally{try{!C&&E.return!=null&&E.return()}finally{if(R)throw $}}return S}}function _(l){if(Array.isArray(l))return l}var a=Object(N.createContext)(null),s=function(){var h=Object(N.useContext)(a);if(!h)throw new Error("useCoColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return h},c=function(h){var E=h.colorScheme,S=h.toggleColorScheme,C=h.children,R=Object(N.useState)("init"),A=m(R,2),$=A[0],me=A[1];return Object(N.useEffect)(function(){me("update")},[]),Object(d.jsx)(a.Provider,{value:{colorScheme:E,toggleColorScheme:S},children:C},$)};c.displayName="ColorSchemeProvider",c.displayName="@co-design/styles/ColorSchemeProvider";var i=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),g={layout:"fullscreen",darkMode:{current:"light"}};function n(l){var h=Object(q.useDarkMode)()?"dark":"light";return Object(d.jsx)(c,{colorScheme:h,toggleColorScheme:function(){},children:Object(d.jsx)(i.a,{theme:{colorScheme:h},withGlobalStyles:!0,withNormalizeCSS:!0,children:l.children})})}n.displayName="ThemeWrapper";var v=[function(l){return Object(d.jsx)(n,{children:l()})}];function t(l,h){var E=Object.keys(l);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(l);h&&(S=S.filter(function(C){return Object.getOwnPropertyDescriptor(l,C).enumerable})),E.push.apply(E,S)}return E}function r(l){for(var h=1;h<arguments.length;h++){var E=arguments[h]!=null?arguments[h]:{};h%2?t(Object(E),!0).forEach(function(S){u(l,S,E[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(E)):t(Object(E)).forEach(function(S){Object.defineProperty(l,S,Object.getOwnPropertyDescriptor(E,S))})}return l}function u(l,h,E){return h in l?Object.defineProperty(l,h,{value:E,enumerable:!0,configurable:!0,writable:!0}):l[h]=E,l}Object.keys(x).forEach(function(l){var h=x[l];switch(l){case"args":case"argTypes":return W.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(h));case"decorators":return h.forEach(function(S){return Object(K.d)(S,!1)});case"loaders":return h.forEach(function(S){return Object(K.e)(S,!1)});case"parameters":return Object(K.f)(r({},h),!1);case"argTypesEnhancers":return h.forEach(function(S){return Object(K.b)(S)});case"argsEnhancers":return h.forEach(function(S){return Object(K.c)(S)});case"render":return Object(K.g)(h);case"globals":case"globalTypes":{var E={};return E[l]=h,Object(K.f)(E,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(l+" was not supported :( !")}})},"./generated-stories-entry.js":function(he,p,e){"use strict";(function(x){var w=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,w.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],x,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(he))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(he,p,e){var x={"./co-design-core/src/components/Affix/stories/Affix.stories.tsx":"./packages/co-design-core/src/components/Affix/stories/Affix.stories.tsx","./co-design-core/src/components/Anchor/stories/Anchor.stories.tsx":"./packages/co-design-core/src/components/Anchor/stories/Anchor.stories.tsx","./co-design-core/src/components/AppShell/stories/AppShell.stories.tsx":"./packages/co-design-core/src/components/AppShell/stories/AppShell.stories.tsx","./co-design-core/src/components/AspectRatio/stories/AspectRatio.stories.tsx":"./packages/co-design-core/src/components/AspectRatio/stories/AspectRatio.stories.tsx","./co-design-core/src/components/Avatar/stories/Avatar.stories.tsx":"./packages/co-design-core/src/components/Avatar/stories/Avatar.stories.tsx","./co-design-core/src/components/Avatar/stories/AvatarGroup.stories.tsx":"./packages/co-design-core/src/components/Avatar/stories/AvatarGroup.stories.tsx","./co-design-core/src/components/Breadcrumbs/stories/Breadcrumbs.stories.tsx":"./packages/co-design-core/src/components/Breadcrumbs/stories/Breadcrumbs.stories.tsx","./co-design-core/src/components/Burger/stories/Burger.stories.tsx":"./packages/co-design-core/src/components/Burger/stories/Burger.stories.tsx","./co-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/co-design-core/src/components/Button/stories/Button.stories.tsx","./co-design-core/src/components/Card/stories/Card.stories.tsx":"./packages/co-design-core/src/components/Card/stories/Card.stories.tsx","./co-design-core/src/components/Center/stories/Center.stories.tsx":"./packages/co-design-core/src/components/Center/stories/Center.stories.tsx","./co-design-core/src/components/Chips/stories/Chips.stories.tsx":"./packages/co-design-core/src/components/Chips/stories/Chips.stories.tsx","./co-design-core/src/components/Container/stories/Container.stories.tsx":"./packages/co-design-core/src/components/Container/stories/Container.stories.tsx","./co-design-core/src/components/Divider/stories/Divider.stories.tsx":"./packages/co-design-core/src/components/Divider/stories/Divider.stories.tsx","./co-design-core/src/components/Drawer/stories/Drawer.stories.tsx":"./packages/co-design-core/src/components/Drawer/stories/Drawer.stories.tsx","./co-design-core/src/components/EquallyGrid/stories/EquallyGrid.stories.tsx":"./packages/co-design-core/src/components/EquallyGrid/stories/EquallyGrid.stories.tsx","./co-design-core/src/components/Grid/stories/Grid.stories.tsx":"./packages/co-design-core/src/components/Grid/stories/Grid.stories.tsx","./co-design-core/src/components/Group/stories/Group.stories.tsx":"./packages/co-design-core/src/components/Group/stories/Group.stories.tsx","./co-design-core/src/components/Heading/stories/Heading.stories.tsx":"./packages/co-design-core/src/components/Heading/stories/Heading.stories.tsx","./co-design-core/src/components/Highlight/stories/Highlight.stories.tsx":"./packages/co-design-core/src/components/Highlight/stories/Highlight.stories.tsx","./co-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/co-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./co-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/co-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./co-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/co-design-core/src/components/Image/stories/Image.stories.tsx","./co-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/co-design-core/src/components/Input/stories/Input.stories.tsx","./co-design-core/src/components/Kbd/stories/Kbd.stories.tsx":"./packages/co-design-core/src/components/Kbd/stories/Kbd.stories.tsx","./co-design-core/src/components/Mark/stories/Mark.stories.tsx":"./packages/co-design-core/src/components/Mark/stories/Mark.stories.tsx","./co-design-core/src/components/MediaQuery/stories/MediaQuery.stories.tsx":"./packages/co-design-core/src/components/MediaQuery/stories/MediaQuery.stories.tsx","./co-design-core/src/components/Menu/stories/Menu.stories.tsx":"./packages/co-design-core/src/components/Menu/stories/Menu.stories.tsx","./co-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/co-design-core/src/components/Modal/stories/Modal.stories.tsx","./co-design-core/src/components/Modal/stories/ModalsProvider.stories.tsx":"./packages/co-design-core/src/components/Modal/stories/ModalsProvider.stories.tsx","./co-design-core/src/components/NativeSelect/stories/NativeSelect.stories.tsx":"./packages/co-design-core/src/components/NativeSelect/stories/NativeSelect.stories.tsx","./co-design-core/src/components/Overlay/stories/Overlay.stories.tsx":"./packages/co-design-core/src/components/Overlay/stories/Overlay.stories.tsx","./co-design-core/src/components/PanelStack/stories/PanelStack.stories.tsx":"./packages/co-design-core/src/components/PanelStack/stories/PanelStack.stories.tsx","./co-design-core/src/components/Paper/stories/Paper.stories.tsx":"./packages/co-design-core/src/components/Paper/stories/Paper.stories.tsx","./co-design-core/src/components/Popover/stories/Popover.stories.tsx":"./packages/co-design-core/src/components/Popover/stories/Popover.stories.tsx","./co-design-core/src/components/Portal/stories/Portal.stories.tsx":"./packages/co-design-core/src/components/Portal/stories/Portal.stories.tsx","./co-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/co-design-core/src/components/Progress/stories/Progress.stories.tsx","./co-design-core/src/components/RingProgress/stories/RingProgress.stories.tsx":"./packages/co-design-core/src/components/RingProgress/stories/RingProgress.stories.tsx","./co-design-core/src/components/Scroll/stories/Scroll.stories.tsx":"./packages/co-design-core/src/components/Scroll/stories/Scroll.stories.tsx","./co-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/co-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./co-design-core/src/components/Stack/stories/Stack.stories.tsx":"./packages/co-design-core/src/components/Stack/stories/Stack.stories.tsx","./co-design-core/src/components/Switch/stories/Switch.stories.tsx":"./packages/co-design-core/src/components/Switch/stories/Switch.stories.tsx","./co-design-core/src/components/Tabs/stories/Tabs.stories.tsx":"./packages/co-design-core/src/components/Tabs/stories/Tabs.stories.tsx","./co-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/co-design-core/src/components/Tag/stories/Tag.stories.tsx","./co-design-core/src/components/Text/stories/Text.stories.tsx":"./packages/co-design-core/src/components/Text/stories/Text.stories.tsx","./co-design-core/src/components/Tooltip/stories/Tooltip.stories.tsx":"./packages/co-design-core/src/components/Tooltip/stories/Tooltip.stories.tsx","./co-design-core/src/components/Transition/stories/GroupedTransition.stories.tsx":"./packages/co-design-core/src/components/Transition/stories/GroupedTransition.stories.tsx","./co-design-core/src/components/Transition/stories/Transition.stories.tsx":"./packages/co-design-core/src/components/Transition/stories/Transition.stories.tsx","./co-design-core/src/components/Upload/stories/Upload.stories.tsx":"./packages/co-design-core/src/components/Upload/stories/Upload.stories.tsx","./co-design-core/src/components/View/stories/View.stories.tsx":"./packages/co-design-core/src/components/View/stories/View.stories.tsx","./co-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/co-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./co-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/co-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./co-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/co-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./co-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/co-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./co-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/co-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./co-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/co-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./co-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/co-design-hooks/src/useHover/stories/useHover.stories.tsx","./co-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/co-design-hooks/src/useId/stories/useId.stories.tsx","./co-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/co-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./co-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/co-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./co-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/co-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./co-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/co-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./co-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/co-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./co-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/co-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./co-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/co-design-hooks/src/useList/stories/useList.stories.tsx","./co-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/co-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./co-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/co-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./co-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/co-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./co-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/co-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./co-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/co-design-hooks/src/useOs/stories/useOs.stories.tsx","./co-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/co-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./co-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/co-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./co-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/co-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./co-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/co-design-hooks/src/useResize/stories/useResize.stories.tsx","./co-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/co-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./co-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/co-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./co-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/co-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./co-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/co-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./co-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/co-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./co-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/co-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./co-design-icons/stories/Icons.stories.tsx":"./packages/co-design-icons/stories/Icons.stories.tsx","./co-design-styled/src/stories/Styled.stories.tsx":"./packages/co-design-styled/src/stories/Styled.stories.tsx"};function w(ce){var Y=Q(ce);return e(Y)}function Q(ce){if(!e.o(x,ce)){var Y=new Error("Cannot find module '"+ce+"'");throw Y.code="MODULE_NOT_FOUND",Y}return x[ce]}w.keys=function(){return Object.keys(x)},w.resolve=Q,he.exports=w,w.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/co-design-core/src/components/Affix/stories/Affix.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return o});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),ee=e("./packages/co-design-core/src/components/View/View.tsx"),te=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),oe=e("./packages/co-design-core/src/utils/getFieldValue.ts"),G=e("./node_modules/react/jsx-runtime.js"),K=["target","zIndex","position","className","co"];function W(M,b){if(M==null)return{};var O=N(M,b),P,T;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(M);for(T=0;T<U.length;T++)P=U[T],!(b.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,P)||(O[P]=M[P]))}return O}function N(M,b){if(M==null)return{};var O={},P=Object.keys(M),T,U;for(U=0;U<P.length;U++)T=P[U],!(b.indexOf(T)>=0)&&(O[T]=M[T]);return O}var q=Object(x.forwardRef)(function(M,b){var O=M.target,P=M.zIndex,T=P===void 0?"sticky":P,U=M.position,d=U===void 0?{bottom:20,right:20}:U,m=M.className,y=M.co,f=W(M,K),j=Object(X.c)();return Object(G.jsx)(te.a,{zIndex:Object(oe.a)(T,j.zIndex),target:O,children:Object(G.jsx)(ee.a,Object.assign({co:[Object.assign({position:"fixed"},d),y],ref:b},f))})});q.displayName="@co-design/core/Affix";var L=`import React from 'react';
import { Affix } from '../Affix';

export default {
  title: '@co-design/core/Affix',
  component: Affix,
};

export const Default = () => {
  return (
    <div style={{ height: 10000 }}>
      <Affix>Affix</Affix>
    </div>
  );
};
`,k={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}},B=p.default={parameters:{storySource:{source:`import React from 'react';
import { Affix } from '../Affix';

export default {
  title: '@co-design/core/Affix',
  component: Affix,
};

export const Default = () => {
  return (
    <div style={{ height: 10000 }}>
      <Affix>Affix</Affix>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}}}},title:"@co-design/core/Affix",component:q},o=function(){return Object(G.jsx)("div",{style:{height:1e4},children:Object(G.jsx)(q,{children:"Affix"})})};o.displayName="Default"},"./packages/co-design-core/src/components/Anchor/Anchor.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return q});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),ee=e("./packages/co-design-core/src/components/Text/Text.tsx"),te=e("./packages/co-design-styles/src/tss/createStyles.ts"),oe=Object(te.a)(function(L,k){var B=k.color,o=k.underlineOnHover;return{root:{color:B in L.palettes?L.palettes[B][6]:B in L.colors?L.colors[B]:B,backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,"&:hover":{textDecoration:o?"underline":void 0}}}}),G=e("./node_modules/react/jsx-runtime.js"),K=["component","color","underlineOnHover","className","co","overrideStyles"];function W(L,k){if(L==null)return{};var B=N(L,k),o,M;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(L);for(M=0;M<b.length;M++)o=b[M],!(k.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,o)||(B[o]=L[o]))}return B}function N(L,k){if(L==null)return{};var B={},o=Object.keys(L),M,b;for(b=0;b<o.length;b++)M=o[b],!(k.indexOf(M)>=0)&&(B[M]=L[M]);return B}var q=Object(Y.forwardRef)(function(L,k){var B=L.component,o=L.color,M=L.underlineOnHover,b=M===void 0?!0:M,O=L.className,P=L.co,T=L.overrideStyles,U=W(L,K),d=Object(X.c)(),m=oe({color:o||d.primaryColor,underlineOnHover:b},{overrideStyles:T,name:"Anchor"}),y=m.classes,f=m.cx,j=B==="button"?{type:"button"}:null;return Object(G.jsx)(ee.a,Object.assign({component:B||"a",ref:k,className:f(y.root,O),co:P},j,U))});q.displayName="@co-design/core/Anchor"},"./packages/co-design-core/src/components/Anchor/stories/Anchor.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Anchor/Anchor.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Anchor } from '../Anchor';

export default {
  title: '@co-design/core/Anchor',
  component: Anchor,
  argTypes: {
    underlineOnHover: {
      defaultValue: 'true',
      control: { type: 'boolean' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Anchor {...props}>https://present.do</Anchor>;
};
`,oe={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:22},startBody:{col:23,line:20},endBody:{col:1,line:22}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Anchor } from '../Anchor';

export default {
  title: '@co-design/core/Anchor',
  component: Anchor,
  argTypes: {
    underlineOnHover: {
      defaultValue: 'true',
      control: { type: 'boolean' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Anchor {...props}>https://present.do</Anchor>;
};
`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:22},startBody:{col:23,line:20},endBody:{col:1,line:22}}}}},title:"@co-design/core/Anchor",component:Y.a,argTypes:{underlineOnHover:{defaultValue:"true",control:{type:"boolean"}},color:{defaultValue:"purple",options:["purple","blue","red","gray"],control:{type:"inline-radio"}}}};var G=function(W){return Object(X.jsx)(Y.a,Object.assign({},W,{children:"https://present.do"}))};G.displayName="Default"},"./packages/co-design-core/src/components/AppShell/stories/AppShell.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return Ze}),e.d(p,"WithHeader",function(){return ze}),e.d(p,"WithNoFixedHeader",function(){return re}),e.d(p,"WithSidebar",function(){return ye}),e.d(p,"WithResponsiveSidebar",function(){return Oe}),e.d(p,"WithSidebarSection",function(){return Se});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.string.fixed.js"),ee=e("./node_modules/core-js/modules/es.object.assign.js"),te=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./node_modules/core-js/modules/es.array.map.js"),K=e("./node_modules/core-js/modules/es.array.filter.js"),W=e("./node_modules/core-js/modules/es.array.sort.js"),N=e("./node_modules/core-js/modules/es.array.reverse.js"),q=function(ae,fe){if(!ae)return[];var _e=Object.keys(ae).filter(function(be){return be!=="base"}).map(function(be){return[fe.fn.size({size:be,sizes:fe.breakpoints}),ae[be]]});return _e.sort(function(be,Me){return Me[0]-be[0]}),_e.reverse()},L=e("./node_modules/core-js/modules/es.array.reduce.js"),k=e("./node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),o=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),b=e("./node_modules/core-js/modules/es.string.iterator.js"),O=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),d=e("./node_modules/core-js/modules/es.array.from.js"),m=e("./packages/co-design-styles/src/tss/createStyles.ts");function y(z,ae){return a(z)||_(z,ae)||j(z,ae)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(z,ae){if(!!z){if(typeof z=="string")return D(z,ae);var fe=Object.prototype.toString.call(z).slice(8,-1);if(fe==="Object"&&z.constructor&&(fe=z.constructor.name),fe==="Map"||fe==="Set")return Array.from(z);if(fe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fe))return D(z,ae)}}function D(z,ae){(ae==null||ae>z.length)&&(ae=z.length);for(var fe=0,_e=new Array(ae);fe<ae;fe++)_e[fe]=z[fe];return _e}function _(z,ae){var fe=z==null?null:typeof Symbol!="undefined"&&z[Symbol.iterator]||z["@@iterator"];if(fe!=null){var _e=[],be=!0,Me=!1,Le,Ie;try{for(fe=fe.call(z);!(be=(Le=fe.next()).done)&&(_e.push(Le.value),!(ae&&_e.length===ae));be=!0);}catch($e){Me=!0,Ie=$e}finally{try{!be&&fe.return!=null&&fe.return()}finally{if(Me)throw Ie}}return _e}}function a(z){if(Array.isArray(z))return z}function s(z,ae){var fe=ae.fn.size({size:z.padding,sizes:ae.spacing});if(!z.fixed)return{padding:fe};var _e=z.sidebarBreakpoints.reduce(function(be,Me){var Le=y(Me,2),Ie=Le[0],$e=Le[1];return be["@media (min-width: "+(Ie+1)+"px)"]={paddingLeft:"calc("+$e+"px + "+fe+"px)"},be},{});return z.sidebarHiddenBreakpoint>0&&(_e["@media (max-width: "+(z.sidebarHiddenBreakpoint+1)+"px)"]={paddingLeft:fe}),Object.assign({minHeight:"100vh",paddingTop:"calc("+z.headerHeight+" + "+fe+"px)",paddingLeft:"calc("+z.sidebarWidth+" + "+fe+"px)",paddingRight:fe,paddingBottom:fe},_e)}var c=Object(m.a)(function(z,ae){return{root:{boxSizing:"border-box"},body:{display:"flex",boxSizing:"border-box"},main:Object.assign({flex:1,boxSizing:"border-box"},s(ae,z))}}),i=e("./node_modules/react/jsx-runtime.js"),g=["component","children","grow","co"];function n(z,ae){if(z==null)return{};var fe=v(z,ae),_e,be;if(Object.getOwnPropertySymbols){var Me=Object.getOwnPropertySymbols(z);for(be=0;be<Me.length;be++)_e=Me[be],!(ae.indexOf(_e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,_e)||(fe[_e]=z[_e]))}return fe}function v(z,ae){if(z==null)return{};var fe={},_e=Object.keys(z),be,Me;for(Me=0;Me<_e.length;Me++)be=_e[Me],!(ae.indexOf(be)>=0)&&(fe[be]=z[be]);return fe}var t=Object(x.forwardRef)(function(z,ae){var fe=z.component,_e=z.children,be=z.grow,Me=be===void 0?!1:be,Le=z.co,Ie=n(z,g);return Object(i.jsx)(oe.a,Object.assign({component:fe||"div",ref:ae,co:[{flex:Me?1:0,boxSizing:"border-box"},Le]},Ie,{children:_e}))});t.displayName="@co-design/core/SidebarSection";var r=e("./packages/co-design-styles/src/theme/defaultTheme.ts");function u(z,ae){return C(z)||S(z,ae)||h(z,ae)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(z,ae){if(!!z){if(typeof z=="string")return E(z,ae);var fe=Object.prototype.toString.call(z).slice(8,-1);if(fe==="Object"&&z.constructor&&(fe=z.constructor.name),fe==="Map"||fe==="Set")return Array.from(z);if(fe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fe))return E(z,ae)}}function E(z,ae){(ae==null||ae>z.length)&&(ae=z.length);for(var fe=0,_e=new Array(ae);fe<ae;fe++)_e[fe]=z[fe];return _e}function S(z,ae){var fe=z==null?null:typeof Symbol!="undefined"&&z[Symbol.iterator]||z["@@iterator"];if(fe!=null){var _e=[],be=!0,Me=!1,Le,Ie;try{for(fe=fe.call(z);!(be=(Le=fe.next()).done)&&(_e.push(Le.value),!(ae&&_e.length===ae));be=!0);}catch($e){Me=!0,Ie=$e}finally{try{!be&&fe.return!=null&&fe.return()}finally{if(Me)throw Ie}}return _e}}function C(z){if(Array.isArray(z))return z}var R=Object(m.a)(function(z,ae){var fe,_e=ae.height,be=ae.width,Me=ae.padding,Le=ae.fixed,Ie=ae.position,$e=ae.hiddenBreakpoint,Ge=ae.zIndex,no=typeof be=="object"&&be!==null?q(be,z).reduce(function(oo,Xe){var Je=u(Xe,2),we=Je[0],Ye=Je[1];return oo["@media (min-width: "+(we+1)+"px)"]={width:Ye,minWidth:Ye},oo},{}):null;return{root:Object.assign({},Object(r.c)(z),Ie,{zIndex:z.fn.size({size:Ge,sizes:z.zIndex}),height:_e,width:(typeof be=="object"?be==null?void 0:be.base:be)||"100%",position:Le?"fixed":"static",boxSizing:"border-box",padding:z.fn.size({size:Me,sizes:z.spacing}),display:"flex",flexDirection:"column",backgroundColor:z.colorScheme==="dark"?z.colors.darkBackground:z.colors.lightBackground,borderRight:"1px solid "+(z.colorScheme==="dark"?z.palettes.gray[8]:z.palettes.gray[3])},no),hidden:(fe={},fe["@media (max-width: "+z.fn.size({size:$e,sizes:z.breakpoints})+"px)"]={display:"none"},fe)}}),A=["width","height","padding","fixed","position","zIndex","hiddenBreakpoint","hidden","className","co","overrideStyles","children"];function $(z,ae){if(z==null)return{};var fe=me(z,ae),_e,be;if(Object.getOwnPropertySymbols){var Me=Object.getOwnPropertySymbols(z);for(be=0;be<Me.length;be++)_e=Me[be],!(ae.indexOf(_e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,_e)||(fe[_e]=z[_e]))}return fe}function me(z,ae){if(z==null)return{};var fe={},_e=Object.keys(z),be,Me;for(Me=0;Me<_e.length;Me++)be=_e[Me],!(ae.indexOf(be)>=0)&&(fe[be]=z[be]);return fe}var ge=Object(x.forwardRef)(function(z,ae){var fe,_e=z.width,be=z.height,Me=be===void 0?"100vh":be,Le=z.padding,Ie=Le===void 0?0:Le,$e=z.fixed,Ge=$e===void 0?!1:$e,no=z.position,oo=no===void 0?{top:0,left:0}:no,Xe=z.zIndex,Je=Xe===void 0?"sticky":Xe,we=z.hiddenBreakpoint,Ye=we===void 0?"small":we,to=z.hidden,uo=to===void 0?!1:to,ro=z.className,lo=z.co,ao=z.overrideStyles,so=z.children,mo=$(z,A),io=R({width:_e,height:Me,padding:Ie,fixed:Ge,position:oo,hiddenBreakpoint:Ye,zIndex:Je},{overrideStyles:ao,name:"Sidebar"}),fo=io.classes,_o=io.cx;return Object(i.jsx)(oe.a,Object.assign({component:"nav",ref:ae,className:_o(fo.root,(fe={},fe[fo.hidden]=uo,fe),ro),co:lo},mo,{children:so}))});ge.Section=t,ge.displayName="@co-design/core/Sidebar";var je=Object(m.a)(function(z,ae){var fe=ae.height,_e=ae.padding,be=ae.fixed,Me=ae.zIndex;return{root:Object.assign({},Object(r.c)(z),{top:0,left:0,right:0,zIndex:z.fn.size({size:Me,sizes:z.zIndex}),height:fe,maxHeight:fe,position:be?"fixed":"static",boxSizing:"border-box",padding:z.fn.size({size:_e,sizes:z.spacing}),backgroundColor:z.colorScheme==="dark"?z.colors.darkBackground:z.colors.lightBackground,borderBottom:"1px solid "+(z.colorScheme==="dark"?z.colors.darkBorder:z.colors.lightBorder)})}}),H=["children","className","co","overrideStyles","height","padding","fixed","zIndex"];function le(z,ae){if(z==null)return{};var fe=pe(z,ae),_e,be;if(Object.getOwnPropertySymbols){var Me=Object.getOwnPropertySymbols(z);for(be=0;be<Me.length;be++)_e=Me[be],!(ae.indexOf(_e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,_e)||(fe[_e]=z[_e]))}return fe}function pe(z,ae){if(z==null)return{};var fe={},_e=Object.keys(z),be,Me;for(Me=0;Me<_e.length;Me++)be=_e[Me],!(ae.indexOf(be)>=0)&&(fe[be]=z[be]);return fe}var F=Object(x.forwardRef)(function(z,ae){var fe=z.children,_e=z.className,be=z.co,Me=z.overrideStyles,Le=z.height,Ie=z.padding,$e=Ie===void 0?0:Ie,Ge=z.fixed,no=Ge===void 0?!1:Ge,oo=z.zIndex,Xe=oo===void 0?"sticky":oo,Je=le(z,H),we=je({height:Le,padding:$e,fixed:no,zIndex:Xe},{name:"Header",overrideStyles:Me}),Ye=we.classes,to=we.cx;return Object(i.jsx)(oe.a,Object.assign({component:"nav",ref:ae,className:to(Ye.root,_e),co:be},Je,{children:fe}))});F.displayName="@co-design/core/Header";var J=["children","sidebar","header","fixed","zIndex","padding","className","co","overrideStyles"];function Z(z,ae){if(z==null)return{};var fe=de(z,ae),_e,be;if(Object.getOwnPropertySymbols){var Me=Object.getOwnPropertySymbols(z);for(be=0;be<Me.length;be++)_e=Me[be],!(ae.indexOf(_e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,_e)||(fe[_e]=z[_e]))}return fe}function de(z,ae){if(z==null)return{};var fe={},_e=Object.keys(z),be,Me;for(Me=0;Me<_e.length;Me++)be=_e[Me],!(ae.indexOf(be)>=0)&&(fe[be]=z[be]);return fe}var ne=function(ae){var fe,_e=ae==null||(fe=ae.props)===null||fe===void 0?void 0:fe.height;return typeof _e=="number"?_e+"px":typeof _e=="string"?_e:"0px"},ie=function(ae){var fe,_e,be,Me,Le=typeof(ae==null||(fe=ae.props)===null||fe===void 0?void 0:fe.width)=="object"?ae==null||(_e=ae.props)===null||_e===void 0||(be=_e.width)===null||be===void 0?void 0:be.base:ae==null||(Me=ae.props)===null||Me===void 0?void 0:Me.width;return typeof Le=="number"?Le+"px":typeof Le=="string"?Le:"0px"},Ce=function(ae,fe){var _e,be=ae==null||(_e=ae.props)===null||_e===void 0?void 0:_e.width;return be!=null?q(be,fe):[]},De=function(ae,fe){var _e,be=(ae==null||(_e=ae.props)===null||_e===void 0?void 0:_e.hiddenBreakpoint)||"small";return be!=null?fe.fn.size({size:be,sizes:fe.breakpoints}):0},Te=Object(x.forwardRef)(function(z,ae){var fe=z.children,_e=z.sidebar,be=z.header,Me=z.fixed,Le=Me===void 0?!1:Me,Ie=z.zIndex,$e=Ie===void 0?"sticky":Ie,Ge=z.padding,no=Ge===void 0?0:Ge,oo=z.className,Xe=z.co,Je=z.overrideStyles,we=Z(z,J),Ye=Object(te.c)(),to=Ce(_e,Ye),uo=De(_e,Ye),ro=ie(_e),lo=ne(be),ao=ne(_e),so=c({padding:no,fixed:Le,sidebarWidth:ro,headerHeight:lo,sidebarBreakpoints:to,sidebarHiddenBreakpoint:uo},{overrideStyles:Je,name:"AppShell"}),mo=so.classes,io=so.cx,fo=be?w.a.cloneElement(be,{fixed:Le,zIndex:$e}):null,_o=_e?w.a.cloneElement(_e,{fixed:Le,zIndex:$e,height:ao!=="0px"?ao:"calc(100vh - "+lo+")",position:{top:lo,left:0}}):null;return Object(i.jsxs)(oe.a,Object.assign({ref:ae,className:io(mo.root,oo),co:Xe},we,{children:[fo,Object(i.jsxs)("div",{className:mo.body,children:[_o,Object(i.jsx)("main",{className:mo.main,children:fe})]})]}))});Te.displayName="@co-design/core/AppShell",Te.Header=F,Te.Sidebar=ge;var Ve=`import React from 'react';
import { AppShell } from '../AppShell';

export default {
  title: '@co-design/core/AppShell',
  component: AppShell,
};

export const Default = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell fixed header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithNoFixedHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithSidebar = () => {
  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithResponsiveSidebar = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = (
    <AppShell.Sidebar hidden width={{ base: 300, xsmall: 100, small: 200, medium: 300, large: 400 }}>
      Sidebar
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      Content
    </AppShell>
  );
};

export const WithSidebarSection = () => {
  const header = (
    <AppShell.Header height={70} padding="small">
      Header
    </AppShell.Header>
  );

  const sidebar = (
    <AppShell.Sidebar width={300} padding="small">
      <AppShell.Sidebar.Section>Section1</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section grow>Secition2</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section>Section3</AppShell.Sidebar.Section>
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar} padding="small">
      Content
    </AppShell>
  );
};
`,Ue={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}},WithHeader:{startLoc:{col:26,line:21},endLoc:{col:1,line:29},startBody:{col:26,line:21},endBody:{col:1,line:29}},WithNoFixedHeader:{startLoc:{col:33,line:31},endLoc:{col:1,line:39},startBody:{col:33,line:31},endBody:{col:1,line:39}},WithSidebar:{startLoc:{col:27,line:41},endLoc:{col:1,line:49},startBody:{col:27,line:41},endBody:{col:1,line:49}},WithResponsiveSidebar:{startLoc:{col:37,line:51},endLoc:{col:1,line:65},startBody:{col:37,line:51},endBody:{col:1,line:65}},WithSidebarSection:{startLoc:{col:34,line:67},endLoc:{col:1,line:87},startBody:{col:34,line:67},endBody:{col:1,line:87}}},Ke=p.default={parameters:{storySource:{source:`import React from 'react';
import { AppShell } from '../AppShell';

export default {
  title: '@co-design/core/AppShell',
  component: AppShell,
};

export const Default = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell fixed header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithNoFixedHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithSidebar = () => {
  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithResponsiveSidebar = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = (
    <AppShell.Sidebar hidden width={{ base: 300, xsmall: 100, small: 200, medium: 300, large: 400 }}>
      Sidebar
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      Content
    </AppShell>
  );
};

export const WithSidebarSection = () => {
  const header = (
    <AppShell.Header height={70} padding="small">
      Header
    </AppShell.Header>
  );

  const sidebar = (
    <AppShell.Sidebar width={300} padding="small">
      <AppShell.Sidebar.Section>Section1</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section grow>Secition2</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section>Section3</AppShell.Sidebar.Section>
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar} padding="small">
      Content
    </AppShell>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}},"with-header":{startLoc:{col:26,line:21},endLoc:{col:1,line:29},startBody:{col:26,line:21},endBody:{col:1,line:29}},"with-no-fixed-header":{startLoc:{col:33,line:31},endLoc:{col:1,line:39},startBody:{col:33,line:31},endBody:{col:1,line:39}},"with-sidebar":{startLoc:{col:27,line:41},endLoc:{col:1,line:49},startBody:{col:27,line:41},endBody:{col:1,line:49}},"with-responsive-sidebar":{startLoc:{col:37,line:51},endLoc:{col:1,line:65},startBody:{col:37,line:51},endBody:{col:1,line:65}},"with-sidebar-section":{startLoc:{col:34,line:67},endLoc:{col:1,line:87},startBody:{col:34,line:67},endBody:{col:1,line:87}}}}},title:"@co-design/core/AppShell",component:Te},Ze=function(){var ae=Object(i.jsx)(Te.Header,{height:70,children:"Header"}),fe=Object(i.jsx)(Te.Sidebar,{width:300,children:"Sidebar"});return Object(i.jsx)(Te,{fixed:!0,header:ae,sidebar:fe,children:Object(i.jsx)("div",{style:{height:1e4},children:"Content"})})};Ze.displayName="Default";var ze=function(){var ae=Object(i.jsx)(Te.Header,{height:70,children:"Header"});return Object(i.jsx)(Te,{fixed:!0,header:ae,children:Object(i.jsx)("div",{style:{height:1e4},children:"Content"})})};ze.displayName="WithHeader";var re=function(){var ae=Object(i.jsx)(Te.Header,{height:70,children:"Header"});return Object(i.jsx)(Te,{header:ae,children:Object(i.jsx)("div",{style:{height:1e4},children:"Content"})})};re.displayName="WithNoFixedHeader";var ye=function(){var ae=Object(i.jsx)(Te.Sidebar,{width:300,children:"Sidebar"});return Object(i.jsx)(Te,{fixed:!0,sidebar:ae,children:Object(i.jsx)("div",{style:{height:1e4},children:"Content"})})};ye.displayName="WithSidebar";var Oe=function(){var ae=Object(i.jsx)(Te.Header,{height:70,children:"Header"}),fe=Object(i.jsx)(Te.Sidebar,{hidden:!0,width:{base:300,xsmall:100,small:200,medium:300,large:400},children:"Sidebar"});return Object(i.jsx)(Te,{fixed:!0,header:ae,sidebar:fe,children:"Content"})};Oe.displayName="WithResponsiveSidebar";var Se=function(){var ae=Object(i.jsx)(Te.Header,{height:70,padding:"small",children:"Header"}),fe=Object(i.jsxs)(Te.Sidebar,{width:300,padding:"small",children:[Object(i.jsx)(Te.Sidebar.Section,{children:"Section1"}),Object(i.jsx)(Te.Sidebar.Section,{grow:!0,children:"Secition2"}),Object(i.jsx)(Te.Sidebar.Section,{children:"Section3"})]});return Object(i.jsx)(Te,{fixed:!0,header:ae,sidebar:fe,padding:"small",children:"Content"})};Se.displayName="WithSidebarSection"},"./packages/co-design-core/src/components/AspectRatio/stories/AspectRatio.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return B});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/co-design-core/src/components/View/View.tsx"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=Object(ee.a)(function(o,M){var b=M.ratio;return{root:{position:"relative",maxWidth:"100%","&::before":{content:'""',height:0,display:"block",paddingBottom:1/b*100+"%"},"&::after":{content:'""',display:"table",clear:"both"},"& > *:not(style)":{overflow:"hidden",position:"absolute",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}}}),oe=e("./node_modules/react/jsx-runtime.js"),G=["children","ratio","className"];function K(o,M){if(o==null)return{};var b=W(o,M),O,P;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(P=0;P<T.length;P++)O=T[P],!(M.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,O)||(b[O]=o[O]))}return b}function W(o,M){if(o==null)return{};var b={},O=Object.keys(o),P,T;for(T=0;T<O.length;T++)P=O[T],!(M.indexOf(P)>=0)&&(b[P]=o[P]);return b}var N=Object(w.forwardRef)(function(o,M){var b=o.children,O=o.ratio,P=o.className,T=K(o,G),U=te({ratio:O},{name:"AspectRatio"}),d=U.classes,m=U.cx;return Object(oe.jsx)(X.a,Object.assign({ref:M,className:m(d.root,P)},T,{children:b}))});N.displayName="@co-design/core/AspectRatio";var q=`import React from 'react';
import { AspectRatio } from '../AspectRatio';

export default {
  title: '@co-design/core/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      defaultValue: 16 / 9,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <AspectRatio {...props} co={{ width: 800 }}>
        <img src="https://picsum.photos/800" />
      </AspectRatio>
    </div>
  );
};
`,L={Default:{startLoc:{col:23,line:15},endLoc:{col:1,line:23},startBody:{col:23,line:15},endBody:{col:1,line:23}}},k=p.default={parameters:{storySource:{source:`import React from 'react';
import { AspectRatio } from '../AspectRatio';

export default {
  title: '@co-design/core/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      defaultValue: 16 / 9,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <AspectRatio {...props} co={{ width: 800 }}>
        <img src="https://picsum.photos/800" />
      </AspectRatio>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:1,line:23},startBody:{col:23,line:15},endBody:{col:1,line:23}}}}},title:"@co-design/core/AspectRatio",component:N,argTypes:{ratio:{defaultValue:16/9,control:{type:"number"}}}},B=function(M){return Object(oe.jsx)("div",{children:Object(oe.jsx)(N,Object.assign({},M,{co:{width:800},children:Object(oe.jsx)("img",{src:"https://picsum.photos/800"})}))})};B.displayName="Default"},"./packages/co-design-core/src/components/Avatar/Avatar.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return c});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),L=e("./node_modules/react/index.js"),k=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),B=e("./packages/co-design-core/src/components/View/View.tsx"),o=e("./node_modules/react/jsx-runtime.js"),M=function(g){return Object(o.jsx)("svg",Object.assign({},g,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M12 3C14.4853 3 16.5 5.01472 16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3ZM12 14.25C16.9725 14.25 21 16.2638 21 18.75V21H3V18.75C3 16.2638 7.0275 14.25 12 14.25Z"})}))};M.displayName="AvatarPlaceholderIcon";var b=e("./packages/co-design-styles/src/tss/createStyles.ts"),O=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),P=e("./packages/co-design-core/src/constants/index.ts"),T=e("./packages/co-design-core/src/utils/getFieldValue.ts"),U=Object(b.a)(function(i,g){var n=g.size,v=g.shape,t=g.color;return{root:{WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"relative",userSelect:"none",overflow:"hidden",width:Object(T.a)(n,P.a),minWidth:Object(T.a)(n,P.a),height:Object(T.a)(n,P.a),borderRadius:v==="circle"?i.radius.circular:v==="round"?i.radius.medium:0},image:{objectFit:"cover",width:"100%",height:"100%",display:"block"},placeholder:Object.assign({},Object(O.c)(i),{fontSize:Object(T.a)(n,P.a)/3,color:i.palettes[t][i.colorScheme==="dark"?3:5],fontWeight:700,backgroundColor:i.palettes[t][i.colorScheme==="dark"?7:2],display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",userSelect:"none"}),placeholderIcon:{width:"70%",height:"70%",color:i.palettes[t][i.colorScheme==="dark"?3:5]}}}),d=["children","component","size","src","alt","shape","color","className","co","overrideStyles"];function m(i,g){return _(i)||D(i,g)||f(i,g)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(i,g){if(!!i){if(typeof i=="string")return j(i,g);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(i,g)}}function j(i,g){(g==null||g>i.length)&&(g=i.length);for(var n=0,v=new Array(g);n<g;n++)v[n]=i[n];return v}function D(i,g){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var v=[],t=!0,r=!1,u,l;try{for(n=n.call(i);!(t=(u=n.next()).done)&&(v.push(u.value),!(g&&v.length===g));t=!0);}catch(h){r=!0,l=h}finally{try{!t&&n.return!=null&&n.return()}finally{if(r)throw l}}return v}}function _(i){if(Array.isArray(i))return i}function a(i,g){if(i==null)return{};var n=s(i,g),v,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(t=0;t<r.length;t++)v=r[t],!(g.indexOf(v)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,v)||(n[v]=i[v]))}return n}function s(i,g){if(i==null)return{};var n={},v=Object.keys(i),t,r;for(r=0;r<v.length;r++)t=v[r],!(g.indexOf(t)>=0)&&(n[t]=i[t]);return n}var c=Object(L.forwardRef)(function(i,g){var n=i.children,v=i.component,t=i.size,r=t===void 0?"medium":t,u=i.src,l=i.alt,h=i.shape,E=h===void 0?"circle":h,S=i.color,C=i.className,R=i.co,A=i.overrideStyles,$=a(i,d),me=Object(k.c)(),ge=S||me.primaryColor,je=U({color:ge,shape:E,size:r},{overrideStyles:A,name:"Avatar"}),H=je.classes,le=je.cx,pe=Object(L.useState)(!u),F=m(pe,2),J=F[0],Z=F[1];return Object(L.useEffect)(function(){Z(!u)},[u]),Object(o.jsx)(B.a,Object.assign({component:v||"div",ref:g,className:le(H.root,C),co:R},$,{children:J?Object(o.jsx)("div",{className:H.placeholder,title:l,children:n||Object(o.jsx)(M,{className:H.placeholderIcon})}):Object(o.jsx)("img",{className:H.image,src:u,alt:l,onError:function(){return Z(!0)}})}))});c.displayName="@co-deisgn/core/Avatar"},"./packages/co-design-core/src/components/Avatar/stories/Avatar.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G}),e.d(p,"OverrideStyles",function(){return K});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Avatar/Avatar.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    src: {
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    shape: {
      defaultValue: 'circle',
      options: ['square', 'round', 'circle'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
};

export const OverrideStyles = (props) => {
  return (
    <div>
      Grayscale filter
      <Avatar
        {...props}
        src="https://picsum.photos/400/400"
        overrideStyles={{
          image: {
            filter: 'grayscale(80%)',
          },
        }}
      />
    </div>
  );
};
`,oe={Default:{startLoc:{col:23,line:33},endLoc:{col:1,line:39},startBody:{col:23,line:33},endBody:{col:1,line:39}},OverrideStyles:{startLoc:{col:30,line:41},endLoc:{col:1,line:56},startBody:{col:30,line:41},endBody:{col:1,line:56}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    src: {
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    shape: {
      defaultValue: 'circle',
      options: ['square', 'round', 'circle'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
};

export const OverrideStyles = (props) => {
  return (
    <div>
      Grayscale filter
      <Avatar
        {...props}
        src="https://picsum.photos/400/400"
        overrideStyles={{
          image: {
            filter: 'grayscale(80%)',
          },
        }}
      />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:33},endLoc:{col:1,line:39},startBody:{col:23,line:33},endBody:{col:1,line:39}},"override-styles":{startLoc:{col:30,line:41},endLoc:{col:1,line:56},startBody:{col:30,line:41},endBody:{col:1,line:56}}}}},title:"@co-design/core/Avatar",component:Y.a,argTypes:{children:{control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},shape:{defaultValue:"circle",options:["square","round","circle"],control:{type:"inline-radio"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","blue","red","gray"],control:{type:"inline-radio"}}}};var G=function(N){return Object(X.jsx)("div",{children:Object(X.jsx)(Y.a,Object.assign({},N))})};G.displayName="Default";var K=function(N){return Object(X.jsxs)("div",{children:["Grayscale filter",Object(X.jsx)(Y.a,Object.assign({},N,{src:"https://picsum.photos/400/400",overrideStyles:{image:{filter:"grayscale(80%)"}}}))]})};K.displayName="OverrideStyles"},"./packages/co-design-core/src/components/Avatar/stories/AvatarGroup.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return d});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/core-js/modules/es.array.filter.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./packages/co-design-core/src/components/Avatar/Avatar.tsx"),K=e("./packages/co-design-core/src/components/View/View.tsx"),W=e("./packages/co-design-core/src/components/Center/Center.tsx"),N=e("./packages/co-design-styles/src/tss/createStyles.ts"),q=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/co-design-core/src/utils/getFieldValue.ts"),k=Object(N.a)(function(m,y){var f=y.spacing;return{root:{display:"flex",paddingLeft:Object(L.a)(f,m.spacing)/2},child:{marginLeft:-Object(L.a)(f,m.spacing)/2,background:""+(m.colorScheme==="dark"?m.palettes.gray[9]:m.colors.white),border:"2px solid "+(m.colorScheme==="dark"?m.palettes.gray[9]:m.colors.white)},truncated:Object.assign({},Object(q.c)(m),{lineHeight:1,color:m.colorScheme==="dark"?m.palettes.gray[0]:m.palettes.gray[9],width:"100%",height:"100%",backgroundColor:m.colorScheme==="dark"?m.palettes.gray[7]:m.palettes.gray[3]})}}),B=e("./node_modules/react/jsx-runtime.js"),o=["children","size","shape","limit","spacing","total","className","co","overrideStyles"];function M(m,y){if(m==null)return{};var f=b(m,y),j,D;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(m);for(D=0;D<_.length;D++)j=_[D],!(y.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,j)||(f[j]=m[j]))}return f}function b(m,y){if(m==null)return{};var f={},j=Object.keys(m),D,_;for(_=0;_<j.length;_++)D=j[_],!(y.indexOf(D)>=0)&&(f[D]=m[D]);return f}var O=Object(w.forwardRef)(function(m,y){var f=m.children,j=m.size,D=j===void 0?"medium":j,_=m.shape,a=_===void 0?"circle":_,s=m.limit,c=s===void 0?2:s,i=m.spacing,g=i===void 0?"large":i,n=m.total,v=m.className,t=m.co,r=m.overrideStyles,u=M(m,o),l=k({spacing:g},{overrideStyles:r,name:"AvatarGroup"}),h=l.classes,E=l.cx,S=Q.a.Children.toArray(f).filter(function($){return $.type===G.a}).map(function($,me){return Q.a.cloneElement($,{size:D,shape:a,key:me,className:E(h.child,$.props.className),style:Object.assign({},$.props.style,{zIndex:me+1})})}),C=c<2?2:c,R=S.length>C?S.length-C:0,A=n?n-Math.min(S.length,C):R;return Object(B.jsxs)(K.a,Object.assign({ref:y,className:E(v,h.root),co:t},u,{children:[S.slice(0,S.length-R),A?Object(B.jsx)(G.a,{size:D,shape:a,className:h.child,style:{zIndex:c+1},children:Object(B.jsxs)(W.a,{className:h.truncated,children:["+",A]})}):null]}))});O.displayName="@co-design/core/AvatarGroup";var P=`import React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'large',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    limit: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    total: {
      defaultValue: 5,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <AvatarGroup {...props}>
        <Avatar src="https://picsum.photos/600/400?1" />
        <Avatar src="https://picsum.photos/600/400?2" />
        <Avatar src="https://picsum.photos/600/400?3" />
        <Avatar src="https://picsum.photos/600/400?4" />
        <Avatar src="https://picsum.photos/600/400?5" />
      </AvatarGroup>
    </div>
  );
};
`,T={Default:{startLoc:{col:23,line:30},endLoc:{col:1,line:42},startBody:{col:23,line:30},endBody:{col:1,line:42}}},U=p.default={parameters:{storySource:{source:`import React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'large',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    limit: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    total: {
      defaultValue: 5,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <AvatarGroup {...props}>
        <Avatar src="https://picsum.photos/600/400?1" />
        <Avatar src="https://picsum.photos/600/400?2" />
        <Avatar src="https://picsum.photos/600/400?3" />
        <Avatar src="https://picsum.photos/600/400?4" />
        <Avatar src="https://picsum.photos/600/400?5" />
      </AvatarGroup>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:30},endLoc:{col:1,line:42},startBody:{col:23,line:30},endBody:{col:1,line:42}}}}},title:"@co-design/core/AvatarGroup",component:O,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},spacing:{defaultValue:"large",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},limit:{defaultValue:3,control:{type:"number"}},total:{defaultValue:5,control:{type:"number"}}}},d=function(y){return Object(B.jsx)("div",{children:Object(B.jsxs)(O,Object.assign({},y,{children:[Object(B.jsx)(G.a,{src:"https://picsum.photos/600/400?1"}),Object(B.jsx)(G.a,{src:"https://picsum.photos/600/400?2"}),Object(B.jsx)(G.a,{src:"https://picsum.photos/600/400?3"}),Object(B.jsx)(G.a,{src:"https://picsum.photos/600/400?4"}),Object(B.jsx)(G.a,{src:"https://picsum.photos/600/400?5"})]}))})};d.displayName="Default"},"./packages/co-design-core/src/components/Breadcrumbs/stories/Breadcrumbs.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return O}),e.d(p,"OverrideStyles",function(){return P});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./packages/co-design-core/src/components/Text/Text.tsx"),Y=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.array.reduce.js"),oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./packages/co-design-styles/src/tss/createStyles.ts"),K=e("./packages/co-design-core/src/utils/getFieldValue.ts"),W=Object(G.a)(function(T,U){var d=U.spacing;return{root:{display:"flex"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:Object(K.a)(d,T.spacing),marginRight:Object(K.a)(d,T.spacing),color:T.colorScheme==="dark"?T.palettes.gray[3]:T.palettes.gray[6],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}}}),N=e("./node_modules/react/jsx-runtime.js"),q=["children","separator","spacing","className","co","overrideStyles"];function L(T,U){if(T==null)return{};var d=k(T,U),m,y;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(T);for(y=0;y<f.length;y++)m=f[y],!(U.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,m)||(d[m]=T[m]))}return d}function k(T,U){if(T==null)return{};var d={},m=Object.keys(T),y,f;for(f=0;f<m.length;f++)y=m[f],!(U.indexOf(y)>=0)&&(d[y]=T[y]);return d}var B=Object(w.forwardRef)(function(T,U){var d=T.children,m=T.separator,y=m===void 0?"/":m,f=T.spacing,j=f===void 0?"small":f,D=T.className,_=T.co,a=T.overrideStyles,s=L(T,q),c=W({spacing:j},{overrideStyles:a,name:"Breadcrumbs"}),i=c.classes,g=c.cx,n=Q.a.Children.toArray(d).reduce(function(v,t,r,u){return v.push(Q.a.cloneElement(t,{className:i.breadcrumb,key:r})),r!==u.length-1&&v.push(Object(N.jsx)(ce.a,{size:"small",className:i.separator,children:y},"separator-"+r)),v},[]);return Object(N.jsx)(oe.a,Object.assign({ref:U,className:g(i.root,D),co:_},s,{children:n}))});B.displayName="@co-design/core/Breadcrumbs";var o=`import React from 'react';
import { Text } from '../../Text';
import { Breadcrumbs } from '../Breadcrumbs';

export default {
  title: '@co-design/core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      defaultValue: '/',
      control: { type: 'text' },
    },
    spacing: {
      defaultValue: 8,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <Breadcrumbs {...props}>
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Breadcrumbs
      {...props}
      overrideStyles={{
        root: {
          border: '1px solid blue',
        },
        breadcrumb: {
          border: '1px solid red',
        },
        separator: {
          border: '1px solid green',
        },
      }}
    >
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};
`,M={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:28},startBody:{col:23,line:20},endBody:{col:1,line:28}},OverrideStyles:{startLoc:{col:30,line:30},endLoc:{col:1,line:51},startBody:{col:30,line:30},endBody:{col:1,line:51}}},b=p.default={parameters:{storySource:{source:`import React from 'react';
import { Text } from '../../Text';
import { Breadcrumbs } from '../Breadcrumbs';

export default {
  title: '@co-design/core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      defaultValue: '/',
      control: { type: 'text' },
    },
    spacing: {
      defaultValue: 8,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <Breadcrumbs {...props}>
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Breadcrumbs
      {...props}
      overrideStyles={{
        root: {
          border: '1px solid blue',
        },
        breadcrumb: {
          border: '1px solid red',
        },
        separator: {
          border: '1px solid green',
        },
      }}
    >
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:28},startBody:{col:23,line:20},endBody:{col:1,line:28}},"override-styles":{startLoc:{col:30,line:30},endLoc:{col:1,line:51},startBody:{col:30,line:30},endBody:{col:1,line:51}}}}},title:"@co-design/core/Breadcrumbs",component:B,argTypes:{separator:{defaultValue:"/",control:{type:"text"}},spacing:{defaultValue:8,control:{type:"number"}}}},O=function(U){return Object(N.jsxs)(B,Object.assign({},U,{children:[Object(N.jsx)(ce.a,{children:"Co Design"}),Object(N.jsx)(ce.a,{children:"Components"}),Object(N.jsx)(ce.a,{children:"Breadcrumbs"})]}))};O.displayName="Default";var P=function(U){return Object(N.jsxs)(B,Object.assign({},U,{overrideStyles:{root:{border:"1px solid blue"},breadcrumb:{border:"1px solid red"},separator:{border:"1px solid green"}},children:[Object(N.jsx)(ce.a,{children:"Co Design"}),Object(N.jsx)(ce.a,{children:"Components"}),Object(N.jsx)(ce.a,{children:"Breadcrumbs"})]}))};P.displayName="OverrideStyles"},"./packages/co-design-core/src/components/Burger/stories/Burger.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return v});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),B=e("./packages/co-design-core/src/components/View/View.tsx"),o=e("./packages/co-design-styles/src/tss/createStyles.ts"),M=e("./packages/co-design-core/src/constants/index.ts"),b=e("./packages/co-design-core/src/utils/getFieldValue.ts"),O=Object(o.a)(function(t,r,u){var l,h=r.size,E=r.color,S=Object(b.a)(h,M.a),C={ref:u("opened")};return{opened:C,root:{WebkitTapHighlightColor:"transparent",width:S,height:S,padding:0,backgroundColor:"transparent",border:0,cursor:"pointer"},burger:(l={position:"relative",userSelect:"none",boxSizing:"border-box","&, &:before, &:after":{display:"block",width:S,height:Math.ceil(S/12),backgroundColor:E,outline:"1px solid transparent",transitionProperty:"background-color, transform",transitionDuration:"300ms","@media (prefers-reduced-motion)":{transitionDuration:"0ms"}},"&:before, &:after":{position:"absolute",content:'""',left:0},"&:before":{top:S/3*-1},"&:after":{top:S/3}},l["&."+C.ref]={backgroundColor:"transparent","&:before":{transform:"translateY("+S/3+"px) rotate(45deg)"},"&:after":{transform:"translateY(-"+S/3+"px) rotate(-45deg)"}},l)}}),P=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),T=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),U=e("./node_modules/react/jsx-runtime.js"),d=["opened","color","size","co","className","overrideStyles"];function m(t,r){return _(t)||D(t,r)||f(t,r)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(t,r){if(!!t){if(typeof t=="string")return j(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return j(t,r)}}function j(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,l=new Array(r);u<r;u++)l[u]=t[u];return l}function D(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var l=[],h=!0,E=!1,S,C;try{for(u=u.call(t);!(h=(S=u.next()).done)&&(l.push(S.value),!(r&&l.length===r));h=!0);}catch(R){E=!0,C=R}finally{try{!h&&u.return!=null&&u.return()}finally{if(E)throw C}}return l}}function _(t){if(Array.isArray(t))return t}function a(t,r){if(t==null)return{};var u=s(t,r),l,h;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(t);for(h=0;h<E.length;h++)l=E[h],!(r.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,l)||(u[l]=t[l]))}return u}function s(t,r){if(t==null)return{};var u={},l=Object.keys(t),h,E;for(E=0;E<l.length;E++)h=l[E],!(r.indexOf(h)>=0)&&(u[h]=t[h]);return u}var c=Object(w.forwardRef)(function(t,r){var u,l=t.opened,h=l===void 0?!1:l,E=t.color,S=t.size,C=S===void 0?"medium":S,R=t.co,A=t.className,$=t.overrideStyles,me=a(t,d),ge=Object(k.c)(),je=(E in ge.palettes?ge.palettes[E][ge.colorScheme==="light"?5:2]:E in ge.colors?ge.colors[E]:E)||(ge.colorScheme==="dark"?ge.colors.white:ge.palettes.gray[9]),H=O({color:je,size:C},{overrideStyles:$,name:"Burger"}),le=H.classes,pe=H.cx,F=Object(P.a)(h),J=m(F,2),Z=J[0],de=J[1];Object(T.a)(function(){de(h)},[h]);var ne=Object(w.useCallback)(function(){de()},[]);return Object(U.jsx)(B.a,Object.assign({component:"button",type:"button",ref:r,onClick:ne,title:"burger",className:pe(le.root,A),co:R},me,{children:Object(U.jsx)("div",{className:pe(le.burger,(u={},u[le.opened]=Z,u))})}))});c.displayName="@co-design/core/Burger";var i=`import React from 'react';
import { Burger } from '../Burger';

export default {
  title: '@co-design/core/Burger',
  component: Burger,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    opened: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Burger {...props} />;
};
`,g={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}},n=p.default={parameters:{storySource:{source:`import React from 'react';
import { Burger } from '../Burger';

export default {
  title: '@co-design/core/Burger',
  component: Burger,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    opened: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Burger {...props} />;
};
`,locationsMap:{default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}}}},title:"@co-design/core/Burger",component:c,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{options:["purple","gray","red","blue"],control:{type:"inline-radio"}},opened:{defaultValue:!1,control:{type:"boolean"}}}},v=function(r){return Object(U.jsx)(c,Object.assign({},r))};v.displayName="Default"},"./packages/co-design-core/src/components/Button/Button.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return U});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),ee=e("./packages/co-design-core/src/components/View/View.tsx"),te=e("./node_modules/core-js/modules/es.string.small.js"),oe=e("./node_modules/core-js/modules/es.array.reduce.js"),G=e("./packages/co-design-styles/src/tss/createStyles.ts"),K=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),W=e("./packages/co-design-core/src/utils/addAlpha.ts"),N=e("./packages/co-design-core/src/constants/index.ts"),q={xsmall:{height:N.a.xsmall,padding:"0 16px"},small:{height:N.a.small,padding:"0 16px"},medium:{height:N.a.medium,padding:"0 24px"},large:{height:N.a.large,padding:"0 24px"},xlarge:{height:N.a.xlarge,padding:"0 30px"}},L=function(m){return{xsmall:{fontWeight:"normal",fontSize:m.fontSizes.xsmall},small:{fontWeight:"normal",fontSize:m.fontSizes.xsmall},medium:{fontWeight:"normal",fontSize:m.fontSizes.small},large:{fontWeight:"bold",fontSize:m.fontSizes.medium},xlarge:{fontWeight:"bold",fontSize:m.fontSizes.xlarge}}},k=Object.keys(q).reduce(function(d,m){return d[m]=q[m].height,d},{}),B=function(m){return{display:m?"block":"inline-block",width:m?"100%":"auto"}},o=Object(G.a)(function(d,m,y){var f,j,D,_,a,s=m.color,c=m.size,i=m.fullWidth,g=y("loading"),n=y("inner"),v=y("spinner"),t=s||d.primaryColor;return{loading:(f={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},f["."+n]={opacity:0},f["."+v]={display:"flex"},f),solid:(j={backgroundColor:d.palettes[t][d.colorScheme==="light"?5:3],color:d.colorScheme==="light"?d.colors.white:d.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:d.palettes[t][d.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:d.palettes[t][d.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3]}}},j["&:disabled:not(."+g+")"]={backgroundColor:d.palettes.gray[2],color:Object(W.a)(d.colors.black,d.opacity.opacity3)},j),ghost:(D={backgroundColor:d.colors.transparent,border:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3],color:d.palettes[t][d.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(d.palettes[t][d.colorScheme==="light"?0:8],d.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(d.palettes[t][d.colorScheme==="light"?1:7],d.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3]}}},D["&:disabled:not(."+g+")"]={color:Object(W.a)(d.palettes[t][1],d.opacity.opacity3),border:"1px solid "+Object(W.a)(d.palettes[t][1],d.opacity.opacity3)},D),"light-solid":(_={backgroundColor:Object(W.a)(d.colorScheme==="light"?d.colors.black:d.colors.white,d.opacity.opacity1),color:d.palettes[t][d.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(d.palettes.dark[d.colorScheme==="light"?8:1],d.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(d.palettes.dark[d.colorScheme==="light"?7:2],d.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3]}}},_["&:disabled:not(."+g+")"]={backgroundColor:Object(W.a)(d.palettes.dark[d.colorScheme==="light"?4:1],d.opacity.opacity1),color:Object(W.a)(d.palettes[t][d.colorScheme==="light"?7:3],d.opacity.opacity3)},_),text:(a={backgroundColor:"transparent",color:d.palettes[t][d.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(W.a)(d.palettes[t][d.colorScheme==="light"?8:1],d.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(W.a)(d.palettes[t][d.colorScheme==="light"?7:2],d.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+d.palettes[t][d.colorScheme==="light"?5:3]}}},a["&:disabled:not(."+g+")"]={color:Object(W.a)(d.palettes[t][d.colorScheme==="light"?7:3],d.opacity.opacity3)},a),root:Object.assign({},q[c],B(i),Object(K.c)(d),L(d)[c],{borderRadius:d.radius.medium,position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:n,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:v,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),M=e("./packages/co-design-core/src/components/Spinner/Spinner.tsx"),b=e("./node_modules/react/jsx-runtime.js"),O=["children","component","size","color","variant","fullWidth","type","disabled","leftIcon","rightIcon","loading","spinnerProps","className","co","overrideStyles"];function P(d,m){if(d==null)return{};var y=T(d,m),f,j;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(d);for(j=0;j<D.length;j++)f=D[j],!(m.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,f)||(y[f]=d[f]))}return y}function T(d,m){if(d==null)return{};var y={},f=Object.keys(d),j,D;for(D=0;D<f.length;D++)j=f[D],!(m.indexOf(j)>=0)&&(y[j]=d[j]);return y}var U=Object(Y.forwardRef)(function(d,m){var y,f=d.children,j=d.component,D=d.size,_=D===void 0?"medium":D,a=d.color,s=d.variant,c=s===void 0?"solid":s,i=d.fullWidth,g=i===void 0?!1:i,n=d.type,v=n===void 0?"button":n,t=d.disabled,r=t===void 0?!1:t,u=d.leftIcon,l=d.rightIcon,h=d.loading,E=h===void 0?!1:h,S=d.spinnerProps,C=d.className,R=d.co,A=d.overrideStyles,$=P(d,O),me=Object(X.c)(),ge=a||me.primaryColor,je=o({color:a,size:_,fullWidth:g},{overrideStyles:A,name:"Button"}),H=je.classes,le=je.cx,pe=Object(b.jsx)(M.a,Object.assign({color:c==="solid"?me.colors.white:me.palettes[ge][6],size:N.a[_]/2},S));return Object(b.jsxs)(ee.a,Object.assign({component:j||"button",ref:m,type:v,disabled:r||E,className:le((y={},y[H.loading]=E,y),H.root,H[c],C),co:R,onTouchStart:function(){}},$,{children:[Object(b.jsxs)("div",{className:H.inner,children:[u&&Object(b.jsx)("span",{className:le(H.icon,H.leftIcon),children:u}),Object(b.jsx)("span",{className:H.label,children:f}),l&&Object(b.jsx)("span",{className:le(H.icon,H.rightIcon),children:l})]}),Object(b.jsx)("div",{className:H.spinnerWrapper,children:pe})]}))});U.displayName="@co-design/core/Button"},"./packages/co-design-core/src/components/Button/stories/Button.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G}),e.d(p,"OverrideStyles",function(){return K});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Button/Button.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Button } from '../Button';

export default {
  title: '@co-design/core/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green', 'dark'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Button {...props}>Button</Button>;
};

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        solid: {
          backgroundColor: 'black',
          '&:not(:disabled):hover': {
            backgroundColor: '#222',
          },
          '&:not(:disabled):active': {
            backgroundColor: '#444',
          },
        },
      }}
    >
      Button
    </Button>
  );
};
`,oe={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},OverrideStyles:{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Button } from '../Button';

export default {
  title: '@co-design/core/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green', 'dark'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Button {...props}>Button</Button>;
};

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        solid: {
          backgroundColor: 'black',
          '&:not(:disabled):hover': {
            backgroundColor: '#222',
          },
          '&:not(:disabled):active': {
            backgroundColor: '#444',
          },
        },
      }}
    >
      Button
    </Button>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:38},endLoc:{col:1,line:40},startBody:{col:23,line:38},endBody:{col:1,line:40}},"override-styles":{startLoc:{col:30,line:42},endLoc:{col:1,line:61},startBody:{col:30,line:42},endBody:{col:1,line:61}}}}},title:"@co-design/core/Button",component:Y.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green","dark"],control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var G=function(N){return Object(X.jsx)(Y.a,Object.assign({},N,{children:"Button"}))};G.displayName="Default";var K=function(N){return Object(X.jsx)(Y.a,Object.assign({},N,{overrideStyles:{solid:{backgroundColor:"black","&:not(:disabled):hover":{backgroundColor:"#222"},"&:not(:disabled):active":{backgroundColor:"#444"}}},children:"Button"}))};K.displayName="OverrideStyles"},"./packages/co-design-core/src/components/Card/stories/Card.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return U});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),ee=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./packages/co-design-styles/src/tss/createStyles.ts"),G=Object(oe.a)(function(d,m){var y=m.padding,f=m.first,j=m.last;return{cardSection:{display:"block",marginLeft:-1*d.fn.size({size:y,sizes:d.spacing}),marginRight:-1*d.fn.size({size:y,sizes:d.spacing}),marginTop:f?-1*d.fn.size({size:y,sizes:d.spacing}):d.fn.size({size:y,sizes:d.spacing}),marginBottom:j?-1*d.fn.size({size:y,sizes:d.spacing}):d.fn.size({size:y,sizes:d.spacing})}}}),K=e("./node_modules/react/jsx-runtime.js"),W=["padding","component","first","last","className"];function N(d,m){if(d==null)return{};var y=q(d,m),f,j;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(d);for(j=0;j<D.length;j++)f=D[j],!(m.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,f)||(y[f]=d[f]))}return y}function q(d,m){if(d==null)return{};var y={},f=Object.keys(d),j,D;for(D=0;D<f.length;D++)j=f[D],!(m.indexOf(j)>=0)&&(y[j]=d[j]);return y}var L=Object(x.forwardRef)(function(d,m){var y=d.padding,f=y===void 0?0:y,j=d.component,D=d.first,_=d.last,a=d.className,s=N(d,W),c=G({padding:f,first:D,last:_},{name:"Card"}),i=c.classes,g=c.cx;return Object(K.jsx)(te.a,Object.assign({component:j||"div",className:g(i.cardSection,a),ref:m},s))});L.displayName="@co-design/core/CardSection";var k=Object(oe.a)(function(d){return{root:{position:"relative",overflow:"hidden",backgroundColor:d.colorScheme==="dark"?d.colors.gray[6]:d.colors.white}}}),B=["component","className","padding","radius","children","overrideStyles"];function o(d,m){if(d==null)return{};var y=M(d,m),f,j;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(d);for(j=0;j<D.length;j++)f=D[j],!(m.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,f)||(y[f]=d[f]))}return y}function M(d,m){if(d==null)return{};var y={},f=Object.keys(d),j,D;for(D=0;D<f.length;D++)j=f[D],!(m.indexOf(j)>=0)&&(y[j]=d[j]);return y}var b=Object(x.forwardRef)(function(d,m){var y=d.component,f=d.className,j=d.padding,D=j===void 0?"medium":j,_=d.radius,a=d.children,s=d.overrideStyles,c=o(d,B),i=k(null,{name:"Card",overrideStyles:s}),g=i.classes,n=i.cx,v=x.Children.toArray(a),t=v.map(function(r,u){return typeof r=="object"&&r&&"type"in r&&r.type===L?Object(x.cloneElement)(r,{padding:D,first:u===0,last:u===v.length-1}):r});return Object(K.jsx)(ee.a,Object.assign({className:n(g.root,f),radius:_,padding:D,component:y,ref:m},c,{children:t}))});b.Section=L,b.displayName="@co-design/core/Card";var O=`import React from 'react';
import { Card } from '../Card';

export default {
  title: '@co-design/core/Card',
  component: Card,
  argTypes: {},
};

export const Default = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card co={{ maxWidth: 400 }}>
        <Card.Section>
          <img src="https://picsum.photos/400/200" />
        </Card.Section>
        Card
      </Card>
    </div>
  );
};
`,P={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},T=p.default={parameters:{storySource:{source:`import React from 'react';
import { Card } from '../Card';

export default {
  title: '@co-design/core/Card',
  component: Card,
  argTypes: {},
};

export const Default = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card co={{ maxWidth: 400 }}>
        <Card.Section>
          <img src="https://picsum.photos/400/200" />
        </Card.Section>
        Card
      </Card>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}}}},title:"@co-design/core/Card",component:b,argTypes:{}},U=function(){return Object(K.jsx)("div",{style:{padding:24},children:Object(K.jsxs)(b,{co:{maxWidth:400},children:[Object(K.jsx)(b.Section,{children:Object(K.jsx)("img",{src:"https://picsum.photos/400/200"})}),"Card"]})})};U.displayName="Default"},"./packages/co-design-core/src/components/Center/Center.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return N});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/tss/createStyles.ts"),ee=Object(X.a)(function(q,L){var k=L.inline;return{root:{display:k?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}}),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./node_modules/react/jsx-runtime.js"),G=["inline","className","co","overrideStyles"];function K(q,L){if(q==null)return{};var k=W(q,L),B,o;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(q);for(o=0;o<M.length;o++)B=M[o],!(L.indexOf(B)>=0)&&(!Object.prototype.propertyIsEnumerable.call(q,B)||(k[B]=q[B]))}return k}function W(q,L){if(q==null)return{};var k={},B=Object.keys(q),o,M;for(M=0;M<B.length;M++)o=B[M],!(L.indexOf(o)>=0)&&(k[o]=q[o]);return k}var N=Object(Y.forwardRef)(function(q,L){var k=q.inline,B=q.className,o=q.co,M=q.overrideStyles,b=K(q,G),O=ee({inline:k},{overrideStyles:M,name:"Center"}),P=O.classes,T=O.cx;return Object(oe.jsx)(te.a,Object.assign({ref:L,className:T(P.root,B),co:o},b))});N.displayName="@co-design/core/Center"},"./packages/co-design-core/src/components/Center/stories/Center.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/Center/Center.tsx"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { Center } from '../Center';

export default {
  title: '@co-design/core/Center',
  component: Center,
};

export const Default = () => {
  return <Center co={{ width: 300, height: 300, backgroundColor: 'blue' }}>Centered</Center>;
};
`,ee={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:11},startBody:{col:23,line:9},endBody:{col:1,line:11}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Center } from '../Center';

export default {
  title: '@co-design/core/Center',
  component: Center,
};

export const Default = () => {
  return <Center co={{ width: 300, height: 300, backgroundColor: 'blue' }}>Centered</Center>;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:11},startBody:{col:23,line:9},endBody:{col:1,line:11}}}}},title:"@co-design/core/Center",component:Q.a};var te=function(){return Object(ce.jsx)(Q.a,{co:{width:300,height:300,backgroundColor:"blue"},children:"Centered"})};te.displayName="Default"},"./packages/co-design-core/src/components/Chips/stories/Chips.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return Ze}),e.d(p,"Multiple",function(){return ze});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./packages/co-design-hooks/src/useId/useId.ts"),o=e("./packages/co-design-hooks/src/useUncontrolled/useUncontrolled.ts"),M=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),b=e("./packages/co-design-core/src/components/View/View.tsx"),O=e("./node_modules/react/jsx-runtime.js"),P=["indeterminate"];function T(re,ye){if(re==null)return{};var Oe=U(re,ye),Se,z;if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(re);for(z=0;z<ae.length;z++)Se=ae[z],!(ye.indexOf(Se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(re,Se)||(Oe[Se]=re[Se]))}return Oe}function U(re,ye){if(re==null)return{};var Oe={},Se=Object.keys(re),z,ae;for(ae=0;ae<Se.length;ae++)z=Se[ae],!(ye.indexOf(z)>=0)&&(Oe[z]=re[z]);return Oe}function d(re){var ye=re.indeterminate,Oe=T(re,P);return ye?Object(O.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},Oe,{children:Object(O.jsx)("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})})):Object(O.jsx)("svg",Object.assign({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Oe,{children:Object(O.jsx)("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))}d.displayName="CheckboxIcon";var m=e("./node_modules/core-js/modules/es.string.small.js"),y=e("./packages/co-design-styles/src/tss/createStyles.ts"),f=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),j=e("./packages/co-design-core/src/utils/getFieldValue.ts"),D={xsmall:24,small:28,medium:32,large:36,xlarge:40},_={xsmall:10,small:12,medium:14,large:16,xlarge:18},a={xsmall:16,small:20,medium:24,large:28,xlarge:32},s={xsmall:7.5,small:10,medium:11.5,large:13,xlarge:15},c=Object(y.a)(function(re,ye,Oe){var Se,z,ae,fe=ye.radius,_e=ye.size,be=ye.color,Me=Oe("label"),Le=Oe("iconWrapper");return{root:{},label:Object.assign({ref:Me},Object(f.c)(re),{boxSizing:"border-box",color:re.colorScheme==="dark"?re.colors.white:re.colors.black,display:"inline-block",alignItems:"center",userSelect:"none",border:"1px solid "+(re.colorScheme==="dark"?re.palettes.gray[2]:re.palettes.gray[3]),borderRadius:Object(j.a)(fe,re.radius),height:Object(j.a)(_e,D),fontSize:Object(j.a)(_e,re.fontSizes),lineHeight:Object(j.a)(_e,D)-2+"px",paddingLeft:Object(j.a)(_e,a),paddingRight:Object(j.a)(_e,a),cursor:"pointer",whiteSpace:"nowrap",transition:"background-color 100ms ease",WebkitTapHighlightColor:"transparent",backgroundColor:re.colorScheme==="dark"?re.palettes.gray[8]:re.colors.white,"&:hover":{backgroundColor:re.colorScheme==="dark"?re.palettes.gray[8]:re.palettes.gray[0]}}),iconWrapper:{ref:Le,color:re.palettes[be][re.colorScheme==="dark"?3:5],width:Object(j.a)(_e,_),maxWidth:Object(j.a)(_e,_),height:Object(j.a)(_e,_),marginRight:re.spacing.small,display:"inline-block",verticalAlign:"middle",overflow:"hidden"},disabled:(Se={backgroundColor:(re.colorScheme==="dark"?re.palettes.gray[4]:re.palettes.gray[0])+" !important",borderColor:(re.colorScheme==="dark"?re.palettes.gray[4]:re.palettes.gray[0])+" !important",color:re.colorScheme==="dark"?re.palettes.gray[2]:re.palettes.gray[4],cursor:"not-allowed","&:hover":{backgroundColor:re.colorScheme==="dark"?re.palettes.gray[4]:re.palettes.gray[0]}},Se["& ."+Le]={color:re.colorScheme==="dark"?re.palettes.gray[2]:re.palettes.gray[4]},Se),checked:{paddingLeft:Object(j.a)(_e,s),paddingRight:Object(j.a)(_e,s),border:"1px solid "+re.palettes[be][re.colorScheme==="dark"?3:5]},checkIcon:{width:Object(j.a)(_e,_),height:Object(j.a)(_e,_)/1.1,display:"block"},input:{width:0,height:0,padding:0,opacity:0,margin:0,"&:focus":(ae={outline:"none"},ae["& + ."+Me]={outline:"none",boxShadow:"0 0 0 3px "+(re.colorScheme==="dark"?re.palettes.gray[9]:re.colors.white)+", 0 0 0 4px "+re.palettes[re.primaryColor][5]},ae["&:focus:not(:focus-visible)"]=(z={},z["& + ."+Me]={boxShadow:"none"},z),ae)}}}),i=["radius","type","size","disabled","__staticSelector","id","color","children","className","style","checked","defaultChecked","onChange","co","overrideStyles"];function g(re,ye){return u(re)||r(re,ye)||v(re,ye)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(re,ye){if(!!re){if(typeof re=="string")return t(re,ye);var Oe=Object.prototype.toString.call(re).slice(8,-1);if(Oe==="Object"&&re.constructor&&(Oe=re.constructor.name),Oe==="Map"||Oe==="Set")return Array.from(re);if(Oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Oe))return t(re,ye)}}function t(re,ye){(ye==null||ye>re.length)&&(ye=re.length);for(var Oe=0,Se=new Array(ye);Oe<ye;Oe++)Se[Oe]=re[Oe];return Se}function r(re,ye){var Oe=re==null?null:typeof Symbol!="undefined"&&re[Symbol.iterator]||re["@@iterator"];if(Oe!=null){var Se=[],z=!0,ae=!1,fe,_e;try{for(Oe=Oe.call(re);!(z=(fe=Oe.next()).done)&&(Se.push(fe.value),!(ye&&Se.length===ye));z=!0);}catch(be){ae=!0,_e=be}finally{try{!z&&Oe.return!=null&&Oe.return()}finally{if(ae)throw _e}}return Se}}function u(re){if(Array.isArray(re))return re}function l(re,ye){if(re==null)return{};var Oe=h(re,ye),Se,z;if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(re);for(z=0;z<ae.length;z++)Se=ae[z],!(ye.indexOf(Se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(re,Se)||(Oe[Se]=re[Se]))}return Oe}function h(re,ye){if(re==null)return{};var Oe={},Se=Object.keys(re),z,ae;for(ae=0;ae<Se.length;ae++)z=Se[ae],!(ye.indexOf(z)>=0)&&(Oe[z]=re[z]);return Oe}var E=Object(w.forwardRef)(function(re,ye){var Oe,Se=re.radius,z=Se===void 0?"round":Se,ae=re.type,fe=ae===void 0?"checkbox":ae,_e=re.size,be=_e===void 0?"small":_e,Me=re.disabled,Le=Me===void 0?!1:Me,Ie=re.__staticSelector,$e=Ie===void 0?"Chip":Ie,Ge=re.id,no=re.color,oo=re.children,Xe=re.className,Je=re.style,we=re.checked,Ye=re.defaultChecked,to=re.onChange,uo=re.co,ro=re.overrideStyles,lo=l(re,i),ao=Object(B.a)(Ge),so=Object(M.c)(),mo=no||so.primaryColor,io=c({radius:z,size:be,color:mo},{overrideStyles:ro,name:$e}),fo=io.classes,_o=io.cx,yo=Object(o.a)({value:we,defaultValue:Ye,finalValue:!0,onChange:to,rule:function(ho){return typeof ho=="boolean"}}),go=g(yo,2),Eo=go[0],bo=go[1];return Object(O.jsxs)(b.a,{className:_o(fo.root,Xe),style:Je,co:uo,children:[Object(O.jsx)("input",Object.assign({type:fe,className:fo.input,checked:Eo,onChange:function(ho){return bo(ho.currentTarget.checked)},id:ao,disabled:Le,ref:ye},lo)),Object(O.jsxs)("label",{htmlFor:ao,className:_o(fo.label,(Oe={},Oe[fo.checked]=Eo,Oe[fo.disabled]=Le,Oe)),children:[Eo&&Object(O.jsx)("span",{className:fo.iconWrapper,children:Object(O.jsx)(d,{indeterminate:!1,className:fo.checkIcon})}),oo]})]})});E.displayName="@co-design/core/Chip";var S=e("./node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.array.includes.js"),A=e("./node_modules/core-js/modules/es.string.includes.js"),$=e("./node_modules/core-js/modules/es.array.concat.js"),me=e("./packages/co-design-core/src/components/Group/Group.tsx"),ge=["id","children","color","spacing","radius","size","multiple","value","defaultValue","onChange"];function je(re){return pe(re)||le(re)||Z(re)||H()}function H(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(re){if(typeof Symbol!="undefined"&&re[Symbol.iterator]!=null||re["@@iterator"]!=null)return Array.from(re)}function pe(re){if(Array.isArray(re))return de(re)}function F(re,ye){return ie(re)||ne(re,ye)||Z(re,ye)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(re,ye){if(!!re){if(typeof re=="string")return de(re,ye);var Oe=Object.prototype.toString.call(re).slice(8,-1);if(Oe==="Object"&&re.constructor&&(Oe=re.constructor.name),Oe==="Map"||Oe==="Set")return Array.from(re);if(Oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Oe))return de(re,ye)}}function de(re,ye){(ye==null||ye>re.length)&&(ye=re.length);for(var Oe=0,Se=new Array(ye);Oe<ye;Oe++)Se[Oe]=re[Oe];return Se}function ne(re,ye){var Oe=re==null?null:typeof Symbol!="undefined"&&re[Symbol.iterator]||re["@@iterator"];if(Oe!=null){var Se=[],z=!0,ae=!1,fe,_e;try{for(Oe=Oe.call(re);!(z=(fe=Oe.next()).done)&&(Se.push(fe.value),!(ye&&Se.length===ye));z=!0);}catch(be){ae=!0,_e=be}finally{try{!z&&Oe.return!=null&&Oe.return()}finally{if(ae)throw _e}}return Se}}function ie(re){if(Array.isArray(re))return re}function Ce(re,ye){if(re==null)return{};var Oe=De(re,ye),Se,z;if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(re);for(z=0;z<ae.length;z++)Se=ae[z],!(ye.indexOf(Se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(re,Se)||(Oe[Se]=re[Se]))}return Oe}function De(re,ye){if(re==null)return{};var Oe={},Se=Object.keys(re),z,ae;for(ae=0;ae<Se.length;ae++)z=Se[ae],!(ye.indexOf(z)>=0)&&(Oe[z]=re[z]);return Oe}var Te=function(ye){var Oe=ye.id,Se=ye.children,z=ye.color,ae=ye.spacing,fe=ae===void 0?"small":ae,_e=ye.radius,be=_e===void 0?"medium":_e,Me=ye.size,Le=Me===void 0?"small":Me,Ie=ye.multiple,$e=ye.value,Ge=ye.defaultValue,no=ye.onChange,oo=Ce(ye,ge),Xe=Object(B.a)(Oe),Je=Object(o.a)({value:$e,defaultValue:Ge,finalValue:Ie?[]:null,onChange:no,rule:function(lo){return Ie?Array.isArray(lo):typeof lo=="string"}}),we=F(Je,2),Ye=we[0],to=we[1],uo=w.Children.toArray(Se).filter(function(ro){return ro.type===E}).map(function(ro,lo){return Q.a.cloneElement(ro,{radius:be,color:z,__staticSelector:"Chips",name:Xe,size:Le,id:Xe+"-"+lo,type:Ie?"checkbox":"radio",checked:Array.isArray(Ye)?Ye.includes(ro.props.value):ro.props.value===Ye,onChange:function(){var so=ro.props.value;Array.isArray(Ye)?to(Ye.includes(so)?Ye.filter(function(mo){return mo!==so}):[].concat(je(Ye),[so])):to(so)}})});return Object(O.jsx)(me.a,Object.assign({spacing:fe,id:Xe},oo,{children:uo}))};Te.displayName="Chips",Te.displayName="@co-design/core/Chips";var Ve=`import React from 'react';
import { Chip } from '../Chip';
import { Chips } from '../Chips';

export default {
  title: '@co-design/core/Chips',
  component: Chips,
  argTypes: {
    size: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Chips {...props}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};

export const Multiple = (props) => {
  return (
    <Chips {...props} multiple>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};
`,Ue={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:41},startBody:{col:23,line:32},endBody:{col:1,line:41}},Multiple:{startLoc:{col:24,line:43},endLoc:{col:1,line:52},startBody:{col:24,line:43},endBody:{col:1,line:52}}},Ke=p.default={parameters:{storySource:{source:`import React from 'react';
import { Chip } from '../Chip';
import { Chips } from '../Chips';

export default {
  title: '@co-design/core/Chips',
  component: Chips,
  argTypes: {
    size: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Chips {...props}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};

export const Multiple = (props) => {
  return (
    <Chips {...props} multiple>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:32},endLoc:{col:1,line:41},startBody:{col:23,line:32},endBody:{col:1,line:41}},multiple:{startLoc:{col:24,line:43},endLoc:{col:1,line:52},startBody:{col:24,line:43},endBody:{col:1,line:52}}}}},title:"@co-design/core/Chips",component:Te,argTypes:{size:{defaultValue:"small",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green"],control:{type:"inline-radio"}},spacing:{defaultValue:"small",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round"],control:{type:"inline-radio"}}}},Ze=function(ye){return Object(O.jsxs)(Te,Object.assign({},ye,{children:[Object(O.jsx)(E,{value:"react",children:"React"}),Object(O.jsx)(E,{value:"ng",children:"Angular"}),Object(O.jsx)(E,{value:"svelte",children:"Svelte"}),Object(O.jsx)(E,{value:"vue",children:"Vue"})]}))};Ze.displayName="Default";var ze=function(ye){return Object(O.jsxs)(Te,Object.assign({},ye,{multiple:!0,children:[Object(O.jsx)(E,{value:"react",children:"React"}),Object(O.jsx)(E,{value:"ng",children:"Angular"}),Object(O.jsx)(E,{value:"svelte",children:"Svelte"}),Object(O.jsx)(E,{value:"vue",children:"Vue"})]}))};ze.displayName="Multiple"},"./packages/co-design-core/src/components/Container/stories/Container.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return M});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.string.small.js"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=e("./packages/co-design-core/src/utils/getFieldValue.ts"),oe=Object(ee.a)(function(b,O){var P,T=O.size,U=O.padding,d=O.fluid,m=O.break,y=(P={},P["@media screen and (min-width: "+b.breakpoints.xlarge+"px)"]={width:b.breakpoints.xlarge},P["@media screen and (max-width: "+b.breakpoints.xlarge+"px)"]={width:b.breakpoints.large},P["@media screen and (max-width: "+b.breakpoints.large+"px)"]={width:b.breakpoints.medium},P["@media screen and (max-width: "+b.breakpoints.medium+"px)"]={width:b.breakpoints.small},P["@media screen and (max-width: "+b.breakpoints.small+"px)"]={width:b.breakpoints.xsmall},P["@media screen and (max-width: "+b.breakpoints.xsmall+"px)"]={width:"100%"},P);return{root:Object.assign({maxWidth:d?"100%":T in b.breakpoints?b.breakpoints[T]:T,marginLeft:"auto",marginRight:"auto",paddingLeft:Object(te.a)(U,b.spacing),paddingRight:Object(te.a)(U,b.spacing),boxSizing:"border-box"},m&&y)}}),G=e("./packages/co-design-core/src/components/View/View.tsx"),K=e("./node_modules/react/jsx-runtime.js"),W=["size","padding","fluid","break","className","co","overrideStyles"];function N(b,O){if(b==null)return{};var P=q(b,O),T,U;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(b);for(U=0;U<d.length;U++)T=d[U],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,T)||(P[T]=b[T]))}return P}function q(b,O){if(b==null)return{};var P={},T=Object.keys(b),U,d;for(d=0;d<T.length;d++)U=T[d],!(O.indexOf(U)>=0)&&(P[U]=b[U]);return P}var L=Object(w.forwardRef)(function(b,O){var P=b.size,T=P===void 0?"large":P,U=b.padding,d=b.fluid,m=b.break,y=b.className,f=b.co,j=b.overrideStyles,D=N(b,W),_=oe({padding:U,fluid:d,size:T,break:m},{overrideStyles:j,name:"Container"}),a=_.classes,s=_.cx;return Object(K.jsx)(G.a,Object.assign({component:"div",ref:O,className:s(a.root,y),co:f},D))});L.displayName="@co-design/core/Container";var k=`import React from 'react';
import { Container } from '../Container';

export default {
  title: '@co-design/core/Container',
  component: Container,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 0,
      control: { type: 'number' },
    },
    fluid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    break: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <Container {...props} co={(theme) => ({ backgroundColor: theme.palettes.purple[3] })}>
      Container
    </Container>
  );
};
`,B={Default:{startLoc:{col:23,line:28},endLoc:{col:1,line:34},startBody:{col:23,line:28},endBody:{col:1,line:34}}},o=p.default={parameters:{storySource:{source:`import React from 'react';
import { Container } from '../Container';

export default {
  title: '@co-design/core/Container',
  component: Container,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 0,
      control: { type: 'number' },
    },
    fluid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    break: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <Container {...props} co={(theme) => ({ backgroundColor: theme.palettes.purple[3] })}>
      Container
    </Container>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:28},endLoc:{col:1,line:34},startBody:{col:23,line:28},endBody:{col:1,line:34}}}}},title:"@co-design/core/Container",component:L,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},padding:{defaultValue:0,control:{type:"number"}},fluid:{defaultValue:!1,control:{type:"boolean"}},break:{defaultValue:!1,control:{type:"boolean"}}}},M=function(O){return Object(K.jsx)(L,Object.assign({},O,{co:function(T){return{backgroundColor:T.palettes.purple[3]}},children:"Container"}))};M.displayName="Default"},"./packages/co-design-core/src/components/Divider/Divider.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return B});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.string.small.js"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=e("./packages/co-design-core/src/utils/getFieldValue.ts"),oe={xs:1,sm:2,md:3,lg:4,xl:5},G=Object(ee.a)(function(o,M){var b=M.margin,O=M.variant,P=o.colorScheme==="light"?o.colors.lightBorder:o.colors.darkBorder;return{withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center",color:P,"&::before":{content:'""',flex:1,height:1,borderTopWidth:1,borderTopColor:P,borderTopStyle:O,marginRight:o.spacing.small},"&::after":{content:'""',flex:1,borderTopWidth:1,borderTopColor:P,borderTopStyle:O,marginLeft:o.spacing.small}},horizontal:{border:0,borderTopWidth:1,borderTopColor:P,borderTopStyle:O,margin:Object(te.a)(b,o.spacing)+"px 0"},vertical:{display:"inline-block",verticalAlign:"middle",height:o.fontSizes.medium,border:0,alignSelf:"stretch",borderLeftWidth:1,borderLeftColor:P,borderLeftStyle:O,margin:"0 "+Object(te.a)(b,o.spacing)+"px"}}}),K=e("./packages/co-design-core/src/components/View/View.tsx"),W=e("./packages/co-design-core/src/components/Text/Text.tsx"),N=e("./node_modules/react/jsx-runtime.js"),q=["variant","orientation","margin","label","labelPosition","className","co","overrideStyles"];function L(o,M){if(o==null)return{};var b=k(o,M),O,P;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(P=0;P<T.length;P++)O=T[P],!(M.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,O)||(b[O]=o[O]))}return b}function k(o,M){if(o==null)return{};var b={},O=Object.keys(o),P,T;for(T=0;T<O.length;T++)P=O[T],!(M.indexOf(P)>=0)&&(b[P]=o[P]);return b}var B=Object(Y.forwardRef)(function(o,M){var b,O=o.variant,P=O===void 0?"solid":O,T=o.orientation,U=T===void 0?"horizontal":T,d=o.margin,m=d===void 0?"medium":d,y=o.label,f=o.labelPosition,j=f===void 0?"center":f,D=o.className,_=o.co,a=o.overrideStyles,s=L(o,q),c=G({margin:m,variant:P},{overrideStyles:a,name:"Divider"}),i=c.theme,g=c.classes,n=c.cx,v=U==="vertical",t=!v,r=!!y&&t;return Object(N.jsx)(K.a,Object.assign({ref:M,className:n((b={},b[g.vertical]=v,b[g.horizontal]=t,b[g.withLabel]=r,b),D),co:_},s,{children:!!y&&t&&Object(N.jsx)(W.a,{size:"xsmall",co:{marginTop:2},className:n(g.label,g[j]),children:y})}))});B.displayName="@co-design/core/Divider"},"./packages/co-design-core/src/components/Divider/stories/Divider.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Divider/Divider.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Divider } from '../Divider';

export default {
  title: '@co-design/core/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'inline-radio' },
    },
    margin: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      defaultValue: 'center',
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <span style={{ verticalAlign: 'middle' }}>First</span>
      <Divider label="Test" {...props} />
      <span style={{ verticalAlign: 'middle' }}>Second</span>
    </>
  );
};
`,oe={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Divider } from '../Divider';

export default {
  title: '@co-design/core/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'inline-radio' },
    },
    margin: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      defaultValue: 'center',
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <span style={{ verticalAlign: 'middle' }}>First</span>
      <Divider label="Test" {...props} />
      <span style={{ verticalAlign: 'middle' }}>Second</span>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}}}},title:"@co-design/core/Divider",component:Y.a,argTypes:{orientation:{defaultValue:"horizontal",options:["horizontal","vertical"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","dashed","dotted"],control:{type:"inline-radio"}},margin:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},label:{control:{type:"text"}},labelPosition:{defaultValue:"center",options:["left","center","right"],control:{type:"inline-radio"}}}};var G=function(W){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("span",{style:{verticalAlign:"middle"},children:"First"}),Object(X.jsx)(Y.a,Object.assign({label:"Test"},W)),Object(X.jsx)("span",{style:{verticalAlign:"middle"},children:"Second"})]})}},"./packages/co-design-core/src/components/Drawer/stories/Drawer.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return F});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),q=e("./node_modules/react/index.js"),L=e("./packages/co-design-core/src/components/Button/Button.tsx"),k=e("./node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e("./packages/co-design-hooks/src/useFocusTrap/useFocusTrap.ts"),M=e("./packages/co-design-hooks/src/useScrollLock/useScrollLock.ts"),b=e("./packages/co-design-hooks/src/useFocusReturn/useFocusReturn.ts"),O=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),P=e("./packages/co-design-core/src/components/Overlay/Overlay.tsx"),T=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),U=e("./packages/co-design-core/src/components/Text/Text.tsx"),d=e("./packages/co-design-core/src/components/View/View.tsx"),m=e("./packages/co-design-core/src/components/IconButton/CloseButton.tsx"),y=e("./packages/co-design-core/src/components/Transition/GroupedTransition.tsx"),f=e("./packages/co-design-styles/src/tss/createStyles.ts"),j=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),D={xsmall:180,small:240,medium:320,large:360,xlarge:500,full:"100%"},_=function(Z){var de=Z.position,ne=Z.size,ie=Z.theme;switch(de){case"top":return{top:0,left:0,right:0,height:ie.fn.size({size:ne,sizes:D})};case"bottom":return{bottom:0,left:0,right:0,height:ie.fn.size({size:ne,sizes:D})};case"right":return{bottom:0,top:0,right:0,width:ie.fn.size({size:ne,sizes:D})};case"left":return{bottom:0,top:0,left:0,width:ie.fn.size({size:ne,sizes:D})};default:return null}},a=Object(f.a)(function(J,Z,de){var ne,ie=Z.position,Ce=Z.size,De=de("noOverlay");return{closeButton:{},overlay:{},noOverlay:{ref:De},root:(ne={},ne["&:not(."+De+")"]={position:"fixed",top:0,left:0,right:0,bottom:0},ne),drawer:Object.assign({},_({position:ie,size:Ce,theme:J}),{maxWidth:"100%",maxHeight:"100vh",position:"fixed",outline:0}),title:Object.assign({},Object(j.c)(J),{marginRight:J.spacing.medium,fontSize:J.fontSizes.xlarge,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"}),header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:J.spacing.medium}}}),s=e("./node_modules/react/jsx-runtime.js"),c=["opened","title","position","size","noFocusTrap","noScrollLock","noCloseOnClickOutside","noCloseOnEscape","transition","transitionDuration","transitionTimingFunction","zIndex","overlayColor","overlayOpacity","children","noOverlay","shadow","padding","hideCloseButton","onClose","className","overrideStyles"],i=["zIndex","target"];function g(J,Z){return u(J)||r(J,Z)||v(J,Z)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(J,Z){if(!!J){if(typeof J=="string")return t(J,Z);var de=Object.prototype.toString.call(J).slice(8,-1);if(de==="Object"&&J.constructor&&(de=J.constructor.name),de==="Map"||de==="Set")return Array.from(J);if(de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de))return t(J,Z)}}function t(J,Z){(Z==null||Z>J.length)&&(Z=J.length);for(var de=0,ne=new Array(Z);de<Z;de++)ne[de]=J[de];return ne}function r(J,Z){var de=J==null?null:typeof Symbol!="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(de!=null){var ne=[],ie=!0,Ce=!1,De,Te;try{for(de=de.call(J);!(ie=(De=de.next()).done)&&(ne.push(De.value),!(Z&&ne.length===Z));ie=!0);}catch(Ve){Ce=!0,Te=Ve}finally{try{!ie&&de.return!=null&&de.return()}finally{if(Ce)throw Te}}return ne}}function u(J){if(Array.isArray(J))return J}function l(J,Z){if(J==null)return{};var de=h(J,Z),ne,ie;if(Object.getOwnPropertySymbols){var Ce=Object.getOwnPropertySymbols(J);for(ie=0;ie<Ce.length;ie++)ne=Ce[ie],!(Z.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(J,ne)||(de[ne]=J[ne]))}return de}function h(J,Z){if(J==null)return{};var de={},ne=Object.keys(J),ie,Ce;for(Ce=0;Ce<ne.length;Ce++)ie=ne[Ce],!(Z.indexOf(ie)>=0)&&(de[ie]=J[ie]);return de}var E={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},S=function(Z){var de=Z.opened,ne=Z.title,ie=Z.position,Ce=ie===void 0?"left":ie,De=Z.size,Te=De===void 0?"medium":De,Ve=Z.noFocusTrap,Ue=Ve===void 0?!1:Ve,Ke=Z.noScrollLock,Ze=Ke===void 0?!1:Ke,ze=Z.noCloseOnClickOutside,re=ze===void 0?!1:ze,ye=Z.noCloseOnEscape,Oe=ye===void 0?!1:ye,Se=Z.transition,z=Z.transitionDuration,ae=z===void 0?250:z,fe=Z.transitionTimingFunction,_e=fe===void 0?"ease":fe,be=Z.zIndex,Me=be===void 0?"modal":be,Le=Z.overlayColor,Ie=Z.overlayOpacity,$e=Z.children,Ge=Z.noOverlay,no=Ge===void 0?!1:Ge,oo=Z.shadow,Xe=oo===void 0?"medium":oo,Je=Z.padding,we=Je===void 0?"medium":Je,Ye=Z.hideCloseButton,to=Z.onClose,uo=Z.className,ro=Z.overrideStyles,lo=l(Z,c),ao=a({size:Te,position:Ce},{overrideStyles:ro,name:"Drawer"}),so=ao.classes,mo=ao.cx,io=ao.theme,fo=Object(o.a)(!Ue&&de),_o=Object(M.a)(),yo=g(_o,2),go=yo[1],Eo=Se||E[Ce],bo=typeof Ie=="number"?Ie:io.colorScheme==="dark"?.85:.75,Co=function(Io){Ue&&Io.code==="Escape"&&!Oe&&to()};return Object(q.useEffect)(function(){if(Ue)return window.addEventListener("keydown",Co),function(){return window.removeEventListener("keydown",Co)}},[Ue]),Object(b.a)({opened:de,transitionDuration:ae}),Object(s.jsx)(y.a,{onExited:function(){return go(!1)},onEntered:function(){return go(!Ze&&!0)},mounted:de,transitions:{overlay:{duration:ae/2,transition:"fade",timingFunction:"ease"},drawer:{duration:ae,transition:Eo,timingFunction:_e}},children:function(Io){var Oo;return Object(s.jsxs)(d.a,Object.assign({className:mo(so.root,(Oo={},Oo[so.noOverlay]=no,Oo),uo),role:"dialog","aria-modal":!0,onMouseDown:function(){return!re&&to()}},lo,{children:[Object(s.jsxs)(O.a,{onMouseDown:function(Lo){return Lo.stopPropagation()},className:mo(so.drawer,uo),ref:fo,style:Object.assign({},Io.drawer,{zIndex:(Me in io.zIndex?io.zIndex[Me]:Me)+2}),radius:0,tabIndex:-1,onKeyDownCapture:function(Lo){return Lo.nativeEvent.code==="Escape"&&!Oe&&to()},shadow:Xe,padding:we,withBorder:!1,children:[(ne||!Ye)&&Object(s.jsxs)("div",{className:so.header,children:[Object(s.jsx)(U.a,{strong:!0,className:so.title,children:ne}),!Ye&&Object(s.jsx)(m.a,{variant:"text",color:"gray",size:"small",onClick:to,className:so.closeButton})]}),$e]}),!no&&Object(s.jsx)("div",{style:Io.overlay,children:Object(s.jsx)(P.a,{className:so.overlay,opacity:bo,zIndex:Me,color:Le||(io.colorScheme==="dark"?io.palettes.gray[9]:io.colors.black)})})]}))}})};S.displayName="CoDrawer";var C=function(Z){var de=Z.zIndex,ne=de===void 0?"modal":de,ie=Z.target,Ce=l(Z,i);return Object(s.jsx)(T.a,{zIndex:ne,target:ie,children:Object(s.jsx)(S,Object.assign({},Ce))})};C.displayName="Drawer",C.displayName="@co-design/core/Drawer";function R(J,Z){return je(J)||ge(J,Z)||$(J,Z)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(J,Z){if(!!J){if(typeof J=="string")return me(J,Z);var de=Object.prototype.toString.call(J).slice(8,-1);if(de==="Object"&&J.constructor&&(de=J.constructor.name),de==="Map"||de==="Set")return Array.from(J);if(de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de))return me(J,Z)}}function me(J,Z){(Z==null||Z>J.length)&&(Z=J.length);for(var de=0,ne=new Array(Z);de<Z;de++)ne[de]=J[de];return ne}function ge(J,Z){var de=J==null?null:typeof Symbol!="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(de!=null){var ne=[],ie=!0,Ce=!1,De,Te;try{for(de=de.call(J);!(ie=(De=de.next()).done)&&(ne.push(De.value),!(Z&&ne.length===Z));ie=!0);}catch(Ve){Ce=!0,Te=Ve}finally{try{!ie&&de.return!=null&&de.return()}finally{if(Ce)throw Te}}return ne}}function je(J){if(Array.isArray(J))return J}var H=`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Button } from '../../Button';
import { Drawer } from '../Drawer';

export default {
  title: '@co-design/core/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      defaultValue: 'right',
      options: ['left', 'top', 'bottom', 'right'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'],
      control: { type: 'inline-radio' },
    },
    shadow: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    noFocusTrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noScrollLock: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnClickOutside: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnEscape: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    trannsition: {
      options: [
        'fade',
        'skew-up',
        'skew-down',
        'rotate-right',
        'rotate-left',
        'slide-down',
        'slide-up',
        'slide-right',
        'slide-left',
        'scale-y',
        'scale-x',
        'scale',
        'pop',
        'pop-top-left',
        'pop-top-right',
        'pop-bottom-left',
        'pop-bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    transitionDuration: {
      control: { type: 'number' },
    },
    noOverlay: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    overlayOpacity: {
      control: { type: 'number' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
    hideCloseButton: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  const [opened, toggleOpened] = useToggle();

  return (
    <>
      <Button onClick={toggleOpened}>Open</Button>
      <Drawer {...props} title="Drawer" opened={opened} onClose={() => toggleOpened(false)}>
        Hello, World!
      </Drawer>
    </>
  );
};
`,le={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:99},startBody:{col:23,line:88},endBody:{col:1,line:99}}},pe=p.default={parameters:{storySource:{source:`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Button } from '../../Button';
import { Drawer } from '../Drawer';

export default {
  title: '@co-design/core/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      defaultValue: 'right',
      options: ['left', 'top', 'bottom', 'right'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'],
      control: { type: 'inline-radio' },
    },
    shadow: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    noFocusTrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noScrollLock: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnClickOutside: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnEscape: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    trannsition: {
      options: [
        'fade',
        'skew-up',
        'skew-down',
        'rotate-right',
        'rotate-left',
        'slide-down',
        'slide-up',
        'slide-right',
        'slide-left',
        'scale-y',
        'scale-x',
        'scale',
        'pop',
        'pop-top-left',
        'pop-top-right',
        'pop-bottom-left',
        'pop-bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    transitionDuration: {
      control: { type: 'number' },
    },
    noOverlay: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    overlayOpacity: {
      control: { type: 'number' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
    hideCloseButton: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  const [opened, toggleOpened] = useToggle();

  return (
    <>
      <Button onClick={toggleOpened}>Open</Button>
      <Drawer {...props} title="Drawer" opened={opened} onClose={() => toggleOpened(false)}>
        Hello, World!
      </Drawer>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:99},startBody:{col:23,line:88},endBody:{col:1,line:99}}}}},title:"@co-design/core/Drawer",component:C,argTypes:{position:{defaultValue:"right",options:["left","top","bottom","right"],control:{type:"inline-radio"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge","full"],control:{type:"inline-radio"}},shadow:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},padding:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},noFocusTrap:{defaultValue:!1,control:{type:"boolean"}},noScrollLock:{defaultValue:!1,control:{type:"boolean"}},noCloseOnClickOutside:{defaultValue:!1,control:{type:"boolean"}},noCloseOnEscape:{defaultValue:!1,control:{type:"boolean"}},trannsition:{options:["fade","skew-up","skew-down","rotate-right","rotate-left","slide-down","slide-up","slide-right","slide-left","scale-y","scale-x","scale","pop","pop-top-left","pop-top-right","pop-bottom-left","pop-bottom-right"],control:{type:"inline-radio"}},transitionDuration:{control:{type:"number"}},noOverlay:{defaultValue:!1,control:{type:"boolean"}},overlayOpacity:{control:{type:"number"}},overlayColor:{control:{type:"color"}},hideCloseButton:{defaultValue:!1,control:{type:"boolean"}}}},F=function(Z){var de=Object(N.a)(),ne=R(de,2),ie=ne[0],Ce=ne[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(L.a,{onClick:Ce,children:"Open"}),Object(s.jsx)(C,Object.assign({},Z,{title:"Drawer",opened:ie,onClose:function(){return Ce(!1)},children:"Hello, World!"}))]})}},"./packages/co-design-core/src/components/EquallyGrid/stories/EquallyGrid.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./packages/co-design-core/src/components/View/View.tsx"),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.array.sort.js"),te=e("./node_modules/core-js/modules/es.array.reverse.js"),oe=e("./node_modules/core-js/modules/es.array.reduce.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),W=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),o=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e("./packages/co-design-styles/src/tss/createStyles.ts"),O=e("./packages/co-design-core/src/utils/getFieldValue.ts");function P(r){return m(r)||d(r)||U(r)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(r,u){if(!!r){if(typeof r=="string")return y(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return y(r,u)}}function d(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function m(r){if(Array.isArray(r))return y(r)}function y(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}var f=function(u,l){if(l.length===0)return l;var h="maxWidth"in l[0]?"maxWidth":"minWidth",E=P(l).sort(function(S,C){return Object(O.a)(C[h],u.breakpoints)-Object(O.a)(S[h],u.breakpoints)});return h==="minWidth"?E.reverse():E},j=Object(b.a)(function(r,u){var l=u.cols,h=u.spacing,E=u.breakpoints,S=f(r,E).reduce(function(C,R){var A="maxWidth"in R?"max-width":"min-width",$=Object(O.a)(A==="max-width"?R.maxWidth:R.minWidth,r.breakpoints),me=R.spacing||h;return C["@media ("+A+": "+($+(A==="max-width"?0:1))+"px)"]={gridTemplateColumns:"repeat("+R.cols+", minmax(0, 1fr))",gap:Object(O.a)(me,r.spacing)},C},{});return{root:Object.assign({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat("+l+", minmax(0, 1fr))",gap:Object(O.a)(h,r.spacing)},S)}}),D=e("./node_modules/react/jsx-runtime.js"),_=["children","cols","spacing","breakpoints","className","co","overrideStyles"];function a(r,u){if(r==null)return{};var l=s(r,u),h,E;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(r);for(E=0;E<S.length;E++)h=S[E],!(u.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,h)||(l[h]=r[h]))}return l}function s(r,u){if(r==null)return{};var l={},h=Object.keys(r),E,S;for(S=0;S<h.length;S++)E=h[S],!(u.indexOf(E)>=0)&&(l[E]=r[E]);return l}var c=Object(w.forwardRef)(function(r,u){var l=r.children,h=r.cols,E=r.spacing,S=E===void 0?"medium":E,C=r.breakpoints,R=C===void 0?[]:C,A=r.className,$=r.co,me=r.overrideStyles,ge=a(r,_),je=j({breakpoints:R,cols:h,spacing:S},{overrideStyles:me,name:"EquallyGrid"}),H=je.classes,le=je.cx;return Object(D.jsx)(Q.a,Object.assign({ref:u,className:le(H.root,A),co:$},ge,{children:l}))});c.displayName="@co-design/core/EquallyGrid";var i=`import React from 'react';
import { View } from '../../View';
import { EquallyGrid } from '../EquallyGrid';

export default {
  title: '@co-design/core/EquallyGrid',
  component: EquallyGrid,
  argTypes: {
    cols: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', height: 100 })} />;
};

export const Default = (props) => {
  return (
    <div>
      <EquallyGrid {...props}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </EquallyGrid>
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:25},endLoc:{col:1,line:40},startBody:{col:23,line:25},endBody:{col:1,line:40}}},n=p.default={parameters:{storySource:{source:`import React from 'react';
import { View } from '../../View';
import { EquallyGrid } from '../EquallyGrid';

export default {
  title: '@co-design/core/EquallyGrid',
  component: EquallyGrid,
  argTypes: {
    cols: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', height: 100 })} />;
};

export const Default = (props) => {
  return (
    <div>
      <EquallyGrid {...props}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </EquallyGrid>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:25},endLoc:{col:1,line:40},startBody:{col:23,line:25},endBody:{col:1,line:40}}}}},title:"@co-design/core/EquallyGrid",component:c,argTypes:{cols:{defaultValue:3,control:{type:"number"}},spacing:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}}}},v=function(){return Object(D.jsx)(Q.a,{co:function(l){return{backgroundColor:l.primaryColor,width:"100%",height:100}}})};v.displayName="Box";var t=function(u){return Object(D.jsx)("div",{children:Object(D.jsxs)(c,Object.assign({},u,{children:[Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{}),Object(D.jsx)(v,{})]}))})};t.displayName="Default"},"./packages/co-design-core/src/components/Grid/stories/Grid.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return i});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./packages/co-design-core/src/components/View/View.tsx"),Y=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),oe=e("./packages/co-design-styles/src/tss/createStyles.ts"),G=e("./packages/co-design-core/src/utils/getFieldValue.ts"),K=Object(oe.a)(function(g,n){var v=n.justify,t=n.align,r=n.spacing;return{root:{margin:-Object(G.a)(r,g.spacing)/2,display:"flex",flexWrap:"wrap",justifyContent:v,alignItems:t}}}),W=e("./node_modules/react/jsx-runtime.js"),N=["children","spacing","grow","justify","align","columns","className","co","overrideStyles"];function q(g,n){if(g==null)return{};var v=L(g,n),t,r;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(g);for(r=0;r<u.length;r++)t=u[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,t)||(v[t]=g[t]))}return v}function L(g,n){if(g==null)return{};var v={},t=Object.keys(g),r,u;for(u=0;u<t.length;u++)r=t[u],!(n.indexOf(r)>=0)&&(v[r]=g[r]);return v}var k=Object(w.forwardRef)(function(g,n){var v=g.children,t=g.spacing,r=t===void 0?"medium":t,u=g.grow,l=u===void 0?!1:u,h=g.justify,E=h===void 0?"flex-start":h,S=g.align,C=S===void 0?"stretch":S,R=g.columns,A=R===void 0?12:R,$=g.className,me=g.co,ge=g.overrideStyles,je=q(g,N),H=K({spacing:r,justify:E,align:C},{overrideStyles:ge,name:"Grid"}),le=H.classes,pe=H.cx,F=w.Children.toArray(v).map(function(J,Z){return Q.a.cloneElement(J,{spacing:r,grow:l,columns:A,key:Z})});return Object(W.jsx)(ce.a,Object.assign({ref:n,className:pe(le.root,$),co:me},je,{children:F}))});k.displayName="@co-design/core/Grid";var B=e("./node_modules/core-js/modules/es.string.small.js"),o=e("./node_modules/core-js/modules/es.array.reduce.js"),M=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),b=function(n,v){return 100/(v/n)+"%"},O=function(n,v){return n?100/(v/n)+"%":void 0};function P(g){var n=g.sizes,v=g.offsets,t=g.theme,r=g.columns,u=g.grow;return M.a.reduce(function(l,h){return typeof n[h]=="number"&&(l["@media (min-width: "+(t.breakpoints[h]+1)+"px)"]={flexBasis:b(n[h],r),flexShrink:0,maxWidth:u?"unset":b(n[h],r),marginLeft:O(v[h],r)}),l},{})}var T=Object(oe.a)(function(g,n){var v=n.spacing,t=n.grow,r=n.offset,u=n.offsetXs,l=n.offsetSm,h=n.offsetMd,E=n.offsetLg,S=n.offsetXl,C=n.columns,R=n.span,A=n.xsmall,$=n.small,me=n.medium,ge=n.large,je=n.xlarge;return{root:Object.assign({boxSizing:"border-box",flexGrow:t?1:0,padding:Object(G.a)(v,g.spacing)/2,marginLeft:O(r,C),flexBasis:b(R,C),flexShrink:0,maxWidth:t?"unset":b(R,C)},P({sizes:{xsmall:A,small:$,medium:me,large:ge,xlarge:je},offsets:{xsmall:u,small:l,medium:h,large:E,xlarge:S},theme:g,columns:C,grow:t}))}}),U=["children","span","spacing","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","grow","xsmall","small","medium","large","xlarge","columns","className","co","overrideStyles"];function d(g,n){if(g==null)return{};var v=m(g,n),t,r;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(g);for(r=0;r<u.length;r++)t=u[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,t)||(v[t]=g[t]))}return v}function m(g,n){if(g==null)return{};var v={},t=Object.keys(g),r,u;for(u=0;u<t.length;u++)r=t[u],!(n.indexOf(r)>=0)&&(v[r]=g[r]);return v}function y(g){return typeof g=="number"&&g>0&&g%1===0}var f=function(n,v){return 100/(v/n)+"%"};function j(g){var n=g.children,v=g.span,t=g.spacing,r=g.offset,u=r===void 0?0:r,l=g.offsetXs,h=l===void 0?0:l,E=g.offsetSm,S=E===void 0?0:E,C=g.offsetMd,R=C===void 0?0:C,A=g.offsetLg,$=A===void 0?0:A,me=g.offsetXl,ge=me===void 0?0:me,je=g.grow,H=g.xsmall,le=g.small,pe=g.medium,F=g.large,J=g.xlarge,Z=g.columns,de=g.className,ne=g.co,ie=g.overrideStyles,Ce=d(g,U),De=T({spacing:t,offset:u,offsetXs:h,offsetSm:S,offsetMd:R,offsetLg:$,offsetXl:ge,xsmall:H,small:le,medium:pe,large:F,xlarge:J,grow:je,columns:Z,span:v},{overrideStyles:ie,name:"Col"}),Te=De.classes,Ve=De.cx;return!y(v)||v>Z?null:Object(W.jsx)(ce.a,Object.assign({className:Ve(Te.root,de),co:ne},Ce,{children:n}))}j.displayName="Col",j.displayName="@co-design/core/Col";var D=`import React from 'react';
import { View } from '../../View';
import { Grid } from '../Grid';
import { Col } from '../Col';

export default {
  title: '@co-design/core/Grid',
  component: Grid,
  argTypes: {
    columns: {
      defaultValue: 12,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    justify: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box1 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', minHeight: 100 })} />;
};

const Box2 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.palettes.blue[6], width: '100%', minHeight: 150 })} />;
};

export const Default = (props) => {
  return (
    <div>
      <Grid {...props}>
        <Col span={3}>
          <Box1 />
        </Col>
        <Col span={4}>
          <Box1 />
        </Col>
        <Col span={3}>
          <Box2 />
        </Col>
        <Col span={4}>
          <Box1 />
        </Col>
        <Col span={5}>
          <Box2 />
        </Col>
        <Col span={2}>
          <Box1 />
        </Col>
        <Col span={5}>
          <Box2 />
        </Col>
        <Col span={2}>
          <Box1 />
        </Col>
        <Col span={12}>
          <Box2 />
        </Col>
      </Grid>
    </div>
  );
};
`,_={Default:{startLoc:{col:23,line:44},endLoc:{col:1,line:78},startBody:{col:23,line:44},endBody:{col:1,line:78}}},a=p.default={parameters:{storySource:{source:`import React from 'react';
import { View } from '../../View';
import { Grid } from '../Grid';
import { Col } from '../Col';

export default {
  title: '@co-design/core/Grid',
  component: Grid,
  argTypes: {
    columns: {
      defaultValue: 12,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    justify: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box1 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', minHeight: 100 })} />;
};

const Box2 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.palettes.blue[6], width: '100%', minHeight: 150 })} />;
};

export const Default = (props) => {
  return (
    <div>
      <Grid {...props}>
        <Col span={3}>
          <Box1 />
        </Col>
        <Col span={4}>
          <Box1 />
        </Col>
        <Col span={3}>
          <Box2 />
        </Col>
        <Col span={4}>
          <Box1 />
        </Col>
        <Col span={5}>
          <Box2 />
        </Col>
        <Col span={2}>
          <Box1 />
        </Col>
        <Col span={5}>
          <Box2 />
        </Col>
        <Col span={2}>
          <Box1 />
        </Col>
        <Col span={12}>
          <Box2 />
        </Col>
      </Grid>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:44},endLoc:{col:1,line:78},startBody:{col:23,line:44},endBody:{col:1,line:78}}}}},title:"@co-design/core/Grid",component:k,argTypes:{columns:{defaultValue:12,control:{type:"number"}},spacing:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},grow:{defaultValue:!1,control:{type:"boolean"}},justify:{defaultValue:"start",options:["start","center","end"],control:{type:"inline-radio"}},align:{defaultValue:"start",options:["start","center","end"],control:{type:"inline-radio"}}}},s=function(){return Object(W.jsx)(ce.a,{co:function(v){return{backgroundColor:v.primaryColor,width:"100%",minHeight:100}}})};s.displayName="Box1";var c=function(){return Object(W.jsx)(ce.a,{co:function(v){return{backgroundColor:v.palettes.blue[6],width:"100%",minHeight:150}}})};c.displayName="Box2";var i=function(n){return Object(W.jsx)("div",{children:Object(W.jsxs)(k,Object.assign({},n,{children:[Object(W.jsx)(j,{span:3,children:Object(W.jsx)(s,{})}),Object(W.jsx)(j,{span:4,children:Object(W.jsx)(s,{})}),Object(W.jsx)(j,{span:3,children:Object(W.jsx)(c,{})}),Object(W.jsx)(j,{span:4,children:Object(W.jsx)(s,{})}),Object(W.jsx)(j,{span:5,children:Object(W.jsx)(c,{})}),Object(W.jsx)(j,{span:2,children:Object(W.jsx)(s,{})}),Object(W.jsx)(j,{span:5,children:Object(W.jsx)(c,{})}),Object(W.jsx)(j,{span:2,children:Object(W.jsx)(s,{})}),Object(W.jsx)(j,{span:12,children:Object(W.jsx)(c,{})})]}))})};i.displayName="Default"},"./packages/co-design-core/src/components/Group/Group.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return B});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),ee=e.n(X),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./packages/co-design-styles/src/tss/createStyles.ts"),G=e("./packages/co-design-core/src/utils/getFieldValue.ts"),K={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},W=Object(oe.a)(function(o,M){var b=M.inline,O=M.spacing,P=M.position,T=M.noWrap,U=M.direction,d=M.grow,m=M.align,y=M.count,f=Object(G.a)(O,o.spacing);return{root:{boxSizing:"border-box",display:b?"inline-flex":"flex",flexDirection:U,alignItems:m||(U==="row"?"center":d?"stretch":P==="apart"?"flex-start":K[P]),flexWrap:T?"nowrap":"wrap",justifyContent:U==="row"?K[P]:void 0,gap:f},child:{boxSizing:"border-box",maxWidth:d&&U==="row"?"calc("+100/y+"% - "+(f-f/y)+"px)":void 0,flexGrow:d?1:0}}}),N=e("./node_modules/react/jsx-runtime.js"),q=["children","inline","position","align","noWrap","grow","spacing","direction","className","co","overrideStyles"];function L(o,M){if(o==null)return{};var b=k(o,M),O,P;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(P=0;P<T.length;P++)O=T[P],!(M.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,O)||(b[O]=o[O]))}return b}function k(o,M){if(o==null)return{};var b={},O=Object.keys(o),P,T;for(T=0;T<O.length;T++)P=O[T],!(M.indexOf(P)>=0)&&(b[P]=o[P]);return b}var B=Object(X.forwardRef)(function(o,M){var b=o.children,O=o.inline,P=O===void 0?!1:O,T=o.position,U=T===void 0?"left":T,d=o.align,m=o.noWrap,y=m===void 0?!1:m,f=o.grow,j=f===void 0?!1:f,D=o.spacing,_=D===void 0?"medium":D,a=o.direction,s=a===void 0?"row":a,c=o.className,i=o.co,g=o.overrideStyles,n=L(o,q),v=X.Children.count(b),t=W({inline:P,align:d,grow:j,noWrap:y,spacing:_,position:U,direction:s,count:v},{overrideStyles:g,name:"Group"}),r=t.classes,u=t.cx,l=X.Children.toArray(b).map(function(h){return ee.a.cloneElement(h,{className:u(r.child,h.props.className)})});return Object(N.jsx)(te.a,Object.assign({ref:M,className:u(r.root,c),co:i},n,{children:l}))});B.displayName="@co-design/core/Group"},"./packages/co-design-core/src/components/Group/stories/Group.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Group/Group.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Group } from '../Group';

export default {
  title: '@co-design/core/Group',
  component: Group,
  argTypes: {
    position: {
      defaultValue: 'left',
      options: ['left', 'center', 'right', 'apart'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'align',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noWrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <Group {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Group>
    </>
  );
};
`,oe={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:54},startBody:{col:23,line:43},endBody:{col:1,line:54}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Group } from '../Group';

export default {
  title: '@co-design/core/Group',
  component: Group,
  argTypes: {
    position: {
      defaultValue: 'left',
      options: ['left', 'center', 'right', 'apart'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'align',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noWrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <Group {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Group>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:54},startBody:{col:23,line:43},endBody:{col:1,line:54}}}}},title:"@co-design/core/Group",component:Y.a,argTypes:{position:{defaultValue:"left",options:["left","center","right","apart"],control:{type:"inline-radio"}},align:{defaultValue:"align",options:["start","center","end"],control:{type:"inline-radio"}},spacing:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},direction:{defaultValue:"row",options:["row","column"],control:{type:"inline-radio"}},inline:{defaultValue:!1,control:{type:"boolean"}},grow:{defaultValue:!1,control:{type:"boolean"}},noWrap:{defaultValue:!1,control:{type:"boolean"}}}};var G=function(W){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(Y.a,Object.assign({},W,{children:[Object(X.jsx)("div",{style:{width:100,height:100,backgroundColor:"red"}}),Object(X.jsx)("div",{style:{width:150,height:100,backgroundColor:"blue"}}),Object(X.jsx)("div",{style:{width:100,height:200,backgroundColor:"green"}}),Object(X.jsx)("div",{style:{width:200,height:150,backgroundColor:"gray"}})]}))})}},"./packages/co-design-core/src/components/Heading/Heading.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return q});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/tss/createStyles.ts"),ee=Object(X.a)(function(L,k){var B=k.inline,o=k.color;return{root:{display:B?"inline":"block",margin:0,color:o in L.palettes?L.palettes[o][L.colorScheme==="light"?5:3]:o in L.colors?L.colors[o]:o},h1:Object.assign({},L.headings.h1),h2:Object.assign({},L.headings.h2),h3:Object.assign({},L.headings.h3),h4:Object.assign({},L.headings.h4),h5:Object.assign({},L.headings.h5),h6:Object.assign({},L.headings.h6)}}),te=function(k,B){return console.warn("%c "+k+`

`,"font-weight: bold; font-size: 16px;",B)},oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./node_modules/react/jsx-runtime.js"),K=["children","level","inline","strong","underline","color","align","style","className","co","overrideStyles"];function W(L,k){if(L==null)return{};var B=N(L,k),o,M;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(L);for(M=0;M<b.length;M++)o=b[M],!(k.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,o)||(B[o]=L[o]))}return B}function N(L,k){if(L==null)return{};var B={},o=Object.keys(L),M,b;for(b=0;b<o.length;b++)M=o[b],!(k.indexOf(M)>=0)&&(B[M]=L[M]);return B}var q=Object(Y.forwardRef)(function(L,k){var B=L.children,o=L.level,M=o===void 0?1:o,b=L.inline,O=b===void 0?!1:b,P=L.strong,T=P===void 0?!1:P,U=L.underline,d=U===void 0?!1:U,m=L.color,y=L.align,f=L.style,j=L.className,D=L.co,_=L.overrideStyles,a=W(L,K),s=ee({inline:O,color:m},{overrideStyles:_,name:"Heading"}),c=s.classes,i=s.cx,g="h"+M;return(M<1||M>7)&&(te("Heading","Heading only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value."),g="h1"),Object(G.jsx)(oe.a,Object.assign({ref:k,className:i(c.root,c["h"+M],j),co:D,style:Object.assign({fontWeight:typeof T=="boolean"?T?"bold":"normal":T,textAlign:y,textDecoration:d?"underline":void 0},f)},a,{children:B}))});q.displayName="@co-design/core/Heading"},"./packages/co-design-core/src/components/Heading/stories/Heading.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Heading/Heading.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Heading } from '../Heading';

export default {
  title: '@co-design/core/Heading',
  component: Heading,
  argTypes: {
    level: {
      defaultValue: 1,
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Heading {...props}>Heading</Heading>;
};
`,oe={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Heading } from '../Heading';

export default {
  title: '@co-design/core/Heading',
  component: Heading,
  argTypes: {
    level: {
      defaultValue: 1,
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Heading {...props}>Heading</Heading>;
};
`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@co-design/core/Heading",component:Y.a,argTypes:{level:{defaultValue:1,options:[1,2,3,4,5,6],control:{type:"inline-radio"}},inline:{defaultValue:!1,control:{type:"boolean"}},strong:{defaultValue:!1,control:{type:"boolean"}},underline:{defaultValue:!1,control:{type:"boolean"}},align:{options:["left","center","right"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var G=function(W){return Object(X.jsx)(Y.a,Object.assign({},W,{children:"Heading"}))};G.displayName="Default"},"./packages/co-design-core/src/components/Highlight/stories/Highlight.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return f});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),ee=e("./packages/co-design-core/src/components/Text/Text.tsx"),te=e("./packages/co-design-core/src/components/Mark/Mark.tsx"),oe=e("./node_modules/core-js/modules/es.string.replace.js"),G=e("./node_modules/core-js/modules/es.regexp.exec.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.array.filter.js"),N=e("./node_modules/core-js/modules/es.string.trim.js"),q=e("./node_modules/core-js/modules/es.array.join.js"),L=e("./node_modules/core-js/modules/es.regexp.constructor.js"),k=e("./node_modules/core-js/modules/es.regexp.to-string.js"),B=e("./node_modules/core-js/modules/es.string.split.js"),o=function(D){return D.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")},M=function(D,_){var a=Array.isArray(_)?_.map(o):o(_),s=Array.isArray(a)?a.filter(function(n){return n.trim().length>0}).length>0:a.trim()!=="";if(!s)return[{chunk:D,highlighted:!1}];var c=typeof a=="string"?a.trim():a.filter(function(n){return n.trim().length!==0}).map(function(n){return n.trim()}).join("|"),i=new RegExp("("+c+")","gi"),g=D.split(i).map(function(n){return{chunk:n,highlighted:i.test(n)}}).filter(function(n){var v=n.chunk;return v});return g},b=e("./node_modules/react/jsx-runtime.js"),O=["children","highlight","highlightColor","component","highlightStyles"];function P(j,D){if(j==null)return{};var _=T(j,D),a,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(j);for(s=0;s<c.length;s++)a=c[s],!(D.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(j,a)||(_[a]=j[a]))}return _}function T(j,D){if(j==null)return{};var _={},a=Object.keys(j),s,c;for(c=0;c<a.length;c++)s=a[c],!(D.indexOf(s)>=0)&&(_[s]=j[s]);return _}var U=Object(x.forwardRef)(function(j,D){var _=j.children,a=j.highlight,s=j.highlightColor,c=j.component,i=j.highlightStyles,g=P(j,O),n=M(_,a);return Object(b.jsx)(ee.a,Object.assign({component:c,ref:D},g,{children:n.map(function(v,t){var r=v.chunk,u=v.highlighted;return u?Object(b.jsx)(te.a,{color:s,co:i,children:r},t):Object(b.jsx)("span",{children:r},t)})}))});U.displayName="@co-design/core/Highlight";var d=`import React from 'react';
import { Highlight } from '../Highlight';

export default {
  title: '@co-design/core/Highlight',
  component: Highlight,
};

export const Default = () => {
  return (
    <div>
      <Highlight highlight={['Lorem', 'amet']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Highlight>
    </div>
  );
};
`,m={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}},y=p.default={parameters:{storySource:{source:`import React from 'react';
import { Highlight } from '../Highlight';

export default {
  title: '@co-design/core/Highlight',
  component: Highlight,
};

export const Default = () => {
  return (
    <div>
      <Highlight highlight={['Lorem', 'amet']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Highlight>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}}}},title:"@co-design/core/Highlight",component:U},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(U,{highlight:["Lorem","amet"],children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})};f.displayName="Default"},"./packages/co-design-core/src/components/IconButton/CloseButton.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return W});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-core/src/components/IconButton/IconButton.tsx"),ee=e("./node_modules/react/jsx-runtime.js"),te=function(q){return Object(ee.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q,{children:Object(ee.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};te.displayName="CloseIcon",te.displayName="@co-design/core/CloseIcon";var oe=["size","color"];function G(N,q){if(N==null)return{};var L=K(N,q),k,B;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(N);for(B=0;B<o.length;B++)k=o[B],!(q.indexOf(k)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,k)||(L[k]=N[k]))}return L}function K(N,q){if(N==null)return{};var L={},k=Object.keys(N),B,o;for(o=0;o<k.length;o++)B=k[o],!(q.indexOf(B)>=0)&&(L[B]=N[B]);return L}var W=Object(Y.forwardRef)(function(N,q){var L=N.size,k=L===void 0?"medium":L,B=N.color,o=B===void 0?"gray":B,M=G(N,oe);return Object(ee.jsx)(X.a,Object.assign({size:k,color:o,ref:q},M,{children:Object(ee.jsx)(te,{})}))});W.displayName="@co-design/core/CloseButton"},"./packages/co-design-core/src/components/IconButton/IconButton.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return b});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-core/src/components/View/View.tsx"),ee=e("./node_modules/core-js/modules/es.string.small.js"),te=e("./packages/co-design-styles/src/tss/createStyles.ts"),oe=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),G=e("./packages/co-design-core/src/utils/addAlpha.ts"),K=e("./packages/co-design-core/src/constants/index.ts"),W={xsmall:{width:K.a.xsmall,height:K.a.xsmall},small:{width:K.a.small,height:K.a.small},medium:{width:K.a.medium,height:K.a.medium},large:{width:K.a.large,height:K.a.large},xlarge:{width:K.a.xlarge,height:K.a.xlarge}},N={xsmall:8,small:8,medium:16,large:16,xlarge:24},q=Object(te.a)(function(O,P,T){var U,d,m,y,f,j=P.color,D=P.size,_=T("loading"),a=T("inner"),s=T("spinner"),c=j||O.primaryColor;return{loading:(U={ref:_,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},U["."+a]={opacity:0},U["."+s]={display:"flex"},U),solid:(d={backgroundColor:O.palettes[c][O.colorScheme==="light"?5:3],color:O.colorScheme==="light"?O.colors.white:O.palettes.gray[9],"&:not(:disabled):hover":{backgroundColor:O.palettes[c][O.colorScheme==="light"?6:2]},"&:not(:disabled):active":{backgroundColor:O.palettes[c][O.colorScheme==="light"?7:1]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3]}}},d["&:disabled:not(."+_+")"]={backgroundColor:O.palettes.gray[2],color:Object(G.a)(O.colors.black,O.opacity.opacity3)},d),ghost:(m={backgroundColor:O.colors.transparent,border:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3],color:O.palettes[c][O.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(G.a)(O.palettes[c][O.colorScheme==="light"?0:8],O.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(G.a)(O.palettes[c][O.colorScheme==="light"?1:7],O.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:4,outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3]}}},m["&:disabled:not(."+_+")"]={color:Object(G.a)(O.palettes[c][1],O.opacity.opacity3),border:"1px solid "+Object(G.a)(O.palettes[c][1],O.opacity.opacity3)},m),"light-solid":(y={backgroundColor:Object(G.a)(O.colorScheme==="light"?O.colors.black:O.colors.white,O.opacity.opacity1),color:O.palettes[c][O.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(G.a)(O.palettes.dark[O.colorScheme==="light"?8:1],O.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(G.a)(O.palettes.dark[O.colorScheme==="light"?7:2],O.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3]}}},y["&:disabled:not(."+_+")"]={backgroundColor:Object(G.a)(O.palettes.dark[O.colorScheme==="light"?4:1],O.opacity.opacity1),color:Object(G.a)(O.palettes[c][O.colorScheme==="light"?7:3],O.opacity.opacity3)},y),text:(f={backgroundColor:"transparent",color:O.palettes[c][O.colorScheme==="light"?5:3],"&:not(:disabled):hover":{backgroundColor:Object(G.a)(O.palettes[c][O.colorScheme==="light"?8:1],O.opacity.opacity2)},"&:not(:disabled):active":{backgroundColor:Object(G.a)(O.palettes[c][O.colorScheme==="light"?7:2],O.opacity.opacity3)},"&:not(:disabled):focus-visible":{outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3],"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-3,right:-3,borderRadius:4,outline:"1px solid "+O.palettes[c][O.colorScheme==="light"?5:3]}}},f["&:disabled:not(."+_+")"]={color:Object(G.a)(O.palettes[c][O.colorScheme==="light"?7:3],O.opacity.opacity3)},f),root:Object.assign({},W[D],Object(oe.c)(O),{borderRadius:O.radius.medium,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:a,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:W[D].width-N[D],height:W[D].height-N[D]}},spinnerWrapper:{ref:s,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),L=e("./packages/co-design-core/src/components/Spinner/Spinner.tsx"),k=e("./node_modules/react/jsx-runtime.js"),B=["children","component","size","color","variant","type","disabled","loading","spinnerProps","className","co","overrideStyles"];function o(O,P){if(O==null)return{};var T=M(O,P),U,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(O);for(d=0;d<m.length;d++)U=m[d],!(P.indexOf(U)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,U)||(T[U]=O[U]))}return T}function M(O,P){if(O==null)return{};var T={},U=Object.keys(O),d,m;for(m=0;m<U.length;m++)d=U[m],!(P.indexOf(d)>=0)&&(T[d]=O[d]);return T}var b=Object(Y.forwardRef)(function(O,P){var T,U=O.children,d=O.component,m=O.size,y=m===void 0?"medium":m,f=O.color,j=O.variant,D=j===void 0?"solid":j,_=O.type,a=_===void 0?"button":_,s=O.disabled,c=s===void 0?!1:s,i=O.loading,g=i===void 0?!1:i,n=O.spinnerProps,v=O.className,t=O.co,r=O.overrideStyles,u=o(O,B),l=q({color:f,size:y},{overrideStyles:r,name:"Button"}),h=l.theme,E=l.classes,S=l.cx,C=f||h.primaryColor,R=Object(k.jsx)(L.a,Object.assign({color:D==="solid"?h.colors.white:h.palettes[C][6],size:K.a[y]/2},n));return Object(k.jsxs)(X.a,Object.assign({component:d||"button",className:S((T={},T[E.loading]=g,T),E.root,E[D],v),type:a,disabled:c||g,ref:P,onTouchStart:function(){},co:t},u,{children:[Object(k.jsx)("div",{className:E.inner,children:U}),Object(k.jsx)("div",{className:E.spinnerWrapper,children:R})]}))});b.displayName="@co-design/core/IconButton"},"./packages/co-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/IconButton/CloseButton.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { CloseButton } from '../CloseButton';

export default {
  title: '@co-design/core/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};
`,oe={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { CloseButton } from '../CloseButton';

export default {
  title: '@co-design/core/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}}}},title:"@co-design/core/CloseButton",component:Y.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var G=function(W){return Object(X.jsx)(Y.a,Object.assign({},W))};G.displayName="Default"},"./packages/co-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/IconButton/IconButton.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { IconButton } from '../IconButton';

export default {
  title: '@co-design/core/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
};
`,oe={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { IconButton } from '../IconButton';

export default {
  title: '@co-design/core/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
};
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:1,line:45},startBody:{col:23,line:34},endBody:{col:1,line:45}}}}},title:"@co-design/core/IconButton",component:Y.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},variant:{defaultValue:"solid",options:["solid","ghost","light-solid","text"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","gray","red","blue"],control:{type:"inline-radio"}},loading:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var G=function(W){var N=Object(X.jsx)("svg",{viewBox:"0 0 24 24",children:Object(X.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(X.jsx)(Y.a,Object.assign({},W,{children:N}))};G.displayName="Default"},"./packages/co-design-core/src/components/Image/stories/Image.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return S});var x=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),q=e("./node_modules/react/index.js"),L=e("./node_modules/core-js/modules/es.object.keys.js"),k=e("./node_modules/core-js/modules/es.array.index-of.js"),B=e("./node_modules/core-js/modules/es.array.for-each.js"),o=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),M=e("./packages/co-design-styles/src/tss/createStyles.ts"),b=Object(M.a)(function(C,R){var A=R.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:A?A in C.radius?C.radius[A]:A:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:C.colorScheme==="dark"?C.palettes.gray[2]:C.palettes.gray[8],backgroundColor:C.colorScheme==="dark"?C.palettes.gray[8]:C.palettes.gray[2],borderRadius:A?A in C.radius?C.radius[A]:A:0}}}),O=e("./packages/co-design-core/src/components/View/View.tsx"),P=e("./node_modules/react/jsx-runtime.js"),T=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function U(C,R){return j(C)||f(C,R)||m(C,R)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(C,R){if(!!C){if(typeof C=="string")return y(C,R);var A=Object.prototype.toString.call(C).slice(8,-1);if(A==="Object"&&C.constructor&&(A=C.constructor.name),A==="Map"||A==="Set")return Array.from(C);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return y(C,R)}}function y(C,R){(R==null||R>C.length)&&(R=C.length);for(var A=0,$=new Array(R);A<R;A++)$[A]=C[A];return $}function f(C,R){var A=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(A!=null){var $=[],me=!0,ge=!1,je,H;try{for(A=A.call(C);!(me=(je=A.next()).done)&&($.push(je.value),!(R&&$.length===R));me=!0);}catch(le){ge=!0,H=le}finally{try{!me&&A.return!=null&&A.return()}finally{if(ge)throw H}}return $}}function j(C){if(Array.isArray(C))return C}function D(C,R){if(C==null)return{};var A=_(C,R),$,me;if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(C);for(me=0;me<ge.length;me++)$=ge[me],!(R.indexOf($)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,$)||(A[$]=C[$]))}return A}function _(C,R){if(C==null)return{};var A={},$=Object.keys(C),me,ge;for(ge=0;ge<$.length;ge++)me=$[ge],!(R.indexOf(me)>=0)&&(A[me]=C[me]);return A}var a=null,s="loadImage",c=function(R,A){R.forEach(function($){$.isIntersecting&&(A.unobserve($.target),$.target.dispatchEvent(new CustomEvent(s)))})},i=Object(q.forwardRef)(function(C,R){var A=C.lazy,$=C.threshold,me=$===void 0?.5:$,ge=C.placeholder,je=C.src,H=C.radius,le=C.width,pe=le===void 0?"100%":le,F=C.height,J=F===void 0?"auto":F,Z=C.alt,de=C.fit,ne=C.style,ie=C.className,Ce=C.co,De=C.overrideStyles,Te=D(C,T),Ve=b({radius:H},{overrideStyles:De,name:"Image"}),Ue=Ve.classes,Ke=Ve.cx,Ze=Object(q.useState)(!1),ze=U(Ze,2),re=ze[0],ye=ze[1],Oe=Object(q.useState)(!1),Se=U(Oe,2),z=Se[0],ae=Se[1],fe=Object(q.useRef)(null),_e={width:pe,height:J,objectFit:de};return Object(q.useImperativeHandle)(R,function(){return fe.current}),Object(q.useEffect)(function(){if(!A){ae(!0);return}var be=function(){return ae(!0)},Me=fe.current;return Me&&Me.addEventListener(s,be),function(){Me&&Me.removeEventListener(s,be)}},[A]),Object(q.useEffect)(function(){!A||(a=new IntersectionObserver(c,{threshold:me}),fe.current&&a.observe(fe.current))},[A,me]),Object(P.jsxs)(O.a,Object.assign({className:Ke(Ue.root,ie),co:Ce},Te,{children:[Object(P.jsx)("img",{ref:fe,src:je,alt:Z,className:Ue.image,style:_e,onLoad:function(){return ye(!0)}}),(!re||A&&!z)&&ge&&Object(P.jsx)("div",{className:Ue.placeholder,title:Z,children:ge})]}))});i.displayName="@co-design/core/Image";function g(C){return r(C)||t(C)||v(C)||n()}function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(C,R){if(!!C){if(typeof C=="string")return u(C,R);var A=Object.prototype.toString.call(C).slice(8,-1);if(A==="Object"&&C.constructor&&(A=C.constructor.name),A==="Map"||A==="Set")return Array.from(C);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return u(C,R)}}function t(C){if(typeof Symbol!="undefined"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function r(C){if(Array.isArray(C))return u(C)}function u(C,R){(R==null||R>C.length)&&(R=C.length);for(var A=0,$=new Array(R);A<R;A++)$[A]=C[A];return $}var l=`import React from 'react';
import { Image } from '../Image';

export default {
  title: '@co-design/core/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    radius: {
      defaultValue: 'small',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    lazy: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: 'number' },
    },
    width: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    alt: {
      defaultValue: '',
      control: { type: 'text' },
    },
    fit: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
`,h={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}},E=p.default={parameters:{storySource:{source:`import React from 'react';
import { Image } from '../Image';

export default {
  title: '@co-design/core/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    radius: {
      defaultValue: 'small',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    lazy: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: 'number' },
    },
    width: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    alt: {
      defaultValue: '',
      control: { type: 'text' },
    },
    fit: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:55},startBody:{col:23,line:45},endBody:{col:1,line:55}}}}},title:"@co-design/core/Image",component:i,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",control:{type:"text"}},radius:{defaultValue:"small",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,control:{type:"boolean"}},threshold:{defaultValue:.5,control:{type:"number"}},width:{defaultValue:400,control:{type:"number"}},height:{defaultValue:400,control:{type:"number"}},alt:{defaultValue:"",control:{type:"text"}},fit:{defaultValue:"cover",options:["cover","fill","contain"],control:{type:"inline-radio"}}}},S=function(R){return Object(P.jsx)(P.Fragment,{children:g(new Array(10)).map(function(A,$){return Object(P.jsx)("div",{children:Object(P.jsx)(i,Object.assign({placeholder:Object(P.jsx)("div",{children:"Placeholder"})},R))},$)})})}},"./packages/co-design-core/src/components/Input/Input.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return M});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.string.small.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),ee=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./packages/co-design-styles/src/tss/createStyles.ts"),G=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),K=e("./packages/co-design-core/src/constants/index.ts"),W=e("./packages/co-design-core/src/utils/getFieldValue.ts"),N={xsmall:12,small:14,medium:14,large:14,xlarge:16},q=Object(oe.a)(function(b,O){var P=O.size,T=O.multiline,U=O.radius,d=O.invalid,m=b.palettes.red[b.colorScheme==="dark"?5:6];return{wrapper:{position:"relative"},input:Object.assign({},Object(G.c)(b),{height:T?"auto":Object(W.a)(P,K.a),WebkitTapHighlightColor:"transparent",lineHeight:T?b.lineHeight:Object(W.a)(P,K.a)-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:Object(W.a)(P,N),width:"100%",color:b.colorScheme==="dark"?b.palettes.gray[0]:b.palettes.gray[9],display:"block",textAlign:"left",minHeight:Object(W.a)(P,K.a),paddingLeft:Object(W.a)(P,K.a)/3,paddingRight:Object(W.a)(P,K.a)/3,borderRadius:Object(W.a)(U,b.radius),border:"1px solid "+(b.colorScheme==="dark"?b.palettes.gray[6]:b.palettes.gray[2]),backgroundColor:b.colorScheme==="dark"?b.palettes.gray[8]:b.colors.white,"&:focus, &:focus-within":{outline:"1px solid "+b.palettes[b.primaryColor][b.colorScheme==="dark"?3:5],borderColor:b.palettes[b.primaryColor][b.colorScheme==="dark"?3:5]},"&:disabled":{backgroundColor:b.colorScheme==="dark"?b.palettes.gray[7]:b.palettes.gray[0],color:b.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:b.palettes.gray[6]}},"&::placeholder":{opacity:1,userSelect:"none",color:(b.colorScheme==="dark",b.palettes.gray[4])},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:Object(W.a)(P,K.a)+"px !important"},invalid:{color:m+" !important",borderColor:m+" !important","&::placeholder":{opacity:1,color:m+" !important"},"&:focus, &:focus-within":{borderWidth:2}},disabled:{backgroundColor:b.colorScheme==="dark"?b.palettes.gray[7]:b.palettes.gray[0],color:b.palettes.gray[6],opacity:.6,cursor:"not-allowed","&::placeholder":{color:b.palettes.gray[6]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:Object(W.a)(P,K.a),color:d?b.palettes.red[b.colorScheme==="dark"?5:6]:b.colorScheme==="dark"?b.palettes.gray[1]:b.palettes.gray[4],svg:{width:"50%",height:"50%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}}}),L=e("./node_modules/react/jsx-runtime.js"),k=["component","size","radius","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","className","style","co","overrideStyles","__staticSelector"];function B(b,O){if(b==null)return{};var P=o(b,O),T,U;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(b);for(U=0;U<d.length;U++)T=d[U],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,T)||(P[T]=b[T]))}return P}function o(b,O){if(b==null)return{};var P={},T=Object.keys(b),U,d;for(d=0;d<T.length;d++)U=T[d],!(O.indexOf(U)>=0)&&(P[U]=b[U]);return P}var M=Object(X.forwardRef)(function(b,O){var P,T=b.component,U=b.size,d=U===void 0?"medium":U,m=b.radius,y=m===void 0?"medium":m,f=b.icon,j=b.rightSectionWidth,D=j===void 0?36:j,_=b.rightSection,a=b.rightSectionProps,s=a===void 0?{}:a,c=b.wrapperProps,i=b.invalid,g=i===void 0?!1:i,n=b.required,v=n===void 0?!1:n,t=b.disabled,r=t===void 0?!1:t,u=b.multiline,l=u===void 0?!1:u,h=b.className,E=b.style,S=b.co,C=b.overrideStyles,R=b.__staticSelector,A=R===void 0?"Input":R,$=B(b,k),me=Object(ee.c)(),ge=q({radius:y,size:d,multiline:l,invalid:g},{overrideStyles:C,name:A}),je=ge.classes,H=ge.cx,le=T||"input";return Object(L.jsxs)(te.a,Object.assign({className:H(je.wrapper,h),co:S,style:E},c,{children:[f&&Object(L.jsx)("div",{className:je.icon,children:f}),Object(L.jsx)(le,Object.assign({},$,{ref:O,className:H(je.input,(P={},P[je.withIcon]=f,P[je.invalid]=g,P[je.disabled]=r,P)),required:v,disabled:r,style:{paddingRight:_?D:me.spacing.small}})),_&&Object(L.jsx)("div",Object.assign({},s,{style:Object.assign({},s.style,{width:D}),className:H(je.rightSection,s.className),children:_}))]}))});M.displayName="@co-design/core/Input"},"./packages/co-design-core/src/components/Input/stories/Input.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return W}),e.d(p,"WithIcon",function(){return N}),e.d(p,"WithRightSection",function(){return q}),e.d(p,"Textarea",function(){return L});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Tooltip/Tooltip.tsx"),X=e("./packages/co-design-core/src/components/Input/Input.tsx"),ee=e("./node_modules/react/jsx-runtime.js"),te=e.n(ee),oe=`import React from 'react';
import { Tooltip } from '../../Tooltip';
import { Input } from '../Input';

export default {
  title: '@co-design/core/Input',
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: 'Placeholder',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    invalid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};

export const WithRightSection = (props) => {
  const withTooltip = (
    <Tooltip label="Tutorial" placement="bottom">
      Info
    </Tooltip>
  );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} rightSection={withTooltip} rightSectionWidth={50} {...props} />
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
`,G={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},WithIcon:{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},WithRightSection:{startLoc:{col:32,line:59},endLoc:{col:1,line:71},startBody:{col:32,line:59},endBody:{col:1,line:71}},Textarea:{startLoc:{col:24,line:73},endLoc:{col:1,line:79},startBody:{col:24,line:73},endBody:{col:1,line:79}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Tooltip } from '../../Tooltip';
import { Input } from '../Input';

export default {
  title: '@co-design/core/Input',
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: 'Placeholder',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    invalid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};

export const WithRightSection = (props) => {
  const withTooltip = (
    <Tooltip label="Tutorial" placement="bottom">
      Info
    </Tooltip>
  );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} rightSection={withTooltip} rightSectionWidth={50} {...props} />
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}},"with-icon":{startLoc:{col:24,line:51},endLoc:{col:1,line:57},startBody:{col:24,line:51},endBody:{col:1,line:57}},"with-right-section":{startLoc:{col:32,line:59},endLoc:{col:1,line:71},startBody:{col:32,line:59},endBody:{col:1,line:71}},textarea:{startLoc:{col:24,line:73},endLoc:{col:1,line:79},startBody:{col:24,line:73},endBody:{col:1,line:79}}}}},title:"@co-design/core/Input",component:X.a,argTypes:{placeholder:{defaultValue:"Placeholder",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}};var K=function(){return Object(ee.jsx)("svg",{viewBox:"0 0 24 24",children:Object(ee.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};K.displayName="Icon";var W=function(B){return Object(ee.jsx)("div",{style:{width:400,padding:24},children:Object(ee.jsx)(X.a,Object.assign({},B))})};W.displayName="Default";var N=function(B){return Object(ee.jsx)("div",{style:{width:400,padding:24},children:Object(ee.jsx)(X.a,Object.assign({icon:Object(ee.jsx)(K,{})},B))})};N.displayName="WithIcon";var q=function(B){var o=Object(ee.jsx)(Y.a,{label:"Tutorial",placement:"bottom",children:"Info"});return Object(ee.jsx)("div",{style:{width:400,padding:24},children:Object(ee.jsx)(X.a,Object.assign({icon:Object(ee.jsx)(K,{}),rightSection:o,rightSectionWidth:50},B))})};q.displayName="WithRightSection";var L=function(B){return Object(ee.jsx)("div",{style:{width:400,padding:24},children:Object(ee.jsx)(X.a,Object.assign({component:"textarea",multiline:!0},B))})};L.displayName="Textarea"},"./packages/co-design-core/src/components/Kbd/stories/Kbd.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return M});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/co-design-core/src/components/View/View.tsx"),ee=e("./node_modules/core-js/modules/es.string.small.js"),te=e("./packages/co-design-styles/src/tss/createStyles.ts"),oe=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),G=Object(te.a)(function(b){return{root:Object.assign({lineHeight:b.lineHeight},Object(oe.c)(b),{fontFamily:b.fontFamilyMonospace,fontSize:b.fontSizes.xsmall,fontWeight:700,backgroundColor:b.colorScheme==="dark"?b.palettes.gray[7]:b.palettes.gray[1],color:b.colorScheme==="dark"?b.palettes.gray[0]:b.palettes.gray[6],padding:"3px "+b.spacing.xsmall+"px",borderRadius:b.radius.small,border:"1px solid "+(b.colorScheme==="dark"?b.palettes.gray[8]:b.colors.lightBorder),borderBottom:"3px solid "+(b.colorScheme==="dark"?b.palettes.gray[8]:b.colors.lightBorder)})}}),K=e("./node_modules/react/jsx-runtime.js"),W=["children","className","co","overrideStyles"];function N(b,O){if(b==null)return{};var P=q(b,O),T,U;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(b);for(U=0;U<d.length;U++)T=d[U],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,T)||(P[T]=b[T]))}return P}function q(b,O){if(b==null)return{};var P={},T=Object.keys(b),U,d;for(d=0;d<T.length;d++)U=T[d],!(O.indexOf(U)>=0)&&(P[U]=b[U]);return P}var L=Object(x.forwardRef)(function(b,O){var P=b.children,T=b.className,U=b.co,d=b.overrideStyles,m=N(b,W),y=G(null,{overrideStyles:d,name:"Kbd"}),f=y.classes,j=y.cx;return Object(K.jsx)(X.a,Object.assign({component:"kbd",ref:O,className:j(f.root,T),co:U},m,{children:P}))});L.displayName="@co-design/core/Kbd";var k=`import React from 'react';
import { Kbd } from '../Kbd';

export default {
  title: '@co-design/core/Kbd',
  component: Kbd,
  argTypes: {
    children: {
      defaultValue: 'Ctrl + K',
      control: { type: 'text' },
    },
  },
};

export const Default = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
`,B={Default:{startLoc:{col:23,line:15},endLoc:{col:1,line:17},startBody:{col:23,line:15},endBody:{col:1,line:17}}},o=p.default={parameters:{storySource:{source:`import React from 'react';
import { Kbd } from '../Kbd';

export default {
  title: '@co-design/core/Kbd',
  component: Kbd,
  argTypes: {
    children: {
      defaultValue: 'Ctrl + K',
      control: { type: 'text' },
    },
  },
};

export const Default = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:1,line:17},startBody:{col:23,line:15},endBody:{col:1,line:17}}}}},title:"@co-design/core/Kbd",component:L,argTypes:{children:{defaultValue:"Ctrl + K",control:{type:"text"}}}},M=function(O){var P=O.children;return Object(K.jsx)(L,{children:P})};M.displayName="Default"},"./packages/co-design-core/src/components/Mark/Mark.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return q});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),ee=e("./packages/co-design-core/src/components/View/View.tsx"),te=e("./packages/co-design-styles/src/tss/createStyles.ts"),oe=Object(te.a)(function(L,k){var B=k.color;return{root:{backgroundColor:L.palettes[B][L.colorScheme==="dark"?3:1],color:L.colorScheme==="dark"?L.palettes.gray[9]:"inherit"}}}),G=e("./node_modules/react/jsx-runtime.js"),K=["color","className","co","overrideStyles"];function W(L,k){if(L==null)return{};var B=N(L,k),o,M;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(L);for(M=0;M<b.length;M++)o=b[M],!(k.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,o)||(B[o]=L[o]))}return B}function N(L,k){if(L==null)return{};var B={},o=Object.keys(L),M,b;for(b=0;b<o.length;b++)M=o[b],!(k.indexOf(M)>=0)&&(B[M]=L[M]);return B}var q=Object(Y.forwardRef)(function(L,k){var B=L.color,o=L.className,M=L.co,b=L.overrideStyles,O=W(L,K),P=Object(X.c)(),T=B||P.primaryColor,U=oe({color:T},{overrideStyles:b,name:"Mark"}),d=U.classes,m=U.cx;return Object(G.jsx)(ee.a,Object.assign({component:"mark",ref:k,className:m(d.root,o),co:M},O))});q.displayName="@co-design/core/Mark"},"./packages/co-design-core/src/components/Mark/stories/Mark.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/Mark/Mark.tsx"),ce=e("./packages/co-design-core/src/components/Text/Text.tsx"),Y=e("./packages/co-design-core/src/components/Heading/Heading.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Mark } from '../Mark';
import { Text } from '../../Text';
import { Heading } from '../../Heading';

export default {
  title: '@co-design/core/Mark',
  component: Mark,
};

export const Default = () => {
  return (
    <div>
      <Heading>
        Lorem <Mark color="blue">ipsum</Mark>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, <Mark>consectetur adipiscing</Mark> elit.
      </Text>
    </div>
  );
};
`,oe={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:22},startBody:{col:23,line:11},endBody:{col:1,line:22}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Mark } from '../Mark';
import { Text } from '../../Text';
import { Heading } from '../../Heading';

export default {
  title: '@co-design/core/Mark',
  component: Mark,
};

export const Default = () => {
  return (
    <div>
      <Heading>
        Lorem <Mark color="blue">ipsum</Mark>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, <Mark>consectetur adipiscing</Mark> elit.
      </Text>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:11},endLoc:{col:1,line:22},startBody:{col:23,line:11},endBody:{col:1,line:22}}}}},title:"@co-design/core/Mark",component:Q.a};var G=function(){return Object(X.jsxs)("div",{children:[Object(X.jsxs)(Y.a,{children:["Lorem ",Object(X.jsx)(Q.a,{color:"blue",children:"ipsum"})]}),Object(X.jsxs)(ce.a,{children:["Lorem ipsum dolor sit amet, ",Object(X.jsx)(Q.a,{children:"consectetur adipiscing"})," elit."]})]})};G.displayName="Default"},"./packages/co-design-core/src/components/MediaQuery/stories/MediaQuery.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-styles/src/tss/createStyles.ts"),ce=Object(Q.a)(function(K,W){var N=W.smallerThan,q=W.largerThan,L=W.query,k=W.style,B={},o=K.fn.size({size:q,sizes:K.breakpoints})+1,M=K.fn.size({size:N,sizes:K.breakpoints});return q&&N?B["@media (min-width: "+o+"px) and (max-width: "+M+"px)"]=k:(q&&(B["@media (min-width: "+(K.fn.size({size:q,sizes:K.breakpoints})+1)+"px)"]=k),N&&(B["@media (max-width: "+K.fn.size({size:N,sizes:K.breakpoints})+"px)"]=k)),L&&(B["@media "+L]=k),{media:B}});function Y(K){var W,N=K.children,q=K.smallerThan,L=K.largerThan,k=K.query,B=K.className,o=K.style,M=ce({smallerThan:q,largerThan:L,query:k,style:o},{name:"MediaQuery"}),b=M.classes,O=M.cx,P=w.a.Children.only(N);return w.a.cloneElement(P,{className:O(b.media,(W=P.props)===null||W===void 0?void 0:W.className,B)})}Y.displayName="@co-design/core/MediaQuery";var X=e("./node_modules/react/jsx-runtime.js"),ee=`import React from 'react';
import { MediaQuery } from '../MediaQuery';

export default {
  title: '@co-design/core/MediaQuery',
  component: MediaQuery,
};

export const Default = () => {
  const highlight = { color: 'blue' };
  return (
    <div>
      <MediaQuery largerThan="xlarge" style={highlight}>
        <div>largerThan xlarge</div>
      </MediaQuery>
      <MediaQuery largerThan="large" style={highlight}>
        <div>largerThan large</div>
      </MediaQuery>
      <MediaQuery largerThan="medium" style={highlight}>
        <div>largerThan medium</div>
      </MediaQuery>
      <MediaQuery largerThan="small" style={highlight}>
        <div>largerThan small</div>
      </MediaQuery>
      <MediaQuery largerThan="xsmall" style={highlight}>
        <div>largerThan xsmall</div>
      </MediaQuery>

      <MediaQuery smallerThan="xlarge" style={highlight}>
        <div>smallerThan xlarge</div>
      </MediaQuery>
      <MediaQuery smallerThan="large" style={highlight}>
        <div>smallerThan large</div>
      </MediaQuery>
      <MediaQuery smallerThan="medium" style={highlight}>
        <div>smallerThan medium</div>
      </MediaQuery>
      <MediaQuery smallerThan="small" style={highlight}>
        <div>smallerThan small</div>
      </MediaQuery>
      <MediaQuery smallerThan="xsmall" style={highlight}>
        <div>smallerThan xsmall</div>
      </MediaQuery>
    </div>
  );
};
`,te={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},oe=p.default={parameters:{storySource:{source:`import React from 'react';
import { MediaQuery } from '../MediaQuery';

export default {
  title: '@co-design/core/MediaQuery',
  component: MediaQuery,
};

export const Default = () => {
  const highlight = { color: 'blue' };
  return (
    <div>
      <MediaQuery largerThan="xlarge" style={highlight}>
        <div>largerThan xlarge</div>
      </MediaQuery>
      <MediaQuery largerThan="large" style={highlight}>
        <div>largerThan large</div>
      </MediaQuery>
      <MediaQuery largerThan="medium" style={highlight}>
        <div>largerThan medium</div>
      </MediaQuery>
      <MediaQuery largerThan="small" style={highlight}>
        <div>largerThan small</div>
      </MediaQuery>
      <MediaQuery largerThan="xsmall" style={highlight}>
        <div>largerThan xsmall</div>
      </MediaQuery>

      <MediaQuery smallerThan="xlarge" style={highlight}>
        <div>smallerThan xlarge</div>
      </MediaQuery>
      <MediaQuery smallerThan="large" style={highlight}>
        <div>smallerThan large</div>
      </MediaQuery>
      <MediaQuery smallerThan="medium" style={highlight}>
        <div>smallerThan medium</div>
      </MediaQuery>
      <MediaQuery smallerThan="small" style={highlight}>
        <div>smallerThan small</div>
      </MediaQuery>
      <MediaQuery smallerThan="xsmall" style={highlight}>
        <div>smallerThan xsmall</div>
      </MediaQuery>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}}}},title:"@co-design/core/MediaQuery",component:Y},G=function(){var W={color:"blue"};return Object(X.jsxs)("div",{children:[Object(X.jsx)(Y,{largerThan:"xlarge",style:W,children:Object(X.jsx)("div",{children:"largerThan xlarge"})}),Object(X.jsx)(Y,{largerThan:"large",style:W,children:Object(X.jsx)("div",{children:"largerThan large"})}),Object(X.jsx)(Y,{largerThan:"medium",style:W,children:Object(X.jsx)("div",{children:"largerThan medium"})}),Object(X.jsx)(Y,{largerThan:"small",style:W,children:Object(X.jsx)("div",{children:"largerThan small"})}),Object(X.jsx)(Y,{largerThan:"xsmall",style:W,children:Object(X.jsx)("div",{children:"largerThan xsmall"})}),Object(X.jsx)(Y,{smallerThan:"xlarge",style:W,children:Object(X.jsx)("div",{children:"smallerThan xlarge"})}),Object(X.jsx)(Y,{smallerThan:"large",style:W,children:Object(X.jsx)("div",{children:"smallerThan large"})}),Object(X.jsx)(Y,{smallerThan:"medium",style:W,children:Object(X.jsx)("div",{children:"smallerThan medium"})}),Object(X.jsx)(Y,{smallerThan:"small",style:W,children:Object(X.jsx)("div",{children:"smallerThan small"})}),Object(X.jsx)(Y,{smallerThan:"xsmall",style:W,children:Object(X.jsx)("div",{children:"smallerThan xsmall"})})]})};G.displayName="Default"},"./packages/co-design-core/src/components/Menu/stories/Menu.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return H}),e.d(p,"Link",function(){return le}),e.d(p,"WithPopover",function(){return pe});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),ce=e("./packages/co-design-core/src/components/Divider/Divider.tsx"),Y=e("./packages/co-design-core/src/components/Text/Text.tsx"),X=e("./packages/co-design-core/src/components/Popover/Popover.tsx"),ee=e("./packages/co-design-core/src/components/Anchor/Anchor.tsx"),te=e("./node_modules/core-js/modules/es.object.keys.js"),oe=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),k=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/core-js/modules/es.array.from.js"),O=e("./node_modules/core-js/modules/es.array.filter.js"),P=e("./node_modules/core-js/modules/es.array.map.js"),T=e("./node_modules/core-js/modules/es.object.assign.js"),U=e("./node_modules/core-js/modules/es.string.small.js"),d=e("./packages/co-design-core/src/components/View/View.tsx"),m=e("./packages/co-design-styles/src/tss/createStyles.ts"),y=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),f=Object(m.a)(function(F,J){var Z=J.color,de=J.padding;return{item:Object.assign({},Object(y.c)(F),{WebkitTapHighlightColor:"transparent",fontSize:F.fontSizes.medium,border:0,backgroundColor:"transparent",outline:0,width:"100%",textAlign:"left",display:"block",textDecoration:"none",boxSizing:"border-box",padding:F.fn.spacing(1.5)+"px "+F.fn.size({size:de,sizes:F.spacing})+"px",cursor:"pointer",color:Z in F.palettes?F.palettes[Z][F.colorScheme==="dark"?2:6]:Z in F.colors?F.colors[Z]:F.colorScheme==="dark"?F.palettes.gray[2]:F.palettes.gray[6],"&:disabled":{color:F.colorScheme==="dark"?F.palettes.gray[2]:F.palettes.gray[4],pointerEvents:"none"},"&:hover":{textDecoration:"none"}}),itemHovered:{backgroundColor:Z?F.fn.rgba(Z in F.palettes?F.palettes[Z][F.colorScheme==="dark"?7:1]:Z in F.colors?F.colors[Z]:F.colorScheme==="dark"?F.palettes.gray[8]:F.palettes.gray[2],F.colorScheme==="dark"?.35:1):F.colorScheme==="dark"?F.fn.rgba(F.palettes.gray[7],.35):F.palettes.gray[1]},itemInner:{display:"flex",alignItems:"center",height:"100%"},itemBody:{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1},itemIcon:{position:"relative",marginRight:F.spacing.small,width:20,height:20,"& *":{display:"block",width:"100%",height:"100%"}},itemLabel:Object.assign({},Object(y.c)(F),{display:"inline",lineHeight:1})}}),j=e("./node_modules/react/jsx-runtime.js"),D=["className","padding","children","onHover","hovered","icon","color","disabled","rightSection","component","co","overrideStyles"];function _(F,J){if(F==null)return{};var Z=a(F,J),de,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(F);for(ne=0;ne<ie.length;ne++)de=ie[ne],!(J.indexOf(de)>=0)&&(!Object.prototype.propertyIsEnumerable.call(F,de)||(Z[de]=F[de]))}return Z}function a(F,J){if(F==null)return{};var Z={},de=Object.keys(F),ne,ie;for(ie=0;ie<de.length;ie++)ne=de[ie],!(J.indexOf(ne)>=0)&&(Z[ne]=F[ne]);return Z}var s=Object(x.forwardRef)(function(F,J){var Z,de=F.className,ne=F.padding,ie=F.children,Ce=F.onHover,De=F.hovered,Te=F.icon,Ve=F.color,Ue=F.disabled,Ke=F.rightSection,Ze=F.component,ze=F.co,re=F.overrideStyles,ye=_(F,D),Oe=f({color:Ve,padding:ne},{overrideStyles:re,name:"Menu"}),Se=Oe.classes,z=Oe.cx;return Object(j.jsx)(d.a,Object.assign({component:Ze||"button",type:"button",role:"menuitem",className:z(Se.item,(Z={},Z[Se.itemHovered]=De,Z),de),co:ze,onMouseEnter:function(){return!Ue&&Ce()},ref:J,disabled:Ue},ye,{children:Object(j.jsxs)("div",{className:Se.itemInner,children:[Te&&Object(j.jsx)("div",{className:Se.itemIcon,children:Te}),Object(j.jsxs)("div",{className:Se.itemBody,children:[Object(j.jsx)("div",{className:Se.itemLabel,children:ie}),Ke]})]})}))});s.displayName="@co-design/core/MenuItem";function c(F){return null}c.displayName="@co-design/core/MenuLabel";var i=Object(m.a)(function(F,J){var Z=J.padding;return{root:{position:"relative"},divider:{},label:{color:F.colorScheme==="dark"?F.palettes.gray[3]:F.palettes.gray[4],fontSize:F.fontSizes.small,paddingLeft:F.fn.size({size:Z,sizes:F.spacing}),paddingRight:F.fn.size({size:Z,sizes:F.spacing}),paddingBottom:F.spacing.xsmall/2,paddingTop:12,cursor:"default"}}}),g=["children","padding","onMouseLeave","onMouseEnter","onChange","className","co","overrideStyles"];function n(F,J){return l(F)||u(F,J)||t(F,J)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(F,J){if(!!F){if(typeof F=="string")return r(F,J);var Z=Object.prototype.toString.call(F).slice(8,-1);if(Z==="Object"&&F.constructor&&(Z=F.constructor.name),Z==="Map"||Z==="Set")return Array.from(F);if(Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z))return r(F,J)}}function r(F,J){(J==null||J>F.length)&&(J=F.length);for(var Z=0,de=new Array(J);Z<J;Z++)de[Z]=F[Z];return de}function u(F,J){var Z=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(Z!=null){var de=[],ne=!0,ie=!1,Ce,De;try{for(Z=Z.call(F);!(ne=(Ce=Z.next()).done)&&(de.push(Ce.value),!(J&&de.length===J));ne=!0);}catch(Te){ie=!0,De=Te}finally{try{!ne&&Z.return!=null&&Z.return()}finally{if(ie)throw De}}return de}}function l(F){if(Array.isArray(F))return F}function h(F,J){if(F==null)return{};var Z=E(F,J),de,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(F);for(ne=0;ne<ie.length;ne++)de=ie[ne],!(J.indexOf(de)>=0)&&(!Object.prototype.propertyIsEnumerable.call(F,de)||(Z[de]=F[de]))}return Z}function E(F,J){if(F==null)return{};var Z={},de=Object.keys(F),ne,ie;for(ie=0;ie<de.length;ie++)ne=de[ie],!(J.indexOf(ne)>=0)&&(Z[ne]=F[ne]);return Z}var S=function(J,Z){for(var de=J+1;de<Z.length;de+=1)if(!Z[de].props.disabled&&Z[de].type===s)return de;return J},C=function(J){for(var Z=0;Z<J.length;Z+=1)if(!J[Z].props.disabled&&J[Z].type===s)return Z;return-1},R=function(J,Z){for(var de=J-1;de>=0;de-=1)if(!Z[de].props.disabled&&Z[de].type===s)return de;return!Z[J]||Z[J].type!==s?C(Z):J},A=Object(x.forwardRef)(function(F,J){var Z=F.children,de=F.padding,ne=de===void 0?"medium":de,ie=F.onMouseLeave,Ce=F.onMouseEnter,De=F.onChange,Te=F.className,Ve=F.co,Ue=F.overrideStyles,Ke=h(F,g),Ze=Object(x.useState)(-1),ze=n(Ze,2),re=ze[0],ye=ze[1],Oe=Object(x.useRef)({}),Se=i({padding:ne},{overrideStyles:Ue,name:"Menu"}),z=Se.classes,ae=Se.cx,fe=Se.theme,_e=w.a.Children.toArray(Z).filter(function(Le){return Le.type===s||Le.type===ce.a||Le.type===c}),be=function(Ie){if(Ie.nativeEvent.code==="Tab"&&Ie.preventDefault(),Ie.nativeEvent.code==="ArrowDown"){Ie.preventDefault();var $e=S(re,_e);ye($e),Oe.current[$e].focus()}if(Ie.nativeEvent.code==="ArrowUp"){Ie.preventDefault();var Ge=R(re,_e);ye(Ge),Oe.current[Ge].focus()}},Me=_e.map(function(Le,Ie){return Le.type===s?Object(x.createElement)(s,Object.assign({},Le.props,{key:Ie,padding:ne,hovered:re===Ie,onHover:function(){return ye(Ie)},onMouseLeave:function(){return ye(-1)},onKeyDown:be,ref:function(Ge){Oe.current[Ie]=Ge}})):Le.type===c?Object(j.jsx)(Y.a,Object.assign({block:!0,className:z.label},Le.props),Ie):Le.type===ce.a?Object(j.jsx)(ce.a,{variant:"solid",className:z.divider,margin:fe.spacing.small/2},Ie):null});return Object(j.jsx)(d.a,Object.assign({ref:J,className:ae(z.root,Te),co:Ve,role:"menu","aria-orientation":"vertical",onMouseLeave:function(){return ye(-1)}},Ke,{children:Me}))});A.Item=s,A.Label=c,A.displayName="@co-design/core/Menu";var $=`import React from 'react';
import { Paper } from '../../Paper';
import { Divider } from '../../Divider';
import { Text } from '../../Text';
import { Popover } from '../../Popover';
import { Anchor } from '../../Anchor';
import { Menu } from '../Menu';

export default {
  title: '@co-design/core/Menu',
  component: Menu,
};

const Icon = () => (
  <svg viewBox="0 0 24 24" width={24} height={24}>
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = () => {
  return (
    <Paper padding={0} co={{ width: 300, margin: 40 }}>
      <Menu>
        <Menu.Label>Label 1</Menu.Label>
        <Menu.Item icon={<Icon />} onClick={() => alert('Click')}>
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<Icon />}
          rightSection={
            <Text size="xsmall" color="#999">
              \u2318K
            </Text>
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Divider />
        <Menu.Label>Label 2</Menu.Label>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Menu.Item icon={<Icon />} color="red">
          Settings
        </Menu.Item>
      </Menu>
    </Paper>
  );
};

export const Link = () => {
  return (
    <Paper padding={0} co={{ width: 300, margin: 40 }}>
      <Menu>
        <Menu.Label>Label 1</Menu.Label>
        <Menu.Item component="a" href="#" icon={<Icon />} onClick={() => alert('Click')}>
          Settings
        </Menu.Item>
        <Menu.Item
          component={Anchor}
          href="#"
          icon={<Icon />}
          rightSection={
            <Text size="xsmall" color="#999">
              \u2318K
            </Text>
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Divider />
        <Menu.Label>Label 2</Menu.Label>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Menu.Item icon={<Icon />} color="red">
          Settings
        </Menu.Item>
      </Menu>
    </Paper>
  );
};

export const WithPopover = () => {
  return (
    <Popover
      placement="bottom-left"
      contentPadding={0}
      content={
        <Menu>
          <Menu.Label>Label 1</Menu.Label>
          <Menu.Item icon={<Icon />} onClick={() => alert('Click')}>
            Settings
          </Menu.Item>
          <Menu.Item
            icon={<Icon />}
            rightSection={
              <Text size="xsmall" color="#999">
                \u2318K
              </Text>
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item icon={<Icon />}>Settings</Menu.Item>
          <Divider />
          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item icon={<Icon />}>Settings</Menu.Item>
          <Menu.Item icon={<Icon />} color="red">
            Settings
          </Menu.Item>
        </Menu>
      }
    >
      <button>Menu</button>
    </Popover>
  );
};
`,me={Default:{startLoc:{col:23,line:23},endLoc:{col:1,line:51},startBody:{col:23,line:23},endBody:{col:1,line:51}},Link:{startLoc:{col:20,line:53},endLoc:{col:1,line:83},startBody:{col:20,line:53},endBody:{col:1,line:83}},WithPopover:{startLoc:{col:27,line:85},endLoc:{col:1,line:119},startBody:{col:27,line:85},endBody:{col:1,line:119}}},ge=p.default={parameters:{storySource:{source:`import React from 'react';
import { Paper } from '../../Paper';
import { Divider } from '../../Divider';
import { Text } from '../../Text';
import { Popover } from '../../Popover';
import { Anchor } from '../../Anchor';
import { Menu } from '../Menu';

export default {
  title: '@co-design/core/Menu',
  component: Menu,
};

const Icon = () => (
  <svg viewBox="0 0 24 24" width={24} height={24}>
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = () => {
  return (
    <Paper padding={0} co={{ width: 300, margin: 40 }}>
      <Menu>
        <Menu.Label>Label 1</Menu.Label>
        <Menu.Item icon={<Icon />} onClick={() => alert('Click')}>
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<Icon />}
          rightSection={
            <Text size="xsmall" color="#999">
              \u2318K
            </Text>
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Divider />
        <Menu.Label>Label 2</Menu.Label>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Menu.Item icon={<Icon />} color="red">
          Settings
        </Menu.Item>
      </Menu>
    </Paper>
  );
};

export const Link = () => {
  return (
    <Paper padding={0} co={{ width: 300, margin: 40 }}>
      <Menu>
        <Menu.Label>Label 1</Menu.Label>
        <Menu.Item component="a" href="#" icon={<Icon />} onClick={() => alert('Click')}>
          Settings
        </Menu.Item>
        <Menu.Item
          component={Anchor}
          href="#"
          icon={<Icon />}
          rightSection={
            <Text size="xsmall" color="#999">
              \u2318K
            </Text>
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Divider />
        <Menu.Label>Label 2</Menu.Label>
        <Menu.Item icon={<Icon />}>Settings</Menu.Item>
        <Menu.Item icon={<Icon />} color="red">
          Settings
        </Menu.Item>
      </Menu>
    </Paper>
  );
};

export const WithPopover = () => {
  return (
    <Popover
      placement="bottom-left"
      contentPadding={0}
      content={
        <Menu>
          <Menu.Label>Label 1</Menu.Label>
          <Menu.Item icon={<Icon />} onClick={() => alert('Click')}>
            Settings
          </Menu.Item>
          <Menu.Item
            icon={<Icon />}
            rightSection={
              <Text size="xsmall" color="#999">
                \u2318K
              </Text>
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item icon={<Icon />}>Settings</Menu.Item>
          <Divider />
          <Menu.Label>Label 2</Menu.Label>
          <Menu.Item icon={<Icon />}>Settings</Menu.Item>
          <Menu.Item icon={<Icon />} color="red">
            Settings
          </Menu.Item>
        </Menu>
      }
    >
      <button>Menu</button>
    </Popover>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:23},endLoc:{col:1,line:51},startBody:{col:23,line:23},endBody:{col:1,line:51}},link:{startLoc:{col:20,line:53},endLoc:{col:1,line:83},startBody:{col:20,line:53},endBody:{col:1,line:83}},"with-popover":{startLoc:{col:27,line:85},endLoc:{col:1,line:119},startBody:{col:27,line:85},endBody:{col:1,line:119}}}}},title:"@co-design/core/Menu",component:A},je=function(){return Object(j.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,children:Object(j.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};je.displayName="Icon";var H=function(){return Object(j.jsx)(Q.a,{padding:0,co:{width:300,margin:40},children:Object(j.jsxs)(A,{children:[Object(j.jsx)(A.Label,{children:"Label 1"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),onClick:function(){return alert("Click")},children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),rightSection:Object(j.jsx)(Y.a,{size:"xsmall",color:"#999",children:"\u2318K"}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(ce.a,{}),Object(j.jsx)(A.Label,{children:"Label 2"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),color:"red",children:"Settings"})]})})};H.displayName="Default";var le=function(){return Object(j.jsx)(Q.a,{padding:0,co:{width:300,margin:40},children:Object(j.jsxs)(A,{children:[Object(j.jsx)(A.Label,{children:"Label 1"}),Object(j.jsx)(A.Item,{component:"a",href:"#",icon:Object(j.jsx)(je,{}),onClick:function(){return alert("Click")},children:"Settings"}),Object(j.jsx)(A.Item,{component:ee.a,href:"#",icon:Object(j.jsx)(je,{}),rightSection:Object(j.jsx)(Y.a,{size:"xsmall",color:"#999",children:"\u2318K"}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(ce.a,{}),Object(j.jsx)(A.Label,{children:"Label 2"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),color:"red",children:"Settings"})]})})};le.displayName="Link";var pe=function(){return Object(j.jsx)(X.a,{placement:"bottom-left",contentPadding:0,content:Object(j.jsxs)(A,{children:[Object(j.jsx)(A.Label,{children:"Label 1"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),onClick:function(){return alert("Click")},children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),rightSection:Object(j.jsx)(Y.a,{size:"xsmall",color:"#999",children:"\u2318K"}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(ce.a,{}),Object(j.jsx)(A.Label,{children:"Label 2"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),children:"Settings"}),Object(j.jsx)(A.Item,{icon:Object(j.jsx)(je,{}),color:"red",children:"Settings"})]}),children:Object(j.jsx)("button",{children:"Menu"})})};pe.displayName="WithPopover"},"./packages/co-design-core/src/components/Modal/Modal.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return S});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),q=e("./node_modules/core-js/modules/es.object.assign.js"),L=e("./node_modules/react/index.js"),k=e("./packages/co-design-hooks/src/useId/useId.ts"),B=e("./packages/co-design-hooks/src/useFocusTrap/useFocusTrap.ts"),o=e("./packages/co-design-hooks/src/useScrollLock/useScrollLock.ts"),M=e("./packages/co-design-hooks/src/useFocusReturn/useFocusReturn.ts"),b=e("./packages/co-design-core/src/components/IconButton/CloseButton.tsx"),O=e("./packages/co-design-core/src/components/Text/Text.tsx"),P=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),T=e("./packages/co-design-core/src/components/Overlay/Overlay.tsx"),U=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),d=e("./packages/co-design-core/src/components/View/View.tsx"),m=e("./packages/co-design-core/src/components/Transition/GroupedTransition.tsx"),y=e("./node_modules/core-js/modules/es.string.small.js"),f=e("./packages/co-design-styles/src/tss/createStyles.ts"),j=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),D=e("./packages/co-design-core/src/utils/getFieldValue.ts"),_={xsmall:300,small:440,medium:600,large:860,xlarge:1020,full:"100%"},a=Object(f.a)(function(C,R){var A=R.overflow,$=R.size;return{root:{position:"fixed",top:0,left:0,right:0,bottom:0},inner:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:4,overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center"},title:Object.assign({},Object(j.c)(C),{fontSize:C.fontSizes.xlarge,marginRight:C.spacing.medium,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"}),modal:{position:"relative",zIndex:5,width:Object(D.a)($,_),outline:0,backgroundColor:C.colorScheme==="dark"?C.palettes.gray[6]:C.colors.white},header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:C.spacing.small,marginTop:-8,marginRight:-8},body:{maxHeight:A==="inside"?"calc(100vh - 185px)":null,overflowY:A==="inside"?"auto":null,wordBreak:"break-word"}}}),s=e("./node_modules/react/jsx-runtime.js"),c=["id","opened","children","title","size","padding","shadow","radius","overlayColor","overlayOpacity","overflow","transition","transitionDuration","hideCloseButton","closeOnClickOutside","onClose","className","co","overrideStyles"],i=["zIndex","target"];function g(C,R){return u(C)||r(C,R)||v(C,R)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(C,R){if(!!C){if(typeof C=="string")return t(C,R);var A=Object.prototype.toString.call(C).slice(8,-1);if(A==="Object"&&C.constructor&&(A=C.constructor.name),A==="Map"||A==="Set")return Array.from(C);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return t(C,R)}}function t(C,R){(R==null||R>C.length)&&(R=C.length);for(var A=0,$=new Array(R);A<R;A++)$[A]=C[A];return $}function r(C,R){var A=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(A!=null){var $=[],me=!0,ge=!1,je,H;try{for(A=A.call(C);!(me=(je=A.next()).done)&&($.push(je.value),!(R&&$.length===R));me=!0);}catch(le){ge=!0,H=le}finally{try{!me&&A.return!=null&&A.return()}finally{if(ge)throw H}}return $}}function u(C){if(Array.isArray(C))return C}function l(C,R){if(C==null)return{};var A=h(C,R),$,me;if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(C);for(me=0;me<ge.length;me++)$=ge[me],!(R.indexOf($)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,$)||(A[$]=C[$]))}return A}function h(C,R){if(C==null)return{};var A={},$=Object.keys(C),me,ge;for(ge=0;ge<$.length;ge++)me=$[ge],!(R.indexOf(me)>=0)&&(A[me]=C[me]);return A}var E=function(R){var A=R.id,$=R.opened,me=R.children,ge=R.title,je=R.size,H=je===void 0?"medium":je,le=R.padding,pe=le===void 0?"large":le,F=R.shadow,J=F===void 0?"large":F,Z=R.radius,de=Z===void 0?"medium":Z,ne=R.overlayColor,ie=R.overlayOpacity,Ce=R.overflow,De=Ce===void 0?"outside":Ce,Te=R.transition,Ve=Te===void 0?"pop":Te,Ue=R.transitionDuration,Ke=Ue===void 0?200:Ue,Ze=R.hideCloseButton,ze=Ze===void 0?!1:Ze,re=R.closeOnClickOutside,ye=re===void 0?!0:re,Oe=R.onClose,Se=R.className,z=R.co,ae=R.overrideStyles,fe=l(R,c),_e=Object(k.a)(A),be=_e+"-title",Me=_e+"-body",Le=a({size:H,overflow:De},{overrideStyles:ae,name:"Modal"}),Ie=Le.classes,$e=Le.cx,Ge=Le.theme,no=Object(B.a)($),oo=typeof ie=="number"?ie:Ge.colorScheme==="dark"?"opacity6":"opacity5",Xe=Object(o.a)(),Je=g(Xe,2),we=Je[1];return Object(M.a)({opened:$,transitionDuration:Ke}),Object(s.jsx)(m.a,{onExited:function(){return we(!1)},onEntered:function(){return we(!0)},mounted:$,transitions:{modal:{duration:Ke,transition:Ve},overlay:{duration:Ke/2,transition:"fade",timingFunction:"ease"}},children:function(to){return Object(s.jsxs)(d.a,Object.assign({className:$e(Ie.root,Se),co:z},fe,{children:[Object(s.jsx)("div",{className:Ie.inner,onClick:function(){return ye&&Oe()},onKeyDownCapture:function(ro){var lo,ao=((lo=ro.target)===null||lo===void 0?void 0:lo.getAttribute("data-co-stop-propagation"))!=="true";ao&&ro.nativeEvent.code==="Escape"&&Oe()},ref:no,children:Object(s.jsxs)(P.a,{onClick:function(ro){return ro.stopPropagation()},className:Ie.modal,shadow:J,padding:pe,radius:de,withBorder:!1,role:"dialog","aria-labelledby":be,"aria-describedby":Me,"aria-modal":!0,tabIndex:-1,style:Object.assign({},to.modal,{marginLeft:"calc(var(--removed-scroll-width, 0px) * -1)",zIndex:3}),children:[(ge||!ze)&&Object(s.jsxs)("div",{className:Ie.header,children:[Object(s.jsx)(O.a,{id:be,strong:!0,className:Ie.title,children:ge}),!ze&&Object(s.jsx)(b.a,{variant:"text",color:"gray",onClick:Oe})]}),Object(s.jsx)("div",{id:Me,className:Ie.body,children:me})]})}),Object(s.jsx)("div",{style:to.overlay,children:Object(s.jsx)(T.a,{zIndex:0,color:ne||(Ge.colorScheme==="dark"?Ge.palettes.gray[9]:Ge.colors.black),opacity:oo})})]}))}})};E.displayName="CoModal";var S=function(R){var A=R.zIndex,$=A===void 0?"modal":A,me=R.target,ge=l(R,i);return Object(s.jsx)(U.a,{zIndex:$,target:me,children:Object(s.jsx)(E,Object.assign({},ge))})};S.displayName="Modal",S.displayName="@co-design/core/Modal"},"./packages/co-design-core/src/components/Modal/stories/Modal.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-core/src/components/Modal/Modal.tsx"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React, { useState } from 'react';
import { Modal } from '../Modal';

export default {
  title: '@co-design/core/Modal',
  component: Modal,
};

export const Default = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Title!">
        Content
      </Modal>

      <button onClick={() => setOpened(true)}>Open Modal</button>
    </>
  );
};
`,i={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}};p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Modal } from '../Modal';

export default {
  title: '@co-design/core/Modal',
  component: Modal,
};

export const Default = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Title!">
        Content
      </Modal>

      <button onClick={() => setOpened(true)}>Open Modal</button>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}}}},title:"@co-design/core/Modal",component:d.a};var g=function(){var v=Object(T.useState)(!1),t=f(v,2),r=t[0],u=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{opened:r,onClose:function(){return u(!1)},title:"Title!",children:"Content"}),Object(m.jsx)("button",{onClick:function(){return u(!0)},children:"Open Modal"})]})}},"./packages/co-design-core/src/components/Modal/stories/ModalsProvider.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"ContentModal",function(){return S}),e.d(p,"ConfirmModal",function(){return C}),e.d(p,"MultipleStep",function(){return R});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e("./node_modules/core-js/modules/es.symbol.iterator.js"),oe=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/core-js/modules/es.array.find-index.js"),B=e("./node_modules/core-js/modules/es.array.find.js"),o=e("./packages/co-design-core/src/components/Modal/Modal.tsx"),M=e("./packages/co-design-hooks/src/useList/useList.ts"),b=e("./node_modules/core-js/modules/es.regexp.to-string.js"),O=e("./node_modules/core-js/modules/es.date.to-string.js"),P=function(){return"co-"+Math.random().toString(36).substr(2,9)},T=Object(x.createContext)({modals:[],openModal:function(){return null},openConfirmModal:function(){return null},openContextModal:function(){return null},closeAll:function(){},closeModal:function(){}}),U=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),d=e("./packages/co-design-core/src/components/Button/Button.tsx"),m=e("./packages/co-design-core/src/components/Group/Group.tsx"),y=e("./packages/co-design-core/src/components/View/View.tsx"),f=e("./node_modules/react/jsx-runtime.js"),j=function($){var me=$.id,ge=$.cancelProps,je=$.confirmProps,H=$.labels,le=$.closeOnConfirm,pe=le===void 0?!0:le,F=$.closeOnCancel,J=F===void 0?!0:F,Z=$.groupProps,de=$.onCancel,ne=$.onConfirm,ie=$.children,Ce=Object(U.c)(),De=Object(x.useContext)(T),Te=function(Ke){typeof(ge==null?void 0:ge.onClick)=="function"&&(ge==null||ge.onClick(Ke)),typeof de=="function"&&de(),J&&(De==null||De.closeModal(me))},Ve=function(Ke){typeof(je==null?void 0:je.onClick)=="function"&&(je==null||je.onClick(Ke)),typeof ne=="function"&&ne(),pe&&(De==null||De.closeModal(me))};return Object(f.jsxs)(f.Fragment,{children:[ie&&Object(f.jsx)(y.a,{co:{marginBottom:Ce.spacing.medium},children:ie}),Object(f.jsxs)(m.a,Object.assign({position:"right"},Z,{children:[Object(f.jsx)(d.a,Object.assign({variant:"ghost"},ge,{onClick:Te,children:(ge==null?void 0:ge.children)||H.cancel})),Object(f.jsx)(d.a,Object.assign({},je,{onClick:Ve,children:(je==null?void 0:je.children)||H.confirm}))]}))]})},D=["id","children","onCancel","onConfirm","closeOnConfirm","closeOnCancel","cancelProps","confirmProps","groupProps","labels"];function _(A,$){return g(A)||i(A,$)||s(A,$)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(A,$){if(!!A){if(typeof A=="string")return c(A,$);var me=Object.prototype.toString.call(A).slice(8,-1);if(me==="Object"&&A.constructor&&(me=A.constructor.name),me==="Map"||me==="Set")return Array.from(A);if(me==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(me))return c(A,$)}}function c(A,$){($==null||$>A.length)&&($=A.length);for(var me=0,ge=new Array($);me<$;me++)ge[me]=A[me];return ge}function i(A,$){var me=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(me!=null){var ge=[],je=!0,H=!1,le,pe;try{for(me=me.call(A);!(je=(le=me.next()).done)&&(ge.push(le.value),!($&&ge.length===$));je=!0);}catch(F){H=!0,pe=F}finally{try{!je&&me.return!=null&&me.return()}finally{if(H)throw pe}}return ge}}function g(A){if(Array.isArray(A))return A}function n(A,$){if(A==null)return{};var me=v(A,$),ge,je;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(A);for(je=0;je<H.length;je++)ge=H[je],!($.indexOf(ge)>=0)&&(!Object.prototype.propertyIsEnumerable.call(A,ge)||(me[ge]=A[ge]))}return me}function v(A,$){if(A==null)return{};var me={},ge=Object.keys(A),je,H;for(H=0;H<ge.length;H++)je=ge[H],!($.indexOf(je)>=0)&&(me[je]=A[je]);return me}function t(A){if(!A)return{confirmProps:{},modalProps:{}};var $=A.id,me=A.children,ge=A.onCancel,je=A.onConfirm,H=A.closeOnConfirm,le=A.closeOnCancel,pe=A.cancelProps,F=A.confirmProps,J=A.groupProps,Z=A.labels,de=n(A,D);return Object.assign({id:$},de)}function r(A){var $,me=A.children,ge=A.modalProps,je=A.labels,H=A.modals,le=Object(M.a)([]),pe=_(le,2),F=pe[0],J=pe[1],Z=Object(x.useState)({id:null,props:null,type:"content"}),de=_(Z,2),ne=de[0],ie=de[1],Ce=function(){return J.setState([])},De=function(ye){var Oe=ye.id||P();return J.append({id:Oe,props:ye,type:"content"}),ie({id:Oe,props:ye,type:"content"}),Oe},Te=function(ye){var Oe=ye.id||P();return J.append({id:Oe,props:ye,type:"confirm"}),ie({id:Oe,props:ye,type:"confirm"}),Oe},Ve=function(ye,Oe){var Se=Oe.id||P();return J.append({id:Se,props:Oe,type:"context",ctx:ye}),ie({id:Se,props:Oe,type:"context",ctx:ye}),Se},Ue=function(ye){var Oe=F.findIndex(function(fe){return fe.id===ye});if(F.length<=1)Ce();else{var Se,z,ae=F.find(function(fe){return fe.id===ye});ae==null||(Se=ae.props)===null||Se===void 0||(z=Se.onClose)===null||z===void 0||z.call(Se),Oe!==-1&&J.remove(Oe),ie(F[F.length-2]||{id:null,props:null,type:"content"})}},Ke=(ne==null?void 0:ne.type)==="context"?H[ne==null?void 0:ne.ctx]:function(){return null},Ze={modals:F,openModal:De,openConfirmModal:Te,openContextModal:Ve,closeModal:Ue,closeAll:Ce},ze=(ne==null?void 0:ne.type)==="context"?Object(f.jsx)(Ke,{context:Ze,id:ne==null?void 0:ne.id}):(ne==null?void 0:ne.type)==="confirm"?Object(f.jsx)(j,Object.assign({},ne.props,{id:ne.id,labels:ne.props.labels||je})):ne==null||($=ne.props)===null||$===void 0?void 0:$.children;return Object(f.jsxs)(T.Provider,{value:Ze,children:[Object(f.jsx)(o.a,Object.assign({},ge,(ne==null?void 0:ne.type)==="confirm"?t(ne==null?void 0:ne.props):ne==null?void 0:ne.props,{opened:F.length>0,onClose:function(){return Ue(ne==null?void 0:ne.id)},children:ze})),me]})}r.displayName="ModalsProvider";var u=function(){var $=Object(x.useContext)(T);if(!$)throw new Error("[@co-design/core] useModals hook was called outside of context, wrap your app with ModalsProvider component");return $},l=`import React from 'react';
import { ModalsProvider } from '../ModalsProvider';
import { useModals } from '../useModals';

export default {
  title: '@co-design/core/ModalsProvider',
  component: ModalsProvider,
  decorators: [
    (Story) => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
};

export const ContentModal = () => {
  const modals = useModals();

  const openModal = () =>
    modals.openModal({
      title: 'Title',
      children: <div>Lorem ipsum.</div>,
    });

  return <button onClick={openModal}>Open modal</button>;
};

export const ConfirmModal = () => {
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      labels: {
        cancel: 'Cancel',
        confirm: 'Confirm',
      },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <button onClick={openConfirmModal}>Open confirm modal</button>;
};

export const MultipleStep = () => {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: <div>When this modal is closed modals state will revert to first modal</div>,
          onConfirm: () => modals.closeAll(),
        }),
    });

  return <button onClick={openMultiStepModal}>Open multiple steps modal</button>;
};
`,h={ContentModal:{startLoc:{col:28,line:17},endLoc:{col:1,line:27},startBody:{col:28,line:17},endBody:{col:1,line:27}},ConfirmModal:{startLoc:{col:28,line:29},endLoc:{col:1,line:47},startBody:{col:28,line:29},endBody:{col:1,line:47}},MultipleStep:{startLoc:{col:28,line:49},endLoc:{col:1,line:71},startBody:{col:28,line:49},endBody:{col:1,line:71}}},E=p.default={parameters:{storySource:{source:`import React from 'react';
import { ModalsProvider } from '../ModalsProvider';
import { useModals } from '../useModals';

export default {
  title: '@co-design/core/ModalsProvider',
  component: ModalsProvider,
  decorators: [
    (Story) => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
};

export const ContentModal = () => {
  const modals = useModals();

  const openModal = () =>
    modals.openModal({
      title: 'Title',
      children: <div>Lorem ipsum.</div>,
    });

  return <button onClick={openModal}>Open modal</button>;
};

export const ConfirmModal = () => {
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      labels: {
        cancel: 'Cancel',
        confirm: 'Confirm',
      },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <button onClick={openConfirmModal}>Open confirm modal</button>;
};

export const MultipleStep = () => {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: <div>When this modal is closed modals state will revert to first modal</div>,
          onConfirm: () => modals.closeAll(),
        }),
    });

  return <button onClick={openMultiStepModal}>Open multiple steps modal</button>;
};
`,locationsMap:{"content-modal":{startLoc:{col:28,line:17},endLoc:{col:1,line:27},startBody:{col:28,line:17},endBody:{col:1,line:27}},"confirm-modal":{startLoc:{col:28,line:29},endLoc:{col:1,line:47},startBody:{col:28,line:29},endBody:{col:1,line:47}},"multiple-step":{startLoc:{col:28,line:49},endLoc:{col:1,line:71},startBody:{col:28,line:49},endBody:{col:1,line:71}}}}},title:"@co-design/core/ModalsProvider",component:r,decorators:[function(A){return Object(f.jsx)(r,{children:Object(f.jsx)(A,{})})}]},S=function(){var $=u(),me=function(){return $.openModal({title:"Title",children:Object(f.jsx)("div",{children:"Lorem ipsum."})})};return Object(f.jsx)("button",{onClick:me,children:"Open modal"})};S.displayName="ContentModal";var C=function(){var $=u(),me=function(){return $.openConfirmModal({title:"Please confirm your action",labels:{cancel:"Cancel",confirm:"Confirm"},children:Object(f.jsx)("div",{children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:function(){return console.log("Cancel")},onConfirm:function(){return console.log("Confirmed")}})};return Object(f.jsx)("button",{onClick:me,children:"Open confirm modal"})};C.displayName="ConfirmModal";var R=function(){var $=u(),me=function(){return $.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:Object(f.jsx)("div",{children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onConfirm:function(){return $.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:Object(f.jsx)("div",{children:"When this modal is closed modals state will revert to first modal"}),onConfirm:function(){return $.closeAll()}})}})};return Object(f.jsx)("button",{onClick:me,children:"Open multiple steps modal"})};R.displayName="MultipleStep"},"./packages/co-design-core/src/components/NativeSelect/stories/NativeSelect.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return _}),e.d(p,"WithIcon",function(){return a});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),ee=e("./packages/co-design-hooks/src/useId/useId.ts"),te=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),oe=e("./packages/co-design-core/src/components/Input/Input.tsx"),G=e("./packages/co-design-core/src/components/IconButton/CloseButton.tsx"),K=e("./node_modules/react/jsx-runtime.js"),W=["size","invalid","style"];function N(s,c){if(s==null)return{};var i=q(s,c),g,n;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(n=0;n<v.length;n++)g=v[n],!(c.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,g)||(i[g]=s[g]))}return i}function q(s,c){if(s==null)return{};var i={},g=Object.keys(s),n,v;for(v=0;v<g.length;v++)n=g[v],!(c.indexOf(n)>=0)&&(i[n]=s[n]);return i}var L={xsmall:14,small:18,medium:20,large:24,xlarge:28},k=function(c){var i=c.size,g=c.invalid,n=c.style,v=N(c,W),t=Object(te.c)(),r=t.fn.size({size:i,sizes:L});return Object(K.jsx)("svg",Object.assign({width:r,height:r,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:Object.assign({color:g?t.palettes.red[6]:t.colorScheme==="light"?t.palettes.gray[7]:t.palettes.gray[3]},n)},v,{children:Object(K.jsx)("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};k.displayName="ChevronIcon";var B=function(c){var i=c.shouldClear,g=c.clearButtonLabel,n=c.onClear,v=c.size,t=c.invalid;return i?Object(K.jsx)(G.a,{variant:"text","aria-label":g,onClick:n,size:v}):Object(K.jsx)(k,{invalid:t,size:v})};B.displayName="@co-design/core/SelectRightSection";var o=["overrideStyles","rightSection","rightSectionWidth","theme"];function M(s,c){if(s==null)return{};var i=b(s,c),g,n;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(n=0;n<v.length;n++)g=v[n],!(c.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,g)||(i[g]=s[g]))}return i}function b(s,c){if(s==null)return{};var i={},g=Object.keys(s),n,v;for(v=0;v<g.length;v++)n=g[v],!(c.indexOf(n)>=0)&&(i[n]=s[n]);return i}var O={xsmall:24,small:30,medium:34,large:44,xlarge:54};function P(s){var c=s.overrideStyles,i=s.rightSection,g=s.rightSectionWidth,n=s.theme,v=M(s,o);if(i)return{rightSection:i,rightSectionWidth:g,overrideStyles:c};var t=typeof c=="function"?c(n):c;return{rightSectionWidth:n.fn.size({size:v.size,sizes:O}),rightSection:Object(K.jsx)(B,Object.assign({},v)),overrideStyles:Object.assign({},t,{rightSection:Object.assign({},t==null?void 0:t.rightSection,{pointerEvents:v.shouldClear?void 0:"none"})})}}var T=["id","size","data","placeholder","wrapperProps","defaultValue","value","required","invalid","rightSection","rightSectionWidth","onChange","overrideStyles"];function U(s,c){if(s==null)return{};var i=d(s,c),g,n;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(n=0;n<v.length;n++)g=v[n],!(c.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,g)||(i[g]=s[g]))}return i}function d(s,c){if(s==null)return{};var i={},g=Object.keys(s),n,v;for(v=0;v<g.length;v++)n=g[v],!(c.indexOf(n)>=0)&&(i[n]=s[n]);return i}var m=Object(w.forwardRef)(function(s,c){var i=s.id,g=s.size,n=g===void 0?"medium":g,v=s.data,t=s.placeholder,r=s.wrapperProps,u=s.defaultValue,l=s.value,h=s.required,E=s.invalid,S=s.rightSection,C=s.rightSectionWidth,R=s.onChange,A=s.overrideStyles,$=U(s,T),me=Object(ee.a)(i),ge=Object(te.c)(),je=v.map(function(le){return typeof le=="string"?{label:le,value:le}:le}),H=je.map(function(le){return Object(K.jsx)("option",{value:le.value,disabled:le.disabled,children:le.label},le.value)});return t&&H.unshift(Object(K.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:t},"placeholder")),Object(K.jsx)(oe.a,Object.assign({__staticSelector:"NativeSelect",component:"select",ref:c,id:me,required:h,value:l===null?"":l,size:n,overrideStyles:A,onChange:R},P({theme:ge,rightSection:S,rightSectionWidth:C,overrideStyles:A,shouldClear:!1,size:n,invalid:E}),$,{children:H}))});m.displayName="@co-design/core/NativeSelect";var y=`import React from 'react';
import { NativeSelect } from '../NativeSelect';

export default {
  title: '@co-design/core/NativeSelect',
  component: NativeSelect,
  argTypes: {
    placeholder: {
      defaultValue: 'Choose one',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    invalid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <NativeSelect {...props} data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <NativeSelect icon={<Icon />} {...props} data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:48},startBody:{col:23,line:42},endBody:{col:1,line:48}},WithIcon:{startLoc:{col:24,line:50},endLoc:{col:1,line:56},startBody:{col:24,line:50},endBody:{col:1,line:56}}},j=p.default={parameters:{storySource:{source:`import React from 'react';
import { NativeSelect } from '../NativeSelect';

export default {
  title: '@co-design/core/NativeSelect',
  component: NativeSelect,
  argTypes: {
    placeholder: {
      defaultValue: 'Choose one',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    invalid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <NativeSelect {...props} data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <NativeSelect icon={<Icon />} {...props} data={['React', 'Angular', 'Svelte', 'Vue']} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:48},startBody:{col:23,line:42},endBody:{col:1,line:48}},"with-icon":{startLoc:{col:24,line:50},endLoc:{col:1,line:56},startBody:{col:24,line:50},endBody:{col:1,line:56}}}}},title:"@co-design/core/NativeSelect",component:m,argTypes:{placeholder:{defaultValue:"Choose one",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},invalid:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},D=function(){return Object(K.jsx)("svg",{viewBox:"0 0 24 24",children:Object(K.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};D.displayName="Icon";var _=function(c){return Object(K.jsx)("div",{style:{width:400,padding:24},children:Object(K.jsx)(m,Object.assign({},c,{data:["React","Angular","Svelte","Vue"]}))})};_.displayName="Default";var a=function(c){return Object(K.jsx)("div",{style:{width:400,padding:24},children:Object(K.jsx)(m,Object.assign({icon:Object(K.jsx)(D,{})},c,{data:["React","Angular","Svelte","Vue"]}))})};a.displayName="WithIcon"},"./packages/co-design-core/src/components/Overlay/Overlay.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return o});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.assign.js"),te=e.n(ee),oe=e("./node_modules/react/index.js"),G=e.n(oe),K=e("./packages/co-design-core/src/components/View/View.tsx"),W=e("./packages/co-design-core/src/utils/getFieldValue.ts"),N=e("./node_modules/react/jsx-runtime.js"),q=e.n(N),L=["opacity","color","gradient","zIndex","component","radius","co"];function k(M,b){if(M==null)return{};var O=B(M,b),P,T;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(M);for(T=0;T<U.length;T++)P=U[T],!(b.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,P)||(O[P]=M[P]))}return O}function B(M,b){if(M==null)return{};var O={},P=Object.keys(M),T,U;for(U=0;U<P.length;U++)T=P[U],!(b.indexOf(T)>=0)&&(O[T]=M[T]);return O}var o=Object(oe.forwardRef)(function(M,b){var O=M.opacity,P=O===void 0?"opacity5":O,T=M.color,U=T===void 0?"#000":T,d=M.gradient,m=M.zIndex,y=m===void 0?"modal":m,f=M.component,j=M.radius,D=j===void 0?0:j,_=M.co,a=k(M,L),s=d?{backgroundImage:d}:{backgroundColor:U};return Object(N.jsx)(K.a,Object.assign({component:f||"div",ref:b,co:[function(c){return Object.assign({},s,{opacity:Object(W.a)(P,c.opacity),position:"absolute",top:0,bottom:0,left:0,right:0,borderRadius:Object(W.a)(D,c.radius),zIndex:Object(W.a)(y,c.zIndex)})},_]},a))});o.displayName="@co-design/core/Overlay"},"./packages/co-design-core/src/components/Overlay/stories/Overlay.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return v});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./node_modules/react/index.js"),m=e.n(d),y=e("./packages/co-design-core/src/components/Overlay/Overlay.tsx"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function D(t,r){return i(t)||c(t,r)||a(t,r)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(t,r){if(!!t){if(typeof t=="string")return s(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return s(t,r)}}function s(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,l=new Array(r);u<r;u++)l[u]=t[u];return l}function c(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var l=[],h=!0,E=!1,S,C;try{for(u=u.call(t);!(h=(S=u.next()).done)&&(l.push(S.value),!(r&&l.length===r));h=!0);}catch(R){E=!0,C=R}finally{try{!h&&u.return!=null&&u.return()}finally{if(E)throw C}}return l}}function i(t){if(Array.isArray(t))return t}var g=`import React, { useState } from 'react';
import { Overlay } from '../Overlay';

export default {
  title: '@co-design/core/Overlay',
  component: Overlay,
  argTypes: {
    opacity: {
      options: ['opacity1', 'opacity2', 'opacity3', 'opacity4', 'opacity5', 'opacity6'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: '#000',
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ height: 100, position: 'relative' }}>
        {visible && <Overlay {...props} />}
        <button color={visible ? 'red' : 'teal'}>{!visible ? 'Click as much as you like' : "Won't click, haha"}</button>
      </div>

      <button onClick={() => setVisible((v) => !v)}>Overlay</button>
    </>
  );
};
`,n={Default:{startLoc:{col:23,line:23},endLoc:{col:1,line:36},startBody:{col:23,line:23},endBody:{col:1,line:36}}};p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Overlay } from '../Overlay';

export default {
  title: '@co-design/core/Overlay',
  component: Overlay,
  argTypes: {
    opacity: {
      options: ['opacity1', 'opacity2', 'opacity3', 'opacity4', 'opacity5', 'opacity6'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: '#000',
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ height: 100, position: 'relative' }}>
        {visible && <Overlay {...props} />}
        <button color={visible ? 'red' : 'teal'}>{!visible ? 'Click as much as you like' : "Won't click, haha"}</button>
      </div>

      <button onClick={() => setVisible((v) => !v)}>Overlay</button>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:23},endLoc:{col:1,line:36},startBody:{col:23,line:23},endBody:{col:1,line:36}}}}},title:"@co-design/core/Overlay",component:y.a,argTypes:{opacity:{options:["opacity1","opacity2","opacity3","opacity4","opacity5","opacity6"],control:{type:"inline-radio"}},radius:{options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},color:{defaultValue:"#000",control:{type:"color"}}}};var v=function(r){var u=Object(d.useState)(!1),l=D(u,2),h=l[0],E=l[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{style:{height:100,position:"relative"},children:[h&&Object(f.jsx)(y.a,Object.assign({},r)),Object(f.jsx)("button",{color:h?"red":"teal",children:h?"Won't click, haha":"Click as much as you like"})]}),Object(f.jsx)("button",{onClick:function(){return E(function(C){return!C})},children:"Overlay"})]})}},"./packages/co-design-core/src/components/PanelStack/stories/PanelStack.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return je});var x=e("./node_modules/react/index.js"),w=e("./packages/co-design-core/src/components/Button/Button.tsx"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./node_modules/core-js/modules/es.array.map.js"),B=e("./node_modules/core-js/modules/es.object.assign.js"),o=e("./packages/co-design-hooks/src/useList/useList.ts"),M=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),b=e("./packages/co-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),O=e("./packages/co-design-core/src/components/Text/Text.tsx"),P=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),T=e("./packages/co-design-core/src/components/View/View.tsx"),U=e("./packages/co-design-core/src/components/Transition/Transition.tsx"),d=e("./packages/co-design-styles/src/tss/createStyles.ts"),m=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),y=e("./packages/co-design-core/src/utils/getFieldValue.ts"),f=Object(d.a)(function(H,le){var pe=le.width,F=le.height,J=le.padding;return{root:{position:"relative",width:pe,height:F,overflow:"hidden"},inner:{position:"absolute",top:Object(y.a)(J,H.spacing),left:Object(y.a)(J,H.spacing),right:Object(y.a)(J,H.spacing),bottom:Object(y.a)(J,H.spacing)},header:{height:24},back:{},title:Object.assign({},Object(m.c)(H),{fontSize:H.fontSizes.xlarge,marginRight:H.spacing.medium,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"}),divider:{},body:{}}}),j=e("./packages/co-design-core/src/components/Divider/Divider.tsx"),D=Object(x.createContext)({panels:[],pushPanel:function(){},popPanel:function(){}}),_=e("./node_modules/react/jsx-runtime.js"),a=function(le){var pe=le.children,F=le.panels,J=le.onPop,Z=le.onPush,de=Object(x.useCallback)(function(ie){Z==null||Z(ie)},[Z]),ne=Object(x.useCallback)(function(){J==null||J(F[F.length-1])},[F,J]);return Object(_.jsx)(D.Provider,{value:{panels:F,pushPanel:de,popPanel:ne},children:pe})};a.displayName="PanelsProvider";var s=e("./packages/co-design-core/src/components/IconButton/IconButton.tsx"),c=e("./packages/co-design-core/src/components/Group/Group.tsx"),i=function(){return Object(_.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",fill:"currentColor"})})};i.displayName="ArrowLeft";var g=["width","height","initialPanel","padding","shadow","radius","transition","transitionDuration","transitionTimingFunction","hideHeaderButton","onPop","onPush","className","co","overrideStyles"];function n(H,le){return l(H)||u(H,le)||t(H,le)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(H,le){if(!!H){if(typeof H=="string")return r(H,le);var pe=Object.prototype.toString.call(H).slice(8,-1);if(pe==="Object"&&H.constructor&&(pe=H.constructor.name),pe==="Map"||pe==="Set")return Array.from(H);if(pe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(pe))return r(H,le)}}function r(H,le){(le==null||le>H.length)&&(le=H.length);for(var pe=0,F=new Array(le);pe<le;pe++)F[pe]=H[pe];return F}function u(H,le){var pe=H==null?null:typeof Symbol!="undefined"&&H[Symbol.iterator]||H["@@iterator"];if(pe!=null){var F=[],J=!0,Z=!1,de,ne;try{for(pe=pe.call(H);!(J=(de=pe.next()).done)&&(F.push(de.value),!(le&&F.length===le));J=!0);}catch(ie){Z=!0,ne=ie}finally{try{!J&&pe.return!=null&&pe.return()}finally{if(Z)throw ne}}return F}}function l(H){if(Array.isArray(H))return H}function h(H,le){if(H==null)return{};var pe=E(H,le),F,J;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(H);for(J=0;J<Z.length;J++)F=Z[J],!(le.indexOf(F)>=0)&&(!Object.prototype.propertyIsEnumerable.call(H,F)||(pe[F]=H[F]))}return pe}function E(H,le){if(H==null)return{};var pe={},F=Object.keys(H),J,Z;for(Z=0;Z<F.length;Z++)J=F[Z],!(le.indexOf(J)>=0)&&(pe[J]=H[J]);return pe}var S=function(le){var pe=le.width,F=le.height,J=le.initialPanel,Z=le.padding,de=Z===void 0?"large":Z,ne=le.shadow,ie=ne===void 0?"large":ne,Ce=le.radius,De=Ce===void 0?"medium":Ce,Te=le.transition,Ve=Te===void 0?"fade":Te,Ue=le.transitionDuration,Ke=Ue===void 0?100:Ue,Ze=le.transitionTimingFunction,ze=Ze===void 0?"ease":Ze,re=le.hideHeaderButton,ye=re===void 0?!1:re,Oe=le.onPop,Se=le.onPush,z=le.className,ae=le.co,fe=le.overrideStyles,_e=h(le,g),be=f({width:pe,height:F,padding:de},{overrideStyles:fe,name:"PanelStack"}),Me=be.classes,Le=be.cx,Ie=Object(o.a)(J?[J]:[]),$e=n(Ie,2),Ge=$e[0],no=$e[1],oo=no.append,Xe=no.pop,Je=Object(M.a)(!0),we=n(Je,2),Ye=we[0],to=we[1],uo=Object(x.useCallback)(function(yo){Se==null||Se(yo),oo(yo),to(!1),so()},[Se,oo,to]),ro=Object(x.useCallback)(function(yo){to(!1),fo()},[Oe,Xe]),lo=Object(b.a)(function(){to(!0)},Ke),ao=n(lo,1),so=ao[0],mo=Object(b.a)(function(){to(!0),Oe==null||Oe(Ge[Ge.length-1]),Xe()},Ke),io=n(mo,1),fo=io[0],_o=Ge.map(function(yo,go){return Object(_.jsx)(U.a,{mounted:Ge.length-1===go&&Ye,transition:Ve,duration:Ke,timingFunction:ze,children:function(bo){return Object(_.jsxs)(T.a,{className:Me.inner,style:bo,children:[!ye&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(c.a,{spacing:"small",align:"center",className:Me.header,children:[go!==0&&Object(_.jsx)(s.a,{variant:"text",color:"dark",size:"small",className:Me.back,onClick:function(){return ro(yo)},children:Object(_.jsx)(i,{})}),Object(_.jsx)(O.a,{strong:!0,className:Me.title,children:yo.title})]}),Object(_.jsx)(j.a,{className:Me.divider})]}),Object(_.jsx)("div",{className:Me.body,children:yo.body})]})}},go)});return Object(_.jsx)(a,{panels:Ge,onPop:ro,onPush:uo,children:Object(_.jsx)(P.a,Object.assign({className:Le(Me.root,z),co:ae,shadow:ie,padding:de,radius:De,withBorder:!1},_e,{children:_o}))})};S.displayName="PanelStack",S.displayName="@co-design/core/PanelStack";var C=function(){var le=Object(x.useContext)(D);if(!le)throw new Error("[@co-design/core] usePanels hook was called outside of context");return le},R=`import React from 'react';
import { Button } from '../../Button';
import { PanelStack } from '../PanelStack';
import { usePanels } from '../usePanels';

export default {
  title: '@co-design/core/PanelStack',
  component: PanelStack,
  argTypes: {},
};

const FirstPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is first.
      <Button
        onClick={() =>
          pushPanel({
            title: 'Second',
            body: <SecondPanel />,
          })
        }
      >
        Push second
      </Button>
    </div>
  );
};

const SecondPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is second.
      <Button
        onClick={() =>
          pushPanel({
            title: 'First',
            body: <FirstPanel />,
          })
        }
      >
        Push first
      </Button>
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ padding: 16 }}>
      <PanelStack
        width={400}
        height={600}
        initialPanel={{
          title: 'First',
          body: <FirstPanel />,
        }}
      />
    </div>
  );
};
`,A={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:65},startBody:{col:23,line:52},endBody:{col:1,line:65}}},$=p.default={parameters:{storySource:{source:`import React from 'react';
import { Button } from '../../Button';
import { PanelStack } from '../PanelStack';
import { usePanels } from '../usePanels';

export default {
  title: '@co-design/core/PanelStack',
  component: PanelStack,
  argTypes: {},
};

const FirstPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is first.
      <Button
        onClick={() =>
          pushPanel({
            title: 'Second',
            body: <SecondPanel />,
          })
        }
      >
        Push second
      </Button>
    </div>
  );
};

const SecondPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is second.
      <Button
        onClick={() =>
          pushPanel({
            title: 'First',
            body: <FirstPanel />,
          })
        }
      >
        Push first
      </Button>
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ padding: 16 }}>
      <PanelStack
        width={400}
        height={600}
        initialPanel={{
          title: 'First',
          body: <FirstPanel />,
        }}
      />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:52},endLoc:{col:1,line:65},startBody:{col:23,line:52},endBody:{col:1,line:65}}}}},title:"@co-design/core/PanelStack",component:S,argTypes:{}},me=function(){var le=C(),pe=le.pushPanel;return Object(_.jsxs)("div",{children:["This is first.",Object(_.jsx)(w.a,{onClick:function(){return pe({title:"Second",body:Object(_.jsx)(ge,{})})},children:"Push second"})]})};me.displayName="FirstPanel";var ge=function(){var le=C(),pe=le.pushPanel;return Object(_.jsxs)("div",{children:["This is second.",Object(_.jsx)(w.a,{onClick:function(){return pe({title:"First",body:Object(_.jsx)(me,{})})},children:"Push first"})]})};ge.displayName="SecondPanel";var je=function(){return Object(_.jsx)("div",{style:{padding:16},children:Object(_.jsx)(S,{width:400,height:600,initialPanel:{title:"First",body:Object(_.jsx)(me,{})}})})};je.displayName="Default"},"./packages/co-design-core/src/components/Paper/Paper.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return q});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-core/src/components/View/View.tsx"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=e("./packages/co-design-core/src/utils/getFieldValue.ts"),oe=Object(ee.a)(function(L,k){var B=k.radius,o=k.shadow,M=k.padding,b=k.withBorder;return{root:{WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:L.colorScheme==="dark"?L.colors.white:L.palettes.gray[8],backgroundColor:L.colorScheme==="dark"?L.colors.darkBackground:L.colors.lightBackground,boxSizing:"border-box",borderRadius:Object(te.a)(B,L.radius),boxShadow:L.colorScheme==="dark"?L.shadows[o].replaceAll(/0, 0, 0/gi,"255, 255, 255"):L.shadows[o]||"none",padding:Object(te.a)(M,L.spacing),border:b?"1px solid "+(L.colorScheme==="dark"?L.colors.darkBorder:L.colors.lightBorder):void 0}}}),G=e("./node_modules/react/jsx-runtime.js"),K=["component","className","children","padding","radius","withBorder","shadow","co","overrideStyles"];function W(L,k){if(L==null)return{};var B=N(L,k),o,M;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(L);for(M=0;M<b.length;M++)o=b[M],!(k.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,o)||(B[o]=L[o]))}return B}function N(L,k){if(L==null)return{};var B={},o=Object.keys(L),M,b;for(b=0;b<o.length;b++)M=o[b],!(k.indexOf(M)>=0)&&(B[M]=L[M]);return B}var q=Object(Y.forwardRef)(function(L,k){var B=L.component,o=L.className,M=L.children,b=L.padding,O=b===void 0?"medium":b,P=L.radius,T=P===void 0?"medium":P,U=L.withBorder,d=U===void 0?!0:U,m=L.shadow,y=m===void 0?"none":m,f=L.co,j=L.overrideStyles,D=W(L,K),_=oe({radius:T,shadow:y,padding:O,withBorder:d},{overrideStyles:j,name:"Paper"}),a=_.classes,s=_.cx;return Object(G.jsx)(X.a,Object.assign({component:B||"div",className:s(a.root,o),co:f,ref:k},D,{children:M}))});q.displayName="@co-design/core/Paper"},"./packages/co-design-core/src/components/Paper/stories/Paper.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Paper/Paper.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Paper } from '../Paper';

export default {
  title: '@co-design/core/Paper',
  component: Paper,
  argTypes: {
    shadow: {
      defaultValue: 'none',
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    withBorder: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300, padding: 24 }}>
      <Paper {...props}>Paper</Paper>
    </div>
  );
};
`,oe={Default:{startLoc:{col:23,line:30},endLoc:{col:1,line:36},startBody:{col:23,line:30},endBody:{col:1,line:36}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Paper } from '../Paper';

export default {
  title: '@co-design/core/Paper',
  component: Paper,
  argTypes: {
    shadow: {
      defaultValue: 'none',
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    withBorder: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300, padding: 24 }}>
      <Paper {...props}>Paper</Paper>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:30},endLoc:{col:1,line:36},startBody:{col:23,line:30},endBody:{col:1,line:36}}}}},title:"@co-design/core/Paper",component:Y.a,argTypes:{shadow:{defaultValue:"none",options:["none","xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},padding:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"medium",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},withBorder:{defaultValue:!0,control:{type:"boolean"}}}};var G=function(W){return Object(X.jsx)("div",{style:{width:300,padding:24},children:Object(X.jsx)(Y.a,Object.assign({},W,{children:"Paper"}))})};G.displayName="Default"},"./packages/co-design-core/src/components/Popover/Popover.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return u});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),q=e("./node_modules/core-js/modules/es.string.split.js"),L=e("./node_modules/core-js/modules/es.regexp.exec.js"),k=e("./node_modules/core-js/modules/es.object.assign.js"),B=e("./node_modules/react/index.js"),o=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),M=e("./packages/co-design-core/src/components/View/View.tsx"),b=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),O=e("./packages/co-design-core/src/utils/getFieldValue.ts"),P=e("./node_modules/core-js/modules/es.string.small.js"),T=e("./packages/co-design-styles/src/tss/createStyles.ts"),U=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),d=Object(T.a)(function(l,h){var E=h.contentPadding;return{root:{display:"inline-block"},balloon:{position:"fixed",display:"inline-block","&.top":{transform:"translate(-50%, -100%)"},"&.top-left":{transform:"translate(0, -100%)"},"&.top-right":{transform:"translate(-100%, -100%)"},"&.bottom":{transform:"translate(-50%)"},"&.bottom-right":{transform:"translate(-100%)"},"&.right":{transform:"translateY(-50%)"},"&.right-bottom":{transform:"translateY(-100%)"},"&.left":{transform:"translate(-100%, -50%)"},"&.left-top":{transform:"translate(-100%, 0)"},"&.left-bottom":{transform:"translate(-100%, -100%)"}},arrow:{position:"absolute",width:12,height:12,backgroundColor:l.colorScheme==="dark"?l.palettes.gray[8]:l.colors.white,userSelect:"none",pointerEvents:"none",borderTop:"1px solid "+(l.colorScheme==="dark"?l.palettes.gray[7]:l.palettes.gray[2]),borderLeft:"1px solid "+(l.colorScheme==="dark"?l.palettes.gray[7]:l.palettes.gray[2]),'&[class^="top"]':{bottom:7,transform:"rotate(-135deg)"},"&.top":{left:"50%",transform:"translate(-50%) rotate(-135deg)"},"&.top-left":{left:6},"&.top-right":{right:6},'&[class^="bottom"]':{top:7,transform:"rotate(45deg)"},"&.bottom":{left:"50%",transform:"translate(-50%) rotate(45deg)"},"&.bottom-left":{left:6},"&.bottom-right":{right:6},'&[class^="right"]':{left:7,transform:"rotate(-45deg)"},"&.right":{top:"50%",transform:"translateY(-50%) rotate(-45deg)"},"&.right-top":{top:6},"&.right-bottom":{bottom:6},'&[class^="left"]':{right:7,transform:"rotate(135deg)"},"&.left":{top:"50%",transform:"translateY(-50%) rotate(135deg)"},"&.left-top":{top:6},"&.left-bottom":{bottom:6}},content:Object.assign({position:"relative",padding:Object(O.a)(E,l.spacing),borderRadius:l.radius.medium,backgroundColor:l.colorScheme==="dark"?l.palettes.gray[8]:l.colors.white},Object(U.c)(l),{fontSize:l.fontSizes.small,color:l.colorScheme==="dark"?l.colors.white:l.palettes.gray[8],border:"1px solid "+(l.colorScheme==="dark"?l.palettes.gray[7]:l.palettes.gray[2]),boxShadow:l.shadows.small,'&[class^="top"]':{bottom:0,marginBottom:12},'&[class^="bottom"]':{marginTop:12},'&[class^="right"]':{marginLeft:12},'&[class^="left"]':{right:0,marginRight:12}})}}),m=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),y=e("./packages/co-design-hooks/src/useClickAway/useClickAway.ts"),f=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),j=e("./packages/co-design-core/src/components/Transition/Transition.tsx"),D=e("./node_modules/react/jsx-runtime.js"),_=["children","visible","content","contentPadding","withArrow","width","placement","trigger","zIndex","target","transition","transitionDuration","transitionTimingFunction","onChangeVisible","className","co","overrideStyles"];function a(l,h){return n(l)||g(l,h)||c(l,h)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(l,h){if(!!l){if(typeof l=="string")return i(l,h);var E=Object.prototype.toString.call(l).slice(8,-1);if(E==="Object"&&l.constructor&&(E=l.constructor.name),E==="Map"||E==="Set")return Array.from(l);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return i(l,h)}}function i(l,h){(h==null||h>l.length)&&(h=l.length);for(var E=0,S=new Array(h);E<h;E++)S[E]=l[E];return S}function g(l,h){var E=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(E!=null){var S=[],C=!0,R=!1,A,$;try{for(E=E.call(l);!(C=(A=E.next()).done)&&(S.push(A.value),!(h&&S.length===h));C=!0);}catch(me){R=!0,$=me}finally{try{!C&&E.return!=null&&E.return()}finally{if(R)throw $}}return S}}function n(l){if(Array.isArray(l))return l}function v(l,h){if(l==null)return{};var E=t(l,h),S,C;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(l);for(C=0;C<R.length;C++)S=R[C],!(h.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,S)||(E[S]=l[S]))}return E}function t(l,h){if(l==null)return{};var E={},S=Object.keys(l),C,R;for(R=0;R<S.length;R++)C=S[R],!(h.indexOf(C)>=0)&&(E[C]=l[C]);return E}var r=function(h,E){if(!E)return{top:0,left:0};var S=0,C=0,R=E.getBoundingClientRect(),A=h.split("-");return A[0]==="top"?S=R.top:A[0]==="right"?C=R.left+R.width:A[0]==="bottom"?S=R.top+R.height:A[0]==="left"&&(C=R.left),A[1]==="top"?S=R.top:A[1]==="right"?C=R.left+R.width:A[1]==="bottom"?S=R.top+R.height:A[1]==="left"?C=R.left:A[0]==="top"||A[0]==="bottom"?C=R.left+R.width/2:(A[0]==="left"||A[0]==="right")&&(S=R.top+R.height/2),{top:S,left:C}},u=function(h){var E=h.children,S=h.visible,C=S===void 0?!1:S,R=h.content,A=h.contentPadding,$=A===void 0?"medium":A,me=h.withArrow,ge=me===void 0?!0:me,je=h.width,H=h.placement,le=H===void 0?"top":H,pe=h.trigger,F=pe===void 0?"click":pe,J=h.zIndex,Z=J===void 0?"dropdown":J,de=h.target,ne=h.transition,ie=ne===void 0?"fade":ne,Ce=h.transitionDuration,De=Ce===void 0?100:Ce,Te=h.transitionTimingFunction,Ve=Te===void 0?"ease":Te,Ue=h.onChangeVisible,Ke=h.className,Ze=h.co,ze=h.overrideStyles,re=v(h,_),ye=Object(o.c)(),Oe=d({contentPadding:$},{overrideStyles:ze,name:"Popover"}),Se=Oe.classes,z=Oe.cx,ae=Object(m.a)(C),fe=a(ae,2),_e=fe[0],be=fe[1],Me=Object(B.useRef)(null),Le=Object(y.a)(function(we){F==="click"&&Le.current&&Me.current&&!Le.current.contains(we.target)&&!Me.current.contains(we.target)&&be(!1)}),Ie=F==="hover"?function(){return be(!0)}:void 0,$e=F==="hover"?function(){return be(!1)}:void 0,Ge=F==="click"?function(we){Le.current.contains(we.nativeEvent.target)&&be(function(Ye){return!Ye})}:void 0,no=F==="focus"?function(){return be(!0)}:void 0,oo=F==="focus"?function(){return be(!1)}:void 0;Object(f.a)(function(){be(C)},[C]),Object(f.a)(function(){Ue==null||Ue(_e)},[_e]);var Xe={width:je||"auto",whiteSpace:je?"normal":"nowrap"},Je=r(le,Le.current);return Object(D.jsxs)(M.a,{ref:Le,onClick:Ge,onFocus:no,onBlur:oo,onMouseEnter:Ie,onMouseLeave:$e,className:z(Se.root,Ke),co:Ze,children:[Object(D.jsx)(b.a,{zIndex:Object(O.a)(Z,ye.zIndex),target:de,children:Object(D.jsx)(j.a,{mounted:_e,transition:ie,duration:De,timingFunction:Ve,children:function(Ye){return Object(D.jsxs)(M.a,Object.assign({className:z(le,Se.balloon),style:Object.assign({},Je,Ye),ref:Me},re,{children:[Object(D.jsx)("div",{className:z(le,Se.content),style:Xe,children:R}),ge&&Object(D.jsx)("div",{className:z(le,Se.arrow)})]}))}})}),E]})};u.displayName="Popover",u.displayName="@co-design/core/Popover"},"./packages/co-design-core/src/components/Popover/stories/Popover.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return N}),e.d(p,"OverrideStyles",function(){return q}),e.d(p,"InModal",function(){return L});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Modal/Modal.tsx"),X=e("./packages/co-design-core/src/components/Center/Center.tsx"),ee=e("./packages/co-design-core/src/components/Popover/Popover.tsx"),te=e("./node_modules/react/jsx-runtime.js"),oe=e.n(te),G=`import React from 'react';
import { Modal } from '../../Modal';
import { Center } from '../../Center';
import { Popover } from '../Popover';

export default {
  title: '@co-design/core/Popover',
  component: Popover,
  argTypes: {
    withArrow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    placement: {
      defaultValue: 'bottom',
      options: [
        'top-left',
        'top',
        'top-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom',
        'bottom-left',
        'bottom',
        'bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    trigger: {
      defaultValue: 'click',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
    contentPadding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
};

const Content = () => <div>Hi! I'm popover</div>;

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Center>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover
        placement="bottom"
        content={<Content />}
        {...props}
        overrideStyles={{
          arrow: {
            backgroundColor: '#333',
            borderColor: '#111',
          },
          content: {
            color: 'white',
            backgroundColor: '#333',
          },
        }}
      >
        <button>Popover</button>
      </Popover>
    </Center>
  );
};

export const InModal = (props) => {
  return (
    <Modal opened onClose={() => {}}>
      <Popover zIndex={3001} placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Modal>
  );
};
`,K={Default:{startLoc:{col:23,line:47},endLoc:{col:1,line:55},startBody:{col:23,line:47},endBody:{col:1,line:55}},OverrideStyles:{startLoc:{col:30,line:57},endLoc:{col:1,line:79},startBody:{col:30,line:57},endBody:{col:1,line:79}},InModal:{startLoc:{col:23,line:81},endLoc:{col:1,line:89},startBody:{col:23,line:81},endBody:{col:1,line:89}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Modal } from '../../Modal';
import { Center } from '../../Center';
import { Popover } from '../Popover';

export default {
  title: '@co-design/core/Popover',
  component: Popover,
  argTypes: {
    withArrow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    placement: {
      defaultValue: 'bottom',
      options: [
        'top-left',
        'top',
        'top-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom',
        'bottom-left',
        'bottom',
        'bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    trigger: {
      defaultValue: 'click',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
    contentPadding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
};

const Content = () => <div>Hi! I'm popover</div>;

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Center>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover
        placement="bottom"
        content={<Content />}
        {...props}
        overrideStyles={{
          arrow: {
            backgroundColor: '#333',
            borderColor: '#111',
          },
          content: {
            color: 'white',
            backgroundColor: '#333',
          },
        }}
      >
        <button>Popover</button>
      </Popover>
    </Center>
  );
};

export const InModal = (props) => {
  return (
    <Modal opened onClose={() => {}}>
      <Popover zIndex={3001} placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Modal>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:47},endLoc:{col:1,line:55},startBody:{col:23,line:47},endBody:{col:1,line:55}},"override-styles":{startLoc:{col:30,line:57},endLoc:{col:1,line:79},startBody:{col:30,line:57},endBody:{col:1,line:79}},"in-modal":{startLoc:{col:23,line:81},endLoc:{col:1,line:89},startBody:{col:23,line:81},endBody:{col:1,line:89}}}}},title:"@co-design/core/Popover",component:ee.a,argTypes:{withArrow:{defaultValue:!0,control:{type:"boolean"}},placement:{defaultValue:"bottom",options:["top-left","top","top-right","left-top","left","left-bottom","right-top","right","right-bottom","bottom-left","bottom","bottom-right"],control:{type:"inline-radio"}},trigger:{defaultValue:"click",options:["hover","click","focus"],control:{type:"inline-radio"}},contentPadding:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}}}};var W=function(){return Object(te.jsx)("div",{children:"Hi! I'm popover"})};W.displayName="Content";var N=function(B){return Object(te.jsx)(X.a,{style:{width:500,height:500},children:Object(te.jsx)(ee.a,Object.assign({placement:"bottom",content:Object(te.jsx)(W,{})},B,{children:Object(te.jsx)("button",{children:"Popover"})}))})};N.displayName="Default";var q=function(B){return Object(te.jsx)(X.a,{style:{width:500,height:500},children:Object(te.jsx)(ee.a,Object.assign({placement:"bottom",content:Object(te.jsx)(W,{})},B,{overrideStyles:{arrow:{backgroundColor:"#333",borderColor:"#111"},content:{color:"white",backgroundColor:"#333"}},children:Object(te.jsx)("button",{children:"Popover"})}))})};q.displayName="OverrideStyles";var L=function(B){return Object(te.jsx)(Y.a,{opened:!0,onClose:function(){},children:Object(te.jsx)(ee.a,Object.assign({zIndex:3001,placement:"bottom",content:Object(te.jsx)(W,{})},B,{children:Object(te.jsx)("button",{children:"Popover"})}))})};L.displayName="InModal"},"./packages/co-design-core/src/components/Portal/Portal.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return r});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./node_modules/react/index.js"),m=e.n(d),y=e("./node_modules/react-dom/index.js"),f=e.n(y),j=e("./packages/co-design-hooks/src/useIsomorphicEffect/useIsomorphicEffect.ts"),D=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),_=e("./packages/co-design-core/src/utils/getFieldValue.ts"),a=e("./node_modules/react/jsx-runtime.js"),s=e.n(a);function c(u,l){return t(u)||v(u,l)||g(u,l)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(u,l){if(!!u){if(typeof u=="string")return n(u,l);var h=Object.prototype.toString.call(u).slice(8,-1);if(h==="Object"&&u.constructor&&(h=u.constructor.name),h==="Map"||h==="Set")return Array.from(u);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(u,l)}}function n(u,l){(l==null||l>u.length)&&(l=u.length);for(var h=0,E=new Array(l);h<l;h++)E[h]=u[h];return E}function v(u,l){var h=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(h!=null){var E=[],S=!0,C=!1,R,A;try{for(h=h.call(u);!(S=(R=h.next()).done)&&(E.push(R.value),!(l&&E.length===l));S=!0);}catch($){C=!0,A=$}finally{try{!S&&h.return!=null&&h.return()}finally{if(C)throw A}}return E}}function t(u){if(Array.isArray(u))return u}var r=function(l){var h=l.children,E=l.zIndex,S=l.target,C=l.className,R=l.style,A=Object(D.c)(),$=Object(d.useState)(!1),me=c($,2),ge=me[0],je=me[1],H=Object(d.useRef)();return Object(j.a)(function(){return je(!0),H.current=S||document.createElement("div"),S||document.body.appendChild(H.current),function(){!S&&document.body.removeChild(H.current)}},[S]),ge?Object(y.createPortal)(Object(a.jsx)("div",{className:C,style:Object.assign({},R,{position:"relative",zIndex:Object(_.a)(E,A.zIndex)||A.zIndex.default}),children:h}),H.current):null};r.displayName="@co-design/core/Portal"},"./packages/co-design-core/src/components/Portal/stories/Portal.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { Portal } from '../Portal';

export default {
  title: '@co-design/core/Portal',
  component: Portal,
};

export const Default = () => {
  return (
    <div>
      <Portal>Portal</Portal>
    </div>
  );
};
`,ee={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Portal } from '../Portal';

export default {
  title: '@co-design/core/Portal',
  component: Portal,
};

export const Default = () => {
  return (
    <div>
      <Portal>Portal</Portal>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:15},startBody:{col:23,line:9},endBody:{col:1,line:15}}}}},title:"@co-design/core/Portal",component:Q.a};var te=function(){return Object(ce.jsx)("div",{children:Object(ce.jsx)(Q.a,{children:"Portal"})})};te.displayName="Default"},"./packages/co-design-core/src/components/Progress/stories/Progress.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return d}),e.d(p,"MultipleSection",function(){return m});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.reduce.js"),ee=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.array.map.js"),oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),K=e("./packages/co-design-styles/src/tss/createStyles.ts"),W={xsmall:6,small:8,medium:12,large:16,xlarge:24},N=Object(G.c)({from:{backgroundPosition:"0 0"},to:{backgroundPosition:"40px 0"}}),q=Object(K.a)(function(y,f){var j=f.color,D=f.radius,_=f.size,a=f.striped,s=f.animate;return{root:{position:"relative",height:y.fn.size({size:_,sizes:W}),backgroundColor:y.colorScheme==="dark"?y.palettes.gray[4]:y.palettes.gray[2],borderRadius:y.fn.size({size:D,sizes:y.radius}),overflow:"hidden"},bar:{position:"absolute",top:0,bottom:0,left:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:y.palettes[j||y.primaryColor][5],transition:"width 100ms linear",animation:s?N+" 1000ms linear infinite":"none",backgroundSize:"20px 20px",backgroundImage:a?"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)":"none","&:last-of-type":{borderTopRightRadius:y.fn.size({size:D,sizes:y.radius}),borderBottomRightRadius:y.fn.size({size:D,sizes:y.radius})},"&:first-of-type":{borderTopLeftRadius:y.fn.size({size:D,sizes:y.radius}),borderBottomLeftRadius:y.fn.size({size:D,sizes:y.radius})},"@media (prefers-reduced-motion)":{transitionDuration:"0ms"}},label:{color:y.colors.white,fontSize:y.fn.size({size:_,sizes:W})*.65,fontWeight:700,userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}}}),L=e("./packages/co-design-core/src/components/Text/Text.tsx"),k=e("./node_modules/react/jsx-runtime.js"),B=["value","color","size","radius","striped","animate","label","sections","className","overrideStyles"];function o(y,f){if(y==null)return{};var j=M(y,f),D,_;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(y);for(_=0;_<a.length;_++)D=a[_],!(f.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,D)||(j[D]=y[D]))}return j}function M(y,f){if(y==null)return{};var j={},D=Object.keys(y),_,a;for(a=0;a<D.length;a++)_=D[a],!(f.indexOf(_)>=0)&&(j[_]=y[_]);return j}var b=function(f){return f.reduce(function(j,D){return j.sections.push(Object.assign({},D,{accumulated:j.accumulated})),j.accumulated+=D.value,j},{accumulated:0,sections:[]}).sections},O=Object(w.forwardRef)(function(y,f){var j=y.value,D=y.color,_=y.size,a=_===void 0?"medium":_,s=y.radius,c=s===void 0?"round":s,i=y.striped,g=i===void 0?!1:i,n=y.animate,v=n===void 0?!1:n,t=y.label,r=t===void 0?"":t,u=y.sections,l=y.className,h=y.overrideStyles,E=o(y,B),S=q({color:D,size:a,radius:c,striped:g||v,animate:v},{overrideStyles:h,name:"Progress"}),C=S.classes,R=S.cx,A=S.theme,$=Array.isArray(u)?b(u).map(function(me,ge){return Object(k.jsx)(oe.a,{className:C.bar,co:{width:me.value+"%",left:me.accumulated+"%",backgroundColor:A.palettes[me.color][5]},children:me.label&&Object(k.jsx)(L.a,{className:C.label,children:me.label})},ge)}):null;return Object(k.jsx)(oe.a,Object.assign({className:R(C.root,l),ref:f},E,{children:$||Object(k.jsx)("div",{role:"progressbar",className:C.bar,style:{width:j+"%"},children:r?Object(k.jsx)(L.a,{className:C.label,children:r}):""})}))});O.displayName="@co-design/core/Progress";var P=`import React from 'react';
import { Progress } from '../Progress';

export default {
  title: '@co-design/core/Progress',
  component: Progress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'round',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    striped: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    animate: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress
        {...props}
        sections={[
          { value: 20, color: 'purple' },
          { value: 15, color: 'green' },
          { value: 30, color: 'orange' },
          { value: 20, color: 'blue' },
        ]}
      />
    </div>
  );
};
`,T={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:47},startBody:{col:23,line:41},endBody:{col:1,line:47}},MultipleSection:{startLoc:{col:31,line:49},endLoc:{col:1,line:63},startBody:{col:31,line:49},endBody:{col:1,line:63}}},U=p.default={parameters:{storySource:{source:`import React from 'react';
import { Progress } from '../Progress';

export default {
  title: '@co-design/core/Progress',
  component: Progress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'round',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    striped: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    animate: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress
        {...props}
        sections={[
          { value: 20, color: 'purple' },
          { value: 15, color: 'green' },
          { value: 30, color: 'orange' },
          { value: 20, color: 'blue' },
        ]}
      />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:47},startBody:{col:23,line:41},endBody:{col:1,line:47}},"multiple-section":{startLoc:{col:31,line:49},endLoc:{col:1,line:63},startBody:{col:31,line:49},endBody:{col:1,line:63}}}}},title:"@co-design/core/Progress",component:O,argTypes:{value:{defaultValue:20,control:{type:"number"}},label:{control:{type:"text"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green"],control:{type:"inline-radio"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},radius:{defaultValue:"round",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},striped:{defaultValue:!1,control:{type:"boolean"}},animate:{defaultValue:!1,control:{type:"boolean"}}}},d=function(f){return Object(k.jsx)("div",{style:{width:600,padding:24},children:Object(k.jsx)(O,Object.assign({},f))})};d.displayName="Default";var m=function(f){return Object(k.jsx)("div",{style:{width:600,padding:24},children:Object(k.jsx)(O,Object.assign({},f,{sections:[{value:20,color:"purple"},{value:15,color:"green"},{value:30,color:"orange"},{value:20,color:"blue"}]}))})};m.displayName="MultipleSection"},"./packages/co-design-core/src/components/RingProgress/stories/RingProgress.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return U}),e.d(p,"MultipleSection",function(){return d});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),ee=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),G=e("./node_modules/react/jsx-runtime.js"),K=function(y){var f=y.size,j=y.thickness,D=y.sum,_=y.value,a=y.root,s=y.offset,c=(f*.9-j*2)/2,i=Math.PI*c*2/100,g=a?(100-D)*i+", "+D*i:_*i+", "+(100-_)*i;return{strokeWidth:j,cx:f/2,cy:f/2,r:c,transform:a?"scale(1, -1) translate(0, -"+f+")":null,strokeDasharray:g,strokeDashoffset:a?0:s}},W=function(y){var f=y.size,j=y.value,D=y.offset,_=y.sum,a=y.thickness,s=y.root,c=y.color,i=y.lineRoundCaps,g=Object(oe.c)(),n=g.palettes[c||"gray"][c?5:g.colorScheme==="dark"?4:2];return Object(G.jsx)("circle",Object.assign({fill:"none",strokeLinecap:i?"round":"butt",stroke:n},K({sum:_,size:f,thickness:a,value:j,offset:D,root:s})))};W.displayName="Curve",W.displayName="@co-design/core/Curve";var N=e("./node_modules/core-js/modules/es.array.reduce.js"),q=function(y){for(var f=y.size,j=y.thickness,D=y.sections,_=y.renderRoundedLineCaps,a=D.reduce(function(t,r){return t+r.value},0),s=Math.PI*((f*.9-j*2)/2)*2,c=s,i=[],g=[],n=0;n<D.length;n+=1)i.push({sum:a,offset:c,data:D[n],root:!1}),c-=D[n].value/100*s;if(i.push({sum:a,offset:c,data:null,root:!0}),g.push(Object.assign({},i[i.length-1],{lineRoundCaps:!1})),i.length>2){g.push(Object.assign({},i[0],{lineRoundCaps:_})),g.push(Object.assign({},i[i.length-2],{lineRoundCaps:_}));for(var v=1;v<=i.length-3;v+=1)g.push(Object.assign({},i[v],{lineRoundCaps:!1}))}else g.push(Object.assign({},i[0],{lineRoundCaps:_}));return g},L=e("./packages/co-design-styles/src/tss/createStyles.ts"),k=Object(L.a)({root:{position:"relative"},label:{position:"absolute",top:"50%",transform:"translateY(-50%)"}}),B=["value","color","sections","size","thickness","roundCaps","className","style","overrideStyles"];function o(m,y){if(m==null)return{};var f=M(m,y),j,D;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(m);for(D=0;D<_.length;D++)j=_[D],!(y.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,j)||(f[j]=m[j]))}return f}function M(m,y){if(m==null)return{};var f={},j=Object.keys(m),D,_;for(_=0;_<j.length;_++)D=j[_],!(y.indexOf(D)>=0)&&(f[D]=m[D]);return f}var b=Object(w.forwardRef)(function(m,y){var f=m.value,j=m.color,D=m.sections,_=m.size,a=_===void 0?120:_,s=m.thickness,c=s===void 0?12:s,i=m.roundCaps,g=m.className,n=m.style,v=m.overrideStyles,t=o(m,B),r=k(null,{overrideStyles:v,name:"RingProgress"}),u=r.classes,l=r.cx,h=q({size:a,thickness:c,sections:Array.isArray(D)?D:[{value:f,color:j}],renderRoundedLineCaps:i}).map(function(E,S){var C,R;return Object(G.jsx)(W,{value:(C=E.data)===null||C===void 0?void 0:C.value,size:a,thickness:c,sum:E.sum,offset:E.offset,color:(R=E.data)===null||R===void 0?void 0:R.color,root:E.root,lineRoundCaps:E.lineRoundCaps},S)});return Object(G.jsx)(te.a,Object.assign({style:Object.assign({width:a,height:a},n),className:l(u.root,g),ref:y},t,{children:Object(G.jsx)("svg",{width:a,height:a,style:{transform:"rotate(-90deg)"},children:h})}))});b.displayName="@co-design/core/RingProgress";var O=`import React from 'react';
import { RingProgress } from '../RingProgress';

export default {
  title: '@co-design/core/RingProgress',
  component: RingProgress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 50,
      control: { type: 'number' },
    },
    thickness: {
      defaultValue: 4,
      control: { type: 'number' },
    },
    roundCaps: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress
        {...props}
        sections={[
          { value: 20, color: 'purple' },
          { value: 15, color: 'green' },
          { value: 30, color: 'orange' },
          { value: 20, color: 'blue' },
        ]}
      />
    </div>
  );
};
`,P={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}},MultipleSection:{startLoc:{col:31,line:40},endLoc:{col:1,line:54},startBody:{col:31,line:40},endBody:{col:1,line:54}}},T=p.default={parameters:{storySource:{source:`import React from 'react';
import { RingProgress } from '../RingProgress';

export default {
  title: '@co-design/core/RingProgress',
  component: RingProgress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 50,
      control: { type: 'number' },
    },
    thickness: {
      defaultValue: 4,
      control: { type: 'number' },
    },
    roundCaps: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress
        {...props}
        sections={[
          { value: 20, color: 'purple' },
          { value: 15, color: 'green' },
          { value: 30, color: 'orange' },
          { value: 20, color: 'blue' },
        ]}
      />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}},"multiple-section":{startLoc:{col:31,line:40},endLoc:{col:1,line:54},startBody:{col:31,line:40},endBody:{col:1,line:54}}}}},title:"@co-design/core/RingProgress",component:b,argTypes:{value:{defaultValue:20,control:{type:"number"}},color:{defaultValue:"purple",options:["purple","gray","red","blue","orange","green"],control:{type:"inline-radio"}},size:{defaultValue:50,control:{type:"number"}},thickness:{defaultValue:4,control:{type:"number"}},roundCaps:{defaultValue:!1,control:{type:"boolean"}}}},U=function(y){return Object(G.jsx)("div",{style:{width:600,padding:24},children:Object(G.jsx)(b,Object.assign({},y))})};U.displayName="Default";var d=function(y){return Object(G.jsx)("div",{style:{width:600,padding:24},children:Object(G.jsx)(b,Object.assign({},y,{sections:[{value:20,color:"purple"},{value:15,color:"green"},{value:30,color:"orange"},{value:20,color:"blue"}]}))})};d.displayName="MultipleSection"},"./packages/co-design-core/src/components/Scroll/stories/Scroll.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return ot});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./node_modules/core-js/modules/web.timers.js"),B=e("./node_modules/core-js/modules/es.parse-int.js"),o=e("./node_modules/core-js/modules/es.object.values.js"),M=e("./node_modules/core-js/modules/es.array.concat.js"),b=e("./node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/core-js/modules/es.array.reduce.js"),P=e("./node_modules/react/jsx-runtime.js"),T=["children"],U=["scope","children"];function d(V){return j(V)||f(V)||y(V)||m()}function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(V,ve){if(!!V){if(typeof V=="string")return D(V,ve);var ue=Object.prototype.toString.call(V).slice(8,-1);if(ue==="Object"&&V.constructor&&(ue=V.constructor.name),ue==="Map"||ue==="Set")return Array.from(V);if(ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ue))return D(V,ve)}}function f(V){if(typeof Symbol!="undefined"&&V[Symbol.iterator]!=null||V["@@iterator"]!=null)return Array.from(V)}function j(V){if(Array.isArray(V))return D(V)}function D(V,ve){(ve==null||ve>V.length)&&(ve=V.length);for(var ue=0,xe=new Array(ve);ue<ve;ue++)xe[ue]=V[ue];return xe}function _(V,ve){if(V==null)return{};var ue=a(V,ve),xe,Ee;if(Object.getOwnPropertySymbols){var Pe=Object.getOwnPropertySymbols(V);for(Ee=0;Ee<Pe.length;Ee++)xe=Pe[Ee],!(ve.indexOf(xe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(V,xe)||(ue[xe]=V[xe]))}return ue}function a(V,ve){if(V==null)return{};var ue={},xe=Object.keys(V),Ee,Pe;for(Pe=0;Pe<xe.length;Pe++)Ee=xe[Pe],!(ve.indexOf(Ee)>=0)&&(ue[Ee]=V[Ee]);return ue}function s(V,ve){var ue=w.createContext(ve);function xe(Pe){var Ae=Pe.children,Be=_(Pe,T),Ne=w.useMemo(function(){return Be},Object.values(Be));return Object(P.jsx)(ue.Provider,{value:Ne,children:Ae})}function Ee(Pe){var Ae=w.useContext(ue);if(Ae)return Ae;if(ve!==void 0)return ve;throw new Error("`"+Pe+"` must be used within `"+V+"`")}return xe.displayName=V+"Provider",[xe,Ee]}function c(V){var ve=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],ue=[];function xe(Pe,Ae){var Be=w.createContext(Ae),Ne=ue.length;ue=[].concat(d(ue),[Ae]);function Fe(Re){var ke=Re.scope,eo=Re.children,He=_(Re,U),qe=(ke==null?void 0:ke[V][Ne])||Be,Qe=w.useMemo(function(){return He},Object.values(He));return Object(P.jsx)(qe.Provider,{value:Qe,children:eo})}function We(Re,ke){var eo=(ke==null?void 0:ke[V][Ne])||Be,He=w.useContext(eo);if(He)return He;if(Ae!==void 0)return Ae;throw new Error("`"+Re+"` must be used within `"+Pe+"`")}return Fe.displayName=Pe+"Provider",[Fe,We]}var Ee=function(){var Ae=ue.map(function(Be){return w.createContext(Be)});return function(Ne){var Fe=(Ne==null?void 0:Ne[V])||Ae;return w.useMemo(function(){var We,Re;return Re={},Re["__scope"+V]=Object.assign({},Ne,(We={},We[V]=Fe,We)),Re},[Ne,Fe])}};return Ee.scopeName=V,[xe,i.apply(void 0,[Ee].concat(d(ve)))]}function i(){for(var V=arguments.length,ve=new Array(V),ue=0;ue<V;ue++)ve[ue]=arguments[ue];var xe=ve[0];if(ve.length===1)return xe;var Ee=function(){var Ae=ve.map(function(Be){return{useScope:Be(),scopeName:Be.scopeName}});return function(Ne){var Fe=Ae.reduce(function(We,Re){var ke=Re.useScope,eo=Re.scopeName,He=ke(Ne),qe=He["__scope"+eo];return Object.assign({},We,qe)},{});return w.useMemo(function(){var We;return We={},We["__scope"+xe.scopeName]=Fe,We},[Fe])}};return Ee.scopeName=xe.scopeName,Ee}var g=e("./packages/co-design-hooks/src/useMergedRef/useMergedRef.ts"),n=e("./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts"),v=e("./packages/co-design-hooks/src/useIsomorphicEffect/useIsomorphicEffect.ts");function t(V,ve){var ue=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},xe=ue.checkForDefaultPrevented,Ee=xe===void 0?!0:xe;return function(Ae){if(V==null||V(Ae),Ee===!1||!Ae.defaultPrevented)return ve==null?void 0:ve(Ae)}}function r(V,ve){return w.useReducer(function(ue,xe){var Ee=ve[ue][xe];return Ee!=null?Ee:ue},V)}var u=e("./packages/co-design-core/src/components/Transition/Transition.tsx");function l(V,ve){return R(V)||C(V,ve)||E(V,ve)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(V,ve){if(!!V){if(typeof V=="string")return S(V,ve);var ue=Object.prototype.toString.call(V).slice(8,-1);if(ue==="Object"&&V.constructor&&(ue=V.constructor.name),ue==="Map"||ue==="Set")return Array.from(V);if(ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ue))return S(V,ve)}}function S(V,ve){(ve==null||ve>V.length)&&(ve=V.length);for(var ue=0,xe=new Array(ve);ue<ve;ue++)xe[ue]=V[ue];return xe}function C(V,ve){var ue=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(ue!=null){var xe=[],Ee=!0,Pe=!1,Ae,Be;try{for(ue=ue.call(V);!(Ee=(Ae=ue.next()).done)&&(xe.push(Ae.value),!(ve&&xe.length===ve));Ee=!0);}catch(Ne){Pe=!0,Be=Ne}finally{try{!Ee&&ue.return!=null&&ue.return()}finally{if(Pe)throw Be}}return xe}}function R(V){if(Array.isArray(V))return V}var A=function(ve,ue){var xe=l(ue,2),Ee=xe[0],Pe=xe[1];return Math.min(Pe,Math.max(Ee,ve))},$=["__scopeScrollArea","type","scrollHideDelay"],me=["__scopeScrollArea","children"],ge=["forceMount"],je=["forceMount"],H=["forceMount"],le=["forceMount"],pe=["orientation"],F=["sizes","onSizesChange"],J=["sizes","onSizesChange"],Z=["__scopeScrollArea","sizes","hasThumb","onThumbChange","onThumbPointerUp","onThumbPointerDown","onThumbPositionChange","onDragScroll","onWheelScroll","onResize"],de=["__scopeScrollArea","style"],ne=["__scopeScrollArea"];function ie(V,ve){if(V==null)return{};var ue=Ce(V,ve),xe,Ee;if(Object.getOwnPropertySymbols){var Pe=Object.getOwnPropertySymbols(V);for(Ee=0;Ee<Pe.length;Ee++)xe=Pe[Ee],!(ve.indexOf(xe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(V,xe)||(ue[xe]=V[xe]))}return ue}function Ce(V,ve){if(V==null)return{};var ue={},xe=Object.keys(V),Ee,Pe;for(Pe=0;Pe<xe.length;Pe++)Ee=xe[Pe],!(ve.indexOf(Ee)>=0)&&(ue[Ee]=V[Ee]);return ue}function De(V,ve){return Ze(V)||Ke(V,ve)||Ve(V,ve)||Te()}function Te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(V,ve){if(!!V){if(typeof V=="string")return Ue(V,ve);var ue=Object.prototype.toString.call(V).slice(8,-1);if(ue==="Object"&&V.constructor&&(ue=V.constructor.name),ue==="Map"||ue==="Set")return Array.from(V);if(ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ue))return Ue(V,ve)}}function Ue(V,ve){(ve==null||ve>V.length)&&(ve=V.length);for(var ue=0,xe=new Array(ve);ue<ve;ue++)xe[ue]=V[ue];return xe}function Ke(V,ve){var ue=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(ue!=null){var xe=[],Ee=!0,Pe=!1,Ae,Be;try{for(ue=ue.call(V);!(Ee=(Ae=ue.next()).done)&&(xe.push(Ae.value),!(ve&&xe.length===ve));Ee=!0);}catch(Ne){Pe=!0,Be=Ne}finally{try{!Ee&&ue.return!=null&&ue.return()}finally{if(Pe)throw Be}}return xe}}function Ze(V){if(Array.isArray(V))return V}var ze="ScrollArea",re=c(ze),ye=De(re,2),Oe=ye[0],Se=ye[1],z=Oe(ze),ae=De(z,2),fe=ae[0],_e=ae[1],be=w.forwardRef(function(V,ve){var ue,xe=V.__scopeScrollArea,Ee=V.type,Pe=Ee===void 0?"hover":Ee,Ae=V.scrollHideDelay,Be=Ae===void 0?600:Ae,Ne=ie(V,$),Fe=w.useState(null),We=De(Fe,2),Re=We[0],ke=We[1],eo=w.useState(null),He=De(eo,2),qe=He[0],Qe=He[1],po=w.useState(null),So=De(po,2),jo=So[0],To=So[1],Ao=w.useState(null),Ro=De(Ao,2),Vo=Ro[0],Bo=Ro[1],Ko=w.useState(null),Uo=De(Ko,2),vo=Uo[0],Do=Uo[1],Mo=w.useState(0),Wo=De(Mo,2),wo=Wo[0],tt=Wo[1],yt=w.useState(0),ko=De(yt,2),pt=ko[0],nt=ko[1],ht=w.useState(!1),Zo=De(ht,2),bt=Zo[0],rt=Zo[1],Ot=w.useState(!1),$o=De(Ot,2),xt=$o[0],st=$o[1],Dt=Object(g.b)(ve,function(lt){return ke(lt)});return Object(P.jsx)(fe,{scope:xe,type:Pe,scrollHideDelay:Be,scrollArea:Re,viewport:qe,onViewportChange:Qe,content:jo,onContentChange:To,scrollbarX:Vo,onScrollbarXChange:Bo,scrollbarXEnabled:bt,onScrollbarXEnabledChange:rt,scrollbarY:vo,onScrollbarYChange:Do,scrollbarYEnabled:xt,onScrollbarYEnabledChange:st,onCornerWidthChange:tt,onCornerHeightChange:nt,children:Object(P.jsx)("div",Object.assign({},Ne,{ref:Dt,style:Object.assign((ue={position:"relative"},ue["--radix-scroll-area-corner-width"]=wo+"px",ue["--radix-scroll-area-corner-height"]=pt+"px",ue),V.style)}))})});be.displayName=ze;var Me="ScrollAreaViewport",Le=w.forwardRef(function(V,ve){var ue=V.__scopeScrollArea,xe=V.children,Ee=ie(V,me),Pe=_e(Me,ue),Ae=w.useRef(null),Be=Object(g.b)(ve,Ae,Pe.onViewportChange);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),Object(P.jsx)("div",Object.assign({"data-radix-scroll-area-viewport":""},Ee,{ref:Be,style:Object.assign({overflowX:Pe.scrollbarXEnabled?"scroll":"hidden",overflowY:Pe.scrollbarYEnabled?"scroll":"hidden"},V.style),children:Object(P.jsx)("div",{ref:Pe.onContentChange,style:{minWidth:"100%",display:"table"},children:xe})}))]})});Le.displayName=Me;var Ie="ScrollAreaScrollbar",$e=w.forwardRef(function(V,ve){var ue=V.forceMount,xe=ie(V,ge),Ee=_e(Ie,V.__scopeScrollArea),Pe=Ee.onScrollbarXEnabledChange,Ae=Ee.onScrollbarYEnabledChange,Be=V.orientation==="horizontal";return w.useEffect(function(){return Be?Pe(!0):Ae(!0),function(){Be?Pe(!1):Ae(!1)}},[Be,Pe,Ae]),Ee.type==="hover"?Object(P.jsx)(Ge,Object.assign({},xe,{ref:ve,forceMount:ue})):Ee.type==="scroll"?Object(P.jsx)(no,Object.assign({},xe,{ref:ve,forceMount:ue})):Ee.type==="auto"?Object(P.jsx)(oo,Object.assign({},xe,{ref:ve,forceMount:ue})):Ee.type==="always"?Object(P.jsx)(Xe,Object.assign({},xe,{ref:ve})):null});$e.displayName=Ie;var Ge=w.forwardRef(function(V,ve){var ue=V.forceMount,xe=ie(V,je),Ee=_e(Ie,V.__scopeScrollArea),Pe=w.useState(!1),Ae=De(Pe,2),Be=Ae[0],Ne=Ae[1];return w.useEffect(function(){var Fe=Ee.scrollArea,We=0;if(Fe){var Re=function(){window.clearTimeout(We),Ne(!0)},ke=function(){We=window.setTimeout(function(){return Ne(!1)},Ee.scrollHideDelay)};return Fe.addEventListener("pointerenter",Re),Fe.addEventListener("pointerleave",ke),function(){Fe.removeEventListener("pointerenter",Re),Fe.removeEventListener("pointerleave",ke)}}},[Ee.scrollArea,Ee.scrollHideDelay]),Object(P.jsx)(u.a,{mounted:Be,transition:"fade",duration:200,children:function(We){return Object(P.jsx)(oo,Object.assign({},xe,{style:Object.assign({},We,xe.style),ref:ve}))}})}),no=w.forwardRef(function(V,ve){var ue=V.forceMount,xe=ie(V,H),Ee=_e(Ie,V.__scopeScrollArea),Pe=V.orientation==="horizontal",Ae=Oo(function(){return We("SCROLL_END")},100),Be=r("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}}),Ne=De(Be,2),Fe=Ne[0],We=Ne[1];return w.useEffect(function(){if(Fe==="idle"){var Re=window.setTimeout(function(){return We("HIDE")},Ee.scrollHideDelay);return function(){return window.clearTimeout(Re)}}},[Fe,Ee.scrollHideDelay,We]),w.useEffect(function(){var Re=Ee.viewport,ke=Pe?"scrollLeft":"scrollTop";if(Re){var eo=Re[ke],He=function(){var Qe=Re[ke],po=eo!==Qe;po&&(We("SCROLL"),Ae()),eo=Qe};return Re.addEventListener("scroll",He),function(){return Re.removeEventListener("scroll",He)}}},[Ee.viewport,Pe,We,Ae]),Object(P.jsx)(u.a,{mounted:Fe!=="hidden",transition:"fade",duration:200,children:function(ke){return Object(P.jsx)(Xe,Object.assign({},xe,{style:Object.assign({},ke,xe.style),ref:ve,onPointerEnter:t(V.onPointerEnter,function(){return We("POINTER_ENTER")}),onPointerLeave:t(V.onPointerLeave,function(){return We("POINTER_LEAVE")})}))}})}),oo=w.forwardRef(function(V,ve){var ue=_e(Ie,V.__scopeScrollArea),xe=V.forceMount,Ee=ie(V,le),Pe=w.useState(!1),Ae=De(Pe,2),Be=Ae[0],Ne=Ae[1],Fe=V.orientation==="horizontal",We=Oo(function(){if(ue.viewport){var Re=ue.viewport.offsetWidth<ue.viewport.scrollWidth,ke=ue.viewport.offsetHeight<ue.viewport.scrollHeight;Ne(Fe?Re:ke)}},10);return xo(ue.viewport,We),xo(ue.content,We),Object(P.jsx)(u.a,{mounted:Be,transition:"fade",duration:200,children:function(ke){return Object(P.jsx)(Xe,Object.assign({},Ee,{style:Object.assign({},ke,Ee.style),ref:ve}))}})}),Xe=w.forwardRef(function(V,ve){var ue=V.orientation,xe=ue===void 0?"vertical":ue,Ee=ie(V,pe),Pe=_e(Ie,V.__scopeScrollArea),Ae=w.useRef(null),Be=w.useRef(0),Ne=w.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),Fe=De(Ne,2),We=Fe[0],Re=Fe[1],ke=yo(We.viewport,We.content),eo=Object.assign({},Ee,{sizes:We,onSizesChange:Re,hasThumb:Boolean(ke>0&&ke<1),onThumbChange:function(Qe){return Ae.current=Qe},onThumbPointerUp:function(){return Be.current=0},onThumbPointerDown:function(Qe){return Be.current=Qe}});function He(qe){return Eo(qe,Be.current,We)}return xe==="horizontal"?Object(P.jsx)(Je,Object.assign({},eo,{ref:ve,onThumbPositionChange:function(){if(Pe.viewport&&Ae.current){var Qe=Pe.viewport.scrollLeft,po=bo(Qe,We);Ae.current.style.transform="translate3d("+po+"px, 0, 0)"}},onWheelScroll:function(Qe){Pe.viewport&&(Pe.viewport.scrollLeft=Qe)},onDragScroll:function(Qe){Pe.viewport&&(Pe.viewport.scrollLeft=He(Qe))}})):xe==="vertical"?Object(P.jsx)(we,Object.assign({},eo,{ref:ve,onThumbPositionChange:function(){if(Pe.viewport&&Ae.current){var Qe=Pe.viewport.scrollTop,po=bo(Qe,We);Ae.current.style.transform="translate3d(0, "+po+"px, 0)"}},onWheelScroll:function(Qe){Pe.viewport&&(Pe.viewport.scrollTop=Qe)},onDragScroll:function(Qe){Pe.viewport&&(Pe.viewport.scrollTop=He(Qe))}})):null}),Je=w.forwardRef(function(V,ve){var ue,xe=V.sizes,Ee=V.onSizesChange,Pe=ie(V,F),Ae=_e(Ie,V.__scopeScrollArea),Be=w.useState(),Ne=De(Be,2),Fe=Ne[0],We=Ne[1],Re=w.useRef(null),ke=Object(g.b)(ve,Re,Ae.onScrollbarXChange);return w.useEffect(function(){Re.current&&We(getComputedStyle(Re.current))},[Re]),Object(P.jsx)(lo,Object.assign({"data-orientation":"horizontal"},Pe,{ref:ke,sizes:xe,style:Object.assign((ue={bottom:0,left:"var(--radix-scroll-area-corner-width)"},ue["--radix-scroll-area-thumb-width"]=go(xe)+"px",ue),V.style),onThumbPointerDown:function(He){return V.onThumbPointerDown(He.x)},onDragScroll:function(He){return V.onDragScroll(He.x)},onWheelScroll:function(He,qe){if(Ae.viewport){var Qe=Ae.viewport.scrollLeft+He.deltaX;V.onWheelScroll(Qe),ho(Qe,qe)&&He.preventDefault()}},onResize:function(){Re.current&&Ae.viewport&&Fe&&Ee({content:Ae.viewport.scrollWidth,viewport:Ae.viewport.offsetWidth,scrollbar:{size:Re.current.clientWidth,paddingStart:_o(Fe.paddingLeft),paddingEnd:_o(Fe.paddingRight)}})}}))}),we=w.forwardRef(function(V,ve){var ue,xe=V.sizes,Ee=V.onSizesChange,Pe=ie(V,J),Ae=_e(Ie,V.__scopeScrollArea),Be=w.useState(),Ne=De(Be,2),Fe=Ne[0],We=Ne[1],Re=w.useRef(null),ke=Object(g.b)(ve,Re,Ae.onScrollbarYChange);return w.useEffect(function(){Re.current&&We(getComputedStyle(Re.current))},[Re]),Object(P.jsx)(lo,Object.assign({"data-orientation":"vertical"},Pe,{ref:ke,sizes:xe,style:Object.assign((ue={top:0,right:0,bottom:"var(--radix-scroll-area-corner-height)"},ue["--radix-scroll-area-thumb-height"]=go(xe)+"px",ue),V.style),onThumbPointerDown:function(He){return V.onThumbPointerDown(He.y)},onDragScroll:function(He){return V.onDragScroll(He.y)},onWheelScroll:function(He,qe){if(Ae.viewport){var Qe=Ae.viewport.scrollTop+He.deltaY;V.onWheelScroll(Qe),ho(Qe,qe)&&He.preventDefault()}},onResize:function(){Re.current&&Ae.viewport&&Fe&&Ee({content:Ae.viewport.scrollHeight,viewport:Ae.viewport.offsetHeight,scrollbar:{size:Re.current.clientHeight,paddingStart:_o(Fe.paddingTop),paddingEnd:_o(Fe.paddingBottom)}})}}))}),Ye=Oe(Ie),to=De(Ye,2),uo=to[0],ro=to[1],lo=w.forwardRef(function(V,ve){var ue=V.__scopeScrollArea,xe=V.sizes,Ee=V.hasThumb,Pe=V.onThumbChange,Ae=V.onThumbPointerUp,Be=V.onThumbPointerDown,Ne=V.onThumbPositionChange,Fe=V.onDragScroll,We=V.onWheelScroll,Re=V.onResize,ke=ie(V,Z),eo=_e(Ie,ue),He=w.useState(null),qe=De(He,2),Qe=qe[0],po=qe[1],So=Object(g.b)(ve,function(vo){return po(vo)}),jo=w.useRef(null),To=w.useRef(""),Ao=eo.viewport,Ro=xe.content-xe.viewport,Vo=Object(n.a)(We),Bo=Object(n.a)(Ne),Ko=Oo(Re,10);function Uo(vo){if(jo.current){var Do=vo.clientX-jo.current.left,Mo=vo.clientY-jo.current.top;Fe({x:Do,y:Mo})}}return w.useEffect(function(){var vo=function(Mo){var Wo=Mo.target,wo=Qe==null?void 0:Qe.contains(Wo);wo&&Vo(Mo,Ro)};return document.addEventListener("wheel",vo,{passive:!1}),function(){return document.removeEventListener("wheel",vo,{passive:!1})}},[Ao,Qe,Ro,Vo]),w.useEffect(Bo,[xe,Bo]),xo(Qe,Ko),xo(eo.content,Ko),Object(P.jsx)(uo,{scope:ue,scrollbar:Qe,hasThumb:Ee,onThumbChange:Object(n.a)(Pe),onThumbPointerUp:Object(n.a)(Ae),onThumbPositionChange:Bo,onThumbPointerDown:Object(n.a)(Be),children:Object(P.jsx)("div",Object.assign({},ke,{ref:So,style:Object.assign({position:"absolute"},ke.style),onPointerDown:t(V.onPointerDown,function(vo){var Do=0;if(vo.button===Do){var Mo=vo.target;Mo.setPointerCapture(vo.pointerId),jo.current=Qe.getBoundingClientRect(),To.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",Uo(vo)}}),onPointerMove:t(V.onPointerMove,Uo),onPointerUp:t(V.onPointerUp,function(vo){var Do=vo.target;Do.releasePointerCapture(vo.pointerId),document.body.style.webkitUserSelect=To.current,jo.current=null})}))})}),ao="ScrollbarThumb",so=w.forwardRef(function(V,ve){var ue=V.__scopeScrollArea,xe=V.style,Ee=ie(V,de),Pe=_e(ao,ue),Ae=ro(ao,ue),Be=Ae.onThumbPositionChange,Ne=Object(g.b)(ve,function(Re){return Ae.onThumbChange(Re)}),Fe=w.useRef(),We=Oo(function(){Fe.current&&(Fe.current(),Fe.current=void 0)},100);return w.useEffect(function(){var Re=Pe.viewport;if(Re){var ke=function(){if(We(),!Fe.current){var He=Io(Re,Be);Fe.current=He,Be()}};return Be(),Re.addEventListener("scroll",ke),function(){return Re.removeEventListener("scroll",ke)}}},[Pe.viewport,We,Be]),Ae.hasThumb?Object(P.jsx)("div",Object.assign({},Ee,{ref:Ne,style:Object.assign({width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)"},xe),onPointerDownCapture:t(V.onPointerDownCapture,function(Re){var ke=Re.target,eo=ke.getBoundingClientRect(),He=Re.clientX-eo.left,qe=Re.clientY-eo.top;Ae.onThumbPointerDown({x:He,y:qe})}),onPointerUp:t(V.onPointerUp,Ae.onThumbPointerUp)})):null});so.displayName=ao;var mo="ScrollAreaCorner",io=w.forwardRef(function(V,ve){var ue=_e(mo,V.__scopeScrollArea),xe=Boolean(ue.scrollbarX&&ue.scrollbarY),Ee=ue.type!=="scroll"&&xe;return Ee?Object(P.jsx)(fo,Object.assign({},V,{ref:ve})):null});io.displayName=mo;var fo=w.forwardRef(function(V,ve){var ue=V.__scopeScrollArea,xe=ie(V,ne),Ee=_e(mo,ue),Pe=w.useState(0),Ae=De(Pe,2),Be=Ae[0],Ne=Ae[1],Fe=w.useState(0),We=De(Fe,2),Re=We[0],ke=We[1],eo=Boolean(Be&&Re);return xo(Ee.scrollbarX,function(){var He,qe=((He=Ee.scrollbarX)===null||He===void 0?void 0:He.offsetHeight)||0;Ee.onCornerHeightChange(qe),ke(qe)}),xo(Ee.scrollbarY,function(){var He,qe=((He=Ee.scrollbarY)===null||He===void 0?void 0:He.offsetWidth)||0;Ee.onCornerWidthChange(qe),Ne(qe)}),eo?Object(P.jsx)("div",Object.assign({},xe,{ref:ve,style:Object.assign({width:Be,height:Re,position:"absolute",right:0,bottom:0},V.style)})):null});function _o(V){return V?parseInt(V,10):0}function yo(V,ve){var ue=V/ve;return isNaN(ue)?0:ue}function go(V){var ve=yo(V.viewport,V.content),ue=V.scrollbar.paddingStart+V.scrollbar.paddingEnd,xe=(V.scrollbar.size-ue)*ve;return Math.max(xe,18)}function Eo(V,ve,ue){var xe=go(ue),Ee=xe/2,Pe=ve||Ee,Ae=xe-Pe,Be=ue.scrollbar.paddingStart+Pe,Ne=ue.scrollbar.size-ue.scrollbar.paddingEnd-Ae,Fe=ue.content-ue.viewport,We=[0,Fe],Re=Co([Be,Ne],We);return Re(V)}function bo(V,ve){var ue=go(ve),xe=ve.scrollbar.paddingStart+ve.scrollbar.paddingEnd,Ee=ve.scrollbar.size-xe,Pe=ve.content-ve.viewport,Ae=Ee-ue,Be=[0,Pe],Ne=A(V,Be),Fe=Co([0,Pe],[0,Ae]);return Fe(Ne)}function Co(V,ve){return function(ue){if(V[0]===V[1]||ve[0]===ve[1])return ve[0];var xe=(ve[1]-ve[0])/(V[1]-V[0]);return ve[0]+xe*(ue-V[0])}}function ho(V,ve){return V>0&&V<ve}var Io=function(ve){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},xe={left:ve.scrollLeft,top:ve.scrollTop},Ee=0;return function Pe(){var Ae={left:ve.scrollLeft,top:ve.scrollTop},Be=xe.left!==Ae.left,Ne=xe.top!==Ae.top;(Be||Ne)&&ue(),xe=Ae,Ee=window.requestAnimationFrame(Pe)}(),function(){return window.cancelAnimationFrame(Ee)}};function Oo(V,ve){var ue=Object(n.a)(V),xe=w.useRef(0);return w.useEffect(function(){return function(){return window.clearTimeout(xe.current)}},[]),w.useCallback(function(){window.clearTimeout(xe.current),xe.current=window.setTimeout(ue,ve)},[ue,ve])}function xo(V,ve){var ue=Object(n.a)(ve);Object(v.a)(function(){var xe=0;if(V){var Ee=new ResizeObserver(function(){cancelAnimationFrame(xe),xe=window.requestAnimationFrame(ue)});return Ee.observe(V),function(){window.cancelAnimationFrame(xe),Ee.unobserve(V)}}},[V,ue])}var Lo=be,ct=Le,Fo=$e,Go=so,Yo=io,dt=e("./packages/co-design-core/src/components/View/View.tsx"),Qo=e("./packages/co-design-styles/src/tss/createStyles.ts"),ut=Object(Qo.a)(function(V,ve,ue){var xe,Ee=ve.scrollbarSize,Pe=ve.scrollbarHovered,Ae=ue("thumb");return{root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:Ee},scrollbar:{display:"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:Ee/5,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":(xe={backgroundColor:V.colorScheme==="dark"?V.palettes.gray[8]:V.palettes.gray[2]},xe["& ."+Ae]={backgroundColor:V.colorScheme==="dark"?V.fn.rgba("#ffffff",.5):V.fn.rgba(V.colors.black,.5)},xe),'&[data-orientation="vertical"]':{width:Ee},'&[data-orientation="horizontal"]':{flexDirection:"column",height:Ee},'&[data-state="hidden"]':{opacity:0}},thumb:{ref:Ae,flex:1,backgroundColor:V.colorScheme==="dark"?V.fn.rgba("#ffffff",.4):V.fn.rgba(V.colors.black,.4),borderRadius:Ee,position:"relative",transition:"background-color 150ms ease","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:44,minHeight:44}},corner:{backgroundColor:V.colorScheme==="dark"?V.palettes.gray[6]:V.palettes.gray[2],transition:"opacity 150ms ease",opacity:Pe?1:0}}}),Xo=["children","scrollbarSize","scrollHideDelay","type","viewportRef","className","co","overrideStyles"];function mt(V,ve){return qo(V)||vt(V,ve)||ft(V,ve)||Jo()}function Jo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(V,ve){if(!!V){if(typeof V=="string")return Ho(V,ve);var ue=Object.prototype.toString.call(V).slice(8,-1);if(ue==="Object"&&V.constructor&&(ue=V.constructor.name),ue==="Map"||ue==="Set")return Array.from(V);if(ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ue))return Ho(V,ve)}}function Ho(V,ve){(ve==null||ve>V.length)&&(ve=V.length);for(var ue=0,xe=new Array(ve);ue<ve;ue++)xe[ue]=V[ue];return xe}function vt(V,ve){var ue=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(ue!=null){var xe=[],Ee=!0,Pe=!1,Ae,Be;try{for(ue=ue.call(V);!(Ee=(Ae=ue.next()).done)&&(xe.push(Ae.value),!(ve&&xe.length===ve));Ee=!0);}catch(Ne){Pe=!0,Be=Ne}finally{try{!Ee&&ue.return!=null&&ue.return()}finally{if(Pe)throw Be}}return xe}}function qo(V){if(Array.isArray(V))return V}function _t(V,ve){if(V==null)return{};var ue=et(V,ve),xe,Ee;if(Object.getOwnPropertySymbols){var Pe=Object.getOwnPropertySymbols(V);for(Ee=0;Ee<Pe.length;Ee++)xe=Pe[Ee],!(ve.indexOf(xe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(V,xe)||(ue[xe]=V[xe]))}return ue}function et(V,ve){if(V==null)return{};var ue={},xe=Object.keys(V),Ee,Pe;for(Pe=0;Pe<xe.length;Pe++)Ee=xe[Pe],!(ve.indexOf(Ee)>=0)&&(ue[Ee]=V[Ee]);return ue}var zo=Object(w.forwardRef)(function(V,ve){var ue=V.children,xe=V.scrollbarSize,Ee=xe===void 0?12:xe,Pe=V.scrollHideDelay,Ae=Pe===void 0?1e3:Pe,Be=V.type,Ne=Be===void 0?"hover":Be,Fe=V.viewportRef,We=V.className,Re=V.co,ke=V.overrideStyles,eo=_t(V,Xo),He=Object(w.useState)(!1),qe=mt(He,2),Qe=qe[0],po=qe[1],So=ut({scrollbarSize:Ee,scrollbarHovered:Qe},{name:"ScrollArea",overrideStyles:ke}),jo=So.classes,To=So.cx;return Object(P.jsx)(Lo,{type:Ne,scrollHideDelay:Ae,ref:ve,children:Object(P.jsxs)(dt.a,Object.assign({className:To(jo.root,We),co:Re},eo,{children:[Object(P.jsx)(ct,{className:jo.viewport,ref:Fe,children:ue}),Object(P.jsx)(Fo,{orientation:"horizontal",className:jo.scrollbar,forceMount:!0,onMouseEnter:function(){return po(!0)},onMouseLeave:function(){return po(!1)},children:Object(P.jsx)(Go,{className:jo.thumb})}),Object(P.jsx)(Fo,{orientation:"vertical",className:jo.scrollbar,forceMount:!0,onMouseEnter:function(){return po(!0)},onMouseLeave:function(){return po(!1)},children:Object(P.jsx)(Go,{className:jo.thumb})}),Object(P.jsx)(Yo,{className:jo.corner})]}))})});zo.displayName="@co-design/core/Scroll";var gt=`import React from 'react';
import { Scroll } from '../Scroll';

export default {
  title: '@co-design/core/Scroll',
  component: Scroll,
  argTypes: {
    type: {
      defaultValue: 'hover',
      options: ['hover', 'auto', 'always', 'scroll'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Scroll type="hover" style={{ height: 200 }} {...props}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Scroll>
    </div>
  );
};
`,Et={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:41},startBody:{col:23,line:16},endBody:{col:1,line:41}}},jt=p.default={parameters:{storySource:{source:`import React from 'react';
import { Scroll } from '../Scroll';

export default {
  title: '@co-design/core/Scroll',
  component: Scroll,
  argTypes: {
    type: {
      defaultValue: 'hover',
      options: ['hover', 'auto', 'always', 'scroll'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Scroll type="hover" style={{ height: 200 }} {...props}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Scroll>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:41},startBody:{col:23,line:16},endBody:{col:1,line:41}}}}},title:"@co-design/core/Scroll",component:zo,argTypes:{type:{defaultValue:"hover",options:["hover","auto","always","scroll"],control:{type:"inline-radio"}}}},ot=function(ve){return Object(P.jsx)("div",{style:{width:200,height:200},children:Object(P.jsxs)(zo,Object.assign({type:"hover",style:{height:200}},ve,{children:[Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"}),Object(P.jsx)("div",{children:"Test"})]}))})};ot.displayName="Default"},"./packages/co-design-core/src/components/Spinner/Spinner.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return q});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-styles/src/tss/createStyles.ts"),ee=e("./packages/co-design-core/src/constants/index.ts"),te=Object(X.a)(function(L,k){var B=k.size,o=k.color,M=o===void 0?L.colorScheme==="light"?L.palettes.gray[8]:L.colors.white:o in L.palettes?L.colorScheme==="light"?L.palettes[o][5]:L.palettes[o][3]:o in L.colors?L.colors[o]:o;return{root:{position:"relative",display:"inline-block",width:B in ee.a?ee.a[B]:B,height:B in ee.a?ee.a[B]:B,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:M},circle:{fill:M}}}}),oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./node_modules/react/jsx-runtime.js"),K=["size","color","className","co","overrideStyles"];function W(L,k){if(L==null)return{};var B=N(L,k),o,M;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(L);for(M=0;M<b.length;M++)o=b[M],!(k.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(L,o)||(B[o]=L[o]))}return B}function N(L,k){if(L==null)return{};var B={},o=Object.keys(L),M,b;for(b=0;b<o.length;b++)M=o[b],!(k.indexOf(M)>=0)&&(B[M]=L[M]);return B}var q=Object(Y.forwardRef)(function(L,k){var B=L.size,o=B===void 0?"medium":B,M=L.color,b=L.className,O=L.co,P=L.overrideStyles,T=W(L,K),U=te({size:o,color:M},{overrideStyles:P,name:"Spinner"}),d=U.classes,m=U.cx,y=Object(G.jsx)("i",{className:d.inner,children:Object(G.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(G.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(G.jsxs)("g",{transform:"translate(1 1)",children:[Object(G.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(G.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(G.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(G.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(G.jsx)(oe.a,Object.assign({ref:k,className:m(d.root,b),co:O},T,{children:y}))});q.displayName="@co-design/core/Spinner"},"./packages/co-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Spinner/Spinner.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Spinner } from '../Spinner';

export default {
  title: '@co-design/core/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
`,oe={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Spinner } from '../Spinner';

export default {
  title: '@co-design/core/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@co-design/core/Spinner",component:Y.a,argTypes:{size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{control:{type:"color"}}}};var G=function(W){return Object(X.jsx)(Y.a,Object.assign({},W))};G.displayName="Default"},"./packages/co-design-core/src/components/Stack/stories/Stack.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return b});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./packages/co-design-styles/src/tss/createStyles.ts"),G=e("./packages/co-design-core/src/utils/getFieldValue.ts"),K=Object(oe.a)(function(O,P){var T=P.spacing,U=P.justify,d=P.align,m=Object(G.a)(T,O.spacing);return{root:{boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:U,alignItems:d,gap:m},child:{}}}),W=e("./node_modules/react/jsx-runtime.js"),N=["children","justify","align","spacing","className","co","overrideStyles"];function q(O,P){if(O==null)return{};var T=L(O,P),U,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(O);for(d=0;d<m.length;d++)U=m[d],!(P.indexOf(U)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,U)||(T[U]=O[U]))}return T}function L(O,P){if(O==null)return{};var T={},U=Object.keys(O),d,m;for(m=0;m<U.length;m++)d=U[m],!(P.indexOf(d)>=0)&&(T[d]=O[d]);return T}var k=Object(w.forwardRef)(function(O,P){var T=O.children,U=O.justify,d=O.align,m=O.spacing,y=m===void 0?"medium":m,f=O.className,j=O.co,D=O.overrideStyles,_=q(O,N),a=K({justify:U,align:d,spacing:y},{overrideStyles:D,name:"Stack"}),s=a.classes,c=a.cx,i=w.Children.toArray(T).map(function(g){return Q.a.cloneElement(g,{className:c(s.child,g.props.className)})});return Object(W.jsx)(te.a,Object.assign({ref:P,className:c(s.root,f),co:j},_,{children:i}))});k.displayName="@co-design/core/Stack";var B=`import React from 'react';
import { Stack } from '../Stack';

export default {
  title: '@co-design/core/Stack',
  component: Stack,
  argTypes: {
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <Stack {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Stack>
    </>
  );
};
`,o={Default:{startLoc:{col:23,line:25},endLoc:{col:1,line:36},startBody:{col:23,line:25},endBody:{col:1,line:36}}},M=p.default={parameters:{storySource:{source:`import React from 'react';
import { Stack } from '../Stack';

export default {
  title: '@co-design/core/Stack',
  component: Stack,
  argTypes: {
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <Stack {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Stack>
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:25},endLoc:{col:1,line:36},startBody:{col:23,line:25},endBody:{col:1,line:36}}}}},title:"@co-design/core/Stack",component:k,argTypes:{align:{defaultValue:"start",options:["start","center","end"],control:{type:"inline-radio"}},spacing:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},grow:{defaultValue:!1,control:{type:"boolean"}}}},b=function(P){return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(k,Object.assign({},P,{children:[Object(W.jsx)("div",{style:{width:100,height:100,backgroundColor:"red"}}),Object(W.jsx)("div",{style:{width:150,height:100,backgroundColor:"blue"}}),Object(W.jsx)("div",{style:{width:100,height:200,backgroundColor:"green"}}),Object(W.jsx)("div",{style:{width:200,height:150,backgroundColor:"gray"}})]}))})}},"./packages/co-design-core/src/components/Switch/stories/Switch.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return y});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./packages/co-design-hooks/src/useId/useId.ts"),ee=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),te=e("./packages/co-design-core/src/components/View/View.tsx"),oe=e("./node_modules/core-js/modules/es.array.reduce.js"),G=e("./node_modules/core-js/modules/es.string.small.js"),K=e("./packages/co-design-styles/src/tss/createStyles.ts"),W=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),N=e("./packages/co-design-core/src/utils/getFieldValue.ts"),q={xsmall:16,small:20,medium:24,large:30,xlarge:36},L={xsmall:30,small:38,medium:44,large:56,xlarge:68},k={xsmall:12,small:14,medium:18,large:22,xlarge:28},B=Object.keys(q).reduce(function(f,j){return f[j]={width:L[j],height:q[j]},f},{}),o=Object(K.a)(function(f,j){var D=j.size,_=j.color,a=Object(N.a)(D,k);return{root:{display:"flex",alignItems:"center"},input:{WebkitTapHighlightColor:"transparent",position:"relative",borderRadius:a,backgroundColor:f.colorScheme==="dark"?f.palettes.gray[6]:f.palettes.gray[2],border:"1px solid "+(f.colorScheme==="dark"?f.palettes.gray[5]:f.palettes.gray[3]),height:q[D],width:L[D],minWidth:L[D],margin:0,transitionProperty:"background-color, border-color",transitionTimingFunction:"ease",transitionDuration:"150ms",boxSizing:"border-box",appearance:"none",display:"flex",alignItems:"center",cursor:"pointer","&::before":{borderRadius:a,boxSizing:"border-box",content:"''",display:"block",backgroundColor:f.colors.white,height:a,width:a,border:"1px solid "+f.palettes.gray[2],transition:"transform 150ms ease",transform:"translateX("+(D==="xsmall"?1:2)+"px)","@media (prefers-reduced-motion)":{transitionDuration:"0ms"}},"&:checked":{backgroundColor:f.colorScheme==="dark"?f.palettes[_][3]:f.palettes[_][5],borderColor:f.colorScheme==="dark"?f.palettes[_][3]:f.palettes[_][5],"&::before":{transform:"translateX("+(L[D]-k[D]-(D==="xsmall"?3:4))+"px)",borderColor:f.colors.white}},"&:disabled":{backgroundColor:f.colorScheme==="dark"?f.palettes.gray[3]:f.palettes.gray[1],borderColor:f.colorScheme==="dark"?f.palettes.gray[3]:f.palettes.gray[1],cursor:"not-allowed","&::before":{borderColor:f.colorScheme==="dark"?f.palettes.gray[3]:f.palettes.gray[1],backgroundColor:f.colorScheme==="dark"?f.palettes.gray[2]:f.colors.white}}},label:Object.assign({WebkitTapHighlightColor:"transparent",fontSize:f.fontSizes[D]},Object(W.c)(f),{paddingLeft:f.spacing.small,color:f.colorScheme==="dark"?f.colors.white:f.palettes.gray[8]})}}),M=e("./node_modules/react/jsx-runtime.js"),b=["id","size","color","label","className","style","co","overrideStyles"];function O(f,j){if(f==null)return{};var D=P(f,j),_,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(f);for(a=0;a<s.length;a++)_=s[a],!(j.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,_)||(D[_]=f[_]))}return D}function P(f,j){if(f==null)return{};var D={},_=Object.keys(f),a,s;for(s=0;s<_.length;s++)a=_[s],!(j.indexOf(a)>=0)&&(D[a]=f[a]);return D}var T=Object(w.forwardRef)(function(f,j){var D=f.id,_=f.size,a=_===void 0?"small":_,s=f.color,c=f.label,i=f.className,g=f.style,n=f.co,v=f.overrideStyles,t=O(f,b),r=Object(ee.c)(),u=s||r.primaryColor,l=o({size:a,color:u},{overrideStyles:v,name:"Switch"}),h=l.classes,E=l.cx,S=Object(X.a)(D);return Object(M.jsxs)(te.a,{className:E(h.root,i),co:n,style:g,children:[Object(M.jsx)("input",Object.assign({},t,{id:S,ref:j,type:"checkbox",className:h.input})),c&&Object(M.jsx)("label",{className:h.label,htmlFor:S,children:c})]})});T.displayName="@co-design/core/Switch";var U=`import React from 'react';
import { Switch } from '../Switch';

export default {
  title: '@co-design/core/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Switch {...props} />;
};
`,d={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}},m=p.default={parameters:{storySource:{source:`import React from 'react';
import { Switch } from '../Switch';

export default {
  title: '@co-design/core/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Switch {...props} />;
};
`,locationsMap:{default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}}}},title:"@co-design/core/Switch",component:T,argTypes:{label:{control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","blue","red","gray"],control:{type:"inline-radio"}}}},y=function(j){return Object(M.jsx)(T,Object.assign({},j))};y.displayName="Default"},"./packages/co-design-core/src/components/Tabs/stories/Tabs.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return je});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e.n(w),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),ee=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/core-js/modules/es.array.filter.js"),o=e("./node_modules/core-js/modules/es.array.map.js"),M=e("./packages/co-design-hooks/src/useUncontrolled/useUncontrolled.ts"),b=e("./packages/co-design-hooks/src/useMergedRef/useMergedRef.ts"),O=e("./packages/co-design-core/src/components/View/View.tsx"),P=e("./packages/co-design-core/src/components/Group/Group.tsx"),T=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),U=e("./node_modules/core-js/modules/es.string.small.js"),d=e("./packages/co-design-styles/src/tss/createStyles.ts"),m=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),y=Object(d.a)(function(H,le,pe){var F,J,Z=le.color,de=le.orientation,ne={ref:pe("tabActive")};return{tabActive:ne,tabLabel:{},tabPane:Object.assign({},Object(m.c)(H),(J={WebkitTapHighlightColor:"transparent",boxSizing:"border-box",display:"block",height:40,backgroundColor:"transparent",border:0,padding:"0 "+H.spacing.large+"px",fontSize:H.fontSizes.medium,cursor:"pointer",width:de==="vertical"?"100%":"auto","&:disabled":{cursor:"not-allowed",color:H.colorScheme==="dark"?H.palettes.gray[3]:H.palettes.gray[5]},transition:"border-color 150ms ease, color 150ms ease",color:H.colorScheme==="dark"?H.palettes.white:H.colors.black},J[de==="horizontal"?"borderBottom":"borderRight"]="2px solid transparent",J["&."+ne.ref]=(F={fontWeight:"bold",color:H.palettes[Z][H.colorScheme==="dark"?3:5]},F[de==="horizontal"?"borderBottomColor":"borderRightColor"]=H.palettes[Z][H.colorScheme==="dark"?3:5],F),J)),tabInner:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:de==="horizontal"?"center":"flex-start",lineHeight:1,height:"100%"},tabIcon:{"&:not(:only-child)":{marginRight:H.spacing.small},"& *":{display:"block"}}}}),f=e("./node_modules/react/jsx-runtime.js"),j=["active","buttonRef","color","orientation","icon","label","icon","color","className","co","overrideStyles"];function D(H,le){if(H==null)return{};var pe=_(H,le),F,J;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(H);for(J=0;J<Z.length;J++)F=Z[J],!(le.indexOf(F)>=0)&&(!Object.prototype.propertyIsEnumerable.call(H,F)||(pe[F]=H[F]))}return pe}function _(H,le){if(H==null)return{};var pe={},F=Object.keys(H),J,Z;for(Z=0;Z<F.length;Z++)J=F[Z],!(le.indexOf(J)>=0)&&(pe[J]=H[J]);return pe}var a=Object(w.forwardRef)(function(H,le){var pe,F=H.active,J=H.buttonRef,Z=H.color,de=H.orientation,ne=de===void 0?"horizontal":de,ie=H.icon,Ce=H.label,De=H.icon,Te=H.color,Ve=H.className,Ue=H.co,Ke=H.overrideStyles,Ze=D(H,j),ze=Object(T.c)(),re=y({color:Te||Z||ze.primaryColor,orientation:ne},{overrideStyles:Ke,name:"Tabs"}),ye=re.classes,Oe=re.cx;return Object(f.jsx)(O.a,Object.assign({},Ze,{component:"button",tabIndex:F?0:-1,className:Oe(ye.tabPane,(pe={},pe[ye.tabActive]=F,pe),Ve),co:Ue,type:"button",role:"tab","aria-selected":F,ref:Object(b.a)(le,J),children:Object(f.jsxs)("div",{className:ye.tabInner,children:[De&&Object(f.jsx)("div",{className:ye.tabIcon,children:De}),Ce&&Object(f.jsx)("div",{className:ye.tabLabel,children:Ce})]})}))});a.displayName="@mantine/core/TabPane";var s=e("./packages/co-design-core/src/utils/getFieldValue.ts"),c=Object(d.a)(function(H,le,pe){var F,J,Z,de=le.tabPadding,ne=le.orientation,ie={ref:pe("tabsList")};return{tabsListWrapper:(J={},J[ne==="horizontal"?"borderBottom":"borderRight"]="2px solid "+(H.colorScheme==="dark"?H.palettes.gray[7]:H.palettes.gray[1]),J["& ."+ie.ref]=(F={},F[ne==="horizontal"?"marginBottom":"marginRight"]=-2,F),J),tabsList:ie,root:{display:ne==="vertical"?"flex":"block"},body:(Z={},Z[ne==="horizontal"?"paddingTop":"paddingLeft"]=Object(s.a)(de,H.spacing),Z)}}),i=function(le){var pe=le.value,F=le.min,J=le.max;return Math.min(Math.max(pe,F),J)},g=["children","initialTab","active","position","grow","onTabChange","color","tabPadding","orientation","className","co","overrideStyles"];function n(H,le){return l(H)||u(H,le)||t(H,le)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(H,le){if(!!H){if(typeof H=="string")return r(H,le);var pe=Object.prototype.toString.call(H).slice(8,-1);if(pe==="Object"&&H.constructor&&(pe=H.constructor.name),pe==="Map"||pe==="Set")return Array.from(H);if(pe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(pe))return r(H,le)}}function r(H,le){(le==null||le>H.length)&&(le=H.length);for(var pe=0,F=new Array(le);pe<le;pe++)F[pe]=H[pe];return F}function u(H,le){var pe=H==null?null:typeof Symbol!="undefined"&&H[Symbol.iterator]||H["@@iterator"];if(pe!=null){var F=[],J=!0,Z=!1,de,ne;try{for(pe=pe.call(H);!(J=(de=pe.next()).done)&&(F.push(de.value),!(le&&F.length===le));J=!0);}catch(ie){Z=!0,ne=ie}finally{try{!J&&pe.return!=null&&pe.return()}finally{if(Z)throw ne}}return F}}function l(H){if(Array.isArray(H))return H}function h(H,le){if(H==null)return{};var pe=E(H,le),F,J;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(H);for(J=0;J<Z.length;J++)F=Z[J],!(le.indexOf(F)>=0)&&(!Object.prototype.propertyIsEnumerable.call(H,F)||(pe[F]=H[F]))}return pe}function E(H,le){if(H==null)return{};var pe={},F=Object.keys(H),J,Z;for(Z=0;Z<F.length;Z++)J=F[Z],!(le.indexOf(J)>=0)&&(pe[J]=H[J]);return pe}var S=function(le,pe){for(var F=le-1;F>=0;F-=1)if(!pe[F].props.disabled)return F;return le},C=function(le,pe){for(var F=le+1;F<pe.length;F+=1)if(!pe[F].props.disabled)return F;return le},R=function(le){for(var pe=0;pe<le.length;pe+=1)if(!le[pe].props.disabled)return pe;return-1},A=Object(w.forwardRef)(function(H,le){var pe=H.children,F=H.initialTab,J=H.active,Z=H.position,de=Z===void 0?"left":Z,ne=H.grow,ie=ne===void 0?!1:ne,Ce=H.onTabChange,De=H.color,Te=H.tabPadding,Ve=Te===void 0?"medium":Te,Ue=H.orientation,Ke=Ue===void 0?"horizontal":Ue,Ze=H.className,ze=H.co,re=H.overrideStyles,ye=h(H,g),Oe=c({tabPadding:Ve,orientation:Ke},{overrideStyles:re,name:"Tabs"}),Se=Oe.classes,z=Oe.cx,ae=Object(w.useRef)({}),fe=Q.a.Children.toArray(pe).filter(function(Je){return Je.type===a}),_e=Object(M.a)({value:J,defaultValue:F,finalValue:R(fe),rule:function(we){return typeof we=="number"},onChange:Ce}),be=n(_e,2),Me=be[0],Le=be[1],Ie=i({value:Me,min:0,max:fe.length-1}),$e=Ke==="horizontal"?"ArrowRight":"ArrowDown",Ge=Ke==="horizontal"?"ArrowLeft":"ArrowUp",no=function(we){if(we.nativeEvent.code===$e){we.preventDefault();var Ye=C(Ie,fe);Le(Ye),ae.current[Ye].focus()}if(we.nativeEvent.code===Ge){we.preventDefault();var to=S(Ie,fe);Le(to),ae.current[to].focus()}},oo=fe.map(function(Je,we){return Object(w.createElement)(a,Object.assign({},Je.props,{key:we,active:Ie===we,onKeyDown:no,color:Je.props.color||De,orientation:Ke,buttonRef:Object(b.a)(function(Ye){ae.current[we]=Ye},Je.ref),onClick:function(){return Ie!==we&&Le(we)}}))}),Xe=fe[Ie].props.children;return Object(f.jsxs)(O.a,Object.assign({ref:le,className:z(Se.root,Ze),co:ze},ye,{children:[Object(f.jsx)("div",{className:Se.tabsListWrapper,children:Object(f.jsx)(P.a,{className:Se.tabsList,role:"tablist",direction:Ke==="horizontal"?"row":"column","aria-orientation":Ke,spacing:0,position:de,grow:ie,children:oo})}),Xe&&Object(f.jsx)("div",{role:"tabpanel",className:Se.body,children:Xe})]}))});A.displayName="@co-design/core/Tabs",A.Pane=a;var $=`import React from 'react';
import { Tabs } from '../Tabs';

export default {
  title: '@co-design/core/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <Tabs {...props}>
      <Tabs.Pane label="Gallery">Hi</Tabs.Pane>
      <Tabs.Pane label="Message">Hello</Tabs.Pane>
    </Tabs>
  );
};
`,me={Default:{startLoc:{col:23,line:25},endLoc:{col:1,line:32},startBody:{col:23,line:25},endBody:{col:1,line:32}}},ge=p.default={parameters:{storySource:{source:`import React from 'react';
import { Tabs } from '../Tabs';

export default {
  title: '@co-design/core/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <Tabs {...props}>
      <Tabs.Pane label="Gallery">Hi</Tabs.Pane>
      <Tabs.Pane label="Message">Hello</Tabs.Pane>
    </Tabs>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:25},endLoc:{col:1,line:32},startBody:{col:23,line:25},endBody:{col:1,line:32}}}}},title:"@co-design/core/Tabs",component:A,argTypes:{orientation:{defaultValue:"horizontal",options:["horizontal","vertical"],control:{type:"inline-radio"}},color:{defaultValue:"purple",options:["purple","blue","red","gray"],control:{type:"inline-radio"}},grow:{defaultValue:!1,control:{type:"boolean"}}}},je=function(le){return Object(f.jsxs)(A,Object.assign({},le,{children:[Object(f.jsx)(A.Pane,{label:"Gallery",children:"Hi"}),Object(f.jsx)(A.Pane,{label:"Message",children:"Hello"})]}))};je.displayName="Default"},"./packages/co-design-core/src/components/Tag/stories/Tag.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return o});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.string.small.js"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=Object(ee.a)(function(M,b){var O=b.color,P=b.fullWidth,T=b.strong;return{root:{display:P?"flex":"inline-flex",alignItems:"center",justifyContent:"center",padding:M.spacing.xsmall+"px "+M.spacing.small+"px",fontWeight:T?"bold":"normal",fontSize:M.fontSizes.tiny,color:M.palettes[O][M.colorScheme==="light"?5:3],borderRadius:M.radius.large,backgroundColor:M.palettes[O][M.colorScheme==="light"?1:7],boxSizing:"border-box"}}}),oe=e("./packages/co-design-core/src/components/View/View.tsx"),G=e("./node_modules/react/jsx-runtime.js"),K=["color","fullWidth","strong","className","co","overrideStyles"];function W(M,b){if(M==null)return{};var O=N(M,b),P,T;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(M);for(T=0;T<U.length;T++)P=U[T],!(b.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,P)||(O[P]=M[P]))}return O}function N(M,b){if(M==null)return{};var O={},P=Object.keys(M),T,U;for(U=0;U<P.length;U++)T=P[U],!(b.indexOf(T)>=0)&&(O[T]=M[T]);return O}var q=Object(w.forwardRef)(function(M,b){var O=M.color,P=M.fullWidth,T=P===void 0?!1:P,U=M.strong,d=U===void 0?!1:U,m=M.className,y=M.co,f=M.overrideStyles,j=W(M,K),D=te({color:O,fullWidth:T,strong:d},{overrideStyles:f,name:"Tag"}),_=D.classes,a=D.cx;return Object(G.jsx)(oe.a,Object.assign({component:"div",ref:b,className:a(_.root,m),co:y},j))});q.displayName="@co-design/core/Tag";var L=`import React from 'react';
import { Tag } from '../Tag';

export default {
  title: '@co-design/core/Tag',
  component: Tag,
  argTypes: {
    color: {
      defaultValue: 'purple',
      options: ['purple', 'red', 'blue', 'gray'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Tag {...props}>Tag</Tag>;
};
`,k={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}},B=p.default={parameters:{storySource:{source:`import React from 'react';
import { Tag } from '../Tag';

export default {
  title: '@co-design/core/Tag',
  component: Tag,
  argTypes: {
    color: {
      defaultValue: 'purple',
      options: ['purple', 'red', 'blue', 'gray'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Tag {...props}>Tag</Tag>;
};
`,locationsMap:{default:{startLoc:{col:23,line:24},endLoc:{col:1,line:26},startBody:{col:23,line:24},endBody:{col:1,line:26}}}}},title:"@co-design/core/Tag",component:q,argTypes:{color:{defaultValue:"purple",options:["purple","red","blue","gray"],control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},strong:{defaultValue:!1,control:{type:"boolean"}}}},o=function(b){return Object(G.jsx)(q,Object.assign({},b,{children:"Tag"}))};o.displayName="Default"},"./packages/co-design-core/src/components/Text/Text.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return k});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),X=e("./packages/co-design-core/src/components/View/View.tsx"),ee=e("./packages/co-design-styles/src/tss/createStyles.ts"),te=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),oe=e("./packages/co-design-core/src/utils/getFieldValue.ts");function G(B){return typeof B=="number"?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:B,WebkitBoxOrient:"vertical"}:null}var K=Object(ee.a)(function(B,o){var M=o.color,b=o.size,O=o.lineClamp,P=o.block,T=o.inherit,U=M?M in B.palettes?B.palettes[M][B.colorScheme==="dark"?3:5]:M in B.colors?B.colors[M]:M:B.colorScheme==="dark"?B.colors.white:B.palettes.gray[8];return{root:Object.assign({display:P?"block":"inline"},G(O),{color:U},Object(te.c)(B),{fontFamily:T?"inherit":B.fontFamily,fontSize:T?"inherit":Object(oe.a)(b,B.fontSizes),lineHeight:T?"inherit":P?B.lineHeight:1,WebkitTapHighlightColor:"transparent"})}}),W=e("./node_modules/react/jsx-runtime.js"),N=["children","component","size","color","strong","underline","transform","align","lineClamp","block","inherit","className","style","co","overrideStyles"];function q(B,o){if(B==null)return{};var M=L(B,o),b,O;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(B);for(O=0;O<P.length;O++)b=P[O],!(o.indexOf(b)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,b)||(M[b]=B[b]))}return M}function L(B,o){if(B==null)return{};var M={},b=Object.keys(B),O,P;for(P=0;P<b.length;P++)O=b[P],!(o.indexOf(O)>=0)&&(M[O]=B[O]);return M}var k=Object(Y.forwardRef)(function(B,o){var M=B.children,b=B.component,O=B.size,P=O===void 0?"medium":O,T=B.color,U=B.strong,d=B.underline,m=B.transform,y=B.align,f=B.lineClamp,j=B.block,D=j===void 0?!1:j,_=B.inherit,a=_===void 0?!1:_,s=B.className,c=B.style,i=B.co,g=B.overrideStyles,n=q(B,N),v=K({color:T,size:P,lineClamp:f,block:D,inherit:a},{overrideStyles:g,name:"Text"}),t=v.classes,r=v.cx;return Object(W.jsx)(X.a,Object.assign({ref:o,component:b||"span",className:r(t.root,s),co:i,style:Object.assign({fontWeight:a?"inherit":typeof U=="boolean"?U?"bold":void 0:U,textTransform:m,textAlign:y,textDecoration:d?"underline":void 0},c)},n,{children:M}))});k.displayName="@co-design/core/Text"},"./packages/co-design-core/src/components/Text/stories/Text.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return G}),e.d(p,"Inherit",function(){return K});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Text/Text.tsx"),X=e("./node_modules/react/jsx-runtime.js"),ee=e.n(X),te=`import React from 'react';
import { Text } from '../Text';

export default {
  title: '@co-design/core/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    transform: {
      options: [undefined, 'capitalize', 'uppercase', 'lowercase'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: [undefined, 'left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    lineClamp: {
      defaultValue: undefined,
      control: { type: 'number' },
    },
    color: {
      options: [undefined, 'purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300 }}>
      <Text {...props} />
    </div>
  );
};

export const Inherit = () => {
  return (
    <div>
      <Text size="large" block>
        <Text inherit underline>
          Lorem
        </Text>{' '}
        ipsum dolor sit amet,{' '}
        <Text
          size="large"
          strong
          co={(theme) => ({
            background: theme.fn.linearGradient(90, 'red', 'green', 'blue'),
            backgroundClip: 'text',
            color: 'transparent',
          })}
        >
          consectetur
        </Text>{' '}
        <Text inherit transform="uppercase">
          adipiscing
        </Text>{' '}
        elit.
      </Text>
    </div>
  );
};
`,oe={Default:{startLoc:{col:23,line:48},endLoc:{col:1,line:54},startBody:{col:23,line:48},endBody:{col:1,line:54}},Inherit:{startLoc:{col:23,line:56},endLoc:{col:1,line:82},startBody:{col:23,line:56},endBody:{col:1,line:82}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Text } from '../Text';

export default {
  title: '@co-design/core/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    transform: {
      options: [undefined, 'capitalize', 'uppercase', 'lowercase'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: [undefined, 'left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    lineClamp: {
      defaultValue: undefined,
      control: { type: 'number' },
    },
    color: {
      options: [undefined, 'purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300 }}>
      <Text {...props} />
    </div>
  );
};

export const Inherit = () => {
  return (
    <div>
      <Text size="large" block>
        <Text inherit underline>
          Lorem
        </Text>{' '}
        ipsum dolor sit amet,{' '}
        <Text
          size="large"
          strong
          co={(theme) => ({
            background: theme.fn.linearGradient(90, 'red', 'green', 'blue'),
            backgroundClip: 'text',
            color: 'transparent',
          })}
        >
          consectetur
        </Text>{' '}
        <Text inherit transform="uppercase">
          adipiscing
        </Text>{' '}
        elit.
      </Text>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:48},endLoc:{col:1,line:54},startBody:{col:23,line:48},endBody:{col:1,line:54}},inherit:{startLoc:{col:23,line:56},endLoc:{col:1,line:82},startBody:{col:23,line:56},endBody:{col:1,line:82}}}}},title:"@co-design/core/Text",component:Y.a,argTypes:{children:{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",control:{type:"text"}},size:{defaultValue:"medium",options:["xsmall","small","medium","large","xlarge"],control:{type:"inline-radio"}},strong:{defaultValue:!1,control:{type:"boolean"}},underline:{defaultValue:!1,control:{type:"boolean"}},block:{defaultValue:!1,control:{type:"boolean"}},transform:{options:[void 0,"capitalize","uppercase","lowercase"],control:{type:"inline-radio"}},align:{options:[void 0,"left","center","right"],control:{type:"inline-radio"}},lineClamp:{defaultValue:void 0,control:{type:"number"}},color:{options:[void 0,"purple","blue","red","gray"],control:{type:"inline-radio"}}}};var G=function(N){return Object(X.jsx)("div",{style:{width:300},children:Object(X.jsx)(Y.a,Object.assign({},N))})};G.displayName="Default";var K=function(){return Object(X.jsx)("div",{children:Object(X.jsxs)(Y.a,{size:"large",block:!0,children:[Object(X.jsx)(Y.a,{inherit:!0,underline:!0,children:"Lorem"})," ","ipsum dolor sit amet,"," ",Object(X.jsx)(Y.a,{size:"large",strong:!0,co:function(q){return{background:q.fn.linearGradient(90,"red","green","blue"),backgroundClip:"text",color:"transparent"}},children:"consectetur"})," ",Object(X.jsx)(Y.a,{inherit:!0,transform:"uppercase",children:"adipiscing"})," ","elit."]})})};K.displayName="Inherit"},"./packages/co-design-core/src/components/Tooltip/Tooltip.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return u});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),q=e("./node_modules/core-js/modules/es.string.split.js"),L=e("./node_modules/core-js/modules/es.regexp.exec.js"),k=e("./node_modules/core-js/modules/es.object.assign.js"),B=e("./node_modules/react/index.js"),o=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),M=e("./packages/co-design-core/src/components/View/View.tsx"),b=e("./packages/co-design-core/src/components/Portal/Portal.tsx"),O=e("./packages/co-design-core/src/utils/getFieldValue.ts"),P=e("./node_modules/core-js/modules/es.string.small.js"),T=e("./packages/co-design-styles/src/tss/createStyles.ts"),U=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),d=Object(T.a)(function(l){return{root:{display:"inline-block"},balloon:{position:"fixed",display:"inline-block"},arrow:{position:"absolute",width:12,height:12,backgroundColor:l.colorScheme==="dark"?l.colors.white:l.palettes.gray[8],userSelect:"none",pointerEvents:"none",'&[class^="top"]':{top:-18,transform:"translate(-50%) rotate(-135deg)"},"&.top-left":{marginLeft:12},"&.top-right":{marginLeft:-12},'&[class^="bottom"]':{bottom:-18,transform:"translate(-50%) rotate(45deg)"},"&.bottom-left":{marginLeft:12},"&.bottom-right":{marginLeft:-12},'&[class^="right"]':{right:-18,transform:"translateY(-50%) rotate(-45deg)"},"&.right-top":{marginTop:12},"&.right-bottom":{marginTop:-12},'&[class^="left"]':{left:-18,transform:"translateY(-50%) rotate(135deg)"},"&.left-top":{marginTop:12},"&.left-bottom":{marginTop:-12}},content:Object.assign({position:"absolute",padding:l.spacing.small,borderRadius:l.radius.medium,backgroundColor:l.colorScheme==="dark"?l.colors.white:l.palettes.gray[8]},Object(U.c)(l),{fontSize:l.fontSizes.small,color:l.colorScheme==="dark"?l.palettes.gray[8]:l.colors.white,'&[class^="top"]':{bottom:0,marginBottom:12},"&.top":{transform:"translate(-50%)"},"&.top-right":{transform:"translate(-100%)"},'&[class^="bottom"]':{marginTop:12},"&.bottom":{transform:"translate(-50%)"},"&.bottom-right":{transform:"translate(-100%)"},'&[class^="right"]':{marginLeft:12},"&.right":{transform:"translateY(-50%)"},"&.right-bottom":{transform:"translateY(-100%)"},'&[class^="left"]':{right:0,marginRight:12},"&.left":{transform:"translateY(-50%)"},"&.left-bottom":{transform:"translateY(-100%)"}})}}),m=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),y=e("./packages/co-design-hooks/src/useClickAway/useClickAway.ts"),f=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),j=e("./packages/co-design-core/src/components/Transition/Transition.tsx"),D=e("./node_modules/react/jsx-runtime.js"),_=["children","visible","label","withArrow","width","placement","trigger","zIndex","target","transition","transitionDuration","transitionTimingFunction","onChangeVisible","className","co","overrideStyles"];function a(l,h){return n(l)||g(l,h)||c(l,h)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(l,h){if(!!l){if(typeof l=="string")return i(l,h);var E=Object.prototype.toString.call(l).slice(8,-1);if(E==="Object"&&l.constructor&&(E=l.constructor.name),E==="Map"||E==="Set")return Array.from(l);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return i(l,h)}}function i(l,h){(h==null||h>l.length)&&(h=l.length);for(var E=0,S=new Array(h);E<h;E++)S[E]=l[E];return S}function g(l,h){var E=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(E!=null){var S=[],C=!0,R=!1,A,$;try{for(E=E.call(l);!(C=(A=E.next()).done)&&(S.push(A.value),!(h&&S.length===h));C=!0);}catch(me){R=!0,$=me}finally{try{!C&&E.return!=null&&E.return()}finally{if(R)throw $}}return S}}function n(l){if(Array.isArray(l))return l}function v(l,h){if(l==null)return{};var E=t(l,h),S,C;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(l);for(C=0;C<R.length;C++)S=R[C],!(h.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,S)||(E[S]=l[S]))}return E}function t(l,h){if(l==null)return{};var E={},S=Object.keys(l),C,R;for(R=0;R<S.length;R++)C=S[R],!(h.indexOf(C)>=0)&&(E[C]=l[C]);return E}var r=function(h,E){if(!E)return{top:0,left:0};var S=0,C=0,R=E.getBoundingClientRect(),A=h.split("-");return A[0]==="top"?S=R.top+window.pageYOffset:A[0]==="right"?C=R.left+R.width:A[0]==="bottom"?S=R.top+R.height+window.pageYOffset:A[0]==="left"&&(C=R.left),A[1]==="top"?S=R.top+window.pageYOffset:A[1]==="right"?C=R.left+R.width:A[1]==="bottom"?S=R.top+R.height+window.pageYOffset:A[1]==="left"?C=R.left:A[0]==="top"||A[0]==="bottom"?C=R.left+R.width/2:(A[0]==="left"||A[0]==="right")&&(S=R.top+R.height/2+window.pageYOffset),{top:S,left:C}},u=function(h){var E=h.children,S=h.visible,C=S===void 0?!1:S,R=h.label,A=h.withArrow,$=A===void 0?!0:A,me=h.width,ge=h.placement,je=ge===void 0?"top":ge,H=h.trigger,le=H===void 0?"hover":H,pe=h.zIndex,F=pe===void 0?"dropdown":pe,J=h.target,Z=h.transition,de=Z===void 0?"fade":Z,ne=h.transitionDuration,ie=ne===void 0?100:ne,Ce=h.transitionTimingFunction,De=Ce===void 0?"ease":Ce,Te=h.onChangeVisible,Ve=h.className,Ue=h.co,Ke=h.overrideStyles,Ze=v(h,_),ze=Object(o.c)(),re=d(null,{overrideStyles:Ke,name:"Tooltip"}),ye=re.classes,Oe=re.cx,Se=Object(m.a)(C),z=a(Se,2),ae=z[0],fe=z[1],_e=Object(B.useRef)(null),be=Object(y.a)(function(Xe){le==="click"&&be.current&&_e.current&&!be.current.contains(Xe.target)&&!_e.current.contains(Xe.target)&&fe(!1)}),Me=le==="hover"?function(){return fe(!0)}:void 0,Le=le==="hover"?function(){return fe(!1)}:void 0,Ie=le==="click"?function(Xe){be.current.contains(Xe.nativeEvent.target)&&fe(function(Je){return!Je})}:void 0,$e=le==="focus"?function(){return fe(!0)}:void 0,Ge=le==="focus"?function(){return fe(!1)}:void 0;Object(f.a)(function(){Te==null||Te(ae)},[ae]);var no={width:me||"auto",whiteSpace:me?"normal":"nowrap",pointerEvents:C?"all":"none"},oo=r(je,be.current);return Object(D.jsxs)(M.a,{ref:be,onClick:Ie,onFocus:$e,onBlur:Ge,onMouseEnter:Me,onMouseLeave:Le,className:Oe(ye.root,Ve),co:Ue,children:[Object(D.jsx)(b.a,{zIndex:Object(O.a)(F,ze.zIndex),target:J,children:Object(D.jsx)(j.a,{mounted:ae,transition:de,duration:ie,timingFunction:De,children:function(Je){return Object(D.jsxs)(M.a,Object.assign({className:ye.balloon,style:Object.assign({},oo,Je),ref:_e},Ze,{children:[Object(D.jsx)("div",{className:Oe(je,ye.content),style:no,children:R}),$&&Object(D.jsx)("div",{className:Oe(je,ye.arrow)})]}))}})}),E]})};u.displayName="Tooltip",u.displayName="@co-design/core/Tooltip"},"./packages/co-design-core/src/components/Tooltip/stories/Tooltip.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return K});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-core/src/components/Center/Center.tsx"),X=e("./packages/co-design-core/src/components/Tooltip/Tooltip.tsx"),ee=e("./node_modules/react/jsx-runtime.js"),te=e.n(ee),oe=`import React from 'react';
import { Center } from '../../Center';
import { Tooltip } from '../Tooltip';

export default {
  title: '@co-design/core/Tooltip',
  component: Tooltip,
  argTypes: {
    label: {
      defaultValue: 'Peek-A-Boo',
      control: { type: 'text' },
    },
    withArrow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    placement: {
      defaultValue: 'bottom',
      options: [
        'top-left',
        'top',
        'top-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom',
        'bottom-left',
        'bottom',
        'bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    trigger: {
      defaultValue: 'hover',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Tooltip placement="bottom" label="Test" {...props}>
        <button>Tooltip</button>
      </Tooltip>
    </Center>
  );
};
`,G={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { Center } from '../../Center';
import { Tooltip } from '../Tooltip';

export default {
  title: '@co-design/core/Tooltip',
  component: Tooltip,
  argTypes: {
    label: {
      defaultValue: 'Peek-A-Boo',
      control: { type: 'text' },
    },
    withArrow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    placement: {
      defaultValue: 'bottom',
      options: [
        'top-left',
        'top',
        'top-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom',
        'bottom-left',
        'bottom',
        'bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    trigger: {
      defaultValue: 'hover',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Tooltip placement="bottom" label="Test" {...props}>
        <button>Tooltip</button>
      </Tooltip>
    </Center>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@co-design/core/Tooltip",component:X.a,argTypes:{label:{defaultValue:"Peek-A-Boo",control:{type:"text"}},withArrow:{defaultValue:!0,control:{type:"boolean"}},placement:{defaultValue:"bottom",options:["top-left","top","top-right","left-top","left","left-bottom","right-top","right","right-bottom","bottom-left","bottom","bottom-right"],control:{type:"inline-radio"}},trigger:{defaultValue:"hover",options:["hover","click","focus"],control:{type:"inline-radio"}}}};var K=function(N){return Object(ee.jsx)(Y.a,{style:{width:500,height:500},children:Object(ee.jsx)(X.a,Object.assign({placement:"bottom",label:"Test"},N,{children:Object(ee.jsx)("button",{children:"Tooltip"})}))})};K.displayName="Default"},"./packages/co-design-core/src/components/Transition/GroupedTransition.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return K});var x=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e.n(Q),Y=e("./node_modules/react/index.js"),X=e.n(Y),ee=e("./packages/co-design-core/src/components/Transition/getTransitionStyles.ts"),te=e("./packages/co-design-core/src/components/Transition/useTransition.ts"),oe=e("./node_modules/react/jsx-runtime.js"),G=e.n(oe);function K(W){var N=W.transitions,q=W.duration,L=q===void 0?250:q,k=W.mounted,B=W.children,o=W.timingFunction,M=W.onExit,b=W.onEntered,O=W.onEnter,P=W.onExited,T=Object(te.a)({mounted:k,duration:L,timingFunction:o,onExit:M,onEntered:b,onEnter:O,onExited:P}),U=T.transitionDuration,d=T.transitionStatus,m=T.transitionTimingFunction;if(U===0)return k?Object(oe.jsx)(oe.Fragment,{children:B({})}):null;if(d==="exited")return null;var y=Object.keys(N).reduce(function(f,j){return f[j]=Object(ee.a)({duration:N[j].duration,transition:N[j].transition,timingFunction:N[j].timingFunction||m,state:d}),f},{});return Object(oe.jsx)(oe.Fragment,{children:B(y)})}K.displayName="@co-design/core/GroupedTransition"},"./packages/co-design-core/src/components/Transition/Transition.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return ee});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/Transition/getTransitionStyles.ts"),ce=e("./packages/co-design-core/src/components/Transition/useTransition.ts"),Y=e("./node_modules/react/jsx-runtime.js"),X=e.n(Y),ee=function(oe){var G=oe.transition,K=oe.duration,W=K===void 0?250:K,N=oe.mounted,q=oe.children,L=oe.timingFunction,k=oe.onExit,B=oe.onEntered,o=oe.onEnter,M=oe.onExited,b=Object(ce.a)({mounted:N,duration:W,timingFunction:L,onExit:k,onEntered:B,onEnter:o,onExited:M}),O=b.transitionDuration,P=b.transitionStatus,T=b.transitionTimingFunction;return O===0?N?Object(Y.jsx)(Y.Fragment,{children:q({})}):null:P==="exited"?null:Object(Y.jsx)(Y.Fragment,{children:q(Object(Q.a)({transition:G,duration:O,state:P,timingFunction:T}))})};ee.displayName="@co-design/core/Transition"},"./packages/co-design-core/src/components/Transition/getTransitionStyles.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return Y});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(10px)"},transitionProperty:"transform, opacity"},Q={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(-20px) skew(-10deg, -5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(20px) skew(-10deg, -5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(-5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:Object.assign({},w,{common:{transformOrigin:"center center"}}),"pop-bottom-left":Object.assign({},w,{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":Object.assign({},w,{common:{transformOrigin:"bottom right"}}),"pop-top-left":Object.assign({},w,{common:{transformOrigin:"top left"}}),"pop-top-right":Object.assign({},w,{common:{transformOrigin:"top right"}})},ce={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"},Y=function(ee){var te=ee.transition,oe=ee.state,G=ee.duration,K=ee.timingFunction,W={transitionDuration:G+"ms",transitionTimingFunction:K};return typeof te=="string"?te in Q?Object.assign({transitionProperty:Q[te].transitionProperty},W,Q[te].common,Q[te][ce[oe]]):null:Object.assign({transitionProperty:te.transitionProperty},W,te.common,te[ce[oe]])}},"./packages/co-design-core/src/components/Transition/stories/GroupedTransition.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),m=e("./node_modules/react/index.js"),y=e.n(m),f=e("./packages/co-design-core/src/components/Transition/GroupedTransition.tsx"),j=e("./node_modules/react/jsx-runtime.js"),D=e.n(j);function _(r,u){return g(r)||i(r,u)||s(r,u)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(r,u){if(!!r){if(typeof r=="string")return c(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(r,u)}}function c(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}function i(r,u){var l=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var h=[],E=!0,S=!1,C,R;try{for(l=l.call(r);!(E=(C=l.next()).done)&&(h.push(C.value),!(u&&h.length===u));E=!0);}catch(A){S=!0,R=A}finally{try{!E&&l.return!=null&&l.return()}finally{if(S)throw R}}return h}}function g(r){if(Array.isArray(r))return r}var n=`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { GroupedTransition } from '../GroupedTransition';

export default {
  title: '@co-design/core/GroupedTransition',
  component: GroupedTransition,
};

export const Default = (props) => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <GroupedTransition
        mounted={state}
        transitions={{
          box: {
            duration: 400,
            transition: 'fade',
          },
          text: {
            duration: 1000,
            transition: 'pop',
          },
        }}
      >
        {(styles) => (
          <div>
            <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles.box }} />
            <div style={styles.text}>Hello</div>
          </div>
        )}
      </GroupedTransition>
    </div>
  );
};
`,v={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:37},startBody:{col:23,line:10},endBody:{col:1,line:37}}};p.default={parameters:{storySource:{source:`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { GroupedTransition } from '../GroupedTransition';

export default {
  title: '@co-design/core/GroupedTransition',
  component: GroupedTransition,
};

export const Default = (props) => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <GroupedTransition
        mounted={state}
        transitions={{
          box: {
            duration: 400,
            transition: 'fade',
          },
          text: {
            duration: 1000,
            transition: 'pop',
          },
        }}
      >
        {(styles) => (
          <div>
            <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles.box }} />
            <div style={styles.text}>Hello</div>
          </div>
        )}
      </GroupedTransition>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:37},startBody:{col:23,line:10},endBody:{col:1,line:37}}}}},title:"@co-design/core/GroupedTransition",component:f.a};var t=function(u){var l=Object(d.a)(),h=_(l,2),E=h[0],S=h[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:S,children:"Toggle"}),Object(j.jsx)(f.a,{mounted:E,transitions:{box:{duration:400,transition:"fade"},text:{duration:1e3,transition:"pop"}},children:function(R){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:Object.assign({width:100,height:100,backgroundColor:"red"},R.box)}),Object(j.jsx)("div",{style:R.text,children:"Hello"})]})}})]})};t.displayName="Default"},"./packages/co-design-core/src/components/Transition/stories/Transition.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),m=e("./node_modules/react/index.js"),y=e.n(m),f=e("./packages/co-design-core/src/components/Transition/Transition.tsx"),j=e("./node_modules/react/jsx-runtime.js"),D=e.n(j);function _(r,u){return g(r)||i(r,u)||s(r,u)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(r,u){if(!!r){if(typeof r=="string")return c(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(r,u)}}function c(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}function i(r,u){var l=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var h=[],E=!0,S=!1,C,R;try{for(l=l.call(r);!(E=(C=l.next()).done)&&(h.push(C.value),!(u&&h.length===u));E=!0);}catch(A){S=!0,R=A}finally{try{!E&&l.return!=null&&l.return()}finally{if(S)throw R}}return h}}function g(r){if(Array.isArray(r))return r}var n=`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Transition } from '../Transition';

export default {
  title: '@co-design/core/Transition',
  component: Transition,
  argTypes: {
    duration: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    transition: {
      defaultValue: 'fade',
      options: [
        'fade',
        'skew-up',
        'skew-down',
        'rotate-right',
        'rotate-left',
        'slide-down',
        'slide-up',
        'slide-right',
        'slide-left',
        'scale-y',
        'scale-x',
        'scale',
        'pop',
        'pop-top-left',
        'pop-top-right',
        'pop-bottom-left',
        'pop-bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    timingFunction: {
      defaultValue: 'ease',
      options: ['ease', 'ease-out', 'ease-in'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Transition mounted={state} {...props}>
        {(styles) => <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles }} />}
      </Transition>
    </div>
  );
};
`,v={Default:{startLoc:{col:23,line:44},endLoc:{col:1,line:54},startBody:{col:23,line:44},endBody:{col:1,line:54}}};p.default={parameters:{storySource:{source:`import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Transition } from '../Transition';

export default {
  title: '@co-design/core/Transition',
  component: Transition,
  argTypes: {
    duration: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    transition: {
      defaultValue: 'fade',
      options: [
        'fade',
        'skew-up',
        'skew-down',
        'rotate-right',
        'rotate-left',
        'slide-down',
        'slide-up',
        'slide-right',
        'slide-left',
        'scale-y',
        'scale-x',
        'scale',
        'pop',
        'pop-top-left',
        'pop-top-right',
        'pop-bottom-left',
        'pop-bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    timingFunction: {
      defaultValue: 'ease',
      options: ['ease', 'ease-out', 'ease-in'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Transition mounted={state} {...props}>
        {(styles) => <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles }} />}
      </Transition>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:44},endLoc:{col:1,line:54},startBody:{col:23,line:44},endBody:{col:1,line:54}}}}},title:"@co-design/core/Transition",component:f.a,argTypes:{duration:{defaultValue:400,control:{type:"number"}},transition:{defaultValue:"fade",options:["fade","skew-up","skew-down","rotate-right","rotate-left","slide-down","slide-up","slide-right","slide-left","scale-y","scale-x","scale","pop","pop-top-left","pop-top-right","pop-bottom-left","pop-bottom-right"],control:{type:"inline-radio"}},timingFunction:{defaultValue:"ease",options:["ease","ease-out","ease-in"],control:{type:"inline-radio"}}}};var t=function(u){var l=Object(d.a)(),h=_(l,2),E=h[0],S=h[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:S,children:"Toggle"}),Object(j.jsx)(f.a,Object.assign({mounted:E},u,{children:function(R){return Object(j.jsx)("div",{style:Object.assign({width:100,height:100,backgroundColor:"red"},R)})}}))]})};t.displayName="Default"},"./packages/co-design-core/src/components/Transition/useTransition.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return c});var x=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./node_modules/react/index.js"),m=e.n(d),y=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts");function f(i,g){return s(i)||a(i,g)||D(i,g)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(i,g){if(!!i){if(typeof i=="string")return _(i,g);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(i,g)}}function _(i,g){(g==null||g>i.length)&&(g=i.length);for(var n=0,v=new Array(g);n<g;n++)v[n]=i[n];return v}function a(i,g){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var v=[],t=!0,r=!1,u,l;try{for(n=n.call(i);!(t=(u=n.next()).done)&&(v.push(u.value),!(g&&v.length===g));t=!0);}catch(h){r=!0,l=h}finally{try{!t&&n.return!=null&&n.return()}finally{if(r)throw l}}return v}}function s(i){if(Array.isArray(i))return i}var c=function(g){var n=g.duration,v=g.timingFunction,t=g.mounted,r=g.onEnter,u=g.onExit,l=g.onEntered,h=g.onExited,E=n,S=Object(d.useState)(t?"entered":"exited"),C=f(S,2),R=C[0],A=C[1],$=Object(d.useRef)(-1),me=function(je){var H=je?r:u,le=je?l:h;A(je?"pre-entering":"pre-exiting"),window.clearTimeout($.current);var pe=window.setTimeout(function(){typeof H=="function"&&H(),A(je?"entering":"exiting")},10);$.current=window.setTimeout(function(){window.clearTimeout(pe),typeof le=="function"&&le(),A(je?"entered":"exited")},E)};return Object(y.a)(function(){me(t)},[t]),Object(d.useEffect)(function(){return function(){return window.clearTimeout($.current)}},[]),{transitionDuration:E,transitionStatus:R,transitionTimingFunction:v||"ease"}}},"./packages/co-design-core/src/components/Upload/stories/Upload.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g}),e.d(p,"AccessFile",function(){return n}),e.d(p,"Draggable",function(){return v});var x=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/react/index.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/core-js/modules/es.object.assign.js"),k=e("./packages/co-design-styles/src/tss/createStyles.ts"),B=Object(k.a)(function(t){return{root:{position:"relative",display:"inline-block",cursor:"pointer"},input:{display:"none"}}}),o=e("./packages/co-design-core/src/components/View/View.tsx"),M=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),b=e("./node_modules/react/jsx-runtime.js"),O=["children","id","name","value","accept","disabled","draggable","onChange","className","co","overrideStyles"];function P(t,r){return y(t)||m(t,r)||U(t,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,r){if(!!t){if(typeof t=="string")return d(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(t,r)}}function d(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,l=new Array(r);u<r;u++)l[u]=t[u];return l}function m(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var l=[],h=!0,E=!1,S,C;try{for(u=u.call(t);!(h=(S=u.next()).done)&&(l.push(S.value),!(r&&l.length===r));h=!0);}catch(R){E=!0,C=R}finally{try{!h&&u.return!=null&&u.return()}finally{if(E)throw C}}return l}}function y(t){if(Array.isArray(t))return t}function f(t,r){if(t==null)return{};var u=j(t,r),l,h;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(t);for(h=0;h<E.length;h++)l=E[h],!(r.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,l)||(u[l]=t[l]))}return u}function j(t,r){if(t==null)return{};var u={},l=Object.keys(t),h,E;for(E=0;E<l.length;E++)h=l[E],!(r.indexOf(h)>=0)&&(u[h]=t[h]);return u}var D=0,_=Object(w.forwardRef)(function(t,r){var u=t.children,l=t.id,h=t.name,E=t.value,S=t.accept,C=t.disabled,R=t.draggable,A=t.onChange,$=t.className,me=t.co,ge=t.overrideStyles,je=f(t,O),H=B(null,{overrideStyles:ge,name:"Upload"}),le=H.classes,pe=H.cx,F=Object(M.a)(!1),J=P(F,2),Z=J[0],de=J[1],ne=Object(w.useState)(E),ie=P(ne,2),Ce=ie[0],De=ie[1],Te=Object(w.useRef)(null),Ve=Object(w.useCallback)(function(ye){var Oe=ye.target.files,Se=Oe==null?void 0:Oe[0];De(Se),A==null||A(Se)},[]),Ue=Object(w.useCallback)(function(ye){ye.preventDefault(),ye.stopPropagation();var Oe=ye.dataTransfer.files,Se=Oe==null?void 0:Oe[0];De(Se),A==null||A(Se),de(!1)},[]),Ke=Object(w.useCallback)(function(ye){ye.preventDefault(),ye.stopPropagation(),D+=1,ye.dataTransfer.items&&ye.dataTransfer.items.length>0&&de(!0)},[]),Ze=Object(w.useCallback)(function(ye){ye.preventDefault(),ye.stopPropagation(),D-=1,D===0&&de(!1)},[]),ze=Object(w.useCallback)(function(ye){ye.preventDefault(),ye.stopPropagation()},[]),re=Object(w.useCallback)(function(){var ye;(ye=Te.current)===null||ye===void 0||ye.click()},[]);return Object(b.jsxs)(o.a,Object.assign({onClick:re,onDrop:Ue,onDragEnter:Ke,onDragLeave:Ze,onDragOver:ze,ref:r,className:pe(le.root,$),co:me},je,{children:[Object(b.jsx)("input",{ref:Te,type:"file",id:l,name:h,accept:S,onChange:Ve,className:le.input}),typeof u=="function"?u==null?void 0:u(Ce,Z):u]}))});_.displayName="@co-design/core/Upload";var a=e("./packages/co-design-core/src/components/Button/Button.tsx"),s=`import React from 'react';
import { Upload } from '../Upload';
import { Button } from '../../Button';

export default {
  title: '@co-design/core/Upload',
  component: Upload,
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>
        <Button>Click me</Button>
      </Upload>
    </div>
  );
};

export const AccessFile = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>{(file) => <Button>{file ? file.name : 'Click me'}</Button>}</Upload>
    </div>
  );
};

export const Draggable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload draggable>
        {(file, dragging) => (
          <div style={{ height: 100, width: 300, border: '4px dashed #aaa', borderColor: dragging ? 'black' : '#aaa' }}>
            {file ? file.name : 'Click or drag file to this area to upload.'}
          </div>
        )}
      </Upload>
    </div>
  );
};
`,c={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:18},startBody:{col:23,line:10},endBody:{col:1,line:18}},AccessFile:{startLoc:{col:26,line:20},endLoc:{col:1,line:26},startBody:{col:26,line:20},endBody:{col:1,line:26}},Draggable:{startLoc:{col:25,line:28},endLoc:{col:1,line:40},startBody:{col:25,line:28},endBody:{col:1,line:40}}},i=p.default={parameters:{storySource:{source:`import React from 'react';
import { Upload } from '../Upload';
import { Button } from '../../Button';

export default {
  title: '@co-design/core/Upload',
  component: Upload,
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>
        <Button>Click me</Button>
      </Upload>
    </div>
  );
};

export const AccessFile = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>{(file) => <Button>{file ? file.name : 'Click me'}</Button>}</Upload>
    </div>
  );
};

export const Draggable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload draggable>
        {(file, dragging) => (
          <div style={{ height: 100, width: 300, border: '4px dashed #aaa', borderColor: dragging ? 'black' : '#aaa' }}>
            {file ? file.name : 'Click or drag file to this area to upload.'}
          </div>
        )}
      </Upload>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:18},startBody:{col:23,line:10},endBody:{col:1,line:18}},"access-file":{startLoc:{col:26,line:20},endLoc:{col:1,line:26},startBody:{col:26,line:20},endBody:{col:1,line:26}},draggable:{startLoc:{col:25,line:28},endLoc:{col:1,line:40},startBody:{col:25,line:28},endBody:{col:1,line:40}}}}},title:"@co-design/core/Upload",component:_},g=function(){return Object(b.jsx)("div",{style:{padding:30},children:Object(b.jsx)(_,{children:Object(b.jsx)(a.a,{children:"Click me"})})})};g.displayName="Default";var n=function(){return Object(b.jsx)("div",{style:{padding:30},children:Object(b.jsx)(_,{children:function(u){return Object(b.jsx)(a.a,{children:u?u.name:"Click me"})}})})};n.displayName="AccessFile";var v=function(){return Object(b.jsx)("div",{style:{padding:30},children:Object(b.jsx)(_,{draggable:!0,children:function(u,l){return Object(b.jsx)("div",{style:{height:100,width:300,border:"4px dashed #aaa",borderColor:l?"black":"#aaa"},children:u?u.name:"Click or drag file to this area to upload."})}})})};v.displayName="Draggable"},"./packages/co-design-core/src/components/View/View.tsx":function(he,p,e){"use strict";e.d(p,"a",function(){return U});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.index-of.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.array.is-array.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.array.map.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.object.assign.js"),W=e.n(K),N=e("./node_modules/react/index.js"),q=e.n(N),L=e("./packages/co-design-styles/src/tss/useCss.ts"),k=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),B=e("./node_modules/react/jsx-runtime.js"),o=e.n(B),M=["component","className","style","co"];function b(d,m){if(d==null)return{};var y=O(d,m),f,j;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(d);for(j=0;j<D.length;j++)f=D[j],!(m.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,f)||(y[f]=d[f]))}return y}function O(d,m){if(d==null)return{};var y={},f=Object.keys(d),j,D;for(D=0;D<f.length;D++)j=f[D],!(m.indexOf(j)>=0)&&(y[j]=d[j]);return y}function P(d,m){return typeof d=="function"?d(m):d}function T(d,m){var y=Object(L.a)(),f=y.css,j=y.cx,D=Object(k.c)();return Array.isArray(d)?j(m,d.map(function(_){return f(P(_,D))})):j(m,f(P(d,D)))}var U=Object(N.forwardRef)(function(d,m){var y=d.component,f=d.className,j=d.style,D=d.co,_=b(d,M),a=y||"div";return Object(B.jsx)(a,Object.assign({ref:m,className:T(D,f),style:j},_))});U.displayName="@co-design/core/View"},"./packages/co-design-core/src/components/View/stories/View.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-core/src/components/View/View.tsx"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { View } from '../View';

export default {
  title: '@co-design/core/View',
  component: View,
};

export const Default = () => {
  return <View co={(theme) => ({ width: 100, height: 100, backgroundColor: theme.palettes.purple[3] })} />;
};
`,ee={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:11},startBody:{col:23,line:9},endBody:{col:1,line:11}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { View } from '../View';

export default {
  title: '@co-design/core/View',
  component: View,
};

export const Default = () => {
  return <View co={(theme) => ({ width: 100, height: 100, backgroundColor: theme.palettes.purple[3] })} />;
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:11},startBody:{col:23,line:9},endBody:{col:1,line:11}}}}},title:"@co-design/core/View",component:Q.a};var te=function(){return Object(ce.jsx)(Q.a,{co:function(K){return{width:100,height:100,backgroundColor:K.palettes.purple[3]}}})};te.displayName="Default"},"./packages/co-design-core/src/constants/index.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return x});var x={xsmall:24,small:32,medium:40,large:56,xlarge:64}},"./packages/co-design-core/src/utils/addAlpha.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return D});var x=e("./node_modules/core-js/modules/es.string.replace.js"),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),Q=e("./node_modules/core-js/modules/es.number.is-nan.js"),ce=e("./node_modules/core-js/modules/es.number.constructor.js"),Y=e("./node_modules/core-js/modules/es.parse-int.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),ee=e("./node_modules/core-js/modules/es.string.split.js"),te=e("./node_modules/core-js/modules/es.string.starts-with.js"),oe=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),K=e("./node_modules/core-js/modules/es.symbol.description.js"),W=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e("./node_modules/core-js/modules/es.function.name.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function b(_,a){return d(_)||U(_,a)||P(_,a)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(_,a){if(!!_){if(typeof _=="string")return T(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return T(_,a)}}function T(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,c=new Array(a);s<a;s++)c[s]=_[s];return c}function U(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var c=[],i=!0,g=!1,n,v;try{for(s=s.call(_);!(i=(n=s.next()).done)&&(c.push(n.value),!(a&&c.length===a));i=!0);}catch(t){g=!0,v=t}finally{try{!i&&s.return!=null&&s.return()}finally{if(g)throw v}}return c}}function d(_){if(Array.isArray(_))return _}function m(_){var a=_.replace("#","");return typeof a=="string"&&a.length===6&&!Number.isNaN(Number("0x"+a))}function y(_){var a=_.replace("#",""),s=parseInt(a,16),c=s>>16&255,i=s>>8&255,g=s&255;return{r:c,g:i,b:g,a:1}}function f(_){var a=_.replace(/[^0-9,.]/g,"").split(",").map(Number),s=b(a,4),c=s[0],i=s[1],g=s[2],n=s[3];return{r:c,g:i,b:g,a:n||1}}function j(_){return m(_)?y(_):_.startsWith("rgb")?f(_):{r:0,g:0,b:0,a:1}}var D=function(a,s){var c=j(a),i=c.r,g=c.g,n=c.b;return"rgba("+i+", "+g+", "+n+", "+s+")"}},"./packages/co-design-core/src/utils/getFieldValue.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return x});var x=function(Q,ce){return Q in ce?ce[Q]:Q}},"./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return Y});var x=e("./node_modules/core-js/modules/es.array.concat.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=function(ee){var te=Object(Q.useRef)(ee);return Object(Q.useEffect)(function(){te.current=ee},[ee]),Object(Q.useMemo)(function(){return function(){for(var oe,G=arguments.length,K=new Array(G),W=0;W<G;W++)K[W]=arguments[W];return(oe=te.current)===null||oe===void 0?void 0:oe.call.apply(oe,[te].concat(K))}},[])}},"./packages/co-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-hooks/src/useClickAway/useClickAway.ts"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { useClickAway } from '../useClickAway';

export default {
  title: '@co-design/hooks/useClickAway',
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </div>
  );
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useClickAway } from '../useClickAway';

export default {
  title: '@co-design/hooks/useClickAway',
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(\`Click away from red box!\`);
  });

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@co-design/hooks/useClickAway"};var te=function(){var G=Object(Q.a)(function(){alert("Click away from red box!")});return Object(ce.jsx)("div",{children:Object(ce.jsx)("div",{ref:G,style:{width:100,height:100,backgroundColor:"red"}})})};te.displayName="Default"},"./packages/co-design-hooks/src/useClickAway/useClickAway.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return D});var x=e("./node_modules/core-js/modules/es.array.slice.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.function.name.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.array.from.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.is-array.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts");function m(_,a){var s=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!s){if(Array.isArray(_)||(s=y(_))||a&&_&&typeof _.length=="number"){s&&(_=s);var c=0,i=function(){};return{s:i,n:function(){return c>=_.length?{done:!0}:{done:!1,value:_[c++]}},e:function(r){throw r},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,n=!1,v;return{s:function(){s=s.call(_)},n:function(){var r=s.next();return g=r.done,r},e:function(r){n=!0,v=r},f:function(){try{!g&&s.return!=null&&s.return()}finally{if(n)throw v}}}}function y(_,a){if(!!_){if(typeof _=="string")return f(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return f(_,a)}}function f(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,c=new Array(a);s<a;s++)c[s]=_[s];return c}var j=["mousedown","touchstart"],D=function(a){var s=Object(T.useRef)(),c=Object(d.a)(a);return Object(T.useEffect)(function(){var i=function(r){var u=s.current;u&&!u.contains(r.target)&&c(r)},g=m(j),n;try{for(g.s();!(n=g.n()).done;){var v=n.value;document.addEventListener(v,i)}}catch(t){g.e(t)}finally{g.f()}return function(){var t=m(j),r;try{for(t.s();!(r=t.n()).done;){var u=r.value;document.removeEventListener(u,i)}}catch(l){t.e(l)}finally{t.f()}}},[s.current]),s}},"./packages/co-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return _});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/web.timers.js");function q(a,s){return M(a)||o(a,s)||k(a,s)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(a,s){if(!!a){if(typeof a=="string")return B(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return B(a,s)}}function B(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function o(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function M(a){if(Array.isArray(a))return a}var b=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=s.timeout,i=c===void 0?2e3:c,g=Object(W.useState)(null),n=q(g,2),v=n[0],t=n[1],r=Object(W.useState)(!1),u=q(r,2),l=u[0],h=u[1],E=Object(W.useState)(null),S=q(E,2),C=S[0],R=S[1],A=function(je){clearTimeout(C),R(setTimeout(function(){return h(!1)},i)),h(je)},$=function(je){"clipboard"in navigator?navigator.clipboard.writeText(je).then(function(){return A(!0)}).catch(function(H){return t(H)}):t(new Error("useClipboard: navigator.clipboard is not supported"))},me=function(){h(!1),t(null),clearTimeout(C)};return{copy:$,reset:me,error:v,copied:l}},O=e("./node_modules/react/jsx-runtime.js");function P(a,s){return y(a)||m(a,s)||U(a,s)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(a,s){if(!!a){if(typeof a=="string")return d(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,s)}}function d(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function m(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function y(a){if(Array.isArray(a))return a}var f=`import React, { useState } from 'react';
import { useClipboard } from '../useClipboard';

export default {
  title: '@co-design/hooks/useClipboard',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && 'Copied!!'}</span>
    </div>
  );
};
`,j={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}},D=p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useClipboard } from '../useClipboard';

export default {
  title: '@co-design/hooks/useClipboard',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && 'Copied!!'}</span>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@co-design/hooks/useClipboard"},_=function(){var s=Object(W.useState)(""),c=P(s,2),i=c[0],g=c[1],n=b({timeout:3e3}),v=n.copy,t=n.copied;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",onChange:function(u){return g(u.target.value)}}),Object(O.jsx)("button",{onClick:function(){return v(i)},children:"copy"}),Object(O.jsx)("span",{children:t&&"Copied!!"})]})};_.displayName="Default"},"./packages/co-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e("./packages/co-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Q=function(){return Object(w.a)("(prefers-color-scheme: dark)")?"dark":"light"},ce=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
import { useColorScheme } from '../useColorScheme';

export default {
  title: '@co-design/hooks/useColorScheme',
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
`,X={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},ee=p.default={parameters:{storySource:{source:`import React from 'react';
import { useColorScheme } from '../useColorScheme';

export default {
  title: '@co-design/hooks/useColorScheme',
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@co-design/hooks/useColorScheme"},te=function(){var G=Q();return Object(ce.jsx)("div",{children:Object(ce.jsx)("div",{children:G})})};te.displayName="Default"},"./packages/co-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return a});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),q=e("./packages/co-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function L(s,c){return b(s)||M(s,c)||B(s,c)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(s,c){if(!!s){if(typeof s=="string")return o(s,c);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(s,c)}}function o(s,c){(c==null||c>s.length)&&(c=s.length);for(var i=0,g=new Array(c);i<c;i++)g[i]=s[i];return g}function M(s,c){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var g=[],n=!0,v=!1,t,r;try{for(i=i.call(s);!(n=(t=i.next()).done)&&(g.push(t.value),!(c&&g.length===c));n=!0);}catch(u){v=!0,r=u}finally{try{!n&&i.return!=null&&i.return()}finally{if(v)throw r}}return g}}function b(s){if(Array.isArray(s))return s}var O=function(c,i,g){var n=Object(q.a)(c,i),v=L(n,2),t=v[0],r=v[1];return Object(N.a)(t,g),r},P=e("./node_modules/react/jsx-runtime.js");function T(s,c){return f(s)||y(s,c)||d(s,c)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(s,c){if(!!s){if(typeof s=="string")return m(s,c);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(s,c)}}function m(s,c){(c==null||c>s.length)&&(c=s.length);for(var i=0,g=new Array(c);i<c;i++)g[i]=s[i];return g}function y(s,c){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var g=[],n=!0,v=!1,t,r;try{for(i=i.call(s);!(n=(t=i.next()).done)&&(g.push(t.value),!(c&&g.length===c));n=!0);}catch(u){v=!0,r=u}finally{try{!n&&i.return!=null&&i.return()}finally{if(v)throw r}}return g}}function f(s){if(Array.isArray(s))return s}var j=`import React, { useState } from 'react';
import { useDebounce } from '../useDebounce';

export default {
  title: '@co-design/hooks/useDebounce',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const clear = useDebounce(
    () => {
      alert('Updated!');
    },
    1000,
    [value],
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};
`,D={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}},_=p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useDebounce } from '../useDebounce';

export default {
  title: '@co-design/hooks/useDebounce',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const clear = useDebounce(
    () => {
      alert('Updated!');
    },
    1000,
    [value],
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}}}},title:"@co-design/hooks/useDebounce"},a=function(){var c=Object(W.useState)(""),i=T(c,2),g=i[0],n=i[1],v=O(function(){alert("Updated!")},1e3,[g]);return Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{type:"text",onChange:function(r){return n(r.target.value)}}),Object(P.jsx)("button",{onClick:v,children:"Cancel"})]})};a.displayName="Default"},"./packages/co-design-hooks/src/useFocusReturn/useFocusReturn.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return X});var x=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),X=function(te){var oe=te.opened,G=te.transitionDuration,K=te.shouldReturnFocus,W=K===void 0?!0:K,N=Object(Q.useRef)(),q=function(){if(N.current&&"focus"in N.current&&typeof N.current.focus=="function"){var k;(k=N.current)===null||k===void 0||k.focus()}};return Object(Y.a)(function(){var L=-1,k=function(o){o.code==="Tab"&&window.clearTimeout(L)};return document.addEventListener("keydown",k),oe?N.current=document.activeElement:W&&(L=window.setTimeout(q,G+10)),function(){window.clearTimeout(L),document.removeEventListener("keydown",k)}},[oe]),q}},"./packages/co-design-hooks/src/useFocusTrap/useFocusTrap.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return T});var x=e("./node_modules/core-js/modules/es.array.from.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.find.js"),ce=e("./node_modules/core-js/modules/web.timers.js"),Y=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.parse-int.js"),ee=e("./node_modules/core-js/modules/es.number.is-nan.js"),te=e("./node_modules/core-js/modules/es.number.constructor.js"),oe=e("./node_modules/core-js/modules/es.array.filter.js"),G=/input|select|textarea|button|object/,K="a, input, select, textarea, button, object, [tabindex]";function W(U){return U.style.display==="none"}function N(U){for(var d=U;d&&d!==document.body;){if(W(d))return!1;d=d.parentNode}return!0}function q(U){var d=U.getAttribute("tabindex");return d===null&&(d=void 0),parseInt(d,10)}function L(U){var d=U.nodeName.toLowerCase(),m=!Number.isNaN(q(U)),y=G.test(d)&&!U.disabled||U instanceof HTMLAnchorElement&&U.href||m;return y&&N(U)}function k(U){var d=q(U),m=Number.isNaN(d);return(m||d>=0)&&L(U)}function B(U){return Array.from(U.querySelectorAll(K)).filter(k)}function o(U,d){var m=B(U);if(!m.length){d.preventDefault();return}var y=m[d.shiftKey?0:m.length-1],f=y===document.activeElement||U===document.activeElement;if(!!f){d.preventDefault();var j=m[d.shiftKey?m.length-1:0];j&&j.focus()}}var M=e("./node_modules/core-js/modules/es.array.map.js"),b=e("./node_modules/core-js/modules/es.array.for-each.js"),O=e("./node_modules/core-js/modules/web.dom-collections.for-each.js");function P(U){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"body > :not(script)",m=Array.from(document.querySelectorAll(d)).map(function(y){if(!y.contains(U)){var f=y.getAttribute("aria-hidden");return(f===null||f==="false")&&y.setAttribute("aria-hidden","true"),{node:y,ariaHidden:f}}});return function(){m.forEach(function(y){!y||(y.ariaHidden===null?y.node.removeAttribute("aria-hidden"):y.node.setAttribute("aria-hidden",y.ariaHidden))})}}var T=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,m=Object(Y.useRef)(),y=Object(Y.useRef)(null),f=Object(Y.useCallback)(function(j){if(!!d)if(y.current&&y.current(),j){var D=function(a){y.current=P(a);var s=j.querySelector("[data-autofocus]");if(!s){var c=Array.from(j.querySelectorAll(K));s=c.find(k)||c.find(L)||null,!s&&L(j)&&(s=j)}s&&s.focus()};setTimeout(function(){j.ownerDocument&&D(j)}),m.current=j}else m.current=null},[d]);return Object(Y.useEffect)(function(){if(!!d){var j=function(_){_.key==="Tab"&&m.current&&o(m.current,_)};return document.addEventListener("keydown",j),function(){document.removeEventListener("keydown",j)}}},[d]),f}},"./packages/co-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-hooks/src/useForceUpdate/useForceUpdate.ts"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { useForceUpdate } from '../useForceUpdate';

export default {
  title: '@co-design/hooks/useForceUpdate',
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useForceUpdate } from '../useForceUpdate';

export default {
  title: '@co-design/hooks/useForceUpdate',
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}}}},title:"@co-design/hooks/useForceUpdate"};var te=function(){var G=Object(Q.a)();return Object(ce.jsxs)("div",{children:[Math.random(),Object(ce.jsx)("button",{onClick:G,children:"Update"})]})};te.displayName="Default"},"./packages/co-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return a});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(s,c){return D(s)||j(s,c)||y(s,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,c){if(!!s){if(typeof s=="string")return f(s,c);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(s,c)}}function f(s,c){(c==null||c>s.length)&&(c=s.length);for(var i=0,g=new Array(c);i<c;i++)g[i]=s[i];return g}function j(s,c){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var g=[],n=!0,v=!1,t,r;try{for(i=i.call(s);!(n=(t=i.next()).done)&&(g.push(t.value),!(c&&g.length===c));n=!0);}catch(u){v=!0,r=u}finally{try{!n&&i.return!=null&&i.return()}finally{if(v)throw r}}return g}}function D(s){if(Array.isArray(s))return s}var _=function(c){return(c+1)%1e6},a=function(){var c=Object(T.useReducer)(_,0),i=d(c,2),g=i[1];return g}},"./packages/co-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/es.string.split.js"),q=e("./node_modules/core-js/modules/es.regexp.exec.js"),L=e("./node_modules/core-js/modules/es.string.replace.js"),k=e("./node_modules/core-js/modules/es.array.filter.js"),B=e("./node_modules/core-js/modules/es.regexp.to-string.js"),o=e("./node_modules/core-js/modules/es.date.to-string.js");function M(r,u){var l=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!l){if(Array.isArray(r)||(l=b(r))||u&&r&&typeof r.length=="number"){l&&(r=l);var h=0,E=function(){};return{s:E,n:function(){return h>=r.length?{done:!0}:{done:!1,value:r[h++]}},e:function(A){function $(me){return A.apply(this,arguments)}return $.toString=function(){return A.toString()},$}(function(A){throw A}),f:E}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S=!0,C=!1,R;return{s:function(){l=l.call(r)},n:function(){var $=l.next();return S=$.done,$},e:function(A){function $(me){return A.apply(this,arguments)}return $.toString=function(){return A.toString()},$}(function(A){C=!0,R=A}),f:function(){try{!S&&l.return!=null&&l.return()}finally{if(C)throw R}}}}function b(r,u){if(!!r){if(typeof r=="string")return O(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return O(r,u)}}function O(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}var P={alt:1,ctrl:2,meta:4,shift:8},T={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},U={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},d=function(u){var l=u.key!==" "?u.key.toLowerCase():"space",h=0;return u.altKey&&(h+=P.alt),u.ctrlKey&&(h+=P.ctrl),u.metaKey&&(h+=P.meta),u.shiftKey&&(h+=P.shift),{modifiers:h,key:l}},m=function(u){var l=u.replace(/\s/g,"").toLowerCase().split("+"),h=0,E,S=M(l),C;try{for(S.s();!(C=S.n()).done;){var R=C.value;P[R]?h+=P[R]:P[U[R]]?h+=P[U[R]]:T[R]?(h+=P.shift,E=T[R]):U[R]?E=U[R]:E=R}}catch(A){S.e(A)}finally{S.f()}return{modifiers:h,key:E}},y=function(u,l){return u.modifiers===l.modifiers&&u.key===l.key},f=function(u){var l=Object(W.useMemo)(function(){return u.filter(function($){return!$.global})},[u]),h=Object(W.useMemo)(function(){return u.filter(function($){return $.global})},[u]),E=Object(W.useCallback)(function($,me,ge,je){var H=M($?h:l),le;try{for(H.s();!(le=H.n()).done;){var pe=le.value;if(y(m(pe.combo),me)){var F;(F=pe[ge])===null||F===void 0||F.call(pe,je)}}}catch(J){H.e(J)}finally{H.f()}},[l,h]),S=Object(W.useCallback)(function($){E(!0,d($),"onKeyDown",$)},[E]),C=Object(W.useCallback)(function($){E(!0,d($),"onKeyUp",$)},[E]),R=Object(W.useCallback)(function($){E(!1,d($.nativeEvent),"onKeyDown",$.nativeEvent)},[E]),A=Object(W.useCallback)(function($){E(!1,d($.nativeEvent),"onKeyUp",$.nativeEvent)},[E]);return Object(W.useEffect)(function(){return document.addEventListener("keydown",S),document.addEventListener("keyup",C),function(){document.removeEventListener("keydown",S),document.removeEventListener("keyup",C)}},[S,C]),{handleKeyDown:R,handleKeyUp:A}},j=e("./node_modules/react/jsx-runtime.js");function D(r,u){return i(r)||c(r,u)||a(r,u)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(r,u){if(!!r){if(typeof r=="string")return s(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return s(r,u)}}function s(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}function c(r,u){var l=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var h=[],E=!0,S=!1,C,R;try{for(l=l.call(r);!(E=(C=l.next()).done)&&(h.push(C.value),!(u&&h.length===u));E=!0);}catch(A){S=!0,R=A}finally{try{!E&&l.return!=null&&l.return()}finally{if(S)throw R}}return h}}function i(r){if(Array.isArray(r))return r}var g=`import React, { useRef, useState } from 'react';
import { useHotKey } from '../useHotKey';

export default {
  title: '@co-design/hooks/useHotKey',
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: 'ctrl+f',
      onKeyDown() {
        alert('Blocking find');
      },
    },
    {
      combo: 'ctrl+l',
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: 'shift+r',
      onKeyUp() {
        setValue('');
      },
    },
  ]);

  return (
    <div>
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    </div>
  );
};
`,n={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:38},startBody:{col:23,line:8},endBody:{col:1,line:38}}},v=p.default={parameters:{storySource:{source:`import React, { useRef, useState } from 'react';
import { useHotKey } from '../useHotKey';

export default {
  title: '@co-design/hooks/useHotKey',
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: 'ctrl+f',
      onKeyDown() {
        alert('Blocking find');
      },
    },
    {
      combo: 'ctrl+l',
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: 'shift+r',
      onKeyUp() {
        setValue('');
      },
    },
  ]);

  return (
    <div>
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:38},startBody:{col:23,line:8},endBody:{col:1,line:38}}}}},title:"@co-design/hooks/useHotKey"},t=function(){var u=Object(W.useRef)(null),l=Object(W.useState)(""),h=D(l,2),E=h[0],S=h[1],C=f([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){u.current.select()}},{combo:"shift+r",onKeyUp:function(){S("")}}]),R=C.handleKeyDown,A=C.handleKeyUp;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{ref:u,type:"text",value:E,onChange:function(me){return S(me.target.value)},onKeyDown:R,onKeyUp:A})})};t.displayName="Default"},"./packages/co-design-hooks/src/useHover/stories/useHover.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return n});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useHover/useHover.ts"),m=e("./packages/co-design-hooks/src/useForceUpdate/useForceUpdate.ts"),y=e("./node_modules/react/jsx-runtime.js"),f=e.n(y);function j(v,t){return c(v)||s(v,t)||_(v,t)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(v,t){if(!!v){if(typeof v=="string")return a(v,t);var r=Object.prototype.toString.call(v).slice(8,-1);if(r==="Object"&&v.constructor&&(r=v.constructor.name),r==="Map"||r==="Set")return Array.from(v);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(v,t)}}function a(v,t){(t==null||t>v.length)&&(t=v.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=v[r];return u}function s(v,t){var r=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(r!=null){var u=[],l=!0,h=!1,E,S;try{for(r=r.call(v);!(l=(E=r.next()).done)&&(u.push(E.value),!(t&&u.length===t));l=!0);}catch(C){h=!0,S=C}finally{try{!l&&r.return!=null&&r.return()}finally{if(h)throw S}}return u}}function c(v){if(Array.isArray(v))return v}var i=`import React, { useEffect } from 'react';
import { useHover } from '../useHover';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/hooks/useHover',
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ display: 'inline-block', width: 100, height: 100, backgroundColor: 'red' }}>
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};p.default={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import { useHover } from '../useHover';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/hooks/useHover',
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ display: 'inline-block', width: 100, height: 100, backgroundColor: 'red' }}>
        Hover: {\`\${state}\`}
      </div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}}}},title:"@co-design/hooks/useHover"};var n=function(){var t=Object(d.a)(),r=j(t,2),u=r[0],l=r[1],h=Object(m.a)();return Object(T.useEffect)(function(){h()},[]),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{ref:l,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+u]})})};n.displayName="Default"},"./packages/co-design-hooks/src/useHover/useHover.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return _});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(a,s){return D(a)||j(a,s)||y(a,s)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(a,s){if(!!a){if(typeof a=="string")return f(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,s)}}function f(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function j(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function D(a){if(Array.isArray(a))return a}var _=function(){var s=Object(T.useRef)(null),c=Object(T.useState)(!1),i=d(c,2),g=i[0],n=i[1],v=Object(T.useCallback)(function(){return n(!0)},[]),t=Object(T.useCallback)(function(){return n(!1)},[]);return Object(T.useEffect)(function(){var r=s.current;if(!!r)return r.addEventListener("mouseenter",v),r.addEventListener("mouseleave",t),function(){r.removeEventListener("mouseenter",v),r.removeEventListener("mouseleave",t)}},[s.current]),[g,s]}},"./packages/co-design-hooks/src/useId/stories/useId.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-hooks/src/useId/useId.ts"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { useId } from '../useId';

export default {
  title: '@co-design/hooks/useId',
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useId } from '../useId';

export default {
  title: '@co-design/hooks/useId',
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@co-design/hooks/useId"};var te=function(){var G=Object(Q.a)();return Object(ce.jsx)("div",{children:Object(ce.jsx)("div",{children:G})})};te.displayName="Default"},"./packages/co-design-hooks/src/useId/useId.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return a});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(s,c){return D(s)||j(s,c)||y(s,c)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,c){if(!!s){if(typeof s=="string")return f(s,c);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(s,c)}}function f(s,c){(c==null||c>s.length)&&(c=s.length);for(var i=0,g=new Array(c);i<c;i++)g[i]=s[i];return g}function j(s,c){var i=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var g=[],n=!0,v=!1,t,r;try{for(i=i.call(s);!(n=(t=i.next()).done)&&(g.push(t.value),!(c&&g.length===c));n=!0);}catch(u){v=!0,r=u}finally{try{!n&&i.return!=null&&i.return()}finally{if(v)throw r}}return g}}function D(s){if(Array.isArray(s))return s}var _=0,a=function(c){var i=Object(T.useState)(c),g=d(i,2),n=g[0],v=g[1],t=c||n;return Object(T.useEffect)(function(){n==null&&(_+=1,v("co-"+_))},[n]),t}},"./packages/co-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return D});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/core-js/modules/web.timers.js"),ce=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/core-js/modules/es.array.from.js");function B(_,a){return P(_)||O(_,a)||M(_,a)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(_,a){if(!!_){if(typeof _=="string")return b(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return b(_,a)}}function b(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,c=new Array(a);s<a;s++)c[s]=_[s];return c}function O(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var c=[],i=!0,g=!1,n,v;try{for(s=s.call(_);!(i=(n=s.next()).done)&&(c.push(n.value),!(a&&c.length===a));i=!0);}catch(t){g=!0,v=t}finally{try{!i&&s.return!=null&&s.return()}finally{if(g)throw v}}return c}}function P(_){if(Array.isArray(_))return _}var T=["keypress","mousemove","touchmove","click","scroll"],U={events:T,initialState:!0},d=function(a,s){var c=Object.assign({},U,s),i=c.events,g=c.initialState,n=Object(x.useState)(g),v=B(n,2),t=v[0],r=v[1],u=Object(x.useRef)();return Object(x.useEffect)(function(){var l=function(){r(!1),u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(function(){r(!0)},a)};return i.forEach(function(h){return document.addEventListener(h,l)}),function(){i.forEach(function(h){return document.removeEventListener(h,l)})}},[a]),t},m=e("./node_modules/react/jsx-runtime.js"),y=`import React from 'react';
import { useIdle } from '../useIdle';

export default {
  title: '@co-design/hooks/useIdle',
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},j=p.default={parameters:{storySource:{source:`import React from 'react';
import { useIdle } from '../useIdle';

export default {
  title: '@co-design/hooks/useIdle',
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@co-design/hooks/useIdle"},D=function(){var a=d(3e3);return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:["Idle: ",""+a]})})};D.displayName="Default"},"./packages/co-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return D});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js");function N(_,a){return o(_)||B(_,a)||L(_,a)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(_,a){if(!!_){if(typeof _=="string")return k(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(_,a)}}function k(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,c=new Array(a);s<a;s++)c[s]=_[s];return c}function B(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var c=[],i=!0,g=!1,n,v;try{for(s=s.call(_);!(i=(n=s.next()).done)&&(c.push(n.value),!(a&&c.length===a));i=!0);}catch(t){g=!0,v=t}finally{try{!i&&s.return!=null&&s.return()}finally{if(g)throw v}}return c}}function o(_){if(Array.isArray(_))return _}var M=function(a){var s=Object(W.useState)(null),c=N(s,2),i=c[0],g=c[1],n=Object(W.useRef)(),v=Object(W.useCallback)(function(t){if(n.current&&(n.current.disconnect(),n.current=null),t===null){g(null);return}n.current=new IntersectionObserver(function(r){var u=N(r,1),l=u[0];g(l)},a),n.current.observe(t)},[a==null?void 0:a.rootMargin,a==null?void 0:a.root,a==null?void 0:a.threshold]);return[v,i]},b=e("./node_modules/react/jsx-runtime.js");function O(_,a){return m(_)||d(_,a)||T(_,a)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(_,a){if(!!_){if(typeof _=="string")return U(_,a);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return U(_,a)}}function U(_,a){(a==null||a>_.length)&&(a=_.length);for(var s=0,c=new Array(a);s<a;s++)c[s]=_[s];return c}function d(_,a){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var c=[],i=!0,g=!1,n,v;try{for(s=s.call(_);!(i=(n=s.next()).done)&&(c.push(n.value),!(a&&c.length===a));i=!0);}catch(t){g=!0,v=t}finally{try{!i&&s.return!=null&&s.return()}finally{if(g)throw v}}return c}}function m(_){if(Array.isArray(_))return _}var y=`import React, { useRef } from 'react';
import { useIntersection } from '../useIntersection';

export default {
  title: '@co-design/hooks/useIntersection',
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: 'scroll' }}>
      <div style={{ height: 500 }}>
        <div ref={ref} style={{ marginTop: 290, height: 50, backgroundColor: observer?.isIntersecting ? 'green' : 'red' }}>
          {observer?.isIntersecting ? 'Half visible' : 'Obscured'}
        </div>
      </div>
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}},j=p.default={parameters:{storySource:{source:`import React, { useRef } from 'react';
import { useIntersection } from '../useIntersection';

export default {
  title: '@co-design/hooks/useIntersection',
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: 'scroll' }}>
      <div style={{ height: 500 }}>
        <div ref={ref} style={{ marginTop: 290, height: 50, backgroundColor: observer?.isIntersecting ? 'green' : 'red' }}>
          {observer?.isIntersecting ? 'Half visible' : 'Obscured'}
        </div>
      </div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}}}},title:"@co-design/hooks/useIntersection"},D=function(){var a=Object(W.useRef)(null),s=M({root:a.current,threshold:.5}),c=O(s,2),i=c[0],g=c[1];return Object(b.jsx)("div",{ref:a,style:{width:300,height:300,overflowY:"scroll"},children:Object(b.jsx)("div",{style:{height:500},children:Object(b.jsx)("div",{ref:i,style:{marginTop:290,height:50,backgroundColor:g!=null&&g.isIntersecting?"green":"red"},children:g!=null&&g.isIntersecting?"Half visible":"Obscured"})})})};D.displayName="Default"},"./packages/co-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return d});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./packages/co-design-hooks/src/useIntervalFn/useIntervalFn.ts");function q(m,y){return M(m)||o(m,y)||k(m,y)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(m,y){if(!!m){if(typeof m=="string")return B(m,y);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return B(m,y)}}function B(m,y){(y==null||y>m.length)&&(y=m.length);for(var f=0,j=new Array(y);f<y;f++)j[f]=m[f];return j}function o(m,y){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var j=[],D=!0,_=!1,a,s;try{for(f=f.call(m);!(D=(a=f.next()).done)&&(j.push(a.value),!(y&&j.length===y));D=!0);}catch(c){_=!0,s=c}finally{try{!D&&f.return!=null&&f.return()}finally{if(_)throw s}}return j}}function M(m){if(Array.isArray(m))return m}var b=function(y,f){var j=Object(N.a)(y,f),D=q(j,2),_=D[0],a=D[1];return Object(x.useEffect)(function(){return _(),a},[_,a]),a},O=e("./node_modules/react/jsx-runtime.js"),P=`import React from 'react';
import { useInterval } from '../useInterval';

export default {
  title: '@co-design/hooks/useInterval',
};

export const Default = () => {
  const clear = useInterval(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,T={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},U=p.default={parameters:{storySource:{source:`import React from 'react';
import { useInterval } from '../useInterval';

export default {
  title: '@co-design/hooks/useInterval',
};

export const Default = () => {
  const clear = useInterval(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@co-design/hooks/useInterval"},d=function(){var y=b(function(){alert("fire")},3e3);return Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:y,children:"clear"})})};d.displayName="Default"},"./packages/co-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useIntervalFn/useIntervalFn.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React from 'react';
import { useIntervalFn } from '../useIntervalFn';

export default {
  title: '@co-design/hooks/useIntervalFn',
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useIntervalFn } from '../useIntervalFn';

export default {
  title: '@co-design/hooks/useIntervalFn',
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@co-design/hooks/useIntervalFn"};var g=function(){var v=Object(d.a)(function(){alert("fire")},3e3),t=f(v,2),r=t[0],u=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:r,children:"run"}),Object(m.jsx)("button",{onClick:u,children:"clear"})]})};g.displayName="Default"},"./packages/co-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return X});var x=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(te,oe){var G=Object(Q.useRef)(),K=Object(Y.a)(te),W=Object(Q.useCallback)(function(){G.current&&clearInterval(G.current),G.current=setInterval(function(){K()},oe)},[oe]),N=Object(Q.useCallback)(function(){G.current&&clearInterval(G.current)},[]);return Object(Q.useEffect)(function(){return N},[N]),[W,N]}},"./packages/co-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useIsomorphicEffect/useIsomorphicEffect.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React, { useState } from 'react';
import { useIsomorphicEffect } from '../useIsomorphicEffect';

export default {
  title: '@co-design/hooks/useIsomorphicEffect',
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && 'mounted'}</div>;
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:15},startBody:{col:23,line:8},endBody:{col:1,line:15}}};p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useIsomorphicEffect } from '../useIsomorphicEffect';

export default {
  title: '@co-design/hooks/useIsomorphicEffect',
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && 'mounted'}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:15},startBody:{col:23,line:8},endBody:{col:1,line:15}}}}},title:"@co-design/hooks/useIsomorphicEffect"};var g=function(){var v=Object(T.useState)(!1),t=f(v,2),r=t[0],u=t[1];return Object(d.a)(function(){u(!0)},[]),Object(m.jsx)("div",{children:r&&"mounted"})};g.displayName="Default"},"./packages/co-design-hooks/src/useIsomorphicEffect/useIsomorphicEffect.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return Q});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=typeof document!="undefined"?x.useLayoutEffect:x.useEffect},"./packages/co-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return U});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js");function N(d,m){return o(d)||B(d,m)||L(d,m)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(d,m){if(!!d){if(typeof d=="string")return k(d,m);var y=Object.prototype.toString.call(d).slice(8,-1);if(y==="Object"&&d.constructor&&(y=d.constructor.name),y==="Map"||y==="Set")return Array.from(d);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return k(d,m)}}function k(d,m){(m==null||m>d.length)&&(m=d.length);for(var y=0,f=new Array(m);y<m;y++)f[y]=d[y];return f}function B(d,m){var y=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(y!=null){var f=[],j=!0,D=!1,_,a;try{for(y=y.call(d);!(j=(_=y.next()).done)&&(f.push(_.value),!(m&&f.length===m));j=!0);}catch(s){D=!0,a=s}finally{try{!j&&y.return!=null&&y.return()}finally{if(D)throw a}}return f}}function o(d){if(Array.isArray(d))return d}var M=function(m){var y=Object(x.useState)(!1),f=N(y,2),j=f[0],D=f[1],_=Object(x.useCallback)(function(s){var c=s.key;c===m&&D(!0)},[m]),a=Object(x.useCallback)(function(s){var c=s.key;c===m&&D(!1)},[m]);return Object(x.useEffect)(function(){return window.addEventListener("keydown",_),window.addEventListener("keyup",a),function(){window.removeEventListener("keydown",_),window.removeEventListener("keyup",a)}},[_,a]),j},b=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
import { useKeyPress } from '../useKeyPress';

export default {
  title: '@co-design/hooks/useKeyPress',
};

export const Default = () => {
  const keyPressed = useKeyPress('r');

  return <div>{keyPressed && 'r key pressed'}</div>;
};
`,P={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},T=p.default={parameters:{storySource:{source:`import React from 'react';
import { useKeyPress } from '../useKeyPress';

export default {
  title: '@co-design/hooks/useKeyPress',
};

export const Default = () => {
  const keyPressed = useKeyPress('r');

  return <div>{keyPressed && 'r key pressed'}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@co-design/hooks/useKeyPress"},U=function(){var m=M("r");return Object(b.jsx)("div",{children:m&&"r key pressed"})};U.displayName="Default"},"./packages/co-design-hooks/src/useList/stories/useList.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.array.map.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.array.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.array.slice.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.from.js"),U=e.n(T),d=e("./node_modules/react/index.js"),m=e.n(d),y=e("./packages/co-design-hooks/src/useList/useList.ts"),f=e("./node_modules/react/jsx-runtime.js"),j=e.n(f);function D(r,u){return i(r)||c(r,u)||a(r,u)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(r,u){if(!!r){if(typeof r=="string")return s(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return s(r,u)}}function s(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}function c(r,u){var l=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var h=[],E=!0,S=!1,C,R;try{for(l=l.call(r);!(E=(C=l.next()).done)&&(h.push(C.value),!(u&&h.length===u));E=!0);}catch(A){S=!0,R=A}finally{try{!E&&l.return!=null&&l.return()}finally{if(S)throw R}}return h}}function i(r){if(Array.isArray(r))return r}var g=`import React from 'react';
import { useList } from '../useList';

export default {
  title: '@co-design/hooks/useList',
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>append</button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>prepend</button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, 'Updated')}>setItem 3 index</button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>insert 3 index</button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
`,n={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useList } from '../useList';

export default {
  title: '@co-design/hooks/useList',
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(\`Item \${++count}\`)}>append</button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>prepend</button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, 'Updated')}>setItem 3 index</button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>insert 3 index</button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}}}},title:"@co-design/hooks/useList"};var v=5,t=function(){var u=Object(y.a)(["Item 1","Item 2","Item 3","Item 4","Item 5"]),l=D(u,2),h=l[0],E=l[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return E.append("Item "+ ++v)},children:"append"}),Object(f.jsx)("button",{onClick:function(){return E.pop()},children:"pop"}),Object(f.jsx)("button",{onClick:function(){return E.prepend("Item "+ ++v)},children:"prepend"}),Object(f.jsx)("button",{onClick:function(){return E.shift()},children:"shift"}),Object(f.jsx)("button",{onClick:function(){return E.setItem(3,"Updated")},children:"setItem 3 index"}),Object(f.jsx)("button",{onClick:function(){return E.remove(2,3)},children:"remove 2, 3 index"}),Object(f.jsx)("button",{onClick:function(){return E.insert(3,"Item "+ ++v)},children:"insert 3 index"})]}),Object(f.jsx)("ul",{children:h.map(function(S,C){return Object(f.jsx)("li",{children:S},C)})})]})};t.displayName="Default"},"./packages/co-design-hooks/src/useList/useList.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return h});var x=e("./node_modules/core-js/modules/es.array.concat.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.array.slice.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.array.filter.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.array.includes.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.string.includes.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.symbol.js"),q=e.n(N),L=e("./node_modules/core-js/modules/es.symbol.description.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.object.to-string.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.string.iterator.js"),P=e.n(O),T=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e.n(T),d=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(d),y=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(y),j=e("./node_modules/core-js/modules/es.array.from.js"),D=e.n(j),_=e("./node_modules/react/index.js"),a=e.n(_);function s(E){return g(E)||i(E)||t(E)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(E){if(typeof Symbol!="undefined"&&E[Symbol.iterator]!=null||E["@@iterator"]!=null)return Array.from(E)}function g(E){if(Array.isArray(E))return r(E)}function n(E,S){return l(E)||u(E,S)||t(E,S)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(E,S){if(!!E){if(typeof E=="string")return r(E,S);var C=Object.prototype.toString.call(E).slice(8,-1);if(C==="Object"&&E.constructor&&(C=E.constructor.name),C==="Map"||C==="Set")return Array.from(E);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return r(E,S)}}function r(E,S){(S==null||S>E.length)&&(S=E.length);for(var C=0,R=new Array(S);C<S;C++)R[C]=E[C];return R}function u(E,S){var C=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(C!=null){var R=[],A=!0,$=!1,me,ge;try{for(C=C.call(E);!(A=(me=C.next()).done)&&(R.push(me.value),!(S&&R.length===S));A=!0);}catch(je){$=!0,ge=je}finally{try{!A&&C.return!=null&&C.return()}finally{if($)throw ge}}return R}}function l(E){if(Array.isArray(E))return E}var h=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],C=Object(_.useState)(S),R=n(C,2),A=R[0],$=R[1],me=Object(_.useCallback)(function(){for(var Z=arguments.length,de=new Array(Z),ne=0;ne<Z;ne++)de[ne]=arguments[ne];return $(function(ie){return[].concat(s(ie),de)})},[]),ge=Object(_.useCallback)(function(){for(var Z=arguments.length,de=new Array(Z),ne=0;ne<Z;ne++)de[ne]=arguments[ne];return $(function(ie){return[].concat(de,s(ie))})},[]),je=Object(_.useCallback)(function(Z){for(var de=arguments.length,ne=new Array(de>1?de-1:0),ie=1;ie<de;ie++)ne[ie-1]=arguments[ie];return $(function(Ce){return[].concat(s(Ce.slice(0,Z)),ne,s(Ce.slice(Z)))})},[]),H=Object(_.useCallback)(function(){for(var Z=arguments.length,de=new Array(Z),ne=0;ne<Z;ne++)de[ne]=arguments[ne];return $(function(ie){return ie.filter(function(Ce,De){return!de.includes(De)})})},[]),le=Object(_.useCallback)(function(){var Z=s(A),de=Z.pop();return $(Z),de},[A]),pe=Object(_.useCallback)(function(){var Z=s(A),de=Z.shift();return $(Z),de},[A]),F=Object(_.useCallback)(function(Z,de){$(function(ne){var ie=s(ne);return ie[Z]=de,ie})},[]),J={setState:$,append:me,prepend:ge,insert:je,remove:H,pop:le,shift:pe,setItem:F};return[A,J]}},"./packages/co-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.promise.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/web.timers.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),q=e("./node_modules/react/index.js"),L=e("./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts");function k(n,v,t,r,u,l,h){try{var E=n[l](h),S=E.value}catch(C){t(C);return}E.done?v(S):Promise.resolve(S).then(r,u)}function B(n){return function(){var v=this,t=arguments;return new Promise(function(r,u){var l=n.apply(v,t);function h(S){k(l,r,u,h,E,"next",S)}function E(S){k(l,r,u,h,E,"throw",S)}h(void 0)})}}function o(n,v){return T(n)||P(n,v)||b(n,v)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,v){if(!!n){if(typeof n=="string")return O(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(n,v)}}function O(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function P(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function T(n){if(Array.isArray(n))return n}var U=function(v){var t=Object(q.useState)(!1),r=o(t,2),u=r[0],l=r[1],h=Object(L.a)(v),E=Object(q.useCallback)(B(regeneratorRuntime.mark(function S(){var C,R=arguments;return regeneratorRuntime.wrap(function($){for(;;)switch($.prev=$.next){case 0:return l(!0),$.next=3,h.apply(void 0,R);case 3:return C=$.sent,l(!1),$.abrupt("return",C);case 6:case"end":return $.stop()}},S)})),[v]);return[u,E]},d=e("./node_modules/react/jsx-runtime.js");function m(n,v){return _(n)||D(n,v)||f(n,v)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,v){if(!!n){if(typeof n=="string")return j(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(n,v)}}function j(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function D(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function _(n){if(Array.isArray(n))return n}var a=`import React from 'react';
import { useLoading } from '../useLoading';

export default {
  title: '@co-design/hooks/useLoading',
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};
`,s={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},c=p.default={parameters:{storySource:{source:`import React from 'react';
import { useLoading } from '../useLoading';

export default {
  title: '@co-design/hooks/useLoading',
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}}}},title:"@co-design/hooks/useLoading"},i=function(v){return new Promise(function(t){return setTimeout(t,v)})},g=function(){var v=U(i),t=m(v,2),r=t[0],u=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return u(2e3)},children:"Start"})}),Object(d.jsxs)("div",{children:["Loading: ",""+r]})]})};g.displayName="Default"},"./packages/co-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return te});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=e("./packages/co-design-hooks/src/useMediaQuery/useMediaQuery.ts"),ce=e("./node_modules/react/jsx-runtime.js"),Y=e.n(ce),X=`import React from 'react';
import { useMediaQuery } from '../useMediaQuery';

export default {
  title: '@co-design/hooks/useMediaQuery',
};

export const Default = () => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <div>
      <div>(min-width: 900px) : {matches ? 'matches' : 'does not match'}</div>
    </div>
  );
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useMediaQuery } from '../useMediaQuery';

export default {
  title: '@co-design/hooks/useMediaQuery',
};

export const Default = () => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <div>
      <div>(min-width: 900px) : {matches ? 'matches' : 'does not match'}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}}}},title:"@co-design/hooks/useMediaQuery"};var te=function(){var G=Object(Q.a)("(min-width: 900px)");return Object(ce.jsx)("div",{children:Object(ce.jsxs)("div",{children:["(min-width: 900px) : ",G?"matches":"does not match"]})})};te.displayName="Default"},"./packages/co-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return s});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(c,i){return D(c)||j(c,i)||y(c,i)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(c,i){if(!!c){if(typeof c=="string")return f(c,i);var g=Object.prototype.toString.call(c).slice(8,-1);if(g==="Object"&&c.constructor&&(g=c.constructor.name),g==="Map"||g==="Set")return Array.from(c);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return f(c,i)}}function f(c,i){(i==null||i>c.length)&&(i=c.length);for(var g=0,n=new Array(i);g<i;g++)n[g]=c[g];return n}function j(c,i){var g=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(g!=null){var n=[],v=!0,t=!1,r,u;try{for(g=g.call(c);!(v=(r=g.next()).done)&&(n.push(r.value),!(i&&n.length===i));v=!0);}catch(l){t=!0,u=l}finally{try{!v&&g.return!=null&&g.return()}finally{if(t)throw u}}return n}}function D(c){if(Array.isArray(c))return c}function _(c,i){try{return c.addEventListener("change",i),function(){return c.removeEventListener("change",i)}}catch(g){return c.addListener(i),function(){return c.removeListener(i)}}}function a(c){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(c).matches:!1}var s=function(i){var g=Object(T.useState)(a(i)),n=d(g,2),v=n[0],t=n[1],r=Object(T.useRef)();return Object(T.useEffect)(function(){if("matchMedia"in window)return r.current=window.matchMedia(i),t(r.current.matches),_(r.current,function(u){return t(u.matches)})},[i]),v}},"./packages/co-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return t});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useClickAway/useClickAway.ts"),m=e("./packages/co-design-hooks/src/useHover/useHover.ts"),y=e("./packages/co-design-hooks/src/useForceUpdate/useForceUpdate.ts"),f=e("./packages/co-design-hooks/src/useMergedRef/useMergedRef.ts"),j=e("./node_modules/react/jsx-runtime.js"),D=e.n(j);function _(r,u){return g(r)||i(r,u)||s(r,u)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(r,u){if(!!r){if(typeof r=="string")return c(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(r,u)}}function c(r,u){(u==null||u>r.length)&&(u=r.length);for(var l=0,h=new Array(u);l<u;l++)h[l]=r[l];return h}function i(r,u){var l=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var h=[],E=!0,S=!1,C,R;try{for(l=l.call(r);!(E=(C=l.next()).done)&&(h.push(C.value),!(u&&h.length===u));E=!0);}catch(A){S=!0,R=A}finally{try{!E&&l.return!=null&&l.return()}finally{if(S)throw R}}return h}}function g(r){if(Array.isArray(r))return r}var n=`import React, { useEffect } from 'react';
import { useClickAway } from '../../useClickAway';
import { useHover } from '../../useHover';
import { useForceUpdate } from '../../useForceUpdate';
import { useMergedRef } from '../useMergedRef';

export default {
  title: '@co-design/hooks/useMergedRef',
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert('click away'));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }}>{\`\${hovered}\`}</div>
    </div>
  );
};
`,v={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:27},startBody:{col:23,line:11},endBody:{col:1,line:27}}};p.default={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import { useClickAway } from '../../useClickAway';
import { useHover } from '../../useHover';
import { useForceUpdate } from '../../useForceUpdate';
import { useMergedRef } from '../useMergedRef';

export default {
  title: '@co-design/hooks/useMergedRef',
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert('click away'));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }}>{\`\${hovered}\`}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:11},endLoc:{col:1,line:27},startBody:{col:23,line:11},endBody:{col:1,line:27}}}}},title:"@co-design/hooks/useMergedRef"};var t=function(){var u=Object(m.a)(),l=_(u,2),h=l[0],E=l[1],S=Object(d.a)(function(){return alert("click away")}),C=Object(f.b)(E,S),R=Object(y.a)();return Object(T.useEffect)(function(){R()},[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{ref:C,style:{width:100,height:100,backgroundColor:"red"},children:""+h})})};t.displayName="Default"},"./packages/co-design-hooks/src/useMergedRef/useMergedRef.ts":function(he,p,e){"use strict";e.d(p,"b",function(){return te}),e.d(p,"a",function(){return oe});var x=e("./node_modules/core-js/modules/es.array.for-each.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),ce=e.n(Q),Y=e("./node_modules/react/index.js"),X=e.n(Y),ee=function(K,W){typeof K=="function"?K(W):typeof K=="object"&&K!==null&&"current"in K&&(K.current=W)},te=function(){for(var K=arguments.length,W=new Array(K),N=0;N<K;N++)W[N]=arguments[N];return Object(Y.useCallback)(function(q){W.forEach(function(L){return ee(L,q)})},W)},oe=function(){for(var K=arguments.length,W=new Array(K),N=0;N<K;N++)W[N]=arguments[N];return function(q){W.forEach(function(L){return ee(L,q)})}}},"./packages/co-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return d});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js");function N(m,y){return o(m)||B(m,y)||L(m,y)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(m,y){if(!!m){if(typeof m=="string")return k(m,y);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return k(m,y)}}function k(m,y){(y==null||y>m.length)&&(y=m.length);for(var f=0,j=new Array(y);f<y;f++)j[f]=m[f];return j}function B(m,y){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var j=[],D=!0,_=!1,a,s;try{for(f=f.call(m);!(D=(a=f.next()).done)&&(j.push(a.value),!(y&&j.length===y));D=!0);}catch(c){_=!0,s=c}finally{try{!D&&f.return!=null&&f.return()}finally{if(_)throw s}}return j}}function o(m){if(Array.isArray(m))return m}var M={angle:0,type:"landscape-primary"},b=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,f=Object(x.useState)(y),j=N(f,2),D=j[0],_=j[1];return Object(x.useEffect)(function(){var a=window.screen,s=!0,c=function(){if(s){var g=a,n=g.orientation;if(n){var v=n.angle,t=n.type;_({angle:v,type:t})}else window.orientation!==void 0?_({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):_(y)}};return window.addEventListener("orientationchange",c),c(),function(){s=!1,window.addEventListener("orientationchange",c)}},[]),D},O=e("./node_modules/react/jsx-runtime.js"),P=`import React from 'react';
import { useOrientation } from '../useOrientation';

export default {
  title: '@co-design/hooks/useOrientation',
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,T={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},U=p.default={parameters:{storySource:{source:`import React from 'react';
import { useOrientation } from '../useOrientation';

export default {
  title: '@co-design/hooks/useOrientation',
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@co-design/hooks/useOrientation"},d=function(){var y=b();return Object(O.jsx)("div",{children:JSON.stringify(y)})};d.displayName="Default"},"./packages/co-design-hooks/src/useOs/stories/useOs.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return oe});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=function(){var K=window.navigator,W=K.userAgent,N=K.platform,q=["Macintosh","MacIntel","MacPPC","Mac68K"],L=["Win32","Win64","Windows","WinCE"],k=["iPhone","iPad","iPod"],B="unknown";return q.indexOf(N)!==-1?B="macos":k.indexOf(N)!==-1?B="ios":L.indexOf(N)!==-1?B="windows":/Android/.test(W)?B="android":!B&&/Linux/.test(N)&&(B="linux"),B},ce=function(){return typeof window!="undefined"?Q():"unknown"},Y=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
import { useOs } from '../useOs';

export default {
  title: '@co-design/hooks/useOs',
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,ee={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},te=p.default={parameters:{storySource:{source:`import React from 'react';
import { useOs } from '../useOs';

export default {
  title: '@co-design/hooks/useOs',
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}}}},title:"@co-design/hooks/useOs"},oe=function(){var K=ce();return Object(Y.jsx)("div",{children:K})};oe.displayName="Default"},"./packages/co-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return U});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=function(m){Object(W.useEffect)(function(){if(!!m){var y=function(j){j=j||window.event;var D=j.relatedTarget||j.toElement;(!D||D.nodeName==="HTML")&&m()};return document.addEventListener("mouseout",y),function(){document.removeEventListener("mouseout",y)}}},[])},q=e("./node_modules/react/jsx-runtime.js");function L(d,m){return b(d)||M(d,m)||B(d,m)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(d,m){if(!!d){if(typeof d=="string")return o(d,m);var y=Object.prototype.toString.call(d).slice(8,-1);if(y==="Object"&&d.constructor&&(y=d.constructor.name),y==="Map"||y==="Set")return Array.from(d);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return o(d,m)}}function o(d,m){(m==null||m>d.length)&&(m=d.length);for(var y=0,f=new Array(m);y<m;y++)f[y]=d[y];return f}function M(d,m){var y=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(y!=null){var f=[],j=!0,D=!1,_,a;try{for(y=y.call(d);!(j=(_=y.next()).done)&&(f.push(_.value),!(m&&f.length===m));j=!0);}catch(s){D=!0,a=s}finally{try{!j&&y.return!=null&&y.return()}finally{if(D)throw a}}return f}}function b(d){if(Array.isArray(d))return d}var O=`import React, { useState } from 'react';
import { usePageLeave } from '../usePageLeave';

export default {
  title: '@co-design/hooks/usePageLeave',
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,P={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:13},startBody:{col:23,line:8},endBody:{col:1,line:13}}},T=p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { usePageLeave } from '../usePageLeave';

export default {
  title: '@co-design/hooks/usePageLeave',
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:13},startBody:{col:23,line:8},endBody:{col:1,line:13}}}}},title:"@co-design/hooks/usePageLeave"},U=function(){var m=Object(W.useState)(0),y=L(m,2),f=y[0],j=y[1];return N(function(){return j(function(D){return D+1})}),Object(q.jsxs)("div",{children:["Page leave count: ",f]})};U.displayName="Default"},"./packages/co-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return j});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),Q=e("./node_modules/core-js/modules/es.array.concat.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e("./node_modules/core-js/modules/es.symbol.iterator.js"),oe=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js");function q(D){return B(D)||k(D)||b(D)||L()}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(D){if(typeof Symbol!="undefined"&&D[Symbol.iterator]!=null||D["@@iterator"]!=null)return Array.from(D)}function B(D){if(Array.isArray(D))return O(D)}function o(D,_){return T(D)||P(D,_)||b(D,_)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(D,_){if(!!D){if(typeof D=="string")return O(D,_);var a=Object.prototype.toString.call(D).slice(8,-1);if(a==="Object"&&D.constructor&&(a=D.constructor.name),a==="Map"||a==="Set")return Array.from(D);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(D,_)}}function O(D,_){(_==null||_>D.length)&&(_=D.length);for(var a=0,s=new Array(_);a<_;a++)s[a]=D[a];return s}function P(D,_){var a=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(a!=null){var s=[],c=!0,i=!1,g,n;try{for(a=a.call(D);!(c=(g=a.next()).done)&&(s.push(g.value),!(_&&s.length===_));c=!0);}catch(v){i=!0,n=v}finally{try{!c&&a.return!=null&&a.return()}finally{if(i)throw n}}return s}}function T(D){if(Array.isArray(D))return D}var U=function(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=Object(x.useState)({state:a.slice(0,_),queue:a.slice(_)}),c=o(s,2),i=c[0],g=i.state,n=i.queue,v=c[1],t=function(){for(var h=arguments.length,E=new Array(h),S=0;S<h;S++)E[S]=arguments[S];return v(function(C){var R=[].concat(q(C.state),q(C.queue),E);return{state:R.slice(0,_),queue:R.slice(_)}})},r=function(h){return v(function(E){var S=h([].concat(q(E.state),q(E.queue)));return{state:S.slice(0,_),queue:S.slice(_)}})},u=function(){return v(function(h){return{state:h.state,queue:[]}})};return{state:g,queue:n,add:t,update:r,cleanQueue:u}},d=e("./node_modules/react/jsx-runtime.js"),m=`import React, { useState } from 'react';
import { useQueue } from '../useQueue';

export default {
  title: '@co-design/hooks/useQueue',
};

export const Default = () => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:20},startBody:{col:23,line:8},endBody:{col:1,line:20}}},f=p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useQueue } from '../useQueue';

export default {
  title: '@co-design/hooks/useQueue',
};

export const Default = () => {
  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);

  return (
    <div>
      <div>state: {state}</div>
      <div>queue: {queue}</div>
      <button onClick={() => add(5)}>add 5</button>
      <button onClick={() => update((state) => state)}>update</button>
      <button onClick={cleanQueue}>clear</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:20},startBody:{col:23,line:8},endBody:{col:1,line:20}}}}},title:"@co-design/hooks/useQueue"},j=function(){var _=U(10,[1,2,3]),a=_.state,s=_.queue,c=_.add,i=_.update,g=_.cleanQueue;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["state: ",a]}),Object(d.jsxs)("div",{children:["queue: ",s]}),Object(d.jsx)("button",{onClick:function(){return c(5)},children:"add 5"}),Object(d.jsx)("button",{onClick:function(){return i(function(v){return v})},children:"update"}),Object(d.jsx)("button",{onClick:g,children:"clear"})]})};j.displayName="Default"},"./packages/co-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useRafState/useRafState.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React, { useEffect } from 'react';
import { useRafState } from '../useRafState';

export default {
  title: '@co-design/hooks/useRafState',
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:30},startBody:{col:23,line:8},endBody:{col:1,line:30}}};p.default={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import { useRafState } from '../useRafState';

export default {
  title: '@co-design/hooks/useRafState',
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:30},startBody:{col:23,line:8},endBody:{col:1,line:30}}}}},title:"@co-design/hooks/useRafState"};var g=function(){var v=Object(d.a)({width:0,height:0}),t=f(v,2),r=t[0],u=t[1];return Object(T.useEffect)(function(){var l=function(){u({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}},[]),Object(m.jsx)("pre",{children:JSON.stringify(r,null,2)})};g.displayName="Default"},"./packages/co-design-hooks/src/useRafState/useRafState.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return _});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(a,s){return D(a)||j(a,s)||y(a,s)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(a,s){if(!!a){if(typeof a=="string")return f(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,s)}}function f(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function j(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function D(a){if(Array.isArray(a))return a}var _=function(s){var c=Object(T.useRef)(0),i=Object(T.useState)(s),g=d(i,2),n=g[0],v=g[1],t=Object(T.useCallback)(function(r){cancelAnimationFrame(c.current),c.current=requestAnimationFrame(function(){v(r)})},[]);return[n,t]}},"./packages/co-design-hooks/src/useResize/stories/useResize.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return c});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=e("./packages/co-design-hooks/src/useRafState/useRafState.ts");function q(i,g){return M(i)||o(i,g)||k(i,g)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(i,g){if(!!i){if(typeof i=="string")return B(i,g);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(i,g)}}function B(i,g){(g==null||g>i.length)&&(g=i.length);for(var n=0,v=new Array(g);n<g;n++)v[n]=i[n];return v}function o(i,g){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var v=[],t=!0,r=!1,u,l;try{for(n=n.call(i);!(t=(u=n.next()).done)&&(v.push(u.value),!(g&&v.length===g));t=!0);}catch(h){r=!0,l=h}finally{try{!t&&n.return!=null&&n.return()}finally{if(r)throw l}}return v}}function M(i){if(Array.isArray(i))return i}var b={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},O=typeof window!="undefined",P=function(){var g=Object(W.useRef)(null),n=Object(N.a)(b),v=q(n,2),t=v[0],r=v[1],u=Object(W.useMemo)(function(){return O?new ResizeObserver(function(l){var h=l[0];h&&r(h.contentRect)}):null},[]);return Object(W.useEffect)(function(){return g.current&&u.observe(g.current),function(){u.disconnect()}},[g.current]),[g,t]},T=e("./packages/co-design-hooks/src/useForceUpdate/useForceUpdate.ts"),U=e("./node_modules/react/jsx-runtime.js");function d(i,g){return D(i)||j(i,g)||y(i,g)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,g){if(!!i){if(typeof i=="string")return f(i,g);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(i,g)}}function f(i,g){(g==null||g>i.length)&&(g=i.length);for(var n=0,v=new Array(g);n<g;n++)v[n]=i[n];return v}function j(i,g){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var v=[],t=!0,r=!1,u,l;try{for(n=n.call(i);!(t=(u=n.next()).done)&&(v.push(u.value),!(g&&v.length===g));t=!0);}catch(h){r=!0,l=h}finally{try{!t&&n.return!=null&&n.return()}finally{if(r)throw l}}return v}}function D(i){if(Array.isArray(i))return i}var _=`import React, { useEffect } from 'react';
import { useResize } from '../useResize';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/hooks/useResize',
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red', resize: 'both' }} />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:24},startBody:{col:23,line:9},endBody:{col:1,line:24}}},s=p.default={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import { useResize } from '../useResize';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/hooks/useResize',
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red', resize: 'both' }} />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:24},startBody:{col:23,line:9},endBody:{col:1,line:24}}}}},title:"@co-design/hooks/useResize"},c=function(){var g=P(),n=d(g,2),v=n[0],t=n[1],r=Object(T.a)();return Object(W.useEffect)(function(){r()},[]),Object(U.jsxs)("div",{children:[Object(U.jsx)("textarea",{ref:v,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(U.jsx)("div",{children:JSON.stringify(t)})]})};c.displayName="Default"},"./packages/co-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useScrollLock/useScrollLock.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React, { useState } from 'react';
import { useScrollLock } from '../useScrollLock';

export default {
  title: '@co-design/hooks/useScrollLock',
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>{lock ? 'Unlock' : 'Lock'}</button>
      {scrollLocked ? 'Scroll locked' : 'Scrollable'}
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useScrollLock } from '../useScrollLock';

export default {
  title: '@co-design/hooks/useScrollLock',
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 10000, height: 10000 }}>
      <button onClick={() => setLock((old) => !old)}>{lock ? 'Unlock' : 'Lock'}</button>
      {scrollLocked ? 'Scroll locked' : 'Scrollable'}
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@co-design/hooks/useScrollLock"};var g=function(){var v=Object(T.useState)(!1),t=f(v,2),r=t[0],u=t[1],l=Object(d.a)(r);return Object(m.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(m.jsx)("button",{onClick:function(){return u(function(E){return!E})},children:r?"Unlock":"Lock"}),l?"Scroll locked":"Scrollable"]})};g.displayName="Default"},"./packages/co-design-hooks/src/useScrollLock/useScrollLock.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return d});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),ce=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/es.parse-int.js");function q(){var m=document.createElement("style");return m.type="text/css",m.setAttribute("co-scroll-lock",""),m}function L(m){var y=document.head||document.getElementsByTagName("head")[0];y.appendChild(m)}function k(m,y){m.styleSheet?m.styleSheet.cssText=y:m.appendChild(document.createTextNode(y))}function B(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var m=parseInt(window.getComputedStyle(document.body).paddingRight,10),y=window.innerWidth-document.documentElement.clientWidth;return m+y}var o=function(y){var f=y.disableBodyPadding,j=f?null:B(),D=`body {
        --removed-scroll-width: `+j+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(j?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return D};function M(m,y){return U(m)||T(m,y)||O(m,y)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(m,y){if(!!m){if(typeof m=="string")return P(m,y);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return P(m,y)}}function P(m,y){(y==null||y>m.length)&&(y=m.length);for(var f=0,j=new Array(y);f<y;f++)j[f]=m[f];return j}function T(m,y){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var j=[],D=!0,_=!1,a,s;try{for(f=f.call(m);!(D=(a=f.next()).done)&&(j.push(a.value),!(y&&j.length===y));D=!0);}catch(c){_=!0,s=c}finally{try{!D&&f.return!=null&&f.return()}finally{if(_)throw s}}return j}}function U(m){if(Array.isArray(m))return m}var d=function(y){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},j=Object(W.useState)(y||!1),D=M(j,2),_=D[0],a=D[1],s=Object(W.useRef)(0),c=f.disableBodyPadding,i=Object(W.useRef)(null),g=function(){s.current=window.scrollY;var t=o({disableBodyPadding:c}),r=q();k(r,t),L(r),i.current=r},n=function(){!(i!=null&&i.current)||(i.current.parentNode.removeChild(i.current),i.current=null)};return Object(W.useEffect)(function(){return _?g():n(),n},[_]),Object(W.useEffect)(function(){y!==void 0&&a(y)},[y]),Object(W.useEffect)(function(){y===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&a(!0)},[a]),[_,a]}},"./packages/co-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return d});var x=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./packages/co-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function q(m,y){return M(m)||o(m,y)||k(m,y)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(m,y){if(!!m){if(typeof m=="string")return B(m,y);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return B(m,y)}}function B(m,y){(y==null||y>m.length)&&(y=m.length);for(var f=0,j=new Array(y);f<y;f++)j[f]=m[f];return j}function o(m,y){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var j=[],D=!0,_=!1,a,s;try{for(f=f.call(m);!(D=(a=f.next()).done)&&(j.push(a.value),!(y&&j.length===y));D=!0);}catch(c){_=!0,s=c}finally{try{!D&&f.return!=null&&f.return()}finally{if(_)throw s}}return j}}function M(m){if(Array.isArray(m))return m}var b=function(y,f){var j=Object(N.a)(y,f),D=q(j,2),_=D[0],a=D[1];return Object(x.useEffect)(function(){return _(),a},[_,a]),a},O=e("./node_modules/react/jsx-runtime.js"),P=`import React from 'react';
import { useTimeout } from '../useTimeout';

export default {
  title: '@co-design/hooks/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,T={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},U=p.default={parameters:{storySource:{source:`import React from 'react';
import { useTimeout } from '../useTimeout';

export default {
  title: '@co-design/hooks/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}}}},title:"@co-design/hooks/useTimeout"},d=function(){var y=b(function(){alert("fire!")},2e3);return Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:y,children:"Clear"})})};d.displayName="Default"},"./packages/co-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React from 'react';
import { useTimeoutFn } from '../useTimeoutFn';

export default {
  title: '@co-design/hooks/useTimeoutFn',
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useTimeoutFn } from '../useTimeoutFn';

export default {
  title: '@co-design/hooks/useTimeoutFn',
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}}}},title:"@co-design/hooks/useTimeoutFn"};var g=function(){var v=Object(d.a)(function(){alert("fire!")},2e3),t=f(v,2),r=t[0],u=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:r,children:"Run"}),Object(m.jsx)("button",{onClick:u,children:"Clear"})]})};g.displayName="Default"},"./packages/co-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return X});var x=e("./node_modules/core-js/modules/web.timers.js"),w=e.n(x),Q=e("./node_modules/react/index.js"),ce=e.n(Q),Y=e("./packages/co-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(te,oe){var G=Object(Q.useRef)(),K=Object(Y.a)(te),W=Object(Q.useCallback)(function(){G.current&&clearTimeout(G.current),G.current=setTimeout(function(){K()},oe)},[oe]),N=Object(Q.useCallback)(function(){G.current&&clearTimeout(G.current)},[]);return Object(Q.useEffect)(function(){return N},[N]),[W,N]}},"./packages/co-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useToggle/useToggle.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React from 'react';
import { useToggle } from '../useToggle';

export default {
  title: '@co-design/hooks/useToggle',
};

export const Default = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};p.default={parameters:{storySource:{source:`import React from 'react';
import { useToggle } from '../useToggle';

export default {
  title: '@co-design/hooks/useToggle',
};

export const Default = () => {
  const [state, toggle] = useToggle();

  return (
    <div>
      <div>current state: {\`\${state}\`}</div>
      <div>
        <button onClick={() => toggle(true)}>setTrue</button>
        <button onClick={() => toggle(false)}>setFalse</button>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}}}},title:"@co-design/hooks/useToggle"};var g=function(){var v=Object(d.a)(),t=f(v,2),r=t[0],u=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:["current state: ",""+r]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return u(!0)},children:"setTrue"}),Object(m.jsx)("button",{onClick:function(){return u(!1)},children:"setFalse"}),Object(m.jsx)("button",{onClick:u,children:"toggle"})]})]})};g.displayName="Default"},"./packages/co-design-hooks/src/useToggle/useToggle.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return _});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(a,s){return D(a)||j(a,s)||y(a,s)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(a,s){if(!!a){if(typeof a=="string")return f(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,s)}}function f(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function j(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function D(a){if(Array.isArray(a))return a}var _=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,c=Object(T.useState)(s),i=d(c,2),g=i[0],n=i[1],v=Object(T.useCallback)(function(t){return n(function(r){return typeof t=="boolean"?t:!r})},[]);return[g,v]}},"./packages/co-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return v});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useUncontrolled/useUncontrolled.ts"),m=e("./packages/co-design-hooks/src/useId/useId.ts"),y=e("./node_modules/react/jsx-runtime.js"),f=e.n(y);function j(t,r){return c(t)||s(t,r)||_(t,r)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,r){if(!!t){if(typeof t=="string")return a(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return a(t,r)}}function a(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,l=new Array(r);u<r;u++)l[u]=t[u];return l}function s(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var l=[],h=!0,E=!1,S,C;try{for(u=u.call(t);!(h=(S=u.next()).done)&&(l.push(S.value),!(r&&l.length===r));h=!0);}catch(R){E=!0,C=R}finally{try{!h&&u.return!=null&&u.return()}finally{if(E)throw C}}return l}}function c(t){if(Array.isArray(t))return t}var i=`import React, { useState } from 'react';
import { useUncontrolled } from '../useUncontrolled';
import { useId } from '../../useId';

export default {
  title: '@co-design/hooks/useUncontrolled',
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({ label, value, defaultValue, onChange }: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} type="text" value={_value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState('controlled');

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput label="Controlled" value={controlledValue} onChange={setControlledValue} />
      <CustomInput label="Controlled (fixed value)" value="fixed" onChange={setControlledValue} />
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:45},startBody:{col:23,line:35},endBody:{col:1,line:45}}};p.default={parameters:{storySource:{source:`import React, { useState } from 'react';
import { useUncontrolled } from '../useUncontrolled';
import { useId } from '../../useId';

export default {
  title: '@co-design/hooks/useUncontrolled',
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({ label, value, defaultValue, onChange }: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} type="text" value={_value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState('controlled');

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput label="Controlled" value={controlledValue} onChange={setControlledValue} />
      <CustomInput label="Controlled (fixed value)" value="fixed" onChange={setControlledValue} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:45},startBody:{col:23,line:35},endBody:{col:1,line:45}}}}},title:"@co-design/hooks/useUncontrolled"};var n=function(r){var u=r.label,l=r.value,h=r.defaultValue,E=r.onChange,S=Object(m.a)(),C=Object(d.a)({value:l,defaultValue:h,finalValue:null,onChange:E,rule:function(ge){return typeof ge=="string"}}),R=j(C,2),A=R[0],$=R[1];return Object(y.jsxs)("div",{style:{padding:"1rem"},children:[Object(y.jsx)("label",{htmlFor:S,children:u}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{id:S,type:"text",value:A,onChange:function(ge){return $(ge.target.value)}})]})};n.displayName="CustomInput";var v=function(){var r=Object(T.useState)("controlled"),u=j(r,2),l=u[0],h=u[1];return Object(y.jsxs)("div",{style:{padding:20},children:[Object(y.jsx)(n,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(y.jsx)(n,{label:"Controlled",value:l,onChange:h}),Object(y.jsx)(n,{label:"Controlled (fixed value)",value:"fixed",onChange:h})]})};v.displayName="Default"},"./packages/co-design-hooks/src/useUncontrolled/useUncontrolled.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return _});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T);function d(a,s){return D(a)||j(a,s)||y(a,s)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(a,s){if(!!a){if(typeof a=="string")return f(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,s)}}function f(a,s){(s==null||s>a.length)&&(s=a.length);for(var c=0,i=new Array(s);c<s;c++)i[c]=a[c];return i}function j(a,s){var c=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var i=[],g=!0,n=!1,v,t;try{for(c=c.call(a);!(g=(v=c.next()).done)&&(i.push(v.value),!(s&&i.length===s));g=!0);}catch(r){n=!0,t=r}finally{try{!g&&c.return!=null&&c.return()}finally{if(n)throw t}}return i}}function D(a){if(Array.isArray(a))return a}var _=function(s){var c=s.value,i=s.defaultValue,g=s.finalValue,n=s.rule,v=s.onChange,t=s.onValueUpdate,r=n(c),u=Object(T.useRef)("initial"),l=n(i)?i:g,h=Object(T.useState)(l),E=d(h,2),S=E[0],C=E[1],R=r?c:S;!r&&u.current==="controlled"&&(R=g),u.current=r?"controlled":"uncontrolled";var A=u.current,$=function(ge){typeof v=="function"&&v(ge),A==="uncontrolled"&&C(ge)};return Object(T.useEffect)(function(){A==="uncontrolled"&&C(R),typeof t=="function"&&t(R)},[A,R]),[R,$,u.current]}},"./packages/co-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return g});var x=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e.n(x),Q=e("./node_modules/core-js/modules/es.symbol.js"),ce=e.n(Q),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(Y),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),te=e.n(ee),oe=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(oe),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e.n(K),N=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e.n(N),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e.n(L),B=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(B),M=e("./node_modules/core-js/modules/es.function.name.js"),b=e.n(M),O=e("./node_modules/core-js/modules/es.array.from.js"),P=e.n(O),T=e("./node_modules/react/index.js"),U=e.n(T),d=e("./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),m=e("./node_modules/react/jsx-runtime.js"),y=e.n(m);function f(n,v){return s(n)||a(n,v)||D(n,v)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,v){if(!!n){if(typeof n=="string")return _(n,v);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,v)}}function _(n,v){(v==null||v>n.length)&&(v=n.length);for(var t=0,r=new Array(v);t<v;t++)r[t]=n[t];return r}function a(n,v){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],u=!0,l=!1,h,E;try{for(t=t.call(n);!(u=(h=t.next()).done)&&(r.push(h.value),!(v&&r.length===v));u=!0);}catch(S){l=!0,E=S}finally{try{!u&&t.return!=null&&t.return()}finally{if(l)throw E}}return r}}function s(n){if(Array.isArray(n))return n}var c=`import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from '../useUpdateEffect';

export default {
  title: '@co-design/hooks/useUpdateEffect',
};

export const Default = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('useEffect:', value);
  }, [value]);

  useUpdateEffect(() => {
    console.log('useUpdateEffect:', value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}};p.default={parameters:{storySource:{source:`import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from '../useUpdateEffect';

export default {
  title: '@co-design/hooks/useUpdateEffect',
};

export const Default = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('useEffect:', value);
  }, [value]);

  useUpdateEffect(() => {
    console.log('useUpdateEffect:', value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:1,line:24},startBody:{col:23,line:8},endBody:{col:1,line:24}}}}},title:"@co-design/hooks/useUpdateEffect"};var g=function(){var v=Object(T.useState)(""),t=f(v,2),r=t[0],u=t[1];return Object(T.useEffect)(function(){console.log("useEffect:",r)},[r]),Object(d.a)(function(){console.log("useUpdateEffect:",r)},[r]),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",onChange:function(h){return u(h.target.value)}})})};g.displayName="Default"},"./packages/co-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return Q});var x=e("./node_modules/react/index.js"),w=e.n(x),Q=function(Y,X){var ee=Object(x.useRef)(!0);Object(x.useEffect)(function(){if(!ee.current)return Y();ee.current=!1},X)}},"./packages/co-design-icons/stories/Icons.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Default",function(){return mr});var x={};e.r(x),e.d(x,"AlertCircleFill",function(){return b}),e.d(x,"AlertCircle",function(){return P}),e.d(x,"AlertMessage",function(){return U}),e.d(x,"AlertOctagonFill",function(){return m}),e.d(x,"AlertTriangleFill",function(){return f}),e.d(x,"ArrowDownLeft",function(){return D}),e.d(x,"ArrowFatRight",function(){return a}),e.d(x,"ArrowLeft",function(){return c}),e.d(x,"ArrowRight",function(){return g}),e.d(x,"ArrowUpDown",function(){return v}),e.d(x,"ArrowUpRight",function(){return r}),e.d(x,"ArrowAll",function(){return l}),e.d(x,"BarChartFill",function(){return E}),e.d(x,"BarChart",function(){return C}),e.d(x,"BellFill",function(){return A}),e.d(x,"Burger",function(){return me}),e.d(x,"Calender",function(){return je}),e.d(x,"CameraFill",function(){return le}),e.d(x,"CameraOff",function(){return F}),e.d(x,"CameraPlus",function(){return Z}),e.d(x,"Camera",function(){return ne}),e.d(x,"CaretUp",function(){return Ce}),e.d(x,"CaretDown",function(){return Te}),e.d(x,"CaretSort",function(){return Ue}),e.d(x,"CheckCircleFill",function(){return Ze}),e.d(x,"CheckDouble",function(){return re}),e.d(x,"Check",function(){return Oe}),e.d(x,"ChevronDown",function(){return z}),e.d(x,"ChevronLeftLight",function(){return fe}),e.d(x,"ChevronLeftThin",function(){return be}),e.d(x,"ChevronLeft",function(){return Le}),e.d(x,"ChevronRightLight",function(){return $e}),e.d(x,"ChevronRightThin",function(){return no}),e.d(x,"ChevronRight",function(){return Xe}),e.d(x,"ChevronUp",function(){return we}),e.d(x,"Clip",function(){return to}),e.d(x,"Clock",function(){return ro}),e.d(x,"Clock2",function(){return ao}),e.d(x,"Code",function(){return mo}),e.d(x,"CornerDownRight",function(){return fo}),e.d(x,"CreditCard",function(){return yo}),e.d(x,"DiamondFill",function(){return Eo}),e.d(x,"Document",function(){return Co}),e.d(x,"DownloadFill",function(){return Io}),e.d(x,"EmailFill",function(){return xo}),e.d(x,"Eraser",function(){return ct}),e.d(x,"Exit",function(){return Go}),e.d(x,"EyeFill",function(){return dt}),e.d(x,"EyeOffFill",function(){return ut}),e.d(x,"EyeOff",function(){return mt}),e.d(x,"Eye",function(){return ft}),e.d(x,"Face",function(){return vt}),e.d(x,"Facebook",function(){return _t}),e.d(x,"Filter",function(){return zo}),e.d(x,"FolderArrowRight",function(){return Et}),e.d(x,"FolderImagePileFill",function(){return ot}),e.d(x,"FolderImagePile",function(){return ve}),e.d(x,"FolderPlusFill",function(){return xe}),e.d(x,"FolderPlus",function(){return Pe}),e.d(x,"Folder",function(){return Be}),e.d(x,"Gear",function(){return Fe}),e.d(x,"Global",function(){return Re}),e.d(x,"Handle",function(){return eo}),e.d(x,"HeadphoneFill",function(){return qe}),e.d(x,"HeartFill",function(){return po}),e.d(x,"Heart",function(){return jo}),e.d(x,"HexagonFill",function(){return Ao}),e.d(x,"HomeFill",function(){return Vo}),e.d(x,"HourglassFill",function(){return Ko}),e.d(x,"Hourglass",function(){return vo}),e.d(x,"ImageFill",function(){return Mo}),e.d(x,"InfoCircleFill",function(){return wo}),e.d(x,"InfoCircle",function(){return yt}),e.d(x,"Info",function(){return pt}),e.d(x,"Inventory",function(){return ht}),e.d(x,"Launch",function(){return bt}),e.d(x,"LikeFill",function(){return Ot}),e.d(x,"Link",function(){return xt}),e.d(x,"List",function(){return Dt}),e.d(x,"LockFill",function(){return vr}),e.d(x,"Mail",function(){return _r}),e.d(x,"MapPin",function(){return gr}),e.d(x,"Maximize",function(){return jr}),e.d(x,"MessageSquareFill",function(){return yr}),e.d(x,"MessageSquare",function(){return pr}),e.d(x,"MessageSquares",function(){return hr}),e.d(x,"MicDotFill",function(){return br}),e.d(x,"MicDot",function(){return Or}),e.d(x,"MicFill",function(){return xr}),e.d(x,"MicOffFill",function(){return Dr}),e.d(x,"Minimize",function(){return Er}),e.d(x,"MinusCircleFill",function(){return Cr}),e.d(x,"Minus",function(){return Sr}),e.d(x,"MoreHorizontal",function(){return Mr}),e.d(x,"MoreVertical",function(){return Pr}),e.d(x,"MousePointerFill",function(){return Tr}),e.d(x,"MousePointer",function(){return Ar}),e.d(x,"MoveFat",function(){return Ir}),e.d(x,"NoteList",function(){return Lr}),e.d(x,"Onair",function(){return Rr}),e.d(x,"Opacity",function(){return Br}),e.d(x,"PageFillOff",function(){return Ur}),e.d(x,"PageFill",function(){return Wr}),e.d(x,"Page",function(){return Vr}),e.d(x,"Pause",function(){return Kr}),e.d(x,"PdfPile",function(){return Nr}),e.d(x,"PencilFill",function(){return Fr}),e.d(x,"Pencil",function(){return Hr}),e.d(x,"People",function(){return zr}),e.d(x,"Play",function(){return wr}),e.d(x,"Playlist",function(){return kr}),e.d(x,"PlusCircleFill",function(){return Zr}),e.d(x,"Plus",function(){return $r}),e.d(x,"Power",function(){return Gr}),e.d(x,"Present",function(){return Yr}),e.d(x,"PrinterFill",function(){return Qr}),e.d(x,"QuestionCircle",function(){return Xr}),e.d(x,"Refresh",function(){return Jr}),e.d(x,"Rewind",function(){return qr}),e.d(x,"Search",function(){return es}),e.d(x,"Share",function(){return os}),e.d(x,"Smile",function(){return ts}),e.d(x,"Sort",function(){return ns}),e.d(x,"Sparkles",function(){return rs}),e.d(x,"SpikedCircleFill",function(){return ss}),e.d(x,"Square3D",function(){return ls}),e.d(x,"SquareFill",function(){return as}),e.d(x,"SquareFocus",function(){return is}),e.d(x,"SquareImage",function(){return cs}),e.d(x,"SquareInSqaureBottomLeft",function(){return ds}),e.d(x,"SquareInSqaureBottomRight",function(){return us}),e.d(x,"SquareInSqaureTopLeft",function(){return ms}),e.d(x,"SquareInSqaureTopRight",function(){return fs}),e.d(x,"SquarePile2",function(){return vs}),e.d(x,"SquarePileDotted",function(){return _s}),e.d(x,"SquarePilePlusFill",function(){return gs}),e.d(x,"SquarePilePlus",function(){return js}),e.d(x,"SquarePile",function(){return ys}),e.d(x,"Squares",function(){return ps}),e.d(x,"StarCircleFill",function(){return hs}),e.d(x,"StarFill",function(){return bs}),e.d(x,"Star",function(){return Os}),e.d(x,"TagFill",function(){return xs}),e.d(x,"TempleFill",function(){return Ds}),e.d(x,"Trash2",function(){return Es}),e.d(x,"TrashFill",function(){return Cs}),e.d(x,"TrashXFill",function(){return Ss}),e.d(x,"Trash",function(){return Ms}),e.d(x,"TrendingDown",function(){return Ps}),e.d(x,"TrendingFlat",function(){return Ts}),e.d(x,"TrendingUp",function(){return As}),e.d(x,"TwinkleFill",function(){return Is}),e.d(x,"Twitter",function(){return Ls}),e.d(x,"Type",function(){return Rs}),e.d(x,"Undo",function(){return Bs}),e.d(x,"UploadFill",function(){return Us}),e.d(x,"Upload",function(){return Ws}),e.d(x,"UserCheck",function(){return Vs}),e.d(x,"UserCircle",function(){return Ks}),e.d(x,"UserPlus",function(){return Ns}),e.d(x,"User",function(){return Fs}),e.d(x,"VideoPileFill",function(){return Hs}),e.d(x,"VideoPile",function(){return zs}),e.d(x,"Video",function(){return ws}),e.d(x,"VolumeOff",function(){return ks}),e.d(x,"Volume",function(){return Zs}),e.d(x,"XCircleFill",function(){return $s}),e.d(x,"XCircle",function(){return Gs}),e.d(x,"X",function(){return Ys}),e.d(x,"ZoomInFill",function(){return Qs}),e.d(x,"ZoomOutFill",function(){return Xs});var w=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/core-js/modules/es.object.entries.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),k=e("./node_modules/react/index.js"),B=e("./node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/jsx-runtime.js"),M=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z",fill:"currentColor"})}))};M.displayName="SvgAlertCircleFill";var b=M,O=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",fill:"currentColor"})]}))};O.displayName="SvgAlertCircle";var P=O,T=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-7 9h-2V5h2v6Zm0 4h-2v-2h2v2Z",fill:"currentColor"})}))};T.displayName="SvgAlertMessage";var U=T,d=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3ZM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3Zm1-4.3h-2V7h2v6Z",fill:"currentColor"})}))};d.displayName="SvgAlertOctagonFill";var m=d,y=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",fill:"currentColor"})}))};y.displayName="SvgAlertTriangleFill";var f=y,j=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41Z",fill:"currentColor"})}))};j.displayName="SvgArrowDownLeft";var D=j,_=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 8V4l8 8-8 8v-4H4V8h8Z",fill:"currentColor"})}))};_.displayName="SvgArrowFatRight";var a=_,s=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",fill:"currentColor"})}))};s.displayName="SvgArrowLeft";var c=s,i=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",fill:"currentColor"})}))};i.displayName="SvgArrowRight";var g=i,n=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Z",fill:"currentColor"})}))};n.displayName="SvgArrowUpDown";var v=n,t=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9Z",fill:"currentColor"})}))};t.displayName="SvgArrowUpRight";var r=t,u=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.016 10.984h5.082l-1.525-1.525 1.443-1.443L22 12l-3.984 3.984-1.443-1.443 1.525-1.525h-5.082v5.082l1.525-1.525 1.443 1.443L12 22l-3.984-3.984 1.443-1.443 1.525 1.525v-5.082H5.902l1.525 1.525-1.443 1.443L2 12l3.984-3.984L7.427 9.46l-1.525 1.525h5.082V5.902L9.459 7.427 8.016 5.984 12 2l3.984 3.984-1.443 1.443-1.525-1.525v5.082Z",fill:"currentColor"})}))};u.displayName="SvgArrowAll";var l=u,h=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 17H7v-7h2v7Zm4 0h-2V7h2v10Zm4 0h-2v-4h2v4Z",fill:"currentColor"})}))};h.displayName="SvgBarChartFill";var E=h,S=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 20h4V4h-4v16Zm-6 0h4v-8H4v8ZM16 9v11h4V9h-4Z",fill:"currentColor"})}))};S.displayName="SvgBarChart";var C=S,R=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.778 19a1.778 1.778 0 0 1-3.556 0h3.556ZM12 3c.49 0 .889.398.889.889v.96a5.34 5.34 0 0 1 4.444 5.262v5.333L20 18.111H4l2.667-2.667v-5.333A5.34 5.34 0 0 1 11.11 4.85v-.96c0-.491.398-.889.889-.889Z",fill:"currentColor"})}))};R.displayName="SvgBellFill";var A=R,$=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z",fill:"currentColor"})}))};$.displayName="SvgBurger";var me=$,ge=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5 3.5h-3V2H15v1.5H9V2H7.5v1.5h-3C3.6 3.5 3 4.1 3 5v15c0 .9.6 1.5 1.5 1.5h15c.9 0 1.5-.6 1.5-1.5V5c0-.9-.6-1.5-1.5-1.5Zm0 16h-15v-9h15v9Zm0-11.5h-15V5h3v1.5H9V5h6v1.5h1.5V5h3v3Z",fill:"currentColor"})}))};ge.displayName="SvgCalender";var je=ge,H=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4Z",fill:"currentColor"})}))};H.displayName="SvgCameraFill";var le=H,pe=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m9.56 8-2-2-4.15-4.14L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41-8.86-8.86L9.56 8ZM5 16V8h1.73l8 8H5Zm10-8v2.61l6 6V6.5l-4 4V7c0-.55-.45-1-1-1h-5.61l2 2H15Z",fill:"currentColor"})}))};pe.displayName="SvgCameraOff";var F=pe,J=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3Zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3Zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2 1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2Z",fill:"currentColor"})}))};J.displayName="SvgCameraPlus";var Z=J,de=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M15 8v8H5V8h10Zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1Z",fill:"currentColor"})}))};de.displayName="SvgCamera";var ne=de,ie=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7 15 5-5 5 5H7Z",fill:"currentColor"})}))};ie.displayName="SvgCaretUp";var Ce=ie,De=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7 10 5 5 5-5H7Z",fill:"currentColor"})}))};De.displayName="SvgCaretDown";var Te=De,Ve=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7 11 5-5 5 5H7ZM7 14l5 5 5-5H7Z",fill:"currentColor"})}))};Ve.displayName="SvgCaretSort";var Ue=Ve,Ke=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",fill:"currentColor"})}))};Ke.displayName="SvgCheckCircleFill";var Ze=Ke,ze=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7Zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41ZM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41Z",fill:"currentColor"})}))};ze.displayName="SvgCheckDouble";var re=ze,ye=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z",fill:"currentColor"})}))};ye.displayName="SvgCheck";var Oe=ye,Se=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z",fill:"currentColor"})}))};Se.displayName="SvgChevronDown";var z=Se,ae=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.06 12 5.647-5.646L15 5.646 8.646 12 15 18.354l.707-.707L10.061 12Z",fill:"currentColor"})}))};ae.displayName="SvgChevronLeftLight";var fe=ae,_e=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m9.704 12 5.823-5.823-.353-.354L8.997 12l6.177 6.177.353-.354L9.704 12Z",fill:"currentColor"})}))};_e.displayName="SvgChevronLeftThin";var be=_e,Me=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41Z",fill:"currentColor"})}))};Me.displayName="SvgChevronLeft";var Le=Me,Ie=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.291 12 8.645 6.354l.707-.708L15.705 12l-6.353 6.354-.707-.707L14.29 12Z",fill:"currentColor"})}))};Ie.displayName="SvgChevronRightLight";var $e=Ie,Ge=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.647 12 8.824 6.177l.354-.354L15.354 12l-6.176 6.177-.354-.354L14.647 12Z",fill:"currentColor"})}))};Ge.displayName="SvgChevronRightThin";var no=Ge,oo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41Z",fill:"currentColor"})}))};oo.displayName="SvgChevronRight";var Xe=oo,Je=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z",fill:"currentColor"})}))};Je.displayName="SvgChevronUp";var we=Je,Ye=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M11.96 22a.658.658 0 0 1-.372-.116.685.685 0 0 1-.247-.309.705.705 0 0 1 .146-.75l7.8-8.007a5.042 5.042 0 0 0 1.42-3.518c0-1.319-.51-2.584-1.42-3.517a4.784 4.784 0 0 0-3.426-1.457 4.783 4.783 0 0 0-3.427 1.457l-8.187 8.408a3.32 3.32 0 0 0-.92 2.311 3.32 3.32 0 0 0 .935 2.305 3.15 3.15 0 0 0 2.245.96 3.149 3.149 0 0 0 2.252-.944l8.189-8.407a1.6 1.6 0 0 0 .45-1.116 1.6 1.6 0 0 0-.45-1.116 1.518 1.518 0 0 0-1.086-.463c-.408 0-.799.166-1.088.462l-7.8 8.01a.662.662 0 0 1-.94-.009.697.697 0 0 1-.008-.964l7.8-8.008a2.84 2.84 0 0 1 2.035-.865 2.84 2.84 0 0 1 2.035.865c.54.554.842 1.305.842 2.088 0 .784-.303 1.535-.842 2.089l-8.192 8.408a4.472 4.472 0 0 1-3.195 1.329 4.475 4.475 0 0 1-3.182-1.363A4.714 4.714 0 0 1 2 16.498a4.717 4.717 0 0 1 1.295-3.28l8.191-8.406A6.104 6.104 0 0 1 15.846 3a6.108 6.108 0 0 1 4.342 1.86A6.436 6.436 0 0 1 22 9.315a6.44 6.44 0 0 1-1.764 4.476l-7.802 8.007a.662.662 0 0 1-.474.202Z",fill:"currentColor"})}))};Ye.displayName="SvgClip";var to=Ye,uo=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18h-1Zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1ZM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18h-1Zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1ZM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z",fill:"currentColor"})]}))};uo.displayName="SvgClock";var ro=uo,lo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7Z",fill:"currentColor"})}))};lo.displayName="SvgClock2";var ao=lo,so=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z",fill:"currentColor"})}))};so.displayName="SvgCode";var mo=so,io=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3h2v12h12v2H4V3Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m19.414 16-4.707 4.707-1.414-1.414L16.586 16l-3.293-3.293 1.414-1.414L19.414 16Z",fill:"currentColor"})]}))};io.displayName="SvgCornerDownRight";var fo=io,_o=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 14H4v-6h16v6Zm0-10H4V6h16v2Z",fill:"currentColor"})}))};_o.displayName="SvgCreditCard";var yo=_o,go=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m12.484 4 8.486 8.485-8.486 8.486L4 12.485 12.484 4Z",fill:"currentColor"})}))};go.displayName="SvgDiamondFill";var Eo=go,bo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M8 16h8v2H8v-2Zm0-4h8v2H8v-2Zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6Zm4 18H6V4h7v5h5v11Z",fill:"currentColor"})}))};bo.displayName="SvgDocument";var Co=bo,ho=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 9h-4V3H9v6H5l7 7 7-7ZM5 18v2h14v-2H5Z",fill:"currentColor"})}))};ho.displayName="SvgDownloadFill";var Io=ho,Oo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z",fill:"currentColor"})}))};Oo.displayName="SvgEmailFill";var xo=Oo,Lo=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{d:"M8.07 8.657 13.727 3a2 2 0 0 1 2.829 0l4.242 4.243a2 2 0 0 1 0 2.828l-5.657 5.657-7.07-7.071Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M3.121 16.435a1 1 0 0 1 0-1.414l5.664-5.664 5.657 5.657-5.664 5.664a1 1 0 0 1-1.414 0l-4.243-4.243Z",stroke:"currentColor",strokeWidth:2})]}))};Lo.displayName="SvgEraser";var ct=Lo,Fo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59ZM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z",fill:"currentColor"})}))};Fo.displayName="SvgExit";var Go=Fo,Yo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z",fill:"currentColor"})}))};Yo.displayName="SvgEyeFill";var dt=Yo,Qo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7ZM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27ZM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2Zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01Z",fill:"currentColor"})}))};Qo.displayName="SvgEyeOffFill";var ut=Qo,Xo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6Zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14ZM2.01 3.87l2.68 2.68A11.737 11.737 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87Zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13Zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53Z",fill:"currentColor"})}))};Xo.displayName="SvgEyeOff";var mt=Xo,Jo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 6a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 12 17a9.77 9.77 0 0 1-8.82-5.5A9.77 9.77 0 0 1 12 6Zm0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Zm0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7Z",fill:"currentColor"})}))};Jo.displayName="SvgEye";var ft=Jo,Ho=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8Z",fill:"currentColor"})}))};Ho.displayName="SvgFace";var vt=Ho,qo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.152 7.771h-3.798v-2.49c0-.936.62-1.154 1.057-1.154h2.68V.014L13.4 0C9.302 0 8.37 3.067 8.37 5.03v2.741H6v4.238h2.37V24h4.984V12.009h3.363l.435-4.238Z",fill:"currentColor"})}))};qo.displayName="SvgFacebook";var _t=qo,et=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z",fill:"currentColor"})}))};et.displayName="SvgFilter";var zo=et,gt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H4V6h5.17l1.41 1.41.59.59H20v10Zm-7.84-6H8v2h4.16l-1.59 1.59L11.99 17 16 13.01 11.99 9l-1.41 1.41L12.16 12Z",fill:"currentColor"})}))};gt.displayName="SvgFolderArrowRight";var Et=gt,jt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M3.667 7.2H2v4h.008L2 18.4c0 .88.75 1.6 1.667 1.6h15v-1.6h-15V7.2Zm16.666-1.6h-6.666L12 4H7c-.917 0-1.658.72-1.658 1.6l-.009 9.6c0 .88.75 1.6 1.667 1.6h13.333c.917 0 1.667-.72 1.667-1.6v-8c0-.88-.75-1.6-1.667-1.6Zm-12.5 8.8 3.75-4.8 2.917 3.608 2.083-2.408 2.917 3.6H7.833Z",fill:"currentColor"})}))};jt.displayName="SvgFolderImagePileFill";var ot=jt,V=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M3.667 7.2H2v4h.008L2 18.4c0 .88.75 1.6 1.667 1.6h15v-1.6h-15V7.2Zm4.166 7.2H19.5l-2.917-3.6-2.083 2.408L11.583 9.6l-3.75 4.8Zm12.5-8.8h-6.666L12 4H7c-.917 0-1.658.72-1.658 1.6l-.009 9.6c0 .88.75 1.6 1.667 1.6h13.333c.917 0 1.667-.72 1.667-1.6v-8c0-.88-.75-1.6-1.667-1.6Zm0 9.6H7V5.6h4.308l1.175 1.128.492.472h7.358v8Z",fill:"currentColor"})}))};V.displayName="SvgFolderImagePile";var ve=V,ue=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2Zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2Z",fill:"currentColor"})}))};ue.displayName="SvgFolderPlusFill";var xe=ue,Ee=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2Zm0 12H4V6h5.17l2 2H20v10Zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2v2Z",fill:"currentColor"})}))};Ee.displayName="SvgFolderPlus";var Pe=Ee,Ae=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H4V8h16v10Z",fill:"currentColor"})}))};Ae.displayName="SvgFolder";var Be=Ae,Ne=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.429 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.503.503 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65a.488.488 0 0 0-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z",fill:"currentColor"})}))};Ne.displayName="SvgGear";var Fe=Ne,We=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z",fill:"currentColor"})}))};We.displayName="SvgGlobal";var Re=We,ke=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 9H4v2h16V9ZM4 15h16v-2H4v2Z",fill:"currentColor"})}))};ke.displayName="SvgHandle";var eo=ke,He=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9Z",fill:"currentColor"})}))};He.displayName="SvgHeadphoneFill";var qe=He,Qe=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z",fill:"currentColor"})}))};Qe.displayName="SvgHeartFill";var po=Qe,So=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518l.013.012Zm.29-2.037L12 19l1.16-1 .032-.027C17.294 14.418 20 12.073 20 9.196 20 6.846 18.064 5 15.6 5c-1.132 0-2.228 1.339-3.066 2.364-.193.235-.371.454-.534.636-.163-.182-.341-.4-.534-.636C10.628 6.34 9.532 5 8.4 5 5.936 5 4 6.846 4 9.196c0 2.882 2.716 5.23 6.83 8.788l.01.009Z",fill:"currentColor"})}))};So.displayName="SvgHeart";var jo=So,To=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m12 4 7 4v8l-7 4-7-4V8l7-4Z",fill:"currentColor"})}))};To.displayName="SvgHexagonFill";var Ao=To,Ro=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z",fill:"currentColor"})}))};Ro.displayName="SvgHomeFill";var Vo=Ro,Bo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6Z",fill:"currentColor"})}))};Bo.displayName="SvgHourglassFill";var Ko=Bo,Uo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6Zm10 14.5V20H8v-3.5l4-4 4 4Zm-4-5-4-4V4h8v3.5l-4 4Z",fill:"currentColor"})}))};Uo.displayName="SvgHourglass";var vo=Uo,Do=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2ZM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5Z",fill:"currentColor"})}))};Do.displayName="SvgImageFill";var Mo=Do,Wo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",fill:"currentColor"})}))};Wo.displayName="SvgInfoCircleFill";var wo=Wo,tt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 17h2v-6h-2v6Zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8ZM11 9h2V7h-2v2Z",fill:"currentColor"})}))};tt.displayName="SvgInfoCircle";var yt=tt,ko=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.132 2c-1.031 0-1.867.811-1.867 1.812 0 1 .835 1.812 1.867 1.812 1.031 0 1.867-.812 1.867-1.812S15.163 2 14.132 2Zm-.447 5.762c-1.481.12-5.527 3.249-5.527 3.249-.25.181-.175.17.025.507.199.326.174.35.41.194.25-.157.66-.411 1.345-.822 2.64-1.642.423 2.15-.71 8.54-.448 3.164 2.49 1.534 3.25 1.05.747-.47 2.75-1.811 2.95-1.944.274-.181.075-.326-.137-.628-.15-.206-.299-.06-.299-.06-.809.519-2.29 1.606-2.49.917-.236-.688 1.283-5.41 2.117-8.66.137-.773.51-2.464-.934-2.343Z",fill:"currentColor"})}))};ko.displayName="SvgInfo";var pt=ko,nt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2Zm-1 18H5V9h14v11Zm1-13H4V4h16v3Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M15 12H9v2h6v-2Z",fill:"currentColor"})]}))};nt.displayName="SvgInventory";var ht=nt,Zo=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",fill:"currentColor"})}))};Zo.displayName="SvgLaunch";var bt=Zo,rt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M2 20h3.636V9.2H2V20Zm20-9.9c0-.99-.818-1.8-1.818-1.8h-5.736l.863-4.113.027-.288c0-.369-.154-.711-.4-.954L13.973 2 7.99 7.931A1.751 1.751 0 0 0 7.455 9.2v9c0 .99.818 1.8 1.818 1.8h8.181c.755 0 1.4-.45 1.673-1.098l2.746-6.345c.081-.207.127-.423.127-.657v-1.8Z",fill:"currentColor"})}))};rt.displayName="SvgLikeFill";var Ot=rt,$o=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsxs)("g",{clipPath:"url(#link_svg__a)",children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.91 7.433 1.944-1.944a3.666 3.666 0 1 1 5.186 5.185l-1.945 1.945a.917.917 0 0 0 1.297 1.296l1.944-1.944a5.5 5.5 0 0 0-7.778-7.779L9.613 6.137a.917.917 0 0 0 1.297 1.296Zm1.296 9.075-1.944 1.944a3.666 3.666 0 1 1-5.186-5.185l1.945-1.945a.917.917 0 0 0-1.297-1.296L3.78 11.97a5.5 5.5 0 0 0 7.778 7.779l1.944-1.945a.917.917 0 0 0-1.296-1.296Zm2.593-6.482-5.186 5.185a.917.917 0 0 1-1.296-1.296l5.185-5.185a.917.917 0 0 1 1.297 1.296Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"link_svg__b",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:2,y:2,width:19,height:20,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.91 7.433 1.944-1.944a3.666 3.666 0 1 1 5.186 5.185l-1.945 1.945a.917.917 0 0 0 1.297 1.296l1.944-1.944a5.5 5.5 0 0 0-7.778-7.779L9.613 6.137a.917.917 0 0 0 1.297 1.296Zm1.296 9.075-1.944 1.944a3.666 3.666 0 1 1-5.186-5.185l1.945-1.945a.917.917 0 0 0-1.297-1.296L3.78 11.97a5.5 5.5 0 0 0 7.778 7.779l1.944-1.945a.917.917 0 0 0-1.296-1.296Zm2.593-6.482-5.186 5.185a.917.917 0 0 1-1.296-1.296l5.185-5.185a.917.917 0 0 1 1.297 1.296Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#link_svg__b)",children:Object(o.jsx)("path",{d:"M-4 11.97 11.556-3.585 27.113 11.97 11.556 27.527-4 11.97Z",fill:"currentColor"})})]}),Object(o.jsx)("defs",{children:Object(o.jsx)("clipPath",{id:"link_svg__a",children:Object(o.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}))};$o.displayName="SvgLink";var xt=$o,st=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M2 13.2h2.222v-2.4H2v2.4ZM2 18h2.222v-2.4H2V18Zm0-9.6h2.222V6H2v2.4Zm4.444 4.8H22v-2.4H6.444v2.4Zm0 4.8H22v-2.4H6.444V18Zm0-12v2.4H22V6H6.444Z",fill:"currentColor"})}))};st.displayName="SvgList";var Dt=st,lt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 5.444h-4c-.552 0-1 .548-1 1.223V10h6V6.667c0-.675-.448-1.223-1-1.223ZM7 6.667V10H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V6.667C17 4.642 15.657 3 14 3h-4C8.343 3 7 4.642 7 6.667ZM14 15a2 2 0 0 1-1.333 1.886v.78a.667.667 0 0 1-1.334 0v-.78A2 2 0 1 1 14 15Z",fill:"currentColor"})}))};lt.displayName="SvgLockFill";var vr=lt,Ct=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM4 8l8 5 8-5v10H4V8Zm0-2 8 5 8-5H4Z",fill:"currentColor"})}))};Ct.displayName="SvgMail";var _r=Ct,St=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z",fill:"currentColor"})}))};St.displayName="SvgMapPin";var gr=St,Mt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.035 4.433a.698.698 0 0 0-.602.602L3.94 8.817a.698.698 0 0 0 1.383.18l.311-2.384L9.08 10.06a.698.698 0 0 0 .987-.987l-3.44-3.44 2.37-.309a.698.698 0 0 0-.18-1.383l-3.782.493Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.035 4.433a.698.698 0 0 0-.602.602L3.94 8.817a.698.698 0 0 0 1.383.18l.311-2.384L9.08 10.06a.698.698 0 0 0 .987-.987l-3.44-3.44 2.37-.309a.698.698 0 0 0-.18-1.383l-3.782.493ZM4.432 18.965c.04.314.288.56.601.602l3.783.493a.698.698 0 1 0 .18-1.383l-2.384-.312 3.445-3.445a.698.698 0 0 0-.986-.987l-3.44 3.44-.309-2.37a.698.698 0 1 0-1.384.18l.494 3.782ZM19.568 5.035a.698.698 0 0 0-.602-.602l-3.782-.493a.698.698 0 1 0-.18 1.383l2.384.311-3.446 3.446a.698.698 0 1 0 .987.987l3.44-3.44.309 2.37a.698.698 0 1 0 1.384-.18l-.494-3.782ZM18.965 19.567a.698.698 0 0 0 .602-.602l.494-3.782a.698.698 0 0 0-1.384-.18l-.311 2.384-3.446-3.446a.698.698 0 1 0-.987.987l3.44 3.44-2.37.309a.698.698 0 1 0 .18 1.383l3.782-.493Z",fill:"currentColor"})]}))};Mt.displayName="SvgMaximize";var jr=Mt,Pt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z",fill:"currentColor"})}))};Pt.displayName="SvgMessageSquareFill";var yr=Pt,Tt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H6l-2 2V4h16v12Z",fill:"currentColor"})}))};Tt.displayName="SvgMessageSquare";var pr=Tt,At=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11Zm1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1Z",fill:"currentColor"})}))};At.displayName="SvgMessageSquares";var hr=At,It=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1 2.002a3.333 3.333 0 0 0-3.436 3.332V12a3.333 3.333 0 1 0 6.667 0V7.715A5.002 5.002 0 0 1 12.1 2.002Zm4.899 8.331V12a5 5 0 0 1-10 0v-1.667a.833.833 0 0 0-1.667 0V12c0 3.4 2.544 6.204 5.832 6.615v1.718H8.665a.833.833 0 0 0 0 1.667h6.667a.833.833 0 1 0 0-1.667h-2.501v-1.718A6.668 6.668 0 0 0 18.665 12v-1.667a.833.833 0 0 0-1.666 0Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M20 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",fill:"currentColor"})]}))};It.displayName="SvgMicDotFill";var br=It,Lt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.33 7.715V12a3.333 3.333 0 1 1-6.666 0V5.333A3.333 3.333 0 0 1 12.1 2.002a5.022 5.022 0 0 0-.056 1.665H12c-.92 0-1.667.746-1.667 1.666V12a1.667 1.667 0 1 0 3.333 0V6.726c.48.43 1.045.769 1.666.989ZM17 12v-1.667a.833.833 0 0 1 1.666 0V12c0 3.4-2.545 6.206-5.834 6.615v1.718h2.501a.833.833 0 1 1 0 1.667H8.665a.833.833 0 0 1 0-1.667h2.5v-1.718A6.668 6.668 0 0 1 5.331 12v-1.667a.833.833 0 0 1 1.667 0V12a5 5 0 0 0 10 0Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M20 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",fill:"currentColor"})]}))};Lt.displayName="SvgMicDot";var Or=Lt,Rt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.332 5.333a3.333 3.333 0 0 0-6.667 0V12a3.333 3.333 0 1 0 6.667 0V5.333ZM16.999 12v-1.667a.833.833 0 0 1 1.666 0V12c0 3.4-2.544 6.205-5.833 6.615v1.718h2.5a.833.833 0 1 1 0 1.667H8.665a.833.833 0 0 1 0-1.667h2.5v-1.718A6.668 6.668 0 0 1 5.332 12v-1.667a.833.833 0 0 1 1.667 0V12a5 5 0 0 0 10 0Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"mic-fill_svg__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:5,y:2,width:14,height:20,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.999 2a3.333 3.333 0 0 1 3.333 3.333V12a3.333 3.333 0 1 1-6.667 0V5.333A3.333 3.333 0 0 1 12 2Zm5 8.333V12a5 5 0 0 1-10 0v-1.667a.833.833 0 0 0-1.667 0V12c0 3.4 2.545 6.205 5.833 6.615v1.718h-2.5a.833.833 0 0 0 0 1.667h6.667a.833.833 0 1 0 0-1.667h-2.5v-1.718A6.668 6.668 0 0 0 18.665 12v-1.667a.833.833 0 0 0-1.666 0Zm-6.667-5a1.667 1.667 0 0 1 3.333 0V12a1.667 1.667 0 1 1-3.333 0V5.333Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#mic-fill_svg__a)",children:Object(o.jsx)("path",{fill:"currentColor",d:"M2 2h20v20H2z"})})]}))};Rt.displayName="SvgMicFill";var xr=Rt,Bt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.332 5.333a3.333 3.333 0 0 0-6.667 0V12a3.333 3.333 0 1 0 6.667 0V5.333ZM16.999 12v-1.667a.833.833 0 0 1 1.666 0V12c0 3.4-2.544 6.205-5.833 6.615v1.718h2.5a.833.833 0 1 1 0 1.667H8.665a.833.833 0 0 1 0-1.667h2.5v-1.718A6.668 6.668 0 0 1 5.332 12v-1.667a.833.833 0 0 1 1.667 0V12a5 5 0 0 0 10 0Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"mic-off-fill_svg__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:5,y:2,width:14,height:20,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.999 2a3.333 3.333 0 0 1 3.333 3.333V12a3.333 3.333 0 1 1-6.667 0V5.333A3.333 3.333 0 0 1 12 2Zm5 8.333V12a5 5 0 0 1-10 0v-1.667a.833.833 0 0 0-1.667 0V12c0 3.4 2.545 6.205 5.833 6.615v1.718h-2.5a.833.833 0 0 0 0 1.667h6.667a.833.833 0 1 0 0-1.667h-2.5v-1.718A6.668 6.668 0 0 0 18.665 12v-1.667a.833.833 0 0 0-1.666 0Zm-6.667-5a1.667 1.667 0 0 1 3.333 0V12a1.667 1.667 0 1 1-3.333 0V5.333Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#mic-off-fill_svg__a)",children:Object(o.jsx)("path",{d:"M2 2h20v20H2V2Z",fill:"currentColor"})}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9 4.929 4.93 21.899l-1.414-1.414 16.97-16.97L21.9 4.929Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m20.486 3.515-16.97 16.97-1.414-1.414 16.97-16.97 1.414 1.414Z",fill:"#fff"})]}))};Bt.displayName="SvgMicOffFill";var Dr=Bt,Ut=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.66 10.261a.698.698 0 0 0 .602-.601l.494-3.783a.698.698 0 0 0-1.384-.18l-.311 2.386-3.448-3.448a.698.698 0 0 0-.986.987l3.44 3.44-2.37.309a.698.698 0 1 0 .181 1.384l3.783-.494ZM10.26 14.34a.698.698 0 0 0-.602-.601l-3.783-.494a.698.698 0 1 0-.18 1.384l2.385.311-3.446 3.446a.698.698 0 0 0 .987.986l3.439-3.439.31 2.37a.698.698 0 1 0 1.383-.18l-.493-3.783ZM13.74 9.66c.041.313.288.56.602.601l3.783.494a.698.698 0 0 0 .18-1.384l-2.384-.311 3.445-3.446a.698.698 0 1 0-.987-.987l-3.439 3.44-.31-2.37a.698.698 0 1 0-1.383.18l.493 3.783ZM14.34 13.739a.698.698 0 0 0-.602.601l-.494 3.783a.698.698 0 1 0 1.384.18l.311-2.386 3.448 3.447a.698.698 0 1 0 .986-.986l-3.44-3.44 2.37-.309a.698.698 0 0 0-.181-1.384l-3.783.494Z",fill:"currentColor"})}))};Ut.displayName="SvgMinimize";var Er=Ut,Wt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11H7v-2h10v2Z",fill:"currentColor"})}))};Wt.displayName="SvgMinusCircleFill";var Cr=Wt,Vt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 13H5v-2h14v2Z",fill:"currentColor"})}))};Vt.displayName="SvgMinus";var Sr=Vt,Kt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z",fill:"currentColor"})}))};Kt.displayName="SvgMoreHorizontal";var Mr=Kt,Nt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z",fill:"currentColor"})}))};Nt.displayName="SvgMoreVertical";var Pr=Nt,Ft=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("mask",{id:"mouse-pointer-fill_svg__a",fill:"#fff",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z"})}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"m3.126 4.126.654-1.89L-.108.892 1.236 4.78l1.89-.654ZM21.853 10.6l1.414 1.415 2.26-2.26-3.02-1.045-.654 1.89ZM9.6 22.853l-1.89.653 1.045 3.021 2.26-2.26L9.6 22.853Zm0 0 1.415 1.414.224-.224.144-.282-1.782-.909Zm4.137-8.116-.908-1.782-.579.295-.295.579 1.782.908Zm8.116-4.136.908 1.782.282-.144.224-.224-1.414-1.414ZM2.473 6.016l18.726 6.475 1.307-3.78L3.78 2.235l-1.307 3.78ZM11.49 22.2 5.016 3.473 1.236 4.78 7.71 23.506l3.78-1.307Zm-3.304-.76 2.828 2.828-2.828-2.829Zm3.196 2.322 4.136-8.116-3.564-1.816-4.136 8.115 3.564 1.817Zm3.263-7.242 8.115-4.136-1.817-3.564-8.115 4.136 1.816 3.564Zm5.793-7.333 2.828 2.829-2.828-2.829Z",fill:"currentColor",mask:"url(#mouse-pointer-fill_svg__a)"})]}))};Ft.displayName="SvgMousePointerFill";var Tr=Ft,Ht=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("mask",{id:"mouse-pointer_svg__a",fill:"#fff",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z"})}),Object(o.jsx)("path",{d:"m3.126 4.126.654-1.89L-.108.892 1.236 4.78l1.89-.654ZM21.853 10.6l1.414 1.415 2.26-2.26-3.02-1.045-.654 1.89ZM9.6 22.853l-1.89.653 1.045 3.021 2.26-2.26L9.6 22.853Zm0 0 1.415 1.414.224-.224.144-.282-1.782-.909Zm4.137-8.116-.908-1.782-.579.295-.295.579 1.782.908Zm8.116-4.136.908 1.782.282-.144.224-.224-1.414-1.414ZM2.473 6.016l18.726 6.475 1.307-3.78L3.78 2.235l-1.307 3.78ZM11.49 22.2 5.016 3.473 1.236 4.78 7.71 23.506l3.78-1.307Zm-3.304-.76 2.828 2.828-2.828-2.829Zm3.196 2.322 4.136-8.116-3.564-1.816-4.136 8.115 3.564 1.817Zm3.263-7.242 8.115-4.136-1.817-3.564-8.115 4.136 1.816 3.564Zm5.793-7.333 2.828 2.829-2.828-2.829Z",fill:"currentColor",mask:"url(#mouse-pointer_svg__a)"})]}))};Ht.displayName="SvgMousePointer";var Ar=Ht,zt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 9h4V6h3l-5-5-5 5h3v3Zm-1 1H6V7l-5 5 5 5v-3h3v-4Zm14 2-5-5v3h-3v4h3v3l5-5Zm-9 3h-4v3H7l5 5 5-5h-3v-3Z",fill:"currentColor"})}))};zt.displayName="SvgMoveFat";var Ir=zt,wt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M3 10h11v2H3v-2Zm0-2h11V6H3v2Zm0 8h7v-2H3v2Zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12Zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12Z",fill:"currentColor"})}))};wt.displayName="SvgNoteList";var Lr=wt,kt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.635 18.433a9 9 0 0 1 0-12.726 1 1 0 0 0-1.414-1.414c-4.295 4.295-4.295 11.259 0 15.554a1 1 0 1 0 1.414-1.414Zm12.726 1.414a1 1 0 0 1 0-1.414 9 9 0 0 0 0-12.726 1 1 0 1 1 1.414-1.414c4.294 4.295 4.294 11.259 0 15.554a1 1 0 0 1-1.414 0Zm-9.896-4.245a5 5 0 0 1 0-7.075A1 1 0 0 0 7.05 7.114a7 7 0 0 0 0 9.904 1 1 0 1 0 1.414-1.415Zm8.533-3.527a5 5 0 0 0-1.467-3.537 1 1 0 1 1 1.414-1.416 7 7 0 0 1 0 9.905 1 1 0 1 1-1.414-1.415 5 5 0 0 0 1.467-3.537Zm-8-.005a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"onair_svg__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:1,y:4,width:22,height:17,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.635 18.433a9 9 0 0 1 0-12.726 1 1 0 0 0-1.414-1.414c-4.295 4.295-4.295 11.259 0 15.554a1 1 0 1 0 1.414-1.414Zm12.726 1.414a1 1 0 0 1 0-1.414 9 9 0 0 0 0-12.726 1 1 0 1 1 1.414-1.414c4.294 4.295 4.294 11.259 0 15.554a1 1 0 0 1-1.414 0Zm-9.896-4.245a5 5 0 0 1 0-7.075A1 1 0 0 0 7.05 7.114a7 7 0 0 0 0 9.904 1 1 0 1 0 1.414-1.415Zm8.533-3.527a5 5 0 0 0-1.467-3.537 1 1 0 1 1 1.414-1.416 7 7 0 0 1 0 9.905 1 1 0 1 1-1.414-1.415 5 5 0 0 0 1.467-3.537Zm-8-.005a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#onair_svg__a)",children:Object(o.jsx)("path",{fill:"currentColor",d:"M0 0h24v24H0z"})})]}))};kt.displayName="SvgOnair";var Rr=kt,Zt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M17.66 8 12 2.35 6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8ZM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6Z",fill:"currentColor"})}))};Zt.displayName="SvgOpacity";var Br=Zt,$t=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.192 4.192 14 2H6c-1.1 0-1.99.9-1.99 2l-.008 12.383L8 12.384V12h.385L13 7.385V3.5l1.942 1.942 1.25-1.25ZM14.213 9l2.144-2.143 1.25-1.25 2.192-2.192 1.414 1.414-2.192 2.192L20 8v12c0 1.1-.9 2-2 2H5.99a1.977 1.977 0 0 1-1.384-.564l-1.778 1.777L1.414 21.8 4 19.213 9.213 14l2-2 3-3Zm-4.171 7-2 2H16v-2h-5.958Zm4-4-2 2H16v-2h-1.958Zm3.729-3.73L18.5 9h-1.458l.729-.73Z",fill:"currentColor"})}))};$t.displayName="SvgPageFillOff";var Ur=$t,Gt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6Zm2 16H8v-2h8v2Zm0-4H8v-2h8v2Zm-3-5V3.5L18.5 9H13Z",fill:"currentColor"})}))};Gt.displayName="SvgPageFill";var Wr=Gt,Yt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 3.667H6c-.276 0-.5.248-.5.555v15.556c0 .307.224.555.5.555h12c.276 0 .5-.248.5-.555V4.222c0-.307-.224-.555-.5-.555ZM6 2c-1.105 0-2 .995-2 2.222v15.556C4 21.005 4.895 22 6 22h12c1.105 0 2-.995 2-2.222V4.222C20 2.995 19.105 2 18 2H6Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M8 8.7a.7.7 0 0 1 .7-.7h6.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7ZM8 14.7a.7.7 0 0 1 .7-.7h3.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7ZM8 11.7a.7.7 0 0 1 .7-.7h6.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7Z",fill:"currentColor"})]}))};Yt.displayName="SvgPage";var Vr=Yt,Qt=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("rect",{x:6,y:3,width:4,height:18,rx:1,fill:"currentColor"}),Object(o.jsx)("rect",{x:14,y:3,width:4,height:18,rx:1,fill:"currentColor"})]}))};Qt.displayName="SvgPause";var Kr=Qt,Xt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1Zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3Zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5ZM9 9.5h1v-1H9v1ZM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm10 5.5h1v-3h-1v3Z",fill:"currentColor"})}))};Xt.displayName="SvgPdfPile";var Nr=Xt,Jt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z",fill:"currentColor"})}))};Jt.displayName="SvgPencilFill";var Fr=Jt,qt=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 3.637a1.031 1.031 0 0 0-1.459.003L4.44 13.78a1.031 1.031 0 0 0-.289.57l-.807 5.172A1.031 1.031 0 0 0 4.527 20.7l5.169-.828-.163-1.018.73.728 10.102-10.14a1.032 1.032 0 0 0-.003-1.46L16 3.637Zm2.175 5.079L9.04 17.888l-3.438.55.534-3.417 2.757 2.757.73-.73-2.769-2.767 8.422-8.454 2.9 2.889Z",fill:"currentColor"})}))};qt.displayName="SvgPencil";var Hr=qt,en=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z",fill:"currentColor"})}))};en.displayName="SvgPeople";var zr=en,on=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3v18l14.143-9L5 3Z",fill:"currentColor"})}))};on.displayName="SvgPlay";var wr=on,tn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M4 10h12v2H4v-2Zm0-4h12v2H4V6Zm0 8h8v2H4v-2Zm10 0v6l5-3-5-3Z",fill:"#212121"})}))};tn.displayName="SvgPlaylist";var kr=tn,nn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z",fill:"currentColor"})}))};nn.displayName="SvgPlusCircleFill";var Zr=nn,rn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",fill:"currentColor"})}))};rn.displayName="SvgPlus";var $r=rn,sn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 3h-2v10h2V3Zm4.83 2.17-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17A8.932 8.932 0 0 0 3 12a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83Z",fill:"currentColor"})}))};sn.displayName="SvgPower";var Gr=sn,ln=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5 7.5h-17V17h17V7.5ZM2 6v12.5h20V6H2Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 12.5H3.5V17H16v-4.5ZM2 11v7.5h15.5V11H2Z",fill:"currentColor"})]}))};ln.displayName="SvgPresent";var Yr=ln,an=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3Zm-3 11H8v-5h8v5Zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm-1-9H6v4h12V3Z",fill:"currentColor"})}))};an.displayName="SvgPrinterFill";var Qr=an,cn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z",fill:"currentColor"})}))};cn.displayName="SvgQuestionCircle";var Xr=cn,dn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6Zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26Z",fill:"currentColor"})}))};dn.displayName="SvgRefresh";var Jr=dn,un=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18Z",fill:"currentColor"})}))};un.displayName="SvgRewind";var qr=un,mn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.294 14.579h-.904l-.32-.31a7.4 7.4 0 0 0 1.796-4.836 7.433 7.433 0 1 0-7.433 7.433 7.4 7.4 0 0 0 4.837-1.796l.309.32v.904L20.296 22 22 20.296l-5.706-5.717Zm-6.861 0a5.139 5.139 0 0 1-5.146-5.146 5.139 5.139 0 0 1 5.146-5.146 5.139 5.139 0 0 1 5.146 5.146 5.139 5.139 0 0 1-5.146 5.146Z",fill:"currentColor"})}))};mn.displayName="SvgSearch";var es=mn,fn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{d:"m8.334 12.25 7.45-4.858c.488-.319.488-.835 0-1.153-.489-.319-1.28-.319-1.768 0l-8.333 5.435c-.245.159-.367.367-.367.576 0 .209.122.417.367.576l8.333 5.435c.488.319 1.28.319 1.768 0 .488-.318.488-.834 0-1.153l-7.45-4.858Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M18.648 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18.648 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8.648 11.833a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",fill:"currentColor"})]}))};fn.displayName="SvgShare";var os=fn,vn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5Zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11Zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z",fill:"currentColor"})}))};vn.displayName="SvgSmile";var ts=vn,_n=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 18h6v-2H3v2ZM3 6v2h18V6H3Zm0 7h12v-2H3v2Z",fill:"currentColor"})}))};_n.displayName="SvgSort";var ns=_n,gn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9Zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5ZM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15Z",fill:"currentColor"})}))};gn.displayName="SvgSparkles";var rs=gn,jn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("g",{clipPath:"url(#spiked-circle-fill_svg__a)",children:Object(o.jsx)("path",{d:"M11.012 4.337c.176-1.128 1.8-1.128 1.976 0l.345 2.213a1 1 0 0 0 1.578.654l1.809-1.321c.922-.673 2.07.475 1.397 1.397l-1.32 1.81a1 1 0 0 0 .653 1.577l2.213.345c1.128.176 1.128 1.8 0 1.976l-2.213.345a1 1 0 0 0-.654 1.578l1.321 1.809c.673.922-.475 2.07-1.397 1.397l-1.81-1.32a1 1 0 0 0-1.577.653l-.345 2.213c-.176 1.128-1.8 1.128-1.976 0l-.345-2.213a1 1 0 0 0-1.578-.654L7.28 18.117c-.922.673-2.07-.475-1.397-1.397l1.32-1.81a1 1 0 0 0-.653-1.577l-2.213-.345c-1.128-.176-1.128-1.8 0-1.976l2.213-.345a1 1 0 0 0 .654-1.578L5.883 7.28c-.673-.922.475-2.07 1.397-1.397l1.81 1.32a1 1 0 0 0 1.577-.653l.345-2.213Z",fill:"currentColor"})}),Object(o.jsx)("defs",{children:Object(o.jsx)("clipPath",{id:"spiked-circle-fill_svg__a",children:Object(o.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}))};jn.displayName="SvgSpikedCircleFill";var ss=jn,yn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m21 7-9-5-6.04 3.357L3 7.002V17l.02.011L12 22l9-5V7ZM5.386 15.671V8.326l2.948-1.638L12 4.653 18.659 8.3 12 11.999v7.26l-6.614-3.587Zm13.225 0-4.225 2.346v-4.695l4.225-2.346v4.695Z",fill:"currentColor"})}))};yn.displayName="SvgSquare3D";var ls=yn,pn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z",fill:"currentColor"})}))};pn.displayName="SvgSquareFill";var as=pn,hn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{d:"M4 5a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM4 13.1a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.2ZM12.102 5a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1h-5.2a1 1 0 0 1-1-1V5Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.097 12.1v7.2h7.2v-7.2h-7.2Zm-.9-1.8a.9.9 0 0 0-.9.9v9a.9.9 0 0 0 .9.9h9a.9.9 0 0 0 .9-.9v-9a.9.9 0 0 0-.9-.9h-9Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.398 11.2a1.8 1.8 0 0 1 1.8-1.8h9a1.8 1.8 0 0 1 1.8 1.8v9a1.8 1.8 0 0 1-1.8 1.8h-9a1.8 1.8 0 0 1-1.8-1.8v-9Zm.9 0a.9.9 0 0 1 .9-.9h9a.9.9 0 0 1 .9.9v9a.9.9 0 0 1-.9.9h-9a.9.9 0 0 1-.9-.9v-9Z",fill:"#fff"})]}))};hn.displayName="SvgSquareFocus";var is=hn,bn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M19 5v14H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14Z",fill:"currentColor"})}))};bn.displayName="SvgSquareImage";var cs=bn,On=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm18 2H3v14h18V5Z",fill:"currentColor"}),Object(o.jsx)("path",{fill:"currentColor",d:"M5 11h8v6H5z"})]}))};On.displayName="SvgSquareInSqaureBottomLeft";var ds=On,xn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm18 2H3v14h18V5Z",fill:"currentColor"}),Object(o.jsx)("path",{fill:"currentColor",d:"M11 11h8v6h-8z"})]}))};xn.displayName="SvgSquareInSqaureBottomRight";var us=xn,Dn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm18 2H3v14h18V5Z",fill:"currentColor"}),Object(o.jsx)("path",{fill:"currentColor",d:"M5 7h8v6H5z"})]}))};Dn.displayName="SvgSquareInSqaureTopLeft";var ms=Dn,En=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm18 2H3v14h18V5Z",fill:"currentColor"}),Object(o.jsx)("path",{fill:"currentColor",d:"M11 7h8v6h-8z"})]}))};En.displayName="SvgSquareInSqaureTopRight";var fs=En,Cn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4a2 2 0 0 0-2 2v10h2V6h16V4H3Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm14 2H7v8h14v-8Z",fill:"currentColor"})]}))};Cn.displayName="SvgSquarePile2";var vs=Cn,Sn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 7H7v2h2V7Zm0 4H7v2h2v-2Zm0-8a2 2 0 0 0-2 2h2V3Zm4 12h-2v2h2v-2Zm6-12v2h2c0-1.1-.9-2-2-2Zm-6 0h-2v2h2V3ZM9 17v-2H7a2 2 0 0 0 2 2Zm10-4h2v-2h-2v2Zm0-4h2V7h-2v2Zm0 8c1.1 0 2-.9 2-2h-2v2ZM5 7H3v12a2 2 0 0 0 2 2h12v-2H5V7Zm10-2h2V3h-2v2Zm0 12h2v-2h-2v2Z",fill:"currentColor"})}))};Sn.displayName="SvgSquarePileDotted";var _s=Sn,Mn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2Z",fill:"currentColor"})}))};Mn.displayName="SvgSquarePilePlusFill";var gs=Mn,Pn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H8V4h12v12Zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3v3Z",fill:"currentColor"})}))};Pn.displayName="SvgSquarePilePlus";var js=Pn,Tn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1v1.5h.5v9h-15V17H5Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 5.5v9h15v-9h-15ZM3 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Z",fill:"currentColor"})]}))};Tn.displayName="SvgSquarePile";var ys=Tn,An=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 19v-4h-4v4h4Zm1 2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6ZM19 9V5h-4v4h4Zm1 2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6ZM5 5v4h4V5H5ZM4 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM5 15v4h4v-4H5Zm-1-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4Z",fill:"currentColor"})}))};An.displayName="SvgSquares";var ps=An,In=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2Zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18Z",fill:"currentColor"})}))};In.displayName="SvgStarCircleFill";var hs=In,Ln=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z",fill:"currentColor"})}))};Ln.displayName="SvgStarFill";var bs=Ln,Rn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24ZM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4Z",fill:"currentColor"})}))};Rn.displayName="SvgStar";var Os=Rn,Bn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16Z",fill:"currentColor"})}))};Bn.displayName="SvgTagFill";var xs=Bn,Un=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M7.476 10.143H4.762v6.333h2.714v-6.333ZM13.359 10.143h-2.714v6.333h2.714v-6.333ZM21.048 18.286H2.953V21h18.095v-2.714ZM19.238 10.143h-2.715v6.333h2.715v-6.333ZM12 2 2.954 6.524v1.81h18.095v-1.81L12.001 2Z",fill:"currentColor"})}))};Un.displayName="SvgTempleFill";var Ds=Un,Wn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.57 4.929v.642h5.144v1.286h-1.286v12.214A1.929 1.929 0 0 1 16.499 21h-9a1.929 1.929 0 0 1-1.928-1.929V6.857H4.285V5.571h5.143V4.93c0-1.066.863-1.929 1.929-1.929h1.285c1.065 0 1.929.863 1.929 1.929Zm-3.214-.643a.643.643 0 0 0-.643.643v.643h2.572v-.643a.643.643 0 0 0-.643-.643h-1.286Zm5.787 14.785a.643.643 0 0 1-.643.643h-9a.643.643 0 0 1-.643-.643V6.857h10.286v12.214ZM8.785 9.43h1.286v7.714H8.785V9.43Zm3.858 0h-1.286v7.714h1.286V9.43Zm2.57 0h-1.286v7.714h1.286V9.43Z",fill:"currentColor"})}))};Wn.displayName="SvgTrash2";var Es=Wn,Vn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z",fill:"currentColor"})}))};Vn.displayName="SvgTrashFill";var Cs=Vn,Kn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12Zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12ZM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5Z",fill:"currentColor"})}))};Kn.displayName="SvgTrashXFill";var Ss=Kn,Nn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.143 19c0 1.1 1.028 2 2.286 2h9.142c1.258 0 2.286-.9 2.286-2V7H5.143v12Zm2.286-1.714c0 .943.685 1.714 1.523 1.714h6.096c.838 0 1.523-.771 1.523-1.714V7H7.43v10.286ZM20 4h-4l-1.143-1H9.143L8 4H4v2h16V4Z",fill:"currentColor"})}))};Nn.displayName="SvgTrash";var Ms=Nn,Fn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6Z",fill:"currentColor"})}))};Fn.displayName="SvgTrendingDown";var Ps=Fn,Hn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m22 12-4-4v3H3v2h15v3l4-4Z",fill:"currentColor"})}))};Hn.displayName="SvgTrendingFlat";var Ts=Hn,zn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z",fill:"currentColor"})}))};zn.displayName="SvgTrendingUp";var As=zn,wn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12 2 9.695 9.695 2 12l7.695 2.305L12 22l2.305-7.695L22 12l-7.695-2.305L12 2Z",fill:"currentColor"})}))};wn.displayName="SvgTwinkleFill";var Is=wn,kn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.83 9.83 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.866 9.866 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.887 4.887 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.916 4.916 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.94 13.94 0 0 0 7.548 2.208",fill:"currentColor"})}))};kn.displayName="SvgTwitter";var Ls=kn,Zn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"m18.436 4.273-.157 3.106h-1.23a8.069 8.069 0 0 0-.078-.957c-.026-.248-.098-.436-.215-.567-.104-.143-.267-.24-.488-.293-.209-.052-.495-.078-.86-.078h-2.402v10.782c0 .416.02.748.059.996.039.234.123.416.253.547.13.117.32.201.567.253.247.04.573.06.976.06v.917c-.377-.013-.827-.02-1.347-.02H10.33c-.52.014-.963.027-1.328.04v-.938c.404 0 .723-.02.957-.058.247-.053.436-.137.566-.254.13-.13.215-.313.254-.547a5.04 5.04 0 0 0 .078-.996V5.484h-2.05c-.391 0-.71.026-.957.079-.235.039-.43.123-.586.253-.144.13-.267.326-.371.586a8.045 8.045 0 0 0-.274.977H5.35l.274-3.106c.872.04 1.869.066 2.988.079a294.04 294.04 0 0 0 6.836 0c1.12-.026 2.116-.053 2.989-.079Z",fill:"currentColor"})}))};Zn.displayName="SvgType";var Rs=Zn,$n=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8Z",fill:"currentColor"})}))};$n.displayName="SvgUndo";var Bs=$n,Gn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 16h6v-6h4l-7-7-7 7h4v6Zm-4 2h14v2H5v-2Z",fill:"currentColor"})}))};Gn.displayName="SvgUploadFill";var Us=Gn,Yn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.47 8.03a.75.75 0 1 0 1.06-1.06L12.532 3.97a.746.746 0 0 0-.53-.221h-.004a.748.748 0 0 0-.528.22l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v7.94a.75.75 0 0 0 1.5 0V6.31l1.72 1.72ZM5.25 12v6a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 18.75 18v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-1.5 0Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"upload_svg__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:5,y:3,width:14,height:18,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.47 8.03a.75.75 0 1 0 1.06-1.06L12.532 3.97a.746.746 0 0 0-.53-.221h-.004a.748.748 0 0 0-.528.22l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v7.94a.75.75 0 0 0 1.5 0V6.31l1.72 1.72ZM5.25 12v6a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 18.75 18v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-1.5 0Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#upload_svg__a)",children:Object(o.jsx)("path",{fill:"currentColor",d:"M3 3h18v18H3z"})})]}))};Yn.displayName="SvgUpload";var Ws=Yn,Qn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 14.5h6a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1h1.5v-1A2.5 2.5 0 0 1 8 14.5Z",fill:"#C4C4C4"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 18v-1a4.002 4.002 0 0 0-4-4H8a4.002 4.002 0 0 0-4 4v1h1.5v-1A2.5 2.5 0 0 1 8 14.5h6a2.5 2.5 0 0 1 2.5 2.5v1H18Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m22.111 14.415-1.171-1.076-6.02 5.523-2.37-2.176-1.179 1.074 3.548 3.258 7.192-6.603Z",fill:"currentColor"})]}))};Qn.displayName="SvgUserCheck";var Vs=Qn,Xn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22Z",fill:"currentColor"})}))};Xn.displayName="SvgUserCircle";var Ks=Xn,Jn=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.083 12a4.167 4.167 0 1 1 0-8.333 4.167 4.167 0 0 1 0 8.333Zm7.084 7.5v-1.667A4.167 4.167 0 0 0 12 13.667H6.167A4.167 4.167 0 0 0 2 17.833V19.5a.833.833 0 0 0 1.667 0v-1.667a2.5 2.5 0 0 1 2.5-2.5H12a2.5 2.5 0 0 1 2.5 2.5V19.5a.833.833 0 0 0 1.667 0Zm1.666-5.833V12h-1.666a.833.833 0 1 1 0-1.667h1.666V8.667a.833.833 0 0 1 1.667 0v1.666h1.667a.833.833 0 0 1 0 1.667H19.5v1.667a.833.833 0 1 1-1.667 0Zm-6.25-5.834a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",fill:"currentColor"}),Object(o.jsx)("mask",{id:"user-plus_svg__a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:2,y:3,width:20,height:18,children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.083 12a4.167 4.167 0 1 1 0-8.333 4.167 4.167 0 0 1 0 8.333Zm7.084 7.5v-1.667A4.167 4.167 0 0 0 12 13.667H6.167A4.167 4.167 0 0 0 2 17.833V19.5a.833.833 0 0 0 1.667 0v-1.667a2.5 2.5 0 0 1 2.5-2.5H12a2.5 2.5 0 0 1 2.5 2.5V19.5a.833.833 0 0 0 1.667 0Zm1.666-5.833V12h-1.666a.833.833 0 1 1 0-1.667h1.666V8.667a.833.833 0 0 1 1.667 0v1.666h1.667a.833.833 0 0 1 0 1.667H19.5v1.667a.833.833 0 1 1-1.667 0Zm-6.25-5.834a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",fill:"#fff"})}),Object(o.jsx)("g",{mask:"url(#user-plus_svg__a)",children:Object(o.jsx)("path",{fill:"currentColor",d:"M2 2h20v20H2z"})})]}))};Jn.displayName="SvgUserPlus";var Ns=Jn,qn=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 11.25c4.973 0 9 2.014 9 4.5V21H3v-2.25c0-2.486 4.027-4.5 9-4.5Z",fill:"currentColor"})}))};qn.displayName="SvgUser";var Fs=qn,er=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 18v2h17a1 1 0 0 0 1-1V8h-2v10H5Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2Zm6.5 8.598L13 10 8.5 7.402v5.196Z",fill:"currentColor"})]}))};er.displayName="SvgVideoPileFill";var Hs=er,or=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1v1.5h.5v9h-15V17H4Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 6.5v9h15v-9h-15ZM3 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"m14 11-4.5 2.598V8.402L14 11Z",fill:"currentColor"})]}))};or.displayName="SvgVideoPile";var zs=or,tr=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.667 6.75v10.5h16.666V6.75H3.667ZM3.11 5C2.497 5 2 5.522 2 6.167v11.666C2 18.478 2.497 19 3.111 19H20.89c.614 0 1.111-.522 1.111-1.167V6.167C22 5.522 21.503 5 20.889 5H3.11Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"m15 12-4.5 2.598V9.402L15 12Z",fill:"currentColor"})]}))};tr.displayName="SvgVideo";var ws=tr,nr=function(I){return Object(o.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:[Object(o.jsx)("path",{d:"M3 8.921v6.158h4l5 5.13V3.79L7 8.921H3Zm7-.174v6.506l-2.17-2.227H5v-2.052h2.83L10 8.747ZM16.5 12A4.631 4.631 0 0 0 14 7.864v8.261A4.604 4.604 0 0 0 16.5 12ZM14 3v2.114c2.89.883 5 3.633 5 6.886s-2.11 6.003-5 6.886V21c4.01-.934 7-4.608 7-9s-2.99-8.066-7-9Z",fill:"currentColor"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.97 4.414 5 21.384l-1.414-1.413L20.556 3l1.415 1.414Z",fill:"currentColor"})]}))};nr.displayName="SvgVolumeOff";var ks=nr,rr=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{d:"M3 8.921v6.158h4l5 5.13V3.79L7 8.921H3Zm7-.174v6.506l-2.17-2.227H5v-2.052h2.83L10 8.747ZM16.5 12A4.631 4.631 0 0 0 14 7.864v8.261A4.604 4.604 0 0 0 16.5 12ZM14 3v2.114c2.89.883 5 3.633 5 6.886s-2.11 6.003-5 6.886V21c4.01-.934 7-4.608 7-9s-2.99-8.066-7-9Z",fill:"currentColor"})}))};rr.displayName="SvgVolume";var Zs=rr,sr=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",fill:"currentColor"})}))};sr.displayName="SvgXCircleFill";var $s=sr,lr=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8ZM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"currentColor"})}))};lr.displayName="SvgXCircle";var Gs=lr,ar=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",fill:"currentColor"})}))};ar.displayName="SvgX";var Ys=ar,ir=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m21.355 18.805-4.468-4.062a1.118 1.118 0 0 1-.238-1.35 7.79 7.79 0 0 0 .827-4.638c-.426-3.346-3.063-6.1-6.39-6.647a7.782 7.782 0 0 0-8.98 8.976c.542 3.325 3.286 5.964 6.624 6.398a7.768 7.768 0 0 0 4.63-.811 1.114 1.114 0 0 1 1.337.23l4.202 4.54c.734.793 2.046.736 2.738-.133.597-.75.426-1.86-.282-2.503Zm-8.464-8.783a.451.451 0 0 1-.451.451h-1.642a.316.316 0 0 0-.317.316v1.643a.45.45 0 0 1-.45.451h-.522a.451.451 0 0 1-.45-.451v-1.643a.315.315 0 0 0-.316-.316H7.1a.451.451 0 0 1-.451-.451V9.5c0-.25.202-.452.45-.452h1.643c.175 0 .315-.14.315-.315V7.09c0-.25.202-.452.451-.452h.521c.25 0 .451.203.451.452v1.643c0 .175.142.315.317.315h1.642c.249 0 .45.202.45.452v.522Z",fill:"currentColor"})}))};ir.displayName="SvgZoomInFill";var Qs=ir,cr=function(I){return Object(o.jsx)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I,{children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m21.355 18.805-4.468-4.062a1.118 1.118 0 0 1-.238-1.35 7.784 7.784 0 0 0 .826-4.638c-.425-3.346-3.062-6.1-6.389-6.647a7.782 7.782 0 0 0-8.98 8.976c.543 3.325 3.286 5.964 6.624 6.398a7.768 7.768 0 0 0 4.63-.811 1.114 1.114 0 0 1 1.337.23l4.202 4.54c.734.793 2.046.736 2.738-.133.597-.75.426-1.86-.282-2.503Zm-8.41-8.713c0 .222-.181.402-.403.402H7.039a.401.401 0 0 1-.402-.402v-.606c0-.222.18-.401.402-.401h5.503c.222 0 .402.18.402.401v.606Z",fill:"currentColor"})}))};cr.displayName="SvgZoomOutFill";var Xs=cr;function Js(se,I){return tl(se)||ol(se,I)||el(se,I)||qs()}function qs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function el(se,I){if(!!se){if(typeof se=="string")return dr(se,I);var co=Object.prototype.toString.call(se).slice(8,-1);if(co==="Object"&&se.constructor&&(co=se.constructor.name),co==="Map"||co==="Set")return Array.from(se);if(co==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(co))return dr(se,I)}}function dr(se,I){(I==null||I>se.length)&&(I=se.length);for(var co=0,Po=new Array(I);co<I;co++)Po[co]=se[co];return Po}function ol(se,I){var co=se==null?null:typeof Symbol!="undefined"&&se[Symbol.iterator]||se["@@iterator"];if(co!=null){var Po=[],No=!0,at=!1,it,fr;try{for(co=co.call(se);!(No=(it=co.next()).done)&&(Po.push(it.value),!(I&&Po.length===I));No=!0);}catch(nl){at=!0,fr=nl}finally{try{!No&&co.return!=null&&co.return()}finally{if(at)throw fr}}return Po}}function tl(se){if(Array.isArray(se))return se}var rl=`import React from 'react';
import * as Icons from '../src';

export default {
  title: '@co-design/icons',
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

interface IconCardProps {
  children: React.ReactChild;
  name: string;
}

const IconCard = ({ children, name }: IconCardProps) => {
  return (
    <div
      style={{
        display: 'inline-block',
        height: 80,
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 8,
        margin: 8,
        padding: 8,
      }}
    >
      <div>{children}</div>
      <div>{name}</div>
    </div>
  );
};

export const Default = (props) => {
  return (
    <div style={{ color: props.color }}>
      <div>{Object.keys(Icons).length} icons</div>
      {Object.entries(Icons).map(([name, Icon], index) => {
        return (
          <IconCard key={index} name={name}>
            <Icon style={{ width: 32, height: 32 }} />
          </IconCard>
        );
      })}
    </div>
  );
};
`,sl={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:50},startBody:{col:23,line:37},endBody:{col:1,line:50}}},ll=p.default={parameters:{storySource:{source:`import React from 'react';
import * as Icons from '../src';

export default {
  title: '@co-design/icons',
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

interface IconCardProps {
  children: React.ReactChild;
  name: string;
}

const IconCard = ({ children, name }: IconCardProps) => {
  return (
    <div
      style={{
        display: 'inline-block',
        height: 80,
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 8,
        margin: 8,
        padding: 8,
      }}
    >
      <div>{children}</div>
      <div>{name}</div>
    </div>
  );
};

export const Default = (props) => {
  return (
    <div style={{ color: props.color }}>
      <div>{Object.keys(Icons).length} icons</div>
      {Object.entries(Icons).map(([name, Icon], index) => {
        return (
          <IconCard key={index} name={name}>
            <Icon style={{ width: 32, height: 32 }} />
          </IconCard>
        );
      })}
    </div>
  );
};
`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:50},startBody:{col:23,line:37},endBody:{col:1,line:50}}}}},title:"@co-design/icons",argTypes:{color:{control:{type:"color"}}}},ur=function(I){var co=I.children,Po=I.name;return Object(o.jsxs)("div",{style:{display:"inline-block",height:80,textAlign:"center",border:"1px solid black",borderRadius:8,margin:8,padding:8},children:[Object(o.jsx)("div",{children:co}),Object(o.jsx)("div",{children:Po})]})};ur.displayName="IconCard";var mr=function(I){return Object(o.jsxs)("div",{style:{color:I.color},children:[Object(o.jsxs)("div",{children:[Object.keys(x).length," icons"]}),Object.entries(x).map(function(co,Po){var No=Js(co,2),at=No[0],it=No[1];return Object(o.jsx)(ur,{name:at,children:Object(o.jsx)(it,{style:{width:32,height:32}})},Po)})]})};mr.displayName="Default"},"./packages/co-design-styled/src/stories/Styled.stories.tsx":function(he,p,e){"use strict";e.r(p),e.d(p,"Tag",function(){return j}),e.d(p,"Component",function(){return _}),e.d(p,"TaggedLiteral",function(){return c}),e.d(p,"Ref",function(){return n});var x=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./node_modules/react/index.js"),ce=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.array.reduce.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),te=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),oe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],G=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./packages/co-design-styles/src/tss/useCss.ts"),q=e("./node_modules/react/jsx-runtime.js"),L=["component","className","style","co"];function k(t,r){if(t==null)return{};var u=B(t,r),l,h;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(t);for(h=0;h<E.length;h++)l=E[h],!(r.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,l)||(u[l]=t[l]))}return u}function B(t,r){if(t==null)return{};var u={},l=Object.keys(t),h,E;for(E=0;E<l.length;E++)h=l[E],!(r.indexOf(h)>=0)&&(u[h]=t[h]);return u}var o=function(r,u){return typeof r=="function"?r(u):r},M=Object(Q.forwardRef)(function(t,r){var u=t.component,l=t.className,h=t.style,E=t.co,S=k(t,L),C=Object(N.a)(),R=C.css,A=C.cx,$=Object(te.c)(),me=u||"div";return Object(q.jsx)(me,Object.assign({ref:r,className:A(l,R(o(E,$))),style:h},S))}),b=function(r){return function(u){for(var l=arguments.length,h=new Array(l>1?l-1:0),E=1;E<l;E++)h[E-1]=arguments[E];return Object(Q.forwardRef)(function(S,C){var R=Object(te.c)(),A=Array.isArray(u)?u.reduce(function($,me,ge){return $+me+(h[ge]&&(typeof h[ge]=="function"?h[ge]({props:S,theme:R}):h[ge])||"")},""):typeof u=="function"?u({props:S,theme:R}):u;return Object(q.jsx)(M,Object.assign({},S,{ref:C,component:r,co:A}))})}};oe.forEach(function(t){b[t]=b(t)});var O=b,P,T,U;function d(t,r){return r||(r=t.slice(0)),t.raw=r,t}var m=`import React, { useEffect, useRef } from 'react';
import styled from '../styled';

export default {
  title: '@co-design/styled',
};

export const Tag = () => {
  return (
    <div>
      <StyledDiv>Styled Div</StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div\`
  color: \${({ theme }) => theme.palettes.purple[6]};
\`;

export const Component = () => {
  return (
    <div>
      <StyledComponent color="red">Styled Component</StyledComponent>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  color: string;
}

const CustomDiv = (props: Props) => {
  return <div {...props} />;
};

const StyledComponent = styled(CustomDiv)(({ props, theme }) => ({
  color: props.color,
  backgroundColor: theme.palettes.blue[3],
}));

export const TaggedLiteral = () => {
  return (
    <div>
      <TaggedDiv color="blue">Tagged Literal</TaggedDiv>
    </div>
  );
};

const borderColor = '#aaa';
const TaggedDiv = styled(CustomDiv)\`
  border: 4px solid \${borderColor};
  color: \${({ props }) => props.color};
  background-color: \${({ theme }) => theme.palettes.red[3]};
\`;

export const Ref = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log(ref);
  }, [ref.current]);

  return (
    <div>
      <Div color="blue" ref={ref}>
        Div
      </Div>
    </div>
  );
};

const Div = styled.div\`
  color: red;
\`;
`,y={Tag:{startLoc:{col:19,line:8},endLoc:{col:1,line:14},startBody:{col:19,line:8},endBody:{col:1,line:14}},Component:{startLoc:{col:25,line:20},endLoc:{col:1,line:26},startBody:{col:25,line:20},endBody:{col:1,line:26}},TaggedLiteral:{startLoc:{col:29,line:42},endLoc:{col:1,line:48},startBody:{col:29,line:42},endBody:{col:1,line:48}},Ref:{startLoc:{col:19,line:57},endLoc:{col:1,line:71},startBody:{col:19,line:57},endBody:{col:1,line:71}}},f=p.default={parameters:{storySource:{source:`import React, { useEffect, useRef } from 'react';
import styled from '../styled';

export default {
  title: '@co-design/styled',
};

export const Tag = () => {
  return (
    <div>
      <StyledDiv>Styled Div</StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div\`
  color: \${({ theme }) => theme.palettes.purple[6]};
\`;

export const Component = () => {
  return (
    <div>
      <StyledComponent color="red">Styled Component</StyledComponent>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  color: string;
}

const CustomDiv = (props: Props) => {
  return <div {...props} />;
};

const StyledComponent = styled(CustomDiv)(({ props, theme }) => ({
  color: props.color,
  backgroundColor: theme.palettes.blue[3],
}));

export const TaggedLiteral = () => {
  return (
    <div>
      <TaggedDiv color="blue">Tagged Literal</TaggedDiv>
    </div>
  );
};

const borderColor = '#aaa';
const TaggedDiv = styled(CustomDiv)\`
  border: 4px solid \${borderColor};
  color: \${({ props }) => props.color};
  background-color: \${({ theme }) => theme.palettes.red[3]};
\`;

export const Ref = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log(ref);
  }, [ref.current]);

  return (
    <div>
      <Div color="blue" ref={ref}>
        Div
      </Div>
    </div>
  );
};

const Div = styled.div\`
  color: red;
\`;
`,locationsMap:{tag:{startLoc:{col:19,line:8},endLoc:{col:1,line:14},startBody:{col:19,line:8},endBody:{col:1,line:14}},component:{startLoc:{col:25,line:20},endLoc:{col:1,line:26},startBody:{col:25,line:20},endBody:{col:1,line:26}},"tagged-literal":{startLoc:{col:29,line:42},endLoc:{col:1,line:48},startBody:{col:29,line:42},endBody:{col:1,line:48}},ref:{startLoc:{col:19,line:57},endLoc:{col:1,line:71},startBody:{col:19,line:57},endBody:{col:1,line:71}}}}},title:"@co-design/styled"},j=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(D,{children:"Styled Div"})})};j.displayName="Tag";var D=O.div(P||(P=d([`
  color: `,`;
`])),function(t){var r=t.theme;return r.palettes.purple[6]}),_=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(s,{color:"red",children:"Styled Component"})})};_.displayName="Component";var a=function(r){return Object(q.jsx)("div",Object.assign({},r))};a.displayName="CustomDiv";var s=O(a)(function(t){var r=t.props,u=t.theme;return{color:r.color,backgroundColor:u.palettes.blue[3]}}),c=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(g,{color:"blue",children:"Tagged Literal"})})};c.displayName="TaggedLiteral";var i="#aaa",g=O(a)(T||(T=d([`
  border: 4px solid `,`;
  color: `,`;
  background-color: `,`;
`])),i,function(t){var r=t.props;return r.color},function(t){var r=t.theme;return r.palettes.red[3]}),n=function(){var r=Object(Q.useRef)();return Object(Q.useEffect)(function(){console.log(r)},[r.current]),Object(q.jsx)("div",{children:Object(q.jsx)(v,{color:"blue",ref:r,children:"Div"})})};n.displayName="Ref";var v=O.div(U||(U=d([`
  color: red;
`])))},"./packages/co-design-styles/src/theme/CoProvider.tsx":function(he,p,e){"use strict";e.d(p,"c",function(){return N}),e.d(p,"d",function(){return q}),e.d(p,"b",function(){return L}),e.d(p,"a",function(){return B});var x=e("./node_modules/react/index.js"),w=e("./packages/co-design-styles/src/theme/defaultTheme.ts"),Q=e("./node_modules/core-js/modules/es.array.reduce.js"),ce=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js");function X(o,M){return M?Object.keys(o).reduce(function(b,O){if(O==="headings"&&M.headings){var P=M.headings?Object.keys(o.headings).reduce(function(T,U){return T[U]=Object.assign({},o.headings[U],M.headings[U]),T},{}):o.headings;return Object.assign({},b,{headings:Object.assign({},o.headings,M.headings,P)})}return b[O]=typeof M[O]=="object"?Object.assign({},o[O],M[O]):M[O]||o[O],b},{}):o}var ee=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),te=e("./node_modules/react/jsx-runtime.js"),oe={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},G=function(){return Object(te.jsx)(ee.a,{styles:oe})};G.displayName="NormalizeCSS";var K=function(M){var b=M.styles,O=N();return Object(te.jsx)(ee.a,{styles:Object(ee.b)(b(O))})};K.displayName="Global";var W=Object(x.createContext)({theme:w.b,styles:{},emotionOptions:{key:"co",prepend:!0}});function N(){var o;return((o=Object(x.useContext)(W))===null||o===void 0?void 0:o.theme)||w.b}function q(){var o;return((o=Object(x.useContext)(W))===null||o===void 0?void 0:o.styles)||{}}function L(){var o;return((o=Object(x.useContext)(W))===null||o===void 0?void 0:o.emotionOptions)||{key:"co",prepend:!0}}var k=function(){return Object(te.jsx)(K,{styles:function(b){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:b.fontFamily,backgroundColor:b.colorScheme==="dark"?b.colors.darkBackground:b.colors.lightBackground,color:b.colorScheme==="dark"?b.palettes.gray[0]:b.palettes.gray[9],lineHeight:b.lineHeight,fontSizes:b.fontSizes.medium}}}})};k.displayName="GlobalStyles";var B=function(M){var b=M.theme,O=M.styles,P=O===void 0?{}:O,T=M.emotionOptions,U=M.withNormalizeCSS,d=U===void 0?!1:U,m=M.withGlobalStyles,y=m===void 0?!1:m,f=M.children;return Object(te.jsxs)(W.Provider,{value:{theme:X(w.b,b),styles:P,emotionOptions:T},children:[d&&Object(te.jsx)(G,{}),y&&Object(te.jsx)(k,{}),f]})};B.displayName="CoProvider",B.displayName="@co-design/styles/CoProvider"},"./packages/co-design-styles/src/theme/defaultTheme.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return F}),e.d(p,"c",function(){return J}),e.d(p,"b",function(){return de});var x=e("./node_modules/core-js/modules/es.object.keys.js"),w={dark:["#EBEBEC","#C3C4C6","#9A9BA1","#71747C","#54575F","#474A52","#383B43","#2F3137","#23252A","#1A1B1F"],gray:["#FCFCFD","#F6F7F9","#E9EBF0","#D5DADF","#9BA3AE","#7D838F","#5D636D","#343942","#232830","#171B24"],purple:["#F6F2FF","#E8DAFF","#D4BBFF","#BE95FF","#A56EFF","#8A3FFC","#6929C4","#491D8B","#31135E","#200050"],blue:["#EDF5FF","#D0E2FF","#A6C8FF","#78A9FF","#4589FF","#0F62FE","#0043CE","#002D9C","#001D6C","#011754"],red:["#FFF1F1","#FFD7D9","#FFB3B8","#FF8389","#FA4D56","#DA1E28","#A2191F","#750E13","#570408","#420003"],orange:["#FFF9F2","#FADFC3","#F3C087","#F6A851","#ED8C23","#E07602","#A65701","#8B4901","#673401","#4A2700"],green:["#EFFFF4","#C9F4D8","#96E2B0","#68D08C","#3FB768","#24AD53","#1B803E","#0E5B28","#0C3F1D","#003412"]},Q={transparent:"transparent",white:"#FFFFFF",black:"#000000",lightBackground:"#FFFFFF",lightBorder:"#E9EBF0",darkBackground:"#212121",darkBorder:"#424242"},ce={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Y={tiny:11,xsmall:12,small:14,medium:16,large:18,xlarge:20},X={small:2,medium:4,large:8,round:9999,circular:"50%"},ee={xsmall:4,small:8,medium:16,large:24,xlarge:40},te={xsmall:576,small:768,medium:1024,large:1408,xlarge:1736},oe={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},G={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},K={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},W=e("./node_modules/core-js/modules/es.object.assign.js"),N=function(ie){for(var Ce="",De=1;De<ie.length-1;De+=1)Ce+=ie[De]+" "+De/(ie.length-1)*100+"%, ";return ie[0]+" 0%, "+Ce+ie[ie.length-1]+" 100%"},q=function(ie){for(var Ce=arguments.length,De=new Array(Ce>1?Ce-1:0),Te=1;Te<Ce;Te++)De[Te-1]=arguments[Te];return"linear-gradient("+ie+"deg, "+N(De)+")"},L=function(){for(var ie=arguments.length,Ce=new Array(ie),De=0;De<ie;De++)Ce[De]=arguments[De];return"radial-gradient(circle, "+N(Ce)+")"},k=function(ie){return typeof ie.size=="number"?ie.size:ie.sizes[ie.size]||ie.size||ie.sizes.medium},B=function(ie){return function(Ce){return"@media (min-width: "+(k({size:Ce,sizes:ie.breakpoints})+1)+"px)"}},o=function(ie){return function(Ce){return"@media (max-width: "+k({size:Ce,sizes:ie.breakpoints})+"px)"}},M=e("./node_modules/core-js/modules/es.string.replace.js"),b=e("./node_modules/core-js/modules/es.regexp.exec.js"),O=e("./node_modules/core-js/modules/es.number.is-nan.js"),P=e("./node_modules/core-js/modules/es.number.constructor.js"),T=e("./node_modules/core-js/modules/es.parse-int.js"),U=e("./node_modules/core-js/modules/es.array.map.js"),d=e("./node_modules/core-js/modules/es.string.split.js"),m=e("./node_modules/core-js/modules/es.string.starts-with.js"),y=e("./node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/core-js/modules/es.symbol.js"),j=e("./node_modules/core-js/modules/es.symbol.description.js"),D=e("./node_modules/core-js/modules/es.object.to-string.js"),_=e("./node_modules/core-js/modules/es.symbol.iterator.js"),a=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),c=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/core-js/modules/es.array.slice.js"),g=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js");function v(ne,ie){return h(ne)||l(ne,ie)||r(ne,ie)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(ne,ie){if(!!ne){if(typeof ne=="string")return u(ne,ie);var Ce=Object.prototype.toString.call(ne).slice(8,-1);if(Ce==="Object"&&ne.constructor&&(Ce=ne.constructor.name),Ce==="Map"||Ce==="Set")return Array.from(ne);if(Ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ce))return u(ne,ie)}}function u(ne,ie){(ie==null||ie>ne.length)&&(ie=ne.length);for(var Ce=0,De=new Array(ie);Ce<ie;Ce++)De[Ce]=ne[Ce];return De}function l(ne,ie){var Ce=ne==null?null:typeof Symbol!="undefined"&&ne[Symbol.iterator]||ne["@@iterator"];if(Ce!=null){var De=[],Te=!0,Ve=!1,Ue,Ke;try{for(Ce=Ce.call(ne);!(Te=(Ue=Ce.next()).done)&&(De.push(Ue.value),!(ie&&De.length===ie));Te=!0);}catch(Ze){Ve=!0,Ke=Ze}finally{try{!Te&&Ce.return!=null&&Ce.return()}finally{if(Ve)throw Ke}}return De}}function h(ne){if(Array.isArray(ne))return ne}var E=function(ie){var Ce=ie.replace("#","");return typeof Ce=="string"&&Ce.length===6&&!Number.isNaN(Number("0x"+Ce))},S=function(ie){var Ce=ie.replace("#",""),De=parseInt(Ce,16),Te=De>>16&255,Ve=De>>8&255,Ue=De&255;return{r:Te,g:Ve,b:Ue,a:1}},C=function(ie){var Ce=ie.replace(/[^0-9,.]/g,"").split(",").map(Number),De=v(Ce,4),Te=De[0],Ve=De[1],Ue=De[2],Ke=De[3];return{r:Te,g:Ve,b:Ue,a:Ke||1}},R=function(ie){return E(ie)?S(ie):ie.startsWith("rgb")?C(ie):{r:0,g:0,b:0,a:1}},A=function(ie,Ce){if(typeof ie!="string"||Ce>1||Ce<0)return"rgba(0, 0, 0, 1)";var De=R(ie),Te=De.r,Ve=De.g,Ue=De.b;return"rgba("+Te+", "+Ve+", "+Ue+", "+Ce+")"},$=function(ie,Ce){var De=R(ie),Te=De.r,Ve=De.g,Ue=De.b,Ke=De.a,Ze=1-Ce,ze=function(ye){return Math.round(ye*Ze)};return"rgba("+ze(Te)+", "+ze(Ve)+", "+ze(Ue)+", "+Ke+")"},me=function(ie,Ce){var De=R(ie),Te=De.r,Ve=De.g,Ue=De.b,Ke=De.a,Ze=function(re){return Math.round(re+(255-re)*Ce)};return"rgba("+Ze(Te)+", "+Ze(Ve)+", "+Ze(Ue)+", "+Ke+")"},ge=function(ie){return ie*8},je={linearGradient:q,radialGradient:L,smallerThan:o,largerThan:B,rgba:A,size:k,darken:$,lighten:me,spacing:ge},H=function(ie){return Object.assign({},ie,{fn:{largerThan:je.largerThan(ie),smallerThan:je.smallerThan(ie),radialGradient:je.radialGradient,linearGradient:je.linearGradient,rgba:je.rgba,size:je.size,lighten:je.lighten,darken:je.darken,spacing:je.spacing}})},le=Object.keys(w),pe=Object.keys(Q),F=["xsmall","small","medium","large","xlarge"],J=function(ie){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ie.fontFamily||"sans-serif"}},Z={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"purple",colors:Q,palettes:w,shadows:ce,fontSizes:Y,radius:X,spacing:ee,breakpoints:te,headings:oe,opacity:G,zIndex:K,extra:{}},de=H(Z)},"./packages/co-design-styles/src/tss/createStyles.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return y});var x=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.map.js"),Q=e("./node_modules/core-js/modules/es.object.keys.js"),ce=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),te=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function k(f,j){return O(f)||b(f,j)||o(f,j)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(f,j){if(!!f){if(typeof f=="string")return M(f,j);var D=Object.prototype.toString.call(f).slice(8,-1);if(D==="Object"&&f.constructor&&(D=f.constructor.name),D==="Map"||D==="Set")return Array.from(f);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return M(f,j)}}function M(f,j){(j==null||j>f.length)&&(j=f.length);for(var D=0,_=new Array(j);D<j;D++)_[D]=f[D];return _}function b(f,j){var D=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(D!=null){var _=[],a=!0,s=!1,c,i;try{for(D=D.call(f);!(a=(c=D.next()).done)&&(_.push(c.value),!(j&&_.length===j));a=!0);}catch(g){s=!0,i=g}finally{try{!a&&D.return!=null&&D.return()}finally{if(s)throw i}}return _}}function O(f){if(Array.isArray(f))return f}function P(f){var j={};return Object.keys(f).forEach(function(D){var _=k(f[D],2),a=_[0],s=_[1];j[a]=s}),j}var T=e("./packages/co-design-styles/src/tss/useCss.ts"),U=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),d=e("./node_modules/core-js/modules/es.array.reduce.js");function m(f,j,D){return Object.keys(j).reduce(function(_,a){return _[a]=f(j[a],D?"co-"+D+"-"+a:null),_},{})}function y(f){var j=typeof f=="function"?f:function(){return f};function D(_,a){var s=Object(U.c)(),c=Object(U.d)()[a==null?void 0:a.name],i=Object(T.a)(),g=i.css,n=i.cx,v=0;function t(S){return v+=1,"co-ref_"+(S||"")+"_"+v}var r=j(s,_,t),u=typeof(a==null?void 0:a.overrideStyles)=="function"?a==null?void 0:a.overrideStyles(s):(a==null?void 0:a.overrideStyles)||{},l=typeof c=="function"?c(s):c||{},h=typeof(a==null?void 0:a.co)=="function"?a.co(s):a==null?void 0:a.co,E=P(Object.keys(r).map(function(S){var C=n(g(r[S]),g(l[S]),g(u[S]),g(h));return[S,C]}));return{classes:m(n,E,a==null?void 0:a.name),cx:n,theme:s}}return D}},"./packages/co-design-styles/src/tss/useCss.ts":function(he,p,e){"use strict";e.d(p,"a",function(){return E});var x=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),ce=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),te=e("./node_modules/core-js/modules/es.string.iterator.js"),oe=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./node_modules/clsx/dist/clsx.m.js"),q=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),L=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),k=e("./node_modules/core-js/modules/es.array.index-of.js"),B=e("./node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/react/index.js");function M(S){return T(S)||P(S)||O(S)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(S,C){if(!!S){if(typeof S=="string")return U(S,C);var R=Object.prototype.toString.call(S).slice(8,-1);if(R==="Object"&&S.constructor&&(R=S.constructor.name),R==="Map"||R==="Set")return Array.from(S);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return U(S,C)}}function P(S){if(typeof Symbol!="undefined"&&S[Symbol.iterator]!=null||S["@@iterator"]!=null)return Array.from(S)}function T(S){if(Array.isArray(S))return U(S)}function U(S,C){(C==null||C>S.length)&&(C=S.length);for(var R=0,A=new Array(C);R<C;R++)A[R]=S[R];return A}function d(S,C){var R=Object(o.useRef)();return(!R.current||C.length!==R.current.prevDeps.length||R.current.prevDeps.map(function(A,$){return A===C[$]}).indexOf(!1)>=0)&&(R.current={v:S(),prevDeps:M(C)}),R.current.v}var m=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),y=e("./packages/co-design-styles/src/theme/CoProvider.tsx"),f=e("./node_modules/react/jsx-runtime.js"),j=function(){var S;function C(R){return S===void 0&&(S=Object(m.a)(R||{key:"co",prepend:!0})),S}return{getCache:C}}(),D=j.getCache,_=Object(o.createContext)(void 0);function a(){var S=Object(y.b)();return Object(o.useContext)(_)||D(S)}function s(S){var C=S.children,R=S.value;return Object(f.jsx)(_.Provider,{value:R,children:C})}s.displayName="CacheProvider";function c(S,C){return t(S)||v(S,C)||g(S,C)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(S,C){if(!!S){if(typeof S=="string")return n(S,C);var R=Object.prototype.toString.call(S).slice(8,-1);if(R==="Object"&&S.constructor&&(R=S.constructor.name),R==="Map"||R==="Set")return Array.from(S);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return n(S,C)}}function n(S,C){(C==null||C>S.length)&&(C=S.length);for(var R=0,A=new Array(C);R<C;R++)A[R]=S[R];return A}function v(S,C){var R=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(R!=null){var A=[],$=!0,me=!1,ge,je;try{for(R=R.call(S);!($=(ge=R.next()).done)&&(A.push(ge.value),!(C&&A.length===C));$=!0);}catch(H){me=!0,je=H}finally{try{!$&&R.return!=null&&R.return()}finally{if(me)throw je}}return A}}function t(S){if(Array.isArray(S))return S}var r="ref";function u(S){var C;if(S.length!==1)return{args:S,ref:C};var R=c(S,1),A=R[0];if(!(A instanceof Object))return{args:S,ref:C};if(!(r in A))return{args:S,ref:C};C=A[r];var $=Object.assign({},A);return delete $[r],{args:[$],ref:C}}var l=function(){function S(R,A,$){var me=[],ge=Object(L.a)(R,me,$);return me.length<2?$:ge+A(me)}function C(R){var A=R.cache,$=function(){for(var je=arguments.length,H=new Array(je),le=0;le<je;le++)H[le]=arguments[le];var pe=u(H),F=pe.ref,J=pe.args,Z=Object(q.a)(J,A.registered);return Object(L.b)(A,Z,!1),A.key+"-"+Z.name+(F===void 0?"":" "+F)},me=function(){for(var je=arguments.length,H=new Array(je),le=0;le<je;le++)H[le]=arguments[le];return S(A.registered,$,Object(N.a)(H))};return{css:$,cx:me}}return{cssFactory:C}}(),h=l.cssFactory;function E(){var S=a();return d(function(){return h({cache:S})},[S])}},"./storybook-init-framework-entry.js":function(he,p,e){"use strict";e.r(p);var x=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(he,p,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),he.exports=e("./generated-stories-entry.js")},1:function(he,p){}},[[0,4,5]]]);
