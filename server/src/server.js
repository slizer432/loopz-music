import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Iki lho link port e: https://localhost:${PORT}`);
});
