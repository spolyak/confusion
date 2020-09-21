npx react-native run-ios
yarn cache clean
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios

confusion % node node_modules/react-native/local-cli/cli.js bundle --entry-file='index.ios.js' --bundle-output='./ios/confusion/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'

Run instructions for iOS:
    • cd "/Users/spolyak/git/confusion/confusion" && npx react-native run-ios
    - or -
    • Open confusion/ios/confusion.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/spolyak/git/confusion/confusion" && npx react-native run-android
