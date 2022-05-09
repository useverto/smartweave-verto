import { ContractInteractionResult } from "./contract-step";

export type InterceptorFn = (contractId: string, state: any, interactionNumber: number, height: number) => Promise<void> | void;
export type InterceptorObj = {
    interceptor: InterceptorFn,
    contractId: string,
};

export class Interceptors {

    static interceptors: InterceptorObj[] = [];

    static setContractInterceptor(contractId: string, interceptor: InterceptorFn) {
        return this.interceptors.push({
            interceptor,
            contractId
        });
    }

    static setGlobalInterceptor(interceptor: InterceptorFn) {
        return this.interceptors.push({
            interceptor,
            contractId: "ALL"
        });
    }

    static async callInterceptors(contractId: string, state: any, interactionNumber: number, height: number) {
        const contractInterceptors = this.interceptors.filter((item) => item.contractId === contractId);
        const globalInterceptors = this.interceptors.filter((item) => item.contractId === "ALL");
        const interceptorsToCall = [...contractInterceptors, ...globalInterceptors];

        return Promise.all(interceptorsToCall.map(item => item.interceptor(contractId, state, interactionNumber, height)));
    }
}