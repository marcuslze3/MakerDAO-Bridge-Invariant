import {
  BlockEvent,
  Finding,
  HandleBlock,
  HandleTransaction,
  TransactionEvent,
  FindingSeverity,
  FindingType,
  getJsonRpcUrl,
} from "forta-agent";
import {
  getL1Balance
} from "./utils"


export const ERC20_TRANSFER_EVENT =
  "event Transfer(address indexed from, address indexed to, uint256 value)";
export const TETHER_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const TETHER_DECIMALS = 6;
let findingsCount = 0;

export function provideHandleTransaction(): HandleTransaction {
  return async (
    txEvent: TransactionEvent
  ) => {
    const findings: Finding[] = [];

    // filter the transaction logs for Tether transfer events
    const tetherTransferEvents = txEvent.filterLog(
      ERC20_TRANSFER_EVENT,
      TETHER_ADDRESS
    );


    console.log(await getL1Balance())
    console.log(3)


    return findings;
  };
}

export default {
  handleTransaction: provideHandleTransaction(),
};
