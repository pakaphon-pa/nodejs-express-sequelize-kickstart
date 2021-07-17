export default {
   PORT: process.env.PORT || 3000,
   ENV : process.env.NODE_ENV || 'development',
   DB_USERNAME: process.env.DB_USERNAME || 'test',
   DB_PASSWORD: process.env.DB_PASSWORD || 1234,
   DB_DATABASE: process.env.DB_DATABASE || 'socialBlog',
   DB_HOSTNAME: process.env.DB_HOSTNAME || 'db',
   DB_DIALECT: process.env.DB_DIALECT || 'mysql'
}