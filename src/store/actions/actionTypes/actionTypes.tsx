interface getUsers {
    type: 'test';
    payload: Object
}

interface addWeight {
    type: 'addWeight';
    payload: Object
}

export type Action = getUsers | addWeight;
