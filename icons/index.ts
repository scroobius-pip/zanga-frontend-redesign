import Add from './Add'
import Search from './Search'
export type IconNames = 'Add' | 'Search' | 'Warning' | 'Info'



export default {
    Add,
    Search
} as { [name in IconNames]: any }