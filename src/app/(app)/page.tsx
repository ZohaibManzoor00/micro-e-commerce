import { getQueryClient, trpc } from "@/trpc/server";

export default async function Example() {
  const queryClient = getQueryClient();
  const users = await queryClient.fetchQuery(trpc.users.getMany.queryOptions());
  const projects = await queryClient.fetchQuery(
    trpc.projects.getAll.queryOptions(),
  );

  return (
    <>
      <p>Hello</p>
      {JSON.stringify(users, null, 2)}
      {JSON.stringify(projects, null, 2)}
    </>
  );
}
