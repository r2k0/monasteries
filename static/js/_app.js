var iconBase = new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/pal2/icon10.png', new google.maps.Size(32,32));
var map;

$(document).ready(function(){
	if(navigator.geolocation){
		    navigator.geolocation.getCurrentPosition(function(position){
				var plat = position.coords.latitude;
				var plng = position.coords.longitude;
				map = new GMaps({ 
				el: '#map',
				lat: plat,
				lng: plng,
				zoom: 8,
				zoomControl : true,
				});
				showMarkers();
			});
		
	}
	else {
		map = new GMaps({ 
		el: '#map',
		lat: 40.40,
		lng: 95.79,
		zoom: 5,
		zoomControl : true,
		});
		showMarkers();
	}

function showMap(){
	var plat = position.coords.latitude;
	var plng = position.coords.longitude;
	map = new GMaps({ 
	el: '#map',
	lat: plat,
	lng: plng,
	zoom: 10,
	zoomControl : true,
	});
	showMarkers();
}

function showMarkers(){	
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
	map.addMarker({
		lat: 34.043526,
		lng: -118.089560,
		icon: iconBase,
		infoWindow: {
			content: 'Daw Dhammethi Silashin Buddhist Center<br>1217 Lawrence Ave, Rosemead, CA 91770<br>(626) 571-0527<br>(626) 644-7146<br>pinnyasiri@hotmail.com<br>'
		}
		});
	map.addMarker({
		lat: 33.9100257,
		lng: -117.417455,
		icon: iconBase,
		infoWindow: {
			content: 'Thanti-Thitsar Vipassana Meditation Center<br>2540 Monroe Street, Riverside, CA 92504<br>(951)352-4680<br>'
		}
		});
	map.addMarker({
		lat: 37.423360,
		lng: -122.424821,
		icon: iconBase,
		infoWindow: {
			content: 'Dhammananda Vihara<br>17450 South Cabrillo Hwy, Half Moon Bay, CA 94019<br>(650) 726-7604<br><a href="http://tbsa.org">website</a><br>tbsa@tbsa.org<br>'
		}
		});
	map.addMarker({
		lat: 37.548841,
		lng: -122.010588,
		icon: iconBase,
		infoWindow: {
			content: 'Mettananda Vihara<br>4619 Central Ave, Fremont, CA 94536<br>(510) 795-0405<br>adhammapiya@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 37.541053,
		lng: -121.969711,
		icon: iconBase,
		infoWindow: {
			content: 'Kusalakari Corporation<br>40174 Spady Street, Fremont, CA 94538<br>(510) 979-1580<br>'
		}
		});
	map.addMarker({
		lat: 37.870618,
		lng: -121.267372,
		icon: iconBase,
		infoWindow: {
			content: 'Kusalakari Meditation Center<br>9698 South Pries Road, French Camp, CA 95231<br>(209) 451-2248<br>'
		}
		});
	map.addMarker({
		lat: 37.636010,
		lng: -122.06604,
		icon: iconBase,
		infoWindow: {
			content: 'Mudita Shwe Kyaung<br>27695 Leidig Ct, Hayward, CA 94544<br>(510) 574-5442<br>(510) 785-9787<br>ashinlay@gmail.com<br>'
		}
		});
	map.addMarker({
		lat: 37.7857417,
		lng: -122.2245807,
		icon: iconBase,
		infoWindow: {
			content: 'Sasanahitakari Monastery<br>2782 E 22nd Street, Oakland, CA 94601<br>(510) 536-0540<br>'
		}
		});
	map.addMarker({
		lat: 37.987088,
		lng: -122.304039,
		icon: iconBase,
		infoWindow: {
			content: 'Kaytumadi Dhamma Yaketha<br>1102 Kelvin Road, El Sobrante, CA 94803<br>(510) 223-8853<br>'
		}
		});
	map.addMarker({
		lat: 37.792096,
		lng: -122.228098,
		icon: iconBase,
		infoWindow: {
			content: 'Dhamma Aye Yate Kyaung<br>2523 23rd Ave, Oakland, CA 94606<br>(510) 533-5962<br>'
		}
		});
	map.addMarker({
		lat: 37.170967,
		lng: -122.171614,
		icon: iconBase,
		infoWindow: {
			content: 'Taungpulu Kaba Aye Monastery<br>18335 Big Basin Way, Boulder Creek, CA 95006<br>(408) 294-4536<br>(831) 338-4050<br>'
		}
		});
	map.addMarker({
		lat: 37.3283624,
		lng: -121.8560945,
		icon: iconBase,
		infoWindow: {
			content: 'Tathagata Meditation Center<br>1215 Lucretia Avenue, San Jose, CA 95122<br>(408) 294-4536<br>(408) 977-0300<br><a href="http://tathagata.org">website</a><br>'
		}
		});
	map.addMarker({
		lat: 38.428013,
		lng: -121.369890,
		icon: iconBase,
		infoWindow: {
			content: 'Sasana Gonyi Kyaung<br>8930 Campbell Road, Elk Grove, CA 95624<br>(916) 897 8200<br>(916) 477 9068<br><a href="http://sasanagonyikyaung.org">website</a><br>'
		}
		});
	map.addMarker({
		lat: 37.582445,
		lng: -122.072962,
		icon: iconBase,
		infoWindow: {
			content: 'Ratanagonyi Kyaung<br>32406 Regents Blvd, Union City, CA 94587-6850<br>(510) 429-1823<br>'
		}
		});
	map.addMarker({
		lat: 37.535068,
		lng: -122.032597,
		icon: iconBase,
		infoWindow: {
			content: 'Alodawpyie Monastery<br>6263 Thorton Ave, Newark, CA 94560<br>(510) 404-7763<br>(480) 228-7282<br><a href="http://alodawpyei.org">website</a><br>alodawpyei@gmail.com<br>'
		}
		});
	map.addMarker({
		lat: 37.6787819,
		lng: -122.4787421,
		icon: iconBase,
		infoWindow: {
			content: 'Aung Minglar Buddhist Temple<br>369 Saint Francis Blvd, Daly City, CA 94015<br>(650) 994-2039<br>(650) 868-6960<br>'
		}
		});
	map.addMarker({
		lat: 37.6684197,
		lng: -122.4775436,
		icon: iconBase,
		infoWindow: {
			content: 'Theravada Dhamma Society<br>699 Serramonte Blvd #101, Daly City, CA 94015<br>(415) 793-2512<br><a href="http://tdsusa.org">website</a><br>'
		}
		});
	map.addMarker({
		lat: 37.671368,
		lng: -122.479846,
		icon: iconBase,
		infoWindow: {
			content: 'Yadanar Nyan Yaung Monastery<br>699 Saint Francis Blvd, Daly City, CA 94015<br>(650)755-7179<br>'
		}
		});
	map.addMarker({
		lat: 37.743170,
		lng: -122.487193,
		icon: iconBase,
		infoWindow: {
			content: 'Lawkanartha Monastery<br>2364 30th Ave, San Francisco, CA 94116<br>(415) 681-3011<br><a href="http://lawkanartha-monastery.org">website</a><br>'
		}
		});
	map.addMarker({
		lat: 38.431807,
		lng: -122.865206,
		icon: iconBase,
		infoWindow: {
			content: 'Sae Taw Win II Dhamma Center<br>8769 Bower Street, Sebastopol, CA 95472<br>(707) 824-4456<br><a href="http://saetawwin2.org">website</a><br>stw2@sonic.net<br>'
		}
		});
	map.addMarker({
		lat: 33.4177254,
		lng: -111.5249192,
		icon: iconBase,
		infoWindow: {
			content: 'Alodawpyie Meditation Center<br>254 N Wickiup Road ,Apache Junction ,AZ 85219<br>(480) 288 0789<br>'
		}
		});
	map.addMarker({
		lat: 33.580571,
		lng: -112.090602,
		icon: iconBase,
		infoWindow: {
			content: 'Santi Su Kha<br>1424 W Cochise Dr, Phoenix, AZ 85021<br>(602) 354-7559<br>'
		}
		});
	map.addMarker({
		lat: 36.044375 ,
		lng: -115.247451,
		icon: iconBase,
		infoWindow: {
			content: 'Chaiya Meditation Monastery<br>7925 S Virtue Ct, Las Vegas, NV 89113<br>(702) 456-3838<br>(702) 219-0377<br><a href="http://chaiyacmm.org">website</a><br>chaiya@chaiyacmm.org<br>'
		}
		});
	map.addMarker({
		lat: 47.886957,
		lng: -122.281384,
		icon: iconBase,
		infoWindow: {
			content: 'U Cakkinda<br>3510 122 Place ,SW Lynn Wood,WA 98087<br>(917) 676-4642<br>'
		}
		});
	map.addMarker({
		lat: 47.380871,
		lng: -122.203085,
		icon: iconBase,
		infoWindow: {
			content: 'Tipitaka Monastery<br>24625 104th Ave SE, Kent, WA 98030<br>(253) 850-6905<br>'
		}
		});
	map.addMarker({
		lat: 47.835718,
		lng: -122.108448,
		icon: iconBase,
		infoWindow: {
			content: 'Dhamma Gonyee<br>17730 Broway Ave, Snohomish, WA 98296<br>(425) 749-6622<br>'
		}
		});
	map.addMarker({
		lat: 39.759186,
		lng: -104.830746,
		icon: iconBase,
		infoWindow: {
			content: 'Ashin Sandimar Dhammaparla Vihara<br>3096 Wheeling St, Aurora, CO 80011-2021<br>(303) 343-3691<br>'
		}
		});
	map.addMarker({
		lat: 45.541046,
		lng: -122.532538,
		icon: iconBase,
		infoWindow: {
			content: 'Sirimangla Buddhist Monastery<br>12634 NE Russell Street, Portland, OR 97230<br>(503) 253-5318<br>'
		}
		});
	map.addMarker({
		lat: 30.219450,
		lng: -97.919855,
		icon: iconBase,
		infoWindow: {
			content: 'Sitagu Buddhist Vihara<br>9001 Honey Comb Dr, Austin, TX 78737<br>(512) 301-3968<br>'
		}
		});
	map.addMarker({
		lat: 29.996045,
		lng: -95.469652,
		icon: iconBase,
		infoWindow: {
			content: 'Zeyavati Buddha Vihara<br>14910 Welcome Ln, Houston, TX 77014<br>(713) 933-8580<br>'
		}
		});
	map.addMarker({
		lat: 29.5816548,
		lng: -98.1991831,
		icon: iconBase,
		infoWindow: {
			content: 'Aung Myay Thu Kha Alotawpyie Yakethar<br>642 Sassman Rd, Marion, TX 78124<br>(480) 252-2799<br>'
		}
		});
	map.addMarker({
		lat: 35.221427,
		lng: -101.7564699,
		icon: iconBase,
		infoWindow: {
			content: 'Sadimon Jeyawadi Temple<br>7301 E Amarillo Blvd, Amarillo, TX 79107<br>(806) 373-5322<br>'
		}
		});
}
	});

