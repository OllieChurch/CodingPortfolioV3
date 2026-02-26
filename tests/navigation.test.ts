// Feature: portfolio-v3, Property 10: Navigation present with correct links on every page
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { navLinks } from '../src/data/navLinks';

/**
 * **Validates: Requirements 8.1, 8.4**
 *
 * Property 10: Navigation present with correct links on every page
 * For any subset of the required paths, all five expected paths must be present
 * in the navLinks data that drives the Navigation component.
 */

const requiredPaths = ['/', '/blog', '/work', '/contact'];

describe('Navigation links (Property 10)', () => {
    it('navLinks contains all required paths', () => {
        fc.assert(
            fc.property(
                fc.constantFrom(...requiredPaths),
                (path) => {
                    const hrefs = navLinks.map((link) => link.href);
                    expect(hrefs).toContain(path);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('navLinks has exactly the expected set of paths', () => {
        fc.assert(
            fc.property(
                fc.constant(requiredPaths),
                (expected) => {
                    const hrefs = navLinks.map((link) => link.href);
                    expect(hrefs).toEqual(expect.arrayContaining(expected));
                    expect(hrefs).toHaveLength(expected.length);
                },
            ),
            { numRuns: 100 },
        );
    });

    it('every navLink has a non-empty label', () => {
        fc.assert(
            fc.property(
                fc.constantFrom(...navLinks),
                (link) => {
                    expect(link.label).toBeTruthy();
                    expect(typeof link.label).toBe('string');
                    expect(link.label.trim().length).toBeGreaterThan(0);
                },
            ),
            { numRuns: 100 },
        );
    });
});
