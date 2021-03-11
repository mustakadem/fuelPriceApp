/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U> : T;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  PaginationAmount: number;
  JSON: any;
};

export type AuthLoginDto = {
  token: Scalars['String'];
};

/** `login` mutation response */
export type AuthLoginResponseDto = {
  __typename?: 'AuthLoginResponseDto';
  accessToken: Scalars['String'];
  id: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /**
   * Get Booking by id
   * 
   * Roles: `employee`
   */
  booking: Booking;
  /**
   * Get Bookings list
   * 
   * Roles: `employee`
   */
  bookings: Array<Booking>;
  /**
   * Returns employee by ID.
   * 
   * Roles: `admin`
   */
  employee?: Maybe<User>;
  /**
   * Returns organization employees.
   * 
   * Roles: `admin`
   */
  employees: Array<User>;
  /**
   * Allows to check if the user is authenticated
   * **Roles**: `unauthenticated`, `user`
   */
  loggedIn: Scalars['Boolean'];
  /**
   * Returns the current user
   * 
   * Roles: `user`
   */
  me: User;
  /**
   * Get Organization
   * 
   * Roles: `user`
   */
  organization: Organization;
  /**
   * Get Partner
   * 
   * Roles: `employee`
   */
  partner: Partner;
  /**
   * Get Partners list
   * 
   * Roles: `admin`
   */
  partners: Array<Partner>;
  /**
   * Get Product by id
   * 
   * Roles: `admin`
   */
  product?: Maybe<Product>;
  /**
   * Get Products list
   * 
   * Roles: `admin`
   */
  products: Array<Product>;
  /**
   * Get Purchase by id
   * 
   * Roles: `admin`
   */
  purchase?: Maybe<Purchase>;
  /**
   * Get Purchases list
   * 
   * Roles: `admin`
   */
  purchases: Array<Purchase>;
  /**
   * Get ResourcesCategories list
   * 
   * Roles: `admin`
   */
  resourcesCategories: Array<ResourcesCategory>;
  /**
   * Get ResourceCategory by id
   * 
   * Roles: `admin`
   */
  resourcesCategory: ResourcesCategory;
};


export type QueryBookingArgs = {
  id: Scalars['ID'];
};


export type QueryEmployeeArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryPartnerArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryPurchaseArgs = {
  id: Scalars['ID'];
};


export type QueryResourcesCategoryArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create Booking
   * 
   * Roles: `employee`
   */
  createBooking: Booking;
  /**
   * Create a employee user
   * 
   * Roles: `admin`
   */
  createEmployee: User;
  /**
   * Create Organization
   * 
   * Roles: `admin`
   */
  createOrganization: Organization;
  /**
   * Create Partner
   * 
   * Roles: `admin`
   */
  createPartner: Partner;
  /**
   * Create Product
   * 
   * Roles: `employee`
   */
  createProduct: Product;
  /**
   * Create Purchase
   * 
   * Roles: `admin`
   */
  createPurchase: Purchase;
  /**
   * Create ResourceCategory
   * 
   * Roles: `admin`
   */
  createResourcesCategory: ResourcesCategory;
  /**
   * Logins to the app using auth token
   * 
   * **Roles**: `user`
   */
  login: AuthLoginResponseDto;
  /**
   * Disables the access token in use
   * 
   * **Roles**: `user`
   */
  logout?: Maybe<Scalars['Boolean']>;
  /**
   * Remove Booking
   * 
   * Roles: `employee`
   */
  removeBooking: Scalars['Boolean'];
  /**
   * Remove a employee user
   * 
   * Roles: `admin`
   */
  removeEmployee: Scalars['Boolean'];
  /**
   * Remove Organization
   * 
   * Roles: `admin`
   */
  removeOrganization: Scalars['Boolean'];
  /**
   * Remove Partner
   * 
   * Roles: `admin`
   */
  removePartner: Scalars['Boolean'];
  /**
   * Remove Product
   * 
   * Roles: `employee`
   */
  removeProduct: Scalars['Boolean'];
  /**
   * Remove resourcesCategory
   * 
   * Roles: `admin`
   */
  removeResourcesCategory: Scalars['Boolean'];
  /**
   * Update Booking
   * 
   * Roles: `employee`
   */
  updateBooking: Booking;
  /**
   * Update a employee user
   * 
   * Roles: `admin`
   */
  updateEmployee: User;
  /**
   * Update Organization
   * 
   * Roles: `admin`
   */
  updateOrganizations: Organization;
  /**
   * Update Partner
   * 
   * Roles: `admin`
   */
  updatePartners: Partner;
  /**
   * Update Product
   * 
   * Roles: `employee`
   */
  updateProduct: Product;
  /**
   * Update resourcesCategory
   * 
   * Roles: `admin`
   */
  updateResourcesCategory: ResourcesCategory;
};


