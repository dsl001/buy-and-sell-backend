import mysql from "mysql";

let connection;

export const db = {
  connect: () => {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    connection.connect();
  },
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
