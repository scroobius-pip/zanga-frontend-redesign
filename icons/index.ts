import Add from './Add'
import Search from './Search'
import Right from './Right'
import Share from './Share'
import Location from './Location'
import Phone from './Phone'
import Eye from './Eye'
import Delete from './Delete'
import Edit from './Edit'
import Info from './Info'
import Warning from './Warning'

export type IconNames = 'Add' | 'Search' | 'Warning' | 'Info' | 'Right' | 'Share' | 'Location' | 'Phone' | 'Eye' | 'Delete' | 'Edit' | 'Warning'



export default {
    Right,
    Add,
    Share,
    Location,
    Search,
    Phone,
    Eye,
    Delete,
    Edit,
    Info,
    Warning
} as { [name in IconNames]: any }