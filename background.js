chrome.contextMenus.create({
  id: '1',
  title: 'Search Youtube',
  contexts: ['selection'],
})

chrome.contextMenus.create({
  id: '2',
  title: 'Search Spotify',
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener(function(clickData) {
  let highlightedText = clickData.selectionText
  highlightedText.replace(/[^a-zA-Z0-9" "]/g, '').replace(/\s/g, '%20').replaceAll('"', '');

  if (clickData.menuItemId === '2') {
    chrome.tabs.create({
      url: "https://open.spotify.com/search/" + highlightedText
    });
  }

  if (clickData.menuItemId === '1') {
    chrome.tabs.create({
      url: "https://www.youtube.com/results?search_query=" + highlightedText
    });
  }

});