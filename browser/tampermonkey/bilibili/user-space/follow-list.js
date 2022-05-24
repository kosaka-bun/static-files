// ==UserScript==
// @name         bilibili个人空间关注列表增强
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  bilibili个人空间关注列表增强
// @author       Kosaka Bun
// @match        *://space.bilibili.com/*/fans/follow*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let checkAndDoScript = function(count) {
        setTimeout(function() {
            if(count > 30) return;
            let followedUserDomList = document.querySelectorAll(
                '.fans-action');
            if(followedUserDomList == null || followedUserDomList.length <= 0) {
                checkAndDoScript(count + 1);
                return;
            }
            doScript();
        }, 3 * 100);
    };
    let doScript = function() {
        let followedUserDomList = document.querySelectorAll('.fans-action');
        for(let i = 1; i <= followedUserDomList.length; i++) {
            let dom = followedUserDomList[i];
            let unfollowBtnHtml = `<div class="fans-action-btn follow">
            <span class="fans-action-text my-btn" index="${i}">取关</span>
            </div>`;
            dom.innerHTML = unfollowBtnHtml + dom.innerHTML;
        }
    };
    checkAndDoScript(0);
})();