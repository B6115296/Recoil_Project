
import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const productListState = atom({
    key: 'productState',
    default: [],
})

export const cartState = atom({
    key: 'cartState',
    default: [],
    effects_UNSTABLE: [persistAtom],
})


export const productById = atom({
    key: 'productById',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const stateProduct = atom({
    key: 'stateProduct',
    default: []
})