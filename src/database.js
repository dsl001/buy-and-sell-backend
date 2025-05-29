import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "hapi-server",
  database: "buy_and_sell",
});

export const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) {
          reject(error);

          console.error(JSON.stringify(error, null, 2));
        }

        resolve({ results, fields });
      });
    }),
  end: () => connection.end(),
};
