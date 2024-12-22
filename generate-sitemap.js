const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/service/bao-tri-sua-chua-website', changefreq: 'monthly', priority: 0.9 },
        { url: '/service/thiet-ke-website-rieng', changefreq: 'monthly', priority: 0.9 },
        { url: '/service/ten-mien-website-domain', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/studio-chup-anh-cuoi', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/landing-page', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/website-bat-dong-san', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/website-thuong-mai-dien-tu', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/website-nha-hang-quan-ca-phe', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/website-giao-duc', changefreq: 'monthly', priority: 0.9 },
        { url: '/category/website-dashboard', changefreq: 'monthly', priority: 0.9 },
        { url: '/aboutMe', changefreq: 'monthly', priority: 0.8 },
        { url: '/blog', changefreq: 'monthly', priority: 0.8 },
    ];

    // Tạo một stream để ghi file sitemap
    const sitemap = new SitemapStream({ hostname: 'https://www.kassdev.com' });
    const writeStream = createWriteStream('./public/sitemap.xml');

    // Kết nối stream với file và xử lý
    sitemap.pipe(writeStream);
    links.forEach(link => sitemap.write(link));
    sitemap.end();

    // Đảm bảo hoàn thành quá trình
    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });

    console.log('Sitemap created successfully!');
}

generateSitemap().catch(console.error);
