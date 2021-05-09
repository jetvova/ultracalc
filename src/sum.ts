import { setupMaster } from "cluster";

export function sum(a: number, b: number): number {
    return a + b;
}