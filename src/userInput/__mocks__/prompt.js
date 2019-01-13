const mockUser = "josh";

const prompt = () => {
  return new Promise((resolve, reject) => {
    const user = mockUser;
    process.nextTick(() => {
      user === mockUser ? resolve(user) : reject("User not found");
    });
  });
};

module.exports = {
  prompt
};
