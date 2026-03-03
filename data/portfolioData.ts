/**
 * Portfolio Data
 *
 * Each entry represents a construction project.
 * Images are stored in /public/portfolio/<folder>/.
 *
 * To add a new project:
 * 1. Create a folder inside /public/portfolio/ named e.g. H#XXX_LocationName
 * 2. Add images to that folder  (cover image should be the first in the `images` array)
 * 3. Append a new object to the `portfolioProjects` array below following the same structure.
 *
 * NOTE: The `#` character in file/folder names is encoded as `%23` in URLs
 *       so that browsers correctly load the images.
 */

export type PortfolioProject = {
  /** Unique slug used as a URL key */
  id: string;
  /** Display title shown in the UI */
  title: string;
  /** Area / block name */
  location: string;
  /** Exact folder name inside /public/portfolio/ */
  folder: string;
  /** Path to the cover / thumbnail image */
  coverImage: string;
  /** All images for this project (cover first) */
  images: string[];
  /** Year the project was completed */
  year: number;
};

export const portfolioProjects: PortfolioProject[] = [
  // ─── H#89 Rafi Block ────────────────────────────────────────────────────────
  {
    id: "h89-rafi-block",
    title: "House No 89 Rafi Block",
    location: "Rafi Block",
    folder: "H#89_RafiBlock",
    coverImage: "/portfolio/H%2389_RafiBlock/H%2389_RafiBlock.jfif",
    images: [
      "/portfolio/H%2389_RafiBlock/H%2389_RafiBlock.jfif",
      "/portfolio/H%2389_RafiBlock/H%2389_RafiBlock1.jfif",
      "/portfolio/H%2389_RafiBlock/H%2389_RafiBlock2.jfif",
      "/portfolio/H%2389_RafiBlock/H%2389_RafiBlock3.jfif",
    ],
    year: 2023,
  },

  // ─── H#189 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h189-rafi-block",
    title: "House No 189 Rafi Block",
    location: "Rafi Block",
    folder: "H#189_RafiBlock",
    coverImage: "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock.jfif",
    images: [
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock.jfif",
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock1.jfif",
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock2.jfif",
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock3.jfif",
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock4.jfif",
      "/portfolio/H%23189_RafiBlock/H%23189_RafiBlock5.jfif",
    ],
    year: 2025,
  },

  // ─── H#709 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h709-rafi-block",
    title: "House No 709 Rafi Block",
    location: "Rafi Block",
    folder: "H#709_RafiBlock",
    coverImage: "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock.jfif",
    images: [
      "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock.jfif",
      "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock1.jfif",
      "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock2.jfif",
      "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock3.jfif",
      "/portfolio/H%23709_RafiBlock/H%23709_RafiBlock4.jfif",
    ],
    year: 2026,
  },

  // ─── H#710 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h710-rafi-block",
    title: "House No 710 Rafi Block",
    location: "Rafi Block",
    folder: "H#710_RafiBlock",
    coverImage: "/portfolio/H%23710_RafiBlock/H%23710_RafiBlock.jfif",
    images: [
      "/portfolio/H%23710_RafiBlock/H%23710_RafiBlock.jfif",
      "/portfolio/H%23710_RafiBlock/H%23710_RafiBlock1.jfif",
      "/portfolio/H%23710_RafiBlock/H%23710_RafiBlock2.jfif",
      "/portfolio/H%23710_RafiBlock/H%23710_RafiBlock3.jfif",
    ],
    year: 2026,
  },

  // ─── H#759 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h759-rafi-block",
    title: "House No 759 Rafi Block",
    location: "Rafi Block",
    folder: "H#759_RafiBlock",
    coverImage: "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock.jfif",
    images: [
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock.jfif",
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock1.jfif",
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock2.jfif",
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock3.jfif",
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock4.jfif",
      "/portfolio/H%23759_RafiBlock/H%23759_RafiBlock5.jfif",
    ],
    year: 2026,
  },

  // ─── H#780 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h780-rafi-block",
    title: "House No 780 Rafi Block",
    location: "Rafi Block",
    folder: "H#780_RafiBlock",
    coverImage: "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock.jfif",
    images: [
      "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock.jfif",
      "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock1.jfif",
      "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock2.jfif",
      "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock3.jfif",
      "/portfolio/H%23780_RafiBlock/H%23780_RafiBlock4.jfif",
    ],
    year: 2023,
  },

  // ─── H#787 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h787-rafi-block",
    title: "House No 787 Rafi Block",
    location: "Rafi Block",
    folder: "H#787_RafiBlock",
    coverImage: "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock.jfif",
    images: [
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock1.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock2.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock3.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock4.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock5.jfif",
      "/portfolio/H%23787_RafiBlock/h%2387-88_RafiBlock6.jfif",
      "/portfolio/H%23787_RafiBlock/h%23787_RafiBlock7.jfif",
    ],
    year: 2021,
  },

  // ─── H#792 Westeren Drive ───────────────────────────────────────────────────
  {
    id: "h792-westeren-drive",
    title: "House No 792 Westeren Drive",
    location: "Westeren Drive",
    folder: "H#792_WesterenDrive",
    coverImage: "/portfolio/H%23792_WesterenDrive/H%23792_WesterenDrive.jfif",
    images: [
      "/portfolio/H%23792_WesterenDrive/H%23792_WesterenDrive.jfif",
      "/portfolio/H%23792_WesterenDrive/H%23792_WesterenDrive1.jfif",
      "/portfolio/H%23792_WesterenDrive/H%23792_WesterenDrive2.jfif",
      "/portfolio/H%23792_WesterenDrive/H%23792_WesterenDrive3.jfif",
    ],
    year: 2022,
  },

  // ─── H#794 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h794-rafi-block",
    title: "House No 794 Rafi Block",
    location: "Rafi Block",
    folder: "H#794_RafiBlock",
    coverImage: "/portfolio/H%23794_RafiBlock/H%23794_RafiBlock.jfif",
    images: [
      "/portfolio/H%23794_RafiBlock/H%23794_RafiBlock.jfif",
      "/portfolio/H%23794_RafiBlock/H%23794_RafiBlock1.jfif",
      "/portfolio/H%23794_RafiBlock/H%23794_RafiBlock2.jfif",
      "/portfolio/H%23794_RafiBlock/H%23794_RafiBlock3.jfif",
    ],
    year: 2019,
  },

  // ─── H#798 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h798-rafi-block",
    title: "House No 798 Rafi Block",
    location: "Rafi Block",
    folder: "H#798_RafiBlock",
    coverImage: "/portfolio/H%23798_RafiBlock/H%23798_RafiBlock.jfif",
    images: [
      "/portfolio/H%23798_RafiBlock/H%23798_RafiBlock.jfif",
      "/portfolio/H%23798_RafiBlock/H%23798_RafiBlock1.jfif",
      "/portfolio/H%23798_RafiBlock/H%23798_RafiBlock2.jfif",
      "/portfolio/H%23798_RafiBlock/H%23798_RafiBlock3.jfif",
    ],
    year: 2024,
  },

  // ─── H#867-868 Rafi Block ───────────────────────────────────────────────────
  {
    id: "h867-868-rafi-block",
    title: "House No 867 & 868 Rafi Block",
    location: "Rafi Block",
    folder: "H#867-868_RafiBlock",
    coverImage: "/portfolio/H%23867-868_RafiBlock/H%23867-868_RafiBlock.jfif",
    images: [
      "/portfolio/H%23867-868_RafiBlock/H%23867-868_RafiBlock.jfif",
      "/portfolio/H%23867-868_RafiBlock/H%23867-868_RafiBlock1.jfif",
      "/portfolio/H%23867-868_RafiBlock/H%23867-868_RafiBlock2.jfif",
    ],
    year: 2018,
  },

  // ─── H#871 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h871-rafi-block",
    title: "House No 871 Rafi Block",
    location: "Rafi Block",
    folder: "H#871_RafiBlock",
    coverImage: "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock.jfif",
    images: [
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock.jfif",
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock1.jfif",
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock2.jfif",
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock3.jfif",
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock4.jfif",
      "/portfolio/H%23871_RafiBlock/H%23871_RafiBlock5.jfif",
    ],
    year: 2026,
  },

  // ─── H#886 Rafi Block ───────────────────────────────────────────────────────
  {
    id: "h886-rafi-block",
    title: "House No 886 Rafi Block",
    location: "Rafi Block",
    folder: "H#886_RafiBlock",
    coverImage: "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock.jfif",
    images: [
      "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock.jfif",
      "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock1.jfif",
      "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock2.jfif",
      "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock3.jfif",
      "/portfolio/H%23886_RafiBlock/H%23886_RafiBlock4.jfif",
    ],
    year: 2024,
  },

  // ─── H#1357-1358 Rafi Block ─────────────────────────────────────────────────
  {
    id: "h1357-1358-rafi-block",
    title: "House No 1357 & 1358 Rafi Block",
    location: "Rafi Block",
    folder: "H#1357-1358_RafiBlock",
    coverImage: "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock.jfif",
    images: [
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock.jfif",
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock1.jfif",
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock2.jfif",
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock3.jfif",
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock4.jfif",
      "/portfolio/H%231357-1358_RafiBlock/H%231357-1358_RafiBlock5.jfif",
    ],
    year: 2026,
  },

  // ─── H#2748 Abubakar Block ──────────────────────────────────────────────────
  {
    id: "h2748-abubakar-block",
    title: "House No 2748 Abubakar Block",
    location: "Abubakar Block",
    folder: "H#2748_AbubakarBlock",
    coverImage: "/portfolio/H%232748_AbubakarBlock/H%232748_AbubakarBlock.jfif",
    images: [
      "/portfolio/H%232748_AbubakarBlock/H%232748_AbubakarBlock.jfif",
      "/portfolio/H%232748_AbubakarBlock/H%232748_AbubakarBlock1.jfif",
      "/portfolio/H%232748_AbubakarBlock/H%232748_AbubakarBlock2.jfif",
      "/portfolio/H%232748_AbubakarBlock/H%232748_AbubakarBlock3.jfif",
    ],
    year: 2020,
  },
];
