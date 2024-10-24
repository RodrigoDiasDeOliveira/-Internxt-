import { Request, Response } from 'express';
import File from '../models/File';
import fs from 'node:fs';
import path from 'node:path';
import multer from 'multer';
import { promisify } from 'node:util';
import User from '../models/User';

const upload = multer({ dest: 'uploads/' });

export const uploadFile = async (req: Request, res: Response) => {
  const userId = req.user._id; // Obtém o ID do usuário a partir do token JWT
  const file = req.file; // O arquivo enviado

  if (!file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  const newFile = new File({
    userId,
    fileName: file.originalname,
    filePath: file.path,
  });

  await newFile.save();
  res.status(201).send(newFile);
};

export const listFiles = async (req: Request, res: Response) => {
  const userId = req.user._id;

  const files = await File.find({ userId });
  res.status(200).json(files);
};

export const downloadFile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const file = await File.findById(id);

  if (!file) {
    return res.status(404).send('Arquivo não encontrado.');
  }

  const filePath = path.join(__dirname, '../uploads/', file.filePath);
  res.download(filePath, file.fileName);
};

export const deleteFile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const file = await File.findById(id);

  if (!file) {
    return res.status(404).send('Arquivo não encontrado.');
  }

  // Remove o arquivo do sistema de arquivos
  const filePath = path.join(__dirname, '../uploads/', file.filePath);
  await promisify(fs.unlink)(filePath);

  // Remove o documento do banco de dados
  await File.findByIdAndDelete(id);
  res.status(204).send();
};
