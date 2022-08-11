const ethers = require("ethers");
import { getJsonRpcUrl } from "forta-agent";

const OP_ESCROW_ADDRESS = "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65"
const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const DAI_ABI = [
    "function balanceOf(address) public view returns (uint)"
]

let provider = new ethers.providers.JsonRpcProvider(getJsonRpcUrl());

export async function getL1Balance(
    tokenContract: string,
    escrowAddress: string,
    contractABI: string) {

    console.log(1)
    let daiContract = new ethers.Contract(tokenContract, DAI_ABI, provider)
    console.log(2)
    const balance = await daiContract.balanceOf(escrowAddress);
    const returnBalance = balance.toBigInt();

    return returnBalance;
}

export async function getL2Balance() {

}