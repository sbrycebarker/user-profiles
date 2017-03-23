module.exports = {
  login: function() {
    for ( var i = 0; i < users.length; i++) {
      if (users[i] === req.body.name && users[i].password === req.body.pasword) {
          req.session.currentUser = users[i];
          res.send({ userFound: true });
      } else res.send({ userFound: false });
    }
  }
}

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
