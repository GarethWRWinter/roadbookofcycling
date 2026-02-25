/**
 * Converts a tag display name to a URL-safe slug.
 * Must be used consistently in both tag page path generation
 * and tag link rendering to ensure URLs match.
 *
 * Examples:
 *   "Marginal Gains" → "marginal-gains"
 *   "Tuscany"        → "tuscany"
 *   "Bike Build"     → "bike-build"
 */
export function tagToSlug(tag: string): string {
	return tag.toLowerCase().replace(/\s+/g, '-');
}
