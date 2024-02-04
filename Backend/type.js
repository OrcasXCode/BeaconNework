const zod = require("zod");

const userCreate = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(5),
});

module.exports = {
  userCreate,
};
