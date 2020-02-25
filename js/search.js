document.addEventListener("DOMContentLoaded", () => {

  const searchForm = document.getElementById('search-site');
  const indexUrl = 'http://localhost:8080/js/searchindex.json';  

  
  async function getItems(url){
    const searchValue = ($('#search-site').val()).trim();
    // console.log(searchValue);
    
    
    if(searchValue != ''){
      // alert('cortney');
      // $.getJSON('./searchindex.json', function(result){
      //   const list = result;
      //   console.log(result);
      // });
    
      try {
        const results = await fetch(url);
        console.log(results);
        return await results.json();

      } catch(error) {
        console.error(error);
      }
    }

  }

  //events
  searchForm.addEventListener('keyup', searchIndex);
});