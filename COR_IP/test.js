const btn = document.getElementById('btn')
window.initialize = function(){
    btn.addEventListener("click", ()=> {
    var myLatlng = new google.maps.LatLng(46.482526, 30.7233095);
            var pos1 = new google.maps.LatLng(46.4637069, 30.706134);
            var pos2 = new google.maps.LatLng(46.4868231, 30.6127221);
            var pos3 = new google.maps.LatLng(46.4082577, 30.7089098);
            var pos4 = new google.maps.LatLng(46.582382, 30.8035866);
            var pos5 = new google.maps.LatLng(46.47901485, 30.71353285);
            var pos6 = new google.maps.LatLng(46.47894467, 30.71352212);
            var pos7 = new google.maps.LatLng(46.47892804, 30.71351676);
            var pos8 = new google.maps.LatLng(46.46755152, 30.73588021);
        
    var mapOptions = {
        zoom: 13,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var marker = new google.maps.Marker({
        position: pos1,
        map: map,
        title: 'ул. Балковская 120/1'
    });
            
    var marker = new google.maps.Marker({
        position: pos2,
        map: map,
        title: 'Тираспольское шоссе 22, рынок "У двух столбов", маг.№ 14, 17/39'
    });
            
    var marker = new google.maps.Marker({
        position: pos3,
        map: map,
        title: 'просп. М. Жукова 14Б/1, рынок "Селянка", маг.№ 36-37-П'
    });
            
    var marker = new google.maps.Marker({
        position: pos4,
        map: map,
        title: 'Днепропетр. дор. 125а, рынок "Союз", маг.№ П-27'
    });
    
    var marker = new google.maps.Marker({
        position: pos5,
        map: map,
        title: 'ТЦ Староконный, маг.№ ДП-91'
    });
    
    var marker = new google.maps.Marker({
        position: pos6,
        map: map,
        title: 'ТЦ Староконный, маг.№ ДП-49'
    });
    
    var marker = new google.maps.Marker({
        position: pos7,
        map: map,
        title: 'ТЦ Староконный, маг.№ ЦП-69'
    });
    
    var marker = new google.maps.Marker({
        position: pos8,
        map: map,
        title: 'Новощепной ряд, 5/1, Автостанция "Привоз", платформа 23'
    });
    })
}
google.maps.event.addDomListener(window, 'load', initialize);