import { db } from "../database";
import { notFound } from "@hapi/boom";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const id = req.params.id;

    const { results } = await db.query("SELECT * FROM listings WHERE ID = ?;", [
      id,
    ]);

    const listing = results[0];

    if (!listing) {
      throw notFound(`Listing DNE for id = ${id}`);
    }

    return listing;
  },
};
