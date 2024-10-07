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
    desc: "The device features a 6.1-inch (15.49 cm) flat FHD+ display with a 120 Hz refresh rate. It comes with 8GB of RAM and 128GB of internal storage. Powered by a Qualcomm Snapdragon 8 Gen 2 octa-core processor, the device has a triple rear camera setup with 50 MP, 10 MP, and 12 MP lenses, along with a 12 MP front camera. It is equipped with a 3900 mAh battery and includes a fingerprint sensor for added security.",
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
    desc: "The device features a 6.7-inch (16.91 cm) Dynamic AMOLED 2X display with a 120 Hz refresh rate. It comes with 12GB of RAM and 512GB of internal storage. Powered by the Samsung Exynos 2400 deca-core processor, clocked at 3.2GHz, the device has a triple rear camera setup with 50 MP, 10 MP, and 12 MP lenses, along with a 12 MP front camera. It has a 4900 mAh battery and supports USB Type-C charging. Additionally, it is IP68 water-resistant and runs on Android 14 OS.",
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
    desc: "The device has a 6.8-inch (17.27 cm) Dynamic AMOLED 2X display with a 120 Hz refresh rate. It includes 12GB of RAM and 256GB of internal storage. The processor is a Qualcomm Snapdragon 8 Gen 3 octa-core, clocked at 3.2GHz. It features a quad rear camera setup with 200 MP, 50 MP, 12 MP, and 10 MP lenses, along with a 12 MP front camera. The battery capacity is 5000 mAh, with USB Type-C charging support. Additionally, the device is IP68 water-resistant and operates on Android 14 OS.",
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
    desc: "he device features a 6.1-inch (15.49 cm) flat FHD+ display with a 120 Hz refresh rate. It comes with 8GB of RAM and 128GB of internal storage. Powered by a Qualcomm Snapdragon 8 Gen 2 octa-core processor, the device has a triple rear camera setup with 50 MP, 10 MP, and 12 MP lenses, along with a 12 MP front camera. It is equipped with a 3900 mAh battery and includes a fingerprint sensor for added security.",
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
    desc: "The device features a 6.7-inch (16.91 cm) Dynamic AMOLED 2X display with a 120 Hz refresh rate. It comes with 12GB of RAM and 512GB of internal storage. Powered by the Samsung Exynos 2400 deca-core processor, clocked at 3.2GHz, the device has a triple rear camera setup with 50 MP, 10 MP, and 12 MP lenses, along with a 12 MP front camera. It has a 4900 mAh battery and supports USB Type-C charging. Additionally, it is IP68 water-resistant and runs on Android 14 OS.",
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
    desc: "The device has a 6.8-inch (17.27 cm) Dynamic AMOLED 2X display with a 120 Hz refresh rate. It includes 12GB of RAM and 256GB of internal storage. The processor is a Qualcomm Snapdragon 8 Gen 3 octa-core, clocked at 3.2GHz. It features a quad rear camera setup with 200 MP, 50 MP, 12 MP, and 10 MP lenses, along with a 12 MP front camera. The battery capacity is 5000 mAh, with USB Type-C charging support. Additionally, the device is IP68 water-resistant and operates on Android 14 OS.",
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
  desc: "he device features a 6.1-inch (15.49 cm) flat FHD+ display with a 120 Hz refresh rate. It comes with 8GB of RAM and 128GB of internal storage. Powered by a Qualcomm Snapdragon 8 Gen 2 octa-core processor, the device has a triple rear camera setup with 50 MP, 10 MP, and 12 MP lenses, along with a 12 MP front camera. It is equipped with a 3900 mAh battery and includes a fingerprint sensor for added security.",
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
