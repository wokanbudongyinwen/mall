import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    adminInfo: {},
    shen:false
};

const mutations = {
    saveAdminInfo(state, adminInfo){
        state.adminInfo = adminInfo;
    },
    saveShen(state, shen){
        state.shen = shen;
    }
};

const actions = {};

export default new Vuex.Store({
    state,
    actions,
    mutations,
})