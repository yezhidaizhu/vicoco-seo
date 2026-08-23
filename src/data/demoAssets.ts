import type { ToolPageKind } from './toolPages';

export interface DemoAsset {
  filename: string;
  mimeType: 'image/jpeg' | 'image/png';
  source: string;
  thumbnail: string;
}

const asset = (filename: string) => `/app/assets/demos/${filename}`;

const photo: DemoAsset = {
  filename: 'photo.jpg',
  mimeType: 'image/jpeg',
  source: asset('photo.jpg'),
  thumbnail: asset('photo-thumb.jpg'),
};

const artwork: DemoAsset = {
  filename: 'artwork.jpg',
  mimeType: 'image/jpeg',
  source: asset('artwork.jpg'),
  thumbnail: asset('artwork-thumb.jpg'),
};

const transparent: DemoAsset = {
  filename: 'transparent.png',
  mimeType: 'image/png',
  source: asset('transparent.png'),
  thumbnail: asset('transparent-thumb.png'),
};

export const allDemoAssets = [photo, artwork, transparent];

export const demoAssetsForKind = (kind: ToolPageKind): DemoAsset[] => {
  if (kind === 'jpg-compressor') return [photo, artwork];
  if (kind === 'png-compressor' || kind === 'converter') return [transparent];
  return allDemoAssets;
};

const demoCopy: Record<string, { trySample: string; sampleError: string }> = {
  en: {
    trySample: 'Try a sample',
    sampleError: 'Could not load the sample image. Please try again.',
  },
  es: {
    trySample: 'Prueba una imagen de ejemplo',
    sampleError: 'No se pudo cargar la imagen de ejemplo. Inténtalo de nuevo.',
  },
  fr: {
    trySample: 'Essayez une image exemple',
    sampleError: "Impossible de charger l'image exemple. Réessayez.",
  },
  id: {
    trySample: 'Coba gambar contoh',
    sampleError: 'Gambar contoh tidak dapat dimuat. Silakan coba lagi.',
  },
  it: {
    trySample: "Prova un'immagine di esempio",
    sampleError: "Impossibile caricare l'immagine di esempio. Riprova.",
  },
  ru: {
    trySample: 'Попробуйте пример',
    sampleError: 'Не удалось загрузить пример. Попробуйте ещё раз.',
  },
  th: {
    trySample: 'ลองใช้ภาพตัวอย่าง',
    sampleError: 'โหลดภาพตัวอย่างไม่ได้ โปรดลองอีกครั้ง',
  },
  tr: {
    trySample: 'Örnek bir görsel deneyin',
    sampleError: 'Örnek görsel yüklenemedi. Lütfen tekrar deneyin.',
  },
  vi: {
    trySample: 'Thử ảnh mẫu',
    sampleError: 'Không thể tải ảnh mẫu. Vui lòng thử lại.',
  },
  'zh-TW': {
    trySample: '試用範例圖片',
    sampleError: '無法載入範例圖片，請再試一次。',
  },
};

export const demoCopyForLang = (lang: string) => demoCopy[lang] ?? demoCopy.en;
