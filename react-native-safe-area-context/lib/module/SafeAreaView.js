var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.SafeAreaView=SafeAreaView;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _SafeAreaContext=require("./SafeAreaContext");var _jsxFileName="/Users/janic/Developer/react-native-safe-area-context/src/SafeAreaView.tsx";var TOP=8,RIGHT=8,BOTTOM=8,LEFT=8,ALL=15;var edgeBitmaskMap={top:8,right:RIGHT,bottom:BOTTOM,left:LEFT};function SafeAreaView(_ref){var style=_ref.style,mode=_ref.mode,edges=_ref.edges,rest=(0,_objectWithoutProperties2.default)(_ref,["style","mode","edges"]);var insets=(0,_SafeAreaContext.useSafeAreaInsets)();var edgeBitmask=edges!=null?edges.reduce(function(accum,edge){return accum|edgeBitmaskMap[edge];},0):ALL;var appliedStyle=React.useMemo(function(){var insetTop=edgeBitmask&TOP?insets.top:0;var insetRight=edgeBitmask&RIGHT?insets.right:0;var insetBottom=edgeBitmask&BOTTOM?insets.bottom:0;var insetLeft=edgeBitmask&LEFT?insets.left:0;var flatStyle=_reactNative.StyleSheet.flatten(style);if(mode==='margin'){var _flatStyle$margin=flatStyle.margin,margin=_flatStyle$margin===void 0?0:_flatStyle$margin,_flatStyle$marginVert=flatStyle.marginVertical,marginVertical=_flatStyle$marginVert===void 0?margin:_flatStyle$marginVert,_flatStyle$marginHori=flatStyle.marginHorizontal,marginHorizontal=_flatStyle$marginHori===void 0?margin:_flatStyle$marginHori,_flatStyle$marginTop=flatStyle.marginTop,marginTop=_flatStyle$marginTop===void 0?marginVertical:_flatStyle$marginTop,_flatStyle$marginRigh=flatStyle.marginRight,marginRight=_flatStyle$marginRigh===void 0?marginHorizontal:_flatStyle$marginRigh,_flatStyle$marginBott=flatStyle.marginBottom,marginBottom=_flatStyle$marginBott===void 0?marginVertical:_flatStyle$marginBott,_flatStyle$marginLeft=flatStyle.marginLeft,marginLeft=_flatStyle$marginLeft===void 0?marginHorizontal:_flatStyle$marginLeft;var marginStyle={marginTop:marginTop+insetTop,marginRight:marginRight+insetRight,marginBottom:marginBottom+insetBottom,marginLeft:marginLeft+insetLeft};return[style,marginStyle];}else{var _flatStyle$padding=flatStyle.padding,padding=_flatStyle$padding===void 0?0:_flatStyle$padding,_flatStyle$paddingVer=flatStyle.paddingVertical,paddingVertical=_flatStyle$paddingVer===void 0?padding:_flatStyle$paddingVer,_flatStyle$paddingHor=flatStyle.paddingHorizontal,paddingHorizontal=_flatStyle$paddingHor===void 0?padding:_flatStyle$paddingHor,_flatStyle$paddingTop=flatStyle.paddingTop,paddingTop=_flatStyle$paddingTop===void 0?paddingVertical:_flatStyle$paddingTop,_flatStyle$paddingRig=flatStyle.paddingRight,paddingRight=_flatStyle$paddingRig===void 0?paddingHorizontal:_flatStyle$paddingRig,_flatStyle$paddingBot=flatStyle.paddingBottom,paddingBottom=_flatStyle$paddingBot===void 0?paddingVertical:_flatStyle$paddingBot,_flatStyle$paddingLef=flatStyle.paddingLeft,paddingLeft=_flatStyle$paddingLef===void 0?paddingHorizontal:_flatStyle$paddingLef;var paddingStyle={paddingTop:paddingTop+insetTop,paddingRight:paddingRight+insetRight,paddingBottom:paddingBottom+insetBottom,paddingLeft:paddingLeft+insetLeft};return[style,paddingStyle];}},[style,insets,mode,edgeBitmask]);return React.createElement(_reactNative.View,(0,_extends2.default)({style:appliedStyle},rest,{__self:this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:10}}));}
//# sourceMappingURL=SafeAreaView.js.map