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
   * Allows to check if the user is authenticated
   * **Roles**: `unauthenticated`, `user`
   */
  loggedIn: Scalars['Boolean'];
  /**
   * Get user by id
   * 
   * Roles: `admin`
   */
  user: User;
  /**
   * Get all users
   * 
   * Roles: `admin`
   */
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create user
   * 
   * Roles: `admin`
   */
  createUser: User;
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
   * Update user
   * 
   * Roles: `admin`
   */
  updateUser: User;
};


export type MutationCreateUserArgs = {
  dto?: Maybe<CreateUserDto>;
};


export type MutationLoginArgs = {
  dto: AuthLoginDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  dto?: Maybe<UpdateUserDto>;
};

export type Errors = 
  | 'NotFound'
  | 'Validation'
  | 'Internal'
  | 'Unauthorized'
  | 'Forbidden';




export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type CreateUserDto = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UpdateUserDto = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Errors: Errors;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  PaginationAmount: ResolverTypeWrapper<Scalars['PaginationAmount']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  User: ResolverTypeWrapper<User>;
  CreateUserDto: CreateUserDto;
  UpdateUserDto: UpdateUserDto;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthLoginDto: AuthLoginDto;
  String: Scalars['String'];
  AuthLoginResponseDto: AuthLoginResponseDto;
  Query: {};
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Date: Scalars['Date'];
  PaginationAmount: Scalars['PaginationAmount'];
  JSON: Scalars['JSON'];
  User: User;
  CreateUserDto: CreateUserDto;
  UpdateUserDto: UpdateUserDto;
};

export type AuthLoginResponseDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthLoginResponseDto'] = ResolversParentTypes['AuthLoginResponseDto']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  loggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
  login?: Resolver<ResolversTypes['AuthLoginResponseDto'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'dto'>>;
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
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
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  AuthLoginResponseDto?: AuthLoginResponseDtoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
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
