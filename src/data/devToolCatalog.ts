import { toolPages } from './toolPages';

interface DevToolMeta {
  language: string;
  explanation: string;
}

export interface DevToolEntry extends DevToolMeta {
  title: string;
  path: string;
}

const pageMeta: Record<string, DevToolMeta> = {
  'png-to-webp-converter': { language: '英语', explanation: 'PNG 转 WebP 转换器' },
  'image-size-checker': { language: '英语', explanation: '检查图片文件大小、格式和像素尺寸' },
  'image-stretcher': { language: '英语', explanation: '调整图片宽高并拉伸图片，不是裁剪工具' },
  'shopify-image-optimizer': { language: '英语', explanation: '批量压缩和调整 Shopify 商品图片' },
  'email-signature-image-optimizer': { language: '英语', explanation: '调整并压缩邮箱签名图片' },
  'transparent-png-compressor': { language: '英语', explanation: '压缩透明 PNG 并检查 Alpha 透明度' },
  'image-compressor-to-20kb': { language: '英语', explanation: '将图片压缩到 20KB 上限' },
  'image-compressor-to-50kb': { language: '英语', explanation: '将图片压缩到 50KB 上限' },
  'image-compressor-to-100kb': { language: '英语', explanation: '将图片压缩到 100KB 上限' },
  'image-compressor-to-200kb': { language: '英语', explanation: '将图片压缩到 200KB 上限' },
  'image-compressor-to-500kb': { language: '英语', explanation: '将图片压缩到 500KB 上限' },
  'jpg-to-jpeg': { language: '英语', explanation: '将 JPG 重新编码并输出为 .jpeg 文件' },
  'ru/szhat-foto': { language: '俄语', explanation: '压缩照片并减小照片文件大小' },
  'ru/szhat-jpg': { language: '俄语', explanation: '压缩 JPG 图片' },
  'zh-tw/image-compressor': { language: '繁体中文', explanation: '在线图片压缩工具' },
  'id/kompres-foto': { language: '印尼语', explanation: '压缩照片' },
  'es/redimensionar-imagen-online': { language: '西班牙语', explanation: '在线调整图片宽度和高度' },
  'vi/nen-anh-jpg': { language: '越南语', explanation: '压缩 JPG 图片' },
  'vi/nen-anh-png': { language: '越南语', explanation: '压缩 PNG 图片并保留透明度' },
  'th/reduce-jpg-size': { language: '泰语', explanation: '减小 JPG 文件大小' },
  'tr/png-dosya-boyutu-kucultme': { language: '土耳其语', explanation: '减小 PNG 文件大小' },
  'id/kompres-jpg': { language: '印尼语', explanation: '压缩 JPG 图片' },
  'id/kompres-png': { language: '印尼语', explanation: '压缩 PNG 图片' },
  'fr/compresser-png': { language: '法语', explanation: '压缩 PNG 图片' },
  'it/comprimi-jpg': { language: '意大利语', explanation: '压缩 JPG 图片' },
};

const localizedTools = toolPages.map((page): DevToolEntry => {
  const meta = pageMeta[page.path];
  if (!meta) throw new Error(`Missing development catalog metadata for ${page.path}`);
  return {
    title: page.title,
    path: `/app/${page.path}/`,
    ...meta,
  };
});

export const devToolCatalog: DevToolEntry[] = [
  {
    title: 'Squoosh Batch Image Compressor - Compress Images in Bulk',
    path: '/app/squoosh-batch-image-compressor/',
    language: '英语',
    explanation: '批量压缩、调整尺寸、转换格式并下载 ZIP',
  },
  ...localizedTools,
];
