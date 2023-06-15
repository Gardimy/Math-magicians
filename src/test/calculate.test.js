import calculate from '../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

describe('calculate', () => {
  it('should clear the calculator data object when AC button is pressed', () => {
    const result = calculate({ total: 5, next: 3, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update next when a number button is pressed', () => {
    const result = calculate({ total: 5, next: '3', operation: '+' }, '2');
    expect(result).toEqual({ total: 5, next: '32', operation: '+' });
  });

  it('should handle decimal point correctly', () => {
    const result = calculate({ total: 5, next: '3', operation: '+' }, '.');
    expect(result).toEqual({ total: 5, next: '3.', operation: '+' });
  });

  it('should perform the operation when = button is pressed', () => {
    const result = calculate({ total: 5, next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '8', next: null, operation: null });
  });

  it('should change the sign of the number when +/- button is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });

  // Add more tests to cover all scenarios in the calculate function
});
