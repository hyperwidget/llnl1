export const state = () => ({
  cat: 'null'
})

export const actions = {
  async fetchCat({ commit }) {
    const cat = await fetch('https://llnl1.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => res.file)

    commit('SAVE_CAT', cat)
  }
}

export const mutations = {
  SAVE_CAT(state, cat) {
    state.cat = cat
  }
}
