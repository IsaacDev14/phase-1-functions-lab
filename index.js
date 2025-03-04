// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    const headQ = 42 ;
    return Math.abs(distance - headQ)
}


function distanceFromHqInFeet(distance){
    const headQ = 42;
    return Math.abs((distance - headQ)*264)
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start)*264)
}

function calculatesFarePrice(start, destination){
    const feetPrice = Math.abs((destination - start)*264)
    if(feetPrice < 400 ) {
        return 0;
    } else if(feetPrice > 400 && feetPrice <= 2000){
        return 2.56;
    }else if(feetPrice > 2000 && feetPrice <= 2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
}