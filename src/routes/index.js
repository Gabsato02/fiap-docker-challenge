import express from 'express';

const routes = (application) => {
  application.route('/').get((_, res) => {
    res.status(200).send({ title: 'Desafio Docker - FIAP' });
  });

  application.use(express.json());
};

export default routes;