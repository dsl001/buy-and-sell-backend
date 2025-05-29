import { db } from "../database";
import { notFound } from "@hapi/boom";

export const updateListingRoute = {
  method: "POST",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const { id } = req.params;

    const { name = "", description = "", price = 0 } = req.payload;

    const userId = "12345";

    await db.query(
      `UPDATE listings SET name = ?, description = ?, price = ? WHERE id = ? AND user_id = ?;`,
      [name, description, price, id, userId]
    );

    const { results } = await db.query(
      "SELECT * FROM listings WHERE ID = ? AND user_id = ?;",
      [id, userId]
    );

    const listing = results[0];

    if (!listing) {
      throw notFound(`Listing DNE for id = ${id}`);
    }

    return listing;
  },
};
