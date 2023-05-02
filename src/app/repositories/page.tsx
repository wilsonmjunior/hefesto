import { getSearchIssues } from "@/api/repositories"
import { RepoList } from "@/components/pages/repositories/List"
import { getPageProps, SearchParamsType } from "@/utils/pagination";

type RepositoriesProps = {
  searchParams: SearchParamsType;
}

export default async function Repositories({ searchParams }: RepositoriesProps) {
  const repos = await getSearchIssues('')

  const { page, size } = getPageProps({
    searchParams,
  })

  return (
    <RepoList
      items={repos}
      paginationProps={{
        currentPage: page,
        pathBase: 'repositories',
        rowsPerPage: size,
        totalPages: 10,
      }}
    />
  )
}
