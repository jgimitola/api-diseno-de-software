import express from "express";
import {
  CUNDINAMARCA,
  BOLIVAR,
  ATLANTICO,
  MAGDALENA,
  SINCELEJO,
  ERROR,
} from "../constants.js";

import checkCity from "../utils/checkCity.js";
import normalizeString from "../utils/normalizeString.js";

const router = express.Router();

router.get("/:city", (req, res) => {
  const cityParam = normalizeString(req.params.city);

  if (checkCity("bogota", cityParam)) {
    res.send(CUNDINAMARCA);
  } else if (checkCity("cartagena", cityParam)) {
    res.send(BOLIVAR);
  } else if (checkCity("barranquilla", cityParam)) {
    res.send(ATLANTICO);
  } else if (checkCity("santa marta", cityParam)) {
    res.send(MAGDALENA);
  } else if (checkCity("sincelejo", cityParam)) {
    res.send(SINCELEJO);
  } else {
    res.send({ departamento: req.params.city });
  }
});
export default router;
