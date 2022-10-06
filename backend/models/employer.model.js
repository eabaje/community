module.exports = (sequelize, Sequelize) => {
  const Employer = sequelize.define("Employer", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    middleName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    passwordHash: {
      type: Sequelize.STRING,
    },
    profilePicture: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    coverPicture: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    registeredAt: {
      type: Sequelize.DATETIME,
    },
    lastLogin: {
      type: Sequelize.DATETIME,
      allowNull: true,
    },
    desc: {
      type: Sequelize.STRING,
      max: 50,
    },
    city: {
      type: Sequelize.STRING,
      max: 50,
    },
    from: {
      type: Sequelize.STRING,
      max: 50,
    },
    relationship: {
      type: Sequelize.ENUM(0, 1, 2, 3),
      defaultValue: 0,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Employer;
};
