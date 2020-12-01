import { useEffect, useState } from "react";

export default function getDresses() {
  return fetch(
    "https://oliver-starckjohann.de/panda/json_request_dress.php"
  ).then((res) => res.json());
}
