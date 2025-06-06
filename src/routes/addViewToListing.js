import { db } from "../database";

export const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (req, h) => {
    const id = req.params.id;

    await db.query("UPDATE listings SET views = views + 1 WHERE id = ?;", [id]);

    const { results } = await db.query("SELECT * FROM listings WHERE ID = ?;", [
      id,
    ]);

    const updatedListing = results[0];

    if (!updatedListing) {
      throw notFound(`Listing DNE for id = ${id}`);
    }

    return updatedListing;
  },
};
