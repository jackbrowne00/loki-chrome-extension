console.log("popup.js");

document.getElementById("button-1").addEventListener("click", () => {
  console.log("console.log button1.innerhtml");
  // const query = { active: true, currentWindow: true };
  // chrome.tabs.query(query, (tabs) => {
  //   const currentTab = tabs[0];
  //   // chrome.tabs.executeScript(currentTab.id, { file: "scripts/paste-data.js" });
  //   chrome.scripting.executeScript(currentTab.id, files{"alert.js");
  // });
  chrome.scripting.executeScript(
    {
      target: null,
      files: ["popup/alert.js"],
    },
    () => {}
  );
});

// document
//   .querySelector("button[id='button-1']")
//   .addEventListener("click", () => {
//     console.log("clicked me");
//     let buttonContainer = document.querySelector("buttonsContainer");
//     let btn = document.createElement("button");
//     btn.innerHTML = "Hey there ive just been added";
//     buttonContainer.appendChild(newButton);
//   });

// document.getElementById("button-1").addEventListener("click", () => {
//   const query = { active: true, currentWindow: true };
//   chrome.tabs.query(query, (tabs) => {
//     const currentTab = tabs[0];
//     chrome.tabs.executeScript(currentTab.id, { file: "scripts/button-1.js" });
//   });
// });
