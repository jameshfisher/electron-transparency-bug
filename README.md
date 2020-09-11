# electron-transparency-bug

Minimal example of a bug in Electron window transparency. To reproduce the bug, use

* **Electron Version:** v10.1.1
* **Operating System:** Windows 10 Build 18363

Then run:

```sh
$ git clone git@github.com:jameshfisher/electron-transparency-bug.git
$ cd electron-transparency-bug
$ npm install
$ npm start
```

This will display a partially transparent green window. You can use drag-and-drop to move this window around.

Move the window partially above the display area, so that the top of the window is chopped off. Then move it back. So far, OK.

Then move the window partially to the left of the display area, so the left side of the window is chopped off. Then move it back.

### Expected Behavior

When the window is moved back into the display area, its background is still transparent.

### Actual Behavior

Uh-oh! The window now has an ugly black section, where the transparent window background has been replaced with black.

### Screenshots
<!-- If applicable, add screenshots to help explain your problem. -->

### Additional Information

* https://github.com/electron/electron/issues/16212 sounds related, but different.
