var maxFloor = 10;
var minFloor = 1;
var elevators = [];

function initElevators(elevatorCount, floorsCount)
{
    maxFloor = floorsCount;
    for(var index = 0; index < count; count++)
    {
        addElevator();
    }
}

function addElevator()
{
    elevators.push({id: elevators.length, currentFloor: 1 , desiredFloors:[1], trips:0, floorsPassed:0, doorOpen: false, occuppied: false})
}

function callElevator(desiredFloor)
{
    var elevatorId = 0;
    if(desiredFloor < maxFloor && desiredFloor > minFloor)
    {
        elevatorId = findClosetElevator(desiredFloor);   
    } 
    else if(desiredFloor < minFloor)
    {
        elevatorId = findClosetElevator(minFloor); 
    }
    else if(desiredFloor > maxFloor)
    {
        elevatorId = findClosetElevator(maxFloor); 
    }
    fetchElevator(elevatorId, desiredFloor);
}

function findClosetElevator(desiredFloor)
{
    var closest = {id:-1,distance:-1};
    elevators.forEach(element => {
        var distance = element.currentFloor - desiredFloor;
        if(distance < 0)
        {
            distance = distance * -1;
        }
        if(closest.id === -1)
        {
            closest.id = element.id ;
            closest.distance = distance;            
        }
        if(element.currentFloor == desiredFloor && element.occuppied == false)
        {
            return element.id;
        }
        if(closest.distance > distance )
        {
            closest.id = element.id ;
            closest.distance = distance;     
        }
    });
    return closest.id;
}

function startElevator(id, desiredFloor)
{
    elevators.forEach(element => {
        if(element.id === id)
        {
            element.desiredFloor = desiredFloor
            element.doorOpen = false;
            element.occuppied = true;
        }
    });
}

function fetchElevator(id, desiredFloor)
{    
    elevators.forEach(element => {
        if(element.id === id)
        {
            element.desiredFloors.push(desiredFloor);
        }
    });
}

function report(id,currentFloor)
{
    elevators.forEach(element => {
        if(element.id === id)
        {
            element.currentFloor= currentFloor;
            element.doorOpen = true;
        }
    });
}

function moveElevators()
{
    var elevatorsOccupied = true;
    while(true)
    {
        var moving = false;
        elevators.forEach(elevator, index => {
            if(elevator.occuppied === true && !isDesiredFloor(elevator.currentFloor, element))
            {                
                moving = true;
                elevator.doorOpen = false;
                elevator.currentFloor++;
                elevator.floorsPassed++;
            }
            if(elevator.occuppied === true && isDesiredFloor(elevator.currentFloor, elevator))
            {                
                elevator.doorOpen = true;
                removeDesiredFloors(index)
            }
            if(elevator.desiredFloors.length == 0)
            {
                elevator.doorOpen = false;
                elevators.trips++;
            }
        });

        if(!moving)
        {
            elevatorsOccupied = false;
        }
    }
}

function isDesiredFloor(floor, elevator)
{
    elevator.desiredFloors.forEach(floorNum => {
        if(floorNum == floor)
        {
            return true;
        }
    });
    return false;
}

function removeDesiredFloors(index)
{
    elevator.splice(index,1);
}