import { ExtraDocs } from "./extra-docs";

export class Document 
{
    document_id: number;
    customer_id: number;

    address_proof: [];
    photo: [];
    signature: [];
    thumb: [];

    extradocs: ExtraDocs;
}
