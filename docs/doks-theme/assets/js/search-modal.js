---
---
jQuery(function () {
  $.modal.defaults.showClose = false;

  // Retreive baseUrl from jekyull global variable
  const baseUrl = "{% if jekyll.environment == 'production' %}{{ site.doks.baseurl }}{% endif %}"

  var searchIndex; //lunr search index

  function displaySearchResults(results, store) {
    let htmlString = "";
    if (results.length) {
      for (const result of results) {
        const item = store[result.ref]
        htmlString += `<li class="search-result">
            <a href="${baseUrl + item.url}">
                <div class="search-result-content">
                    <h3 class="search-result-header">${item.title}</h3>
                    <p class="search-result-description">${item.content.substring(0,150)}...</p>
                </div>
            </a>
        </li>`;
      }
    } else {
      htmlString = '<li class="no-result">No results found</li>';
    }
    $("#search-results-list").html(htmlString);
  }

  function buildIndex() {
    // Initalize lunr with the fields it will be searching on. I've given title
    searchIndex = lunr(function () {
      this.field("id");
      this.field("title", { boost: 10 });
      this.field("content");
    });

    for (var key in window.store) {
      // Add the data to lunr
      searchIndex.add({
        id: key,
        title: window.store[key].title,
        content: window.store[key].content,
      });
    }
  }

  $("#site_search").click(function (event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $("#search-modal").modal();
    $("#search-modal-input").focus();
    if (!searchIndex) buildIndex();
  });

  $("#search-modal-input").on("input", function (event) {
    const term = event.target.value.trim();
    if (term) {
      $("#search-results").show();
      const results = searchIndex.search(term);
      displaySearchResults(results, window.store);
    }
  });
});
