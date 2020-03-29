export const state = () => ({
  cat: 'null'
})

export const actions = {
  async fetchCat({ commit }) {
    const cat = await (await fetch('https://aws.random.cat/meow'))
      .json()
      .then((res) => {
        return res.file
      })

    commit('SAVE_CAT', cat)
  }
}

export const mutations = {
  SAVE_CAT(state, cat) {
    state.cat = cat
  }
}
