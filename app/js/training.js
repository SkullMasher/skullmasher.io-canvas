// addEventListener('DOMContentLoaded', (event) => {
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
  function Person (first, last, nickname, age, interests) {
    this.name = {
      first,
      last,
      nickname
    }
    this.age = age
    this.interests = interests
  }

  Person.prototype.bio = function () {
    return `${this.name.nickname} (${this.name.first} ${this.name.last}) à ${this.age}ans et est intéréssé par ${this.interests}`
  }
  Person.prototype.greet = function () {
    return `Hello There ! C'est ${this.name.nickname}`
  }

  const para = document.getElementById('training-zone')
  let Skull = new Person('Florian', 'Ledru', 'Skullmasher', 25, 'l\'informatique et les FPS')
  let Neko = new Person('Mathilde', 'Couvreur', 'Neko', 22, 'le Japon et les MEUPORG')
  // para.innerHTML = `${Skull.bio()} <br> ${Neko.bio()}`

// })
