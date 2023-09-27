const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // Create a Merkle tree from the nice list
  const tree = new MerkleTree(niceList);

  // Choose a name from the nice list
  const name = niceList[0];

  // Generate a proof for the name
  const proof = tree.getProof(name);

  // Send the proof to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });
}

main();
