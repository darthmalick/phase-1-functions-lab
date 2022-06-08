// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42)
    return blocks - 42
    else (blocks < 42)
    return 42 - blocks
}
function distanceFromHqInFeet(feet){
if (feet > 42)
return (feet-42)*264;
else (feet < 42)
return (42-feet)*264
}
function distanceTravelledInFeet(fLocation, dLocation){
if (fLocation > dLocation)
return (fLocation - dLocation) * 264
else (fLocation < dLocation)
return (dLocation - fLocation) * 264
}
function calculatesFarePrice(start, destination){
const blockDistance = Math.abs(start - destination)
const distanceTraveled = blockDistance * 264;
let dis = distanceTraveled - 400
let price = dis * 0.02
if (distanceTraveled <= 400){
    console.log('give customers a free sample');
    return 0
} 
else if (distanceTraveled > 400 && distanceTraveled <2000)
return (price)
else if (distanceTraveled >= 200 && distanceTraveled <=2500)
return 25
else if (distanceTraveled >= 2500)
return 'cannot travel that far'
}