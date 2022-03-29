FrontEnd 
 Rider 
#   Requests a Trip 
    POST REQUEST /Trip params(id, Current Location, Destination)

 Driver 
   
   PUT REQUEST /driver params(id, Location, is_active: true)

# The Driver and Passenger are vibing and everything is great!
# GPS location === Destination 
  PUT REQUEST /trip (Status: "Complete")


Backend
TripController
 def create 
  passenger = find_passanger(id: params[:passenger_id])
  #find_driver is a method in Trip model to find all active drivers and then find driver that matches passenger_location
  driver = find_driver(passenger_location)
  destination = destination  
  status = "IN PROGRESS"
 end

# Mark trip as complete, so that the record is stored in the DB and not deleted. 
def edit
   trip = Trip.find_by(id)
   trip.update(status: COMPLETE)
 end

DriverController 
 def edit
    driver = find_drive(id: params[:driver_id])
    driver.update(location: current_location, is_active: true) 
 end

# Trip Model 
 belongs to :driver, :passenger
 find_driver(passenger_location)
   active_drivers = Driver.find {|d| driver.available === true}
   assign driver = active_driver {|d| driver.location === passenger_location}
 return assign driver
end

Schema 
 Table: Driver
    :id 
    :is_active
    :location 

 Table: Passenger 
  :id 
  :location 

 Table: Trips 
  :driver_id 
  :passenger_id 
  :destination
  :status

  

