var maxFloor = 10;
var minFloor = 1;
var elevators = [{id:0, currentFloor: 1 , desiredFloor:1, trips:0, doorOpen: false}];


function addElevator()
{
    elevators.push({id: elevators.length, currentFloor: 1 , desiredFloor:1, trips:0, doorOpen: false})
}

function callElevator(desiredFloor)
{
    
}



function findClosetElevator()
{
    var closest = 0;
    elevators.forEach(element => {
        closest = desiredFloor - element.currentFloor;
        if(element.currentFloor == desiredFloor)
        {
            if(!element.doorOpen)
            {
                stopElevator(desiredFloor)
            }
        }
    });
}

function startElevator(id, desiredFloor)
{

}

function stopElevator(id, desiredFloor)
{    
    openDoor(id);
}

function openDoor(id)
{

}

function monitorElevators()
{

}
