import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data } = await client
    .from("notes")
    .select()
    .order("id", { ascending: false });
  return { notes: data };
});
