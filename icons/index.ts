import Add from './Add'
import Search from './Search'
import Right from './Right'

export type IconNames = 'Add' | 'Search' | 'Warning' | 'Info' | 'Right'



export default {
    Right,
    Add,
    Search
} as { [name in IconNames]: any }