export type MutationCreateBookingArgs = {
  data: CreateBookingDto;
};


export type MutationCreateEmployeeArgs = {
  data?: Maybe<CreateEmployeeDto>;
};


export type MutationCreateOrganizationArgs = {
  data: CreateOrganizationDto;
};


export type MutationCreatePartnerArgs = {
  data: CreatePartnerDto;
};


export type MutationCreateProductArgs = {
  data: CreateProductDto;
};


export type MutationCreatePurchaseArgs = {
  data: CreatePurchaseDto;
};


export type MutationCreateResourcesCategoryArgs = {
  data: CreateResourcesCategoryDto;
};


export type MutationLoginArgs = {
  dto: AuthLoginDto;
};


export type MutationRemoveBookingArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePartnerArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveResourcesCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBookingArgs = {
  id: Scalars['ID'];
  data: UpdateBookingDto;
};


export type MutationUpdateEmployeeArgs = {
  id: Scalars['ID'];
  data?: Maybe<UpdateEmployeeDto>;
};


export type MutationUpdateOrganizationsArgs = {
  id: Scalars['ID'];
  data: UpdateOrganizationDto;
};


export type MutationUpdatePartnersArgs = {
  id: Scalars['ID'];
  data: UpdatePartnerDto;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data: UpdateProductDto;
};


export type MutationUpdateResourcesCategoryArgs = {
  id: Scalars['ID'];
  data: UpdateResourcesCategoryDto;
};

export type BookingState = 
  | 'REQUESTED'
  | 'REVIEWED'
  | 'COLLECTED';

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['String'];
  state: BookingState;
  toDate: Scalars['Date'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  organization: Organization;
  partner: Partner;
  products: Array<Product>;
  purchase?: Maybe<Purchase>;
};

export type CreateBookingDto = {
  toDate: Scalars['Date'];
  partnerId: Scalars['ID'];
  productsIds: Array<Scalars['String']>;
  purchaseId?: Maybe<Scalars['String']>;
};

export type UpdateBookingDto = {
  toDate?: Maybe<Scalars['Date']>;
  state?: Maybe<BookingState>;
  productsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  purchaseId?: Maybe<Scalars['String']>;
};

export type Errors = 
  | 'NotFound'
  | 'Validation'
  | 'Internal'
  | 'Unauthorized'
  | 'Forbidden';

export type OrganizationState = 
  | 'INIT'
  | 'REQUESTED'
  | 'DEMO'
  | 'PENDING_PAY'
  | 'FREE_LICENSE';

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  document: Scalars['String'];
  logo: Scalars['String'];
  state: OrganizationState;
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  admin: User;
  users: Array<User>;
  partners: Array<Partner>;
  products: Array<Product>;
  purchases: Array<Purchase>;
  bookings: Array<Booking>;
};

export type CreateOrganizationDto = {
  name: Scalars['String'];
  document: Scalars['String'];
  logo: Scalars['String'];
  state: OrganizationState;
  userId: Scalars['ID'];
};

export type UpdateOrganizationDto = {
  name?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  state?: Maybe<OrganizationState>;
};

export type PartnerUsage = 
  | 'THERAPEUTIC'
  | 'PLAYFUL';

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['Int'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  usage: PartnerUsage;
  memberNum: Scalars['Int'];
  maxConsumeMonth: Scalars['Int'];
  credits: Scalars['Int'];
  document: Scalars['String'];
  avatar: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  isOnboarding: Scalars['Boolean'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  organization: Organization;
  hostMember?: Maybe<Partner>;
  user?: Maybe<User>;
};

export type CreatePartnerDto = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['Int'];
  email: Scalars['String'];
  usage: PartnerUsage;
  memberNum: Scalars['Int'];
  maxConsumeMonth: Scalars['Int'];
  credits: Scalars['Int'];
  document: Scalars['String'];
  avatar: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  hostMemberId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};

