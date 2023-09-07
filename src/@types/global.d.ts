type IProductFilterValue = string | string[] | number | number[];

type IProductFilters = {
  rating: string;
  gender: string[];
  category: string;
  colors: string[];
  priceRange: number[];
};

// ----------------------------------------------------------------------

type IProductReviewNewForm = {
  rating: number | null;
  review: string;
  name: string;
  email: string;
};

type IProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  avatarUrl: string;
  isPurchased: boolean;
  attachments?: string[];
  postedAt: Date;
};

type IProductItem = {
  productUUID: string;
  productName: string;
  description: string;
  productOrigin: string;
  tags: null | string[];
  productManager: null | string;
  technicalContact: null | string;
  teamManager: null | string;
  productType: null | string;
  regulations: null | string;
  authorizedUsers: null | string;
  businessCriticality: null | string;
  platform: null | string;
  lifecycle: null | string;
  numberOfFindings: null | number;
  numberOfEndpoints: null | number;
  calendar: null | string;
  numberOfUsers: null | number;
  revenue: null | string;
  internetAccessible: null | boolean;
  productAudience: null | boolean;
  productMisc1: null | string;
  productMisc2: null | string;
  productMisc3: null | string;
  productMisc4: null | string;
  productMisc5: null | string;
  productMisc6: null | string;
  productMisc7: null | string;
  productMisc8: null | string;
  productMisc9: null | string;
  productMisc10: null | string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  sku: string;
  name: string;
  code: string;
  price: number;
  taxes: number;
  gender: string;
  sizes: string[];
  publish: string;
  coverUrl: string;
  images: string[];
  colors: string[];
  quantity: number;
  category: string;
  available: number;
  totalSold: number;
  totalRatings: number;
  totalReviews: number;
  inventoryType: string;
  subDescription: string;
  priceSale: number | null;
  reviews: IProductReview[];
  ratings: {
    name: string;
    starCount: number;
    reviewCount: number;
  }[];
  saleLabel: {
    enabled: boolean;
    content: string;
  };
  newLabel: {
    enabled: boolean;
    content: string;
  };
};

type IProductTableFilterValue = string | string[];
type IProductTableFilters = {
  name: string;
  stock: string[];
  publish: string[];
};
