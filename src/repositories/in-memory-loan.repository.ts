import { ICreateLoanDTO } from '../dtos/loan.dto';
import {
  Loan,
  LoanFilters,
  LoanRepository,
  LoanStatus
} from './loan.repository';

export class InMemoryLoanRepository implements LoanRepository {
  private readonly loans = new Map<number, Loan>();
  private nextId = 1;

  public async create(input: ICreateLoanDTO): Promise<Loan> {
    const loan: Loan = {
      ...input,
      id: this.nextId++,
      estado: 'PENDIENTE_APROBACION',
      createdAt: new Date().toISOString(),
      acceptedAt: null
    };
    this.loans.set(loan.id, loan);
    return { ...loan };
  }

  public async findAll(filters?: LoanFilters): Promise<Loan[]> {
    const all = Array.from(this.loans.values());
    if (!filters || !filters.roomId) {
      return all.map((l) => ({ ...l }));
    }
    return all
      .filter((l) => l.roomId.toLowerCase() === filters.roomId!.toLowerCase())
      .map((l) => ({ ...l }));
  }

  public async findById(id: number): Promise<Loan | null> {
    const loan = this.loans.get(id);
    if (!loan) return null;
    return { ...loan };
  }

  public async updateStatus(
    id: number,
    expectedStatus: LoanStatus,
    status: LoanStatus
  ): Promise<Loan | null> {
    const loan = this.loans.get(id);
    if (!loan) return null;
    if (loan.estado !== expectedStatus) return null;

    const updated: Loan = {
      ...loan,
      estado: status,
      acceptedAt:
        status === 'APROBADO_Y_FIRMADO'
          ? new Date().toISOString()
          : loan.acceptedAt
    };
    this.loans.set(id, updated);
    return { ...updated };
  }
}
