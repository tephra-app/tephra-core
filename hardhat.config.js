// require("@reef-defi/hardhat-reef");
require("@nomiclabs/hardhat-waffle");

// const SEEDS = require("./seeds.json");

// task("accounts", "Prints the list of accounts", async () => {
//     const accounts = await ethers.getSigners();

//     for (const account of accounts) {
//         console.log(account.address);
//     }
// });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0x0d56af687e724aafb10f7e2594c9d6accb4ffc3b735c77b12f0a21c3f25419f2';

module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "godwoken-testnet",
    networks: {
        'godwoken-testnet': {
            url: `https://godwoken-testnet-v1.ckbapp.dev`,
            accounts: [PRIVATE_KEY]
        }
    },
    mocha: {
        timeout: 150000,
    },
    // contracts: {
    //     market: "0x0a3F2785dBBC5F022De511AAB8846388B78009fD",
    //     nft: "0x1A511793FE92A62AF8bC41d65d8b94d4c2BD22c3",
    //     util: "0x08ABAa5BfeeB68D5cD3fb33Df49AA1F611CdE0cC",
    //     governance: "0x1a7C2eF2c3791018Dc89c54D98914bCd9c30CF35",
    //     balanceHelper: "0x6aC1413A64b153aA16fabbD9F97D30dC2CDE2604",
    //     gasBurner: "0xE6a505Fd9868AFd411EcB93d46EbB892Eb24E501",
    //     dummyERC721: "0xf5c05d8013724AC037eE6AD9CCea04905384bacE",
    //     dummyERC1155: "0x90232AC468647bFf589825680c78546E021c805B",
    //     dummyERC721Roy: "0x8E8369c30361A8Ad1C76922Dd4d8535582A40B8A",
    // },
    optimizer: {
        enabled: true,
        runs: 200,
    },
};
