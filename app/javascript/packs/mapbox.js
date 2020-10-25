import mapboxgl from 'mapbox-gl';

const results = document.getElementsByClassName('results');
const artistas = document.querySelectorAll('artista');
const form = document.getElementById('form');

const initMapbox = () => {}
artistas.forEach(artista=>{
  artista.addEventListener("click",function(event){
    console.log(event)
  })
})




form.addEventListener('submit', (event) => {
  // eslint-disable-next-line camelcase
  event.preventDefault();
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=pk.eyJ1IjoiZ2l1bGlhbmFzdHIiLCJhIjoiY2tnb25xNW9xMHJwMjJzcDFrNmM1eXZqNiJ9.h-QEC2IF4CJjDdl4RKpeCw`)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      results.innerHTML = `${data.features[0].center[0]}, ${data.features[0].center[1]}`;
      // const li = `<li>${results}</li>`;
      // results.insertAdjacentHTML("beforeend", li);

      // mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1bGlhbmFzdHIiLCJhIjoiY2tnb25xNW9xMHJwMjJzcDFrNmM1eXZqNiJ9.h-QEC2IF4CJjDdl4RKpeCw';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [data.features[0].center[0], data.features[0].center[1]],
        zoom: 12
      });

      new mapboxgl.Marker()
        .setLngLat([data.features[0].center[0], data.features[0].center[1]])
        .addTo(map);
    });
});

export { initMapbox }