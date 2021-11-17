import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Book = {
  __typename?: 'Book';
  authors: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  publishedYear: Scalars['Int'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Browse = {
  __typename?: 'Browse';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  foo?: Maybe<Scalars['Int']>;
  meUpdate?: Maybe<User>;
  userBookAdd: UserBook;
  userBookDelete: Scalars['Boolean'];
  userBookEdit: UserBook;
};


export type MutationMeUpdateArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUserBookAddArgs = {
  bookId: Scalars['ID'];
  endedAt?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
};


export type MutationUserBookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserBookEditArgs = {
  endedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Maybe<Book>>;
  browse?: Maybe<Browse>;
  browseBooks: Array<Book>;
  browses: Array<Browse>;
  foo?: Maybe<Scalars['Int']>;
  me?: Maybe<User>;
  search: Array<Book>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userBooks: Array<UserBook>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryBrowseArgs = {
  id: Scalars['ID'];
};


export type QueryBrowseBooksArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  limit: Scalars['Int'];
  query: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserBookArgs = {
  id: Scalars['ID'];
};


export type QueryUserBooksArgs = {
  mine?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  book: Book;
  bookId: Scalars['ID'];
  endedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  originalUserBook?: Maybe<UserBook>;
  originalUserBookId?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type BookPartsFragment = { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined };

export type BrowsePartsFragment = { __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined };

export type BooksQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type BooksQuery = { books: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined> };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined };

export type BrowsesQueryVariables = Exact<{ [key: string]: never; }>;


export type BrowsesQuery = { browses: Array<{ __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined }> };

export type BrowseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BrowseQuery = { browse?: { __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined };

export type BrowseBooksQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BrowseBooksQuery = { browseBooks: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }> };

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
}>;


export type SearchQuery = { search: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }> };

export type UserPartsFragment = { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type MeUpdateMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type MeUpdateMutation = { meUpdate?: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { user?: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type UserBookPartsFragment = { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } };

export type UserBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookQuery = { userBook?: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } } | null | undefined };

export type UserBooksQueryVariables = Exact<{
  userId?: Maybe<Scalars['ID']>;
  mine?: Maybe<Scalars['Boolean']>;
}>;


export type UserBooksQuery = { userBooks: Array<{ __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } }> };

export type UserBookAddMutationVariables = Exact<{
  bookId: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
}>;


export type UserBookAddMutation = { userBookAdd: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } } };

export type UserBookEditMutationVariables = Exact<{
  id: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
}>;


export type UserBookEditMutation = { userBookEdit: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } } };

export type UserBookDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookDeleteMutation = { userBookDelete: boolean };

export const BrowsePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;
export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;
export const BookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;
export const UserBookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;
export const BooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"books"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBooksQuery(options: Omit<Urql.UseQueryArgs<BooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BooksQuery>({ query: BooksDocument, ...options });
};
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBookQuery(options: Omit<Urql.UseQueryArgs<BookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BookQuery>({ query: BookDocument, ...options });
};
export const BrowsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrowseParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;

export function useBrowsesQuery(options: Omit<Urql.UseQueryArgs<BrowsesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowsesQuery>({ query: BrowsesDocument, ...options });
};
export const BrowseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrowseParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;

