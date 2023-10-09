import Dashboard from '../../components/Dashboard/Dashboard'
import { API } from '../../config/apiEndPoints'
import AllInventoriesPage from '../../pages/InventoryManagement/Allinventories/AllInventoriesPage'
import OverviewPage from '../../pages/InventoryManagement/Overview/OverviewPage'
import RolesPage from '../../pages/Settings/Roles/RolesPage'
import UserManagementPage from '../../pages/Settings/UsersManagement/UserManagementPage'
import { getError, getRequest } from '../../utils/baseApi'
import { getItem } from '../../utils/routes'
import {
  getRoutes,
  getRoutesFailure,
  getRoutesSuccess,
} from '../slices/GetRoutesSlice'

// icon
import setting from '../../components/assest/icon/dashboard-icon/0.1.png'
import supporticon from '../../components/assest/icon/supporticon.png'
import lead from '../../components/assest/icon/dashboard-icon/0.5.png'
import sales_order from '../../components/assest/icon/dashboard-icon/0.4.png'
import advertisement from '../../components/assest/icon/dashboard-icon/0.2.png'
import report from '../../components/assest/icon/dashboard-icon/0.3.png'
import dashboard_ic from '../../components/assest/icon/dashboard-icon/0.6.png'
import commissionicon from '../../components/assest/icon/dashboard-icon/commissionreq.png'
import propertyInventory from '../../components/assest/icon/dashboard-icon/0.7.png'
import inventoryManagment from '../../components/assest/icon/dashboard-icon/0.8.png'
import UserTrafficIcon from '../../components/assest/icon/dashboard-icon/usertraffic.png'
import crmReqIcon from '../../components/assest/icon/dashboard-icon/crmreqicon.png'
import refeerals from '../../components/assest/icon/dashboard-icon/refeerals.png'
import appusers from '../../components/assest/icon/dashboard-icon/appusers.png'
import listingIcon from '../../components/assest/icon/listing-icon.png'
import subsIcon from '../../components/assest/icon/subs.png'
import hrIcon from '../../components/assest/icon/hr.png'
import loungeIcon from '../../components/assest/icon/lounge.png'

