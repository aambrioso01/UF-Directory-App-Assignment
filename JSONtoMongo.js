'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

mongoose.connect('mongodb://CEN3031:CEN3031TA@ds261072.mlab.com:61072/ufdirectory_ambrioso');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
/*
var newEntry = Listing({"code": "AAF", 
            "name": "Academic Advisement - Farrior Hall", 
            "coordinates": {
                "latitude": 29.6502323, 
                "longitude": -82.34563860000002
            }, 
            "address": "100 Fletcher Dr, Gainesville, FL 32611, United States" });

newEntry.save();
*/
//db.collection.insertOne(newEntry);

fs.readFile('listings.json', 'utf8', function(err, data){
  
  var listingsData = JSON.parse(data);

  var i;
  for(i = 0; i < listingsData.entries.length; i++){
    var newEntry = new Listing(listingsData.entries[i]);
    newEntry.save();
  }
})

/*
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */