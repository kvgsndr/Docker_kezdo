const axios = require('axios');
const cheerio = require('cheerio');
const winston = require('winston');

const website = process.env.WEBSITE_URL;
const logPath = process.env.LOG_PATH;

if (!website || !logPath) {
  console.error('Website URL or log path not provided.');
  process.exit(1);
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: logPath })
  ]
});

async function analyzeWebsite(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    const title = $('title').text();
    const metaTags = [];
    $('meta').each((index, element) => {
      metaTags.push({
        name: $(element).attr('name') || $(element).attr('property'),
        content: $(element).attr('content')
      });
    });
    const headings = {
      h1: $('h1').map((index, element) => $(element).text()).get(),
      h2: $('h2').map((index, element) => $(element).text()).get(),
      h3: $('h3').map((index, element) => $(element).text()).get()
    };
    const links = $('a').map((index, element) => $(element).attr('href')).get();

    const analysisResult = {
      title,
      metaTags,
      headings,
      links
    };

    logger.info(`Analysis result for ${url}`, { analysisResult });
    console.log(`Website ${url} analyzed successfully.`);
  } catch (error) {
    console.error(`Error analyzing website ${url}:`, error.message);
  }
}

analyzeWebsite(website);
