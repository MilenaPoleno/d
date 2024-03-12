module.exports = {
    // Целевая среда сборки
    target: "serverless",
  
    // Используемый фреймворк
    framework: "nextjs",
  
    // Версия Node.js
    nodeVersion: "16",
  
    // Каталог для собранных файлов
    buildOutputDirectory: "dist",
  
    // Переменные окружения
    env: {
      NODE_ENV: "production"
    },
  
    // Пользовательские команды
    customCommands: {
      postBuild: "npm run postbuild"
    },
  
    // Кэширование
    cache: {
      paths: ["node_modules"]
    }
  };
  