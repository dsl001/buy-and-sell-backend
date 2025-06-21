// Set up paths from dist/buy-and-sell folder (which would copied and pasted into this project folder) that's generated from the frontend Angular project via ng build command

const angularRoutePaths = [
  "/",
  "/listings",
  "/contact/{id}",
  "/edit-listing/{id}",
  "/listings/{id}",
  "/my-listings",
  "/new-listing",
];

export const filesRoutes = angularRoutePaths.map((path) => ({
  method: "GET",
  path,
  handler: (req, h) => {
    return h.file("dist/buy-and-sell/index.html");
  },
}));

export const staticFilesRoute = {
  method: "GET",
  path: "/{params*}",
  handler: {
    directory: {
      path: "dist/buy-and-sell",
    },
  },
};
