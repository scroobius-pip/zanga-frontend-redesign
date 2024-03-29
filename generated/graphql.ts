import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  postedProperties: PropertyPage;
  sharedProperties: PropertyPointPage;
  properties: PropertyPage;
  property?: Maybe<Property>;
  featuredProperties: PropertyPage;
  getPaymentLink: Scalars['String'];
  getBankAccountName?: Maybe<Scalars['String']>;
  meta: Meta;
};


export type QueryPostedPropertiesArgs = {
  input?: Maybe<PaginationInput>;
};


export type QuerySharedPropertiesArgs = {
  input?: Maybe<PaginationInput>;
};


export type QueryPropertiesArgs = {
  input: PropertiesInput;
};


export type QueryPropertyArgs = {
  slug: Scalars['String'];
};


export type QueryGetPaymentLinkArgs = {
  input: PaymentInput;
};


export type QueryGetBankAccountNameArgs = {
  accountNo: Scalars['String'];
  bankCode: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: UserType;
  balance: Scalars['Float'];
};

export enum UserType {
  Agency = 'Agency',
  Individual = 'Individual',
  Unassigned = 'Unassigned'
}

export type PaginationInput = {
  cursor?: Maybe<Scalars['String']>;
};

export type PropertyPage = {
  __typename?: 'PropertyPage';
  properties?: Maybe<Array<Property>>;
  pageInfo: PageInfo;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['String'];
  bounty?: Maybe<Scalars['Float']>;
  expense?: Maybe<Scalars['Float']>;
  remainingExpense?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  visits: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  costValue: Scalars['Int'];
  costType: CostType;
  owner: User;
  images?: Maybe<Array<Image>>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export enum CostType {
  Rent = 'Rent',
  Sale = 'Sale'
}

export type Image = {
  __typename?: 'Image';
  url: Scalars['String'];
  previewUrl: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PropertyPointPage = {
  __typename?: 'PropertyPointPage';
  points?: Maybe<Array<PropertyPoint>>;
  pageInfo: PageInfo;
};

export type PropertyPoint = {
  __typename?: 'PropertyPoint';
  propertySlug: Scalars['String'];
  propertyTitle: Scalars['String'];
  impressions: Scalars['Int'];
  profit: Scalars['Float'];
};

export type PropertiesInput = {
  type?: Maybe<CostType>;
  state?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Float']>;
  cursor?: Maybe<Scalars['String']>;
};

export type PaymentInput = {
  amount: Scalars['Float'];
};

export type Meta = {
  __typename?: 'Meta';
  banks?: Maybe<Array<Bank>>;
};

export type Bank = {
  __typename?: 'Bank';
  name: Scalars['String'];
  code: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProperty: Scalars['ID'];
  deleteProperty: Scalars['Boolean'];
  incrementPropertyView?: Maybe<Scalars['Boolean']>;
  updateUser: Scalars['Boolean'];
  updateProperty: Scalars['Boolean'];
  assignBounty: Scalars['Boolean'];
  withdrawBalance: WithdrawBalanceResult;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationDeletePropertyArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementPropertyViewArgs = {
  input: PropertyViewInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


export type MutationAssignBountyArgs = {
  input: BountyInput;
};


export type MutationWithdrawBalanceArgs = {
  input: WithdrawBalanceInput;
};

export type CreatePropertyInput = {
  title: Scalars['String'];
  location: LocationInput;
  costValue: Scalars['Int'];
  costType: CostType;
  featured: Scalars['Boolean'];
  images: Array<ImageInput>;
  description: Scalars['String'];
};

export type LocationInput = {
  city: Scalars['String'];
  state: Scalars['String'];
};

export type ImageInput = {
  url: Scalars['String'];
  previewUrl: Scalars['String'];
};

export type PropertyViewInput = {
  referrerId?: Maybe<Scalars['ID']>;
  propertyId: Scalars['ID'];
};

export type UserInput = {
  type?: Maybe<UserType>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UpdatePropertyInput = {
  propertySlug: Scalars['ID'];
  title: Scalars['String'];
  location: LocationInput;
  costValue: Scalars['Int'];
  costType: CostType;
  featured: Scalars['Boolean'];
  description: Scalars['String'];
};

export type BountyInput = {
  propertyId: Scalars['ID'];
  expense: Scalars['Float'];
  bounty: Scalars['Float'];
};

export type WithdrawBalanceInput = {
  amount: Scalars['Float'];
  actualAmount: Scalars['Float'];
  accountNo: Scalars['String'];
  bankCode: Scalars['String'];
  customerName: Scalars['String'];
};

export type WithdrawBalanceResult = {
  __typename?: 'WithdrawBalanceResult';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  amount: Scalars['Float'];
  referenceId: Scalars['String'];
};

export type Owner = {
  __typename?: 'Owner';
  phone: Scalars['String'];
  name: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String'];
  state: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PropertyDetailsFragment = (
  { __typename?: 'Property' }
  & Pick<Property, 'id' | 'bounty' | 'expense' | 'remainingExpense' | 'title' | 'visits' | 'state' | 'city' | 'costValue' | 'featured' | 'costType' | 'description' | 'slug'>
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'phone'>
  ), images?: Maybe<Array<(
    { __typename?: 'Image' }
    & Pick<Image, 'url' | 'previewUrl'>
  )>> }
);

export type AssignBountyMutationVariables = Exact<{
  input: BountyInput;
}>;


export type AssignBountyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'assignBounty'>
);

export type CreatePropertyMutationVariables = Exact<{
  input: CreatePropertyInput;
}>;


export type CreatePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createProperty'>
);

export type DeletePropertyMutationVariables = Exact<{
  propertyId: Scalars['ID'];
}>;


export type DeletePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProperty'>
);

export type IncrementPropertyViewMutationVariables = Exact<{
  referrerId?: Maybe<Scalars['ID']>;
  propertyId: Scalars['ID'];
}>;


export type IncrementPropertyViewMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'incrementPropertyView'>
);

