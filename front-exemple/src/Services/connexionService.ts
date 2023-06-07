import { serverAdress } from "./utils";

export async function imagePublic() {
  const response = await fetch(`${serverAdress}images`);
  const monImage = response.json();
  return monImage;
}
