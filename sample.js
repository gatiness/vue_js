new Vue({
  el: '#app',
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2021年03月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'ティグレ', course: '適度に難しいコース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: 'ニコ', course: 'ちょっとだけ難しいコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: 'ポン', course: 'まあまあ難しいコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function() {
        this.defaultLastId++
        this.students.push({
          id: this.defaultLastId,
          name: this.name,
          course: this.course,
          acceptancePeriod: this.acceptancePeriod
        })
        this.name = ''
        this.course = ''
        this.acceptancePeriod = ''
    }
  }
})
