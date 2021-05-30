/* I determined these types by https://www.hl7.org/fhir/servicerequest-definitions.html#ServiceRequest */

import { CodeableConcept } from "./CodeableConcept.model";
import { Identifier } from "./Identifier.model";
import { Quantity } from "./Quantity.model";
import { Range } from "./Range.model";
import { Ratio } from "./Ratio.model";
import { Reference } from "./Reference.model";

interface Ancestor {
    id?: string;
    meta?: string;
    implicitRules?: string[];
    language?: string;
    text?: string;
    contained?: string;
    extension?: string;
    modifierExtension?: string;
}

export interface ServiceRequest {
    identifier?: Identifier[];
    instantiatesCanonical?: string[]; // canonical(ActivityDefinition|PlanDefinition)
    instantiatesUri?: string[]; // uri
    basedOn?: Reference[]; // Reference(CarePlan|ServiceRequest|MedicationRequest)
    replaces?: Reference[]; // Reference(ServiceRequest)
    requisition?: Identifier;
    status: string; // code
    intent: string; // code
    category?: CodeableConcept[];
    priority?: string; // code
    doNotPerform?: boolean;
    code?: CodeableConcept;
    orderDetail?: CodeableConcept[];

    // one of these three
    quantityQuantity?: Quantity;
    quantityRatio?: Ratio; // Ratio
    quantityRange?: Range; // Range
    
    subject: Reference; // Reference(Patient | Group | Location | Device)
    encounter?: Reference; // Reference(Encounter)

    // one of these three below
    occurrenceDateTime?: string; // dateTime
    occurrencePeriod?: Range; // Range
    occurrenceTiming?: string; // Timing
    
    // one of these two below
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: CodeableConcept;

    authoredOn?: string; // dateTime
    requester?: Reference; // Reference(Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device)
    performerType?: CodeableConcept;
    performer?: Reference[]; // Reference(Practitioner | PractitionerRole | Organization | CareTeam | HealthcareService | Patient | Device | RelatedPerson)
    locationCode?: CodeableConcept[];
    locationReference?: Reference[]; // Reference(Location)
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[]; // Reference(Condition | Observation | DiagnosticReport | DocumentReference)
    insurance?: Reference[]; // Reference(Coverage | ClaimResponse)
    supportingInfo?: Reference[]; // Reference(Any)
    specimen?: Reference[]; // Reference(Specimen)
    bodySite?: CodeableConcept[];
    note?: string[]; // Annotation
    patientInstruction?: string;
    relevantHistory?: Reference[]; // Reference(Provenance)
}

/*
Quantity, how should i do this?
1) based on the JSON I can get one from these three: occurrenceDateTime, occurrencePeriod, occurrenceTiming. But they are different parameters!
2) based on the XML I can get only one with a differ type.
The two ways are really differ..

1) current solution
2) quantity: Quantity | Ratio | Range
*/
