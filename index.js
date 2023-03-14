function distanceFromHqInBlocks(pickupStreet){
    const hqStreet = 42 ; 
    if(pickupStreet>42){
        let distanceBlocks = pickupStreet - hqStreet;
        return distanceBlocks;
    }else {
        let distanceBlocks = hqStreet - pickupStreet;
        return distanceBlocks;
    }
   
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(value){
    let distanceFeet = distanceFromHqInBlocks(value) * 264;
    return distanceFeet;
}

console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination){
    let distance;
    if(start>destination){
        distance = (start - destination) * 264;
    } else {
        distance = (destination - start) * 264;
    };
    return distance;
}

console.log(distanceTravelledInFeet(50,42));

function calculatesFarePrice(start, destination){
    let charges;
    if(distanceTravelledInFeet(start, destination)<=400){
        return 0;
    }else if(400<distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination)<2000){
        charges = (distanceTravelledInFeet(start,destination)-400) * 0.02;
        return charges;
    }else if(2000<distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination)<2500){
        charges=25;
        return charges;
    }else {
        return "cannot travel that far";
    }
}

console.log(calculatesFarePrice(45,41));
