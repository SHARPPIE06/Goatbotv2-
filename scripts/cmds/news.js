
const axios = require('axios');

module.exports = {
  config: {
    name: "news",
    aliases: [],
    author: "kshitiz",
    version: "2.0",
    cooldown: 5,
    role: 0,
    shortDescription: {
      en: "search and get news"
    },
    longDescription: {
      en: "search and get news"
    },
    category: "info",
    guide: {
      en: "{p}{n} [search]"
    }
  },
  onStart: async function ({ api, event, args }) { 
    try {
      const apiKey = 'pub_334533f6b93c8b0cc43099876d49d919aacdc'; // Replace with your actual API key
      const country = 'np'; 
      const response = await axios.get(`https://newsdata.io/api/1/news?country=${country}&apikey=${apiKey}`);
      const newsdata = response.data.results;

      const articlesPerPage = 5; 
      let message = 'Latest news:\n\n';
      let page = 1;

      for (const article of newsdata) {
        message += `Title: ${article.title}\nSource: ${article.source}\nDescription: ${article.description}\nLink: ${article.link}\n\n`;

        if (message.length > 4000) {
          break; 
        }
      }

      if (message === 'Latest news:\n\n') {
        message = 'No news articles found.';
      }

      api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
      console.error('Something went wrong:', error);
      api.sendMessage('Something went wrong while fetching from the API. Please try again.', event.threadID, event.messageID);
    }
  }
};