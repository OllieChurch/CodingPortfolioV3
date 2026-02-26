/** Estimate reading time in minutes from raw text/markdown content. */
export function getReadingTime(text: string | undefined | null): number {
    if (!text) return 1;
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}