export type UpdatePartnerDto = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  usage?: Maybe<PartnerUsage>;
  memberNum?: Maybe<Scalars['Int']>;
  maxConsumeMonth?: Maybe<Scalars['Int']>;
  credits?: Maybe<Scalars['Int']>;
  document?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  hostMemberId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Product = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  category?: Maybe<ResourcesCategory>;
};

export type CreateProductDto = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  categoryId: Scalars['ID'];
};

export type UpdateProductDto = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['ID']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  id: Scalars['String'];
  total: Scalars['Int'];
  date: Scalars['Date'];
  discount: Scalars['Int'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  organization: Organization;
  partner?: Maybe<Partner>;
  products: Array<Product>;
};

export type CreatePurchaseDto = {
  productsIds: Array<Maybe<Scalars['String']>>;
  discount?: Maybe<Scalars['Int']>;
  partnerId: Scalars['String'];
  date: Scalars['Date'];
  total: Scalars['Int'];
};

export type ResourcesCategory = {
  __typename?: 'ResourcesCategory';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  organization: Organization;
};

export type CreateResourcesCategoryDto = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateResourcesCategoryDto = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};




export type UserRole = 
  | 'EMPLOYEE'
  | 'ADMIN';

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['Int'];
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  roleType: UserRole;
  document: Scalars['String'];
  avatar: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  isOnboarding: Scalars['Boolean'];
  authIdApi: Scalars['String'];
  updatedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
  organization: Organization;
};

export type CreateEmployeeDto = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['Int'];
  email: Scalars['String'];
  document: Scalars['String'];
  avatar: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  address: Scalars['String'];
  zipCode: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateEmployeeDto = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthLoginDto: AuthLoginDto;
  String: ResolverTypeWrapper<Scalars['String']>;
  AuthLoginResponseDto: ResolverTypeWrapper<AuthLoginResponseDto>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  BookingState: BookingState;
  Booking: ResolverTypeWrapper<Booking>;
  CreateBookingDto: CreateBookingDto;
  UpdateBookingDto: UpdateBookingDto;
  Errors: Errors;
  OrganizationState: OrganizationState;
  Organization: ResolverTypeWrapper<Organization>;
  CreateOrganizationDto: CreateOrganizationDto;
  UpdateOrganizationDto: UpdateOrganizationDto;
  PartnerUsage: PartnerUsage;
  Partner: ResolverTypeWrapper<Partner>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CreatePartnerDto: CreatePartnerDto;
  UpdatePartnerDto: UpdatePartnerDto;
  Product: never;
  CreateProductDto: CreateProductDto;
  UpdateProductDto: UpdateProductDto;
  Purchase: ResolverTypeWrapper<Purchase>;
  CreatePurchaseDto: CreatePurchaseDto;
  ResourcesCategory: ResolverTypeWrapper<ResourcesCategory>;
  CreateResourcesCategoryDto: CreateResourcesCategoryDto;
  UpdateResourcesCategoryDto: UpdateResourcesCategoryDto;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  PaginationAmount: ResolverTypeWrapper<Scalars['PaginationAmount']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  UserRole: UserRole;
  User: ResolverTypeWrapper<User>;
  CreateEmployeeDto: CreateEmployeeDto;
  UpdateEmployeeDto: UpdateEmployeeDto;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthLoginDto: AuthLoginDto;
  String: Scalars['String'];
  AuthLoginResponseDto: AuthLoginResponseDto;
  Query: {};
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Booking: Booking;
  CreateBookingDto: CreateBookingDto;
  UpdateBookingDto: UpdateBookingDto;
  Organization: Organization;
  CreateOrganizationDto: CreateOrganizationDto;
  UpdateOrganizationDto: UpdateOrganizationDto;
  Partner: Partner;
  Int: Scalars['Int'];
  CreatePartnerDto: CreatePartnerDto;
  UpdatePartnerDto: UpdatePartnerDto;
  Product: never;
  CreateProductDto: CreateProductDto;
  UpdateProductDto: UpdateProductDto;
  Purchase: Purchase;
  CreatePurchaseDto: CreatePurchaseDto;
  ResourcesCategory: ResourcesCategory;
  CreateResourcesCategoryDto: CreateResourcesCategoryDto;
  UpdateResourcesCategoryDto: UpdateResourcesCategoryDto;
  Date: Scalars['Date'];
  PaginationAmount: Scalars['PaginationAmount'];
  JSON: Scalars['JSON'];
  User: User;
  CreateEmployeeDto: CreateEmployeeDto;
  UpdateEmployeeDto: UpdateEmployeeDto;
};

