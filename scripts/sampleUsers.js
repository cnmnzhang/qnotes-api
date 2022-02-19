// const faker = require("faker");
const db = require("../server/data/db");
const UserDao = require("../server/data/UserDao");

async function createSampleUsers(role) {
  try {
    await db.connect();

    const users = new UserDao();
    const user = await users.create({
      username: "faserNfddfsdame()",
      password: "fakerssdsdfdword()",
      role: role,
    });
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

// createSampleUsers("CLIENT");
createSampleUsers("ADMIN");
