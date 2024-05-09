import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Forgotpassword from '../Pages/Forgotpassword'
import Forgotpassword2 from '../Pages/Forgotpassword2'
import Forgotpassword3 from '../Pages/Forgotpassword3'
import Dashboard from '../Pages/Dashboard'
import PigManager from '../Pages/PigManager/PigManager'
import TodayFeed from '../Pages/FeedManager/TodayFeed'
import FeedPlan from '../Pages/FeedManager/FeedPlan'
import AddFeedPlan from '../Pages/FeedManager/AddFeedPlan'
import DeadMonitorOverview from '../Pages/Event/DeadMonitor/DeadMonitorOverview'
import DeadMonitorAdd from '../Pages/Event/DeadMonitor/DeadMonitorAdd'
import VaccineMonitorOverview from '../Pages/Event/VaccineMonitor/VaccineMonitorOverview'
import VaccineMonitorAdd from '../Pages/Event/VaccineMonitor/VaccineMonitorAdd'
import PregnancyOverview from '../Pages/Event/Pregnancy/PregnancyOverview'
import PregnancyAdd from '../Pages/Event/Pregnancy/PrenancyAdd'
import ExpensesAdd from '../Pages/Invoice/Expenses/ExpensesAdd'
import ExpensesOverview from '../Pages/Invoice/Expenses/ExpensesOverview'
import AddSales from '../Pages/Invoice/Sales/AddSales'
import SalesOverview from '../Pages/Invoice/Sales/SalesOverview'
import Report from '../Pages/Reports/Reports'
import User from '../Pages/User/User'   
import Inventory from '../Pages/Inventory/Inventory'
const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/forgotpassword', component: Forgotpassword },
    { path: '/forgotpassword2', component: Forgotpassword2 },
    { path: '/forgotpassword3', component: Forgotpassword3 },

    // DASHBOARD
    { path: '/dashboard', component: Dashboard },

    // PIG MANAGER
    { path: '/pigmanager', component: PigManager },

    // FEED MANAGER
    { path: '/todayfeed', component: TodayFeed },
    { path: '/feedplan', component: FeedPlan },
    { path: '/addfeedplan', component: AddFeedPlan },

    // INVENTORY
    {path: '/inventory', component: Inventory},
    
    // EVENTS
    // Dead Monitor
    { path: '/DeadMonitorOverview', component: DeadMonitorOverview },
    { path: '/DeadMonitorAdd', component: DeadMonitorAdd },
    // Vaccine Monitor
    { path: '/VaccineMonitorOverview', component: VaccineMonitorOverview },
    { path: '/VaccineMonitorAdd', component: VaccineMonitorAdd },
    // Pregnancy
    { path: '/PregnancyOverview', component: PregnancyOverview },
    { path: '/PregnancyAdd', component: PregnancyAdd },

    // INVOICE 
    // Expeneses
    { path: '/ExpensesAdd', component: ExpensesAdd },
    { path: '/ExpensesOverview', component: ExpensesOverview },
    //Sales
    { path: '/AddSales', component: AddSales },
    { path: '/SalesOverview', component: SalesOverview },

    // REPORTS
    { path: '/report', component: Report },
    
    // USER
    { path: '/user', component: User },

    // Farm Setup

]

const privateRoutes = [
    // Add your private routes here

]
export { publicRoutes, privateRoutes }