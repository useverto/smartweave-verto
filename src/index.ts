import {
  simulateCreateContractFromTx,
  simulateCreateContractFromSource,
  createContract,
  createContractFromTx,
} from './contract-create';
import { loadContract } from './contract-load';
import {
  interactWrite,
  interactWriteDryRun,
  interactRead,
  interactWriteDryRunCustom,
  simulateInteractWrite,
} from './contract-interact';
import { readContract } from './contract-read';
import { selectWeightedPstHolder } from './weighted-pst-holder';
import { Interceptors } from './interceptor';

const smartweave = {
  simulateCreateContractFromTx,
  simulateCreateContractFromSource,
  createContract,
  createContractFromTx,
  loadContract,
  interactWrite,
  interactWriteDryRun,
  interactWriteDryRunCustom,
  simulateInteractWrite,
  interactRead,
  readContract,
  selectWeightedPstHolder,
  Interceptors
};

export {
  simulateCreateContractFromTx,
  simulateCreateContractFromSource,
  createContract,
  createContractFromTx,
  loadContract,
  interactWrite,
  interactWriteDryRun,
  interactWriteDryRunCustom,
  simulateInteractWrite,
  interactRead,
  readContract,
  selectWeightedPstHolder,
  smartweave,
  Interceptors
};