export type UpdatePropertyMutationVariables = Exact<{
  input: UpdatePropertyInput;
}>;


export type UpdatePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateProperty'>
);

export type UpdateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUser'>
);

export type WithdrawBalanceMutationVariables = Exact<{
  input: WithdrawBalanceInput;
}>;


export type WithdrawBalanceMutation = (
  { __typename?: 'Mutation' }
  & { withdrawBalance: (
    { __typename?: 'WithdrawBalanceResult' }
    & Pick<WithdrawBalanceResult, 'success' | 'message' | 'amount' | 'referenceId'>
  ) }
);

export type FeaturedPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedPropertiesQuery = (
  { __typename?: 'Query' }
  & { featuredProperties: (
    { __typename?: 'PropertyPage' }
    & { properties?: Maybe<Array<(
      { __typename?: 'Property' }
      & PropertyDetailsFragment
    )>> }
  ) }
);

export type GetBankAccountNameQueryVariables = Exact<{
  accountNo: Scalars['String'];
  bankCode: Scalars['String'];
}>;


export type GetBankAccountNameQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getBankAccountName'>
);

export type GetBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksQuery = (
  { __typename?: 'Query' }
  & { meta: (
    { __typename?: 'Meta' }
    & { banks?: Maybe<Array<(
      { __typename?: 'Bank' }
      & Pick<Bank, 'name' | 'code'>
    )>> }
  ) }
);

export type GetPaymentLinkQueryVariables = Exact<{
  amount: Scalars['Float'];
}>;


export type GetPaymentLinkQuery = (
  { __typename?: 'Query' }
  & { link: Query['getPaymentLink'] }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'type' | 'name' | 'phone' | 'balance'>
  )> }
);

