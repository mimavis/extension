const EXTENSION_URL = "https://mimavis.framer.website/employees/extension";
const POPUP_DIMENSIONS = {
  width: 440,
  height: 860
};

chrome.action.onClicked.addListener(async () => {
  await chrome.windows.create({
    url: EXTENSION_URL,
    type: "popup",
    focused: true,
    width: POPUP_DIMENSIONS.width,
    height: POPUP_DIMENSIONS.height
  });
});
