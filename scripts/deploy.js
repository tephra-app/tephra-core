async function main() {
    console.log("starting deployment...");

    // let deployerAccount;
    // if (hre.network.name == "reef_testnet") {
    //     deployerAccount = await hre.reef.getSignerByName("account1");
    // } else {
    //     deployerAccount = await hre.reef.getSignerByName("mainnetAccount");
    // }

    const [deployer] = await ethers.getSigners();

    // Deploy SqwidERC1155
    const NFT = await ethers.getContractFactory("TephraERC1155", deployer);
    const nft = await NFT.deploy();
    // await nft.deployed();
    console.log(`TephraERC1155 deployed to ${nft.address}`);

    // Deploy TephraMarketplace
    // const Marketplace = await ethers.getContractFactory("TephraMarketplace", deployer);
    // const marketFee = 250; // 2.5%
    // const marketplace = await Marketplace.deploy(marketFee, nft.address);
    // await marketplace.deployed();
    // console.log(`TephraMarketplace deployed in ${marketplace.address}`);
    

    // // Deploy TephraMarketplaceUtil
    // const MarketUtil = await ethers.getContractFactory("TephraMarketplaceUtil", deployer);
    // const marketUtil = await MarketUtil.deploy(marketplace.address);
    // await marketUtil.deployed();
    // console.log(`TephraMarketplaceUtil deployed in ${marketUtil.address}`);
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
