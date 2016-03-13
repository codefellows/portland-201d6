'use strict';
// 3 steps to creating an element and adding it to the page
// 1) create the element
// 2) set its atributes and content
// 3) add it to the document

// create a heading tag
var titleHeading = document.createElement('h1');
console.log('titleHeading: ', titleHeading);

// set the titleHeading id and textContent
titleHeading.setAttribute('id', 'title');
titleHeading.textContent = 'Learing to create html elements with javascript';

// add it to the document
document.body.appendChild(titleHeading);

// create a paragraph
var preface = document.createElement('p')
preface.setAttribute('class', 'preface');
preface.textContent = 'I started to develop websites just a few weeks ago, and im allready ...';
document.body.appendChild(preface);

// create a footer with a nav
// setup the footer nav and ul tags
var bodyFooter = document.createElement('footer');
var bodyFooterNav = document.createElement('nav');
var bodyFooterNavUl = document.createElement('ul');

// setup the list elements and anchor tags
var bodyFooterNavUlLiOne = document.createElement('li');
var bodyFooterNavUlLiOneAnchor = document.createElement('a');
var bodyFooterNavUlLiTwo = document.createElement('li');
var bodyFooterNavUlLiTwoAnchor = document.createElement('a');

// set the attributes and text content of the anchor tags
bodyFooterNavUlLiOneAnchor.setAttribute('href', 'index.html')
bodyFooterNavUlLiOneAnchor.textContent = 'do nothing';
bodyFooterNavUlLiTwoAnchor.setAttribute('href', 'index.html')
bodyFooterNavUlLiTwoAnchor.textContent = 'go nowhere';

// add the anchor tags to the list elements
bodyFooterNavUlLiOne.appendChild(bodyFooterNavUlLiOneAnchor);
bodyFooterNavUlLiTwo.appendChild(bodyFooterNavUlLiTwoAnchor);

// add the list elements to the unordered list
bodyFooterNavUl.appendChild(bodyFooterNavUlLiOne);
bodyFooterNavUl.appendChild(bodyFooterNavUlLiTwo);

// add the ul to the nav
bodyFooterNav.appendChild(bodyFooterNavUl);

// add the nav to the footer
bodyFooter.appendChild(bodyFooterNav);

// add the footr to the body
document.body.appendChild(bodyFooter);
