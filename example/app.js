var androidtabgroup = require('com.obscure.androidtabgroup');

/*
var tabGroup = androidtabgroup.createTabGroup();

tabGroup.tabs[0].window.addEventListener('postlayout', function(e) {
  Ti.API.info("POSTLAYOUT");
  Ti.API.info(JSON.stringify(tabGroup.tabs[0].window.children));
});

tabGroup.open();
*/

// no labels in tab windows 
// var win = androidtabgroup.createWindow();
// win.open();

// no label in BaseWindowProxy
var lw = androidtabgroup.createLightweightWindow();
lw.open(lw);

/*
// ti:/window.js
// cannot call method push of null _children
tabGroup.tabs[0].window.add(Ti.UI.createLabel({
	color: 'red',
	text: 'added in JS land'
}));
*/