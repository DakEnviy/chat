import { Response } from 'express';

import { GraphQLModuleWithMiddlewares } from '../../../utils/graphql-modules-middlewares';
import { ApolloContext } from '../../../interfaces/apollo';
import { User } from '../../models/User';
import ScalarsModule from '../scalars';
import schema from './schema.graphql';
import { resolvers } from './resolvers';

export interface UsersContext {
    res?: Response;
    user?: User;
}

const UsersModule = new GraphQLModuleWithMiddlewares<{}, ApolloContext, UsersContext>({
    name: 'users',
    imports: [ScalarsModule],
    typeDefs: schema,
    resolvers,
    context: ({ res, user }) => ({ res, user }),
});

export default UsersModule;
