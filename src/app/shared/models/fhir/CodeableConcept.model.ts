import { Coding } from "./Coding.model";

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}