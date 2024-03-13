import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        })

    }),

});

//Esto exporta un custom hook que se puede usar para hacer la consulta
//el nombre del hook es useGetTodosQuery es por convencion de redux toolkit
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;