# Reset table

drop schema public cascade;
create schema public;

# Use sequelize cli

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Undo seeder

npx sequelize-cli db:seed:undo:all