module.exports = ({ userRepository }) => ({
  Query: {
    users: async () => userRepository.readAll(),
  },
  Mutation: {
    addUser: async (root, { firstName, lastName, age }) => {
      const user = await userRepository.insert({ firstName, lastName, age });
      return user;
    },
  },
});