export type PostedPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PostedPropertiesQuery = (
  { __typename?: 'Query' }
  & { postedProperties: (
    { __typename?: 'PropertyPage' }
    & { properties?: Maybe<Array<(
      { __typename?: 'Property' }
      & PropertyDetailsFragment
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'after' | 'before'>
    ) }
  ) }
);

export type PropertiesQueryVariables = Exact<{
  input: PropertiesInput;
}>;


export type PropertiesQuery = (
  { __typename?: 'Query' }
  & { properties: (
    { __typename?: 'PropertyPage' }
    & { properties?: Maybe<Array<(
      { __typename?: 'Property' }
      & PropertyDetailsFragment
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'after' | 'before'>
    ) }
  ) }
);

export type PropertyQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PropertyQuery = (
  { __typename?: 'Query' }
  & { property?: Maybe<(
    { __typename?: 'Property' }
    & PropertyDetailsFragment
  )> }
);

export type SharedPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type SharedPropertiesQuery = (
  { __typename?: 'Query' }
  & { sharedProperties: (
    { __typename?: 'PropertyPointPage' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'after' | 'before'>
    ), points?: Maybe<Array<(
      { __typename?: 'PropertyPoint' }
      & Pick<PropertyPoint, 'propertySlug' | 'propertyTitle' | 'impressions' | 'profit'>
    )>> }
  ) }
);

export const PropertyDetailsFragmentDoc = gql`
    fragment PropertyDetails on Property {
  id
  bounty
  expense
  remainingExpense
  title
  visits
  state
  city
  costValue
  featured
  costType
  owner {
    name
    phone
  }
  images {
    url
    previewUrl
  }
  description
  slug
}
    `;
export const AssignBountyDocument = gql`
    mutation assignBounty($input: BountyInput!) {
  assignBounty(input: $input)
}
    `;
export const CreatePropertyDocument = gql`
    mutation createProperty($input: CreatePropertyInput!) {
  createProperty(input: $input)
}
    `;
export const DeletePropertyDocument = gql`
    mutation deleteProperty($propertyId: ID!) {
  deleteProperty(id: $propertyId)
}
    `;
export const IncrementPropertyViewDocument = gql`
    mutation incrementPropertyView($referrerId: ID, $propertyId: ID!) {
  incrementPropertyView(input: {referrerId: $referrerId, propertyId: $propertyId})
}
    `;
export const UpdatePropertyDocument = gql`
    mutation updateProperty($input: UpdatePropertyInput!) {
  updateProperty(input: $input)
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UserInput!) {
  updateUser(input: $input)
}
    `;
export const WithdrawBalanceDocument = gql`
    mutation withdrawBalance($input: WithdrawBalanceInput!) {
  withdrawBalance(input: $input) {
    success
    message
    amount
    referenceId
  }
}
    `;
export const FeaturedPropertiesDocument = gql`
    query featuredProperties {
  featuredProperties {
    properties {
      ...PropertyDetails
    }
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const GetBankAccountNameDocument = gql`
    query getBankAccountName($accountNo: String!, $bankCode: String!) {
  getBankAccountName(accountNo: $accountNo, bankCode: $bankCode)
}
    `;
export const GetBanksDocument = gql`
    query getBanks {
  meta {
    banks {
      name
      code
    }
  }
}
    `;
export const GetPaymentLinkDocument = gql`
    query getPaymentLink($amount: Float!) {
  link: getPaymentLink(input: {amount: $amount})
}
    `;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    type
    name
    phone
    balance
  }
}
    `;
