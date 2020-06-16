# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

Pod::Spec.new do |spec|
  spec.name = 'glog'
  spec.version = '0.3.5'
  spec.license = { :type => 'Google', :file => 'COPYING' }
  spec.homepage = 'https://github.com/google/glog'
  spec.summary = 'Google logging module'
  spec.authors = 'Google'

  spec.prepare_command = File.read("node_modules/react-native/scripts/ios-configure-glog.sh")
  spec.source = { :git => 'https://github.com/google/glog.git',
                  :tag => "v#{spec.version}" }
  spec.module_name = 'glog'

  base_dir = "node_modules/react-native/third-party-podspecs/glog/"
  spec.header_dir = base_dir
  spec.source_files = base_dir + 'src/glog/*.h',
                      base_dir + 'src/demangle.cc',
                      base_dir + 'src/logging.cc',
                      base_dir + 'src/raw_logging.cc',
                      base_dir + 'src/signalhandler.cc',
                      base_dir + 'src/symbolize.cc',
                      base_dir + 'src/utilities.cc',
                      base_dir + 'src/vlog_is_on.cc'
  # workaround for https://github.com/facebook/react-native/issues/14326
  spec.preserve_paths = base_dir + 'src/*.h',
                        base_dir + 'src/base/*.h'
  spec.exclude_files       = base_dir + 'src/windows/**/*'
  spec.libraries           = "stdc++"
  spec.compiler_flags      = '-Wno-shorten-64-to-32'
  spec.pod_target_xcconfig = { "USE_HEADERMAP" => "NO",
                               "HEADER_SEARCH_PATHS" => "$(PODS_TARGET_SRCROOT)/" + base_dir + "src" }

  # Pinning to the same version as React.podspec.
  spec.platforms = { :ios => "9.0", :tvos => "9.2" }

end
