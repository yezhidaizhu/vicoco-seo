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
      appLink('PNG Dosya Boyutu Küçültme', 'tr/png-dosya-boyutu-kucultme'),
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

export const toolPages: ToolPageData[] = toolPageSeeds.map(toToolPageData);
