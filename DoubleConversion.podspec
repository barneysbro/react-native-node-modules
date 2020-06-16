# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

Pod::Spec.new do |spec|
  spec.name = 'DoubleConversion'
  spec.version = '1.1.6'
  spec.license = { :type => 'MIT' }
  spec.homepage = 'https://github.com/google/double-conversion'
  spec.summary = 'Efficient binary-decimal and decimal-binary conversion routines for IEEE doubles'
  spec.authors = 'Google'
  spec.prepare_command = 'mv src double-conversion'
  spec.source = { :git => 'https://github.com/google/double-conversion.git',
                  :tag => "v#{spec.version}" }
  spec.module_name = 'DoubleConversion'

  base_dir = "node_modules/react-native/third-party-podspecs/double-conversion/"
  spec.header_dir = base_dir
  spec.source_files = base_dir + '*.{h,cc}'
  spec.compiler_flags = '-Wno-unreachable-code'

  # Pinning to the same version as React.podspec.
  spec.platforms = { :ios => "9.0", :tvos => "9.2" }

end
