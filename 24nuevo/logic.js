	var margin = {top: 50, right: 50, bottom: 50, left: 50};
    
    var width = 960 - margin.left - margin.right,
    		height = 500 - margin.top - margin.bottom;
    
    var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var counterValue = 0;
    
    var counter = svg.append("text")
    	.attr("class", "counter")
    	.text(0);
    
    var quakes;
    
    var dragbehaviour = d3.drag()
    	.on("start", dragstarted)
    	.on("drag", dragged)
    	.on("end", dragended);	

    var mapUrl = "https://unpkg.com/world-atlas@1/world/110m.json"
    var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
    
    var pulseSize = 8;
    
    var colour = d3.scaleLinear()
    	.range(["blue", "red"]);
    
    var radius = d3.scaleSqrt()
    .range([0, 7]);
    
    var dateObj = new Date();
			dateObj.setDate(dateObj.getDate() - 7);

    var x = d3.scaleTime()
    	.domain([dateObj, new Date()])
    	.range([0, width]);
    
    // fix this scale so that we convert the time to how many seconds ago the earthquake was
    var xDelay = d3.scaleLinear()
    	.range([0, width]);
    
    var projection;
    
    function projectCoord(d, index) {
        return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[index];
		}
    
    d3.queue()
    	.defer(d3.json, mapUrl)
    	.defer(d3.json, earthquakeUrl)
    	.await(load);
    
    function load(error, world, earthquakes) {
      if (error) throw error;
      
      projection = d3.geoEquirectangular()
      	.fitSize([width, height], topojson.feature(world, world.objects.land));
      
      radius.domain([0, d3.max(earthquakes.features, function(d) {
        return d.properties.mag;
      })]);
      
      colour.domain(radius.domain());
      
      var path = d3.geoPath()
      	.projection(projection);
      
      var countries = svg.selectAll("path")
      	.data(topojson.feature(world, world.objects.countries).features)
      .enter().append("path")
      	.attr("class", "land")
      	.attr("d", path);
      
      setQuakeDelay(earthquakes.features);
      
      quakes = earthquakes.features;
      
      var xAxis = svg.append("g")
      	.attr("class", "x-axis")
      	.attr("transform", "translate(0," + (height + margin.bottom / 4) + ")")
      	.call(d3.axisBottom(x));
      
      var longestDelay = earthquakes.features[0].delay;
      xDelay.domain([0, longestDelay]);
            
      var currentTime = svg.append("circle")
      	.attr("r", 5)
      	.attr("cx", 0)
      	.attr("cy", height)
      	.call(dragbehaviour);
      
    }
    
    function dragstarted(d) {
      d3.select(this)
      	.style("fill", "red");
      
      var eqCount = d3.selectAll("g.eq").size();;
      counterValue = eqCount;
      counter.text(counterValue);
    }
    
    function dragged(d) {
      var minX = 0,
          maxX = width;

      var position = Math.max(minX, Math.min(maxX, d3.event.x));
      
      d3.select(this)
      	.attr("cx", position);
      
      var current = quakes.filter(function(a) {
        return a.delay < xDelay.invert(position);
      });
      
      displayQuakes(current, position);
    }
    
    function dragended(d) {
       d3.select(this)
      	.style("fill", "black");
      
      counterValue = d3.selectAll("g.eq").size();
      counter.text(counterValue)
    }
    
    var dataGroup = svg.append("g");
    
    function displayQuakes(current, position) {
      
    	var selection = dataGroup.selectAll("g.eq")
      	.data(current, function(d) {
          return d.id;
        });
      
      var eqSel = selection.enter()
      	.append("g")
      	.attr("class", "eq");
				
      var eqC = eqSel.append("circle")
      	.attr("class", "earthquake")
      	.attr("cx", function(d) {          
          return projectCoord(d, 0);
        })
      	.attr("cy", function(d) {
          return projectCoord(d, 1);
        })
        .attr("r", 0)
      	.style("fill", function(d) {
          return colour(d.properties.mag);
        })
      
      // append pulse
      var eqP = eqSel.append("circle")
      	.attr("class", "pulse")
      	.attr("cx", function(d) {          
          return projectCoord(d, 0);
        })
      	.attr("cy", function(d) {
          return projectCoord(d, 1);
        })
      	.attr("r", 0);
      
      eqC.transition()
      	.duration(1000)
        .delay(function(d) {
        	return xDelay.invert(position) - d.delay;
      	})
      	.attr("r", function(d) {
          if(d.properties.mag < 0) {
            return 0.1;
          } else {
            return radius(d.properties.mag);				 
          }     
      	});
      
      eqP.transition()
      	.duration(2000)
        .delay(function(d) {
        	return xDelay.invert(position) - d.delay;
      	})
        .attr("r", function(d) {
          if(d.properties.mag < 0) {
            return 0.1 * pulseSize;
          } else {
            return radius(d.properties.mag) * pulseSize;				 
          }     
      	})
      	.style('opacity', 0)
		   	.remove();
      
      selection.exit()
      	.remove();

    }
    
    var setQuakeDelay = function(quakes) {
      for(var i = 0, max = quakes.length; i < max; i++){
        var timeDiff = quakes[i].properties.time - dateObj;
        var timeDiffObj = new Date(timeDiff);
        quakes[i].delay = Date.parse(timeDiffObj) / 35000;
      }
    };
