// src/api/task/controllers/task.js
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({ strapi }) => ({
  async findByUser(ctx) {
    const user = ctx.state.user; // utilisateur connecté
    const tasks = await strapi.db.query('api::task.task').findMany({
      where: { user: { id: user.id } },
      populate: true
    });
    return { data: tasks };
  }
}));
