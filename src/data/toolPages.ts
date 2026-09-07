export interface ToolPageItem {
  title: string;
  body: string;
}

export interface ToolPageLink {
  label: string;
  href: string;
}

export type ToolPageKind =
  | 'converter'
  | 'checker'
  | 'resize'
  | 'general-compressor'
  | 'jpg-compressor'
  | 'png-compressor';

interface ToolPageSeed {
  path: string;
  kind: ToolPageKind;
  lang: string;
  ogLocale: string;
  title: string;
  description: string;
  ogDescription: string;
  h1Lines: string[];
  heroDescription: string;
  source: string;
  imageAlt: string;
  imageCaption: string;
  uploadLabels: {
    dropBeforePaste: string;
    dropAfterPaste: string;
    paste: string;
    pasteAriaLabel: string;
    chooseImages: string;
    moreOptionsAriaLabel: string;
    chooseFolder: string;
    formats: string;
    invalidFiles: string;
    preparing: string;
    imageSingular: string;
    imagePlural: string;
    editorError: string;
    clipboardUnavailable: string;
    clipboardBlocked: string;
  };
  stepsHeading: string;
  steps: ToolPageItem[];
  privacyHeading: string;
  privacyBody: string;
  privacyBullets: string[];
  batchHeading: string;
  batchBody: string;
  batchItems: ToolPageItem[];
  detailsHeading: string;
  detailsBody: string;
  detailItems: ToolPageItem[];
  previewHeading: string;
  previewBody: string;
  faqHeading: string;
  faqs: ToolPageItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
  skipLinkLabel: string;
  featureList: string[];
  footerLabels: {
    homeAriaLabel: string;
    relatedTools: string;
    relatedToolsAriaLabel: string;
    freeImageCompressor: string;
    vicocoLinksAriaLabel: string;
    privacy: string;
  };
  relatedLinks: ToolPageLink[];
}

interface ConverterContent {
  conversionHeading: string;
  conversionSteps: ToolPageItem[];
  modesHeading: string;
  modesBody: string;
  modes: ToolPageItem[];
  comparisonHeading: string;
  comparisonBody: string;
  batchHeading: string;
  batchBody: string;
  batchNotes: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

interface CheckerContent {
  reportHeading: string;
  reportBody: string;
  metrics: ToolPageItem[];
  readingHeading: string;
  readingSteps: ToolPageItem[];
  comparisonHeading: string;
  comparisonBody: string;
  queueHeading: string;
  queueBody: string;
  queueFields: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

interface ResizeContent {
  dimensionHeading: string;
  dimensionBody: string;
  dimensions: ToolPageItem[];
  methodHeading: string;
  methods: ToolPageItem[];
  previewHeading: string;
  previewBody: string;
  batchHeading: string;
  batchBody: string;
  batchRules: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

interface GeneralCompressorContent {
  formatHeading: string;
  formatBody: string;
  formats: ToolPageItem[];
  workflowHeading: string;
  workflow: ToolPageItem[];
  reviewHeading: string;
  reviewBody: string;
  batchHeading: string;
  batchBody: string;
  batchRules: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

interface JpgCompressorContent {
  qualityHeading: string;
  qualityBody: string;
  qualityFactors: ToolPageItem[];
  workflowHeading: string;
  workflow: ToolPageItem[];
  artifactHeading: string;
  artifactBody: string;
  batchHeading: string;
  batchBody: string;
  exportRules: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

interface PngCompressorContent {
  paletteHeading: string;
  paletteBody: string;
  paletteControls: ToolPageItem[];
  workflowHeading: string;
  workflow: ToolPageItem[];
  transparencyHeading: string;
  transparencyBody: string;
  batchHeading: string;
  batchBody: string;
  sizeFactors: ToolPageItem[];
  localHeading: string;
  localBody: string;
  localFacts: string[];
}

type LegacyContentKey =
  | 'stepsHeading'
  | 'steps'
  | 'privacyHeading'
  | 'privacyBody'
  | 'privacyBullets'
  | 'batchHeading'
  | 'batchBody'
  | 'batchItems'
  | 'detailsHeading'
  | 'detailsBody'
  | 'detailItems'
  | 'previewHeading'
  | 'previewBody';

type ToolPageShared = Omit<ToolPageSeed, LegacyContentKey | 'kind'>;

export type ToolPageData =
  | (ToolPageShared & { kind: 'converter'; content: ConverterContent })
  | (ToolPageShared & { kind: 'checker'; content: CheckerContent })
  | (ToolPageShared & { kind: 'resize'; content: ResizeContent })
  | (ToolPageShared & { kind: 'general-compressor'; content: GeneralCompressorContent })
  | (ToolPageShared & { kind: 'jpg-compressor'; content: JpgCompressorContent })
  | (ToolPageShared & { kind: 'png-compressor'; content: PngCompressorContent });

const appLink = (label: string, path: string): ToolPageLink => ({
  label,
  href: `/app/${path}/`,
});

const enUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Drop images or folders here, or ',
  dropAfterPaste: ', or click to choose',
  paste: 'paste',
  pasteAriaLabel: 'Paste images from clipboard',
  chooseImages: 'Choose Images',
  moreOptionsAriaLabel: 'More upload options',
  chooseFolder: 'Choose Folder',
  formats: 'JPG, PNG, WebP, AVIF, SVG & more',
  invalidFiles: 'Choose image files only.',
  preparing: 'Preparing',
  imageSingular: 'image',
  imagePlural: 'images',
  editorError: 'Could not open the editor. Please try again.',
  clipboardUnavailable: 'Clipboard access is unavailable. Press Ctrl or Cmd + V instead.',
  clipboardBlocked: 'Clipboard access was blocked. Press Ctrl or Cmd + V instead.',
};

const enFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Vicoco home',
  relatedTools: 'Related tools',
  relatedToolsAriaLabel: 'Related tools',
  freeImageCompressor: 'Free Image Compressor',
  vicocoLinksAriaLabel: 'Vicoco links',
  privacy: 'Privacy',
};

const toolPageSeeds: ToolPageSeed[] = [
  {
    path: 'png-to-webp-converter',
    kind: 'converter',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'PNG to WebP Converter Online - Free and Private',
    description: 'Convert PNG to WebP online in your browser. Compare quality and file size, keep transparency, and download one image or a batch without server uploads.',
    ogDescription: 'Convert PNG images to smaller WebP files locally in your browser, with quality comparison and batch ZIP export.',
    h1Lines: ['PNG to WebP Converter Online -', 'Free and Private'],
    heroDescription: 'Convert PNG to WebP in your browser. Add one PNG or a folder, choose WebP output, compare quality and file size, then download one image or the complete batch.',
    source: 'png-to-webp',
    imageAlt: 'Vicoco PNG to WebP converter comparing the original PNG with a converted WebP image',
    imageCaption: 'Compare PNG and WebP quality, dimensions, and file size before conversion.',
    uploadLabels: { ...enUpload, chooseImages: 'Choose PNG Files' },
    stepsHeading: 'How to Convert PNG to WebP Online',
    steps: [
      { title: 'Add PNG Images', body: 'Choose one or more PNG files, add a folder, drag files onto the page, or paste an image.' },
      { title: 'Choose WebP Compression', body: 'Select WebP output, then adjust quality or choose lossless compression. Check transparency and detail in the preview.' },
      { title: 'Download WebP Files', body: 'Download one .webp file directly or process the queue and download all results in one ZIP.' },
    ],
    privacyHeading: 'Convert PNG to WebP Without Uploading Files',
    privacyBody: 'Vicoco decodes and converts images locally in the browser. Source PNG files are not sent to a processing server.',
    privacyBullets: ['No account required', 'Local browser processing', 'Single and batch conversion', 'Transparent PNG input supported'],
    batchHeading: 'Batch Convert PNG Images to WebP',
    batchBody: 'Apply the same WebP quality and resize settings to a folder or image queue. Review one result before processing all files and exporting them together.',
    batchItems: [
      { title: 'One WebP Setting for the Batch', body: 'Reuse the selected quality, resize, and output settings for every queued PNG.' },
      { title: 'Original and Converted Preview', body: 'Inspect transparency, visual detail, pixel dimensions, and file-size change.' },
      { title: 'One ZIP Download', body: 'Download all converted WebP files together after the queue finishes.' },
    ],
    detailsHeading: 'WebP Quality, Transparency, and File Size',
    detailsBody: 'Choose the WebP mode that fits the image and compare its result before downloading.',
    detailItems: [
      { title: 'Lossy WebP', body: 'Use adjustable lossy quality when reducing file size is the priority.' },
      { title: 'Lossless WebP', body: 'Preserve exact decoded pixels when a lossless result is required.' },
      { title: 'WebP Transparency', body: 'Keep transparent areas from the source PNG and verify them in the preview.' },
    ],
    previewHeading: 'Compare PNG and WebP Before Downloading',
    previewBody: 'The comparison view shows the original and converted image, pixel dimensions, file size, and size change before export.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I convert PNG to WebP?', body: 'Add a PNG, select WebP as the output format, choose quality or lossless mode, and download the converted .webp file.' },
      { title: 'Does converting PNG to WebP reduce file size?', body: 'Often yes, but the result depends on image content and settings. Compare the displayed file sizes before downloading.' },
      { title: 'Can WebP keep PNG transparency?', body: 'Yes. WebP supports an alpha channel, so transparent areas can remain transparent after conversion.' },
      { title: 'Which WebP compression is better, lossless or lossy?', body: 'Lossless preserves exact decoded pixels. Lossy usually creates smaller files. Use the preview to choose the appropriate balance.' },
      { title: 'Can I convert multiple PNG files at once?', body: 'Yes. Add multiple PNG files or a folder, apply one WebP configuration, and download all results in a ZIP.' },
      { title: 'Are my PNG files uploaded to a server?', body: 'No. Conversion runs locally in the browser, so source files stay on your device.' },
      { title: 'Does ZIP make converted WebP files smaller?', body: 'Usually not by much because WebP is already compressed. ZIP is mainly used to download multiple converted files together.' },
    ],
    ctaHeading: 'Convert PNG to WebP Now',
    ctaBody: 'Add PNG images, choose WebP output, and compare the result in your browser.',
    ctaButton: 'Choose PNG Files',
    skipLinkLabel: 'Skip to content',
    featureList: ['PNG input', 'WebP output', 'Lossy and lossless WebP', 'Transparency support', 'Batch conversion', 'ZIP download', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Compresser PNG', 'fr/compresser-png'),
      appLink('Transparent PNG Compressor', 'transparent-png-compressor'),
    ],
  },
  {
    path: 'image-size-checker',
    kind: 'checker',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Image Size Checker Online - File Size and Dimensions',
    description: 'Check image file size, width, height, format, and aspect ratio in your browser. Inspect images privately without uploading them to a server.',
    ogDescription: "Check an image's file size, pixel dimensions, format, and aspect ratio locally in your browser.",
    h1Lines: ['Image Size Checker Online -', 'File Size and Dimensions'],
    heroDescription: 'Check image file size, width, height, format, and aspect ratio directly in your browser. Review multiple images below, remove files, or send the list to the compressor.',
    source: 'image-size-checker',
    imageAlt: 'Vicoco image size checker showing file size, pixel dimensions, format, and aspect ratio',
    imageCaption: 'Read image file size, format, dimensions, and aspect ratio in an inline results list.',
    uploadLabels: enUpload,
    stepsHeading: 'How to Check Image Size Online',
    steps: [
      { title: 'Add an Image', body: 'Choose an image, add a folder, drag files onto the page, or paste from the clipboard.' },
      { title: 'Read File Size and Dimensions', body: 'View the image format, file size, pixel width, pixel height, and aspect ratio below the upload area.' },
      { title: 'Manage or Compress', body: 'Add more images, remove individual files, clear the list, or open every listed image in the batch compressor.' },
    ],
    privacyHeading: 'Check Image Size Without Uploading It',
    privacyBody: 'Image details are read locally in the browser. Vicoco does not send the source image to a processing server.',
    privacyBullets: ['Check one image or a folder', 'No account required', 'Local browser inspection', 'Optional batch compression handoff'],
    batchHeading: 'Check Multiple Image Sizes',
    batchBody: 'Add several images at once, inspect them in one inline list, and optionally send the complete list to the batch compressor.',
    batchItems: [
      { title: 'File Size in KB or MB', body: 'Read the storage used by each original image.' },
      { title: 'Pixel Width and Height', body: 'Check the decoded pixel dimensions for every selected file.' },
      { title: 'Format and Aspect Ratio', body: 'Identify the image format and read its simplified width-to-height ratio.' },
    ],
    detailsHeading: 'Image File Size and Pixel Dimensions',
    detailsBody: 'File size and pixel dimensions describe different properties of an image.',
    detailItems: [
      { title: 'Image File Size', body: 'Storage is shown in bytes, KB, or MB and depends on format, content, dimensions, and compression.' },
      { title: 'Image Width and Height', body: 'Pixel dimensions describe width and height, such as 1920 × 1080.' },
      { title: 'Image Format', body: 'Identify JPEG, PNG, WebP, AVIF, GIF, SVG, and other browser-readable image types.' },
    ],
    previewHeading: 'Read Image Details Below the Upload Area',
    previewBody: 'The inline results show a local preview, filename, format, file size, pixel dimensions, and aspect ratio. The compression editor opens only when you choose To compress.',
    faqHeading: 'FAQs',
    faqs: [
      { title: "How do I check an image's file size online?", body: 'Add the image to Vicoco and read its file size in the results below the upload area.' },
      { title: "How do I check an image's width and height?", body: 'Add the image to the checker. Its pixel width and height appear in the inline file details.' },
      { title: 'What is the difference between image file size and dimensions?', body: 'File size measures storage in KB or MB. Dimensions measure pixel width and height. They influence each other but are not interchangeable.' },
      { title: 'Does the image size checker compress my image?', body: 'Not automatically. The checker only reads file information until you choose To compress to open the listed images in the Vicoco compressor.' },
      { title: 'Which image details does the checker show?', body: 'It shows the filename, detected format, file size, pixel width and height, aspect ratio, and a local preview.' },
      { title: 'Can I check image sizes on iPhone or Windows?', body: 'Yes. Open Vicoco in a modern browser, choose the image, and read its file size and dimensions without installing software.' },
      { title: 'Are images uploaded while I check them?', body: 'No. File inspection and processing run locally in the browser.' },
    ],
    ctaHeading: 'Check Image Size Now',
    ctaBody: 'Add an image to read its file size, dimensions, and format.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['Image file size display', 'Pixel dimensions', 'Format details', 'Aspect ratio', 'Multiple image inspection', 'Optional batch compression handoff', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('Image Stretcher', 'image-stretcher'),
      appLink('Сжать фото', 'ru/szhat-foto'),
      appLink('圖片壓縮', 'zh-tw/image-compressor'),
    ],
  },
  {
    path: 'image-stretcher',
    kind: 'resize',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Image Stretcher Online - Resize Width and Height',
    description: 'Stretch an image online by changing its pixel width and height. Preview the resized result and export JPG, PNG, WebP, or AVIF in your browser.',
    ogDescription: 'Change image width and height, preview the stretched result, and export it locally in your browser.',
    h1Lines: ['Image Stretcher Online -', 'Resize Width and Height'],
    heroDescription: 'Stretch an image by setting a new pixel width and height. Preview the resized result, compare dimensions and file size, then download it in a supported format.',
    source: 'image-stretcher',
    imageAlt: 'Vicoco image stretcher comparing an original image with resized width and height',
    imageCaption: 'Preview stretched image dimensions and quality before downloading.',
    uploadLabels: enUpload,
    stepsHeading: 'How to Stretch an Image Online',
    steps: [
      { title: 'Add the Image', body: 'Choose an image, drag it onto the page, or paste it from the clipboard.' },
      { title: 'Change Width and Height', body: 'Enter new pixel dimensions. Use a different aspect ratio when you intentionally want the image to stretch.' },
      { title: 'Preview and Download', body: 'Inspect the resized result, select JPG, PNG, WebP, or AVIF output, and download the image.' },
    ],
    privacyHeading: 'Stretch an Image Without Uploading It',
    privacyBody: 'Resizing and encoding run locally in the browser. The source image is not uploaded to a processing server.',
    privacyBullets: ['Custom pixel width and height', 'Original and resized comparison', 'Single-image and batch processing', 'No account required'],
    batchHeading: 'Resize or Stretch Multiple Images',
    batchBody: 'Add several images or a folder and apply the same output dimensions to the queue. Download all processed results in one ZIP.',
    batchItems: [
      { title: 'Custom Width and Height', body: 'Set exact pixel dimensions for the processed images.' },
      { title: 'Aspect-Ratio Control', body: 'Keep proportions or intentionally use a different ratio to stretch the content.' },
      { title: 'Batch Resize and ZIP', body: 'Apply the dimensions to the queue and download all results together.' },
    ],
    detailsHeading: 'Image Stretching, Resizing, and Cropping',
    detailsBody: 'Choose dimensions deliberately: stretching, proportional resizing, and cropping are different operations.',
    detailItems: [
      { title: 'Stretch Image Dimensions', body: 'Changing width and height to a new aspect ratio can distort image contents.' },
      { title: 'Keep Image Proportions', body: 'Use the original aspect ratio when you want a larger or smaller image without intentional stretching.' },
      { title: 'Stretching Is Not Cropping', body: 'This tool changes pixel dimensions. It does not remove the outer parts of an image.' },
    ],
    previewHeading: 'Preview Stretched Image Quality',
    previewBody: 'Upscaling adds pixels but cannot recreate detail missing from the source. Inspect sharpness, dimensions, and file size before downloading.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I stretch an image online?', body: 'Add the image, set a new width and height with the proportions you need, preview the result, and download it.' },
      { title: 'Is stretching an image the same as cropping?', body: 'No. Stretching changes width and height. Cropping removes part of the image area.' },
      { title: 'How do I resize an image without stretching it?', body: 'Keep the original aspect ratio when entering the new width and height.' },
      { title: 'Does making an image larger improve quality?', body: 'No. Upscaling increases pixel dimensions but does not restore detail that is absent from the source image.' },
      { title: 'Can I stretch multiple images at once?', body: 'Yes. Add multiple images or a folder, apply the same dimensions, and download the results in a ZIP.' },
      { title: 'Which output formats are supported?', body: 'Processed images can be exported as JPG, PNG, WebP, or AVIF.' },
      { title: 'Are images uploaded while resizing?', body: 'No. Resizing and export run locally in the browser.' },
    ],
    ctaHeading: 'Stretch an Image Now',
    ctaBody: 'Add an image, set its width and height, and preview the resized result.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['Custom width and height', 'Aspect-ratio changes', 'Comparison preview', 'Batch resize', 'JPG, PNG, WebP and AVIF output', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Redimensionar Imagen Online', 'es/redimensionar-imagen-online'),
      appLink('Email Signature Image Optimizer', 'email-signature-image-optimizer'),
    ],
  },
];

const ruUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Перетащите фото или папку сюда, ',
  dropAfterPaste: ' или нажмите для выбора',
  paste: 'вставьте',
  pasteAriaLabel: 'Вставить изображение из буфера обмена',
  chooseImages: 'Выбрать фото',
  moreOptionsAriaLabel: 'Другие способы добавления',
  chooseFolder: 'Выбрать папку',
  formats: 'JPG, PNG, WebP, AVIF, SVG и другие',
  invalidFiles: 'Выберите только файлы изображений.',
  preparing: 'Подготовка:',
  imageSingular: 'изображение',
  imagePlural: 'изображений',
  editorError: 'Не удалось открыть редактор. Попробуйте ещё раз.',
  clipboardUnavailable: 'Буфер обмена недоступен. Нажмите Ctrl или Cmd + V.',
  clipboardBlocked: 'Доступ к буферу обмена заблокирован. Нажмите Ctrl или Cmd + V.',
};

const ruFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Главная Vicoco',
  relatedTools: 'Связанные инструменты',
  relatedToolsAriaLabel: 'Связанные инструменты',
  freeImageCompressor: 'Бесплатное сжатие изображений',
  vicocoLinksAriaLabel: 'Ссылки Vicoco',
  privacy: 'Конфиденциальность',
};

const zhTwUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: '將圖片或資料夾拖曳到這裡、',
  dropAfterPaste: '，或點擊選擇',
  paste: '貼上',
  pasteAriaLabel: '從剪貼簿貼上圖片',
  chooseImages: '選擇圖片',
  moreOptionsAriaLabel: '其他加入方式',
  chooseFolder: '選擇資料夾',
  formats: 'JPG、PNG、WebP、AVIF、SVG 等格式',
  invalidFiles: '請只選擇圖片檔案。',
  preparing: '正在準備',
  imageSingular: '張圖片',
  imagePlural: '張圖片',
  editorError: '無法開啟編輯器，請再試一次。',
  clipboardUnavailable: '無法使用剪貼簿，請按 Ctrl 或 Cmd + V。',
  clipboardBlocked: '剪貼簿權限遭到封鎖，請按 Ctrl 或 Cmd + V。',
};

const zhTwFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Vicoco 首頁',
  relatedTools: '相關工具',
  relatedToolsAriaLabel: '相關工具',
  freeImageCompressor: '免費圖片壓縮',
  vicocoLinksAriaLabel: 'Vicoco 連結',
  privacy: '隱私',
};

toolPageSeeds.push(
  {
    path: 'ru/szhat-foto',
    kind: 'general-compressor',
    lang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Сжать фото онлайн бесплатно — быстро и безопасно',
    description: 'Сожмите фото и уменьшите размер файла прямо в браузере. Настройте качество JPG, PNG, WebP или AVIF без загрузки изображений на сервер.',
    ogDescription: 'Уменьшите размер фото в браузере, сравните качество и скачайте одно изображение или весь пакет.',
    h1Lines: ['Сжать фото онлайн бесплатно —', 'быстро и безопасно'],
    heroDescription: 'Сожмите одно фото или целую папку прямо в браузере. Сравните качество и размер файла, измените разрешение и скачайте результат в JPG, PNG, WebP или AVIF.',
    source: 'ru-szhat-foto',
    imageAlt: 'Редактор Vicoco сравнивает исходное и сжатое фото',
    imageCaption: 'Сравните качество, размеры и объём файла перед обработкой очереди.',
    uploadLabels: ruUpload,
    stepsHeading: 'Как сжать фото онлайн',
    steps: [
      { title: 'Добавьте фотографии', body: 'Выберите одно или несколько фото, добавьте папку, перетащите файлы или вставьте изображение.' },
      { title: 'Настройте качество и размер', body: 'Выберите формат, измените качество, ширину или высоту и проверьте результат.' },
      { title: 'Скачайте сжатые фото', body: 'Скачайте один файл отдельно или обработайте очередь и получите все результаты в ZIP.' },
    ],
    privacyHeading: 'Уменьшить размер фото без загрузки на сервер',
    privacyBody: 'Vicoco обрабатывает изображения локально в браузере. Исходные файлы не отправляются на сервер обработки.',
    privacyBullets: ['Без регистрации', 'Локальная обработка', 'Одно фото или целая папка', 'Сравнение оригинала и результата'],
    batchHeading: 'Сжать несколько фотографий сразу',
    batchBody: 'Примените один формат, качество и размеры ко всей очереди. После обработки скачайте готовые изображения одним ZIP-файлом.',
    batchItems: [
      { title: 'Общие настройки сжатия', body: 'Используйте один формат, качество и размеры для всей очереди.' },
      { title: 'Сравнение до и после', body: 'Проверьте детализацию, разрешение и изменение объёма файла.' },
      { title: 'Пакетная загрузка ZIP', body: 'Скачайте все обработанные фотографии одним архивом.' },
    ],
    detailsHeading: 'Форматы для сжатия фотографий',
    detailsBody: 'Выберите формат по типу изображения и сравните результат перед скачиванием.',
    detailItems: [
      { title: 'JPG для фотографий', body: 'Регулируйте качество, чтобы уменьшить файл и сохранить нужную детализацию.' },
      { title: 'PNG с прозрачностью', body: 'Уменьшайте число цветов, сохраняя прозрачные области.' },
      { title: 'WebP и AVIF', body: 'Конвертируйте фото в современные форматы и сравнивайте размер.' },
    ],
    previewHeading: 'Проверить качество после уменьшения фото',
    previewBody: 'Предпросмотр показывает оригинал и результат, размеры в пикселях, объём файла и процент изменения.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Как работает сжатие изображений?', body: 'Сжатие хранит данные эффективнее. Сжатие с потерями удаляет часть малозаметных деталей, а без потерь сохраняет все декодированные данные.' },
      { title: 'Как уменьшить фото без заметной потери качества?', body: 'Снижайте качество постепенно и проверяйте предпросмотр. Если разрешение больше необходимого, уменьшите ширину и высоту.' },
      { title: 'Как уменьшить размер фото на iPhone?', body: 'Откройте Vicoco в браузере iPhone, выберите фото, настройте формат, качество или размеры и скачайте результат.' },
      { title: 'Как уменьшить размер фото в Windows?', body: 'Откройте страницу в браузере Windows, добавьте фото и сравните размер до и после настройки.' },
      { title: 'Можно ли сжать несколько фото на macOS?', body: 'Да. Добавьте несколько файлов или папку, примените общие настройки и скачайте результаты в ZIP.' },
      { title: 'Уменьшает ли ZIP размер фотографий?', body: 'Обычно незначительно: JPG, PNG, WebP и AVIF уже сжаты. ZIP нужен прежде всего для общей загрузки пакета.' },
      { title: 'Загружаются ли фотографии на сервер?', body: 'Нет. Обработка выполняется локально в браузере.' },
    ],
    ctaHeading: 'Сжать фото сейчас',
    ctaBody: 'Добавьте фото, настройте качество и скачайте результат из браузера.',
    ctaButton: 'Выбрать фото',
    skipLinkLabel: 'Перейти к содержанию',
    featureList: ['Сжатие фото', 'Изменение размеров', 'Сравнение до и после', 'Пакетная очередь', 'ZIP', 'Локальная обработка'],
    footerLabels: ruFooter,
    relatedLinks: [
      appLink('Сжать JPG', 'ru/szhat-jpg'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'ru/szhat-jpg',
    kind: 'jpg-compressor',
    lang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Сжать JPG онлайн бесплатно — быстро и безопасно',
    description: 'Сожмите JPG онлайн прямо в браузере. Настройте качество и размеры, сравните результат и скачайте один файл или пакет без загрузки на сервер.',
    ogDescription: 'Уменьшите размер JPG в браузере, сравните качество и скачайте готовые файлы без отправки на сервер.',
    h1Lines: ['Сжать JPG онлайн бесплатно —', 'быстро и безопасно'],
    heroDescription: 'Сожмите JPG локально в браузере. Настройте качество и размеры, сравните исходное фото с результатом и скачайте один файл или весь пакет.',
    source: 'ru-szhat-jpg',
    imageAlt: 'Vicoco сравнивает исходную фотографию и сжатый JPG',
    imageCaption: 'Проверьте качество и размер JPG до обработки всей очереди.',
    uploadLabels: { ...ruUpload, chooseImages: 'Выбрать JPG' },
    stepsHeading: 'Как сжать JPG онлайн',
    steps: [
      { title: 'Добавьте JPG-файлы', body: 'Выберите фотографии, папку, перетащите файлы или вставьте изображение.' },
      { title: 'Настройте качество JPG', body: 'Снижайте качество постепенно и проверяйте детализацию, объём файла и размеры.' },
      { title: 'Скачайте сжатый JPG', body: 'Скачайте текущий файл или обработайте всю очередь и получите ZIP.' },
    ],
    privacyHeading: 'Сжатие JPG без загрузки на сервер',
    privacyBody: 'Декодирование и кодирование выполняются на устройстве в браузере. Исходные фотографии не отправляются на сервер.',
    privacyBullets: ['Без регистрации', 'Локальная обработка JPG', 'Один файл или папка', 'Сравнение качества'],
    batchHeading: 'Пакетное сжатие JPG',
    batchBody: 'Добавьте несколько JPG или папку и примените одинаковые параметры качества и размера ко всем фотографиям.',
    batchItems: [
      { title: 'Одно качество для очереди', body: 'Примените выбранное качество ко всем JPG.' },
      { title: 'Изменение размеров', body: 'Укажите общую ширину и высоту перед обработкой.' },
      { title: 'ZIP со всеми JPG', body: 'Скачайте обработанные файлы одним архивом.' },
    ],
    detailsHeading: 'Качество и размер файла JPG',
    detailsBody: 'Настройте качество и разрешение, затем проверьте результат до скачивания.',
    detailItems: [
      { title: 'Качество фотографии', body: 'Более низкое качество обычно даёт меньший файл, но может добавить артефакты.' },
      { title: 'Размеры в пикселях', body: 'Уменьшение слишком большой ширины и высоты дополнительно сокращает объём.' },
      { title: 'Сравнение JPG', body: 'Проверьте изображение, размеры и объём файла до скачивания.' },
    ],
    previewHeading: 'Сравнить JPG до и после сжатия',
    previewBody: 'Просмотрите детали фотографии и изменение размера файла перед экспортом.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Как сжать JPG без заметной потери качества?', body: 'Постепенно снижайте качество и используйте предпросмотр. Не уменьшайте разрешение ниже необходимого.' },
      { title: 'Как работает сжатие JPG?', body: 'JPEG использует сжатие с потерями и сокращает часть визуальной информации, чтобы уменьшить объём файла.' },
      { title: 'Как сжать JPG в Windows 11?', body: 'Откройте Vicoco в браузере, добавьте JPG, настройте качество и скачайте результат.' },
      { title: 'Можно ли сжать несколько JPG одновременно?', body: 'Да. Добавьте файлы или папку, используйте общие настройки и скачайте ZIP.' },
      { title: 'Можно ли изменить размеры при сжатии JPG?', body: 'Да. Укажите новую ширину и высоту перед экспортом.' },
      { title: 'Загружаются ли JPG на сервер?', body: 'Нет. Обработка выполняется локально в браузере.' },
      { title: 'Можно ли автоматически получить целевой размер в KB?', body: 'Да. Укажите целевой размер JPG в KB: Vicoco автоматически подберёт качество и при необходимости уменьшит размеры изображения.' },
    ],
    ctaHeading: 'Сжать JPG сейчас',
    ctaBody: 'Добавьте JPG, настройте качество и скачайте результат.',
    ctaButton: 'Выбрать JPG',
    skipLinkLabel: 'Перейти к содержанию',
    featureList: ['Сжатие JPG', 'Настройка качества', 'Изменение размеров', 'Пакетная очередь', 'ZIP', 'Локальная обработка'],
    footerLabels: ruFooter,
    relatedLinks: [
      appLink('Сжать фото', 'ru/szhat-foto'),
      appLink('Comprimi JPG', 'it/comprimi-jpg'),
      appLink('ลดขนาดไฟล์ JPG', 'th/reduce-jpg-size'),
    ],
  },
  {
    path: 'zh-tw/image-compressor',
    kind: 'general-compressor',
    lang: 'zh-TW',
    ogLocale: 'zh_TW',
    title: '圖片壓縮線上免費工具｜快速、安全、不上傳',
    description: '免費線上圖片壓縮工具，直接在瀏覽器縮小 JPG、PNG、WebP 與 AVIF 檔案。可比較畫質、批次處理，不需上傳到伺服器。',
    ogDescription: '直接在瀏覽器壓縮圖片，比較畫質與檔案大小，支援單張與批次下載。',
    h1Lines: ['圖片壓縮線上免費工具｜', '快速、安全、不上傳'],
    heroDescription: '直接在瀏覽器壓縮圖片並縮小檔案。選擇單張圖片或整個資料夾，比較畫質與大小，再下載 JPG、PNG、WebP 或 AVIF。',
    source: 'zh-tw-image-compressor',
    imageAlt: 'Vicoco 圖片壓縮編輯器比較原圖與壓縮結果',
    imageCaption: '處理整個佇列前，先比較畫質、像素尺寸與檔案大小。',
    uploadLabels: zhTwUpload,
    stepsHeading: '如何線上壓縮圖片',
    steps: [
      { title: '加入要壓縮的圖片', body: '選擇一張或多張圖片、加入資料夾、拖放檔案，或從剪貼簿貼上圖片。' },
      { title: '調整圖片品質與尺寸', body: '選擇輸出格式，調整品質、寬度或高度，並在比較畫面查看結果。' },
      { title: '下載壓縮後的圖片', body: '直接下載單張圖片，或將批次處理結果打包為 ZIP。' },
    ],
    privacyHeading: '不上傳伺服器的圖片壓縮',
    privacyBody: 'Vicoco 在瀏覽器本機處理解碼與壓縮，來源圖片不會傳送到處理伺服器。',
    privacyBullets: ['不需註冊帳號', '瀏覽器本機處理', '支援單張與多張圖片', '壓縮前後即時比較'],
    batchHeading: '批次壓縮多張圖片',
    batchBody: '將相同的格式、品質與尺寸設定套用到整個佇列，處理完成後一次下載 ZIP。',
    batchItems: [
      { title: '共用壓縮設定', body: '將一組格式、品質與尺寸設定套用到所有圖片。' },
      { title: '原圖與結果比較', body: '檢查畫質、像素尺寸與檔案大小變化。' },
      { title: '批次 ZIP 下載', body: '將佇列內的處理結果一次下載。' },
    ],
    detailsHeading: '圖片壓縮格式與品質',
    detailsBody: '依圖片內容選擇輸出格式，並在下載前比較結果。',
    detailItems: [
      { title: 'JPG 照片品質', body: '逐步降低品質，在檔案大小與照片細節之間取得平衡。' },
      { title: 'PNG 色彩與透明背景', body: '減少色彩數量，同時保留需要的透明區域。' },
      { title: 'WebP 與 AVIF', body: '轉換為高效率格式，並在下載前比較檔案大小。' },
    ],
    previewHeading: '預覽圖片壓縮前後差異',
    previewBody: '比較畫面會顯示原圖與輸出結果、像素尺寸、檔案大小及大小變化。',
    faqHeading: 'FAQs',
    faqs: [
      { title: '圖片壓縮如何運作？', body: '無損壓縮以更有效率的方式儲存資料；有損壓縮會移除部分較不明顯的細節，以換取更小的檔案。' },
      { title: '如何壓縮網站圖片又盡量保留畫質？', body: '逐步調低品質並檢查預覽；若像素尺寸超過網站實際顯示需求，也可縮小寬度與高度。' },
      { title: '可以在 iPhone 上縮小圖片嗎？', body: '可以。在 iPhone 瀏覽器開啟 Vicoco，選擇圖片、調整設定並下載結果。' },
      { title: '可以在 Windows 上壓縮圖片嗎？', body: '可以。使用現代瀏覽器加入圖片，設定品質與尺寸後即可下載。' },
      { title: '可以一次壓縮多張圖片嗎？', body: '可以。加入多張圖片或資料夾，套用共同設定後下載 ZIP。' },
      { title: 'ZIP 會讓圖片變得更小嗎？', body: '通常不會明顯縮小已壓縮的圖片格式。ZIP 主要用於一次下載多個結果。' },
      { title: '圖片會上傳到伺服器嗎？', body: '不會。圖片處理在瀏覽器本機完成。' },
    ],
    ctaHeading: '立即壓縮圖片',
    ctaBody: '加入圖片、調整設定，直接從瀏覽器下載結果。',
    ctaButton: '選擇圖片',
    skipLinkLabel: '跳到主要內容',
    featureList: ['圖片品質調整', '像素尺寸調整', '格式轉換', '原圖與結果比較', '批次 ZIP', '瀏覽器本機處理'],
    footerLabels: zhTwFooter,
    relatedLinks: [
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('Kompres Foto', 'id/kompres-foto'),
    ],
  },
);

