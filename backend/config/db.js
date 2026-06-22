// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.bold);
//     process.exit(1); // Exit with a non-zero status code to indicate an error
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://username:passward@cluster0.7kvr07c.mongodb.net/chat-app"
    );

    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("DB ERROR:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;