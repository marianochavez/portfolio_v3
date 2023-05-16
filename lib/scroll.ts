/**
 * Scrolls the page to the specified section.
 *
 * @param {string} sectionId - The id of the section to scroll to.
 * @return {void}
 */

export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId) as HTMLElement | null
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  } else {
    console.error(`Could not find section with id "${sectionId}"`)
  }
}