const toToolPageData = (seed: ToolPageSeed): ToolPageData => {
  const {
    stepsHeading,
    steps,
    privacyHeading,
    privacyBody,
    privacyBullets,
    batchHeading,
    batchBody,
    batchItems,
    detailsHeading,
    detailsBody,
    detailItems,
    previewHeading,
    previewBody,
    kind,
    ...shared
  } = seed;

  switch (kind) {
    case 'converter':
      return {
        ...shared,
        kind,
        content: {
          conversionHeading: stepsHeading,
          conversionSteps: steps,
          modesHeading: detailsHeading,
          modesBody: detailsBody,
          modes: detailItems,
          comparisonHeading: previewHeading,
          comparisonBody: previewBody,
          batchHeading,
          batchBody,
          batchNotes: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
    case 'checker':
      return {
        ...shared,
        kind,
        content: {
          reportHeading: detailsHeading,
          reportBody: detailsBody,
          metrics: detailItems,
          readingHeading: stepsHeading,
          readingSteps: steps,
          comparisonHeading: previewHeading,
          comparisonBody: previewBody,
          queueHeading: batchHeading,
          queueBody: batchBody,
          queueFields: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
    case 'resize':
      return {
        ...shared,
        kind,
        content: {
          dimensionHeading: detailsHeading,
          dimensionBody: detailsBody,
          dimensions: detailItems,
          methodHeading: stepsHeading,
          methods: steps,
          previewHeading,
          previewBody,
          batchHeading,
          batchBody,
          batchRules: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
    case 'general-compressor':
      return {
        ...shared,
        kind,
        content: {
          formatHeading: detailsHeading,
          formatBody: detailsBody,
          formats: detailItems,
          workflowHeading: stepsHeading,
          workflow: steps,
          reviewHeading: previewHeading,
          reviewBody: previewBody,
          batchHeading,
          batchBody,
          batchRules: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
    case 'jpg-compressor':
      return {
        ...shared,
        kind,
        content: {
          qualityHeading: detailsHeading,
          qualityBody: detailsBody,
          qualityFactors: detailItems,
          workflowHeading: stepsHeading,
          workflow: steps,
          artifactHeading: previewHeading,
          artifactBody: previewBody,
          batchHeading,
          batchBody,
          exportRules: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
    case 'png-compressor':
      return {
        ...shared,
        kind,
        content: {
          paletteHeading: detailsHeading,
          paletteBody: detailsBody,
          paletteControls: detailItems,
          workflowHeading: stepsHeading,
          workflow: steps,
          transparencyHeading: previewHeading,
          transparencyBody: previewBody,
          batchHeading,
          batchBody,
          sizeFactors: batchItems,
          localHeading: privacyHeading,
          localBody: privacyBody,
          localFacts: privacyBullets,
        },
      };
  }
};

const idUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Tarik foto atau folder ke sini, ',
  dropAfterPaste: ', atau klik untuk memilih',
  paste: 'tempel',
  pasteAriaLabel: 'Tempel foto dari clipboard',
  chooseImages: 'Pilih Foto',
  moreOptionsAriaLabel: 'Opsi unggah lainnya',
  chooseFolder: 'Pilih Folder',
  formats: 'JPG, PNG, WebP, AVIF, SVG, dan lainnya',
  invalidFiles: 'Pilih file gambar saja.',
  preparing: 'Menyiapkan',
  imageSingular: 'foto',
  imagePlural: 'foto',
  editorError: 'Editor tidak dapat dibuka. Silakan coba lagi.',
  clipboardUnavailable: 'Clipboard tidak tersedia. Tekan Ctrl atau Cmd + V.',
  clipboardBlocked: 'Akses clipboard diblokir. Tekan Ctrl atau Cmd + V.',
};

const idFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Beranda Vicoco',
  relatedTools: 'Alat terkait',
  relatedToolsAriaLabel: 'Alat terkait',
  freeImageCompressor: 'Kompres Foto Gratis',
  vicocoLinksAriaLabel: 'Tautan Vicoco',
  privacy: 'Privasi',
};

toolPageSeeds.push({
  path: 'id/kompres-foto',
  kind: 'general-compressor',
  lang: 'id',
  ogLocale: 'id_ID',
  title: 'Kompres Foto Online Gratis - Cepat dan Aman',
  description: 'Kompres foto online gratis langsung di browser. Kecilkan ukuran file JPG, PNG, WebP, dan AVIF tanpa mengunggah foto ke server.',
  ogDescription: 'Kecilkan ukuran foto langsung di browser. Bandingkan kualitas, atur ukuran, dan unduh hasilnya tanpa mengunggah foto ke server.',
  h1Lines: ['Kompres Foto Online Gratis -', 'Cepat dan Aman'],
  heroDescription: 'Kompres foto dan kecilkan ukuran foto langsung di browser. Pilih satu foto atau satu folder, bandingkan kualitas dan ukuran file, lalu unduh hasilnya dalam format JPG, PNG, WebP, atau AVIF.',
  source: 'id-kompres-foto',
  imageAlt: 'Editor kompres foto Vicoco yang membandingkan foto asli dan hasil kompresi',
  imageCaption: 'Periksa kualitas dan ukuran file sebelum memproses seluruh antrean foto.',
  uploadLabels: idUpload,
  stepsHeading: 'Cara Kompres Foto Online',
  steps: [
    { title: 'Pilih Foto yang Ingin Dikompres', body: 'Pilih satu atau beberapa foto, tambahkan satu folder, tarik file ke halaman, atau tempel foto dari clipboard.' },
    { title: 'Atur Kualitas dan Ukuran Foto', body: 'Pilih format keluaran, sesuaikan kualitas, dan ubah lebar atau tinggi jika diperlukan.' },
    { title: 'Unduh Foto Hasil Kompresi', body: 'Unduh satu foto secara langsung atau proses seluruh antrean dan unduh hasilnya dalam satu file ZIP.' },
  ],
  privacyHeading: 'Kompres Foto Tanpa Upload ke Server',
  privacyBody: 'Vicoco memproses foto secara lokal di browser. Foto sumber tidak dikirim ke server pemrosesan, sehingga file tetap berada di perangkat Anda.',
  privacyBullets: ['Tidak perlu membuat akun', 'Tidak ada unggahan ke server pemrosesan', 'Pemrosesan dilakukan di browser', 'Dapat digunakan di komputer dan ponsel'],
  batchHeading: 'Kompres Banyak Foto Sekaligus',
  batchBody: 'Tambahkan beberapa foto atau satu folder, lalu gunakan format, kualitas, dan ukuran yang sama untuk seluruh antrean. Semua hasil dapat diunduh dalam satu file ZIP.',
  batchItems: [
    { title: 'Pengaturan untuk Semua Foto', body: 'Gunakan format, kualitas, dan ukuran yang sama untuk setiap foto dalam antrean.' },
    { title: 'Perbandingan Foto Asli dan Hasil', body: 'Bandingkan kualitas visual, dimensi, dan ukuran file sebelum mengunduh.' },
    { title: 'Unduh Hasil dalam ZIP', body: 'Unduh seluruh antrean sekaligus dengan aturan nama file yang dipilih.' },
  ],
  detailsHeading: 'Format Output untuk Kompres Foto',
  detailsBody: 'Pilih format keluaran sesuai jenis gambar dan kebutuhan penggunaan, lalu periksa hasilnya sebelum mengunduh.',
  detailItems: [
    { title: 'Foto JPG', body: 'Sesuaikan kualitas agar ukuran file berkurang tanpa menghilangkan terlalu banyak detail foto.' },
    { title: 'Gambar PNG', body: 'Optimalkan jumlah warna dan tetap pertahankan transparansi gambar.' },
    { title: 'Format WebP', body: 'Konversi foto ke WebP untuk menghasilkan file yang lebih kecil dan sesuai untuk website.' },
    { title: 'Format AVIF', body: 'Konversi foto ke AVIF untuk kompresi dengan efisiensi tinggi.' },
  ],
  previewHeading: 'Memperkecil Ukuran Foto dengan Pratinjau',
  previewBody: 'Gunakan tampilan perbandingan untuk memperkecil ukuran foto tanpa menebak hasilnya. Vicoco menampilkan detail foto, ukuran file, dimensi gambar, dan perubahan ukuran sebelum hasil diunduh.',
  faqHeading: 'FAQs',
  faqs: [
    { title: 'Bagaimana cara kerja kompresi gambar?', body: 'Kompresi gambar mengurangi jumlah data dalam file. Kompresi lossy membuang sebagian detail yang kurang terlihat, sedangkan kompresi lossless menyusun data dengan lebih efisien.' },
    { title: 'Bagaimana cara mengompres foto untuk website tanpa banyak mengurangi kualitas?', body: 'Pilih WebP, AVIF, atau JPEG, lalu turunkan kualitas secara bertahap sambil memeriksa pratinjau. Kecilkan dimensi bila foto lebih besar dari kebutuhan website.' },
    { title: 'Bagaimana cara mengurangi ukuran foto di iPhone?', body: 'Buka Vicoco melalui browser di iPhone, pilih foto, atur format, kualitas, atau dimensi, lalu unduh hasilnya.' },
    { title: 'Bagaimana cara mengurangi ukuran foto di Windows?', body: 'Buka Vicoco di browser Windows, tambahkan foto, pilih kualitas dan ukuran yang diperlukan, lalu unduh hasil kompresi.' },
    { title: 'Bisakah saya mengurangi ukuran banyak foto sekaligus di macOS?', body: 'Ya. Tambahkan beberapa foto atau satu folder, gunakan pengaturan yang sama, lalu unduh semua hasil dalam satu file ZIP.' },
    { title: 'Apakah ZIP mengurangi ukuran foto?', body: 'Biasanya tidak banyak karena JPG, PNG, WebP, dan AVIF sudah menggunakan kompresi. ZIP terutama digunakan untuk mengunduh banyak hasil sekaligus.' },
    { title: 'Apakah foto saya diunggah ke server?', body: 'Tidak. Pemrosesan gambar dilakukan secara lokal di browser.' },
    { title: 'Format foto apa yang dapat dikompres?', body: 'Vicoco menerima JPG, PNG, WebP, AVIF, dan SVG. Hasil dapat diekspor sebagai JPG, PNG, WebP, atau AVIF.' },
    { title: 'Apakah Vicoco gratis?', body: 'Ya. Vicoco dapat digunakan gratis untuk mengompres dan mengonversi foto tanpa membuat akun.' },
  ],
  ctaHeading: 'Kompres Foto Sekarang',
  ctaBody: 'Tambahkan foto, pilih pengaturan, dan unduh hasilnya langsung dari browser.',
  ctaButton: 'Pilih Foto',
  skipLinkLabel: 'Lewati ke konten',
  featureList: ['Kompresi foto di browser', 'Kompresi banyak foto sekaligus', 'Konversi JPG, PNG, WebP, dan AVIF', 'Pratinjau asli dan hasil', 'Unduhan ZIP'],
  footerLabels: idFooter,
  relatedLinks: [
    appLink('Kompres JPG', 'id/kompres-jpg'),
    appLink('Kompres PNG', 'id/kompres-png'),
    appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
  ],
});

const esUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Arrastra imágenes o una carpeta aquí, ',
  dropAfterPaste: ' o haz clic para elegir',
  paste: 'pega',
  pasteAriaLabel: 'Pegar imágenes desde el portapapeles',
  chooseImages: 'Elegir imágenes',
  moreOptionsAriaLabel: 'Más opciones para añadir',
  chooseFolder: 'Elegir carpeta',
  formats: 'JPG, PNG, WebP, AVIF, SVG y más',
  invalidFiles: 'Elige solo archivos de imagen.',
  preparing: 'Preparando',
  imageSingular: 'imagen',
  imagePlural: 'imágenes',
  editorError: 'No se pudo abrir el editor. Inténtalo de nuevo.',
  clipboardUnavailable: 'El portapapeles no está disponible. Pulsa Ctrl o Cmd + V.',
  clipboardBlocked: 'El acceso al portapapeles está bloqueado. Pulsa Ctrl o Cmd + V.',
};

const esFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Inicio de Vicoco',
  relatedTools: 'Herramientas relacionadas',
  relatedToolsAriaLabel: 'Herramientas relacionadas',
  freeImageCompressor: 'Compresor de imágenes gratis',
  vicocoLinksAriaLabel: 'Enlaces de Vicoco',
  privacy: 'Privacidad',
};

const viUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Kéo ảnh hoặc thư mục vào đây, ',
  dropAfterPaste: ', hoặc bấm để chọn',
  paste: 'dán',
  pasteAriaLabel: 'Dán ảnh từ bộ nhớ tạm',
  chooseImages: 'Chọn ảnh',
  moreOptionsAriaLabel: 'Tùy chọn thêm ảnh',
  chooseFolder: 'Chọn thư mục',
  formats: 'JPG, PNG, WebP, AVIF, SVG và định dạng khác',
  invalidFiles: 'Chỉ chọn tệp hình ảnh.',
  preparing: 'Đang chuẩn bị',
  imageSingular: 'ảnh',
  imagePlural: 'ảnh',
  editorError: 'Không thể mở trình chỉnh sửa. Vui lòng thử lại.',
  clipboardUnavailable: 'Không thể truy cập bộ nhớ tạm. Nhấn Ctrl hoặc Cmd + V.',
  clipboardBlocked: 'Quyền truy cập bộ nhớ tạm bị chặn. Nhấn Ctrl hoặc Cmd + V.',
};

const viFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Trang chủ Vicoco',
  relatedTools: 'Công cụ liên quan',
  relatedToolsAriaLabel: 'Công cụ liên quan',
  freeImageCompressor: 'Nén ảnh miễn phí',
  vicocoLinksAriaLabel: 'Liên kết Vicoco',
  privacy: 'Quyền riêng tư',
};

const thUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'ลากรูปหรือโฟลเดอร์มาที่นี่ ',
  dropAfterPaste: ' หรือคลิกเพื่อเลือก',
  paste: 'วางรูป',
  pasteAriaLabel: 'วางรูปจากคลิปบอร์ด',
  chooseImages: 'เลือกรูป',
  moreOptionsAriaLabel: 'ตัวเลือกเพิ่มรูป',
  chooseFolder: 'เลือกโฟลเดอร์',
  formats: 'JPG, PNG, WebP, AVIF, SVG และอื่น ๆ',
  invalidFiles: 'กรุณาเลือกเฉพาะไฟล์รูปภาพ',
  preparing: 'กำลังเตรียม',
  imageSingular: 'รูป',
  imagePlural: 'รูป',
  editorError: 'ไม่สามารถเปิดตัวแก้ไขได้ โปรดลองอีกครั้ง',
  clipboardUnavailable: 'ไม่สามารถใช้คลิปบอร์ดได้ กด Ctrl หรือ Cmd + V',
  clipboardBlocked: 'การเข้าถึงคลิปบอร์ดถูกบล็อก กด Ctrl หรือ Cmd + V',
};

const thFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'หน้าแรก Vicoco',
  relatedTools: 'เครื่องมือที่เกี่ยวข้อง',
  relatedToolsAriaLabel: 'เครื่องมือที่เกี่ยวข้อง',
  freeImageCompressor: 'บีบอัดรูปฟรี',
  vicocoLinksAriaLabel: 'ลิงก์ Vicoco',
  privacy: 'ความเป็นส่วนตัว',
};

const trUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Görselleri veya klasörü buraya sürükleyin, ',
  dropAfterPaste: ' ya da seçmek için tıklayın',
  paste: 'yapıştırın',
  pasteAriaLabel: 'Panodan görsel yapıştır',
  chooseImages: 'Görsel Seç',
  moreOptionsAriaLabel: 'Diğer ekleme seçenekleri',
  chooseFolder: 'Klasör Seç',
  formats: 'JPG, PNG, WebP, AVIF, SVG ve diğerleri',
  invalidFiles: 'Yalnızca görsel dosyalarını seçin.',
  preparing: 'Hazırlanıyor:',
  imageSingular: 'görsel',
  imagePlural: 'görsel',
  editorError: 'Düzenleyici açılamadı. Lütfen tekrar deneyin.',
  clipboardUnavailable: 'Pano kullanılamıyor. Ctrl veya Cmd + V tuşlarına basın.',
  clipboardBlocked: 'Pano erişimi engellendi. Ctrl veya Cmd + V tuşlarına basın.',
};

const trFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Vicoco ana sayfa',
  relatedTools: 'İlgili araçlar',
  relatedToolsAriaLabel: 'İlgili araçlar',
  freeImageCompressor: 'Ücretsiz görsel sıkıştırıcı',
  vicocoLinksAriaLabel: 'Vicoco bağlantıları',
  privacy: 'Gizlilik',
};

