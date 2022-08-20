// Code your solution in this file!
function distanceFromHqInBlocks(x){
    let blocks = (x - 42);
    return Math.abs(blocks);
}
function distanceFromHqInFeet(x){
    return Math.abs(x - 42) * 264;
}
function distanceTravelledInFeet(x,y){
    return Math.abs(x - y) * 264;
}
function calculatesFarePrice(start, destination){
    let dist = Math.abs(start - destination) * 264;
    if (dist <= 400){
        return 0;
    }
    else if(dist <= 2000){
        return (dist-400)*0.02;
    }
    else if(dist > 2000 && dist <=2500)
    {
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}