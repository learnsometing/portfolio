import { stripUnits } from '../FluidTypography';

describe('stripUnits', () => {
  it('should strip the units from the input', () => {
    expect(stripUnits('3.2px')).toStrictEqual('3.2');
    expect(stripUnits('3.2ch')).toStrictEqual('3.2');
    expect(stripUnits('3.2rem')).toStrictEqual('3.2');
    expect(stripUnits('3.2em')).toStrictEqual('3.2');
    expect(stripUnits('3.2vw')).toStrictEqual('3.2');
    expect(stripUnits('3.2vh')).toStrictEqual('3.2');
  });

  it('should return fontSize if it contains no numbers', () => {
    expect(stripUnits('.px')).toStrictEqual('.px');
  });
});
