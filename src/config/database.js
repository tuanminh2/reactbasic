import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/todo";
console.log(uri);
mongoose
  .connect(`${uri}`)
  .then((res) => {
    console.log("connect db success");
  })
  .catch((err) => {
    console.log("connect error", err);
  });
