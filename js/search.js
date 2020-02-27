document.addEventListener("DOMContentLoaded", () => {
  const searchOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "title"
    ]
  };
  const searchInput = document.getElementById('search-site');
  const queryString = location.search.replace('?q=','').trim();
  
  // Search on Page Load
  if(queryString != ''){
    generateSearch(queryString);
  }

  //Input field Search 
  searchInput.addEventListener('keyup', function(){
    const searchValue = document.getElementById("search-site").value.trim();
    if(searchValue != ''){   
      generateSearch(searchValue);
    }
  });

  //Query search index
  async function generateSearch(string){
    $.getJSON('../js/searchindex.json', function(data){
      const list = data.list;
      const fuse = new Fuse(list, searchOptions);
      const searchResult = fuse.search(string);
      generateResults(searchResult);
    });
  }

  //generate results list
  function generateResults(data){
    if(data.length === 0){
      $('#results').empty().append(`
        <div class="no-results">
          <h2>Sorry no matches</h2>
        </div>
      `);
    }else if(data.length > 0 || searchValue  == '' ){
      $('#results').empty();
      for(i = 0; i < data.length; i++){
        $('#results').append(`
        <div class="result-item">  
          <dt>
            <a href='${data[i].path}'>
              ${data[i].title}
            </a>
          </dt>
          <dd>lorem ipsum</dd>
        </div>
        `);
      }
    }
  }
});