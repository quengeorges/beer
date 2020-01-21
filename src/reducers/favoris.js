const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return [
                ...this.state,
                {
                    item: action.item
                }
            ];
        default:
            return state
    }
};

export default items