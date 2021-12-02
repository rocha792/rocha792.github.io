window.onload = () =>{
  let data=[];
    axios.get('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // handle success
    data=response.data;
    print(response.data);
    //console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  let print = (data)=>{
      var todo="";
        console.log(data[0]);
        data.forEach(element => {
            todo+=`<button class="badge bg-dark">${element.name.common} - ${element.name.official}</button>`;
        });
        document.getElementById("countries").innerHTML=todo;
    };
      Buscar=()=>{
        let txt= document.getElementById("Buscar").value;
        let found=data.find( (pais)=> pais.name.common == txt );
        console.log(found);
        if(found != null){
           document.getElementById("namecountry").innerHTML=found.name.common;
           document.getElementById("imgcountry").src=found.flags.png;
       }

      }
function iniciarMap(){
  var coord = {lat:-34.5956145 ,lng: -58.4431949};
  var map = new google.maps.map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var mark = new google.map.Marker({
    position: coord,
    map: map
  });
}

}//llave load