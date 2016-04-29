// ==UserScript==
// @name  Scratch Canyon
// @namespace     http://stylebot.me/styles/13249
// @description   An awesome new look to https://scratch.mit.edu/
// @include   http://scratch.mit.edu/*
// @include   https://scratch.mit.edu/*
// @author        Booligoosh
// ==/UserScript==
var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = '#comments {    background: linear-gradient( rgba(255, 255, 255, 255), rgba(175, 175, 175, 1) ),;}#footer {    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1) ),;}#pagewrapper {    background-attachment: fixed;    background-image: url('http://booligoosh.github.io/w-background.jpg');    background-position: center center;    background-repeat: no-repeat;    background-size: cover;}#view {    background-attachment: fixed;    background-image: url('http://booligoosh.github.io/w-background.jpg');    background-position: center center;    background-repeat: no-repeat;    background-size: cover;}div.more-replies {    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ),;    border: transparent;    box-shadow: none;}div.splash {    background-attachment: fixed;    background-image: url('http://booligoosh.github.io/w-background.jpg');    background-position: center center;    background-repeat: no-repeat;    background-size: cover;}div.innerwrap {    background: linear-gradient( rgba(15, 139, 192, 255), rgba(15, 139, 192, 0) ),;    border: transparent;}';
document.documentElement.appendChild(styleEl);
