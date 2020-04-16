export const state = () => ({
    locales: ['en', 'pt-br', 'es'],
    locale: 'en'
  })
  
  export const mutations = {
    SET_LANG (state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
}