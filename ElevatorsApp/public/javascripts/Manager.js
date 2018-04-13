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
    elevators.push({id: elevators.length, currentFloor: 1 , desiredFloor:1, trips:0, doorOpen: false})
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
        if(element.currentFloor == desiredFloor)
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
        }
    });
}

function fetchElevator(id, desiredFloor)
{    
    elevators.forEach(element => {
        if(element.id === id)
        {
            element.currentFloor= desiredFloor
            element.doorOpen = true;
        }
    });
}