(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  var i = 14;
  
  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        //console.log(array[array.length-1].id)
        console.log(array.length);
        var output = "";
        for(var i = 0 ;i<array.length;i++){
          console.log(i);
          output += "</br>" + array[i].id +/* "/" + array.lenght + */"</br>";
          output += "<h1>" + array[i].title + "</h1></br>";
          output += "<h2>" + array[i].body.replace("\n","</br>") + "</h2></br>";
        }
        console.log(output);
        answer.innerHTML = output;
      })
    //TODO implement it
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
    answer.innerHTML = "<h1>Loading...</h1>";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        //console.log(array[array.length-1].id)
        console.log(array.length);
        var output = "";
        for(var i = 0 ;i<array.length;i++){
          console.log(i);
          output += "</br>" + array[i].id +/* "/" + array.lenght + */"</br>";
          output += "<h1>" + array[i].title + "</h1></br>";
          output += "<h2>" + array[i].body.replace("\n","</br>") + "</h2></br>";
        }
        console.log(output);
        answer.innerHTML = output;
      })
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
    answer.innerHTML = "<h1>Loading...</h1>";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        //console.log(array[array.length-1].id)
        var output = "";
        output += "</br>" + array[i].id +/* "/" + array.lenght + */"</br>";
        output += "<h1>" + array[i].title + "</h1></br>";
        output += "<h2>" + array[i].body.replace("\n","</br>") + "</h2></br>";
        console.log(output);
        answer.innerHTML = output;
      })
  })

})();
