const INITIAL_STATE = {
    count: 0,
}

const loaderReducer = (state = INITIAL_STATE, { type }) => {
    const requestStatus = type.split('_').reverse()[0]
    switch (requestStatus) {
        case 'PENDING':
            return {
                ...state,
                count: state.count + 1
            }
        case 'SUCCESS':
        case 'FAILED':
            return {
                ...state,
                count: state.count -1
            }
        default:
            return state
    }
}

export default loaderReducer
