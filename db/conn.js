import { Sequelize } from "sequelize";

const sequelize = new Sequelize('rental-cars', 'root', '13012025', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

try {
  sequelize.authenticate()
  console.log('Conectados ao mysql com sucesso');
} catch (error) {
  console.log('Não foi possível conectar. Erro: ', error);
}

export default sequelize;