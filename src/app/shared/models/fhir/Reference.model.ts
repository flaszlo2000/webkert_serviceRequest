import { Identifier } from "./Identifier.model";

export interface Reference {
    reference?: string;
    type?: string; // uri
    identifier?: Identifier;
    display?: string;
}