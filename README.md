### :point_right: This starter repo has moved to the [ionic-team/starters](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/sidemenu) repo! :point_left:

ionic --version
3.15.2

npm --version
4.0.3

cordova --version
7.1.0



$ npm install -g cordova ionic

//escolha um
$ ionic start myApp tabs
$ ionic start myApp blank
$ ionic start myApp sidemenu

$ ionic serve

build apk http://ionicframework.com/docs/v1/guide/publishing.html

//?
$ ionic cordova plugin rm cordova-plugin-console

//rodar em Android 4.1
$ cordova plugin add cordova-plugin-crosswalk-webview --save

//gerar apk
$ ionic cordova build --release android

//rodar dispositivo ou emulador
$ ionic cordova run android

//? publicar?
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

ionic cordova platform add ios
$ ionic cordova platform add android

$ ionic start myApp sidemenu


*****
config.xml
add <preference name="loadUrlTimeoutValue" value="700000" />
*****
error de compilação crosswalk
So you need use the command of cordova plugin add https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview.git.
We will upgrade the version in the npm as soon as possible.



