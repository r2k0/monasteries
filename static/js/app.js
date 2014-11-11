	var iconBase = new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/pal2/icon10.png',
			new google.maps.Size(32,32));
	var map;
	$(document).ready(function(){
	map = new GMaps({ 
		el: '#map',
		lat: 40.393264,
		lng: -95.7899219,
		zoom: 5,
		zoomControl : true,
		});
	map.addMarker({
		lat: 34.1538945,
		lng: -117.9088402,
		icon: iconBase,
		infoWindow: {
			content: 'Azusa Myanmar Buddhist Temple<br>1790-1830 Ranch Road, Azusa, CA 91702<br>(626) 969-2118<br><a href="http://myanmar-pba.org">website</a><br>uayethaka@yahoo.com<br>unyanawara@msn.com<br>'
		}
		});
	map.addMarker({
		lat: 33.888664,
		lng: -118.093164,
		icon: iconBase,
		infoWindow: {
			content: 'Dhammasukha Monastery<br>15623 Longworth Avenue, Norwalk, CA 90650<br>(562) 864-3660<br>Dhammasukha@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.0334391,
		lng: -117.9578873,
		icon: iconBase,
		infoWindow: {
			content: 'Aung Mingala Monastery<br>13409 Temple Ave, La Puente, CA 91744<br>(626) 939-9007<br>(626) 962-7006<br>acaraashin@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.029743,
		lng: -117.9217014,
		icon: iconBase,
		infoWindow: {
			content: 'Burma Buddhist Monastery<br>710 Grandview Lane, La Puente, CA 91744<br>(626) 336-3419<br>thomasuwa@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.093209,
		lng: -117.975182,
		icon: iconBase,
		infoWindow: {
			content: 'Dhammajoti Meditation Center<br>4436 Walnut Street, Baldwin Park, CA 91706<br>(626) 337-0056<br>(626) 726-7604<br>tawwin@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.05511,
		lng: -118.099201,
		icon: iconBase,
		infoWindow: {
			content: 'Aung Chan Thar Monastery<br>2252 Delmar Ave, Rosemead, CA 91770<br>(626) 571-0499<br>'
		}
		});
	map.addMarker({
		lat: 34.093537,
		lng: -118.00677,
		icon: iconBase,
		infoWindow: {
			content: 'Thar Tha Na Yaung Gyi Monastery<br>11844 Cherrylee Dr, El Monte, CA 91732<br>(626) 454-4203<br>'
		}
		});
	map.addMarker({
		lat: 34.051618,
		lng: -117.924771,
		icon: iconBase,
		infoWindow: {
			content: 'Parami Buddha Vihara<br>1842 Valinda Ave, La Puente, CA 91744<br>(626) 919-3806<br>(626) 975-3660<br><a href="http://paramiusa.org">website</a><br>apannadipa@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.057268,
		lng: -117.7573225,
		icon: iconBase,
		infoWindow: {
			content: 'Bodhi Vepullakari Monastery<br>764 West 2nd. Street, Pomona, CA 91766<br>(909) 620-7612<br>'
		}
		});
	map.addMarker({
		lat: 34.239269,
		lng: -118.445572,
		icon: iconBase,
		infoWindow: {
			content: 'Mon Buddhist Temple<br>14321 Tupper Street, Panorama City, CA 91402<br>(818) 895-3141<br>'
		}
		});
	map.addMarker({
		lat: 34.055124,
		lng: -118.090917,
		icon: iconBase,
		infoWindow: {
			content: 'Moe Nyin Taw Ya Monastery<br>2241 San Gabriel Blvd, Rosemead, CA 91770<br>(310) 872-6255<br>'
		}
		});
	});
