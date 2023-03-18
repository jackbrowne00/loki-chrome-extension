chrome.runtime.onInstalled.addListener(async () => {
  console.log("Extension Installed");
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
// });

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if(tab.url && tab.url.includes("grafana.bravissimo.io/explore"))
})