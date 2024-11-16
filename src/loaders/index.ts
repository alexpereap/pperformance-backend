const expressIndexLoader = require('./express');

export default async (app: any) => {
  await expressIndexLoader(app);
};