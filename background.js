chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 0] });
        chrome.browserAction.setBadgeText({ text: `${request.res}` });
    }
);





