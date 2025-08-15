// src/api/task/routes/custom-task.js
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/tasks/me',
      handler: 'task.findByUser'
    }
  ]
};