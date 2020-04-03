const sf90 = {
  _id: ObjectId("5db8168127621518a8dc7df9"),
  make: "Ferrari",
  model: "SF90",
  purpose: "Grand Touring",
  powertrain: {
    motor: "ICE : 4l twin-turbo V8 && ELECTRIC : 7.9 KWh",
    power: "1000hp",
    type: "hybrid",
    performance: {
      acceleration_60_MPH: "2.5 sec",
      speed: 217
    }
  },
  theMotive: "terrify you with sheer Thrust"
}

db.createCollection("cars", {validator : 
    {
        $jsonschema : {
            bsontype : "object",
            required : ["make", "model", "purpose", "powertrain", "motive"],

            properties : {
                make : {
                    bsontype : "string",
                    description : "Name of the Car Manufacturer"
                },
                
                model : {
                    bsontype : "string",
                    description : "Name of the Car model"
                },

                purpose : {
                    bsontype : "string",
                    description : "What is it built for?"
                },

                powertrain : {
                    bsontype : "object",
                    description : "Car's engine specifications and its performance figures",                    

                    items : {
                        bsontype : "object",
                        required : ["motor", "power", "type", "performance"],

                        properties : {
                            motor : {
                                jsontype : "string",
                                description : "the actual engine fitted"
                            },

                            power : {
                                jsontype : "string",
                                description : "How much power does the engine produce?"
                            },

                            type : {
                                jsontype : "string",
                                description : "engine type (ICE, Hybrid or Electric)"
                            }, 
                            
                            performance : {
                                bsontype : "object",
                                required : ["acceleration_60_MPH", "topspeed"],

                                items : {
                                    acceleration_60_MPH : {
                                        bsontype : "string",
                                        description : "time it takes to reach 60mph"
                                    }, 

                                    topspeed : {
                                        bsontype : "numbers",
                                        description : "The highest speed the car can achieve"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})