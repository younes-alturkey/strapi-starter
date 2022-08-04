module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc286feb1ffda69c1ef3c6f30659e5c0'),
  },
});
