/**
 * Utility functions for dynamic year management across the site.
 * Ensures all copy, SEO titles, descriptions, and schemas automatically stay up to date.
 */

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * Replaces any 202x year (2020-2029) in a string with the current year dynamically.
 */
export const formatWithCurrentYear = (text: string): string => {
  if (!text) return text;
  return text.replace(/\b202[0-9]\b/g, String(getCurrentYear()));
};
