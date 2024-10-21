import { Router } from 'express';
import multer from 'multer';
import {
  uploadFile,
  listFiles,
  downloadFile,
  deleteFile,
} from '../controllers/fileController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();
const upload = multer({ dest: 'uploads/' });
router.post('/upload', authMiddleware, upload.single('file'), uploadFile);

router.get('/', authMiddleware, listFiles);
router.get('/:id/download', authMiddleware, downloadFile);
router.delete('/:id', authMiddleware, deleteFile);

export default router;
