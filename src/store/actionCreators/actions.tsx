interface Weight{
    time: Date, 
    size: string
}

export function addWeight(weight: Weight) {
    return {
        type : "addWeight", 
        payload: weight
    }
}