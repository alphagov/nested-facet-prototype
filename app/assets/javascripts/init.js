document.addEventListener("DOMContentLoaded", (event) => {
  var $container = document.querySelector(".js-nested-facets");

  if ($container) {
    var facetSelect = new GOVUK.NestedFacets({ $el: $container });
    facetSelect.update();

    $container.addEventListener("change", () => {
      facetSelect.update();
    });
  }
});
