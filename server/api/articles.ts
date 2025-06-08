export default defineEventHandler(async (event) => {
  const data = await import("~/server/data.json");
  return data;
});