export const PostedPropertiesDocument = gql`
    query postedProperties {
  postedProperties {
    properties {
      ...PropertyDetails
    }
    pageInfo {
      after
      before
    }
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const PropertiesDocument = gql`
    query properties($input: PropertiesInput!) {
  properties(input: $input) {
    properties {
      ...PropertyDetails
    }
    pageInfo {
      after
      before
    }
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const PropertyDocument = gql`
    query property($slug: String!) {
  property(slug: $slug) {
    ...PropertyDetails
  }
}
    ${PropertyDetailsFragmentDoc}`;
export const SharedPropertiesDocument = gql`
    query sharedProperties {
  sharedProperties {
    pageInfo {
      after
      before
    }
    points {
      propertySlug
      propertyTitle
      impressions
      profit
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    assignBounty(variables: AssignBountyMutationVariables): Promise<AssignBountyMutation> {
      return withWrapper(() => client.request<AssignBountyMutation>(print(AssignBountyDocument), variables));
    },
    createProperty(variables: CreatePropertyMutationVariables): Promise<CreatePropertyMutation> {
      return withWrapper(() => client.request<CreatePropertyMutation>(print(CreatePropertyDocument), variables));
    },
    deleteProperty(variables: DeletePropertyMutationVariables): Promise<DeletePropertyMutation> {
      return withWrapper(() => client.request<DeletePropertyMutation>(print(DeletePropertyDocument), variables));
    },
    incrementPropertyView(variables: IncrementPropertyViewMutationVariables): Promise<IncrementPropertyViewMutation> {
      return withWrapper(() => client.request<IncrementPropertyViewMutation>(print(IncrementPropertyViewDocument), variables));
    },
    updateProperty(variables: UpdatePropertyMutationVariables): Promise<UpdatePropertyMutation> {
      return withWrapper(() => client.request<UpdatePropertyMutation>(print(UpdatePropertyDocument), variables));
    },
    updateUser(variables: UpdateUserMutationVariables): Promise<UpdateUserMutation> {
      return withWrapper(() => client.request<UpdateUserMutation>(print(UpdateUserDocument), variables));
    },
    withdrawBalance(variables: WithdrawBalanceMutationVariables): Promise<WithdrawBalanceMutation> {
      return withWrapper(() => client.request<WithdrawBalanceMutation>(print(WithdrawBalanceDocument), variables));
    },
    featuredProperties(variables?: FeaturedPropertiesQueryVariables): Promise<FeaturedPropertiesQuery> {
      return withWrapper(() => client.request<FeaturedPropertiesQuery>(print(FeaturedPropertiesDocument), variables));
    },
    getBankAccountName(variables: GetBankAccountNameQueryVariables): Promise<GetBankAccountNameQuery> {
      return withWrapper(() => client.request<GetBankAccountNameQuery>(print(GetBankAccountNameDocument), variables));
    },
    getBanks(variables?: GetBanksQueryVariables): Promise<GetBanksQuery> {
      return withWrapper(() => client.request<GetBanksQuery>(print(GetBanksDocument), variables));
    },
    getPaymentLink(variables: GetPaymentLinkQueryVariables): Promise<GetPaymentLinkQuery> {
      return withWrapper(() => client.request<GetPaymentLinkQuery>(print(GetPaymentLinkDocument), variables));
    },
    me(variables?: MeQueryVariables): Promise<MeQuery> {
      return withWrapper(() => client.request<MeQuery>(print(MeDocument), variables));
    },
    postedProperties(variables?: PostedPropertiesQueryVariables): Promise<PostedPropertiesQuery> {
      return withWrapper(() => client.request<PostedPropertiesQuery>(print(PostedPropertiesDocument), variables));
    },
    properties(variables: PropertiesQueryVariables): Promise<PropertiesQuery> {
      return withWrapper(() => client.request<PropertiesQuery>(print(PropertiesDocument), variables));
    },
    property(variables: PropertyQueryVariables): Promise<PropertyQuery> {
      return withWrapper(() => client.request<PropertyQuery>(print(PropertyDocument), variables));
    },
    sharedProperties(variables?: SharedPropertiesQueryVariables): Promise<SharedPropertiesQuery> {
      return withWrapper(() => client.request<SharedPropertiesQuery>(print(SharedPropertiesDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;