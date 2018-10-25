// ==UserScript==
// @name         Show All Kompas.com
// @namespace    https://greasyfork.org/en/users/221437
// @version      0.1
// @description  Instantly show all page for Kompas.com page.
// @author       channelorange
// @match        *://*.kompas.com/*
// @run-at       document-start
// @grant        none
// @compatible   chrome
// @compatible   firefox
// ==/UserScript==

if (window.location.href.toString().indexOf("?page=all") != -1) return false;

var pathLama = window.location.pathname;
if (!/\?page=all$/.test(pathLama)) {
    var pathBaru = pathLama + "?page=all";
    window.location.replace(pathBaru);
}