import { md5, Message } from 'js-md5';
import { upload } from '../api/upload';

const readFile = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

const processChunks = async (
  file: File,
  fileHash: string,
  totalChunks: number,
  chunkSize: number,
  fileName: string,
  fileSize: number
): Promise<string> => {
  for (let i = 0; i < totalChunks; i++) {
    const chunk = file.slice(
      chunkSize * i,
      Math.min(chunkSize * (i + 1), fileSize)
    );
    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('name', fileName);
    formData.append('size', fileSize.toString());
    formData.append('type', file.type);
    formData.append('offset', (chunkSize * i).toString());
    formData.append('hash', fileHash);
    formData.append('totalChunks', totalChunks.toString());
    formData.append('chunkIndex', i.toString());

    const res = await upload(formData);
    if (res.code === 0 || res.code === 1) {
      return res.fileUrl;
    }
    if (res.code === 2) {
      console.log('分片上传成功' + i);
      continue;
    }
    if (res.code === 4) throw res.data;
  }
  throw new Error('Upload failed');
};

export const uploadFileInChunks = async (
  file: File,
  chunkSize = 1024 * 1024
): Promise<string> => {
  const fileSize = file.size;
  const fileName = file.name;
  const totalChunks = Math.ceil(fileSize / chunkSize);

  const fileContent = await readFile(file);
  const fileHash = md5(fileContent as Message);

  return processChunks(
    file,
    fileHash,
    totalChunks,
    chunkSize,
    fileName,
    fileSize
  );
};
