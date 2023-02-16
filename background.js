function searchWord(info, tab) {
  console.log(info)
  console.log(tab)
}

chrome.contextMenus.create({
  id: '1',
  title: 'Search Youtube',
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener(function(clickData) {
  let highlightedText = clickData.selectionText
  highlightedText.replace(/[^a-zA-Z0-9" "]/g, '').replace(/\s/g, '%20').replaceAll('"', '');
  chrome.tabs.create({
    url: "https://www.youtube.com/results?search_query=" + highlightedText
  });

});