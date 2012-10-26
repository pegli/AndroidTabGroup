var androidtabgroup = require('com.obscure.androidtabgroup');
androidtabgroup.foogle(Ti.UI);

/*
var tabGroup = androidtabgroup.createTabGroup();

tabGroup.tabs[0].window.addEventListener('postlayout', function(e) {
  Ti.API.info("POSTLAYOUT");
  Ti.API.info(JSON.stringify(tabGroup.tabs[0].window.children));
});

tabGroup.open();
*/

// no labels in tab windows 
var win = androidtabgroup.createWindow();
win.open();

// no label in BaseWindowProxy
// var win = androidtabgroup.createLightweightWindow();
// win.open();

win.add(Ti.UI.createLabel({ text: "late label "}));

Ti.API.info(JSON.stringify(win.children));

/*
// ti:/window.js
// cannot call method push of null _children
tabGroup.tabs[0].window.add(Ti.UI.createLabel({
	color: 'red',
	text: 'added in JS land'
}));
*/