import { CodeableConcept } from "./CodeableConcept.model";
import { Period } from "./Period.model";
import { Reference } from "./Reference.model";

export interface Identifier {
    use?: string; // code
    type?: CodeableConcept;
    system?: string; // uri
    value?: string;
    period?: Period;
    assigner?: Reference;
}
