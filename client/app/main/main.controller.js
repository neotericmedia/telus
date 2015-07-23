'use strict';

angular.module('telusLg2App')
  .controller('MainCtrl', function ($scope, $http, $rootScope, TweeterSearch, TweeterResults, TweetReports, LocationResults, OnsitePregenReport) {

    //$scope.locations = [];
    $http.get('data/outputs.json', {
    //$http.get('http://52.3.87.216:9100/user/lgweb/location', {
      headers: {
        'Authorization': 'Basic bGd3ZWI6bGdlbjF1cw==',
        //'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': 'GET,POST,PUT,HEAD,DELETE,OPTIONS',
        //'Access-Control-Allow-Headers': 'content-Type,x-requested-with'
        //'Access-Control-Allow-Origin': 'http://52.3.87.216:9100/user/lgweb/location',
        //'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
        //'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization'
      }
      //headers: {'Authorization':'Basic bGd3ZWI6bGdlbjF1cw==', 'Access-Control-Request-Headers':'accept-language, origin, accept-encoding', 'Access-Control-Allow-Headers':'x-requested-with, content-type, accept, origin, authorization, x-csrftoken'}
    }).success(function(locations) {
      $scope.locations = locations;
    })








    //http://52.3.87.216:9100/user/lgweb/location
   //  $http.get('data/outputs.json').success(function(locations) {
   //     $scope.locations = locations;
   //  });

    // var output = this;
    // output.locations = [];
    // $http.get('data/outputs.json').success(function(data){
    //   output.locations = data;
    // });

    // $scope.locations = [
    //   { id: 180, title: "Boston Pizza", address: "400 Progress Avenue, Scarborough, ON M1P 5J1, Canada", lat: "43.77543", lng:"-79.263066" },
    //   { id: 181, title: "East Side Marios", address: "12 Lebovic Avenue, Toronto, ON M1L 4W1, Canada", lat: "43.7242333",lng:"-79.29024" },
    //   { id: 182, title: "Wild Wing", address: "1557 The Queensway Unit 1, Etobicoke, ON M8Z 1T8, Canada", lat: "43.6181012",lng:"-79.5390509" },
    //   { id: 179, title: "St. Louis Bar and Grill", address: "90 Edgeley Boulevard , Unit 106, Concord, ON L4K 5W7, Canada", lat:"43.7966469",lng:"-79.5331189" },
    //   { id: 178, title: "Golden Thai Restaurant", address: "105 Church Street, Toronto, ON M5C 2G8, Canada", lat:"43.652352",lng:"-79.375134" },
    //   { id: 154, title: "Pizza Depot", address: "945 Peter Robertson Boulevard, Brampton, ON L6R 0K1, Canada", lat: "43.7477189",lng:"-79.7456055" },
    //   { id: 177, title: "Geox (Yorkdale Mall)", address: "3401 Dufferin Street, North York, ON M6A 2T9, Canada", lat: "43.725454",lng:"-79.451664" },
    //   { id: 176, title: "Little Caesars", address: "3055 Argentia Road, Mississauga, ON L5N 8E1, Canada", lat:"43.595088",lng:"-79.78698" },
    //   { id: 175, title: "Jimmy's Coffee", address: "107 Portland Street, Toronto, ON M5V 3N8, Canada", lat: "43.645281",lng:"-79.400271" },
    //   { id: 122, title: "One Eleven Office", address: "111 Richmond Street West, Toronto, ON M5H 3K6, Canada", lat: "43.6502837",lng:"-79.3843006" },
    //   { id: 189, title: "Via Informatics TELUS WiFi Lab", address: "768 Seymour Street, Vancouver, BC V6B, Canada America/Vancouver" },
    //   { id: 188, title: "Via Informatics TELUS Dynamic Insights", address: "25 York Street, Toronto, ON M5J 2V5, Canada America/Toronto" }
    // ];

  //   $scope.locations =
  //
  //   [
  //     {
  //       "id": "180",
  //       "name": "Boston Pizza",
  //       "address": "400 Progress Avenue, Scarborough, ON M1P 5J1, Canada",
  //       "center":{
  //          "longitude":"-79.451664",
  //          "latitude":"43.725454"
  //          //"lat": "43.77543",
  //          //"lng":"-79.263066"
  //       }
  //     },
  //     {
  //       "id": "181",
  //       "name": "East Side Marios",
  //       "address": "12 Lebovic Avenue, Toronto, ON M1L 4W1, Canada",
  //       "center":{
  //         "latitude": "43.7242333",
  //         "longitude":"-79.29024"
  //       }
  //     },
  //     {
  //       "id": "182",
  //       "name": "Wild Wing",
  //       "address": "1557 The Queensway Unit 1, Etobicoke, ON M8Z 1T8, Canada",
  //       "center":{
  //         "latitude": "43.6181012",
  //         "longitude":"-79.5390509"
  //       }
  //     },
  //     {
  //       "id": "179",
  //       "name": "St. Louis Bar and Grill",
  //       "address": "90 Edgeley Boulevard , Unit 106, Concord, ON L4K 5W7, Canada",
  //       "center":{
  //         "latitude":"43.7966469",
  //         "longitude":"-79.5331189"
  //       }
  //     },
  //     {
  //       "id": "178",
  //       "name": "Golden Thai Restaurant",
  //       "address": "105 Church Street, Toronto, ON M5C 2G8, Canada",
  //       "center":{
  //         "latitude":"43.652352",
  //         "longitude":"-79.375134"
  //       }
  //     },
  //     {
  //       "id": "154",
  //       "name": "Pizza Depot",
  //       "address": "945 Peter Robertson Boulevard, Brampton, ON L6R 0K1, Canada",
  //       "center":{
  //         "latitude": "43.7477189",
  //         "longitude":"-79.7456055"
  //       }
  //     },
  //     {
  //       "id": "177",
  //       "name": "Geox (Yorkdale Mall)",
  //       "address": "3401 Dufferin Street, North York, ON M6A 2T9, Canada",
  //       "center":{
  //         "latitude": "43.725454",
  //         "longitude":"-79.451664"
  //       }
  //     },
  //     {
  //       "id": "176",
  //       "name": "Little Caesars",
  //       "address": "3055 Argentia Road, Mississauga, ON L5N 8E1, Canada",
  //       "center":{
  //         "latitude":"43.595088",
  //         "longitude":"-79.78698"
  //       }
  //     },
  //     {
  //       "id": "175",
  //       "name": "Jimmy's Coffee",
  //       "address": "107 Portland Street, Toronto, ON M5V 3N8, Canada",
  //       "center":{
  //         "latitude": "43.645281",
  //         "longitude":"-79.400271"
  //       }
  //     },
  //     {
  //       "id": "122",
  //       "name": "One Eleven Office",
  //       "address": "111 Richmond Street West, Toronto, ON M5H 3K6, Canada",
  //       "center":{
  //         "latitude": "43.6502837",
  //         "longitude":"-79.3843006"
  //       }
  //     },
  //     {
  //       "id": "189",
  //       "name": "Via Informatics TELUS WiFi Lab",
  //       "address": "768 Seymour Street, Vancouver, BC V6B, Canada America/Vancouver"
  //     },
  //     {
  //       "id": "188",
  //       "name": "Via Informatics TELUS Dynamic Insights",
  //       "address": "25 York Street, Toronto, ON M5J 2V5, Canada America/Toronto"
  //     }
  //
  // ];





    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    $scope.hourlyData;
    var chart;
    $scope.searchrange = 1000;
    $scope.map = {
        center: {latitude: 43.650505, longitude: -79.383989 },
        zoom: 12,
        pan: true,
        options : {panControl:true, tilt:45}
    };
    $scope.options = {scrollwheel: false,pan: true};
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 43.650505,
            longitude: -79.383989
        },
        options: { name: "111 Richmond St. Toronto, Ontario",opacity:0.8 }
    };
    $scope.circles = [
        {
            id: 1,
            center: {
                latitude: 43.650505,
                longitude: -79.383989
            },
            radius: 1000,
            stroke: {
                color: '#6ebe44',
                weight: 2,
                opacity: 1
            },
            fill: {
                color: '#6ebe44',
                opacity: 0.1
            },
            geodesic: true, // optional: defaults to false
            draggable: false, // optional: defaults to false
            clickable: false, // optional: defaults to true
            editable: false, // optional: defaults to false
            visible: true, // optional: defaults to true
            control: {}
        }
    ];





    $scope.currentLocation = LocationResults.getCurrentLocation();
    console.log("CurrentLocation:" + $scope.currentLocation);



    $scope.setSelectedLocation = function(location) {
        console.log("Setting selected location:" + location.name);
        document.getElementById("contentArea").style.display = "block";
        LocationResults.setCurrentLocation(location);
        $scope.currentLocation = LocationResults.getCurrentLocation();
        console.log("New CurrentLocation:" + $scope.currentLocation);
        //this tells function getReport to function showLast7Days which gets getDayReport. getDayReport tells tweetReports based on location. magic happens in this function.
        $scope.getReport();
        $scope.getOnsiteDataPreGenReport();
        $scope.addLocationToMap();
    }



    $scope.getSelectedLocation = function() {
        console.log("Getting selected location...");
        $scope.currentLocation = LocationResults.getCurrentLocation();
    }

    if($scope.currentLocation!=null) {
        console.log("Showing selected location..." + $scope.currentLocation.center.latitude) ;
        //$scope.addLocationToMap();
        $scope.marker.coords = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };

        $scope.marker.options = {
            name: $scope.currentLocation.name
        };
        $scope.circles[0].radius = $scope.searchrange;
        $scope.map.pan = true;
        $scope.map.center = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };
        $scope.circles[0].center = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };
    }




    $scope.addLocationToMap = function() {
        console.log("Showing selected location...");
        $scope.marker.coords = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };

        $scope.marker.options = {
            name: $scope.currentLocation.name
        };
        $scope.circles[0].radius = $scope.searchrange;
        $scope.map.pan = true;
        $scope.map.center = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };
        $scope.circles[0].center = {
            latitude: $scope.currentLocation.center.latitude,
            longitude: $scope.currentLocation.center.longitude
        };
    }






    $scope.showDailyData = function () {
        // Instantiate and draw our chart, passing in some options.
        // Set chart options
        var options = {
            width:900,
            height:300,
            colors:['#6ebe44'],
            chartArea: {left:0,top:20,width: '100%'},
            legend: { position: 'bottom' } ,
            fontSize:11
        };

        chart = new google.visualization.ColumnChart(document.getElementById('barchart_div'));
        chart.draw($scope.data, options);
        // Every time the table fires the "select" event, it should call your
        // selectHandler() function.
        google.visualization.events.addListener(chart, 'select', selectHandler);
    }



    function selectHandler(e) {
        var selection = chart.getSelection();
        console.log("Selection " + selection.length);
        var index;
        var item = selection[0];
        if (item != null) {
            if (item.row != null && item.column != null) {
                index = item.row;
            }

            $scope.showDay(index);
            $scope.$apply();
        }

    }




    $scope.getReport = function () {
       $scope.showLast7Days(7);
    }







    $scope.showHourlyData = function (day) {
      var options = {
           width:900,
           height:300,
           colors:['#6ebe44'],
           legend: { position: 'bottom' },
           chartArea: {left:0,top:20,width: '100%'},
           fontSize:11
      };
      var linechart = new google.visualization.AreaChart(document.getElementById('linechart_div'));
      var hours = $scope.hourlyData[day];
      var hourly = google.visualization.arrayToDataTable(hours);
      linechart.draw(hourly, options);
    }





   $scope.showLast7Days = function () {
      //console.log("Last 7 days");
      $scope.getDayReport(7);
   }
   $scope.showLast4Weeks = function () {
      //console.log("Last 4 weeks");
      $scope.getDayReport(28);
   }
   $scope.showLast8Weeks = function () {
      //console.log("Last 8 weeks");
      $scope.getDayReport(56);
   }






   $scope.getDayReport = function (numDays) {
          $scope.currentLocation = LocationResults.getCurrentLocation();
          console.log("New CurrentLocation:" + $scope.currentLocation);

          $scope.tweetReports;
          console.log("NumDays:" + numDays);
          var params = {"locationId": $scope.currentLocation.buildingId,"days":numDays};
          console.log("Location id:" + $scope.currentLocation.buildingId);
          $scope.results = TweetReports.query(params);

          $scope.results.$promise.then(function (results) {
              console.log("Report Results:" + results);
              $scope.tweetReports = results;
              var range = $scope.tweetReports.dateRange;
              var dates = range.split(":");
              var startDate = dates[0];
              var endDate = dates[1];
              var items = startDate.split("-");
              var startYear = items[0];
              var startMonth = items[1];
              var startDay = items[2];
              var items = endDate.split("-");
              var endYear = items[0];
              var endMonth = items[1];
              var endDay = items[2];
              var range = months[parseInt(startMonth)-1] + " " + startDay + " to " + months[parseInt(endMonth)-1]  + " " + endDay + ", " + endYear;

              $scope.dateRange = range;

              $rootScope.$broadcast('newReportsEvent', $scope.tweetReports);
              LocationResults.setTweetReports($scope.tweetReports);
              console.log("Reports:" + $scope.tweetReports);
              console.log("Report date:" + $scope.tweetReports.dateRange);

              $scope.totalInteractions = $scope.tweetReports.weeklyTweetTotal.toLocaleString();
              $scope.topTweeters = $scope.tweetReports.topTweeters;
              console.log("Top Tweeters:" + $scope.topTweeters);

              $scope.hourlyData = [];
              var hourData = [];
              var hourItem = [];
              var dailyData = [];
              var day;
              var date;
              var item = ['Day', 'Number of Interactions', { role: 'style' }];

              dailyData.push(item);

              var dailyReports =  $scope.tweetReports.dailyReports;
              $scope.numberOfdailyReports = dailyReports.length;
              for (var i = 0; i < dailyReports.length; i++) {
                  if(dailyReports[i]!=null) {
                      console.log("Tweets on " + dailyReports[i].day + ":" + dailyReports[i].tweets);
                      day = dailyReports[i].day.split(" ")[0];
                      date = dailyReports[i].day.split(" ")[1];
                      date = date.substr(date.indexOf('-')+1);
                      if(numDays<=7) {
                          day = day.toLowerCase();
                          day = day.charAt(0).toUpperCase() + day.substr(1);
                      } else {
                          day = date;
                      }
                      item = [day, dailyReports[i].tweets, '#6ebe44'];
                      dailyData.push(item);
                      hourData = [];
                      hourItem = [];
                      hourItem = ['Time', 'Number of Interactions', { role: 'style' }];
                      hourData.push(hourItem);
                      var ampm = "am";
                      var h = 0;
                      for (var j = 0; j < 24; j++) {
                          if(j>11) {
                              ampm = "pm";
                              if(h>=13) {
                                  h = h - 12;
                              }
                          }
                          hourItem = [h+ampm, dailyReports[i].hourly[j], '#6ebe44'];
                          hourData.push(hourItem);
                          h++;
                      }
                      $scope.hourlyData.push(hourData);
                  }

              }
              $scope.dayIndex = 0;

              //NEW july 16
              //$scope.dailyReportDate = $scope.tweetReports.dailyReports[0].day;
              if($scope.tweetReports.dailyReports[0]!=null) {
                $scope.dailyReportDate = $scope.tweetReports.dailyReports[0].day;
              }

              //NEW july 23
              if(dailyData.length>1) {
                console.log("Daily data:" + dailyData);
                $scope.data = google.visualization.arrayToDataTable(dailyData);
                $scope.showDailyData();
              }
              if($scope.hourlyData.length>0) {
                console.log("Hourly data:" + $scope.hourlyData);
                $scope.hourly = google.visualization.arrayToDataTable($scope.hourlyData);
                $scope.showHourlyData(0);
              }

              $scope.data = google.visualization.arrayToDataTable(dailyData);
              $scope.hourly = google.visualization.arrayToDataTable($scope.hourlyData);
              //$scope.showDailyData();
              //$scope.showHourlyData(0);
              $scope.searchString = $scope.currentLocation.address;
              $scope.dayrange = numDays;
              $scope.findTweeters();
          })
       }











       $scope.getOnsiteDataPreGenReport = function () {
               $scope.currentLocation = LocationResults.getCurrentLocation();
               console.log("Onsite data CurrentLocation:" + $scope.currentLocation.buildingId);

               $scope.mostVisitedHour ="N/A";
               $scope.mostPostalCode = "N/A";
               $scope.mostVisitsToDate = "N/A";
               $scope.mostCustomer = "N/A";
               $scope.onsiteVisitorsWeek = "N/A";
               $scope.onsiteWeek = "N/A";
               $scope.averageVisitorsDay = "N/A";
               $scope.averageVisitDuration = "N/A";
               $scope.onsiteMostVisitedDay = "N/A";
               $scope.onsiteMostVisitedDayTotal = "N/A";
               $scope.weeklyChange = "N/A";
               $scope.mostFrequestCustomer = "N/A";
               $scope.mostFrequestCustomerVisits = "N/A";
               $scope.busiestHourDay = "N/A";
               $scope.busiestHour = "N/A";
               $scope.busiestHourVisits = "N/A";

               var dailyVisitorData = [];
               var item = ['Day', 'Number of Visitors', { role: 'style' }, 'New Visitors', { role: 'style' }];
               dailyVisitorData.push(item);

               console.log("Getting onsite report for :" + $scope.currentLocation.buildingId);

               var params = {"buildingId": $scope.currentLocation.buildingId, "dt":"2015-04-26"};
               $scope.report = OnsitePregenReport.query(params);
               $scope.report.$promise.then(function (results) {
                   console.log("Onsite Report Results:" + results.totalVisits);
                   if(results!=null) {
                       $scope.onsiteVisitorsWeek = results.totalVisits.toString().toLocaleString();
                       //$scope.onsiteVisitorsWeek.toLocaleString();
                       $scope.onsiteWeek = results.weekName;
                       $scope.averageVisitorsDay = results.averageVisitorsDay;
                       $scope.weeklyChange = results.weeklyChange.toFixed(2);
                       $scope.onsiteMostVisitedDay = results.mostVisitedDay;
                       $scope.onsiteMostVisitedDayTotal = results.mostVisitedDayTotal;
                       $scope.averageVisitDuration = results.averageVisitDuration;
                       $scope.mostFrequentCustomer = results.mostFrequentCustomer.mac;
                       $scope.mostFrequentCustomerVisits = results.mostFrequentCustomer.numVisits;
                       $scope.busiestHourDay = results.busiestHour.day;
                       $scope.busiestHour = parseInt(results.busiestHour.hour);
                       $scope.busiestHourDay = results.busiestHour.day;
                       $scope.busiestHourVisits = results.busiestHour.visits;
                       $scope.topCustomers = results.topCustomers;
                       $scope.hourlyBreakdown = results.hourlyBreakdown;
                       $scope.durations = results.durations;
                       $scope.days = results.days;

                       var busyHour = $scope.busiestHour;
                       $scope.mostVisitedHour;
                       if(busyHour==12) {
                           $scope.mostVisitedHour = "12PM" + " - " + "1PM";
                       } else {
                           if (busyHour > 12) {
                               $scope.mostVisitedHour = (busyHour - 12) + "PM - " + (busyHour - 11) + "PM";
                           } else {
                               $scope.mostVisitedHour = (busyHour) + "AM - " + (busyHour + 1) + "AM";
                           }
                       }

                       if($scope.weeklyChange>0) {
                           $scope.changeIcon = "glyphicons glyphicons-chevron-up";
                       }
                       if($scope.weeklyChange<0) {
                           $scope.changeIcon = "glyphicons glyphicons-chevron-down";
                       }

                       var dailyReports = results.days;
                       var item;

                       for (var i = 0; i < dailyReports.length; i++) {
                           if (dailyReports[i] != null) {
                               console.log("Visits on " + dailyReports[i].dayOfWeek + " " + dailyReports[i].day + ":" + dailyReports[i].total_visit);
                               var date = dailyReports[i].dayOfWeek + ", " + dailyReports[i].day;
                               item = [date, dailyReports[i].total_visit, '#301050', dailyReports[i].newMac, '#6ebe44'];
                               dailyVisitorData.push(item);
                           }
                       }

                       var hourlyReports = results.hourly_breakdown;
                       $scope.hourlyVisitorData = [];
                       var hourlyitem = ['Hour', 'Number of Visitors', { role: 'style' }];
                       $scope.hourlyVisitorData.push(hourlyitem);

                       var hourlyTotals = results.hourlyBreakdown;

                       var ampm = "am";
                       var h = 0;
                       for(var i=0; i<24;i++) {
                           h = i;
                           if(i>11) {
                               ampm = "pm";
                               if(i>=13) {
                                   h = h - 12;
                               }
                           }
                           hourlyitem = [h+ampm, hourlyTotals[i],'#6ebe44'];
                           $scope.hourlyVisitorData.push(hourlyitem);
                           h++;
                       }

                       var durations = results.durations;
                       $scope.durationData = [];
                       var durationitem = ['Minutes', 'Number of Vistis', { role: 'style' }];
                       $scope.durationData.push(durationitem);
                       for(var i=0; i<durations.length;i++) {
                           durationitem = [i, durations[i],'#6ebe44'];
                           console.log("DurationItem:" + durationitem);
                           $scope.durationData.push(durationitem);
                       }

                       $scope.visitordata = google.visualization.arrayToDataTable(dailyVisitorData);
                       $scope.showDailyVisitorData();
                       $scope.showHourlyVisitorData();
                       $scope.showDurationData();
                   }
               })
           }






           $scope.showDailyVisitorData = function () {
                 // Instantiate and draw our chart, passing in some options.
                 // Set chart options
                 var options = {
                     width:900,
                     height:300,
                     colors:['#301050','#6ebe44'],
                     chartArea: {left:20,top:20,width: '100%'},
                     legend: { position: 'bottom' },
                     //legend: { position: 'top', maxLines: 3 },
                     isStacked:true,
                 };

                 var visitorchart = new google.visualization.ColumnChart(document.getElementById('onsite_visitors_barchart_div'));
                 visitorchart.draw($scope.visitordata, options);
             }






             $scope.showHourlyVisitorData = function () {
                 // Instantiate and draw our chart, passing in some options.
                 // Set chart options
                 console.log("Graphing hourly data...");
                 var options = {
                     width:900,
                     height:300,
                     colors:['#6ebe44'],
                     chartArea: {left:0,top:20,width: '100%'},
                     legend: { position: 'bottom' },
                     fontSize:9
                 };

                 var linechart = new google.visualization.AreaChart(document.getElementById('onsite_timebreakdown_chart_div'));
                 //console.log("Graphing ..." + $scope.hourlyVisitorData);
                 var hourly = google.visualization.arrayToDataTable($scope.hourlyVisitorData);

                 linechart.draw(hourly, options);
             }





             $scope.showDurationData = function () {
                 // Instantiate and draw our chart, passing in some options.
                 // Set chart options
                 console.log("Graphing online visitor duration data...");
                 var options = {
                     width:900,
                     height:300,
                     colors:['#6ebe44'],
                     chartArea: {left:0,top:20,width: '100%'},
                     legend: { position: 'bottom',alignment :'center' }
                 };

                 var linechart = new google.visualization.AreaChart(document.getElementById('onsite_visitor_chart_div'));
                 //console.log("Graphing ..." + $scope.durationData);
                 var minutesData = google.visualization.arrayToDataTable($scope.durationData);
                 linechart.draw(minutesData, options);
             }





             $scope.showTweeters = function () {
                   document.getElementById("contentArea").style.visibility = "visible";
                   $scope.currentLocation = { id:"", name:$scope.searchString, address: "", lat: "", lng:"" };
                   $scope.dayrange = "30";
                   //$scope.$apply();
                   $scope.findTweeters();
                 }






             $scope.findTweeters = function () {
               $scope.tweeterResults;
               var geocoder = new google.maps.Geocoder();
               if ($scope.searchString != null) {
                   console.log("Searching for tweeters at address :" + $scope.searchString);
                   console.log("Days :" + $scope.dayrange + " Meters :" + $scope.searchrange + " Limit :" + $scope.limit );

                   geocoder.geocode( { 'address': $scope.searchString}, function(results, status) {
                       if (status == google.maps.GeocoderStatus.OK) {
                           console.log("status:" + results[0].geometry.location);
                           $scope.marker.coords = {
                               latitude: results[0].geometry.location.lat(),
                               longitude: results[0].geometry.location.lng()
                           };

                           $scope.marker.options = {
                               name: $scope.searchString
                           };
                           $scope.circles[0].radius = $scope.searchrange;
                           $scope.map.pan = true;
                           $scope.map.center = {
                               latitude: results[0].geometry.location.lat(),
                               longitude: results[0].geometry.location.lng()
                           };
                           $scope.circles[0].center = {
                               latitude: results[0].geometry.location.lat(),
                               longitude: results[0].geometry.location.lng()
                           };


                       } else {
                           console.log('Geocode was not successful for the following reason: ' + status);
                       }
                   });
                   $scope.address = $scope.searchString;
                   $scope.searchrange = 1000;
                   $scope.limit = "200";
                   //var params = {"searchString": $scope.searchString, "days":7, "range":1000, "top":100};
                   var params = {"searchString": $scope.searchString, "days":$scope.dayrange, "range":$scope.searchrange, "top":$scope.limit};
                   console.log(params);
                   $scope.tweeters = TweeterSearch.query(params);

                   $scope.tweeters.$promise.then(function (results) {
                       console.log("Tweeters size:" + results.length);
                       $scope.tweeterResults = new Array(results.length);

                       for (var i = 0; i < results.length; i++) {
                           $scope.tweeterResults[i] = results[i];

                           console.log("Tweeter:" + results[i]);
                       }
                       $rootScope.$broadcast('newResultsEvent', $scope.tweeterResults);
                       TweeterResults.setTweeters($scope.tweeterResults);
                       //$scope.tweeters = TweeterSearch.query(params);
                       console.log("Results:" + $scope.tweeterResults);

                   });
                   }
                 }
  })





  .controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
      };
  })










  // .controller('OutputCtrl', function($scope, $http) {
  //   $http({
  //     //url : "http://52.2.128.53:9101/user/lgweb/location",
  //     //url : "http://52.3.87.216:9100/user/lgweb/location",
  //     url : "https://api.github.com/repos/angular/angular.js/issues/",
  //     method : 'GET',
  //     headers: {'Authorization':'Basic bGd3ZWI6bGdlbjF1cw==', 'Access-Control-Request-Headers':'accept-language, origin, accept-encoding', 'Access-Control-Allow-Headers':'x-requested-with, content-type, accept, origin, authorization, x-csrftoken'}
  //     })
  //   .success(function(status, data) {
  //     $scope.status = status;
  //     $scope.data = data;
  //       $scope.result = "ok";
  //   }).error(function(data) {
  //       $scope.result = "ko";
  //   });
  // })


  // .controller('OutputCtrl', function ($scope, $http) {
  //   var output = this;
  //   output.locationsB = [];
  //   $http.get('http://52.2.128.53:9101/user/lgweb/location', {
  //       //headers: {'Authorization':'Basic bGd3ZWI6bGdlbjF1cw=='}
  //       headers: {'Authorization':'Basic bGd3ZWI6bGdlbjF1cw==', 'Access-Control-Request-Headers':'accept-language, origin, accept-encoding', 'Access-Control-Allow-Headers':'x-requested-with, content-type, accept, origin, authorization, x-csrftoken'}
  //   }).success(function(data) {
  //       output.locationsB = data;
  //   })
  // })










  .factory('ngIssues', function ($resource) {
      //return $resource('http://52.2.128.53:9101/user/lgweb/location');
      //return $resource('data/outputs.json');
      return $resource('https://api.github.com/repos/angular/angular.js/issues/');
  })


  .controller('MyCtrl1', ['$scope', 'ngIssues', function (scope, ngIssues) {
      //scope.myData = { issues:[] };
      scope.setList = function () {
          ngIssues.query({
          }, function (data) {
              //scope.myData.issues = data;
              scope.issues = data;
          });
      };
      scope.setList();
  }])






  // .controller('OutputCtrl', function ($scope, $http) {
  //   var output = this;
  //   output.locationsB = [];
  //   $http.get('data/outputs.json').success(function(data){
  //     output.locationsB = data;
  //   });
  // })
