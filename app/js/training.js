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
    this.bio = () => {
      return `${this.name.nickname} (${this.name.first} ${this.name.last}) à ${this.age}ans et est intéréssé par ${this.interests}`
    }
    this.greet = () => {
      return `Hello there ! C'est ${this.nickname}`
    }
  }

  const para = document.getElementById('training-zone')
  let Skull = new Person('Florian', 'Ledru', 'Skullmasher', 25, 'l\'informatique, les FPS')
  let Neko = new Person('Mathilde', 'Couvreur', 'Neko', 22, 'le Japon, les MEUPORG')

  para.innerHTML = `${Skull.bio()} <br> ${Neko.bio()}`

// })