toolPageSeeds.push(
  {
    path: 'es/redimensionar-imagen-online',
    kind: 'resize',
    lang: 'es',
    ogLocale: 'es_ES',
    title: 'Redimensionar Imagen Online Gratis - Ancho y Alto',
    description: 'Redimensiona imágenes online cambiando ancho y alto en píxeles. Compara el resultado y exporta JPG, PNG, WebP o AVIF sin subir archivos al servidor.',
    ogDescription: 'Cambia el ancho y alto de una imagen, compara el resultado y descárgalo directamente desde el navegador.',
    h1Lines: ['Redimensionar Imagen Online Gratis -', 'Ancho y Alto'],
    heroDescription: 'Redimensiona una imagen indicando un nuevo ancho y alto en píxeles. Comprueba dimensiones, calidad y tamaño de archivo antes de descargar.',
    source: 'es-redimensionar-imagen',
    imageAlt: 'Vicoco compara una imagen original y el resultado redimensionado',
    imageCaption: 'Comprueba dimensiones, calidad y tamaño de archivo antes de descargar.',
    uploadLabels: esUpload,
    stepsHeading: 'Cómo redimensionar una imagen online',
    steps: [
      { title: 'Añade la imagen', body: 'Selecciona una imagen, arrástrala a la página o pégala desde el portapapeles.' },
      { title: 'Cambia el ancho y el alto', body: 'Introduce nuevas dimensiones. Mantén la proporción o usa otra si quieres estirar la imagen.' },
      { title: 'Previsualiza y descarga', body: 'Compara el resultado, elige JPG, PNG, WebP o AVIF y descarga la imagen.' },
    ],
    privacyHeading: 'Redimensionar imágenes sin subirlas al servidor',
    privacyBody: 'El cambio de tamaño y la codificación se ejecutan localmente en el navegador. La imagen original no se envía a un servidor.',
    privacyBullets: ['Ancho y alto personalizados', 'Procesamiento local', 'Una imagen o una carpeta', 'Comparación del resultado'],
    batchHeading: 'Redimensionar varias imágenes a la vez',
    batchBody: 'Añade varias imágenes o una carpeta, aplica las mismas dimensiones y descarga todos los resultados en un ZIP.',
    batchItems: [
      { title: 'Dimensiones compartidas', body: 'Aplica el mismo ancho y alto a toda la cola.' },
      { title: 'Control de proporción', body: 'Mantén la proporción o cámbiala de forma intencionada.' },
      { title: 'Descarga en ZIP', body: 'Descarga todas las imágenes redimensionadas juntas.' },
    ],
    detailsHeading: 'Tamaño, proporción y recorte de imagen',
    detailsBody: 'Redimensionar, estirar y recortar son operaciones distintas.',
    detailItems: [
      { title: 'Mantener la proporción', body: 'Usa la misma relación del original para evitar deformaciones.' },
      { title: 'Estirar ancho y alto', body: 'Una proporción diferente cambia la forma del contenido.' },
      { title: 'Redimensionar no es recortar', body: 'Esta herramienta cambia dimensiones; no elimina los bordes de la imagen.' },
    ],
    previewHeading: 'Previsualizar la imagen redimensionada',
    previewBody: 'Compara nitidez, dimensiones y tamaño de archivo antes de descargar el resultado.',
    faqHeading: 'FAQs',
    faqs: [
      { title: '¿Cómo puedo redimensionar una imagen online?', body: 'Añade la imagen, introduce el nuevo ancho y alto, revisa la vista previa y descarga el resultado.' },
      { title: '¿Cómo evito que una imagen se deforme?', body: 'Mantén la relación de aspecto original al cambiar las dimensiones.' },
      { title: '¿Redimensionar es lo mismo que recortar?', body: 'No. Redimensionar cambia ancho y alto; recortar elimina parte del área visible.' },
      { title: '¿Aumentar una imagen mejora su calidad?', body: 'No. Aumenta el número de píxeles, pero no recupera detalles ausentes en el original.' },
      { title: '¿Puedo redimensionar varias imágenes juntas?', body: 'Sí. Añade varios archivos o una carpeta y aplica las mismas dimensiones a la cola.' },
      { title: '¿Qué formatos puedo exportar?', body: 'Puedes exportar como JPG, PNG, WebP o AVIF.' },
      { title: '¿Las imágenes se suben a un servidor?', body: 'No. El procesamiento ocurre localmente en el navegador.' },
    ],
    ctaHeading: 'Redimensionar una imagen ahora',
    ctaBody: 'Añade una imagen, cambia sus dimensiones y revisa el resultado.',
    ctaButton: 'Elegir imágenes',
    skipLinkLabel: 'Saltar al contenido',
    featureList: ['Ancho y alto personalizados', 'Cambio de proporción', 'Vista comparativa', 'Redimensionado por lotes', 'Formatos de salida', 'Procesamiento local'],
    footerLabels: esFooter,
    relatedLinks: [
      appLink('Image Stretcher', 'image-stretcher'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'vi/nen-anh-jpg',
    kind: 'jpg-compressor',
    lang: 'vi',
    ogLocale: 'vi_VN',
    title: 'Nén Ảnh JPG Online Miễn Phí - Nhanh và Riêng Tư',
    description: 'Nén ảnh JPG ngay trong trình duyệt. Điều chỉnh chất lượng và kích thước, so sánh kết quả rồi tải một ảnh hoặc cả loạt mà không tải lên máy chủ.',
    ogDescription: 'Giảm dung lượng JPG trong trình duyệt, so sánh chất lượng và tải kết quả mà không gửi ảnh lên máy chủ.',
    h1Lines: ['Nén Ảnh JPG Online Miễn Phí -', 'Nhanh và Riêng Tư'],
    heroDescription: 'Nén ảnh JPG trực tiếp trong trình duyệt. Điều chỉnh chất lượng và kích thước pixel, xem trước ảnh gốc với kết quả rồi tải xuống.',
    source: 'vi-nen-anh-jpg',
    imageAlt: 'Vicoco so sánh ảnh gốc và ảnh JPG đã nén',
    imageCaption: 'Kiểm tra chất lượng, kích thước và dung lượng JPG trước khi xử lý hàng đợi.',
    uploadLabels: { ...viUpload, chooseImages: 'Chọn ảnh JPG' },
    stepsHeading: 'Cách nén ảnh JPG online',
    steps: [
      { title: 'Thêm tệp JPG', body: 'Chọn một hoặc nhiều ảnh, thêm thư mục, kéo thả tệp hoặc dán ảnh.' },
      { title: 'Điều chỉnh chất lượng JPG', body: 'Giảm chất lượng từng bước và kiểm tra chi tiết, kích thước pixel cùng dung lượng.' },
      { title: 'Tải ảnh JPG đã nén', body: 'Tải ảnh hiện tại hoặc xử lý toàn bộ hàng đợi và tải một tệp ZIP.' },
    ],
    privacyHeading: 'Nén JPG không tải ảnh lên máy chủ',
    privacyBody: 'Vicoco giải mã và nén ảnh cục bộ trong trình duyệt. Ảnh nguồn vẫn nằm trên thiết bị.',
    privacyBullets: ['Không cần tài khoản', 'Xử lý cục bộ', 'Một JPG hoặc thư mục', 'So sánh chất lượng'],
    batchHeading: 'Nén nhiều ảnh JPG cùng lúc',
    batchBody: 'Áp dụng cùng mức chất lượng, chiều rộng, chiều cao và quy tắc tên tệp cho toàn bộ hàng đợi.',
    batchItems: [
      { title: 'Một mức chất lượng', body: 'Dùng cùng chất lượng cho tất cả JPG trong hàng đợi.' },
      { title: 'Đổi kích thước hàng loạt', body: 'Áp dụng cùng chiều rộng và chiều cao khi cần.' },
      { title: 'Tải xuống ZIP', body: 'Tải toàn bộ JPG đã xử lý cùng lúc.' },
    ],
    detailsHeading: 'Chất lượng và dung lượng ảnh JPG',
    detailsBody: 'Điều chỉnh chất lượng và kích thước rồi kiểm tra kết quả trước khi tải.',
    detailItems: [
      { title: 'Chất lượng nén JPG', body: 'Mức chất lượng thấp hơn thường tạo tệp nhỏ hơn nhưng có thể xuất hiện nhiễu nén.' },
      { title: 'Kích thước pixel JPG', body: 'Giảm chiều rộng và chiều cao quá lớn để giảm thêm dung lượng.' },
      { title: 'So sánh JPG', body: 'Kiểm tra hình ảnh, kích thước và dung lượng trước khi xuất.' },
    ],
    previewHeading: 'So sánh JPG trước khi tải',
    previewBody: 'Xem chi tiết ảnh, kích thước pixel và thay đổi dung lượng trước khi xuất.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Làm sao nén JPG mà không giảm quá nhiều chất lượng?', body: 'Giảm chất lượng từ từ và xem trước kết quả. Chỉ giảm kích thước pixel khi lớn hơn nhu cầu.' },
      { title: 'Nén JPG hoạt động như thế nào?', body: 'JPEG dùng nén mất dữ liệu để loại bỏ một phần thông tin thị giác và giảm dung lượng.' },
      { title: 'Có thể nén JPG trên Windows 11 không?', body: 'Có. Mở Vicoco trong trình duyệt, thêm JPG, chỉnh chất lượng và tải kết quả.' },
      { title: 'Có thể nén nhiều JPG cùng lúc không?', body: 'Có. Thêm nhiều tệp hoặc thư mục, áp dụng một cấu hình và tải ZIP.' },
      { title: 'Có thể đổi kích thước khi nén JPG không?', body: 'Có. Đặt chiều rộng và chiều cao trước khi xuất.' },
      { title: 'Ảnh JPG có được tải lên máy chủ không?', body: 'Không. Quá trình xử lý diễn ra cục bộ trong trình duyệt.' },
      { title: 'Có thể tự động đạt dung lượng KB mục tiêu không?', body: 'Có. Nhập dung lượng KB mục tiêu cho JPG; Vicoco tự tìm mức chất lượng phù hợp và có thể giảm kích thước khi cần.' },
    ],
    ctaHeading: 'Nén Ảnh JPG Ngay',
    ctaBody: 'Thêm JPG, chỉnh chất lượng và tải kết quả.',
    ctaButton: 'Chọn ảnh JPG',
    skipLinkLabel: 'Chuyển đến nội dung',
    featureList: ['Nén JPG', 'Chất lượng tùy chỉnh', 'Đổi kích thước', 'Xử lý hàng loạt', 'Tải ZIP', 'Xử lý cục bộ'],
    footerLabels: viFooter,
    relatedLinks: [
      appLink('Nén Ảnh PNG', 'vi/nen-anh-png'),
      appLink('Kompres JPG', 'id/kompres-jpg'),
      appLink('ลดขนาดไฟล์ JPG', 'th/reduce-jpg-size'),
    ],
  },
  {
    path: 'vi/nen-anh-png',
    kind: 'png-compressor',
    lang: 'vi',
    ogLocale: 'vi_VN',
    title: 'Nén Ảnh PNG Online Miễn Phí - Giữ Nền Trong Suốt',
    description: 'Nén ảnh PNG ngay trong trình duyệt. Giảm bảng màu, giữ vùng trong suốt, so sánh kết quả và tải một ảnh hoặc cả loạt mà không upload.',
    ogDescription: 'Giảm dung lượng PNG, giữ nền trong suốt và so sánh kết quả trực tiếp trong trình duyệt.',
    h1Lines: ['Nén Ảnh PNG Online Miễn Phí -', 'Giữ Nền Trong Suốt'],
    heroDescription: 'Nén ảnh PNG bằng cách điều chỉnh bảng màu và độ hòa sắc. Kiểm tra vùng trong suốt, dung lượng và chất lượng trước khi tải xuống.',
    source: 'vi-nen-anh-png',
    imageAlt: 'Vicoco so sánh ảnh PNG gốc và kết quả đã nén',
    imageCaption: 'Kiểm tra màu sắc, nền trong suốt, kích thước và dung lượng PNG.',
    uploadLabels: { ...viUpload, chooseImages: 'Chọn ảnh PNG' },
    stepsHeading: 'Cách nén ảnh PNG online',
    steps: [
      { title: 'Thêm tệp PNG', body: 'Chọn PNG, thêm thư mục, kéo thả tệp hoặc dán ảnh.' },
      { title: 'Điều chỉnh màu và kích thước', body: 'Giảm số lượng màu, điều chỉnh dithering hoặc thay đổi kích thước pixel.' },
      { title: 'Tải ảnh PNG đã nén', body: 'Tải một PNG hoặc xử lý hàng đợi và nhận kết quả trong ZIP.' },
    ],
    privacyHeading: 'Nén PNG không tải ảnh lên máy chủ',
    privacyBody: 'Giải mã, tối ưu bảng màu và xuất tệp diễn ra cục bộ trong trình duyệt.',
    privacyBullets: ['Không cần tài khoản', 'Xử lý cục bộ', 'Giữ vùng trong suốt', 'Một PNG hoặc thư mục'],
    batchHeading: 'Nén nhiều ảnh PNG cùng lúc',
    batchBody: 'Dùng cùng cấu hình bảng màu, kích thước và tên tệp cho nhiều PNG hoặc cả thư mục.',
    batchItems: [
      { title: 'Một bảng màu cho hàng đợi', body: 'Dùng cùng số màu và dithering cho mọi PNG.' },
      { title: 'Kiểm tra nền trong suốt', body: 'So sánh vùng trong suốt trước khi xử lý hàng loạt.' },
      { title: 'Tải kết quả trong ZIP', body: 'Tải toàn bộ PNG đã xử lý cùng lúc.' },
    ],
    detailsHeading: 'Màu sắc, nền trong suốt và dung lượng PNG',
    detailsBody: 'Điều chỉnh bảng màu và kích thước theo nội dung hình ảnh.',
    detailItems: [
      { title: 'Bảng màu PNG', body: 'Giảm số màu có thể làm nhỏ hình minh họa, biểu tượng và ảnh chụp màn hình.' },
      { title: 'Nền trong suốt PNG', body: 'PNG hỗ trợ vùng trong suốt. Kiểm tra kết quả trong phần xem trước.' },
      { title: 'Kích thước và dung lượng', body: 'Giảm chiều rộng và chiều cao quá lớn để giảm thêm dung lượng.' },
    ],
    previewHeading: 'So sánh PNG trước khi tải',
    previewBody: 'Kiểm tra màu sắc, nền trong suốt, kích thước và thay đổi dung lượng trước khi xuất.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Làm sao giảm dung lượng PNG?', body: 'Giảm số màu, điều chỉnh dithering và thu nhỏ kích thước nếu ảnh lớn hơn nhu cầu.' },
      { title: 'Nén PNG có giữ nền trong suốt không?', body: 'Có. Tệp PNG xuất ra vẫn hỗ trợ vùng trong suốt.' },
      { title: 'PNG có phải là định dạng nén không mất dữ liệu không?', body: 'Mã hóa PNG không mất dữ liệu, nhưng giảm bảng màu sẽ thay đổi số màu trước khi mã hóa.' },
      { title: 'Có thể nén nhiều PNG cùng lúc không?', body: 'Có. Thêm nhiều tệp hoặc thư mục và tải kết quả trong ZIP.' },
      { title: 'ZIP có làm PNG nhỏ hơn nhiều không?', body: 'Thường không đáng kể vì PNG đã được nén. ZIP chủ yếu gom nhiều kết quả để tải cùng lúc.' },
      { title: 'PNG có được tải lên máy chủ không?', body: 'Không. Mọi xử lý diễn ra cục bộ trong trình duyệt.' },
      { title: 'Có thể chuyển PNG sang WebP không?', body: 'Có. Chọn WebP làm định dạng đầu ra để so sánh dung lượng.' },
    ],
    ctaHeading: 'Nén Ảnh PNG Ngay',
    ctaBody: 'Thêm PNG, chỉnh bảng màu và tải kết quả.',
    ctaButton: 'Chọn ảnh PNG',
    skipLinkLabel: 'Chuyển đến nội dung',
    featureList: ['Nén PNG', 'Bảng màu', 'Dithering', 'Nền trong suốt', 'Xử lý hàng loạt', 'Xử lý cục bộ'],
    footerLabels: viFooter,
    relatedLinks: [
      appLink('Nén Ảnh JPG', 'vi/nen-anh-jpg'),
      appLink('Kompres PNG', 'id/kompres-png'),
      appLink('Compresser PNG', 'fr/compresser-png'),
    ],
  },
  {
    path: 'th/reduce-jpg-size',
    kind: 'jpg-compressor',
    lang: 'th',
    ogLocale: 'th_TH',
    title: 'ลดขนาดไฟล์ JPG ออนไลน์ฟรี - รวดเร็วและปลอดภัย',
    description: 'ลดขนาดไฟล์ JPG ในเบราว์เซอร์ ปรับคุณภาพและขนาดพิกเซล เปรียบเทียบผลลัพธ์ แล้วดาวน์โหลดไฟล์เดียวหรือหลายไฟล์โดยไม่อัปโหลดขึ้นเซิร์ฟเวอร์',
    ogDescription: 'ลดขนาด JPG เปรียบเทียบคุณภาพ และดาวน์โหลดผลลัพธ์จากเบราว์เซอร์โดยไม่ส่งรูปไปยังเซิร์ฟเวอร์',
    h1Lines: ['ลดขนาดไฟล์ JPG ออนไลน์ฟรี -', 'รวดเร็วและปลอดภัย'],
    heroDescription: 'ลดขนาดไฟล์ JPG โดยตรงในเบราว์เซอร์ ปรับคุณภาพ ความกว้าง และความสูง ตรวจสอบภาพก่อนและหลัง แล้วดาวน์โหลดผลลัพธ์',
    source: 'th-reduce-jpg-size',
    imageAlt: 'Vicoco เปรียบเทียบรูปต้นฉบับและ JPG ที่ลดขนาดแล้ว',
    imageCaption: 'ตรวจสอบคุณภาพ ขนาดพิกเซล และขนาดไฟล์ก่อนประมวลผลทั้งหมด',
    uploadLabels: { ...thUpload, chooseImages: 'เลือก JPG' },
    stepsHeading: 'วิธีลดขนาดไฟล์ JPG ออนไลน์',
    steps: [
      { title: 'เพิ่มไฟล์ JPG', body: 'เลือกรูปหนึ่งหรือหลายรูป เพิ่มโฟลเดอร์ ลากไฟล์ หรือวางรูปจากคลิปบอร์ด' },
      { title: 'ปรับคุณภาพและขนาด JPG', body: 'ลดคุณภาพทีละน้อย แล้วตรวจสอบรายละเอียด ขนาดพิกเซล และขนาดไฟล์' },
      { title: 'ดาวน์โหลด JPG ที่ลดขนาดแล้ว', body: 'ดาวน์โหลดไฟล์ปัจจุบัน หรือประมวลผลทั้งหมดแล้วดาวน์โหลดเป็น ZIP' },
    ],
    privacyHeading: 'ลดขนาด JPG โดยไม่อัปโหลดขึ้นเซิร์ฟเวอร์',
    privacyBody: 'Vicoco ถอดรหัสและบีบอัดรูปภายในเบราว์เซอร์ ไฟล์ต้นฉบับยังอยู่บนอุปกรณ์ของคุณ',
    privacyBullets: ['ไม่ต้องสมัครบัญชี', 'ประมวลผลในเบราว์เซอร์', 'หนึ่งไฟล์หรือทั้งโฟลเดอร์', 'เปรียบเทียบคุณภาพ'],
    batchHeading: 'ลดขนาด JPG หลายไฟล์พร้อมกัน',
    batchBody: 'ใช้คุณภาพ ความกว้าง ความสูง และรูปแบบชื่อไฟล์เดียวกันกับรูปทั้งหมดในคิว',
    batchItems: [
      { title: 'คุณภาพเดียวกัน', body: 'ใช้ระดับคุณภาพเดียวกันกับ JPG ทั้งหมด' },
      { title: 'ปรับขนาดพร้อมกัน', body: 'ใช้ความกว้างและความสูงเดียวกันเมื่อต้องการ' },
      { title: 'ดาวน์โหลด ZIP', body: 'ดาวน์โหลด JPG ที่ประมวลผลทั้งหมดพร้อมกัน' },
    ],
    detailsHeading: 'คุณภาพและขนาดไฟล์ JPG',
    detailsBody: 'ปรับคุณภาพและขนาดพิกเซล แล้วตรวจสอบผลลัพธ์ก่อนดาวน์โหลด',
    detailItems: [
      { title: 'คุณภาพการบีบอัด', body: 'คุณภาพที่ต่ำลงมักทำให้ไฟล์เล็กลง แต่อาจเกิดรอยจากการบีบอัด' },
      { title: 'ขนาดพิกเซล', body: 'ลดความกว้างและความสูงที่เกินความจำเป็นเพื่อช่วยลดขนาดไฟล์' },
      { title: 'เปรียบเทียบ JPG', body: 'ตรวจสอบภาพ ขนาดพิกเซล และขนาดไฟล์ก่อนส่งออก' },
    ],
    previewHeading: 'เปรียบเทียบ JPG ก่อนดาวน์โหลด',
    previewBody: 'ดูรายละเอียด ขนาดพิกเซล และการเปลี่ยนแปลงของขนาดไฟล์ก่อนส่งออก',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'ลดขนาด JPG โดยไม่เสียคุณภาพมากได้อย่างไร?', body: 'ลดคุณภาพทีละน้อยและดูตัวอย่าง รักษาขนาดพิกเซลให้เหมาะกับการใช้งาน' },
      { title: 'การบีบอัด JPG ทำงานอย่างไร?', body: 'JPEG ใช้การบีบอัดแบบสูญเสียข้อมูลบางส่วนเพื่อลดขนาดไฟล์' },
      { title: 'ใช้งานบน Windows 11 ได้ไหม?', body: 'ได้ เปิด Vicoco ในเบราว์เซอร์ เพิ่ม JPG ปรับคุณภาพ แล้วดาวน์โหลด' },
      { title: 'ลดขนาด JPG หลายไฟล์พร้อมกันได้ไหม?', body: 'ได้ เพิ่มหลายไฟล์หรือโฟลเดอร์ ใช้การตั้งค่าเดียวกัน แล้วดาวน์โหลด ZIP' },
      { title: 'เปลี่ยนขนาดพิกเซลระหว่างบีบอัดได้ไหม?', body: 'ได้ กำหนดความกว้างและความสูงก่อนส่งออก' },
      { title: 'รูป JPG ถูกอัปโหลดไปยังเซิร์ฟเวอร์ไหม?', body: 'ไม่ การประมวลผลเกิดขึ้นภายในเบราว์เซอร์' },
      { title: 'กำหนดขนาด KB เป้าหมายอัตโนมัติได้ไหม?', body: 'ได้ กำหนดขนาด KB เป้าหมายสำหรับ JPG แล้ว Vicoco จะค้นหาระดับคุณภาพที่เหมาะสมและลดขนาดภาพเมื่อจำเป็น' },
    ],
    ctaHeading: 'ลดขนาดไฟล์ JPG ตอนนี้',
    ctaBody: 'เพิ่ม JPG ปรับคุณภาพ แล้วดาวน์โหลดผลลัพธ์',
    ctaButton: 'เลือก JPG',
    skipLinkLabel: 'ข้ามไปยังเนื้อหา',
    featureList: ['ลดขนาด JPG', 'ปรับคุณภาพ', 'ปรับขนาดพิกเซล', 'ประมวลผลหลายไฟล์', 'ดาวน์โหลด ZIP', 'ประมวลผลในเบราว์เซอร์'],
    footerLabels: thFooter,
    relatedLinks: [
      appLink('Comprimi JPG', 'it/comprimi-jpg'),
      appLink('Nén Ảnh JPG', 'vi/nen-anh-jpg'),
      appLink('Сжать JPG', 'ru/szhat-jpg'),
    ],
  },
  {
    path: 'tr/png-dosya-boyutu-kucultme',
    kind: 'png-compressor',
    lang: 'tr',
    ogLocale: 'tr_TR',
    title: 'PNG Dosya Boyutu Küçültme - Ücretsiz ve Güvenli',
    description: 'PNG dosya boyutunu tarayıcıda küçültün. Renkleri azaltın, şeffaflığı koruyun, sonucu karşılaştırın ve sunucuya yüklemeden indirin.',
    ogDescription: 'PNG boyutunu küçültün, şeffaflığı koruyun ve sonucu doğrudan tarayıcıda karşılaştırın.',
    h1Lines: ['PNG Dosya Boyutu Küçültme -', 'Ücretsiz ve Güvenli'],
    heroDescription: 'PNG dosya boyutunu renk paleti ve dithering ayarlarıyla küçültün. Şeffaflığı, görüntü kalitesini ve dosya boyutunu indirmeden önce kontrol edin.',
    source: 'tr-png-kucultme',
    imageAlt: 'Vicoco özgün PNG ile küçültülen sonucu karşılaştırıyor',
    imageCaption: 'PNG renklerini, şeffaflığını, piksel ölçülerini ve dosya boyutunu kontrol edin.',
    uploadLabels: { ...trUpload, chooseImages: 'PNG Seç' },
    stepsHeading: 'PNG dosya boyutu nasıl küçültülür?',
    steps: [
      { title: 'PNG dosyalarını ekleyin', body: 'Bir veya daha fazla PNG seçin, klasör ekleyin, dosyaları sürükleyin ya da görsel yapıştırın.' },
      { title: 'Renkleri ve boyutları ayarlayın', body: 'Renk sayısını azaltın, dithering ayarını değiştirin veya piksel ölçülerini küçültün.' },
      { title: "Küçültülen PNG'leri indirin", body: 'Tek dosyayı indirin veya kuyruğu işleyip sonuçları ZIP olarak alın.' },
    ],
    privacyHeading: 'Sunucuya yüklemeden PNG küçültme',
    privacyBody: 'Kod çözme, palet optimizasyonu ve dışa aktarma tarayıcıda yerel olarak çalışır.',
    privacyBullets: ['Hesap gerekmez', 'Yerel işleme', 'PNG şeffaflığı', 'Tek dosya veya klasör'],
    batchHeading: 'Birden fazla PNG dosyasını küçültme',
    batchBody: "Aynı palet, boyut ve dosya adı ayarlarını birden fazla PNG'ye veya klasöre uygulayın.",
    batchItems: [
      { title: 'Tek palet ayarı', body: 'Renk sayısını ve dithering ayarını tüm PNG kuyruğunda kullanın.' },
      { title: 'Şeffaflık kontrolü', body: 'Toplu işlemden önce şeffaf alanları karşılaştırın.' },
      { title: 'ZIP indirme', body: "İşlenen tüm PNG'leri birlikte indirin." },
    ],
    detailsHeading: 'PNG renkleri, şeffaflık ve dosya boyutu',
    detailsBody: 'Paleti ve piksel ölçülerini görsel içeriğine göre ayarlayın.',
    detailItems: [
      { title: 'PNG renk paleti', body: 'Daha az renk; çizim, simge ve ekran görüntülerinde dosya boyutunu azaltabilir.' },
      { title: 'PNG şeffaflığı', body: 'PNG şeffaf alanları destekler. Sonucu önizlemede kontrol edin.' },
      { title: 'Piksel ölçüleri', body: 'Gereğinden büyük genişlik ve yüksekliği azaltmak dosyayı daha da küçültebilir.' },
    ],
    previewHeading: 'PNG sonucunu indirmeden karşılaştırın',
    previewBody: 'Dışa aktarmadan önce renkleri, şeffaflığı, piksel ölçülerini ve dosya boyutu değişimini kontrol edin.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'PNG dosya boyutu nasıl azaltılır?', body: 'Renk sayısını azaltın, dithering ayarını değiştirin ve gereğinden büyük piksel ölçülerini küçültün.' },
      { title: 'PNG sıkıştırma şeffaflığı korur mu?', body: 'Evet. PNG çıktısı şeffaf alanları destekler.' },
      { title: 'PNG kayıpsız sıkıştırma kullanır mı?', body: 'PNG kodlaması kayıpsızdır; ancak paleti azaltmak kodlamadan önce renk sayısını değiştirir.' },
      { title: 'Birden fazla PNG aynı anda küçültülebilir mi?', body: 'Evet. Dosyaları veya klasörü ekleyin ve sonuçları ZIP olarak indirin.' },
      { title: 'ZIP, PNG dosyalarını çok küçültür mü?', body: 'Genellikle hayır. PNG zaten sıkıştırılmıştır; ZIP sonuçları birlikte indirmek için kullanılır.' },
      { title: 'PNG dosyaları sunucuya yüklenir mi?', body: 'Hayır. Tüm işlemler tarayıcıda yerel olarak çalışır.' },
      { title: "PNG, WebP'ye dönüştürülebilir mi?", body: "Evet. Boyutu karşılaştırmak için çıktı biçimi olarak WebP'yi seçebilirsiniz." },
    ],
    ctaHeading: 'PNG Boyutunu Şimdi Küçült',
    ctaBody: 'PNG ekleyin, renkleri ayarlayın ve sonucu indirin.',
    ctaButton: 'PNG Seç',
    skipLinkLabel: 'İçeriğe geç',
    featureList: ['PNG küçültme', 'Renk paleti', 'Dithering', 'Şeffaflık', 'Toplu işleme', 'Yerel işleme'],
    footerLabels: trFooter,
    relatedLinks: [
      appLink('Compresser PNG', 'fr/compresser-png'),
      appLink('Kompres PNG', 'id/kompres-png'),
      appLink('PNG to WebP Converter', 'png-to-webp-converter'),
    ],
  },
);

const frUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Glissez des images ou un dossier ici, ',
  dropAfterPaste: ' ou cliquez pour choisir',
  paste: 'collez',
  pasteAriaLabel: 'Coller des images depuis le presse-papiers',
  chooseImages: 'Choisir des images',
  moreOptionsAriaLabel: "Plus d'options d'ajout",
  chooseFolder: 'Choisir un dossier',
  formats: 'JPG, PNG, WebP, AVIF, SVG et autres',
  invalidFiles: 'Choisissez uniquement des fichiers image.',
  preparing: 'Préparation de',
  imageSingular: 'image',
  imagePlural: 'images',
  editorError: "Impossible d'ouvrir l'éditeur. Réessayez.",
  clipboardUnavailable: 'Le presse-papiers est indisponible. Appuyez sur Ctrl ou Cmd + V.',
  clipboardBlocked: 'Le presse-papiers est bloqué. Appuyez sur Ctrl ou Cmd + V.',
};

const frFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Accueil Vicoco',
  relatedTools: 'Outils associés',
  relatedToolsAriaLabel: 'Outils associés',
  freeImageCompressor: "Compresseur d'images gratuit",
  vicocoLinksAriaLabel: 'Liens Vicoco',
  privacy: 'Confidentialité',
};

const itUpload: ToolPageSeed['uploadLabels'] = {
  dropBeforePaste: 'Trascina immagini o una cartella qui, ',
  dropAfterPaste: ' oppure fai clic per scegliere',
  paste: 'incolla',
  pasteAriaLabel: 'Incolla immagini dagli appunti',
  chooseImages: 'Scegli immagini',
  moreOptionsAriaLabel: 'Altre opzioni di caricamento',
  chooseFolder: 'Scegli cartella',
  formats: 'JPG, PNG, WebP, AVIF, SVG e altri',
  invalidFiles: 'Scegli solo file immagine.',
  preparing: 'Preparazione di',
  imageSingular: 'immagine',
  imagePlural: 'immagini',
  editorError: "Impossibile aprire l'editor. Riprova.",
  clipboardUnavailable: 'Gli appunti non sono disponibili. Premi Ctrl o Cmd + V.',
  clipboardBlocked: 'Accesso agli appunti bloccato. Premi Ctrl o Cmd + V.',
};

const itFooter: ToolPageSeed['footerLabels'] = {
  homeAriaLabel: 'Home Vicoco',
  relatedTools: 'Strumenti correlati',
  relatedToolsAriaLabel: 'Strumenti correlati',
  freeImageCompressor: 'Compressore immagini gratuito',
  vicocoLinksAriaLabel: 'Link Vicoco',
  privacy: 'Privacy',
};

