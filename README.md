Project that reproduces an issue with creating TiViewProxy objects inside a module.  The
call to createLightweightWindow() should create and display a lightweight window attached
to the root activity with a label reading "this is a lightweight window".  The problem is
that the label does not appear in the window.  The createWindow() function in the module
is identical but instead of creating a `BaseWindowProxy` object, it creates an
`ActivityWindowProxy` object and the label shows up.  Stringifying the window's children
show the label object with the proper height and width, but both the size and rect members
contain zero for all properties.
