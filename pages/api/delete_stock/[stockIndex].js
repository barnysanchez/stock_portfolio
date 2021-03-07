const {deleteStock} = require("../../../api/modules/portfolio");
import { log }from "../utils";

export default function handler(req, res) {
  log.info(`Received: ${req.url}`);
  return new Promise((resolve, reject) => {
    if (req.method === 'DELETE') {
      const { query } = req;
      deleteStock(parseInt(query.stockIndex));
      res.json({ status: "success" });
      return resolve();
    } else {
      res.status(404).json({ message: "Please use POST. "});
      return reject();
    }
  });
}