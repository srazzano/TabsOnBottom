// ==UserScript==
// @name                 Tabs On Bottom
// @version              1.0
// @description          Toggles tabs on bottom.
// ==/UserScript==

(function() { 

  "use strict";

  var disableScript = false;

  if (disableScript || location != "chrome://browser/content/browser.xul") return;

  var bbb = document.getElementById("browser-bottombox"),
      ttb = document.getElementById("TabsToolbar");
  bbb.appendChild(ttb);

})();