toolPageSeeds.push(
  {
    path: 'id/kompres-jpg',
    kind: 'jpg-compressor',
    lang: 'id',
    ogLocale: 'id_ID',
    title: 'Kompres JPG Online Gratis - Cepat dan Aman',
    description: 'Kompres JPG online langsung di browser. Atur kualitas dan ukuran foto, bandingkan hasil, lalu unduh satu file atau batch tanpa upload ke server.',
    ogDescription: 'Kecilkan ukuran JPG di browser, bandingkan kualitas, dan unduh hasil tanpa mengirim foto ke server.',
    h1Lines: ['Kompres JPG Online Gratis -', 'Cepat dan Aman'],
    heroDescription: 'Kompres JPG langsung di browser. Atur kualitas dan dimensi, bandingkan foto asli dengan hasilnya, lalu unduh satu file atau seluruh antrean.',
    source: 'id-kompres-jpg',
    imageAlt: 'Editor Vicoco membandingkan foto asli dan JPG hasil kompresi',
    imageCaption: 'Periksa kualitas, dimensi, dan ukuran JPG sebelum memproses seluruh antrean.',
    uploadLabels: { ...idUpload, chooseImages: 'Pilih JPG' },
    stepsHeading: 'Cara Kompres JPG Online',
    steps: [
      { title: 'Tambahkan File JPG', body: 'Pilih satu atau beberapa JPG, tambahkan folder, tarik file, atau tempel foto.' },
      { title: 'Atur Kualitas JPG', body: 'Turunkan kualitas secara bertahap dan periksa detail, dimensi, serta ukuran file.' },
      { title: 'Unduh JPG Hasil Kompresi', body: 'Unduh foto aktif atau proses seluruh antrean dan simpan hasil dalam ZIP.' },
    ],
    privacyHeading: 'Kompres JPG Tanpa Upload ke Server',
    privacyBody: 'Vicoco memproses JPG secara lokal di browser. Foto sumber tetap berada di perangkat Anda.',
    privacyBullets: ['Tanpa akun', 'Pemrosesan lokal', 'Satu JPG atau satu folder', 'Perbandingan kualitas'],
    batchHeading: 'Kompres Banyak JPG Sekaligus',
    batchBody: 'Gunakan kualitas, lebar, tinggi, dan aturan nama file yang sama untuk seluruh antrean JPG.',
    batchItems: [
      { title: 'Satu Kualitas untuk Semua JPG', body: 'Terapkan pengaturan kualitas yang sama pada seluruh antrean.' },
      { title: 'Ubah Dimensi JPG', body: 'Gunakan lebar dan tinggi yang sama bila diperlukan.' },
      { title: 'Unduh Semua dalam ZIP', body: 'Simpan seluruh JPG hasil kompresi dalam satu unduhan.' },
    ],
    detailsHeading: 'Kualitas dan Ukuran File JPG',
    detailsBody: 'Atur kualitas dan dimensi, lalu periksa hasil sebelum mengunduh.',
    detailItems: [
      { title: 'Kualitas Foto JPG', body: 'Kualitas lebih rendah biasanya menghasilkan file lebih kecil, tetapi dapat menambah artefak.' },
      { title: 'Dimensi Piksel JPG', body: 'Kurangi lebar dan tinggi bila foto lebih besar daripada kebutuhan.' },
      { title: 'Perbandingan JPG', body: 'Periksa kualitas visual, ukuran file, dan dimensi sebelum menyimpan.' },
    ],
    previewHeading: 'Bandingkan JPG Sebelum Diunduh',
    previewBody: 'Lihat foto asli dan hasil kompresi, dimensi, ukuran file, serta perubahan ukuran sebelum ekspor.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Bagaimana cara kompres JPG tanpa banyak mengurangi kualitas?', body: 'Turunkan kualitas sedikit demi sedikit sambil memeriksa pratinjau. Pertahankan dimensi yang sesuai kebutuhan.' },
      { title: 'Bagaimana kompresi JPG bekerja?', body: 'JPEG menggunakan kompresi lossy untuk membuang sebagian informasi visual dan mengurangi ukuran file.' },
      { title: 'Bisakah saya kompres JPG di Windows 11?', body: 'Ya. Buka Vicoco di browser, tambahkan JPG, atur kualitas, dan unduh hasilnya.' },
      { title: 'Bisakah banyak JPG dikompres sekaligus?', body: 'Ya. Tambahkan beberapa file atau folder, terapkan satu pengaturan, lalu unduh ZIP.' },
      { title: 'Bisakah ukuran piksel diubah saat kompres JPG?', body: 'Ya. Atur lebar dan tinggi sebelum mengekspor hasil.' },
      { title: 'Apakah JPG diunggah ke server?', body: 'Tidak. Pemrosesan dilakukan secara lokal di browser.' },
      { title: 'Bisakah Vicoco otomatis mencapai target ukuran KB?', body: 'Bisa. Masukkan target ukuran KB untuk JPG; Vicoco akan mencari kualitas yang sesuai dan dapat mengecilkan dimensi bila diperlukan.' },
    ],
    ctaHeading: 'Kompres JPG Sekarang',
    ctaBody: 'Tambahkan JPG, atur kualitas, dan unduh hasilnya dari browser.',
    ctaButton: 'Pilih JPG',
    skipLinkLabel: 'Lewati ke konten',
    featureList: ['Kompresi JPG', 'Kualitas JPG', 'Ubah dimensi', 'Antrean batch', 'Unduhan ZIP', 'Pemrosesan lokal'],
    footerLabels: idFooter,
    relatedLinks: [
      appLink('Kompres Foto', 'id/kompres-foto'),
      appLink('Kompres PNG', 'id/kompres-png'),
      appLink('Nén Ảnh JPG', 'vi/nen-anh-jpg'),
      appLink('Comprimi JPG', 'it/comprimi-jpg'),
    ],
  },
  {
    path: 'id/kompres-png',
    kind: 'png-compressor',
    lang: 'id',
    ogLocale: 'id_ID',
    title: 'Kompres PNG Online Gratis - Cepat dan Aman',
    description: 'Kompres PNG online langsung di browser. Kurangi warna, pertahankan transparansi, bandingkan hasil, dan unduh satu file atau batch tanpa upload.',
    ogDescription: 'Kecilkan ukuran PNG, pertahankan transparansi, dan bandingkan hasil langsung di browser.',
    h1Lines: ['Kompres PNG Online Gratis -', 'Cepat dan Aman'],
    heroDescription: 'Kompres PNG di browser dengan pengaturan palet warna dan dithering. Periksa transparansi, ukuran file, dan kualitas sebelum mengunduh hasil.',
    source: 'id-kompres-png',
    imageAlt: 'Editor Vicoco membandingkan PNG asli dan hasil kompresi',
    imageCaption: 'Periksa transparansi, warna, dimensi, dan ukuran PNG sebelum mengunduh.',
    uploadLabels: { ...idUpload, chooseImages: 'Pilih PNG' },
    stepsHeading: 'Cara Kompres PNG Online',
    steps: [
      { title: 'Tambahkan File PNG', body: 'Pilih PNG, tambahkan folder, tarik file ke halaman, atau tempel gambar.' },
      { title: 'Atur Warna dan Ukuran PNG', body: 'Kurangi jumlah warna, sesuaikan dithering, atau ubah dimensi piksel.' },
      { title: 'Unduh PNG Hasil Kompresi', body: 'Unduh satu PNG atau proses seluruh antrean dan simpan hasil dalam ZIP.' },
    ],
    privacyHeading: 'Kompres PNG Tanpa Upload ke Server',
    privacyBody: 'Dekode, optimasi palet, dan ekspor berjalan lokal di browser. File sumber tidak dikirim ke server pemrosesan.',
    privacyBullets: ['Tanpa akun', 'Pemrosesan lokal', 'Transparansi PNG', 'Satu file atau satu folder'],
    batchHeading: 'Kompres Banyak PNG Sekaligus',
    batchBody: 'Gunakan pengaturan palet, dimensi, dan penamaan yang sama pada banyak PNG atau satu folder.',
    batchItems: [
      { title: 'Satu Palet untuk Antrean', body: 'Gunakan jumlah warna dan dithering yang sama pada seluruh PNG.' },
      { title: 'Periksa Transparansi', body: 'Bandingkan area transparan dan kualitas sebelum pemrosesan batch.' },
      { title: 'Unduh Semua dalam ZIP', body: 'Simpan seluruh hasil PNG dalam satu unduhan.' },
    ],
    detailsHeading: 'Warna, Transparansi, dan Ukuran PNG',
    detailsBody: 'Sesuaikan palet dan dimensi berdasarkan jenis gambar.',
    detailItems: [
      { title: 'Palet Warna PNG', body: 'Jumlah warna lebih kecil dapat mengurangi file ilustrasi, ikon, dan tangkapan layar.' },
      { title: 'Transparansi PNG', body: 'PNG mendukung area transparan. Periksa hasilnya di pratinjau.' },
      { title: 'Dimensi dan Ukuran File', body: 'Kurangi lebar dan tinggi gambar yang terlalu besar untuk mengecilkan file lebih lanjut.' },
    ],
    previewHeading: 'Bandingkan PNG Sebelum Diunduh',
    previewBody: 'Periksa warna, transparansi, dimensi, dan perubahan ukuran file sebelum ekspor.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Bagaimana cara mengecilkan ukuran PNG?', body: 'Kurangi jumlah warna, atur dithering, dan kecilkan dimensi jika gambar lebih besar dari kebutuhan.' },
      { title: 'Apakah kompres PNG mempertahankan transparansi?', body: 'Ya. Ekspor PNG tetap mendukung transparansi; periksa pratinjau untuk memastikan hasilnya.' },
      { title: 'Apakah PNG menggunakan kompresi lossless?', body: 'PNG menyimpan piksel secara lossless, tetapi pengurangan palet warna mengubah jumlah warna sebelum pengodean.' },
      { title: 'Bisakah banyak PNG dikompres sekaligus?', body: 'Ya. Tambahkan beberapa PNG atau folder dan unduh hasil dalam ZIP.' },
      { title: 'Apakah ZIP membuat PNG jauh lebih kecil?', body: 'Biasanya tidak banyak karena PNG sudah dikompres. ZIP terutama digunakan untuk mengunduh banyak hasil.' },
      { title: 'Apakah PNG diunggah ke server?', body: 'Tidak. Semua pemrosesan berlangsung lokal di browser.' },
      { title: 'Bisakah PNG dikonversi ke WebP?', body: 'Ya. Pilih WebP sebagai format output jika Anda ingin membandingkan alternatif yang lebih efisien.' },
    ],
    ctaHeading: 'Kompres PNG Sekarang',
    ctaBody: 'Tambahkan PNG, atur warna dan dimensi, lalu unduh hasilnya.',
    ctaButton: 'Pilih PNG',
    skipLinkLabel: 'Lewati ke konten',
    featureList: ['Kompresi PNG', 'Palet warna', 'Dithering', 'Transparansi', 'Batch ZIP', 'Pemrosesan lokal'],
    footerLabels: idFooter,
    relatedLinks: [
      appLink('Kompres Foto', 'id/kompres-foto'),
      appLink('Kompres JPG', 'id/kompres-jpg'),
      appLink('Nén Ảnh PNG', 'vi/nen-anh-png'),
      appLink('PNG Dosya Boyutu Küçültme', 'tr/png-dosya-boyutu-kucultme'),
    ],
  },
  {
    path: 'fr/compresser-png',
    kind: 'png-compressor',
    lang: 'fr',
    ogLocale: 'fr_FR',
    title: 'Compresser PNG en ligne gratuitement — rapide et privé',
    description: 'Compressez vos PNG dans le navigateur. Réduisez les couleurs, conservez la transparence, comparez le résultat et téléchargez sans envoi au serveur.',
    ogDescription: 'Réduisez la taille des PNG, conservez la transparence et comparez le résultat directement dans votre navigateur.',
    h1Lines: ['Compresser PNG en ligne gratuitement —', 'rapide et privé'],
    heroDescription: 'Compressez un PNG ou tout un dossier dans votre navigateur. Ajustez la palette, le tramage et les dimensions, puis vérifiez la transparence avant le téléchargement.',
    source: 'fr-compresser-png',
    imageAlt: 'Vicoco compare un PNG original et son résultat compressé',
    imageCaption: 'Vérifiez la transparence, les couleurs, les dimensions et la taille du PNG.',
    uploadLabels: { ...frUpload, chooseImages: 'Choisir des PNG' },
    stepsHeading: 'Comment compresser un PNG en ligne',
    steps: [
      { title: 'Ajoutez les fichiers PNG', body: 'Choisissez des fichiers, un dossier, glissez-les sur la page ou collez une image.' },
      { title: 'Réglez les couleurs et les dimensions', body: 'Réduisez la palette, ajustez le tramage et modifiez la largeur ou la hauteur.' },
      { title: 'Téléchargez les PNG compressés', body: 'Téléchargez une image ou traitez la file et récupérez les résultats dans un ZIP.' },
    ],
    privacyHeading: "Compresser un PNG sans l'envoyer au serveur",
    privacyBody: 'Vicoco traite les images localement dans le navigateur. Les fichiers sources restent sur votre appareil.',
    privacyBullets: ['Sans compte', 'Traitement local', 'Transparence PNG', 'Un fichier ou un dossier'],
    batchHeading: 'Compresser plusieurs PNG à la fois',
    batchBody: 'Appliquez les mêmes réglages de palette, de dimensions et de nommage à plusieurs images ou à un dossier.',
    batchItems: [
      { title: 'Une palette pour la file', body: 'Réutilisez le nombre de couleurs et le tramage sur tous les PNG.' },
      { title: 'Contrôle de la transparence', body: "Vérifiez les zones transparentes dans l'aperçu." },
      { title: 'Téléchargement ZIP', body: 'Récupérez tous les PNG traités ensemble.' },
    ],
    detailsHeading: 'Couleurs, transparence et taille du PNG',
    detailsBody: "Adaptez la palette et les dimensions au contenu de l'image.",
    detailItems: [
      { title: 'Réduire la palette', body: "Une palette plus petite peut alléger les illustrations, icônes et captures d'écran." },
      { title: 'Conserver la transparence', body: "Le PNG accepte les zones transparentes. Vérifiez-les dans l'aperçu." },
      { title: 'Dimensions du PNG', body: 'Réduisez une largeur ou une hauteur excessive pour diminuer davantage le fichier.' },
    ],
    previewHeading: 'Comparer le PNG avant le téléchargement',
    previewBody: 'Consultez les couleurs, la transparence, les dimensions et la variation de taille avant export.',
    faqHeading: 'FAQs',
    faqs: [
      { title: "Comment réduire la taille d'un PNG ?", body: "Réduisez le nombre de couleurs et les dimensions trop grandes, puis comparez le résultat." },
      { title: 'La compression PNG conserve-t-elle la transparence ?', body: "Oui. L'export PNG prend en charge la transparence." },
      { title: 'Le PNG utilise-t-il une compression sans perte ?', body: "L'encodage PNG est sans perte, mais réduire la palette modifie d'abord le nombre de couleurs." },
      { title: 'Puis-je compresser plusieurs PNG ensemble ?', body: 'Oui. Ajoutez plusieurs fichiers ou un dossier et téléchargez les résultats dans un ZIP.' },
      { title: 'Un ZIP réduit-il fortement la taille des PNG ?', body: 'Généralement non. Le ZIP sert surtout à regrouper plusieurs résultats.' },
      { title: 'Mes PNG sont-ils envoyés sur un serveur ?', body: "Non. Le traitement s'effectue localement dans le navigateur." },
      { title: 'Puis-je convertir un PNG en WebP ?', body: 'Oui. Sélectionnez WebP comme format de sortie pour comparer sa taille au PNG.' },
    ],
    ctaHeading: 'Compresser un PNG maintenant',
    ctaBody: 'Ajoutez un PNG, réglez la palette et téléchargez le résultat.',
    ctaButton: 'Choisir des PNG',
    skipLinkLabel: 'Aller au contenu',
    featureList: ['Compression PNG', 'Palette de couleurs', 'Tramage', 'Transparence', 'Traitement par lot', 'Traitement local'],
    footerLabels: frFooter,
    relatedLinks: [
      appLink('PNG to WebP Converter', 'png-to-webp-converter'),
      appLink('Nén Ảnh PNG', 'vi/nen-anh-png'),
      appLink('PNG Dosya Boyutu Küçültme', 'tr/png-dosya-boyutu-kucultme'),
    ],
  },
  {
    path: 'it/comprimi-jpg',
    kind: 'jpg-compressor',
    lang: 'it',
    ogLocale: 'it_IT',
    title: 'Comprimi JPG online gratis — veloce e sicuro',
    description: 'Comprimi JPG online nel browser. Regola qualità e dimensioni, confronta il risultato e scarica un file o un intero lotto senza upload sul server.',
    ogDescription: 'Riduci le dimensioni dei JPG nel browser, confronta la qualità e scarica i risultati senza inviarli a un server.',
    h1Lines: ['Comprimi JPG online gratis —', 'veloce e sicuro'],
    heroDescription: "Comprimi JPG direttamente nel browser. Regola qualità e dimensioni, confronta l'originale con il risultato e scarica una foto o tutto il lotto.",
    source: 'it-comprimi-jpg',
    imageAlt: 'Vicoco confronta una foto originale e il JPG compresso',
    imageCaption: 'Controlla qualità, dimensioni e peso del JPG prima di elaborare il lotto.',
    uploadLabels: { ...itUpload, chooseImages: 'Scegli JPG' },
    stepsHeading: 'Come comprimere JPG online',
    steps: [
      { title: 'Aggiungi i file JPG', body: "Scegli una o più foto, una cartella, trascina i file oppure incolla un'immagine." },
      { title: 'Regola la qualità JPG', body: 'Riduci gradualmente la qualità e controlla dettagli, dimensioni e peso del file.' },
      { title: 'Scarica i JPG compressi', body: 'Scarica il file corrente oppure elabora la coda e ottieni un unico ZIP.' },
    ],
    privacyHeading: 'Comprimere JPG senza upload sul server',
    privacyBody: 'Decodifica e compressione avvengono localmente nel browser. Le foto originali restano sul dispositivo.',
    privacyBullets: ['Senza account', 'Elaborazione locale', 'Un JPG o una cartella', 'Confronto qualità'],
    batchHeading: 'Comprimere più JPG insieme',
    batchBody: 'Applica la stessa qualità, larghezza, altezza e regola per i nomi a tutti i file in coda.',
    batchItems: [
      { title: 'Una qualità per il lotto', body: 'Riutilizza la stessa qualità per tutti i JPG.' },
      { title: 'Dimensioni condivise', body: 'Applica larghezza e altezza comuni quando necessario.' },
      { title: 'Download ZIP', body: 'Scarica tutti i JPG elaborati insieme.' },
    ],
    detailsHeading: 'Qualità e dimensione del file JPG',
    detailsBody: 'Regola qualità e dimensioni, quindi controlla il risultato prima di scaricare.',
    detailItems: [
      { title: 'Qualità della foto', body: 'Una qualità inferiore crea in genere file più piccoli, ma può introdurre artefatti.' },
      { title: 'Dimensioni in pixel', body: 'Ridurre larghezza e altezza eccessive aiuta a diminuire ulteriormente il peso.' },
      { title: 'Confronto JPG', body: 'Controlla resa, dimensioni e peso del file prima di esportare.' },
    ],
    previewHeading: 'Confrontare JPG prima del download',
    previewBody: 'Controlla dettaglio, dimensioni e variazione del peso prima di esportare.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'Come comprimere un JPG senza perdere troppa qualità?', body: "Riduci la qualità poco alla volta e controlla l'anteprima. Mantieni le dimensioni necessarie." },
      { title: 'Come funziona la compressione JPG?', body: 'JPEG usa una compressione con perdita che rimuove parte delle informazioni visive.' },
      { title: 'Posso comprimere JPG in Windows 11?', body: 'Sì. Apri Vicoco nel browser, aggiungi i JPG, regola la qualità e scarica il risultato.' },
      { title: 'Posso comprimere più JPG contemporaneamente?', body: 'Sì. Aggiungi file o una cartella, applica una configurazione e scarica lo ZIP.' },
      { title: 'Posso ridimensionare il JPG durante la compressione?', body: "Sì. Imposta larghezza e altezza prima dell'esportazione." },
      { title: 'I JPG vengono caricati su un server?', body: "No. L'elaborazione avviene localmente nel browser." },
      { title: 'Posso ottenere automaticamente un peso target in KB?', body: 'Sì. Imposta il peso obiettivo in KB per il JPG; Vicoco cerca la qualità adatta e, se necessario, riduce le dimensioni.' },
    ],
    ctaHeading: 'Comprimi JPG adesso',
    ctaBody: 'Aggiungi i JPG, regola la qualità e scarica il risultato.',
    ctaButton: 'Scegli JPG',
    skipLinkLabel: 'Vai al contenuto',
    featureList: ['Compressione JPG', 'Qualità regolabile', 'Ridimensionamento', 'Elaborazione batch', 'ZIP', 'Elaborazione locale'],
    footerLabels: itFooter,
    relatedLinks: [
      appLink('Kompres JPG', 'id/kompres-jpg'),
      appLink('Сжать JPG', 'ru/szhat-jpg'),
      appLink('ลดขนาดไฟล์ JPG', 'th/reduce-jpg-size'),
    ],
  },
);

