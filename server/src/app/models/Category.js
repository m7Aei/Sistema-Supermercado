import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'category_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Category;
