export default class StringUtils {
  static removeSymbolFromString(strValue: string, symbolToRemove: any): string {
    const regExp: RegExp = new RegExp(`${symbolToRemove}`, 'gi');
    return strValue.replace(regExp, '');
  }
  static substingHandler(string: string, strar: number, finish: number) {
    return string.substring(strar, finish)
  }
}