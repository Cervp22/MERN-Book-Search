import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email:String!, $password:String!){
        login($email:String!, $password:String!){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation adduser($username:String!, $email:String!, $password:String!){
        addUser($username:String!, $email:String!, $password:String!){
                token
                user{
                    _id
                    username
                }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData:BookInput!){
        saveBook(bookData: $bookData){
            _id
            username
            email
            savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
    }
  }
`;