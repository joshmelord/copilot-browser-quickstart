export function median(a: number[]): number {
    a.sort((x, y) => x - y);
    const n = a.length;
    const mid = Math.floor(n / 2);
    return a[mid];
}
