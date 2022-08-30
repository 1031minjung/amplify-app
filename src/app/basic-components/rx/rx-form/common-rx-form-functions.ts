export function populateRxRange(needSymbol: boolean, order: string, start: number, end: number, step: number): string[] {
    var rxRange = [];
    for (let i = start; (order === 'increment' ? i <= end : i >= end); (order === 'increment' ? i += step : i -= step)) {
        step === 0.25 ?
            rxRange.push(i > 0 ? (needSymbol ? "+" : "") + (Math.round(i * 100) / 100).toFixed(2) : (Math.round(i * 100) / 100).toFixed(2))
            : rxRange.push(("00" + i).slice(-3))
    }
    return rxRange;
}