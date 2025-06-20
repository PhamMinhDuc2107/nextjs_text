interface IDepartment {
   id: number,
   name: string,
   parent_id: number| null,
   parent?: IDepartment | null
   level?: number
}
interface IDepartmentPayload {
   name: string;
   parent_id: number | null;
   id?: number | null;
}

