import '@testing-library/jest-dom/extend-expect';
import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
    expect(operate('-5', '10', '+')).toBe('5');
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
    expect(operate('10', '5', '-')).toBe('5');
    expect(operate('0.3', '0.1', '-')).toBe('0.2');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('2', '3', 'x')).toBe('6');
    expect(operate('-5', '10', 'x')).toBe('-50');
    expect(operate('0.1', '0.2', 'x')).toBe('0.02');
  });

  it('should perform division correctly', () => {
    expect(operate('6', '2', '÷')).toBe('3');
    expect(operate('-10', '5', '÷')).toBe('-2');
    expect(operate('0.1', '0.2', '÷')).toBe('0.5');
  });

  it('should handle division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
    expect(operate('0.3', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    expect(operate('5', '3', '%')).toBe('2');
    expect(operate('10', '6', '%')).toBe('4');
    expect(operate('0.3', '0.2', '%')).toBe('0.1');
  });

  it('should handle modulo with zero divisor', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    expect(operate('0.3', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
    expect(() => operate('5', '2', 'sqrt')).toThrow("Unknown operation 'sqrt'");
  });
});
