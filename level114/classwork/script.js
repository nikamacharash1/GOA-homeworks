var number = function(busStops){
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
      peopleInBus += enter - left;
    })
    return peopleInBus
 }