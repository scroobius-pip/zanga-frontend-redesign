import Add from './Add'
import Search from './Search'
import Right from './Right'
import Share from './Share'
import Location from './Location'
import Phone from './Phone'
import Eye from './Eye'

export type IconNames = 'Add' | 'Search' | 'Warning' | 'Info' | 'Right' | 'Share' | 'Location' | 'Phone' | 'Eye'



export default {
    Right,
    Add,
    Share,
    Location,
    Search,
    Phone,
    Eye
} as { [name in IconNames]: any }