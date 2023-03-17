function episodeCounter(array) {

    let total = 0;
    for (let i = 0; i < array.length; i++) {
        const counter = array[i].split(' '); 
        total += counter.length; 
    }
    
    return total
}


export default episodeCounter;