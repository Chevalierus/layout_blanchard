ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.75846806898367,37.60108849999989],
                zoom: 17,
                controls: ['geolocationControl', 'zoomControl']
            }, {
                suppressMapOpenBlock: true,
                geolocationControlSize: "large",
                geolocationControlPosition:  { top: "200px", right: "20px" },
                geolocationControlFloat: 'none',
                zoomControlSize: "small",
                zoomControlFloat: "none",
                zoomControlPosition: { top: "120px", right: "20px" }
            });
        
            myMap.behaviors.disable('scrollZoom'); 

        var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'images/tabs-eclipse-hover.svg',
          iconImageSize: [10, 10],
          iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('zoomControl');
        }