export type AuthLoginResponseDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthLoginResponseDto'] = ResolversParentTypes['AuthLoginResponseDto']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  booking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<QueryBookingArgs, 'id'>>;
  bookings?: Resolver<Array<ResolversTypes['Booking']>, ParentType, ContextType>;
  employee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryEmployeeArgs, 'id'>>;
  employees?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  loggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
  partner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<QueryPartnerArgs, 'id'>>;
  partners?: Resolver<Array<ResolversTypes['Partner']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  purchase?: Resolver<Maybe<ResolversTypes['Purchase']>, ParentType, ContextType, RequireFields<QueryPurchaseArgs, 'id'>>;
  purchases?: Resolver<Array<ResolversTypes['Purchase']>, ParentType, ContextType>;
  resourcesCategories?: Resolver<Array<ResolversTypes['ResourcesCategory']>, ParentType, ContextType>;
  resourcesCategory?: Resolver<ResolversTypes['ResourcesCategory'], ParentType, ContextType, RequireFields<QueryResourcesCategoryArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBooking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<MutationCreateBookingArgs, 'data'>>;
  createEmployee?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, never>>;
  createOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'data'>>;
  createPartner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<MutationCreatePartnerArgs, 'data'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createPurchase?: Resolver<ResolversTypes['Purchase'], ParentType, ContextType, RequireFields<MutationCreatePurchaseArgs, 'data'>>;
  createResourcesCategory?: Resolver<ResolversTypes['ResourcesCategory'], ParentType, ContextType, RequireFields<MutationCreateResourcesCategoryArgs, 'data'>>;
  login?: Resolver<ResolversTypes['AuthLoginResponseDto'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'dto'>>;
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  removeBooking?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveBookingArgs, 'id'>>;
  removeEmployee?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveEmployeeArgs, 'id'>>;
  removeOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveOrganizationArgs, 'id'>>;
  removePartner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemovePartnerArgs, 'id'>>;
  removeProduct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveProductArgs, 'id'>>;
  removeResourcesCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveResourcesCategoryArgs, 'id'>>;
  updateBooking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<MutationUpdateBookingArgs, 'id' | 'data'>>;
  updateEmployee?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'id'>>;
  updateOrganizations?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationUpdateOrganizationsArgs, 'id' | 'data'>>;
  updatePartners?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<MutationUpdatePartnersArgs, 'id' | 'data'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'data'>>;
  updateResourcesCategory?: Resolver<ResolversTypes['ResourcesCategory'], ParentType, ContextType, RequireFields<MutationUpdateResourcesCategoryArgs, 'id' | 'data'>>;
};

export type BookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['BookingState'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  partner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  purchase?: Resolver<Maybe<ResolversTypes['Purchase']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['OrganizationState'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  partners?: Resolver<Array<ResolversTypes['Partner']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  purchases?: Resolver<Array<ResolversTypes['Purchase']>, ParentType, ContextType>;
  bookings?: Resolver<Array<ResolversTypes['Booking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PartnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Partner'] = ResolversParentTypes['Partner']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['PartnerUsage'], ParentType, ContextType>;
  memberNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxConsumeMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  credits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isOnboarding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  hostMember?: Resolver<Maybe<ResolversTypes['Partner']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['ResourcesCategory']>, ParentType, ContextType>;
};

export type PurchaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Purchase'] = ResolversParentTypes['Purchase']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  partner?: Resolver<Maybe<ResolversTypes['Partner']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ResourcesCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourcesCategory'] = ResolversParentTypes['ResourcesCategory']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface PaginationAmountScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PaginationAmount'], any> {
  name: 'PaginationAmount';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailConfirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isOnboarding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  authIdApi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  AuthLoginResponseDto?: AuthLoginResponseDtoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Booking?: BookingResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Partner?: PartnerResolvers<ContextType>;
  Product?: ProductResolvers;
  Purchase?: PurchaseResolvers<ContextType>;
  ResourcesCategory?: ResourcesCategoryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  PaginationAmount?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
