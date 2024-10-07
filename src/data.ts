type Product = {
  id: number;
  title: string;
  ram: number; //Not using as of now.
  desc?: string;
  img?: string;
  options?: { title: string; storage: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Samsung Galaxy S23",
    desc: "The device has a 6.1-inch FHD+ display with a 120 Hz refresh rate, 8GB RAM, and 128GB storage, powered by a Snapdragon 8 Gen 2 processor. It features a 50 MP + 10 MP + 12 MP triple rear camera, a 12 MP front camera, a 3900 mAh battery, and a fingerprint sensor.",
    ram: 8,
    img: "/s23.png",
    options: [
      {
        title: "Basic",
        storage: 128,
      },
      {
        title: "Standard",
        storage: 256,
      },
      {
        title: "Premium",
        storage: 512,
      },
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S24+",
    desc: "The device features a 6.7-inch Dynamic AMOLED 2X display with a 120 Hz refresh rate, 12GB RAM, 512GB storage, and is powered by the Samsung Exynos 2400 deca-core processor.",
    ram: 8,
    img: "/s24plus.png",
    options: [
      {
        title: "Basic",
        storage: 256,
      },
      {
        title: "Standard",
        storage: 512,
      },
      {
        title: "Premium",
        storage: 1024,
      },
    ],
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra",
    desc: "The device features a 6.8-inch Dynamic AMOLED 2X display with a 120 Hz refresh rate, powered by a Qualcomm Snapdragon 8 Gen 3 processor, 12GB RAM, and 256GB storage.",
    ram: 12,
    img: "/s24u.png",
    options: [
      {
        title: "Basic",
        storage: 256,
      },
      {
        title: "Standard",
        storage: 512,
      },
      {
        title: "Premium",
        storage: 1024,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Samsung Galaxy S23",
    desc: "The device has a 6.1-inch FHD+ display with a 120 Hz refresh rate, 8GB RAM, and 128GB storage, powered by a Snapdragon 8 Gen 2 processor. It features a 50 MP + 10 MP + 12 MP triple rear camera, a 12 MP front camera, a 3900 mAh battery, and a fingerprint sensor.",
    img: "/s23.png",
    ram: 8,
    options: [
      {
        title: "Basic",
        storage: 128,
      },
      {
        title: "Standard",
        storage: 256,
      },
      {
        title: "Premium",
        storage: 512,
      },
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S24+",
    desc: "The device features a 6.7-inch Dynamic AMOLED 2X display with a 120 Hz refresh rate, 12GB RAM, 512GB storage, and is powered by the Samsung Exynos 2400 deca-core processor.",
    img: "/s24plus.png",
    ram: 8,
    options: [
      {
        title: "Basic",
        storage: 256,
      },
      {
        title: "Standard",
        storage: 512,
      },
      {
        title: "Premium",
        storage: 1024,
      },
    ],
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra",
    desc: "The device features a 6.8-inch Dynamic AMOLED 2X display with a 120 Hz refresh rate, powered by a Qualcomm Snapdragon 8 Gen 3 processor, 12GB RAM, and 256GB storage.",
    ram: 12,
    img: "/s24u.png",
    options: [
      {
        title: "Basic",
        storage: 256,
      },
      {
        title: "Standard",
        storage: 512,
      },
      {
        title: "Premium",
        storage: 1024,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Samsung Galaxy S23",
  desc: "The device has a 6.1-inch FHD+ display with a 120 Hz refresh rate, 8GB RAM, and 128GB storage, powered by a Snapdragon 8 Gen 2 processor. It features a 50 MP + 10 MP + 12 MP triple rear camera, a 12 MP front camera, a 3900 mAh battery, and a fingerprint sensor.",
  ram: 8,
  img: "/s23.png",
  options: [
    {
      title: "Basic",
      storage: 128,
    },
    {
      title: "Standard",
      storage: 256,
    },
    {
      title: "Premium",
      storage: 512,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "small-sized",
    title: "Galaxy S23",
    desc: "Small but powerful!",
    img: "/blue.png",
    color: "black",
  },
  {
    id: 2,
    slug: "Medium-sized",
    title: "Galaxy S24+",
    desc: "The safe choice!",
    img: "blue2.png",
    color: "white",
  },
  {
    id: 3,
    slug: "Ultra",
    title: "Galaxy S24 U",
    desc: "For the power users!",
    img: "/blue3.png",
    color: "white",
  },
];
