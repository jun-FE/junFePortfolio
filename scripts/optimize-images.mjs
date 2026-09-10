// 원본 스크린샷(raw-images/*.png)을 리사이즈 + WebP로 변환해 src/assets/images/ 에 출력한다.
//   yarn optimize:images
// 원본은 raw-images/ 에 두고(gitignore), 번들에는 최적화본만 들어간다.
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('raw-images');
const OUT = path.resolve('src/assets/images');
const MAX_WIDTH = 1600; // 갤러리 aspect-video 최대 표시폭(~512px)의 3배 여유
const QUALITY = 80;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

let before = 0;
let after = 0;
for (const file of files) {
  const input = path.join(SRC, file);
  const output = path.join(OUT, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const meta = await sharp(input).metadata();
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);
  const [i, o] = await Promise.all([stat(input), stat(output)]);
  before += i.size;
  after += o.size;
  console.log(
    `${file.padEnd(16)} ${String(meta.width).padStart(5)}px ${(i.size / 1e6).toFixed(1).padStart(5)}MB → ${(o.size / 1e3).toFixed(0).padStart(4)}KB`
  );
}
console.log(
  `\n${files.length} files: ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(2)}MB`
);
