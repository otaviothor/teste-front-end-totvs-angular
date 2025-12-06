import { Injectable } from '@angular/core';
import { v1 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  public generateUniqueIdWithPrefix(prefix: string): string {
    return `${prefix}-${this.generateUniqueId()}`;
  }
  private generateUniqueId(): string {
    return v1();
  }
}
