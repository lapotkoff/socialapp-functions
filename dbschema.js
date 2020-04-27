let db = {
  users: [
    {
      userId: 'rgdgsdgesre12432fdsffs',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2020-04-25T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, how are you?',
      website: 'https://user.com',
      location: 'Lviv, UA'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'This is a sample scream',
      createdAt: '2020-04-25T10:59:52.798Z',
      likeCount: 4,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'gsrgesgsgdsgs',
      body: 'great!',
      createdAt: '2020-04-25T10:59:52.798Z'
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'valentyn',
      read: 'true | false',
      screamId: 'dfdghdhkdtjgnv',
      type: 'like | comment',
      createdAt: '2020-04-27T10:59:52.798Z'
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2020-04-25T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Lonodn, UK'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh7O5oWfWucVzGbHH2pa'
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO'
    }
  ]
};