import { resetState } from '../store'
import { loginFailure } from '../slices/Auth/LoginSlice'
import AddProjectPage from '../../pages/AddProject/AddProjectPage'
import UserTrafficPage from '../../pages/UserTraffic/UserTrafficPage'
// import PropertyWalletInventory from "../../pages/PropertyWalletInventory/PropertyWalletInventory";
import ViewDetails from '../../components/PropertyWalletInventory/ProjectDetails/ViewDetail/ViewDetails'
import AddSinglePropertyPage from '../../pages/AddSingleProperty/AddSinglePropertyPage'
import PromotionsPage from '../../pages/Advertisement/Promotions/PromotionsPage'
import ListingsPage from '../../pages/Advertisement/Listings/ListingsPage'
import ProjectDetailsPage from '../../pages/PropertyWalletInventory/ProjectDetailsPage'
import PropertiesDetailsPage from '../../pages/PropertyWalletInventory/PropertiesDetailsPage'
import AddProjectInventory from '../../components/PropertyWalletInventory/AddProjectInventory/AddProjectInventory'
import CrmRequestPage from '../../pages/CrmRequests/CrmRequestPage'
import CommissionRequestsPage from '../../pages/CommissionRequests/CommissionRequestsPage'
import UpdateProjectInventory from '../../components/PropertyWalletInventory/UpdateProjectInventory/UpdateProjectInventory'
import LeadsPage from '../../pages/Leads/LeadsPage'
import RefeeralsPage from '../../pages/Refeerals/RefeeralsPage'
import Token from '../../components/Payments/TokenRequest/Token'
// import UnverfiedUsers from "../../components/Support/UnverfiedUsers/UnverifiedUsers";
import UnverfiedUsersPage from '../../pages/Support/UnverfiedUsersPage'
import QueriesPage from '../../pages/Support/QueriesPage'
import AppUserPage from '../../pages/AppUser/AppUser'
// import UserProfilePage from "../../pages/UserProfile/UserProfilePage";
import EditSingleProperty from '../../components/EditSingleProperty/EditSingleProperty'
import UserDetail from '../../components/AppUser/UserDetail/UserDetail'
import AgenciesDetailPage from '../../pages/InventoryManagement/AgenciesDetail/AgenciesDetailPage'
import AgencyUserDetail from '../../components/InventoryManagement/AgenciesDetail/UserDetail/UserDetail'
import InventoriesPage from '../../pages/PropertyWalletInventory/InventoriesPage'
import SalesLogPage from '../../pages/PropertyWalletInventory/SalesLogPage'
import FreelancingPage from '../../pages/PropertyWalletInventory/FreelancingPage'
import ManagementPage from '../../pages/InventoryManagement/Management/ManagementPage'
import ReportsManagementPage from '../../pages/ReportsManagement/ReportsManagementPage'
import PaymentRequestsPage from '../../pages/Support/PaymentRequestsPage'
import Investor from '../../components/Servicepoints/Investors/Investor'
import Owner from '../../components/Servicepoints/Owners/Owner'
import WithdrawRequestPage from '../../pages/WithdrawRequest/WithdrawRequestPage'
import OnlineUser from '../../components/OnlineUsers/OnlineUser'
import EditProjectPage from '../../pages/EditProject/EditProjectPage'
import SaleOrderPage from '../../pages/SaleOrder/SaleOrderPage'
import NotificationPage from '../../pages/Advertisement/Notifcation/NotificationPage'
import ManageSubscriptionPage from '../../pages/ManageSubscription/ManageSubscriptionPage'
import SubscriptionIcon from '../../components/assest/icon/subscription.png'
import WithdrawRequest from '../../components/Freelance/WithdrawRequest/WithdrawRequest'
import ListingsApprovalsPage from '../../pages/ListingsApprovals/ListingsApprovalsPage'
import HumanResourcesPage from '../../pages/HumanResources/HumanResourcesPage'
import HumanResourceDetails from '../../components/HumanResources/helpers/HumanResourceDetails/HumanResourceDetails'
import SubscriberPage from '../../pages/ListingManagement/Subscribers/SubscriberPage'
import ManageListingPage from '../../pages/ListingManagement/ManageListing/ManageListingPage'
import GeneralListingViewer from '../../components/ListingManagement/ManageListings/Tabs/GeneralListings/helpers/GeneralListingViewer/GeneralListingViewer'
import HotListingViewer from '../../components/ListingManagement/ManageListings/Tabs/HotListings/helpers/HotListingViewer/HotListingViewer'
import DiscountPage from '../../pages/Discount/DiscountPage'
import SubscriptionAddonPage from '../../pages/SubscriptionAddon/SubscriptionAddonPage'
import InventoryPage from '../../pages/Inventory/InventoryPage'
import InventoryViewer from '../../components/Inventory/helpers/InventoryViewer/InventoryViewer'
import ManageMeetingsPage from '../../pages/HumanResources/ManageMeetingsPage'
import ManageMeetingsDetails from '../../components/ManageMeetings/helpers/ManageMeetingsDetails/ManageMeetingsDetails'
import MilestonePage from '../../pages/Milestone/MilestonePage'
import LoungePage from '../../pages/Lounge/LoungePage'

function getComponentByRoute(route) {
  const components = {
    dashboard: <Dashboard />,
    'sales-log': '',
    freelancer: '',
    'inventory-management/overview': <OverviewPage />,
    'inventory-management/all-inventories': <AllInventoriesPage />,
    'inventory-management/agencies-details': <AgenciesDetailPage />,
    'inventory-management/management': <ManagementPage />,
    leads: <LeadsPage />,
    'sales-order': '',
    'reports-management': <ReportsManagementPage />,
    advertisement: '',
    'advertisement/hot-listing': <ListingsPage />,
    'advertisement/promotions': <PromotionsPage />,
    'settings/roles': <RolesPage />,
    'settings/user-management': <UserManagementPage />,
    'settings/support': '',
    traffic: <UserTrafficPage />,
    support: '',
    inventories: '',
    'property-wallet-inventory/project-details': <ProjectDetailsPage />,
    'property-wallet-inventory/properties-details': <PropertiesDetailsPage />,
    'property-wallet-inventory/project': <AddProjectPage />,
    'property-wallet-inventory/single-property': <AddSinglePropertyPage />,
    'property-wallet-inventory/inventories': <InventoriesPage />,
    'property-wallet-inventory/sales-log': <SalesLogPage />,
    'property-wallet-inventory/freelancer': <FreelancingPage />,
    'crm-requests': <CrmRequestPage />,
    'app-users': <AppUserPage />,
    'commission-request': <CommissionRequestsPage />,
    referrals: <RefeeralsPage />,
    'support/unverified-user': <UnverfiedUsersPage />,
    'support/queries': <QueriesPage />,
    'support/payment-request': <PaymentRequestsPage />,
    'payments/token-requests': <Token />,
    'payments/sales-orders': <SaleOrderPage />,
    'sales-service-point/investors': <Investor />,
    'sales-service-point/owners': <Owner />,
    'sales-service-point/withdraw-request': <WithdrawRequestPage />,
    'subscription-management/packages': <ManageSubscriptionPage />,
    'subscription-management/active-subscription': <SubscriberPage />,
    'subscription-management/addons': <SubscriptionAddonPage />,
    'human-resources': <HumanResourcesPage />,
    'discount-code': <DiscountPage />,
    'listing-management/listing': <ManageListingPage />,
    'property-wallet-inventory/manual-payment-request': <OnlineUser />,
    'withdraw-request/freelancer-with-draw-request': <WithdrawRequest />,
    'withdraw-request/agentrequest': <CommissionRequestsPage />,
    'withdraw-request/ssp-withdraw-request': <WithdrawRequestPage />,
    'property-wallet-inventory/token-requests': <Token />,
    'advertisement/pw-inv-hot-listing': <ListingsPage />,
    'advertisement/notification': <NotificationPage />,
    'property-wallet-inventory/sales-orders': <SaleOrderPage />,
  }
  return components[route]
}

