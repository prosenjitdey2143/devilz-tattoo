const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
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
    if (fs.existsSync(dest)) {
        try {
            fs.unlinkSync(dest);
        } catch (e) {}
    }
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