toolPageSeeds.push(
  {
    path: 'shopify-image-optimizer',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Shopify Image Optimizer - Compress Product Images',
    description: 'Optimize Shopify product images in your browser. Resize, compress, compare and batch download product photos without uploading them to a processing server.',
    ogDescription: 'Resize and compress Shopify product images as a consistent batch with local browser processing.',
    h1Lines: ['Shopify Image Optimizer -', 'Compress Product Images'],
    heroDescription: 'Prepare Shopify product images as a consistent batch. Add product photos or a folder, choose dimensions and output settings, compare quality and file size, then download the results.',
    source: 'shopify-image-optimizer',
    imageAlt: 'Vicoco Shopify image optimizer comparing an original product photo with a compressed result',
    imageCaption: 'Compare product image quality, dimensions and file size before exporting the Shopify image batch.',
    uploadLabels: { ...enUpload, chooseImages: 'Choose Product Images' },
    stepsHeading: 'How to Optimize Product Images for Shopify',
    steps: [
      { title: 'Add Product Images', body: 'Choose one or more product photos, add a folder, drag files onto the page, or paste an image.' },
      { title: 'Set Dimensions and Compression', body: 'Choose an output format, adjust quality, and set consistent pixel dimensions when the source images use the same aspect ratio.' },
      { title: 'Review and Download the Batch', body: 'Compare visual detail and file size, process the queue, and download the optimized product images in one ZIP.' },
    ],
    privacyHeading: 'Optimize Shopify Images Without Server Uploads',
    privacyBody: 'Vicoco processes source images locally in the browser. Product photos are not sent to a Vicoco processing server.',
    privacyBullets: ['No account required', 'Local browser processing', 'Single and batch optimization', 'Quality and dimensions remain under your control'],
    batchHeading: 'Batch Optimize a Shopify Product Image Set',
    batchBody: 'Apply one format, quality level and set of dimensions to product images that should share a consistent presentation.',
    batchItems: [
      { title: 'Consistent Output Settings', body: 'Reuse the same format, quality and dimensions across the selected product image queue.' },
      { title: 'Quality Review Before Export', body: 'Inspect a representative result before applying the settings to every product photo.' },
      { title: 'One ZIP Download', body: 'Download all processed product images together when the queue finishes.' },
    ],
    detailsHeading: 'Shopify Product Image Dimensions and Formats',
    detailsBody: 'Match output settings to the image role, source aspect ratio and visual detail your storefront needs.',
    detailItems: [
      { title: 'Square Product Images', body: 'Shopify currently recommends 2048 × 2048 pixels for square product images. Use square dimensions only when the source is already square because Vicoco resizes rather than crops.' },
      { title: 'JPG for Product Photography', body: 'Use adjustable JPG quality for photographs and compare small details before processing the full batch.' },
      { title: 'PNG, WebP or AVIF Output', body: 'Keep PNG when transparency matters, or compare WebP and AVIF output when reducing web image size is the priority.' },
    ],
    previewHeading: 'Compare Shopify Product Images Before Export',
    previewBody: 'Review the original and processed image, pixel dimensions, file size and visual detail before applying the settings to the queue.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I optimize product images for Shopify?', body: 'Add the product images, select suitable dimensions and output settings, compare quality and file size, then process and download the batch.' },
      { title: 'What size should Shopify product images be?', body: 'Shopify currently recommends 2048 × 2048 pixels for square product images. Other layouts can require a different aspect ratio, so check the image area in your theme.' },
      { title: 'Does Vicoco crop product images into squares?', body: 'No. Vicoco changes pixel dimensions but does not crop. Start with square originals when you need square output, or keep the original aspect ratio.' },
      { title: 'Can I optimize multiple Shopify images at once?', body: 'Yes. Add multiple files or a folder, apply shared settings, and download the processed results in a ZIP.' },
      { title: 'Should Shopify product photos use JPG, PNG, WebP or AVIF?', body: 'JPG suits many product photographs, while PNG supports transparency. WebP and AVIF can produce smaller web images. Compare the result and confirm the format works with your storefront workflow.' },
      { title: 'Will image compression guarantee a faster Shopify store?', body: 'No single image change guarantees store performance. Smaller appropriately sized images can help, but theme code, apps, layout and delivery also affect loading performance.' },
      { title: 'Are Shopify product images uploaded to Vicoco?', body: 'No. Image decoding, resizing and compression run locally in the browser.' },
    ],
    ctaHeading: 'Optimize Shopify Product Images Now',
    ctaBody: 'Add product images, review one result and process the complete batch in your browser.',
    ctaButton: 'Choose Product Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['Product image compression', 'Custom pixel dimensions', 'JPG, PNG, WebP and AVIF output', 'Quality comparison', 'Batch processing', 'ZIP download', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('PNG to WebP Converter', 'png-to-webp-converter'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Transparent PNG Compressor', 'transparent-png-compressor'),
    ],
  },
  {
    path: 'email-signature-image-optimizer',
    kind: 'resize',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Email Signature Image Optimizer - Resize and Compress',
    description: 'Resize and compress an email signature image in your browser. Set exact dimensions, compare quality and file size, and download without a server upload.',
    ogDescription: 'Prepare a smaller email signature logo or photo with exact pixel dimensions and local browser processing.',
    h1Lines: ['Email Signature Image Optimizer -', 'Resize and Compress'],
    heroDescription: 'Prepare a logo, banner or photo for an email signature. Set the pixel dimensions required by your signature layout, compare quality and file size, then download the result.',
    source: 'email-signature-image-optimizer',
    imageAlt: 'Vicoco email signature image optimizer resizing and compressing a signature graphic',
    imageCaption: 'Check email signature image dimensions, quality and file size before downloading.',
    uploadLabels: { ...enUpload, chooseImages: 'Choose Signature Images' },
    stepsHeading: 'How to Optimize an Image for an Email Signature',
    steps: [
      { title: 'Add the Signature Image', body: 'Choose a logo, banner or photo, drag it onto the page, or paste it from the clipboard.' },
      { title: 'Set the Display Dimensions', body: 'Enter the pixel width and height required by the signature layout. Keep the original aspect ratio to avoid distortion.' },
      { title: 'Compare and Download', body: 'Choose an output format, compare image quality and file size, and download the processed signature image.' },
    ],
    privacyHeading: 'Resize an Email Signature Image Locally',
    privacyBody: 'Vicoco resizes and compresses signature images in the browser. Source files are not sent to a processing server.',
    privacyBullets: ['No account required', 'Local browser processing', 'Custom pixel dimensions', 'Original and processed comparison'],
    batchHeading: 'Prepare Consistent Signature Images for a Team',
    batchBody: 'Apply the same dimensions and output settings to signature assets that share one source aspect ratio.',
    batchItems: [
      { title: 'Keep the Aspect Ratio', body: 'Use proportional dimensions so logos and portraits do not appear stretched.' },
      { title: 'Reuse Shared Dimensions', body: 'Apply the same width and height to a set of consistently shaped signature images.' },
      { title: 'Download the Batch', body: 'Process the queue and download all completed signature images in one ZIP.' },
    ],
    detailsHeading: 'Set Email Signature Image Dimensions',
    detailsBody: 'Choose dimensions that match the signature template instead of relying on the source image size.',
    detailItems: [
      { title: 'Pixel Width', body: 'Set the image width expected by the email signature layout.' },
      { title: 'Pixel Height', body: 'Set a proportional height so the signature remains compact and undistorted.' },
      { title: 'Aspect Ratio', body: 'Keep the original width-to-height ratio unless the signature design intentionally uses another shape.' },
    ],
    previewHeading: 'Check Signature Image Quality Before Downloading',
    previewBody: 'Compare the original and processed image at the selected dimensions. Inspect logo edges, small text and photographs before export.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I reduce the size of an email signature image?', body: 'Resize it to the dimensions actually required by the signature, choose a suitable format and quality, then compare the file size before downloading.' },
      { title: 'What dimensions should an email signature image use?', body: 'There is no single size for every signature. Use the pixel width and height required by your email template and keep the original aspect ratio.' },
      { title: 'Should an email signature image use JPG or PNG?', body: 'PNG is useful for logos that need transparency. JPG often suits photographs. Test the exported image in the email clients used by your recipients.' },
      { title: 'Can Vicoco keep a transparent logo background?', body: 'Yes. Choose PNG output and verify the transparent areas in the comparison preview.' },
      { title: 'Can I prepare high-density signature images?', body: 'Yes. You can export larger pixel dimensions and display the image at a smaller size in your signature HTML. Vicoco does not generate the signature HTML.' },
      { title: 'Can I resize several team signature images together?', body: 'Yes, when the source images share a consistent aspect ratio. Apply the same dimensions to the queue and download a ZIP.' },
      { title: 'Are signature images uploaded to a server?', body: 'No. Resizing and compression run locally in the browser.' },
    ],
    ctaHeading: 'Optimize an Email Signature Image Now',
    ctaBody: 'Add a logo or photo, set its dimensions and compare the result in your browser.',
    ctaButton: 'Choose Signature Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['Custom pixel width and height', 'Aspect-ratio control', 'JPG, PNG, WebP and AVIF output', 'Quality comparison', 'Batch resize', 'ZIP download', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Stretcher', 'image-stretcher'),
      appLink('Image Size Checker', 'image-size-checker'),
      appLink('Transparent PNG Compressor', 'transparent-png-compressor'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'transparent-png-compressor',
    kind: 'png-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Transparent PNG Compressor - Reduce Size, Keep Alpha',
    description: 'Compress transparent PNG images in your browser. Reduce palette colours, adjust dithering, check the alpha channel and download one PNG or a batch.',
    ogDescription: 'Reduce transparent PNG file size while checking palette colours, image dimensions and the alpha channel.',
    h1Lines: ['Transparent PNG Compressor -', 'Reduce Size, Keep Alpha'],
    heroDescription: 'Compress a transparent PNG or a complete folder in your browser. Reduce palette colours, adjust dithering and dimensions, then inspect transparent areas before downloading.',
    source: 'transparent-png-compressor',
    imageAlt: 'Vicoco transparent PNG compressor comparing alpha transparency before and after compression',
    imageCaption: 'Check transparency, palette colours, dimensions and PNG file size before downloading.',
    uploadLabels: { ...enUpload, chooseImages: 'Choose Transparent PNGs' },
    stepsHeading: 'How to Compress a Transparent PNG',
    steps: [
      { title: 'Add Transparent PNG Files', body: 'Choose one or more PNG files, add a folder, drag files onto the page, or paste an image.' },
      { title: 'Reduce Colours and Adjust Dithering', body: 'Choose a smaller colour palette, tune dithering, and reduce dimensions when the image is larger than required.' },
      { title: 'Check Alpha and Download', body: 'Inspect transparent edges and visual detail, then download one compressed PNG or the complete batch.' },
    ],
    privacyHeading: 'Compress Transparent PNGs Without Uploading Them',
    privacyBody: 'PNG decoding, palette reduction and export run locally in the browser. Source files are not sent to a processing server.',
    privacyBullets: ['No account required', 'Local browser processing', 'Transparent PNG output', 'Single and batch compression'],
    batchHeading: 'Reduce Transparent PNG File Size',
    batchBody: 'Palette size, image dimensions and visual complexity influence the final PNG file size.',
    batchItems: [
      { title: 'Palette Size', body: 'Reducing the number of colours can make icons, illustrations and interface graphics smaller.' },
      { title: 'Image Dimensions', body: 'Reduce unnecessary pixel width and height when the PNG is larger than its intended display size.' },
      { title: 'Batch Settings', body: 'Apply one palette, dithering and dimension configuration to the complete PNG queue.' },
    ],
    detailsHeading: 'PNG Palette, Dithering and Alpha Transparency',
    detailsBody: 'Adjust the settings that affect transparent PNG appearance and file size, then inspect the result before export.',
    detailItems: [
      { title: 'Reduce the Colour Palette', body: 'Use fewer colours when the image can tolerate palette reduction without visible banding or colour shifts.' },
      { title: 'Adjust Dithering', body: 'Tune dithering to balance smooth colour transitions against texture and file size.' },
      { title: 'Keep Alpha Transparency', body: 'Export as PNG and inspect transparent areas and edge pixels in the preview.' },
    ],
    previewHeading: 'Check PNG Transparency Before Downloading',
    previewBody: 'Use the comparison preview to inspect transparent areas, edge pixels, colours, dimensions and the change in file size.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I compress a transparent PNG?', body: 'Add the PNG, reduce palette colours or dimensions, adjust dithering, inspect transparent areas, and download the PNG result.' },
      { title: 'Does PNG compression remove transparency?', body: 'Not when you export as PNG. The result still supports alpha transparency, which you can verify in the preview.' },
      { title: 'Can I compress a transparent PNG without losing quality?', body: 'PNG encoding is lossless, but palette reduction changes the available colours. Use the comparison preview and keep more colours when exact appearance matters.' },
      { title: 'Why is my transparent PNG file large?', body: 'Large pixel dimensions, many colours, detailed textures and complex transparent edges can all increase PNG file size.' },
      { title: 'Can I compress several transparent PNGs at once?', body: 'Yes. Add multiple PNG files or a folder, apply shared settings, and download the results in a ZIP.' },
      { title: 'Can I convert a transparent PNG to WebP?', body: 'Yes. Select WebP output and compare transparency and file size before downloading.' },
      { title: 'Are transparent PNG files uploaded to Vicoco?', body: 'No. Processing runs locally in the browser.' },
    ],
    ctaHeading: 'Compress Transparent PNGs Now',
    ctaBody: 'Add transparent PNG files, adjust palette settings and inspect the result in your browser.',
    ctaButton: 'Choose Transparent PNGs',
    skipLinkLabel: 'Skip to content',
    featureList: ['PNG compression', 'Palette reduction', 'Dithering control', 'Alpha transparency', 'Custom dimensions', 'Batch processing', 'ZIP download', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('PNG to WebP Converter', 'png-to-webp-converter'),
      appLink('Shopify Image Optimizer', 'shopify-image-optimizer'),
      appLink('Email Signature Image Optimizer', 'email-signature-image-optimizer'),
      appLink('Compresser PNG', 'fr/compresser-png'),
    ],
  },
);

