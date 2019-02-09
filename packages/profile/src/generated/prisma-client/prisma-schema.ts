export const typeDefs = /* GraphQL */ `type AggregateChannel {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateRating {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTeamSetting {
  count: Int!
}

type AggregateTodo {
  count: Int!
}

type AggregateTodoProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Channel {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  public: Boolean
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  teamId: ID!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ChannelConnection {
  pageInfo: PageInfo!
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  teamId: ID!
  members: UserCreateManyWithoutChannelsInput
  author: UserCreateOneWithoutOwned_channelsInput!
}

input ChannelCreateManyInput {
  create: [ChannelCreateInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateOneInput {
  create: ChannelCreateInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutAuthorInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  teamId: ID!
  members: UserCreateManyWithoutChannelsInput
}

input ChannelCreateWithoutMembersInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  teamId: ID!
  author: UserCreateOneWithoutOwned_channelsInput!
}

type ChannelEdge {
  node: Channel!
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  public_ASC
  public_DESC
  teamId_ASC
  teamId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  name: String!
  slug: String!
  public: Boolean
  teamId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ChannelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  public: Boolean
  public_not: Boolean
  teamId: ID
  teamId_not: ID
  teamId_in: [ID!]
  teamId_not_in: [ID!]
  teamId_lt: ID
  teamId_lte: ID
  teamId_gt: ID
  teamId_gte: ID
  teamId_contains: ID
  teamId_not_contains: ID
  teamId_starts_with: ID
  teamId_not_starts_with: ID
  teamId_ends_with: ID
  teamId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChannelScalarWhereInput!]
  OR: [ChannelScalarWhereInput!]
  NOT: [ChannelScalarWhereInput!]
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
  AND: [ChannelSubscriptionWhereInput!]
  OR: [ChannelSubscriptionWhereInput!]
  NOT: [ChannelSubscriptionWhereInput!]
}

input ChannelUpdateDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  teamId: ID
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  teamId: ID
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateManyDataInput {
  name: String
  slug: String
  public: Boolean
  teamId: ID
}

input ChannelUpdateManyInput {
  create: [ChannelCreateInput!]
  update: [ChannelUpdateWithWhereUniqueNestedInput!]
  upsert: [ChannelUpsertWithWhereUniqueNestedInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  set: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyMutationInput {
  name: String
  slug: String
  public: Boolean
  teamId: ID
}

input ChannelUpdateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  set: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  set: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyWithWhereNestedInput {
  where: ChannelScalarWhereInput!
  data: ChannelUpdateManyDataInput!
}

input ChannelUpdateOneInput {
  create: ChannelCreateInput
  update: ChannelUpdateDataInput
  upsert: ChannelUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ChannelWhereUniqueInput
}

input ChannelUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  teamId: ID
  members: UserUpdateManyWithoutChannelsInput
}

input ChannelUpdateWithoutMembersDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  teamId: ID
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutAuthorDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutMembersDataInput!
}

input ChannelUpsertNestedInput {
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelUpsertWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutAuthorDataInput!
  create: ChannelCreateWithoutAuthorInput!
}

input ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutMembersDataInput!
  create: ChannelCreateWithoutMembersInput!
}

input ChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  public: Boolean
  public_not: Boolean
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  teamId: ID
  teamId_not: ID
  teamId_in: [ID!]
  teamId_not_in: [ID!]
  teamId_lt: ID
  teamId_lte: ID
  teamId_gt: ID
  teamId_gte: ID
  teamId_contains: ID
  teamId_not_contains: ID
  teamId_starts_with: ID
  teamId_not_starts_with: ID
  teamId_ends_with: ID
  teamId_not_ends_with: ID
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChannelWhereInput!]
  OR: [ChannelWhereInput!]
  NOT: [ChannelWhereInput!]
}

input ChannelWhereUniqueInput {
  id: ID
  slug: String
}

type Comment {
  id: ID!
  body: String!
  parentId: ID!
  pageId: ID!
  repliedTo: User
  ratings: Rating!
  createdAt: DateTime!
  updatedAt: DateTime!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  author: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  body: String!
  parentId: ID!
  pageId: ID!
  repliedTo: UserCreateOneInput
  ratings: RatingCreateOneInput!
  replies: CommentCreateManyWithoutRepliesInput
  author: UserCreateOneInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutRepliesInput {
  create: [CommentCreateWithoutRepliesInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
}

input CommentCreateWithoutRepliesInput {
  body: String!
  parentId: ID!
  pageId: ID!
  repliedTo: UserCreateOneInput
  ratings: RatingCreateOneInput!
  author: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  pageId_ASC
  pageId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  pageId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  pageId: ID
  pageId_not: ID
  pageId_in: [ID!]
  pageId_not_in: [ID!]
  pageId_lt: ID
  pageId_lte: ID
  pageId_gt: ID
  pageId_gte: ID
  pageId_contains: ID
  pageId_not_contains: ID
  pageId_starts_with: ID
  pageId_not_starts_with: ID
  pageId_ends_with: ID
  pageId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateDataInput {
  body: String
  parentId: ID
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  replies: CommentUpdateManyWithoutRepliesInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateInput {
  body: String
  parentId: ID
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  replies: CommentUpdateManyWithoutRepliesInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateManyDataInput {
  body: String
  parentId: ID
  pageId: ID
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyMutationInput {
  body: String
  parentId: ID
  pageId: ID
}

input CommentUpdateManyWithoutRepliesInput {
  create: [CommentCreateWithoutRepliesInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutRepliesInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutRepliesInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneInput {
  create: CommentCreateInput
  update: CommentUpdateDataInput
  upsert: CommentUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
}

input CommentUpdateWithoutRepliesDataInput {
  body: String
  parentId: ID
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpdateWithWhereUniqueWithoutRepliesInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutRepliesDataInput!
}

input CommentUpsertNestedInput {
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueWithoutRepliesInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutRepliesDataInput!
  create: CommentCreateWithoutRepliesInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  pageId: ID
  pageId_not: ID
  pageId_in: [ID!]
  pageId_not_in: [ID!]
  pageId_lt: ID
  pageId_lte: ID
  pageId_gt: ID
  pageId_gte: ID
  pageId_contains: ID
  pageId_not_contains: ID
  pageId_starts_with: ID
  pageId_not_starts_with: ID
  pageId_ends_with: ID
  pageId_not_ends_with: ID
  repliedTo: UserWhereInput
  ratings: RatingWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  author: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

type Customer {
  id: ID!
  user: User!
  stripeId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  user: UserCreateOneInput!
  stripeId: ID!
}

input CustomerCreateOneInput {
  create: CustomerCreateInput
  connect: CustomerWhereUniqueInput
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  stripeId_ASC
  stripeId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CustomerPreviousValues {
  id: ID!
  stripeId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateDataInput {
  user: UserUpdateOneRequiredInput
  stripeId: ID
}

input CustomerUpdateInput {
  user: UserUpdateOneRequiredInput
  stripeId: ID
}

input CustomerUpdateManyMutationInput {
  stripeId: ID
}

input CustomerUpdateOneRequiredInput {
  create: CustomerCreateInput
  update: CustomerUpdateDataInput
  upsert: CustomerUpsertNestedInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpsertNestedInput {
  update: CustomerUpdateDataInput!
  create: CustomerCreateInput!
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  stripeId: ID
  stripeId_not: ID
  stripeId_in: [ID!]
  stripeId_not_in: [ID!]
  stripeId_lt: ID
  stripeId_lte: ID
  stripeId_gt: ID
  stripeId_gte: ID
  stripeId_contains: ID
  stripeId_not_contains: ID
  stripeId_starts_with: ID
  stripeId_not_starts_with: ID
  stripeId_ends_with: ID
  stripeId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
}

scalar DateTime

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  key_ASC
  key_DESC
  ETag_ASC
  ETag_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateOneRequiredInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  connect: FileWhereUniqueInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  ETag: String
  ETag_not: String
  ETag_in: [String!]
  ETag_not_in: [String!]
  ETag_lt: String
  ETag_lte: String
  ETag_gt: String
  ETag_gte: String
  ETag_contains: String
  ETag_not_contains: String
  ETag_starts_with: String
  ETag_not_starts_with: String
  ETag_ends_with: String
  ETag_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: UserCreateOneInput!
}

input MessageCreateManyInput {
  create: [MessageCreateInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateOneInput {
  create: MessageCreateInput
  connect: MessageWhereUniqueInput
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  url_ASC
  url_DESC
  filetype_ASC
  filetype_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  filetype: String
  filetype_not: String
  filetype_in: [String!]
  filetype_not_in: [String!]
  filetype_lt: String
  filetype_lte: String
  filetype_gt: String
  filetype_gte: String
  filetype_contains: String
  filetype_not_contains: String
  filetype_starts_with: String
  filetype_not_starts_with: String
  filetype_ends_with: String
  filetype_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateDataInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateManyDataInput {
  body: String
  parentId: ID
  url: String
  filetype: String
}

input MessageUpdateManyInput {
  create: [MessageCreateInput!]
  update: [MessageUpdateWithWhereUniqueNestedInput!]
  upsert: [MessageUpsertWithWhereUniqueNestedInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyMutationInput {
  body: String
  parentId: ID
  url: String
  filetype: String
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateOneInput {
  create: MessageCreateInput
  update: MessageUpdateDataInput
  upsert: MessageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MessageWhereUniqueInput
}

input MessageUpdateWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateDataInput!
}

input MessageUpsertNestedInput {
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageUpsertWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  filetype: String
  filetype_not: String
  filetype_in: [String!]
  filetype_not_in: [String!]
  filetype_lt: String
  filetype_lte: String
  filetype_gt: String
  filetype_gte: String
  filetype_contains: String
  filetype_not_contains: String
  filetype_starts_with: String
  filetype_not_starts_with: String
  filetype_ends_with: String
  filetype_not_ends_with: String
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChannel(data: ChannelCreateInput!): Channel!
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateManyChannels(data: ChannelUpdateManyMutationInput!, where: ChannelWhereInput): BatchPayload!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createRating(data: RatingCreateInput!): Rating!
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateManyRatings(data: RatingUpdateManyMutationInput!, where: RatingWhereInput): BatchPayload!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createTeamSetting(data: TeamSettingCreateInput!): TeamSetting!
  updateTeamSetting(data: TeamSettingUpdateInput!, where: TeamSettingWhereUniqueInput!): TeamSetting
  updateManyTeamSettings(data: TeamSettingUpdateManyMutationInput!, where: TeamSettingWhereInput): BatchPayload!
  upsertTeamSetting(where: TeamSettingWhereUniqueInput!, create: TeamSettingCreateInput!, update: TeamSettingUpdateInput!): TeamSetting!
  deleteTeamSetting(where: TeamSettingWhereUniqueInput!): TeamSetting
  deleteManyTeamSettings(where: TeamSettingWhereInput): BatchPayload!
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createTodoProject(data: TodoProjectCreateInput!): TodoProject!
  updateTodoProject(data: TodoProjectUpdateInput!, where: TodoProjectWhereUniqueInput!): TodoProject
  updateManyTodoProjects(data: TodoProjectUpdateManyMutationInput!, where: TodoProjectWhereInput): BatchPayload!
  upsertTodoProject(where: TodoProjectWhereUniqueInput!, create: TodoProjectCreateInput!, update: TodoProjectUpdateInput!): TodoProject!
  deleteTodoProject(where: TodoProjectWhereUniqueInput!): TodoProject
  deleteManyTodoProjects(where: TodoProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  message: String
  comments: Comment
  messages: Message
  team: Team
  channel: Channel
  friend_requests: User
  friend: User
  author: User!
}

type NotificationConnection {
  pageInfo: PageInfo!
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  message: String
  comments: CommentCreateOneInput
  messages: MessageCreateOneInput
  team: TeamCreateOneInput
  channel: ChannelCreateOneInput
  friend_requests: UserCreateOneInput
  friend: UserCreateOneInput
  author: UserCreateOneInput!
}

input NotificationCreateManyInput {
  create: [NotificationCreateInput!]
  connect: [NotificationWhereUniqueInput!]
}

type NotificationEdge {
  node: Notification!
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  message: String
}

input NotificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  AND: [NotificationScalarWhereInput!]
  OR: [NotificationScalarWhereInput!]
  NOT: [NotificationScalarWhereInput!]
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
}

input NotificationUpdateDataInput {
  message: String
  comments: CommentUpdateOneInput
  messages: MessageUpdateOneInput
  team: TeamUpdateOneInput
  channel: ChannelUpdateOneInput
  friend_requests: UserUpdateOneInput
  friend: UserUpdateOneInput
  author: UserUpdateOneRequiredInput
}

input NotificationUpdateInput {
  message: String
  comments: CommentUpdateOneInput
  messages: MessageUpdateOneInput
  team: TeamUpdateOneInput
  channel: ChannelUpdateOneInput
  friend_requests: UserUpdateOneInput
  friend: UserUpdateOneInput
  author: UserUpdateOneRequiredInput
}

input NotificationUpdateManyDataInput {
  message: String
}

input NotificationUpdateManyInput {
  create: [NotificationCreateInput!]
  update: [NotificationUpdateWithWhereUniqueNestedInput!]
  upsert: [NotificationUpsertWithWhereUniqueNestedInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  set: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  deleteMany: [NotificationScalarWhereInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
}

input NotificationUpdateManyMutationInput {
  message: String
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
}

input NotificationUpdateWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateDataInput!
}

input NotificationUpsertWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateDataInput!
  create: NotificationCreateInput!
}

input NotificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  comments: CommentWhereInput
  messages: MessageWhereInput
  team: TeamWhereInput
  channel: ChannelWhereInput
  friend_requests: UserWhereInput
  friend: UserWhereInput
  author: UserWhereInput
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type Order {
  id: ID!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  customer: Customer!
  total_price: Float!
  confirmed: Boolean!
  currency: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  products: ProductCreateManyInput
  customer: CustomerCreateOneInput!
  total_price: Float!
  confirmed: Boolean!
  currency: String!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  total_price_ASC
  total_price_DESC
  confirmed_ASC
  confirmed_DESC
  currency_ASC
  currency_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  total_price: Float!
  confirmed: Boolean!
  currency: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  products: ProductUpdateManyInput
  customer: CustomerUpdateOneRequiredInput
  total_price: Float
  confirmed: Boolean
  currency: String
}

input OrderUpdateManyMutationInput {
  total_price: Float
  confirmed: Boolean
  currency: String
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  customer: CustomerWhereInput
  total_price: Float
  total_price_not: Float
  total_price_in: [Float!]
  total_price_not_in: [Float!]
  total_price_lt: Float
  total_price_lte: Float
  total_price_gt: Float
  total_price_gte: Float
  confirmed: Boolean
  confirmed_not: Boolean
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  stock: Int!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  stock: Int!
  price: Float!
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  stock_ASC
  stock_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  stock: Int!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  stock: Int
  price: Float
}

input ProductUpdateInput {
  name: String
  stock: Int
  price: Float
}

input ProductUpdateManyDataInput {
  name: String
  stock: Int
  price: Float
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyMutationInput {
  name: String
  stock: Int
  price: Float
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  channel(where: ChannelWhereUniqueInput!): Channel
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  rating(where: RatingWhereUniqueInput!): Rating
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  teamSetting(where: TeamSettingWhereUniqueInput!): TeamSetting
  teamSettings(where: TeamSettingWhereInput, orderBy: TeamSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamSetting]!
  teamSettingsConnection(where: TeamSettingWhereInput, orderBy: TeamSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamSettingConnection!
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  todoProject(where: TodoProjectWhereUniqueInput!): TodoProject
  todoProjects(where: TodoProjectWhereInput, orderBy: TodoProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoProject]!
  todoProjectsConnection(where: TodoProjectWhereInput, orderBy: TodoProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Rating {
  id: ID!
  vote: Int!
  author(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RatingConnection {
  pageInfo: PageInfo!
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  vote: Int!
  author: UserCreateManyInput
}

input RatingCreateOneInput {
  create: RatingCreateInput
  connect: RatingWhereUniqueInput
}

type RatingEdge {
  node: Rating!
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  vote_ASC
  vote_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RatingPreviousValues {
  id: ID!
  vote: Int!
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
  AND: [RatingSubscriptionWhereInput!]
  OR: [RatingSubscriptionWhereInput!]
  NOT: [RatingSubscriptionWhereInput!]
}

input RatingUpdateDataInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateManyMutationInput {
  vote: Int
}

input RatingUpdateOneRequiredInput {
  create: RatingCreateInput
  update: RatingUpdateDataInput
  upsert: RatingUpsertNestedInput
  connect: RatingWhereUniqueInput
}

input RatingUpsertNestedInput {
  update: RatingUpdateDataInput!
  create: RatingCreateInput!
}

input RatingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  vote: Int
  vote_not: Int
  vote_in: [Int!]
  vote_not_in: [Int!]
  vote_lt: Int
  vote_lte: Int
  vote_gt: Int
  vote_gte: Int
  author_every: UserWhereInput
  author_some: UserWhereInput
  author_none: UserWhereInput
  AND: [RatingWhereInput!]
  OR: [RatingWhereInput!]
  NOT: [RatingWhereInput!]
}

input RatingWhereUniqueInput {
  id: ID
}

type Subscription {
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  teamSetting(where: TeamSettingSubscriptionWhereInput): TeamSettingSubscriptionPayload
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  todoProject(where: TodoProjectSubscriptionWhereInput): TodoProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamCreateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneInput {
  create: TeamCreateInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutAuthorInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamCreateWithoutMembersInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSetting {
  id: ID!
  cankick: Boolean!
}

type TeamSettingConnection {
  pageInfo: PageInfo!
  edges: [TeamSettingEdge]!
  aggregate: AggregateTeamSetting!
}

input TeamSettingCreateInput {
  cankick: Boolean!
}

type TeamSettingEdge {
  node: TeamSetting!
  cursor: String!
}

enum TeamSettingOrderByInput {
  id_ASC
  id_DESC
  cankick_ASC
  cankick_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamSettingPreviousValues {
  id: ID!
  cankick: Boolean!
}

type TeamSettingSubscriptionPayload {
  mutation: MutationType!
  node: TeamSetting
  updatedFields: [String!]
  previousValues: TeamSettingPreviousValues
}

input TeamSettingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamSettingWhereInput
  AND: [TeamSettingSubscriptionWhereInput!]
  OR: [TeamSettingSubscriptionWhereInput!]
  NOT: [TeamSettingSubscriptionWhereInput!]
}

input TeamSettingUpdateInput {
  cankick: Boolean
}

input TeamSettingUpdateManyMutationInput {
  cankick: Boolean
}

input TeamSettingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cankick: Boolean
  cankick_not: Boolean
  AND: [TeamSettingWhereInput!]
  OR: [TeamSettingWhereInput!]
  NOT: [TeamSettingWhereInput!]
}

input TeamSettingWhereUniqueInput {
  id: ID
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyDataInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyMutationInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  set: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  set: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateOneInput {
  create: TeamCreateInput
  update: TeamUpdateDataInput
  upsert: TeamUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateWithoutMembersDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutAuthorDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertNestedInput {
  update: TeamUpdateDataInput!
  create: TeamCreateInput!
}

input TeamUpsertWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutAuthorDataInput!
  create: TeamCreateWithoutAuthorInput!
}

input TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  author: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  slug: String
}

type Todo {
  id: ID!
  body: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  body: String!
  author: UserCreateOneInput!
}

input TodoCreateManyInput {
  create: [TodoCreateInput!]
  connect: [TodoWhereUniqueInput!]
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoPreviousValues {
  id: ID!
  body: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TodoProject {
  id: ID!
  name: String!
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TodoProjectConnection {
  pageInfo: PageInfo!
  edges: [TodoProjectEdge]!
  aggregate: AggregateTodoProject!
}

input TodoProjectCreateInput {
  name: String!
  todos: TodoCreateManyInput
  author: UserCreateOneInput!
}

type TodoProjectEdge {
  node: TodoProject!
  cursor: String!
}

enum TodoProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoProjectPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TodoProjectSubscriptionPayload {
  mutation: MutationType!
  node: TodoProject
  updatedFields: [String!]
  previousValues: TodoProjectPreviousValues
}

input TodoProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoProjectWhereInput
  AND: [TodoProjectSubscriptionWhereInput!]
  OR: [TodoProjectSubscriptionWhereInput!]
  NOT: [TodoProjectSubscriptionWhereInput!]
}

input TodoProjectUpdateInput {
  name: String
  todos: TodoUpdateManyInput
  author: UserUpdateOneRequiredInput
}

input TodoProjectUpdateManyMutationInput {
  name: String
}

input TodoProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TodoProjectWhereInput!]
  OR: [TodoProjectWhereInput!]
  NOT: [TodoProjectWhereInput!]
}

input TodoProjectWhereUniqueInput {
  id: ID
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateDataInput {
  body: String
  author: UserUpdateOneRequiredInput
}

input TodoUpdateInput {
  body: String
  author: UserUpdateOneRequiredInput
}

input TodoUpdateManyDataInput {
  body: String
}

input TodoUpdateManyInput {
  create: [TodoCreateInput!]
  update: [TodoUpdateWithWhereUniqueNestedInput!]
  upsert: [TodoUpsertWithWhereUniqueNestedInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyMutationInput {
  body: String
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithWhereUniqueNestedInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateDataInput!
}

input TodoUpsertWithWhereUniqueNestedInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateDataInput!
  create: TodoCreateInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  set_private: Boolean!
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  avatar_url: File!
  private: Boolean!
  blockedUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  confirmed: Boolean!
  online: Boolean!
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  friend_requests(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  owned_teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  owned_channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBlockedUsersInput {
  create: [UserCreateWithoutBlockedUsersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFriend_requestsInput {
  create: [UserCreateWithoutFriend_requestsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBlockedUsersInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutChannelsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutFriend_requestsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutFriendsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_channelsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_teamsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutTeamsInput {
  email: String
  notifications: NotificationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentCreateManyInput
  avatar_url: FileCreateOneInput!
  private: Boolean
  blockedUsers: UserCreateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  set_private_ASC
  set_private_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  gitHubId_ASC
  gitHubId_DESC
  facebookId_ASC
  facebookId_DESC
  twitterId_ASC
  twitterId_DESC
  gmailId_ASC
  gmailId_DESC
  private_ASC
  private_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  set_private: Boolean!
  username: String!
  password: String!
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  private: Boolean!
  confirmed: Boolean!
  online: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
}

enum UserRole {
  ADMIN
  MODERATOR
  USER
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  set_private: Boolean
  set_private_not: Boolean
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  gitHubId: ID
  gitHubId_not: ID
  gitHubId_in: [ID!]
  gitHubId_not_in: [ID!]
  gitHubId_lt: ID
  gitHubId_lte: ID
  gitHubId_gt: ID
  gitHubId_gte: ID
  gitHubId_contains: ID
  gitHubId_not_contains: ID
  gitHubId_starts_with: ID
  gitHubId_not_starts_with: ID
  gitHubId_ends_with: ID
  gitHubId_not_ends_with: ID
  facebookId: ID
  facebookId_not: ID
  facebookId_in: [ID!]
  facebookId_not_in: [ID!]
  facebookId_lt: ID
  facebookId_lte: ID
  facebookId_gt: ID
  facebookId_gte: ID
  facebookId_contains: ID
  facebookId_not_contains: ID
  facebookId_starts_with: ID
  facebookId_not_starts_with: ID
  facebookId_ends_with: ID
  facebookId_not_ends_with: ID
  twitterId: ID
  twitterId_not: ID
  twitterId_in: [ID!]
  twitterId_not_in: [ID!]
  twitterId_lt: ID
  twitterId_lte: ID
  twitterId_gt: ID
  twitterId_gte: ID
  twitterId_contains: ID
  twitterId_not_contains: ID
  twitterId_starts_with: ID
  twitterId_not_starts_with: ID
  twitterId_ends_with: ID
  twitterId_not_ends_with: ID
  gmailId: String
  gmailId_not: String
  gmailId_in: [String!]
  gmailId_not_in: [String!]
  gmailId_lt: String
  gmailId_lte: String
  gmailId_gt: String
  gmailId_gte: String
  gmailId_contains: String
  gmailId_not_contains: String
  gmailId_starts_with: String
  gmailId_not_starts_with: String
  gmailId_ends_with: String
  gmailId_not_ends_with: String
  private: Boolean
  private_not: Boolean
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateManyDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  private: Boolean
  confirmed: Boolean
  online: Boolean
  role: UserRole
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  private: Boolean
  confirmed: Boolean
  online: Boolean
  role: UserRole
}

input UserUpdateManyWithoutBlockedUsersInput {
  create: [UserCreateWithoutBlockedUsersInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBlockedUsersInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBlockedUsersInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChannelsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFriend_requestsInput {
  create: [UserCreateWithoutFriend_requestsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriend_requestsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriend_requestsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriendsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriendsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  update: UserUpdateWithoutOwned_channelsDataInput
  upsert: UserUpsertWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  update: UserUpdateWithoutOwned_teamsDataInput
  upsert: UserUpsertWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBlockedUsersDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutChannelsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFriend_requestsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFriendsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_channelsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_teamsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTeamsDataInput {
  email: String
  notifications: NotificationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
  gmailId: String
  directMessages: CommentUpdateManyInput
  avatar_url: FileUpdateOneRequiredInput
  private: Boolean
  blockedUsers: UserUpdateManyWithoutBlockedUsersInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutBlockedUsersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBlockedUsersDataInput!
}

input UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChannelsDataInput!
}

input UserUpdateWithWhereUniqueWithoutFriend_requestsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriend_requestsDataInput!
}

input UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriendsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutOwned_channelsInput {
  update: UserUpdateWithoutOwned_channelsDataInput!
  create: UserCreateWithoutOwned_channelsInput!
}

input UserUpsertWithoutOwned_teamsInput {
  update: UserUpdateWithoutOwned_teamsDataInput!
  create: UserCreateWithoutOwned_teamsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutBlockedUsersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBlockedUsersDataInput!
  create: UserCreateWithoutBlockedUsersInput!
}

input UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChannelsDataInput!
  create: UserCreateWithoutChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutFriend_requestsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriend_requestsDataInput!
  create: UserCreateWithoutFriend_requestsInput!
}

input UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  set_private: Boolean
  set_private_not: Boolean
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  gitHubId: ID
  gitHubId_not: ID
  gitHubId_in: [ID!]
  gitHubId_not_in: [ID!]
  gitHubId_lt: ID
  gitHubId_lte: ID
  gitHubId_gt: ID
  gitHubId_gte: ID
  gitHubId_contains: ID
  gitHubId_not_contains: ID
  gitHubId_starts_with: ID
  gitHubId_not_starts_with: ID
  gitHubId_ends_with: ID
  gitHubId_not_ends_with: ID
  facebookId: ID
  facebookId_not: ID
  facebookId_in: [ID!]
  facebookId_not_in: [ID!]
  facebookId_lt: ID
  facebookId_lte: ID
  facebookId_gt: ID
  facebookId_gte: ID
  facebookId_contains: ID
  facebookId_not_contains: ID
  facebookId_starts_with: ID
  facebookId_not_starts_with: ID
  facebookId_ends_with: ID
  facebookId_not_ends_with: ID
  twitterId: ID
  twitterId_not: ID
  twitterId_in: [ID!]
  twitterId_not_in: [ID!]
  twitterId_lt: ID
  twitterId_lte: ID
  twitterId_gt: ID
  twitterId_gte: ID
  twitterId_contains: ID
  twitterId_not_contains: ID
  twitterId_starts_with: ID
  twitterId_not_starts_with: ID
  twitterId_ends_with: ID
  twitterId_not_ends_with: ID
  gmailId: String
  gmailId_not: String
  gmailId_in: [String!]
  gmailId_not_in: [String!]
  gmailId_lt: String
  gmailId_lte: String
  gmailId_gt: String
  gmailId_gte: String
  gmailId_contains: String
  gmailId_not_contains: String
  gmailId_starts_with: String
  gmailId_not_starts_with: String
  gmailId_ends_with: String
  gmailId_not_ends_with: String
  directMessages_every: CommentWhereInput
  directMessages_some: CommentWhereInput
  directMessages_none: CommentWhereInput
  avatar_url: FileWhereInput
  private: Boolean
  private_not: Boolean
  blockedUsers_every: UserWhereInput
  blockedUsers_some: UserWhereInput
  blockedUsers_none: UserWhereInput
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  friend_requests_every: UserWhereInput
  friend_requests_some: UserWhereInput
  friend_requests_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  owned_teams_every: TeamWhereInput
  owned_teams_some: TeamWhereInput
  owned_teams_none: TeamWhereInput
  owned_channels_every: ChannelWhereInput
  owned_channels_some: ChannelWhereInput
  owned_channels_none: ChannelWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
  gitHubId: ID
  facebookId: ID
  twitterId: ID
}
`