export function useBrowseQuery(options: Omit<Urql.UseQueryArgs<BrowseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowseQuery>({ query: BrowseDocument, ...options });
};
export const BrowseBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browseBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browseBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBrowseBooksQuery(options: Omit<Urql.UseQueryArgs<BrowseBooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowseBooksQuery>({ query: BrowseBooksDocument, ...options });
};
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useSearchQuery(options: Omit<Urql.UseQueryArgs<SearchQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchQuery>({ query: SearchDocument, ...options });
};
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const MeUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"meUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useMeUpdateMutation() {
  return Urql.useMutation<MeUpdateMutation, MeUpdateMutationVariables>(MeUpdateDocument);
};
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const UserBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookQuery(options: Omit<Urql.UseQueryArgs<UserBookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserBookQuery>({ query: UserBookDocument, ...options });
};
export const UserBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"mine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mine"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBooksQuery(options: Omit<Urql.UseQueryArgs<UserBooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserBooksQuery>({ query: UserBooksDocument, ...options });
};
export const UserBookAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"endedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookAddMutation() {
  return Urql.useMutation<UserBookAddMutation, UserBookAddMutationVariables>(UserBookAddDocument);
};
export const UserBookEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"startedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"endedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookEditMutation() {
  return Urql.useMutation<UserBookEditMutation, UserBookEditMutationVariables>(UserBookEditDocument);
};
export const UserBookDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function useUserBookDeleteMutation() {
  return Urql.useMutation<UserBookDeleteMutation, UserBookDeleteMutationVariables>(UserBookDeleteDocument);
};
export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Book?: (data: WithTypename<Book>) => null | string,
  Browse?: (data: WithTypename<Browse>) => null | string,
  User?: (data: WithTypename<User>) => null | string,
  UserBook?: (data: WithTypename<UserBook>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    foo?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Int'] | string>,
    book?: GraphCacheResolver<WithTypename<Query>, QueryBookArgs, WithTypename<Book> | string>,
    books?: GraphCacheResolver<WithTypename<Query>, QueryBooksArgs, Array<WithTypename<Book> | string>>,
    browses?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Browse> | string>>,
    browse?: GraphCacheResolver<WithTypename<Query>, QueryBrowseArgs, WithTypename<Browse> | string>,
    browseBooks?: GraphCacheResolver<WithTypename<Query>, QueryBrowseBooksArgs, Array<WithTypename<Book> | string>>,
    search?: GraphCacheResolver<WithTypename<Query>, QuerySearchArgs, Array<WithTypename<Book> | string>>,
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<User> | string>,
    user?: GraphCacheResolver<WithTypename<Query>, QueryUserArgs, WithTypename<User> | string>,
    userBook?: GraphCacheResolver<WithTypename<Query>, QueryUserBookArgs, WithTypename<UserBook> | string>,
    userBooks?: GraphCacheResolver<WithTypename<Query>, QueryUserBooksArgs, Array<WithTypename<UserBook> | string>>
  },
  Book?: {
    id?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    subtitle?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    authors?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Array<Scalars['String'] | string>>,
    description?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    publishedYear?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['Int'] | string>,
    imageUrl?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    isbn?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>
  },
  Browse?: {
    id?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    imageUrl?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>
  },
  User?: {
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    profileImageUrl?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    createdAt?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Time'] | string>
  },
  UserBook?: {
    id?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    bookId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    book?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<Book> | string>,
    userId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    startedAt?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    endedAt?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    originalUserBookId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    originalUserBook?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<UserBook> | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  foo?: GraphCacheOptimisticMutationResolver<Record<string, never>, Maybe<Scalars['Int']>>,
  meUpdate?: GraphCacheOptimisticMutationResolver<MutationMeUpdateArgs, Maybe<WithTypename<User>>>,
  userBookAdd?: GraphCacheOptimisticMutationResolver<MutationUserBookAddArgs, WithTypename<UserBook>>,
  userBookEdit?: GraphCacheOptimisticMutationResolver<MutationUserBookEditArgs, WithTypename<UserBook>>,
  userBookDelete?: GraphCacheOptimisticMutationResolver<MutationUserBookDeleteArgs, Scalars['Boolean']>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    foo?: GraphCacheUpdateResolver<{ foo: Maybe<Scalars['Int']> }, Record<string, never>>,
    meUpdate?: GraphCacheUpdateResolver<{ meUpdate: Maybe<WithTypename<User>> }, MutationMeUpdateArgs>,
    userBookAdd?: GraphCacheUpdateResolver<{ userBookAdd: WithTypename<UserBook> }, MutationUserBookAddArgs>,
    userBookEdit?: GraphCacheUpdateResolver<{ userBookEdit: WithTypename<UserBook> }, MutationUserBookEditArgs>,
    userBookDelete?: GraphCacheUpdateResolver<{ userBookDelete: Scalars['Boolean'] }, MutationUserBookDeleteArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};