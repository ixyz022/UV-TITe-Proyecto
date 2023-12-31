import { Model } from "sequelize";

import { ComunicacionInterface } from "../interfaces/types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Comunicacion
    extends Model<ComunicacionInterface>
    implements ComunicacionInterface
  {
    comunicacion_ID!: string;
    medio_comunicacion!: string;
    nombre_contribuyente!: string;
    telefono!: string;

    static associate(models: any) {
      Comunicacion.hasOne(models.Reportes, {
        foreignKey: "comunicacion_ID",
        foreignKeyConstraint: true,
      });
    }
  }
  Comunicacion.init(
    {
      comunicacion_ID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      medio_comunicacion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nombre_contribuyente: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      telefono: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "Comunicacion",
    },
  );
  return Comunicacion;
};
