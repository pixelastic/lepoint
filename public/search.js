/* global instantsearch */

var maxRecords = 96;
var search = instantsearch({
  appId: 'O3F8QXYK6R',
  apiKey: '8ee2a1daf38d0e233f5264fa8d0696b2',
  indexName: 'lepoint'
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q',
    placeholder: 'Rechercher dans les couvertures'
  })
);

var hitTemplate = $('#hitTemplate').html();

var noResultsTemplate =
  '<div class="text-center">Aucun résultats pour <strong>{{query}}</strong>.</div>';


search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 120,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    }
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats',
    transformData: function(data) {
      data.percent = Math.ceil(data.nbHits / maxRecords * 100);
      return data;
    },
    templates: {
      body: '{{percent}}% des couvertures ({{nbHits}}) correspondent à votre recherche'
    }
  })
);


search.start();
