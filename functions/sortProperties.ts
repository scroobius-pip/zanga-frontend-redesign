import { Property } from '../types'

export type PropertySortOptions = 'bounty_asc' | 'bounty_desc' | 'price_asc' | 'price_desc'

type PropertySortSpec = {
    [option in PropertySortOptions]: {
        key: keyof Property,
        invert: boolean
    }
}

const PropertySortSpec: PropertySortSpec = {
    bounty_asc: {
        invert: true,
        key: 'bounty'
    },
    bounty_desc: {
        invert: false,
        key: 'bounty'
    },
    price_asc: {
        invert: true,
        key: 'costValue'
    },
    price_desc: {
        invert: false,
        key: 'costValue'
    }
}

export default (properties: Property[], by: keyof PropertySortSpec): Property[] => {
    const spec = PropertySortSpec[by]
    const filteredProperties = properties.sort(compare(spec.invert, spec.key))
    return filteredProperties
}


const compare = (invert: boolean, key: keyof Property) => (a: Property, b: Property) => {
    const A = a[key]
    const B = b[key]

    let comparison = 0

    if (A > B) {
        comparison = 1;
    } else if (A < B) {
        comparison = -1;
    }
    return invert ? comparison * -1 : comparison;
}