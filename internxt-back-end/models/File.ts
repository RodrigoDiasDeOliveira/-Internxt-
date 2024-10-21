import mongoose, { Schema, Document } from 'mongoose';

interface IFile extends Document {
  userId: string;
  fileName: string;
  filePath: string;
  createdAt: Date;
}

const FileSchema: Schema = new Schema({
  userId: { type: String, required: true },
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFile>('File', FileSchema);
