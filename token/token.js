const jwt = require("jsonwebtoken");

const METABASE_SECRET_KEY =
  "917f6e02b4dde96b2d71ad1eea429554194235ebba7083b80e692b8f4e1a6878";

const token = jwt.sign(
  {
    resource: { dashboard: 3 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 60 * 5 * 24 * 60, // 5 dias
  },
  METABASE_SECRET_KEY,
);

console.log("TOKEN:", token);
