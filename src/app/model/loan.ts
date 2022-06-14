export class Loan 
{
    loanId: number;
    loanType: string;
    maxLoanAmount: number;
    rateOfInterest: Map<number,number>;
}
