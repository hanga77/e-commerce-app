import express from 'express';
import data from '../data.js';
import Product from '../Models/productModels.js';

export const getProduct = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produit introuvable' });
  }
};

export const buyProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produit plus disponible en stock' });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

export const creatProducts = async (req, res) => {
  Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
};
