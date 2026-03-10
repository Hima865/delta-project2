

  // console.log(mapToken)
  // mapbox.gl.accessToken=mapToken;

      maptilersdk.config.apiKey = '3KvutshCxz7DmKvf5cQC';
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,
        center:[77.248,28.6139],
        zoom:9
      });
  