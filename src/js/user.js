var users = [
  {id: 1, name: 'Mars', userId: 'mars'},
  {id: 2, name: 'Tom', userId: 'tom'},
  {id: 3, name: 'Mary', userId: 'mary'},
];

function findUser (userId) {
  return users[findUserKey(userId)];
};

function findUserKey (userId) {
  for (var key = 0; key < users.length; key++) {
    if (users[key].id == userId) {
      return key;
    }
  }
};

export var UserList = Vue.extend({
  template: '#user-list',
  data: function () {
    return {users: users, searchKey: ''};
  },
  computed : {
    filteredUsers: function () {
    var self = this;
    console.log('test loading user')
    return self.users.filter(function (user) {
      return user.name.indexOf(self.searchKey) !== -1
    })
  }
}
});

export var User = Vue.extend({
  template: '#user',
  data: function () {
    return {user: findUser(this.$route.params.user_id)};
  }
});

export var UserEdit = Vue.extend({
  template: '#user-edit',
  data: function () {
    return {user: findUser(this.$route.params.user_id)};
  },
  methods: {
    updateUser: function () {
      var user = this.user;
      users[findUserKey(user.id)] = {
        id: user.id,
        name: user.name,
        uesrId: user.userId,
      };
      router.push('/');
    }
  }
});

export var UserDelete = Vue.extend({
  template: '#user-delete',
  data: function () {
    return {user: findUser(this.$route.params.user_id)};
  },
  methods: {
    deleteUser: function () {
      users.splice(findUserKey(this.$route.params.user_id), 1);
      router.push('/');
    }
  }
});

export var AddUser = Vue.extend({
  template: '#add-user',
  data: function () {
    return {user: {name: '', userId: ''}
    }
  },
  methods: {
    createUser: function() {
      var user = this.user;
      users.push({
        id: Math.random().toString().split('.')[1],
        name: user.name,
        userId: user.userId
      });
      router.push('/');
    }
  }
});
