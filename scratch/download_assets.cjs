const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  { url: 'https://cdn.pixabay.com/photo/2024/04/04/12/11/ai-generated-8675005_1280.jpg', name: 'images/tribal_geometric.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2020/06/02/06/34/home-studios-5249651_1280.jpg', name: 'images/studio_atmosphere.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2016/11/20/20/05/tattoo-1843632_1280.jpg', name: 'images/studio_equipment.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2017/08/03/13/01/people-2576110_1280.jpg', name: 'images/about_portrait.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2019/04/12/21/19/woman-4123270_1280.jpg', name: 'images/mandala_fine_line.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2015/02/10/16/25/tattoo-631210_1280.jpg', name: 'images/classic_portrait.jpg' },
  { url: 'https://cdn.pixabay.com/photo/2022/02/21/20/41/tattoo-7027595_1280.jpg', name: 'images/tattoo_inks.jpg' },
  { url: 'https://cdn.pixabay.com/video/2023/03/05/153299-804933560_large.mp4', name: 'videos/hero_bg_video.mp4' },
  { url: 'https://cdn.pixabay.com/video/2022/09/21/132069-752333849_large.mp4', name: 'videos/studio_cinematic.mp4' },
  { url: 'https://cdn.pixabay.com/video/2023/07/20/172489-847499841_large.mp4', name: 'videos/about_process.mp4' },
  { url: 'https://cdn.pixabay.com/video/2023/03/05/153297-804933556_large.mp4', name: 'videos/ink_motion.mp4' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  for (const asset of assets) {
    const dest = path.join('src/assets', asset.name);
    console.log(`Downloading ${asset.url} to ${dest}...`);
    try {
      await download(asset.url, dest);
      console.log(`Done: ${asset.name}`);
    } catch (err) {
      console.error(`Error downloading ${asset.name}: ${err.message}`);
    }
  }
}

main();
