import {createRouter, createWebHistory} from 'vue-router'

import TheContainerView from "@/views/TheContainerView.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import Message from "@/views/MessageView.vue";

//------------Customers route import--------------//
import CustomersViewDetail from "@/views/Customers/CustomersViewDetail.vue";
import CustomersView from "@/views/Customers/CustomersListView.vue";
import NewCustomerConfirmed from "@/views/Customers/NewCustomerConfirmed.vue";
import AddCustomerView from "@/views/Customers/AddCustomerView.vue";


//------------Users route import--------------//
import MyConnectionConfirmed from "@/views/ConnectionConfirmedView.vue";
import MyDeconnectionConfirmed from "@/views/DeconnectionConfirmedView.vue";
import Register from "@/views/RegisterView.vue";
import NewUserConfirmed from "@/views/NewUserConfirmed.vue";
import UserProfile from "@/views/ProfileView.vue";
import MyConnection from "@/views/ConnectionView.vue";


//------------Modules route import--------------//
import Logistique from "@/views/LogisticsView.vue";
import MassActionView from "@/views/MassActionView.vue";
import AgendaView from "@/views/agenda/AgendaView.vue";
import EstimationsInvoicesView from "@/views/EstimationsInvoicesView.vue";
import StatisticsView from "@/views/statistics/StatisticsView.vue";
import SavView from "@/views/sav/SavView.vue";
import VisitsView from "@/views/visits/VisitsView.vue"


//------------Back_Office route import--------------//
import Reglages from "@/views/reglages/ReglagesView.vue";


const routes = [

    {
        path: '/',
        name: 'home',
        component: MyConnection
    },
     
    {
        path: '/home',
        name: 'homeconnected',
        component: TheContainerView
    },

    //------------User route-------------//
    {
        path: '/registration_confirme',
        name: 'userConfirme',
        component: NewUserConfirmed
    },
    {
        path: '/profil',
        name: 'userProfile',
        component: UserProfile
    },
    {
        path: '/creation_compte',
        name: 'register',
        component: Register
    },
    {
        path: '/connexion',
        name: 'connection',
        component: MyConnection
    },
    {
        path: '/confirmation_connexion',
        name: 'connectionConfirmed',
        component: MyConnectionConfirmed
    },
    {
        path: '/deconnexion_confirmee',
        name: 'deconnectionConfirmed',
        component: MyDeconnectionConfirmed
    },

    //------------Customers route-------------//
    {
        path: '/ajout_client',
        name: 'addCustomer',
        component: AddCustomerView
    },
    {
        path: '/clients',
        name: 'clients',
        component: CustomersView
    },
    {
        path: '/clients/:id_user/:id_client',
        name: 'VisuelClient',
        component: CustomersViewDetail
    },
    {
        path: '/ajout_client_confirme',
        name: 'clientConfirme',
        component: NewCustomerConfirmed
    },


    //------------Modules route-------------//
    {
        path: '/action_en_masse',
        name: 'massAction',
        component: MassActionView
    },
    {
        path: '/visite',
        name: 'visits',
        component: VisitsView
    },
    {
        path: '/agenda',
        name: 'agenda',
        component: AgendaView
    },
    {
        path: '/devis_factures',
        name: 'devisFactures',
        component: EstimationsInvoicesView
    },
    { 
        path: '/logistiques',
        name: 'logistiques',
        component: Logistique
    },
    {
        path: '/sav',
        name: 'sav',
        component: SavView
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: StatisticsView
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: NotificationsView
    },
    {
        path: '/message',
        name: 'message',
        component: Message
    },
   
    //------------Back_Office route-------------//
    {
        path: '/reglages',
        name: 'Reglages',
        component: Reglages
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
