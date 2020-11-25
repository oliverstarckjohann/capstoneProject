import { useEffect, useState } from "react";

export default function getConditions() {
  return fetch(
    "https://oliver-starckjohann.de/panda/json_request_conditions.php"
  ).then((res) => res.json());
}
