var androidtabgroup = require('com.obscure.androidtabgroup');
androidtabgroup.setCreateWindow(Ti.UI.createWindow);

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
Ti.API.info("pre-open");
androidtabgroup.checkPeekView(win);
win.open();
Ti.API.info("post-open");
androidtabgroup.checkPeekView(win);

// no label in BaseWindowProxy
// var win = androidtabgroup.createLightweightWindow();
// win.open();

win.add(Ti.UI.createLabel({ text: "late label "}));
Ti.API.info("post-add late label");

var label = androidtabgroup.createLabel('late native label');
win.add(label);

Ti.API.info(JSON.stringify(win.children));
androidtabgroup.checkPeekView(win);

/*
// ti:/window.js
// cannot call method push of null _children
tabGroup.tabs[0].window.add(Ti.UI.createLabel({
	color: 'red',
	text: 'added in JS land'
}));
*/