import express from 'express';
import data from '../data.js';

export const getProduct = async (req, res) => {
  const product = data.products.find((elt) => elt.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produit introuvable' });
  }
};

export const buyProduct = async (req, res) => {
  const product = data.products.find((elt) => elt._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produit plus disponible en stock' });
  }
};

export const getAllProducts = async (req, res) => {
  res.send(data.products);
};
