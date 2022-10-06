module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("group", {
    groupId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    metaTitle: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
    summary: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },

    profile: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    content: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    createdBy: {
      type: Sequelize.STRING,
    },
    updatedBy: {
      type: Sequelize.STRING,
    },
    updatedAt: {
      type: Sequelize.DATETIME,
    },
  });

  return Group;
};
