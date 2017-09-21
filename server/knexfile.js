// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'myblog',
<<<<<<< HEAD
      user:     'MacAir',
      password: 'byteball-gngt'
=======
      user:     'krijai',
      password: 'manutd'
>>>>>>> afe117ba44332afe022300bc0e0a5a03a75cc6cb
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'myblog',
      user:     'postgres',
      password: 'byteball-gngt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'myblog',
      user:     'postgres',
      password: 'byteball-gngt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
