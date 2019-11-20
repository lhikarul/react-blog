const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }

    if (action.type === 'search_focus') {
        return {
            focused: true
        }
    }

    return state;

}
