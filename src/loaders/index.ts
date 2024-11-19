import expressLoader from "./express";

export default async (app: any) => {
  await expressLoader(app);
};
