class Component {
  constructor(name) {
    this.name = name;
  }
  render() {
    console.log(`<p>Component _${this.name}_  rendering`);
  }
}
const foo = new Component("karin");
console.log(foo);

//2
class UserCard extends Component {
  constructor(user) {
    super(user);
    // this.user = user;
  }
  render() {
    console.log(`  <div class="card card-user">
            <img class="card-img-top" src=${this.name.imagUrl}" alt>
            <div class="card-body">
                <h5 class="card-title">${this.name.name}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.name.email}"
                    class="btn btn-primary"
                >
                    ${this.name.email}
                </a>
            </div>
        </div>`);
  }
}

const user1 = {
  name: "karin",
  imagUrl: "test.com",
  email: "nnn@gmail.com",
};
const foo2 = new UserCard(user1);
foo2.render();

//3
const arrOfObj = [
  {
    name: "shon",
    imagUrl: "nb.com",
    email: "123@gmail.com",
  },
  {
    name: "hen",
    imagUrl: "bnbr.com",
    email: "nbnb@gmail.com",
  },
  {
    name: "amit",
    imagUrl: "love-bx.com",
    email: "appel@gmail.com",
  },
  {
    name: "lior",
    imagUrl: "melon.com",
    email: "koko@gmail.com",
  },
  {
    name: "dom",
    imagUrl: "klom.com",
    email: "banan@gmail.com",
  },
];
console.log("##################################################");
//4
const user2 = arrOfObj.map((p) => {
  return new UserCard(p);
});
console.log(user2);
console.log("##################################################");

//5
user2.forEach((x) => {
  x.render();
});
console.log(user2);

// });
// console.log(arrOfObj);

//-6-7
console.log(typeof UserCard);
console.log(typeof user2[0]);
