async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "BloomByte NFT",
      attributes: [
        {
          trait_type: "Web3",
          value: "100",
          max_value: 100,
        },
        {
          trait_type: "Backend Development",
          value: "100",
          max_value: 100,
        },
        {
          trait_type: "Frontend Development",
          value: "100",
          max_value: 100,
        },
        {
          trait_type: "Application Development",
          value: "100",
          max_value: 100,
        },
        {
          display_type: "date",
          trait_type: "birthday",
          value: new Date("2024-01-10").getTime(),
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmQnszyhiPi2bNLY3SaacmmZ5Hz4XiFzqcmm1zia92rPuD",
      description: "Building the future of Web3 and Artificial Intelligence.",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
