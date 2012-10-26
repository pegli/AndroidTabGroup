Project that reproduces an issue with creating TiViewProxy objects inside a module.  The
call to createLightweightWindow() should create and display a lightweight window attached
to the root activity with a label reading "this is a lightweight window".  The problem is
that the label does not appear in the window.  The createWindow() function in the module
is identical but instead of creating a `BaseWindowProxy` object, it creates an
`ActivityWindowProxy` object and the label shows up.  Stringifying the window's children
show the label object with the proper height and width, but both the size and rect members
contain zero for all properties.

2012-10-25

I missed this line in the debug log earlier:

    [exec] [DEBUG] D/Window  (  911): unable to open, window is not closed

That string is from `modules/ui/src/js/window.js`.  Looking at that JavaScript file, it seems
that the `Ti.UI.createWindow` function is defined there and several critical properties like
`_children` and `currentState` are set in that function.  I think that calling `createWindow()`
from JavaScript runs this code, which then calls into the native code to create either a
TiBaseWindowProxy or ActivityWindowProxy.  This would also explain why I was getting an error
indicating that `_children` was null in `ti:/window.js` when I tried to add a label to a
TBaseWindowProxy created in the module.

I'm stumped at this point.  It appears that we can't create a lightweight window without going 
through window.js.
