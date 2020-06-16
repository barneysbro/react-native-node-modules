# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require "json"

version = "0.62.2"

source = { :git => 'https://github.com/facebook/react-native.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip
else
  source[:tag] = "v#{version}"
end

folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'
folly_version = '2018.10.22.00'
boost_compiler_flags = '-Wno-documentation'

base_dir = "node_modules/react-native/"

header_subspecs = {
  'ARTHeaders'                  => base_dir + 'Libraries/ART/**/*.h',
  'CoreModulesHeaders'          => base_dir + 'React/CoreModules/**/*.h',
  'RCTActionSheetHeaders'       => base_dir + 'Libraries/ActionSheetIOS/*.h',
  'RCTAnimationHeaders'         => base_dir + 'Libraries/NativeAnimation/{Drivers/*,Nodes/*,*}.{h}',
  'RCTBlobHeaders'              => base_dir + 'Libraries/Blob/{RCTBlobManager,RCTFileReaderModule}.h',
  'RCTImageHeaders'             => base_dir + 'Libraries/Image/*.h',
  'RCTLinkingHeaders'           => base_dir + 'Libraries/LinkingIOS/*.h',
  'RCTNetworkHeaders'           => base_dir + 'Libraries/Network/*.h',
  'RCTPushNotificationHeaders'  => base_dir + 'Libraries/PushNotificationIOS/*.h',
  'RCTSettingsHeaders'          => base_dir + 'Libraries/Settings/*.h',
  'RCTTextHeaders'              => base_dir + 'Libraries/Text/**/*.h',
  'RCTVibrationHeaders'         => base_dir + 'Libraries/Vibration/*.h',
}

Pod::Spec.new do |s|
  s.name                   = "React-Core"
  s.version                = version
  s.summary                = "The core of React Native."
  s.homepage               = "http://facebook.github.io/react-native/"
  s.license                = "MIT"
  s.author                 = "Facebook, Inc. and its affiliates"
  s.platforms              = { :ios => "9.0", :tvos => "9.2" }
  s.source                 = source
  s.compiler_flags         = folly_compiler_flags + ' ' + boost_compiler_flags
  s.header_dir             = "React"
  s.framework              = "JavaScriptCore"
  s.library                = "stdc++"
  s.pod_target_xcconfig    = { "HEADER_SEARCH_PATHS" => "\"$(PODS_TARGET_SRCROOT)/ReactCommon\" \"$(PODS_ROOT)/boost-for-react-native\" \"$(PODS_ROOT)/DoubleConversion\" \"$(PODS_ROOT)/Folly\"" }
  s.user_target_xcconfig   = { "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)/Headers/Private/React-Core\""}
  s.default_subspec        = "Default"

  s.subspec "Default" do |ss|
    ss.source_files           = base_dir + "React/**/*.{c,h,m,mm,S,cpp}"
    ss.exclude_files          = base_dir + "React/CoreModules/**/*",
                                base_dir + "React/DevSupport/**/*",
                                base_dir + "React/Fabric/**/*",
                                base_dir + "React/Inspector/**/*"
    ss.ios.exclude_files      = base_dir + "React/**/RCTTV*.*"
    ss.tvos.exclude_files     = base_dir + "React/Modules/RCTClipboard*",
                                base_dir + "React/Views/RCTDatePicker*",
                                base_dir + "React/Views/RCTPicker*",
                                base_dir + "React/Views/RCTRefreshControl*",
                                base_dir + "React/Views/RCTSlider*",
                                base_dir + "React/Views/RCTSwitch*",
    ss.private_header_files   = base_dir + "React/Cxx*/*.h"
  end

  s.subspec "DevSupport" do |ss|
    ss.source_files = base_dir + "React/DevSupport/*.{h,mm,m}",
                      base_dir + "React/Inspector/*.{h,mm,m}"

    ss.dependency "React-Core/Default", version
    ss.dependency "React-Core/RCTWebSocket", version
    ss.dependency "React-jsinspector", version
  end

  s.subspec "RCTWebSocket" do |ss|
    ss.source_files = base_dir + "Libraries/WebSocket/*.{h,m}"
    ss.dependency "React-Core/Default", version
  end

  # Add a subspec containing just the headers for each
  # pod that should live under <React/*.h>
  header_subspecs.each do |name, headers|
    s.subspec name do |ss|
      ss.source_files = headers
      ss.dependency "React-Core/Default"
    end
  end

  s.dependency "Folly", folly_version
  s.dependency "React-cxxreact", version
  s.dependency "React-jsi", version
  s.dependency "React-jsiexecutor", version
  s.dependency "Yoga"
  s.dependency "glog"
end
