// Establishing connection to a MongoDB database, using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  userCreateIndex: true,
  useFindAndModify: false,
});