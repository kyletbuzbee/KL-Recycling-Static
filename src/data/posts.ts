import { BlogPost } from "@/types/content";

export const allPosts: BlogPost[] = [
  {
    _id: "maximizing-scrap-value",
    _type: "post",
    title: "5 Tips for Maximizing Your Scrap Metal Value",
    slug: {
      current: "maximizing-scrap-value",
    },
    excerpt: "Learn how proper sorting and preparation can significantly increase the revenue you get from your scrap metal.",
    mainImage: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "image-a8a2d1e8e0c8f1c2a2d1e8e0c8f1c2a2d1e8e0c8-1200x800-jpg", // placeholder
        url: "/images/project-planning-scrap.jpg",
      },
      alt: "Maximizing scrap value",
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Full blog post content goes here...",
          },
        ],
      },
    ],
    publishedAt: "2025-09-28T10:00:00Z",
    author: {
      name: "K&L Team",
    },
    categories: [
      {
        title: "Tips & Guides",
        slug: {
          current: "tips-guides",
        },
      },
    ],
  },
  {
    _id: "demolition-safety-protocols",
    _type: "post",
    title: "Safety First: Our Process for On-Site Demolition Recycling",
    slug: {
      current: "demolition-safety-protocols",
    },
    excerpt: "Discover the meticulous planning and safety protocols that go into every K&L demolition project to ensure a safe and efficient process.",
    mainImage: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "image-b9b3e2f7f1d6e0c8f1c2a2d1e8e0c8f1c2a2d1e8-1200x800-png", // placeholder
        url: "/images/demolition-safety.png",
      },
      alt: "Demolition safety",
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Full blog post content goes here...",
          },
        ],
      },
    ],
    publishedAt: "2025-09-15T10:00:00Z",
    author: {
      name: "K&L Team",
    },
    categories: [
      {
        title: "Safety",
        slug: {
          current: "safety",
        },
      },
    ],
  },
  {
    _id: "sustainability-impact",
    _type: "post",
    title: "The Environmental Impact of Metal Recycling",
    slug: {
      current: "sustainability-impact",
    },
    excerpt: "Understanding how recycling scrap metal contributes to environmental conservation and reduces carbon emissions.",
    mainImage: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "image-c0c8f1c2a2d1e8e0c8f1c2a2d1e8e0c8f1c2-1200x800-jpg", // placeholder
        url: "/images/Construction.jpg",
      },
      alt: "Sustainability impact",
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Full blog post content goes here...",
          },
        ],
      },
    ],
    publishedAt: "2025-08-30T10:00:00Z",
    author: {
      name: "K&L Team",
    },
    categories: [
      {
        title: "Sustainability",
        slug: {
          current: "sustainability",
        },
      },
    ],
  },
];