toolPageSeeds.push(
  {
    path: 'image-compressor-to-50kb',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Compress Image to 50KB Online - Free Image Compressor',
    description: 'Compress an image to 50KB online in your browser. Target a 50KB maximum with JPEG, WebP or AVIF output and no processing-server upload.',
    ogDescription: 'Set a 50KB image limit, keep the highest tested quality under it and download the result locally.',
    h1Lines: ['Compress Image to 50KB Online -', 'Free Image Compressor'],
    heroDescription: 'Compress an image to 50KB or less. Add a photo, open the editor with a 50KB target already set, then check the resulting quality, dimensions and exact file size before download.',
    source: 'image-compressor-to-50kb',
    imageAlt: 'Vicoco image compressor showing a 50KB target and the generated image result',
    imageCaption: 'Check actual file size, quality and dimensions after running the 50KB target.',
    uploadLabels: enUpload,
    stepsHeading: 'Compress an Image to 50KB',
    steps: [
      { title: 'Add the Image', body: 'Choose an image, add a folder, drag files onto the page, or paste from the clipboard.' },
      { title: 'Run the 50KB Target', body: 'The editor starts with a 50 kB maximum and searches JPEG quality for the active image.' },
      { title: 'Inspect and Download', body: 'Check actual size, quality, dimensions and resize status before downloading.' },
    ],
    privacyHeading: 'Compress to 50KB Without Uploading',
    privacyBody: 'Image decoding, target testing, resizing and encoding run locally in the browser.',
    privacyBullets: ['No account required', 'Local browser processing', 'Actual size reporting', 'JPEG, WebP and AVIF target support'],
    batchHeading: 'Check Whether 50KB Was Reached',
    batchBody: 'The result reports the generated size and the settings used instead of hiding an unsuccessful target.',
    batchItems: [
      { title: 'Actual File Size', body: 'Confirm the generated file is at or below the 50KB maximum.' },
      { title: 'Chosen Quality', body: 'See the highest tested quality that fits the limit.' },
      { title: 'Output Dimensions', body: 'Check whether resize fallback changed width and height.' },
    ],
    detailsHeading: 'How the 50KB Target Works',
    detailsBody: 'Vicoco searches output quality first, then can reduce dimensions when quality alone cannot reach the limit.',
    detailItems: [
      { title: 'Quality Search', body: 'The editor tests JPEG quality and keeps the highest tested result under 50KB.' },
      { title: 'Resize Fallback', body: 'If needed, proportional resizing creates another path to a smaller result.' },
      { title: 'Reported Outcome', body: 'The editor shows whether the maximum was met rather than promising every source will reach it.' },
    ],
    previewHeading: 'Quality Before Dimensions',
    previewBody: 'Pixel dimensions are reduced only when quality adjustment is not enough and resize fallback is enabled.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How can I reduce an image size online to 50KB?', body: 'Add the image, keep the 50KB target, choose JPEG, WebP or AVIF output, and review the generated result before downloading.' },
      { title: 'Does the result stay under 50KB exactly?', body: 'The tool treats 50KB as a maximum, not an exact file size. The result can be smaller than 50KB.' },
      { title: 'Will compressing to 50KB reduce image dimensions?', body: 'Only when quality adjustment cannot meet the target and resize fallback is enabled. The result shows whether resizing was used.' },
      { title: 'Which formats support the 50KB target?', body: 'The automatic target-size control supports JPEG, WebP and AVIF output.' },
      { title: 'Can I compress several images to 50KB at once?', body: 'The target search runs for the active image. You can reuse its settings for the queue, but different images may produce different file sizes.' },
      { title: 'What happens if the image cannot reach 50KB?', body: 'Vicoco reports that the target was not met and shows the smallest generated result so you can allow resizing or adjust the image further.' },
      { title: 'Are images uploaded while compressing to 50KB?', body: 'No. Processing runs locally in the browser.' },
    ],
    ctaHeading: 'Compress an Image to 50KB Now',
    ctaBody: 'Add an image and inspect the generated 50KB result in your browser.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['50KB maximum preset', 'Automatic quality search', 'Optional proportional resize fallback', 'JPEG, WebP and AVIF target output', 'Actual size reporting', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 20KB', 'image-compressor-to-20kb'),
      appLink('Image Compressor to 100KB', 'image-compressor-to-100kb'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'image-compressor-to-20kb',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Image Compressor to 20KB Online - Free and Private',
    description: 'Compress an image to 20KB online with a preset file-size limit. Compare quality and dimensions, then download without a processing-server upload.',
    ogDescription: 'Reduce an image to a 20KB maximum with quality search, resize fallback and local browser processing.',
    h1Lines: ['Image Compressor to 20KB Online -', 'Free and Private'],
    heroDescription: 'Reduce an image to 20KB or less with the limit already set. Vicoco searches for a suitable output quality; enable resizing only when a very small result needs it.',
    source: 'image-compressor-to-20kb',
    imageAlt: 'Vicoco editor reducing an image toward a 20KB maximum',
    imageCaption: 'Review visual detail, actual size and dimensions after the 20KB calculation.',
    uploadLabels: enUpload,
    stepsHeading: 'The 20KB Compression Route',
    steps: [
      { title: 'Open the Image', body: 'Add a browser-readable image and enter the editor with the 20KB maximum ready.' },
      { title: 'Search Quality First', body: 'Vicoco tests JPEG output quality before changing pixel dimensions.' },
      { title: 'Review Resize Fallback', body: 'If dimensions were reduced, compare the smaller result before download.' },
    ],
    privacyHeading: 'Keep the Source Image on Your Device',
    privacyBody: 'The browser performs target calculation, resizing and encoding locally.',
    privacyBullets: ['No server upload', '20KB preset', 'Visible success state', 'Quality and dimensions remain reviewable'],
    batchHeading: 'Read the 20KB Result',
    batchBody: 'A very small target can require lower quality, smaller dimensions or both.',
    batchItems: [
      { title: 'Actual Bytes', body: 'Use the generated file-size value rather than estimating from quality.' },
      { title: 'Visual Detail', body: 'Inspect edges, texture and text at the generated quality.' },
      { title: 'Pixel Dimensions', body: 'Confirm the output is still large enough for its intended use.' },
    ],
    detailsHeading: 'What It Takes to Reach 20KB',
    detailsBody: 'Output format, visual complexity, quality and pixel dimensions all affect this restrictive target.',
    detailItems: [
      { title: 'Detailed Photographs', body: 'Noise and fine texture can require stronger quality reduction.' },
      { title: 'Large Sources', body: 'High pixel counts may require resize fallback to reach 20KB.' },
      { title: 'Output Format', body: 'JPEG, WebP and AVIF can each be tested for target-size output.' },
    ],
    previewHeading: 'Choose a Format for a Very Small File',
    previewBody: 'Compare the actual source in JPEG, WebP or AVIF instead of assuming one format always gives the best result.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I compress an image to 20KB?', body: 'Add the image, keep the 20KB target, let Vicoco search output settings, and download after checking quality and dimensions.' },
      { title: 'Is 20KB an exact size or a maximum?', body: 'It is a maximum. A successful result can be smaller than 20KB.' },
      { title: 'Why does a 20KB image look less detailed?', body: 'Reaching a very small limit can require lower quality, smaller pixel dimensions, or both, especially for detailed photographs.' },
      { title: 'Can Vicoco resize the image automatically?', body: 'Yes. You can enable resize fallback so the editor can reduce dimensions if quality alone cannot meet 20KB.' },
      { title: 'Can PNG use the automatic 20KB target?', body: 'The automatic target control supports JPEG, WebP and AVIF output. A PNG source can be converted to one of those formats.' },
      { title: 'Can every image reach 20KB?', body: 'No result is guaranteed for every source and setting. Vicoco reports when the target was not met.' },
      { title: 'Are images uploaded to a server?', body: 'No. Compression runs locally in the browser.' },
    ],
    ctaHeading: 'Reduce an Image to 20KB Now',
    ctaBody: 'Test a 20KB maximum and inspect the quality and dimensions before download.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['20KB maximum preset', 'Automatic quality search', 'Proportional resize fallback', 'JPEG, WebP and AVIF target output', 'Result status', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 50KB', 'image-compressor-to-50kb'),
      appLink('Image Compressor to 100KB', 'image-compressor-to-100kb'),
      appLink('Image Size Checker', 'image-size-checker'),
    ],
  },
  {
    path: 'image-compressor-to-100kb',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Compress Image to 100KB Online - Free and Private',
    description: 'Compress an image to 100KB online. Use a preset maximum, compare quality and dimensions, and download locally processed JPEG, WebP or AVIF output.',
    ogDescription: 'Target a 100KB maximum and inspect the generated quality, dimensions and actual file size before download.',
    h1Lines: ['Compress Image to 100KB Online -', 'Free and Private'],
    heroDescription: 'Compress an image to 100KB or less in your browser. The editor opens with the maximum already set and reports the settings used to reach it.',
    source: 'image-compressor-to-100kb',
    imageAlt: 'Vicoco image editor targeting a 100KB file size',
    imageCaption: 'Verify actual file size, JPEG quality and any dimension changes.',
    uploadLabels: enUpload,
    stepsHeading: 'Three Steps to a 100KB Image',
    steps: [
      { title: 'Add a JPG or Image', body: 'Choose a source image, folder, dropped file or clipboard image.' },
      { title: 'Run the 100KB Target', body: 'Use the preselected maximum and let the editor calculate quality and optional resizing.' },
      { title: 'Verify the File', body: 'Check actual size, visual detail and dimensions before download.' },
    ],
    privacyHeading: 'Calculate 100KB Locally',
    privacyBody: 'Target calculation and encoding occur on the device without a processing-server upload.',
    privacyBullets: ['Local processing', 'No account required', 'JPG-friendly preset', 'Visible generated settings'],
    batchHeading: 'Verify the Generated File',
    batchBody: 'Image content and dimensions mean the same quality can create different file sizes.',
    batchItems: [
      { title: 'File-Size Readout', body: 'Confirm the generated output is within the 100KB maximum.' },
      { title: 'Format and Quality', body: 'Review the selected encoder and calculated quality.' },
      { title: 'Resize Status', body: 'Check whether the fallback reduced image dimensions.' },
    ],
    detailsHeading: 'Compress JPG to 100KB or Less',
    detailsBody: 'The preset starts with JPEG output for the common JPG-to-100KB task, while WebP and AVIF remain available.',
    detailItems: [
      { title: '100KB Maximum', body: 'The result can be smaller than 100KB; it is not padded to an exact size.' },
      { title: 'Highest Tested Quality', body: 'Vicoco searches for the highest tested quality that stays under the limit.' },
      { title: 'Optional Resize', body: 'Proportional resizing is used only when enabled and quality is not enough.' },
    ],
    previewHeading: 'Control the 100KB Result',
    previewBody: 'Compare the encoded image, actual file size and output dimensions instead of relying on the quality number alone.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I compress a JPG file to 100KB?', body: 'Add the JPG, keep the 100KB target, let Vicoco test the output, and download after confirming the reported size.' },
      { title: 'Will the JPG be exactly 100KB?', body: 'No. The target is a maximum, so the file can be smaller than 100KB.' },
      { title: 'Does the tool preserve the original dimensions?', body: 'It preserves dimensions when quality adjustment is enough. If resize fallback is needed, the result reports the reduced width and height.' },
      { title: 'Can I use WebP or AVIF for a 100KB result?', body: 'Yes. The target-size control supports JPEG, WebP and AVIF output.' },
      { title: 'Why do two images need different quality settings?', body: 'Image detail, noise, colours and dimensions affect compressed size, so each source can require a different quality.' },
      { title: 'Can I process a folder after testing one image?', body: 'Yes. Review the active image first, then use its resulting settings for the queue. Queue files are not guaranteed to have identical sizes.' },
      { title: 'Does Vicoco upload the JPG?', body: 'No. Processing runs locally in the browser.' },
    ],
    ctaHeading: 'Compress an Image to 100KB Now',
    ctaBody: 'Open an image with the 100KB maximum ready and inspect the calculated result.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['100KB maximum preset', 'JPG quality calculation', 'JPEG, WebP and AVIF target output', 'Resize fallback', 'Actual size reporting', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 50KB', 'image-compressor-to-50kb'),
      appLink('Image Compressor to 200KB', 'image-compressor-to-200kb'),
      appLink('JPG to JPEG Converter', 'jpg-to-jpeg'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'image-compressor-to-200kb',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Compress Image to 200KB Online - Free Compressor',
    description: 'Compress an image to 200KB online with a preset maximum. Keep more detail, inspect the generated settings and download without a server upload.',
    ogDescription: 'Set a 200KB image maximum and compare the generated quality, dimensions and actual output size.',
    h1Lines: ['Compress Image to 200KB Online -', 'Free Compressor'],
    heroDescription: 'Compress an image to 200KB or less with a preset limit. Compare the generated file against the original and keep control of quality, dimensions and format.',
    source: 'image-compressor-to-200kb',
    imageAlt: 'Vicoco image compressor balancing quality and dimensions under 200KB',
    imageCaption: 'Check how quality and dimensions combine to reach the 200KB maximum.',
    uploadLabels: enUpload,
    stepsHeading: 'Compress to 200KB in Three Checks',
    steps: [
      { title: 'Confirm the Limit', body: 'Open the editor and confirm the target reads 200 kB.' },
      { title: 'Compare the Result', body: 'Inspect the generated quality and dimensions against the source.' },
      { title: 'Verify Before Download', body: 'Use the actual output size to confirm the requirement was met.' },
    ],
    privacyHeading: 'Process the 200KB Target Locally',
    privacyBody: 'The browser performs decoding, resizing and encoding without a source-image upload.',
    privacyBullets: ['Local processing', 'No sign-up', 'Actual size result', 'Reusable generated settings'],
    batchHeading: 'Use the Result Settings Again',
    batchBody: 'The editor keeps the generated format, quality and resize settings after calculating the active image.',
    batchItems: [
      { title: 'Reuse Quality', body: 'Apply the calculated quality to another image when appropriate.' },
      { title: 'Reuse Dimensions', body: 'Keep the generated resize settings for sources with a compatible aspect ratio.' },
      { title: 'Expect Different Sizes', body: 'Another source can produce a different file size with the same settings.' },
    ],
    detailsHeading: 'A Practical 200KB Image Limit',
    detailsBody: 'The editor calculates settings from the source instead of applying one fixed quality to every image.',
    detailItems: [
      { title: 'Source Complexity', body: 'Fine detail and noise can require more compression.' },
      { title: 'Pixel Count', body: 'Large dimensions can make the target harder to reach at high quality.' },
      { title: 'Output Choice', body: 'JPEG, WebP and AVIF each support the target calculation.' },
    ],
    previewHeading: 'Balance Resolution and Quality',
    previewBody: 'Quality is searched first; proportional resizing is the fallback when the file remains above 200KB.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I compress an image to 200KB?', body: 'Add the image, run the preselected 200KB target, inspect the generated result, and download it when the reported size meets your requirement.' },
      { title: 'Is the result exactly 200KB?', body: 'No. Vicoco treats 200KB as an upper limit and can return a smaller file.' },
      { title: 'Does a 200KB target always require resizing?', body: 'No. Resizing is used only when quality adjustment cannot meet the limit and resize fallback is enabled.' },
      { title: 'Which output formats support target size?', body: 'JPEG, WebP and AVIF support the automatic target-size calculation.' },
      { title: 'Can I keep the original aspect ratio?', body: 'Yes. When enabled, resize fallback reduces width and height proportionally.' },
      { title: 'Why can two 200KB results have different dimensions?', body: 'Different sources compress differently, so one may meet the limit at full dimensions while another requires resizing.' },
      { title: 'Are source images sent to Vicoco?', body: 'No. Processing stays in the browser.' },
    ],
    ctaHeading: 'Compress an Image to 200KB Now',
    ctaBody: 'Calculate a 200KB result and compare quality, size and dimensions.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['200KB maximum preset', 'Quality-first calculation', 'Proportional resize fallback', 'JPEG, WebP and AVIF output', 'Generated settings', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 100KB', 'image-compressor-to-100kb'),
      appLink('Image Compressor to 500KB', 'image-compressor-to-500kb'),
      appLink('Image Size Checker', 'image-size-checker'),
    ],
  },
  {
    path: 'image-compressor-to-500kb',
    kind: 'general-compressor',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'Image Compressor to 500KB Online - Free and Private',
    description: 'Compress an image to 500KB online while keeping more visual detail. Compare output size, quality and dimensions, then download with local processing.',
    ogDescription: 'Reduce an image to a 500KB maximum and inspect the highest tested quality that fits the limit.',
    h1Lines: ['Image Compressor to 500KB Online -', 'Free and Private'],
    heroDescription: 'Reduce an image to 500KB or less while retaining as much tested quality as the limit allows. Add an image and inspect the generated size before download.',
    source: 'image-compressor-to-500kb',
    imageAlt: 'Vicoco image compressor retaining detail under a 500KB maximum',
    imageCaption: 'Compare JPEG, WebP or AVIF quality and exact size under the 500KB limit.',
    uploadLabels: enUpload,
    stepsHeading: 'From Source Image to 500KB Result',
    steps: [
      { title: 'Add the Source', body: 'Choose an image, a folder, a dropped file or a clipboard image.' },
      { title: 'Run the 500KB Target', body: 'Let the editor search for the highest tested quality under the maximum.' },
      { title: 'Check Resize Status', body: 'Confirm whether quality alone was sufficient or dimensions changed.' },
    ],
    privacyHeading: 'Keep Target Testing in the Browser',
    privacyBody: 'Vicoco calculates and encodes the 500KB result locally on the device.',
    privacyBullets: ['No processing-server upload', '500KB preset', 'Format comparison', 'Visible output dimensions'],
    batchHeading: 'When the Source Is Already Small',
    batchBody: 'The editor still encodes the selected output format and does not pad a small file to exactly 500KB.',
    batchItems: [
      { title: 'Maximum, Not Exact Size', body: 'A successful file can be well below 500KB.' },
      { title: 'Highest Tested Quality', body: 'The target search keeps the highest tested quality under the limit.' },
      { title: 'No Artificial Padding', body: 'Extra bytes are not added merely to approach 500KB.' },
    ],
    detailsHeading: 'Keep More Detail Under 500KB',
    detailsBody: 'This larger maximum often leaves more room for quality or dimensions than smaller target-size pages.',
    detailItems: [
      { title: 'Quality Headroom', body: 'The search can retain a higher quality when the source compresses efficiently.' },
      { title: 'Dimension Headroom', body: 'Resize fallback may be unnecessary for moderate source dimensions.' },
      { title: 'Result Transparency', body: 'Actual size, quality and dimensions remain visible after calculation.' },
    ],
    previewHeading: 'Compare JPEG, WebP and AVIF',
    previewBody: 'Choose the format required by your workflow, run the target and compare visible detail and exact output size.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I compress an image to 500KB?', body: 'Add the image, keep the 500KB target, run the calculation, and download after checking the actual file size.' },
      { title: 'Will a 500KB result be exactly 500KB?', body: 'No. The setting is a maximum, so the result can be smaller.' },
      { title: 'Does Vicoco lower dimensions automatically?', body: 'Only when the target cannot be reached through quality adjustment and resize fallback is enabled.' },
      { title: 'Can I compress JPG, PNG, WebP or AVIF input?', body: 'You can add browser-readable images and choose JPEG, WebP or AVIF output for the automatic target.' },
      { title: 'Which format creates the best 500KB image?', body: 'There is no universal winner. Compare the actual source and choose the result that fits your compatibility and quality needs.' },
      { title: 'Can I apply the settings to several images?', body: 'Yes, but reused settings do not guarantee that every source will be under 500KB because image content differs.' },
      { title: 'Are files uploaded during compression?', body: 'No. Processing is local to the browser.' },
    ],
    ctaHeading: 'Compress an Image to 500KB Now',
    ctaBody: 'Run a 500KB target and retain as much tested quality as the maximum allows.',
    ctaButton: 'Choose Images',
    skipLinkLabel: 'Skip to content',
    featureList: ['500KB maximum preset', 'Highest tested quality search', 'JPEG, WebP and AVIF output', 'Resize fallback', 'Actual size reporting', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 200KB', 'image-compressor-to-200kb'),
      appLink('Image Compressor to 100KB', 'image-compressor-to-100kb'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
    ],
  },
  {
    path: 'jpg-to-jpeg',
    kind: 'converter',
    lang: 'en',
    ogLocale: 'en_GB',
    title: 'JPG to JPEG Converter Online - Free and Private',
    description: 'Convert JPG to JPEG online in your browser. Re-encode one image or a batch with a .jpeg filename and download without a processing-server upload.',
    ogDescription: 'Open JPG files, choose JPEG quality and export one image or a batch with the .jpeg extension.',
    h1Lines: ['JPG to JPEG Converter Online -', 'Free and Private'],
    heroDescription: 'Convert a .jpg image to a .jpeg file in your browser. Choose quality, compare the re-encoded result and download one JPEG or a batch with the .jpeg extension.',
    source: 'jpg-to-jpeg',
    imageAlt: 'Vicoco JPG to JPEG converter exporting a re-encoded image with a jpeg filename',
    imageCaption: 'Compare the re-encoded JPEG before downloading the .jpeg output.',
    uploadLabels: {
      ...enUpload,
      chooseImages: 'Choose JPG Files',
      formats: 'JPG and JPEG files',
      invalidFiles: 'Choose JPG or JPEG files only.',
    },
    stepsHeading: 'How to Convert JPG to JPEG',
    steps: [
      { title: 'Add JPG Files', body: 'Choose one or more JPEG images with .jpg or .jpeg filenames.' },
      { title: 'Review JPEG Settings', body: 'Choose quality and optional dimensions, then compare the re-encoded image.' },
      { title: 'Download .jpeg Output', body: 'Download one .jpeg file or process the queue into a ZIP.' },
    ],
    privacyHeading: 'Convert JPG to JPEG Locally',
    privacyBody: 'JPEG validation, decoding and encoding run in the browser without a processing-server upload.',
    privacyBullets: ['JPEG-only input preset', '.jpeg single-file output', '.jpeg batch output', 'Local browser processing'],
    batchHeading: 'Batch .jpeg Output',
    batchBody: 'Apply shared JPEG quality and dimension settings to the queue, then download .jpeg files in one ZIP.',
    batchItems: [
      { title: 'JPEG Input Check', body: 'Non-JPEG inputs are rejected by this page preset.' },
      { title: 'Shared Settings', body: 'Reuse quality and dimensions across compatible source images.' },
      { title: '.jpeg Filenames', body: 'Single and batch results use the .jpeg extension.' },
    ],
    detailsHeading: 'JPG and JPEG Use the Same Image Format',
    detailsBody: '.jpg and .jpeg are filename extensions for JPEG images. This page re-encodes the source and provides .jpeg output.',
    detailItems: [
      { title: 'Same JPEG Data Type', body: 'Both extensions commonly identify JPEG image data.' },
      { title: 'Different Filename Extension', body: 'The exported result ends in .jpeg for workflows that require that spelling.' },
      { title: 'Visible Re-encoding', body: 'Compare quality and file size because the image is encoded again, not only renamed.' },
    ],
    previewHeading: 'Re-encoding Affects the Result',
    previewBody: 'Changing JPEG quality or dimensions can alter file size and visual detail, so inspect the output before download.',
    faqHeading: 'FAQs',
    faqs: [
      { title: 'How do I convert JPG to JPEG?', body: 'Add the JPG, review the JPEG settings, and download the processed result with a .jpeg filename.' },
      { title: 'Are JPG and JPEG the same format?', body: 'Yes. Both extensions commonly identify JPEG image data. The difference here is the filename extension used for output.' },
      { title: 'Does changing JPG to JPEG improve quality?', body: 'No. Changing the extension does not create missing detail, and re-encoding can alter quality depending on the selected settings.' },
      { title: 'Does the converter only rename the file?', body: 'No. Vicoco decodes and re-encodes the image, then names the output with .jpeg.' },
      { title: 'Can I convert multiple JPG files to JPEG?', body: 'Yes. Add several JPEG files or a folder, apply shared settings and download a ZIP containing .jpeg files.' },
      { title: 'Can I change JPEG quality while converting?', body: 'Yes. Adjust quality and compare file size and visual detail before export.' },
      { title: 'Are JPG files uploaded to a server?', body: 'No. Processing runs locally in the browser.' },
    ],
    ctaHeading: 'Convert JPG to JPEG Now',
    ctaBody: 'Add JPG files, compare the encoded result and download .jpeg output.',
    ctaButton: 'Choose JPG Files',
    skipLinkLabel: 'Skip to content',
    featureList: ['JPG and JPEG input', 'JPEG re-encoding', '.jpeg output filenames', 'Adjustable JPEG quality', 'Batch ZIP output', 'Local browser processing'],
    footerLabels: enFooter,
    relatedLinks: [
      appLink('Image Compressor to 100KB', 'image-compressor-to-100kb'),
      appLink('Squoosh Batch Image Compressor', 'squoosh-batch-image-compressor'),
      appLink('Image Size Checker', 'image-size-checker'),
    ],
  },
);

export const toolPages: ToolPageData[] = toolPageSeeds.map(toToolPageData);
