import Fuse from 'fuse.js';


$(document).ready(function() {
  window.$.getJson('../js/index.json', function (response){
    const fuse = new Fuse(response, {
      key: ['title'],
      shouldSort: true
    });

    $('#search').on('keyup', function(){
      let result = fuse.search($this.val());

      //OUTPUT
      let resultdiv = $('ul.searchresults');
      if(result.length === 0 ){
        resultdiv.hide();
      } else {
        //Results
        resultdiv.empty();
        for (let item in result.slice(0,4)){
          let searchitem = `<li>${result[item].title}</li>`;
          resultdiv.append(searchitem);
        }
        resultdiv.show();
      }
    });
  });
});