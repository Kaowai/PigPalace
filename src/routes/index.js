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
import ExpensesAddFarm from '../Pages/Invoice/Expenses/ExpensesAddFarm'
import Layout from '../Layout/LoginLayout/Layout'
import FarmSelected from '../Pages/FarmSelected'
const publicRoutes = [
    { path: '/Login', component: Login, layout: Layout },
    { path: '/Signup', component: Signup, layout: Layout },
    { path: '/ForgotPassword', component: Forgotpassword, layout: Layout },
    { path: '/ForgotPassword2', component: Forgotpassword2, layout: Layout },
    { path: '/ForgotPassword3', component: Forgotpassword3, layout: Layout },
    { path: '/SelectedFarm', component: FarmSelected, layout: Layout},

    // DASHBOARD
    { path: '/Dashboard', component: Dashboard },

    // PIG MANAGER
    { path: '/Pigmanager', component: PigManager },

    // FEED MANAGER
    { path: '/FeedManager/TodayFeed', component: TodayFeed },
    { path: '/FeedManager/FeedPlan', component: FeedPlan },
    { path: '/FeedManager/AddFeedPlan', component: AddFeedPlan },

    // INVENTORY
    {path: '/Inventory', component: Inventory},
    
    // EVENTS
    // Dead Monitor
    { path: '/Events/DeadMonitor/DeadMonitorOverview', component: DeadMonitorOverview },
    { path: '/Events/DeadMonitor/DeadMonitorAdd', component: DeadMonitorAdd },
    // Vaccine Monitor
    { path: '/Events/VaccineMonitor/VaccineMonitorOverview', component: VaccineMonitorOverview },
    { path: '/Events/VaccineMonitor/VaccineMonitorAdd', component: VaccineMonitorAdd },
    // Pregnancy
    { path: '/Events/PregnancyMonitor/PregnancyOverview', component: PregnancyOverview },
    { path: '/Events/PregnancyMonitor/PregnancyAdd', component: PregnancyAdd },

    // INVOICE 
    // Expeneses
    { path: '/Invoice/Expenses/ExpensesOverview/ExpensesAddFarm', component: ExpensesAddFarm },
    { path: '/Invoice/Expenses/ExpensesOverview/ExpensesAdd', component: ExpensesAdd },
    { path: '/Invoice/Expenses/ExpensesOverview', component: ExpensesOverview },
    //Sales
    { path: '/Invoice/Sales/AddSales', component: AddSales },
    { path: '/Invoice/Sales/SalesOverview', component: SalesOverview },

    // REPORTS
    { path: '/Report', component: Report },
    
    // USER
    { path: '/User', component: User },

    // Farm Setup

]

const privateRoutes = [
    // Add your private routes here

]
export { publicRoutes, privateRoutes }