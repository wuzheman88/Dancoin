export const mutations = {
  SOCKET_CONNECT: (state, status) => {
    state.connect = true
  },
  SOCKET_USER_MESSAGE: (state, message) => {
    state.message = message
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.user) {
    //   commit('auth/SET_USER', req.user)
    }
  },
  socket_newMessage: (context, message) => {
    context.dispatch('newMessage', message)
    context.commit('NEW_MESSAGE_RECEIVED', message)
  }
}
  