Package.describe({
  name: 'wk:weui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '微信官方ui库',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('weui.js','client');

  api.addFiles([
    'dist/css/jquery-weui.min.css',
    'dist/js/city-picker.min.js',
    'dist/js/jquery-weui.min.js',
    'dist/js/swiper.min.js',
    'dist/lib/fastclick.js',
    'dist/lib/jquery-2.1.4.js',
    'dist/lib/weui.min.css',
    'dist/lib/zepto.js'
  ],'client');

  api.addAssets(['dist/demos/images/icon_nav_panel.png'],'client');
  //api.export('xx');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('wk:weui');
  api.mainModule('weui-tests.js');
});
