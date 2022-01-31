const initialState = {
    order: []
}

export const ordersReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case "ordersReducer/SET-ITEMS-TO-ORDER": {
            let copyState = {...state}
            copyState.order.push(action.items)
            console.log(`Store: ${copyState}`)
            return {...copyState}
        }
        default:
            return state
    }
}

export const setItemsOrderToArrayAC = (items: any) => ({
    type: 'ordersReducer/SET-ITEMS-TO-ORDER', items
})

