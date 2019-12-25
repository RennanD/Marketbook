import { produce } from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                draft.push(action.product);
            });
        default:
            return state;
    }
}
