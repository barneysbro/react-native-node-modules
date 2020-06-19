"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.SafeAreaProvider=SafeAreaProvider;exports.useSafeAreaInsets=useSafeAreaInsets;exports.useSafeAreaFrame=useSafeAreaFrame;exports.withSafeAreaInsets=withSafeAreaInsets;exports.useSafeArea=useSafeArea;exports.SafeAreaContext=exports.SafeAreaConsumer=exports.SafeAreaFrameContext=exports.SafeAreaInsetsContext=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _NativeSafeAreaProvider=_interopRequireDefault(require("./NativeSafeAreaProvider"));var _jsxFileName="/Users/janic/Developer/react-native-safe-area-context/src/SafeAreaContext.tsx";var SafeAreaInsetsContext=React.createContext(null);exports.SafeAreaInsetsContext=SafeAreaInsetsContext;var SafeAreaFrameContext=React.createContext(null);exports.SafeAreaFrameContext=SafeAreaFrameContext;function SafeAreaProvider(_ref){var _ref2,_ref3,_initialMetrics$inset,_ref4,_initialMetrics$frame;var children=_ref.children,initialMetrics=_ref.initialMetrics,initialSafeAreaInsets=_ref.initialSafeAreaInsets;var parentInsets=useParentSafeAreaInsets();var parentFrame=useParentSafeAreaFrame();var _React$useState=React.useState((_ref2=(_ref3=(_initialMetrics$inset=initialMetrics===null||initialMetrics===void 0?void 0:initialMetrics.insets)!==null&&_initialMetrics$inset!==void 0?_initialMetrics$inset:initialSafeAreaInsets)!==null&&_ref3!==void 0?_ref3:parentInsets)!==null&&_ref2!==void 0?_ref2:null),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),insets=_React$useState2[0],setInsets=_React$useState2[1];var _React$useState3=React.useState((_ref4=(_initialMetrics$frame=initialMetrics===null||initialMetrics===void 0?void 0:initialMetrics.frame)!==null&&_initialMetrics$frame!==void 0?_initialMetrics$frame:parentFrame)!==null&&_ref4!==void 0?_ref4:{x:0,y:0,width:_reactNative.Dimensions.get('window').width,height:_reactNative.Dimensions.get('window').height}),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),frame=_React$useState4[0],setFrame=_React$useState4[1];var onInsetsChange=React.useCallback(function(event){if(event.nativeEvent.frame!=null){setFrame(event.nativeEvent.frame);}setInsets(event.nativeEvent.insets);},[]);return React.createElement(_NativeSafeAreaProvider.default,{style:styles.fill,onInsetsChange:onInsetsChange,__self:this,__source:{fileName:_jsxFileName,lineNumber:50,columnNumber:5}},insets!=null?React.createElement(SafeAreaFrameContext.Provider,{value:frame,__self:this,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:9}},React.createElement(SafeAreaInsetsContext.Provider,{value:insets,__self:this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:11}},children)):null);}var styles=_reactNative.StyleSheet.create({fill:{flex:1}});function useParentSafeAreaInsets(){return React.useContext(SafeAreaInsetsContext);}function useParentSafeAreaFrame(){return React.useContext(SafeAreaFrameContext);}function useSafeAreaInsets(){var safeArea=React.useContext(SafeAreaInsetsContext);if(safeArea==null){throw new Error('No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');}return safeArea;}function useSafeAreaFrame(){var frame=React.useContext(SafeAreaFrameContext);if(frame==null){throw new Error('No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');}return frame;}function withSafeAreaInsets(WrappedComponent){var _this=this;return function(props){return React.createElement(SafeAreaConsumer,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:5}},function(insets){return React.createElement(WrappedComponent,(0,_extends2.default)({},props,{insets:insets,__self:_this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:20}}));});};}function useSafeArea(){return useSafeAreaInsets();}var SafeAreaConsumer=SafeAreaInsetsContext.Consumer;exports.SafeAreaConsumer=SafeAreaConsumer;var SafeAreaContext=SafeAreaInsetsContext;exports.SafeAreaContext=SafeAreaContext;
//# sourceMappingURL=SafeAreaContext.js.map