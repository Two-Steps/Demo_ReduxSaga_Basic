const value = [{ num: 0, color: 'green' }];

export default function counter(state = value, action) {
    switch (action.type) {
        case 'INCREMENT':
            let items = [...state];
            items[0] = { ...items[0], num: items[0].num + 1, color: action.color }
            return items;
        case 'DECREMENT':
            let itemList = [...state];
            itemList[0] = { ...itemList[0], num: itemList[0].num - 1, color: action.color }
            return itemList;
        default:
            return state;
    }
}