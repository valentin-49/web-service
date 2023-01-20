import {createStore} from 'vuex'

export default createStore({
    state: {
        client: {
            type: null,
            civility: null,
            lastname: null,
            firstname: null,
            email: null,
            phone: null,
            state: null,
            commercial: null,
            moving_date: null,
            flexible_date: null,
            source: null,
            customer_notes: null,
            departure_id: null,
            arrival_id: null,
        },
        charging: {
            street: null,
            postcode: null,
            city: null,
            country: null,
            housing_type: null,
            area: null,
            volume: null,
            intern_notes: null,
        },
        arrival: {
            street: null,
            postcode: null,
            city: null,
            country: null,
            housing_type: null,
            area: null,
            volume: null,
            intern_notes: null,
        },
        modules: [
            {title:"Gestion Clients", img: "User.svg", id: "m0", count: 0, volume: 1},
            {title:"Gestion SAV", img: "Gestion_SAV.svg", id: "m1", count: 0, volume: 1},
            {title:"Agenda & Visite", img: "agenda.svg", id: "m2", count: 0, volume: 1},
            {title:"Gardes-Meubles", img: "Gardes_Meubles.svg", id: "m3", count: 0, volume: 1},
            {title:"Devis & Factures", img: "devis&factures.svg", id: "m4", count: 0, volume: 1},
            {title:"Intégration Web", img: "web.svg", id: "m5", count: 0, volume: 1},
            {title:"Analyse & Statistiques", img: "statistique.svg", id: "m6", count: 0, volume: 1},
            {title:"Export comptabilité", img: "comptabiliter.svg", id: "m7", count: 0, volume: 1},
            {title:"Exploitation", img: "export.svg", id: "m8", count: 0, volume: 1},
            {title:"Logistique", img: "logistique.svg", id: "m9", count: 0, volume: 1},
        ],

        email: null,
        departureID: null,
        arrivalID: null,
        tab: [],
        userName: null,
        companyName: null,
    },
    getters: {},
    mutations: {
        incrementName(state, payload) {
            state.userName = payload
        },
        incrementCompany(state, payload) {
            state.companyName = payload
        },
        increment(state, payload) {
            state.email = payload
        },
        changeDID(state, payload) {
            state.departureID = payload
        },
        changeAID(state, payload) {
            state.arrivalID = payload
        },
        information(state, payload) {
            state.tab = payload
        },
        incrementType(state, payload) {
            if (payload === 1) {
                state.client.type = 'Particulier'
            } else {
                state.client.type = 'Entreprise'
            }
        },
        incrementCivility(state, payload) {
            if (payload === 1) {
                state.client.civility = 'Monsieur'
            } else {
                state.client.civility = 'Madame'
            }
        },
        incrementLastname(state, payload) {
            state.client.lastname = payload
        },
        incrementFirstname(state, payload) {
            state.client.firstname = payload
        },
        incrementEmail(state, payload) {
            state.client.email = payload
        },
        incrementPhone(state, payload) {
            state.client.phone = payload
        },
        incrementState(state, payload){
            state.client.state = payload
        },
        incrementCommercial(state, payload){
            state.client.commercial = payload
        },
        incrementMovingDate(state, payload) {
            state.client.moving_date = payload
        },
        incrementFlexibleDate(state, payload) {
            if (payload === 1) {
                state.client.flexible_date = 'Oui'
            } else {
                state.client.flexible_date = 'Non'
            }
        },
        incrementSource(state, payload) {
            if (payload === 1) {
                state.client.source = 'Pages Jaunes'
            } else if (payload === 2) {
                state.client.source = 'Site internet'
            } else {
                state.client.source = 'Bouche à oreille'
            }
        },
        incrementCustomerNotes(state, payload) {
            state.client.customer_notes = payload
        },
        incrementChargingStreet(state, payload) {
            state.charging.street = payload
        },
        incrementChargingPostcode(state, payload) {
            state.charging.postcode = payload
        },
        incrementChargingCity(state, payload) {
            state.charging.city = payload
        },
        incrementChargingCountry(state, payload) {
            state.charging.country = payload
        },
        incrementChargingHousing(state, payload) {
            if (payload === 1) {
                state.charging.housing_type = 'Maison'
            }
            state.charging.housing_type = 'Appartement'
        },
        incrementChargingArea(state, payload) {
            state.charging.area = payload
        },
        incrementChargingVolume(state, payload) {
            state.charging.volume = payload
        },
        incrementChargingNotes(state, payload) {
            state.charging.intern_notes = payload
        },
        incrementArrivalStreet(state, payload) {
            state.arrival.street = payload
        },
        incrementArrivalPostcode(state, payload) {
            state.arrival.postcode = payload
        },
        incrementArrivalCity(state, payload) {
            state.arrival.city = payload
        },
        incrementArrivalCountry(state, payload) {
            state.arrival.country = payload
        },
        incrementArrivalHousing(state, payload) {
            if (payload === 1) {
                state.arrival.housing_type = 'Maison'
            }
            state.arrival.housing_type = 'Appartement'
        },
        incrementArrivalArea(state, payload) {
            state.arrival.area = payload
        },
        incrementArrivalVolume(state, payload) {
            state.arrival.volume = payload
        },
        incrementArrivalNotes(state, payload) {
            state.arrival.intern_notes = payload
        },
    },
    actions: {},
    modules: {}
})
