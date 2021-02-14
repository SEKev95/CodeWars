// Wolf in Sheeps clothing
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise,
//  return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {
    const index=queue.indexOf('wolf')
    return index===queue.length-1?"Pls go away and stop eating my sheep"
    :`Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}