function convertToKebabCase(val) {
  return val.split(' ').join('-').toLowerCase()
}

export async function getRoutesApi(dispatch) {
  dispatch(getRoutes())
  try {
    const routes = {
      items: [
        // getItem('Addons', 'ou216', <img src={crmReqIcon} alt="" />)
        getItem('Manage Meetings', 'ou216', <img src={crmReqIcon} alt="" />),
        getItem('Lounge', 'ou299', <img src={loungeIcon} alt="" />),
        getItem('Freelancers', 'bas219w8', <img src={subsIcon} alt="" />, [
          getItem('Milestones', 'bas219w9'),
          getItem('Human Resources', `bas219w10`),
        ]),
      ],
      items2: [],
      routes: [
        {
          key: 'bas217',
          value: '/property-wallet-inventory/add-project-inventory/:id',
          component: <AddProjectInventory />,
        },
        {
          key: 'bas219',
          value: '/property-wallet-inventory/update-project-inventory/:id',
          component: <UpdateProjectInventory />,
        },
        {
          key: 'bas219w34',
          value:
            '/property-wallet-inventory/properties-details/update-property/:id',
          component: <EditSingleProperty />,
        },
        {
          key: 'bas219w3',
          value: '/property-wallet-inventory/project/:id',
          component: <EditProjectPage />,
        },
        {
          key: 'bas219w9',
          value: '/milestones',
          component: <MilestonePage />,
        },
        {
          key: 'bas219w10',
          value: '/human-resources',
          component: <HumanResourcesPage />,
        },
        // {
        //   key: 'ou216',
        //   value: '/addons',
        //   component: <SubscriptionAddonPage />,
        // },
        {
          key: 'bas215',
          value: '/property-wallet-inventory/project-details/:id',
          component: <ViewDetails />,
        },
        // {
        //   key: 'bas216',
        //   value: 'support/payment-requests',
        //   component: <PaymentRequestsPage />,
        // },
        {
          key: 'bas223',
          value: 'dashboard/app-user/:id',
          component: <UserDetail />,
        },
        {
          key: 'bas224',
          value: '/inventory/agencies-details/:id',
          component: <AgencyUserDetail />,
        },
        // {
        //   key: 'ou216324',
        //   value: '/advertisment/notification',
        //   component: <NotificationPage />,
        // },
        // {
        //   key: 'ms216',
        //   value: '/dashboard/manage-subscription',
        //   component: <ManageSubscriptionPage />,
        // },
        // {
        //   key: 'wwww333',
        //   value: '/dashboard/freelance',
        //   component: <WithdrawRequest />,
        // },
        // {
        //   key: 'ls216',
        //   value: '/dashboard/cross-listings/listings',
        //   component: <ListingsApprovalsPage />,
        // },
        // {
        //   key: 'hr216324',
        //   value: '/dashboard/hr',
        //   component: <HumanResourcesPage />,
        // },
        {
          key: 'hr2163244',
          value: '/dashboard/hr/:id',
          component: <HumanResourceDetails />,
        },
        // {
        //   key: 'lm2',
        //   value: '/dashboard/listing-management/subscribers',
        //   component: <SubscriberPage />,
        // },
        // {
        //   key: 'lm1',
        //   value: '/dashboard/listing-management/listings',
        //   component: <ManageListingPage />,
        // },
        {
          key: 'lm12',
          value: '/dashboard/listing-management/listings/:id',
          component: <GeneralListingViewer />,
        },
        // {
        //   key: 'lm12',
        //   value: '/dashboard/listing-management/hot-listings/:id',
        //   component: <HotListingViewer />,
        // },
        // {
        //   key: 'ds216324',
        //   value: '/dashboard/discount',
        //   component: <DiscountPage />,
        // },
        {
          key: 'ou216',
          value: '/dashboard/manage-meetings',
          component: <ManageMeetingsPage />,
        },
        {
          key: 'ou2190890',
          value: '/dashboard/manage-meetings/:id',
          component: <ManageMeetingsDetails />,
        },
        {
          key: 'im1',
          value: '/dashboard/inventory/:id',
          component: <InventoryViewer />,
        },
        {
          key: 'ou299',
          value: '/dashboard/lounge',
          component: <LoungePage />,
        },
      ],
    }
    let res = await getRequest(API.Roles.getRoutes)
    res?.data?.data?.result.map((module) => {
      for (let key in module) {
        if (key === 'Subscription Management') {
          routes.items.push(
            getItem(
              'Subscription Management',
              key,
              <img src={subsIcon} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `subscription-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `subscription-management/${convertToKebabCase(mod.label)}`,
              value: `subscription-management/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `subscription-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Human Resources') {
          routes.items.push(
            getItem(
              'Human Resources',
              convertToKebabCase(key),
              <img src={hrIcon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Discount Code') {
          routes.items.push(
            getItem(
              'Discount Code',
              convertToKebabCase(key),
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Listing Management') {
          routes.items.push(
            getItem(
              'Listing Management',
              key,
              <img src={listingIcon} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `listing-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `listing-management/${convertToKebabCase(mod.label)}`,
              value: `listing-management/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `listing-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Withdraw Request') {
          routes.items.push(
            getItem(
              'Withdraw Request',
              key,
              <img src={propertyInventory} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `withdraw-request/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `withdraw-request/${convertToKebabCase(mod.label)}`,
              value: `withdraw-request/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `withdraw-request/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Dashboard') {
          routes.items.push(
            getItem(
              'Dashboard ',
              'dashboard',
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Traffic') {
          routes.items.push(
            getItem('Traffic ', 'traffic', <img src={UserTrafficIcon} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Property Wallet Inventory') {
          routes.items.push(
            getItem(
              'Property Wallet Inventory',
              'sub1',
              <img src={propertyInventory} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `property-wallet-inventory/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `property-wallet-inventory/${convertToKebabCase(mod.label)}`,
              value: `property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              component: getComponentByRoute(
                `property-wallet-inventory/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Inventory Management') {
          routes.items.push(
            getItem(
              'Inventory Management',
              'sub2',
              <img src={inventoryManagment} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `inventory-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `inventory-management/${convertToKebabCase(mod.label)}`,
              value: `inventory-management/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `inventory-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Leads') {
          routes.items.push(
            getItem('Leads', 'leads', <img src={lead} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Sales Order') {
          routes.items.push(
            getItem(
              'Sales Order',
              'sales-order',
              <img src={sales_order} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Reports Management') {
          routes.items.push(
            getItem(
              'Reports Management',
              'reports-management',
              <img src={report} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Payments') {
          routes.items.push(
            getItem(
              'Payments',
              'sub32345',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `payments/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `payments/${convertToKebabCase(mod.label)}`,
              value: `payments/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `payments/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Advertisement') {
          routes.items.push(
            getItem(
              'Advertisement',
              'sub3',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `advertisement/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `advertisement/${convertToKebabCase(mod.label)}`,
              value: `advertisement/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `advertisement/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'CRM Requests') {
          routes.items.push(
            getItem(
              'CRM Requests',
              'crm-requests',
              <img src={crmReqIcon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'App Users') {
          routes.items.push(
            getItem('App Users', 'app-users', <img src={appusers} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Commission Request') {
          routes.items.push(
            getItem(
              'Commission Request',
              'commission-request',
              <img src={commissionicon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Referrals') {
          routes.items.push(
            getItem('Referrals', 'referrals', <img src={refeerals} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `${convertToKebabCase(mod.label)}`,
              value: `${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Sales Service Point') {
          routes.items.push(
            getItem(
              'Smart Selling Point',
              'sub32345324',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `sales-service-point/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `sales-service-point/${convertToKebabCase(mod.label)}`,
              value: `sales-service-point/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `sales-service-point/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Setting') {
          routes.items2.push(
            getItem('Setting', 'sub4', <img src={setting} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `settings/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `settings/${convertToKebabCase(mod.label)}`,
              value: `settings/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `settings/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Support') {
          routes.items2.push(
            getItem('Support', 'sub5', <img src={supporticon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `support/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `support/${convertToKebabCase(mod.label)}`,
              value: `support/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `support/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'New Project') {
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `property-wallet-inventory/${convertToKebabCase(mod.label)}`,
              value: `property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              component: getComponentByRoute(
                `property-wallet-inventory/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
      }
    })
    dispatch(getRoutesSuccess(routes))
  } catch (err) {
    localStorage.clear()
    dispatch(loginFailure(null))
    resetState()
    getError(err)
    dispatch(getRoutesFailure(err.response?.data))
  }
}
