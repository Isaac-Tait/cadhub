import type { FindSearchQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSearchQuery($input: String!) {
    projects(input: $input) {
      id
      title
      description
      code
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ search }: CellSuccessProps<FindSearchQuery>) => {
  return <div>{JSON.stringify(search)}</div>
}
