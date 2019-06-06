var url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"

new Vue({
  el: '#app',
  data: {
    newPhrase: 'HELLO WORLD',
    input: '',
  },
  mounted () {
    axios
      .get(`${url}test?key=37bc712b-dfae-495a-9dbc-8382c53e83c8`)
      .then(response => (console.log(response)))
  }
})