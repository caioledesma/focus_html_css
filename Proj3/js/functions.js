window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598, -48.577423), 
			scrollwheel:false,
			zoom:12,
			mapTypeId:'roadmap' // pode ser também google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}


	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat,'lng':long};
		
		// Documentação Google - https://developers.google.com/maps/documentation/javascript/reference

		//Marker nessa função abaixo é uma função do Google já da API deles
		var marker = new google.maps.Marker({
			position:latLng, //também dá pra declarar as propriedades do objeto com aspas simples: 'position':LatLng
			map:map,
			icon:icon
		});
		// infoWindow nessa função abaixo é uma função do Google já da API deles
		var infoWindow = new google.maps.infoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});
		//addListener também é uma função que já existe
		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);			
			});
		}else{
			infoWindow.open(map,marker);
		}
	}

	initialize();

		var conteudo = '<p style="color:black;font-size:13px;padding:5px;">Texto do box</p>'
		addMarker(-27.616637,-48.5923228,'',conteudo,true);

		setTimeout(function(){
			map.panTo({'lat':-23.550520,'lng':-46.633309});

		},4000);

}



